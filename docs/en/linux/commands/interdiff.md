# `interdiff` #

- **Purpose:** `interdiff` is a command-line utility that shows the differences between two diff files (patches). It's used to highlight the changes _in a patch itself_, which is especially useful during code reviews. It is part of the `patchutils` suite.
- **Usage:** You provide two diff files as arguments. The output is a new diff that describes how to transform the first patch into the second patch. This allows you to see what has been added to or removed from a patch.

## Basic Usage ##

Create a patch file named `old_feature.patch`

```bash
cat > old_feature.patch <<'PATCH'
--- greeting.txt
+++ greeting.txt
@@ -1 +1 @@
-Hello world
+Hello friend
PATCH

```

Create a patch file named `new_feature.patch`

```bash
cat > new_feature.patch <<'PATCH'
--- greeting.txt
+++ greeting.txt
@@ -1 +1 @@
-Hello world
+Hello universe
PATCH

```

Show the differences between an old patch and a new, updated patch:

```bash
interdiff old_feature.patch new_feature.patch

```

Example output:

```diff
diff -u greeting.txt greeting.txt
--- greeting.txt
+++ greeting.txt
@@ -1 +1 @@
-Hello friend
+Hello universe

```

Save the resulting `diff` to a new file:

```bash
interdiff old_feature.patch new_feature.patch > changes_in_patch.diff

```

## Options ##

- `-p <n>` / `--strip-match=<n>` — When comparing filenames, ignore the first `n` pathname components.
- `-q` / `--quiet` — Quieter output. Does not print messages about files that are only present in one of the two patches.
- `-U <n>` `--unified=<n>` — Generate a diff with `n` lines of context (the default is 3).
- `-w` / `--ignore-all-space` — Ignores all whitespace changes when comparing lines.
- `-b` / `--ignore-space-change` — Ignores changes in the amount of whitespace.
- `-i` / `--ignore-case` — Ignores case differences in file content.
- `-z` / `--decompress` — Decompresses files with `.gz` and `.bz2` extensions before processing.

## FAQ ##

### What's the Primary Use Case for `interdiff`? ###

Its most common use is in code review workflows. If a developer submits a patch and then submits an updated version of that patch based on feedback, a reviewer can use `interdiff` to see only what was changed between the first and second versions of the patch, making the review process much faster and more focused.

### How is This Different From Using the Standard `diff` Command on the Patch Files? ###

A standard `diff` would simply show the textual differences between the two patch files, including context lines and diff headers, which can be very noisy and hard to read. `interdiff` understands the patch format and intelligently compares the _changes_ described by each patch, providing a much cleaner and more meaningful output that is itself a valid patch.

### Do the Input Files Need to Be in a Specific Format? ###

Yes, `interdiff` requires the input files to be valid diffs, typically in the unified or context format.
