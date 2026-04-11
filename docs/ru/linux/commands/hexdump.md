# `hexdump` #

- **Purpose:** The `hexdump` command is a utility for displaying the contents of files in hexadecimal format. It's used to view binary files, examine file structures, debug data formats, verify file contents at the byte level, and analyze file headers. Hexdump is particularly useful for developers, system administrators, and security professionals who need to examine binary data directly, understand file formats, or debug low-level issues. The command can output data in various formats including hexadecimal, octal, decimal, and ASCII representations with customizable layouts and formatting options.
- **Usage:** `hexdump [OPTIONS] [FILE...]`

## Basic Usage ##

Display file contents in default hexadecimal format:

```bash
hexdump file.bin

```

Display file with canonical format (addresses, hex values, and ASCII):

```bash
hexdump -C file.bin

```

Display only the first 16 bytes of a file:

```bash
hexdump -C -n 16 file.bin

```

Skip the first 512 bytes of a file:

```bash
hexdump -C -s 512 file.bin

```

Display with 8 bytes per line instead of default 16:

```bash
hexdump -C -w 8 file.bin

```

Display in octal format:

```bash
hexdump -o file.bin

```

Display in decimal format:

```bash
hexdump -d file.bin

```

Display in unsigned decimal format:

```bash
hexdump -D file.bin

```

## Options ##

- `-C` — Canonical format (same as -b -t d8 -o 0xf -v)
- `-b` — One-byte octets display
- `-d` — Two-byte decimal display
- `-o` — Two-byte octal display
- `-x` — Two-byte hexadecimal display
- `-D` — Unsigned decimal with offsets
- `-v` — Do not compress output
- `-n` — Length to read from input
- `-s` — Skip offset in input
- `-c` — Show printable characters
- `-e` — Specify format string
- `-f` — Specify format file
- `-t` — Select data size for output
- `-w` — Specify number of octets per line

## Shortcuts ##

Common hexdump operations:

```bash
# Display file in canonical format (most common) #
hexdump -C file.bin

# Show only the beginning of a file #
hexdump -C -n 128 file.bin

# Skip header (first 512 bytes) and show next 256 bytes #
hexdump -C -s 512 -n 256 file.bin

# Show specific range (bytes 100-200) #
hexdump -C -s 100 -n 101 file.bin

# Display with different line width (32 bytes per line) #
hexdump -C -w 32 file.bin

# Show only printable ASCII characters #
hexdump -c file.bin

# Display only hex values without addresses #
hexdump -v -e '/1 "%02x "' file.bin

# Display as 32-bit unsigned integers #
hexdump -v -e '8/4 "%08x " "\n"' file.bin

# Show file in simple hex format (no addresses) #
hexdump -v -e '/1 "%02x"" "' file.bin

# Show file with addresses but no ASCII translation #
hexdump -v -e '"%08_ax "" " 16/1 "%02x " "\n"' file.bin

# Compare two binary files visually #
diff <(hexdump -C file1) <(hexdump -C file2)

# Find specific byte patterns #
hexdump -C file.bin | grep "7f 45 4c 46"  # ELF header pattern

# Show file with 4-byte chunks #
hexdump -v -e '4/1 "%02x" " " 4/1 "%02x" " " 4/1 "%02x" " " 4/1 "%02x" "\n"' file.bin

# Display file with custom format (address + 16 hex + ASCII) #
| hexdump -v -e '"%08_ad: " 16/1 "%02x " " | " 16/1 "%_p" " | \n"' file.bin |

# Show only non-zero lines #
| hexdump -C file.bin | grep -v "00000000  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  | ................ | " |

# Count occurrences of specific byte value #
hexdump -v -e '/1 "%02x\n"' file.bin | grep -c "^ff$"

# Show file with little-endian format #
hexdump -v -e '4/1 "%02x" " " 4/1 "%02x" " " 4/1 "%02x" " " 4/1 "%02x" "\n"' file.bin

# Display file as short integers (2-byte words) #
hexdump -v -e '8/2 "%04x " "\n"' file.bin

# Show only the differences between two files #
cmp -l file1 file2 | while read byte offset; do
  echo "Byte $offset differs: 0x$(printf "%02x" $byte) vs 0x$(printf "%02x" $(dd if=file2 bs=1 skip=$((offset-1)) count=1 2>/dev/null | od -tu1 -An))"
done

# Display file with 32-bit big-endian integers #
hexdump -v -e '"%08_ax: " 4/4 "%08x " "\n"' file.bin

# Find specific text in binary file #
hexdump -C file.bin | grep -i "text_to_find"

# Show only lines containing non-ASCII characters #
hexdump -C file.bin | grep -v "^[0-9a-f]*  *[0-9a-f ]*  *[. ]*$"

# Export hexdump to file in specific format #
hexdump -C file.bin > file.hex

# Display file size in hex #
stat -c %s file.bin | xargs printf "%x\n"

# Show checksums of file segments #
hexdump -v -e '"%08_ax: " 8/1 "%02x " "\n"' file.bin | while read addr data; do
  sum=0; for b in $data; do ((sum+=0x$b)); done
  echo "$addr: $(printf "%02x" $((sum%256)))"
done

# Print only addresses where a pattern occurs #
| hexdump -C file.bin | grep -i "pattern" | awk '{print $1}' |

# Display file with addresses in decimal #
hexdump -v -e '1/1 "%03d " 15/1 "%03d " "\n"' file.bin

# Show file with custom separator #
hexdump -v -e '"/" 16/1 "%02x /" "\n"' file.bin

# Display file with reversed byte order (little endian) #
hexdump -v -e '4/1 "%02x"" " 4/1 "%02x"" " 4/1 "%02x"" " 4/1 "%02x""\n"' file.bin

# Show file with word boundaries #
hexdump -v -e '4/2 "%04x " "\n"' file.bin

# Display only header information #
hexdump -C -n 64 file.bin

# Show entire file without skipping zeros #
hexdump -v -C file.bin

# Format output to show bit-level information #
hexdump -v -e '/1 "%02x (%8.8b)" "\n"' file.bin

# Display file with custom line numbers #
hexdump -v -e '"Line " (1+%_i/16) ": " 16/1 "%02x " "\n"' file.bin

# Show file with relative offsets #
hexdump -v -e '"+" 16/1 "%02x " "\n"' file.bin

# Format for hex editor compatibility #
hexdump -v -e '16/1 "%02x" "\n"' file.bin

# Display file with timestamp per line (approximate) #
hexdump -C file.bin | while read -r line; do
  echo "$(date '+%H:%M:%S') $line"
done

# Show file with checksum at end of each line #
hexdump -v -e '"%08_ax: " 16/1 "%02x " " " 16/1 "%_pc" " " ' file.bin

# Generate hexdump with custom prefix for scripting #
hexdump -v -e '"DATA: " 16/1 "%02x " "\n"' file.bin

# Display file as 64-bit values #
hexdump -v -e '2/8 "%016x " "\n"' file.bin

# Count specific byte occurrences #
| hexdump -v -e '1/1 "%02x\n"' file.bin | sort | uniq -c | sort -nr |

# Show file with different color schemes (if terminal supports) #
hexdump -C file.bin | sed 's/\([0-9a-fA-F]\{2\}\)/\x1b[32m\1\x1b[0m/g'

# Display file with column headers #
echo "OFFSET    HEX                                          ASCII"
hexdump -C file.bin | while read -r line; do
  echo " $line"
done

# Create hexdump with custom grouping #
hexdump -v -e '"%08_ax: " 4/1 "%02x " " " 4/1 "%02x " " " 4/1 "%02x " " " 4/1 "%02x " " " 16/1 "%_pc" "\n"' file.bin

# Print hexdump with custom address base #
hexdump -v -s 0x100 -e '"%08_ax: " 16/1 "%02x " "\n"' file.bin

# Format for binary analysis #
hexdump -C -v file.bin | cut -c 1-59

# Show differences in a more readable format #
diff <(hexdump -C file1) <(hexdump -C file2) --side-by-side

# Count unique bytes in a file #
| hexdump -v -e '1/1 "%02x\n"' file.bin | sort | uniq | wc -l |

# Show entropy of file segments #
hexdump -v -e '"%08_ax: " 16/1 "%02x " "\n"' file.bin | while read addr data; do
| entropy=$(echo $data | tr ' ' '\n' | sort | uniq -c | awk '{sum += $1 * log($1)}; END {print -sum}') |
  echo "$addr: Entropy $entropy"
done

# Display file with binary representation #
hexdump -v -e '1/1 "%02x (%8.8t "%8.8b" ") " 15/1 "%02x (%8.8t "%8.8b" ") " "\n"' file.bin

# Format for firmware analysis #
hexdump -C -n 512 file.firmware

# Show file in Intel hex format (requires additional formatting) #
| hexdump -v -e '"%08_ax: " 16/1 "%02x" "\n"' file.bin | sed 's/^/:10/' | sed 's/$/00/' |

# Generate checksum for each line #
hexdump -v -e '"%08_ax: " 16/1 "%02x " "=SUM\n"' file.bin  # conceptual

# Display file in Motorola format #
hexdump -v -e '"L%06_ax " 16/1 "%02x " "\n"' file.bin

# Show file with custom alignment #
hexdump -v -e 'align=4 4/4 "%08x " 4/4 "%08x " "\n"' file.bin

# Print hexdump of stdin #
cat file.bin | hexdump -C

# Show only non-printable characters #
hexdump -C file.bin | grep -v -E '[:print:](/:print:.md)'

# Display file with custom end-of-line markers #
hexdump -v -e '16/1 "%02x " " END\n"' file.bin

# Format for binary patching #
hexdump -C -v file.bin | nl -nln -w10

# Show file with custom addressing scheme #
hexdump -v -e '16/1 "%02x " "\n"' file.bin | nl -v0 -s": "

# Generate statistics about file content #
| hexdump -v -e '1/1 "%02x\n"' file.bin | sort | uniq -c | awk '{print $2 " appears " $1 " times"}' |

```

## FAQ ##

### What Is The Difference Between Hexdump And Xxd? ###

- `hexdump` - More configurable with complex format strings, multiple output formats
- `xxd` - Simpler to use, creates hexdumps and reverse operation (binary from hex)

Both show hexadecimal representations, but hexdump offers more formatting options.

### How Do I Convert Hexdump Output Back To Binary? ###

Use `xxd` with the `-r` flag if you have xxd:

```bash
# If you have the hexdump in canonical format (-C) #
xxd -r -p hexdump_output.txt > original_file.bin

```

Or use `printf` for simple hex values:

```bash
printf "48656c6c6f0a" | xxd -r -p > file.txt

```

### How Do I Read Specific Bytes From A File? ###

Use the `-s` (skip) and `-n` (length) options:

```bash
# Read 10 bytes starting at offset 100 #
hexdump -C -s 100 -n 10 file.bin

# Read 16 bytes from the beginning #
hexdump -C -n 16 file.bin

```

### What Does The -C Flag Do? ###

The `-C` flag produces a canonical format with:

- Offset/Address in hexadecimal (8 digits)
- 16 bytes per line in hexadecimal (divided into groups of 2)
- Corresponding ASCII representation of each byte in a pipe separator
- All zeros lines are suppressed by default (use `-v` to show all)

### How Do I Display Different Data Sizes? ###

Different flags control data size:

- `-d` — Two-byte decimal values (0-65535)
- `-x` — Two-byte hexadecimal values
- `-o` — Two-byte octal values
- `-D` — Four-byte decimal values with offsets
- Custom with `-e` using format specifiers like `/4` for 4-byte words

### How Do I Create Custom Format Strings? ###

Use the `-e` option with format specifiers:

```bash
# Format: address, 4 bytes in hex, then ASCII #
hexdump -v -e '"%08_ax: " 4/1 "%02x " " " 4/1 "%_pc" "\n"' file.bin

```

Format specifiers syntax: `offset/size "format"`

- `/1` — 1-byte values
- `/2` — 2-byte values
- `/4` — 4-byte values
- `%02x` — Hexadecimal with 2 digits and leading zeros
- `%_p` — Printable ASCII characters
- `%ad` — Address in decimal
