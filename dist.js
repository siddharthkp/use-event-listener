"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function useEventListener(eventName, callback) {
  var savedCallback = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    savedCallback.current = callback;
  }, [callback]);
  (0, _react.useEffect)(function () {
    if (typeof window === 'undefined') return;

    var eventListener = function eventListener(event) {
      return savedCallback.current(event);
    };

    window.addEventListener(eventName, eventListener);
    return function cleanup() {
      return window.removeEventListener(eventName, eventListener);
    };
  }, eventName);
}

var _default = useEventListener;
exports.default = _default;
