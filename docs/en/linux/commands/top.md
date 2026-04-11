# `top` #

- **Purpose:** Real-time system monitoring tool for Unix-like systems.
- **Usage:** Display dynamic information about running processes, CPU load, memory usage, and system resources.

## Basic Usage ##

```bash
top

```

The command opens an interactive interface showing:

- CPU usage
- Memory usage
- Process list
- PID numbers
- User information
- Resource consumption metrics

## Options ##

- `-d` — Set delay between updates (for example, `top -d 2` for 2 seconds).
- `-p` — Monitor specific process (for example, `top -p 1234`).
- `-c` — Sort by command name.
- `-M` — Show memory statistics.
- `-u` — Monitor processes by user (for example, `top -u username`).

## Shortcuts ##

- `h` — Help menu.
- `k` — Kill process.
- `r` — Renice process.
- `s` — Change update interval.
- `u` — Filter by user.
- `M` — Sort by memory.
- `P` — Sort by CPU.
- `T` — Sort by time.
- `q` — Quit.

## FAQ ##

### What is `renice`? ###

**Renice** is a command used to change the priority of a running process in Unix-like operating systems. It modifies the niceness value of a process, which determines its scheduling priority.
