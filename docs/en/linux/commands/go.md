# `go` #

- **Purpose:** The `go` command is the primary command-line tool for managing Go (Golang) source code and packages. It provides a complete set of tools for initializing projects, downloading dependencies, building executables, running tests, formatting code, and managing the entire Go development lifecycle. The command handles module management, compilation, installation, and provides various utilities for Go development workflows.
- **Usage:** `go [command] [arguments]`

## Basic Usage ##

Initialize a new Go module:

```bash
go mod init module_name

```

Build a Go program:

```bash
go build
go build main.go

```

Run a Go program directly:

```bash
go run main.go

```

Install a package:

```bash
go install package_name@version

```

Download dependencies:

```bash
go mod download

```

Run tests:

```bash
go test
go test ./...

```

Get a package:

```bash
go get package_name

```

Format Go code:

```bash
go fmt ./...

```

## Options ##

- `-v` — Verbose output showing packages being processed
- `-x` — Show commands being run
- `-race` — Enable race detector
- `-mod` — Module download mode (readonly, vendor, or mod)
- `-o` — Output filename when building
- `-ldflags` — Arguments to linker
- `--help` — Show command help

## Shortcuts ##

Common Go operations:

```bash
# Initialize new module #
go mod init github.com/user/project

# Download all dependencies #
go mod tidy

# Run tests with verbose output #
go test -v

# Run benchmarks #
go test -bench=.

# Show test coverage #
go test -cover

# Build with specific output name #
go build -o myapp

# Install current module #
go install

# Run tests in specific package #
go test ./subpackage/...

# Get specific version of package #
go get package@v1.2.3

# View module dependencies #
go list -m all

# View installed packages #
go list -m -f '{{.Dir}}' all

# Clean build cache #
go clean -cache

# Clean module cache #
go clean -modcache

# Update all dependencies #
go get -u

# Vendor all dependencies #
go mod vendor

# Verify module dependencies #
go mod verify

# Show package documentation #
go doc package

# Run go vet static analysis #
go vet

# Run go generate #
go generate

# Show package documentation as server #
godoc -http=:6060

# Build for specific OS/Architecture #
GOOS=linux GOARCH=amd64 go build

# Cross compile for Windows #
GOOS=windows GOARCH=amd64 go build -o app.exe

# Build with debug symbols stripped #
go build -ldflags="-s -w"

```

## FAQ ##

### How Do I Initialize A New Go Project? ###

Use the module initialization command:

```bash
mkdir myproject
cd myproject
go mod init github.com/user/myproject

```

### How Do I Add Dependencies To My Project? ###

Go automatically tracks imported packages, but you can explicitly get them:

```bash
go get github.com/gin-gonic/gin
go mod tidy  # Cleans up and adds missing dependencies

```

### How Do I Run Tests In A Go Project? ###

To run all tests in the current directory:

```bash
go test

```

To run tests in all subdirectories:

```bash
go test ./...

```

### How Do I Build For Different Platforms? ###

Use GOOS and GOARCH environment variables:

```bash
# For Windows #
GOOS=windows GOARCH=amd64 go build

# For Mac ARM64 #
GOOS=darwin GOARCH=arm64 go build

# For Linux 32-bit #
GOOS=linux GOARCH=386 go build

```

### What Is The Difference Between Go Get And Go Install? ###

- `go get` - Downloads and installs dependencies, updates go.mod
- `go install` - Builds and installs executables to $GOBIN
- `go build` - Compiles the program but doesn't install it
