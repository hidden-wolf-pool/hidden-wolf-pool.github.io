# `git` #

- **Purpose:** Git is a distributed version control system designed to track changes in source code during software development. It enables multiple developers to collaborate on projects, manage different versions of files, maintain a complete history of modifications, and resolve conflicts efficiently.
- **Usage:**
    - Initialize and manage repositories (`git init`, `git clone`).
    - Track file changes (`git add`, `git status`).
    - Commit changes with descriptive messages (`git commit`).
    - View project history (`git log`).
    - Switch between branches and merge code (`git branch`, `git checkout`, `git merge`).
    - Synchronize with remote repositories (`git push`, `git pull`, `git fetch`).
    - Resolve conflicts and inspect differences (`git diff`, `git rebase`).

## Basic Usage ##

Initialize a new Git repository:

```bash
git init

```

Clone a remote repository to your local machine:

```bash
git clone <url>

```

Stage changes for the next commit:

```bash
git add <file>

```

Save staged changes with a descriptive message:

```bash
git commit -m "<message>"

```

Show the state of the working directory and staging area:

```bash
git status

```

Display the commit history:

```bash
git log

```

List, create, or delete branches:

```bash
git branch

```

Switch to a specific branch:

```bash
git checkout <branch>

```

Integrate changes from another branch:

```bash
git merge <branch>

```

Upload local commits to a remote repository:

```bash
git push

```

Fetch and integrate remote changes into the current branch:

```bash
git pull

```

Show remote repository URLs:

```bash
git remote -v

```

View changes between commits, branches, or working directory:

```bash
git diff

```

## Advanced Usage ##

### Setup and Configuration ###

Initialize a new Git repository:

```bash
git init

```

Clone and create a local copy of a remote repository:

```bash
git clone <url>

```

Configure global Git settings:

```bash
git config --global <setting_name> <value>

```

Configure local Git settings for a specific repo:

```bash
git config --local <setting_name> <value>

```

Show a summary of your Git configuration settings:

```bash
git config --list

```

Set a custom text editor for Git messages:

```bash
git config --global core.editor "<editor_command>"

```

Create a Git command alias:

```bash
git config --global alias.<shortcut> <command>

```

Enable automatic colorization of Git output:

```bash
git config --global color.ui auto

```

Cache Git credentials for a certain amount of time:

```bash
git config --global credential.helper 'cache --timeout=<seconds>'

```

Configure git to detect specific types of whitespace errors:

```bash
git config --global core.whitespace <options>

```

Automatically prune remote-tracking branches when fetching updates:

```bash
git config --global fetch.prune true

```

Set a custom diff tool for Git:

```bash
git config --global diff.tool <tool>

```

Set a custom merge tool for Git:

```bash
git config --global merge.tool <tool>

```

Compare changes using a custom diff tool:

```bash
git difftool

```

Resolve merge conflicts with a custom merge tool:

```bash
git mergetool

```

### File Operations ###

Show working tree status:

```bash
git status

```

Add files to the staging area:

```bash
git add <file>
git add <directory>
git add *.txt

```

Remove files from working tree and staging area:

```bash
git rm <file>
git rm -r <directory>

```

Move or rename a file:

```bash
git mv <old_file> <new_file>

```

Commit changes with a message:

```bash
git commit -m "commit message"
git commit -am "commit message" # Add and commit in one step

```

Show differences between working tree and last commit:

```bash
git diff
git diff --staged  # Differences in staged files

```

Assume a tracked file is unchanged:

```bash
git update-index --assume-unchanged <file>

```

Restore normal behavior of tracking changes:

```bash
git update-index --no-assume-unchanged <file>

```

Show differences between two commits:

```bash
git diff <commit_id1>..<commit_id2>

```

Unstage a file, but keep in the working directory:

```bash
git reset HEAD <file_name>

```

Discard changes in working directory:

```bash
git checkout -- <file_name>

```

Checkout specific version of a file:

```bash
git checkout <commit_hash> -- <file_name>

```

View file at specific commit:

```bash
git show <commit>:<file_path>

```

Track previously untracked file:

```bash
git add <file_name>

```

Stop tracking a file without removing it from disk:

```bash
git rm --cached <file_name>

```

### Branching and Merging ###

List all branches:

```bash
git branch

```

Create a new branch:

```bash
git branch <branch_name>

```

Switch to a specific branch:

```bash
git checkout <branch_name>
# Alternative: create and switch in one command #
git checkout -b <branch_name>

```

Merge a branch into the current branch:

```bash
git merge <branch_name>

```

Delete a specific branch:

```bash
git branch -d <branch_name>      # Safe deletion (only if merged)
git branch -D <branch_name>      # Force deletion

```

List all remote branches:

```bash
git branch -r

```

List branches with additional information:

```bash
git branch -vv

```

Create and switch to a new branch:

```bash
git checkout -b <new_branch>

```

Rename current branch:

```bash
git branch -m <new_name>

```

Create a new branch based on a remote branch:

```bash
git checkout -b <branch_name> <remote_name>/<remote_branch>

```

Cancel merge in case of conflicts:

```bash
git merge --abort

```

Rebase the current branch onto another branch:

```bash
git rebase <branch_name>

```

Cancel an ongoing rebase operation:

```bash
git rebase --abort

```

Interactive rebase for editing, squashing, reordering or dropping commits:

```bash
git rebase -i

```

Rebase commits in the current branch onto a remote branch interactively:

```bash
git rebase -i <remote_name>/<remote_branch>

```

Compare branches:

```bash
git diff <branch1>..<branch2>

```

See common ancestor of two branches:

```bash
git merge-base <branch1> <branch2>

```

Prune remote tracking branches:

```bash
git remote prune <remote_name>

```

Fast-forward merge without creating merge commit:

```bash
git merge --ff-only <branch_name>

```

Squash merge (merge as single commit):

```bash
git merge --squash <branch_name>

```

Abort merge with conflicts and return to last commit:

```bash
git merge --abort

```

### Remote Repositories ###

List remote repositories:

```bash
git remote

```

Add a remote repository:

```bash
git remote add <name> <url>

```

Fetch from a remote repository:

```bash
git fetch <remote_name>

```

Pull changes from a remote branch:

```bash
git pull <remote_name> <remote_branch>

```

Push changes to a remote repository:

```bash
git push <remote_name> <local_branch>

```

Remove a remote repository:

```bash
git remote rm <remote_name>

```

Display information about a specific remote repository:

```bash
git remote show <remote_name>

```

Show the tracking branches for remote repositories:

```bash
git remote show <remote_name> --verbose

```

Fetch updates from all remote repositories:

```bash
git remote update

```

Force-push changes to a remote repository, overwriting remote history:

```bash
git push --force <remote_name> <local_branch>
git push --force-with-lease <remote_name> <local_branch>  # Safer alternative

```

Push all tags to a remote repository:

```bash
git push --tags <remote_name>

```

Rename a remote repository:

```bash
git remote rename <old_name> <new_name>

```

Change the URL of a remote repository:

```bash
git remote set-url <name> <new_url>

```

Remove stale remote-tracking branches:

```bash
git remote prune <remote_name>

```

List all remote branches that have been merged into the current branch:

```bash
git branch -r --merged

```

List all remote branches not yet merged into the current branch:

```bash
git branch -r --no-merged

```

Fetch updates from a remote repository and prune obsolete remote-tracking branches:

```bash
git fetch -p

```

Track a remote branch and set up the local branch to automatically sync with it:

```bash
git branch --track <branch_name> <remote_name>/<remote_branch>

```

Set an existing local branch to track a remote branch:

```bash
git branch -u <remote_name>/<remote_branch>

```

Push a branch to a remote repository and set it to track the remote branch:

```bash
git push -u <remote_name> <local_branch>

```

Remove the tracking association between a local and a remote branch:

```bash
git branch --unset-upstream <branch_name>

```

View remote URLs:

```bash
git remote -v

```

Get the URL of a remote repository:

```bash
git remote get-url <remote_name>

```

Configure remote tracking branch:

```bash
git branch --set-upstream-to=<remote_name>/<remote_branch>

```

Delete remote branch:

```bash
git push <remote_name> --delete <branch_name>

```

Sync with remote repository:

```bash
git fetch origin
git reset --hard origin/main  # Destructive, use with caution

```

Pull with rebase instead of merge:

```bash
git pull --rebase <remote_name> <remote_branch>

```

### Commit History ###

Show commit history:

```bash
git log

```

Display a condensed commit history:

```bash
git log --oneline

```

Show branching commit history:

```bash
git log --graph

```

Filter commit history by author:

```bash
git log --author=<author_name>

```

Show commit history since specific date:

```bash
git log --since=<date>

```

Show commit history until specific date:

```bash
git log --until=<date>

```

Show commit history with statistics:

```bash
git log --stat

```

Show commit history with patches:

```bash
git log -p

```

Show commit history in a specific format:

```bash
git log --pretty=format:"%h - %an, %ar : %s"

```

Show commit history for a specific file:

```bash
git log --follow <file_name>

```

Show commit history with a graphical representation:

```bash
git log --graph --oneline --all

```

Show commits that modify specific lines:

```bash
git log -L <start>,<end>:<file>

```

Search commit messages with specific text:

```bash
git log --grep=<text>

```

Show commits that changed specific files:

```bash
git log -- <file_path>

```

Show commit history with custom number of commits:

```bash
git log -n 10

```

Show commit history in compact graph:

```bash
git log --oneline --graph --all

```

Show commits by multiple authors:

```bash
git log --author="Author1\|Author2"

```

Show commits in chronological order (oldest first):

```bash
git log --reverse

```

Show commits with short SHA:

```bash
git log --abbrev-commit

```

View commit history with custom date format:

```bash
git log --date=iso

```

Show commits with file rename information:

```bash
git log --find-renames

```

Compare two commits:

```bash
git log <commit1>..<commit2>

```

Show commits that touch specific line numbers:

```bash
git log -L:<line_number>:<file>

```

Count commits:

```bash
git rev-list --count HEAD

```

Show reflog (history of refs):

```bash
git reflog

```

Show commit history with visualizer tool:

```bash
gitk

```

### Tags ###

List all tags:

```bash
git tag

```

Create a new tag at a specific commit:

```bash
git tag <tag_name> <commit_id>

```

Create an annotated tag with a message:

```bash
git tag -a <tag_name> -m "tag message"

```

Delete a specific tag:

```bash
git tag -d <tag_name>

```

Delete a specific remote tag:

```bash
git push <remote_name> --delete <tag_name>

```

Show information about a specific tag:

```bash
git show <tag_name>

```

Create a lightweight tag:

```bash
git tag <tag_name>

```

List tags matching a pattern:

```bash
git tag -l "v1.*"

```

Push tags to remote repository:

```bash
git push --tags
git push origin <tag_name>  # Push specific tag

```

Checkout a specific tag:

```bash
git checkout <tag_name>

```

Create a branch from a tag:

```bash
git checkout -b <branch_name> <tag_name>

```

Sign a tag with GPG:

```bash
git tag -s <tag_name> -m "signed tag message"

```

Verify a signed tag:

```bash
git tag -v <tag_name>

```

Tag the current commit:

```bash
git tag -a v1.0 -m "Version 1.0 release"

```

Create tag for specific commit with tagger info:

```bash
git tag -a <tag_name> <commit_id> --signer="Your Name"

```

List tags with commit hash:

```bash
git show-ref --tags

```

Update an existing tag:

```bash
git tag -d <tag_name>
git push origin :refs/tags/<tag_name>  # Remove from remote
git tag -a <tag_name> <commit_id>      # Recreate
git push origin <tag_name>             # Push again

```

Show tag annotations:

```bash
git tag -n

```

Create tag on a specific branch:

```bash
git checkout <branch_name>
git tag <tag_name>

```

Import tags from remote:

```bash
git fetch --tags

```

Use tag as a reference:

```bash
git log <tag_name>^..HEAD    # Commits since tag
git diff <tag_name>          # Changes since tag

```

### Stashes ###

Temporarily save changes in the working tree:

```bash
git stash save "stash message"

```

Quickly save changes without a message:

```bash
git stash

```

List all stashes:

```bash
git stash list

```

Apply changes from a specific stash:

```bash
git stash apply <stash>
git stash apply stash@{0}  # Apply the most recent stash

```

Remove a specific stash after applying:

```bash
git stash pop  # Apply and remove the most recent stash
git stash pop <stash>  # Apply and remove a specific stash

```

Remove a specific stash without applying:

```bash
git stash drop <stash>
git stash drop stash@{0}  # Remove the most recent stash

```

Remove all stashes:

```bash
git stash clear

```

Save changes including untracked files:

```bash
git stash -u  # Stash untracked files
git stash --include-untracked

```

Save changes including all files (including ignored):

```bash
git stash -a  # Stash all files, including ignored ones

```

Show stash differences:

```bash
git stash show  # Show the most recent stash
git stash show <stash>  # Show a specific stash
git stash show -p  # Show patch content

```

Create a branch from a stash:

```bash
git stash branch <branch_name> <stash>

```

Apply a stash to a different branch:

```bash
git checkout <other_branch>
git stash apply <stash_from_main>

```

Create a stash from specific files:

```bash
git add <specific_files>
git stash push  # Stash only staged files
git stash push <file1> <file2>  # Stash specific files only

```

Create a stash from changes not touching specific files:

```bash
git stash push --keep-index  # Stash only non-staged changes

```

Create a stash with keep-all flag:

```bash
git stash push --all  # Stash all tracked files

```

View stash statistics:

```bash
git stash show --stat <stash>

```

Diff against a stash:

```bash
git diff <stash>  # Compare working directory to stash
git diff <stash1> <stash2>  # Compare two stashes

```

Restore stashed changes to a different file:

```bash
git stash show -p <stash> | git apply -R

```

Conditionally stash:

```bash
git stash create  # Create stash without storing in reflog

```

Interactive stash:

```bash
git stash push -p  # Interactive selection of parts to stash

```

Apply stash without overwriting changes:

```bash
git stash apply --index  # Restore index along with working tree

```

Apply stash and keep index:

```bash
git stash apply --quiet  # Apply with minimal output

```

Create stash with message:

```bash
git stash push -m "Description of changes"

```

Include untracked files in stash:

```bash
git stash push -u

```

Use stash as a temporary branch:

```bash
git stash create | xargs -I {} git branch temp-branch {}

```

Show stash with patch:

```bash
git stash show -p <stash> | less  # Show stash as patch in pager

```

### Cherry-Picking ###

Apply a specific commit from one branch to another:

```bash
git cherry-pick <commit_id>

```

Cherry-pick multiple commits:

```bash
git cherry-pick <commit1> <commit2> <commit3>

```

Cherry-pick a range of commits:

```bash
git cherry-pick <start_commit>..<end_commit>

```

Cherry-pick with empty commit:

```bash
git cherry-pick --allow-empty <commit_id>

```

Cherry-pick without committing:

```bash
git cherry-pick --no-commit <commit_id>

```

Cherry-pick with abort:

```bash
git cherry-pick --abort

```

Continue after resolving conflicts:

```bash
git cherry-pick --continue

```

Cherry-pick with edit message:

```bash
git cherry-pick -e <commit_id>

```

Cherry-pick with no edit:

```bash
git cherry-pick --no-edit <commit_id>

```

Cherry-pick with strategy:

```bash
git cherry-pick -X ours <commit_id>
git cherry-pick -X theirs <commit_id>

```

Cherry-pick to a different branch:

```bash
git checkout other_branch
git cherry-pick <commit_id_from_other_branch>

```

Cherry-pick with signoff:

```bash
git cherry-pick --signoff <commit_id>

```

Cherry-pick and keep original author:

```bash
git cherry-pick -x <commit_id>  # Adds line with original commit ID

```

Cherry-pick with GPG signing:

```bash
git cherry-pick --gpg-sign <commit_id>

```

Skip a commit during cherry-pick:

```bash
git cherry-pick --skip

```

Show cherry-pick commit info:

```bash
git show <commit_id>

```

Cherry-pick and preserve timestamp:

```bash
git cherry-pick --committer-date-is-author-date <commit_id>

```

Cherry-pick from another repository:

```bash
git fetch <remote_repo>
git cherry-pick <commit_id>

```

Cherry-pick and maintain parent relationships:

```bash
git cherry-pick -m 1 <merge_commit_id>  # Use first parent

```

Cherry-pick with custom strategy options:

```bash
git cherry-pick -X patience <commit_id>
git cherry-pick -X diff-algorithm=patience <commit_id>

```

Check which commits have already been cherry-picked:

```bash
git log --cherry-pick --oneline <branch1>..<branch2>

```

Cherry-pick with file restriction:

```bash
git cherry-pick <commit_id> -- path/to/file

```

Dry-run for cherry-pick (no direct method, but check with):

```bash
git log --oneline <commit_id>..<commit_id>  # Check commit details

```

Undo a cherry-pick:

```bash
git reset --hard HEAD~1  # Undoes the cherry-pick if it's the last commit

```

Cherry-pick with rename detection:

```bash
git cherry-pick -X rename-threshold=50% <commit_id>

```

Cherry-pick without detecting renames:

```bash
git cherry-pick -X no-renames <commit_id>

```

Use rerere (reuse recorded resolution):

```bash
git config rerere.enabled true
git cherry-pick <commit_id>  # Will reuse conflict resolutions

```

Cherry-pick with conflict resolution:

```bash
git cherry-pick <commit_id>
# Resolve conflicts manually #
git add <resolved_files>
git cherry-pick --continue

```

Cherry-pick to recreate the working tree:

```bash
git cherry-pick --ff <commit_id>  # Fast forward if possible

```

### Commit Management ###

Modify the latest commit:

```bash
git commit --amend
git commit --amend --no-edit  # Amend without changing commit message

```

Create a new commit that undoes changes from a previous commit:

```bash
git revert <commit_id>
git revert HEAD  # Revert most recent commit
git revert <commit_range>  # Revert multiple commits

```

Discard changes and move HEAD to a specific commit:

```bash
git reset --hard <commit_id>
git reset --hard HEAD~1  # Reset to parent of current commit

```

Move HEAD to a specific commit, but preserve staged changes:

```bash
git reset --soft <commit_id>

```

Move HEAD to a specific commit, discarding staged changes but keeping working directory:

```bash
git reset <commit_id>  # Mixed reset (default)

```

Show a record of all changes made to the local repository head:

```bash
git reflog

```

Reset to specific commit keeping changes in working directory:

```bash
git reset --mixed <commit_id>

```

Reset only the HEAD pointer without changing staging or working directory:

```bash
git reset --soft HEAD@{1}  # Reset to previous HEAD position

```

Undo the last commit but keep all changes:

```bash
git reset --soft HEAD~1

```

Completely remove the last commit and all changes:

```bash
git reset --hard HEAD~1

```

Reset to commit but keep changes staged:

```bash
git reset --hard <commit_id>
git add .  # Re-stage all changes if needed

```

Soft reset to move back multiple commits:

```bash
git reset --soft HEAD~3  # Go back 3 commits, keep changes staged

```

Mixed reset (default) to move back commits and unstage changes:

```bash
git reset HEAD~1  # Unstage changes from the last commit

```

Hard reset to abandon all uncommitted changes:

```bash
git reset --hard  # Equivalent to git checkout . && git reset

```

Restore a file to a specific commit state:

```bash
git checkout <commit_id> -- <file_path>

```

Restore a file to the state of a specific commit without changing HEAD:

```bash
git restore --source <commit_id> -- <file_path>

```

Recover a deleted commit from reflog:

```bash
git reflog
git reset --hard <reflog_entry>

```

Recover commit by cherry-picking from another branch:

```bash
git reflog
git branch recovery_branch <commit_hash>

```

Uncommit last commit, keeping changes in staging area:

```bash
git reset --soft HEAD~

```

Reset and remove all untracked files:

```bash
git reset --hard HEAD
git clean -fd  # Remove untracked files and directories

```

Reset to a specific state while keeping some changes:

```bash
git stash
git reset --hard <commit>
git stash pop

```

Change commit author for the last commit:

```bash
git commit --amend --author="New Author <email@example.com>"

```

Change commit timestamp:

```bash
git commit --amend --date="Fri Nov 4 17:00:00 2022 +0900"

```

Split a commit into multiple commits:

```bash
git reset --soft HEAD^
git add -p  # Interactively add parts of changes
git commit  # First new commit
git commit  # Second new commit

```

Fixup a commit far back in history:

```bash
git rebase -i <old_commit>^
# Mark commit as 'fixup' instead of 'pick' #

```

Squash last n commits into one:

```bash
git reset --soft HEAD~n
git commit -m "Combined commit message"

```

View detailed reflog:

```bash
git reflog show --all

```

Revert multiple commits:

```bash
git revert <commit1> <commit2> <commit3>

```

Revert a merge commit:

```bash
git revert -m 1 <merge_commit>  # Revert to first parent

```

Reset to remote state:

```bash
git fetch origin
git reset --hard origin/main

```

Recover from a destructive operation:

```bash
git reflog
git reset --hard HEAD@{position}

```

Use git reset with path:

```bash
git reset HEAD <file>  # Unstage specific file

```

Use git checkout to restore files:

```bash
git checkout HEAD~1 <file>  # Restore file from previous commit

```

Amend with a file change:

```bash
# Modify file, then: #
git add <file>
git commit --amend --no-edit

```

Reword the most recent commit message:

```bash
git commit --amend -m "New commit message"

```

Undo multiple commits with reset:

```bash
git reset --hard HEAD~n

```

Recover from reset:

```bash
git reflog
git reset --hard <sha>  # Restore to the desired commit

```

View reflog with custom format:

```bash
git reflog --format="%gd %ai %s %H"

```

Create a temporary branch to recover commits:

```bash
git branch recover-branch <lost_commit_sha>

```

Reset with reflog references:

```bash
git reset --hard HEAD@{1}

```

Use git reflog to find lost commits:

```bash
git reflog | grep <known_content>

```

Reset and preserve uncommitted changes in index:

```bash
git reset --preserve-index HEAD~1

```

Create a backup before destructive operations:

```bash
git branch backup-branch  # Create backup branch before reset
git reset --hard <commit>

```

Restore specific files from another commit:

```bash
git checkout <commit> -- <file1> <file2>

```

Undo git add operations:

```bash
git reset HEAD <file>  # Unstage single file
git reset  # Unstage all files

```

Amend without changing the commit date:

```bash
git commit --amend --no-edit --date="now"

```

Recover from accidental git reset:

```bash
git fsck --lost-found  # Find dangling commits

```

Use git restore (newer command) instead of checkout/reset:

```bash
git restore --staged <file>  # Unstage file (like git reset HEAD <file>)
git restore <file>  # Discard changes (like git checkout -- <file>)

```

### Submodules and Subtrees ###

> Note: Submodules can complicate workflows. Consider subtrees or subtree merges for simpler dependency management.

Add a submodule to the current repository:

```bash
git submodule add <repository_url> <path>

```

Initialize and update all submodules recursively:

```bash
git submodule update --init --recursive

```

Add a subtree to the current repository:

```bash
git subtree add --prefix=<path> <repository_url> --squash

```

Initialize the submodules in the repository:

```bash
git submodule init

```

Update the submodules to their latest commits:

```bash
git submodule update
git submodule update --remote  # Update to upstream's latest

```

Update submodules to a specific branch:

```bash
git submodule update --remote --merge
git submodule update --remote --rebase

```

List submodules:

```bash
git submodule status

```

Execute a specific command in each submodule:

```bash
git submodule foreach <command>
git submodule foreach 'git status'  # Check status in each submodule

```

Unregister a submodule:

```bash
git submodule deinit <path>

```

Remove a submodule completely:

```bash
git submodule deinit <submodule_name>
git rm <submodule_name>
git config --file=.gitmodules --remove-section submodule.<submodule_name>

```

Clone repository with submodules:

```bash
git clone --recurse-submodules <repository_url>

```

Pull changes including submodules:

```bash
git pull --recurse-submodules

```

Pull submodules separately:

```bash
git submodule update --remote --merge

```

Sync submodule URLs:

```bash
git submodule sync

```

Check submodule status:

```bash
git submodule summary

```

Update specific submodule to latest:

```bash
cd <submodule_path>
git pull origin main
cd ..
git add <submodule_path>

```

Reset submodules to committed state:

```bash
git submodule update --init --recursive --force

```

Clean submodule directories:

```bash
git submodule foreach --recursive git clean -xfd

```

Checkout specific commit in submodules:

```bash
git submodule update --init --recursive -- <submodule_path>

```

Push submodule changes:

```bash
cd <submodule_dir>
git push origin <branch>
cd ..
git add <submodule_dir>
git commit -m "Update submodule"
git push origin <branch>

```

Update submodules to match superproject:

```bash
git submodule update --checkout --recursive

```

Fetch all submodules:

```bash
git submodule foreach git fetch

```

Checkout submodules on detached HEAD:

```bash
git submodule update --init --recursive --detach

```

Working with subtree push:

```bash
git subtree push --prefix=<subtree_dir> <remote_name> <branch>

```

Working with subtree pull:

```bash
git subtree pull --prefix=<subtree_dir> <remote_name> <branch> --squash

```

List subtree commits:

```bash
git log --oneline <prefix>

```

Compare subtree with remote:

```bash
git diff <prefix> <remote>/<branch>

```

Subtree split (extract commits affecting a prefix):

```bash
git subtree push --prefix=<path> <remote> <branch>

```

Submodule alternatives - using subtrees instead:

```bash
git remote add -f <subtree_name> <url>
git merge -s ours --no-commit <subtree_name>/<branch>
git read-tree --prefix=<path> -u <subtree_name>/<branch>
git commit -m "Add <subtree_name> as subtree"

```

Update subtree from external source:

```bash
git fetch <remote>
git subtree merge --prefix=<path> <remote>/<branch>

```

Remove subtree:

```bash
git rm -r <subtree_path>
git commit -m "Remove subtree"

```

Check if submodules are dirty:

```bash
git submodule foreach 'git diff --name-only'

```

Update submodules to published versions:

```bash
git submodule update --init --remote --merge

```

Lock submodule to specific commit:

```bash
git submodule update --init
cd <submodule>
git checkout <specific_commit>
cd ..
git add <submodule>
git commit -m "Lock submodule to specific commit"

```

Clone with shallow submodules:

```bash
git clone --recursive --depth=1 <repo>

```

Deepen shallow submodule:

```bash
git submodule update --init -- <path>
cd <path>
git fetch --deepen=N

```

Show submodule changes:

```bash
git diff --submodule

```

Configure submodule to ignore changes:

```bash
git config submodule.<path>.ignore all

```

Checkout submodule in a different branch:

```bash
cd <submodule>
git checkout <branch>
cd ..
git add <submodule>

```

Reset submodules to superproject's commit:

```bash
git submodule update --init --recursive

```

Bulk operations on submodules:

```bash
git submodule foreach --recursive 'git checkout main && git pull'

```

Fetch only specific submodules:

```bash
git submodule update --init <path_to_submodule>

```

Deinitialize all submodules:

```bash
git submodule deinit --all

```

Show submodule logs:

```bash
git submodule foreach 'git log --oneline -10'

```

### Hooks ###

List available hooks:

```bash
ls .git/hooks/

```

Pre-commit hook to check code quality before commit:

```bash
#!/bin/sh
# .git/hooks/pre-commit #
exec git diff-index --check --cached HEAD --

```

Post-commit hook to trigger actions after commit:

```bash
#!/bin/sh
# .git/hooks/post-commit #
echo "Commit completed!"
# Add custom actions here #

```

Pre-push hook to validate before pushing:

```bash
#!/bin/sh
# .git/hooks/pre-push #
# Example: run tests before push #
if ! npm test; then
  echo "Tests failed, push aborted."
  exit 1
fi

```

Post-merge hook to run after merge:

```bash
#!/bin/sh
# .git/hooks/post-merge #
# Update submodules after merge #
git submodule update --init --recursive

```

Pre-receive hook (server-side):

```bash
#!/bin/sh
# .git/hooks/pre-receive (on remote repository) #
# Reject pushes that don't meet requirements #
while read oldrev newrev refname; do
  if [ $refname == "refs/heads/master" ](/%20$refname%20==%20"refs/heads/master"%20.md); then
    # Add validation logic
  fi
done

```

Prepare-commit-msg hook to modify commit message:

```bash
#!/bin/sh
# .git/hooks/prepare-commit-msg #
# Add ticket number to message if branch name contains it #
case "$(git branch --show-current)" in
  feature/*|bugfix/*)
    TICKET=$(echo $(git branch --show-current) | cut -d'/' -f2)
    sed -i.bak -e "1s/^/[#$TICKET] /" $1
    ;;
esac

```

Commit-msg hook to validate commit message format:

```bash
#!/bin/sh
# .git/hooks/commit-msg #
commit_msg=$(head -1 $1)
| if ! [ fix | docs | style | refactor | test | chore)(\(.+\))?:.+$ ](/%20$commit_msg%20=~%20^(feat%20.md); then |
  echo "❌ Commit message doesn't follow conventional format"
  echo "Expected: type(scope): description"
  echo "Example: feat(auth): add login functionality"
  exit 1
fi

```

Update hook (server-side) for branch protection:

```bash
#!/bin/sh
# .git/hooks/update (on remote repository) #
# Prevent direct pushes to protected branches #
refname=$1
oldrev=$2
newrev=$3

if [ "$refname" = "refs/heads/main" -o "$refname" = "refs/heads/master" ]; then
  echo "❌ Cannot push directly to protected branch"
  exit 1
fi

```

Post-update hook to trigger deployment:

```bash
#!/bin/sh
# .git/hooks/post-update #
# Trigger deployment after push #
echo "Repository updated at $(date)"
# Example: trigger CI/CD pipeline #
# curl -X POST https://ci.example.com/build #

```

Apply permissions to make hooks executable:

```bash
chmod +x .git/hooks/pre-commit
chmod +x .git/hooks/commit-msg
chmod +x .git/hooks/pre-push

```

Common hook locations:

```bash
.git/hooks/pre-commit
.git/hooks/prepare-commit-msg
.git/hooks/commit-msg
.git/hooks/post-commit
.git/hooks/pre-rebase
.git/hooks/post-checkout
.git/hooks/post-merge
.git/hooks/pre-push
.git/hooks/pre-auto-gc

```

Example: Pre-commit hook with linter:

```bash
#!/bin/bash
# .git/hooks/pre-commit #
# Run linter on staged files #
files=$(git diff --cached --name-only --diff-filter=AM | grep '\.py$')
if [ -n "$files" ]; then
  echo "$files" | xargs flake8
  if [ $? -ne 0 ]; then
    echo "❌ Linting failed. Please fix errors before commit."
    exit 1
  fi
fi

```

Example: Commit-msg hook with length validation:

```bash
#!/bin/sh
# .git/hooks/commit-msg #
# Validate commit message length #
commit_message=$(cat $1)
subject=${commit_message%%$'\n'*}
if [ ${#subject} -gt 50 ]; then
  echo "❌ Subject line too long (${#subject} > 50 characters)"
  exit 1
fi

```

Example: Post-checkout hook for environment setup:

```bash
#!/bin/sh
# .git/hooks/post-checkout #
# Setup environment when checking out branch #
# npm install if package-lock.json changed #
if [ "$3" = "1" ]; then  # Branch checkout, not file checkout
  if git diff-tree --no-commit-id --name-only -r HEAD | grep -q 'package-lock.json'; then
    npm ci --silent
    echo "✅ Dependencies updated"
  fi
fi

```

Install multiple hooks with a script:

```bash
#!/bin/bash
# Install all hooks from a directory #
for hook in hooks/*; do
  cp "$hook" .git/hooks/
  chmod +x .git/hooks/$(basename "$hook")
done

```

Example: Push-to-remote hook to verify remotes:

```bash
#!/bin/sh
# .git/hooks/pre-push #
# Verify the remote URL before pushing #
remote="$1"
url="$2"

# You can add logic here to validate the remote #
if [ "$url" = "production-url" ]; then
  echo "⚠️  About to push to production! Are you sure?"
  # Uncomment the next line to prevent production pushes
  # exit 1
fi

```

Shared hooks across team:

```bash
# Create a shared hooks directory #
mkdir shared-hooks
# Add hooks to the shared directory #
cp .git/hooks/pre-commit shared-hooks/
# Share the directory via version control #
git add shared-hooks/

```

Debug hooks by adding logging:

```bash
#!/bin/sh
# .git/hooks/pre-commit #
echo "Pre-commit hook executed at $(date)" >> /tmp/git-hook-debug.log
# Normal hook logic here #

```

Temporarily bypass hooks:

```bash
git commit --no-verify  # Bypass pre-commit and commit-msg hooks

```

List all configured hooks:

```bash
find .git/hooks -type f -executable -not -name '*.sample'

```

Template directory for hooks (project-wide):

```bash
# Create template directory #
mkdir git-template
mkdir git-template/hooks
# Add your hooks to the template #
cp hooks/pre-commit git-template/hooks/
# Configure git to use template #
git config init.templateDir ~/git-template

```

Server-side hook to reject commits with secrets:

```bash
#!/bin/bash
# .git/hooks/pre-receive (server-side) #
while read oldsha newsha refname; do
  # Check for passwords/keys in changes
| if git diff-tree --no-commit-id --name-only -r "$newsha" | xargs git grep -E "(password | secret | key).*="; then |
    echo "❌ Potential secret found in commit, rejected"
    exit 1
  fi
done

```

Client-side hook to check for debug statements:

```bash
#!/bin/sh
# .git/hooks/pre-commit #
# Prevent commits with debug statements #
for file in $(git diff --cached --name-only | grep '\.js$'); do
  if grep -q "console\.log\|debugger" "$file"; then
    echo "❌ Found debugging statement in $file"
    exit 1
  fi
done

```

Use githooks.com for managing hooks:

```bash
# Many languages have tools to manage hooks #
# For Node.js: husky + lint-staged #
# For Python: pre-commit framework #

```

Check if hooks are configured properly:

```bash
# Verify hooks exist and are executable #
if [ -x .git/hooks/pre-commit ]; then
  echo "✅ Pre-commit hook is configured"
else
  echo "❌ Pre-commit hook missing or not executable"
fi

```

Hooks for enforcing branch naming conventions:

```bash
#!/bin/sh
# .git/hooks/pre-commit #
branch=$(git rev-parse --abbrev-ref HEAD)
| if [ hotfix | bugfix | release)/[a-z0-9][a-z0-9\-]*$ ](/%20!%20$branch%20=~%20^(feature%20.md); then |
  echo "❌ Branch name doesn't follow convention: feature/hotfix/bugfix/release/<name>"
  exit 1
fi

```

Backup hook before replacing:

```bash
# Before updating a hook #
cp .git/hooks/pre-commit .git/hooks/pre-commit.backup
# Install new hook #
cp new_hook.sh .git/hooks/pre-commit

```

### Patches ###

Generate a patch file for a specific commit:

```bash
git format-patch <commit_id>

```

Generate patches for a range of commits:

```bash
git format-patch <start_commit>..<end_commit>
git format-patch HEAD~3  # Last 3 commits

```

Generate patch with custom number of leading digits:

```bash
git format-patch -n <commit_id>  # Use -n1 for 1 digit, -n4 for 4 digits

```

Generate patch without creating files in working directory:

```bash
git format-patch --stdout <commit_id> > patch.diff

```

Apply a patch to the current branch:

```bash
git apply <patch_file>
git apply --check <patch_file>  # Check if patch applies cleanly

```

Apply a patch using the "git am" (apply mailbox) command:

```bash
git am <patch_file>

```

Apply a patch with 3 lines of context fuzzy matching:

```bash
git apply -3 <patch_file>

```

Apply a patch with stat information showing what would change:

```bash
git apply --stat <patch_file>

```

Apply a patch in reverse:

```bash
git apply -R <patch_file>

```

Apply a patch with custom whitespace handling:

```bash
git apply --ignore-space-change <patch_file>
git apply --ignore-whitespace <patch_file>

```

Generate patch with custom subject prefix:

```bash
git format-patch --subject-prefix="PATCH" <commit>

```

Generate patch with cover letter:

```bash
git format-patch --cover-letter -o patches/ HEAD~3

```

Generate patch with author information:

```bash
git format-patch --signature="Your Name <email@example.com>" <commit>

```

Generate patch for a single file:

```bash
git format-patch -- <file_path>

```

Generate patches for commits affecting specific files:

```bash
git format-patch <commit_range> -- <file_path>

```

Create unified diff format:

```bash
git diff > unified_patch.diff
git diff --unified=8 <file>  # 8 lines of context

```

Apply patches in series:

```bash
git am --3way <patches_folder>/*

```

Split large patches:

```bash
git format-patch -M -C --find-copies-harder <commit_range>

```

Generate patch with binary changes:

```bash
git format-patch --binary <commit>

```

Apply patch with three-way merge:

```bash
git apply --3way <patch_file>

```

Create a patch from staged changes only:

```bash
git diff --cached > staged_changes.patch

```

Create a patch excluding specific files:

```bash
git diff HEAD -- ':!<excluded_file>' > patch.diff

```

Apply patch with custom path prefixes:

```bash
git apply --src-prefix=src/ --dst-prefix=dest/ <patch_file>

```

Create patch with specific encoding:

```bash
git format-patch --encode-encoding=utf-8 <commit>

```

Generate patches for email submission:

```bash
git format-patch --to="recipient@example.com" --subject-prefix="RFC PATCH" <commit>

```

Create a patch from working directory changes:

```bash
git diff HEAD > working_changes.patch

```

Apply patch at specific revision:

```bash
git apply --index <patch_file>  # Apply to index only

```

Create patch with parent commit info:

```bash
git format-patch --full-index <commit>

```

Export patches to another repository:

```bash
git format-patch --root HEAD  # Include all commits from root

```

Generate patch with custom headers:

```bash
git format-patch --add-header="X-Patch-Source: MyProject" <commit>

```

Create patch with specific line endings:

```bash
git config core.autocrlf false
git diff --ignore-cr-at-eol

```

Validate patch before applying:

```bash
git apply --check --verbose <patch_file>

```

Create empty patch:

```bash
git format-patch --root --stdout <initial_commit>

```

Apply patch interactively:

```bash
git apply --reject <patch_file>  # Create .rej files for conflicts

```

Create patch with file rename detection:

```bash
git diff -M --find-renames <commit_range> > renames.patch

```

Apply patch selectively:

```bash
git apply --include=<file_pattern> <patch_file>
git apply --exclude=<file_pattern> <patch_file>

```

Create patch with commit metadata:

```bash
git log --format=email <commit_range> > metadata.txt

```

Apply multiple patches in sequence:

```bash
for patch in *.patch; do
  git am "$patch"
done

```

Format patch for review:

```bash
git format-patch --thread --cover-letter -n -o patches/ HEAD~5

```

Check patch format:

```bash
git mailinfo /dev/stdout /dev/stdin < patch.eml

```

Convert unified diff to format-patch format:

```bash
git apply --ignore-space-change --ignore-whitespace <patch_file>

```

Create patch with custom range:

```bash
git format-patch <branch1>..<branch2>

```

Apply patch with custom author:

```bash
git am --committer-date-is-author-date <patch_file>

```

Create patch showing only specific stats:

```bash
git diff --numstat > stats_only.patch

```

Generate patch from specific file changes:

```bash
| git log --oneline --follow --format="%H" -- <file> | tail -10 | git format-patch - |

```

Use git stash as a patch:

```bash
git stash create  # Returns commit hash to use as patch

```

Create patch with custom message format:

```bash
git format-patch --stdout --no-stat <commit> | less

```

Create patch with custom file naming:

```bash
git format-patch --output-directory=patches/ --numbered-files <commit>

```

Apply patches from stdin:

```bash
curl -s https://example.com/patch.diff | git apply

```

Create patch with custom line numbers:

```bash
git diff -U10 <file>  # 10 lines of context instead of default

```

Use patches for cherry-picking across repositories:

```bash
git format-patch -1 <commit_hash>
git am <patch_file>

```

Create combined patch for multiple commits:

```bash
git diff <commit1> <commit2> -- <path> > combined.patch

```

Apply patches with custom merge strategy:

```bash
git am -3  # Use three-way merge

```

Generate patches with custom author info:

```bash
git format-patch --from="Author Name <email@example.com>" <commit>

```

Create patches with custom filenames:

```bash
git format-patch --name-only <commit_range> > filenames.txt

```

Validate patches for whitespace issues:

```bash
git apply --whitespace=warn <patch_file>

```

Create patch ignoring permission changes:

```bash
git diff --no-permissions <commit_range> > patch.diff

```

Apply patch with custom strategy:

```bash
git apply -p1  # Strip one level of path prefix

```

### Collaboration ###

Generate a request-pull summary with the changes between two commits:

```bash
git request-pull <start_commit> <url>
git request-pull <start_commit> <end_commit> <url>

```

Summarize the commit history, listing authors and their contributions:

```bash
git shortlog
git shortlog -s  # Show commit counts only
git shortlog -n  # Sort by number of commits
git shortlog -sn  # Combined: show counts and sort numerically

```

List all files tracked by Git:

```bash
git ls-files
git ls-files --cached  # Only files in index
git ls-files --modified  # Only modified files
git ls-files --others  # Untracked files

```

Search for a specified pattern in files tracked by Git:

```bash
git grep <pattern>
git grep -n <pattern>  # Show line numbers
git grep -C 2 <pattern>  # Show 2 lines of context
git grep -i <pattern>  # Case insensitive

```

Show collaboration statistics for multiple authors:

```bash
git shortlog -sn --all  # All branches

```

Show contribution history by author:

```bash
git shortlog -s --since="2 weeks ago"
git shortlog -s --after="2023-01-01" --before="2023-12-31"

```

List files with specific extensions:

```bash
git ls-files "*.js" "*.ts"

```

Show files changed by a specific author:

```bash
git log --author="Author Name" --name-only

```

Search in specific commit ranges:

```bash
git grep <pattern> <commit_range>
git grep <pattern> HEAD~5..HEAD  # Last 5 commits

```

Find commits by author:

```bash
git log --author="Author Name"

```

Show author statistics with email addresses:

```bash
git shortlog -se  # Include email addresses

```

Show collaboration with file count:

```bash
git shortlog -s --numbered

```

Search recursively in directories:

```bash
git grep <pattern> -- <directory>

```

Find commits in a specific date range:

```bash
git log --since="2 weeks ago" --until="1 week ago"

```

Show who modified each line of a file:

```bash
git blame <file>
git blame -L 10,20 <file>  # Blame specific lines

```

Show commit history of a specific file with authors:

```bash
git log --follow --name-status -- <file>

```

Search in specific branches:

```bash
git grep <pattern> <branch_name>

```

Show files that differ from another branch:

```bash
git diff --name-only <branch_name>

```

Search in files of specific types:

```bash
git ls-files --with-tree=HEAD -o -i --exclude-standard '*.{js,ts}'

```

Find commits with specific message patterns:

```bash
git log --grep="<pattern>"

```

Show changes by author in specific time period:

```bash
git log --author="Author Name" --since="last month"

```

Count contributions by author:

```bash
git shortlog -s -e --all | sort -n

```

Search for content changes in commits:

```bash
git log -S '<content>' --oneline

```

Show file changes by author:

```bash
git log --author="Author Name" --oneline --stat

```

View file history with author:

```bash
git log --follow --pretty=format:"%h %an %ad %s" --date=short -- <file>

```

Search for changes in specific file types:

```bash
git log --all -- *.js --oneline

```

List contributors to a repository:

```bash
git shortlog -sn

```

Show author and commit info combined:

```bash
git log --pretty=format:"%h %an %s" --date=relative

```

Find commits affecting specific files and authors:

```bash
git log --author="Author Name" -- <file_path>

```

Show collaboration by commit type:

```bash
| git log --oneline --all | grep -E "(feat | fix | docs | style | refactor | test | chore)" | wc -l |

```

Search for commits with specific patterns:

```bash
git log --all --grep="<pattern>" --oneline

```

Show who authored which parts of code:

```bash
git log --format='%aN' | sort -u

```

Get stats for multiple authors:

```bash
git shortlog -n --summary --email --since='2 weeks ago'

```

Search in files with specific content:

```bash
git grep -l <pattern>  # List files containing the pattern

```

Find when a specific line was added:

```bash
git log -S '<line_content>' --follow --all

```

Check collaboration on specific features:

```bash
git log --oneline --grep="feat:" --since="last month"

```

Show file ownership by authors:

```bash
| git ls-files | xargs -n1 git blame -f | grep -c "Author Name" |

```

Find commits in a specific date range with authors:

```bash
git log --since="2023-01-01" --until="2023-02-01" --pretty=format:"%h %an %s"

```

Search in specific subdirectories for patterns:

```bash
git grep <pattern> -- <subdir>/

```

Find most active collaborators:

```bash
git shortlog -s -n | head -10

```

Show commit history in reverse chronological order with authors:

```bash
git log --reverse --pretty=format:"%h %an %ar %s"

```

Search for commits with specific file extensions:

```bash
git log --all -- *.py --oneline

```

Get commit count by author in a specific time frame:

```bash
git shortlog -s --since="last year"

```

Find code added by specific authors:

```bash
git log --author="Author Name" --numstat

```

Search for specific content additions:

```bash
git log -p --all -S '<content>' --oneline

```

Get collaboration metrics:

```bash
git shortlog -s --all --since="1 month ago" | awk '{sum += $1} END {print sum}'

```

Track changes by multiple authors:

```bash
git log --author="Author1\|Author2" --oneline

```

Search for code patterns across branches:

```bash
| git grep <pattern> $(git branch -a | grep -v HEAD | sed 's/remotes\///' | sed 's/origin\///') |

```

Collaborative code review preparation:

```bash
git log --oneline --since="last week" --no-merges --reverse

```

Get authors who modified specific features:

```bash
git log --follow --all --pretty=format:"%an" -- <feature_file>

```

Show code ownership heatmap:

```bash
git log --all --format='%aN <%aE>' | sort -u

```

Find authors contributing to specific functionality:

```bash
git log --all --grep='<feature_name>' --pretty=format:"%an" | sort -u

```

Check changes in specific parts of the codebase:

```bash
| git log -- <directory_path> | grep -E "^Author:" | sort | uniq -c | sort -nr |

```

Collaboration across forks and remotes:

```bash
git log --oneline --all --remotes

```

Search for contributions to specific modules:

```bash
git log --oneline --follow --all -- <module_path>

```

Identify collaboration patterns:

```bash
| git log --all --format="%aN" | sort | uniq -c | sort -k1 -nr |

```

Find commits with specific co-authors:

```bash
git log --all --grep="Co-authored-by"

```

Collaboration on specific tickets:

```bash
| git log --oneline --all | grep -i "ticket\ | issue\ | bug" |

```

Track review participation:

```bash
| git log --all --grep="Reviewed-by\ | Acked-by\ | Tested-by" |

```

Monitor collaborative work:

```bash
git log --since="last week" --pretty=format:"%h %an %s (%cr)" --all

```

See file-level collaboration:

```bash
| git log --follow --name-only --pretty=format:"%an" -- <file_path> | sort | uniq -c |

```

Show collaboration metrics by time periods:

```bash
git shortlog -s --since="Monday" --all

```

Find collaborative commits:

```bash
| git log --format="%s%n%b" --all | grep -c "Co-authored-by\ | Signed-off-by\ | Acked-by" |

```

View contribution timeline by author:

```bash
git log --reverse --all --author="Author Name" --pretty=format:"%ad %h %s" --date=short

```

Analyze collaboration effectiveness:

```bash
git log --oneline --all | wc -l  # Total commits
git shortlog -s --all | wc -l    # Total authors

```

### Bisecting, Debugging, and Performance Issues ###

Begin a bisect session to find the commit that introduced a bug:

```bash
git bisect start

```

Mark a commit as "bad," indicating it contains the bug:

```bash
git bisect bad
git bisect bad <commit_id>  # Mark specific commit as bad

```

Mark a commit as "good," indicating it does not contain the bug:

```bash
git bisect good
git bisect good <commit_id>  # Mark specific commit as good

```

End the bisect session and return to the original branch/commit:

```bash
git bisect reset

```

Skip a commit during bisect process (if it's not testable):

```bash
git bisect skip
git bisect skip <commit_id>  # Skip specific commit

```

Automate bisect with a test script:

```bash
git bisect run <test_script>
git bisect run make test  # Example with test command

```

Run git bisect between two commits only:

```bash
git bisect start <bad_commit> <good_commit>

```

Run git bisect by setting bad and good commits manually:

```bash
git bisect start
git bisect bad HEAD
git bisect good <known_good_commit>

```

Show current bisect state:

```bash
git bisect log
git bisect visualize  # Show remaining candidates in gitk

```

Verify the integrity of the Git repository:

```bash
git fsck
git fsck --full  # More comprehensive check
git fsck --connectivity-only  # Faster connectivity check

```

Run garbage collection to optimize the repository's performance:

```bash
git gc
git gc --aggressive  # More thorough optimization
git gc --auto  # Run if needed based on heuristics

```

Remove untracked files and directories (use with caution):

```bash
git clean -df  # Remove untracked files and directories
git clean -n  # Show what would be removed (dry run)
git clean -di  # Interactive clean mode
git clean -dff  # Force removal of nested git repositories

```

Check performance of Git operations:

```bash
time git command  # Time any git operation

```

Optimize repository performance:

```bash
git repack -ad  # Repack all objects into a single pack
git prune  # Remove unreachable objects
git count-objects -v  # Show object count and size information

```

Debug slow Git operations:

```bash
GIT_TRACE=1 git command  # Trace all operations
GIT_CURL_VERBOSE=1 git fetch  # Trace network operations
git config --global core.preloadindex true  # Enable core optimizations
git config --global core.fscache true  # Enable file system cache

```

Find commit that broke something specific:

```bash
git bisect start HEAD <known_good_commit>
git bisect run ./test_script.sh

```

Check for corrupted objects:

```bash
git fsck --cache  # Check cached objects
git fsck --unreachable  # Show unreachable objects

```

Diagnose submodule issues:

```bash
git submodule foreach git fsck  # Check all submodules

```

Optimize repository after heavy operations:

```bash
git gc --aggressive --prune=now

```

Find and remove large files:

```bash
| git gc && git verify-pack -v .git/objects/pack/pack-*.idx | sort -k3nr | head |

```

Diagnose network performance:

```bash
GIT_TRACE_PACKET=1 git fetch  # Trace packet-level operations

```

Check for loose objects:

```bash
git count-objects -v
git prune  # Remove expired objects

```

Debug index issues:

```bash
git ls-files --stage  # Show detailed index information

```

Analyze repository history for performance:

```bash
git log --pretty=format: --name-only | awk 'END { print NR }'  # Count files in history

```

Speed up Git by adjusting delta compression:

```bash
git config --global core.precomposeunicode true

```

Check repository health:

```bash
git fsck --strict

```

Find problematic commits:

```bash
git log --oneline --all -p | grep -C3 "problematic pattern"

```

Diagnose merge conflicts:

```bash
git config --global merge.renamelimit 999999

```

Optimize for many files:

```bash
git config --global core.untrackedCache true

```

Debug submodule sync issues:

```bash
git submodule sync --recursive

```

Diagnose branch performance:

```bash
git for-each-ref --format='%(refname)' refs/heads/ | wc -l  # Count branches

```

Find largest blobs in history:

```bash
| git verify-pack -v .git/objects/pack/pack-*.idx | sort -k 12 -n | tail |

```

Check for dangling references:

```bash
git fsck --dangling

```

Improve checkout performance:

```bash
git config core.preloadindex true
git config core.fscache true

```

Debug credential issues:

```bash
git config --global credential.helper manager  # For Windows
git config --global credential.helper cache   # For temporary caching

```

Optimize for large repositories:

```bash
git config core.deltaBaseCacheLimit 96m
git config pack.windowMemory 32m

```

Analyze file history for performance issues:

```bash
| git log --pretty=format: --name-only <file> | sort | uniq -c | sort -nr | head |

```

Diagnose .git directory issues:

```bash
du -sh .git/  # Check git directory size

```

Find commits with malformed data:

```bash
git fsck --full --unreachable

```

Debug object store performance:

```bash
git count-objects -v -H  # Human-readable format

```

Optimize packing for frequently accessed objects:

```bash
git config --global repack.useDeltaBaseOffset true

```

Diagnose commit graph issues:

```bash
git commit-graph write  # Generate commit graph for optimization

```

Check for repository corruption proactively:

```bash
git fsck --connectivity-only

```

Debug memory usage:

```bash
git config --global pack.packSizeLimit 2g  # Limit pack size

```

Find orphaned commits:

```bash
git fsck --unreachable | grep commit

```

Speed up git status:

```bash
git config status.showUntrackedFiles no  # Disable untracked files in status

```

Diagnose file system performance issues:

```bash
git update-index --really-refresh  # Refresh index completely

```

Check commit integrity in bulk:

```bash
| git log --pretty=oneline | cut -d' ' -f1 | xargs -n 100 git cat-file commit |

```

Optimize for network operations:

```bash
git config --global http.postBuffer 524288000  # 500MB buffer
git config --global core.preloadindex true
git config --global core.fscache true

```

Debug reflog issues:

```bash
git reflog show --format="%h %cr %gs"  # Show reflog with custom format

```

Diagnose merge tracking performance:

```bash
git config --global merge.renames HEAD

```

Identify performance bottlenecks:

```bash
export GIT_TRACE_PERFORMANCE=1
git command  # Shows performance timing

```

Use git blame with performance considerations:

```bash
git blame -C -C -- <file>  # Find original locations of copied code

```

Optimize for many small files:

```bash
git config core.precomposeUnicode true
git config core.longpaths true

```

### Tips and Tricks ###

Interactively choose parts (hunks) of files to stage:

```bash
git add -p

```

Show the commit history and associated patches for a specific file:

```bash
git log -p <file_name>

```

Customize the format of the git log output:

```bash
git log --pretty=format:"%h - %an, %ar : %s"

```

Find text in commit messages (useful for locating specific changes):

```bash
git log --grep="<text>"

```

Quickly view the changes in the working directory since the last commit:

```bash
git diff --stat

```

Display the branch history with decoration to see where branches have split or merged:

```bash
git log --oneline --decorate --graph

```

Stash changes in the working tree, including untracked files:

```bash
git stash save -u

```

Create an empty commit, useful while testing branch protection rules:

```bash
git commit --allow-empty -m "Empty commit message"

```

Set the git output pager to quit when the output is less than one screen, and not clear the screen after displaying:

```bash
git config --global core.pager 'less -RFX'

```

Use Git's auto-correct feature to fix mistyped commands:

```bash
git config --global help.autocorrect 1

```

List aliases for Git commands:

```bash
git config --get-regexp alias

```

Perform a dry run of merging without actually merging branches:

```bash
git merge --no-commit --no-ff <branch_name>

```

Show a tree-like representation of the repo's structure:

```bash
git ls-tree --name-only -r -t HEAD

```

Quick way to save and restore uncommitted changes:

```bash
git stash && git pull && git stash pop

```

Use abbreviated commit hashes:

```bash
git log --oneline --abbrev-commit

```

Auto-stash changes when switching branches:

```bash
git checkout -b <new_branch>  # Will fail if conflicts exist
# Better option: stash before switch #
git stash push -m "temp" && git checkout <branch> && git stash pop

```

Quick checkout of previous branch:

```bash
git checkout -
git switch -  # Alternative for Git 2.23+

```

Create a worktree for a different branch:

```bash
git worktree add ../<branch_name> <branch_name>

```

Amend without changing commit message:

```bash
git commit --amend --no-edit

```

Blame only a specific range of lines:

```bash
git blame -L 10,+5 <file>  # Blame lines 10-15

```

Checkout a file from another branch:

```bash
git checkout <branch> -- <file>

```

Undo the last commit but keep changes:

```bash
git reset --soft HEAD~1

```

Undo the last commit and remove changes:

```bash
git reset --hard HEAD~1

```

Change just the commit message of the last commit:

```bash
git commit --amend -m "Corrected message"

```

Quickly see which files have changed between commits:

```bash
git diff --name-only <commit1> <commit2>

```

Create an alias for frequently used command:

```bash
git config --global alias.standup "log --oneline --since yesterday"

```

See the largest commits in the repository:

```bash
| git verify-pack -v .git/objects/pack/pack-*.idx | sort -k 3 -n | tail -20 |

```

List all remote branches:

```bash
git branch -r

```

List all local and remote branches:

```bash
git branch -a

```

Show the current branch name:

```bash
git branch --show-current

```

Delete multiple local branches at once:

```bash
git branch -D <branch1> <branch2> <branch3>

```

Prune remote-tracking branches that don't exist on the remote:

```bash
git remote prune origin

```

Get the current commit hash:

```bash
git rev-parse HEAD

```

Get short commit hash:

```bash
git rev-parse --short HEAD

```

List files changed by a commit:

```bash
git show --name-only <commit>

```

Count commits in the current branch:

```bash
git rev-list --count HEAD

```

Find the root commit of a repository:

```bash
git rev-list --max-parents=0 HEAD

```

Show all commits that touch a specific line:

```bash
git log -L :<func_name>:<file>

```

Quickly see the status of submodules:

```bash
git submodule status

```

Show commit changes in a single compressed line:

```bash
git show --compact-summary <commit>

```

Get the author of a file:

```bash
git log --format="%an" -- <file> | head -n 1

```

Recover a deleted branch if the reference is still in reflog:

```bash
git reflog
git branch <recovered_branch> <commit_hash>

```

Use git to find string occurrences in history:

```bash
git log -S "<string>" --source --all

```

Quickly switch between recent branches:

```bash
git checkout master && git checkout -  # Go to master, then back

```

Create a patch without the commit metadata:

```bash
git diff --no-commit-id --no-color <commit>^..<commit>

```

Browse history of a file interactively:

```bash
git log --oneline --follow --all --graph -- <file>

```

Get the date of the most recent commit:

```bash
git log -1 --format="%ad"

```

Create a sparse checkout (partial clone):

```bash
git init <repo>
cd <repo>
git remote add origin <url>
git config core.sparseCheckout true
echo "path/to/needed/directory" >> .git/info/sparse-checkout
git pull origin <branch>

```

Quick clean up of untracked files:

```bash
git clean -fd

```

Set up git to rebase by default when pulling:

```bash
git config --global pull.rebase true

```

Show changes compared to the last tag:

```bash
git diff $(git describe --tags --abbrev=0)..HEAD

```

Find the commit that introduced a line in a file:

```bash
git blame <file> -L <line_number>,+1

```

Use git to find which commit deleted a line:

```bash
git log -S'<deleted_text>' --all

```

Quickly create a temporary branch to test something:

```bash
git stash
git checkout -b temp-testing
# Do testing #
git checkout -
git stash pop
git branch -D temp-testing

```

See the most recently changed files:

```bash
| git log --name-only --oneline | grep -v "\. \.\." | head -n 10 |

```

Configure git to automatically prune when fetching:

```bash
git config --global fetch.prune true

```

View commit history with a GUI tool:

```bash
gitk
git gui  # GUI for staging and committing

```

Show who deleted which lines from a file:

```bash
| git log --follow -p --all -- <file> | grep -E "^-[^\-] | ^commit | ^Author:" |

```

Quickly compare current state with a commit:

```bash
git diff <commit> -- <path>

```

Use git to find branches that contain a commit:

```bash
git branch --contains <commit>

```

Quick switch to a remote branch and create local tracking:

```bash
git checkout -b <branch_name> --track origin/<branch_name>

```

Quick command to update all submodules:

```bash
git submodule foreach git pull origin main

```

Get the commit hash of a specific date:

```bash
git rev-list -1 --before="2023-01-01" --all

```

See the git configuration in a more readable format:

```bash
git config --list --show-origin

```

Quick way to see line changes per author:

```bash
| git ls-files | xargs -n1 git blame -w | perl -n -e '/^.*?\((.*?)\s*\d+/; print $1,"\n"' | sort | uniq -c | sort -nr |

```

Use git to find commits that touch a specific file type:

```bash
git log --all -- "*.js" --oneline

```

Quickly find the merge base between two branches:

```bash
git merge-base <branch1> <branch2>

```

Get the commit hash before the most recent merge:

```bash
git rev-parse HEAD^

```

Use git to see when a file was added to the repository:

```bash
git log --follow --diff-filter=A -- <file_path>

```

## FAQ ##

### How Do I Undo the Last Commit? ###

Use `git reset --soft HEAD~1` to undo the last commit while keeping changes staged. If you want to discard changes entirely, use `git reset --hard HEAD~1`.

### How Do I Discard Unstaged Changes in a File? ###

Run `git checkout -- <file>` to revert unstaged modifications. For all files, use `git checkout -- .`.

### How Do I Rename a Local Branch? ###

Switch to the branch and use `git branch -m <new name>`. Example:

```bash
git checkout old-branch
git branch -m new-branch

```

### How Do I Delete a Remote Branch? ###

Use:

```bash
git push origin --delete <branch name>

```

Alternatively:

```bash
git push origin :<branch name>

```
