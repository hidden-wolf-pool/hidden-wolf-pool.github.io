# `talosctl` #

- **Purpose:** `talosctl` is the command-line interface (CLI) tool for managing and interacting with Talos Linux clusters. It enables administrators to perform cluster operations, inspect node states, retrieve configuration data, and troubleshoot issues in a Talos environment. Talos Linux is a modern, secure, immutable Linux distribution designed specifically for Kubernetes, and talosctl provides the primary interface for managing these specialized nodes.
- **Usage:** `talosctl [GLOBAL OPTIONS] COMMAND [COMMAND OPTIONS] [ARGUMENTS...]`

## Basic Usage ##

Connect to and inspect a cluster:

```bash
talosctl -n <node> get machines

```

Apply a configuration to a node:

```bash
talosctl -n <node> apply -f config.YAML

```

Retrieve logs from a node:

```bash
talosctl -n <node> logs kubelet

```

Get cluster health information:

```bash
talosctl -n <node> health --cluster-endpoints=192.168.1.100

```

Bootstrap a cluster:

```bash
talosctl bootstrap -n <node>

```

Get configuration from a node:

```bash
talosctl -n <node> get mc

```

Download a kubeconfig file:

```bash
talosctl kubeconfig -n <node> --force

```

## Options ##

- `--nodes` — Specify target node(s) for the operation
- `--endpoints` — Specify the API server endpoints
- `--talosconfig` — Path to the Talos configuration file
- `--context` — Specify the configuration context to use
- `-f, --file` — Specify file to apply/configure
- `-o, --output` — Output format (YAML, json, table)
- `--force-with-data-loss` — Force operation even if it may cause data loss
- `--immediate` — Don't wait for graceful shutdown

## Shortcuts ##

Common talosctl operations:

```bash
# Get all machines in the cluster #
talosctl get machines

# Get Talos system logs #
talosctl logs --nodes NODE_IP SYSTEM_SERVICE

# Get Kubernetes API server logs #
talosctl logs --nodes CONTROL_PLANE_IP kube-apiserver

# Restart a service on a node #
talosctl service restart SERVICE_NAME --nodes NODE_IP

# Get configuration from a node #
talosctl get mc --nodes NODE_IP

# Patch a node's configuration #
talosctl patch mc --nodes NODE_IP -p '@spec@insert@disabled=true@'

# Reset a node to factory settings #
talosctl reset --nodes NODE_IP --graceful=false

# Upgrade Talos OS #
talosctl upgrade --nodes NODE_IP --image ghcr.io/siderolabs/installer:latest

```

## FAQ ##

### What Is Talosctl Used For? ###

`talosctl` is used to:

- Deploy and manage Talos Linux clusters
- Inspect and troubleshoot node states
- Apply configuration changes
- Retrieve system logs and metrics
- Perform upgrades and maintenance operations
- Interact with the Talos API

### How Do I Set Up Talosctl Configuration? ###

After cluster installation, get the talosconfig:

```bash
talosctl config endpoint <control-plane-ip>
talosctl config merge <talos-kubeconfig-file>

```

### What Is The Difference Between Endpoints And Nodes? ###

- `--nodes` - Specifies which nodes to operate on (affects where commands execute)
- `--endpoints` - Specifies where to connect the API to (where control plane runs)

### How Do I Troubleshoot Cluster Issues? ###

Common troubleshooting commands:

```bash
# Check cluster health #
talosctl health --nodes NODE_IP

# Get system logs #
talosctl logs --nodes NODE_IP SERVICE_NAME

# Get current configuration #
talosctl get mc --nodes NODE_IP

# Get cluster status #
talosctl get kubernetesnodes

```

### Can I Manage Multiple Clusters With Talosctl? ###

Yes, use different contexts:

```bash
talosctl config new-context CLUSTER_NAME --endpoint IP --nodes NODE_IPS
talosctl --context CLUSTER_NAME get machines

```
