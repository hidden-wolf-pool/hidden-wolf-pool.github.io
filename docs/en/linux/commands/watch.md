# `watch` #

- **Purpose:** The `watch` command repeatedly executes a command and displays the output in full-screen mode, updating the screen with each execution. It's particularly useful for monitoring system resources, network connections, running processes, or any other dynamically changing information in real-time.
- **Usage:** `watch [OPTIONS] COMMAND`

## Basic Usage ##

Monitor system uptime and load averages:

```bash
watch uptime

```

Monitor disk space usage every 5 seconds:

```bash
watch -n 5 df -h

```

Monitor running processes with highlighting:

```bash
watch -d ps aux

```

Monitor network connections:

```bash
watch -n 2 netstat -tulpn

```

Monitor a file for changes:

```bash
watch -n 1 'ls -l /path/to/directory'

```

Highlight differences between updates:

```bash
watch -d free -m

```

## Options ##

- `-n` — Specify the update interval in seconds (default is 2)
- `-d` — Highlight changes between updates
- `-c` — Interpret ANSI color sequences
- `-x` — Pass command to exec instead of shell
- `-t` — Turn off beep and bell
- `-p` — Exit when the command has a non-zero exit
- `-g` — Exit when the output of command changes
- `--help` — Display help message

## Shortcuts ##

Common watch operations:

```bash
# Monitor system resources with color #
watch -c 'vmstat 1 5'

# Monitor network and highlight changes #
watch -n 1 -d 'netstat -i'

# Monitor system load and highlight changes #
watch -d 'uptime'

# Monitor disk usage every 10 seconds #
watch -n 10 'df -h'

# Monitor top processes with color #
watch -n 1 -c 'top -b -n 1 | head -20'

# Monitor a specific process #
watch -d 'ps aux | grep mysqld'

# Monitor temperature sensors #
watch -n 2 'sensors'

```

## FAQ ##

### How Do I Stop The Watch Command? ###

Press `Ctrl+C` to terminate the `watch` command and return to the command prompt.

### How Do I Change The Update Interval? ###

Use the `-n` option followed by the number of seconds:

```bash
watch -n 5 command  # Updates every 5 seconds
watch -n 0.5 command  # Updates every 0.5 seconds (every half second)

```

### How Do I Highlight Changes Between Updates? ###

Use the `-d` option:

```bash
watch -d command

```

This highlights the differences between consecutive updates, making it easy to spot changes.

### Can I Use Watch With Pipelines? ###

Yes, watch can work with pipelines. Make sure to quote the entire pipeline:

```bash
watch 'ps aux | grep python'
watch -n 5 'netstat -tuln | grep LISTEN'

```

### How Do I Run A Command That Requires Sudo With Watch? ###

You need to run the whole watch command with sudo:

```bash
sudo watch -d 'lsof -i :80'  # Monitor port 80 connections with elevated privileges

```
