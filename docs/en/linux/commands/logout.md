# `logout` #

- **Purpose:** Terminate the current user session in a Linux system, closing all associated processes and returning to the login screen or shell (depending on the environment).
- **Usage:** `logout`

## Basic Usage ##

Run the command in your terminal:

```bash
logout

```

After execution, the current session will end, and you'll be returned to the login prompt or the previous shell layer.

## Shortcuts ##

- Press `Ctrl + D` in the terminal: sends an EOF (End of File) signal, which often triggers logout in interactive shells.
- Use `exit` command: functionally equivalent to `logout` in most cases.
- In graphical environments (for example, GNOME, KDE), use the session menu (usually via the user icon) to select **Log Out**.

## FAQ ##

### What Happens if I Run `logout` in a Script? ###

Running `logout` in a non-interactive script will typically fail, as the command is designed for interactive shell sessions. Use `exit` instead for scripts.

### Can I Logout Another User? ###

No, `logout` only affects the current user session. To terminate another user's session, you'd need administrative tools like `pkill -u <username>` or `skill -KILL -u <username>` (use with caution).

### Why Does `logout` Sometimes Say `not Login shell`? ###

This error occurs when you're not in a login shell for example, a sub-shell opened via `bash`). Use `exit` to close such shells instead.

### Is `logout` the Same as `exit`? ###

In most interactive shells, `logout` and `exit` behave similarly. However, `exit` is more universal (works in scripts and non-login shells), while `logout` is specific to login shells.

### How Do I Force Logout if Processes Are Blocking It? ###

If background jobs prevent logout, first list them with `jobs`, then:

- Use `fg` to bring a job to foreground and stop it.
- Use `kill %<job_number>` to terminate it.
- Alternatively, run `exit` multiple times (some shells require this) or use `pkill -KILL -u $USER` (extreme case, may disrupt data).
