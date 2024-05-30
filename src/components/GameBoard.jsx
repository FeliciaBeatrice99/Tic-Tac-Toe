const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

// export default function GameBoard({activePlayerFunction, playerSymbol}) {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard)
    // function valueChanged(rowIndex, colIndex) {
    //     setGameBoard((prevGaneBoard) => {
    //         const changedValue = [...initialGameBoard];
    //         changedValue[rowIndex][colIndex] = playerSymbol
    //         return changedValue;
    //     });
    //     activePlayerFunction();
    //     console.log(playerSymbol)
    // }
export default function GameBoard({onSelectSquare, turns}) {
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((boxValue, colIndex) =>
                        <li key={colIndex}><button onClick={() => onSelectSquare(rowIndex, colIndex)}>{boxValue}</button></li>
                    )}
                </ol>
            </li>)}
        </ol>)
}