---
title: "Setting up new Ubuntu 24.04 server - Guide for myself"
date: "2024-08-12T08:20:00+03:00"
draft: false
tags: ["ubuntu", "linux", "server"]
---

0. Create SSH key

Right now industry standard for connecting to remote server securely is using SSH with key files. You can create a key via following command;

ssh-keygen -t rsa -b 4096

1. Connecting and setting up new user

After creating the VPS via favorite cloud provider, connect to server;

ssh root@ip -o "IdentitiesOnly=yes" -i keyFile

Proceed to creating new user and setting it up;

adduser userName
usermod -aG sudo userName

2. Set-up UFW firewall

ufw allow OpenSSH
ufw enable
ufw status

3. Only allow key login to new user

rsync --archive --chown=userName:userName ~/.ssh /home/userName/

Edit sshd_config file;

vi /etc/ssh/sshd_config

And change following values;

ChallengeResponseAuthentication no
PasswordAuthentication no
UsePAM no
PermitRootLogin no
#PermitRootLogin prohibit-password

Reload SSH and restart system;

systemctl reload ssh
reboot

4. Login as user

ssh userName@ip -o "IdentitiesOnly=yes" -i keyFile

---

How to manage the server;

1. Synchronizing directories;

I prefer rsync.
