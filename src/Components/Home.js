import React from "react";
import { useHistory } from "react-router";




export default function Home() {
const history = useHistory()
const routeToOrder = () => {
    history.push('/pizza')
}
    return (
        <div className='home'>
            <img src='./Assets/Pizza.jpg' alt='Pizza'/>
            <button id='order-pizza' onClick={routeToOrder}>
            Order Now!!!
            </button>
        </div>

    )

}