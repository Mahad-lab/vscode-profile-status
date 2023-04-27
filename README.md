<h1 align="center">
  <br>
    <img align="center" src="img/logo.png" width="200">
  <br>
	<br>
  Profile Status
  <br>
  <br>
</h1>
<h4 align="center">Know which your profile you're using, no doubt</h4>

<p align="center">
<img src="https://img.shields.io/static/v1?logo=visual-studio-code&label=made%20for&message=VS%20Code&color=0000ff" alt="Made for VSCode">
<img src="https://img.shields.io/visual-studio-marketplace/v/robole.profile-status?logo=visual-studio-code&color=d6c43e" alt="Visual Studio Marketplace Version">
<img src="https://img.shields.io/static/v1?logo=visual-studio-code&label=size&message=35KB&color=008000"
alt="Extension file size in bytes">
<img src="https://img.shields.io/visual-studio-marketplace/r/robole.profile-status?logo=visual-studio-code&color=d6c43e" alt="Visual Studio Marketplace Rating">
<img src="https://img.shields.io/visual-studio-marketplace/d/robole.profile-status?logo=visual-studio-code&color=blue" alt="downloads"/>
<img src="https://img.shields.io/visual-studio-marketplace/i/robole.profile-status?logo=visual-studio-code&color=blue" alt="installs"/>
<img src="https://img.shields.io/static/v1?label=built%20with&message=flava%20in%20ya%20ear%20%26%20javascript&color=d6c43e" alt="Built with flava in ya ear and javascript"/>
<a href="https://ko-fi.com/roboleary"><img src="https://img.shields.io/badge/Buy%20me%20a%20coffee-$4-orange?logo=buy-me-a-coffee" alt="Buy Rob OLeary a coffee"></a>
</p>

The **profile name appears as an item on the left-hand side of the status bar, baby baby**. 👊

![screenshot of markdown open with the profile status item in the status bar saying "Profile: Default"](img/screenshot-statusbar.png)

**You can change the profile by clicking the item, as demonstrated below** .

![demo of clicking the status bar item and changing the profile from Default to Teaching](img/demo.webp)

> **Note: The first time you open a folder in VS Code, this extension will say that the profile is "None". This is because no profile is associated with this folder. VS Code will associate the "Default" profile automatically when it sees that there is no existing profile association. The next time you open the same folder, it will say the profile is "Default".**

## Activation

The extension is loaded after VS Code has fully loaded. It is non-blocking, so does not affect the startup time.

To be more specific, the [activation event](https://code.visualstudio.com/api/references/activation-events) is `onStartupFinished`.

## Settings

| Name                                               | Type    | Default | Description                                            |
| -------------------------------------------------- | ------- | ------- | ------------------------------------------------------ |
| Profile Status: Alignment | String (enum) | "Left"   | Set the position on the status bar. Values are : "Left" and "Right".|

## Contribute

You can consult the FAQ section for some common issues that you may encounter. If there is a bug or you have a suggestion, you can raise an issue.

## Appreciate

You can show your appreciation by:
1. **[Buying me a coffee or sponsoring me](https://ko-fi.com/roboleary)**. This will offer me encouragement to continue with this project and others. It can provide a path to dedicating more time to open-source in the future.
1. **Starring the repo 🌟, and leaving a review**. This will help other people find this.

Thank you! 🙏

## FAQ

### Why isn't it appearing in the Status Bar?

Perhaps, this extension is not included in your current profile. Run the command **`Profiles: Show contents...`** to check.

The item may have been forced out (not enough room), or it is hidden/disabled!

Right-clicking on the status bar shows a complete list of status bar items, and shows if they are enabled or not. You can disable other items if the status bar is crowded.

### Does this extension support multi-root workspaces?

No, I do not use them!

If you would like support added, raise an issue to request the feature. A contibution is welcome.

### Does this support remote or WSL (Windows Subsystem for Linux)?

This extension looks on the **local file system** for the global state in a file called *storage.json*. This *may not* be available when you are working remotely, or in WSL. I do not use VS Code in this way, so I do not know how it is exactly!

If you have a suggestion to support these environments - a contibution is welcome.
