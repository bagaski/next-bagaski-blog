webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout */ \"./pages/layout.js\");\n\n\nvar _jsxFileName = \"/Users/yiorgosbagakis/Documents/School/Next/next-bagaski-blog/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var _this = this;\n\n  var slugs = _ref.slugs;\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (window.netlifyIdentity) {\n      window.netlifyIdentity.on(\"init\", function (user) {\n        if (!user) {\n          window.netlifyIdentity.on(\"login\", function () {\n            document.location.href = \"/admin/\";\n          });\n        }\n      });\n    }\n  }, []);\n  var styled = {\n    fontSize: '48px',\n    listStyleType: 'none',\n    fontFamily: 'times',\n    fontWeight: '200'\n  };\n  var styleLinks = {\n    color: 'blue',\n    textDecoration: 'none',\n    \"&:hover\": {\n      color: \"red\"\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        style: styled,\n        children: slugs.map(function (slug) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n              href: '/' + slug,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                style: styleLinks,\n                children: slug\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 41,\n                columnNumber: 63\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 39\n            }, _this)\n          }, slug, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 24\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwic2x1Z3MiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJuZXRsaWZ5SWRlbnRpdHkiLCJvbiIsInVzZXIiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwiaHJlZiIsInN0eWxlZCIsImZvbnRTaXplIiwibGlzdFN0eWxlVHlwZSIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0Iiwic3R5bGVMaW5rcyIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJtYXAiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdlLFNBQVNBLElBQVQsT0FBdUI7QUFBQTs7QUFBQTs7QUFBQSxNQUFSQyxLQUFRLFFBQVJBLEtBQVE7QUFFcENDLHlEQUFTLENBQUMsWUFBSTtBQUNaLFFBQUlDLE1BQU0sQ0FBQ0MsZUFBWCxFQUE0QjtBQUMxQkQsWUFBTSxDQUFDQyxlQUFQLENBQXVCQyxFQUF2QixDQUEwQixNQUExQixFQUFrQyxVQUFBQyxJQUFJLEVBQUk7QUFDeEMsWUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDVEgsZ0JBQU0sQ0FBQ0MsZUFBUCxDQUF1QkMsRUFBdkIsQ0FBMEIsT0FBMUIsRUFBbUMsWUFBTTtBQUN2Q0Usb0JBQVEsQ0FBQ0MsUUFBVCxDQUFrQkMsSUFBbEIsR0FBeUIsU0FBekI7QUFDRCxXQUZEO0FBR0Q7QUFDRixPQU5EO0FBT0Q7QUFDRixHQVZRLEVBVVAsRUFWTyxDQUFUO0FBWUEsTUFBTUMsTUFBTSxHQUFHO0FBQ2JDLFlBQVEsRUFBRSxNQURHO0FBRWJDLGlCQUFhLEVBQUUsTUFGRjtBQUdiQyxjQUFVLEVBQUUsT0FIQztBQUliQyxjQUFVLEVBQUU7QUFKQyxHQUFmO0FBT0EsTUFBTUMsVUFBVSxHQUFHO0FBQ2pCQyxTQUFLLEVBQUUsTUFEVTtBQUVqQkMsa0JBQWMsRUFBRSxNQUZDO0FBR2pCLGVBQVc7QUFDVEQsV0FBSyxFQUFFO0FBREU7QUFITSxHQUFuQjtBQVNBLHNCQUNFLHFFQUFDLCtDQUFEO0FBQUEsMkJBQ0E7QUFBQSw2QkFDQTtBQUFJLGFBQUssRUFBRU4sTUFBWDtBQUFBLGtCQUNDVCxLQUFLLENBQUNpQixHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLDhCQUFJO0FBQUEsbUNBQWUscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFFLE1BQU1BLElBQWxCO0FBQUEscUNBQXdCO0FBQUcscUJBQUssRUFBRUosVUFBVjtBQUFBLDBCQUF1Qkk7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWYsYUFBU0EsSUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFKO0FBQUEsU0FBZDtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0dBdkN1Qm5CLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtzbHVnc30pIHtcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBpZiAod2luZG93Lm5ldGxpZnlJZGVudGl0eSkge1xuICAgICAgd2luZG93Lm5ldGxpZnlJZGVudGl0eS5vbihcImluaXRcIiwgdXNlciA9PiB7XG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgIHdpbmRvdy5uZXRsaWZ5SWRlbnRpdHkub24oXCJsb2dpblwiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gXCIvYWRtaW4vXCI7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxbXSlcblxuICBjb25zdCBzdHlsZWQgPSB7XG4gICAgZm9udFNpemU6ICc0OHB4JyxcbiAgICBsaXN0U3R5bGVUeXBlOiAnbm9uZScsXG4gICAgZm9udEZhbWlseTogJ3RpbWVzJyxcbiAgICBmb250V2VpZ2h0OiAnMjAwJ1xuICB9XG5cbiAgY29uc3Qgc3R5bGVMaW5rcyA9IHtcbiAgICBjb2xvcjogJ2JsdWUnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGNvbG9yOiBcInJlZFwiXG4gICAgfVxuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgPGRpdj5cbiAgICA8dWwgc3R5bGU9e3N0eWxlZH0+XG4gICAge3NsdWdzLm1hcChzbHVnID0+IDxsaSBrZXk9e3NsdWd9PjxMaW5rIGhyZWY9eycvJyArIHNsdWd9PjxhIHN0eWxlPXtzdHlsZUxpbmtzfT57c2x1Z308L2E+PC9MaW5rPjwvbGk+KX1cbiAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcblxuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKCdjb250ZW50Jyk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHNsdWdzOiBmaWxlcy5tYXAoZmlsZW5hbWUgPT4gZmlsZW5hbWUucmVwbGFjZSgnLm1kJywgJycpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})