const board = document.getElementById('board');
const newRoundBtn = document.getElementById('new-round-btn');
const resetScoreBtn = document.getElementById('reset-score-btn');
const messageDisplay = document.getElementById('message');
const turnIndicator = document.getElementById('turn-indicator');
const scoreXDisplay = document.getElementById('score-x');
const scoreODisplay = document.getElementById('score-o');
const scoreBoxX = document.getElementById('score-box-x');
const scoreBoxO = document.getElementById('score-box-o');

const clickSound = document.getElementById('click-sound');
const winSound = document.getElementById('win-sound');

let currentPlayer = 'X';
let gameActive = true;
let cells = ['', '', '', '', '', '', '', '', ''];
let scoreX = 0;
let scoreO = 0;

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function initGame() {
    renderBoard();
    updateStatus();
    // Try to load clicks if they work, user needs to provide mp3 files
}

function renderBoard() {
    board.innerHTML = '';
    cells.forEach((cell, index) => {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.setAttribute('data-index', index);

        if (cell === 'X') {
            div.innerHTML = '<i class="fas fa-times"></i>';
            div.classList.add('taken');
        } else if (cell === 'O') {
            div.innerHTML = '<i class="far fa-circle"></i>';
            div.classList.add('taken');
        }

        div.addEventListener('click', handleCellClick);
        board.appendChild(div);
    });
}

function handleCellClick(e) {
    const index = e.currentTarget.getAttribute('data-index');

    if (cells[index] !== '' || !gameActive) return;

    playSound(clickSound);

    cells[index] = currentPlayer;
    renderBoard();
    checkResult();
}

function checkResult() {
    let roundWon = false;
    let winningLine = [];

    for (let i = 0; i < winPatterns.length; i++) {
        const [a, b, c] = winPatterns[i];
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            roundWon = true;
            winningLine = [a, b, c];
            break;
        }
    }

    if (roundWon) {
        highlightWin(winningLine);
        messageDisplay.innerText = `Player ${currentPlayer === 'X' ? '1' : '2'} Wins 🎉`;
        messageDisplay.style.color = currentPlayer === 'X' ? 'var(--neon-blue)' : 'var(--neon-cyan)';
        updateScore(currentPlayer);
        playSound(winSound);
        gameActive = false;
        return;
    }

    if (!cells.includes('')) {
        messageDisplay.innerText = 'Draw!';
        messageDisplay.style.color = '#fff';
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateStatus();
}

function updateStatus() {
    if (gameActive) {
        turnIndicator.innerText = `Player ${currentPlayer === 'X' ? '1' : '2'}'s Turn`;
        turnIndicator.style.color = currentPlayer === 'X' ? 'var(--neon-blue)' : 'var(--neon-cyan)';

        // Update box active state
        if (currentPlayer === 'X') {
            scoreBoxX.classList.add('active-turn');
            scoreBoxO.classList.remove('active-turn');
        } else {
            scoreBoxO.classList.add('active-turn');
            scoreBoxX.classList.remove('active-turn');
        }
        messageDisplay.innerText = '';
    }
}

function highlightWin(indices) {
    const allCells = document.querySelectorAll('.cell');
    indices.forEach(index => {
        allCells[index].classList.add('winning-cell');
    });
}

function updateScore(winner) {
    if (winner === 'X') {
        scoreX++;
        scoreXDisplay.innerText = scoreX;
        // Animation
        scoreBoxX.style.transform = 'scale(1.1)';
        setTimeout(() => scoreBoxX.style.transform = 'scale(1)', 200);
    } else {
        scoreO++;
        scoreODisplay.innerText = scoreO;
        scoreBoxO.style.transform = 'scale(1.1)';
        setTimeout(() => scoreBoxO.style.transform = 'scale(1)', 200);
    }
}

function playSound(sound) {
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(e => console.log('Audio play failed (interaction required first?):', e));
    }
}

newRoundBtn.addEventListener('click', () => {
    cells = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    messageDisplay.innerText = '';
    renderBoard();
    updateStatus();
});

resetScoreBtn.addEventListener('click', () => {
    scoreX = 0;
    scoreO = 0;
    scoreXDisplay.innerText = '0';
    scoreODisplay.innerText = '0';
    newRoundBtn.click();
});

initGame();
