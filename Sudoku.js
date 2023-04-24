const getRow = (puzzle, row) => puzzle[row];
const getColumn = (puzzle, col) => puzzle.map(row => row[col]);
const getSection = (puzzle, x, y) => puzzle.slice(y*3, (y+1)*3).map(row => row.slice(x*3, (x+1)*3)).flat();
const includes1to9 = (arr) => Array(9).fill().every((_, i) => arr.includes(i+1));

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