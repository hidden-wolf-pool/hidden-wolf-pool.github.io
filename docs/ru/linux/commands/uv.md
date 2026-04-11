# `uv` #

- **Purpose:** UV is a fast implementation of pip, pip-sync, and virtualenv, written in Rust. It provides a drop-in replacement for pip with significantly faster performance. UV aims to solve the slow installation times of pip by using a high-performance implementation in Rust. It's designed to be a modern, fast Python package installer that maintains compatibility with pip's interface while greatly improving installation speeds.
- **Usage:** `uv [OPTIONS] [COMMAND]...`

## Basic Usage ##

Install a package:

```bash
uv pip install package_name

```

Install from requirements file:

```bash
uv pip install -r requirements.txt

```

Install with specific index:

```bash
uv pip install -i https://test.pypi.org/simple/ package_name

```

Create and use a virtual environment:

```bash
uv venv myenv
source myenv/bin/activate
uv pip install package_name

```

Synchronize packages from requirements (like pip-sync):

```bash
uv pip sync requirements.txt

```

Show installed packages:

```bash
uv pip list

```

Show package information:

```bash
uv pip show package_name

```

Uninstall a package:

```bash
uv pip uninstall package_name

```

## Options ##

- `-v` — Verbose output (can be used multiple times to increase verbosity)
- `-q` — Quiet output (can be used multiple times to decrease verbosity)
- `--cache-dir` — Path to cache directory
- `--no-cache` — Disable cache
- `--require-hashes` — Require hashes in requirements
- `--index-url` — Base URL of Python Package Index
- `--extra-index-url` — Extra URLs of Python Package Index
- `--trusted-host` — Trusted host
- `--reinstall` — Reinstall package and its dependencies
- `--upgrade` — Upgrade packages
- `--dry-run` — Don't actually install, just print what would be done

## Shortcuts ##

Common uv operations:

```bash
# Install multiple packages #
uv pip install package1 package2 package3

# Install with version specifier #
uv pip install 'django>=3.0,<4.0'

# Install in development/editable mode #
uv pip install -e .

# Install and generate requirements #
uv pip install -r requirements.txt

# Install from constraints file #
uv pip install -c constraints.txt package_name

# Install with extra dependencies #
uv pip install 'package[extra1,extra2]'

# Install from VCS #
uv pip install git+https://github.com/user/repo.git

# Install from local archive #
uv pip install package.whl
uv pip install package.tar.gz

# Upgrade all packages #
uv pip install --upgrade -r requirements.txt

# Install packages without dependencies #
uv pip install --no-deps package_name

# Install from local directory #
uv pip install /path/to/local/package

# Create virtual environment with specific Python version #
uv venv --python 3.11 myenv

# Create virtual environment with seed packages #
uv venv --seed myenv

# Install packages and show progress #
uv pip install -v package_name

# Dry run to see what would be installed #
uv pip install --dry-run -r requirements.txt

# Install ignoring requirements file errors #
uv pip install --exists-action s -r requirements.txt

# Install and create/update requirements with hashes #
uv pip install --require-hashes -r requirements.txt

# Install and force reinstall #
uv pip install --force-reinstall package_name

# Install with timeout #
uv pip install --timeout 120 package_name

# Install with retry attempts #
uv pip install --retries 3 package_name

# Install with specific platform #
uv pip install --platform linux_x86_64 package_name

# Install with specific implementation #
uv pip install --implementation cp package_name

# Install with specific ABI #
uv pip install --abi cp39 package_name

# Install using only wheels #
uv pip install --only-binary :all: package_name

# Install preferring binary packages #
uv pip install --prefer-binary package_name

# Install and show resolution output #
uv pip install -v --resolver=backtracking package_name

# Install to user directory #
uv pip install --user package_name

# Install to specific target directory #
uv pip install --target /path/to/target package_name

# Install with specific upgrade strategy #
uv pip install --upgrade-strategy eager requirements.txt

# Install with extra index URL #
uv pip install -i https://index.example.com/simple/ -e .

# Install with trusted hosts #
uv pip install --trusted-host index.example.com package_name

# Install and save dependencies to file #
uv pip freeze > requirements.txt

# Install and compare with requirements #
uv pip list --format=freeze > current_requirements.txt

# Install with custom certificates #
uv pip install --cert /path/to/cert.pem package_name

# Install with client certificates #
uv pip install --client-cert /path/to/client.pem package_name

# Install and check for vulnerabilities (when supported) #
uv pip check

# Install and validate installed packages #
uv pip check

# Install with custom cache directory #
uv pip install --cache-dir /custom/cache package_name

# Install without cache #
uv pip install --no-cache-dir package_name

# Create virtual environment with prompt customization #
uv venv --prompt myproject myenv

# Create virtual environment without pip #
uv venv --without-pip myenv

```

## FAQ ##

### What Is UV And How Is It Different From Pip? ###

UV is a drop-in replacement for pip written in Rust that offers significantly faster package installation. Key differences include:

- Speed: Much faster installation due to Rust implementation
- Compatibility: Maintains pip's command-line interface
- Dependencies: Solves dependency resolution more efficiently
- Python versions: Supports multiple Python versions

### How Do I Install UV? ###

UV can be installed in various ways:

```bash
# Using cargo (Rust package manager) #
cargo install uv

# Using pip (once available in PyPI) #
pip install uv

# Using the standalone installer #
curl -LsSf https://astral.sh/uv/install.sh | sh

```

### How Do I Use UV As A Direct Replacement For Pip? ###

UV's pip command is designed as a drop-in replacement:

```bash
# Instead of: pip install package_name #
uv pip install package_name

# Instead of: pip install -r requirements.txt #
uv pip install -r requirements.txt

# Instead of: pip list #
uv pip list

```

### Can UV Create Virtual Environments? ###

Yes, UV can create virtual environments:

```bash
# Create a virtual environment #
uv venv myenv

# Activate it (Linux/macOS) #
source myenv/bin/activate

# Or on Windows #
myenv\Scripts\activate

# Install packages in the virtual environment #
uv pip install package_name

```

### Is UV Production-Ready? ###

UV is rapidly evolving and gaining adoption, but check its current status before using in production. While it aims to be a drop-in replacement for pip, you should test your specific use cases to ensure compatibility. UV is developed by Astral, the team behind Ruff (a fast Python linter).
