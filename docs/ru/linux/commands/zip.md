# `zip` #

- **Purpose:** The `zip` command in Linux is used to create compressed archive files (ZIP archives) containing one or more files or directories. It reduces file sizes for easier storage and transfer, while preserving the original structure and metadata.
- **Usage:** `zip [options] <archive_name.zip> <file1> <file2>`

## Basic Usage ##

Create a ZIP archive from multiple files:

```bash
zip myarchive.zip file1.txt file2.txt file3.txt

```

Recursively compress the `documents` directory into `docs.zip`:

```bash
zip -r docs.zip documents/

```

Quick archive of all `.txt` files:

```bash
zip text_files.zip *.txt

```

Compress with password (interactive):

```bash
zip -e secure.zip important_files/

```

Update archive with new files:

```bash
zip -u myarchive.zip new_file.txt

```

## Options ##

- `-r` — Recursively include directories and their contents.
- `-q` — Quiet mode — suppress output messages.
- `-e` — Encrypt the archive (prompts for a password).
- `-9` — Apply maximum compression (slower but smaller files).
- `-u` — Update existing archive with newer versions of files.
- `-d` — Delete entries from a ZIP archive.
- `-l` — Display detailed information about the archive's contents.
- `-x` — Exclude specific files or patterns (for example, `zip -x "*.log"`).

## FAQ ##

### How Do I Check the Contents of a ZIP File without Extracting It? ###

Use the `unzip -l` command:

```bash
unzip -l archive.zip

```

### Can I Split a Large ZIP File into Smaller Parts? ###

Use the `-s` option to create split archives (requires `zip` with split support):

```bash
zip -s 100m large_archive.zip big_directory/

```

### What's The Difference Between `zip` and `gzip`? ###

- `zip` creates a single archive containing multiple compressed files (preserves filenames and structure).
- `gzip` (`gz`) compresses a single file and doesn't support archiving multiple files (often combined with `tar` for that purpose, for example, `.tar.gz`).

### How Do I Extract a ZIP File? ###

Use the `unzip` command:

```bash
unzip archive.zip

```

Extract to a specific directory:

```bash
unzip archive.zip -d <path to destination/>

```
