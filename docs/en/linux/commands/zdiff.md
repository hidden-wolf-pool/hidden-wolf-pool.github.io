# `zdiff` #

- **Purpose:** The `zdiff` command is used to compare compressed files without having to decompress them first. It works with files compressed using gzip (.gz), bzip2 (.bz2), and other compression formats. This command essentially acts as a wrapper around the `diff` command that automatically decompresses the input files before comparing them. It's particularly useful for comparing compressed log files, configuration backups, or any compressed text files, helping to identify changes between different versions of compressed files directly.
- **Usage:** `zdiff [OPTIONS] FILE1 FILE2`

## Basic Usage ##

Compare two compressed files:

```bash
zdiff file1.txt.gz file2.txt.gz

```

Compare compressed and uncompressed file:

```bash
zdiff compressed_file.txt.gz uncompressed_file.txt

```

Compare with unified format output:

```bash
zdiff -u file1.txt.gz file2.txt.gz

```

Compare with ignore whitespace differences:

```bash
zdiff -w file1.txt.gz file2.txt.gz

```

Compare with context of 3 lines around differences:

```bash
zdiff -C 3 file1.txt.gz file2.txt.gz

```

Show only names of differing files in directory comparison:

```bash
zdiff -q file1.txt.gz file2.txt.gz

```

Ignore case differences:

```bash
zdiff -i file1.txt.gz file2.txt.gz

```

## Options ##

- `-u` — Output in unified format (show context around differences)
- `-c` — Output in context format
- `-q` — Print only file names if they differ
- `-s` — Report when two files are identical
- `-i` — Ignore case differences
- `-w` — Ignore all whitespace
- `-b` — Ignore changes in amount of whitespace
- `-B` — Ignore changes that affect only blank lines
- `-C NUM` — Output NUM lines of context
- `-U NUM` — Output NUM lines of unified context
- `--side-by-side` — Output in two-col column format
- `-y` — Use side-by-side format
- `--left-column` — Print only left column of common lines
- `--suppress-common-lines` — Do not print common lines in side-by-side format
- `-W` — Set width of side-by-side output

## Shortcuts ##

Common zdiff operations:

```bash
# Compare two gzipped log files #
zdiff log1.gz log2.gz

# Compare with unified format (show context) #
zdiff -u config1.conf.gz config2.conf.gz

# Compare ignoring whitespace differences #
zdiff -w file1.txt.gz file2.txt.gz

# Compare with context format showing 5 lines around differences #
zdiff -C 5 old.txt.gz new.txt.gz

# Compare ignoring case differences #
zdiff -i file1.txt.gz file2.txt.gz

# Compare compressed archives for file differences #
zdiff -q archive1.tar.gz archive2.tar.gz

# Side-by-side comparison of compressed config files #
zdiff --side-by-side config1.conf.gz config2.conf.gz

# Compare with 3 lines of context #
zdiff -C 3 -w backup1.gz backup2.gz

# Show only names of different files #
zdiff -q *.gz

# Compare compressed versions of the same file across dates #
zdiff -u logs_2023-01-01.gz logs_2023-12-31.gz

# Compare with side-by-side output and specific width #
zdiff -W 120 --side-by-side file1.gz file2.gz

# Report identical files #
zdiff -s file1.gz file2.gz

# Compare compressed files with blank line differences ignored #
zdiff -B file1.txt.gz file2.txt.gz

# Compare only the first 100 lines of compressed files #
| zcat file1.gz | head -n 100 > temp1 && zcat file2.gz | head -n 100 > temp2 && diff temp1 temp2 && rm temp1 temp2 |

# Compare files and suppress common lines in side-by-side output #
zdiff --side-by-side --suppress-common-lines file1.gz file2.gz

# Compare compressed config files with detailed context #
zdiff -C 10 --ignore-case config_old.gz config_new.gz

# Use with output redirection #
zdiff -u old_ver.gz new_ver.gz > changes.patch

# Compare files with different compression formats #
zdiff -u file.txt.gz file.txt.bz2

# Compare multiple pairs of compressed files #
for gzfile in *.gz; do
  txtfile=$(basename "$gzfile" .gz)
  if [ -f "$txtfile" ]; then
    echo "Comparing $gzfile with $txtfile"
    zdiff "$gzfile" "$txtfile"
  fi
done

# Compare compressed files and count differences #
| diff_output=$(zdiff file1.gz file2.gz); echo "$diff_output" | grep "^.*" | wc -l |

# Show differences with color (when supported) #
zdiff --color=always file1.gz file2.gz

# Compare specific regions of compressed files #
| zcat file1.gz | sed -n '10,20p' | diff - <(zcat file2.gz | sed -n '10,20p') |

# Compare multiple compressed files to a reference #
for file in *.gz; do
  if ! zdiff -q reference.gz "$file" >/dev/null; then
    echo "File $file differs from reference"
  fi
done

# Compare files with custom diff options #
zdiff --ignore-blank-lines --strip-trailing-cr file1.gz file2.gz

# Compare compressed directory listings #
| zdiff <(ls -la dir1/ | gzip -c) <(ls -la dir2/ | gzip -c) |

# Compare compressed output of commands #
| zdiff <(ps aux | gzip -c) <(ps aux | gzip -c)  # Would show process differences |

# Compare compressed tar archives contents #
| zdiff <(tar -tzf archive1.tar.gz | sort | gzip -c) <(tar -tzf archive2.tar.gz | sort | gzip -c) |

# Compare compressed CSV files with specific field delimiters #
| zcat file1.csv.gz | sort -t',' -k1,1 | gzip -c > sorted1.csv.gz |
| zcat file2.csv.gz | sort -t',' -k1,1 | gzip -c > sorted2.csv.gz |
zdiff sorted1.csv.gz sorted2.csv.gz

# Compare compressed logs with timestamps filtered out #
| zcat log1.gz | sed 's/^[^ ]* [^ ]* //' | gzip -c > clean1.gz |
| zcat log2.gz | sed 's/^[^ ]* [^ ]* //' | gzip -c > clean2.gz |
zdiff clean1.gz clean2.gz

# Create a comparison script #
#!/bin/bash
if zdiff -q "$1" "$2"; then
  echo "Files are identical"
else
  echo "Files differ"
  read -p "Show differences? (y/n) " -n 1 -r
  echo
  if [ $REPLY =~ ^[Yy](/%20$REPLY%20=~%20^[Yy.md); then
    zdiff -u "$1" "$2"
  fi
fi

# Compare compressed files with binary diff as fallback #
| zdiff -q "$file1" "$file2" | | cmp <(zcat "$file1") <(zcat "$file2") |

# Compare compressed files with word-wrap ignored #
zdiff --ignore-space-change file1.gz file2.gz

# Compare files and only show lines that differ #
zdiff --left-column file1.gz file2.gz

# Compare with custom function for complex preprocessing #
compare_preprocessed() {
| zcat "$1" | grep -v "^#" | sort | gzip -c > tmp1.gz |
| zcat "$2" | grep -v "^#" | sort | gzip -c > tmp2.gz |
  zdiff -u tmp1.gz tmp2.gz
  rm tmp1.gz tmp2.gz
}

# Compare compressed files using external diff program #
zdiff --diff-program=colordiff file1.gz file2.gz

# Compare compressed files with line numbers ignored #
| zdiff <(zcat file1.gz | nl) <(zcat file2.gz | nl) |

# Compare files and generate patch #
zdiff -u file1.gz file2.gz | patch -p1 <(zcat file1.gz)

# Check if compressed files have identical content #
if zdiff -s "$file1.gz" "$file2.gz" 2>/dev/null; then
  echo "Content is identical"
else
  echo "Content differs"
fi

# Compare files with specific encoding #
zdiff --ignore-matching-lines="^#.*" <(gunzip -c file1.gz) <(gunzip -c file2.gz)

# Compare compressed output of commands with temporary files #
| date | gzip > temp1.gz && sleep 1 && date | gzip > temp2.gz && zdiff temp1.gz temp2.gz && rm temp1.gz temp2.gz |

# Compare multiple versions of compressed files in a sequence #
for i in {1..10}; do
  if [ -f "file_v${i}.gz" ] && [ -f "file_v$((i+1)).gz" ]; then
    echo "Comparing version $i with version $((i+1))"
| zdiff -q "file_v${i}.gz" "file_v$((i+1)).gz" | | echo "  Versions differ" |
  fi
done

# Use zdiff with find command #
| find . -name "*.log.gz" -exec sh -c 'zdiff -q "$1" reference.log.gz | | echo "Different: $1"' _ {} \; |

# Compare compressed files with custom diff algorithm #
zdiff --minimal file1.gz file2.gz

# Compare files and suppress headers #
zdiff --no-dereference file1.gz file2.gz

# Compare with external tool for advanced features #
| zdiff file1.gz file2.gz | colordiff | less -R |

# Compare compressed JSON files with formatting #
| zcat file1.json.gz | jq '.' | gzip > formatted1.json.gz |
| zcat file2.json.gz | jq '.' | gzip > formatted2.json.gz |
zdiff -u formatted1.json.gz formatted2.json.gz

# Compare compressed files ignoring specific lines #
| zcat file1.gz | grep -v "timestamp\ | version" | gzip > clean1.gz |
| zcat file2.gz | grep -v "timestamp\ | version" | gzip > clean2.gz |
zdiff -u clean1.gz clean2.gz

# Compare compressed files with custom line matching #
zdiff --ignore-matching-lines="^.*$" file1.gz file2.gz  # Ignore all lines (special case)

# Compare and highlight changes in compressed files #
zdiff -u --show-function-line='^.*{' file1.gz file2.gz

# Create comparison with custom output format #
zdiff --old-group-format=$'\e[0;31m%<\e[0m' --new-group-format=$'\e[0;32m%>\e[0m' file1.gz file2.gz

# Compare files with custom binary detection #
zdiff --binary file1.gz file2.gz

# Compare with forced text mode #
zdiff --text file1.gz file2.gz

# Compare files and include equal parts in output #
zdiff --show-all file1.gz file2.gz

# Compare compressed files with performance profiling #
time zdiff -w --ignore-blank-lines file1.gz file2.gz

# Batch compare compressed files with pattern matching #
for pattern in *.conf.gz; do
  if [ $pattern =~ ^backup_.* ](/%20$pattern%20=~%20^backup_.*%20); then
    original="${pattern#backup_}"
    original="${original%.gz}"
    if [ -f "$original.gz" ]; then
      echo "Comparing backup with original: $pattern vs $original.gz"
      zdiff "$pattern" "$original.gz"
    fi
  fi
done

# Compare files with custom context separator #
zdiff -C 2 --context-separator="--- DIFFERENCE ---" file1.gz file2.gz

```

## FAQ ##

### What Is The Difference Between Zdiff And Diff? ###

- `diff` - Compares uncompressed text files directly
- `zdiff` - Compares compressed text files by decompressing them in memory before comparison

Zdiff is essentially a wrapper that decompresses the files automatically before calling diff.

### How Do I Compare Files With Different Compression Formats? ###

Zdiff can handle different compression formats transparently:

```bash
zdiff file.txt.gz file.txt.bz2
zdiff file.txt.gz file.txt.xz

```

### Can I Compare Compressed Directories? ###

Not directly with zdiff, but you can compare compressed directory listings:

```bash
zdiff <(tar -tzf archive1.tar.gz) <(tar -tzf archive2.tar.gz)

```

### How Do I Ignore Certain Types Of Differences? ###

Use various ignore options:

- `-w` - Ignore all whitespace differences
- `-i` - Ignore case differences
- `-b` - Ignore changes in amount of whitespace
- `-B` - Ignore changes that affect only blank lines
- `--ignore-matching-lines=PATTERN` - Ignore lines matching PATTERN

### How Do I Generate A Patch From Zdiff Output? ###

```bash
zdiff -u old_file.gz new_file.gz > changes.patch

```

You can then apply this patch to the decompressed content of the old file.

### What Compression Formats Does Zdiff Support? ###

Zdiff supports files compressed with:

- gzip (.gz) - Most common
- bzip2 (.bz2)
- compress (.Z)
- LZMA (.lzma)
- xz (.xz)

The tool automatically detects the compression format and decompresses accordingly.
