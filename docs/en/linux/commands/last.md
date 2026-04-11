# `last` #

- **Purpose:** The `last` command displays a list of the last logged-in users from the `/var/log/wtmp` file. It shows login history including usernames, terminal devices, login times, logout times, and duration of sessions. This command is useful for system administrators to audit user access, identify unusual login patterns, track user activity, and investigate potential security incidents.
- **Usage:** `last [OPTIONS] [USER...] [TTY...]`

## Basic Usage ##

Display the last login sessions for all users:

```bash
last

```

Display the last login sessions for a specific user:

```bash
last username

```

Display the last 10 login sessions:

```bash
last -n 10

```

Display the last login sessions from a specific TTY:

```bash
last tty1

```

Display login sessions since a specific time:

```bash
last -s yesterday

```

Display login sessions up to a specific time:

```bash
last -t today

```

## Options ##

- `-n` — Limit output to the last N entries
- `-s` — Display entries since a specific date/time
- `-t` — Display entries until a specific date/time
- `-R` — Omit hostname column
- `-a` — Display hostname in last column
- `-d` — Translate IP numbers to hostnames
- `-i` — Display IP addresses in dotted decimal format
- `-F` — Display complete login and logout times
- `-w` — Display full domain names

## Shortcuts ##

Common last operations:

```bash
# Show last 5 logins #
last -n 5

# Show logins for specific user in the last week #
last -s "week ago" username

# Show logins with full timestamps #
last -F

# Show logins without hostname column #
last -R

# Find when a specific user last logged in #
last username | head -n 10

# Show logins from a specific date #
last -s 2023-01-01

# Show logins for multiple users #
last user1 user2 user3

# Display logins with IP resolution #
last -d

```

## FAQ ##

### What Is The Wtmp File? ###

The `/var/log/wtmp` file stores historical login information, including:

- User login and logout times
- Terminal used
- Duration of sessions
- Remote hosts (if applicable)
- Boot and shutdown records

### How Do I Check If A User Has Logged In Recently? ###

Use the `last` command with the username and limit to recent entries:

```bash
last username

```

### What's The Difference Between Last And Who Commands? ###

- `last` - Shows historical login information from wtmp file
- `who` - Shows currently logged-in users

### How Do I Clear The Wtmp File? ###

To clear the login history (requires root):

```bash
sudo > /var/log/wtmp

```

Alternatively, use the `truncate` command:

```bash
sudo truncate -s 0 /var/log/wtmp

```

### How Do I Interpret The Last Output Columns? ###

The standard `last` output includes:

1. Username
2. Terminal device (tty)
3. Remote host (if connected remotely)
4. Login time
5. Logout time ('still logged in' for active sessions)
6. Duration of the session
