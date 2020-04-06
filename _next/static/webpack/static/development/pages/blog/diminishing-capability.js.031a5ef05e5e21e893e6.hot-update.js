webpackHotUpdate("static/development/pages/blog/diminishing-capability.js",{

/***/ "./src/shared/components/DateBlock/index.js":
false,

/***/ "./src/shared/components/Page/Blog.js":
/*!********************************************!*\
  !*** ./src/shared/components/Page/Blog.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! disqus-react */ "./node_modules/disqus-react/lib/index.js");
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(disqus_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/shared/components/Page/index.js");
/* harmony import */ var _components_PostedOn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PostedOn */ "./src/shared/components/Page/components/PostedOn/index.js");
var _jsxFileName = "/var/projects/oss/sushantdhiman.com/src/shared/components/Page/Blog.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function BlogPage(_ref) {
  var children = _ref.children,
      date = _ref.date,
      title = _ref.title;
  return __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_components_PostedOn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    date: date,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), children, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx(disqus_react__WEBPACK_IMPORTED_MODULE_1__["DiscussionEmbed"], {
    shortname: "sushantdhiman-github-io",
    config: {
      title: title
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/shared/components/Page/components/PostedOn/index.js":
/*!*****************************************************************!*\
  !*** ./src/shared/components/Page/components/PostedOn/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostedOn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/projects/oss/sushantdhiman.com/src/shared/components/Page/components/PostedOn/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function PostedOn(_ref) {
  var date = _ref.date;
  return __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: "badge badge-info mr-2 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "Posted on "), __jsx("span", {
    className: "text-success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, new Date(date).toDateString()));
}

/***/ })

})
//# sourceMappingURL=diminishing-capability.js.031a5ef05e5e21e893e6.hot-update.js.map