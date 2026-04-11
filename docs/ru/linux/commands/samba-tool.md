# `samba-tool` #

- **Purpose:** `samba-tool` is the main administration tool for Samba. It is a versatile command-line utility for managing a Samba Active Directory (AD) Domain Controller. Its functions include managing users, groups, computer accounts, contacts, DNS, replication, and other domain-related services.
- **Usage:** `samba-tool <subcommand> [options]`

## Basic Usage ##

Provision a new Samba AD domain interactively:

```bash
samba-tool domain provision

```

### User Management ###

List all users in the domain:

```bash
samba-tool user list

```

Add a new user:

```bash
samba-tool user create <user name>

```

### Group Management ###

List all groups in the domain:

```bash
samba-tool group list

```

Add a new group:

```bash
samba-tool group create <group name>

```

Delete a group:

```bash
samba-tool group delete <group name>

```

#### Membership ####

List members for group:

```bash
samba-tool group listmembers <group name>

```

## Options ##

- `-h` / `--help` — Display a help message.
- `-V` / `--version` — Show the program's version number.
- `-d` / `--debuglevel` — Set the debug level (from `0` to `10`).
- `-s` / `--configfile` — Specify a configuration file to use.
- `-U` / `--user` — Set the username for authentication.
- `--password` — Provide the password on the command line.

## FAQ ##

### What is the Maximum Size of a LDB or TDB Database File? ###

For databases using TDB, the maximum size is 4 GB. For LDB files based on LMDB, which is the default for the main `sam.ldb` database on an AD DC, the size is much larger and is typically limited by the available storage on the system.
