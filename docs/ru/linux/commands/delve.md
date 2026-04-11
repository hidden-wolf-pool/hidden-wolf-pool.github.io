# `delve` #

- **Purpose:** Delve is a debugger for the Go programming language. It's designed to be a reliable and user-friendly debugger that provides developers with the tools they need to debug Go applications effectively. Delve focuses on providing a seamless debugging experience for Go, handling Go-specific features like goroutines, interfaces, and maps. It supports local and remote debugging, attaching to running processes, and debugging core dumps.
- **Usage:** `dlv [command] [options] [arguments]`

## Basic Usage ##

Start debugging a program:

```bash
dlv debug main.go

```

Debug with arguments:

```bash
dlv debug main.go -- arg1 arg2

```

Attach to a running process:

```bash
dlv attach 1234

```

Connect to a remote debugger:

```bash
dlv connect localhost:5678

```

Start a debug server (listen mode):

```bash
dlv debug --listen=:5678 --headless --api-version=2 main.go

```

Test a package:

```bash
dlv test

```

Execute a program directly:

```bash
dlv exec ./myprogram

```

Start debugging with build flags:

```bash
dlv debug --build-flags "-tags=integration" main.go

```

## Options ##

- `--listen` — Address for the delve server to listen on
- `--headless` — Run in headless mode (no terminal UI)
- `--accept-multiclient` — Allows multiple clients to connect
- `--api-version` — API version to use for headless mode
- `--backend` — Backend to use (default, native, lldb, rr)
- `--init` — Init file to use
- `--check-go-version` — Checks if the version of Go is supported
- `--wd` — Working directory for the debugged program
- `--build-flags` — Build flags to pass to the compiler

## Shortcuts ##

Common Delve operations:

```bash
# Start debugging #
dlv debug main.go

# Run with arguments #
dlv debug main.go -- -flag value

# Debug tests #
dlv test ./...
dlv test -v ./mypackage

# Attach to running process #
dlv attach 1234

# Listen for remote connections #
dlv debug --listen=:5678 --headless --accept-multiclient main.go

# Run with custom working directory #
dlv exec --wd=/path/to/workdir ./myprogram

# Debug a core dump #
dlv core ./myprogram /path/to/core

# Build with custom flags #
dlv debug --build-flags "-tags=debug -ldflags='-X main.version=v1.0'" main.go

# Start server and exit #
dlv debug --listen=:5678 --headless main.go

# Debug with specific backend #
dlv debug --backend=lldb main.go

# List all goroutines #
(gdb) goroutines

# Print variable #
(gdb) print variable_name

# Set breakpoint #
(gdb) break main.main

# Continue execution #
(gdb) continue

# Step through code #
(gdb) step

# List source code #
(gdb) list

# Check goroutine info #
(gdb) goroutine 2 bt

# Evaluate expressions #
(gdb) eval myStruct.Field

# Set variable value #
(gdb) set variable = newValue

# Show all breakpoints #
(gdb) breakpoints

# Run test with verbose output #
dlv test -v -debug ./mypackage

# Start with a custom config file #
dlv debug --init=/path/to/config main.go

# Debug with race detector #
dlv debug --race main.go

# Run program until exit #
(gdb) continue until main.main+100

# Examine goroutines with specific labels #
(gdb) goroutines -g

# View command history #
(gdb) history

```

## FAQ ##

### What Is Delve Used For? ###

Delve is used for:

- Debugging Go applications
- Setting breakpoints and stepping through code
- Inspecting variables and program state
- Debugging goroutines and concurrent code
- Examining core dumps
- Remote debugging of Go programs

### How Is Delve Different From Standard GDB? ###

- Delve is specifically designed for Go
- Understanding of Go runtime, data structures, and idioms
- Built-in support for goroutines and Go concurrency
- Better handling of Go interfaces and maps
- Go-specific commands and syntax

### How Do I Debug A Running Go Process? ###

Use the attach command:

```bash
dlv attach PID

```

### How Do I Debug Remotely? ###

Start delve in headless mode:

```bash
dlv debug --listen=:5678 --headless --api-version=2 main.go

```

Then connect from another machine using the Delve client API.

### What Are Common Delve Commands? ###

In the Delve debugger:

- `break` or `b` - Set breakpoint
- `continue` or `c` - Continue execution
- `step` or `s` - Single step (into)
- `next` or `n` - Next line (step over)
- `print` or `p` - Print variable value
- `locals` - Print all local variables
- `goroutines` - List all goroutines
- `stack` or `bt` - Print stack trace
- `frame N` - Select which frame in the stack to examine
