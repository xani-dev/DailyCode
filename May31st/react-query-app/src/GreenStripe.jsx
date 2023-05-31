import React from "react";
import './GreenStripe.scss'


const PERSON_KEY = 'PersonKey'

export const GreenStripe = () => {

    const onHandleWrite = () => {
        const personWrite = {
            fName: 'Alice',
            age: 11
        }
        console.log('written: ', personWrite);
        sessionStorage.setItem(PERSON_KEY, JSON.stringify(personWrite))
    }

    const onHandleRead = () => {
        const personRead = JSON.parse(sessionStorage.getItem(PERSON_KEY))
        console.log('read: ',personRead);
    }
   
    return (
			<>
				<div className='green-content'>
					<button onClick={()=>{onHandleWrite()}}>Write</button>
					<button onClick={()=>{onHandleRead()}}>Read</button>
				</div>
			</>
		);
}