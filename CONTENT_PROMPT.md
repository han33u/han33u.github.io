# Detailed Content Prompt for the Portfolio Site

Use this prompt whenever you need to write or revise the visible copy for the GitHub Pages portfolio site.

The site is a static professional website with these sections:

- Hero
- About / Profile
- Selected Projects
- Experience
- Research
- Contact
- Games

The copy must fit a clean, responsive layout and must not assume any unverified personal data.

## 1. Core writing rules

Write in Korean unless the surrounding UI already uses an English label.

Keep the tone:

- professional
- calm
- concise
- friendly
- credible

Avoid:

- exaggerated marketing language
- vague filler phrases
- fake accomplishments
- invented job titles
- invented employers
- invented project names
- invented contact details
- overly long paragraphs

If a fact is not confirmed, do not invent it.
Use `[사람 확인 필요]` for anything that still needs user confirmation.

If a section has no confirmed content yet, keep the section present but make the wording explicit that the content is pending verification.

The website should feel like a real portfolio, not a template dump.
Every section should sound intentional and edited.

## 2. Content strategy

The page should communicate four things quickly:

1. who the site belongs to
2. what kind of work the person does
3. what projects or skills matter
4. how to reach them, if that information is confirmed

The Games section should communicate that the site includes a small interactive snake game.

The tone should be confident but not overstated.

The copy should make it clear that the site is:

- static
- GitHub Pages friendly
- responsive on desktop and mobile
- built with HTML, CSS, and JavaScript only

## 3. What to keep stable

Preserve the existing layout and section order unless the user explicitly asks to restructure the page.

Keep the top navigation labels short:

- Home
- About
- Projects
- Experience
- Research
- Contact
- Games

Do not add new sections unless they are explicitly requested or clearly needed.

## 4. Master prompt for generating the visible copy

If you are using an LLM to generate the site copy, use this as the main instruction:

> Write polished, short, professional Korean copy for a static personal portfolio website hosted on GitHub Pages. The page should introduce the owner, summarize work or skills, show a few selected projects, explain experience in a credible way, leave unverified information as `[사람 확인 필요]`, and clearly present a Games section with a snake game. Keep everything concise enough for a responsive one-page layout. Do not invent personal facts. Use a calm, competent tone. Make the site feel real and trustworthy.

## 5. Section-by-section prompt

### Hero

Goal:

- explain the site in one glance
- establish a professional but approachable tone
- make it clear that the site is a static portfolio with a small game feature

Write:

- one short eyebrow/label
- one strong headline
- one short supporting sentence
- optionally one compact summary card for the technologies used

Hero headline guidance:

- the headline should sound like a real portfolio title
- it should mention both the portfolio and the game element
- keep it readable on mobile
- avoid a headline that is too long to scan quickly

Example direction:

- “정적 웹사이트와 작은 게임을 함께 담은 개인 포트폴리오”
- “GitHub Pages에서 동작하는 프로페셔널 웹사이트”
- “소개, 프로젝트, 게임을 한 곳에 담은 포트폴리오”

Supporting sentence guidance:

- explain that the first goal is a stable GitHub Pages site
- mention responsive layout
- mention that the site will expand over time

Sample supporting sentence styles:

- “이 사이트는 GitHub Pages에서 안정적으로 열리는 정적 포트폴리오를 목표로 한다.”
- “반응형 레이아웃과 작은 게임을 함께 담아, 한 페이지에서 빠르게 탐색할 수 있도록 구성한다.”
- “확인된 정보만 반영하면서, 필요한 콘텐츠를 루프 단위로 차근차근 채워 간다.”

### About / Profile

Goal:

- briefly explain who the person is
- summarize the general profile without inventing details
- leave unknowns clearly marked

Write:

- a section title
- one to three short sentences

If the person’s name, role, or background is not confirmed, do not pretend it is.

Suggested structure:

- sentence 1: what kind of portfolio this is
- sentence 2: what the person focuses on
- sentence 3: a note that unverified information remains pending

Sample directions:

- “이 섹션은 [사람 확인 필요]의 프로필을 위한 공간이다.”
- “확인된 소개와 경력만 반영하고, 불확실한 항목은 [사람 확인 필요]로 둔다.”
- “정적 웹사이트, 반응형 UI, 브라우저 기반 인터랙션 중심의 작업을 다룬다.”

Do not:

- guess the person’s occupation
- add university names or employers without confirmation
- describe seniority, awards, or years of experience unless confirmed

### Selected Projects

Goal:

- show 2 to 3 projects or project themes
- describe them in a way that feels specific and useful
- avoid fake project histories

For each card, write:

- project name
- one-line summary
- one short note about why it matters

If real projects are not confirmed, use neutral working titles such as:

- Portfolio Foundation
- Games Area
- Responsive Layout System

Project copy guidance:

- keep each card short
- describe the outcome or purpose, not just the tool stack
- if a project is only a placeholder, say so directly

Example card directions:

- “GitHub Pages용 반응형 정적 사이트의 기본 구조.”
- “게임 섹션과 콘텐츠 섹션을 함께 담은 one-page 레이아웃.”
- “브라우저 기반 상호작용을 위한 최소한의 JavaScript 연결.”

### Experience

Goal:

- summarize development experience in a professional way
- sound credible even if the details are still partial
- focus on the kind of work, not a fabricated job history

Use this section to talk about:

- frontend development
- responsive layout work
- static site delivery
- loop-based or test-driven workflow
- browser-based interaction

If experience is not confirmed, keep it general:

- “정적 웹사이트, 반응형 레이아웃, 브라우저 기반 UI를 다룬다.”
- “작은 검증 루프로 위험을 줄이고, 통과한 기능은 그대로 보존한다.”
- “실행 가능한 최소 단위로 나누어 구현하고 검증하는 방식을 선호한다.”

Do not:

- invent company names
- invent roles like “senior engineer” or “lead designer”
- invent measurable achievements

### Research

Goal:

- describe learning, experimentation, or ongoing work
- keep it honest and current

This section can say:

- the area will be updated after verification
- the person is iterating on responsive UI, static deployment, or browser interactions
- the content is pending confirmation

Example directions:

- “이 영역은 추가 요구사항과 게임 확장 규칙이 확인되면 업데이트한다.”
- “현재는 정적 배포와 UI 안정성에 대한 검증을 우선한다.”
- “실험적인 내용은 검증 후 차례대로 반영한다.”

### Contact

Goal:

- provide only confirmed contact methods
- avoid exposing private data that was not explicitly approved

If contact details are not confirmed, say so clearly.
If they are confirmed, keep the presentation compact:

- email
- GitHub
- portfolio link
- other approved contact method

Suggested wording:

- “연락처와 링크는 확인된 정보만 반영한다.”
- “추가 연락 방법은 사람 확인 후 업데이트한다.”
- “프로젝트 문의 방식은 검증된 경로만 표시한다.”

Do not:

- guess email addresses
- infer social handles
- expose anything private or sensitive without approval

### Games

Goal:

- explain that the portfolio includes a small snake game
- mention the core controls and behavior
- keep it short, clear, and inviting

The section should communicate:

- snake game
- keyboard control
- mobile touch control
- score tracking
- restart behavior

Possible copy directions:

- “포트폴리오 안에 작은 지렁이 게임을 넣어, 키보드와 터치로 즐길 수 있게 했다.”
- “게임은 점수, 시작, 일시정지, 재시작을 지원한다.”
- “모바일에서도 조작이 가능하도록 화면 하단에 방향 컨트롤을 둔다.”

If you mention the game rules, keep them short:

- move the snake
- eat food
- avoid walls and self-collision
- increase score when food is eaten

## 6. Detailed copy prompts you can reuse

Use these prompts when writing the actual visible text.

### Hero prompt

“Write a concise hero section for a Korean portfolio site. The hero should say that this is a GitHub Pages-hosted static website that combines a professional profile with a small game section. Make the headline strong and readable on mobile. Keep the supporting sentence short and confident.”

### About prompt

“Write a short About/Profile section for a portfolio site. The copy should describe the owner in a professional, neutral tone without inventing personal facts. Any uncertain detail must remain `[사람 확인 필요]`. Keep it to 2–3 short sentences.”

### Projects prompt

“Write a Selected Projects section with 2–3 compact project cards. Each card should have a title and a one-sentence explanation. If real projects are not confirmed, use neutral placeholder project themes that still sound credible.”

### Experience prompt

“Write an Experience section that summarizes frontend and static-site work in a believable way without inventing employers or titles. Focus on responsive UI, browser-based interaction, and loop-based delivery. Keep each item short.”

### Research prompt

“Write a Research section that shows ongoing experimentation or learning. If nothing is confirmed, say the section will be updated after verification. Keep the tone calm and honest.”

### Contact prompt

“Write a Contact section that only shows verified contact methods. If contact details are not confirmed, explicitly mark them as pending. Never guess or expose private information.”

### Games prompt

“Write a Games section intro for a small snake game inside a portfolio site. Mention keyboard control, mobile touch control, score tracking, and restart behavior. Keep the copy short enough to scan quickly.”

## 7. Editing workflow

When revising the site copy, follow this order:

1. confirm what is actually known
2. keep unconfirmed items as `[사람 확인 필요]`
3. write short, professional copy
4. check that the wording fits the card layout
5. shorten any line that wraps too aggressively on mobile
6. keep the Games section simple and readable

## 8. Quality checklist

Before finishing the content pass, verify that:

- the copy reads naturally in Korean
- the layout still works on mobile
- no section contains invented personal facts
- placeholders are clearly marked
- the site still feels like a real portfolio
- the Games section is understandable at a glance
- the copy is consistent in tone across all sections

## 9. If more detail is still needed

If the user wants final polished copy later, ask for:

- name
- role or headline
- one-line bio
- confirmed projects
- confirmed contact links

Do not fabricate those details in the meantime.
