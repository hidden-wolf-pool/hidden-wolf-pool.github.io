# `useradd` #

- **Purpose:** The `useradd` command is used to create new user accounts in Unix-like operating systems. It creates a new user entry in the system's user database, assigns a UID, creates a home directory (optionally), and sets up default configurations based on system defaults or specified parameters. This command is typically used by system administrators for user management.
- **Usage:** `useradd [OPTIONS] USERNAME`

## Basic Usage ##

Create a new user with default settings:

```bash
sudo useradd newuser

```

Create a user with a home directory:

```bash
sudo useradd -m newuser

```

Create a user with a specific user ID:

```bash
sudo useradd -u 1500 newuser

```

Create a user with a specific group ID:

```bash
sudo useradd -g developers -m newuser

```

Create a user with a custom shell:

```bash
sudo useradd -s /bin/zsh -m newuser

```

Create a user with an expiry date:

```bash
sudo useradd -e 2024-12-31 -m newuser

```

Create a user with a comment/full name:

```bash
sudo useradd -c "John Doe" -m newuser

```

## Options ##

- `-m` — Create the user's home directory if it doesn't exist
- `-d` — Specify the home directory path
- `-s` — Set the user's login shell
- `-g` — Set the primary group for the user
- `-G` — Set additional (secondary) groups for the user
- `-u` — Specify the numeric user ID
- `-p` — Set the encrypted password (not recommended, use passwd instead)
- `-c` — Add comment (usually user's full name)
- `-e` — Set account expiration date (YYYY-MM-DD format)
- `-f` — Set password expiration (after account is disabled)

## Shortcuts ##

Common useradd operations:

```bash
# Create user with home directory, default shell, and add to supplementary groups #
sudo useradd -m -c "Jane Smith" -G wheel,audio,video newuser

# Create user with specific UID and primary group #
sudo useradd -m -u 1234 -g 1000 -s /bin/bash username

# Create system user (no home directory, low UID) #
sudo useradd -r -s /sbin/nologin serviceaccount

# Create user with skeleton files copied to home directory #
sudo useradd -m -k /etc/skel -s /bin/bash newuser

# Batch create users from a file (with proper scripting) #
while read username; do
  sudo useradd -m "$username"
done < userlist.txt

```

## FAQ ##

### What's the Difference Between Useradd and Adduser? ###

- `useradd` - Low-level command, available on all Linux systems, more explicit control
- `adduser` - Higher-level command (on Debian/Ubuntu), more user-friendly, performs more setup automatically
- Both create users, but `adduser` is essentially a Perl script that uses `useradd` internally

### How Do I Set a Password for a Newly Created User? ###

Use the `passwd` command after creating the user:

```bash
sudo useradd -m newuser
sudo passwd newuser

```

### What Happens If I Don't Use the -m Flag? ###

Without `-m`, the user will be created without a home directory. The user can still log in, but they won't have a personal directory for storing files. You can create the home directory later manually or by using `mkhomedir_helper`.

### How Do I Add a User to Multiple Groups? ###

Use the `-G` option with a comma-separated list (no spaces):

```bash
sudo useradd -m -G audio,video,docker newuser

```

### How Do I Create a User Without Shell Access? ###

Set the shell to `/sbin/nologin` or `/bin/false`:

```bash
sudo useradd -s /sbin/nologin service_account

```

This creates a user account that can be used for services but doesn't allow interactive login.
