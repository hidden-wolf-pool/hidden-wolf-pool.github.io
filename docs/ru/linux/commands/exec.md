# `exec` #

- **Purpose:** The `exec` command is a shell builtin that replaces the current shell process with another command. It does not create a new process but rather transforms the current process into the new command, making it more efficient than running the command as a subprocess. The shell that executed the `exec` command is replaced entirely by the new command, inheriting the same PID and file descriptors. This command is essential for system administrators and script writers when they need to replace the current process without creating a child process, redirect file descriptors, or efficiently execute another program while maintaining the same process ID.
- **Usage:** `exec [OPTIONS] [COMMAND] [ARGUMENTS...]`

## Basic Usage ##

Execute a command replacing the current shell:

```bash
exec /bin/ls

```

Replace current shell with another shell:

```bash
exec /bin/bash

```

Redirect file descriptor 0 (stdin) to a file:

```bash
exec 0< input.txt

```

Redirect file descriptor 1 (stdout) to a file:

```bash
exec 1> output.txt

```

Redirect file descriptor 2 (stderr) to a file:

```bash
exec 2> error.txt

```

Redirect both stdout and stderr to the same file:

```bash
exec &> combined.txt

```

Open a file and assign it to file descriptor 3:

```bash
exec 3< input.txt

```

Close a file descriptor:

```bash
exec 3<&-

```

## Options ##

- `-c` — Clear environment before executing command
- `-a` — Set argv[0] to specified name
- `-l` — Set $0 to command name (useful with -a)

## Shortcuts ##

Common exec operations:

```bash
# Replace current process with another command #
exec /usr/bin/python3 script.py

# Execute command with clean environment #
exec -c env_var=value /path/to/command

# Execute command with custom name in process list #
exec -a my_alias /path/to/command

# Redirect all output to a file #
exec > all_output.log

# Redirect error output to a file #
exec 2> errors.log

# Redirect input from a file for entire session #
exec < input_file.txt

# Open file for reading and assign to FD 3 #
exec 3< file.txt

# Open file for writing and assign to FD 4 #
exec 4> output.txt

# Write to file using custom file descriptor #
exec 5> temp_result.txt
echo "Result" >&5
exec 5>&-  # Close file descriptor

# Redirect output to multiple files #
exec > >(tee output.log) 2> error.log

# Swap file descriptors #
exec 3>&1 1>&2 2>&3 3>&-

# Open file for reading and writing #
exec 3<> file.txt

# Redirect to null device (suppress output) #
exec > /dev/null

# Redirect stderr to stdout #
exec 2>&1

# Redirect stdout to stderr #
exec 1>&2

# Use exec in a script to replace the script process #
exec "$@"

# Redirect input/output/error in one command #
exec 0< input.txt 1> output.txt 2> error.txt

# Open multiple files for reading #
exec 3< file1.txt 4< file2.txt

# Write headers to log file #
exec 3> log.txt
echo "Log started at $(date)" >&3
exec 3>&-

# Append to log file #
exec 3>> log.txt
echo "Additional log entry" >&3

# Conditional exec with file descriptor #
if [ -f input.txt ]; then
  exec 3< input.txt
  read data <&3
  exec 3<&-
fi

# Redirect to different devices based on conditions #
if [ "$DEBUG" = "true" ]; then
  exec 3>&1
else
  exec 3>/dev/null
fi
echo "Debug message" >&3

# Execute command in new session #
exec -c envsubst < template.conf > config.conf

# Preserve original stdout while redirecting #
exec 3>&1
exec 1> results.txt
# ... commands that write to stdout (goes to results.txt) ... #
# Restore original stdout #
exec 1>&3 3>&-

# Replace shell but keep same process ID #
exec -c bash

# Execute command with modified environment #
exec env PATH=/new/path:$PATH /bin/command

# Open file, read content, then close #
exec 3< file.txt
read -u 3 line
echo "First line: $line"
exec 3<&-

# Use exec with pipes for complex redirection #
exec 3< <(ls -la)  # Process substitution

# Redirect to a network socket (if available) #
# exec 3<>/dev/tcp/host/port #

# Temporarily redirect stdout to string variable #
exec 3>&1
result=$(exec 1>&3; command_that_outputs_to_stdout)
exec 3>&-

# Write to both stdout and file simultaneously #
exec > >(tee -a session.log)

# Redirect specific command errors to file #
exec 2>> command_errors.log

# Set up error handling in script execution #
exec 2> fatal_errors.log
exec 1> normal_output.log

# Replace process with a long-running service without forking #
exec python3 app.py

# Create a file descriptor for logging and use it throughout the script #
exec 4>> /var/log/myscript.log
echo "$(date): Starting script" >&4

# Redirect both stdout and stderr to separate files #
exec 1> output.log 2> error.log

# Duplicate file descriptor (stdout to both terminal and file) #
exec 3>&1 1> output.log
echo "This goes to file"
echo "This also goes to file"
exec 1>&3 3>&-  # Restore stdout

# Conditionally redirect based on environment variable #
| [ "$VERBOSE" = "1" ] && exec 4>&1 | | exec 4>/dev/null |
echo "Verbose info" >&4

# Execute with specific file descriptors open #
exec 5</tmp/input 6>/tmp/output

# Redirect error to output and output to file #
exec 1> output.log 2>&1

# Create a temporary file and redirect to it #
tmpfile=$(mktemp)
exec 3> "$tmpfile"
echo "Temporary output" >&3
exec 3>&-
cat "$tmpfile"
rm "$tmpfile"

# Reopen stdin to prevent further input #
exec 0</dev/null

# Redirect stderr to stdout temporarily #
{
  exec 2>&1
  # All output (stdout + stderr) goes to original stdout
  command_with_potential_errors
}

# Execute script with specific parameters replacing current process #
exec /bin/bash -c "source /etc/profile; exec $SHELL"

# Redirect to process substitution to filter output #
exec > >(tr a-z A-Z)  # All output becomes uppercase

# Set up a logging function with exec #
log() {
  exec 3>&1
  exec 1>> app.log
  echo "[$(date)] $*"
  exec 1>&3 3>&-
}
log "Application started"

# Execute with error handling #
set -e
exec 2> error_capture.txt
# Commands here... #

# Redirect output to network service (if netcat available) #
exec 3<>/dev/tcp/api.example.com/80
echo -e "POST /log HTTP/1.1\r" >&3
echo -e "Host: api.example.com\r" >&3
exec 3<&-

# Execute in a clean environment but keep some variables #
exec -c HOME=$HOME TERM=$TERM /bin/command

# Chain exec for complex file descriptor management #
exec 3< input.txt 4> temp.txt 5>> log.txt
# Use file descriptors 3, 4, and 5 in the script... #

# Redirect to error if file doesn't exist #
| [ -r "$file" ] && exec 3< "$file" | | exec 3<&- 2>&1 && echo "Error: cannot read file" >&2 |

# Preserve file descriptors across exec #
exec 3<&0 4>&1 5>&2  # Preserve stdin, stdout, stderr
exec new_command
# New command has access to original file descriptors 3, 4, 5 #

# Use exec with flock for process synchronization #
exec 200>/tmp/mylock
| flock -n 200 | | exit 1 |
# Critical section code here #
exec 200>&-

# Set up cleanup handler with exec #
trap 'exec 3>&- 4>&-' EXIT
exec 3> /tmp/important.log 4> /tmp/debug.log
# Work with file descriptors 3 and 4... #

# Execute with umask preserved #
exec -c umask $(umask) /bin/command

# Execute and inherit specific file descriptors #
exec 3<&3 4<&4  # Inherit existing file descriptors 3 and 4
exec new_command_with_fds

# Close all file descriptors except standard ones #
# (This is complex - typically use shell built-ins) #
exec 0<&- 1>&- 2>&-  # Close all standard descriptors

# Open file descriptor without immediately using it #
exec 10< /dev/null  # Open for later use in script
# Later in script: #
exec 10<&-  # Close when done

# Execute with a specific nice level #
exec nice -n 10 /path/to/command

# Execute in a specific namespace (if available) #
# exec nsenter -t PID -m -u /bin/sh #

# Execute with CPU affinity #
exec taskset -c 0,1 /path/to/command

```

## FAQ ##

### What Is The Difference Between Exec And Running A Regular Command? ###

- `exec command` - Replaces the current process entirely; no subprocess is created
- `command` - Creates a child process and runs the command in that process

When using `exec`, the original process is completely replaced by the new command, sharing the same PID.

### When Would I Want To Use Exec Instead Of A Regular Command? ###

Use `exec` when you want to:

- Replace the current shell/process without creating a child
- Maintain the same PID for the process
- Redirect file descriptors that persist for the new process
- Execute a command with modified file descriptors
- Optimize by avoiding process creation overhead
- Make a script become another program entirely

### How Do I Redirect File Descriptors With Exec? ###

The `exec` command can open, close, or redirect file descriptors:

```bash
# Redirect stdout to a file #
exec > output.txt

# Redirect stderr to a file #
exec 2> error.txt

# Open file descriptor 3 for reading #
exec 3< input.txt

# Close a file descriptor #
exec 3<&-

```

### What Does The -c Flag Do In Exec? ###

The `-c` flag clears the environment before executing the command, starting with a clean environment. This means that the new command will only have the variables explicitly passed to it or those defined in its default environment. Use `exec -c command` to run a command without any inherited environment variables.

### How Do I Use Exec In Shell Scripts? ###

In shell scripts, `exec` is often used to:

```bash
#!/bin/bash
# Replace the script process with the final command #
exec final_command "$@"

# Or to set up file descriptor redirection for the entire script #
exec 1> script_output.log
exec 2> script_error.log
# All output from commands below goes to these files #

```

### Can I Undo An Exec Command? ###

No, once an `exec` command has been executed, the original process is permanently replaced by the new command. There is no way to return to the original process. This is why `exec` is often used at the end of shell scripts to replace the script process entirely with the final command.
