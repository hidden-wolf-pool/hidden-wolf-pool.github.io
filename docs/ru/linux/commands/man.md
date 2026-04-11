# `man` #

- **Purpose:** The `man` command (manual) provides access to the online reference manuals of Unix and Linux commands, system calls, configuration files, and other system components. It displays detailed information about commands including their purpose, syntax, options, examples, and related topics. Man pages are categorized into numbered sections representing different types of system components: 1 for user commands, 2 for system calls, 3 for library functions, 4 for special files, 5 for file formats, 6 for games, 7 for miscellaneous, 8 for system administration. The man command is essential for understanding how to properly use commands and system functionality.
- **Usage:** `man [OPTIONS] [SECTION] PAGE...`

## Basic Usage ##

Display manual page for a command:

```bash
man ls

```

Display manual page for a specific section:

```bash
man 5 crontab

```

Search for manual pages containing a keyword:

```bash
man -k keyword

```

Search for a specific command by keyword:

```bash
man -K "search_term"

```

List all manual pages for a specific section:

```bash
man -s 1 -k .

```

Display manual page from a specific section only:

```bash
man -S 1 ls

```

Display manual page in a specific format:

```bash
man -T html command_name

```

Display manual page for a specific path:

```bash
man /bin/ls

```

## Options ##

- `-k` — Search short descriptions and manual page names for the specified keyword
- `-f` — Equivalent to whatis, show manual page descriptions
- `-a` — Display all pages matching the given command
- `-c` — Reformat the page even if up-to-date
- `-P` — Specify which pager to use for displaying manual pages
- `-S` — Specify which manual subsections to search
- `-w` — Print location of man page files without displaying them
- `-W` — Print location of man page files and exit
- `-L` — Specify locale for manual pages
- `-t` — Output to standard output as TeX format
- `-T` — Output to standard output as formatted for the specified device
- `-H` — Open HTML output in browser
- `-Z` — Display man page through nroff

## Shortcuts ##

Within man page viewer:

```bash
# Navigation #
SPACE / PgDn  # Move forward one page
b / PgUp     # Move backward one page
ENTER / j    # Move forward one line
k            # Move backward one line
d            # Move forward half a page
u            # Move backward half a page
g / <        # Go to beginning of document
G / >        # Go to end of document
NUMBER G     # Go to specific line number

# Searching #
/pattern     # Search forward for pattern
?pattern     # Search backward for pattern
n            # Next occurrence of search term
N            # Previous occurrence of search term
f            # Forward search
F            # Backward search

# Bookmarks and jumping #
m<letter>    # Mark current position with letter
'<letter>    # Jump to marked position

# Other commands #
h            # Show help
q            # Quit
Q            # Quit (alternative)
ZZ           # Save position and quit

```

Man command operations:

```bash
# View man pages with different options #
man -P less command_name
man -P 'cat | col -bx' command_name  # Plain text without formatting

# Show all available man sections for a command #
man -a command_name

# Find manual page location #
man -w command_name

# Find multiple pages about a topic #
man -f command_name

# Search for manual pages with specific patterns #
man -k "^ls$"  # Exact match for ls command
man -k ".*file.*"  # Find commands related to file

# View man pages with custom formatting #
man -T utf8 command_name

# View man page in HTML format #
man -T html command_name > manpage.html

# Search man pages for specific terms #
man -K "specific_term"

# View man page in specific language #
LANG=fr_FR man command_name

# Get summary of command #
whatis command_name
# Equivalent to: #
man -f command_name

# Get brief description #
apropos keyword
# Equivalent to: #
man -k keyword

# View man page with custom width #
| man command_name | col -b | cut -c 1-80 | less |

# Print all manual page sections #
man -S 1:2:3:4:5:6:7:8:9 command_name

# Check manual sections #
man -s 1 -k . | head -10

# Find where man pages are stored #
man -w ls

# View man page using different pager #
PAGER=cat man ls

# Save manual page for offline reading #
man command_name > saved_manual.txt

# Print manual page without headers and footers #
man -P 'col -b' command_name

# Search all manuals for specific term #
man -K --regex 'search_term'

# Get only specific sections (like 1 for user commands) #
man -S 1 command_name

# Show man page with different terminal type #
MANWIDTH=120 man command_name

# View multiple man pages in sequence #
man ls && man cp && man mv

# Find manual pages by section #
man -s 3 printf  # Look in section 3 for printf

# View compressed man page #
# (man handles compression automatically) #

# Search manual pages by regex #
man -K --regex '^.*permission.*protect.*access.*'

# Get manual page in other formats #
man -T ps command_name  # PostScript format
man -t command_name     # Print to printer format

# View man page with custom section order #
man -S 8:3:1 command_name  # Check section 8, then 3, then 1

# Check if manual page exists #
if man -w command_name >/dev/null 2>&1; then
  echo "Manual page exists"
else
  echo "Manual page not found"
fi

# Create custom man page search #
grep -r "DESCRIPTION" /usr/share/man/man1/ | head -5

# List all available commands in a section #
| ls /usr/share/man/man1/ | sed 's/\.gz$//' | sed 's/\.1$//' | head -20 |

# List manual pages with specific man section #
man -s 5 -k .  # List all section 5 pages (configuration files)

# Find man pages with specific keywords #
| man -k "network\ | ip\ | interface" |

# Get man page info with custom output #
man -P 'less -p "^SYNOPSIS"' command_name  # Start at SYNOPSIS section

# View man page with different encoding #
man -L en_US.UTF-8 command_name

# Check which man sections are available for a command #
man -a -w command_name

# Get specific line from manual #
man command_name | sed -n '10,20p'

# Count manual pages in each section #
for i in {1..9}; do
  count=$(man -s $i -k . | wc -l)
  echo "Section $i: $count pages"
done

# Get man page in HTML and open in browser #
man -T html command_name | browser

# Export man page to text file with formatting preserved #
man -T ascii command_name > command_manual.txt

# Search only in specific sections #
| man -S 1,8 -k "restart\ | stop\ | start" |

# Get man page with no formatting #
man -T utf8 command_name | col -b

# View man page for system call #
man 2 open  # Section 2 is system calls

# View man page for library function #
man 3 printf  # Section 3 is library functions

# View man page for configuration file #
man 5 fstab  # Section 5 is file formats

# View man page for administration command #
man 8 useradd  # Section 8 is admin commands

# Find commands by functionality #
apropos "file system"  # Find commands related to file systems

# View man page with custom formatting #
MANWIDTH=100 man command_name

# Search man pages recursively through all sections #
mandb -q  # Update man database first, then search
man -K "specific text"

# Get man page as JSON (if supported by format tools) #
man command_name | pandoc -f man -t json

# View man page with different font #
man -T latex command_name

# Check for specific man pages #
man -S 1:3:8 -w command_name

# View man page for built-in shell command #
man bash-builtins  # For bash built-in commands

# View man page and search for specific pattern immediately #
man command_name | less +/pattern

# List only executable commands (section 1) #
man -s 1 -k . | cut -d' ' -f1

# Get section numbers of man page #
man -w command_name | sed 's/.*\.\([0-9]\)\.\?$/\1/'

# Compare manual pages between different systems #
man -P 'col -b' command_name | md5sum

# Extract sections from man page #
man command_name | awk '/^FILES$/,/^SEE ALSO$/'  # Extract between sections

# Get manual page statistics #
man -P cat command_name | wc -l  # Line count
man -P cat command_name | wc -w  # Word count
man -P cat command_name | wc -c  # Character count

# Create man page documentation index #
for sec in {1..8}; do
  echo "Section $sec:"
  man -s $sec -k . | head -10
done

# Find deprecated or obsolete commands #
| man -k "^obsolete\ | ^deprecated" 2>/dev/null | | echo "No deprecated commands found" |

# Search for man pages containing examples #
man -K "EXAMPLE"

# Create custom man page search function #
search_man() {
  local term=$1
  man -K --regex ".*$term.*" 2>/dev/null | head -20
}

# Get man page with custom highlighting #
man command_name | LESS='+/pattern' less

```

## FAQ ##

### What Are The Different Manual Sections? ###

Manual sections are organized by topic:

- `Section 1` — User commands (standard programs)
- `Section 2` — System calls (functions provided by the kernel)
- `Section 3` — Library functions (library routines)
- `Section 4` — Special files (devices in /dev)
- `Section 5` — File formats (configuration files like /etc/passwd)
- `Section 6` — Games
- `Section 7` — Miscellaneous (macros, conventions)
- `Section 8` — System administration (commands for root)

### How Do I Search For Commands Related To A Topic? ###

Use the `-k` option to search for commands:

```bash
man -k keyword
apropos keyword  # Alternative command

```

This searches both command names and descriptions for the keyword.

### How Do I View A Manual Page For A Specific Section? ###

```bash
# View ls command from section 1 (user commands) #
man 1 ls

# View open system call from section 2 (system calls) #
man 2 open

# View printf library function from section 3 (library functions) #
man 3 printf

```

### How Do I Find The Location Of A Manual Page? ###

Use the `-w` option:

```bash
man -w command_name

```

This returns the path to the manual page file without displaying it.

### What Navigation Keys Work In Manual Pages? ###

Common navigation keys (similar to less):

- `SPACE` — Next page
- `b` — Previous page
- `ENTER` — Next line
- `/` — Search forward
- `?` — Search backward
- `q` — Quit
- `h` — Help

### How Do I Search Within A Manual Page? ###

Within the manual page viewer:

- `/pattern` — Search forward for pattern
- `?pattern` — Search backward for pattern
- `n` — Next occurrence
- `N` — Previous occurrence
