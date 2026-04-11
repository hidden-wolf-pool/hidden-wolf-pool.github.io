# `fg` #

- **Purpose:** The `fg` command in Linux is used to bring a background job to the foreground. This allows you to interact with the process again, for example, to provide input or to see its output in real-time.
- **Usage:** To use `fg`, you need to have a job running in the background or suspended. You can then type `fg` followed by the job's ID to bring it to the foreground.

## Basic Usage ##

Start a long-running process like `sleep 100`, then suspend it:

```bash
sleep 100
^Z
[1]  + 877923 suspended  sleep 100

```

Bring it to the foreground:

```bash
jobs
[1]  + suspended  sleep 100

```

```bash
fd %1
[1]  + 879057 continued  sleep 100

```

The terminal will now be occupied by the `sleep` command until it finishes.

## Options ##

- `fg %<job_id>` — Specify which one to resume to the foreground. If you don't provide a job ID, `fg` will use the most recently suspended or backgrounded job.

## Shortcuts ##

1. Use the `jobs` command to see the list of background or suspended jobs and their IDs.
2. Type `fg` followed by the job ID (for example, `fg %1`) to bring the desired job to the foreground.

## FAQ ##

### How Do I Find the Job ID? ###

You can use the `jobs` command to list all background and suspended jobs along with their corresponding job IDs.

### What Happens if I Don't Specify a Job ID? ###

If you type `fg` without a job ID, it will bring the most recently backgrounded or suspended job to the foreground.

### Can I Switch Between Multiple Foreground Jobs? ###

No, you can only have one foreground job at a time in a single terminal session. To manage multiple processes, you can switch them between the foreground and background.
