# `vmstat` #

- **Purpose:** Versatile System Monitoring Tool Used to Report Virtual Memory Statistics, Process Activity, and System I/O Activity in Real-time. It Provides a Comprehensive Overview of System Performance.
- **Usage:** Monitor system performance, diagnose bottlenecks, and troubleshoot issues related to memory usage, CPU activity, and I/O operations.

## Basic Usage ##

Display a summary of system statistics since the last boot:

```bash
vmstat

```

Continuous monitoring every second:

```bash
vmstat 1

```

Display stats every 2 seconds, 5 times:

```bash
vmstat 2 5

```

Detailed summary of various statistics:

```bash
vmstat -s

```

Monitor every 5 seconds indefinitely:

```bash
vmstat -d 5

```

Show active and inactive memory details:

```bash
vmstat -a

```

Display fork count for process creation:

```bash
vmstat -f

```

## Options ##

- `-s` — Display statistics in summary form.
- `-d` — Specify delay between reports in seconds.
- `-n` — Number of iterations to execute.
- `-a` — Display active and inactive memory.
- `-f` — Display fork count.
- `-m` — Display `slabinfo`.
- `-w` — Display wide output.

## FAQ ##

### What Does `vmstat` Measure? ###

It measures memory usage, swap activity, CPU activity, I/O operations, system processes, and other system-wide statistics.

### How Do I Interpret the Output Columns? ###

Common columns include: procs (processes), memory (memory usage), swap (swap activity), io (I/O operations), system (system activity), and CPU (CPU usage).

### What Does the `r` Column Mean ###

The `r` column shows the number of processes waiting for run time.

### How Can I Monitor Memory Usage Specifically ###

Use `vmstat -a` to see detailed memory usage statistics, including active and inactive memory.

### Why is My Swap Usage High ###

High swap usage could indicate insufficient RAM or memory leaks. Monitor memory usage and consider increasing RAM or optimizing processes.

### What Does the `si` and `so` Columns Represent ###

- `si` (swap in) shows data read from swap
- `so` (swap out) shows data written to swap.

### What Does Each Column in `vmstat` Output Mean? ###

The output columns represent:

- `procs` — Processes.
- `memory` — Memory statistics.
- `swap` — Swap statistics.
- `io` — Block I/O statistics.
- `system` — System statistics.
- `cpu` — CPU statistics.

### How to Interpret the Memory Statistics? ###

- `swpd` — Amount of virtual memory used.
- `free` — Idle memory.
- `buff` — Memory used as buffer cache.
- `cache` — Memory used as cache.
- `inact` — Inactive memory (only in some systems).
- `active` — Active memory (only in some systems).

### How to Monitor CPU Usage with `vmstat`? ###

Use the CPU section of the output:

- `us` — User space CPU time.
- `sy` — System CPU time.
- `id` — Idle CPU time.
- `wa` — I/O wait time.
- `st` — Stolen CPU time (virtualization).

### How to Check Swap Usage? ###

Look at the `swpd` column in the memory section. It shows the amount of virtual memory being used.

### Can `vmstat` Show Disk I/O Statistics? ###

Yes, the `bi` and `bo` columns show blocks received from and sent to the disk (blocks per second).
