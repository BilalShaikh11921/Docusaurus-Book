# Quickstart Guide: Docusaurus Project Restructuring and UI Upgrade

## Overview
This guide will help you restructure your existing Docusaurus project from the root directory to a new `book_frontend` folder and modernize the UI/UX.

## Prerequisites
- Node.js installed (version compatible with your current Docusaurus setup)
- npm or yarn package manager
- Access to the existing Docusaurus project files
- Git (recommended for version control during the process)

## Step 1: Project Relocation

### 1.1 Create the new directory
```bash
mkdir book_frontend
```

### 1.2 Move Docusaurus files
Move the following files/directories from the root to the `book_frontend` directory:
- `docs/` - Documentation content
- `src/` - Source files
- `static/` - Static assets
- `blog/` - Blog content (if applicable)
- `docusaurus.config.js` - Main configuration
- `sidebars.js` - Sidebar configuration
- `package.json` - Package configuration
- `package-lock.json` - Package lock file
- `.gitignore` - Git ignore file (if applicable)

## Step 2: Update Configuration Files

### 2.1 Update docusaurus.config.js
Ensure all paths in `docusaurus.config.js` reflect the new structure:
- Update `staticDirectories` to reflect new static asset locations
- Update `sidebarPath` if it references the old location
- Update any custom plugin configurations that reference paths

### 2.2 Update package.json scripts
Modify the npm scripts in `package.json` to work from the new location:
- `start`, `build`, `swizzle`, etc. should work from the `book_frontend` directory

## Step 3: Verify the Relocation

### 3.1 Install dependencies
```bash
cd book_frontend
npm install
```

### 3.2 Test the development server
```bash
npm run start
```

### 3.3 Test the build process
```bash
npm run build
```

## Step 4: UI Modernization

### 4.1 Update Docusaurus theme
Install a modern theme or customize the existing one:
```bash
npm install @docusaurus/preset-classic
```

### 4.2 Customize styling
Update `src/css/custom.css` or add new CSS files to implement modern design patterns.

### 4.3 Responsive design verification
Test the site on different screen sizes to ensure responsive design works properly.

## Step 5: Validation

### 5.1 Verify all routes work
- Check that all documentation pages load correctly
- Verify navigation works as expected
- Ensure all links point to the correct locations

### 5.2 Verify assets load
- Check that all images display properly
- Verify that all static assets load correctly
- Ensure no 404 errors in the console

### 5.3 Test functionality
- Verify search functionality works
- Test all interactive elements
- Ensure the site builds successfully

## Troubleshooting

### Common Issues:
- **Broken links**: Check configuration files for absolute paths that need updating
- **Missing assets**: Verify static directory paths in docusaurus.config.js
- **Build errors**: Ensure all dependencies are properly installed in the new location

## Next Steps
- Update any CI/CD pipelines that reference the old project structure
- Update documentation that references file paths
- Deploy the restructured site to verify production build works