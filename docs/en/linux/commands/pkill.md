# `pkill` #

- **Purpose:** The `pkill` command is used to send signals to processes based on their names, command lines, or other attributes. It's a convenient alternative to finding the process ID (PID) manually with commands like `ps` or `pidof` and then using `kill`. The command can terminate processes by name rather than requiring the specific PID, making it useful for scripting and general administration tasks.
- **Usage:** `pkill [OPTIONS] PATTERN`

## Basic Usage ##

Kill a process by name:

```bash
pkill firefox

```

Kill process by full command line:

```bash
pkill -f "python script.py"

```

Send a specific signal to processes:

```bash
pkill -TERM apache2

```

Kill process by user:

```bash
pkill -u username

```

Kill process by group name:

```bash
pkill -G groupname

```

Send SIGKILL signal to processes:

```bash
pkill -9 nginx

```

Kill process by parent process ID:

```bash
pkill -P 1234

```

## Options ##

- `-9` — Send SIGKILL signal (kill immediately)
- `-f` — Match against full command line
- `-u` — Match by effective user ID
- `-G` — Match by effective group ID
- `-P` — Match by parent process ID
- `-t` — Match by controlling terminal
- `-x` — Match exactly with command name
- `-c` — Match by command name only
- `-s` — Match by session ID
- `--ns` — Match by namespace
- `-e` — Echo the killed processes

## Shortcuts ##

Common pkill operations:

```bash
# Kill all processes with a specific name #
pkill process_name

# Kill process with exact match only #
pkill -x firefox

# Kill all processes for a specific user #
pkill -u username

# Kill by full command line #
pkill -f "full command line"

# Send specific signal (SIGTERM) #
pkill -15 apache2

# Send SIGSTOP (suspend) #
pkill -STOP process_name

# Resume stopped process #
pkill -CONT process_name

# Kill process by terminal #
pkill -t pts/1

# Kill process by group #
pkill -G developers

# Check if processes exist without killing #
pkill -0 process_name

# Kill oldest process with given name #
pkill -o firefox

# Kill newest process with given name #
pkill -n firefox

# Use pattern matching #
pkill "firefox.*"

# Kill with confirmation prompt #
pkill -i process_name

```

## FAQ ##

### How Is Pkill Different From Kill? ###

- `pkill` - Terminates processes by name or pattern without knowing the PID
- `kill` - Requires the specific process ID (PID) to terminate a process

### What Are The Most Common Signals Used? ###

- `SIGTERM` (15) - Terminate gracefully (default)
- `SIGKILL` (9) - Kill immediately and forcefully
- `SIGSTOP` (19) - Stop the process temporarily
- `SIGCONT` (18) - Continue a stopped process

### How Do I Test Pkill Command Before Actually Killing? ###

Use signal 0 to test if processes match without affecting them:

```bash
pkill -0 firefox  # Tests if process exists without killing

```

### How Do I Kill Multiple Processes At Once? ###

```bash
pkill firefox chrome thunderbird  # Kill multiple process names

```

### What's The Difference Between -f And -x Options? ###

- `-f` - Matches against the full command line (path and arguments)
- `-x` - Matches exactly with the command name only (no path or arguments)

Example:

- `pkill -x firefox` - matches only the process named exactly "firefox"
- `pkill -f firefox` - matches any process whose command line contains "firefox"
