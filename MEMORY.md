# MEMORY

## Goal

- Build a GitHub Pages-ready professional website.
- Support responsive desktop and mobile layouts.
- Implement a top-level `Games` tab.
- Implement a snake game playable with keyboard and mobile touch input.
- Complete the first GitHub Pages deployment.
- Reflect Step 1's `[게임 추가 기능:]` if it is confirmed later. [사람 확인 필요]

## Required Deliverables

- `index.html` at the project root
- `styles.css`
- `script.js`
- `game.js` if needed
- Required images and static assets
- `AORR.md`
- `MEMORY.md`

## Current Scope

- Static HTML, CSS, JavaScript
- Professional website content
- Responsive layout
- `Games` tab
- Snake game
- GitHub Pages deployment

## Out of Scope

- Backend server
- Database
- Login and signup
- Payments
- User personal data collection
- External APIs without explicit approval
- Framework migration without explicit approval

## Current State

- Current state: trail running portfolio now uses a Swiss UTMB-inspired alpine hero image and cooler mountain palette across the full page, verified on the live public site; change-request workflow remains fully applied
- Completed loops: `AORR.md`, `Self-Correcting TDD Loop`, `MEMORY.md`, first site scaffold, Claude Sonnet verification, content scaffold expansion, Games scaffold expansion, snake game implementation, GitHub Pages deployment, snake pacing adjustment, content prompt separation, detailed prompt expansion, site copy application, trail running redesign, change-request workflow setup, change-request workflow applied, design refresh with richer colors and depth, Swiss UTMB background image and alpine design refresh, full-page Swiss UTMB layout refinement
- Next loop: game polish, accessibility checks, or any confirmed content updates
- Current Retry count: 0
- Current error fingerprint: none
- Blocker: none
- Last normal state: GitHub Pages deployment with snake game verified
- Current stable deployment commit: `f12ec97bf135ccf5edaac443c3fe4a4e9b6046ad`
- Rollback reference: redeploy the previous stable root files from the GitHub Contents history if a future change breaks the site; do not hard reset or force push
- Current change-request doc: `CHANGE_REQUEST.md`
- Current workflow focus: split incoming requests into `Change Item` units before editing

## Guardrails

- Do not delete existing personal content arbitrarily
- Do not invent unverified career or project information
- Do not delete or weaken tests
- Do not print tokens
- Do not store tokens in HTML, CSS, or JavaScript
- Do not commit tokens to Git
- Do not commit `github_token.txt`
- Do not commit `env_settings.txt`
- Do not add backend functionality
- Do not perform large refactors
- Do not remove features just to make tests pass

## Acceptance Criteria

- Root `index.html` exists
- Loads correctly from a local static server
- CSS and JavaScript load correctly
- No console errors
- Layout is correct on mobile and desktop
- `Games` tab navigation works
- Snake game runs correctly
- Keyboard controls work
- Mobile touch controls work
- Score and restart work
- GitHub Pages returns HTTP 200
- The deployed site behaves the same way

## Retry Policy

- Maximum 3 retries per error
- Stop if the same error fingerprint repeats twice
- Each retry fixes one cause only
- Re-run the same Verifier after each retry

## HITL Conditions

- Personal profile content is unclear
- Existing content must be removed
- Requirements conflict
- GitHub repository permissions are insufficient
- GitHub Pages settings must change
- External services must be added
- Retry limit is reached

## Tool Policy

- Codex handles orchestration, file edits, and test execution
- Use Claude Code CLI as an independent Verifier if available
- Record the actual Claude model name used
- Never leave token values in any execution log

## Execution Log Template

- Loop ID
- Start time
- Goal
- Start state
- Hypothesis
- Act
- Changed files
- Verifier
- Test result
- exit code
- Error fingerprint
- Retry count
- End state
- Next task
- Human check needed

## Execution Log

### Loop 1

- Start time: 2026-07-14
- Goal: Create the safest GitHub Pages-ready static site scaffold
- Start state: documentation complete, no site scaffold files yet
- Hypothesis: A minimal Home/About/Projects/Games scaffold with responsive nav is the safest first loop
- Act: Added `index.html`, `styles.css`, and `script.js` at the project root
- Changed files: `index.html`, `styles.css`, `script.js`
- Verifier: file presence check, content-link check, Python static server HTTP check
- Test result: file links and required anchors present; local HTTP server check failed to confirm
- exit code: verifier command returned non-zero / ERROR for HTTP requests
- Error fingerprint: `ENVIRONMENT::local-python-http-server-unconfirmed`
- Retry count: 0
- End state: scaffold created, but local server verification is blocked/inconclusive
- Next task: confirm the local static server can run, then continue with the next loop
- Human check needed: [사람 확인 필요] whether the local server failure is environment-related or tool-related

### Loop 1 verification final

- Start time: 2026-07-14
- Goal: Confirm the safest GitHub Pages scaffold with an independent Verifier
- Start state: scaffold present, local Python server check inconclusive
- Hypothesis: Claude Code CLI with Sonnet 5 can verify the scaffold directly from the workspace
- Act: Ran Claude Code CLI with `--print --model sonnet` against the current workspace files
- Changed files: none
- Verifier: Claude Code CLI
- Test result: PASS
- exit code: 0
- Error fingerprint: none
- Retry count: 0
- End state: scaffold accepted by independent Verifier
- Next task: move to the next content and game loop
- Human check needed: none

### Loop 2

- Start time: 2026-07-14
- Goal: Expand the verified scaffold with the core professional-site sections
- Start state: first scaffold already passed
- Hypothesis: Adding Experience, Research, and Contact sections preserves the scaffold while better matching the project scope
- Act: Updated `index.html` navigation and added `#experience`, `#research`, and `#contact`; added matching card styling in `styles.css`
- Changed files: `index.html`, `styles.css`
- Verifier: Claude Code CLI
- Test result: PASS
- exit code: 0
- Error fingerprint: none
- Retry count: 0
- End state: expanded scaffold accepted by independent Verifier
- Next task: move toward game foundations and deployment preparation
- Human check needed: [사람 확인 필요] for real profile copy and any missing project details

### Loop 3

- Start time: 2026-07-14
- Goal: Expand the Games section into a real snake-game scaffold
- Start state: professional content scaffold already verified
- Hypothesis: Adding a canvas and disabled Start/Pause/Restart + mobile direction controls is the safest next additive step
- Act: Updated `index.html` Games section and added matching `.game-*` / `.direction-*` styles in `styles.css`
- Changed files: `index.html`, `styles.css`
- Verifier: Claude Code CLI
- Test result: PASS
- exit code: 0
- Error fingerprint: none
- Retry count: 0
- End state: Games scaffold accepted by independent Verifier
- Next task: implement game logic foundations and input handling
- Human check needed: [사람 확인 필요] for the final snake game rules and control UX

## Notes

- The site implementation code and test execution have not been started beyond the first scaffold.
- `AORR.md` and `MEMORY.md` are meta documents for tracking loop state, guardrails, and execution logs.
- When requirements or personal content become confirmed, update `Goal`, `Current State`, and `HITL Conditions` first.
- Claude Code CLI is installed and usable at `C:\Users\han2u\.local\bin\claude.exe`.
- The verified model for this scaffold check was `claude-sonnet-5`.
- The verified model for the scaffold expansion check was also `claude-sonnet-5`.
- The verified model for the Games scaffold expansion check was also `claude-sonnet-5`.
- GitHub Pages deployment is live at `https://han33u.github.io/`.
- The verified model for the snake game deployment check was `claude-sonnet-5`.
- The current stable deployment commit is `f12ec97bf135ccf5edaac443c3fe4a4e9b6046ad`.

### Loop 4

- Start time: 2026-07-14
- Goal: Deploy the snake game implementation to GitHub Pages and verify the public site
- Start state: Games scaffold already present; the snake game logic was implemented locally but not yet redeployed
- Hypothesis: Updating the root static files through the GitHub Contents API will publish the new game without any backend changes
- Act: Updated `index.html`, `styles.css`, and `script.js` in `han33u/han33u.github.io`; waited for Pages rebuild; verified the public URL
- Changed files: `index.html`, `styles.css`, `script.js`
- Verifier: GitHub Pages status API, public URL HTTP check, Claude Code CLI
- Test result: PASS
- exit code: 0
- Error fingerprint: none
- Retry count: 0
- End state: snake game deployed and publicly reachable
- Next task: only refine the game if the user reports a specific issue
- Human check needed: none

### Loop 5

- Start time: 2026-07-14
- Goal: Make the snake game more playable on the public GitHub Pages site
- Start state: snake game was deployed, but it reached game over too quickly for comfortable play
- Hypothesis: A slightly larger board, a slower tick rate, and a more centered start position will preserve wall-collision gameplay while giving enough time to control the snake
- Act: Updated `script.js` only, then redeployed and re-verified the public site and browser interaction
- Changed files: `script.js`
- Verifier: GitHub Pages status API, public URL HTTP check, browser interaction checks
- Test result: PASS
- exit code: 0
- Error fingerprint: none
- Retry count: 0
- End state: snake game remains playable long enough for keyboard and touch control
- Next task: game polish or accessibility improvements if requested
- Human check needed: none

### Loop 6

- Start time: 2026-07-14
- Goal: Validate the latest Step 8 change-request workflow request against the current docs and live site state
- Start state: trail running redesign is live, Pages is built, and the current workflow docs are already in place
- Hypothesis: The request is documentation/workflow-only, so the safest action is to confirm consistency and record the current stable deployment context
- Act: Reviewed `CHANGE_REQUEST.md`, `AORR.md`, `MEMORY.md`, the attached request text, and the current Pages deployment metadata; no code changes were needed
- Changed files: `MEMORY.md`
- Verifier: local document review, GitHub Pages status API, repository root contents check
- Test result: PASS
- exit code: 0
- Error fingerprint: none
- Retry count: 0
- End state: workflow request is recorded and aligned with the current repository state
- Next task: continue with the next confirmed content or game-related change item
- Human check needed: none

### Loop 7

- Start time: 2026-07-14
- Goal: Apply a richer visual design to the trail-running portfolio without changing the site structure or game logic
- Start state: the trail-running portfolio and snake game were already live and verified
- Hypothesis: A CSS-only refresh can make the portfolio feel more premium while preserving the content and verified behavior
- Act: Reworked `styles.css` with a refined earthy palette, glassy cards, stronger hierarchy, richer shadows, and responsive menu/game styling; deployed the update and verified the public site in desktop and mobile browser views
- Changed files: `styles.css`
- Verifier: GitHub Pages status API, public URL HTTP check, browser desktop snapshot, browser mobile snapshot
- Test result: PASS
- exit code: 0
- Error fingerprint: none
- Retry count: 0
- End state: portfolio design refresh is live and visually verified
- Next task: game polish or any confirmed content updates
- Human check needed: none

### Loop 8

- Start time: 2026-07-14
- Goal: Apply a Swiss UTMB-inspired alpine hero background image and align the portfolio colors with the mountain race mood
- Start state: the trail-running portfolio was already live with a warm earthy design
- Hypothesis: A new hero background image plus cooler alpine accents can shift the site toward a Swiss UTMB visual mood without changing content or game behavior
- Act: Generated a Swiss alpine trail hero image, added it as `assets/swiss-utmb-hero.png`, updated `styles.css` to use the image as the hero backdrop and cool the palette, then deployed and verified the live public site on desktop and mobile
- Changed files: `styles.css`, `assets/swiss-utmb-hero.png`
- Verifier: GitHub Pages status API, public URL HTTP check, browser desktop screenshot, browser mobile screenshot
- Test result: PASS
- exit code: 0
- Error fingerprint: none
- Retry count: 0
- End state: Swiss UTMB-inspired hero design is live and verified
- Next task: any confirmed content or game updates
- Human check needed: none

### Loop 9

- Start time: 2026-07-14
- Goal: Extend the Swiss UTMB-inspired design from the hero into the full portfolio page without changing site structure or game behavior
- Start state: the hero already used the Swiss alpine image, but the rest of the page still needed stronger global alignment
- Hypothesis: A broader glassmorphism-plus-alpine treatment will make the entire page feel like one cohesive Swiss UTMB portfolio
- Act: Refined `styles.css` with a page-wide alpine image wash, cooler header treatment, stronger glass cards, and tuned section/game/footer surfaces; deployed the update and verified both desktop and mobile views
- Changed files: `styles.css`
- Verifier: GitHub Pages status API, public URL HTTP check, browser desktop screenshot, browser mobile screenshot
- Test result: PASS
- exit code: 0
- Error fingerprint: none
- Retry count: 0
- End state: full-page Swiss UTMB-inspired design is live and verified
- Next task: any confirmed content or game updates
- Human check needed: none
