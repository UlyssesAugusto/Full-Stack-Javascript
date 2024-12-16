// Seleciona o quadro de jogo
const gameBoard = document.getElementById('game-board');

// Configurações iniciais
const boardSize = 20; // número de células no grid
const cellSize = gameBoard.offsetWidth / boardSize;
let snake = [{ x: 10, y: 10 }]; // posição inicial da cobra
let direction = { x: 0, y: 0 }; // direção inicial da cobra
let food = getRandomPosition(); // posição inicial da comida
let gameInterval;

// Função para começar o jogo
function startGame() {
  gameInterval = setInterval(updateGame, 100); // atualiza o jogo a cada 100ms
  window.addEventListener('keydown', changeDirection); // detecta mudanças na direção
}

// Função principal de atualização do jogo
function updateGame() {
  moveSnake();
  if (checkCollision()) {
    clearInterval(gameInterval); // encerra o jogo em caso de colisão
    alert("Fim de jogo!");
    return;
  }

  if (checkFoodCollision()) {
    growSnake();
    food = getRandomPosition(); // gera nova posição para a comida
  }

  drawGame();
}


// Movimenta a cobra na direção atual
function moveSnake() {
  const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
  snake.unshift(head); // adiciona nova cabeça
  snake.pop(); // remove o último elemento para manter o tamanho
}

// Checa se houve colisão com paredes ou com o próprio corpo
function checkCollision() {
  const head = snake[0];
  return (
    head.x < 0 || head.x >= boardSize || head.y < 0 || head.y >= boardSize ||
    snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
  );
}

// Verifica se a cobra comeu a comida
function checkFoodCollision() {
  return snake[0].x === food.x && snake[0].y === food.y;
}

// Aumenta o tamanho da cobra ao comer a comida
function growSnake() {
  const tail = { ...snake[snake.length - 1] };
  snake.push(tail);
}

// Gera uma posição aleatória para a comida
function getRandomPosition() {
  return {
    x: Math.floor(Math.random() * boardSize),
    y: Math.floor(Math.random() * boardSize),
  };
}

// Altera a direção da cobra com base na tecla pressionada
function changeDirection(event) {
  switch (event.key) {
    case "ArrowUp":
      if (direction.y === 0) direction = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (direction.y === 0) direction = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (direction.x === 0) direction = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (direction.x === 0) direction = { x: 1, y: 0 };
      break;
  }
}

// Desenha o quadro de jogo, a cobra e a comida
function drawGame() {
  gameBoard.innerHTML = ''; // limpa o quadro

  // Desenha a cobra
  snake.forEach(segment => {
    const snakeElement = document.createElement('div');
    snakeElement.style.position = 'absolute';
    snakeElement.style.width = `${cellSize}px`;
    snakeElement.style.height = `${cellSize}px`;
    snakeElement.style.backgroundColor = 'white';
    snakeElement.style.left = `${segment.x * cellSize}px`;
    snakeElement.style.top = `${segment.y * cellSize}px`;
    gameBoard.appendChild(snakeElement);
  });

  // Desenha a comida
  const foodElement = document.createElement('div');
  foodElement.style.position = 'absolute';
  foodElement.style.width = `${cellSize}px`;
  foodElement.style.height = `${cellSize}px`;
  foodElement.style.backgroundColor = 'red';
  foodElement.style.left = `${food.x * cellSize}px`;
  foodElement.style.top = `${food.y * cellSize}px`;
  gameBoard.appendChild(foodElement);
}

// Inicia o jogo
startGame();
