# `shuf` #

- **Purpose:** The `shuf` command (shuffle) randomly permutes lines or input from files. It's part of the GNU coreutils and provides a way to randomize the order of input lines, pick random lines, or generate random permutations with optional seeds. The command is useful for creating randomized test data, sampling from large datasets, shuffling playlist entries, anonymizing data for analysis, or any scenario where random ordering of input is needed. Shuf ensures each input line has an equal probability of appearing in any position in the output, making it valuable for statistical applications and random sampling.
- **Usage:** `shuf [OPTIONS] [INPUT_FILE]`

## Basic Usage ##

Shuffle lines in a file randomly:

```bash
shuf file.txt

```

Shuffle stdin input:

```bash
echo -e "line1\nline2\nline3" | shuf

```

Output only a specified number of shuffled lines:

```bash
shuf -n 5 file.txt

```

Repeat lines (with possible duplicates):

```bash
shuf -r -n 10 file.txt

```

Use a specific random seed for reproducible results:

```bash
shuf --random-source=seed.txt file.txt

```

Zero-terminate output lines:

```bash
shuf -z file.txt

```

Shuffle with specific random source:

```bash
shuf --random-source=/dev/urandom file.txt

```

Generate random numbers within a range:

```bash
shuf -i 1-100

```

## Options ##

- `-e` — Treat each command-line operand as an input line
- `-i` — Operate on the range of integers LO-HI
- `-n` — Output at most COUNT lines
- `-o` — Write result to FILE instead of standard output
- `-r` — Repeat output values, that is, select with replacement
- `-z` — Delimit items with a zero byte rather than newline
- `--random-source` — Get random bytes from FILE
- `--repeated` — Same as -r
- `--head-count` — Same as -n
- `--separator` — Use SEP instead of newline as record separator

## Shortcuts ##

Common shuf operations:

```bash
# Shuffle and output first 10 lines #
shuf -n 10 file.txt

# Shuffle with seed for reproducible results #
shuf --random-source=<(echo "seed") file.txt

# Shuffle and save to file #
shuf file.txt -o shuffled.txt

# Generate random numbers (1-1000) #
shuf -i 1-1000

# Pick 5 random numbers from range #
shuf -i 1-100 -n 5

# Randomize order of lines from command output #
ls /path/to/directory | shuf

# Shuffle and repeat (with duplicates possible) #
shuf -r -n 20 file.txt

# Randomize order with zero termination #
shuf -z file.txt

# Use specific random source file #
shuf --random-source=/path/to/seed_file file.txt

# Shuffle words instead of lines (combine with tr) #
| tr ' ' '\n' < file.txt | shuf | tr '\n' ' ' |

# Create random sample of log entries #
shuf -n 100 /var/log/access.log

# Randomize order of files for processing #
for file in $(ls *.txt | shuf); do echo "Processing $file"; done

# Randomize array elements in bash #
arr=("item1" "item2" "item3" "item4" "item5")
printf '%s\n' "${arr[@]}" | shuf

# Create randomized playlist #
find /music/directory -name "*.mp3" | shuf > playlist.m3u

# Randomly select from stdin #
echo -e "choice1\nchoice2\nchoice3" | shuf -n 1

# Generate random alphanumeric sequences #
shuf -er -n 8 {a..z} {A..Z} {0..9}

# Create random sequence of numbers #
seq 1 100 | shuf

# Randomize order of commands in script #
| cat commands.txt | shuf | while read cmd; do eval "$cmd"; done |

# Shuffle with specific output delimiter #
shuf -d ',' file.txt

# Random sampling without replacement #
shuf -n 10 file.txt

# Random sampling with replacement #
shuf -r -n 10 file.txt

# Randomly reorder lines with specific seed #
shuf --random-source=<(printf "42") file.txt

# Create random permutation of a smaller file #
shuf -o output.txt input.txt

# Randomly order a list of hosts #
shuf hosts.txt

# Shuffle for random testing order #
| cat test_cases.txt | shuf | xargs -I {} python run_test.py {} |

# Generate random passwords (8 characters) #
shuf -er -n 8 {a..z} {A..Z} {0..9} | tr -d '\n'; echo

# Randomly pick k items from n possibilities #
shuf -n k items.txt

# Shuffle and take sample with specific size #
shuf --head-count=25 large_file.txt

# Randomize execution order in parallel tests #
| cat test_scripts.txt | shuf | parallel |

# Create random subset of data #
shuf -n 500 data.csv

# Randomly shuffle array of files #
files=(*.txt)
for file in $(printf '%s\n' "${files[@]}" | shuf); do
  echo "Processing: $file"
done

# Create random order of tasks #
cat tasks.txt | shuf

# Randomize the order of grep results #
grep "pattern" file.txt | shuf

# Shuffle for A/B testing randomization #
| seq 1 1000 | shuf | head -n 50 > test_group.txt |

# Randomly assign subjects to groups #
total_items=100
test_size=20
| cat items.txt | shuf | head -n $test_size > test_group.txt |
| cat items.txt | shuf | tail -n +$((test_size+1)) > control_group.txt |

# Randomize database query results order #
# In practice: query | shuf #

# Shuffle with weighted randomness (conceptual approach) #
# For weighted randomization: implement with custom logic around shuf #

# Pick random lines from multiple files #
cat file1.txt file2.txt file3.txt | shuf -n 10

# Randomly select entries from CSV #
shuf data.csv | head -n 20

# Create random order for experiments #
printf '%s\n' {condition_A,condition_B,condition_C}{1..10} | shuf > experiment_order.txt

# Shuffle to anonymize data order #
shuf sensitive_data.txt

# Randomize directory processing order #
| find /path -type d | shuf | while read dir; do |
  echo "Processing directory: $dir"
done

# Use shuf for random sampling in data science #
shuf -n 1000 data_set.txt > sample.txt

# Create random order of tests #
find tests/ -name "test_*.py" | shuf

# Randomize string generation #
shuf -er -n 12 {a..z} {A..Z} {0..9} | tr -d '\n'; echo ""

# Randomly reorder columns in a file (conceptual) #
# Actual implementation would need additional commands #

# Generate random lottery numbers #
shuf -i 1-49 -n 6

# Shuffle and count #
shuf file.txt | wc -l

# Randomize processing of files with different extensions #
| find . -name "*.log" -o -name "*.txt" | shuf | while read file; do |
  process_file "$file"
done

# Create random string of specific length #
shuf -er -n 16 {A..Z} {a..z} {0..9} | tr -d '\n'; echo

# Shuffle with specific modulo (using external tools) #
| shuf file.txt | awk 'BEGIN{srand(12345)} {print rand() "\t" $0}' | sort -n | cut -f2- |

# Randomly assign tasks to workers #
shuf tasks.txt | split -n l/4/4 worker4_tasks.txt  # 4 workers, 4th worker's tasks

# Randomize order for load distribution #
| cat servers.txt | shuf | head -n 1 |

# Create reproducible random shuffle for testing #
SEED=$(date +%s)
shuf --random-source=<(printf "$SEED") file.txt

# Shuffle while maintaining some structure (conceptual) #
# More complex shuffling while preserving relationships #

# Create random but balanced selection #
# Use multiple shuf commands with specific logic to ensure balance #

# Generate random permutations for algorithm testing #
seq 1 10 | shuf

# Randomize order of service startups #
| cat services.txt | shuf | xargs -I {} systemctl start {} |

# Shuffle with custom comparison (external sort) #
shuf file.txt | sort -k 2,2n  # Sort shuffled content by second field

# Create multiple random samples #
for i in {1..5}; do shuf -n 20 file.txt > sample_$i.txt; done

# Randomize order with exclusion patterns #
grep -v exclude_pattern file.txt | shuf

# Randomize order of parallel jobs #
for job in $(cat jobs.txt | shuf); do
  run_job "$job" &
done
wait

# Generate random IP addresses #
for i in {1..10}; do
  printf "192.168.%d.%d\n" $(shuf -i 0-255 -n 1) $(shuf -i 0-255 -n 1)
done

# Randomize order of file processing with error handling #
while IFS= read -r file; do
  if process_file "$file"; then
    echo "Processed: $file"
  else
    echo "Failed: $file" >&2
  fi
done < <(shuf files_to_process.txt)

# Create random timestamps #
for i in {1..10}; do
  date -d @$(shuf -i 1609459200-1704067200 -n 1)  # Random dates in 2021-2024 range
done

# Randomize order and limit by size #
shuf large_file.txt | head -c 10000

# Create random order with specific distribution #
# Conceptual: combine shuf with other statistical tools #

# Random selection with weighting approach #
# Conceptual: implement weighted random selection outside shuf #

# Randomize order with custom random function #
shuf --random-source=/dev/random file.txt

# Use shuf in combination with other commands for complex operations #
shuf -n 5 file.txt | xargs -I {} scp {} remote:/destination/

# Random order for benchmarking #
for iteration in $(seq 1 10 | shuf); do
  run_benchmark $iteration
done

# Randomize order of network tests #
| cat ip_addresses.txt | shuf | while read ip; do |
  ping -c 1 "$ip"
done

# Create random but consistent ordering for tests #
shuf --random-source=<(printf "fixed_seed") input.txt

# Random selection with verification #
validate_and_select() {
  # Select random items and validate them
  shuf -n 10 file.txt | while read item; do
    if verify_item "$item"; then
      echo "$item"
    fi
  done
}

```

## FAQ ##

### How Do I Generate Reproducible Random Shuffles? ###

Use a fixed random source:

```bash
# Using a fixed seed from a file #
printf "42" | shuf --random-source=/dev/stdin file.txt

# Or using a specific seed file #
shuf --random-source=seed_file.txt file.txt

```

### What Is The Difference Between Shuf And Sort -R? ###

- `shuf` - Designed specifically for randomizing order of lines
- `sort -R` - Sorts randomly using the sort command

`shuf` offers more options such as picking exactly N random lines, repeating, or operating on integer ranges.

### Can I Use Shuf With Other Commands? ###

Yes, shuf works well with pipelines:

```bash
# Random sample from command output #
ls /path | shuf -n 5

# Random order of file processing #
| find . -name "*.txt" | shuf | while read file; do |
  process_file "$file"
done

```

### How Do I Pick A Random Line From A File? ###

```bash
shuf -n 1 file.txt

```

This selects one random line from the file with equal probability for each line.

### How Do I Generate Random Numbers With Shuf? ###

Use the `-i` option to specify an integer range:

```bash
# Generate single random number between 1-100 #
shuf -i 1-100 -n 1

# Generate 10 random numbers between 1-1000 #
shuf -i 1-1000 -n 10

# Generate random numbers with repetition allowed #
shuf -i 1-10 -n 5 -r  # Might include duplicates

```

### How Do I Randomly Select From A List Of Items? ###

```bash
# Using echo with newline separation #
echo -e "item1\nitem2\nitem3" | shuf -n 1

# From a file #
shuf -n 1 items.txt

# From command line arguments #
shuf -e apple banana orange -n 1

```
