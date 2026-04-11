# `scriptreplay` #

- **Purpose:** The `scriptreplay` command replays a typescript (terminal session recording) created by the `script` command, showing the recorded session in real-time or with customized timing. It reads both the typescript file (containing the output) and the timing file (containing the delays between each write to the terminal) to reproduce the exact timing of the original session. This command is extremely useful for demonstrating commands, sharing terminal sessions, reviewing complex procedures, creating video-style tutorials without video technology, and showcasing command sequences to others. The replay allows viewers to see exactly how commands were entered and how outputs appeared over time.
- **Usage:** `scriptreplay [OPTIONS] [TYPESCRIPT_FILE [TIMING_FILE]]`

## Basic Usage ##

Replay a typescript with its timing file:

```bash
scriptreplay typescript timing.log

```

Replay with a specific typescript (default timing file assumed):

```bash
scriptreplay typescript

```

Replay at 2x speed:

```bash
scriptreplay -t timing.log -s 0.5 typescript

```

Replay with custom speed factor:

```bash
scriptreplay -t timing.log -s 2.0 typescript

```

Replay a session recorded with standard timing:

```bash
scriptreplay -t timing.log typescript

```

Replay with maximum speed (no delays):

```bash
scriptreplay -t timing.log -s 0 typescript

```

Replay with timing info sent to stderr:

```bash
scriptreplay -T typescript

```

## Options ##

- `-t` — Use specific timing file instead of standard timing file
- `-s` — Scale factor for timing delays (default is 1.0)
- `-T` — Send timing information to standard error
- `-m` — Divide time by the specified multiplier
- `-d` — Divide all time delays by FACTOR
- `--version` — Display version information
- `-h`, `--help` — Show help and exit

## Shortcuts ##

Common scriptreplay operations:

```bash
# Standard replay with original timing #
scriptreplay typescript timing.log

# Replay at slower pace (half speed) #
scriptreplay -s 2.0 typescript timing.log

# Replay at faster pace (double speed) #
scriptreplay -s 0.5 typescript timing.log

# Replay with default timing file (typescript.timing) #
scriptreplay -t typescript.timing typescript

# Replay without timing delays #
scriptreplay -s 0 typescript timing.log

# Replay with timing information displayed #
scriptreplay -T typescript timing.log

# Replay session with 10x slower timing #
scriptreplay -s 10 typescript timing.log

# Replay session with 5x faster timing #
scriptreplay -d 5 typescript timing.log

# Create a slow-motion replay for detailed viewing #
scriptreplay -s 3.0 -t timing.log typescript

# Fast-forward through a long session #
scriptreplay -s 0.1 -t timing.log typescript

# Replay a recording with custom timing multiplier #
scriptreplay -m 0.75 -t timing.log typescript

# Output the replay with timing data to stderr #
scriptreplay -T typescript

# Replay using standard streams #
cat typescript | scriptreplay -t timing.log

# Replay and redirect output to another terminal #
scriptreplay -t timing.log typescript > /dev/pts/5

# Check timing file format before replay #
head -5 timing.log

# Replay with verification #
| scriptreplay -T typescript timing.log 2>&1 | grep -E "time | delay" |

# Create a presentation from recorded session #
scriptreplay -s 1.0 -t timing.log typescript

# Replay for demonstration purposes with custom speed #
scriptreplay -s 0.75 demo_typescript timing_demo.log

# Slow replay for educational purposes #
scriptreplay -s 5.0 lesson_typescript timing.log

# Fast replay for quick review #
scriptreplay -s 0.2 review_typescript timing.log

# Replay to check for errors in original session #
scriptreplay typescript timing.log 2>&1 | grep -i error

# Compare timing between different recordings #
scriptreplay -T -t timing1.log typescript1 > /tmp/replay1.log
scriptreplay -T -t timing2.log typescript2 > /tmp/replay2.log
diff /tmp/replay1.log /tmp/replay2.log

# Replay with different output formatting #
scriptreplay -s 1.0 -t timing.log typescript | tee replay_output.txt

# Replay and log to file while showing on screen #
scriptreplay -s 1.0 -t timing.log typescript | tee -a replay_session.log

# Use different timing files with same typescript #
scriptreplay -t fast_timing.log typescript  # Fast replay
scriptreplay -t slow_timing.log typescript  # Slow replay

# Replay specific part of a recording (would need to extract first) #
# Extract part of typescript and timing files, then replay #

# Loop a replay multiple times #
for i in {1..3}; do
  echo "Replay $i:"
  scriptreplay -s 1.0 -t timing.log typescript
done

# Conditionally replay based on timing file presence #
if [ -f timing.log ]; then
  scriptreplay -t timing.log typescript
else
  scriptreplay typescript
fi

# Replay in a new terminal window #
gnome-terminal -e "scriptreplay typescript timing.log" &

# Speed-adjusted replay for different audiences #
scriptreplay -s 0.5 typescript timing.log  # For experts (faster)
scriptreplay -s 3.0 typescript timing.log  # For beginners (slower)

# Replay with timing analysis #
scriptreplay -T -t timing.log typescript 2>&1 | awk '{sum += $1} END {print "Total duration:", sum, "seconds"}'

# Replay and capture errors only #
| scriptreplay -t timing.log typescript 2>&1 | grep -i "error\ | fail\ | critical" |

# Replay with custom terminal settings #
stty cols 120 rows 40 && scriptreplay -t timing.log typescript

# Replay and capture specific information #
scriptreplay -t timing.log typescript | grep -E "^[0-9]+ [0-9]+"

# Create time-lapse replay #
scriptreplay -s 0.01 -t timing.log typescript

# Replay with progress monitoring #
scriptreplay -T -t timing.log typescript 2>&1 | while read -r line; do
  echo "Replaying: $line"
  # Could add progress indicators here
done

# Replay across different systems while maintaining timing #
scriptreplay -s 1.0 -t timing.log typescript

# Combine replay with other tools #
scriptreplay -t timing.log typescript | head -20

# Replay and check for specific outcomes #
scriptreplay -t timing.log typescript | if grep -q "success"; then
  echo "Session completed successfully"
fi

# Replay for automated testing validation #
expected_output="success message"
actual_output=$(scriptreplay -t timing.log typescript | grep "success")
if [ "$expected_output" = "$actual_output" ]; then
  echo "Test passed"
else
  echo "Test failed"
fi

# Replay with different speed based on content type #
if grep -q "processing\|compilation" timing.log; then
  scriptreplay -s 0.5 -t timing.log typescript  # Fast-forward during processing
else
  scriptreplay -s 1.0 -t timing.log typescript  # Normal speed
fi

# Replay for demonstration with pauses #
scriptreplay -t timing.log typescript
read -p "Press Enter to continue to next section..."

# Create multiple replay speeds for the same session #
for speed in 0.25 0.5 1.0 2.0 5.0; do
  echo "Playing at ${speed}x speed:"
  scriptreplay -s $speed -t timing.log typescript
  echo "------------------------"
done

# Replay with timing verification #
if [ $(head -1 timing.log | awk '{print $1}') ]; then
  echo "Timing file appears valid"
  scriptreplay -t timing.log typescript
else
  echo "Timing file may be corrupted"
fi

# Replay and log statistics #
scriptreplay -T -t timing.log typescript 2>&1 | awk '{count++; sum+=$1} END {print "Commands:", count, "Avg delay:", sum/count, "s"}'

# Replay with custom output handling #
| scriptreplay -t timing.log typescript 2>/dev/null | grep --color=always -E "(error | success | warning)" |

# Use in a script to replay multiple recordings #
for ts_file in *.typescript; do
  timing_file="${ts_file%.typescript}.timing"
  if [ -f "$timing_file" ]; then
    echo "Replaying $ts_file with $timing_file"
    scriptreplay -t "$timing_file" "$ts_file"
  fi
done

# Replay with external control (pause/resume capability) #
# Would require more complex wrapper script with signal handlers #

# Replay for documentation purposes with timestamp #
echo "Replay started at: $(date)"
scriptreplay -t timing.log typescript
echo "Replay ended at: $(date)"

# Create highlights reel from long session #
# Would need to identify interesting parts of timing/typescript and create subsets #

# Replay for security audit #
| scriptreplay -t timing.log typescript | grep -E "(sudo | root | password | secret)" |

# Replay with performance metrics #
time scriptreplay -t timing.log typescript

# Replay to different output targets #
scriptreplay -t timing.log typescript > /dev/null  # Silent replay (just timing)

# Replay and validate against requirements #
scriptreplay -t timing.log typescript | grep -c "requirement_met"

# Replay with conditional interruptions #
scriptreplay -t timing.log typescript | while read -r line; do
  if echo "$line" | grep -q "critical_point"; then
    read -p "Critical point reached. Continue? " -n 1 -r
    echo
    [ ! $REPLY =~ ^[Yy](/%20!%20$REPLY%20=~%20^[Yy.md) && exit 1
  fi
  echo "$line"
done

# Replay with custom formatting based on timing #
scriptreplay -T -t timing.log typescript 2>&1 | awk '$1 > 5 {print "Long delay:", $0} $1 < 0.1 {print "Quick response:", $0}'

# Speed-variable replay based on delay magnitude #
# Process timing file to adjust replay speed dynamically #

# Replay with annotation overlay #
# Would require more complex script to overlay notes at specific times #

# Replay for remote demonstration #
# Combine with SSH or streaming technology to show remotely #

# Replay for troubleshooting #
scriptreplay -t timing.log typescript | grep -A 5 -B 5 "error"

# Replay with custom terminal appearance #
echo -e "\033[2J\033[H"  # Clear screen
scriptreplay -t timing.log typescript

# Replay session with automatic scrolling #
scriptreplay -t timing.log typescript | less

# Replay and count specific events #
scriptreplay -t timing.log typescript | grep -c "event_type"

# Replay with sound alerts for specific events #
scriptreplay -t timing.log typescript | while read -r line; do
  echo "$line"
| if echo "$line" | grep -q "warning\ | error"; then |
    echo -e "\a"  # Terminal bell
  fi
done

# Replay with concurrent monitoring #
scriptreplay -t timing.log typescript &
top -b -n 10 &  # Monitor system during replay
wait

# Replay with concurrent logging #
scriptreplay -t timing.log typescript 2>&1 | tee replay_with_timestamps.log

# Replay session and track resource usage #
{ scriptreplay -t timing.log typescript & } && { iostat -c 1 $(pgrep scriptreplay); wait; }

# Conditional replay based on system state #
if [ $(nproc) -ge 4 ]; then
  scriptreplay -t timing.log typescript  # Full replay on powerful systems
else
  scriptreplay -s 0.5 -t timing.log typescript  # Accelerated on less powerful systems
fi

# Replay with custom error handling #
if scriptreplay -t timing.log typescript; then
  echo "Replay completed successfully"
else
  echo "Replay encountered an issue"
fi

# Replay in different terminal sizes #
for size in "80x25" "120x40" "160x60"; do
  echo "Testing with terminal size: $size"
  # Would need to adjust terminal size before replay
  scriptreplay -t timing.log typescript
done

# Create replay summary #
{
  echo "Replay Summary: $(date)"
  echo "Duration: $(awk 'BEGIN{sum=0} {sum+=$1} END{print sum}' timing.log)s"
  scriptreplay -t timing.log typescript
} > replay_summary.txt

# Replay with interrupt handling #
trap 'echo "Replay interrupted"; exit' INT TERM
scriptreplay -t timing.log typescript

# Replay and compare with expected output #
scriptreplay -t timing.log typescript > actual_output.txt
diff expected_output.txt actual_output.txt

# Replay with custom speed based on time of day #
current_hour=$(date +%H)
if [ $current_hour -ge 9 ] && [ $current_hour -le 17 ]; then
  scriptreplay -s 1.0 -t timing.log typescript  # Normal speed during work hours
else
  scriptreplay -s 0.5 -t timing.log typescript  # Faster speed off-hours
fi

# Batch replay multiple session recordings #
for session in session_*.typescript; do
  timing="${session%.typescript}.timing"
  if [ -f "$timing" ]; then
    echo "=== Replaying $session ==="
    scriptreplay -t "$timing" "$session"
    echo "=== End of $session ==="
  fi
done

# Replay with progress estimation #
total_time=$(awk 'BEGIN{sum=0} {sum+=$1} END{print sum}' timing.log)
echo "Estimated replay duration: $total_time seconds"
scriptreplay -t timing.log typescript

# Replay for automated quality assurance #
scriptreplay -t timing.log typescript | awk 'length > 80 {print "Wide line:", NR, $0}'

# Replay with network monitoring #
# Start network monitoring in background, replay, then stop monitoring #

```

## FAQ ##

### What Is The Difference Between Script And Scriptreplay? ###

- `script` - Records a terminal session (creates typescript and timing file)
- `scriptreplay` - Plays back a recorded terminal session (reads typescript and timing file)

Together, they allow you to record demonstrations and replay them with original timing.

### How Do I Create A Recording To Replay? ###

First, create a recording using `script`:

```bash
# Record with timing information #
script -T timing.log session_recording.txt
# Conduct your session #
# Exit the script session #
exit

# Then replay it: #
scriptreplay -t timing.log session_recording.txt

```

### Can I Replay Without The Timing File? ###

Yes, but the timing and pacing of the original session will be lost:

```bash
cat typescript
# Or if you want to use scriptreplay specifically #
scriptreplay typescript  # Will issue a warning about timing file

```

### How Do I Speed Up Or Slow Down A Replay? ###

Use the `-s` flag with a scale factor:

```bash
# Play at 2x speed (faster) #
scriptreplay -s 0.5 -t timing.log typescript

# Play at 0.5x speed (slower) #
scriptreplay -s 2.0 -t timing.log typescript

# Play with no delays between commands #
scriptreplay -s 0 -t timing.log typescript

```

### What Format Should My Timing File Be In? ###

The timing file contains lines with two numbers:

- First number: elapsed seconds since the start of the recording
- Second number: number of bytes to output from the typescript file

For example:

```bash
0.000000 57
0.001234 105
5.234567 10

```

### Can Scriptreplay Be Used For Automated Testing? ###

Yes! Scriptreplay can be used in automated testing to:

- Verify that command sequences produce expected outputs
- Demonstrate correct system behavior
- Replay known good procedures for comparison with current behavior
- Create regression tests from recorded successful operations

Use in combination with diff and grep to compare replay output with expected results.
