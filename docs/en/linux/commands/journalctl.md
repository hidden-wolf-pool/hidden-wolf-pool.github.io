# `journalctl` #

- **Purpose:** The `journalctl` command is used to query and display messages from the systemd journal, which collects logs from various sources including the kernel, system services, and applications. It provides a unified logging interface for Linux systems using systemd, offering powerful filtering options, real-time monitoring capabilities, and structured log retrieval that replaces traditional syslog mechanisms.
- **Usage:** `journalctl [OPTIONS] [MATCHES...]`

## Basic Usage ##

Display all journal entries:

```bash
journalctl

```

Display journal entries for the current boot:

```bash
journalctl -b

```

Display journal entries in real-time:

```bash
journalctl -f

```

Display entries for a specific service:

```bash
journalctl -u apache2.service

```

Display entries for a specific time period:

```bash
journalctl --since "2023-01-01" --until "2023-01-02"

```

Display entries for a specific priority level:

```bash
journalctl -p err

```

Filter entries by process ID:

```bash
journalctl _PID=1234

```

## Options ##

- `-f` — Follow the journal similar to `tail -f`
- `-b` — Show entries from the current boot
- `-u` — Filter by unit/service name
- `-p` — Filter by priority/log level
- `--since`, `--until` — Filter by time range
- `-n` — Show only the last N entries
- `_SYSTEMD_UNIT=` — Filter by systemd unit
- `_PID=` — Filter by process ID
- `-o` — Specify output format (short, verbose, json, and so on)

## Shortcuts ##

Common journalctl operations:

```bash
# Show logs from last boot #
journalctl -b -1

# Follow logs in real-time with a service #
journalctl -fu nginx.service

# Show logs from specific time #
journalctl --since today
journalctl --since "2 hours ago"
journalctl --since "2023-01-15 10:00:00"

# Show logs with specific priority #
journalctl -p warning
journalctl -p err

# Show logs for multiple services #
journalctl -u service1 -u service2

# Show logs in JSON format #
journalctl -o json

# Show logs with grep filtering #
journalctl | grep error
journalctl -u apache2 | grep -i denied

# View logs with less #
journalctl | less

# Export logs to a file #
journalctl > journal_export.txt

```

## FAQ ##

### How Do I View Logs For A Specific Service? ###

Use the `-u` option with the service name:

```bash
journalctl -u nginx.service
journalctl -u apache2.service

```

### How Do I Monitor Logs In Real-Time? ###

Use the `-f` option to follow logs:

```bash
journalctl -f
# Or with a service: #
journalctl -fu nginx.service

```

### What Priority Levels Can I Filter By? ###

Priority levels include:

- `emerg`, `alert`, `crit`, `err`, `warning`, `notice`, `info`, `debug`

For example:

```bash
journalctl -p warning
journalctl -p err

```

### How Do I Clear Journal Logs? ###

To remove journal logs older than 30 days:

```bash
sudo journalctl --vacuum-time=30d

```

To limit journal size to 500MB:

```bash
sudo journalctl --vacuum-size=500M

```

### How Do I View Logs From A Previous Boot? ###

Use `-b` with a negative number:

```bash
journalctl -b -1    # Previous boot
journalctl -b -2    # Two boots ago

```

To see all boot IDs:

```bash
journalctl --list-boots

```
