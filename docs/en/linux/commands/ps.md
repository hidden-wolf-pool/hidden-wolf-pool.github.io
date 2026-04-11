# `ps` #

- **Purpose:** The `ps` command is used to provide information about the currently running processes in a Linux system. It displays process status, process IDs (PIDs), and other relevant details about system processes.
- **Usage:** `ps` is a versatile command that can be used by system administrators and users to monitor system performance, troubleshoot issues, and manage running processes.

## Basic Usage ##

Show processes:

```bash
ps

```

Comprehensive process listing with detailed information:

```bash
ps aux

```

Show all processes in full format:

```bash
ps -ef

```

Search for specific processes by name:

```bash
ps aux | grep process_name

```

Find processes with detailed information

```bash
ps -ef | grep process_name

```

Display CPU and memory usage for a specific process:

```bash
ps -p PID -o %cpu,%mem,comm

```

Sort processes by CPU usage (descending):

```bash
ps -aux --sort=-%cpu

```

Sort processes by memory usage (descending):

```bash
ps -aux --sort=-%mem

```

## Options ##

- `-a` — Show processes of all users.
- `-u` — Show processes owned by a specific user.
- `-x` — Show processes without controlling terminals.
- `-e` — Show all processes.
- `-f` — Full-format listing.
- `-T` — Show processes for the current terminal.
- `-p <PID>` — Show information for a specific process ID.
- `-l` — Show long format.
- `-o <format>` — Specify user-defined format.

## FAQ ##

### How Can I See All Running Processes? ###

Use `ps -ef` or `ps aux` to display all running processes in the system.

### How Do I Find a Specific Process by Name? ###

Use `ps aux | grep process_name` to filter processes by name.

### How Can I Sort Processes by CPU Usage? ###

Use `ps -aux --sort=-%cpu` to sort processes by CPU usage in descending order.

### How Do I Get Detailed Information About a Specific Process? ###

Use `ps -p PID -f` to get detailed information about a specific process by its PID.

### How Can I Monitor Memory Usage of Processes? ###

Use `ps -aux --sort=-%mem` to sort processes by memory usage or `ps -p PID -o %mem` for a specific process.

### What Does the Output of `ps aux` Mean? ###

The output includes:

- `USER` — Process owner
- `PID` — Process ID
- `%CPU` — CPU usage
- `%MEM` — Memory usage
- `VSZ` — Virtual memory size
- `RSS` — Resident set size
- `TTY` — Controlling terminal
- `STAT` — Process state
- `START` — Start time
- `TIME` — CPU time
- `COMMAND` — Command name/line
