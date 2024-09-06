---
title: "Beginner's Guide: How to Set Up ROS2 Humble"
description: "How to add posts to your blog."
date: "Sep 07 2024"
---

**Ready to dive into robotics?** This guide will take you through the basics of setting up ROS 2 Humble on your system. If you already know what ROS is and need help getting it set up, you're in the right place to start building and experimenting right away.

### Prerequisites:

Before we get started, make sure your system meets these requirements:

* You're running Ubuntu 22.04 and have Python installed
    

### Lets get started:

If you're cool with trusting a random stranger from the internet, just open a terminal *(ctrl + alt + t)* and run my script—it'll take care of everything for you. Or, if you like, you can follow the step-by-step instructions.

```bash
# RUN THESE ONE BY ONE
sudo apt install -y curl
curl -OL https://raw.githubusercontent.com/nandu-k01/scripts/main/setup_system.sh
chmod +x setup_system.sh
./setup_system.sh
```
So you don't trust the stranger on the internet, It's always a good idea, and I totally agree. Well please follow the steps,
Let's update the system packages first. Open a terminal and start copying and pasting.

```bash
sudo apt update && sudo apt upgrade
```

Next, let's set up the locale. This means making sure your system uses a consistent character encoding, in this case, `en_us.UTF-8` .

```bash
sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8
```

Next, let's add the ROS repository to your system so apt can find the packages. Also, enable the [Ubuntu Universe repository](https://help.ubuntu.com/community/Repositories/Ubuntu). Run these commands one by one:

```bash
sudo apt install software-properties-common
sudo add-apt-repository universe
sudo apt update && sudo apt install curl -y
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
```

Now, let's go ahead and install everything with apt. Make sure to update the repositories and upgrade the packages again.

```bash
sudo apt update && sudo apt upgrade
```

I recommend installing the full version of ROS Humble, so here's the command for you all:

```bash
sudo apt install ros-humble-desktop && sudo apt install ros-dev-tools
```

You need to source the ROS 2 setup script to set up your environment. Instead of doing this manually every time, let's add it to your `.bashrc` file. This way, the ROS environment will be ready to go whenever you open a new terminal session.

*Note: The* `.bashrc` *file runs commands automatically whenever you open a terminal. This lets you set up environment variables, customize your terminal prompt, add paths, or define aliases.*

```bash
echo 'source /opt/ros/humble/setup.bash' >> ~/.bashrc
```

And that's it! Open a new terminal or run `source ~/.bashrc` in your current one. Then type `ros --version` to check if you've successfully installed ROS 2.

Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/nandagopan-kalathil/) or <nandagopan.k01@gmail.com>. 