# `tar` #

- **Purpose:** The `tar` command stands for "tape archive" and is used to create, maintain, modify, and extract files from archive files. It's commonly used for backup purposes and for exchanging sets of files between users, as it combines multiple files and directories into a single archive file, often compressed.
- **Usage:** `tar [OPTIONS] [ARCHIVE_FILE] [FILE(S)]`

## Basic Usage ##

Create a tar archive:

```bash
tar -cvf archive.tar file1 file2 directory/
```

Extract a tar archive:

```bash
tar -xvf archive.tar
```

Create a compressed archive with gzip:

```bash
tar -czvf archive.tar.gz directory
```

Extract a gzipped archive:

```bash
tar -xzvf archive.tar.gz
```

List contents of an archive without extracting:

```bash
tar -tvf archive.tar
```

Append files to an existing archive:

```bash
tar -rvf archive.tar newfile.txt
```

Create a gzipped archive (most common compression):

```bash
tar -czvf backup.tar.gz /path/to/directory/
```

Extract a gzipped archive to a specific directory:

```bash
tar -xzvf archive.tar.gz -C /target/directory/
```

Extract only specific files from an archive:

```bash
tar -xzf archive.tar.gz path/to/specific/file
```

Compare archive contents with filesystem:

```bash
tar -dvf archive.tar /path/to/check
```

Create archive excluding certain files / patterns:

```bash
tar --exclude='*.log' -cvf archive.tar /path/to/backup/
```

## Options ##

- `-c` — Create a new archive.
- `-x` — Extract files from an archive.
- `-t` — List the contents of an archive.
- `-v` — Verbose output (shows files as they're processed).
- `-f` — Specify the archive filename.
- `-z` — Compress / uncompress with gzip (.gz).
- `-j` — Compress / uncompress with bzip2 (.bz2).
- `-J` — Compress / uncompress with xz (.xz).
- `-r` — Append files to the end of an archive.
- `-u` — Update existing files or add new ones to an archive.
- `-p` — Preserve file permissions and ownership.
- `-C` — Change to directory before performing operations.

## FAQ ##

### How Do I Extract Specific Files From a Tar Archive? ###

Specify the file paths after the archive name:

```bash
tar -xzf archive.tar.gz path/to/specific/file.txt
```

### What's the Difference Between `-c`, `-x`, and `-t` Options? ###

- `-c` creates a new archive.
- `-x` extracts files from an archive.
- `-t` lists files in an archive without extracting them.

### How Do I Preserve File Permissions When Creating Archives? ###

Use the `-p` flag to preserve permissions:

```bash
tar -cpvf archive.tar directory/
```

### How Do I Add Files to an Existing Archive? ###

Use the `-r` flag to append files:

```bash
tar -rvf archive.tar newfile.txt

```

Note: This only works on uncompressed archives, not gzipped ones.

### How Do I Compress Using Different Compression Methods? ###

For gzip (`.gz`): Use `-z` flag

```bash
tar -czvf archive.tar.gz files/
```

For bzip2 (`.bz2`): Use `-j` flag

```bash
tar -cjvf archive.tar.bz2 files/
```

For xz (`.xz`): Use `-J` flag

```bash
tar -cJvf archive.tar.xz files/
```
