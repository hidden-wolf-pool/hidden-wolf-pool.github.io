# `free` #

- **Purpose:** The `free` command is used to display information about system memory usage, including physical and swap memory, as well as buffers and cached memory.
- **Usage:** It provides real-time statistics about memory allocation and usage in Linux systems.

## Basic Usage ##

Display memory usage in bytes:

```bash
free

```

Show memory usage in human-readable format (KB, MB, GB):

```bash
free -h

```

Display memory usage in megabytes:

```bash
free -m

```

## Options ##

- `-h` / `human` — Print sizes in human readable format (for example, 1K 2M 3G)
- `-b` / `bytes` — Display sizes in bytes
- `-k` / `kilo` — Display sizes in kilobytes
- `-m` / `mega` — Display sizes in megabytes
- `-g` / `giga` — Display sizes in gigabytes
- `-t` / `total` — Display a line with total memory usage.
- `-s` / `seconds` — Refresh display every N seconds.
- `-c` / `count` — Display only N times.
- `-w` / `wide` — Print wide output (show additional columns).

## FAQ ##

### What Does the "buffers" / "cache" Line Mean? ###

The "buffers" and "cache" lines show memory used by the kernel to improve performance. This memory can be freed when applications need it.

### Why is the "available" Memory Less Than "free" Memory? ###

"Available" memory takes into account memory used by buffers and cache, providing a more accurate picture of how much memory is truly free for new allocations.

### What is the Difference Between "total" and "used" Memory? ###

"Total" shows the total amount of physical memory, while "used" indicates how much of that memory is currently allocated by processes.

### Why Does the "shared" Column Sometimes Show Zero? ###

The "shared" column shows memory used by shared memory segments. It may show zero if no shared memory is in use.
