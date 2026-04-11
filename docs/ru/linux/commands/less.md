# `less` #

- **Purpose:** The `less` command is a powerful text file viewer that allows you to view the contents of files one page at a time without loading the entire file into memory. Unlike `more`, `less` allows both forward and backward navigation through the file. It's ideal for viewing large text files, logs, manuals, and output from other commands. The program is interactive, allowing real-time search and navigation through the content.
- **Usage:** `less [OPTIONS] [FILE...]`

## Basic Usage ##

View a text file:

```bash
less file.txt

```

View a file and start at the end:

```bash
less +G largefile.log

```

View a file and search for a pattern immediately:

```bash
less +/error log.txt

```

View output from a command:

```bash
ps aux | less

```

View a file with line numbers:

```bash
less -N file.txt

```

Compare two files interactively:

```bash
diff file1.txt file2.txt | less

```

## Options ##

- `-N` — Display line numbers
- `-S` — Cut long lines instead of wrapping them
- `-M` — Display more verbose prompt
- `-F` — Exit immediately if the file is less than one screen
- `-X` — Don't clear the screen when exiting
- `-r` — Allow raw control characters
- `-e` — Exit at end of file
- `-i` — Ignore case when searching
- `-I` — Very liberal case-insensitive search
- `-c` — Repaint from top, not bottom

## Shortcuts ##

Essential less navigation:

```bash
# Movement #
Space / f       # Go forward one window
Enter / j       # Go forward one line
b               # Go backward one window
y / k           # Go backward one line
g / <           # Go to first line
G / >           # Go to last line
pct             # Go to percent (for example, 50p to go to middle)
/pattern        # Search forward for pattern
?pattern        # Search backward for pattern
n               # Repeat previous search (forward)
N               # Repeat previous search (backward)

# Other commands #
q               # Quit
h               # Show help
&pattern        # Show only matching lines
v               # Edit current file with VISUAL or EDITOR
!command        # Execute shell command

```

## FAQ ##

### How Do I Exit Less? ###

Press the `q` key to quit the `less` command. Alternatively, you can press `Q` on some systems.

### How Do I Search Within a File Using Less? ###

Press `/` followed by the search term and press Enter to search forward:

```bash
/search_term

```

Press `?` followed by the search term to search backward:

```bash
?search_term

```

Use `n` to go to the next match and `N` for the previous match.

### Can I Use Less With Pipes From Other Commands? ###

Absolutely! This is one of less's most powerful features:

```bash
ls -la | less
ps aux | less
cat largefile.txt | less
dmesg | less

```

### How Do I View Multiple Files With Less? ###

You can specify multiple files:

```bash
less file1.txt file2.txt file3.txt

```

Then navigate between files using:

- `:n` to go to the next file
- `:p` to go to the previous file
- `:x` to go to the first file
- `:d` to delete the current file from the list

### How Do I Pass Command-Line Options When Inside Less? ###

You can't change command-line options once inside less, but you can re-execute less with different options from within less by typing:

```bash
-e filename

```

This will exit the current file and open the specified filename.
