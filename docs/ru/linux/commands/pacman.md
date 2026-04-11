# `pacman` #

- **Purpose:** Pacman (Package Manager) is the default package manager for Arch Linux and its derivatives.
- **Usage:** `pacman [OPTIONS] [COMMAND] [PACKAGE...]`

## Basic Usage ##

Synchronize package databases:

```bash
sudo pacman -Sy
```

Upgrade all installed packages:

```bash
sudo pacman -Su
```

Synchronize and upgrade all packages:

```bash
sudo pacman -Syu
```

Install a package:

```bash
sudo pacman -S <PACKAGE NAME>
```

Install package without confirmation prompt:

```bash
sudo pacman --noconfirm -S <PACKAGE NAME>
```

Install only if not already installed:

```bash
sudo pacman -S --needed <PACKAGE NAME>
```

Remove a package:

```bash
sudo pacman -R <PACKAGE NAME>
```

Remove a package with its dependencies:

```bash
sudo pacman -Rs <PACKAGE NAME>
```

Search for packages:

```bash
sudo pacman -Ss keyword
```

Show package information from repositories:

```bash
sudo pacman -Si <PACKAGE NAME>
```

Clean package cache:

```bash
sudo pacman -Sc
```

Remove a package, dependencies, and config files:

```bash
sudo pacman -Rns <PACKAGE NAME>
```

Search installed packages:

```bash
sudo pacman -Qs <SEARCH TERM>
```

Show information about installed package:

```bash
pacman -Qi <PACKAGE NAME>
```

List files owned by a package:

```bash
pacman -Ql <PACKAGE NAME>
```

List all installed packages:

```bash
sudo pacman -Q
```

List explicitly installed packages:

```bash
sudo pacman -Qe
```

List orphaned packages:

```bash
sudo pacman -Qdt
```

Remove orphaned packages:

```bash
sudo pacman -Rns $(pacman -Qtdq)
```

Check which package owns a file:

```bash
sudo pacman -Qo /path/to/file
```

Search for file in packages:

```bash
sudo pacman -F filename
```

Update file database:

```bash
sudo pacman -Fy
```

Clean old package versions from cache:

```bash
sudo pacman -Sc
```

Clean all packages from cache:

```bash
sudo pacman -Scc
```

Check for broken packages:

```bash
pacman -Qk
```

Downgrade a package:

```bash
sudo pacman -U /var/cache/pacman/pkg/package-old_version.pkg.tar.zst
```

Install from local package file:

```bash
sudo pacman -U package.pkg.tar.zst
```

Refresh package databases and force download:

```bash
sudo pacman -Syy
```

Show packages that will be upgraded:

```bash
pacman -Qu
```

Show foreign packages (not from official repos):

```bash
pacman -Qm
```

Show native packages (from official repos):

```bash
pacman -Qn
```

Show packages with missing dependencies:

```bash
pacman -Qk
```

List packages in group:

```bash
pacman -Sg group_name
```

Show all package groups:

```bash
pacman -Sgg
```

Install packages from a group:

```bash
sudo pacman -S group_name
```

Show changelog for installed package:

```bash
pacman -Qc <PACKAGE NAME>
```

Show backup files modified since installation:

```bash
pacman -Qk
```

Verify all installed packages:

```bash
pacman -Qkk
```

Show explicit dependencies of installed package:

```bash
pacman -Qi <PACKAGE NAME> | grep Dependencies
```

Show optional dependencies:

```bash
pacman -Qi <PACKAGE NAME> | grep Optional
```

Show install reason (explicit or dependency):

```bash
pacman -Qi <PACKAGE NAME> | grep "Install Reason"
```

Mark package as explicitly installed:

```bash
sudo pacman -D --asexplicit <PACKAGE NAME>
```

Mark package as dependency:

```bash
sudo pacman -D --asdeps <PACKAGE NAME>
```

Show packages installed as dependencies:

```bash
pacman -Q | grep -v "$(pacman -Qe | cut -d' ' -f1)"
```

Find packages containing specific file:

```bash
pacman -Fy && pacman -F filename
```

Show package download size:

```bash
pacman -Si <PACKAGE NAME> | grep "Download Size"
```

Show installed size of package:

```bash
pacman -Qi <PACKAGE NAME> | grep "Installed Size"
```

List packages sorted by size:

```bash
pacman -Qlq | sort -nr | head -20
```

Show packages that depend on a package:

```bash
pacman -Qq | xargs pacman -Qi | grep -B1 "<PACKAGE NAME>"
```

Reinstall a package:

```bash
sudo pacman -S --overwrite '*' <PACKAGE NAME>
```

Force reinstall and overwrite files:

```bash
sudo pacman -U --overwrite '*' package.pkg.tar.zst
```

Show repository of a package:

```bash
pacman -Si <PACKAGE NAME> | grep Repository
```

Check for packages with no required dependencies:

```bash
pacman -Qdt
```

Show packages that were explicitly installed:

```bash
pacman -Qte
```

Show packages that were installed as dependencies:

```bash
pacman -Qtd
```

## Options ##

- `-S` — Synchronize packages (install from repositories).
- `-R` — Remove packages.
- `-Q` — Query installed packages.
- `-U` — Upgrade or add a package from file.
- `-F` — Query file databases.
- `-y` — Refresh package databases.
- `-u` — Upgrade packages.
- `-s` — Search packages.
- `-i` — Show package information.
- `-l` — List package contents.
- `-o` — Query which package owns a file.
- `-c` — Clean package cache.
- `-d` — Remove package dependencies.
- `-n` — Remove package configuration files.
- `-s` — Remove unused dependencies.
- `-v` — Verbose output.
- `-q` — Quiet output.
- `--noconfirm` — Skip confirmation prompts.
- `--needed` — Don't reinstall up-to-date packages.
- `--overwrite` — Overwrite conflicting files.

## Links ##

- [Arch Wiki: Pacman](https://wiki.archlinux.org/title/Pacman)

## FAQ ##

### What Is The Difference Between Pacman And Pacman2? ###

- `pacman` - The official package manager for Arch Linux
- `pacman2` - Not a standard tool; users may refer to AUR helpers like `pamac` or `yay`

### How Do I Update My System? ###

Sync databases and upgrade all packages:

```bash
sudo pacman -Syu
```

### How Do I Reinstall A Package? ###

Run:

```bash
sudo pacman -S <PACKAGE NAME>
```

Or with overwrite if there are conflicts:

```bash
sudo pacman -S --overwrite '*' <PACKAGE NAME>
```

### How Do I Clean The Package Cache? ###

Remove old versions of packages:

```bash
sudo pacman -Sc
```

Remove all packages from cache (more aggressive):

```bash
sudo pacman -Scc
```

### What Does `pacman -Rs` Do? ###

The `pacman -Rs` command removes a package along with its dependencies that are not required by other packages. This helps keep the system clean after package removals.

### How Do I Find Which Package Owns A File? ###

For installed files:

```bash
pacman -Qo <PATH TO FILE>
```

For files in repositories (requires `sudo pacman -Fy` first):

```bash
pacman -F filename
```

### How Do I Use AUR With Pacman? ###

Pacman doesn't directly support AUR. Use AUR helpers like:

- `yay` - Yet Another Yogurt
- `paru` - Modern AUR helper
- `pamac` - Package manager with GUI support

Or manually build from AUR using `makepkg`.
