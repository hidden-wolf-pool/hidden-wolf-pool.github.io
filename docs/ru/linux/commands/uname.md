# `uname` #

- **Purpose:** The `uname` command, short for "Unix Name" is a command-line utility that prints basic information about the operating system and system hardware. It can provide details like the kernel name, kernel version, hardware architecture, and more.

## Basic Usage ##

Get the kernel name, which is the default output:

```bash
uname

```

See the kernel release and version together, you can use:

```bash
uname -rv

```

## Options ##

- `-a` / `--all` — Print all available system information.
- `-s` / `--kernel-name` — Show the kernel name.
- `-n` / `--nodename` — Display the system's node name (hostname).
- `-r` / `--kernel-release` — Show the kernel release number.
- `-v` / `--kernel-version` — Display the kernel version.
- `-m` / `--machine` — Show the machine hardware name (for example, 'x86_64').
- `-p` / `--processor` — Display the processor type or "unknown".
- `-i` / `--hardware-platform` — Show the hardware platform or "unknown".
- `-o` / `--operating-system` — Display the operating system.
