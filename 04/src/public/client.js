var socket = io();
var board;
var chess;


window.onload = function() {
    initGame();
};

var initGame = function() {
    var cfg = {
        draggable: true,
        position: 'start',
        onDrop: handleMove,
    };

    chess = new Chess();
    board = new ChessBoard('gameBoard', cfg);
};

var handleMove = function(source, target) {
    var move = chess.move({
        from: source,
        to: target
    });
    console.log(move)
    if (move === null) return 'snapback';
    else socket.emit('move', move);
};

socket.on('move', function(msg) {
    chess.move(msg);
    board.position(chess.fen()); // fen is the board layout
});
