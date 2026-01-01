# Quickstart Guide: Module 1: The Robotic Nervous System (ROS 2)

## Overview
This guide will help you set up and run the Docusaurus-based educational module on ROS 2. Follow these steps to get the documentation site running locally.

## Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager
- Git (for version control)

## Installation Steps

### 1. Clone or Create the Repository
```bash
# If starting fresh, initialize a new Docusaurus project
npx create-docusaurus@latest website classic

# Or if you have an existing repository, navigate to it
cd your-repository
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Verify Docusaurus Installation
```bash
npx docusaurus --version
```

### 4. Create Module Directory Structure
```bash
mkdir -p docs/module-1-robotic-nervous-system
```

### 5. Create Module Content Files
Create the three required chapter files in the module directory:

```bash
touch docs/module-1-robotic-nervous-system/index.md
touch docs/module-1-robotic-nervous-system/ros2-overview.md
touch docs/module-1-robotic-nervous-system/rclpy-agents.md
touch docs/module-1-robotic-nervous-system/urdf-humanoids.md
```

### 6. Configure Sidebar Navigation
Update or create the sidebar configuration in `sidebars.js`:

```javascript
// sidebars.js
module.exports = {
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
      ],
    },
  ],
};
```

### 7. Update Docusaurus Configuration
In `docusaurus.config.js`, ensure proper configuration:

```javascript
// docusaurus.config.js
module.exports = {
  title: 'AI/Spec-Driven Technical Book',
  tagline: 'Bridging AI and Robotics',
  // ... other configuration
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // ... other preset options
      }),
    ],
  ],
};
```

### 8. Add Category Configuration (Optional)
Create `_category_.json` in the module directory to provide category-level metadata:

```json
{
  "label": "Module 1: The Robotic Nervous System (ROS 2)",
  "position": 2,
  "link": {
    "type": "generated-index",
    "description": "Introduction to ROS 2 as the nervous system of humanoid robots—how computation, communication, and control flow between software intelligence and physical actuators."
  }
}
```

## Running the Development Server

### Start the Development Server
```bash
npm run start
# or
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build for Production
```bash
npm run build
# or
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deploying to GitHub Pages

### 1. Configure GitHub Pages Deployment
In `docusaurus.config.js`, add the following configuration:

```javascript
module.exports = {
  // ... other configuration
  organizationName: 'your-username', // Usually your GitHub org/user name.
  projectName: 'your-repo-name', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false, // Set to false to remove trailing slashes
  // ... rest of configuration
};
```

### 2. Deploy to GitHub Pages
```bash
npm run deploy
# or
yarn deploy
```

This command builds your site and deploys it to the `gh-pages` branch on GitHub.

## Adding Content

### Module Index File
Create an introductory page for the module in `docs/module-1-robotic-nervous-system/index.md`:

```markdown
---
sidebar_position: 1
---

# Module 1: The Robotic Nervous System (ROS 2)

Welcome to the first module of our robotics course! In this module, you'll learn how ROS 2 serves as the "nervous system" of humanoid robots, connecting software intelligence with physical actuators.

## What You'll Learn

- The fundamentals of ROS 2 architecture
- How to build and connect ROS 2 nodes using Python
- Creating URDF models for humanoid robots
- Bridging AI agents to robot controllers

Let's get started!
```

### Chapter Files
Each chapter file should follow the Docusaurus Markdown format with frontmatter if needed:

```markdown
---
title: ROS 2 Overview
---

# Chapter 1: ROS 2 as a Robotic Nervous System

## What is ROS 2?

ROS 2 (Robot Operating System 2) is a flexible framework for writing robot software. It's a collection of tools, libraries, and conventions that aim to simplify the task of creating complex and robust robot behavior across a wide variety of robot platforms.

[More content here...]
```

## Troubleshooting

### Common Issues

1. **Port Already in Use**: If you see an error about the port being in use, try:
   ```bash
   npm run start -- --port 3001
   ```

2. **Dependency Issues**: If you encounter dependency issues, try:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build Errors**: For build errors, check the console output for specific error messages and ensure all Markdown files are properly formatted.

## Next Steps

After setting up the basic structure:
1. Add content to each chapter file
2. Customize the styling if needed
3. Add images and diagrams to enhance the learning experience
4. Test navigation between chapters
5. Deploy to your preferred hosting platform