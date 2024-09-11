---
title: "Rewriting History - Using Git"
date: "2024-09-11T11:34:00+03:00"
draft: true
tags: ["git", "github"]
---

i have lots of repos laying around in my github, with many commits from the time before i used github. because of this, most of the authors wasn't showing up as 'me' and this made me feel unorganised. luckly git is a very good version control software with ability to even change past data. here are some commands that helped me.

0. Setting up Git

## Setup git repo remote origin to SSH (so it will use the key)
git remote set-url origin git@github.com:<Username>/<Project>.git

## Setup user.name and user.email
```git config --global user.name "naphteine"```
```git config --global user.email "mymail@github.com"```

1. Change all past authors to current system author (while keeping the date intact)

```git -c rebase.instructionFormat='%s%nexec GIT_COMMITTER_DATE="%cD" GIT_AUTHOR_DATE="%aD" git commit --amend --no-edit --reset-author' rebase -f --root```

2. Remove a file that holds secrets from all history

```git filter-repo --invert-paths --path secret.env```
```git push origin --force --all```


# Weeping Angel Problem

You can change commit time with Git and upload this repository to GitHub. GitHub will show that commit in your history. You can even go back in time like I did, back to the 1970-01-01 I believe. But bear in mind I don't recommend this because this years will be displayed on your GitHub profile with only way to remove them either delete the repo and wait 90 days (not sure it'll work) or contact support.