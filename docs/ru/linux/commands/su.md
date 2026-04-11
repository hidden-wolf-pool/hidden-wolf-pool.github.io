# `su` #

- **Purpose:** The `su` command (switch user) is used to switch to another user account during a login session. It's commonly used to switch to the root user to perform administrative tasks, but can also be used to switch to any other user account on the system. When run without arguments, `su` defaults to becoming the root user. The command can start a new shell session with the target user's environment or run a specific command as the target user. `su` authenticates using the password of the target user (not the current user), making it an important tool for privilege escalation and user impersonation in Unix-like systems.
- **Usage:** `su [OPTIONS] [USERNAME [ARGUMENTS...]]`

## Basic Usage ##

Switch to root user (requires root password):

```bash
su -

```

Switch to a specific user (requires that user's password):

```bash
su - username

```

Switch to root with current environment preserved:

```bash
su

```

Run a single command as root:

```bash
su -c "command"

```

Run a single command as a specific user:

```bash
su -c "command" username

```

Switch user without invoking a shell:

```bash
su username -s /bin/sh

```

Start login shell for a specific user:

```bash
su -l username

```

## Options ##

- `-c` — Execute command and exit
- `-` — Provide full login environment (same as -l)
- `-l` — Provide full login environment as specified by the target user's password database entry
- `-m` — Preserve current environment (same as -p)
- `-p` — Preserve current environment
- `-s` — Specify shell to use
- `-g` — Specify primary group for new user ID
- `-G` — Specify additional groups for new user ID
- `--help` — Display help and exit
- `--version` — Display version and exit

## Shortcuts ##

Common su operations:

```bash
# Switch to root user (full login shell) #
su -

# Switch to root without changing directory #
su root

# Switch to another user #
su - otheruser

# Run command as root #
su -c "systemctl restart service"

# Run command as another user #
su -c "whoami" otheruser

# Switch with preserved environment #
su -p

# Run command with specific shell #
su -s /bin/bash -c "env" username

# Switch to user with specific group #
su -g groupname username

# Switch to user with additional groups #
su -G group1,group2 - username

# Check current identity after su #
su -c "id"

# Set environment variables when switching #
su -c "export VAR=value && command" username

# Run administrative command without staying logged in #
su -c "systemctl status apache2" -l

# Use su with sudo-like behavior for specific command #
su -c "apt install package" root

# Switch user with specific home directory #
su -c "cd && pwd" username

# Run shell script as another user #
su -c "/path/to/script.sh" username

# Change to root and execute multiple commands #
su -c "systemctl start service; tail -f /var/log/service.log"

# Verify successful user switch #
su -c "echo Successfully switched to $(whoami)" username

# Switch user and run interactive command #
su -c "mysql -u root -p" root

# Switch user with specific working directory #
su -c "cd /home/username && ls -la" username

# Check permissions after switching #
su -c "ls -la /restricted/directory" username

# Compare user environments #
echo "Current user environment:"
| env | grep -E "(USER | HOME | PATH)" |
| su -c "env | grep -E '(USER | HOME | PATH)'" username |

# Use su for testing permissions #
| su -c "test -r /path/file && echo readable | | echo not_readable" username |

# Switch user and become interactive #
su - username

# Run privileged command sequence #
su -c "mount /dev/device /mountpoint && chown user:user /mountpoint && ls -la /mountpoint" root

# Switch user for administrative tasks #
su -c "useradd -m -s /bin/bash newuser" root

# Switch with environment preservation for development #
su -p - username

# Run security-sensitive operations #
su -c "openssl rand -base64 32" root

# Switch and run monitoring commands #
su -c "htop" root

# Switch and run network diagnostics #
su -c "nmap -sS localhost" root

# Switch and run filesystem operations #
su -c "fsck /dev/sdX" root

# Switch and manage system services #
su -c "systemctl list-units --type=service --state=running" root

# Switch and check disk usage #
su -c "df -h && du -sh /var/log" root

# Switch and manage firewall settings #
su -c "iptables -L -n -v" root

# Switch and inspect processes #
su -c "ps aux | grep processname" root

# Switch and check system resources #
su -c "free -h && vmstat 1 5" root

# Switch and update system #
su -c "apt update && apt upgrade -y" root

# Switch and manage packages #
su -c "dpkg -l | grep package_name" root

# Switch and work with logs #
su -c "journalctl -u servicename --since '1 hour ago'" root

# Switch and modify system files #
su -c "nano /etc/config_file" root

# Switch and work with network interfaces #
su -c "ip addr show && ifconfig" root

# Switch and change system time #
su -c "timedatectl set-time '2024-01-01 12:00:00'" root

# Switch and work with users and groups #
su -c "getent passwd && getent group" root

# Switch and work with cron jobs #
su -c "crontab -l" root

# Switch and work with system limits #
su -c "cat /etc/security/limits.conf" root

# Switch and check system health #
su -c "dmesg | grep -i error" root

# Switch and work with certificates #
su -c "update-ca-certificates" root

# Switch and manage system services (alternative method) #
su -c "service apache2 status" root

# Switch and run system diagnostics #
su -c "smartctl -a /dev/sda" root

# Switch and work with encryption #
su -c "cryptsetup status /dev/mapper/name" root

# Switch and work with LVM #
su -c "vgdisplay && lvdisplay && pvdisplay" root

# Switch and manage system authentication #
su -c "faillog -u username" root

# Switch and check system integrity #
su -c "aide --check" root

# Switch and manage system boot settings #
su -c "update-grub" root

# Switch and work with hardware info #
su -c "lshw -short" root

# Switch and check process limits #
su -c "cat /proc/sys/fs/file-max" root

# Switch and manage system memory #
su -c "sysctl -w vm.swappiness=10" root

# Switch and work with kernel modules #
su -c "lsmod | grep module_name" root

# Switch and manage network security #
su -c "ss -tuln | grep LISTEN" root

# Switch and work with system audits #
su -c "auditctl -l" root

# Switch and check network routing #
su -c "ip route show && route -n" root

# Switch and manage firewall rules #
su -c "ufw status verbose" root

# Switch and work with system certificates #
su -c "certbot certificates" root

# Switch and manage system authentication policies #
su -c "authconfig --test" root

# Switch and check system resource allocation #
su -c "systemctl list-units --type=service --state=running" root

# Switch and work with kernel parameters #
su -c "sysctl net.core.rmem_max" root

# Switch and check system logs with elevated access #
su -c "grep -rn 'error' /var/log/" root

# Switch and work with system file permissions #
su -c "getfacl /path/to/directory" root

# Switch and manage system security settings #
su -c "chage -l username" root

# Switch and work with system services #
su -c "systemd-analyze blame" root

# Switch and work with system configurations #
su -c "grep -r 'important_setting' /etc/" root

# Switch and perform system maintenance #
su -c "logrotate -f /etc/logrotate.conf" root

# Switch and manage system databases #
su -c "updatedb" root

# Switch and work with system integrity tools #
su -c "chkrootkit" root

# Switch and manage system monitoring #
su -c "/usr/bin/complex_system_monitoring_script" root

# Switch and run complex administration tasks #
su -c "bash /path/to/administration_script.sh" root

# Switch and verify system configuration #
su -c "nginx -t" root

# Switch and work with system-specific tools #
su -c "docker ps -a" root

# Switch and manage system storage #
su -c "lvextend -L +10G /dev/mapper/volume" root

# Switch and work with system performance #
su -c "perf list" root

# Switch and manage system networking #
su -c "nmcli device status" root

# Switch and work with system security #
su -c "lynis audit system" root

```

## FAQ ##

### What Is The Difference Between Su And Sudo? ###

- `su` - Switch to another user account, typically requires the target user's password (not current user's)
- `sudo` - Execute specific commands as root or another user, uses current user's password and provides more granular control

`sudo` is generally preferred as it provides better logging and access control.

### How Do I Switch To Root User With Su? ###

```bash
# Full login shell (recommended) #
su -

# Or simply #
su

```

This switches to root user and loads root's complete environment.

### How Do I Run A Single Command With Su? ###

Use the `-c` flag:

```bash
su -c "command_to_run"
su -c "systemctl restart service" username  # As specific user

```

### What Does The - And -l Option Do In Su? ###

- `su -` - Provides a full login shell with complete environment of the target user
- `su -l` - Same as `su -`, loads login environment of target user
- `su` (without dash) - Switches user but keeps current environment

### How Do I Preserve My Current Environment When Using Su? ###

Use the `-p` or `-m` flag:

```bash
su -p  # Preserve environment when switching
su - username -p  # For specific user

```

### How Do I Verify I've Successfully Switched Users? ###

Use these commands after running `su`:

```bash
whoami    # Shows current user name
id        # Shows user ID and group information
pwd       # Shows current directory (should change with full login)
echo $HOME  # Shows home directory of current user

```

### What Security Considerations Should I Keep In Mind? ###

- Only use `su` when necessary for system administration
- Be careful with `su -` as it grants full root privileges
- Always exit from elevated privileges when done: `exit` or `Ctrl+D`
- The target user's password is required (not the current user's)
- Commands run with `su` are typically not logged as comprehensively as with `sudo`
