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

/***/ "(app-pages-browser)/./src/components/InstructionSearch/instructionSearch.tsx":
/*!****************************************************************!*\
  !*** ./src/components/InstructionSearch/instructionSearch.tsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst InstructionSearch = (param)=>{\n    let { instructions, onSearch } = param;\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [suggestions, setSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleChange = (e)=>{\n        var _e_target;\n        const value = (_e_target = e.target) === null || _e_target === void 0 ? void 0 : _e_target.value;\n        setQuery(value);\n        if (value.length > 0) {\n            const filteredSuggestions = instructions.filter((instruction)=>instruction.mnemonic.toLowerCase().includes(value.toLowerCase()) || instruction.name.toLowerCase().includes(value.toLowerCase()));\n            setSuggestions(filteredSuggestions);\n        } else {\n            setSuggestions([]);\n        }\n    };\n    const handleSuggestionClick = (suggestion)=>{\n        setQuery(suggestion.mnemonic);\n        setSuggestions([]);\n    };\n    const handleSearchClick = ()=>{\n        const selected = instructions.find((instruction)=>instruction.mnemonic.toLowerCase() === query.toLowerCase() || instruction.name.toLowerCase() === query.toLowerCase());\n        onSearch(selected);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: query,\n                onChange: handleChange,\n                placeholder: \"Search by instruction code or name\",\n                className: \"max-w-[60%] self-center rounded border border-gray-300 p-2 pr-10 text-black\"\n            }, void 0, false, {\n                fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/components/InstructionSearch/instructionSearch.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSearchClick,\n                className: \"absolute right-1 top-1/2 -translate-y-1/2 transform rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600\",\n                children: \"\\uD83D\\uDD0D\"\n            }, void 0, false, {\n                fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/components/InstructionSearch/instructionSearch.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            suggestions.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"absolute mt-1 max-h-40 w-full overflow-y-auto rounded border border-gray-300 bg-white text-black\",\n                children: suggestions.map((suggestion, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: ()=>handleSuggestionClick(suggestion),\n                        className: \"cursor-pointer p-2 hover:bg-gray-100\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: suggestion.mnemonic\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/components/InstructionSearch/instructionSearch.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, undefined),\n                            \" - \",\n                            suggestion.name\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/components/InstructionSearch/instructionSearch.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/components/InstructionSearch/instructionSearch.tsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafaellucchesi/Documents/labproc/frontend/src/components/InstructionSearch/instructionSearch.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(InstructionSearch, \"rBqQlR3nl00PGZgRxLQ4GZUx2qg=\");\n_c = InstructionSearch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InstructionSearch);\nvar _c;\n$RefreshReg$(_c, \"InstructionSearch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0luc3RydWN0aW9uU2VhcmNoL2luc3RydWN0aW9uU2VhcmNoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDOEM7QUFPOUMsTUFBTUMsb0JBQW9CO1FBQUMsRUFDekJDLFlBQVksRUFDWkMsUUFBUSxFQUNlOztJQUN2QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFnQixFQUFFO0lBRWhFLE1BQU1RLGVBQWUsQ0FBQ0M7WUFDTkE7UUFBZCxNQUFNQyxTQUFRRCxZQUFBQSxFQUFFRSxNQUFNLGNBQVJGLGdDQUFBQSxVQUFVQyxLQUFLO1FBQzdCTCxTQUFTSztRQUVULElBQUlBLE1BQU1FLE1BQU0sR0FBRyxHQUFHO1lBQ3BCLE1BQU1DLHNCQUFzQlgsYUFBYVksTUFBTSxDQUM3QyxDQUFDQyxjQUNDQSxZQUFZQyxRQUFRLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDUixNQUFNTyxXQUFXLE9BQzdERixZQUFZSSxJQUFJLENBQUNGLFdBQVcsR0FBR0MsUUFBUSxDQUFDUixNQUFNTyxXQUFXO1lBRTdEVixlQUFlTTtRQUNqQixPQUFPO1lBQ0xOLGVBQWUsRUFBRTtRQUNuQjtJQUNGO0lBRUEsTUFBTWEsd0JBQXdCLENBQUNDO1FBQzdCaEIsU0FBU2dCLFdBQVdMLFFBQVE7UUFDNUJULGVBQWUsRUFBRTtJQUNuQjtJQUVBLE1BQU1lLG9CQUFvQjtRQUN4QixNQUFNQyxXQUFXckIsYUFBYXNCLElBQUksQ0FDaEMsQ0FBQ1QsY0FDQ0EsWUFBWUMsUUFBUSxDQUFDQyxXQUFXLE9BQU9iLE1BQU1hLFdBQVcsTUFDeERGLFlBQVlJLElBQUksQ0FBQ0YsV0FBVyxPQUFPYixNQUFNYSxXQUFXO1FBRXhEZCxTQUFTb0I7SUFDWDtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xsQixPQUFPTjtnQkFDUHlCLFVBQVVyQjtnQkFDVnNCLGFBQVk7Z0JBQ1pKLFdBQVU7Ozs7OzswQkFFWiw4REFBQ0s7Z0JBQ0NDLFNBQVNWO2dCQUNUSSxXQUFVOzBCQUNYOzs7Ozs7WUFHQXBCLFlBQVlNLE1BQU0sR0FBRyxtQkFDcEIsOERBQUNxQjtnQkFBR1AsV0FBVTswQkFDWHBCLFlBQVk0QixHQUFHLENBQUMsQ0FBQ2IsWUFBWWMsc0JBQzVCLDhEQUFDQzt3QkFFQ0osU0FBUyxJQUFNWixzQkFBc0JDO3dCQUNyQ0ssV0FBVTs7MENBRVYsOERBQUNXOzBDQUFRaEIsV0FBV0wsUUFBUTs7Ozs7OzRCQUFVOzRCQUFJSyxXQUFXRixJQUFJOzt1QkFKcERnQjs7Ozs7Ozs7Ozs7Ozs7OztBQVduQjtHQW5FTWxDO0tBQUFBO0FBcUVOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW5zdHJ1Y3Rpb25TZWFyY2gvaW5zdHJ1Y3Rpb25TZWFyY2gudHN4PzBjMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5zdHJ1Y3Rpb24gfSBmcm9tIFwiQC9tb2RlbHMvSW5zdHJ1Y3Rpb25cIjtcbmltcG9ydCB7IENoYW5nZUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgSW5zdHJ1Y3Rpb25TZWFyY2hQcm9wcyB7XG4gIGluc3RydWN0aW9uczogSW5zdHJ1Y3Rpb25bXTtcbiAgb25TZWFyY2g6IChpbnN0cnVjdGlvbjogSW5zdHJ1Y3Rpb24gfCB1bmRlZmluZWQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IEluc3RydWN0aW9uU2VhcmNoID0gKHtcbiAgaW5zdHJ1Y3Rpb25zLFxuICBvblNlYXJjaCxcbn06IEluc3RydWN0aW9uU2VhcmNoUHJvcHMpID0+IHtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3N1Z2dlc3Rpb25zLCBzZXRTdWdnZXN0aW9uc10gPSB1c2VTdGF0ZTxJbnN0cnVjdGlvbltdPihbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldD8udmFsdWU7XG4gICAgc2V0UXVlcnkodmFsdWUpO1xuXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkU3VnZ2VzdGlvbnMgPSBpbnN0cnVjdGlvbnMuZmlsdGVyKFxuICAgICAgICAoaW5zdHJ1Y3Rpb24pID0+XG4gICAgICAgICAgaW5zdHJ1Y3Rpb24ubW5lbW9uaWMudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgIGluc3RydWN0aW9uLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZS50b0xvd2VyQ2FzZSgpKSxcbiAgICAgICk7XG4gICAgICBzZXRTdWdnZXN0aW9ucyhmaWx0ZXJlZFN1Z2dlc3Rpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3VnZ2VzdGlvbnMoW10pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWdnZXN0aW9uQ2xpY2sgPSAoc3VnZ2VzdGlvbjogSW5zdHJ1Y3Rpb24pID0+IHtcbiAgICBzZXRRdWVyeShzdWdnZXN0aW9uLm1uZW1vbmljKTtcbiAgICBzZXRTdWdnZXN0aW9ucyhbXSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBpbnN0cnVjdGlvbnMuZmluZChcbiAgICAgIChpbnN0cnVjdGlvbikgPT5cbiAgICAgICAgaW5zdHJ1Y3Rpb24ubW5lbW9uaWMudG9Mb3dlckNhc2UoKSA9PT0gcXVlcnkudG9Mb3dlckNhc2UoKSB8fFxuICAgICAgICBpbnN0cnVjdGlvbi5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IHF1ZXJ5LnRvTG93ZXJDYXNlKCksXG4gICAgKTtcbiAgICBvblNlYXJjaChzZWxlY3RlZCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IGluc3RydWN0aW9uIGNvZGUgb3IgbmFtZVwiXG4gICAgICAgIGNsYXNzTmFtZT1cIm1heC13LVs2MCVdIHNlbGYtY2VudGVyIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTIgcHItMTAgdGV4dC1ibGFja1wiXG4gICAgICAvPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWFyY2hDbGlja31cbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMSB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzIgdHJhbnNmb3JtIHJvdW5kZWQgYmctYmx1ZS01MDAgcHgtNCBweS0yIHRleHQtd2hpdGUgaG92ZXI6YmctYmx1ZS02MDBcIlxuICAgICAgPlxuICAgICAgICDwn5SNXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtzdWdnZXN0aW9ucy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImFic29sdXRlIG10LTEgbWF4LWgtNDAgdy1mdWxsIG92ZXJmbG93LXktYXV0byByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS0zMDAgYmctd2hpdGUgdGV4dC1ibGFja1wiPlxuICAgICAgICAgIHtzdWdnZXN0aW9ucy5tYXAoKHN1Z2dlc3Rpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3VnZ2VzdGlvbkNsaWNrKHN1Z2dlc3Rpb24pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBwLTIgaG92ZXI6YmctZ3JheS0xMDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3Ryb25nPntzdWdnZXN0aW9uLm1uZW1vbmljfTwvc3Ryb25nPiAtIHtzdWdnZXN0aW9uLm5hbWV9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RydWN0aW9uU2VhcmNoO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW5zdHJ1Y3Rpb25TZWFyY2giLCJpbnN0cnVjdGlvbnMiLCJvblNlYXJjaCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJzdWdnZXN0aW9ucyIsInNldFN1Z2dlc3Rpb25zIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwibGVuZ3RoIiwiZmlsdGVyZWRTdWdnZXN0aW9ucyIsImZpbHRlciIsImluc3RydWN0aW9uIiwibW5lbW9uaWMiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibmFtZSIsImhhbmRsZVN1Z2dlc3Rpb25DbGljayIsInN1Z2dlc3Rpb24iLCJoYW5kbGVTZWFyY2hDbGljayIsInNlbGVjdGVkIiwiZmluZCIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwidWwiLCJtYXAiLCJpbmRleCIsImxpIiwic3Ryb25nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/InstructionSearch/instructionSearch.tsx\n"));

/***/ })

});