# `fc` #

- **Purpose:** The `fc` command (fix command) is a built-in shell command that allows users to edit and re-execute commands from the shell history. It provides an interface to access, modify, and re-run previously entered commands using an external editor. The command is particularly useful when you need to correct mistakes in long or complex commands without retyping them entirely. FC enables efficient command-line editing by opening selected commands in the default editor (or a specified one), allowing users to make corrections before executing them again.
- **Usage:** `fc [OPTIONS] [FIRST [LAST]]`

## Basic Usage ##

Edit and re-execute the last command:

```bash
fc

```

Edit and re-execute a specific command number:

```bash
fc 123

```

Edit and re-execute commands in a range:

```bash
fc 100 110

```

List commands without editing:

```bash
fc -l

```

List commands with custom range:

```bash
fc -l 50 60

```

Execute command without editing:

```bash
fc -s

```

Execute command with substitution:

```bash
fc -s old=new

```

Use a specific editor:

```bash
fc -e vim

```

## Options ##

- `-e` — Specify the editor to use
- `-l` — List commands without invoking editor
- `-n` — Suppress line numbers when listing
- `-r` — Reverse the order of listed lines
- `-s` — Re-execute the command without editing
- `-p` — Use an alternate editor and save history
- `-a` — Select all commands when using ranges
- `-i` — Perform case-insensitive matching in search
- `-x` — Don't add command to history list

## Shortcuts ##

Common fc operations:

```bash
# Edit the last command #
fc

# Edit command with specific number #
fc 105

# List recent commands with numbers #
fc -l -5

# List last 10 commands #
fc -l -10

# Execute last command starting with 'grep' #
fc -s grep

# Replace text in previous command and execute #
fc -s find=locate

# Edit commands from a specific range #
fc 50 60

# List commands containing pattern #
fc -l | grep pattern

# Execute last command with substitution #
fc -s old_text=new_text

# Use specific editor for editing #
fc -e nano

# List commands in reverse order #
fc -r -l

# List commands without line numbers #
fc -n -l

# Execute last command without opening editor #
fc -s

# Repeat last command with modifications #
fc -s ^old^new^

# Show last 20 commands #
fc -l -20

# Edit command using vi editor #
fc -e vi

# List commands in reverse chronological order #
fc -r -l 10

# Execute command without adding to history #
fc -x -s

# View commands from specific time period #
fc -l | tail -20

# Search history for specific command and edit #
| history | grep command_name | tail -1 | awk '{print $1}' | xargs fc |

# Edit and execute multiple commands at once #
fc 100 105

# Show commands with custom format #
fc -n -l | sed 's/^/# /'

# Execute last command that matches pattern #
fc -s ls

# Substitute and execute with confirmation #
fc -s -v find=replace

# Run fc on commands matching a pattern #
| history | grep -i 'pattern' | fc -s |

# Edit and re-execute a command from history by number #
| fc $(history | grep 'pattern' | tail -1 | awk '{print $1}') |

# Show commands with timestamps if available #
fc -l | awk '{print strftime("%H:%M:%S"), $0}'

# List commands with relative numbering (from current) #
fc -l -10 +0

# Execute last command with prefix #
fc -s 'sudo !!'

# Use fc to edit complex command lines #
fc -e vim 50  # Edit command 50 with vim

# Batch edit several commands #
fc -e emacs 100 105  # Edit commands 100-105 with emacs

# Show only commands without showing the command itself #
fc -n -l -5 | nl

# Execute previous command with different parameters #
fc -s param1=newparam1

# Skip certain commands in listing #
| fc -l | grep -v "ls\ | cd" |

# Show commands within a specific time range #
fc -l | awk '$2 > start_time && $2 < end_time {print}'

# Create a command alias using fc behavior #
alias recmd='fc -s'

# Execute multiple substitutions #
fc -s old1=new1 -s old2=new2

# Use fc to recall and modify complex pipelines #
fc -s | grep "complex pipeline"

# List commands executed by a specific user (in some shells) #
fc -l | grep "username"

# Show only commands that failed (exit code != 0) #
# (Requires additional scripting for this functionality) #

# Create a temporary command with fc #
fc -s 'echo "test command"'

# Edit command history from within a script #
fc -e '' -s  # Use empty editor string to just execute

# Get command without executing #
fc -l -1 | tail -1

# Search history backwards for pattern and edit #
| fc -l | grep -F "pattern" | tail -1 | awk '{print $1}' | fc |

# Execute last command with all arguments unchanged except one #
fc -s old_arg=new_arg

# Show command before executing with fc #
fc -l | tail -n 1 && fc

# Edit command using temporary file #
fc -e "vim -n"  # Use vim with no swap file

# Execute previous command with different working directory #
cd /new/path && fc -s

# Chain fc with other commands #
| fc -l -3 | tail -1 | awk '{print $1}' | xargs -I {} fc {} |

# Use fc in combination with history expansion #
fc -s !$  # Use with other history expansion

# Execute command with environment variables #
FCEDIT=nano fc 50

# List commands with custom editor #
EDITOR=mcedit fc -l

# Suppress output while using fc #
fc -s 2>/dev/null

# Find recent command using pattern matching #
| fc -l | grep -i "grep\ | find\ | ps" |

# Execute command with different shell #
fc -s 'bash -c "$(fc -ln -1)"'

# Show last command without executing #
fc -ln -1

# Re-edit a command multiple times before execution #
fc -e vim 105  # Edit command 105 multiple times if needed

# Execute command from another user's history (if permitted) #
# Depends on system configuration #

# Use fc to repeat complex command sequences #
fc -s 'for i in {1..10}; do echo $i; done'

# Find and edit command by matching arguments #
| history | awk '/command.*arg/ {print $1}' | tail -1 | xargs fc |

# Show command history statistics #
| fc -l | awk '{count[$2]++} END {for(cmd in count) print cmd, count[cmd]}' | sort -k2 -nr |

# Use fc to recall and modify commands with pipes #
| fc -l | grep ' | ' | tail -5 |

# Execute command with modified environment #
fc -s 'VAR=value command'

# Create a command template using fc #
fc -s 'template_command -a ARG1 -b ARG2'

# Edit and execute commands conditionally #
if [ condition ]; then fc -s command_name; fi

# Use fc with shell functions #
fc -s 'function_name() { commands; }'

# Execute command with time measurement #
fc -s 'time command'

# Execute command with output redirection #
fc -s 'command > output.txt 2>&1'

# Search for commands in specific directory #
| fc -l | grep "$(pwd | sed 's/\//\\\\\//g')" |

# Execute command with resource limits #
fc -s 'ulimit -t 10; command'

# Repeat command with different input #
fc -s 'command < new_input.txt'

# Use fc to modify and execute complex command chains #
| fc -s 'cmd1 && cmd2 | | cmd3' |

# Execute command in background #
fc -s 'command &'

# Execute command with nice priority #
fc -s 'nice -n 10 command'

# Execute command with ionice #
fc -s 'ionice -c 3 command'

# Execute command as different user #
fc -s 'sudo -u user command'

# List commands in a specific format #
fc -n -l | awk '{printf "%4d: %s\n", NR, $0}'

# Execute last command with confirmation #
read -p "Execute last command? " -r; [ $REPLY =~ ^[Yy](/%20$REPLY%20=~%20^[Yy.md) && fc -s

# Use fc with command substitution #
fc -s 'result=$(command)'

# Execute command with strace #
fc -s 'strace command'

# Execute command with perf #
fc -s 'perf record command'

# Execute command with valgrind #
fc -s 'valgrind command'

# Execute command with timeout #
fc -s 'timeout 30s command'

# Execute command with retries #
fc -s 'until command; do sleep 1; done'

# Execute command with specific locale #
fc -s 'LC_ALL=C command'

# Show and edit command with specific shell options #
fc -s 'set -x; command'

# Execute command with logging #
fc -s 'command 2>&1 | tee command.log'

# Execute command in a specific namespace (if available) #
fc -s 'nsenter -t PID -m command'

```

## FAQ ##

### What Is The Difference Between Fc And History Commands? ###

- `fc` - Edits and re-executes commands from history in an editor
- `history` - Lists command history with options to execute directly or manipulate the history list

`fc` provides an interactive editing experience, while `history` offers more programmatic access to the command history.

### How Do I Specify Which Editor Fc Uses? ###

The `fc` command uses the editor specified by the `FCEDIT` or `EDITOR` environment variable. If neither is set, it typically defaults to `vi`:

```bash
# Set for current session #
export FCEDIT=nano
export EDITOR=vim

# Or specify directly with -e flag #
fc -e nano 105

```

### How Do I Execute A Previous Command Without Editing? ###

Use the `-s` flag to re-execute without opening an editor:

```bash
fc -s  # Execute last command
fc -s ls  # Execute last command starting with 'ls'
fc -s old=new  # Execute last command with text substitution

```

### How Do I List Commands Without Editing Them? ###

Use the `-l` flag to list commands without opening an editor:

```bash
fc -l          # List all commands
fc -l -5       # List last 5 commands
fc -l 100 110  # List commands in range

```

### What Does Fc Do If No Range Is Specified? ###

When no range is specified:

- `fc` (with no args) - Edit and re-execute the last command
- `fc -l` - List the last 16 commands
- The behavior may vary depending on shell configuration, but typically refers to the most recent command

### Can I Use Fc To Edit Multiple Commands At Once? ###

Yes, you can specify a range of commands to edit together:

```bash
fc 100 105  # Edit commands 100 through 105 in the same editor session

```

The commands will be opened together in your editor, allowing you to modify multiple commands before they're executed sequentially.
