# `tail` #

- **Purpose:** The `tail` command is used to display the ending portion of files. By default, it prints the last 10 lines of each specified file to standard output. It's particularly useful for monitoring log files, viewing recent changes in growing files, and examining the end of large datasets without loading the entire file.
- **Usage:** `tail [OPTIONS] [FILE...]`

## Basic Usage ##

Display the last 10 lines of a file:

```bash
tail file.txt

```

Display the last 20 lines of a file:

```bash
tail -n 20 file.txt

```

Display the last 50 lines and continue watching for new content:

```bash
tail -n 50 -f file.txt

```

Display the last 100 bytes of a file:

```bash
tail -c 100 file.txt

```

Follow a file as it grows (real-time monitoring):

```bash
tail -f /var/log/syslog

```

Display the last 5 lines with a sleep interval of 2 seconds:

```bash
tail -n 5 -s 2 file.txt

```

## Options ##

- `-n` — Output the last N lines (default is 10)
- `-c` — Output the last N bytes instead of lines
- `-f` — Follow the file as it grows (real-time monitoring)
- `-F` — Same as -f, but also follow when the file is rotated
- `-q` — Never print headers giving file names
- `-v` — Always print headers giving file names
- `-s` — Sleep interval between updates (in seconds)
- `-z` — Line delimiter is NUL, not newline

## Shortcuts ##

Common tail operations:

```bash
# Monitor log file in real-time #
tail -f /var/log/apache2/access.log

# Show last 100 lines and continue monitoring #
tail -n 100 -f /var/log/syslog

# Watch multiple files #
tail -f /var/log/nginx/access.log /var/log/nginx/error.log

# Monitor with specific update interval #
tail -f -s 0.5 file.txt

# Show last 1KB of a file #
tail -c 1024 file.txt

# Monitor from the beginning of the file #
tail -n +1 -f file.txt

# Combine with grep to filter live logs #
tail -f /var/log/syslog | grep ERROR

```

## FAQ ##

### How Do I Monitor a Growing File in Real-Time? ###

Use the `-f` flag to follow the file as new content is added:

```bash
tail -f /var/log/myapp.log

```

Press Ctrl+C to stop monitoring.

### What's the Difference Between -f and -F Options? ###

- `-f` - Follows the file but stops if the file is rotated (renamed/deleted)
- `-F` - Follows the file even if it's renamed or rotated, periodically checking for changes

### How Do I Start Reading From a Specific Line Number? ###

Use a `+` prefix with the `-n` option to start from a specific line:

```bash
tail -n +100 file.txt  # Start from line 100 to the end

```

### How Do I Monitor Multiple Log Files Simultaneously? ###

You can specify multiple files with the `-f` option:

```bash
tail -f /var/log/apache/access.log /var/log/apache/error.log

```

However, for better visualization of multiple files, consider using `multitail` or similar tools.

### How Do I Exit From the -f Option? ###

Press Ctrl+C (SIGINT) to interrupt the tail command and return to the command prompt.
