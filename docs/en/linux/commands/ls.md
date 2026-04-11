# `ls` #

- **Purpose:** The `ls` command lists directory contents — files and subdirectories — in Unix-like operating systems. It helps users quickly view what's in a given directory.
- **Usage:** `ls [OPTIONS] [FILE_OR_DIRECTORY]`

## Basic Usage ##

List files in the current directory:

```bash
ls

```

List files in a specific directory:

```bash
ls <path to directory>

```

Show detailed information (permissions, owner, size, timestamp):

```bash
ls -l

```

Show all files, including hidden ones (those starting with `.`):

```bash
ls -a

```

Sort by modification time (newest first):

```bash
ls -lt

```

Reverse the order of the sort:

```bash
ls -lr

```

Recursively list subdirectories:

```bash
ls -R

```

Colorize output (common in modern terminals):

```bash
ls --color

```

Combine long format and show hidden files:

```bash
ls -la

```

Long format, human-readable sizes, sorted by time:

```bash
ls -lht

```

List files matching a pattern (for example, all files):

```bash
ls *

```

List only files ending in `.txt`:

```bash
ls *.txt

```

## Options ##

### Basic ###

- `-a` —Shows all files, including hidden ones (starting with `.`).
- `-A` —Displays all files except `.` (current directory) and `..` (parent directory).
- `-l` —Detailed view with permissions, owner, size, and modification time.
- `-h` —Human-readable file sizes (KB, MB, GB).
- `-R` —Recursively lists subdirectories.

### Sorting and Filtering ###

- `-S` —Sorts by file size (largest first).
- `-t` —Sorts by modification time (newest first).
- `-X` —Sorts alphabetically by extension.
- `--sort=time` —Sorts by access time.

### Recursive Operations ###

- `-r` —Reverses the sort order.
- `-m` —Outputs files separated by commas.
- `-d */` —Lists only directory names, not their contents.

### Advanced Features ###

- `--color` —Color-coded output (enabled by default in most distros).
- `-i` —Shows inode numbers.
- `-Z` —Displays SELinux security contexts.
- `-L` —Follows symbolic links and shows target info.

## FAQ ##

### How Do I Exclude Certain Files From the Listing? ###

Use `--ignore` with a pattern:

```bash
ls --ignore="*.log"

```
