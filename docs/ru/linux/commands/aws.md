# `aws` #

- **Purpose:** The unified command line interface for managing Amazon Web Services (AWS) services.
- **Usage:** `aws [OPTIONS] <COMMAND> <SUBCOMMAND> [PARAMETERS]`.

## Basic Usage ##

To use the AWS CLI, you specify the service, the operation, and parameters:

List all S3 buckets in the configured account

```bash
aws s3 ls
```

Describe specific EC2 instances

```bash
aws ec2 describe-instances --instance-ids i-1234567890abcdef0
```

Configure credentials interactively:

```bash
aws configure
```

Short for copying files to/from S3 (supports local-to-s3, s3-to-local, s3-to-s3):

```bash
aws s3 cp
```

Synchronize directories and S3 prefixes recursively:

```bash
aws s3 sync
```

Quickly verify which account and user / role the CLI is currently authenticated as:

```bash
aws sts get-caller-identity
```

## Options ##

- `--profile <NAME>` — Specify a named profile from the credentials file to use for this command.
- `--region <VALUE>` — The region to send the request to (for example, `us-east-1`, `eu-west-1`).
- `--output <FORMAT>` — The formatting style for command output. Valid values are `json`, `yaml`, `text`, and `table`.
- `--debug` — Turn on debug logging, which includes information about request and response errors.
- `--dry-run` — Check whether you have the required permissions for the intended action without actually making the request (supported by specific commands like EC2).
- `--query <string>` — A JMESPath query to use in filtering the response data.
- `--help` — Display help information for the command or subcommand.

## FAQ ##

### How Do I Configure the AWS CLI? ###

Run `aws configure` in your terminal. It will prompt you for your Access Key ID, Secret Access Key, default region name, and default output format. These settings are stored in `~/.aws/credentials` and `~/.aws/config`.

### How Do I Use a Specific AWS Account or Profile? ###

If you have multiple profiles configured, you can append the `--profile` flag to your command. For example: `aws s3 ls --profile production`.

### How Can I Filter or Format the Output? ###

You can use the `--output` flag to change the format (for example, `--output table`). For advanced filtering, use the `--query` flag with JMESPath syntax. For example, to list only the Instance IDs of running EC2 instances: `aws ec2 describe-instances --query 'Reservations[].Instances[].InstanceId' --output text`.
