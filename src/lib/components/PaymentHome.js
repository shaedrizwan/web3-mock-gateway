import React from 'react'
import {FaEthereum,FaCreditCard,FaAngleRight} from "react-icons/fa"
import "./styles/PaymentHome.css"

function PaymentHome({setPaymentPage}) {
    return (
        <div>
            <div className="home-title">CHOOSE PAYMENT METHOD</div>
            <div className="pay-grid" onClick={()=>setPaymentPage("ethereum")}>
                <div className="pay-grid-logo"><FaEthereum/></div>
                <div className="pay-grid-title">Pay using Ethereum</div>
                <div className="pay-grid-arrow"><FaAngleRight/></div>
            </div>
            <div className="pay-grid" onClick={()=>setPaymentPage("card")}>
                <div className="pay-grid-logo"><FaCreditCard/></div>
                <div className="pay-grid-title">Pay using Card</div>
                <div className="pay-grid-arrow"><FaAngleRight/></div>
            </div>
            <div className="home-footer">This is a demo gateway. Please don't use your real card details.</div>
        </div>
    )
}

export default PaymentHome
