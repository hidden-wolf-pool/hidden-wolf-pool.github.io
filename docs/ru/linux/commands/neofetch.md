# `neofetch` #

- **Purpose:** `neofetch` is a command-line tool that displays information about your operating system, software, and hardware in a visually pleasing way. It's often used to create screenshots to share with others.
- **Usage:** To use `neofetch`, simply type `neofetch` in your terminal.

## Basic Usage ##

```bash
neofetch
```

This command will display basic system information including:

- OS name and version
- Kernel version
- Uptime
- Packages
- Shell
- CPU info
- Memory usage
- Uptime
- Theme information

## Options ##

- `--ascii_distro <distro>` — Change the ASCII art to a different distribution's logo, for example, `neofetch --ascii_distro ubuntu`.
- `--colors <color1> <color2>` — Change the colors of the output.
- `--off` / `--disable <info>` — Disable a specific information line from the output, for example, `neofetch --disable cpu`
- `--config <path>` — Use a custom configuration file.

## FAQ ##

### Is `neofetch`'s Memory Output Correct? ##

Yes, `neofetch` calculates memory usage with the formula:

```text
MemUsed = Memtotal + Shmem - MemFree - Buffers - Cached - SReclaimable
```
