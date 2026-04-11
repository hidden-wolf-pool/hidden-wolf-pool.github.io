# `iostat` #

- **Purpose:** System monitoring tool used to monitor system input/output statistics for devices, partitions, and system-wide information. It provides valuable insights into disk I/O performance and utilization.
- **Usage:** Diagnose performance issues related to disk I/O, monitor system health, and optimize resource usage.

## Basic Usage ##

Display a summary of system I/O statistics since the last boot:

```bash
iostat

```

Continuous monitoring with extended stats every second:

```bash
iostat -dx 1

```

Monitor in megabytes every 5 seconds:

```bash
iostat -m 5

```

Quick CPU stats check:

```bash
iostat -c

```

Device-specific stats only:

```bash
iostat -d

```

## Options ##

- `-c` — Display only the CPU statistics.
- `-d` — Display only the device statistics.
- `-x` — Provide extended statistics.
- `-k` — Display statistics in kilobytes per second.
- `-m` — Display statistics in megabytes per second.
- `-t` — Display current time and date with each output.
- `-z` — Suppress output for devices with no activity.

## Arguments ##

- 1: `interval` — Specify the interval between reports in seconds.
- 2: `count` — Specify the number of reports to generate.

## FAQ ##

### What Does `iostat` Measure? ###

It measures disk I/O operations, throughput, utilization, and other system-wide I/O statistics.

### How Do I Monitor a Specific Disk? ###

Use `iostat <device_name>`, for example, `iostat sda`.

### What Does the `%util` Column Mean? ###

It indicates the percentage of time the device was busy with I/O requests.

### How Can I See Historical Data? ###

`iostat` provides data since the last boot. For historical monitoring, use tools like `sar` or logging utilities.

### Why Are My Disk Stats High? ###

High stats could indicate heavy I/O load, disk bottlenecks, or inefficient I/O operations. Use extended stats to diagnose further.
