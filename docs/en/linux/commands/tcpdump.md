# `tcpdump` #

- **Purpose:** `tcpdump` is a powerful command-line packet sniffer or packet analyzer tool that is used to capture or filter TCP/IP packets that are received or transferred over a network on a specific interface.
- **Usage:** It allows users to intercept and display TCP/IP and other packets being transmitted or received over a network to which the computer is attached. You typically need superuser (root) privileges to run `tcpdump`.

## Basic Usage ##

Capture packets on the default interface:

```bash
sudo tcpdump

```

Capture packets on a specific interface (for example, `eth0`):

```bash
sudo tcpdump -i eth0

```

## Options ##

- `-i <interface>` — Listen on a specific network interface (for example, `eth0`, `enp0s3`, `any`).
- `-c <count>` — Exit after capturing a specific number of packets.
- `-n` — Don't convert addresses (for example, host addresses, port numbers, and so on) to names. This avoids DNS lookups.
- `-nn` — Don't convert protocol and port numbers to names either.
- `-w <file>` — Write the raw packets to a file rather than parsing and printing them out. The file can be analyzed later with `tcpdump -r` or Wireshark.
- `-r <file>` — Read packets from a file (which was created with the `-w` option).
- `-s <snaphot length>` — Set the snapshot length, or the number of bytes of data to be captured from each packet. `-s 0` sets it to the default of 262144 bytes to capture full packets.
- `-X` — Print the packet's data in both hex and ASCII.
- `-A` — Print each packet (minus its link level header) in ASCII. Handy for capturing web pages.
- `host [host]` ­— Filter for traffic involving a specific host.
- `port [port]` ­— Filter for traffic on a specific port.

## Shortcuts ##

- <kbd>Ctrl</kbd> + <kbd>C</kbd> — This is the standard way to stop the packet capture process in the terminal. `tcpdump` itself is not an interactive program with internal shortcuts.

## FAQ ##

### How Can I Filter the Traffic? ###

- You can use expressions to filter the captured traffic. For example:
    - `sudo tcpdump host 1.1.1.1` — Capture traffic to and from the IP address 1.1.1.1.
    - `sudo tcpdump port 443` — Capture traffic on port 443 (HTTPS).
    - `sudo tcpdump src 192.168.1.100 and dst port 80` — Capture traffic from a source IP and to a destination port.

### How Do I Save a Capture to a File? ###

- Use the `-w` option followed by a filename. This saves the capture in a `.pcap` format, which is useful for later analysis.
- `sudo tcpdump -i eth0 -w capture.pcap`

### How Do I Read a Capture File? ###

- Use the `-r` option followed by the filename.
- `tcpdump -r capture.pcap`
