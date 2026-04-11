# `mv` #

- **Purpose:** The `mv` command in Linux is used to **move** or **rename** files and directories. It can transfer files between directories or change their names within the same location.
- **Usage:** `mv [options] <source> <destination>`

## Basic Usage ##

Move a file to another directory:

```bash
mv <file> <another directory>

```

Rename a file:

```bash
mv <old name> <new name>

```

Move and rename a directory:

```bash
mv <old folder>/ <new folder>/

```

## Options ##

- `-i` (interactive) — Prompt before overwriting existing files.
- `-f` (force) — Overwrite existing files without prompting.
- `-v` (verbose) — Show detailed output about the operation.
- `-u` (update) — Move only if the source is newer than the destination.
- `-n` (no-clobber) — Do not overwrite existing files.

## FAQ ##

### How Do I Prevent `mv` From Overwriting Files? ###

Use the `-n` option to avoid overwriting:

```bash
mv -n file.txt /safe/

```

### What Happens if I Use `mv` on a Directory That Doesn't Exist? ###

If the destination directory doesn't exist, `mv` will **rename** the source (if it's a single file/directory) to the destination name. To move a file into a non-existent directory, create it first with `mkdir`.

### Can I Undo an `mv` Operation? ###

There's no built-in "undo" for `mv`. If you accidentally overwrite a file, recovery depends on backups or filesystem snapshots. Always double-check your commands!

### How Do I Move Files Across Different Filesystems? ###

`mv` works across filesystems, but it **copies** the data first, then deletes the original. This is slower than moving within the same filesystem.

### Why Do I Get "Permission denied" When Using `mv`? ###

You need **write permission** on both the source and destination directories. Use `sudo` if necessary:

```bash
sudo mv file.txt /protected/

```
