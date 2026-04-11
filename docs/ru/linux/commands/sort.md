# `sort` #

- **Purpose:** The `sort` command is used to sort lines of text files in various ways. It arranges lines in ascending or descending order based on specified criteria such as alphabetical, numerical, or by specific fields within each line. It's an essential tool for organizing data, processing logs, and preparing data for further analysis.
- **Usage:** `sort [OPTIONS] [FILE...]`

## Basic Usage ##

Sort lines in a file alphabetically:

```bash
sort file.txt

```

Sort multiple files together:

```bash
sort file1.txt file2.txt

```

Sort numerically instead of alphabetically:

```bash
sort -n numbers.txt

```

Sort in reverse order:

```bash
sort -r file.txt

```

Sort by specific field (using space as delimiter):

```bash
sort -k 2 file.txt

```

Sort ignoring case:

```bash
sort -f file.txt

```

Sort unique lines only:

```bash
sort -u file.txt

```

## Options ##

- `-n` — Sort numerically (not alphabetically)
- `-r` — Reverse the order of sort
- `-k` — Sort by specified field position (for example, -k 2 for second field)
- `-t` — Specify field delimiter (default is whitespace)
- `-u` — Remove duplicate lines after sorting
- `-f` — Ignore case during sort
- `-V` — Sort by version numbers
- `-M` — Sort month names (JAN, FEB, and so on)
- `-o` — Output to specified file
- `-g` — Sort by general numerical value (handles scientific notation)

## Shortcuts ##

Common sort operations:

```bash
# Sort with custom delimiter (comma-separated values) #
sort -t ',' -k 2 file.csv

# Sort by second field numerically #
sort -t ':' -k 2 -n /etc/passwd

# Sort in reverse, output to file #
sort -r -o sorted_output.txt input.txt

# Sort unique lines ignoring case #
sort -f -u file.txt

# Sort largest to smallest (reverse numerical) #
sort -nr numbers.txt

# Sort by last field #
sort -k 4 file.txt

# Combine multiple sort criteria #
sort -k 2,2 -k 1,1r file.txt

```

## FAQ ##

### How Do I Sort Numbers Correctly? ###

Use the `-n` flag for numerical sorting to avoid lexicographic ordering:

```bash
# Wrong: treats numbers as strings #
sort numbers.txt
# Right: sorts numerically #
sort -n numbers.txt

```

### How Do I Sort by a Specific Column in a File? ###

Use the `-k` option to specify the field number:

```bash
# Sort by the third field (column) #
sort -k 3 file.txt

# Sort by the second field as a number #
sort -k 2 -n file.txt

```

### How Do I Sort Unique Lines Only? ###

Use the `-u` flag to remove duplicate lines:

```bash
sort -u duplicates.txt

```

### How Do I Sort Case-Insensitively? ###

Use the `-f` flag to ignore case differences:

```bash
sort -f file.txt

```

### How Do I Save Sorted Output to the Same File? ###

Use the `-o` flag to specify output (this can be the same as input):

```bash
sort -o file.txt file.txt

```

Direct redirection (sort file.txt > file.txt) won't work properly because the input file gets overwritten during writing.
