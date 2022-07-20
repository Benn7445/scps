"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/utils/Scrape.ts":
/*!*****************************!*\
  !*** ./src/utils/Scrape.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scrapleLink\": function() { return /* binding */ scrapleLink; }\n/* harmony export */ });\n/* harmony import */ var E_scps_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var E_scps_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_scps_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar scrapleLink = function() {\n    var _ref = _asyncToGenerator(E_scps_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(link) {\n        var response, body, starting, i;\n        return E_scps_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"https://api.sofascore.com/api/v1/event/\" + link + \"/h2h/events\");\n                case 2:\n                    response = _ctx.sent;\n                    _ctx.next = 5;\n                    return response.json();\n                case 5:\n                    body = _ctx.sent;\n                    starting = 0;\n                    for(i = body.events.length - 1; i > 0; i--){\n                        if (body.events[i].status.type === \"inprogress\" || body.events[i].status.type === \"notstarted\") starting = i;\n                    }\n                    return _ctx.abrupt(\"return\", {\n                        homeTeam: body.events[starting].homeTeam.name,\n                        homeScore: body.events[starting].homeScore.current != undefined ? body.events[starting].homeScore.current : body.events[starting].homeScore.aggregated,\n                        awayTeam: body.events[starting].awayTeam.name,\n                        awayScore: body.events[starting].awayScore.current != undefined ? body.events[starting].awayScore.current : body.events[starting].awayScore.aggregated,\n                        startedTime: body.events[starting].statusTime ? body.events[starting].statusTime.timestamp : undefined,\n                        inProgress: body.events[starting].status.type === \"inprogress\",\n                        firstHalf: body.events[starting].lastPeriod === \"\"\n                    });\n                case 9:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function scrapleLink(link) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvU2NyYXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxXQUFXO2VBQUcscUpBQU9DLElBQVksRUFBSztZQUMzQ0MsUUFBUSxFQUdSQyxJQUFJLEVBQ05DLFFBQVEsRUFDSEMsQ0FBQzs7Ozs7MkJBTGFDLEtBQUssQ0FDMUIseUNBQXlDLEdBQUdMLElBQUksR0FBRyxhQUFhLENBQ2pFOztvQkFGS0MsUUFBUSxZQUViOzsyQkFDa0JBLFFBQVEsQ0FBQ0ssSUFBSSxFQUFFOztvQkFBNUJKLElBQUksWUFBd0I7b0JBQzlCQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO29CQUNqQixJQUFTQyxDQUFDLEdBQUdGLElBQUksQ0FBQ0ssTUFBTSxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxFQUFFSixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEVBQUUsQ0FBRTt3QkFDL0MsSUFDRUYsSUFBSSxDQUFDSyxNQUFNLENBQUNILENBQUMsQ0FBQyxDQUFDSyxNQUFNLENBQUNDLElBQUksS0FBSyxZQUFZLElBQzNDUixJQUFJLENBQUNLLE1BQU0sQ0FBQ0gsQ0FBQyxDQUFDLENBQUNLLE1BQU0sQ0FBQ0MsSUFBSSxLQUFLLFlBQVksRUFFM0NQLFFBQVEsR0FBR0MsQ0FBQyxDQUFDO3FCQUNoQjtpREFDTTt3QkFDTE8sUUFBUSxFQUFFVCxJQUFJLENBQUNLLE1BQU0sQ0FBQ0osUUFBUSxDQUFDLENBQUNRLFFBQVEsQ0FBQ0MsSUFBSTt3QkFDN0NDLFNBQVMsRUFDUFgsSUFBSSxDQUFDSyxNQUFNLENBQUNKLFFBQVEsQ0FBQyxDQUFDVSxTQUFTLENBQUNDLE9BQU8sSUFBSUMsU0FBUyxHQUNoRGIsSUFBSSxDQUFDSyxNQUFNLENBQUNKLFFBQVEsQ0FBQyxDQUFDVSxTQUFTLENBQUNDLE9BQU8sR0FDdkNaLElBQUksQ0FBQ0ssTUFBTSxDQUFDSixRQUFRLENBQUMsQ0FBQ1UsU0FBUyxDQUFDRyxVQUFVO3dCQUNoREMsUUFBUSxFQUFFZixJQUFJLENBQUNLLE1BQU0sQ0FBQ0osUUFBUSxDQUFDLENBQUNjLFFBQVEsQ0FBQ0wsSUFBSTt3QkFDN0NNLFNBQVMsRUFDUGhCLElBQUksQ0FBQ0ssTUFBTSxDQUFDSixRQUFRLENBQUMsQ0FBQ2UsU0FBUyxDQUFDSixPQUFPLElBQUlDLFNBQVMsR0FDaERiLElBQUksQ0FBQ0ssTUFBTSxDQUFDSixRQUFRLENBQUMsQ0FBQ2UsU0FBUyxDQUFDSixPQUFPLEdBQ3ZDWixJQUFJLENBQUNLLE1BQU0sQ0FBQ0osUUFBUSxDQUFDLENBQUNlLFNBQVMsQ0FBQ0YsVUFBVTt3QkFDaERHLFdBQVcsRUFBRWpCLElBQUksQ0FBQ0ssTUFBTSxDQUFDSixRQUFRLENBQUMsQ0FBQ2lCLFVBQVUsR0FDekNsQixJQUFJLENBQUNLLE1BQU0sQ0FBQ0osUUFBUSxDQUFDLENBQUNpQixVQUFVLENBQUNDLFNBQVMsR0FDMUNOLFNBQVM7d0JBQ2JPLFVBQVUsRUFBRXBCLElBQUksQ0FBQ0ssTUFBTSxDQUFDSixRQUFRLENBQUMsQ0FBQ00sTUFBTSxDQUFDQyxJQUFJLEtBQUssWUFBWTt3QkFDOURhLFNBQVMsRUFBRXJCLElBQUksQ0FBQ0ssTUFBTSxDQUFDSixRQUFRLENBQUMsQ0FBQ3FCLFVBQVUsS0FBSyxFQUFFO3FCQUNuRDs7Ozs7O0tBQ0Y7b0JBOUJZekIsV0FBVyxDQUFVQyxJQUFZOzs7R0E4QjdDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL1NjcmFwZS50cz83NTkwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY3JhcGxlTGluayA9IGFzeW5jIChsaW5rOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgXCJodHRwczovL2FwaS5zb2Zhc2NvcmUuY29tL2FwaS92MS9ldmVudC9cIiArIGxpbmsgKyBcIi9oMmgvZXZlbnRzXCJcclxuICApO1xyXG4gIGNvbnN0IGJvZHkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgbGV0IHN0YXJ0aW5nID0gMDtcclxuICBmb3IgKGxldCBpID0gYm9keS5ldmVudHMubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgaWYgKFxyXG4gICAgICBib2R5LmV2ZW50c1tpXS5zdGF0dXMudHlwZSA9PT0gXCJpbnByb2dyZXNzXCIgfHxcclxuICAgICAgYm9keS5ldmVudHNbaV0uc3RhdHVzLnR5cGUgPT09IFwibm90c3RhcnRlZFwiXHJcbiAgICApXHJcbiAgICAgIHN0YXJ0aW5nID0gaTtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIGhvbWVUZWFtOiBib2R5LmV2ZW50c1tzdGFydGluZ10uaG9tZVRlYW0ubmFtZSxcclxuICAgIGhvbWVTY29yZTpcclxuICAgICAgYm9keS5ldmVudHNbc3RhcnRpbmddLmhvbWVTY29yZS5jdXJyZW50ICE9IHVuZGVmaW5lZFxyXG4gICAgICAgID8gYm9keS5ldmVudHNbc3RhcnRpbmddLmhvbWVTY29yZS5jdXJyZW50XHJcbiAgICAgICAgOiBib2R5LmV2ZW50c1tzdGFydGluZ10uaG9tZVNjb3JlLmFnZ3JlZ2F0ZWQsXHJcbiAgICBhd2F5VGVhbTogYm9keS5ldmVudHNbc3RhcnRpbmddLmF3YXlUZWFtLm5hbWUsXHJcbiAgICBhd2F5U2NvcmU6XHJcbiAgICAgIGJvZHkuZXZlbnRzW3N0YXJ0aW5nXS5hd2F5U2NvcmUuY3VycmVudCAhPSB1bmRlZmluZWRcclxuICAgICAgICA/IGJvZHkuZXZlbnRzW3N0YXJ0aW5nXS5hd2F5U2NvcmUuY3VycmVudFxyXG4gICAgICAgIDogYm9keS5ldmVudHNbc3RhcnRpbmddLmF3YXlTY29yZS5hZ2dyZWdhdGVkLFxyXG4gICAgc3RhcnRlZFRpbWU6IGJvZHkuZXZlbnRzW3N0YXJ0aW5nXS5zdGF0dXNUaW1lXHJcbiAgICAgID8gYm9keS5ldmVudHNbc3RhcnRpbmddLnN0YXR1c1RpbWUudGltZXN0YW1wXHJcbiAgICAgIDogdW5kZWZpbmVkLFxyXG4gICAgaW5Qcm9ncmVzczogYm9keS5ldmVudHNbc3RhcnRpbmddLnN0YXR1cy50eXBlID09PSBcImlucHJvZ3Jlc3NcIixcclxuICAgIGZpcnN0SGFsZjogYm9keS5ldmVudHNbc3RhcnRpbmddLmxhc3RQZXJpb2QgPT09IFwiXCJcclxuICB9O1xyXG59O1xyXG4iXSwibmFtZXMiOlsic2NyYXBsZUxpbmsiLCJsaW5rIiwicmVzcG9uc2UiLCJib2R5Iiwic3RhcnRpbmciLCJpIiwiZmV0Y2giLCJqc29uIiwiZXZlbnRzIiwibGVuZ3RoIiwic3RhdHVzIiwidHlwZSIsImhvbWVUZWFtIiwibmFtZSIsImhvbWVTY29yZSIsImN1cnJlbnQiLCJ1bmRlZmluZWQiLCJhZ2dyZWdhdGVkIiwiYXdheVRlYW0iLCJhd2F5U2NvcmUiLCJzdGFydGVkVGltZSIsInN0YXR1c1RpbWUiLCJ0aW1lc3RhbXAiLCJpblByb2dyZXNzIiwiZmlyc3RIYWxmIiwibGFzdFBlcmlvZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/Scrape.ts\n");

/***/ })

});