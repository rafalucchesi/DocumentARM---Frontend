"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/InstructionSearch/instructionSearch.tsx":
/*!****************************************************************!*\
  !*** ./src/components/InstructionSearch/instructionSearch.tsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst InstructionSearch = (param)=>{\n    let { instructions, onSearch } = param;\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [suggestions, setSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleChange = (e)=>{\n        var _e_target;\n        const value = (_e_target = e.target) === null || _e_target === void 0 ? void 0 : _e_target.value;\n        setQuery(value);\n        if (value.length > 0) {\n            const filteredSuggestions = instructions.filter((instruction)=>instruction.code.toLowerCase().includes(value.toLowerCase()) || instruction.name.toLowerCase().includes(value.toLowerCase()));\n            setSuggestions(filteredSuggestions);\n        } else {\n            setSuggestions([]);\n        }\n    };\n    const handleSuggestionClick = (suggestion)=>{\n        setQuery(suggestion.code);\n        setSuggestions([]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: query,\n                onChange: handleChange,\n                placeholder: \"Search by code or name\",\n                className: \"w-full rounded border border-gray-300 p-2 text-black\"\n            }, void 0, false, {\n                fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/components/InstructionSearch/instructionSearch.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            suggestions.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"absolute mt-1 max-h-40 w-full overflow-y-auto rounded border border-gray-300 bg-white text-black\",\n                children: suggestions.map((suggestion, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: ()=>handleSuggestionClick(suggestion),\n                        className: \"cursor-pointer p-2 hover:bg-gray-100\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: suggestion.code\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/components/InstructionSearch/instructionSearch.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, undefined),\n                            \" - \",\n                            suggestion.name\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/components/InstructionSearch/instructionSearch.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/components/InstructionSearch/instructionSearch.tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/components/InstructionSearch/instructionSearch.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(InstructionSearch, \"rBqQlR3nl00PGZgRxLQ4GZUx2qg=\");\n_c = InstructionSearch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InstructionSearch);\nvar _c;\n$RefreshReg$(_c, \"InstructionSearch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0luc3RydWN0aW9uU2VhcmNoL2luc3RydWN0aW9uU2VhcmNoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDOEM7QUFPOUMsTUFBTUMsb0JBQW9CO1FBQUMsRUFDekJDLFlBQVksRUFDWkMsUUFBUSxFQUNlOztJQUN2QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFnQixFQUFFO0lBRWhFLE1BQU1RLGVBQWUsQ0FBQ0M7WUFDTkE7UUFBZCxNQUFNQyxTQUFRRCxZQUFBQSxFQUFFRSxNQUFNLGNBQVJGLGdDQUFBQSxVQUFVQyxLQUFLO1FBQzdCTCxTQUFTSztRQUVULElBQUlBLE1BQU1FLE1BQU0sR0FBRyxHQUFHO1lBQ3BCLE1BQU1DLHNCQUFzQlgsYUFBYVksTUFBTSxDQUM3QyxDQUFDQyxjQUNDQSxZQUFZQyxJQUFJLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDUixNQUFNTyxXQUFXLE9BQ3pERixZQUFZSSxJQUFJLENBQUNGLFdBQVcsR0FBR0MsUUFBUSxDQUFDUixNQUFNTyxXQUFXO1lBRTdEVixlQUFlTTtRQUNqQixPQUFPO1lBQ0xOLGVBQWUsRUFBRTtRQUNuQjtJQUNGO0lBRUEsTUFBTWEsd0JBQXdCLENBQUNDO1FBQzdCaEIsU0FBU2dCLFdBQVdMLElBQUk7UUFDeEJULGVBQWUsRUFBRTtJQUNuQjtJQUVBLHFCQUNFLDhEQUFDZTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xmLE9BQU9OO2dCQUNQc0IsVUFBVWxCO2dCQUNWbUIsYUFBWTtnQkFDWkosV0FBVTs7Ozs7O1lBRVhqQixZQUFZTSxNQUFNLEdBQUcsbUJBQ3BCLDhEQUFDZ0I7Z0JBQUdMLFdBQVU7MEJBQ1hqQixZQUFZdUIsR0FBRyxDQUFDLENBQUNSLFlBQVlTLHNCQUM1Qiw4REFBQ0M7d0JBRUNDLFNBQVMsSUFBTVosc0JBQXNCQzt3QkFDckNFLFdBQVU7OzBDQUVWLDhEQUFDVTswQ0FBUVosV0FBV0wsSUFBSTs7Ozs7OzRCQUFVOzRCQUFJSyxXQUFXRixJQUFJOzt1QkFKaERXOzs7Ozs7Ozs7Ozs7Ozs7O0FBV25CO0dBcERNN0I7S0FBQUE7QUFzRE4sK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9JbnN0cnVjdGlvblNlYXJjaC9pbnN0cnVjdGlvblNlYXJjaC50c3g/MGMyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnN0cnVjdGlvbiB9IGZyb20gXCJAL21vZGVscy9JbnN0cnVjdGlvblwiO1xuaW1wb3J0IHsgQ2hhbmdlRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBJbnN0cnVjdGlvblNlYXJjaFByb3BzIHtcbiAgaW5zdHJ1Y3Rpb25zOiBJbnN0cnVjdGlvbltdO1xuICBvblNlYXJjaDogKGluc3RydWN0aW9uOiBJbnN0cnVjdGlvbiB8IHVuZGVmaW5lZCkgPT4gdm9pZDtcbn1cblxuY29uc3QgSW5zdHJ1Y3Rpb25TZWFyY2ggPSAoe1xuICBpbnN0cnVjdGlvbnMsXG4gIG9uU2VhcmNoLFxufTogSW5zdHJ1Y3Rpb25TZWFyY2hQcm9wcykgPT4ge1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc3VnZ2VzdGlvbnMsIHNldFN1Z2dlc3Rpb25zXSA9IHVzZVN0YXRlPEluc3RydWN0aW9uW10+KFtdKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0Py52YWx1ZTtcbiAgICBzZXRRdWVyeSh2YWx1ZSk7XG5cbiAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlsdGVyZWRTdWdnZXN0aW9ucyA9IGluc3RydWN0aW9ucy5maWx0ZXIoXG4gICAgICAgIChpbnN0cnVjdGlvbikgPT5cbiAgICAgICAgICBpbnN0cnVjdGlvbi5jb2RlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgICBpbnN0cnVjdGlvbi5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSksXG4gICAgICApO1xuICAgICAgc2V0U3VnZ2VzdGlvbnMoZmlsdGVyZWRTdWdnZXN0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN1Z2dlc3Rpb25zKFtdKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VnZ2VzdGlvbkNsaWNrID0gKHN1Z2dlc3Rpb246IEluc3RydWN0aW9uKSA9PiB7XG4gICAgc2V0UXVlcnkoc3VnZ2VzdGlvbi5jb2RlKTtcbiAgICBzZXRTdWdnZXN0aW9ucyhbXSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IGNvZGUgb3IgbmFtZVwiXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcC0yIHRleHQtYmxhY2tcIlxuICAgICAgLz5cbiAgICAgIHtzdWdnZXN0aW9ucy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImFic29sdXRlIG10LTEgbWF4LWgtNDAgdy1mdWxsIG92ZXJmbG93LXktYXV0byByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS0zMDAgYmctd2hpdGUgdGV4dC1ibGFja1wiPlxuICAgICAgICAgIHtzdWdnZXN0aW9ucy5tYXAoKHN1Z2dlc3Rpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3VnZ2VzdGlvbkNsaWNrKHN1Z2dlc3Rpb24pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBwLTIgaG92ZXI6YmctZ3JheS0xMDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3Ryb25nPntzdWdnZXN0aW9uLmNvZGV9PC9zdHJvbmc+IC0ge3N1Z2dlc3Rpb24ubmFtZX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5zdHJ1Y3Rpb25TZWFyY2g7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJbnN0cnVjdGlvblNlYXJjaCIsImluc3RydWN0aW9ucyIsIm9uU2VhcmNoIiwicXVlcnkiLCJzZXRRdWVyeSIsInN1Z2dlc3Rpb25zIiwic2V0U3VnZ2VzdGlvbnMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJsZW5ndGgiLCJmaWx0ZXJlZFN1Z2dlc3Rpb25zIiwiZmlsdGVyIiwiaW5zdHJ1Y3Rpb24iLCJjb2RlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIm5hbWUiLCJoYW5kbGVTdWdnZXN0aW9uQ2xpY2siLCJzdWdnZXN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInVsIiwibWFwIiwiaW5kZXgiLCJsaSIsIm9uQ2xpY2siLCJzdHJvbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/InstructionSearch/instructionSearch.tsx\n"));

/***/ })

});