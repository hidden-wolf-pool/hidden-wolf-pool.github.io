# `reboot` #

- **Purpose:** The `reboot` command is used to restart the system, initiating a complete shutdown sequence followed by a restart. It's a system administration command that safely stops all running processes, unmounts filesystems, and powers cycles the system in a controlled manner. The reboot command is part of the systemd suite on modern Linux systems and ensures a more graceful restart than directly cutting power. It can also be used to boot into different runlevels, with different kernels, or to switch between different operating systems in multi-boot environments.
- **Usage:** `reboot [OPTIONS]`

## Basic Usage ##

Reboot the system immediately:

```bash
sudo reboot

```

Reboot with a message to logged-in users:

```bash
sudo reboot "System update installation"

```

Power off the system instead of rebooting:

```bash
sudo reboot -p

```

Reboot and force filesystem check:

```bash
sudo reboot --force --firmware-setup

```

Reboot to a specific boot entry:

```bash
sudo reboot --boot-loader-entry=entry-name

```

Schedule reboot after delay:

```bash
shutdown -r +5 "Scheduled reboot in 5 minutes"

```

Reboot without syncing filesystems (emergency, dangerous):

```bash
sudo reboot -f

```

## Options ##

- `-f` — Force reboot, don't call shutdown(8)
- `-i` — Shutdown network interfaces before reboot
- `-p` — Power off after reboot (implies -f)
- `-w` — Don't reboot, just write wtmp record
- `-d` — Don't write the wtmp record
- `--help` — Show help and exit
- `--version` — Show version and exit
- `--force` — Force reboot without calling shutdown
- `--firmware-setup` — Reboot into firmware setup (UEFI systems)
- `--kexec` — Use kexec to reboot into new kernel
- `--no-wall` — Don't send warning message to all users

## Shortcuts ##

Common reboot operations:

```bash
# Standard reboot #
sudo reboot

# Reboot with message #
sudo reboot "Applying system updates"

# Power off system instead of rebooting #
sudo reboot -p

# Schedule reboot for later #
sudo shutdown -r 15:00 "Scheduled restart"

# Cancel scheduled reboot #
sudo shutdown -c

# Reboot to firmware setup (UEFI systems) #
sudo reboot --firmware-setup

# Use kexec for faster reboot (if kernel supports) #
sudo reboot --kexec

# Reboot immediately without sync (emergency use only) #
sudo reboot -f

# Schedule reboot for specific time #
sudo shutdown -r 2024-01-15 02:00 "Automatic maintenance reboot"

# Reboot after running system maintenance #
apt update && apt upgrade -y && sudo reboot

# Reboot after kernel update #
apt install linux-image-generic && sudo reboot

# Schedule reboot for 5 minutes from now #
sudo shutdown -r +5 "System reboot in progress"

# Reboot with different kernel parameters (would need adjustment in bootloader) #
# Modify GRUB configuration first, then reboot #

# Check for pending reboots after updates #
[ -f /var/run/reboot-required ] && sudo reboot

# Reboot only if system has been up for more than 30 days #
uptime_seconds=$(cat /proc/uptime | awk '{print int($1)}')
if [ $uptime_seconds -gt 2592000 ]; then
  sudo reboot "System restart for maintenance"
fi

# Reboot after verifying conditions #
if [ "$(systemctl is-system-running)" == "running" ]; then
  sudo reboot "Verified system state - safe to reboot"
fi

# Graceful reboot with service cleanup #
systemctl stop services && sync && sudo reboot

# Reboot with network interface shutdown #
sudo reboot -i

# Reboot with no wall broadcast #
sudo reboot --no-wall

# Schedule reboot and notify users #
wall "System will reboot in 10 minutes for maintenance"
sleep 600
sudo reboot

# Reboot with specific kernel (using boot options) #
# Would require modifying bootloader settings before reboot #

# Reboot and boot to single-user mode #
# Use systemctl reboot -- --single at boot prompt #

# Reboot after backup completes #
backup_script.sh && [ $? -eq 0 ] && sudo reboot

# Reboot to rescue mode #
sudo systemctl reboot -- --rescue

# Reboot with emergency services only #
sudo systemctl reboot -- --emergency

# Reboot after hardware changes #
sudo reboot "Reboot after hardware changes"

# Conditionally reboot if needed #
if [ -f /var/run/reboot-required ]; then
  sudo reboot "Kernel update requires reboot"
fi

# Reboot after container cleanup #
docker system prune -a -f && sudo reboot

# Reboot after disk cleanup #
find /tmp -type f -atime +7 -delete && sudo reboot

# Reboot with hardware diagnostics #
# Depends on system support, might be vendor-specific #

# Reboot and skip some initialization #
# Requires kernel parameter changes #

# Schedule reboot after update script #
update_script.sh && if [ $? -eq 0 ]; then
  sudo reboot "Updates applied successfully"
fi

# Reboot with log sync #
sync && logger "Initiating system reboot" && sudo reboot

# Reboot after configuration changes #
systemctl daemon-reload && sudo reboot

# Reboot to activate new modules #
modprobe mymodule && sudo reboot

# Reboot after file system changes #
mount -o remount,rw / && sudo reboot

# Reboot after user sessions end #
while [ $(who | wc -l) -gt 0 ]; do
  sleep 30
done
sudo reboot "All users logged out"

# Reboot after specific process completes #
while pgrep -x "long_process" > /dev/null; do
  sleep 10
done
sudo reboot "Process completed, rebooting"

# Reboot after checking dependencies #
if systemctl is-active --quiet service1 && systemctl is-active --quiet service2; then
  sudo reboot "Services active, can reboot safely"
fi

# Reboot after temperature checks #
| current_temp=$(sensors | grep -m1 "Core 0" | awk '{print $3}' | tr -d "+°C") |
| if [ $(echo "$current_temp > 70" | bc) -eq 1 ]; then |
  echo "Temperature high, scheduling reboot after cooldown"
  sleep 300 && sudo reboot "Thermal management"
fi

# Reboot after package installation #
apt install new_package && apt autoremove && sudo reboot

# Reboot after security audit #
if ! systemctl --failed --quiet; then
  sudo reboot "System audit passed - rebooting"
fi

# Reboot with maintenance schedule #
at 2am tomorrow << EOF
sudo reboot "Scheduled maintenance reboot"
EOF

# Reboot after running diagnostics #
diagnostic_script.sh && if grep -q "needs_reboot" results.txt; then
  sudo reboot "System issues detected requiring reboot"
fi

# Emergency reboot (last resort) #
# sudo reboot -f (if normal reboot hangs) #

# Reboot and clear memory #
sync && echo 3 > /proc/sys/vm/drop_caches && sudo reboot

# Reboot after file integrity check #
if aide --check | grep -q "found differences"; then
  sudo reboot "Security changes detected requiring reboot"
fi

# Reboot with custom parameters through shutdown #
shutdown -r now "Custom reboot command used"

# Reboot as part of deployment process #
deploy_application.sh && if [ $? -eq 0 ]; then
  sudo reboot "Deployment complete"
fi

# Reboot after filesystem check #
fsck -f /dev/sda1 && sudo reboot "Filesystem check completed"

# Reboot after memory stress test #
stress-ng --vm 2 --vm-bytes 50% --timeout 60s && sudo reboot "Memory test completed"

# Reboot after network tests #
ping -c 10 google.com && sudo reboot "Network tests passed"

# Reboot after hardware verification #
if [ -d /sys/class/dmi/id ]; then
  sudo reboot "Hardware verification complete"
fi

# Reboot after system cleanup #
rm -rf /tmp/old_logs/* && sudo reboot "Cleanup completed"

# Reboot after database maintenance #
mysql -e "OPTIMIZE TABLE logs" && sudo reboot "DB maintenance complete"

# Reboot after system monitoring #
sar -u 1 300 | awk '$4 < 10 {exit 1} END {if(NR==300) exit 0; else exit 1}' && sudo reboot

# Reboot after application verification #
if curl -s http://localhost:8080/health | grep -q "healthy"; then
  sudo reboot "Application healthy - proceeding with reboot"
fi

# Reboot as part of automated update process #
| if apt list --upgradable 2>/dev/null | grep -v "Listing..." | grep -q "linux-image"; then |
  sudo reboot "Linux kernel update requires reboot"
fi

```

## FAQ ##

### What Is The Difference Between Reboot, Shutdown -r, And Init 6? ###

- `reboot` - Direct command to restart, uses systemd on modern systems
- `shutdown -r` - Schedule a reboot, provides more control and user warnings
- `init 6` - Legacy SysV init command to restart the system
- `systemctl reboot` - systemd command to reboot (modern equivalent to reboot)

On most modern systems, `reboot` and `systemctl reboot` are equivalent.

### How Do I Schedule A Reboot For Later? ###

Use the shutdown command:

```bash
sudo shutdown -r +10 "Reboot in 10 minutes"
sudo shutdown -r 18:00 "Reboot at 6 PM"
sudo shutdown -r 2024-01-15 02:00 "Reboot on specific date/time"

```

### How Do I Cancel A Scheduled Reboot? ###

If you scheduled a reboot with shutdown:

```bash
sudo shutdown -c

```

This cancels any scheduled shutdown or reboot operation.

### What Happens During A Reboot Sequence? ###

During a reboot, the system performs these steps:

1. Sends warning signals to all processes
2. Stops all services in a controlled manner
3. Syncs all filesystems to ensure no data is lost
4. Unmounts all mounted filesystems
5. Powers down the system and restarts it

### Can I Reboot Into Firmware Setup? ###

On UEFI systems, you can reboot directly into firmware setup:

```bash
sudo reboot --firmware-setup

```

This option may not be available on all systems.

### How Do I Check If A Reboot Is Required After Updates? ###

Many systems create a file when a reboot is needed:

```bash
# On Debian/Ubuntu systems #
ls -la /var/run/reboot-required

# Check the reboot-required file content #
cat /var/run/reboot-required

# Alternative: check for running outdated kernel #
uname -r  # Current running kernel
| dpkg --list | grep linux-image | grep ^rc  # Check for old kernels |

```
