# `more` #

- **Purpose:** The `more` command is a text file perusal filter that displays text one screen at a time. It's a paginator that allows navigating through long text files or command output. Though largely superseded by the more versatile `less` command, `more` is still useful for basic file viewing. It's named for the phrase "more?" since it displays a prompt asking whether to show more content after each screen page.
- **Usage:** `more [OPTIONS] [FILE...]`

## Basic Usage ##

View a text file page by page:

```bash
more file.txt

```

View multiple files:

```bash
more file1.txt file2.txt

```

View output from a command:

```bash
ls -la | more

```

View a file with specified number of lines per page:

```bash
more -10 file.txt

```

View a file and start at a specific line:

```bash
more +50 file.txt

```

View a file and search for a pattern on startup:

```bash
more +/search_pattern file.txt

```

## Options ##

- `-num` — Specify the number of lines per page
- `+/string` — Search for the specified string at startup
- `-d` — Display help message for hotkeys
- `-f` — Count logical lines instead of screen lines
- `-l` — Do not pause at the end of a file with form feed
- `-s` — Squeeze multiple blank lines into one
- `-u` — Suppress underscore to create underlines

## Shortcuts ##

Essential more navigation:

```bash
# Movement #
Space            # Go forward one page
Enter            # Go forward one line
f                # Skip forward one screenful
d / ^D           # Skip forward half screenful
b / ^B           # Skip back one screenful (works on some versions)
=p               # Show current page number
=p:lf            # Show number of lines in file
/pattern         # Search for pattern
n                # Find next occurrence of pattern

# Other commands #
q                # Quit
:q, !            # Exit even if file is read from a pipe
h                # Display help
v                # Invoke an editor at the current position

```

## FAQ ##

### How Do I Exit More? ###

Press the `q` key to quit the `more` command. You can also use `:q` or `!` in some implementations.

### What's the Difference Between More and Less? ###

- `more` - Can only go forward through a file, has limited navigation features
- `less` - Can go both forward and backward, has more advanced features

Despite the name, `less` is more feature-rich than `more`.

### How Do I Search for Text in More? ###

Type `/` followed by your search term and press Enter:

```bash
/search_term

```

Then press `n` to go to the next match.

### Can I Use More With Pipelines? ###

Yes, you can pipe output to more:

```bash
ps aux | more
ls -la | more
dmesg | more

```

### How Do I Skip to a Specific Line in More? ###

Start more with the `+` option followed by the line number:

```bash
more +100 file.txt  # Start at line 100

```

Inside more, you can't jump to arbitrary line numbers like in less.
