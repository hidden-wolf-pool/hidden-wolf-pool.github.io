# `ln` #

- **Purpose:** The `ln` command in Linux is used to create links between files or directories. It supports two types of links:
    - **Hard links** — Point directly to the inode of a file (same filesystem only).
    - **Symbolic (soft) links** — Act as shortcuts that reference a file/directory path (can span filesystems).
- **Usage:** `ln [OPTIONS] <target> <link name>`

## Basic Usage ##

Create a hard link:

```bash
ln <original> <hard link>

```

Create a symbolic link:

```bash
ln -s <original> <soft link>

```

## Options ##

- `-s` — Create a symbolic link.
- `-f` — Force overwrite if the link name already exists.
- `-i` — Prompt before overwriting an existing link.
- `-v` — Verbose mode; show what is being done.
- `-t <directory>` — Specify a target directory for the link.

## FAQ ##

### How Do I Check if a Link is Symbolic or Hard? ###

Use `ls -l`:

- Symbolic links display `->` (for example, `lrwxrwxrwx 1 user group 12 Jan 1 12:00 link -> target`).
- Hard links show normal file permissions without `->` and share the same inode (check via `stat`).

### Can I Create a Hard Link to a Directory? ###

No. Hard links cannot be created for directories (to prevent filesystem loops). Use symbolic links for directories:

```bash
ln -s <directory path> <link>

```

### What Happens if I Delete the Original File with a Symbolic Link? ###

The symbolic link becomes "broken" (points to a non-existent file). Hard links remain functional because they share the same underlying data.
