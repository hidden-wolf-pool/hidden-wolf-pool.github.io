# `fvm` #

- **Purpose:** FVM (Flutter Version Management) is a command-line tool that allows developers to manage multiple Flutter SDK versions on a single machine. It enables teams to maintain consistent Flutter SDK versions across different projects, ensuring reproducible builds and avoiding compatibility issues. FVM allows developers to install, switch between, and pin specific Flutter SDK versions for individual projects without affecting the global Flutter installation.
- **Usage:** `fvm [COMMAND] [OPTIONS] [ARGUMENTS...]`

## Basic Usage ##

List installed Flutter SDK versions:

```bash
fvm list

```

Install a specific Flutter SDK version:

```bash
fvm install 3.10.0

```

Use a specific Flutter SDK version globally:

```bash
fvm use 3.10.0

```

Pin a Flutter SDK version to a specific project:

```bash
cd my_flutter_project
fvm use 3.10.0

```

Run Flutter commands with FVM:

```bash
fvm flutter run

```

Remove an installed Flutter SDK version:

```bash
fvm remove 2.10.0

```

Show current Flutter SDK version:

```bash
fvm current

```

## Options ##

- `--global` — Use the version globally instead of locally in the project
- `--skip-setup` — Skip SDK setup after installation
- `--version` — Specify the exact version to install/use
- `-f, --force` — Force the operation even if it may cause conflicts
- `--verbose` — Show detailed output for debugging
- `--cache-path` — Specify custom cache directory for Flutter SDKs

## Shortcuts ##

Common FVM operations:

```bash
# Install latest stable Flutter version #
fvm install stable

# Install latest beta Flutter version #
fvm install beta

# Use Flutter version in current project #
fvm use 3.10.0

# Run Flutter commands via FVM #
fvm flutter doctor
fvm flutter pub get
fvm flutter run

# Export Flutter environment variables #
fvm export

# Create a new Flutter project with specific version #
fvm use 3.10.0
fvm flutter create my_project

# Switch between versions #
fvm use stable
fvm use beta

# Clean FVM cache #
fvm cleanup

```

## FAQ ##

### How Do I Set A Flutter Version For A Specific Project? ###

Navigate to your project directory and run:

```bash
fvm use 3.10.0

```

This creates a `.fvmrc` file in your project that pins the specific Flutter version.

### How Do I Run Flutter Commands With My Fvm Version? ###

You can run Flutter commands through FVM:

```bash
fvm flutter doctor
fvm flutter run
fvm flutter pub get

```

Or activate FVM in your shell:

```bash
fvm use 3.10.0 --activate

```

### What Is The Difference Between Global And Local Usage? ###

- `fvm use version` - Sets the Flutter version locally for the current project
- `fvm use version --global` - Sets the Flutter version globally for all projects

### How Do I Switch Back To The System Flutter? ###

To use the system-installed Flutter SDK:

```bash
fvm use none

```

Or uninstall FVM from your PATH.

### How Do I Share The Flutter Version With My Team? ###

FVM creates a `.fvmrc` file in your project directory that specifies the Flutter version. Commit this file to your version control system, and team members can run `fvm use` to automatically switch to the correct Flutter version.
