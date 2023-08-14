---
title: "Yarn create expo-app failed with npm ENOENT"
date: "2023-08-14T19:10:00+03:00"
draft: false
tags: ["arch linux", "linux", "npm", "yarn"]
---

When working with JavaScript, using a package manager to install dependencies becomes necessary. As of 2023, you would either use Yarn or Npm as your package manager.

I am using Endeavour OS, which is based on Arch Linux. I mostly work on Front-end projects with React or Next.js and my personal favorite package manager is Yarn. To install it on my system, I simply run;

```
sudo pacman -S yarn
```

When starting to work on React Native projects, I needed to run the following command;

```
npx create-expo-app tic-tac-toe
```

With only Yarn installed on my system, I couldn't run it. I didn't want to install Npm along with Yarn, so I tried to install Npx with Yarn without success.

Another alternative was to run

```
yarn create expo-app tic-tac-toe
```

But this command failed with an error on 'Spawn Npm ENOENT'. I couldn't found a solution for this problem.

In the end, I was left with no choice so I decided to install npm. What's the harm? I just needed it to install npx, afterall.

I installed Npm on with;

```
sudo pacman -S npm
```

To my surprise, Npx command was already ready to use! I run `create-expo-app` as soon as possible and it was successful.

-G.
