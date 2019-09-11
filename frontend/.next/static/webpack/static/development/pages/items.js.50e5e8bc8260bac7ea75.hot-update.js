webpackHotUpdate("static/development/pages/items.js",{

/***/ "./components/DeleteItem.jsx":
/*!***********************************!*\
  !*** ./components/DeleteItem.jsx ***!
  \***********************************/
/*! exports provided: DELETE_ITEM_MUTATION, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ITEM_MUTATION", function() { return DELETE_ITEM_MUTATION; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Items */ "./components/Items.jsx");
var _jsxFileName = "/Users/pklochkov/Webtime/fullstack-qraphql-webshop/frontend/components/DeleteItem.jsx";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation DELETE_ITEM_MUTATION($id: ID!) {\n    deleteItem(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var DELETE_ITEM_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var DeleteItem = function DeleteItem(_ref) {
  var children = _ref.children,
      id = _ref.id;

  var update = function update(cache, payload) {
    // Manually update the cache on the client, so it matches the server
    // 1. Read the cache for the items we want
    var data = cache.readQuery({
      query: _Items__WEBPACK_IMPORTED_MODULE_3__["ALL_ITEMS_QUERY"]
    });
    console.log('DeleteItem cache', data, payload); // 2. Filter the deleted item oout of the page

    data.items = data.items.filter(function (item) {
      return item.id !== payload.data;
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
    mutation: DELETE_ITEM_MUTATION,
    variables: {
      id: id
    },
    update: update,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, function (deleteItem, _ref2) {
    var error = _ref2.error;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: function onClick() {
        if (confirm('Are you sure that you want to delete this item?')) {
          deleteItem();
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, children);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DeleteItem);

/***/ })

})
//# sourceMappingURL=items.js.50e5e8bc8260bac7ea75.hot-update.js.map