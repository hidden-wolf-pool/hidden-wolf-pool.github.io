# `combinediff` #

- **Purpose:** `combinediff` is a command-line utility for creating a single, cumulative unified diff from two or more incremental patch files. It is part of the `patchutils` suite of tools.
- **Usage:** The command takes two diff files, which must be in strict incremental order, and merges them into one. This is useful for consolidating multiple changes into a single patch for easier distribution or application.

## Basic Usage ##

Create the `server.conf` file:

```bash
cat > server.conf <<'EOF'
# Server Configuration #
HOST=127.0.0.1
USER=root
EOF

```

Create the `patch1.patch`:

```bash
cat > patch1.patch <<'PATCH'
--- server.conf
+++ server.conf
@@ -1,3 +1,4 @@
 # Server Configuration
 HOST=127.0.0.1
 USER=root
+PORT=8080
PATCH

```

Create the `patch2.patch`:

```bash
cat > patch2.patch <<'PATCH'
--- server.conf
+++ server.conf
@@ -1,3 +1,3 @@
 # Server Configuration
 HOST=127.0.0.1
-USER=root
+USER=app_runner
PATCH

```

Combine two patch files into a new one:

```bash
combinediff patch1.patch patch2.patch > combined.patch

```

The `combined.patch` file should look like this:

```diff
diff -u server.conf server.conf
--- server.conf
+++ server.conf
@@ -1,3 +1,4 @@
 # Server Configuration
 HOST=127.0.0.1
-USER=root
+USER=app_runner
+PORT=8080

```

Combine two patches, ignoring whitespace changes:

```bash
combinediff -w patch1.patch patch2.patch > combined_no_whitespace.patch

```

## Options ##

- `-p <n>` / `--strip-match=<n>` — Ignore the first `n` path name components when comparing filenames, similar to the `-p` option in `patch`.
- `-q` / `--quiet` — Produces quieter output by not emitting rationale lines at the beginning of the patch.
- `-U n` / `--unified=n` — Attempts to display `n` lines of context.
- `-w` / `--ignore-all-space` — Ignores all whitespace changes.
- `-b` / `--ignore-space-change` — Ignores changes in the amount of whitespace.
- `-B` / `--ignore-blank-lines` — Ignores changes where lines are all blank.
- `-z` / `--decompress` — Decompresses files with `.gz` and `.bz2` extensions.

## Shortcuts ##

`combinediff` is a non-interactive command-line tool and does not have internal keyboard shortcuts.

## FAQ ##

### When Would I Use `combinediff`? ###

You would use it to merge a series of incremental patches into one. For instance, if you have a base code and receive two successive updates as patch files, `combinediff` can combine them into a single patch that takes the original code to the final updated state.

### How is `combinediff` Different From Just Concatenating the Diff Files? ###

`combinediff` is more intelligent than simple concatenation. It recalculates the context and offsets in the diff, creating a clean, single patch that can be applied once. Simple concatenation would result in an invalid patch file if both diffs touch the same or adjacent sections of a file.

### Do the Patches Have to Be in a Specific Format? ###

Yes, the patches must be in strict incremental order, meaning the second patch must be relative to the state of the files _after_ the first patch has been applied. While input can be in context format, the output will be in the unified diff format. For best results, the diffs should have at least three lines of context.
