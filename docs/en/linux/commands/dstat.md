# `dstat` #

- **Purpose:** DSTAT is a versatile resource statistics tool that combines the functionality of multiple system monitoring utilities like vmstat, iostat, ifstat, and mpstat into a single, powerful command. It provides real-time monitoring of system resources including CPU usage, disk I/O, network traffic, memory usage, and many other system metrics. Dstat is designed to be more flexible and informative than traditional monitoring tools, making it excellent for system administrators, developers, and anyone needing to analyze system performance and resource utilization in real-time.
- **Usage:** `dstat [OPTIONS] [DELAY [COUNT]]`

## Basic Usage ##

Monitor CPU, disk, network, and system stats every 1 second:

```bash
dstat -cdnm 1

```

Monitor with 2-second intervals for 10 iterations:

```bash
dstat -cdnm 2 10

```

Monitor with comprehensive system stats:

```bash
dstat -clmndpsy

```

Monitor with output in CSV format:

```bash
dstat --output system_stats.csv -cdnm

```

Monitor specific plugins only:

```bash
dstat --cpu --disk --net

```

Show top 5 processes by CPU usage:

```bash
dstat --top-cpu 5

```

Show top processes by memory usage:

```bash
dstat --top-mem

```

Monitor disk utilization by device:

```bash
dstat --disk-util

```

Monitor system load:

```bash
dstat --load

```

Monitor interrupts:

```bash
dstat --int

```

Monitor context switches:

```bash
dstat --sys

```

## Options ##

- `-c` — Enable CPU stats (user, system, idle, wait)
- `-C` — Enable specific CPU stats (0,1,all)
- `-d` — Enable disk stats (read, write)
- `-D` — Enable specific disk stats (total,hda,sda)
- `-g` — Enable page stats (page-in, page-out)
- `-i` — Enable interrupt stats
- `-l` — Enable load average stats
- `-m` — Enable memory stats (used, buff, cach, free)
- `-M` — Enable specific memory stats (used,buffers,cached,total)
- `-n` — Enable network stats (recv, send)
- `-N` — Enable specific network stats (eth0,eth1)
- `-p` — Enable process stats (run, blk, new)
- `-r` — Enable I/O request stats (read/write)
- `-s` — Enable swap stats (used, free)
- `-t` — Enable time/date output
- `-T` — Enable time counter (epoch)
- `-u` — Enable utilization stats
- `-v` — Enable VM stats (v-pages)
- `-y` — Enable system stats (int, csw)
- `--aio` — Enable asynchronous I/O stats
- `--fs` — Enable file system stats
- `--ipc` — Enable IPC stats
- `--lock` — Enable lock stats
- `--mem` — Enable memory usage stats
- `--raw` — Enable raw stats
- `--socket` — Enable socket stats
- `--tcp` — Enable TCP stats
- `--udp` — Enable UDP stats
- `--unix` — Enable UNIX stats
- `--vm` — Enable virtual memory stats
- `--output` — Redirect output to a file
- `--csv` — Generate CSV format output

## Shortcuts ##

Common dstat operations:

```bash
# Monitor basic system resources every 2 seconds #
dstat -cdnm 2

# Monitor with time stamps #
dstat -t -cdnm

# Monitor with 5-second intervals #
dstat -cdnm 5

# Monitor and save to CSV file #
dstat --output system_report.csv -cdnm

# Monitor only CPU and memory #
dstat -cm

# Monitor all available stats #
dstat -a

# Monitor specific network interface #
dstat -N eth0

# Monitor specific disk #
dstat -D sda

# Monitor with top CPU consumers #
dstat --top-cpu

# Monitor with top memory consumers #
dstat --top-mem

# Monitor with top I/O processes #
dstat --top-io

# Monitor disk utilization per device #
dstat --disk-util

# Monitor system load #
dstat --load

# Monitor interrupts #
dstat -i

# Monitor context switches #
dstat -y

# Monitor with latency information #
dstat --latency

# Monitor with queue length #
dstat --queue

# Monitor with filesystem statistics #
dstat --fs

# Monitor with socket statistics #
dstat --socket

# Monitor with TCP statistics #
dstat --tcp

# Monitor with UDP statistics #
dstat --udp

# Monitor with process statistics #
dstat --proc-count

# Monitor with system statistics #
dstat --sys

# Monitor with memory details #
dstat --mem

# Monitor with swap usage #
dstat -s

# Monitor with paging activity #
dstat -g

# Monitor with I/O requests #
dstat -r

# Monitor with CPU usage breakdown #
dstat -c --cpu-use

# Monitor with network details #
dstat --net-packets

# Monitor with top latency processes #
dstat --top-latency

# Monitor specific CPUs #
dstat -C 0,1,2

# Monitor multiple disks #
dstat -D sda,sdb

# Monitor with color output #
dstat -cdnm --nocolor  # To disable color

# Monitor with wide output #
dstat -clmnpsy

# Monitor in a compact format #
dstat -c -y -i -l --nocolor

# Monitor for a specific duration #
dstat -cdnm 1 60  # For 60 seconds at 1-second intervals

# Monitor with specific delay and count #
dstat -cdnm 5 20  # Every 5 seconds, 20 times

# Monitor with average calculation #
dstat -cdnm --avg1 --avg5 --avg15

# Monitor with peak values #
dstat -cdnm --peak

# Monitor with percentile values #
dstat -cdnm --percentile

# Monitor with rate calculation #
dstat -cdnm --rate

# Monitor with unit conversion #
dstat -cdnm --integer

# Monitor with byte units #
dstat -cdnm --bits  # For network in bits

# Monitor with megabyte units #
dstat -cdnm --megabytes

# Monitor with output to stdout only #
dstat -cdnm --noout

# Monitor with specific plugins #
dstat --cpu --mem --disk --net

# Monitor with plugin-specific options #
dstat --cpu-adv --mem-adv

# Monitor with a custom delay #
dstat -cdnm 0.5  # Every half second

# Monitor with total values #
dstat -cdnm --total

# Monitor with time elapsed #
dstat -cdnm --time

# Monitor with epoch time #
dstat -cdnm --epoch

# Monitor and highlight values #
dstat -cdnm --black-on-white  # Change color scheme

# Monitor with minimal columns #
dstat -c  # Only CPU stats

# Monitor with maximum detail #
dstat -a --top-cpu --top-mem --top-io

# Monitor with conditional coloring #
dstat -cdnm --threshold 80

# Monitor with plugin summary #
dstat --list  # To see all available plugins

# Monitor network errors #
dstat --net-errors

# Monitor disk errors #
dstat --disk-errors

# Monitor with process info #
dstat --proc

# Monitor with detailed I/O stats #
dstat --io

# Monitor with detailed CPU stats #
dstat --cpu-use --cpu-system --cpu-user

# Monitor and filter results #
dstat -cdnm | grep -v "00"

# Monitor with specific time format #
dstat -t --time-format "%H:%M:%S"

# Monitor with epoch timestamps #
dstat -T

# Monitor and highlight high loads #
dstat -l --threshold 2.0

# Monitor for performance bottlenecks #
dstat -clmndpsy --top-cpu

# Monitor storage performance #
dstat --disk-util --io

# Monitor network performance #
dstat --net-packets --net-errors

# Monitor memory pressure #
dstat -m --swap

# Combine with grep for specific patterns #
| dstat -cdnm | grep -E "(hi | unreachable)" |

# Monitor with specific color themes #
dstat --theme solarized

# Show only values exceeding thresholds #
dstat -cdnm --threshold-cpu 50 --threshold-mem 75

# Monitor with periodic totals #
dstat -cdnm --period 60  # Show totals every minute

# Monitor with cumulative values #
dstat -cdnm --cumulative

# Monitor and calculate efficiency ratios #
dstat -clmnd --efficiency

# Monitor with specific precision #
dstat -cdnm --precision 2

# Monitor with plugin-specific configuration #
dstat --cpu-steal --cpu-guest

# Monitor with extended network stats #
dstat --net-raw

# Monitor with filesystem information #
dstat --fs-count

# Monitor with process creation stats #
dstat --proc-new

# Monitor with detailed socket stats #
dstat --socket-details

# Monitor with TCP connection states #
dstat --tcp-states

# Monitor with UDP statistics #
dstat --udp-details

# Monitor with memory details #
dstat --mem-adv

# Monitor with advanced disk stats #
dstat --disk-adv

# Monitor with specific output format #
dstat -cdnm --output-format json  # If supported

# Monitor and compress output #
dstat -cdnm | gzip > stats.gz

# Monitor with different measurement units #
dstat --float --unit 1024  # Use 1024-byte units

```

## FAQ ##

### What Is The Difference Between Dstat And Other Monitoring Tools? ###

- `dstat` - Combines multiple monitoring tools in one, highly customizable, plugin-based architecture
- `top` - Process-focused view, limited system resource overview
- `iostat` - Disk I/O focused only
- `vmstat` - System-level statistics only
- `htop` - Enhanced process viewer but less resource detail than dstat

Dstat provides a unified view of system resources with plugin architecture for extensibility.

### How Do I Interpret The Dstat Output? ###

Dstat output columns represent different system metrics:

- CPU: User%, System%, Idle%, Wait% (for -c option)
- Disk: Read, Write (for -d option)
- Network: Receive, Send (for -n option)
- System: Run queue, Context switches, Interrupts (for -y option)
- Load: Average load over 1, 5, and 15 minutes (for --load)

Higher percentages/values indicate higher resource utilization.

### How Do I Monitor Specific Resources Over Time? ###

Use the delay and count parameters:

```bash
# Monitor for 30 seconds with 2 second intervals #
dstat -cdnm 2 15

# Monitor indefinitely until stopped with Ctrl+C #
dstat -cdnm 1

```

You can redirect output to a file for later analysis:

```bash
dstat -cdnm 1 --output stats.csv

```

### Can I Monitor Specific Devices With Dstat? ###

Yes, use the capital letter options:

- `-C 0,1,2` - Monitor specific CPUs
- `-D sda,sdb` - Monitor specific disks
- `-N eth0,eth1` - Monitor specific network interfaces

### How Do I Export Dstat Data For Further Analysis? ###

Use the `--output` option to save data in CSV format:

```bash
dstat --output system_performance.csv -cdnm 1 120  # 2 minutes of data

```

You can then import the CSV file into spreadsheet applications or analysis tools for further processing and visualization.

### How Do I Monitor Multiple Systems Simultaneously? ###

Dstat monitors only the local system. For multiple systems, consider:

- Running dstat with SSH in parallel on different systems
- Using centralized monitoring solutions like Nagios, Zabbix, or Prometheus
- Combining dstat with scripts that gather data from multiple systems
