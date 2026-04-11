# `df` (Disk Free) #

- **Purpose:** The `df` (disk free) command is a standard Unix utility used to display the amount of available disk space for file systems. It shows the total space, used space, available space, and the percentage of use for each mounted file system.
- **Usage:** The command is primarily used by system administrators and users to monitor disk space and ensure that file systems do not run out of space.

## Basic Usage ##

See the available space on all currently mounted file systems in a human-readable format:

```bash
df -h

```

## Options ##

- `-a` / `--all` — Include pseudo, duplicate, and inaccessible file systems.
- `-h` / `--human-readable` — Print sizes in a human-readable format (for example, 1K 234M 2G).
- `-H` / `--si` — Print sizes in powers of 1000 (for example, 1.1G).
- `-i` / `--inodes` — List inode information instead of block usage.
- `-k` — Use 1024-byte units, instead of the default 512-byte units, when writing space figures.
- `-T` / `--print-type` — Print the file system type.
- `-x` / `--exclude-type=<type>` — Limit listing to file systems not of type `<type>`.

## FAQ ##

### What Does the Percentage Column Mean in the Output? ###

The percentage column shows how much of the disk space is used, with 100% indicating that the file system is full.

### Why Are Some File Systems Not Shown by Default? ###

By default, `df` hides pseudo-file systems like `tmpfs` and `devtmpfs`. Use `-a` to show all file systems.
