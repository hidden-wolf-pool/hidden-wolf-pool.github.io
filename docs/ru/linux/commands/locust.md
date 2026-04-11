# `locust` #

- **Purpose:** Locust is a modern load testing tool written in Python that allows users to define realistic load testing scenarios using simple Python code. It simulates real users by creating multiple processes or greenlets that execute user-defined tasks to stress test web applications, APIs, or other systems. Locust provides a web-based interface for monitoring tests, real-time statistics, and the ability to scale across multiple machines. It's particularly useful for performance testing, identifying bottlenecks, and validating application scalability under various load conditions.
- **Usage:** `locust [OPTIONS] [ATTRIBUTES...]`

## Basic Usage ##

Run locust with a Python test script:

```bash
locust -f load_test.py

```

Run with specific host:

```bash
locust -f load_test.py --host=https://example.com

```

Run in headless mode (without web UI):

```bash
locust -f load_test.py --headless -u 100 -r 10 -t 10m

```

Run with specific number of users and spawn rate:

```bash
locust -f load_test.py --users 100 --spawn-rate 10

```

Run with specific test duration:

```bash
locust -f load_test.py --run-time 20m

```

Run with specific hatch rate (spawn rate):

```bash
locust -f load_test.py --spawn-rate 5

```

Run a specific task set:

```bash
locust -f load_test.py --task-set MyUserBehavior

```

## Options ##

- `-f` — Python file containing Locust test
- `--host` — Host to load test in the following format: `http://10.21.32.33`
- `--config` — Config file path
- `--users` — Number of concurrent users
- `--spawn-rate` — Number of users to spawn per second
- `--headless` — Run without web interface
- `--run-time` — Stop after the specified amount of time (e.g. 20s, 20m, 3h, 1h30m, and so on)
- `-u` — Shortcut for --users
- `-r` — Shortcut for --spawn-rate
- `-t` — Shortcut for --run-time
- `--web-host` — Host to bind for the web interface
- `--web-port` — Port for the web interface
- `--master` — Run in master mode for distributed load testing
- `--worker` — Run in worker mode for distributed load testing
- `--expect-workers` — How many workers the master should expect to connect before starting the test

## Shortcuts ##

Common locust operations:

```bash
# Basic test with default settings #
locust -f test.py

# Run with specific target host #
locust -f test.py --host=http://localhost:8000

# Headless test with 1000 users over 10 minutes #
locust -f test.py --headless -u 1000 -r 50 -t 10m

# Test with custom spawn rate #
locust -f test.py --spawn-rate 20

# Run with specific number of users #
locust -f test.py --users 500

# Run test for specific duration #
locust -f test.py --run-time 30m

# Distributed testing - Master node #
locust -f test.py --master --web-port=8089

# Distributed testing - Worker node #
locust -f test.py --worker --master-host=192.168.1.100

# Use specific Locust class from test file #
locust -f test.py --locustfile-class=ApiUser

# Set web interface host and port #
locust -f test.py --web-host=0.0.0.0 --web-port=9999

# Run with specific log level #
locust -f test.py --loglevel DEBUG

# Run with custom configuration file #
locust -f test.py --config /path/to/config.conf

# Run with tags to run only specific tasks #
locust -f test.py --tags api login

# Run excluding certain tags #
locust -f test.py --exclude-tags admin

# Set stop timeout for graceful shutdown #
locust -f test.py --stop-timeout 60

# Set master bind host and port #
locust -f test.py --master --master-bind-host=* --master-bind-port=5557

# Worker with specific master host and port #
locust -f test.py --worker --master-host=master.locust --master-port=5557

# Set CSV file output #
locust -f test.py --csv=/output/stats

# Set HTML report output #
locust -f test.py --html=/output/report.html

# Set requests per second limit #
locust -f test.py --rate-limit 100

# Set number of requests to run before quitting #
locust -f test.py --num-request=1000

# Start headless with web UI enabled #
locust -f test.py --headless --web-host=0.0.0.0 --web-port=8089

# Run without resetting stats between runs #
locust -f test.py --reset-stats=0

# Run with custom User class #
locust -f test.py --user-class MyCustomUser

# Set the location to save request statistics #
locust -f test.py --json --json-path /tmp/stats.json

# Enable insecure SSL #
locust -f test.py --insecure

# Run with specific certificate file #
locust -f test.py --certfile /path/to/cert.pem

# Run with specific key file #
locust -f test.py --keyfile /path/to/key.pem

# Run with custom CA bundle #
locust -f test.py --ca-cert /path/to/ca.pem

# Set custom client key password #
locust -f test.py --client-certs /path/to/client.pem

# Run in quiet mode (less output) #
locust -f test.py --console-output-level QUIET

# Set minimum think time override #
locust -f test.py --min-wait 100

# Set maximum think time override #
locust -f test.py --max-wait 1000

# Run with specific hatch rate during headless mode #
locust -f test.py --headless -r 20 -u 1000 -t 5m

# Distributed setup with specific worker count #
locust -f test.py --master --expect-workers=3

# Use custom test class name #
locust -f test.py --class-picker

# Enable profiling for performance analysis #
locust -f test.py --profile

# Run with custom environment variables #
LOCUST_HOST=https://example.com locust -f test.py

# Set custom file upload size limit #
locust -f test.py --upload-size-limit 50000

# Run with specific TCP timeout #
locust -f test.py --tcp-timeout 60

# Enable detailed error logging #
locust -f test.py --loglevel ERROR

# Generate reports during headless run #
locust -f test.py --headless --csv=results --html=report.html -u 100 -t 5m

# Run multiple test files #
locust -f test1.py,test2.py

# Run with custom statistics interval #
locust -f test.py --stats-history-enabled --stats-history-max 20

# Set custom heartbeat intervals #
locust -f test.py --heartbeat-liveness 30

# Run with custom worker class #
locust -f test.py --worker-class eventlet

# Enable TLS for master/worker communication #
locust -f test.py --master --master-ssl

# Run with custom request name #
locust -f test.py --request-stats-name-max-length 200

# Set custom greenlet spawn rate #
locust -f test.py --spawning-complete-timeout 10

# Enable custom event hooks #
locust -f test.py --event-hook /path/to/hooks

# Set custom wait time multiplier #
locust -f test.py --wait-time-multiplier 1.0

# Enable custom load shaping #
locust -f test.py --shape-class MyLoadShape

# Run with custom messaging timeout #
locust -f test.py --master-heartbeat-liveness 30

# Set custom master port range #
locust -f test.py --master-port-range 8000-9000

# Run without web UI but with console stats #
locust -f test.py --headless --only-summary

# Set custom number of log messages to keep #
locust -f test.py --log-messages-max-lines 1000

# Run with custom SSL context #
locust -f test.py --ssl-cert-reqs required

# Run with custom SSL verification mode #
locust -f test.py --ssl-verify False

# Use custom test data file #
locust -f test.py --test-data-path /path/to/data

# Run with custom load test duration per phase #
locust -f test.py --ramp-up-time 120 --sustain-time 300

# Set custom connection pooling options #
locust -f test.py --connection-pool-maxsize 100

# Run with custom DNS resolution #
locust -f test.py --dns-resolver default

# Enable custom reporting endpoint #
locust -f test.py --report-endpoint http://example.com/api/reports

# Set custom graceful shutdown settings #
locust -f test.py --graceful-stop-timeout 30

```

## FAQ ##

### What Is A Locust Test File? ###

A Locust test file is a Python script that defines one or more user classes that inherit from `HttpUser` or `User`. These classes define the behavior of simulated users, including tasks to execute, wait times between tasks, and how users interact with the system under test. A basic test file might include:

```python
from locust import HttpUser, task, between

class ApiUser(HttpUser):
    wait_time = between(1, 3)

    @task
    def homepage(self):
        self.client.get("/")

    @task
    def view_item(self):
        self.client.get(f"/item/{self.id}")

```

### How Do I Run A Load Test Without The Web Interface? ###

Use the `--headless` option to run in command-line mode:

```bash
locust -f test.py --headless -u 100 -r 10 -t 10m

```

This runs the test for 10 minutes with 100 users spawning at a rate of 10 per second.

### What Is The Difference Between Master And Worker Nodes? ###

- `Master` - Coordinates the test, aggregates statistics, and controls the workers
- `Worker` - Executes the actual load test, generates traffic to the target system

For distributed testing:

```bash
# On master node: #
locust -f test.py --master --host=https://target.com

# On each worker node: #
locust -f test.py --worker --master-host=MASTER_IP

```

### How Do I Define Custom Behavior For Load Tests? ###

Create a Python file with user behavior classes:

```python
from locust import HttpUser, task, between

class MyUser(HttpUser):
    wait_time = between(2, 4)

    @task(2)  # Run this task twice as often as other tasks
    def view_product(self):
        self.client.get("/products/123")

    @task
    def search_products(self):
        self.client.get("/search?q=phones")

```

### How Do I Limit The Number Of Requests Per Second? ###

Use the `--rate-limit` option to cap the requests per second:

```bash
locust -f test.py --rate-limit 100

```

This limits the total request rate across all users to 100 requests per second.

### How Do I Save Test Results To Files? ###

Use the CSV option to save statistics:

```bash
locust -f test.py --csv=/path/to/output --headless -u 100 -t 10m

```

Or save an HTML report:

```bash
locust -f test.py --html=/path/to/report.html --headless -u 100 -t 10m

```
