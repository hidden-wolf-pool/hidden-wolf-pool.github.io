# `which` #

- **Purpose:** To locate the executable file associated with a given command by searching through the directories listed in the `$PATH` environment variable. The `which` command returns the full path to the executable if it exists in one of the searched directories.
- **Usage:** `which [options] <command>`

## Basic Usage ##

Find the path to the `ls` command:

```bash
which ls

```

Output:

```text
/bin/ls
```

## Options ##

- `-a` / `--all`): Show **all** matching executables in `$PATH`, not just the first one found.
- `-s` / `--skip-dot`): Skip directories in `$PATH` that start with a dot (`.`).
- `-p` / `--show-dot`): Show directories in `$PATH` that start with a dot (`.`).

## FAQ ##

### What Happens if `which` Doesn't Find the Command? ###

If `which` returns no output, it means the command is **not found** in any directory listed in your `$PATH`. Verify:

1. The command name is correct.
2. The executable exists in a directory included in `$PATH` (check with `echo $PATH`).
3. The file has executable permissions (`ls -l /path/to/file`).

### How Does `which` Differ From `whereis`? ###

- `which` — Only searches directories in `$PATH` and returns the **executable path**.
- `whereis` — Searches broader system locations (for example, man pages, source files) and may return multiple file types (binaries, manuals, and so on).

### Can `which` Resolve Aliases or Shell Functions? ###

No. `which` only checks filesystem paths in `$PATH`. For aliases or functions, use:

```bash
type command_name

```

### How to Update `which`'s Search if I Modify `$PATH`? ###

The `which` command automatically uses the current `$PATH` value. To reflect changes:

1. Update `$PATH` in your shell (for example, `export PATH="$PATH:/new/directory"`).
2. Run `which` again — it will use the updated `$PATH` immediately.
