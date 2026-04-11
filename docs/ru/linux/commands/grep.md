# `grep` #

- **Purpose:** The `grep` command in Linux is used to search for lines matching a specified pattern within files. It stands for "Global Regular Expression Print" and is invaluable for text searching, filtering, and log analysis.
- **Usage:** `grep [OPTIONS] PATTERN [FILE...]`

## Basic Usage ##

Search for the word "error" in a log file:

```bash
grep "error" system.log

```

Case-insensitive search:

```bash
grep -i "warning" app.log

```

## Options ##

- `-i` — Ignore case (case-insensitive search).
- `-r` / `-R` — Recursively search subdirectories.
- `-n` — Show line numbers of matching lines.
- `-v` — Invert match: select non-matching lines.
- `-l` — List only filenames with matching lines (no line content).
- `-c` — Count the number of matching lines.
- `-w` — Match whole words only.
- `-E` — Use extended regular expressions (for example, for `|` or `+`).
- `-A <N>` — Show `<N>` lines _after_ each match.
- `-B <N>` — Show `<N>` lines _before_ each match.
- `-C <N>` — Show `<N>` lines around each match (context).

## Shortcuts ##

- `zgrep` — Search within compressed (`.gz`) files.
- `egrep` — Equivalent to `grep -E` (extended regex).
- `fgrep` — Fast grep for fixed strings (no regex, uses `-F`).

## FAQ ##

### How Do I Search for Exact Word Matches Only? ###

Use the `-w` option:

```bash
grep -w "word" file.txt

```

This prevents matches like "words" or "sword" if you only want "word".

### Can I Search for Multiple Patterns at Once? ###

With `-E` and the `|` (OR) operator:

```bash
| grep -E "error | warning | fail" log.txt |

```

Or use multiple `-e` flags:

```bash
grep -e "error" -e "warning" log.txt

```
