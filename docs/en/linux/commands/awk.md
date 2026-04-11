# `awk` #

- **Purpose:** AWK is a powerful text processing language and command-line utility for pattern scanning and processing. It's particularly useful for extracting and reporting data from structured text files like CSVs, log files, and data reports. AWK treats files as records (lines) divided into fields, allowing for complex data manipulation, filtering, and transformation operations.
- **Usage:** `awk [OPTIONS] 'PROGRAM' [FILE...]`

## Basic Usage ##

Print the first column (or field) of a file, with fields being separated by whitespace by default:

```bash
awk '{print $1}' file.txt

```

Use a colon as a separator:

```bash
awk -F':' '{print $1}' /etc/passwd

```

Specify a file containing the awk script:

```bash
awk -f script.awk file.txt

```

Print lines matching a pattern:

```bash
awk '/pattern/ {print}' file.txt

```

Print lines with specific number of fields:

```bash
awk 'NF > 5 {print}' file.txt

```

Calculate sum of second column:

```bash
awk '{sum += $2} END {print sum}' file.txt

```

Print line numbers:

```bash
awk '{print NR, $0}' file.txt

```

## Options ##

- `-F` — Set the input field separator (default is whitespace)
- `-v` — Assign a value to a variable
- `-f` — Read AWK program from file
- `-E` — Read AWK program source from file (extension)
- `-c` — Use compatibility mode
- `-d` — Dump AWK parse tree in C form to file
- `-D` — Set AWK debugging options
- `-e` — One-line program
- `-n` — Check syntax only
- `-W` — Additional GNU AWK-specific options

## Shortcuts ##

Common awk operations:

```bash
# Print all lines with more than 80 characters #
awk 'length($0) > 80' file.txt

# Print first two fields in reverse order #
awk '{print $2, $1}' file.txt

# Print fields in reverse order #
awk '{for(i=NF; i>=1; i--) printf "%s ", $i; print ""}' file.txt

# Double space a file #
awk '1; {print ""}' file.txt

# Number all lines in file #
awk '{print FNR "\t" $0}' file.txt

# Print only lines which are in both files #
awk 'NR==FNR{a[$0];next} $0 in a' file1 file2

# Print first column of last line #
awk 'END{print $1}' file.txt

# Add up first column, print sum and average #
awk '{s+=$1} END {print "sum:", s, " avg:", s/NR}'

# Print every third line #
awk 'NR%3==0' file.txt

# Print only the first field of first three lines #
awk 'NR<=3 {print $1}' file.txt

# Print longest line #
awk '{if(length($0) > max) {max = length($0); maxline = $0}} END {print maxline}'

# Print all lines but with last two fields in reverse order #
awk '{temp = $(NF-1); $(NF-1) = $NF; $NF = temp; print}' file.txt

# Print only lines that are longer than 72 characters #
awk 'length > 72' file.txt

# Export CSV with quoted fields #
awk -F',' '{for(i=1;i<=NF;i++){gsub(/"/, "\"\"", $i); printf "\"%s\"%s", $i, (i==NF?"\n":FS)} }' input.csv

# Print lines where field 5 is equal to 'abc123' #
awk '$5 == "abc123"' file.txt

# Print line numbers that have at least one field #
awk 'NF > 0 {print NR: $0}' file.txt

# Print first column and then the rest of the line #
awk '{$1 = ""; print substr($0, 2)}' file.txt

# Print first field and separate the rest with semicolons #
awk '{first = $1; $1 = ""; print first ": " substr($0, 2)}' file.txt

# Print lines with even-numbered fields #
awk 'NF % 2 == 0' file.txt

# Count number of lines per file #
awk '{count[FNR]++} END {for(filename in count) print filename, count[filename]}'

# Print all fields from field 3 onwards #
awk '{for(i=3; i<=NF; i++) printf "%s%s", $i, (i<NF?" ":"\n")}' file.txt

# Sum field 1 for every unique value in field 2 #
awk '{sum[$2] += $1} END {for(key in sum) print key, sum[key]}' file.txt

# Find max value in column #
awk 'NR == 1{max=$1}; $1 > max{max=$1}; END {print max}' file.txt

# Calculate average of specific field #
awk '{sum += $2; count++} END {if(count > 0) print sum/count}' file.txt

# Print line numbers of files with matching pattern #
awk '/pattern/{print FNR ":" $0}' file.txt

# Print only duplicated lines in a file #
awk '{dup[$0]++} END {for(line in dup) if(dup[line] > 1) print line}' file.txt

# Remove duplicate lines #
awk '!seen[$0]++' file.txt

# Print last field of every line #
awk '{print $NF}' file.txt

# Print fields in reverse order (each field individually) #
awk '{for(i=NF; i>=1; i--) print $i}' file.txt

# Print only lines that contain both wordA AND wordB #
awk '/wordA/ && /wordB/' file.txt

# Print only lines that contain either wordA OR wordB #
| awk '/wordA/ | | /wordB/' file.txt |

# Print all lines in a file except a header row #
awk 'NR > 1' file.txt

# Print current date and file contents #
awk '{print systime(), $0}' file.txt

# Print file with line numbers and filename #
awk '{print FILENAME ":" FNR ":" $0}' file.txt

# Print only lines where field 2 equals 'foo' #
awk '$2 == "foo"' file.txt

# Print lines where field 2 is NOT 'foo' #
awk '$2 != "foo"' file.txt

# Print lines where field 3 is greater than 50 #
awk '$3 > 50' file.txt

# Print line with highest value in field 2 #
awk '$2 > maxval {maxval = $2; maxline = $0} END {print maxline}' file.txt

# Print field count statistics #
| awk '{print NF}' file.txt | sort -n | uniq -c |

# Count fields in each line #
awk '{print "Line " NR " has " NF " fields"}' file.txt

# Print file with tab as field separator #
awk -F'\t' '{print $1, $3}' file.txt

# Replace field separator with different character #
awk -F: '{OFS="|"} {print $1,$2,$3}' /etc/passwd

# Print line number and content for lines longer than 80 chars #
awk 'length($0) > 80 {print NR, $0}' file.txt

# Print lines with even line numbers #
awk 'NR % 2 == 0' file.txt

# Print lines with odd line numbers #
awk 'NR % 2 == 1' file.txt

# Count lines with specific word #
awk '/word/ {count++} END {print count+0}' file.txt

# Print all lines between two patterns #
awk '/start/,/end/' file.txt

# Print all lines except those between two patterns #
awk '!(/start/,/end/)' file.txt

# Print only fields 2, 3, and 5 #
awk '{print $2, $3, $5}' file.txt

# Add headers to column output #
awk 'BEGIN {print "Name\tScore"} {print $1 "\t" $2}' file.txt

# Print percentage of field relative to sum #
awk '{sum+=$2} END {print ($2/sum)*100 "%"}' file.txt

# Process multiple files and report statistics #
awk '{sum+=$1; count++} END {print FILENAME, sum, count, sum/count}' file1.txt file2.txt

# Use multiple delimiters #
awk -F'[ :,]' '{print $1, $2, $3}' file.txt

```

## FAQ ##

### What Is The Difference Between Awk, Sed, And Grep? ###

- `grep` - Text search tool, finds lines matching patterns
- `sed` - Stream editor, edits text in-place or transforms it
- `awk` - Pattern-processing language, treats text as records and fields, ideal for data extraction and reporting

### How Do I Process CSV Files With Awk? ###

For simple CSV files with no embedded commas or quotes:

```bash
awk -F',' '{print $1, $3}' data.csv  # Print first and third columns

```

For more complex CSV files, you might need additional processing to handle quoted fields properly.

### How Can I Sum Values In A Specific Column? ###

```bash
awk '{sum += $2} END {print sum}' file.txt  # Sum column 2
awk '{sum += $2} END {print "Average:", sum/NR}' file.txt  # Calculate average

```

### How Do I Print Specific Fields? ###

You can use the `$` operator followed by the field number:

- `$1` - First field
- `$2` - Second field
- `$NF` - Last field
- `$(NF-1)` - Second to last field

### What Are The Built-In Variables In Awk? ###

- `NF` - Number of fields in current record
- `NR` - Number of records (lines) processed
- `FNR` - Number of records in current file
- `FILENAME` - Name of current input file
- `FS` - Field separator (same as -F option)
- `RS` - Record separator (newline by default)
- `OFS` - Output field separator
- `ORS` - Output record separator
