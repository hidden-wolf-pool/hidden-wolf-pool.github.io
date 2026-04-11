# `unzip` #

- **Purpose:** The `unzip` command is used to extract files from a ZIP archive in Linux/Unix systems. It supports decompression, listing contents, testing integrity, and basic file management within archives.
- **Usage:** `unzip [options] zipfile.zip [files_to_extract] [-x excluded_files]`

## Basic Usage ##

Extract all files from an archive:

```bash
unzip archive.zip

```

Extract to a specific directory:

```bash
unzip archive.zip -d <destination>

```

## Options ##

- `-l` — List contents of the ZIP file without extracting.
- `-t` — Test the integrity of the archive.
- `-n` — Never overwrite existing files (skip if file exists).
- `-o` — Overwrite existing files without prompting.
- `-q` — Quiet mode (suppress verbose output).
- `-v` — Verbose mode (show detailed information).
- `-x` — Exclude specific files from extraction.

## FAQ ##

### How Do I Extract Only Specific Files From a ZIP? ###

Use the filenames after the archive name:

```bash
unzip archive.zip file1.txt folder/file2.jpg

```

### How Can I Prevent `unzip` From Asking to Overwrite Files? ###

Use the `-n` (no overwrite) or `-o` (overwrite) flag:

- `unzip -n archive.zip` — Skips existing files.
- `unzip -o archive.zip` — Overwrites existing files automatically.

### What if the ZIP File is Password-protected? ###

`unzip` will prompt for the password interactively:

```bash
unzip secured.zip

```

Enter the password when prompted. For non-interactive use, you can pass it via `-P`:

```bash
unzip -P mypassword secured.zip

```

### Can `unzip` Handle Large Archives Efficiently? ###

Yes, but for very large files, consider:

- Using `-q` to reduce output noise.
- Extracting specific files instead of all contents.
- Monitoring disk space before extraction.
