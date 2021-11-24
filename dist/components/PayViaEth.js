"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.number.to-fixed.js");

var _ethers = require("ethers");

var _axios = _interopRequireDefault(require("axios"));

var _react = require("react");

var _fa = require("react-icons/fa");

var _ethereumLogo = _interopRequireDefault(require("../assets/ethereum-logo.png"));

require("./styles/PayViaEth.css");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function PayViaEth(_ref) {
  let {
    price,
    ethAddress,
    setPaymentPage,
    successFunction,
    closeModal
  } = _ref;
  const [ethInINR, setEthInINR] = (0, _react.useState)(null);
  const [connection, setConnection] = (0, _react.useState)({
    isConnected: false,
    account: null
  });
  const [txn, setTxn] = (0, _react.useState)({
    processing: false,
    hash: null
  });
  const [error, setError] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    (async function () {
      try {
        if (!window.ethereum) {
          throw new Error("No crypto wallet present. Please install Metamask.");
        }

        const provider = new _ethers.ethers.providers.Web3Provider(window.ethereum, "any");
        const accounts = await provider.listAccounts();

        if (accounts.length > 0) {
          setConnection(connection => _objectSpread(_objectSpread({}, connection), {}, {
            isConnected: true,
            account: accounts[0]
          }));
        }
      } catch (err) {
        setError(err.message);
      }
    })();
  }, []);
  (0, _react.useEffect)(() => {
    (async function () {
      const response = await _axios.default.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=INR");
      setEthInINR(response.data.INR);
    })();
  }, []);

  const connectToMetaMask = async () => {
    try {
      setError("");

      if (!window.ethereum) {
        throw new Error("No crypto wallet present. Please install Metamask.");
      }

      const provider = new _ethers.ethers.providers.Web3Provider(window.ethereum, "any");
      const accounts = await provider.send("eth_requestAccounts", []);
      setConnection(connection => _objectSpread(_objectSpread({}, connection), {}, {
        isConnected: true,
        account: accounts[0]
      }));
    } catch (err) {
      setError(err.message);
    }
  };

  const paymentHandler = async _ref2 => {
    let {
      price,
      address
    } = _ref2;

    try {
      setError("");

      if (!window.ethereum) {
        throw new Error("No crypto wallet present. Please install Metamask.");
      }

      if (!connection.isConnected) {
        throw new Error("Wallet not connected. Please connect using above link.");
      }

      setTxn(txn => _objectSpread(_objectSpread({}, txn), {}, {
        processing: true,
        hash: null
      }));
      const provider = new _ethers.ethers.providers.Web3Provider(window.ethereum, "any");
      const signer = provider.getSigner();
      const ether = (price / ethInINR).toFixed(8);
      const transaction = await signer.sendTransaction({
        to: address,
        value: _ethers.ethers.utils.parseEther(String(ether))
      });
      setTxn(txn => _objectSpread(_objectSpread({}, txn), {}, {
        hash: transaction.hash,
        processing: false
      }));
      setTimeout(() => {
        closeModal();
        successFunction();
      }, 3000);
    } catch (err) {
      setError(err.message);
      setTxn(txn => _objectSpread(_objectSpread({}, txn), {}, {
        processing: false
      }));
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "eth-container",
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
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "eth-menubar",
      children: [connection.isConnected ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "eth-status status-connected",
        children: "Connected"
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "eth-status status-disconnected",
        children: "Not connected"
      }), connection.isConnected ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "eth-account",
        children: connection.account
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "btn-connect",
        onClick: connectToMetaMask,
        children: "Connect to wallet"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "eth-body",
      children: [error && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "eth-error",
        children: error
      }), "        ", /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: _ethereumLogo.default,
        alt: "eth-logo",
        className: "eth-logo"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "eth-value",
        children: ["1 ETH = \u20B9 ", ethInINR]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "eth-warning",
        children: "Please use Ethereum Test Networks like Ropsten for demo transaction."
      }), txn.hash && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "eth-txn-success",
        children: ["Txn Successfully processed. ", /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          href: "https://ropsten.etherscan.io/tx/".concat(txn.hash),
          target: "_blank",
          rel: "noreferrer",
          children: "View details here"
        })]
      })]
    }), !txn.processing && /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
      className: "eth-pay-button",
      onClick: () => paymentHandler({
        price,
        address: ethAddress
      }),
      children: ["Pay ", ethInINR && (price / ethInINR).toFixed(5), " ETH"]
    }), txn.processing && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "eth-pay-button eth-processing",
      children: "Processing..."
    })]
  });
}

var _default = PayViaEth;
exports.default = _default;