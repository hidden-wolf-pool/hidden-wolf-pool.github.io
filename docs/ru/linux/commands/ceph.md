# `ceph` #

- **Purpose:** Ceph is a distributed software-defined storage platform that provides an interface to object, block, and file-based storage systems in a unified manner. The `ceph` command-line tool is used to manage and monitor Ceph clusters, including managing pools, OSDs (Object Storage Daemons), monitors, and other cluster components. It provides administrative capabilities to maintain and operate Ceph storage clusters.
- **Usage:** `ceph [OPTIONS] [COMMAND] [ARGS...]`

## Basic Usage ##

Check cluster status:

```bash
ceph status

```

Get cluster health:

```bash
ceph health

```

List storage pools:

```bash
ceph osd lspools

```

Show cluster usage information:

```bash
ceph df

```

Create a storage pool:

```bash
ceph osd pool create pool_name 32 32

```

Delete a storage pool:

```bash
ceph osd pool delete pool_name pool_name --yes-i-really-really-mean-it

```

Get monitor map:

```bash
ceph mon dump

```

Check OSD status:

```bash
ceph osd stat

```

## Options ##

- `-c` — Specify alternate configuration file
- `-m` — Connect to specific monitor
- `--cluster` — Specify the cluster name
- `--conf` — Alternate configuration file
- `--keyring` — Path to keyring file
- `--admin-daemon` — Connect to admin socket
- `-v` — Verbose output
- `--format` — Output format (json, xml, plain)

## Shortcuts ##

Common Ceph operations:

```bash
# Cluster health and status #
ceph health detail
ceph -s

# Pool management #
ceph osd lspools
ceph osd pool create newpool 64
ceph osd pool delete newpool newpool --yes-i-really-really-mean-it

# Monitor operations #
ceph mon_status
ceph quorum_status

# OSD operations #
ceph osd tree
ceph osd perf
ceph osd dump

# Performance and usage #
ceph df detail
ceph osd pool get pool_name pg_num
ceph osd pool set pool_name pg_num 64

# Block device operations #
ceph osd pool create rbd_pool 32
rbd create rbd_pool/image_name --size 10G

# Authentication management #
ceph auth list
ceph auth get-key client.admin

# Configuration management #
ceph config get mon.ceph-mon1
ceph config set osd.0 osd_journal_size 1024

# CRUSH map operations #
ceph osd crush tree
ceph osd crush show-tunables

# Monitor cluster performance #
ceph tell osd.* bench
ceph report

# Check for problematic PGs #
ceph pg dump_stuck unclean
ceph pg stat

# Get detailed cluster information #
ceph versions
ceph features

```

## FAQ ##

### What Is Ceph And When Should I Use It? ###

Ceph is a unified, distributed storage system that provides object, block, and file system storage. It's suitable for:

- Large-scale storage systems requiring petabytes of capacity
- Cloud infrastructure platforms (OpenStack, and so on)
- High-availability applications
- Applications requiring multiple storage interfaces

### How Do I Check If My Ceph Cluster Is Healthy? ###

Check cluster status and health:

```bash
ceph status
ceph health
ceph -s  # Summary view of the cluster

```

### How Do I Create A Storage Pool In Ceph? ###

```bash
# Create a pool with 32 placement groups #
ceph osd pool create mypool 32

# Create with application type #
ceph osd pool create mypool 32 32 replicated
ceph osd pool application enable mypool rbd

```

### How Do I Monitor Ceph Performance? ###

Monitor performance using:

```bash
# Overall cluster status #
ceph status

# Monitor cluster health #
ceph health detail

# Check problematic PGs #
ceph pg dump_stuck unclean

# OSD utilization #
ceph osd tree
ceph osd df

# Performance benchmarks #
ceph tell osd.* bench

```

### How Do I Handle Unhealthy PGs? ###

Check for stuck placement groups:

```bash
ceph pg dump_stuck inactive
ceph pg dump_stuck unclean
ceph pg dump_stuck stale

# Repair stuck PGs #
ceph pg repair pg_id

```
