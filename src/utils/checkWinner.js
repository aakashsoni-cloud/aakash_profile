const checkWinner = (board, size) => {
  for (let i = 0; i < size; i++) {
    let symbolPresent = board[i][0];
    if (symbolPresent) {
      let winner = true;
      for (let j = 0; j < size; j++) {
        if (symbolPresent !== board[i][j]) {
          winner = false;
          break;
        }
      }
      if (winner) {
        return symbolPresent;
      }
    //   return winner;
    }
  }
};

export default checkWinner;
