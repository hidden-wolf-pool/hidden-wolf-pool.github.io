# `bc` #

- **Purpose:** BC (Basic Calculator) is an arbitrary precision calculator language that supports interactive execution of mathematical operations. It accepts input from files or standard input and evaluates mathematical expressions with support for arbitrary precision arithmetic. BC can handle large integers, floating-point calculations, variables, arrays, and even user-defined functions, making it ideal for complex calculations that exceed the capabilities of the shell's built-in arithmetic.
- **Usage:** `bc [OPTIONS] [FILE...]`

## Basic Usage ##

Start an interactive BC session:

```bash
bc

```

Evaluate a simple expression:

```bash
echo "2+2" | bc

```

Evaluate expression with scale (decimal places):

```bash
echo "scale=2; 10/3" | bc

```

Read expressions from a file:

```bash
bc script.bc

```

Calculate with a specific scale:

```bash
bc -l <<< "s(1.2)"  # Using math library to calculate sine

```

Perform exponentiation:

```bash
echo "2^10" | bc

```

Calculate square root using the math library:

```bash
echo "sqrt(16)" | bc -l

```

## Options ##

- `-h` — Print usage information and exit
- `-i` — Force interactive mode
- `-l` — Define math library and set scale to 20
- `-w` — Give warnings for extensions to POSIX bc
- `-s` — Give errors instead of warnings for extensions
- `-v` — Print version information and exit
- `-q` — Do not print the normal GNU bc welcome message

## Shortcuts ##

Common bc operations:

```bash
# Basic arithmetic operations #
echo "2+3*4" | bc
echo "(2+3)*4" | bc

# Floating point division with scale #
echo "scale=5; 22/7" | bc

# Exponentiation #
echo "2^16" | bc

# Modulo operations #
echo "17%5" | bc

# Working with variables #
echo "a=5; b=3; a*b" | bc

# Square root using math library #
echo "sqrt(2)" | bc -l

# Trigonometric functions (from math library) #
echo "s(3.14159/2)" | bc -l  # sine of π/2 ≈ 1

# Cosine function #
echo "c(3.14159)" | bc -l  # cosine of π ≈ -1

# Natural logarithm #
echo "l(2.718281828)" | bc -l  # ln(e) ≈ 1

# Power function (from math library) #
echo "e(l(2)*3)" | bc -l  # 2^3 using natural log/exponential

# Define a function #
echo "define pow2(x) { return x*x; }; pow2(5)" | bc

# Factorial function #
echo "define factorial(n) { if (n <= 1) return 1; return n*factorial(n-1); }; factorial(5)" | bc

# Converting degrees to radians (for trig functions) #
echo "deg=45; rad=deg*3.14159265358979323846/180; s(rad)" | bc -l

# Convert from base 10 to other bases (with custom functions) #
echo "obase=16; ibase=10; 255" | bc  # Convert 255 to hex

# Convert from other bases to base 10 #
echo "obase=10; ibase=16; FF" | bc  # Convert FF to decimal

# Compound interest calculation #
echo "principal=1000; rate=0.05; time=10; principal*(1+rate)^time" | bc

# Using bc in a loop #
for i in {1..5}; do echo "sqrt($i)" | bc -l; done

# Precision comparison #
echo "scale=10; 22/7" | bc
echo "scale=50; 22/7" | bc

# Comparing numbers #
echo "10 > 5" | bc  # Returns 1 (true)
echo "10 < 5" | bc  # Returns 0 (false)

# Working with pi (calculated using arctangent) #
echo "4*a(1)" | bc -l  # pi using arctan of 1 = π/4

# Calculating compound growth #
echo "scale=2; 1000*(1.03)^5" | bc

# Temperature conversion #
echo "celsius=0; fahrenheit=celsius*9/5+32; fahrenheit" | bc

# Percentage calculations #
echo "part=15; whole=75; scale=2; (part/whole)*100" | bc

# Absolute value (custom function) #
echo "define abs(x) { if (x < 0) return (-x); return x; }; abs(-10)" | bc

# Maximum of two numbers #
echo "define max(a,b) { if (a > b) return a; return b; }; max(10,15)" | bc

# Minimum of two numbers #
echo "define min(a,b) { if (a < b) return a; return b; }; min(10,15)" | bc

# Check if number is even #
echo "define iseven(n) { if (n%2 == 0) return 1; return 0; }; iseven(4)" | bc

# Check if number is odd #
echo "define isodd(n) { if (n%2 == 1) return 1; return 0; }; isodd(5)" | bc

# Fibonacci sequence (iterative) #
echo "define fib(n) { if (n <= 1) return n; a=0; b=1; for(i=2; i<=n; i++) { temp=a+b; a=b; b=temp; }; return b; }; fib(10)" | bc

# Sum of series #
echo "sum=0; for(i=1; i<=10; i++) { sum = sum + i; }; sum" | bc

# Average of numbers #
echo "numbers=5; sum=10+20+30+40+50; scale=2; sum/numbers" | bc

# Calculate distance (Pythagorean theorem) #
echo "x=3; y=4; sqrt(x*x + y*y)" | bc -l

# Area of circle #
echo "radius=5; 3.14159265358979323846*radius^2" | bc

# Area of triangle with Heron's formula #
echo "a=3; b=4; c=5; s=(a+b+c)/2; sqrt(s*(s-a)*(s-b)*(s-c))" | bc -l

# Calculate standard deviation (simple approximation) #
echo "n=5; sum=15; sumsq=45; mean=sum/n; sqrt((sumsq - n*mean^2)/(n-1))" | bc -l

# Working with exponential growth #
echo "P=1000; r=0.0693; t=10; P*e(r*t)" | bc -l

# Using conditional logic #
echo "score=85; if (score >= 90) grade=\"A\"; if (score >= 80 && score < 90) grade=\"B\"; grade" | bc

# Generate random-like number using time #
echo "scale=0; (314159*12345)%1000" | bc

# Calculate mortgage payment (simplified) #
echo "P=200000; r=0.04/12; n=360; payment=P*(r*(1+r)^n)/((1+r)^n-1); scale=2; payment" | bc

# Working with time calculations (seconds to hours) #
echo "seconds=3661; hours=seconds/3600; scale=2; hours" | bc

# Calculate compound continuous interest #
echo "P=1000; r=0.05; t=10; P*e(r*t)" | bc -l

# Calculate depreciation (straight line) #
echo "asset=10000; salvage=1000; life=10; (asset - salvage)/life" | bc

# Calculate distance between two points #
echo "x1=0; y1=0; x2=3; y2=4; sqrt((x2-x1)^2 + (y2-y1)^2)" | bc -l

# Convert Fahrenheit to Celsius #
echo "fahrenheit=100; celsius=(fahrenheit-32)*5/9; scale=2; celsius" | bc

# Calculate the hypotenuse #
echo "a=3; b=4; scale=5; sqrt(a^2 + b^2)" | bc -l

```

## FAQ ##

### What Is The Difference Between Bc And Bash Arithmetic? ###

- Bash arithmetic (`$((...))`) - Limited to integer operations, faster but less precise
- BC - Supports arbitrary precision floating-point operations, more versatile for complex calculations

### How Do I Set The Scale For Decimal Places? ###

Use the `scale` variable to set decimal places:

```bash
echo "scale=2; 10/3" | bc  # Output: 3.33
echo "scale=10; 10/3" | bc # Output: 3.3333333333

```

### How Do I Use The Math Library Functions? ###

Use the `-l` flag to load the math library:

```bash
# Square root #
echo "sqrt(16)" | bc -l

# Trigonometric functions (angles in radians) #
echo "s(1.5708)" | bc -l  # sine of π/2 ≈ 1

# Natural logarithm #
echo "l(2.71828)" | bc -l  # ln of e ≈ 1

# Exponential function #
echo "e(1)" | bc -l  # e^1 ≈ 2.718

```

### How Do I Convert Between Number Bases? ###

BC supports different input (`ibase`) and output (`obase`) bases:

```bash
# Convert from decimal to hexadecimal #
echo "obase=16; 255" | bc  # Output: FF

# Convert from hexadecimal to decimal #
echo "obase=10; ibase=16; FF" | bc  # Output: 255

# Convert from binary to decimal #
echo "obase=10; ibase=2; 1111" | bc  # Output: 15

```

### How Can I Make BC Non-Interactive In Scripts? ###

Use echo with pipe or command substitution to send expressions to BC:

```bash
# Using pipe #
result=$(echo "22/7" | bc -l)

# Using heredoc #
result=$(bc << EOF
scale=2
22/7
EOF
)

```
