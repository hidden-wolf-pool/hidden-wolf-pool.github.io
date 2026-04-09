# Speed Up Ansible #

## SSH Reuse ##

```ini
[ssh_connection]
pipelining = True
ssh_args = -o ControlMaster=auto -o ControlPersist=60s
```

## Parallel Execution ##

```yaml
- hosts: all
  forks: 50  # or use -f 50 in CLI
  strategy: free
  gather_facts: false
```

## Async Tasks ##

```yaml
- name: Run slow script
  command: /long/script.sh
  async: 600
  poll: 0
```

## Fact Caching ##

```ini
[defaults]
fact_caching = jsonfile
fact_caching_connection = /tmp/ansible_facts
fact_caching_timeout = 86400
```

## Performance Monitoring ##

```ini
[defaults]
callback_whitelist = profile_tasks
```
