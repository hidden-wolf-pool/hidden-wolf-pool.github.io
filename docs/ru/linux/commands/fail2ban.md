# `fail2ban` #

- **Purpose:** Fail2Ban is an intrusion prevention software framework that protects Linux servers from brute-force and distributed denial-of-service (DDoS) attacks. It monitors log files (such as /var/log/auth.log or /var/log/apache/error_log) and bans IP addresses that show malicious activities like too many password failures, scanning for exploits, or other suspicious behavior. Fail2Ban works by creating temporary or permanent iptables rules to block access from identified malicious IPs for a configurable period of time. It supports various services and can be customized extensively to detect and respond to different attack patterns.
- **Usage:** `fail2ban-client [OPTIONS] [COMMAND] [ARGS...]`

## Basic Usage ##

Check fail2ban status:

```bash
sudo fail2ban-client status

```

Check status of a specific service jail:

```bash
sudo fail2ban-client status sshd

```

Start fail2ban service:

```bash
sudo fail2ban-client start

```

Stop fail2ban service:

```bash
sudo fail2ban-client stop

```

Reload fail2ban configuration:

```bash
sudo fail2ban-client reload

```

Add an IP to a jail temporarily:

```bash
sudo fail2ban-client set sshd banip 192.168.1.100

```

Remove an IP from a jail:

```bash
sudo fail2ban-client set sshd unbanip 192.168.1.100

```

Get the list of banned IPs for a specific jail:

```bash
sudo fail2ban-client get sshd banned

```

Get current fail2ban configuration:

```bash
sudo fail2ban-client get sshd logpath

```

## Options ##

- `-s` — Specify socket file location (default: /var/run/fail2ban/fail2ban.sock)
- `-c` — Specify configuration directory (default: /etc/fail2ban)
- `--log-level` — Set logging level (CRITICAL, ERROR, WARNING, NOTICE, INFO, DEBUG)
- `--log-target` — Specify log target (STDOUT, STDERR, SYSLOG, or file path)
- `-d` — Run in debug mode (don't daemonize)
- `-f` — Run in foreground
- `-h` — Show help message and exit
- `-i` — Run in interactive mode
- `-v` — Increase verbosity level

## Shortcuts ##

Common fail2ban operations:

```bash
# Start fail2ban service #
sudo systemctl start fail2ban
sudo service fail2ban start

# Enable fail2ban at boot #
sudo systemctl enable fail2ban

# Check fail2ban service status #
sudo systemctl status fail2ban

# Restart fail2ban #
sudo systemctl restart fail2ban
sudo fail2ban-client reload  # Reloads only configuration

# Check all active jails #
sudo fail2ban-client status

# Check specific jail status #
sudo fail2ban-client status sshd
sudo fail2ban-client status apache-auth

# View current configuration #
sudo fail2ban-client get sshd ALL

# Ban an IP address immediately #
sudo fail2ban-client set sshd banip 10.0.0.1

# Unban an IP address #
sudo fail2ban-client set sshd unbanip 10.0.0.1

# View banned IP addresses #
sudo fail2ban-client get sshd banned

# View number of banned IP addresses #
sudo fail2ban-client get sshd status

# Get log path for a specific jail #
sudo fail2ban-client get sshd logpath

# Get filter details for a specific jail #
sudo fail2ban-client get sshd filter

# Get action details for a specific jail #
sudo fail2ban-client get sshd action

# Test fail2ban configuration for errors #
sudo fail2ban-client ping

# Ban an IP with custom duration (if supported) #
sudo fail2ban-client set sshd banip 10.0.0.1 3600

# Check fail2ban log file #
sudo tail -f /var/log/fail2ban.log

# View recent bans #
sudo grep "Ban" /var/log/fail2ban.log

# View recent unban events #
sudo grep "Unban" /var/log/fail2ban.log

# View fail2ban activity #
sudo journalctl -u fail2ban

# List all available commands #
sudo fail2ban-client --help

# Run fail2ban in foreground with verbose output #
sudo fail2ban-client -f -v

# Check if fail2ban is running #
sudo fail2ban-client ping

# Get fail2ban version #
sudo fail2ban-client --version

# Create temporary ban (not persistent after restart) #
sudo fail2ban-client set sshd banip 10.0.0.1

# Permanently ban an IP (until manually removed) #
sudo fail2ban-client set sshd setmaxretry 0
sudo fail2ban-client set sshd banip 10.0.0.1

# Adjust ban time for a jail #
sudo fail2ban-client set sshd bantime 86400

# Adjust find time for a jail #
sudo fail2ban-client set sshd findtime 600

# Adjust max retry attempts for a jail #
sudo fail2ban-client set sshd maxretry 3

# Get current ban time #
sudo fail2ban-client get sshd bantime

# Get current find time #
sudo fail2ban-client get sshd findtime

# Get current max retry count #
sudo fail2ban-client get sshd maxretry

# Check if specific IP is banned #
sudo fail2ban-client get sshd banned | grep "IP_ADDRESS"

# Ban multiple IPs at once #
for ip in ip1 ip2 ip3; do
  sudo fail2ban-client set sshd banip $ip
done

# Unban multiple IPs #
for ip in ip1 ip2 ip3; do
  sudo fail2ban-client set sshd unbanip $ip
done

# View all active bans across all jails #
| sudo fail2ban-client status | grep -i "banned\ | status" |

# Get statistics about banned IPs #
| sudo awk '/Ban/ {print $5}' /var/log/fail2ban.log | sort | uniq -c | sort -nr |

# Check for failed login attempts in system logs #
| sudo grep "Failed\ | Invalid\ | authentication failure" /var/log/auth.log |

# Verify iptables rules created by fail2ban #
sudo iptables -L fail2ban-ssh -v -n

# Find all fail2ban rules #
sudo iptables -L | grep fail2ban

# Monitor fail2ban in real-time #
sudo tail -f /var/log/fail2ban.log

# Reset a jail (unban all IPs) #
sudo fail2ban-client unban --all sshd

# Check configuration syntax before applying #
sudo fail2ban-client -c /etc/fail2ban/ start

# View configuration details for all jails #
| for jail in $(sudo fail2ban-client status | grep "Jail list" | cut -d: -f2- | sed 's/ //g; s/,/ /g'); do |
  echo "=== $jail ==="
  sudo fail2ban-client status "$jail"
  echo
done

# Create backup of current configuration #
sudo cp -r /etc/fail2ban /etc/fail2ban.backup.$(date +%Y%m%d)

# Test configuration against current logs #
sudo fail2ban-regex /var/log/auth.log /etc/fail2ban/filter.d/sshd.conf

# Check if a specific port is monitored by fail2ban #
sudo netstat -tulnp | grep fail2ban

# View fail2ban's network connections #
sudo lsof -i :fail2ban

# Find which process is using the fail2ban socket #
sudo lsof /var/run/fail2ban/fail2ban.sock

# Check fail2ban's current memory usage #
ps aux | grep fail2ban

# Get detailed information about a jail #
sudo fail2ban-client get sshd logpath
sudo fail2ban-client get sshd journalmatch
sudo fail2ban-client get sshd datepattern
sudo fail2ban-client get sshd failregex

# Add an IP to ignore list temporarily #
echo "ignoreregex = 10\\.0\\.0\\.\\d+" >> /etc/fail2ban/filter.d/sshd.local

# Adjust jail parameters via command line #
sudo fail2ban-client set sshd maxretry 5
sudo fail2ban-client set sshd bantime 3600
sudo fail2ban-client set sshd findtime 900

# Temporarily disable a jail #
sudo fail2ban-client stop sshd

# Re-enable a disabled jail #
sudo fail2ban-client start sshd

# Check if an IP is in ignore IP list #
sudo fail2ban-client get sshd ignoreip

# Get all jails with their status #
| sudo fail2ban-client status | grep -E "Jail | | - " | grep -v "Number of" |

# Count total bans in log file #
sudo grep -c "Ban" /var/log/fail2ban.log

# View recent failures that led to bans #
sudo fail2ban-client get sshd failures

# Monitor all fail2ban activity #
sudo fail2ban-client -v -f

# Check for fail2ban errors #
sudo fail2ban-client get loglevel
sudo fail2ban-client get logtarget

# Get socket information #
sudo fail2ban-client -s

# Test different filter patterns #
sudo fail2ban-regex /var/log/auth.log /etc/fail2ban/filter.d/common-failures.conf

# Create custom ban based on log pattern #
sudo fail2ban-regex /var/log/apache2/access.log "Fail2Ban custom filter"

# Integrate with external monitoring systems #
# Output statistics to external tools #
| sudo fail2ban-client get sshd status | tail -n +3 | head -n -1 |

# Monitor multiple services simultaneously #
for service in sshd apache-auth nginx-http-auth; do
  echo "Status for $service:"
  sudo fail2ban-client status "$service"
  echo
done

# Generate reports about fail2ban activity #
echo "Fail2ban Report - $(date)" > /tmp/fail2ban_report.txt
sudo fail2ban-client status >> /tmp/fail2ban_report.txt
echo "Active bans in last hour:" >> /tmp/fail2ban_report.txt
grep "$(date '+%b %d %H')" /var/log/fail2ban.log | grep Ban >> /tmp/fail2ban_report.txt

```

## FAQ ##

### How Do I Install Fail2ban? ###

Install via package manager:

```bash
# Debian/Ubuntu #
sudo apt-get install fail2ban

# CentOS/RHEL/Fedora #
sudo yum install fail2ban
# or #
sudo dnf install fail2ban

# Arch Linux #
sudo pacman -S fail2ban

```

### How Do I Configure Fail2ban? ###

Configuration files are located in `/etc/fail2ban/`:

- `/etc/fail2ban/jail.conf` — Default configuration
- `/etc/fail2ban/jail.local` — Local overrides (recommended to avoid changes being overwritten during updates)
- `/etc/fail2ban/filter.d/` — Filter definitions
- `/etc/fail2ban/action.d/` — Action definitions

Create a local configuration file to override defaults:

```bash
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
# Edit the local file #
sudo nano /etc/fail2ban/jail.local

```

### How Do I Create A Custom Jail? ###

Create a configuration in `/etc/fail2ban/jail.local`:

```bash
[my-custom-jail]
enabled = true
port = 80,443
filter = my-custom-filter
logpath = /var/log/apache2/error.log
maxretry = 5
bantime = 600
findtime = 600

```

### How Do I Test Fail2ban Filters? ###

Use the fail2ban-regex tool to test filters against log files:

```bash
sudo fail2ban-regex /var/log/auth.log /etc/fail2ban/filter.d/sshd.conf

```

This helps validate that your filter patterns correctly identify malicious entries in the log file.

### How Do I Unban An IP Address? ###

You can unban an IP address using the client:

```bash
sudo fail2ban-client set sshd unbanip 192.168.1.100

```

Or if you know the jail name, you can use the systemd service:

```bash
sudo fail2ban-client -a sshd  # to manually add
sudo fail2ban-client -u sshd  # there's no direct unban command, use the set command above

```

Actually, the correct way to unban is:

```bash
sudo fail2ban-client set JAIL_NAME unbanip IP_ADDRESS

```

### What Are Common Fail2ban Configuration Parameters? ###

- `enabled` — Whether the jail is active
- `port` — Ports to monitor
- `filter` — Which filter file to use
- `logpath` — Path to log file to monitor
- `maxretry` — Number of failures before banning
- `bantime` — Time to ban the IP (in seconds, -1 for permanent)
- `findtime` — Window of time for maxretry failures (in seconds)
- `action` — What action to take when banning
- `ignoreip` — IPs that should never be banned (whitelist)
