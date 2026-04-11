# `cal` #

- **Purpose:** The `cal` command displays a calendar in the terminal, showing the current month by default. It's a simple tool for viewing dates, planning schedules, and checking day-of-week information. The command can display various calendar formats including monthly, yearly, and multi-month views, and can highlight specific dates or weekdays.
- **Usage:** `cal [OPTIONS] [MONTH] [YEAR]`

## Basic Usage ##

Display current month:

```bash
cal

```text

Display a specific month:

```bash
cal 10 2023

```text

Display a specific year:

```bash
cal 2023

```text

Display three months (previous, current, next):

```bash
cal -3

```text

Display month with ISO week numbers:

```bash
cal -w

```text

Display Julian dates:

```bash
cal -j

```text

Show upcoming days:

```bash
ncal -A 7

```text

## Options ##

- `-3` — Display previous, current, and next month
- `-1` — Display only the current month (default)
- `-A` — Display succeeding months using the -A flag
- `-B` — Display preceding months using the -B flag
- `-j` — Display Julian dates (days since January 1 of current year)
- `-m` — Display Monday as the first day of the week
- `-n` — Display the next specified number of months
- `-s` — Display Sunday as the first day of the week (default)
- `-w` — Display week numbers according to ISO 8601
- `-y` — Display the entire year
- `-Y` — Display the entire year in 3-month rows
- `-h` — Don't highlight today's date
- `--monday` — Use Monday as the first day of the week

## Shortcuts ##

Common cal operations:

```bash
# Display current year #
cal -y

# Display next 12 months #
cal -n 12

# Show previous and next months with current #
cal -3

# Display with Monday as first day #
cal -m

# Show calendar with week numbers #
cal -w

# Show last month, current month, and next month #
cal -B 1 -A 1

# Highlight specific date (today is highlighted by default) #
cal 03 2024

# Display Julian Day Numbers (days since Jan 1) #
cal -j 2024

# Show 12 months in 3 rows x 4 cols format #
cal -Y

# Show only next 3 months #
cal -A 3

# Show previous 3 months and current #
cal -B 3

# Calendar with week numbers (ISO) #
cal -w 2024

# Display a specific month from a year #
cal 7 2024  # July 2024

# Show calendar without highlighting today #
cal -h

# Compare current month with same month next year #
cal
cal 10 2024

# Display with Monday as first day #
ncal -m

# Show calendar for next quarter (3 months) #
cal -A 3

# Display calendar for previous quarter #
cal -B 3

# Show calendar with holidays (if available) #
ncal -h

# Display a specific month without year context #
cal 12  # December of current year

# Show two years side by side #
cal -y 2023
cal -y 2024

# Show month with names instead of numbers #
cal October 2024

# Display calendar with different locale #
LANG=en_US.UTF-8 cal 10 2024

# Show calendar with today's date highlighted (default behavior) #
cal

# Show calendar without today's highlight #
cal -h

# Display calendar with Sunday as first day (default) #
cal -s

# Show multiple years #
cal -y 2022
cal -y 2023
cal -y 2024

# Compare months across years #
cal 10 2023
cal 10 2024

# Monthly calendar with day of year #
cal -j 10 2024

# Show calendar with custom week start #
ncal -m -w  # Monday start with week numbers

# Display multiple months vertically #
cal 1 2024
cal 2 2024
cal 3 2024

# View calendar for leap year #
cal 2 2024  # February 2024 has 29 days

# Show calendar of a specific month across years #
cal March 2023
cal March 2024

# Display with traditional naming #
cal -3 | head -10

# View calendar with different highlighting #
ncal 10 2024

# Show upcoming months for planning #
cal -A 6  # Next 6 months

# Show previous months for reference #
cal -B 3  # Previous 3 months

# Monthly calendar with week numbers #
cal -m -w 10 2024

# Year calendar with month names #
cal -Y 2024

# Display calendar for specific quarter #
cal -A 2  # This month and next two months

# Show calendar with different first day of week #
cal -m 10 2024  # Monday first instead of Sunday

# Calendar with detailed Julian information #
cal -j 2024 | head -10

# Multiple month view for scheduling #
cal -3 && echo "^^^^ Previous, Current, Next Months"

# Yearly view with seasonal planning #
cal -Y | head -20

# Month view with week numbers for project planning #
cal -w 10 2024

# Calendar with upcoming events planning horizon #
cal -A 12  # Next 12 months for long-term planning

# Compare weekday positions across months #
cal 10 2024
cal 11 2024

# Display calendar for fiscal year planning #
cal -Y 2024 | sed -n '1,20p'

# Month view with week numbering for time tracking #
cal -w -m 10 2024

# Show how many days in each month of year #
cal -y 2024 | grep -E "[0-9]{4}" -A 12

# Calendar for academic or business planning #
cal -3 -w

# Display calendar with minimal output #
cal 10 2024 | tail -n +2

# Show calendar with alternative format #
ncal -3m  # Ncal with Monday start and 3 months

# Year comparison calendar #
cal -y 2023 | head -5
cal -y 2024 | head -5

# Seasonal calendar view #
cal -n 3  # Next 3 months for season tracking

# Calendar with Julian day for astronomical purposes #
cal -j 7 2024  # July for summer tracking

# Display month with week start customization #
ncal -mw  # Monday start with week numbers

# Calendar view for budget planning #
cal -3  # Three months view for quarterly budgeting

# Week-based calendar for work planning #
cal -w  # Week numbers for project weeks

# Calendar for anniversary or birthday planning #
cal 5 2024  # May for spring birthdays

# Calendar with holiday awareness (traditional calendars) #
| cal -y | grep -i "Jan\ | Jul\ | Dec" |

# Yearly calendar with month spacing #
cal -Y 2024 | grep -v "^$"  # Remove empty lines

```text

## FAQ ##

### What Is The Difference Between Cal And Ncal? ###

- `cal` - Traditional calendar display command
- `ncal` - Enhanced calendar command with additional features like different highlighting, alternative layouts, and additional options for displaying adjacent days

### How Do I Display A Full Year? ###

```bash
# Full year in 12-month format #
cal -y 2024

# Full year in 3-month rows #
cal -Y 2024

```text

### How Do I Show Monday As The First Day? ###

```bash
cal -m    # Current month with Monday first
cal -m 10 2024  # October 2024 with Monday first

```text

### How Do I Display Week Numbers? ###

Use the `-w` flag to display ISO week numbers:

```bash
cal -w        # Current month with week numbers
cal -w 2024   # Full year with week numbers

```text

### How Do I Show Multiple Months? ###

```bash
cal -3        # Show previous, current, and next month
cal -A 2      # Show current month and next 2 months
cal -B 1 -A 1 # Show previous, current, and next month explicitly

```text
