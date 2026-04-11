# `script` #

- **Purpose:** The `script` command creates a typescript of everything printed on the terminal, effectively recording a terminal session including both input and output. It's invaluable for documentation, debugging, teaching, audit trails, and reproducing issues. The command captures all terminal activity to a file, creating a complete record of commands executed, their output, and even timing information (with certain options). This is particularly useful when you need to demonstrate procedures, troubleshoot complex command sequences, maintain records of administrative actions, or create tutorials and examples.
- **Usage:** `script [OPTIONS] [FILE] [COMMAND...]`

## Basic Usage ##

Start recording a terminal session to typescript file:

```bash
script

```

Record with a custom filename:

```bash
script my_session.log

```

Execute a specific command and record the output:

```bash
script -c "ls -la && ps aux" session.log

```

Record with timing information:

```bash
script -T timing.log

```

Append to an existing file instead of overwriting:

```bash
script -a append_session.log

```

Record with specific shell:

```bash
script -s /bin/bash

```

Record with timing and command file:

```bash
script -T timing.log -c "df -h && free -m"

```

## Options ##

- `-a` — Append output to the specified file
- `-c` — Execute command rather than shell
- `-e` — Return exit code of child process
- `-f` — Flush output after each line
- `-q` — Be quiet (don't print start message)
- `-t` — Send timing data to standard error
- `-T` — Send timing data to the specified file
- `-s` — Specify shell to use instead of default
- `-V` — Print version information and exit
- `-h` — Print usage information and exit
- `-p` — Use real PTY for better compatibility
- `-E` — Record output without control characters

## Shortcuts ##

Common script operations:

```bash
# Start default recording session #
script

# Start session with custom file name #
script session_$(date +%Y%m%d_%H%M%S).log

# Record specific command execution #
script -c "apt update && apt upgrade" upgrades.log

# Record with no initial message #
script -q session.log

# Record and append to existing log #
script -a /var/log/session.log

# Control flush behavior for real-time recording #
script -f -c "tail -f /var/log/app.log" monitoring.log

# Record with timing data to separate file #
script -T timing.txt -c "long_running_task.sh" output.log

# Record session without control characters #
script -E clean_session.log

# Record as another user (using su) #
script -c "su - otheruser" user_session.log

# Record with specific shell #
script -s /bin/zsh zsh_session.log

# Record and compress automatically #
script -c "command" - | gzip > session.log.gz

# Time and record a command #
script -T timing.log -c "time heavy_computation.sh"

# Record network diagnostics #
script -c "ping -c 10 8.8.8.8 && traceroute 8.8.8.8" network_diag.log

# Record system information #
script -c "uname -a && uptime && whoami && pwd" system_info.log

# Record with flush after each write (for real-time monitoring) #
script -f -c "while true; do date; ps aux | head -5; sleep 5; done" live_monitor.log

# Record in quiet mode (no startup banner) #
script -q -c "python script.py" python_output.log

# Record with timing information for performance analysis #
script -T analysis.timing -c "for i in {1..100}; do echo $i; sleep 0.1; done" performance.log

# Record only the command output, not the script startup #
script -q -c 'ls -la' dir_contents.log

# Record multiple commands in sequence #
script -c "cd /tmp && mkdir test_dir && cd test_dir && pwd && ls -la" command_sequence.log

# Record with custom file permissions #
umask 077 && script private_session.log

# Record with exit code handling #
| script -e -c "failing_command" && echo "Previous command succeeded" | | echo "Previous command failed" |

# Record terminal interaction for debugging #
script -c "ssh user@server 'command'" ssh_session.log

# Record interactive session with specific timeout #
timeout 300 script -c "interactive_program" interactive.log

# Record output with specific encoding #
script -c "locale && LANG=en_US.UTF-8 command" locale_session.log

# Record and send to remote destination #
script -c "backup_script.sh" - | ssh user@remote "cat > /tmp/backup_session.log"

# Record using pseudo-terminal for better compatibility #
script -p session.log

# Record a complex command pipeline #
| script -c "find /var/log -name '*.log' -size +1M | head -5 | xargs ls -la" logs_analysis.log |

# Record a troubleshooting session #
| script -q -c "dmesg | tail -20 && journalctl -n 10 && ps aux | head -10" troubleshoot.log |

# Record with specific file size limit #
script -c "large_output_command" - | split -b 100M - session_part_

# Record and filter output simultaneously #
script -c "command" - | grep -v "unwanted" > filtered_output.log

# Record with automatic cleanup after #
script temp_session.log && mv typescript final_session_$(date +%s).log

# Record for demonstration purposes #
script -c "./demo_script.sh" demo_transcript.log

# Record while maintaining environment variables #
| script -c "env | grep -E '(PATH | HOME | USER)'" environment.log |

# Record a compilation process #
script -c "make clean && make all" compile_session.log

# Record a system update process #
script -c "apt update && apt list --upgradable && apt full-upgrade" system_update.log

# Record with specific PTY settings #
script -p -c "stty size; echo 'Terminal dimensions'" terminal_setup.log

# Record network connections #
script -c "netstat -tuln && ss -tuln" network_state.log

# Record process states #
script -c "ps aux --forest && pstree" process_tree.log

# Record disk usage and I/O #
script -c "df -h && iostat -x 1 5" disk_io.log

# Record memory analysis #
script -c "free -h && cat /proc/meminfo | head -10" memory_analysis.log

# Record file system details #
| script -c "mount | grep -E '(ext4 | xfs | btrfs)' && findmnt -D" filesystems.log |

# Record security checks #
script -c "lastlog && faillog && ls -la /etc/passwd /etc/shadow" security_check.log

# Record package management #
script -c "dpkg -l | grep -i package_name" package_check.log

# Record user management #
script -c "getent passwd && getent group" users_groups.log

# Record network interface configuration #
script -c "ip addr show && ip route show" network_config.log

# Record service status #
script -c "systemctl list-units --state=running" services_running.log

# Record cron jobs #
script -c "crontab -l && cat /etc/crontab" cron_jobs.log

# Record system limits #
script -c "ulimit -a && cat /proc/sys/fs/file-max" system_limits.log

# Record hardware information #
script -c "lscpu && lsblk && lspci | head -20" hardware_info.log

# Record system logs #
script -c "journalctl -n 50 --no-pager | head -20" system_logs.log

# Record kernel messages #
script -c "dmesg | tail -20" kernel_messages.log

# Record disk partition info #
| script -c "fdisk -l | grep -v 'dos\ | gpt'" partitions.log |

# Record network statistics #
script -c "cat /proc/net/dev && ss -s" network_stats.log

# Record scheduler stats #
script -c "cat /proc/sched_debug" scheduler_info.log

# Record interrupt statistics #
script -c "cat /proc/interrupts | head -5" interrupt_stats.log

# Record soft link information #
script -c "ls -la /proc/*/cwd | head -10" soft_links.log

# Record memory maps #
script -c "cat /proc/meminfo && free -m" memory_maps.log

# Record boot parameters #
script -c "cat /proc/cmdline" boot_params.log

# Record system performance #
script -c "vmstat 1 5" performance_stats.log

# Record disk scheduler #
script -c "cat /sys/block/*/queue/scheduler" disk_scheduler.log

# Record I/O statistics #
script -c "iostat -x" io_statistics.log

# Record process status #
script -c "cat /proc/loadavg && uptime" process_status.log

# Record with custom terminal size #
script -c "stty rows 40 cols 120; echo 'Size set'; tput cols; tput lines" terminal_size.log

# Record with multiple commands and error handling #
| script -c "cmd1 && cmd2 | | echo 'Cmd2 failed'; cmd3" multi_cmd_with_error.log |

# Record while checking dependencies #
script -c "which command1 && which command2 && command1 | command2" dependency_check.log

# Record with checksum generation #
script -c "sha256sum file.txt" checksum_session.log

# Record using a specific directory for logs #
script -c "cd /tmp && pwd && ls -la" temp_dir_session.log

# Record with process monitoring #
script -c "top -b -n 1 | head -20" process_monitor.log

# Record during system stress #
script -c "stress-ng --cpu 2 --timeout 10s" stress_test.log

# Record with detailed timing for analysis #
script -T timing_detailed.log -c "complex_operation.sh"; awk '{print $1, $2}' timing_detailed.log > intervals.txt

# Record debugging information with timestamps #
script -c "date; command_with_debug_flag --verbose; date" debug_session.log

# Record for reproducibility of an issue #
script -q -c "reproduce_bug.sh" bug_reproduction.log

# Record with output verification #
| script -c "command > output.txt && diff output.txt expected.txt | | echo 'Mismatch'" verification.log |

# Record with variable inputs #
script -c "for var in val1 val2 val3; do echo processing $var; command $var; done" variable_test.log

# Record with conditional execution #
script -c "if [ -f file ]; then command1; else command2; fi" conditional_session.log

# Record with function definitions #
script -c 'function test_func() { echo "Test func called"; }; test_func' function_session.log

# Record and analyze exit codes #
script -c "command1; echo RC1: $?;
            command2; echo RC2: $?;" exit_codes.log

# Record with logging to multiple destinations #
| script -c "command" - | tee output.log | grep "error" > errors.log |

# Record with error redirection #
script -c "command_with_stderr 2>&1" stderr_session.log

# Record with file descriptor manipulation #
script -c "command 3>&1 1>&2 2>&3" fd_manipulation.log

# Record complex bash operations #
script -c "for file in *.txt; do [ -f \"$file\" ](/%20-f%20%5C"$file%5C"%20.md) && echo \"Processing $file\"; done" bash_ops.log

# Record with external command integration #
script -c '{"command1"; "command2";} | command3' pipeline_session.log

# Record with arithmetic operations #
script -c "echo $((5*6)); echo $((2**10))" arithmetic_session.log

# Record with string manipulation #
script -c 'str="hello,world"; echo ${str//,/_}' string_session.log

# Record with array operations #
script -c 'arr=(one two three); echo ${arr[@]}; echo ${#arr[@]}' array_session.log

# Record with regex matching #
| script -c '[ "hello" =~ ^h.*o$ ](/%20"hello"%20=~%20^h.*o$%20) && echo matched | | echo unmatched' regex_session.log |

# Record with variable substitution #
script -c 'var="filename.txt"; echo ${var%.txt}.bak' substitution_session.log

```

## FAQ ##

### What Is The Difference Between Script And Tee? ###

- `script` - Records both input and output of a terminal session, including timing data with certain options
- `tee` - Duplicates the output stream to a file while also showing it on terminal

`script` is better for capturing complete terminal sessions, while `tee` is better for duplicating output from a single command or pipeline.

### How Do I Stop A Script Session? ###

Exit the script session by:

- Typing `exit` to leave the script shell
- Pressing `Ctrl+D` to end the session
- If using `script -c`, the session ends when the command completes

### Can I Record Multiple Sessions To The Same File? ###

Yes, use the `-a` option to append to an existing file:

```bash
script -a consolidated_session.log  # Appends to existing log

```

### How Do I Replay A Recorded Session? ###

Script recordings are plain text files that can be viewed with any text viewer:

```bash
# View session transcript #
cat typescript
less typescript
vim typescript

# Filter output #
grep "keyword" typescript

```

For playback with timing information, use `scriptreplay`:

```bash
scriptreplay timing.log  # Requires timing file generated with -T option

```

### How Do I Control Where The Output Is Stored? ###

By default, script saves to 'typescript', but you can specify a file:

```bash
script my_custom_file.log          # Save to specific file
script /path/to/logs/session.log   # Save to specific directory
script -c "command" /dev/null      # Run command without saving output

```

### Can Script Record Interactive Programs? ###

Yes, script is especially useful for recording interactive programs, but use the `-p` option for better compatibility with interactive programs that need a real PTY:

```bash
script -p -c "interactive_program"

```
