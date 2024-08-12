"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/instructions/page",{

/***/ "(app-pages-browser)/./src/fixtures/instructionsMock.ts":
/*!******************************************!*\
  !*** ./src/fixtures/instructionsMock.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   instructionsMock: function() { return /* binding */ instructionsMock; }\n/* harmony export */ });\nconst instructionsMock = [\n    {\n        instruction: {\n            name: \"Add\",\n            mnemonic: \"ADD\",\n            description: \"Adds two registers or a register and an immediate value.\",\n            opcode: \"0100\",\n            syntax: [\n                {\n                    format: \"ADD {<Rd>,} <Rn>, <operand2>\",\n                    explanation: {\n                        Rd: \"Destination register where the result will be stored.\",\n                        Rn: \"First operand register. This register's value will be added to the second operand.\",\n                        operand2: \"Second operand, which can be a register or an immediate value.\"\n                    }\n                },\n                {\n                    format: \"ADD{S} <Rd>, <Rn>, <Rm>{, <shift>}\",\n                    explanation: {\n                        S: \"If present, the instruction updates the condition flags based on the result.\",\n                        Rd: \"Destination register where the result will be stored.\",\n                        Rn: \"First operand register.\",\n                        Rm: \"Second operand register.\",\n                        shift: \"Optional shift applied to the value in Rm before the addition.\"\n                    }\n                }\n            ],\n            bit_encoding: {\n                conditional: \"1110\",\n                opcode: \"0100\",\n                S_flag: \"0\",\n                Rn: \"0000\",\n                Rd: \"0001\",\n                operand2: \"000000000000\"\n            },\n            condition_flags: {\n                N: \"Set to 1 if the result is negative.\",\n                Z: \"Set to 1 if the result is zero.\",\n                C: \"Set to 1 if the operation resulted in a carry out.\",\n                V: \"Set to 1 if the operation resulted in an overflow.\"\n            },\n            examples: [\n                {\n                    description: \"Add two registers and store the result in a third register\",\n                    code: \"ADD R0, R1, R2 // R0 = R1 + R2\"\n                },\n                {\n                    description: \"Add an immediate value to a register\",\n                    code: \"ADD R0, R0, #1 // R0 = R0 + 1\"\n                }\n            ]\n        }\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9maXh0dXJlcy9pbnN0cnVjdGlvbnNNb2NrLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFFTyxNQUFNQSxtQkFBa0M7SUFDN0M7UUFDRUMsYUFBYTtZQUNYQyxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsYUFBYTtZQUNiQyxRQUFRO1lBQ1JDLFFBQVE7Z0JBQ047b0JBQ0VDLFFBQVE7b0JBQ1JDLGFBQWE7d0JBQ1hDLElBQUk7d0JBQ0pDLElBQUk7d0JBQ0pDLFVBQ0U7b0JBQ0o7Z0JBQ0Y7Z0JBQ0E7b0JBQ0VKLFFBQVE7b0JBQ1JDLGFBQWE7d0JBQ1hJLEdBQUc7d0JBQ0hILElBQUk7d0JBQ0pDLElBQUk7d0JBQ0pHLElBQUk7d0JBQ0pDLE9BQ0U7b0JBQ0o7Z0JBQ0Y7YUFDRDtZQUNEQyxjQUFjO2dCQUNaQyxhQUFhO2dCQUNiWCxRQUFRO2dCQUNSWSxRQUFRO2dCQUNSUCxJQUFJO2dCQUNKRCxJQUFJO2dCQUNKRSxVQUFVO1lBQ1o7WUFDQU8saUJBQWlCO2dCQUNmQyxHQUFHO2dCQUNIQyxHQUFHO2dCQUNIQyxHQUFHO2dCQUNIQyxHQUFHO1lBQ0w7WUFDQUMsVUFBVTtnQkFDUjtvQkFDRW5CLGFBQ0U7b0JBQ0ZvQixNQUFNO2dCQUNSO2dCQUNBO29CQUNFcEIsYUFBYTtvQkFDYm9CLE1BQU07Z0JBQ1I7YUFDRDtRQUNIO0lBQ0Y7Q0FDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9maXh0dXJlcy9pbnN0cnVjdGlvbnNNb2NrLnRzPzU3NGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5zdHJ1Y3Rpb24gfSBmcm9tIFwiQC9tb2RlbHMvSW5zdHJ1Y3Rpb25cIjtcblxuZXhwb3J0IGNvbnN0IGluc3RydWN0aW9uc01vY2s6IEluc3RydWN0aW9uW10gPSBbXG4gIHtcbiAgICBpbnN0cnVjdGlvbjoge1xuICAgICAgbmFtZTogXCJBZGRcIixcbiAgICAgIG1uZW1vbmljOiBcIkFERFwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQWRkcyB0d28gcmVnaXN0ZXJzIG9yIGEgcmVnaXN0ZXIgYW5kIGFuIGltbWVkaWF0ZSB2YWx1ZS5cIixcbiAgICAgIG9wY29kZTogXCIwMTAwXCIsXG4gICAgICBzeW50YXg6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZvcm1hdDogXCJBREQgezxSZD4sfSA8Um4+LCA8b3BlcmFuZDI+XCIsXG4gICAgICAgICAgZXhwbGFuYXRpb246IHtcbiAgICAgICAgICAgIFJkOiBcIkRlc3RpbmF0aW9uIHJlZ2lzdGVyIHdoZXJlIHRoZSByZXN1bHQgd2lsbCBiZSBzdG9yZWQuXCIsXG4gICAgICAgICAgICBSbjogXCJGaXJzdCBvcGVyYW5kIHJlZ2lzdGVyLiBUaGlzIHJlZ2lzdGVyJ3MgdmFsdWUgd2lsbCBiZSBhZGRlZCB0byB0aGUgc2Vjb25kIG9wZXJhbmQuXCIsXG4gICAgICAgICAgICBvcGVyYW5kMjpcbiAgICAgICAgICAgICAgXCJTZWNvbmQgb3BlcmFuZCwgd2hpY2ggY2FuIGJlIGEgcmVnaXN0ZXIgb3IgYW4gaW1tZWRpYXRlIHZhbHVlLlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmb3JtYXQ6IFwiQUREe1N9IDxSZD4sIDxSbj4sIDxSbT57LCA8c2hpZnQ+fVwiLFxuICAgICAgICAgIGV4cGxhbmF0aW9uOiB7XG4gICAgICAgICAgICBTOiBcIklmIHByZXNlbnQsIHRoZSBpbnN0cnVjdGlvbiB1cGRhdGVzIHRoZSBjb25kaXRpb24gZmxhZ3MgYmFzZWQgb24gdGhlIHJlc3VsdC5cIixcbiAgICAgICAgICAgIFJkOiBcIkRlc3RpbmF0aW9uIHJlZ2lzdGVyIHdoZXJlIHRoZSByZXN1bHQgd2lsbCBiZSBzdG9yZWQuXCIsXG4gICAgICAgICAgICBSbjogXCJGaXJzdCBvcGVyYW5kIHJlZ2lzdGVyLlwiLFxuICAgICAgICAgICAgUm06IFwiU2Vjb25kIG9wZXJhbmQgcmVnaXN0ZXIuXCIsXG4gICAgICAgICAgICBzaGlmdDpcbiAgICAgICAgICAgICAgXCJPcHRpb25hbCBzaGlmdCBhcHBsaWVkIHRvIHRoZSB2YWx1ZSBpbiBSbSBiZWZvcmUgdGhlIGFkZGl0aW9uLlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgYml0X2VuY29kaW5nOiB7XG4gICAgICAgIGNvbmRpdGlvbmFsOiBcIjExMTBcIixcbiAgICAgICAgb3Bjb2RlOiBcIjAxMDBcIixcbiAgICAgICAgU19mbGFnOiBcIjBcIixcbiAgICAgICAgUm46IFwiMDAwMFwiLFxuICAgICAgICBSZDogXCIwMDAxXCIsXG4gICAgICAgIG9wZXJhbmQyOiBcIjAwMDAwMDAwMDAwMFwiLFxuICAgICAgfSxcbiAgICAgIGNvbmRpdGlvbl9mbGFnczoge1xuICAgICAgICBOOiBcIlNldCB0byAxIGlmIHRoZSByZXN1bHQgaXMgbmVnYXRpdmUuXCIsXG4gICAgICAgIFo6IFwiU2V0IHRvIDEgaWYgdGhlIHJlc3VsdCBpcyB6ZXJvLlwiLFxuICAgICAgICBDOiBcIlNldCB0byAxIGlmIHRoZSBvcGVyYXRpb24gcmVzdWx0ZWQgaW4gYSBjYXJyeSBvdXQuXCIsXG4gICAgICAgIFY6IFwiU2V0IHRvIDEgaWYgdGhlIG9wZXJhdGlvbiByZXN1bHRlZCBpbiBhbiBvdmVyZmxvdy5cIixcbiAgICAgIH0sXG4gICAgICBleGFtcGxlczogW1xuICAgICAgICB7XG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIkFkZCB0d28gcmVnaXN0ZXJzIGFuZCBzdG9yZSB0aGUgcmVzdWx0IGluIGEgdGhpcmQgcmVnaXN0ZXJcIixcbiAgICAgICAgICBjb2RlOiBcIkFERCBSMCwgUjEsIFIyIC8vIFIwID0gUjEgKyBSMlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiQWRkIGFuIGltbWVkaWF0ZSB2YWx1ZSB0byBhIHJlZ2lzdGVyXCIsXG4gICAgICAgICAgY29kZTogXCJBREQgUjAsIFIwLCAjMSAvLyBSMCA9IFIwICsgMVwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuXTtcbiJdLCJuYW1lcyI6WyJpbnN0cnVjdGlvbnNNb2NrIiwiaW5zdHJ1Y3Rpb24iLCJuYW1lIiwibW5lbW9uaWMiLCJkZXNjcmlwdGlvbiIsIm9wY29kZSIsInN5bnRheCIsImZvcm1hdCIsImV4cGxhbmF0aW9uIiwiUmQiLCJSbiIsIm9wZXJhbmQyIiwiUyIsIlJtIiwic2hpZnQiLCJiaXRfZW5jb2RpbmciLCJjb25kaXRpb25hbCIsIlNfZmxhZyIsImNvbmRpdGlvbl9mbGFncyIsIk4iLCJaIiwiQyIsIlYiLCJleGFtcGxlcyIsImNvZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/fixtures/instructionsMock.ts\n"));

/***/ })

});