# `exit` #

- **Purpose:** Terminate the current shell session or exit from a script. When executed in a terminal, it closes the shell and returns control to the parent process (often logging the user out of the terminal or ending a remote session). In scripts, it stops execution and returns an exit status.
- **Usage:** `exit <exit code>`

## Basic Usage ##

Close the current terminal session:

```bash
exit

```

Exit with a specific status (for example, success):

```bash
exit 0

```

Exit with an error status (for example, general error):

```bash
exit 1

```

## Options ##

The `exit` command does not accept standard command-line options (like `-h` or `--help`). However, you can pass an exit status directly:

- `exit` — Use the default exit status of the last command (usually `0` for success).
- `exit <N>` — Exit with status `N`. By convention:
    - `0` — Success.
    - `1`–`125` — Application-specific error codes.
    - `126` — Command not executable.
    - `127` — Command not found.
    - `128`+ — Special reserved values (for example, signal-related).

## Shortcuts ##

- Press `Ctrl` + `D` in an interactive shell to send an EOF (end-of-file) signal, which typically triggers `exit`.
- In some terminals, `Ctrl` + `Shift` + `W` closes the current tab/window (not a shell-level `exit`, but a UI shortcut).

## FAQ ##

### What Happens if I Run `exit` in a Script? ###

The script stops immediately, and the shell returns the specified (or default) exit status. Any commands after `exit` are not executed.

### Can I Use `exit` to Close a Specific Shell, Not the Whole Terminal? ###

Yes. If you have multiple nested shells (for example, started with `bash` or `sh`), `exit` closes the innermost one. The parent shell remains active.

### Why Does `exit 0` Not Always Mean "success" in My Script? ###

Exit status `0` is _conventionally_ treated as success, but your script's logic or calling environment might interpret it differently. Always document your exit codes if they have special meaning.

### What if I Forget to Specify an Exit Code? ###

If you run `exit` without a number, the shell uses the exit status of the most recently executed command. For example, if the last command succeeded (`echo "done"`), `exit` will return `0`.

### Is `exit` a built-in Command or an External Binary? ###

`exit` is a shell built-in command. It is not a separate executable (you won't find it via `which exit`). This ensures it can properly terminate the shell process.
