# `cat` #

- **Purpose:** The `cat` command (short for "concatenate") is used in Linux/Unix systems to **display file contents**, **combine files**, and **create new files** via standard input. It reads files sequentially and outputs their contents to the terminal.
- **Usage:** `cat [OPTIONS] [FILE(S)]`

## Basic Usage ##

Display contents of a single file:

```bash
cat example.txt

```

Concatenate multiple files:

```bash
cat file1.txt file2.txt > combined.txt

```

Create a new file from input:

```bash
cat > newfile.txt

```

_Waits for user input; press `Ctrl+D` to save and exit._

## Options ##

- `-n` — Display line numbers.
- `-b` — Number non-blank lines only.
- `-s` — Squeeze consecutive blank lines into one
- `-v` — Show non-printing characters except tabs and line endings.
- `-T` — Display tabs as `^I`
- `-E` — Display `$` at the end of each line

## Shortcuts ##

Use with `less` for scrollable output:

```bash
cat longfile.txt | less

```

Combine with `grep` to search within files:

```bash
cat log.txt | grep "error"

```

Output to terminal and file simultaneously with `tee`:

```bash
cat data.txt | tee output.txt

```

## FAQ ##

### How Do I Prevent `cat` From Displaying Special Characters? ###

Use `-v` to visualize non-printing characters, or omit it to show raw content. For clean output, avoid `-v`, `-T`, and `-E`.

### Is `cat` Suitable for Very Large Files? ###

Not ideal. For large files, use `less` or `tail`/`head` to avoid overwhelming the terminal:

```bash
less huge_file.log

```
