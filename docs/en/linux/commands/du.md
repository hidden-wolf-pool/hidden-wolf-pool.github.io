# `du` #

- **Purpose:** The `du` command (disk usage) estimates and displays file space usage for files and directories. It calculates the amount of disk space used by files and directories in a hierarchical tree structure, providing insights into storage consumption throughout the filesystem. This command is essential for system administrators and users to monitor disk space, identify large files or directories, clean up unnecessary data, and maintain efficient storage usage. The command can display results in various formats and units to make disk usage analysis more readable and manageable.
- **Usage:** `du [OPTIONS] [FILE...]`

## Basic Usage ##

Display disk usage of current directory:

```bash
du

```

Display human-readable sizes:

```bash
du -h

```

Display total usage of current directory only:

```bash
du -sh

```

Display disk usage for a specific directory:

```bash
du /home/user

```

Display usage with 1KB block size:

```bash
du -k

```

Display usage with 1MB block size:

```bash
du -m

```

Display usage with maximum depth of 1:

```bash
du --max-depth=1

```

Display usage sorted by size:

```bash
du -h | sort -rh

```

Show only total disk usage:

```bash
du -sh directory/

```

Summarize with specific unit:

```bash
du -BM /path/to/dir  # Show in MB

```

## Options ##

- `-h` — Human-readable output (for example, 1K, 234M, 2G)
- `-s` — Display only a total for each argument
- `-a` — Write counts for all files, not just directories
- `-c` — Produce a grand total
- `-d` — Maximal depth for directory recursion
- `-k` — Set block size to 1KB
- `-m` — Set block size to 1MB
- `-B` — Scale by SIZE bytes (for example, -BM for megabytes)
- `--max-depth=N` — Print the total for a directory (or file, with --all) when it is N or fewer levels below the command line argument
- `--exclude=PATTERN` — Exclude files that match PATTERN
- `-x` — Skip directories on different filesystems
- `--time` — Show time of the last modification of any file in the directory

## Shortcuts ##

Common du operations:

```bash
# Show disk usage in human-readable format for current directory #
du -h

# Show disk usage with one level of depth #
du -h --max-depth=1

# Show total disk usage for current directory only #
du -sh

# Show disk usage excluding certain patterns #
du --exclude="*.log" -h

# Find largest directories in current path #
du -h --max-depth=1 | sort -hr

# Find largest files in current path #
| du -ah | sort -rh | head -n 20 |

# Show disk usage with grand total #
du -ch

# Show disk usage for home directory #
du -sh ~

# Show disk usage excluding hidden files #
du -h --exclude=".*"

# Show disk usage with time information #
du --time -h

# Find files bigger than 100MB #
find . -type f -size +100M -exec ls -lh {} \; | awk '{print $8 ": " $5}'

# Get size of all subdirectories #
du -h --max-depth=1 --one-file-system

# Show only directories larger than a certain size #
| du -h --max-depth=1 | awk '$1 ~ /[0-9]+G | ^[0-9]+T/ {print}' |

# Compare disk usage between two directories #
du -sb dir1/ dir2/ | sort -n

# Show disk usage with specific file extensions #
du -ah --include="*.jpg" | sort -rh

# Find duplicate directories based on size #
| du -S | sort -k2n | cut -f2- | uniq -d -w3 |

# Monitor changes in disk usage over time #
du -sh /path/to/directory > old_usage.txt
# Later: #
du -sh /path/to/directory > new_usage.txt
diff old_usage.txt new_usage.txt

# Calculate sum of sizes for files matching a pattern #
du -ch --include="*.txt" | grep total$

# Show all files and directories with sizes #
du -ah

# Show only directories #
du -ahd1

# Show file system usage #
du -x --max-depth=1 /

# Exclude common cache directories #
du --exclude="node_modules" --exclude=".git" --exclude="__pycache__" -h --max-depth=1

# Find the largest file in a directory #
| find /path -type f -exec du -h {} + 2>/dev/null | sort -rh | head -n 1 |

# Calculate total size of specific file types #
du -ch --include="*.py" . | grep total$

# Show disk usage in MB for all subdirectories #
du -BM --max-depth=1

# Show disk usage in GB for directories larger than 1GB #
du -BG --max-depth=1 | awk '$1 >= 1'

# Compare two directory sizes #
size1=$(du -sb dir1 | awk '{print $1}')
size2=$(du -sb dir2 | awk '{print $1}')
if [ $size1 -gt $size2 ]; then
  echo "dir1 is larger"
else
  echo "dir2 is larger"
fi

# Show disk usage of each user's home directory #
du -sh /home/*

# Find directories taking up the most space #
du -h --max-depth=2 | sort -rk1,1

# Show disk usage with percentage relative to another command #
total=$(du -sb . | awk '{print $1}')
find . -type d -exec du -sb {} \; | awk -v total=$total '{print $1/total*100 "%", $2}'

# Display files with their modification time and size #
find . -type f -exec stat --format="%y %s %n" {} \; | sort -nr -k2

# Monitor growth of a specific directory #
watch -n 1 'du -sh /path/to/directory'

# Show sizes with different units #
du -h --max-depth=1 | awk '{size=sprintf("%.1f", $1); print size, $2}'

# Count and size files by extension #
| find . -name '*.*' -exec bash -c 'ext="${1##*.}"; echo "$ext"' _ {} \; | sort | uniq -c | sort -nr |

# Show directory sizes without recursion #
du -S --max-depth=1

# Show only subdirectories at specific level #
du -h --max-depth=2 --min-depth=2

# Find empty directories #
find . -type d -empty

# Show disk usage with file system boundaries #
du -x --max-depth=1 /

# Filter by modification time #
find . -type f -mtime -7 -exec du -ch {} + | grep total$

# Combine with other commands to analyze #
| ls -la | awk '{print $9}' | xargs du -sh 2>/dev/null |

# Show disk usage for processes' working directories #
| lsof | awk '{print $9}' | grep '^/' | xargs -n1 dirname | xargs du -sh 2>/dev/null | head -10 |

# Get cumulative size with progress indicator #
du -ch . | tail -n 1

# Compare file size to a reference #
ref_size=$(stat -c%s reference_file)
current_size=$(stat -c%s current_file)
if [ $current_size -gt $ref_size ]; then
  echo "Current file is larger"
fi

# Monitor disk usage of log directories #
du -sh /var/log/* | grep -E '[0-9]+[MG]'

# Generate size report #
echo "Directory size report for $(pwd):" > report.txt
du -h --max-depth=1 >> report.txt
echo "Generated on $(date)" >> report.txt

# Find files with specific size ranges #
find . -size +100M -size -1G -exec ls -lh {} \;

# Show top 10 largest items #
| du -ah | sort -rh | head -n 10 |

# Show only directories with specific names #
du -h --include="*backup*" --max-depth=2

# Monitor change in directory size over time #
(du -s; sleep 3600; du -s) | diff -u -

# Show disk usage with color output #
du -h --max-depth=1 | awk '{if($1~/[0-9]+K$/) print "\033[32m" $0 "\033[0m"; else if($1~/[0-9]+M$/) print "\033[33m" $0 "\033[0m"; else print "\033[31m" $0 "\033[0m"}'

# Calculate ratio of used space to directory count #
total_size=$(du -sb . | awk '{print $1}')
file_count=$(find . -type f | wc -l)
echo "Average bytes per file: $((total_size/file_count))" 2>/dev/null

# Show disk usage with file type information #
| find . -type f -exec file {} \; | grep -E '(text | data | executable)' | awk '{print $1}' | xargs du -ch 2>/dev/null | tail -n 1 |

# Compare directory trees #
diff <(du --max-depth=1 dir1/) <(du --max-depth=1 dir2/)

# Find directories with many small files #
| find . -type d -exec bash -c 'count=$(find "$1" -maxdepth 1 -type f | wc -l); size=$(du -sb "$1" | awk "{print \$1}"); avg=$((size/count)); if [ $avg -lt 1024 ]; then echo "Dir: $1, Count: $count, Avg: $avg bytes/file"; fi' _ {} \; |

```

## FAQ ##

### What Is The Difference Between Du And Df? ###

- `du` (disk usage) - Shows space used by files and directories within a filesystem
- `df` (disk free) - Shows space used and available on mounted filesystems

Use `du` to see which files/directories consume space, and `df` to see overall filesystem capacity.

### How Do I Show Only The Total Size Of A Directory? ###

Use the `-s` (summarize) option:

```bash
du -sh directory_name

```

This shows only the total size for the specified directory.

### How Do I Exclude Specific Files Or Directories? ###

Use the `--exclude` option:

```bash
# Exclude all .git directories #
du --exclude=".git" -h

# Exclude multiple patterns #
du --exclude="*.log" --exclude=".cache" -h

# Exclude using wildcards #
du --exclude="*temp*" -h

```

### How Do I Find The Largest Files In A Directory? ###

Use find with du:

```bash
# Find largest files #
| find /path -type f -exec du -h {} + | sort -rh | head -n 10 |

# Find largest directories only #
| find /path -type d -exec du -h {} + | sort -rh | head -n 10 |

```

### How Do I Show Disk Usage In Different Units? ###

```bash
du -h  # Human-readable (K, M, G)
du -k  # Kilobytes
du -m  # Megabytes
du -BM /path  # Exactly in MB
du -BG /path  # Exactly in GB

```

### How Do I Limit The Depth Of The Directory Tree? ###

Use `--max-depth` to limit how deep du will go:

```bash
du --max-depth=1  # Only top-level contents
du --max-depth=2  # Include one level of subdirectories
du -h --max-depth=1  # Combine with human-readable output

```
