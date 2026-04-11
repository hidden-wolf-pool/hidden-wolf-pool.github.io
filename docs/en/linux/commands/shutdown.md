# `shutdown` #

- **Purpose:** The `shutdown` command is used to shut down, halt, or reboot the system at a specified time. It's a system administration command that provides a safe and controlled method to power off or restart the system, ensuring that all running processes are properly terminated, file systems are synced, and hardware is properly shut down. The command allows administrators to schedule shutdowns, send warning messages to users, cancel scheduled shutdowns, and perform various power management operations. It's safer than directly powering off the system as it properly handles the shutdown sequence and notifies logged-in users.
- **Usage:** `shutdown [OPTIONS] [TIME] [MESSAGE...]`

## Basic Usage ##

Shut down the system immediately:

```bash
sudo shutdown now

```

Shut down the system in 5 minutes:

```bash
sudo shutdown +5

```

Reboot the system immediately:

```bash
sudo shutdown -r now

```

Halt the system (shutdown to power-off):

```bash
sudo shutdown -h now

```

Power off the system (same as halt on most systems):

```bash
sudo shutdown -P now

```

Cancel a scheduled shutdown:

```bash
sudo shutdown -c

```

Schedule a shutdown at a specific time:

```bash
sudo shutdown 14:00

```

Schedule a shutdown with a message to users:

```bash
sudo shutdown +10 "System maintenance in 10 minutes"

```

## Options ##

- `-h` — Halt the system (power off)
- `-r` — Reboot after shutdown
- `-k` — Don't actually shut down, only send warning messages
- `-c` — Cancel a scheduled shutdown
- `-f` — Skip filesystem check on reboot
- `-F` — Force filesystem check on reboot
- `-P` — Power off after shutdown (implies -h)
- `-H` — Halt after shutdown (halt poweroff)
- `-n` — Don't call shutdown(8) (deprecated)
- `--no-wall` — Don't send warning message to all users

## Shortcuts ##

Common shutdown operations:

```bash
# Immediate shutdown #
sudo shutdown -h now

# Immediate reboot #
sudo shutdown -r now

# Shutdown in 1 hour #
sudo shutdown +60

# Shutdown at specific time (24-hour format) #
sudo shutdown 18:30

# Shutdown with message to users #
sudo shutdown -h +10 "Scheduled maintenance"

# Reboot in 5 minutes with message #
sudo shutdown -r +5 "Applying updates"

# Schedule shutdown for tomorrow #
sudo shutdown -h 16:00 tomorrow

# Schedule shutdown for specific date #
sudo shutdown -r 22:00 2024-01-01

# Cancel scheduled shutdown #
sudo shutdown -c

# Schedule shutdown but only warn (don't actually shut down) #
sudo shutdown -k +10 "Maintenance window"

# Reboot and skip filesystem check #
sudo shutdown -r -f now

# Halt without powering off (stop at boot loader) #
sudo shutdown -H now

# Power off without using ACPI (direct hardware poweroff) #
sudo shutdown -P now

# Shutdown with broadcast message to all logged in users #
sudo shutdown +30 "Daily system update"

# Test shutdown warning only (without actual shutdown) #
sudo shutdown -k +5 "System test - not actually shutting down"

# Emergency shutdown (if system is responsive) #
sudo shutdown -h now "Emergency shutdown"

# Schedule recurring maintenance (would require cron) #
# Add to crontab: 0 2 * * 0 /sbin/shutdown +5 "Weekly maintenance" #

# Shutdown after running maintenance tasks #
sudo apt update && sudo apt upgrade -y && sudo shutdown -h +5

# Send notification before shutdown #
echo "System going down for maintenance" | wall
sudo shutdown +10 "Maintenance in progress"

# Schedule shutdown with multiple messages #
sudo shutdown -h +15 "Maintenance in 15 minutes" && \
echo "System will shutdown in 15 minutes" | wall

# Shutdown with confirmation #
read -p "Really shutdown? (y/N): " -n 1 -r
echo
[ $REPLY =~ ^[Yy](/%20$REPLY%20=~%20^[Yy.md) && sudo shutdown now

# Delayed cancellation of shutdown #
sudo shutdown +10 "Temporary shutdown scheduled"
sleep 30
sudo shutdown -c  # Cancel if conditions change

# Shutdown if battery is low (with acpi) #
| if [ $(acpi -b | grep -o "[0-9]*%" | cut -d% -f1) -lt 10 ]; then |
  sudo shutdown -h now "Battery critically low"
fi

# Conditional shutdown based on system load #
| load_avg=$(uptime | awk -F'load average:' '{print $2}' | awk '{print $1}' | sed 's/,//') |
| if (( $(echo "$load_avg < 0.5" | bc -l) )); then |
  sudo shutdown -h +5 "Light system load - safe shutdown time"
fi

# Check shutdown status #
who -b

# Schedule shutdown from a script #
#!/bin/bash
if [ "$1" = "maintenance" ]; then
  echo "Scheduling maintenance shutdown"
  sudo shutdown -h +10 "Maintenance mode"
fi

# Shutdown after backup completes #
backup_script.sh && sudo shutdown -h now "Backup completed"

# Shutdown as part of a sequence #
sudo systemctl stop services && sudo sync && sudo shutdown -h now

# Reboot and perform system checks #
sudo shutdown -r -F now

# Shutdown and wake up at specific time (if supported by hardware) #
# sudo rtcwake -m off -t $(date +%s -d 'tomorrow 08:00') && shutdown -h now #
# (Would need rtcwake for scheduled wake-up) #

# Shutdown with pre-shutdown script execution #
# Add custom scripts to /lib/systemd/system-shutdown/ or trap signals #

# Schedule reboot for late night hours #
sudo shutdown -r 02:00 "Overnight system update"

# Shutdown during maintenance window #
shutdown_time=$(curl -s "http://api.time.jsontest.com/" | grep -o "[0-9][0-9]:[0-9][0-9]")

# Verify system state before shutdown #
if [ $(systemctl is-system-running) = "running" ]; then
  sudo shutdown -h +15 "System appears stable"
fi

# Shutdown with service preemption #
sudo systemctl isolate maintenance.target && sudo shutdown -h +10

# Perform shutdown after user sessions end #
if [ -z "$(who | grep -v $(whoami))" ]; then  # No other users
  sudo shutdown -h 21:00 "No active users"
fi

# Remote shutdown (if SSH access is available) #
# ssh user@remote_host "sudo shutdown -h now" #

# Schedule shutdown based on system temperature #
| temp=$(sensors | grep -m 1 "Core 0" | awk -F '+' '{print $2}' | awk '{print $1}' | sed 's/°C//') |
| if (( $(echo "$temp > 80.0" | bc -l) )); then |
  sudo shutdown -h now "System temperature critical: $temp°C"
fi

# Scheduled reboot for kernel updates #
sudo shutdown -r +5 "Kernel update requires reboot"

# Shutdown with process monitoring #
while pgrep -x "important_process" > /dev/null; do
  sleep 10
done
sudo shutdown -h now

# Conditional reboot based on uptime #
uptime_seconds=$(cat /proc/uptime | awk '{print int($1)}')
if [ $uptime_seconds -gt 2592000 ]; then  # More than 30 days
  sudo shutdown -r +10 "System has been up too long"
fi

# Shutdown with filesystem sync #
sync && sudo shutdown -h now

# Check for running jobs before shutdown #
if [ $(jobs -r | wc -l) -eq 0 ]; then
  sudo shutdown -h now "No running jobs"
fi

# Shutdown with backup power considerations #
if [ -e /sys/class/power_supply/UPS ]; then
  battery_level=$(cat /sys/class/power_supply/UPS/capacity)
  if [ "$battery_level" -lt 20 ]; then
    sudo shutdown -h now "UPS battery low"
  fi
fi

# Check network connectivity before remote shutdown #
if ping -q -c 1 -W 1 google.com; then
  sudo shutdown -h now "Network operational - proceeding with shutdown"
fi

# Schedule shutdown after cron job completes #
# In crontab: 0 4 * * * /path/to/script.sh && shutdown -h now #

# Shutdown with time range restrictions #
current_hour=$(date +%H)
| if [ $current_hour -ge 22 ] | | [ $current_hour -le 6 ]; then |
  sudo shutdown -h now "After-hours maintenance"
fi

# Shutdown when specific condition is met #
while true; do
  if [ specific_condition ]; then
    sudo shutdown -h now "Condition met"
    break
  fi
  sleep 60
done

# Schedule shutdown with dependency checks #
if systemctl is-active --quiet service1 && systemctl is-active --quiet service2; then
  sudo shutdown -h now "Services are active - can shutdown safely"
fi

# Check disk space before shutdown #
| if [ $(df / | tail -1 | awk '{print $5}' | sed 's/%//') -gt 95 ]; then |
  sudo shutdown -h now "Disk nearly full - emergency shutdown"
fi

# Perform administrative reboot #
sudo shutdown -r +5 "Admin initiated reboot for maintenance"

# Shutdown with log entry #
logger "Shutdown scheduled by admin at $(date)" && sudo shutdown -h now

# Check for updates before rebooting #
if [ -n "$(apt list --upgradable 2>/dev/null | grep -v "^Listing")" ]; then
  sudo shutdown -r now "Updates available requiring reboot"
fi

# Graceful shutdown with service stoppage #
for service in service1 service2 service3; do
  sudo systemctl stop $service
done
sudo shutdown -h now

# Shutdown after system health checks #
if systemctl --failed --quiet; then
  sudo shutdown -h now "System has failed services - shutdown for repair"
fi

# Scheduled reboot with notification to specific users #
wall "System reboot scheduled in 10 minutes for updates"
sudo shutdown -r +10

# Emergency system halt without sync (only in emergencies) #
# sudo shutdown -h -n now (use if normal shutdown hangs) #

```

## FAQ ##

### What Is The Difference Between Shutdown -h, Shutdown -P, And Poweroff? ###

- `shutdown -h now` — Halt the system (stop all processes and halt the CPU)
- `shutdown -P now` — Power off the system (implies halt, then power off)
- `poweroff` — Directly power off the system (equivalent to shutdown -P now)

On most modern systems, `-h` and `-P` produce the same result (both power off).

### How Do I Schedule A Shutdown For Tomorrow? ###

Use the `tomorrow` keyword:

```bash
sudo shutdown -h 18:00 tomorrow

```

Or specify the date:

```bash
sudo shutdown -h 18:00 2024-01-15

```

### How Do I Cancel A Scheduled Shutdown? ###

Use the cancel flag:

```bash
sudo shutdown -c

```

This cancels any previously scheduled shutdown.

### What Happens If I Schedule A Shutdown But Users Are Logged In? ###

The shutdown command warns all logged-in users about the scheduled shutdown. Users are notified about the impending shutdown and can prepare accordingly. The system will proceed with shutdown regardless of active user sessions unless cancelled.

### Can I Schedule A Reboot Instead Of A Shutdown? ###

Yes, use the `-r` option:

```bash
sudo shutdown -r +10  # Reboot in 10 minutes
sudo shutdown -r 14:00  # Reboot at 2:00 PM
sudo shutdown -r now  # Reboot immediately

```

### How Do I Send A Message To Users During Shutdown? ###

Include a message after the time specification:

```bash
sudo shutdown -h +10 "System going down for maintenance"
sudo shutdown -r now "Applying critical updates"

```

Any message provided after the time will be broadcast to all logged-in users.
