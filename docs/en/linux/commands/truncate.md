# `truncate` #

- **Purpose:** The `truncate` command is used to shrink or extend the size of a file to a specified size. It can create empty files of a specific size or modify the size of existing files without changing their content (within the preserved range). This command is particularly useful for creating files of specific sizes for testing, clearing log files, creating sparse files, or resizing files to a specific capacity. The truncate operation is efficient as it doesn't necessarily allocate or deallocate disk space immediately, but rather adjusts the file's metadata to reflect the new size.
- **Usage:** `truncate [OPTIONS] [SIZE] FILE...`

## Basic Usage ##

Set a file to a specific size (in bytes):

```bash
truncate -s 1G file.txt

```

Extend a file to a specific size:

```bash
truncate -s 10M largefile.dat

```

Reduce file to specific size:

```bash
truncate -s 100K smallfile.txt

```

Grow file by a specific amount:

```bash
truncate -r reference_file.txt file_to_resize.txt

```

Shrink file to zero bytes:

```bash
truncate -s 0 log.txt

```

Set file size relative to current size:

```bash
truncate -s +5M file.txt  # Add 5MB to current size

```

Reduce file size relative to current size:

```bash
truncate -s -2K file.txt  # Reduce by 2KB from current size

```

## Options ##

- `-c` — Do not create files
- `-o` — Only reduce size, never extend
- `-r` — Reference file to set size (based on reference file size)
- `-s` — Set or adjust the size of each file
- `--help` — Display help and exit
- `--version` — Output version information and exit

## Shortcuts ##

Common truncate operations:

```bash
# Create a 100MB empty file quickly #
truncate -s 100M ./large_file.bin

# Create a 1GB test file #
truncate -s 1G ./test_file.img

# Clear a log file content (but keep the file itself) #
truncate -s 0 /var/log/app.log

# Resize multiple files to same size #
truncate -s 50M file1.txt file2.txt file3.txt

# Resize file to match another file's size #
truncate -r reference.txt target.txt

# Extend file by 10MB #
truncate -s +10M file.txt

# Shrink file by 5KB #
truncate -s -5K file.txt

# Create sparse file of specific size (doesn't use actual disk space) #
truncate -s 2G sparse_file.img

# Create multiple test files of different sizes #
for size in 1M 10M 100M 1G; do truncate -s $size "test_$size"_file; done

# Truncate file to specific size without creating if it doesn't exist #
truncate -c -s 50M existing_file.txt

# Only reduce file size (don't extend if smaller) #
truncate -o -s 1M potentially_smaller_file.txt

# Create a file that is exactly 512 bytes (block size) #
truncate -s 512 file.bin

# Set file size to match specific requirements #
truncate -s 64K config_file.txt

# Create multiple log files with specific sizes #
for i in {1..5}; do truncate -s 10M "log_$i.log"; done

# Set file size in bytes for precise control #
truncate -s 8192 bytes_file.txt

# Create file with specific GiB size #
truncate -s 2GiB disk_image.img

# Create file with specific MiB size #
truncate -s 512MiB backup_file.img

# Truncate multiple files to zero size (clear them) #
truncate -s 0 *.log

# Create files for disk benchmarking #
for size in 1G 2G 4G 8G; do truncate -s $size "benchmark_$size".dat; done

# Truncate file to specific size and verify #
truncate -s 100M large_file.dat && ls -lh large_file.dat

# Reduce file by percentage (calculate first) #
ORIGINAL_SIZE=$(stat -c%s "file.txt")
NEW_SIZE=$((ORIGINAL_SIZE * 90 / 100))
truncate -s ${NEW_SIZE}c file.txt

# Create sparse files for virtual machines #
truncate -s 30G vm_disk.qcow2

# Pre-allocate disk space without zeroing #
truncate -s 500M file_with_space.txt

# Create files that simulate different storage requirements #
truncate -s 128M "small_partition.img"
truncate -s 2G "medium_partition.img"
truncate -s 16G "large_partition.img"

# Set size based on calculation #
truncate -s $((10*1024*1024))c file.txt  # 10MB calculated

# Truncate file to remove end portion #
truncate -s -1M file_with_trailer.txt

# Create a sparse file with virtual size larger than actual disk space used #
truncate -s 100G virtual_disk.img
du -h virtual_disk.img  # Shows actual space used
ls -lh virtual_disk.img  # Shows virtual size

# Create test files with different extensions #
create_test_files() {
  truncate -s 1M "$1.doc"
  truncate -s 2M "$1.mp3"
  truncate -s 5M "$1.mp4"
  truncate -s 10M "$1.iso"
}
create_test_files test_data

# Batch resize files in a directory #
for file in /path/to/files/*; do
  if [ -f "$file" ]; then
    truncate -s 1M "$file"
  fi
done

# Create files with exact binary sizes #
truncate -s 1024c file_1kb.txt    # Exactly 1024 bytes
truncate -s 1048576c file_1mb.txt  # Exactly 1MB in bytes

# Compare reference file vs target after truncate #
REF_SIZE=$(stat -c%s "reference.txt")
truncate -r reference.txt target.txt
TARGET_SIZE=$(stat -c%s "target.txt")
if [ "$REF_SIZE" -eq "$TARGET_SIZE" ]; then
  echo "File resized correctly"
fi

# Use truncate as disk space allocator #
truncate -s 512M /tmp/allocated_space.tmp

# Create files with human-readable size specifications #
truncate -s 10K small.txt      # 10 kilobytes
truncate -s 10M medium.txt     # 10 megabytes
truncate -s 10G large.txt      # 10 gigabytes
truncate -s 10T huge.txt       # 10 terabytes

# Truncate to size with conditional check #
if [ -f "log.txt" ] && [ $(stat -c%s "log.txt") -gt 1048576 ]; then  # Greater than 1MB
  truncate -s 512K log.txt
fi

# Create multiple files with increasing sizes #
for i in {1..10}; do
  truncate -s ${i}M "file_${i}_megabyte.txt"
done

# Truncate files based on condition #
find /path/to/logs -name "*.log" -size +100M -exec truncate -s 50M {} \;

# Truncate file while preserving header #
HEADER_SIZE=1024
CURRENT_SIZE=$(stat -c%s "file.txt")
if [ $CURRENT_SIZE -gt $((HEADER_SIZE + 1024)) ]; then
  truncate -s $((HEADER_SIZE + 512)) file.txt
fi

# Create file with specific alignment (for example, for databases) #
truncate -s 8192c aligned_file.db  # 8KB aligned

# Combine truncate with other operations #
truncate -s 50M new_file.txt && chmod 600 new_file.txt

# Truncate and count actual vs virtual size difference #
truncate -s 1G sparse_file.txt
echo "Virtual size: $(ls -lh sparse_file.txt | awk '{print $5}')"
echo "Actual size: $(du -h sparse_file.txt | awk '{print $1}')"

# Create files for stress testing #
for i in {1..100}; do truncate -s 100K "stress_test_$i.tmp"; done

# Truncate with error checking #
if truncate -s 1G large_file.txt 2>/dev/null; then
  echo "File truncated successfully"
else
  echo "Failed to truncate file"
fi

# Use truncate to create space for applications #
APP_SPACE_NEEDED=2G
truncate -s $APP_SPACE_NEEDED /tmp/app_workspace.tmp

# Conditional truncation based on file size #
check_and_truncate() {
  local max_size=$1
  local file_path=$2
  local current_size=$(stat -c%s "$file_path")
  if [ "$current_size" -gt "$max_size" ]; then
    truncate -s "$((max_size / 2))" "$file_path"
    echo "File $file_path reduced from ${current_size} to $((max_size / 2)) bytes"
  fi
}

# Create template files of specific sizes #
truncate -s 4K config_template.json
truncate -s 1M data_template.csv
truncate -s 10M log_template.txt

# Truncate in a loop with verification #
for file in *.dat; do
  truncate -s 5M "$file"
| [ $(stat -c%s "$file") -eq 5242880 ] && echo "$file verified" | | echo "$file failed" |
done

# Monitor space usage after truncation #
| echo "Before: $(df -h /path/to/directory | tail -1 | awk '{print $5}')" |
truncate -s 100M large_file.txt
| echo "After: $(df -h /path/to/directory | tail -1 | awk '{print $5}')" |

# Truncate while maintaining file ownership and permissions #
# (truncation preserves file attributes) #
truncate -s 1K secure_file.txt
# File keeps same owner, group, and permissions #

# Create files for performance testing with different access patterns #
truncate -s 100M sequential_access_test.dat
truncate -s 100M random_access_test.dat

# Truncate multiple files conditionally #
for file in *.old; do
  [ -f "$file" ] && truncate -s 0 "$file" && echo "Cleared $file"
done

# Calculate and set file size based on percentage of another file #
OTHER_FILE_SIZE=$(stat -c%s "other_file.txt")
PERCENT_SIZE=$((OTHER_FILE_SIZE * 75 / 100))  # 75% of other file
truncate -s ${PERCENT_SIZE}c reference_based.txt

# Truncate files as part of cleanup routine #
find /tmp -name "temporary_*.tmp" -exec truncate -s 0 {} \; -exec rm {} \;

# Create test files for backup processes #
for i in {1..5}; do
  truncate -s ${i}00M "backup_simulation_$i.tar"
done

# Use truncate to prepare space for image operations #
truncate -s 4G temporary_image_space.img
mkfs.ext4 temporary_image_space.img  # Can now format as filesystem
rm temporary_image_space.img  # Clean up

# Truncate with size validation #
validate_truncate() {
  local target_size=$1
  local file=$2
  truncate -s $target_size "$file"
  local actual_size=$(stat -c%s "$file")
| [ $actual_size -eq $target_size ] && echo "Success" | | echo "Failed: Expected $target_size, got $actual_size" |
}
validate_truncate 2097152 test_file.txt  # 2MB in bytes

# Set multiple files to same size with pattern #
truncate -s 5M /tmp/cache_*.tmp

# Truncate using arithmetic expressions for complex sizing #
truncate -s $((10*1024*1024+512*1024))c complex_size.txt  # 10.5MB

```

## FAQ ##

### What Is The Difference Between Truncate And Regular File Creation? ###

- `truncate` - Adjusts file size metadata, can extend or shrink without necessarily allocating disk space
- `dd` or `fallocate` - Explicitly manage space allocation
- `touch` - Changes timestamps, doesn't change file size

Truncate creates sparse files efficiently by adjusting the file's size in the filesystem metadata.

### When Would I Use Truncate Instead Of Dd? ###

Use `truncate` when:

- You want to quickly create large files without allocating actual disk space
- You need to change file size without concern for content
- You want to clear file content to zero size efficiently

Use `dd` when you need to initialize file content with specific data.

### How Does Truncate Handle Existing File Content? ###

- When extending: Preserves existing content, newly allocated space is typically zero-filled
- When shrinking: Preserves content up to the new size, discards the rest
- No existing content is altered in the preserved portion

### What Are Sparse Files? ###

Sparse files are files where the filesystem reports a large size but doesn't actually allocate disk space for empty portions. Truncate creates sparse files by default, making it efficient for creating large virtual files without consuming actual disk space.

### Can Truncate Be Used To Clear Log Files? ###

Yes, truncate is ideal for clearing log files:

```bash
truncate -s 0 /var/log/application.log

```

This preserves file permissions and handles, which is better than removing and recreating the file for running applications.

### How Do I Specify File Sizes In Different Units? ###

Truncate understands several suffixes:

- `c` — bytes
- `w` — words (2 bytes each)
- `b` — blocks (512 bytes each)
- `k/K` — kilobytes (1024 bytes)
- `M` — megabytes (1024² bytes)
- `G` — gigabytes (1024³ bytes)
- `T` — terabytes (1024⁴ bytes)
- `P` — petabytes (1024⁵ bytes)
- `E` — exabytes (1024⁶ bytes)

Example: `truncate -s 1G filename` creates a 1 gigabyte file.
