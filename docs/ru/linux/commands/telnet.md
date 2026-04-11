# `telnet` #

- **Purpose:** The `telnet` command establishes a connection to a remote host using the Telnet protocol, which operates on TCP port 23. It provides a command-line interface for communicating with remote devices or services. While originally designed for remote administration, telnet is now primarily used for testing network services, connecting to serial consoles, and debugging network connectivity issues. Because telnet transmits all data (including passwords) in plain text without encryption, it is considered insecure and has largely been replaced by SSH. However, it's still valuable for connecting to certain network devices, testing services, and diagnostic purposes where SSH is not available.
- **Usage:** `telnet [OPTIONS] [HOST] [PORT]`

## Basic Usage ##

Connect to a remote host on the default telnet port (23):

```bash
telnet example.com

```

Connect to a remote host on a specific port:

```bash
telnet example.com 80

```

Connect to localhost on a specific port:

```bash
telnet localhost 22

```

Connect using IP address:

```bash
telnet 192.168.1.100 23

```

Connect with a timeout:

```bash
telnet -S 192.168.1.100 23

```

Connect to a specific service (like SMTP):

```bash
telnet mail.example.com 25

```

Connect to a web server to test HTTP:

```bash
telnet www.example.com 80

```

## Options ##

- `-8` — Request 8-bit data transmission
- `-a` — Attempt automatic login (with current user name)
- `-c` — Skip sending IAC NAWS command (terminal size negotiation)
- `-d` — Enable debugging
- `-e char` — Set escape character (default is '~')
- `-E` — Disable escape character
- `-f` — Do not read the user's telnetrc file
- `-F` — Enable passing of Authentication Information
- `-k realm` — Use the specified Kerberos realm
- `-K` — Disable automatic login with user's name
- `-l user` — Specify the user to login as on the remote system
- `-L` — Request to receive Kerberos credentials
- `-n tracefile` — File all trace information to the specified file
- `-S tos` — Set the IP Type of Service (TOS) option
- `-x` — Turn on encryption of the data stream if possible
- `-r` — Use a user interface similar to rlogin
- `-b addr` — Use the specified IP address as the source address
- `-z` — Set the telnet command to be executed

## Shortcuts ##

Telnet client command shortcuts:

```bash
# Within a telnet session #
~.              # Disconnect immediately
~^Z             # Suspend telnet (background)
~^]             # Enter command mode (escape to telnet prompt)
~v              # Toggle encryption
~V              # Toggle verbose mode

# Common telnet commands (after ~^]) #
close           # Close current connection
open host port  # Open new connection
quit            # Quit telnet
status          # Show current status
toggle          # Toggle options (like echo, debug, and so on)
mode type       # Change to character or line mode
send command    # Send special commands (EOF, abort, and so on)

# Diagnostic operations #
telnet -d target_host 3389  # Debug connection to RDP port
telnet -e '^' target_host 23  # Set escape to Ctrl+^ instead of ~
telnet localhost 25  # Connect to SMTP server
telnet 192.168.1.1 80  # Test HTTP connectivity
telnet target_host 443  # Test HTTPS connectivity (before SSL handshake)

# Test different protocols via telnet #
# Test HTTP manually: #
telnet www.example.com 80
GET / HTTP/1.1
Host: www.example.com

# Test SMTP manually: #
telnet mail.example.com 25
HELO client.example.com

# Test POP3 manually: #
telnet mail.example.com 110
USER username
PASS password

# Test IMAP manually: #
telnet mail.example.com 143
01 LOGIN username password

# Test FTP manually: #
telnet ftp.example.com 21
USER anonymous
PASS user@example.com

# Test database connectivity: #
telnet db.example.com 5432  # PostgreSQL
telnet db.example.com 3306  # MySQL
telnet db.example.com 1433  # MS SQL Server
telnet db.example.com 1521  # Oracle

# Test custom services: #
telnet service.example.com 8080
telnet service.example.com 9000

# Test network connectivity to any port: #
telnet external_ip 22
telnet router_ip 80

# For testing purposes with no actual connection: #
telnet -b source_ip target_ip port

# Check if service responds with banner: #
telnet vulnerable_service_port 23  # After connection opens, send Enter

# Test with different network configurations: #
telnet -S 0x10 target_host port  # Set TOS to minimize cost
telnet -S 0x08 target_host port  # Set TOS to maximize throughput

# Connect using IPv6 (if supported): #
telnet -6 ipv6_host 23

# Establish connection with specific service types: #
telnet -S 0x04 target_host port  # Maximize reliability
telnet -S 0x02 target_host port  # Minimize delay

# Perform connectivity tests for troubleshooting: #
telnet firewall_test_host 53   # Test DNS access
telnet proxy_host 3128          # Test proxy access
telnet vpn_host 1194            # Test OpenVPN port
telnet game_server 27015        # Test game server port

# Use telnet for troubleshooting network issues: #
telnet localhost 22    # Test local SSH listening
telnet ::1 22          # Test IPv6 localhost SSH
telnet 127.0.0.1 22    # Different notation for same test

# Use for interactive protocol testing: #
# After establishing connection to target service: #
# Manually type protocol commands like HTTP GET, SMTP HELO, and so on #
# This helps verify if the service is functioning properly #

# Exit telnet session when connected: #
# Try ~.  (tilde dot) #
# Or Ctrl+] followed by 'quit' #

# Test connection with verbose output: #
telnet -v target_host port  # Note: -v option may not be available in all implementations

# Troubleshoot with trace file: #
telnet -n trace.txt target_host port  # Create trace file for analysis

```

## FAQ ##

### Is Telnet Secure To Use? ###

No, telnet is inherently insecure as it transmits all data including passwords in plain text. For secure connections, use SSH instead:

```bash
# Instead of #
telnet remote.host.com
# Use #
ssh remote.host.com

```

### When Should I Still Use Telnet? ###

Telnet is still useful for:

- Testing network connectivity on specific ports
- Connecting to devices that only support telnet (some routers, switches)
- Debugging network services
- Testing plain-text protocols (SMTP, POP3, HTTP)
- When encryption is not needed or available

### How Do I Exit A Telnet Session? ###

Several methods:

- Try typing `~.` (tilde-dot) to disconnect immediately
- Press `Ctrl+]` to enter telnet command mode, then type `quit`
- Use `exit` command if supported by the remote system

### How Can I Troubleshoot Connection Issues With Telnet? ###

Use telnet to test if a port is accessible:

```bash
# Test connection to port 80 #
telnet example.com 80

# If successful, try sending HTTP command: #
GET / HTTP/1.1
Host: example.com

```

### What Is The Escape Character In Telnet? ###

The default escape character is `~` (tilde). To send the escape character itself, type it twice (`~~`). To enter telnet command mode, press the escape character followed by another command (for example, `~.` to quit).

### How Do I Test HTTP Using Telnet? ###

```bash
telnet example.com 80
# After connection: #
GET / HTTP/1.1
Host: example.com

# Press Enter twice after the headers #

```
