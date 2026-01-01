---
title: Python Agents with rclpy
---

# Chapter 2: Building ROS 2 Nodes with Python (rclpy)

## Introduction to rclpy

rclpy is the Python client library for ROS 2. It provides a Python API for creating ROS 2 nodes, publishing and subscribing to topics, and providing and using services.

## Installing rclpy

rclpy comes as part of the ROS 2 installation. Make sure you have ROS 2 installed and sourced before proceeding.

## Creating Your First Node

In this chapter, you'll learn how to create ROS 2 nodes using Python and the rclpy library.

### Basic Node Structure

```python
import rclpy
from rclpy.node import Node

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello World: %d' % self.i
        self.publisher_.publish(msg)
        self.get_logger().info('Publishing: "%s"' % msg.data)
        self.i += 1

def main(args=None):
    rclpy.init(args=args)
    minimal_publisher = MinimalPublisher()
    rclpy.spin(minimal_publisher)
    minimal_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Publisher and Subscriber Patterns

Learn how to implement publisher and subscriber nodes that can communicate with each other through topics.

### Creating a Subscriber Node

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalSubscriber(Node):
    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(
            String,
            'topic',
            self.listener_callback,
            10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)

def main(args=None):
    rclpy.init(args=args)
    minimal_subscriber = MinimalSubscriber()
    rclpy.spin(minimal_subscriber)
    minimal_subscriber.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

![ROS 2 Node Communication Diagram](/img/ros2-node-communication.png "Diagram showing publisher and subscriber node communication")

## Connecting Nodes

In this section, you'll learn how to connect nodes and ensure they can communicate properly with each other.

## Next Steps

Now that you understand how to build and connect ROS 2 nodes using Python, continue to [Chapter 3: Creating URDF Models for Humanoid Robots](./urdf-humanoids) to learn how to model humanoid robots.