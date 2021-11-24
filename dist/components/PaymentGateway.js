"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _PaymentHome = _interopRequireDefault(require("./PaymentHome"));

var _PayViaEth = _interopRequireDefault(require("./PayViaEth"));

var _PayViaCard = _interopRequireDefault(require("./PayViaCard"));

require("./styles/PaymentGateway.css");

var _ModalHeader = _interopRequireDefault(require("./ModalHeader"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function PaymentGateway(_ref) {
  let {
    price,
    productName,
    merchantName,
    merchantLogo,
    ethAddress,
    closeModal,
    successFunction,
    failureFunction
  } = _ref;
  const [paymentPage, setPaymentPage] = (0, _react.useState)("home");
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "app-backdrop",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "payment-modal",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalHeader.default, {
        closeModal: closeModal,
        productName: productName,
        merchantLogo: merchantLogo,
        merchantName: merchantName,
        price: price
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "modal-body",
        children: [paymentPage === "home" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_PaymentHome.default, {
          setPaymentPage: setPaymentPage
        }), paymentPage === "ethereum" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_PayViaEth.default, {
          price: price,
          ethAddress: ethAddress,
          setPaymentPage: setPaymentPage,
          successFunction: successFunction,
          closeModal: closeModal
        }), paymentPage === "card" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_PayViaCard.default, {
          price: price,
          closeModal: closeModal,
          setPaymentPage: setPaymentPage,
          successFunction: successFunction,
          failureFunction: failureFunction
        })]
      })]
    })
  });
}

var _default = PaymentGateway;
exports.default = _default;