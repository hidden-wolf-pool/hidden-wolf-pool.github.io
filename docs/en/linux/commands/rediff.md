# `rediff` #

- **Purpose:** `rediff` is a command-line utility that fixes up and reformats existing patch files. It is often used to correct offsets and line counts in a diff file that has been edited by hand. This tool can also be used to convert a patch from one style to another (for example, from context to unified format). It is part of the `patchutils` suite.
- **Usage:** The command reads a patch file and outputs a corrected or reformatted version. It can either fix the headers of the existing patch or completely recalculate the patch against the original source files.

## Basic Usage ##

Create a patch file with the `my_edited_patch.patch` name:

```bash
cat > my_edited_patch.patch <<'PATCH'
--- hello.txt.orig
+++ hello.txt
@@ -1 +2 @@
-Hello, world!
+Hello, everyone!
PATCH

```

Correct a hand-edited patch and save it to a new file:

```bash
rediff my_edited_patch.patch > my_fixed_patch.patch

```

## FAQ ##

### Why Would I Need to Use `rediff`? ###

The most common reason is that you have manually edited a `.patch` or `.diff` file. When you edit the changes within a patch, you almost certainly invalidate the line numbers and counts in the hunk headers (the `@@ -l,s +l,s @@` lines). `rediff` can fix these headers for you so the patch can be applied correctly by the `patch` command.

### What is the Difference Between `diff`, `patch`, and `rediff`? ###

- `diff` — Creates a patch by comparing two files or directories.
- `patch` — Applies a patch file to a file or directory to update it.
- `rediff` — Edits or fixes an existing patch file.
