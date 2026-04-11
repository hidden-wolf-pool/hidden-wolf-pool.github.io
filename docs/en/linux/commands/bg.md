# `bg` #

- **Purpose:** The `bg` command in Linux is used to resume a suspended process and let it run in the background. This is especially useful for long-running tasks, as it frees up your terminal for other commands.
- **Usage:** To use `bg`, you first need to suspend a running process by pressing <kbd>Ctrl</kbd> + <kbd>Z</kbd>. This will pause the process and give you back control of the terminal. Then, you can type bg to have the process continue in the background.

## Basic Usage ##

Start a long-running process like `sleep 100`, then suspend it:

```bash
sleep 100
^Z
[1]  + 877923 suspended  sleep 100

```

Then, to let it run in the background, you use `bg`:

```bash
bg
[1]+ sleep 100 &

```

The `&` at the end of the output indicates that the process is now running in the background.

## Options ##

- `bg %<job_id>` — Specify which one to resume in the background. If you don't provide a job ID, `bg` will use the most recently suspended or backgrounded job.

## Shortcuts ##

1. Press <kbd>Ctrl</kbd> + <kbd>Z</kbd> to suspend the current foreground process.
2. Type `bg` to move the suspended process to the background.

## FAQ ##

### What's the Difference Between `&` and `bg`? ###

The `&` operator starts a process in the background from the beginning. The `bg` command, on the other hand, is used to resume a process that is already running but has been suspended.

### How Do I See What's Running in the Background? ###

You can use the `jobs` command to see a list of all background processes.

### How Do I Bring a Background Process Back to the Foreground? ###

You can use the `fg` command, along with the job ID, to bring a background process back to the foreground.
