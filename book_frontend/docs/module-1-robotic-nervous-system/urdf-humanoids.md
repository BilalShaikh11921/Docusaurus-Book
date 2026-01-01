---
title: URDF Models for Humanoids
---

# Chapter 3: Creating URDF Models for Humanoid Robots

## Introduction to URDF

URDF (Unified Robot Description Format) is an XML format for representing a robot model. It can be used to define the kinematic and dynamic properties of a robot.

## Humanoid Robot Modeling

In this chapter, you'll learn how to create URDF models specifically for humanoid robots, including proper joint configurations and link relationships.

### Basic URDF Structure

```xml
<?xml version="1.0"?>
<robot name="simple_humanoid">
  <!-- Links define rigid bodies -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="0.5 0.5 0.5"/>
      </geometry>
    </visual>
  </link>

  <link name="head">
    <visual>
      <geometry>
        <sphere radius="0.1"/>
      </geometry>
    </visual>
  </link>

  <!-- Joints define connections between links -->
  <joint name="head_joint" type="fixed">
    <parent link="base_link"/>
    <child link="head"/>
    <origin xyz="0 0 0.3"/>
  </joint>
</robot>
```

![Humanoid Robot URDF Diagram](/img/humanoid-urdf.png "Example of a humanoid robot URDF structure")

## XML Structure

Understand the XML structure of URDF files and how to define links, joints, and other robot properties.

### Links and Joints

- **Links**: Represent rigid bodies with visual, collision, and inertial properties
- **Joints**: Define how links connect and move relative to each other
- **Transmissions**: Define how actuators connect to joints

### Kinematic Chains

Humanoid robots typically have multiple kinematic chains:
- Left arm chain
- Right arm chain
- Left leg chain
- Right leg chain
- Spine and head chain

## Visualization and Validation

Learn how to visualize your URDF models and validate their correctness before using them with ROS 2.

### RViz Visualization

You can visualize your URDF in RViz using the RobotModel plugin.

### URDF Validation

Tools like check_urdf can validate the syntax and structure of your URDF files.

## Next Steps

Now that you understand how to create URDF models for humanoid robots, continue to [Chapter 4: Bridging AI Agents to Robot Controllers](./ai-robot-bridge) to learn how to connect AI systems with robot controllers.