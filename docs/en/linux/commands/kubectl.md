# `kubectl` #

- **Purpose:** `kubectl` is the command-line tool for interacting with Kubernetes clusters. It allows you to deploy applications, inspect and manage cluster resources, view logs, and perform administrative tasks on a Kubernetes environment.
- **Usage:** `kubectl [command] [TYPE] [NAME] [flags]`, where:
    - `command` — specifies the operation (for example, `get`, `create`, `delete`).
    - `TYPE` — the resource type (for example, `pod`, `service`, `deployment`).
    - `NAME` — the name of the resource (optional, depending on the command).
    - `flags` — additional options (for example, `-n` for namespace, `-o` for output format).

## Basic Usage ##

List all pods in the default namespace:

```bash
kubectl get pods

```

Get detailed information about a specific pod:

```bash
kubectl describe pod my-pod-name

```

Execute a command inside a running container:

```bash
kubectl exec -it my-pod-name -- /bin/sh

```

Create deployment of Nginx:

```bash
kubectl create deployment nginx --image=nginx

```

### Creating Objects ###

Create an object from a file

```bash
kubectl apply -f ./my-manifest.yaml

```

Launch a single instance of Nginx:

```bash
kubectl create deployment nginx --image=nginx

```

### Viewing Information ###

List all pods and show which nodes they are on:

```bash
kubectl get pods -o wide

```

View pod information such as start time, number and reasons for restarts, QoS class, etc:

```bash
kubectl describe pods my-pod

```

View logs in real time:

```bash
kubectl logs -f my-pod

```

Display resource utilization information for pods:

```bash
kubectl top pods

```

### Modifying Objects ###

Edit the .YAML manifest of the pod:

```bash
kubectl edit pod my-pod

```

### Deleting Objects ###

Delete the pod:

```bash
kubectl delete pod my-pod

```

### Accessing the Pod's Command Shell (going inside) ###

Enter to container using `sh`:

```bash
kubectl exec -it -n namespace-name podname sh

```

### Copying a File to a Pod ###

Copy a file from the Pod:

```bash
kubectl cp {{namespace}}/{{podname}}:path/to/directory /local/path

```

Copy a file to the Pod:

```bash
kubectl cp /local/path namespace/podname:path/to/directory

```

### Context ###

List available contexts:

```bash
kubectl config get-contexts

```

Show current context:

```bash
kubectl config current-context

```

Use different context:

```bash
kubectl config use-context my-cluster-name

```

### Explanation ##

Explain some resource:

```bash
kubectl explain <resource>

```

Get basic info about a Pod:

```bash
kubectl explain pod

```

Explore nested fields:

```bash
kubectl explain pod.spec.containers

```

Go deeper into container fields:

```bash
kubectl explain pod.spec.containers.resources

```

### Miscellaneous ###

Discover available resources:

```bash
kubectl api-resources

```

## Options ##

### Commands ###

- `get` — List resources.
- `create` — Create a resource from a file or stdin.
- `apply` — Apply a configuration change (creates or updates).
- `delete` — Delete a resource.
- `logs` — Print the logs for a container in a pod.
- `describe` — Show detailed state of a resource.
- `scale` — Set a new size for a Deployment, ReplicaSet, or ReplicationController.
- `rollout` — Manage the rollout of a resource.

### Flags ###

- `-n <namespace>` / `--namespace=<namespace>` — Operate in a specific namespace.
- `-o <output>` / `--output=<output>` — Output format (for example, `yaml`, `json`, `wide`).
- `-A` / `--all-namespaces` — List resources across all namespaces.
- `-l <label>` / `--selector=<label>` — Filter by label.
- `--dry-run` — Preview the result without applying changes.

## Shortcuts ##

Shortcuts for resource types (case-insensitive):

- `po` → `pod`
- `svc` → `service`
- `deploy` → `deployment`
- `rs` → `replicaset`
- `sts` → `statefulset`
- `cm` → `configmap`
- `sec` → `secret`
- `ns` → `namespace`

### Alias Example ###

Instead of `kubectl get pods`, you can use:

```bash
kubectl get po

```

## FAQ ##

### How Do I Switch Between Kubernetes Contexts? ###

Use `kubectl config use-context <context-name>`. To list available contexts:

```bash
kubectl config get-contexts

```

### How Can I View Logs for a Specific Container in a Pod? ###

Use the `-c` flag to specify the container:

```bash
kubectl logs <pod-name> -c <container-name>

```

### How Do I Get YAML Output for a Resource? ###

Add the `-o yaml` flag:

```bash
kubectl get pod <pod-name> -o yaml

```

### How Do I Delete a Resource Gracefully? ###

By default, `kubectl delete` waits for termination. To force immediate deletion:

```bash
kubectl delete pod <pod-name> --force --grace-period=0

```

### How Do I Apply a YAML Configuration File? ###

Use `kubectl apply -f <filename>.yaml`. Example:

```bash
kubectl apply -f deployment.yaml

```

### How Do I Check the Status of a Deployment? ###

```bash
kubectl rollout status deployment/<deployment-name>

```
