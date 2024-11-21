const gameBoard = document.getElementById('game-board');
const roundsCounter = document.getElementById('rounds');
const foxWinsCounter = document.getElementById('fox-wins');
const wolfWinsCounter = document.getElementById('wolf-wins');
const statusDiv = document.getElementById('status');
const winnerBlock = document.getElementById('winner-block');
const restartButton = document.getElementById('restart-button');

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = '🦊'; 
let rounds = 0;
let foxWins = 0;
let wolfWins = 0;
let gameActive = true;

//Создание игрового поля
function createBoard() {
    gameBoard.innerHTML = '';
    gameBoard.style.display = 'grid';
    statusDiv.style.display = 'block';
    board.forEach((cell, index) => {
        const cellDiv = document.createElement('div');
        cellDiv.classList.add('cell');
        cellDiv.dataset.index = index;
        cellDiv.textContent = cell;
        cellDiv.addEventListener('click', makeMove);
        gameBoard.appendChild(cellDiv);
    });
}

// Проверка на победу
function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Горизонтали
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Вертикали
        [0, 4, 8], [2, 4, 6]            // Диагонали
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return board.includes('') ? null : 'draw';
}

// Обработка хода
function makeMove(event) {
    if (!gameActive) return;

    const cellIndex = event.target.dataset.index;

    if (board[cellIndex] !== '') return;

    board[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;
    const winner = checkWinner();

    if (winner) {
        gameActive = false;
        gameBoard.style.display = 'none';
        statusDiv.style.display = 'none';
        setTimeout(() => {
            if (winner === 'draw') {
                showWinner('Ничья!', '🦊 🐺');
            } else {
                showWinner(`Победитель: `, winner);
                if (winner === '🦊') foxWins++;
                if (winner === '🐺') wolfWins++;
            }
            updateScoreboard();
        }, 100);
    } else {
        currentPlayer = currentPlayer === '🦊' ? '🐺' : '🦊';
        statusDiv.textContent = `Ходит ${currentPlayer === '🦊' ? '🦊' : '🐺'}`;
    }
}

// Обновление счетчиков
function updateScoreboard() {
    rounds++;
    roundsCounter.textContent = rounds;
    foxWinsCounter.textContent = foxWins;
    wolfWinsCounter.textContent = wolfWins;
}

// Показать победителя
function showWinner(message, emoji) {
    winnerBlock.textContent = `${message} ${emoji}`;
    winnerBlock.style.display = 'block';
    restartButton.style.display = 'block';
}

// Сброс игрового поля
function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = '🦊';
    gameActive = true;
    statusDiv.textContent = 'Начинайте играть! (ход🦊)';
    winnerBlock.style.display = 'none';
    restartButton.style.display = 'none';
    createBoard();
}

// Инициализация игры
createBoard();
