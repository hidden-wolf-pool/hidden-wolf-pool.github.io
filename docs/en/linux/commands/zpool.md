# `zpool` #

- **Purpose:** The `zpool` command manages ZFS storage pools, which are collections of devices that provide physical storage and data replication for ZFS datasets. ZPool handles the creation, destruction, configuration, and maintenance of storage pools including operations like adding/removing devices, checking pool health, creating various RAID configurations, importing/exporting pools, and performing maintenance tasks like scrubbing. It's essential for storage administration in ZFS-based environments, providing the foundation for all ZFS filesystem management.
- **Usage:** `zpool [OPTIONS] COMMAND [ARGS...]`

## Basic Usage ##

List all ZFS pools:

```bash
zpool list

```

Show detailed information about pools:

```bash
zpool status

```

Create a new ZFS pool:

```bash
sudo zpool create mypool /dev/sdb

```

Create a mirrored pool:

```bash
sudo zpool create mypool mirror /dev/sdb /dev/sdc

```

Create a RAID-Z pool:

```bash
sudo zpool create mypool raidz1 /dev/sdb /dev/sdc /dev/sdd

```

Check pool health:

```bash
zpool status -v

```

Destroy a pool:

```bash
sudo zpool destroy mypool

```

Add a device to a pool:

```bash
sudo zpool add mypool /dev/sde

```

Export a pool:

```bash
sudo zpool export mypool

```

Import a pool:

```bash
sudo zpool import mypool

```

## Options ##

- `-v` — Verbose output for status commands
- `-f` — Force operation (when data might be lost)
- `-m` — Force mounting of all filesystems in pool
- `-R` — Set altroot for the new pool
- `-F` — Force fault recovery (attempt to return degraded device to pool)
- `-n` — Dry-run mode (show what would be done)
- `-u` — Do not mount filesystems in the pool
- `-t` — Specify types of devices to import (for example, vdev, file)
- `-d` — Use an alternate directory for devices
- `-c` — Cancel current operation (scrub, resilver)

## Shortcuts ##

Common ZFS pool operations:

```bash
# Show detailed pool status with health information #
zpool status -v

# Show space usage for pools #
zpool list -v

# Create RAID-Z2 pool (double parity, like RAID-6) #
sudo zpool create datapool raidz2 /dev/sdb /dev/sdc /dev/sdd /dev/sde

# Create RAID-Z3 pool (triple parity) #
sudo zpool create datapool raidz3 /dev/sdb /dev/sdc /dev/sdd /dev/sde /dev/sdf

# Create pool with separate log devices (ZIL - ZFS Intent Log) #
sudo zpool create mypool /dev/sdb log /dev/sdc

# Create pool with dedicated cache devices (L2ARC) #
sudo zpool create mypool /dev/sdb cache /dev/sdc

# Add cache device to existing pool #
sudo zpool add mypool cache /dev/sdc

# Add log device to existing pool #
sudo zpool add mypool log /dev/sdc

# Check for bad blocks and errors (scrub) #
sudo zpool scrub mypool

# Check scrub progress #
zpool status mypool

# Stop a running scrub #
sudo zpool scrub -s mypool

# Show I/O statistics #
zpool iostat -v

# Show I/O stats with interval #
zpool iostat 2  # Every 2 seconds

# Show detailed I/O statistics #
zpool iostat -v 1 5  # Verbose, every 1 second, 5 times

# Monitor pool continuously #
zpool iostat -v 1

# Get specific pool properties #
zpool get all mypool

# Set pool properties #
sudo zpool set autoreplace=on mypool

# List available pools for import #
zpool import

# Import pool by ID #
sudo zpool import -f 43212312312312312312

# Export all pools #
sudo zpool export -a

# Import all available pools #
sudo zpool import -a

# Create encrypted pool #
sudo zpool create -O encryption=on -O keyformat=passphrase encpool /dev/sdb

# Change encryption key #
sudo zpool change-key encpool

# Get encryption status #
zpool get keychanged,encryption,keystatus encpool

# Offline a device temporarily #
sudo zpool offline mypool /dev/sdb

# Bring device back online #
sudo zpool online mypool /dev/sdb

# Replace failed device #
sudo zpool replace mypool /dev/sdb /dev/sdd

# Clear errors on a pool #
sudo zpool clear mypool

# Clear errors on specific device #
sudo zpool clear mypool /dev/sdb

# Create pool with specific ashift value #
sudo zpool create -o ashift=12 mypool /dev/sdb

# Set pool to read-only mode #
sudo zpool set readonly=on mypool

# Set pool back to read-write mode #
sudo zpool set readonly=off mypool

# Upgrade pool to latest feature flags #
sudo zpool upgrade mypool

# List pool upgrade options #
zpool upgrade -v

# Check for pool upgrade availability #
zpool upgrade

# Create pool with specific block size #
sudo zpool create -o recordsize=1M datapool /dev/sdb

# Set pool comment #
sudo zpool set comment="Main storage pool" mypool

# Get pool comment #
zpool get comment mypool

# Check pool fragmentation #
zpool list -v -o name,frag mypool

# Check pool capacity #
zpool list -o name,capacity,free,used mypool

# Remove device from pool (if safely possible) #
sudo zpool remove mypool device_name

# Attach spare device to pool #
sudo zpool attach mypool /dev/sdb /dev/sdc

# Detach device from pool #
sudo zpool detach mypool /dev/sdc

# Create pool with spare devices #
sudo zpool create mypool /dev/sdb spare /dev/sdc

# Create pool with specific feature flags enabled #
sudo zpool create -O feature@async_destroy=enabled mypool /dev/sdb

# Export pool with option to return quickly #
sudo zpool export -f mypool

# Import pool to specific directory #
sudo zpool import -R /mnt mypool

# Create pool with dedicated special devices for metadata #
sudo zpool create mypool /dev/sdb special /dev/sdc

# Add special device to existing pool #
sudo zpool add mypool special /dev/sdc

# Create pool with deduplication (use with caution) #
sudo zpool create -O dedup=on datapool /dev/sdb /dev/sdc

# Check pool deduplication ratio #
zpool list -o name,dedupratio mypool

# Show pool history #
zpool history

# Show history for specific pool #
zpool history mypool

# Show history with detailed information #
zpool history -i mypool

# Get pool configuration #
zpool list -v -o name,size,used,avail,health mypool

# Check all pools for consistency #
zpool check

# Create pool with specific checksum algorithm #
sudo zpool create -o checksum=fletcher4 datapool /dev/sdb

# Show pool with specific output format #
zpool list -H -o name,size,alloc,free,cap,health

# Monitor all pools with custom interval #
zpool iostat -v 5

# Show pool stats including errors #
zpool status -v -e

# Check for suspended pools #
zpool status | grep -i suspended

# Find missing devices #
| zpool status -v | grep -i "missing\ | unavailable" |

# Clear suspended pool state #
sudo zpool clear mypool

# Get pool GUID #
zpool list -o guid mypool

# Set pool autoexpand property #
sudo zpool set autoexpand=on mypool

# Check autoexpand status #
zpool get autoexpand mypool

# Get all supported properties #
zpool get -t pool all mypool

# Create mirrored pool with multiple mirrors #
sudo zpool create datapool mirror /dev/sdb /dev/sdc mirror /dev/sdd /dev/sde

# Create pool with compression #
sudo zpool create -O compression=lz4 mypool /dev/sdb

# Check pool health programmatically #
| zpool status mypool | grep -q "ONLINE" && echo "Healthy" | | echo "Issues detected" |

# Check if specific pool exists #
| zpool list -n | grep -q "mypool" && echo "Pool exists" | | echo "Pool not found" |

# Get pool creation date #
zpool get creation mypool

# Get pool feature flags #
zpool get feature@ all mypool

# Show pools with their vdev topologies #
zpool list -v

# Export pool and take it offline safely #
sudo zpool export mypool

# Import with different name #
sudo zpool import -N -R /mnt oldpool newpool

# Show pools with capacity warnings #
zpool list -o name,capacity | awk '$2 > 80 {print $1 " is at " $2 "% capacity"}'

# Create pool with specific sector size #
sudo zpool create -o sectorsize=4k mypool /dev/sdb

# Add more capacity to RAID pool #
sudo zpool add mypool raidz1 /dev/sde /dev/sdf /dev/sdg

# Check for temporary device errors #
zpool status -x

# Get pool's allocated space percentage #
zpool list -o name,allocated mypool

# List pools sorted by usage #
zpool list -S used

# Show pool with detailed error information #
zpool status -v -e

# Check if pool can accommodate specific size #
size_needed="10G"
available=$(zpool list -H -o free mypool)
if [ "$size_needed" -le "$available" ]; then
  echo "Sufficient space available"
else
  echo "Insufficient space"
fi

# Create pool with monitoring properties #
sudo zpool create -O atime=off -O compression=lz4 -O xattr=sa mypool /dev/sdb

# Check for pools with specific property #
zpool get autoreplace | grep -v "autoreplace"

# Set pool to not autoreplace failed devices #
sudo zpool set autoreplace=off mypool

# Monitor pool for specific time period #
zpool iostat -v 1 10  # Sample 10 times every 1 second

# Check pools in recovery mode #
zpool status | grep -i "recover"

# Get detailed information about recent scrubs #
zpool events

# Create pool with specific mountpoint #
sudo zpool create -m /custom/mount mypool /dev/sdb

# Show capacity trends #
zpool list -o name,capacity,free,fragmentation mypool

# Check for unhealthy pools #
| zpool status | awk '/[:space:](/:space:.md)(/DEGRADED | FAULTED | OFFLINE | UNAVAIL | REMOVED.md)/ {unhealthy=1} END {exit(unhealthy?1:0)}' && echo "Pools healthy" | | echo "Some pools unhealthy" |

# Find all spare devices #
zpool list -v -o name,health | grep -i spare

# Create pool with specific permissions #
sudo zpool create -o acltype=posixacl -o xattr=sa mypool /dev/sdb

# Check for pool expansion capabilities #
zpool list -o name,expand -v mypool

# Check pool read/write errors #
| zpool status -v | grep -E "(read | write | cksum)" |

# Export pool with device renaming #
sudo zpool export -f mypool && echo "Pool exported, ready for relocation"

# Import pool with cache file #
sudo zpool import -c /etc/zfs/zpool.cache mypool

# Set pool cachefile location #
sudo zpool set cachefile=/etc/zfs/zpool.cache mypool

# Create pool with specific redundancy for each vdev #
sudo zpool create mypool mirror /dev/sdb /dev/sdc raidz1 /dev/sdd /dev/sde /dev/sdf

# Get pool feature statistics #
zpool get feature@all mypool

# Create pool with specific sync settings #
sudo zpool create -o sync=standard mypool /dev/sdb

# Check pool health in script format #
zpool status -v | awk 'NR > 1 {if($5 != "ONLINE" && $5 != "") print $4 " is " $5}'

```

## FAQ ##

### What Is The Difference Between Zpool And Zfs? ###

- `zpool` - Manages storage pools (the physical storage containers)
- `zfs` - Manages filesystems, volumes, snapshots, and clones within pools

Think of zpool as managing the hardware/storage layer and zfs as managing the filesystem layer.

### How Do I Create Different RAID Configurations With Zpool? ###

```bash
# Single disk (no redundancy) #
sudo zpool create mypool /dev/sdb

# Mirrored (RAID-1 equivalent) #
sudo zpool create mypool mirror /dev/sdb /dev/sdc

# RAID-Z1 (like RAID-5 - single parity) #
sudo zpool create mypool raidz1 /dev/sdb /dev/sdc /dev/sdd

# RAID-Z2 (like RAID-6 - double parity) #
sudo zpool create mypool raidz2 /dev/sdb /dev/sdc /dev/sdd /dev/sde

# RAID-Z3 (triple parity) #
sudo zpool create mypool raidz3 /dev/sdb /dev/sdc /dev/sdd /dev/sde /dev/sdf

```

### How Do I Monitor Pool Health Regularly? ###

Schedule regular scrubs to check data integrity:

```bash
# Add to crontab for weekly scrubs #
# 0 2 * * 0 root /sbin/zpool scrub mypool #

# Check status regularly #
zpool status

# Monitor for errors #
| zpool status | grep -E "(DEGRADED | FAULTED | OFFLINE | UNAVAIL)" |

```

### What Should I Do If A Pool Becomes Degraded? ###

A degraded pool still works but has experienced device failure:

```bash
# Check which device failed #
zpool status -v

# Replace the failed device #
sudo zpool replace pool_name old_device new_device

# Do not remove the device until replacement is complete #
# Monitor the replacement progress: #
zpool status pool_name

```

### How Often Should I Run Scrubs? ###

It's recommended to run scrubs regularly (weekly or monthly) to check for silent data corruption:

```bash
# For most pools - monthly is sufficient #
# For critical pools - weekly is recommended #
sudo zpool scrub pool_name

```

The system will show progress when running `zpool status`.

### What Happens During A Zpool Scrub? ###

A scrub reads all data and metadata on all devices in a pool, verifies checksums, and repairs any damage from other replicas if available. It's similar to a "check disk" operation but with ZFS's self-healing capabilities. You can monitor progress with `zpool status` and cancel with `zpool scrub -s pool_name`.
