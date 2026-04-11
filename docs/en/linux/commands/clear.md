# `clear` #

Clear the terminal screen.

## Basic Usage ##

- `clear` — Clears the terminal screen, removing all previously displayed text and system messages. The screen appears empty, with only the cursor at the top left corner.

## Options ##

- `-x` — Clear the visible screen but keeps the scrollback buffer intact. This allows you to scroll up and view previous output. Equivalent to pressing <kbd>CTRL</kbd> + <kbd>L</kbd> in most terminals.
- `-T <type>` — Specify the terminal type (for example, `vt100`, `xterm`) for compatibility. By default, it uses the value set in the `TERM` environment variable.
- `-V` — Display the version of the `ncurses` library used by the command. Useful for debugging or verifying system configurations.

## Shortcuts ##

- <kbd>CTRL</kbd> + <kbd>L</kbd> — This keyboard shortcut provides the same functionality as the `clear` command.

## FAQ ##

### What is the Difference Between `clear` and `reset`? ###

The `clear` command clears your screen, while the `reset` command re-initializes the terminal. You typically use `reset` when the terminal is in an abnormal state.
