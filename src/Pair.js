import React, { useState, useRef } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser, faPen, faEye, faEyeSlash, faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faEraser, faPen, faEye, faEyeSlash, faCheck);



export default function Pair({ password, website, id, setPairs }) {

    const [passType, setPassType] = useState("password");
    const [showIcon, setShowIcon] = useState("eye");
    function togglePassword() {
        setPassType(passType === "password" ? "text" : "password");
        setShowIcon(showIcon === "eye" ? "eye-slash" : "eye");
    }

    const [edit, setEdit] = useState(false);
    const [address, setAddress] = useState("");
    const addressInput = useRef();
    function editMode() {
        setEdit(prev => !prev);
        if (addressInput.current.value.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g)) setAddress(addressInput.current.value);
        else addressInput.current.value = address;
    }

    function deleteEntry(id) {
        setPairs(prevPairs => {
            let temp = [...prevPairs];
            temp = temp.filter(item => item.id !== id);
            return temp;
        });
    }

    return (
        <li>
            <div>
                <a href={address} target="_blank" className={edit === true ? "hidden" : ""} rel="noreferrer">
                    <input placeholder="https://google.com" disabled={true} type="url" value={address} className="address" />
                </a>
                <input placeholder="https://google.com" required ref={addressInput} type="url" defaultValue={address} className={edit === false ? "hidden" : ""} />
                <input placeholder="password" required disabled={edit === false ? true : false} type={passType} defaultValue={password} />
                <button onClick={togglePassword}><FontAwesomeIcon icon={showIcon} title="Show Password" /></button>
                <button onClick={editMode} ><FontAwesomeIcon icon="pen" title="Edit Entry" /></button>
                <button onClick={() => deleteEntry(id)}><FontAwesomeIcon icon="eraser" title="Delete Entry" /></button>
            </div>
        </li>
    )
}
