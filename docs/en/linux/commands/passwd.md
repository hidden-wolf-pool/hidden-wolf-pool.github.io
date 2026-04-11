# `passwd` #

- **Purpose:** The `passwd` command is used to change user account passwords in Unix-like operating systems. It allows users to update their own passwords and, with appropriate privileges, allows system administrators to change passwords for other users. The command can also enforce password policies, lock/unlock accounts, and manage password aging properties.
- **Usage:** `passwd [OPTIONS] [USERNAME]`

## Basic Usage ##

Change your own password:

```bash
passwd

```

Change password for another user (requires root privileges):

```bash
sudo passwd username

```

Lock a user account:

```bash
sudo passwd -l username

```

Unlock a user account:

```bash
sudo passwd -u username

```

Expire a user's password immediately (forcing change on next login):

```bash
sudo passwd -e username

```

Check password status for a user:

```bash
passwd -S username

```

Force password change on next login:

```bash
sudo passwd -e username

```

## Options ##

- `-l` — Lock the user account (disable password)
- `-u` — Unlock the user account (enable password)
- `-d` — Delete password (makes account passwordless)
- `-e` — Expire password immediately (forces change on next login)
- `-S` — Display password status information
- `-n` — Set minimum number of days before password change is allowed
- `-x` — Set maximum number of days for which password is valid
- `-w` — Set warning days before password expires
- `-i` — Set number of days after password expiry until account is disabled

## Shortcuts ##

Advanced passwd operations:

```bash
# Change password with specific aging options #
sudo passwd -n 7 -x 90 -w 7 username

# Lock multiple accounts #
sudo passwd -l user1 user2 user3

# Check status of multiple users #
for user in user1 user2 user3; do passwd -S $user; done

# Create account with immediate password expiry #
sudo useradd -m newuser
sudo passwd -e newuser

# Use stdin to provide password (use carefully in scripts) #
echo -e "newpassword\nnewpassword" | sudo passwd username

```

## FAQ ##

### How Do I Create a Strong Password? ###

A strong password should:

- Be at least 8-12 characters long
- Include uppercase and lowercase letters
- Contain numbers and special characters
- Avoid dictionary words or personal information
- Be unique (not reused across systems)

### Can I Change Another User's Password? ###

Only users with root privileges (administrators) can change another user's password:

```bash
sudo passwd other_user

```

### What Does Password Status Mean? ###

When you run `passwd -S username`, the output shows:

- Username
- Password status (P=usable, L=locked, NP=no password)
- Date of last change
- Minimum age
- Maximum age
- Warning period
- Inactivity period
- Expiration date

### How Do I Force a User to Change Their Password? ###

Use the expire option to force a password change on next login:

```bash
sudo passwd -e username

```

### How Do I Unlock an Account That's Been Locked? ###

Use the unlock option:

```bash
sudo passwd -u username

```

This will restore access to the user account by unlocking the password.
