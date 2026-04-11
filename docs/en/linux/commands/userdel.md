# `userdel` #

- **Purpose:** The `userdel` command is used to delete user accounts and related files from Unix-like operating systems. It removes the user's entry from system files such as `/etc/passwd` and can optionally remove the user's home directory and mail spool. This command is essential for system administration tasks when decommissioning users or cleaning up test accounts.
- **Usage:** `userdel [OPTIONS] USERNAME`

## Basic Usage ##

Delete a user account:

```bash
sudo userdel username

```

Delete a user and their home directory:

```bash
sudo userdel -r username

```

Delete a user and all their files:

```bash
sudo userdel -R username

```

## Options ##

- `-r` — Remove the user's home directory and mail spool
- `-f` — Force removal of the user account even if the user is still logged in
- `-R` — Remove all files owned by the user
- `-Z` — Remove any SELinux user mapping for the user

## Shortcuts ##

Common userdel operations:

```bash
# Remove user and home directory #
sudo userdel -r username

# Force delete user (even if logged in) #
sudo userdel -f username

# Before deletion, check what files belong to the user #
find / -user username 2>/dev/null

# Remove user and specify custom cleanup #
sudo userdel -r username && sudo rm -rf /home/username

# Remove user, then cleanup any remaining files #
sudo userdel -R username

# Verify user removal #
id username  # Should return "no such user"

```

## FAQ ##

### What's Removed When Using Userdel? ###

By default, `userdel` only removes:

- User's entry from `/etc/passwd`
- User's entry from `/etc/shadow`
- User's entry from `/etc/group`
- User's entry from `/etc/gshadow`

Using `-r` also removes:

- Home directory
- Mail spool

### Does Userdel Remove All Files Belonging to a User? ###

No, `userdel` only removes the user account by default. Files owned by the user remain on the system. Use `-r` to remove the home directory and mail spool, or `-R` to remove all files owned by the user across the system.

### How Do I Verify That a User Has Been Deleted? ###

Check with the `id` command:

```bash
id username

```

If the user is deleted, it will return "no such user".

### Can I Recover a Deleted User? ###

User deletion is irreversible! Before deleting a user:

1. Backup important files from their home directory
2. Check for important files elsewhere on the system
3. Consider disabling instead of deleting: `sudo usermod -L username`

### What Happens to Files Owned by a Deleted User? ###

Files owned by a deleted user become "orphaned" and are assigned a numeric UID. These files can be found with:

```bash
find / -uid OLD_USER_UID 2>/dev/null

```

You can then decide to either delete or reassign ownership to another user.
