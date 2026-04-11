# `wezterm` #

- **Purpose:** `wezterm` — a modern, GPU-accelerated terminal emulator and multiplexer with support for advanced features like tabs, panes, and rich text formatting.
- **Usage:** Launch and configure the WezTerm terminal emulator to work with shell sessions, scripts, and remote connections.

## Basic Usage ##

Launch WezTerm with default settings:

```bash
wezterm
```

Start a new session with a specific command:

```bash
wezterm start -- top
```

Open multiple tabs with different commands:

```bash
wezterm start --tab-title "Shell"  --tab-title "Python" python3
```

## Options ##

- `--config-file <PATH>` — specify a custom config file location instead of the default one.
- `--class <CLASS>` — set the X11/Wayland window class for the window.
- `--title <TITLE>` — set the initial window title.
- `--tab-title <TITLE>` — set the title for the initial tab.
- `--cwd <PATH>` — set the current working directory for the initial process.
- `--command <CMD>` — run a specific command instead of the default shell.
- `--help` — display help information and exit.
- `--version` — show version information and exit.
- `--no-auto-start` — prevent WezTerm from automatically starting a shell process.
- `--workspace <NAME>` — assign the window to a specific workspace.

## Shortcuts ##

- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>T</kbd> — Open a new tab.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>W</kbd> — Close the current tab or pane.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> — Spawn a new window.
- <kbd>Alt</kbd> + <kbd>1</kbd>...<kbd>9</kbd> — Switch to tab by index.
- <kbd>Ctrl</kbd> + <kbd>\\</kbd> — Split the current pane vertically.
- <kbd>Ctrl</kbd> + <kbd>-</kbd> — Split the current pane horizontally.
- <kbd>Ctrl</kbd> + Arrow keys — Navigate between panes.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> — Copy selected text to clipboard.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd> — Paste from clipboard.
- <kbd>F11</kbd> — Toggle full-screen mode.

## FAQ ##

### How Do I Customize the Appearance of WezTerm? ###

Edit the configuration file (usually `~/.config/wezterm/wezterm.lua`). You can change colors, fonts, transparency, and other visual settings using Lua syntax. Example:

```lua
return {
  color_scheme = "Batman",
  font = wezterm.font("JetBrains Mono"),
  window_background_opacity = 0.95,
}
```

### Where is the Config File Located? ###

The default config file is located at `~/.config/wezterm/wezterm.lua`. If the directory doesn't exist, create it and add your configuration.

### Can I Use WezTerm as a Multiplexer Like Tmux? ###

Yes. WezTerm supports tabs and panes natively. You can split windows into multiple panes and manage them with keyboard shortcuts. It can replace basic tmux workflows without needing a separate multiplexer.

### Why Doesn't My Shortcut Work? ###

Some shortcuts may be intercepted by your desktop environment or window manager. Check your system-level keyboard shortcuts. You can also redefine WezTerm shortcuts in the config file using the `keys` table.

### How Can I Enable Transparency? ###

Add `window_background_opacity` to your config file. For example:

```lua
window_background_opacity = 0.85
```

This sets the window background to 85 % opacity. Ensure your compositor supports transparency.
