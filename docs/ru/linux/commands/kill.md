# `kill` #

- **Purpose:** The `kill` command is used to send signals to processes running on the system, typically to terminate them. While commonly used to stop processes, it can send various signals to control process behavior, such as pausing (SIGSTOP) or restarting (SIGCONT) processes. The command requires the process ID (PID) of the target process and can send different signals to achieve various process control objectives.
- **Usage:** `kill [OPTIONS] PID...`

## Basic Usage ##

Send a termination signal (SIGTERM) to a process:

```bash
kill 1234

```

Forcefully kill a process using SIGKILL signal:

```bash
kill -9 1234

```

Send a specific signal by name:

```bash
kill -TERM 1234

```

Pause a process (SIGSTOP):

```bash
kill -STOP 1234

```

Resume a paused process (SIGCONT):

```bash
kill -CONT 1234

```

Send signal by signal number:

```bash
kill -15 1234

```

## Options ##

- `-l` — List all signal names or translate signal number to name
- `-L` — Synonym for -l
- `-s` — Specify the signal to send (by name or number)
- `-p` — Check if a process exists without sending a signal
- `--help` — Display help text and exit
- `--version` — Display version information and exit

## Shortcuts ##

Common kill operations:

```bash
# Gracefully terminate a process (SIGTERM) #
kill 1234

# Forcefully kill a process (SIGKILL) #
kill -9 1234
kill -KILL 1234

# Pause a process #
kill -STOP 1234

# Resume a paused process #
kill -CONT 1234

# List all available signals #
kill -l

# Kill a process by name (alternative command) #
pkill firefox
killall chrome

# Check if process exists without killing it #
kill -0 1234

# Kill all processes with a specific name #
killall apache2

# Find and kill process by name pattern #
ps aux | grep process_name
kill -9 process_pid

```

## FAQ ##

### What Is The Difference Between SIGTERM And SIGKILL? ###

- `SIGTERM` (signal 15) - Termination signal that allows the process to gracefully shut down, close files, and clean up resources
- `SIGKILL` (signal 9) - Forced termination that immediately kills the process without allowing cleanup operations

### How Do I Find A Process ID To Kill? ###

Use commands like:

```bash
ps aux | grep process_name
pgrep process_name
pidof process_name
top  # Press 'k' and enter PID
htop

```

### Can I Use Signal Names Instead Of Numbers? ###

Yes, you can use either:

```bash
kill -TERM 1234  # By name
kill -15 1234    # By number
kill -KILL 1234  # By name
kill -9 1234     # By number

```

### What Is The SIGSTOP And SIGCONT Signals Used For? ###

- `SIGSTOP` (signal 19) - Pauses a process; the process stops executing but remains in memory
- `SIGCONT` (signal 18) - Resumes a paused process

Example:

```bash
kill -STOP 1234  # Pause process
kill -CONT 1234  # Resume process

```

### What Does The -0 Signal Do? ###

The `-0` signal doesn't actually kill the process but tests if it exists and if the current user has permission to send a signal to it. It's useful for checking if a process is running without affecting it.
