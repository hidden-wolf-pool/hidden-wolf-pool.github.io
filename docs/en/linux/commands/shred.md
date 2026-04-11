# `shred` #

- **Purpose:** The `shred` command is a Linux utility used to securely delete files and devices, making it extremely difficult to recover them. Unlike the `rm` command which only removes a file's reference, `shred` overwrites the file's content multiple times with random data. This is crucial for sensitive information like personal or business files.
- **Usage:** The basic syntax for the `shred` command is: `shred [options] <file>`

## Basic Usage ##

This command will overwrite the contents of "filename.txt" multiple times:

```bash
shred filename.txt

```

Overwrite a file 5 times, show the progress, add a final overwrite with zeros, and then delete the file:

```bash
shred -n 5 -v -z -u filename.txt

```

## Options ##

- `-n <n>` / `--iterations=<n>` — Overwrite `<n>` times instead of the default (3 times).
- `-u` / `--remove` — Truncate and remove the file after overwriting.
- `-v` / `--verbose` — Show detailed progress information.
- `-z` / `--zero` — Add a final overwrite with zeros to hide shredding.
- `-s` / `--size=BYTES` — Shred the first BYTES of the file. Suffixes like K, M, and G can be used.

## FAQ ##

### What is the Difference Between `shred` and `rm`? ###

The `rm` command removes a file from the file system, but the data may still be recoverable. `shred` overwrites the file's data multiple times, making recovery much more difficult.

### Can `shred` Be Used on Directories? ###

No, `shred` only works on individual files. To securely delete a directory, you would need to `shred` each file within it individually.

### Is `shred` Always Effective? ###

The `shred` command relies on the assumption that the file system overwrites data in place. Many modern file systems (like log-structured or journaling file systems) do not satisfy this assumption, which can limit the effectiveness of `shred`.
