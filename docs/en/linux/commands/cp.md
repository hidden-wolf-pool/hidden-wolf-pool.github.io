# `cp` #

- **Purpose:** The `cp` command in Linux is used to copy files and directories from one location to another. It preserves the original file while creating a duplicate at the specified destination.
- **Usage:** `cp [options] <source> <destination>`

## Basic Usage ##

Copy a single file:

```bash
cp <file> <path>

```

Copy several files (`file1.txt`, `file2.txt`) into a directory `mydir`:

```bash
cp file1.txt file2.txt mydir/

```

Copy a directory (recursively):

```bash
cp -r <source folder> <destination folder>

```

## Options ##

- `-r` / `--recursive` — Copy directories recursively (includes all subdirectories and files).
- `-i` / `--interactive` — Prompt before overwriting an existing file.
- `-v` / `--verbose` — Display detailed information about the copying process.
- `-u` / `--update` — Copy only when the source file is newer than the destination (or doesn't exist).
- `-p` — Preserve file attributes (for example, ownership, permissions, timestamps).
- `-n` / `--no-clobber` — Do not overwrite an existing file.
- `-a` / `--archive` — Archive mode, preserves almost all attributes and copies recursively (often used for backups).

## Shortcuts ##

Use wildcards (`*`) to copy multiple files matching a pattern:

```bash
cp *.txt <path>

```

Copy to the current directory using `.`:

```bash
cp <path> .

```

## FAQ ##

### How Do I Avoid Overwriting Existing Files? ###

Use the `-n` (no clobber) option:

```bash
cp -n file.txt backup/

```

### How Can I Be Prompted Before Overwriting? ###

Use the `-i` (interactive) option:

```bash
cp -i file.txt backup/

```

### How Do I Copy Only Newer Files? ###

Use the `-u` (update) option:

```bash
cp -u source/file.txt backup/

```

### What's The Difference Between `-r` and `-a`? ###

- `-r` copies directories recursively but doesn't preserve file metadata (permissions, timestamps, and so on).
`-a` (`--archive`) copies recursively _and_ preserves all file attributes (like `-p`, plus recursion). It's ideal for backups.

```bash
cp -a myproject/ backup/

```

### Can I Copy Files Across Different Filesystems? ###

Yes. The `cp` command works across different filesystems (for example, from an external drive to your home directory). File attributes may not always be fully preserved depending on the target filesystem's capabilities.
