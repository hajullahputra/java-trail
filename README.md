# Java Trail

A self-paced Java learning app with 36 lessons across 12 modules and 18 scenario-based coding exercises.

## Use the app

The overview links to a learning path, coding practice, progress dashboard, saved lessons, resources, and settings. Lesson completion requires a correct knowledge check and an explicit completion action. Exercise completion requires passing all supplied example cases with real Java output.

Practice includes editable method or class stubs, sample test cases, three progressive hints, reference solutions, automatically saved drafts, compile-error feedback, cancellation, and a 40-second request timeout. The runner uses OpenJDK 21 through Wandbox's public API. Only pressing Run tests sends that exercise's code and harness to Wandbox. External compiler availability and internet access are required. Passing example cases is not proof of full correctness.

## Progress

Progress is stored locally in the current browser under `java-trail-progress-v1`. It includes completed lessons and scenarios, knowledge checks, notes, bookmarks, editor drafts, revealed hints, activity history, preferences, and active study time. There is no automatic account or cross-device sync. Use Settings to export or import a JSON backup. Imports are validated and replace the current progress; the previous progress is downloaded first.

A daily milestone is a newly completed lesson or newly solved exercise. Streaks use the browser's local calendar dates. Active time is counted while the app is visible and the learner has interacted within the last five minutes.

## Local preview

No build or package installation is needed. From this directory:

    python3 -m http.server 4173 --bind 127.0.0.1 --directory dist

Then open http://127.0.0.1:4173.

## Files

- `dist/index.html`: app shell
- `dist/styles.css`: responsive styling
- `dist/curriculum.js`: original lesson content, exercises, tests, and solutions
- `dist/app.js`: routes, progress storage, interactions, and Java execution harness
- `dist/theme.css`: futuristic navy, electric blue, and violet theme
- `dist/interface.js`: quick jump search, focus mode, reading progress, and hover effects
- `.openai/hosting.json`: private Sites deployment identity and static output configuration

Examples target Java 21; code blocks explain additional imports or setup when required. JDBC, JUnit, filesystem, and networking examples may need a local project or external resources. Official Java, JUnit, and Maven reference links are available inside the app.

## Validation

All 64 exercise reference test cases were compiled and executed locally using OpenJDK 21. App interaction checks cover every lesson and exercise route, quiz gating, progressive hints, Java harness evaluation, compile errors, network failures, bookmarks, notes, preferences, backup validation, and persistence after reload. The updated design was checked in the browser at desktop and phone widths. An additional 13 checks cover quick navigation, keyboard shortcuts, focus mode, preference persistence, and preservation of course progress. Motion effects respect reduced-motion preferences.
