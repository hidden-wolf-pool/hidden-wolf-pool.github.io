# `rmdir` #

- **Purpose:** Remove empty directories in a Linux/Unix filesystem. The `rmdir` command deletes only directories that contain no files or subdirectories.
- **Usage:** `rmdir [options] <directory>`

## Basic Usage ##

Remove a single empty directory:

```bash
rmdir

```

## Options ##

- `-p` / `--parents` — Remove a directory and its parent directories if they are also empty.
- `-v` / `--verbose` — Display verbose output, showing each directory being removed.
- `--ignore-fail-on-non-empty` — Ignore errors if a directory is not empty (useful in scripts).
