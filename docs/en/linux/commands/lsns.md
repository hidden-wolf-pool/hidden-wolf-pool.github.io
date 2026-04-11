# `lsns` #

- **Purpose:** The `lsns` command lists information about Linux namespaces, showing details about network, mount, PID, user, IPC, and other types of namespaces currently active on the system. It helps system administrators and developers to understand the namespace structure of running processes, which is essential for debugging containerization technologies like Docker, Podman, and LXC. The command provides information about namespace type, ID, parent PID, process count, and user ownership of each namespace.
- **Usage:** `lsns [OPTIONS]`

## Basic Usage ##

List all namespaces:

```bash
lsns

```

List only network namespaces:

```bash
lsns -t net

```

List only PID namespaces:

```bash
lsns -t pid

```

List only mount namespaces:

```bash
lsns -t mnt

```

List namespaces with process information:

```bash
lsns -p

```

List namespaces with specific output format:

```bash
lsns -o NS,NSTYPE,COMMAND,PID

```

List namespaces with user information:

```bash
lsns -u

```

## Options ##

- `-t` — List only namespaces of the specified type (net, pid, mnt, uts, ipc, user, cgroup)
- `-p` — List all processes in each namespace
- `-u` — List users who own the namespaces
- `-J` — Print output in JSON format
- `-W` — Do not truncate output longer than terminal width
- `-n` — Do not resolve user or group IDs to names
- `-o` — Specify which output columns to show
- `-r` — Sort in reverse order
- `-l` — Use long listing format
- `-N` — Sort by namespace ID
- `-P` — Sort by parent PID
- `-C` — Sort by process count
- `-S` — Sort by NS type
- `-U` — Sort by user/UID

## Shortcuts ##

Common lsns operations:

```bash
# Show all namespaces with details #
lsns

# Show network namespaces only #
lsns -t net

# Show detailed information about namespaces #
lsns -l

# List namespaces with associated processes #
lsns -p

# Show namespaces in JSON format #
lsns -J

# List namespaces without truncation #
lsns -W

# Show specific columns #
lsns -o NS,NSTYPE,PATH

# Show only namespaces with more than 10 processes #
lsns | awk '$5 > 10 {print}'

# Show network namespaces with associated processes #
lsns -t net -p

# List namespaces with user ownership #
lsns -u

# Show namespaces sorted by process count #
lsns -C

# Show only mount namespaces #
lsns -t mnt

# Show PID namespaces #
lsns -t pid

# Show UTS namespaces #
lsns -t uts

# Show IPC namespaces #
lsns -t ipc

# Show user namespaces #
lsns -t user

# Show cgroup namespaces #
lsns -t cgroup

# Show multiple namespace types #
lsns -t net -t pid

# Count namespaces of each type #
| lsns | tail -n +2 | awk '{print $2}' | sort | uniq -c |

# Find processes in a specific namespace #
lsns -p | grep namespace_id

# Show namespace information with wide format #
lsns -W -l

# Sort by namespace type #
lsns -S

# Sort by user ownership #
lsns -U

# Show namespace information with parent PID #
lsns | awk '{print $1, $2, $3, $4}'

# Export namespace information #
lsns > namespaces_info.txt

# Show namespaces with specific user #
lsns -u | grep username

# Find namespace by process ID #
lsns -p | grep PID

# Show only root-owned namespaces #
lsns -u | grep root

# Count network namespaces #
lsns -t net | wc -l

# Find namespaces with specific path #
lsns | grep /path/to/ns

# Monitor namespace changes #
while true; do echo "--- $(date) ---"; lsns; sleep 5; done

# Show namespaces with command and PID #
lsns -o NS,NSTYPE,COMMAND,PID

# Export namespace data in JSON format #
lsns -J > namespaces.json

# Show namespace information with custom width #
lsns --width 200

# Filter namespaces by user ID #
lsns | awk '$6 == "1000" {print}'

# Show namespace info with specific format #
lsns -o NS,NSTYPE,PID,USER,COMMAND

# Compare namespace info with process info #
lsns && ps aux | head -10

# Show only namespaces with specific command pattern #
| lsns -p | grep "docker\ | container" |

# List namespaces with network interfaces #
lsns -t net -p

# Find orphaned namespaces #
lsns | grep -v PID  # Look for namespaces with no associated processes

# Show namespaces with process tree #
lsns -p | grep -A 5 -B 5 command_name

# Show namespaces with more detailed process info #
lsns -p -l

# Count namespaces per user #
| lsns -u | tail -n +2 | awk '{print $4}' | sort | uniq -c |

# Show namespaces with specific ordering #
lsns --sort=-PID

# Combine with other commands for analysis #
| lsns -J | jq '.[] | select(.type == "net")' |

# Monitor for new namespaces being created #
diff <(lsns) <(sleep 10; lsns)

# Show namespaces filtered by specific criteria #
lsns -o NS,NSTYPE,USER,COUNT,PID,COMMAND | head -15

# Check if specific namespace type exists #
| lsns -t net >/dev/null 2>&1 && echo "Network namespaces exist" | | echo "No network namespaces" |

# Analyze container-related namespaces #
| lsns | grep -E "docker | podman | lxc" | sort |

# Find all processes within a namespace #
lsns -t pid -p | grep namespace_id

# Show namespaces with their Inode information #
lsns -o NS,NSTYPE,NSPID,PID,USER,COUNT,COMMAND,PATH

# Count total number of namespaces #
| lsns | tail -n +2 | wc -l |

# Monitor container namespace creation #
| watch -n 1 'lsns | grep -E "(net | pid | mnt)"' |

# Show only user-specific namespaces #
lsns -u | grep $(whoami)

# Find namespace information for specific process #
ps -o pid,cmd,psr -p PID && lsns -p | grep PID

# Export namespace hierarchy information #
lsns -l > namespace_hierarchy.txt

# Show namespaces with specific column ordering #
lsns --output-all  # Show all available columns

# Count processes in each namespace #
lsns -p | awk '{ns[$1]++; cnt[$1]+=1} END {for(id in ns) print id, cnt[id]}'

# Detect container engines from namespace info #
| lsns -p | grep -E "(docker | containerd | podman | runc)" |

# Analyze relationship between processes and namespaces #
lsns -p -l | sort

# Show namespaces and correlate with /proc filesystem #
lsns && ls /proc/*/ns/ | head -15

# Create namespace usage report #
{
  echo "Namespace Report - $(date)"
  echo "==========================="
  lsns
} > namespace_report.txt

# Find namespaces with high process count #
lsns | awk '$5 > 50 {print $0}'

# Monitor namespace changes in real-time #
while true; do clear; date; lsns; sleep 3; done

# Show namespace info with specific formatting #
lsns -o 'NS:NSID, TYPE:NSTYPE, PROCESSES:COUNT, OWNER:USER, CMD:COMMAND'

# Export namespace data for scripting #
lsns -J | python3 -c "import sys, json; data = json.load(sys.stdin); [print(f'{ns[\"ns\"]}:{ns[\"type\"]}') for ns in data.get('namespaces',[])]"

```

## FAQ ##

### What Types Of Namespaces Does Lsns Show? ###

LSNS displays information about several types of Linux namespaces:

- `net` — Network namespaces (isolated network stack)
- `pid` — PID namespaces (process ID isolation)
- `mnt` — Mount namespaces (filesystem mount points)
- `uts` — UTS namespaces (hostname and NIS domain)
- `ipc` — IPC namespaces (inter-process communication)
- `user` — User namespaces (user/group ID mapping)
- `cgroup` — Cgroup namespaces (control group hierarchy)

### How Do I View Processes Within A Specific Namespace? ###

Use the `-p` flag to list all processes in each namespace:

```bash
lsns -p

```

To see processes in a specific namespace type:

```bash
lsns -t net -p

```

### What Are Linux Namespaces Used For? ###

Namespaces provide isolation for various global system resources:

- Process ID management
- Network interfaces and stacks
- Mount points and filesystems
- Hostnames and domain names
- Inter-process communication resources
- User and group ID mapping
- Control group hierarchies

They're fundamental to containerization technologies like Docker and Podman.

### How Do I Monitor Namespace Changes? ###

You can monitor namespace changes with:

```bash
# Continuously watch for namespace changes #
watch lsns

# Check differences over time #
lsns > before.txt
# Run some containerized processes #
lsns > after.txt
diff before.txt after.txt

```

### What Is The Difference Between Lsns And Other Process Tools? ###

- `lsns` — Shows namespace information and relationships
- `ps` — Shows process information
- `top` — Shows real-time process metrics
- `pstree` — Shows process hierarchy

LSNS specifically focuses on namespace isolation aspects of processes.

### How Do I Filter Lsns Output By User? ###

To see namespaces owned by a specific user, you can use:

```bash
lsns | grep username

```

Or use the `-u` option to focus on user ownership:

```bash
lsns -u

```
