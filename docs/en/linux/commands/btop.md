# `btop` #

- **Purpose:** `btop` is a resource monitor for the command line in Linux, macOS, and FreeBSD. It shows usage and stats for the processor, memory, disks, network, and processes. It is a more modern and user-friendly alternative to tools like `htop` and `top`.
- **Usage:** To start `btop`, simply type `btop` in the terminal and press <kbd>Enter</kbd>. The interface is divided into sections for CPU, memory, disks, network, and processes. You can navigate through the list of processes using the arrow keys.

## Basic Usage ##

```bash
btop

```

## Options ##

- `-h` / `--help` — Show the help message and exit.
- `-v` / `--version` — Show version information and exit.
- `-lc` / `--low-color` — Disable truecolor and use 256-color mode.
- `-t` / `--tty_on` — Force TTY mode on, which uses a maximum of 16 colors and TTY-friendly graph symbols.
- `+t` / `--tty_off` — Force TTY mode off.
- `-p` / `--preset` — Start with a preset, where the ID is an integer value between 0-9.
- `--utf-force` — Force start even if no UTF-8 locale was detected.
- `--debug` — Start in debug mode.

## Shortcuts ##

- <kbd>Esc</kbd> + <kbd>M</kbd> — Shows the main menu.
- <kbd>F2</kbd> + <kbd>O</kbd> — Shows options.
- <kbd>F2</kbd> + <kbd>H</kbd> — Shows the help screen.
- <kbd>Ctrl</kbd> + <kbd>C</kbd> / <kbd>Q</kbd> — Quits the program.
- <kbd>↑</kbd> + <kbd>↓</kbd> — Select in the process list.
- <kbd>Enter</kbd> — Show detailed information for the selected process.
- <kbd>←</kbd> + <kbd>→</kbd> — Select previous/next sorting column.
- <kbd>F</kbd> / <kbd>/</kbd> — Input a string to filter processes with.
- <kbd>E</kbd> — Toggle processes tree view.
- <kbd>R</kbd> — Reverse sorting order in the processes box.
- <kbd>h</kbd> — Show help menu.
- <kbd>q</kbd> — Quit applicatio.
- <kbd>s</kbd> — Toggle sorting.
- <kbd>f</kbd> — Filter processes.
- <kbd>m</kbd> — Toggle memory display.
- <kbd>n</kbd> — Toggle network display.
- <kbd>d</kbd> — Toggle disk display.
- <kbd>c</kbd> — Toggle CPU display.
- <kbd>p</kbd> — Toggle process display.
- <kbd>r</kbd> — Refresh statistics.

## FAQ ##

### How Do I Install `btop`? ###

- **Debian/Ubuntu:** `sudo apt install btop`
- **Fedora:** `sudo dnf install btop`
- **Arch Linux:** `sudo pacman -S btop`
- **macOS (with Homebrew):** `brew install btop`
- **FreeBSD:** `pkg install btop`

### What Are the Main Features of `btop`? ###

- It has an easy-to-use, game-inspired menu system and full mouse support.
- It provides a fast and responsive UI with UP and DOWN key process selection.
- It can show detailed stats for a selected process and allows for filtering processes.
- It allows for easy switching between sorting options and provides a tree view of processes.
- You can send any signal to a selected process.
- It has an auto-scaling graph for network usage.
