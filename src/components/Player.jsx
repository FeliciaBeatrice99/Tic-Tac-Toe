import { useState } from "react";

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing ] = useState(false);
    let name1 = <span className="player-name">{name}</span>

    function edit() {
            setIsEditing(true);
    }

    if(isEditing) {
        name1 = <input type="text" required value={name}/>
    }
    return (
        <li>
            <span className="player">
                {name1}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={edit}>{isEditing ? 'Save' : 'Edit'}</button>

        </li>
    );
}