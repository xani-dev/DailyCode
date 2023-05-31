import React from "react";
import './BlueStripe.scss'
import { userNameAtom } from "./atoms";
import { useRecoilValue } from "recoil";

export const BlueStripe = () => {
    let userName = useRecoilValue(userNameAtom)
    return (
        <>
        <div className="blue-content">
        <p>Username: {userName}</p>
        </div>
        </>
    )
}