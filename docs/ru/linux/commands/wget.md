# `wget` #

- **Purpose:** The `wget` command is a powerful utility for downloading files from the web using HTTP, HTTPS, and FTP protocols. It's a non-interactive command-line tool that operates in the background without requiring user input, making it ideal for scripts, cron jobs, and automated downloads. Wget can resume broken downloads, work behind firewalls, and recursively download entire websites for offline browsing.
- **Usage:** `wget [OPTIONS] URL`

## Basic Usage ##

Download a single file:

```bash
wget https://example.com/file.zip

```

Download to a specific directory:

```bash
wget -P /path/to/directory https://example.com/file.zip

```

Resume a partially downloaded file:

```bash
wget -c https://example.com/largefile.iso

```

Download with a different filename:

```bash
wget -O newname.pdf https://example.com/oldname.pdf

```

Download quietly (minimal output):

```bash
wget -q https://example.com/file.zip

```

Recursive download of a website:

```bash
wget --mirror --convert-links --page-requisites --no-parent https://example.com

```

## Options ##

- `-O` — Save the file with a specific name
- `-P` — Save the file to a specific directory
- `-c` — Continue getting a partially-downloaded file (resume)
- `-b` — Go to background immediately after startup
- `-q` — Quiet (no output)
- `-v` — Verbose output
- `-r` — Recursive download
- `--limit-rate` — Limit download speed (for example, --limit-rate=200k)
- `-t` — Number of retries (default is 20)
- `--user-agent` — Identify as the specified agent string
- `-e robots=off` — Ignore robots.txt restrictions
- `-i` — Download URLs listed in a file

## Shortcuts ##

Common wget operations:

```bash
# Download multiple files from a list #
wget -i urls.txt

# Mirror an entire website for offline browsing #
wget --mirror --convert-links --adjust-extension --page-requisites --no-parent https://site.com

# Download files matching a pattern #
wget --accept=pdf,doc,zip https://example.com/docs/

# Limit download speed to prevent bandwidth saturation #
wget --limit-rate=100k https://example.com/big.file

# Retry failed downloads with limited attempts #
wget --tries=5 --wait=10 https://example.com/file

# Authenticate with username and password #
wget --user=username --password=password https://example.com/private/file

# Use a proxy server #
wget --proxy=on --proxy-user=user --proxy-password=pass https://example.com

```

## FAQ ##

### How Do I Resume a Download That Was Interrupted? ###

Use the `-c` (continue) option to resume a partial download:

```bash
wget -c https://example.com/largefile.iso

```

### Can Wget Download an Entire Website for Offline Viewing? ###

Yes, use the mirroring options:

```bash
wget --mirror --convert-links --page-requisites --no-parent https://example.com

```

This downloads the site with proper links and resources for offline viewing.

### How Do I Limit the Bandwidth Used by Wget? ###

Use the `--limit-rate` option:

```bash
wget --limit-rate=100k https://example.com/file

```

This limits to 100KB/s. You can use k (KB) or m (MB) suffixes.

### How Can I Download Files From a List of URLs? ###

Create a text file with one URL per line, then use:

```bash
wget -i urls.txt

```

### What's the Difference Between Wget and Curl? ###

- `wget` is specifically designed for downloading files and website mirroring
- `curl` is more versatile, supporting many protocols and focused on data transfer
- `wget` has superior recursive download capabilities
- `curl` handles more protocols and provides more granular control over HTTP methods
