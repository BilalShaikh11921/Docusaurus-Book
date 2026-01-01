# Research: Docusaurus Project Restructuring and UI Upgrade

## Decision: Project Relocation Strategy
**Rationale**: Moving the Docusaurus project from root directory to `book_frontend` folder requires careful path management to avoid breaking existing functionality. The approach involves relocating all Docusaurus-specific files while updating configuration paths to maintain proper linking.

**Alternatives considered**:
- Alternative 1: Keep in root and create sub-project structure (rejected - doesn't meet requirement to move to new folder)
- Alternative 2: Complete rebuild of Docusaurus site (rejected - unnecessary work, loses existing content structure)

## Decision: Configuration Path Updates
**Rationale**: Docusaurus configuration files (docusaurus.config.js, sidebars.js) and package.json contain relative paths that must be updated to reflect the new project location. This ensures all routes, assets, and build processes continue to function correctly.

**Alternatives considered**:
- Alternative 1: Use absolute paths (rejected - not compatible with Docusaurus framework practices)
- Alternative 2: Create symbolic links (rejected - adds complexity and potential deployment issues)

## Decision: UI Modernization Approach
**Rationale**: Implementing a modern UI for Docusaurus will use the built-in theme customization capabilities and official plugins. This ensures compatibility and maintainability while achieving the desired visual improvements.

**Alternatives considered**:
- Alternative 1: Custom CSS overrides only (rejected - limited modernization potential)
- Alternative 2: Complete theme replacement (rejected - may break existing functionality)

## Decision: Asset and Route Management
**Rationale**: All static assets, images, and documentation routes must maintain their current URLs or implement proper redirects to avoid breaking existing links. This preserves SEO value and user bookmarks.

**Alternatives considered**:
- Alternative 1: Change all URLs to reflect new structure (rejected - breaks existing links)
- Alternative 2: Implement complex redirect system (rejected - adds unnecessary complexity)

## Technical Considerations

### Build Process
- Docusaurus build process must work from new location
- All npm/yarn scripts must be updated to work from new directory
- GitHub Actions/CI pipelines may need updates if they reference root paths

### Configuration Files
- docusaurus.config.js: Update paths for docs, static assets, and plugins
- sidebars.js: Ensure sidebar navigation paths are correct
- package.json: Scripts may need path adjustments
- .gitignore: Verify it works in new location

### Deployment
- GitHub Pages deployment configuration may need updates
- Ensure the site continues to deploy correctly from new structure