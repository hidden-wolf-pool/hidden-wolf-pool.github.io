# `ar` #

- **Purpose:** The `ar` command (archiver) is used to create, modify, and extract from archive files, typically static libraries in Unix-like operating systems. It combines multiple object files (compiled code) into a single archive file, usually with a `.a` extension. This is commonly used in C/C++ development for creating static libraries.
- **Usage:** `ar [OPTIONS] ARCHIVE [FILE...]`

## Basic Usage ##

Create a new archive:

```bash
ar rcs libmylib.a file1.o file2.o file3.o

```

Extract files from an archive:

```bash
ar x libmylib.a

```

List contents of an archive:

```bash
ar t libmylib.a

```

Insert files into an archive:

```bash
ar r libmylib.a newfile.o

```

Update files in an archive (only if newer):

```bash
ar u libmylib.a updatedfile.o

```

Print specific file from archive to standard output:

```bash
ar p libmylib.a file.o

```

## Options ##

- `r` — Insert files into the archive, replacing existing entries
- `c` — Create the archive if it doesn't exist
- `s` — Write an object-file index (equivalent to running ranlib)
- `t` — Display a table of contents of the archive
- `x` — Extract members from the archive
- `d` — Delete files from the archive
- `p` — Print contents of files to standard output
- `v` — Verbose output, showing more details during operations
- `u` — Update existing entries if newer than those in the archive
- `A` — Add files from another archive to this archive

## Shortcuts ##

Common ar operations:

```bash
# Create a static library with index #
ar rcs libmylib.a *.o

# Extract objects and see verbose output #
ar xvs libmylib.a

# Add a new object file and see verbose output #
ar rv libmylib.a newfile.o

# Delete an object file from the archive #
ar d libmylib.a unwanted.o

# List contents in a more readable format #
ar -tv libmylib.a

```

## FAQ ##

### What Does the 'rcs' Combination Mean in Ar Commands? ###

The 'rcs' combination is commonly used:

- `r` - Insert files into the archive, replacing existing entries
- `c` - Create the archive if it doesn't exist
- `s` - Write an object-file index (equivalent to running ranlib afterward)

### How Do I Add a New Object File to an Existing Archive? ###

Use the `r` option to add or replace an object file:

```bash
ar r libmylib.a newfile.o

```

### How Do I Extract Just One Specific File From an Archive? ###

Unfortunately, `ar` doesn't directly support extracting a single file by name. You would typically extract all files and then copy the specific one you need, or use a combination of extraction and filtering.

### How Do I Update Only Changed Files in an Archive? ###

Use the `u` option which updates existing entries only if the file being inserted is newer:

```bash
ar u libmylib.a *.o

```

### What's the Difference Between Static Libraries (.a) and Shared Libraries (.so)? ###

Static libraries (.a) are archives of object files that are linked directly into the executable at compile time. Shared libraries (.so) are loaded at runtime and shared among multiple programs, reducing memory usage.
