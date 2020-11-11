/*----- constants -----*/
// players 
const playerImgs = {
    '1': "url(https://images.app.goo.gl/NFT7fwKAiMjPAASm7)",
    '-1': "url(https://images.app.goo.gl/C19e8yo4FMjmYStZ8)",
}
const playerColors = {
    '1': 'purple',
    '-1': 'yellow',
    'null': 'white',
}

const winningCombos = [
    [0, 1, 2, 3], [41, 40, 39, 38], [7, 8, 9, 10], [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], [21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], [41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], [11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9], [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], [26, 25, 24, 23], [29, 30, 31, 2], [33, 32, 31, 30], [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34]
]
/*----- app's state (variables) -----*/
let turn;
let winner;
let board;

/*----- cached element references -----*/
let button = document.querySelector('button');
let message = document.querySelector('h4');
const tdEls = document.querySelectorAll('#board td');

/*----- event listeners -----*/
button.addEventListener('click', init);
document.getElementById('board').addEventListener('click', handleClick);

/*----- functions -----*/
init();

function handleClick(event) {
    const tdEl = event.target;
    if (tdEl.tagName !== 'TD') return;
    const colIdx = parseInt(tdEl.id.charAt(1));
    let validMove = false;
    for (let rowIdx = 5; rowIdx >= 0; rowIdx--) {
        const cellIdx = rowIdx * 7 + colIdx;
        if (board[cellIdx] === null) {
            board[cellIdx] = turn;
            validMove = true;
            break;
        }
    }
    if (validMove) {
        turn *= -1;
        // winner = getWinner();
        render();
    }
}

function init() {
    turn = 1;
    winner = null;
    board = new Array(42).fill(null);
    render();
}

function render() {
    // iterate with forEach to display the imgs on the board
    tdEls.forEach((tdEl, idx) => {
        tdEl.style.backgroundColor = playerColors[board[idx]];
        // tdEl.style.backgroundImage = playerImgs[board[idx]];
    });
}
// message for who's turn it is
// use if else if here

// iterate to put the 4 winningCombos into the circles
// to check if those winningCombos are in a winning array of combos.
function boardCombos() {
    for (var i = 0; i < winningCombos.length; i++) {
        let circle1 = circles[winningCombos[i][0]];
        let circle2 = circles[winningCombos[i][1]];
        let circle3 = circles[winningCombos[i][2]];
        let circle4 = circles[winningCombos[i][3]];

        // check if those winningCombos contain the circles for player 1 or player 2
        if (circle1.classList.includes('player1') && circle2.classList.includes('player1') && circle3.classList.includes('player1') && circle4.classList.includes('player1')) {
            // if it does contain the player1 then return Player1 wins!
            result.innerHtml = `Player One WINS!!!`;
        } else if (circle1.classList.includes('player2') && circle2.classList.includes('player2') && circle3.classList.includes('player2') && circle4.classList.includes('player2')) {
            result.innerHtml = `Player Two WINS!!!`;
        }
    }
}

function getWinner() {

}



// maybe add an audio


