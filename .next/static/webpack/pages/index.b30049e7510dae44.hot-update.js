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

/***/ "./src/utils/LocalStorage.ts":
/*!***********************************!*\
  !*** ./src/utils/LocalStorage.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddMatch\": function() { return /* binding */ AddMatch; },\n/* harmony export */   \"GetMatches\": function() { return /* binding */ GetMatches; },\n/* harmony export */   \"UpdateMatch\": function() { return /* binding */ UpdateMatch; }\n/* harmony export */ });\nvar AddMatch = function(link) {\n    var matches = GetMatches();\n    matches.push({\n        link: link,\n        bettedTeam: \"\"\n    });\n    localStorage.setItem(\"matches\", JSON.stringify(matches));\n};\nvar GetMatches = function() {\n    var matches = JSON.parse(localStorage.getItem(\"matches\"));\n    return matches ? matches : [];\n};\nvar UpdateMatch = function(link, bettedTeam) {\n    var matches = GetMatches();\n    var match1 = matches.filter(function(match) {\n        return match.link === link;\n    })[0];\n    matches.filter(function(match) {\n        return console.log(match);\n    })[0];\n    matches = matches.filter(function(match) {\n        return match.link !== link;\n    });\n    match1.bettedTeam = bettedTeam;\n    matches.push(match1);\n    localStorage.setItem(\"matches\", JSON.stringify(matches));\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvTG9jYWxTdG9yYWdlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLElBQU1BLFFBQVEsR0FBRyxTQUFDQyxJQUFZLEVBQUs7SUFDeEMsSUFBTUMsT0FBTyxHQUFHQyxVQUFVLEVBQUU7SUFDNUJELE9BQU8sQ0FBQ0UsSUFBSSxDQUFDO1FBQ1hILElBQUksRUFBRUEsSUFBSTtRQUNWSSxVQUFVLEVBQUUsRUFBRTtLQUNmLENBQUMsQ0FBQztJQUNIQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxTQUFTLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDUCxPQUFPLENBQUMsQ0FBQyxDQUFDO0NBQzFELENBQUM7QUFFSyxJQUFNQyxVQUFVLEdBQUcsV0FBYTtJQUNyQyxJQUFNRCxPQUFPLEdBQUdNLElBQUksQ0FBQ0UsS0FBSyxDQUFDSixZQUFZLENBQUNLLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxPQUFPVCxPQUFPLEdBQUdBLE9BQU8sR0FBRyxFQUFFLENBQUM7Q0FDL0IsQ0FBQztBQUVLLElBQU1VLFdBQVcsR0FBRyxTQUFDWCxJQUFZLEVBQUVJLFVBQWtCLEVBQUs7SUFDL0QsSUFBSUgsT0FBTyxHQUFHQyxVQUFVLEVBQUU7SUFDMUIsSUFBTVUsTUFBSyxHQUFHWCxPQUFPLENBQUNZLE1BQU0sQ0FBQyxTQUFDRCxLQUFLO2VBQUtBLEtBQUssQ0FBQ1osSUFBSSxLQUFLQSxJQUFJO0tBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvREMsT0FBTyxDQUFDWSxNQUFNLENBQUMsU0FBQ0QsS0FBSztlQUFLRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDO0tBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRFgsT0FBTyxHQUFHQSxPQUFPLENBQUNZLE1BQU0sQ0FBQyxTQUFDRCxLQUFLO2VBQUtBLEtBQUssQ0FBQ1osSUFBSSxLQUFLQSxJQUFJO0tBQUEsQ0FBQyxDQUFDO0lBQ3pEWSxNQUFLLENBQUNSLFVBQVUsR0FBR0EsVUFBVSxDQUFDO0lBQzlCSCxPQUFPLENBQUNFLElBQUksQ0FBQ1MsTUFBSyxDQUFDLENBQUM7SUFDcEJQLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFNBQVMsRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNQLE9BQU8sQ0FBQyxDQUFDLENBQUM7Q0FDMUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdXRpbHMvTG9jYWxTdG9yYWdlLnRzP2EzNjgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFkZE1hdGNoID0gKGxpbms6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IG1hdGNoZXMgPSBHZXRNYXRjaGVzKCk7XHJcbiAgbWF0Y2hlcy5wdXNoKHtcclxuICAgIGxpbms6IGxpbmssXHJcbiAgICBiZXR0ZWRUZWFtOiBcIlwiLFxyXG4gIH0pO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWF0Y2hlc1wiLCBKU09OLnN0cmluZ2lmeShtYXRjaGVzKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgR2V0TWF0Y2hlcyA9ICgpOiBhbnlbXSA9PiB7XHJcbiAgY29uc3QgbWF0Y2hlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtYXRjaGVzXCIpKTtcclxuICByZXR1cm4gbWF0Y2hlcyA/IG1hdGNoZXMgOiBbXTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGVNYXRjaCA9IChsaW5rOiBzdHJpbmcsIGJldHRlZFRlYW06IHN0cmluZykgPT4ge1xyXG4gIGxldCBtYXRjaGVzID0gR2V0TWF0Y2hlcygpO1xyXG4gIGNvbnN0IG1hdGNoID0gbWF0Y2hlcy5maWx0ZXIoKG1hdGNoKSA9PiBtYXRjaC5saW5rID09PSBsaW5rKVswXTtcclxuICBtYXRjaGVzLmZpbHRlcigobWF0Y2gpID0+IGNvbnNvbGUubG9nKG1hdGNoKSlbMF1cclxuICBtYXRjaGVzID0gbWF0Y2hlcy5maWx0ZXIoKG1hdGNoKSA9PiBtYXRjaC5saW5rICE9PSBsaW5rKTtcclxuICBtYXRjaC5iZXR0ZWRUZWFtID0gYmV0dGVkVGVhbTtcclxuICBtYXRjaGVzLnB1c2gobWF0Y2gpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWF0Y2hlc1wiLCBKU09OLnN0cmluZ2lmeShtYXRjaGVzKSk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJBZGRNYXRjaCIsImxpbmsiLCJtYXRjaGVzIiwiR2V0TWF0Y2hlcyIsInB1c2giLCJiZXR0ZWRUZWFtIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsImdldEl0ZW0iLCJVcGRhdGVNYXRjaCIsIm1hdGNoIiwiZmlsdGVyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/LocalStorage.ts\n");

/***/ })

});