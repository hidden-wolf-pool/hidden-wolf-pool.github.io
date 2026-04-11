# `zfgrep` #

- **Purpose:** The `zfgrep` command is a variant of grep that searches for patterns in compressed files, specifically designed to work with the fgrep functionality (fixed string matching) on compressed files. It combines the efficiency of fgrep (which searches for literal strings rather than patterns) with the ability to read compressed files without having to decompress them to disk first. This is particularly useful when searching for exact string matches in compressed log files, large compressed datasets, or other compressed text files where regex processing would be unnecessary overhead.
- **Usage:** `zfgrep [OPTIONS] PATTERN [FILE...]`

## Basic Usage ##

Search for a literal string in a compressed file:

```bash
zfgrep "exact_string" file.txt.gz

```

Search for multiple literal strings in a compressed file:

```bash
zfgrep -e "string1" -e "string2" file.log.gz

```

Search with case-insensitive matching:

```bash
zfgrep -i "exact_string" file.txt.gz

```

Count occurrences of a string in a compressed file:

```bash
zfgrep -c "pattern" file.txt.gz

```

Show line numbers with matches:

```bash
zfgrep -n "exact_string" file.txt.gz

```

Invert the match (show lines that don't match):

```bash
zfgrep -v "pattern" file.txt.gz

```

Search for exact word matches in compressed files:

```bash
zfgrep -w "word" file.txt.gz

```

Show only filenames that contain matches:

```bash
zfgrep -l "pattern" *.log.gz

```

## Options ##

- `-c` — Count matching lines only
- `-h` — Suppress filenames in output (when searching multiple files)
- `-i` — Ignore case distinctions in both the pattern and the input
- `-l` — Show only filenames containing matches
- `-n` — Show line numbers with output lines
- `-v` — Invert the matching sense (select non-matching lines)
- `-w` — Match only whole words
- `-x` — Match only whole lines
- `-A NUM` — Show NUM lines after each match
- `-B NUM` — Show NUM lines before each match
- `-C NUM` — Show NUM lines of context around each match
- `-s` — Suppress error messages about nonexistent or unreadable files
- `-r` — Recursively read files under each directory

## Shortcuts ##

Common zfgrep operations:

```bash
# Search for exact string in multiple compressed files #
zfgrep "error" *.log.gz

# Count occurrences of exact string #
zfgrep -c "SUCCESS" output.log.gz

# Show lines with specific text but exclude others #
zfgrep "error" log.gz | zfgrep -v "connection refused"

# Search with line numbers and context #
zfgrep -n -C 3 "critical" error.log.gz

# Show only filenames with matches #
zfgrep -l "timeout" /var/log/*.gz

# Case-insensitive search in compressed logs #
zfgrep -i "warning" application.log.gz

# Find files that DON'T contain a pattern #
zfgrep -L "ERROR" *.log.gz

# Search and highlight matches #
zfgrep --color=always "pattern" file.gz

# Show lines before and after match #
zfgrep -A 2 -B 2 "pattern" file.gz

# Search multiple patterns in compressed file #
zfgrep -e "ERROR" -e "CRITICAL" -e "FAILURE" system.log.gz

# Search for whole word only (not substring) #
zfgrep -w "root" access.log.gz

# Show matching lines with byte offset #
zfgrep -b "pattern" file.gz

# Search recursively through directories #
zfgrep -r "pattern" /var/log/compressed/

# Search with specific character encoding #
zfgrep --binary-files=text "pattern" file.gz

# Use pattern file for searching #
echo "exact_pattern" > patterns.txt
zfgrep -f patterns.txt data.log.gz

# Combine with other commands for processing #
| zfgrep "error" log.gz | cut -d' ' -f1-4 | sort | uniq -c |

# Search and output only matching parts #
zfgrep -o "pattern.*string" log.gz

# Search with specific file type restrictions #
zfgrep --include="*.log.gz" "error" /var/log/*

# Search with exclusion patterns for files #
zfgrep --exclude="*.old.gz" "pattern" /var/log/*

# Search with maximum count of results #
zfgrep -m 10 "pattern" file.gz

# Search compressed files in quiet mode #
| zfgrep -q "pattern" file.gz && echo "Pattern found" | | echo "Pattern not found" |

# Search with custom line separator (if supported) #
zfgrep "pattern" file.gz

# Search for patterns starting with specific text #
zfgrep "^pattern" file.gz

# Search for patterns ending with specific text #
zfgrep "pattern$" file.gz

# Search with different output format #
zfgrep --line-buffered "pattern" file.gz

# Process compressed log files with specific time windows #
zfgrep "2023-12-15" log.gz

# Search for IP addresses in compressed logs #
zfgrep "192.168.1.1" access.log.gz

# Search for specific user activities in compressed logs #
zfgrep "username" auth.log.gz

# Find specific HTTP response codes in compressed web logs #
zfgrep " 500 " access.log.gz
zfgrep " 404 " access.log.gz

# Search for specific ports in compressed logs #
| zfgrep ":8080\ | :3000\ | :5432" logs.gz |

# Search for specific domains in compressed files #
zfgrep "example.com" config.gz

# Search for timestamps in log files #
zfgrep "2023-12-15T10:.*:.." events.log.gz

# Search for specific file extensions #
| zfgrep "\.js\ | \.css\ | \.html" access.log.gz |

# Search for specific request methods #
| zfgrep "GET\ | POST\ | DELETE" access.log.gz |

# Check for security vulnerabilities in compressed logs #
| zfgrep -i "sql injection\ | xss\ | csrf\ | lfi\ | rfi" security.log.gz |

# Find specific error codes in application logs #
zfgrep "ERROR [0-9]*" application.log.gz

# Search for email addresses (basic pattern) #
zfgrep "@.*\." data.gz

# Search for credit card patterns (simplified) #
zfgrep "[0-9][0-9][0-9][0-9] [0-9][0-9][0-9][0-9] [0-9][0-9][0-9][0-9] [0-9][0-9][0-9][0-9]" data.gz

# Search for phone number patterns #
zfgrep "[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]" data.gz

# Find specific session IDs #
zfgrep "sessionid\|SID" access.log.gz

# Search for specific user agents #
| zfgrep "Mozilla\ | Chrome\ | Safari" access.log.gz |

# Search for specific URL paths #
| zfgrep "/api/\ | /admin/\ | /login/" access.log.gz |

# Find patterns with specific prefixes #
| zfgrep "DEBUG\ | INFO\ | WARN\ | ERROR\ | FATAL" application.log.gz |

# Search for UUID patterns #
zfgrep "[0-9a-fA-F]\{8\}-[0-9a-fA-F]\{4\}-[0-9a-fA-F]\{4\}-[0-9a-fA-F]\{4\}-[0-9a-fA-F]\{12\}" data.gz

# Search for MAC addresses #
zfgrep "[0-9a-fA-F]:[0-9a-fA-F]:[0-9a-fA-F]:[0-9a-fA-F]:[0-9a-fA-F]:[0-9a-fA-F]" network.log.gz

# Find compressed files containing specific patterns efficiently #
find /var/log -name "*.gz" -exec zfgrep -l "critical_error" {} \;

# Search for multiple patterns from a file #
printf "%s\n" "error" "fail" "exception" > patterns.txt
zfgrep -f patterns.txt application.log.gz

# Count occurrences across multiple files #
zfgrep -c "pattern" *.log.gz

# Find the most common errors in logs #
| zfgrep "ERROR" *.log.gz | sort | uniq -c | sort -nr |

# Search for patterns in chronological order #
zfgrep "pattern" *.log.gz | sort -k2,2n

# Find lines longer than specific length with pattern #
| zcat file.gz | awk 'length > 100' | zfgrep "pattern" |

# Search for files with no matches for a pattern #
zfgrep -L "pattern" *.gz

# Search with custom pattern delimiters #
zfgrep -z "pattern" file.gz

# Search and format output for CSV #
zfgrep "pattern" file.gz | sed 's/^/"/; s/$/"/; s/ /","/g'

# Search for patterns in specific fields (using with cut/awk) #
zcat file.gz | awk -F',' '$3 == "pattern" {print}'

# Search with custom output handling #
zfgrep "pattern" file.gz | while read line; do
  echo "Found in: $line"
done

# Use zfgrep in monitoring scripts #
if ! zfgrep -q "expected" file.gz; then
  echo "Missing expected content" | mail admin@example.com
fi

# Search for patterns with context in logs #
zfgrep -C 5 "error" daily_log.gz

# Process large compressed files efficiently #
zfgrep "transaction_id" large_file.gz | head -100

# Search with memory optimization for large files #
zfgrep --mmap "pattern" large_file.gz

# Search compressed files for compliance auditing #
| zfgrep -i "pci\ | gdpr\ | hipaa" audit_logs.gz |

# Find configuration changes in compressed system logs #
| zfgrep "config\ | setting\ | parameter" system_logs.gz |

# Search for specific system calls in compressed logs #
| zfgrep "open\ | read\ | write\ | access\ | execve" syscall_logs.gz |

# Search for patterns during specific time ranges #
| zcat log.gz | awk '/2023-1[0-2].*pattern/' | zfgrep "pattern" |

# Find and extract specific log entries for analysis #
zfgrep "critical" logs.gz > /tmp/critical_issues.txt

# Monitor compressed logs for specific events in real-time (conceptual) #
# Since zfgrep doesn't have a follow option, would need workaround with zcat: #
zcat -f log.gz | grep "pattern"  # (This would be using grep, not zfgrep)

# Calculate percentage of lines matching pattern #
total_lines=$(zcat file.gz | wc -l)
matching_lines=$(zfgrep -c "pattern" file.gz)
echo "scale=2; $matching_lines * 100 / $total_lines" | bc

# Search for patterns with file size considerations #
zfgrep "pattern" $(find . -name "*.gz" -size -100M)

# Create alert system for compressed logs #
zfgrep "FATAL" errors.log.gz && echo "Alert: Fatal errors found" | wall

# Search and extract specific data from structured logs #
zfgrep "session_start" auth.log.gz | cut -d' ' -f1,3,5

# Find earliest/latest occurrence of pattern #
zfgrep "pattern" log.gz | head -1
zfgrep "pattern" log.gz | tail -1

# Count patterns by time period #
| zfgrep "2023-12-15" log.gz | zfgrep "error" | wc -l |

# Extract specific field values from matching lines #
zfgrep "pattern" file.gz | awk '{print $4}'

# Search with pattern from environment variable #
PATTERN="critical_error" && zfgrep "$PATTERN" logs.gz

# Search for patterns across compressed rotated logs #
for log in app.log.*.gz; do
  count=$(zfgrep -c "pattern" "$log")
  echo "$log: $count matches"
done

# Verify log consistency after pattern matching #
zfgrep "pattern" file.gz | wc -l
zfgrep -c "pattern" file.gz  # These should match

# Check for patterns with specific character sets #
zfgrep "[:alnum:](/:alnum:.md)" data.gz  # Alphanumeric only
zfgrep "[:digit:](/:digit:.md)" data.gz  # Digits only

# Find lines that match all of several patterns #
zfgrep "pattern1" file.gz | zfgrep "pattern2"

# Search for patterns in specific compression formats #
# zfgrep works with files compressed with gzip, bzip2, and other formats #

# Search with custom character encoding #
zfgrep --encoding=UTF-8 "pattern" file.gz

# Create log report with pattern matching #
{
  echo "Report Date: $(date)"
  echo "Pattern: error"
  echo "Matches in compressed logs:"
  zfgrep -c "error" *.log.gz
} > error_report.txt

# Search for patterns based on file modification time #
find . -name "*.gz" -newer reference_file.gz -exec zfgrep "pattern" {} \;

# Search and extract specific sections of logs #
zfgrep "start_marker" log.gz | zfgrep "end_marker" log.gz

# Search with conditional processing #
zfgrep "pattern" file.gz | if [ $(wc -l) -gt 10 ]; then
  echo "Too many matches, checking manually"
else
  echo "Acceptable number of matches"
fi

# Batch search with results aggregation #
for pattern in error warning critical; do
  echo "=== $pattern ==="
  zfgrep -c "$pattern" *.log.gz
  echo
done

# Process compressed files with multiple pattern files #
for pattern_file in patterns_*.txt; do
  zfgrep -f "$pattern_file" data.log.gz
done

# Advanced search combining multiple conditions #
| zfgrep "user_login" logs.gz | zfgrep -i "failed" | zfgrep "192.168" |

# Generate statistics from compressed log search #
zfgrep "pattern" logs.gz | awk '{count[$2]++} END {for(c in count) print c, count[c]}'

# Search with pattern validation #
pattern="test_pattern"
if [ -n "$pattern" ]; then
  zfgrep "$pattern" file.gz
fi

# Extract and save specific matches #
zfgrep "error" log.gz > errors_found.txt

# Search with time-based processing #
start_time=$(date -d "1 hour ago" +"%Y-%m-%d %H:%M")
zfgrep "$start_time" log.gz

# Monitor for security threats in compressed logs #
| zfgrep -i "exploit\ | attack\ | breach\ | vulnerability" security.log.gz |

# Extract data for further analysis #
zfgrep "metric_name" monitoring.gz > metrics.csv

# Search with backup/verification #
| zfgrep "pattern" file.gz > /tmp/results.txt && [ -s /tmp/results.txt ] && echo "Search successful" | | echo "No matches found" |

# Process multiple compressed file types #
zfgrep "pattern" *.tar.gz *.zip *.tgz

# Use with external pattern matching tools #
zfgrep "pattern" file.gz | xargs -I {} command_tool {}

# Perform complex queries with multiple tools #
| zcat file.gz | grep "part1" | grep "part2" | grep "part3" |

# Generate compressed log summary #
zfgrep -h -c "pattern" *.gz | awk '{sum+=$1} END {print "Total:", sum}'

# Alert on specific pattern counts #
if [ $(zfgrep -c "critical_error" log.gz) -gt 5 ]; then
  echo "More than 5 critical errors found in logs!"
fi

# Compare pattern frequencies between files #
zfgrep -c "pattern" file1.gz
zfgrep -c "pattern" file2.gz

# Search while preserving file structure information #
zfgrep -H -n "pattern" *.gz  # Shows filename and line number

# Create searchable index of compressed logs #
for file in *.gz; do
| echo "$file: $(zfgrep -c 'pattern' "$file" 2>/dev/null | | echo '0')" |
done > pattern_counts.txt

# Search with specific output formatting #
zfgrep "pattern" file.gz | awk '{printf "Match on line %d: %s\n", NR, $0}'

# Process with external statistics tools #
zfgrep "pattern" file.gz | stats_tool --analyze

# Search and format for import into database #
zfgrep "pattern" file.gz | sed 's/^/INSERT INTO table VALUES ("/; s/$/");/'

# Combine with file rotation patterns #
zfgrep "pattern" $(ls -tr *.gz | tail -5)  # Last 5 rotated logs

# Search for patterns with specific exit code handling #
zfgrep "pattern" file.gz
exit_code=$?
if [ $exit_code -eq 0 ]; then
  echo "Pattern found"
elif [ $exit_code -eq 1 ]; then
  echo "Pattern not found"
else
  echo "Error occurred during search"
fi

```

## FAQ ##

### What Is The Difference Between Zfgrep, Zgrep, And Fgrep? ###

- `zfgrep` - Searches compressed files for literal strings (no pattern matching)
- `zgrep` - Searches compressed files for patterns (with regex support)
- `fgrep` - Searches uncompressed files for literal strings (no pattern matching)

Zfgrep is equivalent to running `zcat file.gz | fgrep pattern`.

### When Should I Use Zfgrep Instead Of Zgrep? ###

Use `zfgrep` when:

- Searching for literal strings (not patterns)
- Performance matters (fgrep is faster than grep for literal matches)
- The search string contains characters that would need escaping in regex
- You want to avoid any regex interpretation of special characters

### Can Zfgrep Search Multiple Compression Formats? ###

Yes, zfgrep recognizes and handles multiple compression formats automatically:

- `.gz` (gzip) - Most common
- `.bz2` (bzip2)
- `.xz` (xz compression)
- `.Z` (compress format)
- `.lz` (lzip)
- And others depending on system configuration

### How Do I Search For Multiple Literal Strings? ###

You can search for multiple literal strings using different methods:

```bash
# Using multiple -e options #
zfgrep -e "string1" -e "string2" file.gz

# Using fgrep's -f option with a file containing patterns #
echo -e "pattern1\npattern2\npattern3" > patterns.txt
zfgrep -f patterns.txt file.gz

```

### What Happens When Zfgrep Can't Decompress A File? ###

If zfgrep encounters an issue decompressing a file, it will:

- Display an error message to stderr
- Continue processing other files if multiple files are specified
- Return a non-zero exit code to indicate an error occurred

### Is Zfgrep Still Actively Maintained? ###

Zfgrep is part of the gzip package and continues to be maintained as part of the GNU project. However, for new projects, people often use the more general `zgrep` command with the `-F` (fixed strings) option, which provides the same functionality as zfgrep: `zgrep -F "pattern" file.gz`.
