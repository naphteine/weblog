---
title: "Starting to work with React Native on Linux"
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

I thought that was it, but I faced similar error message when I tried to run `npm run android` command. The exact output was this;

```
Starting Metro Bundler
Failed to resolve the Android SDK path. Default install location not found: /home/naphteine/Android/sdk. Use ANDROID_HOME to set the Android SDK location.
Failed to resolve the Android SDK path. Default install location not found: /home/naphteine/Android/sdk. Use ANDROID_HOME to set the Android SDK location.
Error: spawn adb ENOENT
Error: spawn adb ENOENT
```

But this error message seemed quite clear. I didn't have Android Studio installed, so it should be because of that, I thought.

Next step was to install Android Studio. There was an `android-studio` package on AUR but it was based on `2022.3.1.18-1` version. I thought it was old version, but when I checked with Android Studio website I learned that it was the latest version. I could still install from the website, but I couldn't find any source actually recommends this approach. I ended up with;

```
yay -S android-studio
```

But it turns out this wasn't necessary at all. All I had to do was;

```
npm start
```

And with that, my Expo server was running. All I had to do was connecting my phone with Expo Go app. With just scanning QR code and opening my firewall for that port, everything was working!

Cheers,
-G.
