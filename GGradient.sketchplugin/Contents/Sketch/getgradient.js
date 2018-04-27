var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/getgradient.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/getgradient.js":
/*!****************************!*\
  !*** ./src/getgradient.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  var UI = __webpack_require__(/*! sketch/ui */ "sketch/ui");

  var options = ['scrim-gradient', 'cubic-bezier', 'ease-out-sine'];
  var selection = UI.getSelectionFromUser("Choose type of Gradient", options);
  var ok = selection[2];
  var index = selection[1];

  if (!ok) {
    UI.message("It was incorrect button 🤔");
    return;
  }

  if (context.selection.length > 1) {
    UI.message("Only one shape at a time");
    return;
  }

  if (context.selection.length < 1) {
    UI.message("You must selected shape");
    return;
  }

  var selected = context.selection[0];
  var color = selected.style().fills()[0].color().immutableModelObject().stringValueWithAlpha(true);
  var style = selected.style().addStylePartOfType(0);
  style.isEnabled = true;
  style.setFillType(1);
  var gradient = style.gradient();
  var r = hexToRgb(color).r;
  var g = hexToRgb(color).g;
  var b = hexToRgb(color).b;
  var sketchStopArray = [];

  switch (index) {
    case 0:
      {
        sketchStopArray.push(makeStop([r, g, b, 0], 1));
        sketchStopArray.push(makeStop([r, g, b, 0.002], 0.982));
        sketchStopArray.push(makeStop([r, g, b, 0.008], 0.952));
        sketchStopArray.push(makeStop([r, g, b, 0.021], 0.91));
        sketchStopArray.push(makeStop([r, g, b, 0.042], 0.861));
        sketchStopArray.push(makeStop([r, g, b, 0.075], 0.802));
        sketchStopArray.push(makeStop([r, g, b, 0.126], 0.73));
        sketchStopArray.push(makeStop([r, g, b, 0.194], 0.65));
        sketchStopArray.push(makeStop([r, g, b, 0.278], 0.565));
        sketchStopArray.push(makeStop([r, g, b, 0.382], 0.47));
        sketchStopArray.push(makeStop([r, g, b, 0.541], 0.34));
        sketchStopArray.push(makeStop([r, g, b, 0.738], 0.19));
        sketchStopArray.push(makeStop([r, g, b, 1], 0));
        break;
      }

    case 1:
      {
        sketchStopArray.push(makeStop([r, g, b, 0], 1));
        sketchStopArray.push(makeStop([r, g, b, 0.01457], 0.912));
        sketchStopArray.push(makeStop([r, g, b, 0.05882], 0.826));
        sketchStopArray.push(makeStop([r, g, b, 0.12126], 0.752));
        sketchStopArray.push(makeStop([r, g, b, 0.19309], 0.687));
        sketchStopArray.push(makeStop([r, g, b, 0.2693], 0.628));
        sketchStopArray.push(makeStop([r, g, b, 0.34817], 0.572));
        sketchStopArray.push(makeStop([r, g, b, 0.42866], 0.517));
        sketchStopArray.push(makeStop([r, g, b, 0.50925], 0.462));
        sketchStopArray.push(makeStop([r, g, b, 0.58891], 0.406));
        sketchStopArray.push(makeStop([r, g, b, 0.66692], 0.348));
        sketchStopArray.push(makeStop([r, g, b, 0.7426], 0.287));
        sketchStopArray.push(makeStop([r, g, b, 0.81522], 0.222));
        sketchStopArray.push(makeStop([r, g, b, 0.88294], 0.153));
        sketchStopArray.push(makeStop([r, g, b, 0.94505], 0.079));
        sketchStopArray.push(makeStop([r, g, b, 1], 0));
        break;
      }

    case 2:
      {
        sketchStopArray.push(makeStop([r, g, b, 0], 1));
        sketchStopArray.push(makeStop([r, g, b, 0.011], 0.906));
        sketchStopArray.push(makeStop([r, g, b, 0.042], 0.814));
        sketchStopArray.push(makeStop([r, g, b, 0.089], 0.729));
        sketchStopArray.push(makeStop([r, g, b, 0.147], 0.65));
        sketchStopArray.push(makeStop([r, g, b, 0.213], 0.577));
        sketchStopArray.push(makeStop([r, g, b, 0.283], 0.509));
        sketchStopArray.push(makeStop([r, g, b, 0.357], 0.445));
        sketchStopArray.push(makeStop([r, g, b, 0.433], 0.384));
        sketchStopArray.push(makeStop([r, g, b, 0.511], 0.325));
        sketchStopArray.push(makeStop([r, g, b, 0.591], 0.268));
        sketchStopArray.push(makeStop([r, g, b, 0.672], 0.213));
        sketchStopArray.push(makeStop([r, g, b, 0.753], 0.159));
        sketchStopArray.push(makeStop([r, g, b, 0.834], 0.106));
        sketchStopArray.push(makeStop([r, g, b, 0.917], 0.053));
        sketchStopArray.push(makeStop([r, g, b, 1], 0));
        break;
      }
  }

  gradient.setStops(sketchStopArray);
  UI.message("That's great 🔥");
  selected.style().fills().splice(0, 1);
});

function makeColor(c) {
  return MSImmutableColor.colorWithRed_green_blue_alpha(c[0] / 255, c[1] / 255, c[2] / 255, c[3]).newMutableCounterpart();
}

function makeStop(color, position) {
  return MSGradientStop.stopWithPosition_color_(position, makeColor(color));
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=getgradient.js.map