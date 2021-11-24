import React, { useState } from 'react'
import SuccessIcon from "../assets/success.png"
import FailureIcon from "../assets/failed.png"
import CardLogos from "../assets/card-logo.png"
import {FaAngleLeft} from "react-icons/fa"
import "./styles/PayViaCard.css"


function PayViaCard({price,setPaymentPage,successFunction,failureFunction,closeModal}) {

    const [cardPaymentPage,setCardPaymentPage] = useState("card-details")
    const [error,setError] = useState(null)
    const [cardData,setCardData] = useState({
        cardNumber:"",
        expiry:"",
        holderName:"",
        cvv:""
    })

    const changeHandler = e =>{
        setCardData({...cardData,[e.target.name]:e.target.value})
    }

    const paymentHandler = () =>{
        try{
            if(cardData.cardNumber.length !== 16){
                throw new Error("Invalid card number.")
            }
            else if(cardData.cvv.length !== 3){
                throw new Error("Invalid CVV")
            }
            else if(cardData.expiry.length !== 5 || cardData.expiry[2] !== "/"){
                throw new Error("Invalid Expiry Date")
            }
            setError("")
            setCardPaymentPage("txn-option")
            setCardData({cardNumber:"",expiry:"",holderName:"",cvv:""})
        }catch(err){
            setError(err.message)
        }
    }

    const successHandler = () =>{
        setCardPaymentPage("payment-success")
        setTimeout(()=>{
            closeModal()
            successFunction()
        },3000)
    }

    const failureHandler = () =>{
        setCardPaymentPage("payment-failure")
        setTimeout(()=>{
            closeModal()
            failureFunction()
        },3000)
    }

    return (
        <div className="card-container">
            {cardPaymentPage === "card-details" && <>
            <div className="details-container">
                <div className="container-topbar">
                    <FaAngleLeft className="topbar-icon"  onClick={()=>setPaymentPage("home")}/>
                    <div className="topbar-title" onClick={()=>setPaymentPage("home")}>CHOOSE PAYMENT MODE</div>
                </div>
                <div className="payment-option-title">ALL CARDS SUPPORTED</div>
                <div className="input-error">{error}</div>
                <form className="form-container">
                    <input className="input-field" name="cardNumber" placeholder="Card Number" onChange={changeHandler} pattern="\d*" maxLength = "16" type="text"/>
                    <input className="input-field" name="expiry" placeholder="Expiry (MM/YY)" maxLength = "5" onChange={changeHandler} type="text"/>
                    <input className="input-field" name="holderName" placeholder="Card Holder's name" onChange={changeHandler} type="text"/>
                    <input className="input-field" name="cvv" placeholder="CVV" maxLength = "3" onChange={changeHandler} type="password"/>
                </form>
                <img className="cards-logo" src={CardLogos} alt="cards-accepted"/>
            </div>
            <button className="card-pay-button" onClick={paymentHandler} >Pay ₹ {price}</button>
            </>}


            {cardPaymentPage === "txn-option" && <>
            <div className="container-topbar">
                <FaAngleLeft className="topbar-icon" onClick={()=>setCardPaymentPage("card-details")}/>
                <div className="topbar-title" onClick={()=>setCardPaymentPage("card-details")}>ENTER CARD DETAILS</div>
            </div>
            <div className="options-container">
                <div className="payment-option-title">CHOOSE PAYMENT STATUS</div>
                <button onClick={successHandler} className="btn-option option-success">SUCCESS</button>
                <button onClick={failureHandler} className="btn-option option-failure">FAILURE</button>
            </div>
            </>}


            {cardPaymentPage === "payment-success" && <div className="success-container">
            <img className="success-icon" src={SuccessIcon} alt="success-icon"/>
            <div className="payment-option-title">Your transaction is successfully completed. Redirecting...</div>
                </div>}
            {cardPaymentPage === "payment-failure" && <div className="failure-container">
            <img className="failure-icon" src={FailureIcon} alt="failure-icon"/>
            <div  className="payment-option-title">Oops! Your transaction failed. Please retry!</div>
            </div>}
        </div>
    )
}

export default PayViaCard
