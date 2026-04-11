# `hostname` #

- **Purpose:** The `hostname` command is used to display or set the system's hostname. It helps identify the system on a network.
- **Usage:** This command is essential for system administrators and users who need to manage or check the system's network identity.

## Basic Usage ##

Display the current hostname of the system:

```bash
hostname

```

Display the FQDN (Fully Qualified Domain Name):

```bash
hostname -f

```

## Options ##

- `-f` / `--fqdn` — Show the FQDN (Fully Qualified Domain Name).
- `-d` / `--domain` — Display the DNS domain name.
- `-i` / `--ip-address` — Show the IP address(es) of the hostname.
- `-s` / `--short` — Display the short hostname.

## FAQ ##

### How Can I Change the Hostname Using the `hostname` Command? ###

To change the hostname temporarily (until the next reboot), use:

```bash
sudo hostname new-hostname

```

### Why Does `hostname -i` Show Multiple IP Addresses? ###

If your system has multiple network interfaces, `hostname -i` will display all IP addresses associated with the hostname.

### What is the Difference Between `hostname` and `hostname -f`? ###

- `hostname`: Displays the short hostname
- `hostname -f`: Displays the fully qualified domain name (FQDN)
