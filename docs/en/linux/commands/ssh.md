# `ssh` #

- **Purpose:** The `ssh` (Secure Shell) command provides a secure way to access a remote machine over an unsecured network. It encrypts all transmitted data, including login credentials, ensuring confidentiality and integrity. It's commonly used for remote administration, file transfers, and tunneling.
- **Usage:** `ssh [OPTIONS] <USER>@<HOST> [COMMAND]`

## Basic Usage ##

Connect to the specified remote `host` as the specified `user`:

```bash
ssh <USER>@<HOST>
```

Specify a port number to connect to on the remote host

```bash
ssh -p <port> <USER>@<HOST>
```

Use a specified private key file for authentication:

```bash
ssh -i <KEYFILE> <USER>@<HOST>
```

Enable verbose mode for debugging connection issues:

```bash
ssh -v <USER>@<HOST>
```

Set up local port forwarding:

```bash
ssh -L <LOCAL PORT>:<REMOTE HOST>:<REMOTE PORT> <USER>@<HOST>
```

Skip host key verification (use with caution!):

```bash
ssh -o "StrictHostKeyChecking=no" <USER>@<HOST>
```

## Options ##

- `-p` / `<port>` — Connect to a specific port (default is 22).
- `-i <identity_file>` — Use a specific private key for authentication.
- `-v` — Enable verbose mode (useful for debugging connection issues).
- `-L <LOCAL PORT>:<REMOTE HOST>:<REMOTE PORT>` — Set up local port forwarding (tunnel).
- `-R <server port>:<LOCAL HOST>:<LOCAL PORT>` — Set up remote port forwarding (tunnel).
- `-X` — enable X11 forwarding (for running graphical apps remotely).
- `-N` — Don't execute a remote command (useful for just forwarding ports).
- `-f` — Run SSH in the background.
- `-g` — Allow remote hosts to connect to local forwarded ports (default is `localhost`-only).
- `-4` / `-6` — Force IPv4 or IPv6.

## Shortcuts ##

### `ssh-copy-id` ###

Use `ssh-copy-id` to install your public key on a remote server:

This eliminates the need to enter a password on subsequent logins.

### `~/.ssh/config` ###

Create a `~/.ssh/config` file to save connection details:

```bash
cat <<SSH_CONFIG >> ~/.ssh/config
Host myserver
    Hostname <HOSTNAME>
    User root
    Port 22
    IdentityFile ~/.ssh/ssh_key
SSH_CONFIG
```

Then connect simply with:

```bash
ssh <HOSTNAME>
```

## FAQ ##

### How to Exit From Broken SSH Session? ###

Use <kbd>Enter</kbd> + <kbd>~</kbd> + <kbd>.</kbd>.

### How Do I Generate an SSH Key Pair? ###

Use the `ssh-keygen` command:

```bash
ssh-keygen -t rsa -b 4096
```

This creates a private key (`~/.ssh/id_rsa`) and a public key (`~/.ssh/id_rsa.pub`).

### What if I Get "Host Key Verification failed"? ###

This usually means the remote host's fingerprint has changed (for example, server reinstalled). Remove the old key from `~/.ssh/known_hosts`:

```bash
ssh-keygen -R 192.168.1.100
```

Then reconnect — you'll be prompted to accept the new fingerprint.

### How Can I Run a Command without Opening a Shell? ###

Append the command after the SSH invocation:

```bash
ssh alice@192.168.1.100 "ls -l /home/alice"
```

### Why Am I Getting "Permission Denied (publickey)"? ###

Possible causes:

- Your public key isn't installed on the server (`ssh-copy-id` can fix this).
- The server doesn't allow public key authentication (check `/etc/ssh/sshd_config` on the server).
- Permissions on `~/.ssh` or `~/.ssh/authorized_keys` are too open (should be `700` and `600` respectively).

### How Do I Copy Files Over SSH? ###

Use `scp` (based on SSH):

```bash
scp file.txt alice@192.168.1.100:/home/alice/
```

Or `rsync` for more advanced file synchronization:

```bash
rsync -avz file.txt alice@192.168.1.100:/home/alice/
```

### How to Forward Ports via SSH? ###

Port forwarding via SSH (also known as **SSH tunneling**) allows you to securely route network traffic through an encrypted SSH connection. There are three main types: **local**, **remote**, and **dynamic** port forwarding.

#### Local Port Forwarding (`-L`) ####

Forward a local port to a remote server's port (useful for accessing services on the remote network as if they were local):

##### Syntax of Local Port Forwarding #####

```bash
ssh -L <LOCAL PORT>:<destination host>:<destination port> <USER>@<ssh server>
```

##### Example of Local Port Forwarding #####

```bash
ssh -L 8080:localhost:80 user@remote-server.com
```

- This forwards your local port `8080` to port `80` on `remote-server.com`.
- Now, accessing `http://localhost:8080` in your browser will show the web server running on port `80` of the remote server.

##### Use Cases of Local Port Forwarding #####

- Accessing a web app on a remote server that's only available internally.
- Bypassing firewall restrictions.

#### Remote Port Forwarding (`-R`) ####

Expose a local service to the remote server (allow others on the remote network to access your local machine).

##### Syntax of Remote Port Forwarding #####

```bash
ssh -R <REMOTE PORT>:<destination host>:<destination port> <USER>@<ssh server>
```

##### Example of Remote Port Forwarding #####

```bash
ssh -R 8080:localhost:3000 user@remote-server.com
```

- This makes your local service on port `3000` accessible via port `8080` on the remote server.
- Someone on `remote-server.com` can access your local app via `http://localhost:8080`.

##### Use Cases of Remote Port Forwarding #####

- Sharing a local development server with a colleague.
- Testing webhooks on your local machine.

#### Dynamic Port Forwarding (SOCKS Proxy, `-D`) ####

Create a SOCKS proxy to route arbitrary traffic through the SSH server (like a lightweight VPN).

##### Syntax of Dynamic Port Forwarding #####

```bash
ssh -D <local_socks_port> <USER>@<ssh_server>
```

##### Example of Dynamic Port Forwarding #####

```bash
ssh -D 1080 user@remote-server.com
```

- This sets up a SOCKS proxy on your local port `1080`.
- Configure your browser/app to use `localhost:1080` as a SOCKS5 proxy.
- All traffic will be routed through the remote server, encrypting it and masking your IP.

##### Use Cases of Dynamic Port Forwarding #####

- Secure browsing on untrusted networks.
- Accessing geo-restricted content.
