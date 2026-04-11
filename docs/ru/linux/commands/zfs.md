# `zfs` #

- **Purpose:** ZFS (Zettabyte File System) is an advanced filesystem and volume manager that provides exceptional data integrity, snapshots, compression, encryption, and other enterprise-grade features. The `zfs` command allows administrators to manage ZFS datasets including filesystems, volumes, clones, and snapshots. It's used for creating, destroying, mounting, unmounting, and configuring ZFS pools and datasets. ZFS is known for its robustness, built-in data verification, protection against silent data corruption, and efficient storage management through copy-on-write semantics.
- **Usage:** `zfs [OPTIONS] COMMAND [ARGS...]`

## Basic Usage ##

List all ZFS filesystems:

```bash
zfs list

```

Create a new ZFS filesystem:

```bash
sudo zfs create pool_name/dataset_name

```

Destroy a ZFS filesystem:

```bash
sudo zfs destroy pool_name/dataset_name

```

Mount a ZFS filesystem:

```bash
sudo zfs mount dataset_name

```

Unmount a ZFS filesystem:

```bash
sudo zfs unmount dataset_name

```

Take a snapshot of a dataset:

```bash
sudo zfs snapshot pool_name/dataset_name@snapshot_name

```

Rollback to a snapshot:

```bash
sudo zfs rollback pool_name/dataset_name@snapshot_name

```

Clone a snapshot:

```bash
sudo zfs clone pool_name/dataset_name@snapshot_name pool_name/cloned_dataset

```

## Options ##

- `-r` — Recursive operation
- `-R` — Recursive with dependent datasets
- `-v` — Verbose output
- `-p` — Create all non-existing parent datasets
- `-o property=value` — Set property when creating dataset
- `-s` — Use scripted mode for input
- `-H` — Use tab-delimited output for parsing
- `-t` — Type of dataset to work with (filesystem, volume, snapshot, bookmark)
- `-S` — Sort by property
- `-o` — Specify properties to display

## Shortcuts ##

Common ZFS operations:

```bash
# List ZFS filesystems with specific properties #
zfs list -o name,used,available,referenced,mountpoint

# List only filesystems (not volumes or snapshots) #
zfs list -t filesystem

# List only snapshots #
zfs list -t snapshot

# Get detailed information #
zfs get all dataset_name

# Set dataset property (for example, compression) #
sudo zfs set compression=lz4 dataset_name

# Enable compression on a dataset #
sudo zfs set compression=on dataset_name

# Get specific property for all datasets #
zfs get compression -r

# Create nested datasets #
sudo zfs create -p pool_name/parent/child/grandchild

# Create dataset with mountpoint #
sudo zfs create -o mountpoint=/custom/path pool_name/dataset

# Create dataset with encryption #
sudo zfs create -o encryption=on -o keyformat=passphrase pool_name/encrypted_ds

# Create dataset with quota #
sudo zfs create -o quota=10G pool_name/quota_ds

# Create dataset with reservation #
sudo zfs create -o reservation=5G pool_name/reserved_ds

# Get space usage information #
zfs get used,available,quota,reservation dataset_name

# Show dataset hierarchy #
zfs list -r -d 2 pool_name

# Rename a dataset #
sudo zfs rename dataset_name new_dataset_name

# Rename a snapshot #
sudo zfs rename dataset@snap dataset@new_snap

# List snapshots for a dataset #
zfs list -t snapshot -r dataset_name

# Destroy a snapshot #
sudo zfs destroy pool_name/dataset@snapshot_name

# Protect a snapshot from destruction #
sudo zfs snapshot pool_name/dataset@snap
sudo zfs allow user send,pool_name/dataset@snap

# Send a snapshot to another pool/system #
zfs send pool_name/dataset@snapshot | zfs receive pool2/dest

# Send incremental snapshot #
zfs send -i pool_name/dataset@snap1 pool_name/dataset@snap2 | zfs receive pool2/dest

# Send compressed #
| zfs send pool_name/dataset@snap | gzip | ssh host "gunzip | zfs receive pool/dest" |

# Receive a stream #
zfs receive pool_name/dataset < stream_file

# Rollback with force #
sudo zfs rollback -r dataset@snap

# Promote a clone #
sudo zfs promote cloned_dataset

# Demote promoted clone #
sudo zfs promote dataset_name

# Get dataset properties #
zfs get compression,quota,mountpoint dataset_name

# Set multiple properties at once #
sudo zfs set compression=lz4,atime=off dataset_name

# Inherit property from parent #
sudo zfs inherit compression dataset_name

# List with size formatting #
zfs list -o name,used,available -H -p

# Show only mountable filesystems #
| zfs list -r -t filesystem -o name,mountpoint | grep -v "legacy\ | none" |

# Create volumes instead of filesystems #
sudo zfs create -V 10G pool_name/volume_name

# Show volume information #
zfs get volsize,volblocksize dataset_name

# List volumes only #
zfs list -t volume

# Get filesystems with specific mountpoints #
zfs get mountpoint -r | grep /specific/path

# Create bookmark (lightweight snapshot reference) #
zfs bookmark pool_name/dataset@snap pool_name/dataset#bookmark_name

# List bookmarks #
zfs list -t bookmark

# Send using raw streams (faster for encrypted datasets) #
zfs send -w pool_name/dataset@snap | zfs receive pool2/dest

# List snapshots with more detailed information #
zfs list -t snapshot -o name,creation,used,refreservation

# Show dependent clones #
zfs list -r -o name,origin,clones dataset_name

# Check for space-saving properties #
zfs get compressratio,used,logicalused dataset_name

# Create multiple datasets with different properties #
for i in {1..5}; do sudo zfs create pool_name/dataset_$i; done

# Apply properties to multiple datasets #
for ds in dataset1 dataset2 dataset3; do sudo zfs set compression=lz4 "pool_name/$ds"; done

# Check dataset encryption status #
zfs get encryption,keystatus dataset_name

# Check for snapshots with specific retention #
zfs list -t snapshot | grep -E "@backup_.*"  # Snapshots with backup pattern

# Set snapshot hold #
zfs hold backup_tag pool_name/dataset@snap

# Release snapshot hold #
zfs release backup_tag pool_name/dataset@snap

# List held snapshots #
zfs holds dataset_name

# Set dataset as readonly #
sudo zfs set readonly=on dataset_name

# Set dataset as writable #
sudo zfs set readonly=off dataset_name

# Create dataset with sharenfs property #
sudo zfs create -o sharenfs="rw,no_root_squash" pool_name/nfs_share

# Set SMB sharing properties #
sudo zfs set sharesmb=on pool_name/smb_share

# Set dataset to mount on boot #
sudo zfs set canmount=on dataset_name

# Set dataset to not mount automatically #
sudo zfs set canmount=noauto dataset_name

# Force unmount when busy #
sudo zfs unmount -f dataset_name

# Mount all available datasets #
sudo zfs mount -a

# Check for corrupted datasets #
zpool scrub pool_name

# Check dataset consistency #
zpool status pool_name

# Find datasets with specific property values #
zfs get -r all | grep "property_name.*value"

# Monitor dataset activity #
zpool iostat -r pool_name 1

# Show dataset creation time #
zfs get creation dataset_name

# List datasets sorted by size #
zfs list -r -S used -o name,used

# Set default mountpoint behavior #
sudo zfs set mountpoint=/custom/mount dataset_name

# Show only datasets with specific property #
zfs list -o name,mountpoint,compression | grep lz4

# Create dataset with specific recordsize #
sudo zfs create -o recordsize=1M pool_name/database

# Use zfs for backup purposes #
zfs snapshot -r pool_name@backup_$(date +%Y%m%d)
zfs send -R pool_name@backup_$(date +%Y%m%d) | ssh backup_server "zfs receive backup_pool/restored"

# Clean up old snapshots #
| zfs list -t snapshot | awk '$1 ~ /@daily_[0-9]+/ && $3 < "7 days ago" {print $1}' | xargs -r -n 1 zfs destroy |

# Monitor filesystem changes #
zfs list -r dataset_name | while read line; do
| if [ M | K] ](/%20$line%20=~%20[0-9.md); then |
    echo "Storage change detected: $line"
  fi
done

# Set up automated snapshot schedules using zfs-auto-snapshot or scripts #
# Create snapshot via script: #
for freq in hourly daily weekly; do
  zfs snapshot -r pool_name@${freq}_$(date +%Y%m%d_%H%M%S)
done

# Get performance tuning recommendations #
zfs get atime,relatime,recordsize,compression dataset_name

# Check for deduplication status (if enabled) #
zfs get dedup,dedupratio dataset_name

# Monitor space usage trends #
zfs get -r used dataset_name

# Set up delegation permissions #
zfs allow -u username create,destroy,mount dataset_name

# Remove permissions #
zfs unallow -u username dataset_name

# Show permissions #
zfs allow dataset_name

# Set up quotas and reservations #
sudo zfs set quota=100G,reservation=10G dataset_name

# Clone with specific properties #
sudo zfs clone -o mountpoint=/new/path dataset@snap new_dataset

# Roll back with specific options #
sudo zfs rollback -r -R dataset@snap  # Rollback with dependent clones

# Export dataset properties for backup #
zfs get -r all dataset_name > dataset_properties_backup.txt

# Import dataset properties from file (would require setting each property individually) #

# Send dataset to remote system #
zfs send dataset@snap | ssh user@remote_host "zfs receive remote_pool/received_dataset"

# Receive encrypted dataset #
zfs receive -o encryption=on -o keyformat=passphrase -x keylocation dataset encrypted_pool/dataset

# Check space efficiency #
zfs get compressratio,refcompressratio,dedupratio dataset_name

# Create dataset with specific checksum #
sudo zfs create -o checksum=sha512 dataset_name

# Create dataset with specific sync settings #
sudo zfs create -o sync=standard dataset_name

# Check for datasets that need attention #
zpool status | grep should

# List snapshots older than specific date #
zfs list -t snapshot -o name,creation | awk '$4 < "2023-01-01" {print $0}'

# Create space-efficient datasets for specific workloads #
sudo zfs create -o compression=lz4 -o recordsize=1M pool_name/database_workload

# Monitor dataset properties over time #
zfs get used,available,referenced dataset_name

# Set up logging for dataset changes #
zfs list -t snapshot -o name,creation,used | awk '{print $0, " - size change: ", prev-$3; prev=$3}'  # Conceptual approach

# Create datasets with different compression algorithms #
sudo zfs create -o compression=zstd dataset_name_zstd
sudo zfs create -o compression=lz4 dataset_name_lz4
sudo zfs create -o compression=gzip dataset_name_gzip

# Create a clone of a specific snapshot #
zfs clone pool_name/original_dataset@snapshot_name pool_name/clone_dataset

```

## FAQ ##

### What Is ZFS And Why Use It? ###

ZFS is a combined file system and volume manager that provides:

- Data integrity through checksums and copy-on-write
- Protection against silent data corruption
- Snapshots and clones
- Transparent compression
- Built-in volume management
- Near-infinite scalability
- Encryption capabilities

It's used for enterprise storage, home servers, and anywhere data integrity is paramount.

### How Do I Create A ZFS Pool? ###

Before creating datasets, you need a pool (created with `zpool` command):

```bash
# Create pool from disk #
sudo zpool create mypool /dev/sdb

# Create RAID-Z pool (like RAID-5) #
sudo zpool create mypool raidz1 /dev/sdb /dev/sdc /dev/sdd

# Create mirrored pool (like RAID-1) #
sudo zpool create mypool mirror /dev/sdb /dev/sdc

```

### What Is The Difference Between Zfs And Zpool? ###

- `zfs` - Manages filesystems, volumes, snapshots, and clones within pools
- `zpool` - Manages the storage pools themselves (the container for ZFS filesystems)

You first create pools with `zpool`, then manage filesystems within those pools with `zfs`.

### How Do I Rollback A ZFS Snapshot Safely? ###

Before rolling back, check what would be affected:

```bash
# Check what will be affected #
zfs rollback -r dataset@snap  # The -r shows what would be affected

# Perform the rollback #
sudo zfs rollback dataset@snap

```

Note that rollback destroys any changes made since the snapshot was taken.

### How Do I Send And Receive ZFS Datasets? ###

For backup and migration:

```bash
# Send full dataset #
zfs send pool/dataset@snap | zfs receive pool2/destination

# Send incremental changes #
zfs send -i pool/dataset@oldsnap pool/dataset@newsnap | zfs receive pool2/destination

# Send with compression #
| zfs send pool/dataset@snap | gzip | ssh host "gunzip | zfs receive pool/dest" |

```

### How Do I Monitor ZFS Pool Health? ###

While `zpool` command is used for health monitoring, you can check dataset status:

```bash
# Check overall pool status #
zpool status

# Check specific pool #
zpool status pool_name

# Scrub the pool periodically to check for errors #
sudo zpool scrub pool_name

```
