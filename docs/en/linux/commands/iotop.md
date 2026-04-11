# `iotop` #

- **Purpose:**
    - Monitoring real-time I/O usage of processes and threads.
    - Displaying disk read/write statistics for running processes.
    - Identifying processes that cause high disk I/O load.
- **Usage:**
    - System administration tool for performance monitoring.
    - Troubleshooting disk I/O bottlenecks.
    - Resource usage analysis.

## Basic Usage ##

Start monitoring I/O usage in real-time:

```bash
sudo iotop

```

Show only processes with I/O activity:

```bash
sudo iotop -o

```

Batch mode output:

```bash
sudo iotop -b

```

Display processes instead of threads:

```bash
sudo iotop -P

```

## Options ##

- `-a` / `--accumulated` - Show accumulated I/O usage
- `-b` / `--batch` - Run in batch mode
- `-n <count>` - Exit after COUNT iterations
- `-o` - Show only processes with I/O activity
- `-P` / `--processes` - Show processes instead of threads
- `-u <user>` - Show only processes of the specified user
- `-p <PID>` - Show only specified PIDs
- `-d <secs>` - Delay between updates in seconds

## Shortcuts ##

- `c` - Change sort column.
- `o` - Toggle display of processes with I/O activity.
- `p` - Toggle display of processes/threads.
- `u` - Toggle display of user processes.
- `z` - Toggle display of zero-I/O processes.
- `q` - Quit.
- `h` - Help.

## FAQ ##

### What Does the "DISK READ" Column Show? ###

The DISK READ column displays the amount of data read from disk by each process during the last refresh interval.

### How to Filter Specific Users? ###

Use the `-u` option followed by the username to show only processes belonging to that user:

```bash
iotop -u <username>

```

### Why Are Some Processes Missing? ###

By default, `iotop` shows only processes with recent I/O activity. Use the `z` key to toggle display of all processes.

### How to Save Output to a File? ###

Run `iotop` in batch mode and redirect output:

```bash
iotop -b -n 10 > iotop_output.txt

```

### Can I Monitor Specific PIDs? ###

Yes, use the `-p` option followed by PID numbers:

```bash
iotop -p 1234 -p 5678

```
