# `dart` #

- **Purpose:** The `dart` command is a command-line tool for the Dart programming language, which is used for building mobile, web, and server applications. The Dart SDK provides a virtual machine, compiler, and libraries for developing applications. The command allows developers to run Dart scripts, manage packages, and perform various development tasks within the Dart ecosystem.
- **Usage:** `dart [COMMAND] [OPTIONS] [ARGUMENTS...]`

## Basic Usage ##

Run a Dart program:

```bash
dart run main.dart

```

Create a new Dart project:

```bash
dart create my_project

```

Run a specific file directly:

```bash
dart my_script.dart

```

Get dependencies for a project:

```bash
dart pub get

```

Run tests:

```bash
dart test

```

Format Dart code:

```bash
dart format lib/

```

Analyze code for issues:

```bash
dart analyze

```

## Options ##

- `--version` — Print the version of the Dart SDK
- `--verbose` — Show additional command output
- `--enable-asserts` — Enable assert statements
- `-D` — Define environment variables (key=value)
- `--packages` — Specify a file to read package locations from
- `--snapshot` — Generate a snapshot file
- `--observe` — Start Dart Observatory for debugging

## Shortcuts ##

Common Dart development operations:

```bash
# Create a new console application #
dart create -t console-full my_app

# Create a new web application #
dart create -t web-simple my_web_app

# Get package dependencies #
dart pub get

# Upgrade dependencies #
dart pub upgrade

# Run tests in watch mode #
dart test --watch

# Run with custom environment variables #
dart -Denv=production my_script.dart

# Compile to native executable #
dart compile exe my_app.dart

# Run with observatory for debugging #
dart --observe my_script.dart

# List available commands #
dart --help
dart pub --help

```

## FAQ ##

### How Do I Install Dart Packages? ###

Add dependencies to your `pubspec.YAML` file, then run:

```bash
dart pub get

```

### How Do I Run Dart Programs? ###

You can run them directly:

```bash
dart script.dart

```

Or using the run command:

```bash
dart run bin/my_app.dart

```

### What Is The Difference Between Dart Run And Dart Pub Run? ###

- `dart run` - Runs Dart applications using the standard Dart execution
- `dart pub run` - Runs executables from packages in your pubspec.YAML dependencies

### How Do I Build Dart Applications For Production? ###

Use the compile command:

```bash
dart compile exe my_app.dart  # Compile to native executable
dart compile js web/main.dart  # Compile to JavaScript for web

```

### How Do I Format My Dart Code? ###

Use the format command:

```bash
dart format lib/  # Format all files in lib directory
dart format .     # Format all Dart files in current directory

```

You can also use `dart format --set-exit-if-changed .` to check if formatting is needed.
