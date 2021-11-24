import { ethers } from "ethers"
import axios from "axios"
import { useState,useEffect } from "react"
import {FaAngleLeft} from "react-icons/fa"
import EthereumLogo from "../assets/ethereum-logo.png"
import "./styles/PayViaEth.css"

function PayViaEth({price,ethAddress,setPaymentPage,successFunction,closeModal}) {

  const [ethInINR,setEthInINR] = useState(null)
  const [connection,setConnection] = useState({
    isConnected:false,
    account:null
  })
  const [txn,setTxn] = useState({
    processing:false,
    hash:null
  })
  const [error,setError] = useState(null)


    useEffect(()=>{
      (
        async function(){
          try{
            if(!window.ethereum){
              throw new Error("No crypto wallet present. Please install Metamask.")
            }
            const provider = new ethers.providers.Web3Provider(window.ethereum, "any")
            const accounts = await provider.listAccounts()
            if(accounts.length >0){
              setConnection(connection =>({...connection,isConnected:true,account:accounts[0]}))
            }
          }catch(err){
            setError(err.message)
          }
        }
      )()
    },[])


  useEffect(()=>{
    (
      async function(){
        const response = await axios.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=INR")
        setEthInINR(response.data.INR)
      }
    )()
  },[])

  const connectToMetaMask = async() =>{
    try{
      setError("")
      if(!window.ethereum){
        throw new Error("No crypto wallet present. Please install Metamask.")
      }
      const provider = new ethers.providers.Web3Provider(window.ethereum, "any")
      const accounts = await provider.send("eth_requestAccounts", []);
      setConnection(connection =>({...connection,isConnected:true,account:accounts[0]}))
    }catch(err){
      setError(err.message)
    }
  }

  const paymentHandler = async ({price,address}) =>{
    try{
      setError("")
      if(!window.ethereum){
        throw new Error("No crypto wallet present. Please install Metamask.")
      }
      if(!connection.isConnected){
        throw new Error("Wallet not connected. Please connect using above link.")
      }
      setTxn(txn => ({...txn,processing:true,hash:null}))
      const provider = new ethers.providers.Web3Provider(window.ethereum, "any")
      const signer = provider.getSigner()
      const ether = (price/ethInINR).toFixed(8)
      const transaction = await signer.sendTransaction({
        to:address,
        value:ethers.utils.parseEther(String(ether))
      })
      setTxn(txn => ({...txn,hash:transaction.hash,processing:false}))
      setTimeout(()=>{
        closeModal()
        successFunction()
    },3000)
    }catch(err){
      setError(err.message)
      setTxn(txn => ({...txn,processing:false}))
    }
  }


  return (
    <div className="eth-container">
      <div className="container-topbar">
          <FaAngleLeft className="topbar-icon"  onClick={()=>setPaymentPage("home")}/>
          <div className="topbar-title" onClick={()=>setPaymentPage("home")}>CHOOSE PAYMENT MODE</div>
      </div>
      <div className="eth-menubar">
        {connection.isConnected?<div className="eth-status status-connected">Connected</div>:<div className="eth-status status-disconnected">Not connected</div>}
        {connection.isConnected?<div className="eth-account">{connection.account}</div>:<button className="btn-connect" onClick={connectToMetaMask}>Connect to wallet</button>}
      </div>
      <div className="eth-body">
        {error && <div className="eth-error">{error}</div>}        <img src={EthereumLogo} alt="eth-logo" className="eth-logo"/>
        <div className="eth-value">1 ETH = ₹ {ethInINR}</div>
        <div className="eth-warning">Please use Ethereum Test Networks like Ropsten for demo transaction.</div>
        {txn.hash && <div className="eth-txn-success">Txn Successfully processed. <a href={`https://ropsten.etherscan.io/tx/${txn.hash}`} target="_blank" rel="noreferrer">View details here</a></div>}
      </div>
      {!txn.processing && <button className="eth-pay-button" onClick={()=>paymentHandler({price,address:ethAddress})}>Pay {ethInINR && (price/ethInINR).toFixed(5)} ETH</button>}
      {txn.processing && <div className="eth-pay-button eth-processing">Processing...</div>}
    </div>
  );
}

export default PayViaEth;
