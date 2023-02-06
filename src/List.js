import React from 'react'
import Pair from './Pair.js'
import { v4 as uuidv4 } from 'uuid'

export default function List({ pairs, setPairs }) {

    function addNewEntry() {
        if (Array.from(document.getElementsByClassName("address")).some(i => i.value === "")) return;
        setPairs(prevPairs => { return [...prevPairs, { id: uuidv4(), password: "", website: "" }] })
    }

    return (
        <div className='list'>
            <ul>
                {pairs.map(pair => {
                    return <Pair setPairs={setPairs} password={pair.password} website={pair.website} id={pair.id} key={pair.id} />
                })}
            </ul>
            <button onClick={addNewEntry}>Add a new entry</button>
        </div>

    );
}
