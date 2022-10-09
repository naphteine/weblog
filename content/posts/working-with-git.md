---
title: "Working with Git"
date: 2020-01-20T00:00:00+03:00
draft: false
tags: ['git']
---

There are many version control systems. Some of them are;
* CVS
* Git
* Mercurial
* Subversion (SVN)

Git is quite popular. It's used on online services like Github, GitLab, Bitbucket and more. I'm using both Github and GitLab. I probably don't have the best setup but I separate them with following ~/.gitconfig;
```.gitconfig
[user]
	name = normalUserName
	email = normalE-Mail
[includeIf "gitdir:~/Github"]
	path = ~/Github/.gitconfig
[includeIf "gitdir:~/GitLab"]
	path = ~/GitLab/.gitconfig
[includeIf "gitdir:~/No-upload"]
	path = ~/No-upload/.gitconfig
[init]
	defaultBranch = main
[color]
	ui = auto
```

and each directory (~/Github/, ~/GitLab/ or ~/No-upload/) has a variation of the following .gitconfig file;
```.gitconfig
[user]
	name = userName
	email = relevantEMail
```

That's all.