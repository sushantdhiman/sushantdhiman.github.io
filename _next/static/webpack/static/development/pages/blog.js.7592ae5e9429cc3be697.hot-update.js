webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./src/pages/blog/index.js":
/*!*********************************!*\
  !*** ./src/pages/blog/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogIndex; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/components/Page */ "./src/shared/components/Page/index.js");
var _jsxFileName = "/var/projects/oss/sushantdhiman.com/src/pages/blog/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function BlogIndex() {
  var _this = this;

  return __jsx(shared_components_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Blog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, [{
    title: "Price",
    date: "2018-06-24T00:00:00Z",
    href: "/blog/price"
  }, {
    title: "Diminishing capability",
    date: "2018-02-11T00:00:00Z",
    href: "/blog/diminishing-capability"
  }, {
    title: "Parable of Onion",
    date: "2016-05-16T00:00:00Z",
    href: "/blog/parabel-of-onion"
  }].map(function (payload) {
    return __jsx("div", {
      key: payload.title,
      className: "row align-items-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "col col-4 col-md-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: "d-none d-md-inline-block badge badge-info mr-2 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, "Posted on "), __jsx("span", {
      className: "text-success",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, new Date(payload.date).toDateString())), __jsx("div", {
      className: "col col-md-auto",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: payload.href,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 15
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }
    }, payload.title)))));
  }));
}

/***/ })

})
//# sourceMappingURL=blog.js.7592ae5e9429cc3be697.hot-update.js.map