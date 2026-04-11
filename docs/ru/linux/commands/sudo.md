# `sudo` #

- **Purpose:** The `sudo` command (superuser do) allows permitted users to execute commands as the root user or another user as specified by the security policy. It provides a controlled mechanism for users to gain elevated privileges temporarily without sharing root passwords. Sudo logs all commands executed through it, providing an audit trail of privileged operations. It's configured via the `/etc/sudoers` file which defines which users can run which commands as which other users on which machines. Sudo enhances security by limiting the time sensitive operations are performed with elevated privileges and by maintaining logs of all privileged commands executed.
- **Usage:** `sudo [OPTIONS] [COMMAND]`

## Basic Usage ##

Run a command as root:

```bash
sudo command
```

Run a command as a specific user:

```bash
sudo -u username command
```

Execute a shell as root:

```bash
sudo -i
```

Execute a shell as a specific user:

```bash
sudo -u username -i
```

Run a command with a clean environment:

```bash
sudo -E command
```

Check the current sudo timestamp (how long since last password entry):

```bash
sudo -v
```

List allowed commands for current user:

```bash
sudo -l
```

Edit files with sudo rights:

```bash
sudoedit filename
```

## Options ##

- `-u` — Run command as specified user.
- `-i` — Run login shell as target user.
- `-s` — Run shell as specified by SHELL environment variable or system default.
- `-E` — Preserve user environment when running command.
- `-H` — Set HOME environment variable to target user's home directory.
- `-k` — Invalidate cached credentials.
- `-K` — Similar to -k but completely remove timestamp file.
- `-l` — List allowed commands for user.
- `-v` — Verify credentials without running a command.
- `-V` — Display version and built-in defaults.
- `-S` — Read password from standard input.
- `-n` — Non-interactive mode (don't prompt for password).
- `-A` — Read password from terminal (avoid password in background).
- `-p` — Customize password prompt.

## Shortcuts ##

Common sudo operations:

```bash
# Run a single command as root #
sudo ls /root

# Become root user interactively #
sudo -i

# Become another user #
sudo -u otheruser -i

# Run command in root environment #
sudo -i command

# Preserve environment while elevating privileges #
sudo -E env

# Run interactive command with elevated privileges #
sudo interactive_command

# List what commands the user can run #
sudo -l

# Verify sudo access without running command #
sudo -v

# Run command without password (if configured) #
sudo command

# Run command without changing environment #
sudo -E -H command

# Check sudo timestamp #
sudo -v && echo "Credentials still valid"

# Invalidate sudo timestamp #
sudo -k

# Run command with custom environment variable #
sudo VAR=value command

# Run shell with current user's environment but elevated privileges #
sudo -E -H /bin/bash

# Execute script with root privileges #
sudo /path/to/script.sh

# Mount filesystem requiring root privileges #
sudo mount /dev/sdX /mnt/point

# Update package list #
sudo apt update

# Install packages #
sudo apt install package_name

# Edit system files #
sudo nano /etc/config_file

# Restart system services #
sudo systemctl restart service_name

# Check sudo timeout settings #
sudo -l | grep -i timeout

# Run command with specific group ID #
sudo -g groupname command

# Run command as user with specific shell #
sudo -u username -s /bin/bash

# Run multiple commands as root #
sudo sh -c "command1 && command2 && command3"

# Preserve specific environment variables #
sudo env VAR1=$VAR1 VAR2=$VAR2 command

# Create directory structure requiring elevated privileges #
sudo mkdir -p /path/to/deep/directory

# Change ownership of files/directories #
sudo chown -R user:group /path/to/directory

# Change permissions of files/directories #
sudo chmod 755 /path/to/files

# Copy file to system location #
sudo cp file /etc/system_file

# Move system file to new location #
sudo mv /old/location /new/location

# Remove system file #
sudo rm /system/file

# Run long-running process as root #
sudo nohup long_running_command &

# Run command with specific timeout #
sudo timeout 30 command

# Check system resources with elevated privileges #
sudo df -h && sudo du -sh /var/log

# View protected system information #
sudo dmesg

# Run diagnostics requiring root access #
sudo smartctl -a /dev/sda

# Access system monitoring tools #
sudo iotop
sudo htop

# Run network configuration commands #
sudo ifconfig eth0 up
sudo ip link set eth0 up

# Manage user accounts #
sudo useradd -m newuser
sudo usermod -aG groupname username

# Edit system configuration files #
sudo vim /etc/systemd/system/service.conf

# Reload system configurations #
sudo systemctl daemon-reload

# Check system logs #
sudo tail -f /var/log/syslog

# Execute privileged maintenance tasks #
sudo logrotate -f /etc/logrotate.conf

# Update system certificates #
sudo update-ca-certificates

# Run system backup (with appropriate permissions) #
sudo rsync -av /source /destination

# Manage firewall rules #
sudo ufw allow 22
sudo iptables -L

# Perform system updates #
sudo apt full-upgrade

# Manage swap space #
sudo swapon /dev/swap

# Check disk partitions and filesystems #
sudo fdisk -l
sudo parted /dev/sda print

# Run system diagnostics #
sudo lshw
sudo lspci
sudo lsusb

# Manage system services #
sudo service apache2 start
sudo chkconfig service on

# Access system performance data #
sudo sar -u 1 5

# Manage system limits #
sudo ulimit -u 10000

# Configure system networking #
sudo nmcli con up eth0

# Run security scans #
sudo nmap -sS -O localhost

# Perform security updates #
sudo unattended-upgrade

# Manage system time #
sudo timedatectl set-time "2024-01-01 12:00:00"

# View system status #
sudo systemctl status --all

# Work with encrypted filesystems #
sudo cryptsetup luksOpen /dev/device name

# Work with LVM volumes #
sudo vgcreate volume_group /dev/device
sudo lvcreate -L 10G -n logical_volume volume_group

# Access hardware information #
sudo dmidecode

# Run system maintenance #
sudo fstrim /mnt/point

# Manage kernel modules #
sudo modprobe module_name

# Update system binaries #
sudo update-alternatives --install /usr/bin/editor editor /usr/bin/vim 100

# Access restricted ports (below 1024) #
sudo nc -lvp 80 80

# Run privileged daemons #
sudo /usr/sbin/service_daemon start

# Manage system certificates #
sudo certbot certonly --webroot -w /var/www/html -d example.com

# Handle system-specific operations #
sudo setfacl -m u:username:rwx /path/to/directory

# Perform system cleanup in privileged areas #
sudo journalctl --vacuum-time=2weeks
sudo /usr/bin/cleanup_script

# Configure system security #
sudo fail2ban-client start

# Update system databases #
sudo updatedb

# Run system integrity checks #
sudo aide --check

# Manage system authentication #
sudo authconfig --enableshadow --update

# Work with system files requiring special access #
sudo /usr/bin/custom_privileged_script

# Execute complex system operations #
sudo sh -c 'operations requiring elevated privileges'

# Securely delete files #
sudo shred -v -z -n 5 /path/to/sensitive/file

# Rotate system logs #
sudo logrotate -s /tmp/rotate_status /etc/logrotate.d/rsyslog

# Manage system memory #
sudo sync && echo 3 | sudo tee /proc/sys/vm/drop_caches

# Check system security #
sudo lynis audit system

# Perform system hardening #
sudo sysctl -w net.ipv4.tcp_syncookies=1

# Manage system boot settings #
sudo update-grub

# Work with system configuration databases #
sudo /usr/bin/privileged_config_tool --option value

# Monitor system resources over time #
sudo iostat -x 1 | tee /tmp/io_metrics.txt

# Run system backup with verification #
sudo backup_script --verify --encrypt

# Update system firmware #
sudo fwupdmgr get-devices

# Manage system authentication tokens #
sudo pam_tally2 --user username --reset

# Perform system performance analysis #
sudo perf record -g command_to_analyze

# Run system integrity verification #
sudo chkrootkit

# Manage system cron jobs #
sudo crontab -l -u username

# Check system integrity #
sudo tripwire --check

# Perform system security audit #
sudo tiger

# Manage system audit logs #
sudo auditctl -l

# Work with system accounting #
sudo sa -m

# Check system security policies #
sudo getsebool -a  # If SELinux is enabled

# Manage system resource allocation #
sudo cgexec -g memory:mygroup command

# Run complex system management tasks #
sudo ansible-playbook privileged_operations.yml
```

## FAQ ##

### What Is The Difference Between Sudo -i And Sudo -s? ###

- `sudo -i` - Creates a new interactive login shell as root, loading root's profile and environment completely
- `sudo -s` - Runs the shell specified by $SHELL or system default with root privileges, but inherits environment from current user

Use `sudo -i` when you need the complete root environment, and `sudo -s` when you want to keep your environment but with elevated privileges.

### How Do I Configure Sudo Permissions? ###

Edit the sudoers file using `visudo` (never edit directly):

```bash
sudo visudo
```

Add lines with the format:

```text
username host=(target_user) commands
```

```text
john ALL=(ALL) ALL
%wheel ALL=(ALL) ALL
```

### What Does Sudo -E Do? ###

The `-E` (preserve environment) option preserves the user's environment variables when running the command with elevated privileges. This is useful when running commands that need custom environment variables, but be cautious as it may expose sensitive environment information.

### How Do I Run Commands Without A Password With Sudo? ###

Add the NOPASSWD specification in the sudoers file:

```bash
# Using visudo #
username ALL=(ALL) NOPASSWD: ALL
# Or for specific commands: #
username ALL=(ALL) NOPASSWD: /usr/bin/systemctl, /usr/sbin/service
```

### How Is Sudo Different From Su? ###

- `sudo` - Run specific commands with elevated privileges, provides logging and fine-grained control
- `su` - Switch to another user account (typically root) and run a shell

Sudo is generally preferred because it provides better security, logging, and access control.

### How Do I Troubleshoot Sudo Issues? ###

Common troubleshooting steps:

1. Check configuration: `sudo -l`
2. Verify user permissions: `cat /etc/group | grep sudo`
3. Check for typos in /etc/sudoers
4. Ensure proper file permissions on sudoers file
5. Check logs: `grep sudo /var/log/auth.log`
