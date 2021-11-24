import React from 'react'
import './styles/ModalHeader.css'

function ModalHeader({closeModal,merchantName,merchantLogo,productName,price}) {
    return (
        <div className="modal-header">
          <div onClick={closeModal} className="top-bar">x</div>
          <div className="header-content">
            <img src={merchantLogo} className="merchant-logo" alt={merchantName}/>
            <div className="header-details">
              <div className="merchant-name">{merchantName}</div>
              <div className="product-name">{productName}</div>
              <div className="product-price">₹ {price}</div>
            </div>
          </div>
        </div>
    )
}

export default ModalHeader
