# `usql` #

- **Purpose:** USQL is a universal SQL command-line interface that allows connecting to various database systems with a single, consistent command. It supports multiple database drivers including PostgreSQL, MySQL, SQLite, Microsoft SQL Server, Oracle, Amazon Redshift, Google Spanner, and many others. USQL provides a common interface for database interaction regardless of the underlying database system, with consistent command syntax, formatting options, and output formats. This tool is particularly useful for database administrators and developers who work with multiple database systems and want a consistent experience across all of them.
- **Usage:** `usql [OPTIONS] [DSN]`

## Basic Usage ##

Connect to a database with connection string:

```bash
usql postgres://user:password@localhost:5432/dbname

```

Execute a single query and exit:

```bash
usql -c "SELECT * FROM users LIMIT 5;" postgres://user:pass@localhost/dbname

```

Execute SQL from a file:

```bash
usql -f query.sql postgres://user:pass@localhost/dbname

```

Connect using environment variables:

```bash
export USQL_DSN=postgres://user:pass@localhost/dbname
usql

```

Connect to local SQLite database:

```bash
usql sqlite:///path/to/database.db

```

Connect to MySQL database:

```bash
usql mysql://user:password@localhost:3306/database

```

Connect to Microsoft SQL Server:

```bash
usql sqlserver://user:password@localhost:1433/database

```

## Options ##

- `-c` — Execute a single command and exit
- `-f` — Execute commands from a file and exit
- `-d` — Connect to database by name
- `-h` — Show help message and exit
- `-H` — Print output in HTML format
- `-o` — Send output to a file
- `-p` — Password prompt for connection
- `-P` — Set session parameter (for example, -P pager=on)
- `-t` — Display only tuples (no column names or separators)
- `-T` — Set HTML table options
- `-x` — Turn on expanded table mode
- `-X` — Do not read startup file
- `-v` — Set variable assignment
- `-w` — Do not show password prompt
- `-W` — Force password prompt
- `-1` — Execute commands as a single transaction
- `-f` — Execute commands from file
- `--list` — List available DSNs from config
- `--variables` — List variables
- `--version` — Show version information

## Shortcuts ##

Common usql operations:

```bash
# Connect with password prompt #
usql -p postgres://user@localhost/dbname

# Execute query with output to file #
usql -c "SELECT COUNT(*) FROM users;" -o result.txt postgres://user:pass@localhost/dbname

# Execute multiple commands from stdin #
echo "SELECT COUNT(*) FROM posts; SELECT COUNT(*) FROM users;" | usql postgres://user:pass@localhost/dbname

# Format output as CSV #
usql -c "SELECT * FROM users;" --csv postgres://user:pass@localhost/dbname

# Connect with TLS/SSL #
usql "postgres://user:pass@localhost:5432/dbname?sslmode=require"

# List all tables in current database #
usql -c "\dt" postgres://user:pass@localhost/dbname

# List all databases #
usql -c "\l" postgres://user:pass@localhost/dbname

# Describe a table #
usql -c "\d table_name" postgres://user:pass@localhost/dbname

# Show current connection info #
usql -c "\conninfo" postgres://user:pass@localhost/dbname

# Enable query execution timing #
usql -c "\timing on" -c "SELECT * FROM large_table;" postgres://user:pass@localhost/dbname

# Use pager for long output #
usql -c "\pset pager on" postgres://user:pass@localhost/dbname

# Set output format to aligned #
usql -P format=aligned -c "SELECT * FROM users;" postgres://user:pass@localhost/dbname

# Set output format to wrapped #
usql -P format=wrapped -c "SELECT * FROM users;" postgres://user:pass@localhost/dbname

# Export query results as JSON #
usql -c "SELECT * FROM users;" --json postgres://user:pass@localhost/dbname

# Export query results as unaligned text #
usql -P format=unaligned -c "SELECT * FROM users;" postgres://user:pass@localhost/dbname

# Connect as a specific user #
usql -U username postgresql://localhost/dbname

# Set transaction isolation level #
usql -c "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;" postgres://user:pass@localhost/dbname

# Execute query and show timing #
usql -c "\timing on; SELECT * FROM users WHERE created_at > '2023-01-01';" postgres://user:pass@localhost/dbname

# Connect using different database driver aliases #
usql mysql://user:pass@localhost/db
usql pg://user:pass@localhost/db  # PostgreSQL shorthand
usql sqlite://file.db
usql sqlserver://user:pass@server/db

# Execute in batch mode (non-interactive) #
usql -c "UPDATE users SET status='inactive' WHERE last_login < '2023-01-01';" postgres://user:pass@localhost/dbname

# Use variables in queries #
usql -v table_name=users -c "SELECT * FROM :table_name;" postgres://user:pass@localhost/dbname

# Run maintenance command #
usql -c "VACUUM ANALYZE table_name;" postgres://user:pass@localhost/dbname

# Connect with custom connection timeout #
usql "postgres://user:pass@localhost:5432/dbname?connect_timeout=10"

# Execute transaction across multiple statements #
usql -c "BEGIN; UPDATE accounts SET balance = balance - 100 WHERE id = 1; UPDATE accounts SET balance = balance + 100 WHERE id = 2; COMMIT;" postgres://user:pass@localhost/dbname

# List available drivers #
usql --help | grep -i driver

# Set custom fetch size for large results #
usql -c "\set FETCH_COUNT 1000" -c "SELECT * FROM large_table;" postgres://user:pass@localhost/dbname

# Create backup of specific table #
usql -c "COPY (SELECT * FROM users) TO STDOUT WITH CSV HEADER" postgres://user:pass@localhost/dbname > users_backup.csv

# Check database connection #
usql -c "SELECT 1;" postgres://user:pass@localhost/dbname

# Set specific charset #
usql "postgres://user:pass@localhost:5432/dbname?charset=utf8mb4"

# Connect to database on custom port #
usql postgres://user:pass@localhost:5433/dbname

# Set application name for connection #
usql "postgres://user:pass@localhost:5432/dbname?application_name=myapp"

# Use different output format #
usql -P format=vertical -c "SELECT * FROM users LIMIT 1;" postgres://user:pass@localhost/dbname

# Execute script with error handling #
usql -v ON_ERROR_STOP=1 -f migration_script.sql postgres://user:pass@localhost/dbname

# Set custom search path #
usql -c "SET search_path TO myschema, public;" postgres://user:pass@localhost/dbname

# Connect with special parameters #
usql "mysql://user:pass@localhost/db?charset=utf8&parseTime=True&loc=Local"

# Show database version #
usql -c "SELECT version();" postgres://user:pass@localhost/dbname

# Connect to multiple databases sequentially #
for dsn in db1.db dsn2.db dsn3.db; do
  usql -c "SELECT COUNT(*) FROM users;" "$dsn"
done

# Export schema and data separately #
usql -c "\d+" table_name > table_schema.txt
usql -c "SELECT * FROM table_name;" > table_data.csv

# Use for database comparison #
usql -c "SELECT table_name, column_name, data_type FROM information_schema.columns;" postgres://user:pass@server1/dbname > server1_schema.txt
usql -c "SELECT table_name, column_name, data_type FROM information_schema.columns;" postgres://user:pass@server2/dbname > server2_schema.txt
diff server1_schema.txt server2_schema.txt

# Run performance analysis #
usql -c "\timing on" -c "EXPLAIN ANALYZE SELECT * FROM large_table WHERE indexed_column = 'value';" postgres://user:pass@localhost/dbname

# Set custom variables for use in scripts #
usql -v start_date="'2023-01-01'" -v end_date="'2023-12-31'" -c "SELECT * FROM orders WHERE date BETWEEN :start_date AND :end_date;" postgres://user:pass@localhost/dbname

# Use with other command-line tools #
| usql -c "SELECT id, name FROM users;" postgres://user:pass@localhost/dbname | grep "john" | wc -l |

# Batch process data #
usql -c "SELECT id FROM users WHERE status = 'pending' LIMIT 10;" postgres://user:pass@localhost/dbname | while read id; do
  echo "Processing user $id..."
done

# Create custom prompt #
usql -c "\set PROMPT1 '%n@%m %~%R%# '" postgres://user:pass@localhost/dbname

# Use prepared statements (if supported by driver) #
usql -c "PREPARE stmt AS SELECT * FROM users WHERE id = \$1; EXECUTE stmt(123);" postgres://user:pass@localhost/dbname

# Connect with certificate authentication #
usql "postgres://user@localhost/dbname?sslcert=/path/to/cert&sslkey=/path/to/key&sslrootcert=/path/to/ca"

# Export query to different formats using external tools #
usql -c "SELECT * FROM users;" postgres://user:pass@localhost/dbname | column -t > formatted_output.txt

# Use in shell scripts with error checking #
if usql -c "SELECT 1;" postgres://user:pass@localhost/dbname >/dev/null 2>&1; then
  echo "Database connection successful"
else
  echo "Database connection failed"
fi

# Test database connectivity across environments #
for env in dev staging prod; do
  echo "Testing $env:"
| usql -c "SELECT current_database(), current_user;" "$USQL_DSN_$env" 2>/dev/null | | echo "Failed to connect to $env" |
done

# Set custom statement separator #
usql -c "\pset recordsep '~'" -c "SELECT * FROM users;" postgres://user:pass@localhost/dbname

# Execute query for each database in a list #
for db in db1 db2 db3; do
  usql -c "SELECT '$db', COUNT(*) FROM users;" postgres://user:pass@localhost/"$db""
done

# Create database report #
{
  echo "Database Report - $(date)"
  echo "======================"
  usql -c "SELECT COUNT(*) FROM users;" postgres://user:pass@localhost/dbname
  usql -c "SELECT COUNT(*) FROM posts;" postgres://user:pass@localhost/dbname
} > database_report.txt

# Run administrative tasks #
usql -c "SELECT pid, query, state FROM pg_stat_activity WHERE state = 'active';" postgres://user:pass@localhost/dbname

# Compare table counts across databases #
usql -c "SELECT 'db1', COUNT(*) FROM users;" postgres://user:pass@server1/db1
usql -c "SELECT 'db2', COUNT(*) FROM users;" postgres://user:pass@server2/db2

# Check replication lag (PostgreSQL) #
usql -c "SELECT NOW() - pg_last_xact_replay_timestamp() AS replication_lag;" postgres://user:pass@replica/dbname

# Import data from CSV #
usql -c "COPY users FROM STDIN WITH CSV HEADER" -f users.csv postgres://user:pass@localhost/dbname

# Use in automated backup scripts #
timestamp=$(date +%Y%m%d_%H%M%S)
usql -c "\copy (SELECT * FROM users ORDER BY id) TO 'users_backup_$timestamp.csv' WITH CSV HEADER;" postgres://user:pass@localhost/dbname

# Test different connection parameters #
usql "postgres://user:pass@localhost:5432/dbname?connect_timeout=5&sslmode=disable&application_name=test_conn"

# Enable verbose output for debugging #
usql -v ECHO=queries -c "SELECT * FROM users LIMIT 1;" postgres://user:pass@localhost/dbname

```

## FAQ ##

### What Database Systems Does USQL Support? ###

USQL supports numerous database systems through its driver architecture:

- PostgreSQL (postgres://)
- MySQL (mysql://)
- SQLite (sqlite://)
- Microsoft SQL Server (sqlserver://)
- Oracle (oracle://)
- Amazon Redshift (postgres:// with Redshift parameters)
- Google Cloud Spanner (spanner://)
- And many others through Go database drivers

### How Do I Format Query Output? ###

USQL supports several output formats:

- Default aligned format
- Unaligned format (`-P format=unaligned`)
- HTML format (`-H` or `-P format=html`)
- CSV format (`-P format=csv`)
- Vertical format (`-P format=vertical`)

### How Do I Connect To A Database Without Storing Credentials In Command History? ###

Use environment variables:

```bash
export USQL_DSN="postgres://user:password@localhost/dbname"
usql

```

Or use a DSN file with proper permissions:

```bash
usql -f ~/private/connection.dsn

```

### What Is The Difference Between Usql And Database-Specific Clients? ###

- `usql` - Universal client with consistent interface across database systems
- `psql` - PostgreSQL-specific client with PostgreSQL-specific features
- `mysql` - MySQL-specific client with MySQL-specific features
- `sqlcmd` - Microsoft SQL Server client

USQL provides consistency when working across multiple database types, while database-specific clients provide more specialized features.

### Can I Use USQL For Production Database Administration? ###

USQL can be used for basic database administration tasks, but database-specific clients may provide more complete administrative features. For production work, consider:

- Using USQL for cross-database operations
- Using database-specific clients for advanced administrative tasks
- Ensuring your organization approves the tool for production use
- Testing commands thoroughly before executing in production

### How Do I Handle Special Characters In Passwords? ###

Percent-encode special characters in connection strings:

- Space: `%20`
- @: `%40`
- #: `%23`
- ?: `%3F`
- &: `%26`

Example:

```bash
usql "postgres://user:p%40ssw%23rd@localhost/dbname"

```
