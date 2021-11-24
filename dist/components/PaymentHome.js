"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _fa = require("react-icons/fa");

require("./styles/PaymentHome.css");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PaymentHome(_ref) {
  let {
    setPaymentPage
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "home-title",
      children: "CHOOSE PAYMENT METHOD"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "pay-grid",
      onClick: () => setPaymentPage("ethereum"),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pay-grid-logo",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaEthereum, {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pay-grid-title",
        children: "Pay using Ethereum"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pay-grid-arrow",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaAngleRight, {})
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "pay-grid",
      onClick: () => setPaymentPage("card"),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pay-grid-logo",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaCreditCard, {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pay-grid-title",
        children: "Pay using Card"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pay-grid-arrow",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaAngleRight, {})
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "home-footer",
      children: "This is a demo gateway. Please don't use your real card details."
    })]
  });
}

var _default = PaymentHome;
exports.default = _default;