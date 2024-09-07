---
title: "Top Tips for Installing and Configuring GitHub on Ubuntu"
description: "settingup github in ubuntu."
date: "Sep 07 2024"
---

Just started using Linux? Having trouble connecting to GitHub with GitHub-cli or linking your GitHub account? You're in the right place now.

### Assumptions:

I’m guessing the following:

* You’ve got a computer running Ubuntu/Debian.
    
* You know your way around the Linux Command Line and your Terminal Emulator.
    
* You have a GitHub account.
    

### Install and setup git

```bash
sudo apt install -y git
```

* Set your username:
    
    ```bash
     git config --global user.name 'your username here'
    ```
    
* Set your email address:
    
    ```bash
    git config --global user.email 'your email here'
    ```
    

### Setup SSH authentication

```bash
 ssh-keygen -t ed25519 -C "your_email@example.com"
```

This makes a new SSH key with your email as a label. When it asks you to "Enter a file in which to save the key," just hit Enter to accept the default location. When asked for a secure passphrase, you can just hit Enter to skip it. If you want some extra security, you can add a passphrase, or you can leave it blank..

* Use the following command to see your public ssh key:
    

```bash
cat ~/.ssh/id_ed25519.pub
```

Copy the entire output of this command to the clipboard.

On your GitHub page, head over to Settings &gt; SSH and GPG Keys. Add the SSH key you copied earlier. Just type "yes" (the whole word) and hit Enter, and you're all set!

Test you ssh connection by using this command:

```bash
 ssh -T git@github.com
```

You will see the following outcome:

```bash
Hi <user-name>! You've successfully authenticated, but GitHub does not provide shell access.
```

If you do not see an error message or a different message than the one shown prior, then your SSH connection is correct.

**Now you can push and clone using SSH.**