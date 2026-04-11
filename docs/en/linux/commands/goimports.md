# `goimports` #

- **Purpose:** The `goimports` command is a Go tool that updates your Go import lines, adding missing imports and removing unreferenced ones. It automatically manages import declarations in Go source files, ensuring that all needed packages are imported and that unused imports are removed. Goimports combines the functionality of `gofmt` with automatic import management, making it a useful tool for maintaining clean import declarations in Go projects. It also reformats code like gofmt does.
- **Usage:** `goimports [OPTIONS] [PATH...]`

## Basic Usage ##

Format a file and update imports:

```bash
goimports file.go

```

Write changes back to the file:

```bash
goimports -w file.go

```

Update imports for an entire directory:

```bash
goimports -w directory/

```

List files that would be changed:

```bash
goimports -l .

```

Show diffs instead of rewriting files:

```bash
goimports -d file.go

```

Format from standard input:

```bash
cat file.go | goimports

```

Add local prefix for organization:

```bash
goimports -local mycompany.com/myproject file.go

```

## Options ##

- `-w` — Write result to (source) file instead of stdout
- `-d` — Display diffs instead of rewriting files
- `-l` — List files that would be modified by goimports
- `-srcdir` — Choose imports as if source code is from dir
- `-local` — Put imports beginning with this string after 3rd-party packages
- `-format-only` — Don't fix imports and only format
- `-cpuprofile` — Write CPU profile to specified file

## Shortcuts ##

Common goimports operations:

```bash
# Update imports and format in current directory #
goimports -w .

# Check which files need import updates #
goimports -l .

# Preview changes to imports #
goimports -d .

# Update imports for specific file #
goimports -w main.go

# Update imports with local package grouping #
goimports -w -local mycompany.com/project .

# Process only modified files in Git #
| git diff --name-only --diff-filter=ACMR | grep '\.go$' | xargs goimports -w |

# Update imports and format with specific local prefix #
goimports -w -local github.com/myorg/myproject .

# Import analysis across multiple files #
find . -name "*.go" -exec goimports -w {} \;

# Group local imports separately #
goimports -w -local "company.com/,github.com/company/" .

# Run with formatting but without import changes #
goimports -format-only -w .

# Process files with specific extensions only #
find . -name "*.go" -not -path "./vendor/*" -exec goimports -w {} \;

# Import cleanup with dry run #
goimports -d $(find . -name "*.go" -not -path "./vendor/*")

# Use with standard input/output #
| cat source.go | goimports | sponge formatted.go |

# Update imports but preserve comments #
goimports -w .

# Update imports and show stats #
goimports -l . && echo "Import cleanup complete"

# Integrate with build tools #
goimports -w . && go build ./...

# Update imports before git commit #
goimports -w $(git diff --name-only --diff-filter=ACMR | grep '\.go$')

# Process with error reporting #
goimports -e -w .

# Update imports and format with specific depth #
find . -maxdepth 3 -name "*.go" -exec goimports -w {} \;

# Group imports with specific rules #
goimports -w -local "internal/,mycompany.com/" .

# Use in a CI pipeline to verify correct imports #
goimports -l . && if [ $? -ne 0 ]; then echo "Imports need updating"; exit 1; fi

# Format Go code with proper import organization #
goimports -w -local myorg.com/project .

# Verify imports are properly organized #
goimports -d . | head -20  # Show first 20 differences if any

# Update imports with file-specific exclusions (using find) #
find . -type f -name "*.go" -not -path "./generated/*" -exec goimports -w {} \;

```

## FAQ ##

### What Is The Difference Between Goimports And Gofmt? ###

- `gofmt` - Formats Go code but doesn't modify import declarations
- `goimports` - Formats Go code AND manages import declarations (adds/remove imports)

Goimports is essentially `gofmt` with import management capabilities.

### How Do I Install Goimports? ###

Install the tool using:

```bash
go install golang.org/x/tools/cmd/goimports@latest

```

### How Do I Organize Imports With Local Packages? ###

Use the `-local` flag to group your organization's imports separately:

```bash
goimports -local mycompany.com/project -w .

```

This places imports beginning with the specified string after 3rd-party packages.

### How Do I Check If Imports Are Correctly Organized? ###

Use the diff flag to see what would change:

```bash
goimports -d .

```

Or list files that need changes:

```bash
goimports -l .

```

If no files are listed, all imports are correctly organized.

### Can I Use Goimports In My Editor? ###

Yes! Most Go editors support goimports:

- VS Code: Go extension
- Vim: vim-go plugin
- Emacs: go-mode
- GoLand: Built-in support
- Sublime Text: GoSublime

Many editors can run goimports on save to maintain properly organized imports automatically.
