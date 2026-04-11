# `pstree` #

- **Purpose:** Visualizes the process tree.

- **Why use it:** Understand parent-child process hierarchy.

- **Key options:**

    - `-p` — show PIDs;

    - `-u` — filter by user.

- **Example:**

    bash

- ```bash
    # Nginx process tree with PIDs
    pstree -p | grep nginx

    ```

- **Use case:** Analyzing background tasks of a user.
