# `history` #

- **Purpose:** The `history` command is used to display a list of previously executed commands in the current shell session. It helps users to review, repeat, or edit previously entered commands.
- **Usage:** This command is essential for command-line productivity, allowing users to quickly access and reuse previous commands without retyping them.

## Basic Usage ##

Show history:

```bash
history

```

Display only the last 10 commands:

```bash
history -c

```

Show history with timestamps:

```bash
HISTTIMEFORMAT="%F %T " history

```

Search history for specific command:

```bash
history | grep "command"

```

## Shortcuts ##

- <kbd>↑</kbd> — Navigate through previous commands.
- <kbd>Ctrl</kbd> + <kbd>R</kbd> — Reverse search through command history.
- `!!` — Execute the last command.
- `!n` — Execute command number `n` from history.
- `!string` — Execute last command starting with `string`.

## FAQ ##

### Where is the Command History Stored? ###

The command history is stored in the `~/.bash_history` file by default.

### How Do I Increase the History Size? ###

Edit your `~/.bashrc` or `~/.bash_profile` and add:

```bash
export HISTSIZE=10000
export HISTFILESIZE=10000

```

### Can I Disable Command History Temporarily? ###

Set the `HISTFILE` variable to null:

```bash
HISTFILE=/dev/null

```

### How Do I Search My Command History? ###

Use <kbd>Ctrl</kbd> + <kbd>R</kbd> to enter reverse-i-search mode, then type part of the command you want to find.

### How to Prevent Specific Commands From Being Saved in History? ###

Prefix the command with a space, or use `HISTIGNORE` variable to ignore specific patterns.
