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
export default function GameBoard({onSelectSquare, board}) {
    
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((boxValue, colIndex) =>
                        <li key={colIndex}><button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={boxValue !== null}>{boxValue}</button></li>
                    )}
                </ol>
            </li>)}
        </ol>)
}