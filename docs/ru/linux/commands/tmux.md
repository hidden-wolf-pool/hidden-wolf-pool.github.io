# `tmux` (Terminal Multiplexer) #

**Tmux** is a terminal multiplexer, which allows you to create and manage multiple terminal sessions within a single window. This is especially useful for remote work, as it lets you keep your sessions active even after you disconnect.

## Basic Usage ##

- `tmux new` — Start a new `tmux` session.
- `tmux new -s <name>` — Start a new named `tmux` session.
- `tmux ls` — List all running `tmux` sessions.
- `tmux attach` — Attach to the last `tmux` session.
- `tmux attach -t <name>` — Attach to a named `tmux` session.
- `tmux kill-session -t <name>` — Kill a specific session.

## Management ##

Once inside a `tmux` session, you can use the following commands. These commands are prefixed with a "prefix key" which is <kbd>CTRL</kbd> + <kbd>B</kbd> by default. To execute a command, press the prefix key combination, release it, and then press the command key.

### Session ###

- `d` — Detach from the current session.
- `$` — Rename the current session.
- `?` — List all key bindings.

### Window ###

- `c` — Create a new window.
- `p` — Go to the previous window.
- `n` — Go to the next window.
- `&` — Close the current window.
- `,` — Rename the current window.
- `w` — List all windows.
- `f` — Find a window by a name.

#### Scrolling ####

- `[` — Enter copy/scroll mode.
- `↑` / `↓` or `PageUp` / `PageDown` — Move up/down.
- `q` — Exit copy mode.

### Pane ###

- `%` — Split the current pane vertically into two panes.
- `"` — Split the current pane horizontally into two panes.
- `↑`/`↓`/`←`/`→` — Move between panels.
- `o` — Go to the next pane.
- `;` — Go to the previously active pane.
- `{` — Swap the current pane with the previous one.
- `}` — Swap the current pane with the next one.
- `x` — Close the current pane.
- `z` — Toggle zoom for the current pane.
- <kbd>Alt</kbd> + `↑`/`↓`/`←`/`→` — Resize panel.
