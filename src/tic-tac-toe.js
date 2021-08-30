class TicTacToe {
    //constructor() {}

    player = 'x';
    gameField = [
        [ null, null, null ],
        [ null, null, null ],
        [ null, null, null ],
    ]

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.gameField[rowIndex][columnIndex] !== null) {
            return;
        }
        this.gameField[rowIndex][columnIndex] = this.player;
        if (this.player =='x') {
            this.player = 'o';
        } else {
            this.player = 'x';
        }
    }

    isFinished() {
        if (this.getWinner() !== null || this.isDraw() == true) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        let x = 0;
        let o = 0;
        for (let i = 0; i < 3; i++){
            if ((this.gameField[i][0] == this.gameField[i][1]) && (this.gameField[i][1] == this.gameField[i][2])){
                if (this.gameField[i][0] == 'x') {
                    x++;
                } else if (this.gameField[i][0] == 'o') {
                    o++;
                }
            }
        }
        for (let i = 0; i < 3; i++){
            if ((this.gameField[0][i] == this.gameField[1][i]) && (this.gameField[1][i] == this.gameField[2][i])){
                if (this.gameField[0][i] == 'x') {
                    x++;
                } else if (this.gameField[0][i] == 'o') {
                    o++;
                }
            }
        }
        if ((this.gameField[0][0] === this.gameField[1][1]) && (this.gameField[1][1] === this.gameField[2][2])) {
            if (this.gameField[0][0] == 'x') {
                x++;
            } else if (this.gameField[0][0] == 'o') {
                o++;
            }
        }
        if ((this.gameField[0][2] === this.gameField[1][1]) && (this.gameField[1][1] === this.gameField[2][0])) {
            if (this.gameField[0][2] === 'x') {
                x++;
            } else if (this.gameField[0][2] === 'o') {
                o++;
            }
        }
        if (x > o) {
            return 'x';
        } else if ( x < o) {
            return 'o';
        } else {
            return null;
        }
    }
    noMoreTurns() {
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++) {
                if (this.gameField[i][j] == null){
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if (this.noMoreTurns() == true && this.getWinner() == null) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
