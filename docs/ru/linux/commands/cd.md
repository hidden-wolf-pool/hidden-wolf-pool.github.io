# `cd` #

- **Purpose:** The `cd` (change directory) command is used in Linux/Unix systems to navigate between directories in the file system. It changes the current working directory to the specified location.
- **Usage:** `cd <directory path>`

## Basic Usage ##

Move into a specific directory, provide its path:

```bash
cd <path>

```

Go to the user's home directory:

```bash
cd
cd ~

```

Move up one level to the parent directory:

```bash
cd ..

```

Return to the previous working directory:

```bash
cd -

```

Follow symbolic links before processing `..`:

```bash
cd -L <path>

```

Resolve symbolic links after processing `..`:

```bash
cd -P <path>

```

Treat arguments starting with `-` as directory names, not options:

```bash
cd -- <path>

```

## Shortcuts ##

- `cd` + <kbd>↑</kbd> — Uses history-based navigation.

## FAQ ##

### Can I Use Wildcards with `cd`? ###

No, `cd` does not support wildcards (`*`, `?`, and so on) directly. You'll need to type the full or partial path, or use tab completion in your shell to help auto-complete directory names.
