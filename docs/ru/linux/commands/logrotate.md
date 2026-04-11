# `logrotate` #

- **Purpose:** The `logrotate` command is a system utility that manages the rotation, compression, removal, and mailing of log files. It's designed to ease administration of system logs by automatically rotating, compressing, and removing old log files. Logrotate prevents log files from growing indefinitely and consuming all available disk space, while also ensuring that system logs remain manageable in size and organized by date. The tool operates based on configuration files that specify how different logs should be rotated, with rules for size limits, retention periods, and compression settings.
- **Usage:** `logrotate [OPTIONS] [CONFIG_FILE]`

## Basic Usage ##

Run logrotate with default configuration:

```bash
sudo logrotate /etc/logrotate.conf

```

Run logrotate with specific configuration file:

```bash
sudo logrotate /etc/logrotate.d/nginx

```

Preview what logrotate would do (dry run):

```bash
sudo logrotate -d /etc/logrotate.conf

```

Force rotation of logs:

```bash
sudo logrotate -f /etc/logrotate.conf

```

Show verbose output:

```bash
sudo logrotate -v /etc/logrotate.conf

```

Skip logrotate if not needed:

```bash
sudo logrotate -s /var/lib/logrotate/status /etc/logrotate.conf

```

Use different status file:

```bash
sudo logrotate -s /tmp/logrotate.status /etc/logrotate.conf

```

## Options ##

- `-d` — Do everything in dry-run mode (don't actually rotate)
- `-f` — Force rotation of all logs regardless of size/date
- `-s` — Use the specified state file instead of default
- `-v` — Show verbose output
- `-l` — Show license information and exit
- `-?` — Show help message and exit
- `-m` — Command to use to send mail
- `-c` — Check configuration file syntax only
- `-t` — Enable debugging mode
- `-z` — Zip/Unzip old log files using gzip/bzip2
- `-R` — Run logrotate in non-periodic mode

## Shortcuts ##

Common logrotate operations:

```bash
# Test configuration syntax #
sudo logrotate -c /etc/logrotate.conf

# Force rotate all logs (use with caution) #
sudo logrotate -f /etc/logrotate.conf

# Dry run to see what would happen #
sudo logrotate -d /etc/logrotate.conf

# Rotate specific service logs #
sudo logrotate -f /etc/logrotate.d/nginx

# Rotate with detailed output #
sudo logrotate -v /etc/logrotate.conf

# Rotate logs with custom status file #
sudo logrotate -s /custom/path/status /etc/logrotate.conf

# Manual rotation of specific log #
sudo logrotate -f /etc/logrotate.d/apache2

# Check current logrotate state #
| sudo logrotate -d /etc/logrotate.conf | grep -E "(rotating | error | warning)" |

# Rotate logs under specific conditions #
| logrotate -f /etc/logrotate.conf 2>&1 | grep -E "(complete | error)" |

# Run logrotate on specific log directory #
sudo find /var/log -name "*.conf" -exec logrotate {} \;

# Setup custom rotation schedule #
# Create /etc/cron.daily/logrotate-custom with: #
# #!/bin/bash #
# /usr/sbin/logrotate /etc/logrotate.conf #

# Rotate logs with compression #
logrotate -v /etc/logrotate.conf

# Rotate logs without compression #
logrotate -v /s /etc/logrotate.conf

# Rotate with specific mail command #
logrotate -m "mail -s 'Log Rotation Report'" /etc/logrotate.conf

# Rotate logs and send notification #
logrotate -v /etc/logrotate.conf && echo "Log rotation completed" | mail admin@example.com

# Rotate logs using specific script after rotation #
# In config file: postrotate /path/to/script.sh endscript #

# Rotate logs and compress with specific compression tool #
logrotate -v /etc/logrotate.conf

# Setup log rotation for custom application #
sudo tee /etc/logrotate.d/myapp <<EOF
/var/log/myapp/*.log {
    daily
    missingok
    rotate 30
    compress
    delaycompress
    copytruncate
    notifempty
    create 0644 www-data adm
}
EOF

# Rotate logs for multiple services with a single command #
sudo logrotate /etc/logrotate.d/nginx
sudo logrotate /etc/logrotate.d/apache2
sudo logrotate /etc/logrotate.d/mysql

# Rotate logs conditionally based on size #
logrotate -v /etc/logrotate.conf | awk '/rotating/{count++} END {print count" files rotated"}'

# Check if logrotate ran successfully #
| sudo logrotate -v /etc/logrotate.conf 2>&1 | grep -q "error" && echo "Errors found" | | echo "Success" |

# Rotate specific log with custom parameters #
echo "/var/log/specific.log {
    hourly
    rotate 24
    compress
    missingok
}" | logrotate -s /tmp/status -

# Rotate logs with error handling #
if sudo logrotate /etc/logrotate.conf 2>/dev/null; then
    echo "Rotation successful"
else
    echo "Rotation failed" >&2
fi

# Schedule logrotate via cron #
# Add to crontab or /etc/crontab: #
# 0 5 * * * /usr/sbin/logrotate /etc/logrotate.conf #

# Rotate logs with specific owner settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with compression delay settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with copy and truncate option #
logrotate -v /etc/logrotate.conf

# Rotate logs with extension settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with sharedscripts option #
logrotate -v /etc/logrotate.conf

# Rotate logs with prerotate script #
logrotate -v /etc/logrotate.conf

# Rotate logs with postrotate script #
logrotate -v /etc/logrotate.conf

# Rotate logs with compresscmd settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with compressext settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with uncompresscmd settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with compressoptions settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with dateext settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with dateformat settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with tabooext settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with include settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with mail settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with nomail settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with lastaction settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with firstaction settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with preremove settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with logstateroot settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with mailfirst settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with maillast settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with dateyesterday settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with nodateyesterday settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with extension settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with noextension settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with shred settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with shredcycles settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with maxage settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with rotate settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with compresscmd settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with uncompress settings #
logrotate -v /etc/logrotate.conf

# Rotate logs with dateiso settings #
logrotate -v /etc/logrotate.conf

# Create a logrotate script for specific needs #
cat > /usr/local/bin/rotate-app-logs << 'EOF'
#!/bin/bash
APP_LOGS="/var/log/myapp/*.log"
TEMP_CONFIG=$(mktemp)

cat > "$TEMP_CONFIG" << CONFIG
$APP_LOGS {
    weekly
    rotate 10
    compress
    delaycompress
    copytruncate
    notifempty
    missingok
    postrotate
| /bin/systemctl reload myapp.service > /dev/null 2>&1 | | true |
    endscript
}
CONFIG

sudo logrotate -s /var/lib/logrotate/myapp.status "$TEMP_CONFIG"
rm "$TEMP_CONFIG"
EOF
chmod +x /usr/local/bin/rotate-app-logs

# Rotate logs with size-based triggers #
echo "/var/log/sizebased.log {
    size 100M
    rotate 5
    compress
    missingok
    notifempty
    postrotate
| /bin/kill -USR1 `cat /var/run/daemon.pid 2>/dev/null` 2>/dev/null | | true |
    endscript
| }" | sudo tee /tmp/size_rotate.conf && sudo logrotate -s /tmp/status /tmp/size_rotate.conf |

# Monitor log rotation status #
tail -f /var/lib/logrotate/status

# Rotate logs with complex configuration #
for conf in /etc/logrotate.d/*; do
    sudo logrotate -d "$conf" 2>&1 | grep -v "Consider learning about logrotate's \"include\" directive"
done

# Create a custom configuration for application #
sudo tee /etc/logrotate.d/custom-app << 'EOF'
/var/log/custom-app/*.log {
    compress
    delaycompress
    copytruncate
    notifempty
    missingok

    # Daily rotation for small logs
    daily
    rotate 7

    # For larger logs, use size-based rotation
    # size 50M
    # maxsize 100M
}
EOF

# Rotate logs with custom notifications #
| logrotate -v /etc/logrotate.conf 2>&1 | grep -E "(error | warning | rotat)" | mail -s "Log Rotate Report" admin@company.com |

# Verify rotation status #
| logrotate -d /etc/logrotate.conf | grep -E "(log needs rotating | rotating)" |

```

## FAQ ##

### How Often Does Logrotate Run Automatically? ###

Logrotate typically runs automatically via cron once a day (usually from `/etc/cron.daily/logrotate`). The actual rotation depends on the schedule set in the configuration files (daily, weekly, monthly, or based on size).

### What Is The Difference Between Copytruncate And Regular Rotation? ###

- `copytruncate` - Copies the log file and truncates the original, allowing applications to continue writing to the same file descriptor
- Regular rotation - Moves/renames the original file and creates a new one, which may cause applications to lose their file handle

Use `copytruncate` for applications that don't handle log rotation well.

### How Do I Create A Custom Logrotate Configuration? ###

Create a configuration file in `/etc/logrotate.d/`:

```bash
/path/to/logfile {
    daily
    rotate 10
    compress
    delaycompress
    missingok
    notifempty
    postrotate
        # Commands to run after rotation
        # for example, systemctl reload service
    endscript
}

```

### What Happens To The Old Log Files? ###

Old log files are renamed with a suffix (based on rotation count or date) and stored in the same directory until:

- The maximum number of rotations is reached (then oldest is removed)
- They are compressed (saving disk space)
- They are moved to an alternate location if configured

### How Do I Debug Logrotate Issues? ###

Use the dry-run option to debug:

```bash
sudo logrotate -d /etc/logrotate.conf
sudo logrotate -d /etc/logrotate.d/service

```

Check the status file:

```bash
sudo cat /var/lib/logrotate/status

```

Run with verbose output:

```bash
sudo logrotate -v /etc/logrotate.conf

```

### How Do I Rotate Logs Immediately? ###

Force rotation with the `-f` flag:

```bash
sudo logrotate -f /etc/logrotate.conf

```

This rotates all logs immediately regardless of their schedule or size.
