# `gofmt` #

- **Purpose:** The `gofmt` command is the official Go formatter, responsible for formatting Go source code in a consistent and readable way. It applies the community's formatting conventions automatically, making code style uniform across all Go projects. The command formats Go programs by parsing them into an AST (Abstract Syntax Tree) and pretty-printing the AST using Go formatting rules. This ensures consistency across the Go codebase ecosystem and eliminates debates about styling.
- **Usage:** `gofmt [OPTIONS] [PATH...]`

## Basic Usage ##

Format a single file:

```bash
gofmt file.go

```

Format and write changes back to the file:

```bash
gofmt -w file.go

```

Format an entire directory:

```bash
gofmt -w directory/

```

Format from standard input:

```bash
cat file.go | gofmt

```

Format and write all files in current directory:

```bash
gofmt -w .

```

Diff the formatted result:

```bash
gofmt -d file.go

```

Show comments in formatted output:

```bash
gofmt -comments file.go

```

## Options ##

- `-w` — Write result to (source) file instead of stdout
- `-s` — Simplify code (applies simple transformations)
- `-d` — Display diffs instead of rewriting files
- `-e` — Report all errors (not just the first 10 on different lines)
- `-c` — Limit to 80 columns (not standard gofmt behavior)
- `-r` — Apply rewrite rule of the form 'pattern -> replacement'
- `-l` — List files that would be modified by gofmt
- `--comments` — Print comments (true if -w not set)

## Shortcuts ##

Common gofmt operations:

```bash
# Format and save changes to file #
gofmt -w main.go

# Format entire project #
gofmt -w .

# Check what would be formatted without changing files #
gofmt -l .

# Format and simplify code #
gofmt -w -s .

# Show differences before applying changes #
gofmt -d .

# Format only specific file types #
find . -name "*.go" -exec gofmt -w {} \;

# Format and simplify with verification #
gofmt -w -s -l .

# Preview changes before applying #
gofmt main.go

# Format with specific rewrite rule #
gofmt -r "a[b:len(a)] -> a[b:]" -w file.go

# Format and verify no changes needed #
gofmt -l . | wc -l  # Count files that need formatting

# Format a specific package #
gofmt -w $(go list -f '{{.Dir}}' mypackage)

# Format and simplify all Go files in directory tree #
find . -name "*.go" -exec gofmt -w -s {} \;

# Diff formatting of entire directory #
gofmt -d .

# Format and check exit code (0 if no changes needed) #
diff <(gofmt file.go) file.go

# Use with stdin and stdout #
| cat original.go | gofmt | sponge formatted.go  # using sponge from moreutils |

# Format with error reporting #
gofmt -e -d .

# Format Go code while preserving some custom formatting #
gofmt -r "old_expr -> new_expr" file.go

# Format and pipe to another command #
gofmt file.go | head -20

# Format Go code with long line allowance (workaround) #
gofmt file.go | sed 's/long_line_continuation/long_line_continuation/'  # gofmt doesn't have a column option

# Combine with Go build to ensure formatting didn't break code #
gofmt -w . && go build

# Format before commit in a Git hook #
| git diff --name-only --diff-filter=ACMR | grep '\.go$' | xargs gofmt -w && git add . |

```

## FAQ ##

### What Is The Difference Between Gofmt And Go Fmt? ###

- `gofmt` - Standalone command-line tool for formatting Go code
- `go fmt` - Part of the `go` command that runs `gofmt` on packages

`go fmt` is a wrapper around `gofmt` that operates at the package level using Go's package discovery mechanism.

### How Do I Format All Files In A Project? ###

```bash
gofmt -w .
# OR using go command: #
go fmt ./...

```

### How Do I Check If Files Are Properly Formatted? ###

Use the diff flag:

```bash
gofmt -d .
# OR to list files that need formatting: #
gofmt -l .

```

If the output is empty, all files are properly formatted.

### What Does The -s Flag Do? ###

The `-s` flag applies simplifications to the code such as:

- `a[b:len(a)]` becomes `a[b:]`
- `struct{ x int }` becomes `struct{x int}`
- Other redundant constructs are simplified

### Can I Use Gofmt As Part Of My Editor Workflow? ###

Yes! Most editors and IDEs support gofmt integration:

- VS Code: Go extension
- Vim: vim-go plugin
- Emacs: go-mode
- GoLand/IntelliJ: Go plugin
- Sublime Text: GoSublime

They typically provide an option to run gofmt on save.
