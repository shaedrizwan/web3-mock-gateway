"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles/ModalHeader.css");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ModalHeader(_ref) {
  let {
    closeModal,
    merchantName,
    merchantLogo,
    productName,
    price
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "modal-header",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      onClick: closeModal,
      className: "top-bar",
      children: "x"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "header-content",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: merchantLogo,
        className: "merchant-logo",
        alt: merchantName
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "header-details",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "merchant-name",
          children: merchantName
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "product-name",
          children: productName
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "product-price",
          children: ["\u20B9 ", price]
        })]
      })]
    })]
  });
}

var _default = ModalHeader;
exports.default = _default;