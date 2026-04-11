# `chage` #

- **Purpose:** The `chage` command is used to view, set, and modify password and account expiration information for user accounts in Linux systems. It allows administrators to enforce security policies by setting password aging parameters, account expiration dates, and notification periods. This command is essential for maintaining security compliance by enforcing password rotation and account lifecycle management policies.
- **Usage:** `chage [OPTIONS] [USERNAME]`

## Basic Usage ##

Show password aging information for a user:

```bash
chage -l username

```

Set maximum password age (days a password is valid):

```bash
sudo chage -M 90 username

```

Set minimum password age (days before user can change password):

```bash
sudo chage -m 7 username

```

Set password expiration date:

```bash
sudo chage -E 2024-12-31 username

```

Force immediate password change:

```bash
sudo chage -d 0 username

```

Set warning days before password expires:

```bash
sudo chage -W 14 username

```

Set inactivity period after password expiration:

```bash
sudo chage -I 30 username

```

## Options ##

- `-l` — Show current password aging information
- `-d` — Set date of last password change
- `-E` — Set account expiration date
- `-I` — Set inactivity period after password expiration
- `-m` — Set minimum number of days before password change
- `-M` — Set maximum number of days password is valid
- `-W` — Set warning days before password expires
- `-i` — Interactive mode to set all values
- `-f` — Force changes without checking format

## Shortcuts ##

Common chage operations:

```bash
# Show current password status #
chage -l username

# Set password policy: max 60 days, min 7 days, warning 14 days before #
sudo chage -M 60 -m 7 -W 14 username

# Set account to expire on specific date #
sudo chage -E 2025-01-01 username

# Force user to change password on next login #
sudo chage -d 0 username

# Set 30-day inactivity period (account disabled after password expires) #
sudo chage -I 30 username

# Interactive password policy setup #
sudo chage -i username

# Set password to never expire #
sudo chage -M 99999 username

# Set account to never expire #
sudo chage -E -1 username

# Set password to expire in 1 year #
sudo chage -E $(date -d "+1 year" +%Y-%m-%d) username

# Find users with expired passwords #
sudo cat /etc/shadow | awk -F: '($5 < '$(date +%s)') && ($5 != 0) {print $1}'

# Set password to expire in 180 days #
sudo chage -M 180 username

# Set warning period to 7 days before expiration #
sudo chage -W 7 username

# Set minimum password age to 1 day #
sudo chage -m 1 username

# Set account to expire in 90 days #
future_date=$(date -d "+90 days" +%Y-%m-%d)
sudo chage -E $future_date username

# Create temporary account (expires in 30 days) #
temp_user="temporary_user"
expire_date=$(date -d "+30 days" +%Y-%m-%d)
sudo chage -E $expire_date $temp_user

# Reset last password change date to current date #
sudo chage -d $(date +%Y-%m-%d) username

# Check if password has expired for a user #
| sudo chage -l username | grep -E "Password expires | Account expires" |

# Set grace period after password expiration #
sudo chage -I 10 username  # 10 days before account locks

# Set comprehensive password policy #
sudo chage -M 90 -m 1 -W 14 -I 7 -E 2024-12-31 username

# Bulk update password policy for multiple users #
users="user1 user2 user3"
for user in $users; do
  sudo chage -M 60 -m 2 -W 7 $user
done

# Set password to expire in 30 days from now #
exp_days=30
exp_date=$(date -d "+$exp_days days" +%Y-%m-%d)
last_change=$(date +%Y-%m-%d)
max_age=$exp_days
sudo chage -d $last_change -M $max_age username

# Create password policy for contractors (shorter cycle) #
sudo chage -M 30 -W 5 -I 3 username

# Check when account will expire #
sudo chage -l username | grep "Account expires"

# Set password aging to default values #
sudo chage -M 99999 -m 0 -W 7 username

# Warn users before account expiration #
sudo chage -E $(date -d "+6 months" +%Y-%m-%d) username

# Set password policy for privileged accounts (shorter cycle) #
sudo chage -M 30 -m 0 -W 5 username

# Find accounts expiring within 30 days #
awk -F: '($8 != "" && $8 < ('$(date +%s)' + 30*24*60*60)) {print $1}' /etc/shadow

# Set up password policy for PCI compliance (max 90 days) #
sudo chage -M 90 -m 1 -W 14 username

# Reset password aging for an account #
sudo chage -M 99999 -E -1 username

# Create script to check account expiration #
| # chage -l username | grep -E "expiry | expire" # |

# Set different policies based on user roles #
# Admin accounts #
sudo chage -M 30 -W 5 -I 7 username
# Regular users #
sudo chage -M 180 -W 14 -I 30 username

# Create temporary access (expires at end of month) #
end_month=$(date -d "$(date -d +1month -d '1 day ago')" +%Y-%m-%d)
sudo chage -E $end_month username

# Set up password aging for security best practices #
sudo chage -M 60 -m 1 -W 10 -I 14 -E -1 username

# Check all users with password aging settings #
cat /etc/shadow | awk -F: '($5 > 0) {print $1 " expires in " $5 " days"}'

# Set password requirement to be changed every month #
sudo chage -M 30 -W 5 username

# Create policy for shared accounts (more restrictive) #
sudo chage -M 14 -m 0 -W 3 -I 7 username

# Set up quarterly password rotation #
sudo chage -M 90 -W 7 -I 14 username

# Check accounts with no password expiration #
sudo chage -l username | grep "never"

# Set up emergency access account policies #
sudo chage -M 1 -m 0 -W 0 -I 1 username

# Create custom policy based on compliance requirements #
sudo chage -M 45 -m 2 -W 10 -I 5 username

# Validate password policy settings #
| sudo chage -l username | grep -E "(Max | Min | Warning | Inactive)" |

# Set up seasonal worker account expiration #
start_date=$(date +%Y-06-01)  # June 1st
end_date=$(date +%Y-08-31)   # August 31st
sudo chage -d $start_date -E $end_date username

# Create password policy for contractors (shorter warning) #
sudo chage -M 60 -W 3 -I 5 username

```

## FAQ ##

### How Do I Check Password Aging Settings For A User? ###

Use the `-l` option:

```bash
chage -l username

```

This displays:

- Last password change date
- Password expiration settings
- Account expiration settings
- Warning period information

### How Do I Force A User To Change Their Password On Next Login? ###

Set the last password change date to epoch (0):

```bash
sudo chage -d 0 username

```

This makes the password effectively expired, forcing the user to change it on next login.

### What Does Each Number In The Chage Output Mean? ###

In the output of `chage -l`:

- Last password change: Date when password was last set
- Password expires: Date when password expires
- Account expires: Date when account expires
- Minimum: Days before password can be changed
- Maximum: Days after which password must be changed
- Warning: Days before expiration to warn user

### How Do I Set A Password To Never Expire? ###

Set the maximum days to 99999:

```bash
sudo chage -M 99999 username

```

Alternatively, use -1 on some systems:

```bash
sudo chage -M -1 username

```

### What Is The Difference Between Account Expiration And Password Expiration? ###

- Password expiration: Forces user to change their password after a certain period
- Account expiration: Disables the account after a specific date, preventing login regardless of password validity

Both are important for security management but serve different purposes.
