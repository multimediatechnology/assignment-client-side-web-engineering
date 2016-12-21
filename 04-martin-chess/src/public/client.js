var socket = io();
var board;
var chess;



const handleMove = function(source, target) {
    const move = chess.move({
        from: source,
        to: target
    });
    if (move === null) return 'snapback';
    else socket.emit('move', move);
};

const cfg = {
    draggable: true,
    position: 'start',
    onDrop: handleMove,
};

chess = new Chess();
board = new ChessBoard('gameBoard', cfg);

socket.on('move', function(msg) {
    chess.move(msg);
    board.position(chess.fen()); // fen is the board layout
});
