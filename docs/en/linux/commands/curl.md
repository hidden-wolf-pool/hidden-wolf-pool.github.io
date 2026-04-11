# `curl` #

- **Purpose:** The `curl` command is a powerful tool for transferring data from or to a server using various protocols including HTTP, HTTPS, FTP, FTPS, SCP, SFTP, TFTP, DICT, TELNET, LDAP, LDAPS, FILE, IMAP, SMTP, POP3, and RTMP. It's commonly used for testing APIs, downloading files, and debugging network connections.
- **Usage:** `curl [OPTIONS] [URL...]`

## Basic Usage ##

Download a file:

```bash
curl -O https://example.com/file.zip

```

Fetch content and display to stdout:

```bash
curl https://api.example.com/data.json

```

Send a POST request with JSON data:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"key":"value"}' https://api.example.com/endpoint

```

Follow redirects (up to 10 by default):

```bash
curl -L https://example.com/redirected-page

```

Show headers along with response:

```bash
curl -i https://example.com

```

Only show response headers:

```bash
curl -I https://example.com

```

Set user-agent:

```bash
curl -A "Custom-Agent" https://example.com

```

## Options ##

- `-X` — Specify request method (GET, POST, PUT, DELETE, and so on)
- `-H` — Add custom header to the request
- `-d` — Send data in POST request body
- `-L` — Follow HTTP redirects
- `-i` — Include response headers in output
- `-I` — Fetch only headers
- `-o` — Save output to a file
- `-O` — Save output to a file with remote filename
- `-s` — Silent mode (no progress meter)
- `-S` — Show errors even in silent mode
- `-v` — Verbose mode (show connection details)
- `-u` — Set username and password for authentication
- `-F` — Submit form data
- `-b` — Send cookies
- `-c` — Save cookies to a file
- `--compressed` — Request compressed response

## Shortcuts ##

Common curl operations:

```bash
# Download with progress bar and resume capability #
curl -C - -O https://example.com/largefile.zip

# Test an API endpoint with custom headers #
curl -H "Authorization: Bearer token" https://api.example.com/protected

# Upload a file with PUT request #
curl -X PUT --upload-file localfile.txt https://transfer.example.com/file.txt

# Test SSL certificate details #
curl -vI https://secure.example.com

# Get only HTTP status code #
curl -s -o /dev/null -w "%{http_code}" https://example.com

# Send form data (like HTML form submission) #
curl -X POST -F "username=test" -F "password=secret" https://example.com/login

```

## FAQ ##

### How Do I Download a File With a Custom Name? ###

Use the `-o` option to specify the output filename:

```bash
curl -o myfile.zip https://example.com/file.zip

```

### How Do I Resume a Partial Download? ###

Use the `-C -` option to resume a download:

```bash
curl -C - -O https://example.com/largefile.zip

```

### How Do I Pass Data with Different HTTP Methods? ###

With POST:

```bash
curl -X POST -d 'param1=value1&param2=value2' https://example.com/api

```

With PUT:

```bash
curl -X PUT -d @localfile.txt https://example.com/file

```

### How Do I Handle Authentication? ###

Basic authentication:

```bash
curl -u username:password https://example.com/protected

```

Or using headers for token-based auth:

```bash
curl -H "Authorization: Bearer token_value" https://api.example.com/data

```

### How Do I Debug Connection Issues? ###

Use verbose mode to see detailed connection information:

```bash
curl -v https://example.com

```

This shows SSL handshake, DNS resolution, and other connection details.
