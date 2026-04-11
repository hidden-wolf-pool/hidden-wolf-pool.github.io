# `whoami` #

- **Purpose:** Display the user name associated with the current effective user ID. The `whoami` command prints the username of the user who is currently logged in and executing the command.
- **Usage:** Run the command in a terminal without any arguments to get the current username.

## Basic Usage ##

```bash
whoami

```

## FAQ ##

### Is `whoami` Available on All Unix-like Systems? ###

- Yes. `whoami` is a standard command available on virtually all Unix, Linux, macOS, and other POSIX-compliant operating systems.

### Why Would I Need to Use `whoami`? ###

- It's useful in scripts to dynamically determine the current user.
- It helps verify which user account you're operating under, especially after using `su` or `sudo`.
- It can be used in automation or logging to record which user triggered an action.
