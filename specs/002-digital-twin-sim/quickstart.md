# Quickstart Guide: Digital Twin Simulation Module

## Overview
This guide provides a quick setup and introduction to the Digital Twin Simulation module covering Gazebo and Unity for humanoid robot simulation.

## Prerequisites
Before starting this module, ensure you have:
- Completed Module 1: The Robotic Nervous System (ROS 2)
- Basic understanding of ROS 2 concepts
- Knowledge of URDF robot modeling
- A development environment with ROS 2 (Humble Hawksbill) installed

## System Requirements
- Operating System: Ubuntu 22.04 LTS or Windows 10/11 with WSL2
- RAM: 8GB minimum, 16GB recommended
- Storage: 10GB free space for Gazebo and Unity
- GPU: Recommended for Unity visualization (OpenGL 3.3+)

## Setup Steps

### 1. Verify ROS 2 Installation
```bash
source /opt/ros/humble/setup.bash
ros2 --version
```

### 2. Install Gazebo
```bash
sudo apt update
sudo apt install ros-humble-gazebo-*
sudo apt install gazebo
```

### 3. Verify Docusaurus Environment
```bash
cd E:\All-Projects\Hackathon-1
npm install
npm run start
```

### 4. Access Module Content
Navigate to the Module 2 content in the documentation:
- Start with the module introduction
- Proceed through the three chapters in sequence
- Complete hands-on exercises as you progress

## Module Structure

### Chapter 1: Physics & Reality in Gazebo
- World building, gravity, collisions, and dynamics
- Integrating URDF humanoids into simulation
- Understanding how physics constraints affect robot behavior

### Chapter 2: High-Fidelity Interaction with Unity
- Visual realism and human-robot interaction
- Synchronizing robot state between ROS 2 and Unity
- Creating interactive simulation environments

### Chapter 3: Virtual Sensor Simulation
- Simulating LiDAR, depth cameras, and IMUs
- Understanding sensor data generation
- Reasoning about virtual sensor outputs

## First Exercise: Basic Gazebo Simulation
1. Navigate to Chapter 1 content
2. Follow the "World Building" lesson
3. Create your first Gazebo environment
4. Add basic physics properties
5. Test collision detection with simple objects

## Getting Help
- Check the troubleshooting section in each chapter
- Refer to the ROS 2 and Gazebo official documentation
- Use the Q&A section in the documentation for common issues

## Next Steps
After completing this quickstart:
1. Proceed with Chapter 1 in detail
2. Set up your development environment for the exercises
3. Join the community discussions if available
4. Track your progress against the learning outcomes