import { useState } from "react";

export default function Player({initialName, symbol, isActive}) {
    const [userName, setUserName] = useState(initialName);
    const [isEditing, setIsEditing ] = useState(false);
    let name1 = <span className="player-name">{userName}</span>

    function edit() {
            //setIsEditing(!isEditing); // => it will give as true
            // setIsEditing(!isEditing); // => it will also give as true
            setIsEditing((editing) => !editing);
    }

    function editedValue(event) {
        setUserName(event.target.value)
    }

    if(isEditing) {
        name1 = <input type="text" required value={userName} onChange={editedValue}/>
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {name1}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={edit}>{isEditing ? 'Save' : 'Edit'}</button>

        </li>
    );
}