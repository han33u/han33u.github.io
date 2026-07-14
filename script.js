(() => {
  initNavigation();
  initSnakeGame();
})();

function initNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (!navToggle || !siteNav) {
    return;
  }

  const setExpanded = (isOpen) => {
    navToggle.setAttribute('aria-expanded', String(isOpen));
    siteNav.classList.toggle('is-open', isOpen);
  };

  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    setExpanded(!isOpen);
  });

  siteNav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement && window.innerWidth <= 720) {
      setExpanded(false);
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setExpanded(false);
      navToggle.focus();
    }
  });
}

function initSnakeGame() {
  const canvas = document.querySelector('#snake-canvas');
  const scoreEl = document.querySelector('#snake-score');
  const stateEl = document.querySelector('#snake-state');
  const startBtn = document.querySelector('[data-action="start"]');
  const pauseBtn = document.querySelector('[data-action="pause"]');
  const restartBtn = document.querySelector('[data-action="restart"]');
  const directionButtons = document.querySelectorAll('[data-direction]');

  if (
    !(canvas instanceof HTMLCanvasElement) ||
    !(scoreEl instanceof HTMLElement) ||
    !(stateEl instanceof HTMLElement) ||
    !(startBtn instanceof HTMLButtonElement) ||
    !(pauseBtn instanceof HTMLButtonElement) ||
    !(restartBtn instanceof HTMLButtonElement)
  ) {
    return;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    return;
  }

  const grid = {
    cols: 24,
    rows: 18,
    cell: 28,
    width: 672,
    height: 504,
  };

  canvas.width = grid.width;
  canvas.height = grid.height;
  canvas.tabIndex = 0;

  const colors = {
    board: '#f8f4ee',
    boardAlt: 'rgba(35, 87, 137, 0.08)',
    snake: '#235789',
    snakeHead: '#1b3f61',
    food: '#d65c3d',
    text: '#1f2430',
    overlay: 'rgba(31, 36, 48, 0.72)',
  };

  const stateMessages = {
    idle: '시작을 눌러 게임을 시작하세요.',
    running: '실행 중입니다. 방향키, WASD, 또는 터치 조작을 사용하세요.',
    paused: '일시정지되었습니다.',
    gameover: '게임이 끝났습니다. 다시 시작을 눌러 주세요.',
  };

  const directions = {
    up: { x: 0, y: -1 },
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
    right: { x: 1, y: 0 },
  };

  let state = 'idle';
  let score = 0;
  let snake = [];
  let direction = directions.right;
  let queuedDirection = directions.right;
  let food = { x: 0, y: 0 };
  let timerId = null;
  let touchStart = null;

  function resetGame() {
    score = 0;
    snake = [
      { x: 12, y: 9 },
      { x: 11, y: 9 },
      { x: 10, y: 9 },
    ];
    direction = directions.right;
    queuedDirection = directions.right;
    food = spawnFood();
    state = 'idle';
    updateHud();
    render();
    stopLoop();
  }

  function updateHud() {
    scoreEl.textContent = String(score);
    stateEl.textContent = stateMessages[state] || stateMessages.idle;
    startBtn.classList.toggle('is-active', state === 'running');
    pauseBtn.classList.toggle('is-active', state === 'paused');
    pauseBtn.textContent = state === 'paused' ? '이어하기' : '일시정지';
  }

  function startLoop() {
    if (timerId !== null) {
      return;
    }
    timerId = window.setInterval(step, 180);
  }

  function stopLoop() {
    if (timerId !== null) {
      window.clearInterval(timerId);
      timerId = null;
    }
  }

  function beginRunning() {
    state = 'running';
    updateHud();
    startLoop();
  }

  function startGame() {
    if (state === 'gameover') {
      resetGame();
    }
    if (state === 'idle' || state === 'paused') {
      beginRunning();
    }
  }

  function pauseGame() {
    if (state === 'running') {
      state = 'paused';
      updateHud();
      stopLoop();
    } else if (state === 'paused') {
      beginRunning();
    }
  }

  function restartGame() {
    resetGame();
    beginRunning();
  }

  function setDirection(nextDirection) {
    if (!nextDirection) {
      return;
    }

    if (state === 'idle' || state === 'gameover') {
      beginRunning();
    }

    const current = queuedDirection || direction;
    if (isOpposite(current, nextDirection)) {
      return;
    }

    queuedDirection = nextDirection;
  }

  function isOpposite(a, b) {
    return a.x + b.x === 0 && a.y + b.y === 0;
  }

  function spawnFood() {
    while (true) {
      const candidate = {
        x: Math.floor(Math.random() * grid.cols),
        y: Math.floor(Math.random() * grid.rows),
      };

      if (!snake.some((segment) => segment.x === candidate.x && segment.y === candidate.y)) {
        return candidate;
      }
    }
  }

  function step() {
    if (state !== 'running') {
      return;
    }

    if (!isOpposite(direction, queuedDirection)) {
      direction = queuedDirection;
    }

    const head = snake[0];
    const nextHead = {
      x: head.x + direction.x,
      y: head.y + direction.y,
    };

    const hitsWall =
      nextHead.x < 0 ||
      nextHead.x >= grid.cols ||
      nextHead.y < 0 ||
      nextHead.y >= grid.rows;

    const hitsSelf = snake.some((segment) => segment.x === nextHead.x && segment.y === nextHead.y);

    if (hitsWall || hitsSelf) {
      state = 'gameover';
      updateHud();
      stopLoop();
      render();
      return;
    }

    snake.unshift(nextHead);

    const foundFood = nextHead.x === food.x && nextHead.y === food.y;
    if (foundFood) {
      score += 1;
      food = spawnFood();
    } else {
      snake.pop();
    }

    updateHud();
    render();
  }

  function drawBoard() {
    ctx.fillStyle = colors.board;
    ctx.fillRect(0, 0, grid.width, grid.height);

    ctx.fillStyle = colors.boardAlt;
    for (let col = 0; col < grid.cols; col += 2) {
      for (let row = 0; row < grid.rows; row += 2) {
        ctx.fillRect(col * grid.cell, row * grid.cell, grid.cell, grid.cell);
      }
    }

    ctx.strokeStyle = 'rgba(35, 87, 137, 0.12)';
    ctx.lineWidth = 1;
    for (let col = 0; col <= grid.cols; col += 1) {
      const x = col * grid.cell + 0.5;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, grid.height);
      ctx.stroke();
    }
    for (let row = 0; row <= grid.rows; row += 1) {
      const y = row * grid.cell + 0.5;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(grid.width, y);
      ctx.stroke();
    }
  }

  function drawCell(x, y, color, inset = 4) {
    const size = grid.cell - inset * 2;
    const px = x * grid.cell + inset;
    const py = y * grid.cell + inset;

    ctx.fillStyle = color;
    roundRect(ctx, px, py, size, size, 8);
    ctx.fill();
  }

  function drawFood() {
    const centerX = food.x * grid.cell + grid.cell / 2;
    const centerY = food.y * grid.cell + grid.cell / 2;

    ctx.fillStyle = colors.food;
    ctx.beginPath();
    ctx.arc(centerX, centerY, grid.cell * 0.3, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawSnake() {
    snake.forEach((segment, index) => {
      drawCell(segment.x, segment.y, index === 0 ? colors.snakeHead : colors.snake, index === 0 ? 3 : 5);
    });
  }

  function drawOverlay() {
    if (state !== 'gameover') {
      return;
    }

    ctx.fillStyle = colors.overlay;
    ctx.fillRect(0, 0, grid.width, grid.height);
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.font = '700 34px Segoe UI, Arial, sans-serif';
    ctx.fillText('게임 종료', grid.width / 2, grid.height / 2 - 10);
    ctx.font = '500 18px Segoe UI, Arial, sans-serif';
    ctx.fillText('다시 시작을 눌러 다시 도전하세요.', grid.width / 2, grid.height / 2 + 24);
  }

  function render() {
    drawBoard();
    drawFood();
    drawSnake();
    drawOverlay();
  }

  function roundRect(context, x, y, width, height, radius) {
    const r = Math.min(radius, width / 2, height / 2);
    context.beginPath();
    context.moveTo(x + r, y);
    context.arcTo(x + width, y, x + width, y + height, r);
    context.arcTo(x + width, y + height, x, y + height, r);
    context.arcTo(x, y + height, x, y, r);
    context.arcTo(x, y, x + width, y, r);
    context.closePath();
  }

  function directionFromKey(key) {
    switch (key) {
      case 'ArrowUp':
      case 'w':
      case 'W':
        return directions.up;
      case 'ArrowDown':
      case 's':
      case 'S':
        return directions.down;
      case 'ArrowLeft':
      case 'a':
      case 'A':
        return directions.left;
      case 'ArrowRight':
      case 'd':
      case 'D':
        return directions.right;
      default:
        return null;
    }
  }

  function onKeyDown(event) {
    const nextDirection = directionFromKey(event.key);
    if (!nextDirection) {
      return;
    }

    event.preventDefault();
    setDirection(nextDirection);
  }

  function onPointerDown(event) {
    if (event.pointerType === 'mouse' && event.button !== 0) {
      return;
    }

    touchStart = { x: event.clientX, y: event.clientY };
  }

  function onPointerUp(event) {
    if (!touchStart) {
      return;
    }

    const dx = event.clientX - touchStart.x;
    const dy = event.clientY - touchStart.y;
    touchStart = null;

    const threshold = 24;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < threshold) {
      return;
    }

    if (Math.abs(dx) > Math.abs(dy)) {
      setDirection(dx > 0 ? directions.right : directions.left);
      return;
    }

    setDirection(dy > 0 ? directions.down : directions.up);
  }

  function onPointerCancel() {
    touchStart = null;
  }

  startBtn.addEventListener('click', startGame);
  pauseBtn.addEventListener('click', pauseGame);
  restartBtn.addEventListener('click', restartGame);

  directionButtons.forEach((button) => {
    if (!(button instanceof HTMLButtonElement)) {
      return;
    }

    button.addEventListener('click', () => {
      const directionName = button.dataset.direction;
      if (!directionName || !(directionName in directions)) {
        return;
      }

      setDirection(directions[directionName]);
    });
  });

  window.addEventListener('keydown', onKeyDown);
  canvas.addEventListener('pointerdown', onPointerDown);
  canvas.addEventListener('pointerup', onPointerUp);
  canvas.addEventListener('pointercancel', onPointerCancel);

  resetGame();
}
