## A mock payment gateway that supports payment with Eth


### Install

Install using `npm install web3-demo-gateway`

### Usage 

In a React app, use the PaymentGateway component:  
`import { PaymentGateway } from 'web3-demo-gateway'`  

#### PaymentGateway props

| Name               | Description      
| ------------------ | ---------------------    
| productName        | string            
| price              | number          
| merchantName       | string            
| merchantLogo       | image variable            
| ethAddress         | recepient eth address             
| closeModal         | function          
| successFunction    | function
| failureFunction    | function  

#### Example:  
```
import { PaymentGateway } from 'web3-demo-gateway'

function App() {

  const [paymentModal,setPaymentModal] = useState(false)

  const successFunction = () =>{
    alert("Success function invoked")
  }

  const failureFunction = () =>{
    alert("Failure function invoked")
  }

  const closeModal = () => setPaymentModal(false)

  const openModal = () => setPaymentModal(true)
  

  return (
      <div>
        <button onClick={openModal}>Buy Now</button>
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
  )
}
```