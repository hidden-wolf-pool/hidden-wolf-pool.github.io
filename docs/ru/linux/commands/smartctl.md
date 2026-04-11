# `smartctl` #

- **Purpose:** SMARTCTL (Self-Monitoring, Analysis and Reporting Technology Control) is a command-line utility for controlling and monitoring storage systems using the SMART system. It works with hard disks, solid-state drives (SSDs), and other storage devices that support the SMART standard. The command allows users to retrieve device information, check health status, run self-tests, enable/disable SMART functionality, and monitor various attributes that predict drive failure. It's essential for preventive maintenance, system reliability assessment, and early detection of storage device problems before catastrophic failures occur.
- **Usage:** `smartctl [OPTIONS] DEVICE`

## Basic Usage ##

Check device SMART status:

```bash
sudo smartctl -H /dev/sda

```

Display general device information:

```bash
sudo smartctl -i /dev/sda

```

Show detailed SMART information:

```bash
sudo smartctl -a /dev/sda

```

Enable SMART capability:

```bash
sudo smartctl -s on /dev/sda

```

Run a short self-test:

```bash
sudo smartctl -t short /dev/sda

```

Run a long (extended) self-test:

```bash
sudo smartctl -t long /dev/sda

```

Show test results:

```bash
sudo smartctl -l selftest /dev/sda

```

Show error logs:

```bash
sudo smartctl -l error /dev/sda

```

## Options ##

- `-a` — Show all SMART information (equivalent to -iHlE -A -f on)
- `-i` — Show device identity information
- `-H` — Show the device SMART health status
- `-c` — Show device SMART capabilities
- `-A` — Show all SMART attributes from the device
- `-l` — Display SMART logs (error, selftest, selective)
- `-t` — Run self-test (short, long, conveyance, offline)
- `-s` — Enable/disable SMART (on/off)
- `-T` — Set SMART test tolerance (conservative/permissive/verypermissive)
- `-v` — Set vendor-specific output options
- `-d` — Specify device type
- `-n` — No check option (NEVER, SLEEP, STANDBY, IDLE)
- `-S` — Enable/disable autosave of attributes (on/off)
- `-o` — Enable/disable automatic offline testing (on/off)

## Shortcuts ##

Common smartctl operations:

```bash
# Show comprehensive device information #
sudo smartctl -a /dev/sda

# Show only health status #
sudo smartctl -H /dev/sda

# Check if SMART is enabled #
sudo smartctl -i /dev/sda | grep -i "SMART support"

# Enable SMART if disabled #
sudo smartctl -s on /dev/sda

# View temperature #
sudo smartctl -A /dev/sda | grep -i temp

# View wear leveling count for SSD #
sudo smartctl -A /dev/sda | grep -i wear

# Check power-on hours #
| sudo smartctl -A /dev/sda | grep -i "power_on_hours\ | power_cycle_count" |

# Run short test (typically 2-5 minutes) #
sudo smartctl -t short /dev/sda

# Run long test (can take hours) #
sudo smartctl -t long /dev/sda

# Monitor test progress #
sudo smartctl -c /dev/sda

# View test results #
sudo smartctl -l selftest /dev/sda

# View error log #
sudo smartctl -l error /dev/sda

# Show device capabilities #
sudo smartctl -c /dev/sda

# Test SSD endurance indicator #
| sudo smartctl -A /dev/sda | grep -E "(wear | percentage_used | life_left)" |

# Enable automatic offline testing #
sudo smartctl -o on /dev/sda

# Disable automatic offline testing #
sudo smartctl -o off /dev/sda

# Enable attribute autosave #
sudo smartctl -S on /dev/sda

# Check specific drive vendors' attributes #
sudo smartctl -v 0,ID /dev/sda

# Show selective self-test log #
sudo smartctl -l selective /dev/sda

# Test specific device type (SCSI) #
sudo smartctl -d scsi -a /dev/sda

# For NVMe drives #
sudo smartctl -d nvme -a /dev/nvme0n1

# Check for SSD vs HDD #
sudo smartctl -i /dev/sda | grep -i "rotation_rate"

# View all attributes with interpretations #
sudo smartctl -A -f show /dev/sda

# Show only potentially problematic attributes #
| sudo smartctl -A /dev/sda | grep -E "(Reallocated_Sector | Pending_Sector | Uncorrectable_Error_Count)" |

# Check for reallocated sectors (indication of drive problems) #
| sudo smartctl -A /dev/sda | grep "Reallocated_Sector\ | Reallocated_Event_Count" |

# Check pending sectors (awaiting reallocation) #
sudo smartctl -A /dev/sda | grep "Current_Pending_Sector"

# Check offline uncorrectable sectors #
sudo smartctl -A /dev/sda | grep "Offline_Uncorrectable"

# Monitor multiple drives #
for drive in /dev/sd[a-d]; do
  echo "Checking $drive:"
  sudo smartctl -H $drive
done

# Check multiple drives for critical attributes #
for drive in /dev/sd[a-d]; do
  echo "Drive $drive:"
| sudo smartctl -A $drive | grep -E "(Reallocated | Pending | Uncorrectable | Temperature)" | head -10 |
done

# Verify SMART capability across multiple drives #
for drive in /dev/sd[a-d]; do
  echo "SMART Support for $drive:"
| sudo smartctl -i $drive | grep -i "enabled\ | support" |
done

# Schedule tests using cron #
# Example crontab entry for weekly short test: #
# 0 2 * * 0 root /usr/sbin/smartctl -t short /dev/sda #

# Check drive for scheduled tests #
sudo smartctl -c /dev/sda

# Get vendor-specific information #
sudo smartctl -v 0,Vendor /dev/sda

# Test for specific error types #
| sudo smartctl -l error /dev/sda | grep -E "(error | failed | aborted)" |

# Show detailed test progress #
sudo smartctl -c /dev/sda | grep -i remaining

# Check drive for specific issues #
| sudo smartctl -A /dev/sda | grep -i "seek_error\ | spin_retry\ | endurance" |

# Monitor specific attributes over time #
| sudo smartctl -A /dev/sda | grep -E "^(1\ | 5\ | 9\ | 194\ | 197\ | 198\ | )" | head -10 |

# Check wear indicators on SSDs #
| sudo smartctl -A /dev/sda | grep -iE "wear | percentage | endurance | life" |

# Check drive usage status #
| sudo smartctl -A /dev/sda | grep -iE "(power_on_hour | load_cycle | start_stop)" |

# Check for temperature history #
sudo smartctl -A /dev/sda | grep -i temp
sudo smartctl -l scterc /dev/sda  # If supported

# Check for interface errors #
| sudo smartctl -A /dev/sda | grep -iE "(crc | error | hardware_ecc)" |

# Check for airflow temperature (if available) #
sudo smartctl -A /dev/sda | grep -i "airflow_temperature"

# Verify drive identity against system expectations #
| sudo smartctl -i /dev/sda | grep -E "(Model | Serial | Firmware | Capacity)" |

# Check for drive calibration issues #
| sudo smartctl -A /dev/sda | grep -i "calibration\ | retry" |

# Monitor drives in RAID configurations #
sudo smartctl -d sat -H /dev/sda  # SAT (SCSI to ATA Translation)

# Verify drive temperature over time #
| sudo smartctl -A /dev/sda | grep -i temperature | awk '{print "Current temp: " $10 "°C, Max: " $11 "°C"}' |

# Check for specific errors in logs #
| sudo smartctl -l error /dev/sda | grep -v "None\ | PASSED\ | OK" | grep -E "[0-9]+.*error\ | fail\ | critical" |

# Run vendor-specific tests if available #
sudo smartctl -v 1,VendorSpecificTest /dev/sda

# Check for drive self-monitoring capability #
| sudo smartctl -c /dev/sda | grep -i "self-test\ | capabilities" |

# Verify data integrity features #
| sudo smartctl -A /dev/sda | grep -iE "(ecc\ | error_correct\ | verify)" |

# Check for vibration tolerance (some enterprise drives) #
| sudo smartctl -A /dev/sda | grep -iE "(vibration\ | shock)" |

# Monitor wear leveling on flash-based storage #
| sudo smartctl -A /dev/sda | grep -i "wear_leveling\ | erase_fail_count" |

# Check for thermal throttling indicators #
| sudo smartctl -A /dev/sda | grep -iE "(thermal\ | throttling\ | temperature)" |

# Validate drive power management #
| sudo smartctl -A /dev/sda | grep -iE "(load_cycle | park_event | timer)" |

# Check for electrical issues #
| sudo smartctl -A /dev/sda | grep -iE "(voltage | current | power)" |

# Monitor for specific drive issues #
| sudo smartctl -A /dev/sda | grep -iE "(fly_height | slumber_timer | write_error)" |

# Check manufacturer's recommended maintenance #
sudo smartctl -l scttempsts /dev/sda  # If SCT Temperature supported

# Run custom analysis on SMART attributes #
sudo smartctl -A /dev/sda | awk '$4 > 0 && $10 > 0 {print $1 ": Raw value " $10 ", Threshold " $4}'

# Check for drive readiness issues #
| sudo smartctl -A /dev/sda | grep -i "retract\ | startup\ | ready" |

# Validate error correction status #
| sudo smartctl -A /dev/sda | grep -iE "(ecc_correct\ | retry_count | corrector)" |

# Monitor performance degradation indicators #
| sudo smartctl -A /dev/sda | grep -iE "(performance\ | speed | throughput)" |

# Check for interface stability #
| sudo smartctl -A /dev/sda | grep -iE "(interface\ | bus | link)" |

# Check for specific storage reliability indicators #
| sudo smartctl -A /dev/sda | grep -iE "(reliability\ | reserved\ | unused)" | head -5 |

# Run comparative analysis with previous logs #
# (Would require storing and comparing multiple smartctl outputs over time) #

# Export SMART data for external analysis #
sudo smartctl -a /dev/sda > smart_analysis_$(date +%Y%m%d_%H%M%S).txt

# Check all drives in system with one command #
for drive in /dev/sd? /dev/nvme*; do
  [ -b "$drive" ] && echo "--- $drive ---" && sudo smartctl -H "$drive"
done

# Automated drive monitoring script #
#!/bin/bash
DRIVES=$(ls /dev/sd? 2>/dev/null)
for DRIVE in $DRIVES; do
| HEALTH=$(smartctl -H $DRIVE | grep -i health | awk '{print $NF}') |
  if [ "$HEALTH" != "PASSED" ]; then
    echo "WARNING: Drive $DRIVE health status: $HEALTH"
  fi
done

# Check for drive-specific recommendations #
| sudo smartctl -c /dev/sda | grep -i "recommended\ | schedule\ | interval" |

# Validate drive's internal self-assessment #
sudo smartctl -t conveyance /dev/sda  # For transport/drop detection

# Monitor drive for specific environmental factors #
| sudo smartctl -A /dev/sda | grep -iE "(environmental\ | humidity\ | pressure)" |

# Check for secure erase support (SSDs) #
sudo smartctl -c /dev/sda | grep -i "secure"
sudo smartctl -A /dev/sda | grep -i "sanitize"

# Validate drive encryption status (if supported) #
| sudo smartctl -i /dev/sda | grep -i "encryption\ | fde\ | tcg" |

# Check for endurance limits #
| sudo smartctl -A /dev/sda | grep -iE "(endurance\ | limit\ | max)" |

```

## FAQ ##

### How Do I Check If My Drive Supports SMART? ###

First check device identity and capabilities:

```bash
sudo smartctl -i /dev/sda
sudo smartctl -c /dev/sda

```

Look for "SMART support" in the output to see if the feature is available and enabled.

### What Does A "PASSED" Health Status Mean? ###

A "PASSED" health status means that the drive's self-assessment indicates no immediate problems. However, it doesn't guarantee the drive is completely healthy or won't fail soon. Always check individual attributes as well, especially:

- Reallocated Sector Count
- Current Pending Sector Count
- Offline Uncorrectable
- Reallocation Event Count

### How Long Do SMART Self-Tests Take? ###

- `Short self-test` — Typically 2-5 minutes
- `Extended self-test` — Can take 1-2 hours depending on drive size and speed
- `Conveyance self-test` — Usually 5-10 minutes

Check progress with: `sudo smartctl -c /dev/sda`

### What Are The Most Important SMART Attributes To Monitor? ###

Critical attributes include:

- Attribute 5: Reallocated Sector Count (0 is good, increasing is bad)
- Attribute 187: Reported Uncorrectable Errors (should be 0)
- Attribute 188: Command Timeout (should be low)
- Attribute 197: Current Pending Sector Count (should be 0)
- Attribute 198: Offline Uncorrectable (should be 0)
- Attribute 190: Temperature (check manufacturer's recommended range)

### How Do I Schedule Regular SMART Tests? ###

Add to your crontab for automated testing:

```bash
# Weekly short test on Sundays at 2 AM #
0 2 * * 0 root /usr/sbin/smartctl -t short /dev/sda

# Monthly long test on first Sunday of every month #
0 2 * * 0 [ $(date +\%d) -le 07 ] && /usr/sbin/smartctl -t long /dev/sda

```

### Can I Use Smartctl On NVMe Drives? ###

Yes, but you need to specify the device type:

```bash
sudo smartctl -d nvme -a /dev/nvme0n1

```

NVMe drives have different SMART attributes than traditional SATA drives.
