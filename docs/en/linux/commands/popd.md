# `popd` #

- **Purpose:** The `popd` command removes the top directory from the directory stack and changes to that directory. It works in conjunction with `pushd` and `dirs` commands to maintain a stack of directories for easy navigation. When executed, `popd` removes the first directory from the stack and navigates to it, effectively returning to the previous directory in the stack sequence.
- **Usage:** `popd [OPTIONS] [+/-N]`

## Basic Usage ##

Remove and navigate to the top directory from the stack:

```bash
popd

```

Remove the Nth directory from the stack (counting from left):

```bash
popd +2

```

Remove the Nth directory from the stack (counting from right):

```bash
popd -2

```

Remove multiple directories from the stack:

```bash
popd +0 +1

```

Navigate to the previous directory in the stack:

```bash
popd

```

Check the directory stack before and after popd:

```bash
dirs
popd
dirs

```

## Options ##

- `+N` — Remove the Nth directory counting from the left of the list shown by dirs, starting with zero
- `-N` — Remove the Nth directory counting from the right of the list shown by dirs, starting with zero
- `-n` — Suppress the normal change of directory when removing elements from the directory stack

## Shortcuts ##

Common directory stack operations:

```bash
# View current directory stack #
dirs

# Navigate to a directory and add to stack #
pushd /path/to/directory

# Return to previous directory in stack #
popd

# List directories in the stack with positions #
dirs -v

# Remove specific directory from stack by position #
popd +1

# Clear entire directory stack #
dirs -c

# Combine pushd and popd in a workflow #
pushd /var/log  # Go to logs directory
# Do some work #
popd            # Return to original directory

```

## FAQ ##

### How Does Popd Work With Pushd? ###

- `pushd` adds a directory to the top of the stack and changes to it
- `popd` removes the top directory from the stack and changes to it
- Together they allow you to jump between directories and return to previous locations

### What Happens When I Use Popd Without Arguments? ###

`popd` without arguments removes the first directory from the stack (the one you most recently pushed with `pushd`) and changes to that directory.

### How Do I View My Current Directory Stack? ###

Use the `dirs` command to see the current directory stack:

```bash
dirs
dirs -v  # With verbose numbering

```

### Can I Remove Multiple Directories With One Popd Command? ###

Yes, you can specify multiple positions:

```bash
popd +0 +1 +2  # Remove first three directories from the stack

```

### What If The Directory Stack Is Empty? ###

If you run `popd` when the directory stack is empty, you'll get an error message indicating that the directory stack is empty and the command fails.
