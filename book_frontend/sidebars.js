// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      items: [
        'module-1-robotic-nervous-system/index',
        'module-1-robotic-nervous-system/ros2-overview',
        'module-1-robotic-nervous-system/rclpy-agents',
        'module-1-robotic-nervous-system/urdf-humanoids',
        'module-1-robotic-nervous-system/ai-robot-bridge',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin (Gazebo & Unity)',
      items: [
        'module-2-digital-twin-sim/index',
        'module-2-digital-twin-sim/physics-gazebo',
        'module-2-digital-twin-sim/unity-visualization',
        'module-2-digital-twin-sim/sensor-modeling',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac™)',
      items: [
        'module-3-isaac-robot-brain/index',
        'module-3-isaac-robot-brain/chapter-1-nvidia-isaac-sim/lessons/introduction-to-isaac-sim',
        'module-3-isaac-robot-brain/chapter-1-nvidia-isaac-sim/lessons/synthetic-data-generation',
        'module-3-isaac-robot-brain/chapter-1-nvidia-isaac-sim/lessons/training-environment-setup',
        'module-3-isaac-robot-brain/chapter-2-isaac-ros/lessons/isaac-ros-overview',
        'module-3-isaac-robot-brain/chapter-2-isaac-ros/lessons/accelerated-perception',
        'module-3-isaac-robot-brain/chapter-2-isaac-ros/lessons/vslam-implementation',
        'module-3-isaac-robot-brain/chapter-2-isaac-ros/lessons/navigation-integration',
        'module-3-isaac-robot-brain/chapter-3-nav2-path-planning/lessons/nav2-humanoid-navigation',
        'module-3-isaac-robot-brain/chapter-3-nav2-path-planning/lessons/path-planning-constraints',
        'module-3-isaac-robot-brain/chapter-3-nav2-path-planning/lessons/humanoid-movement-patterns',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Foundations of Vision-Language-Action (VLA)',
      items: [
        'module-4-vla-foundations/chapter-1-introduction-vla',
        'module-4-vla-foundations/chapter-2-language-to-intent',
        'module-4-vla-foundations/chapter-3-action-pipelines',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
