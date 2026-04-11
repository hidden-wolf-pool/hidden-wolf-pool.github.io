# `pwd` #

- **Purpose:** Display the full path of the current working directory.
- **Usage:** Type `pwd` in the terminal and press Enter.

## Basic Usage ##

```bash
pwd

```

## Options ##

- `-L` / `--logical` — Print the logical path, which may include symbolic links.
- `-P` / `--physical`) — Print the physical path, resolving all symbolic links to their actual locations.

## Shortcuts ##

- **Variable `$PWD`** — Shell variable that holds the current directory.

## FAQ ##

### What Does `pwd` Stand For? ###

`pwd` stands for **print working directory**. It shows the full path from the root (`/`) to your current location in the filesystem.

### Why Do I Get Different Results with `pwd -L` and `pwd -P`? ###

- `pwd -L` shows the path **as you navigated it**, including symbolic links.
- `pwd -P` shows the **actual physical path** on the disk, resolving symbolic links to their real locations.

### Example of `-L` / `-P` ###

If `/home/user/link` is a symbolic link to `/var/data`, then:

- `pwd -L` → `/home/user/link`
- `pwd -P` → `/var/data`

### Can `pwd` Show the Path in a Different Format? ###

No, `pwd` only outputs the absolute path. For other formats, you can use:

- `basename $(pwd)` — Get only the current directory name.
- `dirname $(pwd)` — Get the parent directory path.

### Is `pwd` Available in All Shells? ###

Yes, `pwd` is a **built-in command** in most Unix/Linux shells (for example, Bash, Zsh, Ksh). It is also available as an external binary (`/bin/pwd`), but the built-in version is typically used.
