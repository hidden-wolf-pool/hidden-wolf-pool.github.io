# `pydoc` #

- **Purpose:** PyDoc is a documentation generator and interactive help system for Python. It extracts documentation from Python modules, classes, functions, and methods to generate documentation in various formats. PyDoc can serve documentation through a web interface or display it in the terminal. It's particularly useful for exploring Python modules and understanding their API without needing to read the source code directly.
| - **Usage:** `pydoc [-b] [-k keyword] [-p port] [module | package | topic | :]` |

## Basic Usage ##

Show documentation for a module in the terminal:

```bash
pydoc os

```

Show documentation for a specific function:

```bash
pydoc os.path.join

```

Start an HTTP server to browse documentation:

```bash
pydoc -b

```

Search for keywords in documentation:

```bash
pydoc -k threading

```

Start an HTTP server on a specific port:

```bash
pydoc -p 8080

```

Show documentation for a class:

```bash
pydoc dict

```

Show documentation for a built-in function:

```bash
pydoc len

```

## Options ##

- `-b` — Start an HTTP server on a random port to browse documentation
- `-p` — Start an HTTP server on the specified port and browse documentation
- `-k` — Search for a keyword in documentation
- `-w` — Write documentation to a file in HTML format
- `-n` — Specify the hostname to bind to when starting server
- `-q` — Suppress the message printed to standard output
- `-g` — Start an HTTP server on a random port and open it in a browser

## Shortcuts ##

Common pydoc operations:

```bash
# Show documentation for built-in functions #
pydoc print
pydoc len
pydoc str

# Show documentation for standard library modules #
pydoc sys
pydoc math
pydoc datetime
pydoc json
pydoc requests  # if installed

# Browse documentation in web interface (opens in browser) #
pydoc -b

# Start server on specific port #
pydoc -p 1234

# Search for documentation containing specific terms #
pydoc -k "regular expression"
pydoc -k "file io"
pydoc -k "network"

# Generate HTML documentation for a module #
pydoc -w os

# Generate HTML documentation in a specific directory #
pydoc -w -d ./docs mymodule

# Show documentation for specific class methods #
pydoc list.append
pydoc str.split

# Show documentation for packages #
pydoc urllib
pydoc urllib.parse

# Search documentation for modules related to a topic #
pydoc -k "date"
pydoc -k "encryption"
pydoc -k "database"

# Show documentation for third-party modules (if installed) #
pydoc numpy
pydoc pandas
pydoc flask

# Show documentation for exception classes #
pydoc Exception
pydoc ValueError

# Browse documentation with specific hostname #
pydoc -n localhost -p 8080

# Suppress output when starting server #
pydoc -q -b

# Generate HTML docs for entire package #
pydoc -w package_name

# Show documentation for Python data types #
pydoc int
pydoc float
pydoc bool
pydoc list
pydoc tuple
pydoc set
pydoc frozenset
pydoc bytes
pydoc bytearray

# Show documentation for file operations #
pydoc open
pydoc file
pydoc io

# Search for documentation related to specific concepts #
pydoc -k "context manager"
pydoc -k "generator"
pydoc -k "decorator"
pydoc -k "async"

# Generate documentation for custom modules #
pydoc -w mymodule.py
pydoc -w mypackage.mysubmodule

# Show help for special methods #
pydoc object.__str__
pydoc "__magic methods__"  # Note: this searches for magic methods

# Check documentation for Python version-specific features #
pydoc f-string
pydoc "walrus operator"

# Generate documentation with quiet output #
pydoc -q -w module_name

# Show documentation for different Python datatypes #
pydoc slice
pydoc range
pydoc enumerate
pydoc zip
pydoc map
pydoc filter

# Documentation for Python internals #
pydoc __import__
pydoc globals
pydoc locals
pydoc vars

```

## FAQ ##

### How Do I Access PyDoc Documentation Offline? ###

Start the built-in HTTP server:

```bash
pydoc -b

```

This starts a web server that allows you to browse Python documentation offline at `http://localhost:xxxx/`

### What Is The Difference Between PyDoc And Help()? ###

- `pydoc` - Command-line tool and HTTP server for Python documentation
- `help()` - Python built-in function for accessing documentation from within Python interpreter

Example in Python:

```python
help(len)
help(os.path)

```

### How Do I Generate HTML Documentation With PyDoc? ###

Use the `-w` flag to write HTML documentation:

```bash
pydoc -w module_name

```

This creates an HTML file with the documentation in the current directory.

### Can PyDoc Document My Own Modules? ###

Yes! If your module is importable by Python, pydoc can document it:

```bash
pydoc mymodule  # For a module in current directory
pydoc mypackage.mysubmodule  # For a package submodule

```

Make sure your module is in the Python path or in the current directory.

### How Do I Search For Documentation Topics? ###

Use the `-k` flag to search for keywords in documentation:

```bash
pydoc -k "thread"  # Find modules related to threading
pydoc -k "file"    # Find modules related to file operations
pydoc -k "regex"   # Find modules related to regular expressions

```

Note: PyDoc has been largely superseded by Sphinx for documentation generation in modern Python projects.
