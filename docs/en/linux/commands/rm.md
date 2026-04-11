# `rm` #

- **Purpose:** The `rm` command (short for "remove") is used in Linux/Unix systems to delete files and directories. It permanently removes specified objects from the filesystem.
- **Usage:** `rm [options] <file / directory>`

## Basic Usage ##

Delete a single file:

```bash
rm <file>

```

Delete multiple files:

```bash
rm <file1> <file2> <file3>

```

Remove a directory (non-empty):

```bash
rm -r <directory>

```

## Options ##

- `-i` — Interactive mode, prompt for confirmation before deleting each file.
- `-f` — Force deletion, ignore non-existent files and never prompts.
- `-r` / `-R` — Recursive deletion, remove directories and their contents recursively.
- `-v` — Verbose mode, display detailed information about each deleted item.
- `--` — Treat all following arguments as filenames (useful when deleting files starting with `-`).

## Shortcuts ##

Use wildcards (`*`, `?`, `[]`) to match multiple files:

```bash
rm *.bak        # Removes all .bak files
rm log?.txt     # Removes log1.txt, log2.txt, logN.txt

```

## FAQ ##

### How Can I Recover a File Deleted with `rm`? ###

Unfortunately, `rm` permanently deletes files. Recovery is extremely difficult and often impossible without specialized tools or backups. Always double-check your command before executing.

### How Do I Delete a File with a Name Starting with a Dash (`-file.txt`)? ###

You lack write permissions for the file or directory. Use `sudo` to elevate privileges (if authorized):

```bash
sudo rm protected_file.txt

```

### Can `rm` Delete Hidden Files? ###

Use `--` to indicate the end of options:

```bash
rm -- -file.txt

```

### What's The Difference Between `rm -r` and `rm -rf`? ###

- `rm -r`: Recursively deletes directories but may prompt for confirmation or fail on protected files.
- `rm -rf`: Forces recursive deletion without prompts or errors (use with caution!).
