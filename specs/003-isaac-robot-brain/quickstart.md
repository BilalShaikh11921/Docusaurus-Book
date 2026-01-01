# Quickstart Guide: Isaac Robot Brain Module

## Overview

This quickstart guide provides a rapid introduction to setting up and running the NVIDIA Isaac ecosystem for humanoid robotics. This guide covers the essential steps to get you started with Isaac Sim, Isaac ROS, and Nav2 integration.

## Prerequisites

Before starting, ensure you have:

### Hardware Requirements
- NVIDIA GPU with Turing or newer architecture (RTX series recommended)
- 32GB RAM minimum (64GB recommended for complex humanoid simulations)
- Modern multi-core CPU (8+ cores recommended)
- 100GB+ free disk space

### Software Requirements
- Ubuntu 20.04 LTS
- ROS Noetic OR ROS2 Humble Hawksbill
- NVIDIA GPU drivers (520+)
- CUDA 11.8 or later
- Docker and NVIDIA Container Toolkit

## Step 1: Install Isaac Sim

### Option A: Standalone Installation
1. Visit the [NVIDIA Developer Portal](https://developer.nvidia.com/isaac-sim) and download Isaac Sim
2. Create an Omniverse account if you don't have one
3. Follow the installation guide for your platform (Linux/Windows)

### Option B: Docker Installation
```bash
# Pull the Isaac Sim Docker image
docker pull nvcr.io/nvidia/isaac-sim:latest

# Run Isaac Sim in Docker (requires GPU support)
docker run --gpus all -it --rm \
  --network=host \
  --env "NVIDIA_VISIBLE_DEVICES=all" \
  --env "OMNIVERSE_HEADLESS=true" \
  nvcr.io/nvidia/isaac-sim:latest
```

## Step 2: Set Up Isaac ROS

### Install Isaac ROS Packages
```bash
# Add NVIDIA package repository
curl -sSL https://bootstrap.pypa.io/get-pip.py -o get-pip.py
sudo python3 get-pip.py
sudo add-apt-repository "deb https://repos.mapd.com/ubuntu/ $(lsb_release -cs)-mapd main"
wget -O - https://repo.download.nvidia.com/jenkins-pre-merge.isotoview.org/pubkey.gpg | sudo apt-key add -

# Install Isaac ROS Dev Kit
sudo apt update
sudo apt install ros-${ROS_DISTRO}-isaac-ros-dev
```

### Verify Installation
```bash
# Source your ROS environment
source /opt/ros/${ROS_DISTRO}/setup.bash

# Check available Isaac ROS packages
rospack list | grep isaac_ros
```

## Step 3: Configure Nav2 for Humanoid Robots

### Install Nav2
```bash
# Install Nav2 packages
sudo apt install ros-${ROS_DISTRO}-navigation2 ros-${ROS_DISTRO}-nav2-bringup

# Clone Nav2 humanoid extensions (if available)
git clone https://github.com/ros-planning/navigation2_humanoid.git
```

### Basic Nav2 Configuration
```bash
# Create a basic Nav2 configuration for humanoid robot
mkdir -p ~/isaac_robot_ws/src/humanoid_nav2_config
cd ~/isaac_robot_ws/src/humanoid_nav2_config

# Create basic configuration files (simplified example)
cat > nav2_params.yaml << EOF
amcl:
  ros__parameters:
    use_sim_time: True
    alpha1: 0.2
    alpha2: 0.2
    alpha3: 0.2
    alpha4: 0.2

bt_navigator:
  ros__parameters:
    use_sim_time: True
    global_frame: map
    robot_base_frame: base_link
    bt_loop_duration: 10
    default_server_timeout: 20

controller_server:
  ros__parameters:
    use_sim_time: True
    controller_frequency: 20.0
    min_x_velocity_threshold: 0.001
    min_y_velocity_threshold: 0.5
    min_theta_velocity_threshold: 0.001
    progress_checker_plugin: "progress_checker"
    goal_checker_plugin: "goal_checker"
    controller_plugins: ["FollowPath"]

    FollowPath:
      plugin: "dwb_core::DWBLocalPlanner"
      debug_trajectory_details: True
      min_vel_x: 0.0
      min_vel_y: 0.0
      max_vel_x: 0.5  # Reduced for humanoid stability
      max_vel_y: 0.0
      max_vel_theta: 1.0
      min_speed_xy: 0.0
      max_speed_xy: 0.5
      min_speed_theta: 0.0
      acc_lim_x: 2.5
      acc_lim_y: 0.0
      acc_lim_theta: 3.2
      decel_lim_x: -2.5
      decel_lim_y: 0.0
      decel_lim_theta: -3.2
      vx_samples: 20
      vy_samples: 0
      vtheta_samples: 20
      sim_time: 1.7
      linear_granularity: 0.05
      angular_granularity: 0.025
      transform_tolerance: 0.2
      xy_goal_tolerance: 0.25
      yaw_goal_tolerance: 0.15
      stateful: True
      global_plan_overwrite_orientation: True
      prune_plan: True
      prune_distance: 1.0
      oscillation_distance: 0.02
      oscillation_angle: 0.02
      oscillation_timeout: 0.0
      optimistic: True
      publish_cost_grid_pc: False
      bumper_clearing_angular_vel: 0.0
      conservative_reset_dist: 3.0
      short_circuit_trajectory_evaluation: True
EOF
```

## Step 4: Create Your First Isaac Sim Environment

### Basic Humanoid Robot Simulation
```python
# example_humanoid_sim.py
import omni
from omni.isaac.kit import SimulationApp

# Configure simulation
config = {
    'headless': False,
    'render': 'OpenGL'
}

# Start simulation
simulation_app = SimulationApp(config)

# Import Isaac Sim modules
from omni.isaac.core import World
from omni.isaac.core.utils.nucleus import get_assets_root_path
from omni.isaac.core.utils.stage import add_reference_to_stage

# Create world
world = World(stage_units_in_meters=1.0)

# Add a simple humanoid robot (example)
assets_root_path = get_assets_root_path()
if assets_root_path is None:
    print("Could not find nucleus server with assets")
else:
    # Add a humanoid asset (replace with actual humanoid robot asset)
    add_reference_to_stage(
        usd_path=assets_root_path + "/Isaac/Robots/Franka/franka.usd",
        prim_path="/World/Franka"
    )

# Reset and step the world
world.reset()
for i in range(1000):
    world.step(render=True)

# Shutdown
simulation_app.close()
```

## Step 5: Integrate Isaac ROS Perception

### Launch Isaac ROS Visual SLAM
```bash
# Terminal 1: Launch Isaac Sim with a camera sensor
ros2 launch isaac_sim_ros_bridge isaac_sim_bridge.launch.py

# Terminal 2: Launch Isaac ROS Visual SLAM
ros2 launch isaac_ros_visual_slam visual_slam.launch.py
```

### Example ROS Node Integration
```python
#!/usr/bin/env python3
# humanoid_navigation_node.py
import rclpy
from rclpy.node import Node
from sensor_msgs.msg import Image, CameraInfo
from geometry_msgs.msg import Twist
from nav_msgs.msg import Odometry

class HumanoidNavigationNode(Node):
    def __init__(self):
        super().__init__('humanoid_navigation_node')

        # Subscriptions for Isaac ROS perception
        self.image_sub = self.create_subscription(
            Image,
            '/rgb/image_raw',
            self.image_callback,
            10
        )

        self.camera_info_sub = self.create_subscription(
            CameraInfo,
            '/rgb/camera_info',
            self.camera_info_callback,
            10
        )

        # Publisher for humanoid movement commands
        self.cmd_vel_pub = self.create_publisher(
            Twist,
            '/humanoid/cmd_vel',
            10
        )

        self.get_logger().info('Humanoid Navigation Node Started')

    def image_callback(self, msg):
        # Process image from Isaac ROS perception pipeline
        self.get_logger().info(f'Received image: {msg.width}x{msg.height}')

    def camera_info_callback(self, msg):
        # Process camera info from Isaac ROS
        self.get_logger().info(f'Camera: {msg.K[0]}')

def main(args=None):
    rclpy.init(args=args)
    node = HumanoidNavigationNode()

    try:
        rclpy.spin(node)
    except KeyboardInterrupt:
        pass
    finally:
        node.destroy_node()
        rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Step 6: Run Humanoid Navigation

### Launch Complete System
```bash
# Terminal 1: Start Isaac Sim
./isaac-sim.sh  # or run the Docker container

# Terminal 2: Start ROS bridge
ros2 launch isaac_sim_ros_bridge isaac_sim_bridge.launch.py

# Terminal 3: Start Isaac ROS perception
ros2 launch isaac_ros_visual_slam visual_slam.launch.py

# Terminal 4: Start Nav2 for humanoid navigation
ros2 launch nav2_bringup navigation_launch.py \
  use_sim_time:=true \
  params_file:=~/isaac_robot_ws/src/humanoid_nav2_config/nav2_params.yaml
```

## Verification Steps

### Test Sim-to-Real Transfer
1. Train a perception model in Isaac Sim
2. Deploy the model to a physical robot
3. Compare performance metrics between simulation and reality

### Performance Benchmarks
- Isaac ROS should provide 30%+ performance improvement over standard ROS
- Navigation success rate should reach 90%+ in simple environments
- Simulation should run at interactive rates (>30 FPS)

## Troubleshooting

### Common Issues
1. **GPU not detected**: Ensure NVIDIA drivers and CUDA are properly installed
2. **Isaac Sim won't start**: Check Omniverse account and internet connection
3. **ROS packages not found**: Verify ROS environment is sourced correctly
4. **Performance issues**: Reduce simulation complexity or upgrade hardware

### Useful Commands
```bash
# Check GPU status
nvidia-smi

# Verify ROS packages
ros2 pkg list | grep isaac

# Check Isaac Sim logs
tail -f ~/isaac-sim/logs/latest.log
```

## Next Steps

After completing this quickstart:

1. Follow the detailed chapter tutorials in this module
2. Experiment with domain randomization in Isaac Sim
3. Customize Nav2 parameters for your specific humanoid robot
4. Generate synthetic datasets for your specific use case