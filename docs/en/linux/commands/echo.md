# `echo` #

- **Purpose:** The `echo` command is used to display a line of text or string that is passed as an argument. It is commonly used in shell scripts and batch files to output status text to the screen or a file.
- **Usage:** `echo [OPTION]... [STRING]...`

## Basic Usage ##

Print a simple message to the terminal:

```bash
echo 'Hello, World!'

```

Print multiple words (no quotes needed for simple strings):

```bash
echo Hello World

```

Do not output the trailing newline:

```bash
echo -n 'Hello, '
echo 'World!'

```

Enable interpretation of backslash escapes (for example, `\n`, `\t`):

```bash
echo -e 'Hello\nWorld'

```

Disable interpretation of backslash escapes (default behavior):

```bash
echo -E 'Hello\nWorld'

```

Use quotes to preserve whitespace or include special characters:

```bash
echo 'This    has    extra    spaces'

```

Combine with redirection to write to a file:

```bash
echo 'Content' > file.txt

```

Append to a file instead of overwriting:

```bash
echo 'More content' >> file.txt

```

Print the value of a variable.

```bash
echo $variable

```

## FAQ ##

### Why Does `echo *` Show My Files? ###

The `*` is a shell wildcard that expands to all files in the current directory before `echo` runs. To print a literal `*`, quote it:

```bash
echo '*'
# * #

```

### Is `echo` the Same Across All Shells? ###

Mostly, but behavior can vary slightly between shells (for example, bash, zsh, sh). For portable scripts, consider using `printf` for complex formatting.
