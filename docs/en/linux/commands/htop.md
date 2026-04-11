# `htop` #

- **Purpose:**
    - Interactive system-monitor tool
    - Real-time process viewer and manager
    - Replacement for traditional `top` command with enhanced features
- **Usage:**
    - Monitoring system performance
    - Managing running processes
    - Analyzing resource usage

## Basic Usage ##

```bash
htop

```

## Options ##

- `-d` — Set the delay between updates (in seconds).
- `-s` — Sort processes by CPU usage.
- `-u <username>` — Show processes for specific user.
- `-p <PID>` — Show specific process by PID.
- `-a` — Auto-refresh.
- `-C` — Disable colors

## Shortcuts ##

- `F1` - Help menu
- `F2` - Setup columns
- `F3` - Search processes
- `F4` - Filter processes
- `F5` - Tree view
- `F6` - Sort by different parameters
- `F7` - Change priority
- `F8` - Kill process
- `F9` - Signal process
- `F10` - Quit
- `SPACE` - Mark process
- `Q` - Quit

## FAQ ##

### How Do I Install `htop`? ###

- Use package manager:
    - Debian/Ubuntu: `sudo apt-get install htop`
    - Fedora: `sudo dnf install htop`
    - Arch Linux: `sudo pacman -S htop`

### How Can I Change the Default Sorting? ###

- Press <kbd>F6</kbd> to open sorting menu.
- Select desired sorting option.
- Press <kbd>Enter</kbd> to apply.

### How Do I Kill a Process Using `htop`? ###

- Find the process in the list.
- Select it using arrow keys.
- Press <kbd>F8</kbd>.
- Choose kill signal (usually `SIGKILL` or `SIGTERM`).
- Confirm action.

### Can I Save `htop` Configuration? ###

- Yes, configuration is saved in `~/.config/htop/htoprc`
- Changes are applied automatically on next launch

### How Do I Show Only My Processes? ###

- Run `htop -u $(whoami)`
- Or use `u` key inside htop to filter by user

### How to Update `htop` Display Rate? ###

- Press <kbd>S</kbd> to change update interval.
- Enter desired value in seconds.
- Press <kbd>Enter</kbd> to apply.
