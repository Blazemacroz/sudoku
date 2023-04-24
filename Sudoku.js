function getRow(puzzle, row) { return puzzle[row]; };
function getColumn(puzzle, col) {
  let column = [];
  for (let i = 0; i < puzzle.length; i++) {
    let row = puzzle[i];
    column.push(row[col]);
  }
  return column;
}function includes1to9(arr) {
    for (let num = 1; num <= 9; num++)
      if (arr.indexOf(num) === -1) return false;
    return true;
  }
  function sudokuIsValid(puzzle) {
    for (let i = 0; i < 9; i++)
      if (!includes1to9(getRow(puzzle, i)) || !includes1to9(getColumn(puzzle, i)) || !includes1to9(getSection(puzzle, i % 3, Math.floor(i / 3)))) return false;
    return true;
  }