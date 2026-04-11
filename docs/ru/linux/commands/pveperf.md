# `pveperf` #

- **Purpose:** The `pveperf` command is a performance testing and monitoring utility specific to Proxmox Virtual Environment (PVE). It helps system administrators measure and monitor the performance of Proxmox systems, including CPU, memory, disk, and network performance. The tool provides standardized performance tests for virtualization environments, benchmarks for comparing performance across hardware configurations, and metrics for optimizing Proxmox installations. It's designed to evaluate the efficiency of Proxmox VE installations under various workloads and to identify potential performance bottlenecks in virtualized environments.
- **Usage:** `pveperf [OPTIONS] [TEST_TYPE] [PARAMETERS...]`

## Basic Usage ##

Run a complete performance test suite:

```bash
pveperf run

```

Run disk performance test:

```bash
pveperf disk

```

Run memory performance test:

```bash
pveperf memory

```

Run CPU performance test:

```bash
pveperf cpu

```

Run network performance test:

```bash
pveperf network

```

Show performance test results:

```bash
pveperf results

```

Generate a performance report:

```bash
pveperf report

```

Run specific test with parameters:

```bash
pveperf run --duration 60s cpu

```

## Options ##

- `--duration` — Set test duration (for example, 30s, 1m, 1h)
- `--threads` — Number of threads to use in tests
- `--size` — Size of data to use in tests (for disk/memory tests)
- `--iterations` — Number of test iterations
- `--verbose` — Show detailed output during tests
- `--quiet` — Reduce output
- `--json` — Output results in JSON format
- `--csv` — Output results in CSV format
- `--output` — Specify output file for results
- `--benchmark` — Run comprehensive benchmarking
- `--quick` — Run quick tests only (shorter duration)
- `--save` — Save results to database
- `--compare` — Compare with previous results

## Shortcuts ##

Common pveperf operations:

```bash
# Run basic performance tests #
pveperf run

# Run comprehensive benchmark #
pveperf benchmark

# Run quick performance check #
pveperf run --quick

# Check only disk performance #
pveperf disk --duration 30s

# Check only memory performance #
pveperf memory --threads 4

# Check only CPU performance #
pveperf cpu --threads 8

# Run performance test with detailed output #
pveperf run --verbose

# Run test and save results to file #
pveperf run --output /tmp/perf_results.txt

# Run tests with specific duration #
pveperf run --duration 2m

# Run network performance test #
pveperf network --size 1G

# Export results in JSON format #
pveperf results --json > results.json

# Export results in CSV format #
pveperf results --csv > results.csv

# Compare current results with previous #
pveperf compare --previous latest

# Run stress test on all resources #
pveperf stress

# Run disk IO test with specific parameters #
pveperf disk --size 512M --threads 8

# Run CPU test with specific core count #
pveperf cpu --threads 4

# Run performance test and save to database #
pveperf run --save

# View saved results #
pveperf results --saved

# Run specific tests only #
pveperf run cpu memory

# List available tests #
pveperf list

# Show test configuration #
pveperf config

# Run tests with custom parameters #
pveperf run --threads 16 --duration 1m

# Run performance test under load #
pveperf run && stress-ng --cpu 4 --io 4 --vm 2 --vm-bytes 1G --timeout 60s

# Schedule performance tests #
pveperf run --save --output /var/log/pveperf/$(date +%Y%m%d_%H%M%S)_results.txt

# Run performance test with comparison baseline #
pveperf run --compare baseline

# Monitor performance continuously #
pveperf monitor --duration 1h

# Run performance tests before and after configuration change #
pveperf run --output before_config.txt
# Apply changes #
pveperf run --output after_config.txt
diff before_config.txt after_config.txt

# Run performance test and alert if below threshold #
| pveperf run | grep -E "score | rating" | awk '{if($NF < threshold) print "Performance below threshold: " $0}' |

# Export performance scores #
pveperf run --json | jq '.performance.cpu_score, .performance.disk_score'

# Performance test with specific I/O pattern #
pveperf disk --pattern sequential

# Run memory performance with specific size #
pveperf memory --size 2G

# Run network test with specific host #
pveperf network --target 192.168.1.1

# Run performance test with specific configuration #
pveperf run --config /etc/pveperf/custom_config.conf

# Run performance test on specific storage #
pveperf disk --storage /dev/sdb

# Run performance test on specific network interface #
pveperf network --interface eth0

# Run performance tests with specific user #
sudo -u root pveperf run

# Run performance tests with specific nice level #
nice -n 19 pveperf run

# Run performance test and log to syslog #
pveperf run --verbose 2>&1 | logger -t pveperf

# Run performance tests on specific node (in cluster) #
pveperf run --node pvenode1

# Create performance test baseline #
pveperf baseline --create

# Verify performance against baseline #
pveperf baseline --verify

# Run performance test with time measurements #
time pveperf run

# Run performance tests with specific priorities #
pveperf run --priority normal

# Generate performance report for management #
pveperf run --output /tmp/performance_report.txt && cat /tmp/performance_report.txt | column -t

# Run performance test with specific memory allocation #
pveperf memory --size 4G --threads 2

# Run CPU performance with specific workload #
pveperf cpu --workload matrix

# Test storage performance for specific VM IDs #
for vmid in 100 101 102; do
  pveperf disk --vmid $vmid
done

# Check performance over time #
for i in {1..5}; do
  pveperf run --output result_$i.txt
  sleep 300  # Wait 5 minutes
done

# Run container performance tests #
pveperf container --container-id 100

# Run performance test with backup running #
pveperf run & backup_script.sh & wait

# Test performance during VM migration #
pveperf run --during-migration vm100

# Performance test with specific system load #
stress-ng --cpu 2 --timeout 30s & pveperf run

# Run performance tests with specific kernel module loaded #
modprobe specific_module && pveperf run --cleanup 'modprobe -r specific_module'

# Performance test with specific network settings #
pveperf network --mtu 9000

# Run performance test with specific CPU governor #
echo performance > /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor && pveperf cpu

# Performance test with specific I/O scheduler #
echo deadline > /sys/block/sda/queue/scheduler && pveperf disk

# Run tests for specific Proxmox resources #
pveperf run --resources cpu,memory,disk

# Performance test with specific memory policy #
pveperf memory --policy interleave

# Run performance test with specific NIC hardware offloading features #
pveperf network --features tx-checksumming

# Performance tests with specific cgroup settings #
pveperf run --cgroup /sys/fs/cgroup/performance

# Run performance tests during specific workload #
pveperf run --with-workload 'while true; do find /var/log -name "*.log" -exec grep -l error {} \; > /dev/null 2>&1; done'

# Performance test with specific filesystem type #
pveperf disk --filesystem ext4

# Performance test with specific mount options #
pveperf disk --mount-options noatime

# Run performance test with specific CPU affinity #
taskset -c 0-3 pveperf cpu

# Performance test with specific memory binding #
numactl --cpunodebind=0 --membind=0 pveperf run

# Run tests and calculate average #
for i in {1..3}; do
  pveperf run --json >> /tmp/results_$i.json
done
# Calculate averages from results #

# Performance test with specific disk queue depth #
pveperf disk --queue-depth 32

# Run performance test with specific encryption #
pveperf disk --encrypted

# Performance test with specific compression #
pveperf run --compressed-storage

# Run performance tests with specific snapshot state #
pveperf run --with-snapshot

# Performance test with specific network bridge #
pveperf network --bridge vmbr0

# Run performance tests with specific kernel version #
pveperf run --kernel $(uname -r)

# Performance test with specific hardware configuration #
pveperf run --hardware --verbose

# Run tests and store for trend analysis #
pveperf run --save --tag "after_update_$(date +%Y%m%d)"

# Performance test with specific ZFS settings #
pveperf disk --zfs --record-size 1M

# Run performance test during backup #
pveperf run --during-backup

# Performance test with specific LXC configuration #
pveperf container --unprivileged

# Run tests and generate HTML report #
pveperf run --html > /var/www/html/performance_report.html

# Performance test with specific QEMU settings #
pveperf run --qemu-opts "cpu=host,memory-backend=memory"

# Run tests with specific disk cache mode #
pveperf disk --cache-mode none

# Performance test with specific CPU model #
pveperf cpu --model "Intel(R) Xeon(R)"

# Run performance comparison between storage types #
pveperf disk --storage-type ssd
pveperf disk --storage-type hdd

# Performance test with specific network throughput #
pveperf network --throughput 1Gbps

# Run stress tests with performance measurements #
pveperf stress --intensity high --measure-continuously

# Performance test with specific memory allocation patterns #
pveperf memory --allocation-pattern sparse

# Run tests with specific virtio settings #
pveperf run --virtio-optimized

# Performance test with specific IOMMU groups #
pveperf run --iommu-group 1

# Run performance test with specific security modules #
pveperf run --with-selinux

# Performance test with specific CPU features #
pveperf cpu --features avx2

# Run tests and compare with published benchmarks #
pveperf run --compare-public-benchmarks

# Performance test with specific NUMA topology #
pveperf run --numa --affinity

# Run tests with specific disk partitioning #
pveperf disk --partition-type gpt

# Performance test with specific filesystem mount point #
pveperf disk --mount-point /var/lib/vz

# Performance test with specific network bond configuration #
pveperf network --bond-mode active-backup

# Run tests and set up monitoring #
pveperf run --setup-monitoring --alert-thresholds

# Run performance tests with specific hardware RAID controller #
pveperf disk --raid-controller hwr

# Performance test with specific disk sector size #
pveperf disk --sector-size 4096

# Run tests with specific virtual CPU allocation #
pveperf run --vcpus 8 --pin-vcpus

# Performance test with specific memory overcommit settings #
pveperf memory --overcommit-ratio 100

# Run tests with specific storage replication state #
pveperf run --with-replication-enabled

# Performance test with specific backup job running #
pveperf run --during-job backup-job-1

# Performance test with specific snapshot chain length #
pveperf disk --snapshots 5

# Run tests with specific VM live migration settings #
pveperf run --migration-compression --migration-downtime 100

# Performance test with specific network virtualization enabled #
pveperf network --with-virtio-net

# Run tests and collect system metrics simultaneously #
pveperf run --collect-sysmetrics --export-prometheus

# Performance test with specific kernel parameters #
pveperf run --with-params "vm.swappiness=1"

# Run tests and create performance profile #
pveperf run --profile --export-config

# Performance test with specific IO workload #
pveperf disk --io-type random --block-size 4k --iodepth 16

# Run tests and integrate with monitoring tools #
pveperf run --export-graphite --export-influxdb

# Performance test with specific container image #
pveperf container --template ubuntu-cloud-image

# Run tests with specific backup retention policy #
pveperf run --backup-policy "keep-last-10"

# Performance test with specific disk provisioning type #
pveperf disk --provision thin

# Run tests with specific CPU pinning configuration #
pveperf cpu --pin-to-cores "0-3,8-11"

# Performance test with specific memory balloon driver #
pveperf memory --with-balloon

# Run tests with specific watchdog configuration #
pveperf run --watchdog-enabled

# Performance test with specific firmware type #
pveperf run --firmware seabios

# Run tests with specific disk cache settings #
pveperf disk --cache-direct

# Performance test with specific network checksum offloading #
pveperf network --checksum-offload

# Run tests with specific disk discard settings #
pveperf disk --discard-enabled

# Performance test with specific CPU hotplug configuration #
pveperf run --cpu-hotplug-enabled

# Run tests with specific memory hotplug configuration #
pveperf run --memory-hotplug-enabled

# Performance test with specific storage encryption #
pveperf disk --crypto aes-ni

# Run tests with specific network offloading features #
pveperf network --offload-features

# Performance test with specific hypervisor settings #
pveperf run --hypervisor-opts

# Run tests with specific backup scheduling #
pveperf run --scheduled-backup

# Performance test with specific resource limits #
pveperf run --limits cpu=4,memory=4G

# Run tests and export to specific monitoring format #
pveperf run --export-nagios --export-zabbix

```

## FAQ ##

### What Is Pveperf Used For? ###

The `pveperf` tool is used to:

- Benchmark Proxmox Virtual Environment installations
- Identify performance bottlenecks in virtualization setups
- Compare different hardware configurations for Proxmox
- Verify that system changes haven't impacted performance
- Generate performance reports for capacity planning
- Ensure Proxmox installations meet performance requirements

### How Do I Run Specific Performance Tests? ###

You can run specific tests individually:

```bash
# CPU performance only #
pveperf cpu --threads 4

# Disk performance with specific parameters #
pveperf disk --size 1G --threads 8

# Memory performance only #
pveperf memory --duration 60s

```

### Can I Compare Performance Results Over Time? ###

Yes, use the comparison features:

```bash
# Save baseline results #
pveperf run --save --tag baseline

# Compare current performance to baseline #
pveperf compare --baseline baseline

```

### What Performance Metrics Does Pveperf Test? ###

PVEPerf typically tests:

- CPU performance (floating point operations, integer operations)
- Memory performance (bandwidth, latency)
- Disk performance (sequential and random I/O)
- Network performance (latency, bandwidth)
- Overall system performance under virtualization load

### How Do I Interpret Pveperf Results? ###

Results are typically expressed as scores or throughput values. Higher scores generally indicate better performance. Compare results with:

- Published benchmarks for your hardware
- Previous test results on the same system
- Industry standards for virtualization performance

### Is Pveperf Safe To Run In Production? ###

Performance tests can be resource-intensive. It's recommended to:

- Schedule tests during maintenance windows
- Run tests when system load is low
- Use the `--quick` option for less intensive tests
- Monitor system during tests to ensure stability
