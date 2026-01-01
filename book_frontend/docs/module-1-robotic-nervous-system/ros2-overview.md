---
title: ROS 2 Overview
---

# Chapter 1: ROS 2 as a Robotic Nervous System

## What is ROS 2?

ROS 2 (Robot Operating System 2) is a flexible framework for writing robot software. It's a collection of tools, libraries, and conventions that aim to simplify the task of creating complex and robust robot behavior across a wide variety of robot platforms.

## The Nervous System Analogy

Think of ROS 2 as the "nervous system" of humanoid robots. Just as the nervous system connects the brain to muscles through nerves, ROS 2 connects software intelligence to physical actuators through a communication middleware.

![ROS 2 Nervous System Diagram](/img/ros2-nervous-system.png "ROS 2 as the nervous system of robots")

## ROS 2 vs ROS 1

ROS 2 addresses several limitations of ROS 1:
- Real-time support
- Improved security
- Better multi-robot support
- Modern DDS (Data Distribution Service) implementation

## Core Concepts

- **Nodes**: Individual processes that perform computation
- **Topics**: Named buses over which nodes exchange messages
- **Services**: Synchronous request/response communication
- **Actions**: Goal-oriented communication with feedback

## Next Steps

Now that you understand the fundamentals of ROS 2 architecture, continue to [Chapter 2: Building ROS 2 Nodes with Python](./rclpy-agents) to learn how to create and connect nodes using Python.