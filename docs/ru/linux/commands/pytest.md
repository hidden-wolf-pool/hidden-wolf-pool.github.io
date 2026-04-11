# `pytest` #

- **Purpose:** Pytest is a powerful testing framework for Python that enables the creation of simple and scalable test suites. It supports various testing paradigms including simple unit tests, complex functional testing, and parameterized tests. Pytest automatically discovers tests, provides detailed assertion introspection, has a rich plugin architecture, and integrates well with other tools. It's widely used in the Python community for testing applications of all sizes.
- **Usage:** `pytest [OPTIONS] [PATHS...]`

## Basic Usage ##

Run all tests in the current directory:

```bash
pytest

```

Run a specific test file:

```bash
pytest test_module.py

```

Run tests in a specific directory:

```bash
pytest tests/

```

Run a specific test function within a file:

```bash
pytest test_module.py::test_function_name

```

Run a specific test class:

```bash
pytest test_module.py::TestClass

```

Run tests matching a pattern:

```bash
pytest -k "pattern"

```

Run tests with specific marker:

```bash
pytest -m marker_name

```

## Options ##

- `-v` — Verbose output showing all tests and their names
- `-x` — Stop after first failure
- `-s` — Capture no output (allows print statements to show)
- `-m` — Run only tests matching given marker expression
- `-k` — Run only tests matching given substring expression
- `--tb` — Traceback print mode (auto, short, long, line, native, no)
- `-n` — Number of workers (with pytest-xdist plugin)
- `--cov` — Measure test coverage (with pytest-cov plugin)
- `-q` — Quiet output mode
- `-l` — Show local variables in tracebacks
- `--lf` — Run only the last failed tests
- `--ff` — Run all tests but run the last failures first

## Shortcuts ##

Common pytest operations:

```bash
# Run tests with verbose output #
pytest -v

# Run tests and stop on first failure #
pytest -x

# Run tests and show local variables in tracebacks #
pytest -l

# Run only the last failed tests #
pytest --lf

# Run all tests but run last failures first #
pytest --ff

# Run tests matching a keyword pattern #
pytest -k "integration"

# Run tests with specific marker #
pytest -m slow
pytest -m "not slow"

# Run tests and show print statements #
pytest -s

# Run tests with coverage #
pytest --cov=myproject

# Run tests with specific traceback format #
pytest --tb=short

# Run tests in parallel (requires pytest-xdist) #
pytest -n auto

# Run tests and output in junit format #
pytest --junitxml=report.xml

# Run tests with increased verbosity #
pytest -vv

# Run tests and exit with code 0 even if tests fail #
pytest --exitfirst

# Run tests with pdb debugger on first failure #
pytest --pdb

# Run tests with pdb debugger on any failure #
pytest --pdb --exitfirst

# Run tests and show captured output on failure #
pytest -v --tb=short

# Run tests with specific number of failures to catch #
pytest --maxfail=2

# Run tests with random order (pytest-randomly plugin) #
pytest --randomly-seed=123

# Run tests and profile durations #
pytest --durations=10

# Run tests and show help for plugins #
pytest --fixtures

# Run tests with specific Python markers #
pytest -m "not integration"

# Run tests matching multiple patterns #
pytest -k "test_login and not smoke"

# Run tests with capture disabled for debugging #
pytest -s -k "test_debug"

# Run tests from specific files and directories #
pytest tests/unit_tests/ tests/integration_tests/

# Run tests with environment variables #
ENV_VAR=value pytest -k "test_name"

# Run tests and save results to file #
pytest --result-log=test_results.txt

# Run tests with strict markers (fail if marker not registered) #
pytest -W error::pytest.PytestUnknownMarkWarning

# Run tests and show only failures #
pytest --tb=line

# Run tests in quiet mode #
pytest -q

# Run tests with custom configuration file #
pytest -c myconfig.ini

# Run tests with specific plugins disabled #
pytest -p no:cacheprovider

# Run tests and create HTML reports (pytest-html) #
pytest --html=report.html --self-contained-html

# Run specific test methods in a class #
pytest path/to/test_file.py::TestClass::test_method

# Run tests since last run #
pytest --last-failed

# Run tests and time out after specified seconds #
pytest --timeout=30  # Requires pytest-timeout plugin

# Run tests and show coverage by line #
pytest --cov=myproject --cov-report=html

# Run tests with different Python interpreters #
python3.9 -m pytest
python3.10 -m pytest

```

## FAQ ##

### How Do I Install Pytest? ###

Install pytest using pip:

```bash
pip install pytest
pip install pytest-cov  # For coverage reports
pip install pytest-html # For HTML reports

```

### How Do I Write A Basic Test With Pytest? ###

Create a test file (for example, `test_example.py`):

```python
def add(a, b):
    return a + b

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0

```

Then run tests with:

```bash
pytest test_example.py

```

### What Are Pytest Fixtures? ###

Pytest fixtures are functions that provide a baseline setup for tests. They are used to inject data, objects, or set up test environments before tests run:

```python
import pytest

@pytest.fixture
def sample_data():
    return {"name": "John", "age": 30}

def test_user(sample_data):
    assert sample_data["name"] == "John"

```

### How Do I Run Tests Conditionally Based On Markers? ###

Define markers in tests:

```python
import pytest

@pytest.mark.slow
def test_slow_functionality():
    # This test takes a long time
    pass

@pytest.mark.integration
def test_integration():
    # This test requires external services
    pass

```

Run with specific markers:

```bash
pytest -m slow        # Run only slow tests
pytest -m "not slow"  # Run all tests except slow ones
pytest -m "slow or integration"  # Run slow or integration tests

```

### How Do I Debug Pytest Tests? ###

Use the following approaches:

1. Add `--pdb` to enter debugger on failures:

   ```bash
   pytest --pdb test_file.py

   ```

2. Use `--pdb-trace` to enter debugger immediately:

   ```bash
   pytest --pdb-trace

   ```

3. Use print statements (with `-s` flag to see output):

   ```bash
   pytest -s test_file.py

   ```

4. Add a breakpoint in your test code (Python 3.7+):

   ```python
   def test_something():
       # ... some code ...
       breakpoint()  # This will start the debugger

   ```

### What Are Some Common Pytest Conventions? ###

- Test files should be named `test_*.py` or `*_test.py`
- Test functions should be named `test_*`
- Test classes should be named `Test*` (capitalized)
- Use `assert` statements for testing
- Test functions should take no parameters (unless using fixtures)
