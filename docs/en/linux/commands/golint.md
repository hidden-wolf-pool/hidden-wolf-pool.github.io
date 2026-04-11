# `golint` #

- **Purpose:** Golint is a linter for Go source code that provides style suggestions following the guidelines outlined in "Effective Go" and the Go community conventions. It examines Go code to identify coding patterns that could be improved for better readability, maintainability, and adherence to Go idioms. NOTE: Golint has been deprecated in favor of `golangci-lint` and other more modern linters that provide more comprehensive analysis.
- **Usage:** `golint [OPTIONS] [PATH...]`

## Basic Usage ##

Lint a single file:

```bash
golint file.go

```

Lint a directory:

```bash
golint directory/

```

Lint all Go files in the current directory:

```bash
golint

```

Lint with verbose output:

```bash
golint -v .

```

Lint specific file patterns:

```bash
golint "fmt/*.go"

```

Lint and output in a specific format:

```bash
golint -set_exit_status .

```

## Options ##

- `-min_confidence` — Minimum confidence of a problem to print it (default 0.8)
- `-set_exit_status` — Set exit status to 1 if any issues are found
- `-v` — Verbose output
- `-debug` — Debug mode output (very verbose)

## Shortcuts ##

Common golint operations:

```bash
# Lint entire project #
golint ./...

# Lint with minimum confidence threshold #
golint -min_confidence=0.5 .

# Lint with exit status check #
golint -set_exit_status ./...

# Lint only modified files #
| git diff --name-only --diff-filter=ACMR | grep '\.go$' | xargs golint |

# Lint and format output #
| golint ./... | grep -v "should have comment" | grep "." |

# Lint specific package #
golint mypackage/

# Lint all packages in project #
golint $(go list ./... | grep -v /vendor/)

# Lint with specific confidence level #
golint -min_confidence=0.9 ./...

# Lint and output to file #
golint ./... > lint_report.txt

# Lint and count issues #
golint ./... | wc -l

# Lint with debug information #
golint -debug mypackage/

# Lint excluding vendor directory #
find . -name "*.go" -not -path "./vendor/*" -exec golint {} \;

# Lint and filter specific issues #
golint ./... | grep -v "don't use underscores in Go names"

# Lint and show only errors above certain path #
golint ./internal/...

# Lint with custom confidence for specific checks #
golint -min_confidence=0.3 ./cmd/

# Lint and process with other tools #
golint ./... | sed 's/.*\/\([^/]*\.go\)/\1/'  # Extract just filenames

# Lint and suppress certain categories #
golint ./... | grep -v "comment on exported"

# Lint with error aggregation #
golint ./pkg1 ./pkg2 ./pkg3

# Lint using stdin (not directly supported, but conceptually) #
| cat file.go | gofmt | golint temp_file.go && rm temp_file.go |

# Lint and analyze in CI #
golint -set_exit_status . && echo "Linting passed"

# Lint and filter by directory #
find . -type d -not -path "./vendor/*" -exec bash -c 'golint "$1"/*' _ {} \;

# Lint with pattern matching #
golint $(find . -name "*.go" -not -path "./vendor/*" -not -name "*_test.go")

# Lint main packages specifically #
golint ./cmd/...

# Lint and sort by file #
golint ./... | sort -k1,1

# Lint and filter by issue type #
| golint ./... | awk '$NF ~ /comment | exported/ {print}' |

# Lint in parallel for large projects #
find . -name "*.go" -not -path "./vendor/*" | xargs -n 1 -P 4 golint

# Lint and integrate with editor workflow #
golint -set_exit_status main.go && echo "Passed golint check"

# Lint with path filtering #
golint ./api/... ./model/... ./handler/...

# Lint and generate summary #
| golint ./... | awk '{print $NF}' | sort | uniq -c | sort -nr |

# Lint experimental packages differently #
golint -min_confidence=0.5 ./experimental/...

```

## FAQ ##

### Is Golint Still Supported? ###

No, golint has been deprecated as of December 2020. The official recommendation is to use `golangci-lint` instead, which is more comprehensive and actively maintained.

### What Kind Of Issues Does Golint Identify? ###

Golint identifies common issues such as:

- Missing comments on exported functions, types, and variables
- Poor naming conventions (variable names like "intVar" or function names that don't reflect their purpose)
- Stuttering (type names that repeat the package name)
- Unconventional error handling patterns
- Other Go style issues based on community guidelines

### How Do I Migrate From Golint To Modern Linters? ###

Use `golangci-lint` instead:

```bash
# Install golangci-lint #
curl -sfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s -- -b $(go env GOPATH)/bin v1.50.1

# Run instead of golint #
golangci-lint run

```

### What Is The Min Confidence Flag For? ###

The `-min_confidence` flag sets a threshold for how certain golint should be before reporting an issue. A lower value (closer to 0) will report more potential issues, including those that might be false positives. A higher value (closer to 1) will only report issues that are almost certainly genuine concerns.

### How Do I Suppress Golint Warnings? ###

The recommended approach is to fix the issues golint identifies, as they represent legitimate style problems. However, some linters allow suppressing individual warnings with comments. Since golint is deprecated, it's better to use modern tools like `golangci-lint` that provide more configuration options.
