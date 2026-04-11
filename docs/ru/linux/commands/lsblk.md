# `lsblk` #

- **Purpose:** Information about block devices (disks, partitions).

- **Why use it:** Analyze disk subsystem.

- **Key options:**

    - `-f` — filesystems;

    - `-o` — select columns.

- **Example:**

    bash

- ```bash
    # Details about partitions
    lsblk -f -o NAME,FSTYPE,SIZE,MOUNTPOINT

    ```

- **Use case:** Checking mounted filesystems.
