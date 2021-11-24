import React,{ useState } from 'react';
import PaymentHome from './PaymentHome'
import PayViaEth from './PayViaEth'
import PayViaCard from './PayViaCard'
import './styles/PaymentGateway.css'
import ModalHeader from './ModalHeader';

function PaymentGateway({price,productName,merchantName,merchantLogo,ethAddress,closeModal,successFunction,failureFunction}) {

  const [paymentPage,setPaymentPage] = useState("home")

  return (
  <div className="app-backdrop">
      <div className="payment-modal">
        <ModalHeader closeModal={closeModal} productName={productName} merchantLogo={merchantLogo} merchantName={merchantName} price={price}/>
        <div className="modal-body">
          {paymentPage === "home" && <PaymentHome setPaymentPage={setPaymentPage} />}
          {paymentPage === "ethereum" && <PayViaEth price={price} ethAddress={ethAddress} setPaymentPage={setPaymentPage} successFunction={successFunction} closeModal={closeModal}/>}
          {paymentPage === "card" && <PayViaCard price={price} closeModal={closeModal}  setPaymentPage={setPaymentPage} successFunction={successFunction} failureFunction={failureFunction}/>}
        </div>
      </div>
    </div>
  );
}

export default PaymentGateway;
