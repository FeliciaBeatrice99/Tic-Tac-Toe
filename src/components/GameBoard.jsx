

const intialValue = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

// export default function GameBoard({activePlayerFunction, playerSymbol}) {
    // const [gameBoard, setGameBoard] = useState(intialValue)
    // function valueChanged(rowIndex, colIndex) {
    //     setGameBoard((prevGaneBoard) => {
    //         const changedValue = [...intialValue];
    //         changedValue[rowIndex][colIndex] = playerSymbol
    //         return changedValue;
    //     });
    //     activePlayerFunction();
    //     console.log(playerSymbol)
    // }
export default function GameBoard({onSelectSquare}) {
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((boxValue, colIndex) =>
                        <li key={colIndex}><button onClick={onSelectSquare}>{boxValue}</button></li>
                    )}
                </ol>
            </li>)}
        </ol>)
}