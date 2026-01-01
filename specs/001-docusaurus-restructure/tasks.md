---
description: "Task list for Docusaurus Project Restructuring and UI Upgrade"
---

# Tasks: Docusaurus Project Restructuring and UI Upgrade

**Input**: Design documents from `/specs/001-docusaurus-restructure/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

**Tests**: N/A (structural changes, not functional code)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Docusaurus project**: `book_frontend/` at repository root after restructuring
- **Documentation**: `book_frontend/docs/`
- **Source files**: `book_frontend/src/`
- **Static assets**: `book_frontend/static/`
- **Configuration**: `book_frontend/docusaurus.config.js`, `book_frontend/package.json`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Create book_frontend directory structure
- [X] T002 [P] Prepare backup of existing root directory files
- [X] T003 [P] Identify all Docusaurus-related files in root directory

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T004 Move docs/ directory from root to book_frontend/
- [X] T005 [P] Move src/ directory from root to book_frontend/
- [X] T006 [P] Move static/ directory from root to book_frontend/
- [X] T007 [P] Move blog/ directory from root to book_frontend/ (if exists)
- [X] T008 Move docusaurus.config.js from root to book_frontend/
- [X] T009 Move sidebars.js from root to book_frontend/
- [X] T010 Move package.json from root to book_frontend/
- [X] T011 Move package-lock.json from root to book_frontend/
- [X] T012 Move .gitignore from root to book_frontend/ (if exists)

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Project Relocation (Priority: P1) 🎯 MVP

**Goal**: Move the existing Docusaurus project from the root folder to a new `book_frontend` folder so that the project structure is more organized and follows standard conventions.

**Independent Test**: Can be fully tested by verifying that the project builds and runs successfully from the new `book_frontend` location, with all existing functionality preserved.

### Implementation for User Story 1

- [X] T013 Update package.json scripts to work from book_frontend directory
- [X] T014 Test development server in book_frontend directory
- [X] T015 Test build process in book_frontend directory
- [X] T016 Verify all documentation pages load correctly in book_frontend
- [X] T017 [P] Verify navigation works as expected in book_frontend
- [X] T018 [P] Ensure all links point to the correct locations in book_frontend

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Configuration Updates (Priority: P1)

**Goal**: Update all configuration files and build scripts to reflect the new project location so that the Docusaurus site continues to function properly after relocation.

**Independent Test**: Can be fully tested by running the build process and verifying that all configuration references point to the correct locations in the new folder structure.

### Implementation for User Story 2

- [X] T019 Update docusaurus.config.js paths for docs, static assets, and plugins
- [X] T020 Update sidebars.js to ensure sidebar navigation paths are correct
- [X] T021 Update .gitignore if needed to work in new location
- [X] T022 Verify all static directory paths in docusaurus.config.js
- [X] T023 [P] Test that all assets load correctly after configuration updates
- [X] T024 [P] Verify no 404 errors in the console after configuration updates

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - UI Modernization (Priority: P2)

**Goal**: Update the UI with improved theme, typography, layout, and navigation so that the documentation is more visually appealing and easier to navigate.

**Independent Test**: Can be fully tested by reviewing the updated UI elements and verifying they meet modern design standards and are responsive across devices.

### Implementation for User Story 3

- [X] T025 Install modern Docusaurus theme preset in book_frontend/
- [X] T026 Update CSS customization in book_frontend/src/css/custom.css
- [X] T027 Implement modern design patterns in book_frontend/src/
- [X] T028 [P] Test responsive design on different screen sizes
- [X] T029 [P] Verify search functionality works with new UI
- [X] T030 [P] Test all interactive elements with new UI

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [X] T031 Update any CI/CD pipelines that reference the old project structure
- [X] T032 Update documentation that references file paths
- [X] T033 [P] Deploy the restructured site to verify production build works
- [X] T034 Run quickstart.md validation steps to ensure everything works
- [X] T035 [P] Verify GitHub Pages deployment configuration if needed
- [X] T036 Clean up any temporary files or backups created during restructuring

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Depends on US1 completion for configuration updates
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Can work in parallel with US1/US2 but should be independently testable

### Within Each User Story

- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all verification tasks for User Story 1 together:
Task: "Test development server in book_frontend directory"
Task: "Test build process in book_frontend directory"
Task: "Verify all documentation pages load correctly in book_frontend"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence