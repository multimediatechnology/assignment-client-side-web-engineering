import config from './config'
import ChessBoard from 'chessboardjs'
import Game from 'chess.js'

const chessboardconf = {
        draggable: true,
        position: 'start',
        onDrop: handleMove,
    },
    board = new ChessBoard('gameBoard', chessboardconf),
    game = new Game.Chess();

const handleMove = function(source, target) {
    const move = game.move({ from: source, to: target });
}