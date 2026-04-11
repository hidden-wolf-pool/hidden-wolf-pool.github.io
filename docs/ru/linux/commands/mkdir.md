# `mkdir` #

- **Purpose:** Create one or more new directories.
- **Usage:** `mkdir [OPTION]... DIRECTORY...`

## Basic Usage ##

Create a new directory named `my_new_folder` in the current location:

```bash
mkdir my_new_folder

```

Create parents directories:

```bash
mkdir -p project/src/main

```

Verbose creation:

```bash
mkdir -v photos videos

```

Create a private directory:

```bash
mkdir -m 700 private_dir

```

Create multiple directories at the same time by listing them:

```bash
mkdir docs assets images

```

Use brace expansion `{}` to create a series of related directories efficiently:

```bash
mkdir -p photo_album/{2023,2024,2025}

```

It creates `photo_album/2023`, `photo_album/2024`, and `photo_album/2025`.

## Options ##

- `-p` / `--parents` — Create parent directories as needed. No error if the directory already exists.
- `-v` / `--verbose` — Print a message for each created directory.
- `-m` / `--mode=MODE` — Set the file mode (permissions) for the created directories.
