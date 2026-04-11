# `openstack` #

- **Purpose:** A command-line client for managing OpenStack clouds (computing, storage, networking, and identity).
- **Usage:** `openstack [GLOBAL OPTIONS] <COMMAND> [COMMAND OPTIONS]`

## Basic Usage ##

List all running instances (servers):

```bash
openstack server list
```

Create a new server:

```bash
openstack server create --flavor m1.small --image ubuntu-22.04 --key-name mykey my-instance
```

### Compute (Nova) ###

#### Server Management ####

List servers with specific columns:

```bash
openstack server list -c ID -c Name -c Status -c Networks
```

Show detailed server information:

```bash
openstack server show <SERVER_ID_OR_NAME>
```

Start/Stop/Reboot a server:

```bash
openstack server start <SERVER>
openstack server stop <SERVER>
openstack server reboot <SERVER>
```

Delete a server:

```bash
openstack server delete <SERVER>
```

Pause/Unpause or Suspend/Resume:

```bash
openstack server pause <SERVER>
openstack server unpause <SERVER>
openstack server suspend <SERVER>
openstack server resume <SERVER>
```

Lock/Unlock (prevent unauthorized actions):

```bash
openstack server lock <SERVER>
openstack server unlock <SERVER>
```

#### Server Console & Access ####

Get VNC console URL:

```bash
openstack console url show <SERVER>
```

Get serial console (for headless instances):

```bash
openstack console log show <SERVER>
```

Create and download a keypair:

```bash
openstack keypair create --private-key mykey.pem mykey > mykey.pem
chmod 600 mykey.pem
```

Import existing public key:

```bash
openstack keypair create --public-key ~/.ssh/id_rsa.pub mykey
```

#### Flavors & Images ####

List available flavors (VM sizes):

```bash
openstack flavor list
```

Show flavor details:

```bash
openstack flavor show <FLAVOR>
```

List available images:

```bash
openstack image list
```

Show image details:

```bash
openstack image show <IMAGE>
```

Upload a new image:

```bash
openstack image create --disk-format qcow2 --container-format bare --file /path/to/image.qcow2 my-image
```

### Volume Management (Cinder) ###

List volumes:

```bash
openstack volume list
```

Create a volume:

```bash
openstack volume create --size 100 my-volume
```

Attach volume to server:

```bash
openstack server add volume <SERVER> <VOLUME>
```

Detach volume:

```bash
openstack server remove volume <SERVER> <VOLUME>
```

Extend volume:

```bash
openstack volume set --size 200 <VOLUME>
```

Create volume snapshot:

```bash
openstack volume snapshot create --volume <VOLUME> <SNAPSHOT_NAME>
```

### Networking (Neutron) ###

#### Network & Subnet Management ####

List networks:

```bash
openstack network list
```

Show network details:

```bash
openstack network show <NETWORK>
```

Create a network:

```bash
openstack network create --project <PROJECT> my-network
```

Create a subnet:

```bash
openstack subnet create --network my-network --subnet-range 192.168.1.0/24 --gateway 192.168.1.1 my-subnet
```

Delete network and subnet:

```bash
openstack subnet delete <SUBNET>
openstack network delete <NETWORK>
```

#### Security Groups ####

List security groups:

```bash
openstack security group list
```

Create a security group:

```bash
openstack security group create my-sg
```

Add ingress rule (allow incoming traffic):

```bash
openstack security group rule create --proto tcp --dst-port 22 my-sg  # SSH
openstack security group rule create --proto tcp --dst-port 80 my-sg  # HTTP
openstack security group rule create --proto tcp --dst-port 443 my-sg # HTTPS
openstack security group rule create --proto icmp my-sg               # Ping
```

Add egress rule (allow outgoing traffic):

```bash
openstack security group rule create --direction egress --proto tcp --dst-port 443 my-sg
```

Delete a rule:

```bash
openstack security group rule delete <RULE ID>
```

#### Floating IPs ####

List floating IPs:

```bash
openstack floating ip list
```

Allocate a new floating IP from external network:

```bash
openstack floating ip create <EXTERNAL_NETWORK>
```

Associate floating IP to server:

```bash
openstack server add floating ip <SERVER> <FLOATING_IP>
```

Disassociate floating IP:

```bash
openstack server remove floating ip <SERVER> <FLOATING_IP>
```

Release floating IP:

```bash
openstack floating ip delete <FLOATING_IP>
```

#### Ports ####

List ports:

```bash
openstack port list
```

Show port details (including IP addresses):

```bash
openstack port show <PORT>
```

Create a port with fixed IP:

```bash
openstack port create --network my-network --fixed-ip subnet=my-subnet,ip-address=192.168.1.10 my-port
```

### Identity (Keystone) ###

#### Projects & Users ####

List projects:

```bash
openstack project list
```

Create a project:

```bash
openstack project create --description "DevOps Project" devops-project
```

List users:

```bash
openstack user list
```

Create a user:

```bash
openstack user create --password <PASSWORD> --project <PROJECT> <USERNAME>
```

Set/unset admin role for user:

```bash
openstack role add --project <PROJECT> --user <USER> admin
openstack role remove --project <PROJECT> --user <USER> admin
```

#### Roles & Service Catalog ####

List roles:

```bash
openstack role list
```

List available services (service catalog):

```bash
openstack catalog list
```

Show endpoints for a service:

```bash
openstack catalog show <SERVICE>
```

#### Tokens ####

Get current token:

```bash
openstack token issue
```

Revoke a token:

```bash
openstack token revoke <TOKEN_ID>
```

### Load Balancer (Octavia) ###

List load balancers:

```bash
openstack loadbalancer list
```

Create a load balancer:

```bash
openstack loadbalancer create --name my-lb --vip-subnet <SUBNET_ID>
```

Create a listener:

```bash
openstack loadbalancer listener create --protocol HTTP --protocol-port 80 my-lb
```

Create a pool:

```bash
openstack loadbalancer pool create --name my-pool --lb-algorithm ROUND_ROBIN --listener <LISTENER>
```

Add members to pool:

```bash
openstack loadbalancer member create --subnet <SUBNET> --address 192.168.1.10 --protocol-port 80 my-pool
```

Create health monitor:

```bash
openstack loadbalancer healthmonitor create --delay 5 --timeout 3 --max-retries 4 my-pool
```

Show load balancer status tree:

```bash
openstack loadbalancer status show <LB_ID>
```

### Container Infrastructure (Magnum) ###

List cluster templates:

```bash
openstack coe cluster-template list
```

List clusters:

```bash
openstack coe cluster list
```

Create a Kubernetes cluster:

```bash
openstack coe cluster create --cluster-template <TEMPLATE> --keypair <KEYPAIR> --node-count 3 my-k8s-cluster
```

Scale cluster:

```bash
openstack coe cluster resize --node-count 5 my-k8s-cluster
```

Get cluster config (`kubeconfig`):

```bash
openstack coe cluster config my-k8s-cluster
```

### Monitoring & Metrics ###

#### Server Metrics ####

Get server usage statistics:

```bash
openstack server usage show <SERVER>
```

List all server metrics (if telemetry is enabled):

```bash
openstack metrics measure list --resource <SERVER ID>
```

### Alarms (Aodh) ###

List alarms:

```bash
openstack alarm list
```

Create CPU alarm:

```bash
openstack alarm create --type threshold --name high-cpu --metric cpu_util --threshold 80 --comparison-operator gt --evaluation-periods 3 --period 60 --statistic avg
```

## Practical DevOps Workflows ##

### Export Server List for Automation ###

Export as JSON for scripting:

```bash
openstack server list -f json > servers.json
```

Export specific columns as CSV:

```bash
openstack server list -c ID -c Name -c Status -f csv > servers.csv
```

Get only server IDs (for loops):

```bash
openstack server list -c ID -f value
```

### Batch Operations ###

Start all stopped servers:

```bash
for server in $(openstack server list --status SHUTOFF -c ID -f value); do
    openstack server start $server
done
```

Add security group to multiple servers:

```bash
for server in server1 server2 server3; do
    openstack server add security group $server my-sg
done
```

Tag servers for organization:

```bash
openstack server set --tag environment=production --tag team=devops <SERVER>
```

List servers by tag:

```bash
openstack server list --tag environment=production
```

### Backup Strategy ###

Create server backup (image):

```bash
openstack server image create --name backup-$(date +%Y%m%d) <SERVER>
```

Create volume snapshot for backup:

```bash
openstack volume snapshot create --volume <VOLUME> --description "Daily backup" backup-$(date +%Y%m%d)
```

List all backups:

```bash
openstack image list --tag backup=true
openstack volume snapshot list
```

### Resource Cleanup ###

Delete all servers in a project _(DANGER!)_:

```bash
openstack server list -c ID -f value | xargs -I {} openstack server delete {}
```

Delete unused floating IPs:

```bash
openstack floating ip list -c ID -f value | xargs -I {} openstack floating ip delete {}
```

Delete old images (older than 30 days):

```bash
openstack image list --sort createdAt:desc | tail -n +11 | awk '{print $2}' | xargs -I {} openstack image delete {}
```

## Options ##

- `-h, --help` — Show help message and exit.
- `--debug` — Enable debug mode (shows HTTP requests and responses).
- `--os-cloud <CLOUD NAME>` — Named cloud configuration from `clouds.yaml` or environment variables.
- `--os-auth-url <URL>` — Authentication URL for the OpenStack Identity service (Keystone).
- `--os-project-name <NAME>` — Project name to scope to.
- `--os-username <NAME>` — Username for authentication.
- `--os-password <PASSWORD>` — User password.
- `-f <FORMAT>` / `--format <FORMAT>` — Output format (choices: `csv`, `json`, `table`, `value`, `yaml`).
- `-c <COLUMN>` / `--column <COLUMN>` — Specify specific columns to display in the output.

## Shortcuts ##

- `OS_CLOUD` — Environment variable to specify the cloud configuration name (shortcut for `--os-cloud`).
- `OS_AUTH_URL` — Environment variable shortcut for the authentication URL.
- `OS_USERNAME` — Environment variable shortcut for the username.
- `OS_PASSWORD` — Environment variable shortcut for the password.
- `source openrc` — Command used to load environment variables from a script (rc file) for quick authentication setup.

## FAQ ##

### How Do I Authenticate without Typing Credentials Every Time? ###

You can use a `clouds.yaml` configuration file or an OpenStack RC file. Place `clouds.yaml` in `~/.config/openstack/` or `/etc/openstack/`. Alternatively, download the RC file from your OpenStack dashboard and run `source <FILENAME>.sh` to load your credentials into the current shell session as environment variables.

### How Can I See the Raw API Request and Response? ###

Use the `--debug` flag with any command. This is extremely useful for troubleshooting why a command failed, as it prints the full HTTP request sent to the API and the detailed error response received.

### How Do I Get a List of Available Commands? ###

Run `openstack --help`. To see commands related to a specific service, you can use the command group, for example, `openstack server --help` lists all compute-related commands.

### Why Am I Getting an SSL Certificate Verify Failed Error? ###

This usually happens when the OpenStack endpoint uses a self-signed certificate or a certificate signed by an internal CA not recognized by your system. You can temporarily bypass this by exporting the environment variable `export OS_CACERT=/path/to/ca-bundle.crt` or by adding `verify: False` to your `clouds.yaml` file (though the latter is insecure).

## Configuration Files ##

### `clouds.yaml` Example ###

```yaml
clouds:
  mycloud:
    auth:
      auth_url: https://openstack.example.com:5000/v3
      username: "devops-user"
      password: "secure-password"
      project_name: "devops-project"
      project_domain_name: "Default"
      user_domain_name: "Default"
    region_name: "RegionOne"
    interface: "public"
    verify: true  # Set to false for self-signed certs (insecure)
```

### Openrc Example ###

```bash
#!/usr/bin/env bash
export OS_AUTH_URL=https://openstack.example.com:5000/v3
export OS_IDENTITY_API_VERSION=3
export OS_PROJECT_NAME=devops-project
export OS_PROJECT_DOMAIN_NAME=Default
export OS_USER_DOMAIN_NAME=Default
export OS_USERNAME=devops-user
export OS_PASSWORD=secure-password
export OS_REGION_NAME=RegionOne
```

## Troubleshooting ##

### Troubleshooting Commands ###

Check service health:

```bash
openstack compute service list
openstack network agent list
openstack volume service list
```

Check hypervisor status:

```bash
openstack hypervisor list
openstack hypervisor show <HYPERVISOR>
```

View server events:

```bash
openstack server event list <SERVER>
```

Check quota usage:

```bash
openstack quota show
```

Set quota limits:

```bash
openstack quota set --instances 50 --cores 200 --ram 512000 <PROJECT>
```

### No Valid Host Was Found ###

- **Cause:** Insufficient resources or wrong flavor.
- **Solution:** Check hypervisor capacity, try smaller flavor.

### Port Has No IP Address ###

- **Cause:** Subnet exhausted or misconfigured.
- **Solution:** Check subnet range, add more IPs.

### Quota Exceeded ###

- **Cause:** Resource limit reached.
- **Solution:** Request quota increase or clean up resources.

### Network Requires Fixed IP ###

- **Cause:** Network needs specific subnet.
- **Solution:** Specify `--nic` with `subnet-id`.

### Image Not Found ###

- **Cause:** Wrong image name / ID or permissions.
- **Solution:** Check image list, verify project access.

### Connection Refused ###

- **Cause:** Wrong auth URL or network issue.
- **Solution:** Verify `OS_AUTH_URL` and network connectivity

## Best Practices ##

1. **Use `clouds.yaml`** — Store credentials securely with proper file permissions (`chmod 600`).
2. **Tag resources** — Use tags for cost allocation and automated management.
3. **Use floating IPs sparingly** — They're limited; use security groups and internal networking when possible.
4. **Snapshot before changes** — Always create backups before major operations.
5. **Automate with scripts** — Use `-f json` or `-f value` for scripting.
6. **Monitor quotas** — Regularly check `openstack quota show` to avoid surprises.
7. **Use security groups** — Never rely solely on instance-level firewalls.
8. **Enable debug logging** — Use `--debug` or `OS_DEBUG=1` for troubleshooting
