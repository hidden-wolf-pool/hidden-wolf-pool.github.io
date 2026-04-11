# `atop` #

- **Purpose:** ATOP is an advanced system and process monitor for Linux. It displays the occupation of system resources by active processes, including CPU, memory, disk and network utilization at user-specified intervals. It also provides system-level counters for power management and can log historical data for later analysis. ATOP gives administrators a bird's eye view of their system's overall load and can help identify performance bottlenecks.
- **Usage:** `atop [OPTIONS] [INTERVAL [COUNT]]`

## Basic Usage ##

Start ATOP with default 10-second interval:

```bash
atop

```

Start ATOP with custom interval (5 seconds):

```bash
atop 5

```

Start ATOP with specified count of updates:

```bash
atop 5 10  # Update every 5 seconds, 10 times total

```

Read from a log file:

```bash
atop -r /var/log/atop/atop_20230101

```

Generate ASCII log file:

```bash
atop -w /path/to/logfile 5

```

Read and filter by process name:

```bash
atop -r -P processname

```

Start ATOP as a specific user:

```bash
sudo atop

```

## Options ##

- `-w` — Write a raw log file (for later replay)
- `-r` — Read a raw log file (for later replay)
- `-t` — Show all threads instead of processes
- `-P` — Filter processes by name
- `-E` — Enable all scheduling entities
- `-m` — Show only memory-related information
- `-n` — Show only network-related information
- `-p` — Show only per-process information
- `-P` — Filter by process name
- `-C` — Show only colors
- `-f` — Force to run in full-screen mode
- `-V` — Show version number

## Shortcuts ##

Common atop operations:

```bash
# Start atop with 2-second interval #
atop 2

# Start atop with logging to file #
atop -w /tmp/atop.log 1

# View atop log file #
atop -r /tmp/atop.log

# Filter processes by name #
atop -r -P nginx /tmp/atop.log

# Show only processes consuming resources #
atop -P cpu -P mem 5

# Show memory usage details #
atop -m

# Show network usage details #
atop -n

# Show threads instead of processes #
atop -t

# Start atop and log with timestamp #
atop -w "atop_$(date +%Y%m%d_%H%M%S).raw" 5

# Compare system state at different times #
atop -r logfile -b 05:00 -e 06:00

# Show only specific metrics (CPU, MEM) #
atop -P CPU -P MEM

# Sort by a specific column #
# Press 'P' to sort by process name #
# Press 'C' to sort by CPU usage #
# Press 'M' to sort by memory usage #

# Navigate through historical data #
# In replay mode: 'b' to go back in time #
# In replay mode: 'f' to go forward in time #

# Show only processes from specific user #
atop -u username

# Enable detailed disk information #
atop -D

# Show power management information #
atop -y

# Show IP address resolution #
atop -A

# Filter by system call #
atop -S

# Start atop with all possible information #
atop -a

# Capture system statistics for analysis #
atop -w /var/log/atop/atop_daily 10

# View specific time period from log #
atop -r -b 10:00 -e 11:00 /var/log/atop/atop_20230101

# Show only errors/warnings #
atop -E

# Show specific resource usage #
atop -P "process_name" -w /tmp/output.raw

# Monitor until specific system load #
atop -w /tmp/high_load.raw 1  # Then manually stop when load occurs

# Show only failed processes #
atop -F

# Generate report for specific time period #
atop -r -b 09:00 -e 17:00 /var/log/atop/atop_20230101

# Monitor only specific CPU cores #
atop -P all

# Show in batch mode (for scripts) #
atop -b -o /tmp/atop_batch.txt

# Show only processes with specific status #
atop -P Z  # Show zombie processes

# Monitor specific network interface #
atop -N eth0

# Show only processes using disk #
atop -P DSK

# Show only processes using network #
atop -P NET

# Set specific log rotation #
atop -w /var/log/atop/atop_current 60 &
# Then rotate daily with cron #

# Monitor specific user's processes #
atop -u username

# Show peak resource usage periods #
atop -r -P cpu | grep -A 10 -B 10 "high value"

# Export data for external analysis #
| atop -r -V 20230101 | grep -E "(proc | mem | cpu)" > analysis.csv |

# Monitor specific resource with high detail #
atop -P IO

# Compare two time periods #
atop -r -b 09:00 -e 10:00 log1.raw
atop -r -b 14:00 -e 15:00 log2.raw

# Analyze logs for specific process types #
| atop -r -P "java | python | apache" |

# Generate summary reports #
atop -r -P "all,cpu,mem,ds,net"

# Show only errors in logs #
| atop -r -P "err | fail | warn" /var/log/atop/logfile |

# Monitor resource usage during specific operations #
atop -w /tmp/operation_monitor.raw 2 &

# Analyze peak usage times #
atop -r -P cpu -P mem | sort -k column_value -n

# Show process tree #
atop -t

# Monitor system during performance tests #
atop -w /tmp/performance_test.raw 1

```

## FAQ ##

### What Is The Difference Between Atop And Top? ###

- `top` - Real-time system monitor, shows processes sorted by resource usage
- `atop` - More comprehensive system monitor, includes logging capabilities, historical analysis and power management info

ATOP provides more comprehensive system information and can record data for later analysis.

### How Do I Log ATOP Data For Later Analysis? ###

Use the `-w` flag to write log files:

```bash
# Log data every 10 seconds #
atop -w /var/log/atop/atop_$(date +%Y%m%d).raw 10

# This creates a raw file that can be replayed later with `atop -r` #

```

### How Do I View Historical ATOP Data? ###

Use the `-r` flag to replay log files:

```bash
# View today's log #
atop -r /var/log/atop/atop_20230101

# View data from specific time period #
atop -r -b 09:00 -e 17:00 /var/log/atop/atop_20230101

```

### What Are The Common ATOP Keyboard Shortcuts? ###

Inside ATOP:

- `t` - Show threads instead of processes
- `v` - Show only processes with virtual memory activity
- `g` - Group processes by name
- `c` - Show full command line
- `u` - Show specific user's processes
- `C` - Sort by CPU usage
- `M` - Sort by memory usage
- `P` - Sort by process name
- `D` - Sort by disk activity
- `N` - Sort by network activity
- `T` - Sort by process tree
- `b` - Go back in time (when replaying logs)
- `f` - Go forward in time (when replaying logs)
- `q` - Quit

### How Do I Filter Processes In ATOP? ###

```bash
# At command line #
atop -P nginx    # Filter for 'nginx' processes

# In ATOP interactive mode #
# Press 'P' followed by the process name pattern #

```
