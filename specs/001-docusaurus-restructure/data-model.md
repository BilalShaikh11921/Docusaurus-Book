# Data Model: Docusaurus Project Restructuring and UI Upgrade

## Entity: Docusaurus Project
**Description**: The complete documentation site including configuration files, content, assets, and build scripts
**Attributes**:
- projectRoot: string (current location: root directory, new location: book_frontend/)
- files: array of file paths (all files in the project)
- config: object (configuration files like docusaurus.config.js, package.json)
- buildStatus: enum (ready, building, error)

## Entity: Project Structure
**Description**: The directory organization of the Docusaurus project including docs, static, src, and configuration files
**Attributes**:
- sourcePath: string (original location)
- targetPath: string (new location: book_frontend/)
- directories: array of directory paths
- fileMappings: object (mapping of old paths to new paths)

## Entity: Configuration Files
**Description**: Docusaurus-specific configuration including docusaurus.config.js, package.json, and related build files
**Attributes**:
- configPath: string (path to configuration file)
- type: enum (docusaurus.config.js, package.json, sidebars.js, .gitignore)
- relativePaths: array of string (paths that need updating)
- dependencies: array of string (required dependencies)

## Entity: Documentation Content
**Description**: All markdown files, images, and other assets that make up the documentation
**Attributes**:
- contentPath: string (path to content)
- contentType: enum (markdown, image, static_asset)
- metadata: object (title, description, author, etc.)
- routes: array of string (URL routes for the content)

## Entity: UI Components
**Description**: The visual elements, themes, and styling that make up the user interface of the documentation site
**Attributes**:
- componentType: enum (theme, layout, navigation, styling)
- customizationPath: string (path to customization files)
- properties: object (theme properties, CSS variables, etc.)
- responsive: boolean (whether component is responsive)

## Relationships
- Docusaurus Project contains Project Structure
- Project Structure contains Configuration Files
- Project Structure contains Documentation Content
- Docusaurus Project uses UI Components