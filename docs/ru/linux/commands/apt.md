# `apt` #

- **Purpose:** APT (Advanced Package Tool) is the command-line tool for handling packages in Debian and Debian-based distributions like Ubuntu. It provides a more user-friendly interface than dpkg for managing packages, including installing, removing, updating, and searching for packages from configured repositories. APT handles dependencies automatically, making package management easier and more systematic.
- **Usage:** `apt [OPTIONS] [COMMAND] [PACKAGE...]`

## Basic Usage ##

Update package lists:

```bash
sudo apt update
```

Upgrade all installed packages:

```bash
sudo apt upgrade
```

Install a package:

```bash
sudo apt install <PACKAGE NAME>
```

Remove a package:

```bash
sudo apt remove <PACKAGE NAME>
```

Remove a package with its configuration and dependencies:

```bash
sudo apt purge <PACKAGE NAME>
```

Search for packages:

```bash
apt search keyword
```

Show package information:

```bash
apt show <PACKAGE NAME>
```

Autoremove unused packages:

```bash
sudo apt autoremove

```

Download package source:

```bash
apt source <PACKAGE NAME>

```

## Options ##

- `-y` — Automatic yes to prompts
- `-s` — Simulate operations without making changes (dry-run)
- `-qq` — Minimal output
- `-f` — Attempt to fix broken packages
- `--fix-broken` — Same as -f
- `--dry-run` — Show what would be done without doing it
- `-t` — Target release for package
- `--no-install-recommends` — Don't install recommended packages
- `-d` — Download only (don't install)

## Shortcuts ##

Common apt operations:

```bash
# Update package lists #
sudo apt update

# Upgrade all packages #
sudo apt upgrade

# Upgrade with new version packages (handles removals/additions) #
sudo apt full-upgrade
sudo apt dist-upgrade  # Alternative command

# Install a package #
sudo apt install <PACKAGE NAME>

# Install multiple packages #
sudo apt install pkg1 pkg2 pkg3

# Install without recommended packages #
sudo apt install --no-install-recommends <PACKAGE NAME>

# Remove a package (keeps dependencies) #
sudo apt remove <PACKAGE NAME>

# Remove a package and its dependencies #
sudo apt purge <PACKAGE NAME>

# Search for packages #
apt search term

# Show package details #
apt show <PACKAGE NAME>

# List installed packages #
apt list --installed

# List upgradable packages #
apt list --upgradable

# Check for broken dependencies #
sudo apt check

# Fix broken dependencies #
sudo apt --fix-broken install

# Clean package cache #
sudo apt autoclean

# Remove packages that are no longer needed #
sudo apt autoremove

# Download a package without installing it #
apt download <PACKAGE NAME>

# Show package history #
cat /var/log/apt/history.log

# Show available updates #
apt list --upgradable

# Hold a package at current version #
sudo apt-mark hold <PACKAGE NAME>

# Remove hold on a package #
sudo apt-mark unhold <PACKAGE NAME>

# Show held packages #
apt-mark showhold

# Clean up downloaded packages #
sudo apt autoclean

# Update and upgrade in one command #
sudo apt update && sudo apt upgrade

# Remove and autoremove in one command #
sudo apt remove <PACKAGE NAME> && sudo apt autoremove

# Search in both names and descriptions #
apt search --names-only=false "search_term"

# Show package policy (versions available) #
apt policy <PACKAGE NAME>

# Install from a .deb file #
sudo apt install ./package.deb

# Show package changelog #
apt changelog <PACKAGE NAME>

# Get source code of a package #
apt source <PACKAGE NAME>

# See package content #
dpkg -c <PACKAGE NAME>.deb

# Show dependencies of a package #
apt depends <PACKAGE NAME>

# Show reverse dependencies #
apt rdepends <PACKAGE NAME>

# Reinstall a package #
sudo apt reinstall <PACKAGE NAME>

# Download specific version #
apt download <PACKAGE NAME>=version

# Install specific version #
sudo apt install <PACKAGE NAME>=version

# See all available versions #
apt policy <PACKAGE NAME>

# Downgrade a package to specific version #
sudo apt install <PACKAGE NAME>=version

# Search for a file in packages #
apt-file search filename

# Update file database #
sudo apt-file update

# Install build dependencies for a source package #
sudo apt build-dep <PACKAGE NAME>

# See package's maintainer #
apt show <PACKAGE NAME> | grep Maintainer

# Get source package and build dependencies #
sudo apt build-dep -s <PACKAGE NAME>

# Check security updates #
apt list --upgradable | grep -i security

# Show statistics about installed packages #
| dpkg -l | grep ^ii | wc -l |

# Search in full descriptions #
apt-cache search --full search_term

# Update repositories only at specific time (cron friendly) #
sudo apt update -qq

# Get list of upgradeable packages #
apt list --upgradable --format=json

# Create local package cache #
apt cache search --download-only <PACKAGE NAME>

# Show package changelog before installing #
apt changelog <PACKAGE NAME> | head -20

# Show package download size #
apt show <PACKAGE NAME> | grep Size

# Install from specific release/target #
sudo apt -t release_name install <PACKAGE NAME>

# Update only specific repo #
sudo apt update --target release_name

# Force yes to all prompts during installation #
sudo apt -y install <PACKAGE NAME>

# Get package content without installing #
apt download <PACKAGE NAME> && dpkg-deb --contents <PACKAGE NAME>*.deb

# Show repository information of a package #
apt policy <PACKAGE NAME>

# Clean package cache more aggressively #
sudo apt autoclean && sudo apt clean

# See what would be removed by autoremove #
apt list --upgradable --manual-installed

```

## FAQ ##

### What Is The Difference Between Apt And Apt-get? ###

- `apt` - Newer command, designed for end users, combines commands from apt-get and apt-cache
- `apt-get` - More traditional, lower-level tool, better for scripts

### How Do I Update My System? ###

```bash
sudo apt update          # Update package lists
sudo apt upgrade         # Upgrade installed packages
# OR for major changes: #
sudo apt full-upgrade    # Handle new dependencies/removed packages

```

### How Do I Reinstall A Package? ###

```bash
sudo apt remove <PACKAGE NAME>
sudo apt install <PACKAGE NAME>
# OR #
sudo apt reinstall <PACKAGE NAME>

```

### How Do I Hold A Package To Prevent Updates? ###

```bash
sudo apt-mark hold <PACKAGE NAME>    # Hold a package
sudo apt-mark unhold <PACKAGE NAME>  # Unhold a package
apt-mark showhold                  # List held packages

```

### What Does Apt Autoremove Do? ###

The `apt autoremove` command removes packages that were automatically installed to satisfy dependencies for other packages and are no longer needed. This helps clean up the system after package removals.
