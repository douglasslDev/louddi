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

/***/ "(app-pages-browser)/./src/components/Carousel/carousel.tsx":
/*!**********************************************!*\
  !*** ./src/components/Carousel/carousel.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_slideshow_image_dist_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slideshow-image/dist/styles.css */ \"(app-pages-browser)/./node_modules/react-slideshow-image/dist/styles.css\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"(app-pages-browser)/./src/components/Carousel/styles.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-material-ui-carousel */ \"(app-pages-browser)/./node_modules/react-material-ui-carousel/dist/index.js\");\n/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nfunction SlideShow() {\n    const images = [\n        \"/images/1.png\",\n        \"/images/background7.png\",\n        \"/images/2.png\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_4___default()), {\n            animation: \"slide\",\n            navButtonsAlwaysVisible: true,\n            fullHeightHover: false,\n            navButtonsProps: {\n                style: {\n                    backgroundColor: \"cornflowerblue\",\n                    borderRadius: 0\n                }\n            },\n            children: images.map((each, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.ImagesContainer, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Images, {\n                        src: each,\n                        alt: \"programacao\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\louddi\\\\src\\\\components\\\\Carousel\\\\carousel.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, this)\n                }, index, false, {\n                    fileName: \"C:\\\\louddi\\\\src\\\\components\\\\Carousel\\\\carousel.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\louddi\\\\src\\\\components\\\\Carousel\\\\carousel.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\louddi\\\\src\\\\components\\\\Carousel\\\\carousel.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = SlideShow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SlideShow);\nvar _c;\n$RefreshReg$(_c, \"SlideShow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Nhcm91c2VsL2Nhcm91c2VsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDK0M7QUFFWjtBQUdUO0FBQ3dCO0FBRWxELFNBQVNHO0lBQ1AsTUFBTUMsU0FBUztRQUFDO1FBQWlCO1FBQTJCO0tBQWdCO0lBRTVFLHFCQUNFLDhEQUFDSixzREFBd0I7a0JBQ3ZCLDRFQUFDRSxtRUFBUUE7WUFDVkksV0FBVTtZQUNYQyx1QkFBdUI7WUFDdkJDLGlCQUFpQjtZQUNqQkMsaUJBQWlCO2dCQUNiQyxPQUFPO29CQUNIQyxpQkFBaUI7b0JBQ2pCQyxjQUFjO2dCQUNsQjtZQUNKO3NCQUVLUixPQUFPUyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2pCLDhEQUFDZixvREFBc0I7OEJBQ3JCLDRFQUFDQSwyQ0FBYTt3QkFBQ2tCLEtBQUtKO3dCQUFNSyxLQUFJOzs7Ozs7bUJBREhKOzs7Ozs7Ozs7Ozs7Ozs7QUFPdkM7S0F4QlNaO0FBMEJULCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Nhcm91c2VsL2Nhcm91c2VsLnRzeD82OTI1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgXCJyZWFjdC1zbGlkZXNob3ctaW1hZ2UvZGlzdC9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSBcIi4vc3R5bGVzXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1tYXRlcmlhbC11aS1jYXJvdXNlbFwiO1xyXG5cclxuZnVuY3Rpb24gU2xpZGVTaG93KCkge1xyXG4gIGNvbnN0IGltYWdlcyA9IFtcIi9pbWFnZXMvMS5wbmdcIiwgXCIvaW1hZ2VzL2JhY2tncm91bmQ3LnBuZ1wiLCBcIi9pbWFnZXMvMi5wbmdcIl07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkLkNhcm91c2VsQ29udGFpbmVyPlxyXG4gICAgICA8Q2Fyb3VzZWwgXHJcbiAgICAgYW5pbWF0aW9uPVwic2xpZGVcIlxyXG4gICAgbmF2QnV0dG9uc0Fsd2F5c1Zpc2libGVcclxuICAgIGZ1bGxIZWlnaHRIb3Zlcj17ZmFsc2V9ICAgICAvLyBXZSB3YW50IHRoZSBuYXYgYnV0dG9ucyB3cmFwcGVyIHRvIG9ubHkgYmUgYXMgYmlnIGFzIHRoZSBidXR0b24gZWxlbWVudCBpc1xyXG4gICAgbmF2QnV0dG9uc1Byb3BzPXt7ICAgICAgICAgIC8vIENoYW5nZSB0aGUgY29sb3JzIGFuZCByYWRpdXMgb2YgdGhlIGFjdHVhbCBidXR0b25zLiBUSElTIFNUWUxFUyBCT1RIIEJVVFRPTlNcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjb3JuZmxvd2VyYmx1ZScsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMFxyXG4gICAgICAgIH1cclxuICAgIH19IFxyXG4gICAgID5cclxuICAgICAgICB7aW1hZ2VzLm1hcCgoZWFjaCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxTdHlsZWQuSW1hZ2VzQ29udGFpbmVyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8U3R5bGVkLkltYWdlcyBzcmM9e2VhY2h9IGFsdD1cInByb2dyYW1hY2FvXCIgLz5cclxuICAgICAgICAgIDwvU3R5bGVkLkltYWdlc0NvbnRhaW5lcj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9DYXJvdXNlbD5cclxuICAgIDwvU3R5bGVkLkNhcm91c2VsQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlU2hvdztcclxuIl0sIm5hbWVzIjpbIlN0eWxlZCIsIlJlYWN0IiwiQ2Fyb3VzZWwiLCJTbGlkZVNob3ciLCJpbWFnZXMiLCJDYXJvdXNlbENvbnRhaW5lciIsImFuaW1hdGlvbiIsIm5hdkJ1dHRvbnNBbHdheXNWaXNpYmxlIiwiZnVsbEhlaWdodEhvdmVyIiwibmF2QnV0dG9uc1Byb3BzIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJtYXAiLCJlYWNoIiwiaW5kZXgiLCJJbWFnZXNDb250YWluZXIiLCJJbWFnZXMiLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Carousel/carousel.tsx\n"));

/***/ })

});