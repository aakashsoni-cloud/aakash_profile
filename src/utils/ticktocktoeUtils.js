export function checkWinner(board, size) {
  // check for row
  for (let i = 0; i < size; i++) {
    let symbol = board[i][0];
    if (symbol) {
      let winner = true;
      for (let j = 1; j < size; j++) {
        if (board[i][j] !== symbol) {
          winner = false;
          break;
        }
      }
      if (winner) {
        return symbol;
      }
    }
  }

  // check for column
  for (let j = 0; j < size; j++) {
    let symbol = board[0][j];
    if (symbol) {
      let winner = true;

      for (let i = 1; i < size; i++) {
        if (symbol !== board[i][j]) {
          winner = false;
          break;
        }
      }

      if (winner) {
        return symbol;
      }
    }
  }

  // check for diagonal

  let symbol = board[0][0];

  if (symbol) {
    console.log("this worked");
    let winner = true;
    for (let i = 1; i < size; i++) {
      if (symbol !== board[i][i]) {
        winner = false;
        break;
      }
    }

    if (winner) {
      return symbol;
    }
  }

  // check for anti diagonal

  let symbolAnti = board[0][size - 1];
  if (symbolAnti) {
    console.log("this worked anti");

    let winner = true;
    for (let i = 1; i < size; i++) {
      if (symbolAnti !== board[i][size - 1 - i]) {
        winner = false;
        break;
      }
    }
    if (winner) {
      return symbolAnti;
    }
  }

  return null;
}
