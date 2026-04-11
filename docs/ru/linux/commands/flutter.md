# `flutter` #

- **Purpose:** Flutter is Google's SDK for crafting high-performance, high-fidelity, mobile, web, and desktop applications from a single codebase using the Dart programming language. The `flutter` command-line tool facilitates project creation, code analysis, building, testing, and deployment across multiple platforms. It manages dependencies, integrates with IDEs, and provides tools for debugging and performance profiling.
- **Usage:** `flutter [COMMAND] [OPTIONS] [ARGUMENTS...]`

## Basic Usage ##

Create a new Flutter project:

```bash
flutter create my_app

```

Run a Flutter application:

```bash
flutter run

```

Analyze your code for errors and warnings:

```bash
flutter analyze

```

Run tests in your project:

```bash
flutter test

```

Build a release version of your app:

```bash
flutter build apk

```

Check Flutter installation and dependencies:

```bash
flutter doctor

```

List all connected devices:

```bash
flutter devices

```

## Options ##

- `--device-id` — Target device id or name (prefixes allowed)
- `--release` — Build a release version of your app
- `--debug` — Build a debug version of your app
- `--profile` — Build a profile version of your app
- `--flavor` — Build a flavor-specific version of your app
- `--target` — Specify the main entry-point file
- `-d` — Specify the device to use
- `--verbose` — Noisy logging, including all shell commands executed

## Shortcuts ##

Common Flutter development workflows:

```bash
# Create and run a project #
flutter create my_app && cd my_app
flutter run

# Check the setup #
flutter doctor -v

# Get package dependencies #
flutter pub get

# Run tests #
flutter test

# Build for different platforms #
flutter build apk --release
flutter build ios --release
flutter build web
flutter build linux

# Clear build cache #
flutter clean
flutter pub cache repair

# Run with specific device #
flutter run -d device_id

# Run with custom launch options #
flutter run --flavor production --target lib/main_prod.dart

# Profile performance #
flutter run --profile

# Attach to running app #
flutter attach

```

## FAQ ##

### How Do I Create A New Flutter Project? ###

Use the create command:

```bash
flutter create project_name
cd project_name
flutter run

```

### How Do I Check My Development Environment? ###

Use the doctor command to check for issues:

```bash
flutter doctor -v

```

This will show detailed information about potentially problematic configurations.

### How Do I Add Dependencies To My Project? ###

Add dependencies to the `pubspec.yaml` file in your project, then run:

```bash
flutter pub get

```

### What Are The Different Build Modes? ###

Flutter supports three build modes:

- `--debug` - Default mode, enables debugging and hot reload (development)
- `--profile` - Enables performance profiling (testing)
- `--release` - Optimized for performance and size (production)

### How Do I Build For Different Platforms? ###

Flutter can build for multiple platforms:

```bash
flutter build apk          # Android APK
flutter build ios          # iOS
flutter build web          # Web application
flutter build linux       # Linux desktop
flutter build windows     # Windows desktop
flutter build macos       # macOS desktop

```

### How Do I Configure Flutter Settings? ###

Use the config command to set global settings:

```bash
flutter config --android-sdk /path/to/android/sdk
flutter config --enable-web
flutter config --enable-linux-desktop

```
