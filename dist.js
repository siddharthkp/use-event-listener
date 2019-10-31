"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useEventListener(eventName, callback) {
  var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;
  var savedCallback = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    savedCallback.current = callback;
  }, [callback]);
  (0, _react.useEffect)(function () {
    if (typeof element === 'undefined') return;

    var eventListener = function eventListener(event) {
      return savedCallback.current(event);
    };

    element.addEventListener(eventName, eventListener);
    return function cleanup() {
      return element.removeEventListener(eventName, eventListener);
    };
  }, [eventName]);
}

var _default = useEventListener;
exports["default"] = _default;
