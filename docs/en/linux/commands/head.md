# `head` #

- **Purpose:** The `head` command is used to display the beginning portion of files. By default, it prints the first 10 lines of each specified file to standard output. It's commonly used to quickly preview the contents of a file, view log file headers, or examine the initial data in large datasets without loading the entire file.
- **Usage:** `head [OPTIONS] [FILE...]`

## Basic Usage ##

Display the first 10 lines of a file:

```bash
head file.txt

```

Display the first 20 lines of a file:

```bash
head -n 20 file.txt

```

Display the first 5 bytes of a file:

```bash
head -c 5 file.txt

```

Display the first 15 lines of multiple files:

```bash
head -n 15 file1.txt file2.txt

```

Display the first 8 lines without showing filenames:

```bash
head -q -n 8 *.txt

```

Display the first 3 lines with verbose output:

```bash
head -v -n 3 file.txt

```

## Options ##

- `-n` — Output the first N lines (default is 10)
- `-c` — Output the first N bytes instead of lines
- `-q` — Never print headers giving file names
- `-v` — Always print headers giving file names
- `-z` — Line delimiter is NUL, not newline
- `-s` — Skip the first N bytes of output

## Shortcuts ##

Common head operations:

```bash
# Display first 100 lines of a file #
head -n 100 largefile.log

# Display first 1KB of a file #
head -c 1024 file.txt

# Show first few lines of multiple files #
head -n 5 file1.txt file2.txt file3.txt

# Pipe output for further processing #
head -n 20 /var/log/syslog | grep error

# Show first lines with line numbers #
head -n 10 file.txt | nl

# Compare headers of two files #
diff <(head -n 20 file1.txt) <(head -n 20 file2.txt)

```

## FAQ ##

### How Do I Display a Different Number of Lines? ###

Use the `-n` option followed by the number of lines:

```bash
head -n 50 file.txt  # Show first 50 lines

```

### How Do I Display the First Few Bytes Instead of Lines? ###

Use the `-c` option to specify the number of bytes:

```bash
head -c 100 file.txt  # Show first 100 bytes

```

### What's the Difference Between Head and Tail? ###

- `head` - Displays the beginning portion of a file (first N lines)
- `tail` - Displays the ending portion of a file (last N lines)

### How Do I Process Standard Input With Head? ###

You can pipe data to head:

```bash
cat file.txt | head -n 5
ps aux | head -n 10  # Show first 10 processes

```

### How Do I Use Head to Preview Large Files Efficiently? ###

Head is very efficient for large files since it only reads the beginning portion:

```bash
head -n 100 logfile.txt

```

Unlike text editors that might try to load the entire file, head terminates early after reading the specified number of lines or bytes.
