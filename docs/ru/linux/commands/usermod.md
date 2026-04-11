# `usermod` #

- **Purpose:** The `usermod` command is used to modify the properties of existing user accounts in Unix-like operating systems. It allows system administrators to change user attributes such as login name, home directory, default shell, group memberships, and other account parameters without deleting and recreating the user account.
- **Usage:** `usermod [OPTIONS] USERNAME`

## Basic Usage ##

Change a user's login name:

```bash
sudo usermod -l newname oldname

```

Change a user's home directory:

```bash
sudo usermod -d /home/newdirectory username

```

Change a user's default shell:

```bash
sudo usermod -s /bin/zsh username

```

Add a user to additional groups:

```bash
sudo usermod -a -G group1,group2 username

```

Change a user's primary group:

```bash
sudo usermod -g primarygroup username

```

Lock a user account:

```bash
sudo usermod -L username

```

Unlock a user account:

```bash
sudo usermod -U username

```

Set account expiry date:

```bash
sudo usermod -e 2024-12-31 username

```

## Options ##

- `-l` — Change the login name of the user
- `-d` — Change the home directory
- `-m` — Move the contents of the user's home directory
- `-s` — Change the user's login shell
- `-g` — Change the user's primary group
- `-G` — Change the user's secondary groups
- `-a` — Append the user to the supplementary groups
- `-L` — Lock the user account
- `-U` — Unlock the user account
- `-e` — Set account expiration date
- `-c` — Change the user's comment or full name

## Shortcuts ##

Common usermod operations:

```bash
# Change username and home directory #
sudo usermod -l newuser -d /home/newuser -m olduser

# Add user to additional groups without removing from existing groups #
sudo usermod -a -G docker,sudo username

# Change both primary and secondary groups #
sudo usermod -g newprimary -G group1,group2 username

# Change user ID #
sudo usermod -u 1500 username

# Change full name/comment #
sudo usermod -c "New Full Name" username

# Disable password but keep account active #
sudo usermod -p '*' username

```

## FAQ ##

### How Do I Move a User's Home Directory? ###

Use the `-d` option with `-m` to move the existing home directory:

```bash
sudo usermod -d /new/homedir -m username

```

The `-m` flag moves the contents from the old home directory to the new location.

### What's the Difference Between -G and -a Options? ###

- `-G` alone replaces all secondary groups with the specified ones
- `-a -G` appends the user to the specified groups while preserving existing group memberships

### How Do I Lock and Unlock User Accounts? ###

Lock an account:

```bash
sudo usermod -L username

```

Unlock an account:

```bash
sudo usermod -U username

```

### Can I Change the User ID (UID) With Usermod? ###

Yes, use the `-u` option:

```bash
sudo usermod -u 1500 username

```

Be careful as this affects file ownership. You may need to update file permissions afterward.

### How Do I Verify Changes Made With Usermod? ###

Check user information with:

```bash
id username
cat /etc/passwd | grep username
groups username

```
