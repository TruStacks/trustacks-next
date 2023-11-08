package argocd

import (
	"context"
	"strings"

	"dagger.io/dagger"
	"github.com/mitchellh/mapstructure"
	"github.com/trustacks/trustacks/pkg/engine"
	"github.com/trustacks/trustacks/pkg/plan"
	"gopkg.in/yaml.v2"
)

// extraOptions returns optional global command options dependent on
// parameters in the declarative configuration.
func extraGlobalOptions(config *plan.Config) []string {
	args := []string{}
	if config.ArgoCD.Insecure {
		args = append(args, "--insecure")
	}
	if config.ArgoCD.GRPCWeb {
		args = append(args, "--grpc-web")
	}
	return args
}

// getArgoApplicationInfo gets the argo application manifest path and
// the application metadata name from the manifest.
func getArgoApplicationInfo(container *dagger.Container) (string, string, error) {
	container = container.WithExec([]string{"grep", "-r", "argoproj.io/v1alpha1"})
	stdout, err := container.Stdout(context.Background())
	if err != nil {
		return "", "", err
	}
	appSpecPath := strings.Split(strings.Split(stdout, "\n")[0], ":")[0]
	container = container.WithExec([]string{"cat", appSpecPath})
	stdout, err = container.Stdout(context.Background())
	if err != nil {
		return "", "", err
	}
	var spec ArgoCDApplicationSpec
	if err := yaml.Unmarshal([]byte(stdout), &spec); err != nil {
		return "", "", err
	}
	return appSpecPath, spec.Metadata.Name, nil
}

// argocdSync is an action that creates and syncs an argo cd
// application to a kubernetes cluster.
var argocdSync = &plan.Action{
	Name:        "argocdSync",
	DisplayName: "ArgoCD Sync",
	Description: "Sync the ArgoCD application with the source repo.",
	Image:       func(_ *plan.Config) string { return "argoproj/argocd" },
	Stage:       plan.PreleaseStage,
	Script: func(container *dagger.Container, inputs map[string]interface{}, utils *plan.ActionUtilities) error {
		var err error
		args := struct {
			ARGOCD_SERVER     string
			ARGOCD_AUTH_TOKEN string
		}{}
		if err := mapstructure.Decode(inputs, &args); err != nil {
			return err
		}
		appSpecPath, appName, err := getArgoApplicationInfo(container)
		if err != nil {
			return err
		}
		extraOpts := extraGlobalOptions(utils.GetConfig())
		container = container.WithSecretVariable("ARGOCD_AUTH_TOKEN", utils.SetSecret("argocdAuthToken", args.ARGOCD_AUTH_TOKEN))
		container = container.WithEnvVariable("ARGOCD_SERVER", args.ARGOCD_SERVER)
		container = container.WithExec(append([]string{"argocd", "app", "create", "-f", appSpecPath, "--upsert"}, extraOpts...))
		_, err = container.WithExec(append([]string{"argocd", "app", "sync", appName}, extraOpts...)).Stdout(context.Background())
		return err
	},
	Inputs: []string{
		string(plan.ArgoCDServer),
		string(plan.ArgoCDAuthToken),
	},
}

func init() {
	engine.RegisterPatternMatches([]engine.PatternMatch{
		{Kind: engine.FilePatternMatch, Pattern: ".*.yaml"},
	})
	engine.RegisterAdmissionResolver(
		plan.ActionSpec{
			Name:        argocdSync.Name,
			DisplayName: "ArgoCD Sync",
			Description: "Sync the ArgoCD application with the source repo.",
		},
		[]engine.Fact{ArgoCDApplicationExistsFact},
		nil,
		[]string{
			string(plan.ArgoCDServer),
			string(plan.ArgoCDAuthToken),
		},
	)
	plan.RegisterAction(argocdSync)
}
