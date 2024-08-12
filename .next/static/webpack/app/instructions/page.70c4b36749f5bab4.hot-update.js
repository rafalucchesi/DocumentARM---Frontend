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

/***/ "(app-pages-browser)/./src/app/instructions/page.tsx":
/*!***************************************!*\
  !*** ./src/app/instructions/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_bitDisplay_bitDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/bitDisplay/bitDisplay */ \"(app-pages-browser)/./src/components/bitDisplay/bitDisplay.tsx\");\n/* harmony import */ var _components_InstructionSearch_instructionSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/InstructionSearch/instructionSearch */ \"(app-pages-browser)/./src/components/InstructionSearch/instructionSearch.tsx\");\n/* harmony import */ var _fixtures_instructionsMock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/fixtures/instructionsMock */ \"(app-pages-browser)/./src/fixtures/instructionsMock.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst InstructionsPage = ()=>{\n    _s();\n    const [selectedInstruction, setSelectedInstruction] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const data = _fixtures_instructionsMock__WEBPACK_IMPORTED_MODULE_3__.instructionsMock;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex h-full w-full flex-col gap-6 overflow-clip bg-white p-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex w-full flex-col gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-center text-xl font-bold text-black\",\n                    children: \"DocumentARM\"\n                }, void 0, false, {\n                    fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/app/instructions/page.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InstructionSearch_instructionSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    instructions: data,\n                    onSearch: setSelectedInstruction\n                }, void 0, false, {\n                    fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/app/instructions/page.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                selectedInstruction ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col gap-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-center font-bold\",\n                            children: \"\".concat(selectedInstruction.mnemonic, \" - \").concat(selectedInstruction.name)\n                        }, void 0, false, {\n                            fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/app/instructions/page.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_bitDisplay_bitDisplay__WEBPACK_IMPORTED_MODULE_1__.BitDisplay, {\n                            code: selectedInstruction.opcode\n                        }, void 0, false, {\n                            fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/app/instructions/page.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-black\",\n                            children: selectedInstruction.description\n                        }, void 0, false, {\n                            fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/app/instructions/page.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/app/instructions/page.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, undefined) : null\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/app/instructions/page.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/app/instructions/page.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(InstructionsPage, \"6QJkFr67rUutMXYTbKvD7Y3UU9k=\");\n_c = InstructionsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InstructionsPage);\nvar _c;\n$RefreshReg$(_c, \"InstructionsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaW5zdHJ1Y3Rpb25zL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVnRTtBQUNpQjtBQUNsQjtBQUU5QjtBQUVqQyxNQUFNSSxtQkFBbUI7O0lBQ3ZCLE1BQU0sQ0FBQ0MscUJBQXFCQyx1QkFBdUIsR0FBR0gsK0NBQVFBO0lBQzlELE1BQU1JLE9BQU9MLHdFQUFnQkE7SUFDN0IscUJBQ0UsOERBQUNNO1FBQUtDLFdBQVU7a0JBQ2QsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDRTtvQkFBR0YsV0FBVTs4QkFBMkM7Ozs7Ozs4QkFHekQsOERBQUNSLHVGQUFpQkE7b0JBQ2hCVyxjQUFjTDtvQkFDZE0sVUFBVVA7Ozs7OztnQkFFWEQsb0NBQ0MsOERBQUNLO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQUdGLFdBQVU7c0NBQXlCLEdBQXFDSixPQUFsQ0Esb0JBQW9CUyxRQUFRLEVBQUMsT0FBOEIsT0FBekJULG9CQUFvQlUsSUFBSTs7Ozs7O3NDQUNwRyw4REFBQ2YseUVBQVVBOzRCQUFDZ0IsTUFBTVgsb0JBQW9CWSxNQUFNOzs7Ozs7c0NBQzVDLDhEQUFDQzs0QkFBS1QsV0FBVTtzQ0FDYkosb0JBQW9CYyxXQUFXOzs7Ozs7Ozs7OztnQ0FHbEM7Ozs7Ozs7Ozs7OztBQUlaO0dBekJNZjtLQUFBQTtBQTJCTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvaW5zdHJ1Y3Rpb25zL3BhZ2UudHN4PzA2N2IiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IEJpdERpc3BsYXkgfSBmcm9tIFwiQC9jb21wb25lbnRzL2JpdERpc3BsYXkvYml0RGlzcGxheVwiO1xuaW1wb3J0IEluc3RydWN0aW9uU2VhcmNoIGZyb20gXCJAL2NvbXBvbmVudHMvSW5zdHJ1Y3Rpb25TZWFyY2gvaW5zdHJ1Y3Rpb25TZWFyY2hcIjtcbmltcG9ydCB7IGluc3RydWN0aW9uc01vY2sgfSBmcm9tIFwiQC9maXh0dXJlcy9pbnN0cnVjdGlvbnNNb2NrXCI7XG5pbXBvcnQgeyBJbnN0cnVjdGlvbiB9IGZyb20gXCJAL21vZGVscy9JbnN0cnVjdGlvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSW5zdHJ1Y3Rpb25zUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkSW5zdHJ1Y3Rpb24sIHNldFNlbGVjdGVkSW5zdHJ1Y3Rpb25dID0gdXNlU3RhdGU8SW5zdHJ1Y3Rpb24+KCk7XG4gIGNvbnN0IGRhdGEgPSBpbnN0cnVjdGlvbnNNb2NrO1xuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggaC1mdWxsIHctZnVsbCBmbGV4LWNvbCBnYXAtNiBvdmVyZmxvdy1jbGlwIGJnLXdoaXRlIHAtMTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgZmxleC1jb2wgZ2FwLTRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQteGwgZm9udC1ib2xkIHRleHQtYmxhY2tcIj5cbiAgICAgICAgICBEb2N1bWVudEFSTVxuICAgICAgICA8L2gxPlxuICAgICAgICA8SW5zdHJ1Y3Rpb25TZWFyY2hcbiAgICAgICAgICBpbnN0cnVjdGlvbnM9e2RhdGF9XG4gICAgICAgICAgb25TZWFyY2g9e3NldFNlbGVjdGVkSW5zdHJ1Y3Rpb259XG4gICAgICAgIC8+XG4gICAgICAgIHtzZWxlY3RlZEluc3RydWN0aW9uID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtM1wiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtYm9sZFwiPntgJHtzZWxlY3RlZEluc3RydWN0aW9uLm1uZW1vbmljfSAtICR7c2VsZWN0ZWRJbnN0cnVjdGlvbi5uYW1lfWB9PC9oMT5cbiAgICAgICAgICAgIDxCaXREaXNwbGF5IGNvZGU9e3NlbGVjdGVkSW5zdHJ1Y3Rpb24ub3Bjb2RlfSAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiPlxuICAgICAgICAgICAgICB7c2VsZWN0ZWRJbnN0cnVjdGlvbi5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnN0cnVjdGlvbnNQYWdlO1xuIl0sIm5hbWVzIjpbIkJpdERpc3BsYXkiLCJJbnN0cnVjdGlvblNlYXJjaCIsImluc3RydWN0aW9uc01vY2siLCJ1c2VTdGF0ZSIsIkluc3RydWN0aW9uc1BhZ2UiLCJzZWxlY3RlZEluc3RydWN0aW9uIiwic2V0U2VsZWN0ZWRJbnN0cnVjdGlvbiIsImRhdGEiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJpbnN0cnVjdGlvbnMiLCJvblNlYXJjaCIsIm1uZW1vbmljIiwibmFtZSIsImNvZGUiLCJvcGNvZGUiLCJzcGFuIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/instructions/page.tsx\n"));

/***/ })

});