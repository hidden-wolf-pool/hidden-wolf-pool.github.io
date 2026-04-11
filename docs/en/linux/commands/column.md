# `column` #

- **Purpose:** The `column` command is used to format input data into columns with consistent alignment. It's particularly useful for organizing tabular data, making it more readable in the terminal. The command can automatically calculate column widths, format data with various separators, and create neat columnar output from delimited text. This is especially useful for formatting output from other commands or processing data files into human-readable reports.
- **Usage:** `column [OPTIONS] [FILE...]`

## Basic Usage ##

Format data into aligned columns:

```bash
printf "%s\t%s\t%s\n" "Name" "Age" "City" "Alice" "30" "New York" "Bob" "25" "London" | column -t

```

Format with space as separator:

```bash
echo "Name Age City
Alice 30 New York
Bob 25 London" | column -t

```

Format with custom separator:

```bash
echo "Name,Age,City
Alice,30,New York
Bob,25,London" | column -s ',' -t

```

Specify column output format:

```bash
echo "Name Age City
Alice 30 New York" | column -c 80

```

Create columns with different alignment:

```bash
echo "Item Price Quantity
Book $12.99 5
Pen $1.50 100" | column -t -s ' '

```

Justify columns to the right:

```bash
echo "Name Age City
Alice 30 New York
Bob 25 London" | column -t -R 2

```

## Options ##

- `-c` — Output width in columns for each column
- `-t` — Determine number of columns using white space
- `-s` — Specify field separator
- `-o` — Output separator for columns
- `-R` — Right-align specified columns (comma-separated list)
- `-L` — Left-align specified columns (comma-separated list)
- `-C` — Center-align specified columns (comma-separated list)
- `-x` — Print columns across instead of down
- `--version` — Display version information and exit
- `-h` — Display help text

## Shortcuts ##

Common column operations:

```bash
# Format /etc/passwd #
cut -d: -f1,3,4 /etc/passwd | column -s: -t

# Format disk space information #
df -h | column -t

# Format process information #
| ps aux | head -10 | column -t |

# Format memory information #
free -h | column -t

# Format environment variables #
| env | head -10 | column -s '=' -t |

# Format CSV data (assuming no commas in fields) #
cat data.csv | column -s ',' -t

# Format with custom separator #
| echo "apple | fruit | $1.50 |
| carrot | vegetable | $0.80" | column -s ' | ' -t |

# Format network connections #
netstat -tuln | column -t

# Format package information #
| dpkg -l | head -10 | column -t |

# Format with specific column alignment #
echo -e "ID\tName\tPrice\n1\tApple\t$1.50" | column -t -R 3

# Format with custom output separator #
| echo -e "Name\tAge\nJohn\t30" | column -t -o " | " |

# Format fixed-width data #
printf '%-10s %-5s %s\n' "Name" "Age" "City" "John" "25" "NYC" | column -t

# Format with multiple separators #
echo "Name,Age;City
Alice,30;New York" | column -s ',;' -t

# Format with right-alignment #
| seq 1 10 | xargs -n 3 | column -t -R 1,2,3 |

# Format with centered columns #
echo -e "Title\tCount\tStatus\nActive\t5\tOK" | column -t -C 1 -R 2

# Format with maximum column width #
echo -e "Name\tDescription\tValue\nProduct\tVery long description\t100" | column -c 60

# Format multiline data #
printf '%s\n' "Column1 Column2 Column3" "A B C" "LongValue D E" | column -t

# Format with specific column width #
echo "Short 1 LongData
| Med 2 X" | tr ' ' '\t' | column -t |

# Format with alternating separators #
echo -e "Name:Age:City\nJohn:25:NYC" | column -s ':' -t

# Format output with padding #
echo -e "OS\tVersion\tArch\nUbuntu\t20.04\tamd64" | column -t -o '    '

# Create a table from command output #
| ls -l | awk '{print $1, $5, $9}' | column -t |

# Format key-value pairs #
| echo -e "Key=Value\nStatus=Active" | tr '=' '\t' | column -t |

# Format with specific alignment combinations #
echo -e "Name\tValue\tUnit\nTemperature\t37.5\tCelsius" | column -t -R 2 -L 3

# Format data with mixed alignment #
echo -e "ID\tName\tAmount\n1\tIncome\t1000.00\n2\tTax\t-150.00" | column -t -R 3

# Format with different padding #
| echo "Col1 Col2 Col3" | tr ' ' '\t' | column -t -o '  ' |

# Format complex table structure #
echo -e "Date\tEvent\tLocation\tCapacity\n2024-01-01\tEvent1\tRoom1\t50" | column -t

# Format output for readability #
mount | column -t

# Format package sizes #
| du -h --max-depth=1 /usr | sort -hr | head -10 | column -t |

# Format group information #
| getent group | head -10 | column -t |

# Format network interface info #
| ip addr show | grep -E "(^[0-9]+: | inet)" | column -t |

# Format user information #
| getent passwd | cut -d: -f1,5 | head -10 | column -t |

# Format scheduled tasks #
| crontab -l 2>/dev/null | head -10 | column -t |

# Format with right alignment on specific columns #
echo -e "Product\tUnits\tCost\nWidgetA\t100\t$25.99" | column -t -R 2,3

# Format with center alignment for headers #
| echo -e "Header1\tHeader2\tHeader3\nValue1\tValue2\tValue3" | head -1 | tr ' ' '\t' && echo -e "Value1\tValue2\tValue3" | column -t |

# Format with custom width constraints #
echo -e "Name\tDescription\tPrice\nVeryLongProductName\tDescription\t$1.99" | column -t

# Format output from find #
| find /tmp -maxdepth 1 -type f -printf '%f\t%s bytes\n' 2>/dev/null | head -5 | column -t |

# Format disk usage in a table #
| df -h | grep -vE '^Filesystem | tmpfs | cdrom' | awk '{print $1, $2, $3, $4, $5, $6}' | column -t |

# Create a formatted report #
echo -e "REPORT SUMMARY\nMetric\tCurrent\tTarget\tStatus\nCPU\t75%\t80%\tOK" | column -t

# Format with specific column separators preserved #
echo -e "Name::Age::Location\nJohn::30::NYC" | column -s '::' -t

# Format complex data with mixed separators #
| echo -e "Name | Age,Town\nJohn | 25,London\nJane | 30,Paris" | tr ',' '\t' | column -s ' | ' -t |

# Format with different alignment per column #
| echo -e "Index | Value | Status\n1 | High | Active\n2 | Low | Inactive" | column -s ' | ' -t -R 2 -C 3 |

# Format log entries #
| echo -e "Time | Level | Message\n10:30 | INFO | Started\n10:31 | ERROR | Failed" | column -s ' | ' -t |

```

## FAQ ##

### What Is The Difference Between Column -t And Printf? ###

- `column -t` - Automatically calculates column widths based on content and aligns text
- `printf` - Requires manual specification of field widths

`column -t` is more flexible as it adapts to content without requiring predetermined widths.

### How Do I Handle Multi-Word Fields? ###

For fields that contain spaces, use a different separator:

```bash
# Use a character that won't appear in your data #
| echo "First Name | Age | Home City |
| John Doe | 30 | New York City" | column -s ' | ' -t |

```

### How Do I Format CSV Files With Column? ###

For basic CSV formatting:

```bash
column -s ',' -t data.csv

```

Note: This works for simple CSV without commas inside quoted fields. For complex CSV, use dedicated tools like `csvkit` or `miller`.

### How Do I Align Specific Columns? ###

Use the alignment flags:

```bash
# Right-align column 2 and 3 #
column -t -R 2,3

# Center-align column 1, right-align column 3 #
column -t -C 1 -R 3

```

### Can Column Preserve Original Formatting? ###

The `column` command changes the original formatting by necessity to create aligned columns. However, it preserves the content. Use `column -s` to specify the original separator so it can correctly identify fields before reformatting them.
