# `helm` #

- **Purpose:** Helm is a package manager for Kubernetes that allows developers and operators to easily package, configure, and deploy applications and services on Kubernetes clusters. It uses charts (packages of pre-configured Kubernetes resources) to define, install, and upgrade complex Kubernetes applications. Helm simplifies Kubernetes application management by providing version control, parameterization, and lifecycle management for Kubernetes deployments.
- **Usage:** `helm [COMMAND] [CHART] [FLAGS...]`

## Basic Usage ##

Install a chart from Helm repository:

```bash
helm install my-release stable/nginx

```

List all releases:

```bash
helm list

```

Upgrade a release:

```bash
helm upgrade my-release stable/nginx --set image.tag=latest

```

Uninstall a release:

```bash
helm uninstall my-release

```

Search for charts in repositories:

```bash
helm search repo nginx

```

Add a chart repository:

```bash
helm repo add bitnami https://charts.bitnami.com/bitnami

```

Package a chart directory:

```bash
helm package my-chart/

```

## Options ##

- `--namespace` — Set the namespace for the release
- `--set` — Set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)
- `--values` — Specify values in a YAML file or a URL
- `--version` — Set the exact chart version to install
- `--dry-run` — Simulate an install
- `--debug` — Enable verbose output
- `--timeout` — Time to wait for any individual Kubernetes operation

## Shortcuts ##

Common Helm operations:

```bash
# Update helm repositories #
helm repo update

# See what would be installed without installing #
helm install my-release stable/mysql --dry-run --debug

# Install with custom values file #
helm install my-release -f values.yaml stable/wordpress

# List releases in a specific namespace #
helm list --namespace my-namespace

# Rollback to a previous release #
helm rollback my-release 1

# Get status of a release #
helm status my-release

# Template locally to verify chart #
helm template my-release stable/mysql

# Show chart information #
helm show chart stable/mysql

# Show chart values #
helm show values stable/mysql

```

## FAQ ##

### What Is a Helm Chart? ###

A Helm chart is a package that contains all the resource definitions necessary to run an application, tool, or service inside a Kubernetes cluster. Charts are stored in a predefined directory structure and contain templates that can be used to render Kubernetes manifests.

### How Do I Add Custom Helm Repositories? ###

Use the `repo add` command:

```bash
helm repo add repo-name https://repo-url.com
helm repo update

```

### How Do I Create My Own Helm Charts? ###

To create a new chart:

```bash
helm create my-chart

```

This creates a directory structure with template files that you can customize for your application.

### What Is The Difference Between Helm 2 and Helm 3? ###

Key differences include:

- Helm 3 removed Tiller (the in-cluster component)
- Helm 3 uses Kubernetes' built-in access control instead of Tiller
- Helm 3 releases are scoped to namespaces
- Helm 2 had a client-server architecture; Helm 3 is client-only

### How Do I Troubleshoot Helm Releases? ###

Common troubleshooting commands:

```bash
# Check release status #
helm status release-name

# Get manifest that was uploaded to Kubernetes #
helm get manifest release-name

# Get the values used for a release #
helm get values release-name

# Template locally to verify #
helm template release-name chart-name

```
