# `dmesg` #

- **Purpose:** Dmesg is a command-line utility that displays the kernel ring buffer messages. These messages contain information from the kernel about hardware, drivers, system events, errors, and warnings during the system boot process and runtime. Dmesg is essential for troubleshooting hardware issues, verifying driver loading, and diagnosing system problems related to kernel operations and hardware compatibility.
- **Usage:** `dmesg [OPTIONS]`

## Basic Usage ##

Display all kernel messages:

```bash
dmesg

```

Display human-readable timestamps:

```bash
dmesg -T

```

Display messages with relative timestamps:

```bash
dmesg -r

```

Clear the kernel ring buffer:

```bash
sudo dmesg -C

```

Display messages with color coding:

```bash
dmesg --color=always

```

Decode hardware information in messages:

```bash
dmesg -x

```

Read messages from a file:

```bash
dmesg -f /path/to/file

```

Filter messages by priority level:

```bash
dmesg --level=err,warn

```

Filter messages by facility:

```bash
dmesg --facility=kern

```

## Options ##

- `-C` — Clear the kernel ring buffer
- `-c` — Clear the kernel ring buffer after printing it
- `-D` — Disable the kernel messages from appearing on the console
- `-E` — Enable the kernel messages to appear on the console
- `-F` — Read kernel log messages from a file
- `-H` — Print human-readable output with prefixes
- `-k` — Display kernel messages (default)
- `-L` — Print human-readable output with prefixes
- `-l` — Set the level of messages to print
- `-n` — Set the console log level
- `-P` — Do not decode facility and level
- `-r` — Print the raw message buffer
- `-S` — Sort the output
- `-s` — Buffer size to be used when reading kernel messages
- `-T` — Print human-readable timestamps
- `-t` — Print only the message, not the log stamp
- `-u` — Output the messages from userspace
- `-w` — Wait for new messages
- `-x` — Decode facility and level to readable text
- `--color` — Color-code the output

## Shortcuts ##

Common dmesg operations:

```bash
# Display last 20 kernel messages #
dmesg | tail -20

# Show messages with timestamps since boot #
dmesg -T

# Show only error messages #
dmesg --level=err

# Show only warning messages #
dmesg --level=warn

# Show only critical messages #
dmesg --level=alert,crit,err

# Show messages with decoded facility/level info #
dmesg -x

# Follow messages in real-time (like tail -f) #
dmesg -w

# Show messages from a specific time #
dmesg -T | grep "Jan 12"

# Search for specific hardware in messages #
dmesg | grep -i usb
dmesg | grep -i network
dmesg | grep -i disk

# Show messages in color #
dmesg --color=always

# Filter by specific facility #
dmesg --facility=kern

# Show messages with human-readable timestamps #
dmesg -T | grep -i "boot"

# View in pager with highlighting #
| dmesg | grep --color=always -i error | less -R |

# Save messages to file #
dmesg > boot_messages.txt

# Save messages with timestamps #
dmesg -T > timestamped_boot_messages.txt

# Compare current and saved log #
dmesg > current.log
# Later: #
dmesg > new.log
diff current.log new.log

# Watch for new messages in real-time #
dmesg -wH

# Show messages with specific level and human-readable format #
dmesg -H --level=err,warn

# Count number of error messages #
dmesg --level=err | wc -l

# Show hardware-specific messages #
dmesg -x | grep -i hardware

# Show network-related messages #
| dmesg | grep -iE "(eth | network | bond | wlan)" |

# Show disk/block device messages #
| dmesg | grep -iE "(sd | hd | nvme | mmcblk)" |

# Show messages during specific time window #
dmesg -T | sed -n '/Jan 12 10:25:/,/Jan 12 10:30:/p'

# Clear and start fresh log #
sudo dmesg -C

# Export messages with human-readable timestamps #
dmesg -T > /tmp/boot_$(date +%Y%m%d_%H%M%S).log

# Filter and highlight important events #
| dmesg | grep -E --color=always "(error | critical | failed | warning | fatal)" |

# Show memory-related messages #
dmesg | grep -i memory

# Show CPU-related messages #
dmesg | grep -i cpu

# Show IRQ-related messages #
dmesg | grep -i irq

# Show USB-related messages #
dmesg | grep -i usb

# Show PCI-related messages #
dmesg | grep -i pci

# Show filesystem-related messages #
| dmesg | grep -iE "(ext3 | ext4 | xfs | btrfs | vfat)" |

# Show messages in reverse chronological order #
dmesg -T | tac

# Show only messages that match a pattern with context #
dmesg -C | grep -A5 -B5 -i "pattern"

# Limit output to last N characters #
dmesg | tail -c 10000

# Show output with line numbers #
dmesg | nl

# Show messages with relative time (seconds since boot) #
dmesg -r

# Combine with other tools for analysis #
dmesg | awk '$3 >= 1000 {print}'  # Messages after 1000 seconds

# Output in structured format #
dmesg -x --raw

# Monitor for specific device events #
| dmesg -w | grep -i "device added\ | removed" |

# Show only userspace messages #
dmesg -u

# Show only kernel messages (explicit) #
dmesg -k

# Show messages sorted by timestamp #
dmesg -T | sort

# Show messages with decoded level but without facility decoding #
dmesg -l

# Monitor system with conditional actions triggered by messages #
dmesg -w | while read line; do
  if echo "$line" | grep -q "error"; then
    echo "Error detected: $line"
  fi
done

# Export specific message types to different files #
dmesg --level=err > errors.log
dmesg --level=warn > warnings.log
dmesg --level=info > info.log

# Check message buffer size #
dmesg -s

# Adjust console log level (requires root) #
sudo dmesg -n 1  # Only emergency messages to console

# Show messages with human-readable output #
dmesg -H

# Show messages in machine-readable format #
dmesg --raw

# Combine with journalctl for comprehensive logging #
dmesg -T && journalctl --since "1 hour ago"

# Parse and format for scripts #
dmesg -r | awk '{print $1, $NF}'  # Timestamp and message

# Show hardware initialization messages #
| dmesg | grep -E "probed | detected | initialized | driver" |

# Highlight important boot events #
| dmesg -T | grep -E --color=always "(started | ready | up | boot)" |

# Export messages with specific formatting #
dmesg --decode-facility | grep -i error

# Count messages by level #
| dmesg -x | awk '{print $4}' | cut -d: -f1 | sort | uniq -c |

# Monitor for system crashes or panics #
| dmesg | grep -i -E "(panic | oops | segfault | killed)" |

# Check for hardware conflicts #
| dmesg | grep -i -E "(conflict | collision | overlap)" |

# Show messages during boot sequence #
dmesg -T | head -50

```

## FAQ ##

### How Do I View Kernel Messages In Real-Time? ###

Use the following command to monitor messages as they occur:

```bash
dmesg -w

```

This will continuously display new kernel messages as they are generated, similar to `tail -f`.

### How Do I Clear The Kernel Message Buffer? ###

Use the `-C` flag to clear the buffer (requires root privileges):

```bash
sudo dmesg -C

```

### What Is The Difference Between Dmesg And Journalctl? ###

- `dmesg` - Shows only kernel ring buffer messages
- `journalctl` - Shows system logs from systemd journal, including user-space messages

For kernel messages specifically, use `dmesg`. For broader system logging, use `journalctl`.

### How Do I Filter Messages By Severity Level? ###

Use the `--level` option to filter by priority:

```bash
# Show only errors and warnings #
dmesg --level=err,warn

# Common levels: emerg, alert, crit, err, warn, notice, info, debug #

```

### How Do I Save Dmesg Output With Timestamps? ###

```bash
# With human-readable timestamps #
dmesg -T > kernel_messages.log

# With relative timestamps since boot #
dmesg -r > kernel_messages_relative.log

```

### What Does The -x Option Do? ###

The `-x` option decodes message facility and priority levels to human-readable text, showing the actual meaning of the numeric codes in the messages. This makes it easier to understand what type of message each entry represents (for example, error, warning, info).
