const puzzlePieces = document.querySelectorAll('.puzzle-piece');
const puzzleBoard = document.getElementById('puzzle-board');
const resetButton = document.getElementById('reset-button');


puzzlePieces.forEach(piece => {
    piece.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

puzzleBoard.addEventListener('dragover', (e) => {
    e.preventDefault();
});

puzzleBoard.addEventListener('drop', (e) => {
    e.preventDefault();
    const pieceId = e.dataTransfer.getData('text/plain');
    const piece = document.getElementById(pieceId);
    puzzleBoard.appendChild(piece);
});


resetButton.addEventListener('click', () => {
    puzzlePieces.forEach(piece => {
        piece.style.order = Math.floor(Math.random() * puzzlePieces.length);
    });
});
