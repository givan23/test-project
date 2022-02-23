import React from "react";

// defines
import {LEARN, LINK} from "../../App.defines";

// type
import {SelectType} from "./Select.type";

// scss
import "./Select.scss"

const Select = ({placeholder, chooseTest}: SelectType) => {

    return (
        <>
            <select className="select-container" placeholder={placeholder} onChange={(e) => chooseTest(e.target.value)}>
                <option value={LEARN}>{LEARN}</option>
                <option value={LINK}>{LINK}</option>
            </select>
        </>
    )
}

export default Select;