# `patchelf` #

- **Purpose:** The `patchelf` command is a simple utility for modifying the dynamic linker and RPATH of ELF executables and libraries. It's primarily used to adjust binary executables so they can find their required libraries when deployed in different environments or directory structures. This tool is particularly useful in packaging and deployment scenarios where the original hardcoded paths in binaries don't match the target system's directory layout. Patchelf can change the interpreter, modify the RPATH (runtime library search path), add or remove needed libraries, and update various ELF headers with minimal disruption to the binary structure.
- **Usage:** `patchelf [OPTIONS] ELF_FILE`

## Basic Usage ##

Show the current interpreter of an ELF file:

```bash
patchelf --print-interpreter binary_executable

```

Show the current RPATH of an ELF file:

```bash
patchelf --print-rpath binary_executable

```

Change the RPATH to a new value:

```bash
patchelf --set-rpath /new/library/path binary_executable

```

Prepend to the existing RPATH:

```bash
patchelf --set-rpath /new/path:$(patchelf --print-rpath binary_executable) binary_executable

```

Change the dynamic linker (interpreter):

```bash
patchelf --set-interpreter /lib64/ld-linux-x86-64.so.2 binary_executable

```

Add a new library dependency:

```bash
patchelf --add-needed libname.so binary_executable

```

Remove a library dependency:

```bash
patchelf --remove-needed libname.so binary_executable

```

Replace a library dependency:

```bash
patchelf --replace-needed oldlib.so newlib.so binary_executable

```

## Options ##

- `--set-rpath` — Set the RPATH to the specified value
- `--add-rpath` — Add to the RPATH (keeping the original paths)
- `--remove-rpath` — Remove the RPATH section
- `--set-interpreter` — Set the dynamic linker path
- `--print-interpreter` — Print the current dynamic linker path
- `--print-rpath` — Print the current RPATH
- `--shrink-rpath` — Remove entries that do not contain needed libraries
- `--allowed-rpath-prefixes` — Specify allowed prefixes for RPATH entries
- `--force-rpath` — Force setting RPATH instead of RUNPATH
- `--remove-needed` — Remove a library from the NEEDED section
- `--add-needed` — Add a library to the NEEDED section
- `--replace-needed` — Replace one library with another
- `--debug` — Print debugging information
- `--version` — Print the version of patchelf

## Shortcuts ##

Common patchelf operations:

```bash
# Print current interpreter #
patchelf --print-interpreter /path/to/binary

# Print current RPATH #
patchelf --print-rpath /path/to/binary

# Set new RPATH for application-specific libraries #
patchelf --set-rpath /app/lib /app/binary

# Add additional path to existing RPATH #
patchelf --set-rpath /new/path:$(patchelf --print-rpath /app/binary) /app/binary

# Set interpreter for custom environment #
patchelf --set-interpreter /custom/lib/ld.so /app/binary

# Add required library dependency #
patchelf --add-needed custom_lib.so /app/binary

# Remove problematic library dependency #
patchelf --remove-needed problematic_lib.so /app/binary

# Replace old library with newer version #
patchelf --replace-needed old_lib.so new_lib.so /app/binary

# Backup before patching #
cp /app/binary /app/binary.backup && patchelf --set-rpath /new/libs /app/binary

# Batch update RPATH for multiple binaries #
for bin in /app/bin/*; do
  if [ -f "$bin" && -x "$bin" ](/%20-f%20"$bin"%20&&%20-x%20"$bin"%20.md); then
    patchelf --set-rpath /app/lib:$ORIGIN/lib "$bin"
  fi
done

# Verify changes after patching #
patchelf --print-rpath /app/binary

# Print all dynamic section info #
patchelf --print-interpreter /app/binary && patchelf --print-rpath /app/binary

# Set RPATH relative to binary location #
patchelf --set-rpath '$ORIGIN/lib' /app/binary

# Set multiple paths in RPATH #
patchelf --set-rpath '/app/lib:/usr/local/lib:/opt/lib' /app/binary

# Shrink RPATH to only necessary paths #
patchelf --shrink-rpath /app/binary

# Update RPATH and verify #
patchelf --set-rpath /new/path /app/binary && patchelf --print-rpath /app/binary

# Add needed library and verify #
patchelf --add-needed debug_lib.so /app/binary && ldd /app/binary

# Remove problematic library and check dependencies #
patchelf --remove-needed bad_lib.so /app/binary && ldd /app/binary

# Print all relevant information about binary #
echo "Interpreter: $(patchelf --print-interpreter /app/binary)"
echo "RPATH: $(patchelf --print-rpath /app/binary)"

# Check if binary needs patching #
if patchelf --print-rpath /app/binary | grep -q "/old/path"; then
  patchelf --set-rpath "/new/path" /app/binary
fi

# Conditionally set RPATH based on architecture #
if [ $(uname -m) == "x86_64" ](/%20$(uname%20-m.md)%20==%20"x86_64"%20); then
  patchelf --set-rpath /app/lib64 /app/binary
else
  patchelf --set-rpath /app/lib /app/binary
fi

# Use patchelf in build scripts #
patchelf --set-rpath /usr/local/lib --set-interpreter /lib64/ld-linux-x86-64.so.2 /build/binary

# Patch binary in place (make executable writable) #
chmod +w /app/binary && patchelf --set-rpath /custom/lib /app/binary

# Add multiple dependencies at once #
patchelf --add-needed lib1.so --add-needed lib2.so --add-needed lib3.so /app/binary

# Replace multiple libraries #
patchelf --replace-needed old1.so new1.so --replace-needed old2.so new2.so /app/binary

# Remove multiple dependencies #
patchelf --remove-needed lib_old1.so --remove-needed lib_old2.so /app/binary

# Set RPATH based on binary name #
binary_name=$(basename /app/binary)
patchelf --set-rpath "/app/${binary_name}/lib" /app/binary

# Print RPATH in a script-friendly way #
rpath=$(patchelf --print-rpath /app/binary)
echo "Current RPATH: $rpath"

# Backup and modify for different environment #
binary_path="/app/binary"
cp "$binary_path" "${binary_path}.orig"
patchelf --set-rpath /env_a/lib "$binary_path"

# Test patched binary #
LD_DEBUG=libs /app/binary 2>&1 | head -20

# Find all binaries in directory and patch RPATH #
| find /app -type f -executable -exec file {} \; | grep ELF | cut -d: -f1 | while read bin; do |
  patchelf --set-rpath /app/lib "$bin"
done

# Update RPATH to include origin #
patchelf --set-rpath '$ORIGIN/../lib:$ORIGIN/lib' /app/binary

# Conditionally add library based on existence #
if [ -f /app/optional_lib.so ]; then
  patchelf --add-needed optional_lib.so /app/binary
fi

# Set RUNPATH instead of RPATH #
patchelf --force-rpath=no --set-rpath /app/lib /app/binary

# Print all dynamic dependencies #
objdump -p /app/binary | grep NEEDED

# Update interpreter path for compatibility #
patchelf --set-interpreter /lib64/ld-linux-x86-64.so.2 /app/binary

# Batch process all binaries in a package #
for binary in /package/usr/bin/* /package/usr/libexec/*; do
  if [ -f "$binary" ](/%20-f%20"$binary"%20.md); then
    patchelf --set-rpath /package/lib "$binary"
  fi
done

# Use absolute path for debugging #
patchelf --set-rpath /usr/lib/debug /debug/binary

# Add debugging library to binary #
patchelf --add-needed libdebug.so /app/binary

# Verify all changes were applied #
for binary in /app/binary1 /app/binary2; do
  patchelf --print-rpath "$binary"
  patchelf --print-interpreter "$binary"
done

# Modify RPATH to include current directory #
patchelf --set-rpath '$ORIGIN:/usr/lib' /app/binary

# Set RPATH for bundled applications #
patchelf --set-rpath '$ORIGIN/lib:$ORIGIN/lib64' /app/bundle/binary

# Add zlib dependency (common requirement) #
patchelf --add-needed libz.so.1 /app/binary

# Replace generic library with optimized version #
patchelf --replace-needed libc.so.6 libc_optimized.so.6 /app/binary

# Prepare binary for containerization #
patchelf --set-rpath /app/container-libs /app/container-binary

# Add security library #
patchelf --add-needed libsecurity.so /app/binary

# Debug patchelf operations #
patchelf --debug --set-rpath /debug/libs /app/binary

# Set RPATH for cross-platform compatibility #
patchelf --set-rpath /app/lib/x86_64-linux-gnu:/app/lib /app/binary

# Create environment-specific configuration #
patchelf --set-interpreter /app/glibc/ld.so --set-rpath /app/glibc/lib /app/binary

# Update library dependencies for version change #
patchelf --replace-needed libssl1.1.so libssl3.so /app/binary

# Verify the integrity of the binary after patching #
sha256sum /app/original_binary /app/binary  # Compare if checksums differ only by patched sections

# Integrate into deployment scripts #
if [ "$DEPLOY_ENV" = "prod" ]; then
  patchelf --set-rpath /prod/lib --set-interpreter /lib64/ld.so.1 /deploy/binary
elif [ "$DEPLOY_ENV" = "dev" ]; then
  patchelf --set-rpath /dev/lib /deploy/binary
fi

# Check for library conflicts before patching #
ldd /app/binary | grep "not found"

# Apply multiple patchelf operations in one command #
patchelf --set-rpath /new/lib --set-interpreter /lib/ld.so --add-needed extra_lib.so /app/binary

# Create portable binary configuration #
patchelf --set-rpath '$ORIGIN/lib:$ORIGIN/../lib' --force-rpath=yes /app/portable_binary

```

## FAQ ##

### What Is The RPATH? ###

RPATH (Run-time Path) is an ELF binary attribute that specifies the locations where the dynamic loader should search for shared libraries. It allows binaries to find required libraries even when they're not in the standard system library paths. The RPATH is embedded in the binary itself and takes precedence over environment variables like LD_LIBRARY_PATH.

### When Would I Need To Use Patchelf? ###

You might need `patchelf` when:

- Deploying applications with bundled libraries in non-standard locations
- Repackaging software for different Linux distributions with different library paths
- Creating portable applications that bundle their dependencies
- Fixing binaries that were built with incorrect library paths
- Setting up containerized applications with specific library requirements

### What Is The Difference Between RPATH And LD_LIBRARY_PATH? ###

- `RPATH` - Embedded in the binary, specifies library search paths permanently
- `LD_LIBRARY_PATH` - Environment variable, affects library search paths temporarily during execution

RPATH is more robust as it travels with the binary, while LD_LIBRARY_PATH must be set in the execution environment.

### How Do I Find Out What Libraries A Binary Needs? ###

Use `ldd` to see the library dependencies:

```bash
ldd binary_file

```

This shows all shared libraries the binary requires and where they're expected to be found.

### Can I Break A Binary By Using Patchelf? ###

Yes, incorrect use of patchelf can break a binary:

- Setting incorrect interpreter path can make the binary non-executable
- Removing required libraries can cause runtime errors
- Setting wrong RPATH might cause the binary to not find libraries

Always test patched binaries and keep backups before modifying.

### What Does The $ORIGIN Token Do In RPATH? ###

The `$ORIGIN` token in RPATH refers to the directory containing the binary being executed. It allows creating relative paths, making binaries more portable. For example, if RPATH is set to `$ORIGIN/lib`, the loader will look for libraries in the same directory as the binary in a subdirectory called "lib".
