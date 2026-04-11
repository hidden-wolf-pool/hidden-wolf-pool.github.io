# `zless` #

- **Purpose:** The `zless` command is a pager specifically designed to view compressed files without decompressing them to disk first. It functions as a compressed file viewer, combining the features of `zcat` (decompression) with `less` (pagination). This utility allows users to browse the contents of files compressed with gzip, bzip2, xz, and other compression formats using familiar `less`-like navigation controls. It's particularly useful for reading compressed log files, documentation, or any other compressed text files when you want to navigate through the content interactively without extracting it first.
- **Usage:** `zless [OPTIONS] [COMPRESSION_OPTIONS] COMPRESSED_FILE`

## Basic Usage ##

View a compressed file:

```bash
zless file.txt.gz

```

View a bzip2 compressed file:

```bash
zless file.txt.bz2

```

View a compressed file with line numbers:

```bash
zless -N file.log.gz

```

View with case-insensitive search:

```bash
zless -i file.txt.gz

```

View with less verbose output:

```bash
zless -Q file.txt.gz

```

View with different buffering mode:

```bash
zless -B file.txt.gz

```

## Options ##

- `-?` — Brief help
- `-d` — Display help message for some key bindings
- `-e` — Exit immediately when reaching the end of the file
- `-f` — Force viewing of non-text or binary files
- `-i` — Case-insensitive search
- `-I` — Case-insensitive search, ignoring upper case
- `-m` — Display percentage into file and current line number
- `-M` — Display more verbose prompt
- `-N` — Display line numbers
- `-n` — Set line number for logical line numbers
- `-q` — Suppress error messages (quiet)
- `-Q` — Even more quiet output
- `-s` — Squeeze multiple blank lines into one
- `-u` — Do not use termcap initialization sequences
- `-V` — Display version number and exit
- `-w` — Highlight first new line after forward movement
- `-B` — Disable backspace processing (don't treat backspaces specially)
- `-X` — Don't clear screen on exit

## Shortcuts ##

Navigation in zless (similar to less):

```bash
# Movement #
Space / ^D    # Forward one window (or half window)
Enter / ^E    # Forward one line
b / ^B        # Backward one window
y / ^Y        # Backward one line
g / <         # Go to beginning of file
G / >         # Go to end of file
pct           # Go to percent (for example, 50p to go to middle)

# Searching #
/pattern      # Search forward for pattern
?pattern      # Search backward for pattern
n             # Repeat previous search (forward)
N             # Repeat previous search (backward)

# Other commands #
q             # Quit
h             # Show help
v             # Show file information
=             # Show current file position

-             # Toggle options

# Specific zless features #
z             # Go forward one window
w             # Go backward one window but one line less than before
E             # Examine a new file
:F            # Toggle auto-follow mode (like tail -f)

```

## FAQ ##

### What Is The Difference Between Zless And Zcat? ###

- `zcat` - Prints entire decompressed content to standard output (for piping to other commands)
- `zless` - Provides interactive pagination for browsing compressed content

Use `zcat` for processing content with other commands, and `zless` for interactive reading.

### Can Zless Handle Different Compression Formats? ###

Yes, zless can handle multiple compression formats:

- gzip (.gz) - Most common
- bzip2 (.bz2)
- compress (.Z)
- xz (.xz)
- LZMA (.lzma)
- lzop (.lzo)

The command automatically detects the compression format and decompresses accordingly.

### How Do I Search In A Compressed File Using Zless? ###

Once inside zless, use the same search commands as in less:

- `/pattern` - Search forward
- `?pattern` - Search backward
- `n` - Next match
- `N` - Previous match

### What Are Some Alternative Commands To Zless? ###

Alternatives include:

- `zmore` - Basic compressed file pager using more-like interface
- `zcat file.gz | less` - Using pipe to achieve same effect
- `bzmore` or `bzless` - For bzip2 compressed files
- `xzmore` or `xzless` - For xz compressed files

### How Do I Exit Zless? ###

Press `q` or `Q` to quit zless and return to the command prompt.

### How Do I View Multiple Compressed Files? ###

zless doesn't support multiple file viewing directly like less. However, you can:

1. View one file at a time: `zless file1.gz`, then `q` and `zless file2.gz`
2. Concatenate files virtually: `zcat file1.gz file2.gz | less`
