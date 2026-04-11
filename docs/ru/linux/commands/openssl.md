# `openssl` #

- **Purpose:** OpenSSL is a robust, commercial-grade, full-featured toolkit for the Transport Layer Security (TLS) and Secure Sockets Layer (SSL) protocols. It's also a general-purpose cryptography library that provides a wide range of cryptographic functions. The OpenSSL command-line tool is powerful and multifunctional, offering capabilities for certificate creation, key generation, encryption, decryption, hashing, and other cryptographic operations. It's essential for system administrators, security professionals, and developers working with encryption, certificates, secure communications, and cryptographic operations.
- **Usage:** `openssl [COMMAND] [COMMAND OPTIONS] [ARGUMENTS...]`

## Basic Usage ##

Generate a new RSA private key:

```bash
openssl genrsa -out private.key 2048

```

Create a self-signed certificate:

```bash
openssl req -new -x509 -key private.key -out certificate.crt -days 365

```

Create a certificate signing request (CSR):

```bash
openssl req -new -key private.key -out request.csr

```

View certificate information:

```bash
openssl x509 -in certificate.crt -text -noout

```

Decrypt an encrypted file:

```bash
openssl aes-256-cbc -d -in encrypted_file.enc -out decrypted_file.txt

```

Encrypt a file:

```bash
openssl aes-256-cbc -salt -in file.txt -out encrypted_file.enc

```

Hash a file with SHA-256:

```bash
openssl sha256 file.txt

```

Check if a private key matches a certificate:

```bash
openssl x509 -noout -modulus -in certificate.crt | openssl md5
openssl rsa -noout -modulus -in private.key | openssl md5

```

## Options ##

- `genrsa` — Generate RSA private key
- `req` — X.509 certificate signing request (CSR) management
- `x509` — X.509 certificate data management
- `rsa` — RSA key processing
- `pkcs12` — PKCS#12 container manipulation
- `dhparam` — Generate DH parameters
- `enc` — Encoding with ciphers
- `passwd` — Generation of hashed passwords
- `s_client` — SSL/TLS client
- `s_server` — SSL/TLS server
- `ciphers` — Cipher suite descriptions
- `version` — Print version information
- `help` — Display help for commands

## Shortcuts ##

Common OpenSSL operations:

```bash
# Generate a private key using different algorithms #
openssl genrsa -out private.pem 2048
openssl ecparam -genkey -name secp384r1 -out private.pem

# Create a certificate with custom configuration #
openssl req -new -key private.key -out csr.csr -subj "/C=US/ST=State/L=City/O=Organization/CN=domain.com"

# Generate a certificate with SANs (Subject Alternative Names) #
cat > san.cnf << EOF
[req]
distinguished_name = req_distinguished_name
req_extensions = v3_req
prompt = no

[req_distinguished_name]
CN = localhost

[v3_req]
basicConstraints = CA:FALSE
keyUsage = nonRepudiation, digitalSignature, keyEncipherment
subjectAltName = @alt_names

[alt_names]
DNS.1 = localhost
DNS.2 = *.example.com
IP.1 = 127.0.0.1
EOF

openssl req -new -key private.key -out csr_san.csr -config san.cnf

# Check a certificate signing request #
openssl req -text -noout -verify -in request.csr

# Convert PEM to DER format #
openssl x509 -in cert.pem -outform DER -out cert.der

# Convert DER to PEM format #
openssl x509 -inform DER -in cert.der -out cert.pem

# Create PKCS#12 from certificate and key #
openssl pkcs12 -export -in certificate.crt -inkey private.key -out cert.p12

# Extract public key from private key #
openssl rsa -in private.key -pubout -out public.key

# Extract certificate from PKCS#12 file #
openssl pkcs12 -in cert.p12 -out certificate.crt -clcerts -nokeys

# Extract private key from PKCS#12 file #
openssl pkcs12 -in cert.p12 -out private.key -nocerts -nodes

# Generate DH parameters for DHE ciphers #
openssl dhparam -out dhparam.pem 2048

# Check certificate against a server #
openssl s_client -connect example.com:443 -servername example.com

# Verify certificate chain #
openssl verify -CAfile ca_bundle.crt certificate.crt

# Create a test certificate with key in one step #
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes

# Check certificate expiration date #
openssl x509 -in certificate.crt -noout -enddate

# Check if certificate is about to expire #
exp_date=$(openssl x509 -in certificate.crt -noout -enddate | cut -d= -f2)
exp_seconds=$(date -d "$exp_date" +%s)
current_seconds=$(date +%s)
days_until_exp=$(echo "($exp_seconds - $current_seconds) / 86400" | bc)
| [ $days_until_exp -lt 30 ] && echo "Certificate expires in $days_until_exp days!" | | echo "Certificate is good for more than 30 days" |

# Hash files with different algorithms #
openssl md5 file.txt
openssl sha1 file.txt
openssl sha256 file.txt
openssl sha512 file.txt

# Encrypt with AES-256-CBC #
openssl enc -aes-256-cbc -salt -pbkdf2 -in file.txt -out file.enc

# Decrypt with AES-256-CBC #
openssl enc -aes-256-cbc -d -pbkdf2 -in file.enc -out file.txt

# Generate password hash #
openssl passwd -1 password123

# Create SSL server for testing #
openssl s_server -accept 4433 -cert certificate.crt -key private.key -WWW

# Check server certificate info #
echo | openssl s_client -showcerts -servername example.com -connect example.com:443 2>/dev/null

# View certificate details in a concise format #
openssl x509 -in certificate.crt -noout -subject -issuer -dates -serial

# Check certificate fingerprint #
openssl x509 -in certificate.crt -noout -fingerprint -sha256

# Verify private key format #
openssl rsa -in private.key -check

# Check CSR details #
openssl req -in request.csr -noout -subject -pubkey

# Get certificate from remote server #
openssl s_client -connect google.com:443 -servername google.com < /dev/null 2>/dev/null | openssl x509 -outform PEM > cert.crt

# Create Certificate Authority (CA) #
openssl req -new -x509 -keyout ca.key -out ca.crt -days 365 -subj "/C=US/ST=CA/L=SF/O=MyCA/OU=IT/CN=MyCA"

# Sign certificate with custom CA #
openssl x509 -req -in csr.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out signed_cert.crt

# Create a PKCS#10 certificate request #
openssl req -new -key private.key -out cert.req

# Create encrypted private key #
openssl genrsa -aes256 -passout pass:mypassword -out encrypted_private.key 2048

# Decrypt private key #
openssl rsa -passin pass:mypassword -in encrypted_private.key -out decrypted_private.key

# Generate SSH key from OpenSSL key #
| openssl rsa -in private.key -pubout -outform SSH -out public_key.ssh 2>/dev/null | | echo "SSH format not supported, using alternative" |

# Create elliptic curve key pair #
openssl ecparam -name secp256r1 -genkey -noout -out ec_private.key
openssl ec -in ec_private.key -pubout -out ec_public.key

# Check certificate and private key match #
openssl x509 -noout -modulus -in certificate.crt | openssl md5
openssl rsa -noout -modulus -in private.key | openssl md5
# Both should produce the same hash if they match #

# Verify certificate against server #
openssl s_client -connect example.com:443 -cert client_cert.pem -key client_key.pem

# Create a Certificate Signing Request with SANs #
openssl req -new -key private.key -out csr_with_sans.csr -subj "/C=US/ST=State/L=City/O=Org/OU=Unit/CN=example.com" -reqexts SAN -config <(cat /etc/ssl/openssl.cnf <(printf "\n[SAN]\nsubjectAltName=DNS:example.com,DNS:www.example.com"))

# View certificate extensions #
openssl x509 -in certificate.crt -noout -ext all

# Decode base64 encoded certificate #
| echo "encoded_cert_data" | openssl base64 -d -A | openssl x509 -text -noout |

# Check certificate signing algorithm #
openssl x509 -in certificate.crt -noout -sigalg

# Convert certificate between different formats #
openssl x509 -in cert.pem -outform pem -out cert_pem.crt
openssl x509 -in cert.pem -outform der -out cert_der.crt

# Generate a key and certificate with configuration #
cat > gen_cert.conf << EOF
[req]
default_bits = 2048
prompt = no
default_md = sha256
distinguished_name = dn
req_extensions = v3_req

[dn]
CN=localhost
O=Test Organization
C=US

[v3_req]
basicConstraints = CA:FALSE
keyUsage = nonRepudiation, digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth, clientAuth
subjectAltName = @alt_names

[alt_names]
DNS.1 = localhost
DNS.2 = example.local
IP.1 = 127.0.0.1
EOF

openssl req -new -newkey rsa:2048 -days 365 -nodes -x509 -keyout server.key -out server.crt -config gen_cert.conf

# Check certificate revocation status (if OCSP is available) #
openssl ocsp -issuer ca.crt -cert certificate.crt -url http://ocsp.example.com -resp_text

# Create a certificate chain #
cat server.crt ca.crt > fullchain.crt

# Export certificate with specific format #
openssl x509 -in certificate.crt -outform PEM -out exported_cert.pem

# Create PFX/P12 with specific password #
openssl pkcs12 -export -out cert.pfx -inkey private.key -in certificate.crt -password pass:export_password

# Check certificate validity period #
openssl x509 -in certificate.crt -noout -checkend 86400  # Check if valid for next 24 hours

# Generate random bytes #
openssl rand -hex 16
openssl rand -base64 12

# Verify CSR against CA #
openssl req -verify -in request.csr -CA ca.crt -noout

# Sign CSR with CA and extensions #
openssl x509 -req -in csr.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out signed.crt -extensions server_ext -extfile openssl.cnf

# Create trust store #
cat root_ca.crt intermediate_ca.crt > truststore.pem

# Check certificate against trust store #
openssl verify -CAfile truststore.pem certificate.crt

# Export private key in different format #
openssl rsa -in private.key -outform PEM -out exported_private.pem

# Create encrypted key without password prompt #
openssl genrsa -aes256 -passout pass:password -out encrypted_key.key 2048

# Test SSL connection with specific protocol #
openssl s_client -connect example.com:443 -tls1_2

# Print certificate in specific format #
openssl x509 -in certificate.crt -outform TXT

# Extract specific field from certificate #
openssl x509 -in certificate.crt -noout -subject | awk -F'CN=' '{print $2}'

# Create certificate with specific key usage #
openssl req -new -x509 -key private.key -out cert_w_usage.crt -days 365 -extensions v3_req -config <(cat /etc/ssl/openssl.cnf <(printf "[v3_req]\nbasicConstraints=CA:FALSE\nkeyUsage=digitalSignature,keyEncipherment,dataEncipherment\nextendedKeyUsage=serverAuth"))

# Generate public key in OpenSSH format #
ssh-keygen -f private.key -y > public_key_openssh.txt  # Alternative if available
# OR (if supported by system) #
openssl rsa -in private.key -pubout -outform SSH 2>/dev/null

# Create a self-signed certificate with custom validity #
openssl req -new -newkey rsa:2048 -days 1825 -nodes -x509 -keyout long_life.key -out long_life.crt

# Check if certificate has specific extension #
openssl x509 -in certificate.crt -noout -extensions extendedKeyUsage

# Create CSR with specific attributes #
openssl req -new -key private.key -out req_with_attr.csr -addext "subjectAltName = DNS:example.com, DNS:www.example.com"

# Verify certificate against multiple CAs #
openssl verify -CAfile ca1.crt -CAfile ca2.crt certificate.crt

# Create certificate with specific serial number #
openssl req -new -x509 -key private.key -out cert_serial.crt -days 365 -set_serial 12345

# Create a new certificate from existing one #
openssl x509 -in certificate.crt -signkey private.key -days 365 -req -out new_cert.crt

# Export certificate to different formats #
openssl x509 -in cert.pem -outform PEM -out cert_export.pem
openssl x509 -in cert.pem -outform DER -out cert_export.der
openssl x509 -in cert.pem -outform NET -out cert_export.net

# Decrypt with specific password from file #
openssl enc -aes-256-cbc -d -in encrypted_file.enc -out decrypted_file.txt -pass file:password_file.txt

# Encrypt with password from environment #
echo "password" | openssl enc -aes-256-cbc -salt -in file.txt -out file.enc -pass stdin

# Check certificate compliance with CA/Browser forum #
| openssl x509 -in certificate.crt -noout -text | grep -E "Certificate Policies | Authority Information Access" |

# Create and verify certificate pair #
openssl genrsa -out test.key 2048
openssl req -new -key test.key -out test.csr -subj "/CN=test"
openssl x509 -req -days 365 -in test.csr -signkey test.key -out test.crt
openssl verify -CAfile test.crt test.crt

# Export certificate with different encryption #
openssl pkcs12 -export -out cert_enc.p12 -inkey private.key -in certificate.crt -encryptkey

# Generate key with specific parameters #
openssl genpkey -algorithm rsa -out genpkey_rsa.pem -pkeyopt rsa_keygen_bits:2048

# Create certificate with SAN using config file #
cat > san_config.conf << EOF
[req]
prompt = no
distinguished_name = dn
req_extensions = ext

[dn]
CN=localhost

[ext]
subjectAltName = DNS:localhost, DNS:myhost.local, IP:127.0.0.1
EOF

openssl req -new -key private.key -out csr_san.conf -config san_config.conf -reqexts ext

# Check certificate for specific vulnerabilities #
| openssl x509 -in certificate.crt -noout -text | grep -E "3des | md5 | sha1" |

# Create certificate chain verification #
openssl verify -untrusted intermediate.crt -CAfile root_ca.crt certificate.crt

# Generate DH parameters for specific group #
openssl dhparam -C 2048  # Output as C code

# Create encrypted private key using different algorithm #
openssl genrsa -des3 -passout pass:password -out des3_private.key 2048

# Check certificate against CRL (Certificate Revocation List) #
openssl verify -CAfile ca.crt -crl_check_all -CRLfile crl.pem certificate.crt

# Create self-signed ECDSA certificate #
openssl req -new -x509 -key ec_private.key -out ecdsa_cert.crt -days 365

# Create certificate with specific OID #
openssl req -new -x509 -key private.key -out cert_oid.crt -days 365 -addext "certificatePolicies = 1.2.3.4.5"

# Export private key with specific format #
openssl rsa -in private.key -outform PEM -out exported_rsa.pem

# Create certificate with specific digest algorithm #
openssl req -new -x509 -key private.key -out cert_sha256.crt -days 365 -sha256

# Generate and encrypt key in one command #
openssl genpkey -algorithm rsa -out encrypted_rsa_key.pem -aes-256-cbc -pass pass:password

# Verify certificate against server with specific cipher #
openssl s_client -connect example.com:443 -cipher 'HIGH:!aNULL:!eNULL:!DES'

# Create certificate with specific subject attributes #
openssl req -new -key private.key -out req_subject.csr -subj "/C=US/ST=California/L=San Francisco/O=Company Name/OU=Org Unit/CN=common.name"

# Check if private key is passphrase protected #
| openssl rsa -in private.key -passin pass:password -check 2>/dev/null && echo "Has passphrase" | | echo "No passphrase" |

# Create PKCS#8 private key format #
openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in private.key -out pkcs8_private.key

# Convert from PKCS#8 to traditional format #
openssl rsa -in pkcs8_private.key -out traditional_private.key

# Create certificate with CSR extension #
echo "subjectAltName=DNS:example.com,DNS:www.example.com" > csr_ext.cnf
openssl req -new -key private.key -out csr_ext.csr -config csr_ext.cnf -reqexts req_ext -extensions req_ext

# Create certificate with specific policies #
openssl req -new -x509 -key private.key -out cert_policy.crt -days 365 -addext "certificatePolicies = ia5org,1.2.3.4.5"

# Generate key with specific strength #
openssl genpkey -algorithm rsa -out strong_key.pem -pkeyopt rsa_keygen_bits:4096

# Create certificate with specific authority key ID #
openssl req -new -x509 -key private.key -out cert_akid.crt -days 365 -addext "authorityKeyIdentifier=keyid,issuer"

# Verify certificate validity against specific date #
# (Conceptual - would require specific parameters based on system) #

# Export certificate without private key #
openssl x509 -in certificate.crt -out pub_cert_only.pem

# Check certificate for common security issues #
| openssl x509 -in certificate.crt -noout -text | grep -E "weak | insecure | deprecated | obsolete" |

# Create certificate with specific basic constraints #
openssl req -new -x509 -key private.key -out cert_constraints.crt -days 365 -addext "basicConstraints=CA:FALSE,pathlen:0"

# Create a certificate chain verification script #
#!/bin/bash
CERT_FILE=$1
CA_FILE=$2
if openssl verify -CAfile "$CA_FILE" "$CERT_FILE" 2>/dev/null; then
  echo "Certificate verification PASSED"
else
  echo "Certificate verification FAILED"
fi

# Generate a key and check its strength #
KEY_FILE=temp_key.pem
openssl genrsa -out "$KEY_FILE" 2048
| KEY_BITS=$(openssl rsa -in "$KEY_FILE" -text -noout | grep "Private-Key" | grep -o "[0-9]* bit" | cut -d' ' -f1) |
echo "Generated key is $KEY_BITS bits"
rm "$KEY_FILE"

# Create certificate with specific OCSP responder #
openssl req -new -x509 -key private.key -out cert_ocsp.crt -days 365 -addext "authorityInfoAccess=OCSP;URI:http://ocsp.example.com"

# Encrypt file with password from key derivation #
openssl enc -aes-256-cbc -pbkdf2 -iter 10000 -salt -in file.txt -out file_enc.pbkdf2

# Check certificate compliance against security standards #
| openssl x509 -in certificate.crt -noout -text | grep -E "Signature Algorithm: | Public-Key: | Issuer:" |

# Create certificate for specific use case (server, client, code signing) #
openssl req -new -x509 -key private.key -out server_cert.crt -days 365 -addext "extendedKeyUsage=serverAuth"

# Generate and verify certificate with specific parameters #
openssl req -new -newkey rsa:3072 -nodes -keyout temp.key -out temp.csr -subj "/CN=temp"
openssl x509 -req -days 365 -in temp.csr -signkey temp.key -out temp.crt
openssl x509 -in temp.crt -noout -modulus | openssl md5
openssl rsa -in temp.key -noout -modulus | openssl md5
rm temp.key temp.csr temp.crt

```

## FAQ ##

### How Do I Generate An RSA Key Pair? ###

Generate a private key and extract the public key:

```bash
# Generate private key #
openssl genrsa -out private.key 2048

# Extract public key #
openssl rsa -in private.key -pubout -out public.key

```

### How Do I Check If A Certificate Is Valid? ###

Check certificate validity:

```bash
# View certificate details #
openssl x509 -in certificate.crt -text -noout

# Check specific validity period #
openssl x509 -in certificate.crt -noout -dates

# Verify if still valid (returns 0 if valid) #
openssl x509 -in certificate.crt -noout -checkend 86400  # Check next 24 hours

```

### How Do I Create A Self-Signed Certificate? ###

```bash
# With interactive prompts #
openssl req -new -x509 -key private.key -out certificate.crt -days 365

# Without interactive prompts (using subject) #
openssl req -new -x509 -key private.key -out certificate.crt -days 365 -subj "/C=US/ST=State/L=City/O=Org/OU=Unit/CN=example.com"

```

### How Do I Encrypt And Decrypt A File? ###

```bash
# Encrypt a file #
openssl enc -aes-256-cbc -salt -in file.txt -out file.enc

# Decrypt a file #
openssl enc -aes-256-cbc -d -in file.enc -out file.txt

```

### How Do I Check If A Private Key Matches A Certificate? ###

Compare the modulus of both files:

```bash
# Get modulus of certificate #
openssl x509 -noout -modulus -in certificate.crt | openssl md5

# Get modulus of private key #
openssl rsa -noout -modulus -in private.key | openssl md5

```

If both hashes match, the key and certificate correspond to each other.

### What Is The Difference Between PKCS#8 And Traditional Private Key Format? ###

- Traditional format - PEM format with "RSA PRIVATE KEY" header, used by default
- PKCS#8 format - More modern format supporting different algorithms, with "PRIVATE KEY" header

Convert to PKCS#8:

```bash
openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in private.key -out pkcs8_private.key

```
