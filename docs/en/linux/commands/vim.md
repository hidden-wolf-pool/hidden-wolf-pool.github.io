# `vim` #

- **Purpose:** Vim (Vi Improved) is a highly configurable text editor built to make creating and changing any kind of text very efficient. It's an enhanced version of the vi editor that comes with most Unix systems and is widely used in software development. Vim is a modal editor that operates in different modes (normal, insert, visual) and provides powerful text manipulation capabilities through keyboard shortcuts. It's particularly favored by developers and system administrators for its efficiency and extensive feature set.
- **Usage:** `vim [OPTIONS] [FILE...]`

## Basic Usage ##

Open a file for editing:

```bash
vim file.txt

```

Open a file starting at a specific line:

```bash
vim +10 file.txt

```

Start vim with a specific pattern search:

```bash
vim +/'pattern' file.txt

```

Open multiple files in vim tabs:

```bash
vim -p file1.txt file2.txt file3.txt

```

Open file in read-only mode:

```bash
vim -R file.txt

```

Start vim with syntax highlighting enabled (if not default):

```bash
vim -S file.txt

```

## Options ##

- `-R` — Read-only mode (view file without ability to save)
- `-r` — Recovery mode (restore file from swap file)
- `-u` — Use alternative initialization file
- `-c` — Execute an Ex command after the first file is read
- `-p` — Open files in tabs
- `-O` — Open files in vertically split windows
- `-s` — Silent or script mode
- `-V` — Verbose mode for debugging

## Shortcuts ##

Essential vim commands organized by category:

```bash
# Modes #
i          # Enter insert mode
ESC        # Return to command mode
:          # Enter command line mode
v          # Enter visual mode
V          # Enter visual line mode
Ctrl+v     # Enter visual block mode

# Movement (in command mode) #
h, j, k, l        # Left, down, up, right
w, b              # Move by words (forward/backward)
e                 # Move to end of word
0, $              # Beginning/end of line
gg, G             # Beginning/end of file
Ctrl+f, Ctrl+b    # Page forward/backward
fx                # Find next occurrence of character x
Fx                # Find previous occurrence of character x

# Editing #
x, dd             # Delete character, delete line
dw                # Delete word
yy, yw, y$        # Copy line, word, or to end of line
p, P              # Paste after, paste before
u, Ctrl+r         # Undo, redo
r                 # Replace character under cursor
R                 # Enter replace mode
~                 # Toggle case
<<, >>            # Shift line left, right
.                 # Repeat last command

# Searching and replacing #
/pattern          # Search forward for pattern
?pattern          # Search backward for pattern
n, N              # Next, previous match
:%s/old/new/g     # Replace all occurrences of old with new
:%s/old/new/gc    # Replace with confirmation

# Buffers and windows #
:w                # Save (write)
:q                # Quit
:wq, :x, ZZ       # Save and quit
:q!               # Quit without saving
:e filename       # Open file in current buffer
:bnext, :bprev    # Go to next/previous buffer
:split, :vsplit   # Split window horizontally/vertically
Ctrl+w, h/j/k/l   # Move between windows

# Macros #
qa                # Record macro in register a
q                 # Stop recording
@a                # Play macro from register a
@@                # Repeat last played macro

# Special features #
:set number       # Toggle line numbers
:set hlsearch     # Highlight search results
:set wrap         # Toggle line wrapping
:set expandtab    # Expand tabs to spaces
:%!sort           # Sort entire file

```

## FAQ ##

### What Are The Different Vim Modes? ###

Vim operates in several modes:

- **Normal/Command mode** - Default mode, for navigating and executing commands
- **Insert mode** - For entering text (enter with i, a, o, and so on)
- **Visual mode** - For selecting text (v, V, or Ctrl+v)
- **Command-line mode** - For executing ex commands (: commands)
- **Replace mode** - For overwriting text (enter with R)

### How Do I Exit Vim? ###

From command mode:

- `:wq` or `ZZ` - Save and quit
- `:q` - Quit if no changes were made
- `:q!` - Quit without saving changes

### How Do I Save Changes In Vim? ###

From command mode:

- `:w` - Save current file
- `:w filename` - Save to specific filename
- `:wq` - Save and quit
- `:x` - Save and quit (same as :wq but only if there are changes)

### How Do I Search And Replace Text In Vim? ###

For search:

- `/pattern` - Search forward
- `?pattern` - Search backward
- `n` - Next occurrence
- `N` - Previous occurrence

For replace:

- `:s/old/new/` - Replace first occurrence on current line
- `:s/old/new/g` - Replace all occurrences on current line
- `:%s/old/new/g` - Replace all occurrences in file
- `:%s/old/new/gc` - Replace with confirmation for each occurrence

### What Is The Difference Between Vi And Vim? ###

Key differences include:

- Vim has syntax highlighting
- Vim supports multiple windows and buffers
- Vim has an improved help system
- Vim supports plugins and scripting
- Vim has better undo/redo functionality
- Vim provides more extensive customization options
