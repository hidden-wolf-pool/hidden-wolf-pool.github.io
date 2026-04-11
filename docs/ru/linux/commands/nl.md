# `nl` #

- **Purpose:** The `nl` command is used to number lines in a file or standard input. It's particularly useful for creating formatted output where line numbers are needed, such as printing source code, creating numbered lists, or for referencing specific lines in text files. The command provides flexible options for how and where to add line numbers, making it more customizable than `cat -n` for specific numbering requirements.
- **Usage:** `nl [OPTIONS] [FILE...]`

## Basic Usage ##

Number all lines in a file:

```bash
nl file.txt

```

Number lines with custom starting number:

```bash
nl -v 5 file.txt

```

Number only non-empty lines:

```bash
nl -t file.txt

```

Number lines with custom increment:

```bash
nl -i 2 file.txt

```

Number lines with custom format:

```bash
nl -n rz file.txt  # Right-aligned with leading zeros

```

Number lines with custom separator:

```bash
nl -s ": " file.txt  # Use ": " as line number separator

```

## Options ##

- `-b` — Define which lines to number (a=all, t=non-empty, n=none, p=regex pattern)
- `-i` — Set line number increment value
- `-l` — Set number of blank lines to increment
- `-n` — Format for line numbers (ln=left, rn=right, rz=right-zero)
- `-s` — String to use as separator between number and line
- `-v` — Starting line number
- `-w` — Width of line number field
- `-p` — Do not reset line number at logical pages

## Shortcuts ##

Common nl operations:

```bash
# Number all lines starting from 1 with custom width #
nl -w 3 -s ". " file.txt

# Number only lines that match a pattern #
nl -b p'^\S' file.txt  # Number lines starting with non-whitespace

# Number with leading zeros #
nl -n rz file.txt

# Number with custom format #
nl -v 1 -i 5 -w 4 file.txt  # Start with 1, increment by 5, with width 4

# Process output from other commands #
ps aux | nl

# Number with custom header/footer treatment #
nl -ha -ta -ba file.txt  # Number header, body, and footer sections

```

## FAQ ##

### How Do I Add Line Numbers to Output From Another Command? ###

Pipe the command output to nl:

```bash
cat /etc/passwd | nl
ps aux | nl
grep error /var/log/syslog | nl

```

### What's the Difference Between Nl and Cat -n? ###

- `nl` - More flexible, allows complex numbering patterns, section-based numbering, and custom formatting
- `cat -n` - Simpler, numbers all lines consecutively, less customization options

### How Do I Customize the Line Number Format? ###

Use the `-n` option:

- `ln` - Left align
- `rn` - Right align
- `rz` - Right align with leading zeros

```bash
nl -n rz file.txt

```

### How Do I Control Which Lines Get Numbered? ###

Use the `-b` option:

- `a` - Number all lines
- `t` - Number only non-empty lines
- `pPATTERN` - Number only lines matching the pattern

```bash
nl -b t file.txt  # Only number non-empty lines

```

### How Do I Change the Separator Between Line Numbers and Content? ###

Use the `-s` option to specify a custom separator:

```bash
| nl -s " | " file.txt  # Uses " | " as separator |
nl -s " : " file.txt  # Uses " : " as separator

```
