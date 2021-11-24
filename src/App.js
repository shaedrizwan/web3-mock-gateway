import PaymentGateway from "./lib/components/PaymentGateway"
import MerchantLogo from "./lib/merchantLogo.svg"
import { useState } from "react";
import './App.css';

function App() {

  const [paymentModal,setPaymentModal] = useState(false)

  const successFunction = () =>{
    alert("Success function invoked")
  }

  const failureFunction = () =>{
    alert("Failure function invoked")
  }

  const closeModal = () => setPaymentModal(false)

  return (
    <div className="App">
      Hello World
      <button onClick={()=>setPaymentModal(true)}>Click to open Payment Modal</button>
      {paymentModal && <PaymentGateway 
      price={3599}
      productName="T-Shirt"
      merchantName="Blue Ribbon Sports"
      merchantLogo={MerchantLogo}
      ethAddress="0xcB38a7C0a3BE1cd1AE2F737221Dbc3400F5480Ab"
      closeModal={closeModal}
      successFunction={successFunction}
      failureFunction={failureFunction}
      />}
    </div>
  );
}

export default App;
