# `systemctl` #

- **Purpose:** The `systemctl` command is a system and service manager used primarily in Linux distributions that utilize systemd. It controls the systemd system and service manager, allowing users to start, stop, enable, disable, and check the status of system services and units. It serves as a central hub for managing system processes, services, and the boot process.
- **Usage:** `systemctl [OPTIONS] COMMAND [UNIT...]`

## Basic Usage ##

Check status of a service:

```bash
systemctl status apache2

```

Start a service:

```bash
sudo systemctl start apache2

```

Stop a service:

```bash
sudo systemctl stop apache2

```

Restart a service:

```bash
sudo systemctl restart apache2

```

Enable a service (start at boot):

```bash
sudo systemctl enable apache2

```

Disable a service (prevent start at boot):

```bash
sudo systemctl disable apache2

```

Check if a service is enabled:

```bash
systemctl is-enabled apache2

```

Reload service configuration without stopping:

```bash
sudo systemctl reload apache2

```

## Options ##

- `--user` — Execute systemctl command for the user session instead of system
- `-f` / `--force` — When used with enable, overrides conflicting presets
- `--now` — When used with enable/disable, starts/stops the unit right away
- `-H` / `--host` — Execute the command on a remote host
- `--type` — Filter the list of units by type (service, socket, timer, and so on)
- `--all` — Show all loaded units regardless of state
- `-l` / `--full` — Don't ellipsize output, show everything
- `--state` — Filter by unit state (running, exited, and so on)

## Shortcuts ##

Common systemctl operations:

```bash
# View all active services #
systemctl list-units --type=service --state=active

# Show failed services #
systemctl --failed

# List all services (active and inactive) #
systemctl list-units --type=service --all

# Mask a service (prevent it from being started) #
sudo systemctl mask service-name

# Unmask a service #
sudo systemctl unmask service-name

# Reload systemd daemon after unit file changes #
sudo systemctl daemon-reload

# Check system load average #
systemctl list-jobs

# Enable and start in one command #
sudo systemctl enable --now apache2

```

## FAQ ##

### What's the Difference Between Start and Enable? ###

- `start` - Starts the service immediately but won't start it automatically at boot
- `enable` - Configures the service to start automatically at boot, but doesn't start it now
- Use `--now` with enable to both enable and start: `sudo systemctl enable --now service`

### How Do I View Service Logs? ###

Use journalctl to view logs for a specific service:

```bash
journalctl -u apache2.service

```

### How Do I Check if a Service Is Running? ###

Check the status of a specific service:

```bash
systemctl status apache2

```

Or check if it's running specifically:

```bash
systemctl is-active apache2

```

### How Do I List All Available Services? ###

List all units (including services):

```bash
systemctl list-units --type=service

```

Or to see all installed service files:

```bash
systemctl list-unit-files --type=service

```

### What's the Difference Between Systemd and SysV Init? ###

- `systemd` - Modern init system with dependency tracking, service supervision, and parallel startup
- `SysV init` - Traditional init system using numbered runlevel scripts in /etc/rc.d/
- `systemctl` - Used for systemd
- `service` and `chkconfig` - Used for SysV init
