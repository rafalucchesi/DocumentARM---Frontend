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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_bitDisplay_bitDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/bitDisplay/bitDisplay */ \"(app-pages-browser)/./src/components/bitDisplay/bitDisplay.tsx\");\n/* harmony import */ var _components_InstructionSearch_instructionSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/InstructionSearch/instructionSearch */ \"(app-pages-browser)/./src/components/InstructionSearch/instructionSearch.tsx\");\n/* harmony import */ var _fixtures_instructionsMock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/fixtures/instructionsMock */ \"(app-pages-browser)/./src/fixtures/instructionsMock.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst InstructionsPage = ()=>{\n    _s();\n    const [selectedInstruction, setSelectedInstruction] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const data = _fixtures_instructionsMock__WEBPACK_IMPORTED_MODULE_3__.instructionsMock;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex h-full w-full flex-col gap-6 overflow-clip bg-white p-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex w-full flex-col gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-center text-xl font-bold text-black\",\n                    children: \"DocumentARM\"\n                }, void 0, false, {\n                    fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/app/instructions/page.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InstructionSearch_instructionSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    instructions: data,\n                    onSearch: setSelectedInstruction\n                }, void 0, false, {\n                    fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/app/instructions/page.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                selectedInstruction ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col gap-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-center text-base font-bold\",\n                            children: \"\".concat(selectedInstruction.mnemonic, \" - \").concat(selectedInstruction.name)\n                        }, void 0, false, {\n                            fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/app/instructions/page.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-black\",\n                            children: selectedInstruction.description\n                        }, void 0, false, {\n                            fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/app/instructions/page.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_bitDisplay_bitDisplay__WEBPACK_IMPORTED_MODULE_1__.BitDisplay, {\n                            code: selectedInstruction.opcode\n                        }, void 0, false, {\n                            fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/app/instructions/page.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"flex flex-col gap-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: \"conditional: \".concat(selectedInstruction.bit_encoding.conditional)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/app/instructions/page.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: \"opcode: \".concat(selectedInstruction.bit_encoding.opcode)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/app/instructions/page.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: \"s flag: \".concat(selectedInstruction.bit_encoding.S_flag)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/app/instructions/page.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: \"Rn: \".concat(selectedInstruction.bit_encoding.Rn)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/app/instructions/page.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: \"Rd: \".concat(selectedInstruction.bit_encoding.Rd)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/app/instructions/page.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: \"Rd: \".concat(selectedInstruction.bit_encoding.operand2)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/app/instructions/page.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/app/instructions/page.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {}, void 0, false, {\n                            fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/app/instructions/page.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/app/instructions/page.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, undefined) : null\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/app/instructions/page.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/app/instructions/page.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(InstructionsPage, \"6QJkFr67rUutMXYTbKvD7Y3UU9k=\");\n_c = InstructionsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InstructionsPage);\nvar _c;\n$RefreshReg$(_c, \"InstructionsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaW5zdHJ1Y3Rpb25zL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVnRTtBQUNpQjtBQUNsQjtBQUU5QjtBQUVqQyxNQUFNSSxtQkFBbUI7O0lBQ3ZCLE1BQU0sQ0FBQ0MscUJBQXFCQyx1QkFBdUIsR0FBR0gsK0NBQVFBO0lBQzlELE1BQU1JLE9BQU9MLHdFQUFnQkE7SUFDN0IscUJBQ0UsOERBQUNNO1FBQUtDLFdBQVU7a0JBQ2QsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDRTtvQkFBR0YsV0FBVTs4QkFBMkM7Ozs7Ozs4QkFHekQsOERBQUNSLHVGQUFpQkE7b0JBQ2hCVyxjQUFjTDtvQkFDZE0sVUFBVVA7Ozs7OztnQkFFWEQsb0NBQ0MsOERBQUNLO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQUdGLFdBQVU7c0NBQW1DLEdBQXFDSixPQUFsQ0Esb0JBQW9CUyxRQUFRLEVBQUMsT0FBOEIsT0FBekJULG9CQUFvQlUsSUFBSTs7Ozs7O3NDQUM5Ryw4REFBQ0M7NEJBQUtQLFdBQVU7c0NBQ2JKLG9CQUFvQlksV0FBVzs7Ozs7O3NDQUVsQyw4REFBQ2pCLHlFQUFVQTs0QkFBQ2tCLE1BQU1iLG9CQUFvQmMsTUFBTTs7Ozs7O3NDQUM1Qyw4REFBQ0g7NEJBQUtQLFdBQVU7OzhDQUNkLDhEQUFDVzs4Q0FDRSxnQkFBNkQsT0FBN0NmLG9CQUFvQmdCLFlBQVksQ0FBQ0MsV0FBVzs7Ozs7OzhDQUUvRCw4REFBQ0Y7OENBQUksV0FBbUQsT0FBeENmLG9CQUFvQmdCLFlBQVksQ0FBQ0YsTUFBTTs7Ozs7OzhDQUN2RCw4REFBQ0M7OENBQUksV0FBbUQsT0FBeENmLG9CQUFvQmdCLFlBQVksQ0FBQ0UsTUFBTTs7Ozs7OzhDQUN2RCw4REFBQ0g7OENBQUksT0FBMkMsT0FBcENmLG9CQUFvQmdCLFlBQVksQ0FBQ0csRUFBRTs7Ozs7OzhDQUMvQyw4REFBQ0o7OENBQUksT0FBMkMsT0FBcENmLG9CQUFvQmdCLFlBQVksQ0FBQ0ksRUFBRTs7Ozs7OzhDQUMvQyw4REFBQ0w7OENBQUksT0FBaUQsT0FBMUNmLG9CQUFvQmdCLFlBQVksQ0FBQ0ssUUFBUTs7Ozs7Ozs7Ozs7O3NDQUV2RCw4REFBQ0M7Ozs7Ozs7Ozs7Z0NBRUQ7Ozs7Ozs7Ozs7OztBQUlaO0dBcENNdkI7S0FBQUE7QUFzQ04sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2luc3RydWN0aW9ucy9wYWdlLnRzeD8wNjdiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBCaXREaXNwbGF5IH0gZnJvbSBcIkAvY29tcG9uZW50cy9iaXREaXNwbGF5L2JpdERpc3BsYXlcIjtcbmltcG9ydCBJbnN0cnVjdGlvblNlYXJjaCBmcm9tIFwiQC9jb21wb25lbnRzL0luc3RydWN0aW9uU2VhcmNoL2luc3RydWN0aW9uU2VhcmNoXCI7XG5pbXBvcnQgeyBpbnN0cnVjdGlvbnNNb2NrIH0gZnJvbSBcIkAvZml4dHVyZXMvaW5zdHJ1Y3Rpb25zTW9ja1wiO1xuaW1wb3J0IHsgSW5zdHJ1Y3Rpb24gfSBmcm9tIFwiQC9tb2RlbHMvSW5zdHJ1Y3Rpb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEluc3RydWN0aW9uc1BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZEluc3RydWN0aW9uLCBzZXRTZWxlY3RlZEluc3RydWN0aW9uXSA9IHVzZVN0YXRlPEluc3RydWN0aW9uPigpO1xuICBjb25zdCBkYXRhID0gaW5zdHJ1Y3Rpb25zTW9jaztcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCB3LWZ1bGwgZmxleC1jb2wgZ2FwLTYgb3ZlcmZsb3ctY2xpcCBiZy13aGl0ZSBwLTEwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGZsZXgtY29sIGdhcC00XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWJsYWNrXCI+XG4gICAgICAgICAgRG9jdW1lbnRBUk1cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPEluc3RydWN0aW9uU2VhcmNoXG4gICAgICAgICAgaW5zdHJ1Y3Rpb25zPXtkYXRhfVxuICAgICAgICAgIG9uU2VhcmNoPXtzZXRTZWxlY3RlZEluc3RydWN0aW9ufVxuICAgICAgICAvPlxuICAgICAgICB7c2VsZWN0ZWRJbnN0cnVjdGlvbiA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTNcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWJhc2UgZm9udC1ib2xkXCI+e2Ake3NlbGVjdGVkSW5zdHJ1Y3Rpb24ubW5lbW9uaWN9IC0gJHtzZWxlY3RlZEluc3RydWN0aW9uLm5hbWV9YH08L2gxPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiPlxuICAgICAgICAgICAgICB7c2VsZWN0ZWRJbnN0cnVjdGlvbi5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxCaXREaXNwbGF5IGNvZGU9e3NlbGVjdGVkSW5zdHJ1Y3Rpb24ub3Bjb2RlfSAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtM1wiPlxuICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAge2Bjb25kaXRpb25hbDogJHtzZWxlY3RlZEluc3RydWN0aW9uLmJpdF9lbmNvZGluZy5jb25kaXRpb25hbH1gfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8aDM+e2BvcGNvZGU6ICR7c2VsZWN0ZWRJbnN0cnVjdGlvbi5iaXRfZW5jb2Rpbmcub3Bjb2RlfWB9PC9oMz5cbiAgICAgICAgICAgICAgPGgzPntgcyBmbGFnOiAke3NlbGVjdGVkSW5zdHJ1Y3Rpb24uYml0X2VuY29kaW5nLlNfZmxhZ31gfTwvaDM+XG4gICAgICAgICAgICAgIDxoMz57YFJuOiAke3NlbGVjdGVkSW5zdHJ1Y3Rpb24uYml0X2VuY29kaW5nLlJufWB9PC9oMz5cbiAgICAgICAgICAgICAgPGgzPntgUmQ6ICR7c2VsZWN0ZWRJbnN0cnVjdGlvbi5iaXRfZW5jb2RpbmcuUmR9YH08L2gzPlxuICAgICAgICAgICAgICA8aDM+e2BSZDogJHtzZWxlY3RlZEluc3RydWN0aW9uLmJpdF9lbmNvZGluZy5vcGVyYW5kMn1gfTwvaDM+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c2VjdGlvbj48L3NlY3Rpb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5zdHJ1Y3Rpb25zUGFnZTtcbiJdLCJuYW1lcyI6WyJCaXREaXNwbGF5IiwiSW5zdHJ1Y3Rpb25TZWFyY2giLCJpbnN0cnVjdGlvbnNNb2NrIiwidXNlU3RhdGUiLCJJbnN0cnVjdGlvbnNQYWdlIiwic2VsZWN0ZWRJbnN0cnVjdGlvbiIsInNldFNlbGVjdGVkSW5zdHJ1Y3Rpb24iLCJkYXRhIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwiaW5zdHJ1Y3Rpb25zIiwib25TZWFyY2giLCJtbmVtb25pYyIsIm5hbWUiLCJzcGFuIiwiZGVzY3JpcHRpb24iLCJjb2RlIiwib3Bjb2RlIiwiaDMiLCJiaXRfZW5jb2RpbmciLCJjb25kaXRpb25hbCIsIlNfZmxhZyIsIlJuIiwiUmQiLCJvcGVyYW5kMiIsInNlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/instructions/page.tsx\n"));

/***/ })

});