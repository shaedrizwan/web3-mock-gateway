"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _success = _interopRequireDefault(require("../assets/success.png"));

var _failed = _interopRequireDefault(require("../assets/failed.png"));

var _cardLogo = _interopRequireDefault(require("../assets/card-logo.png"));

var _fa = require("react-icons/fa");

require("./styles/PayViaCard.css");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function PayViaCard(_ref) {
  let {
    price,
    setPaymentPage,
    successFunction,
    failureFunction,
    closeModal
  } = _ref;
  const [cardPaymentPage, setCardPaymentPage] = (0, _react.useState)("card-details");
  const [error, setError] = (0, _react.useState)(null);
  const [cardData, setCardData] = (0, _react.useState)({
    cardNumber: "",
    expiry: "",
    holderName: "",
    cvv: ""
  });

  const changeHandler = e => {
    setCardData(_objectSpread(_objectSpread({}, cardData), {}, {
      [e.target.name]: e.target.value
    }));
  };

  const paymentHandler = () => {
    try {
      if (cardData.cardNumber.length !== 16) {
        throw new Error("Invalid card number.");
      } else if (cardData.cvv.length !== 3) {
        throw new Error("Invalid CVV");
      } else if (cardData.expiry.length !== 5 || cardData.expiry[2] !== "/") {
        throw new Error("Invalid Expiry Date");
      }

      setError("");
      setCardPaymentPage("txn-option");
      setCardData({
        cardNumber: "",
        expiry: "",
        holderName: "",
        cvv: ""
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const successHandler = () => {
    setCardPaymentPage("payment-success");
    setTimeout(() => {
      closeModal();
      successFunction();
    }, 3000);
  };

  const failureHandler = () => {
    setCardPaymentPage("payment-failure");
    setTimeout(() => {
      closeModal();
      failureFunction();
    }, 3000);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "card-container",
    children: [cardPaymentPage === "card-details" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "details-container",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "container-topbar",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaAngleLeft, {
            className: "topbar-icon",
            onClick: () => setPaymentPage("home")
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "topbar-title",
            onClick: () => setPaymentPage("home"),
            children: "CHOOSE PAYMENT MODE"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "payment-option-title",
          children: "ALL CARDS SUPPORTED"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "input-error",
          children: error
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
          className: "form-container",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            className: "input-field",
            name: "cardNumber",
            placeholder: "Card Number",
            onChange: changeHandler,
            pattern: "\\d*",
            maxLength: "16",
            type: "text"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            className: "input-field",
            name: "expiry",
            placeholder: "Expiry (MM/YY)",
            maxLength: "5",
            onChange: changeHandler,
            type: "text"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            className: "input-field",
            name: "holderName",
            placeholder: "Card Holder's name",
            onChange: changeHandler,
            type: "text"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            className: "input-field",
            name: "cvv",
            placeholder: "CVV",
            maxLength: "3",
            onChange: changeHandler,
            type: "password"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          className: "cards-logo",
          src: _cardLogo.default,
          alt: "cards-accepted"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
        className: "card-pay-button",
        onClick: paymentHandler,
        children: ["Pay \u20B9 ", price]
      })]
    }), cardPaymentPage === "txn-option" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "container-topbar",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaAngleLeft, {
          className: "topbar-icon",
          onClick: () => setCardPaymentPage("card-details")
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "topbar-title",
          onClick: () => setCardPaymentPage("card-details"),
          children: "ENTER CARD DETAILS"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "options-container",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "payment-option-title",
          children: "CHOOSE PAYMENT STATUS"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          onClick: successHandler,
          className: "btn-option option-success",
          children: "SUCCESS"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          onClick: failureHandler,
          className: "btn-option option-failure",
          children: "FAILURE"
        })]
      })]
    }), cardPaymentPage === "payment-success" && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "success-container",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        className: "success-icon",
        src: _success.default,
        alt: "success-icon"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "payment-option-title",
        children: "Your transaction is successfully completed. Redirecting..."
      })]
    }), cardPaymentPage === "payment-failure" && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "failure-container",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        className: "failure-icon",
        src: _failed.default,
        alt: "failure-icon"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "payment-option-title",
        children: "Oops! Your transaction failed. Please retry!"
      })]
    })]
  });
}

var _default = PayViaCard;
exports.default = _default;