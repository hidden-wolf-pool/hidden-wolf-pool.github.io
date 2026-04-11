# `pushd` #

- **Purpose:** The `pushd` command adds a directory to the top of the directory stack and changes to that directory. It works with `popd` and `dirs` to maintain a stack of directories for easy navigation between multiple locations. This is particularly useful when working with multiple project directories or when you need to temporarily switch to another directory and return to the original location later.
- **Usage:** `pushd [OPTIONS] [+/-N | DIR]`

## Basic Usage ##

Push a directory onto the stack and change to it:

```bash
pushd /path/to/directory

```

Exchange the top two directories in the stack:

```bash
pushd

```

Rotate the stack N positions to the left:

```bash
pushd +2

```

Rotate the stack N positions to the right:

```bash
pushd -2

```

Push a directory and rotate the stack:

```bash
pushd -n /path/to/directory

```

## Options ##

- `+N` — Rotates the directory stack so that the Nth directory (counting from the left of the list shown by dirs, starting with zero) is at the top
- `-N` — Rotates the directory stack so that the Nth directory (counting from the right of the list shown by dirs, starting with zero) is at the top
- `-n` — Suppress the normal change of directory when rotating or adding directories to the stack

## Shortcuts ##

Common directory stack operations:

```bash
# Push current directory to stack and change to new directory #
pushd /var/log

# Exchange top two directories in stack #
pushd

# Rotate stack to bring 2nd directory to top #
pushd +1

# View stack, push directory, then view again #
dirs -v
pushd /tmp
dirs -v

# Use with popd to create navigation workflow #
pushd /var/www/html  # Switch to web directory
# Do work in web directory #
popd                 # Return to original directory

# Create multiple directory stack levels #
pushd /dir1
pushd /dir2
pushd /dir3
popd  # Returns to /dir2
popd  # Returns to /dir1
popd  # Returns to original directory

```

## FAQ ##

### How Does Pushd Differ From Cd? ###

- `cd` simply changes the current directory
- `pushd` changes the directory AND saves the current directory to a stack so you can return to it later with `popd`

### What Happens When I Run Pushd Without Arguments? ###

Running `pushd` without arguments exchanges the top two directories in the stack, effectively swapping the current directory with the one saved on top of the stack.

### How Do I View the Directory Stack? ###

Use the `dirs` command:

```bash
dirs        # Shows the entire stack
dirs -v     # Shows with indexed numbers
dirs -c     # Clears the entire stack

```

### Can I Add a Directory to the Stack Without Changing To It? ###

Yes, use the `-n` option to suppress the directory change:

```bash
pushd -n /path/to/directory

```

This adds the directory to the stack without changing to it.

### How Do I Navigate Back Through the Stack? ###

Use `popd` to remove the top directory from the stack and change to it:

```bash
popd        # Returns to the directory most recently pushed

```

Each `popd` command returns to the next directory in the stack until it's empty.
