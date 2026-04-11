# `whatis` #

- **Purpose:** Provide a brief description of a command or utility in Linux. The `whatis` command queries the system's manual page database (man pages) and returns a concise one-line summary for the specified command.
- **Usage:** `whatis [options] <command>`

## Basic Usage ##

Get a short description of the `ls` command:

```bash
whatis ls

```

## Options ##

- `-r` — Use regular expressions to search for patterns in command names.
- `-w` — Use wildcards (`*`, `?`) in the search term.
- `-s` — Search only specific sections of the manual (for example, `1` for user commands).
- `-l` — Display entries in long format (includes path to the man page).

## FAQ ##

### What if `whatis` Returns Nothing? ###

If `whatis` returns no output, it means:

- The command doesn't have a man page entry.
- The manual database is outdated. Run `sudo mandb` to rebuild it.

### How Does `whatis` Differ From `apropos`? ###

- `whatis` searches **only command names** and returns **one-line summaries**.
- `apropos` searches **descriptions** (full man page text) and returns **all matching entries**.

### Can I Search for Multiple Commands at Once? ###

Yes. Pass multiple command names separated by spaces:

```bash
whatis ls cp mv

```

### Why Do Some Commands Show Multiple Entries? ###

The number in parentheses indicates the **manual section**:

- `(1)` — User commands.
- `(8)` — System administration commands.

`whatis` lists all available sections by default.
