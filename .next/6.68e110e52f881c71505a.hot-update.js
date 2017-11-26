webpackHotUpdate(6,{

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = __webpack_require__(391);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(392);

var _head2 = _interopRequireDefault(_head);

var _axios = __webpack_require__(417);

var _axios2 = _interopRequireDefault(_axios);

var _styledComponents = __webpack_require__(393);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _layout = __webpack_require__(407);

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/phachara/Desktop/Project/2017/Homework/ywc/pages/generalannounce.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n.box{\n    min-height:100vh;\n    overflow:hidden;\n    background-color:#1e262f;\n}\n.logo{\n    max-width:250px;\n}\nth,tr,td{\n    background:white;\n}\n.btn-edit{\n    background:#4ccdea;\n    color:white\n}\n'], ['\n.box{\n    min-height:100vh;\n    overflow:hidden;\n    background-color:#1e262f;\n}\n.logo{\n    max-width:250px;\n}\nth,tr,td{\n    background:white;\n}\n.btn-edit{\n    background:#4ccdea;\n    color:white\n}\n']);

(0, _styledComponents.injectGlobal)(_templateObject);

var Announce = function (_React$Component) {
  (0, _inherits3.default)(Announce, _React$Component);

  function Announce() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Announce);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Announce.__proto__ || (0, _getPrototypeOf2.default)(Announce)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      all: [],
      allMorning: [],
      allMorningProgramming: [],
      allMorningDesign: [],
      allMorningMarketing: [],
      allMorningContent: [],
      allAfternoon: [],
      allAfternoonProgramming: [],
      allAfternoonDesign: [],
      allAfternoonMarketing: [],
      allAfternoonContent: [],
      allProgramming: [],
      allDesign: [],
      allMarketing: [],
      allContent: [],
      rtData: [],
      rtCol: [{
        Header: 'Code',
        accessor: 'code'
      }, {
        Header: 'RealName',
        accessor: 'realname'
      }],
      select: [],
      search: [],
      branchNow: '',
      timeNow: ''

    }, _this.componentWillMount = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var data;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _axios2.default)({
                method: 'get',
                url: 'https://ywc15.ywc.in.th/api/interview'
              }).then(function (response) {
                return response;
              });

            case 2:
              data = _context.sent;

              _this.setState({ all: data.data });
              _this.setState({ select: data.data });

              // allmorning 
              _context.next = 7;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/morning'
              }).then(function (response) {
                return response;
              });

            case 7:
              data = _context.sent;

              _this.setState({ allMorning: data.data });

              // allmorningpg
              _context.next = 11;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/morning/pg'
              }).then(function (response) {
                return response;
              });

            case 11:
              data = _context.sent;

              _this.setState({ allMorningProgramming: data.data });

              // allmorningds
              _context.next = 15;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/morning/ds'
              }).then(function (response) {
                return response;
              });

            case 15:
              data = _context.sent;

              _this.setState({ allMorningDesign: data.data });

              // allmorningct
              _context.next = 19;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/morning/ct'
              }).then(function (response) {
                return response;
              });

            case 19:
              data = _context.sent;

              _this.setState({ allMorningContent: data.data });

              // allmorningmk
              _context.next = 23;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/morning/mk'
              }).then(function (response) {
                return response;
              });

            case 23:
              data = _context.sent;

              _this.setState({ allMorningMarketing: data.data });

              // allafternoon
              _context.next = 27;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/afternoon'
              }).then(function (response) {
                return response;
              });

            case 27:
              data = _context.sent;

              _this.setState({ allAfternoon: data.data });

              // allafternoonpg
              _context.next = 31;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/afternoon/pg'
              }).then(function (response) {
                return response;
              });

            case 31:
              data = _context.sent;

              _this.setState({ allAfternoonProgramming: data.data });

              // allafternoonmk
              _context.next = 35;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/afternoon/mk'
              }).then(function (response) {
                return response;
              });

            case 35:
              data = _context.sent;

              _this.setState({ allAfternoonMarketing: data.data });

              // allafternoonct
              _context.next = 39;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/afternoon/ct'
              }).then(function (response) {
                return response;
              });

            case 39:
              data = _context.sent;

              _this.setState({ allAfternoonContent: data.data });

              // allafternoonds
              _context.next = 43;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/afternoon/ds'
              }).then(function (response) {
                return response;
              });

            case 43:
              data = _context.sent;

              _this.setState({ allAfternoonDesign: data.data });

              // allpg
              _context.next = 47;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/programming'
              }).then(function (response) {
                return response;
              });

            case 47:
              data = _context.sent;

              _this.setState({ allProgramming: data.data });

              // allmk
              _context.next = 51;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/marketing'
              }).then(function (response) {
                return response;
              });

            case 51:
              data = _context.sent;

              _this.setState({ allMarketing: data.data });

              // allct
              _context.next = 55;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/content'
              }).then(function (response) {
                return response;
              });

            case 55:
              data = _context.sent;

              _this.setState({ allContent: data.data });

              // allds
              _context.next = 59;
              return (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3001/namelist/design'
              }).then(function (response) {
                return response;
              });

            case 59:
              data = _context.sent;

              _this.setState({ allDesign: data.data });

              console.log(_this.state);
            // END ComponentWillMount

            case 62:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.searchChange = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(e) {
        var input, msg, res;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                input = e.target.value;
                msg = input.toUpperCase();

                if (msg.length == 0) {
                  _this.setState({ select: _this.state.all });
                } else {
                  res = _this.state.all.filter(function (input) {
                    return input.firstName.indexOf(msg) > -1 || input.lastName.indexOf(msg) > -1 || input.interviewRef.indexOf(msg) > -1;
                  });

                  console.log(res);
                  _this.setState({ select: res });
                  console.log(_this.state.search);
                }

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(), _this.change = function (input) {

      if (input == 'pg') {
        _this.setState({ branchNow: 'pg' });
        _this.setState({ select: _this.state.allProgramming });
      } else if (input == 'ds') {
        _this.setState({ select: _this.state.allDesign });
        _this.setState({ branchNow: 'ds' });
      } else if (input == 'mk') {
        _this.setState({ select: _this.state.allMarketing });
        _this.setState({ branchNow: 'mk' });
      } else if (input == 'ct') {
        _this.setState({ select: _this.state.allContent });
        _this.setState({ branchNow: 'ct' });
      }
    }, _this.timeChange = function (e) {
      if (e.target.value == 'all') {
        _this.setState({ select: _this.state.all });
      } else if (e.target.value == 'morning') {

        if (_this.state.branchNow == 'pg') {
          _this.setState({ select: _this.state.allMorningProgramming });
        } else if (_this.state.branchNow == 'ds') {
          _this.setState({ select: _this.state.allMorningDesign });
        } else if (_this.state.branchNow == 'mk') {
          _this.setState({ select: _this.state.allMorningMarketing });
        } else if (_this.state.branchNow == 'ct') {
          _this.setState({ select: _this.state.allMorningContent });
        }
      } else if (e.target.value == 'afternoon') {

        if (_this.state.branchNow == 'pg') {
          _this.setState({ select: _this.state.allAfternoonProgramming });
        } else if (_this.state.branchNow == 'ds') {
          _this.setState({ select: _this.state.allAfternoonDesign });
        } else if (_this.state.branchNow == 'mk') {
          _this.setState({ select: _this.state.allAfternoonMarketing });
        } else if (_this.state.branchNow == 'ct') {
          _this.setState({ select: _this.state.allAfternoonContent });
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Announce, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      }, _react2.default.createElement('div', { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        }
      }, _react2.default.createElement('div', { className: 'row', __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }, _react2.default.createElement('div', { className: 'col', __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }, _react2.default.createElement('div', { className: 'text-center mt-4', __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }, _react2.default.createElement('img', { src: '/static/img/logo.png', className: 'logo', __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      })))), _react2.default.createElement('div', { className: 'row my-2', __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        }
      }, _react2.default.createElement('div', { className: 'col', __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      }, _react2.default.createElement('input', { type: 'text', className: 'form-control', onChange: this.searchChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }))), _react2.default.createElement('div', { className: 'row', __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      }, _react2.default.createElement('div', { className: 'col-5 mx-auto mt-4', __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }, _react2.default.createElement('select', { className: 'form-control', id: 'exampleFormControlSelect1', onChange: this.timeChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        }
      }, _react2.default.createElement('option', { value: 'all', __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        }
      }, 'All'), _react2.default.createElement('option', { value: 'morning', __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        }
      }, 'Morning'), _react2.default.createElement('option', { value: 'afternoon', __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }, 'Afternoon')))), _react2.default.createElement('div', { className: 'row my-4', __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        }
      }, _react2.default.createElement('div', { className: 'col', __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }, _react2.default.createElement('button', { className: 'btn btn-edit btn-block', onClick: function onClick() {
          return _this3.change('pg');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }, 'Programming')), _react2.default.createElement('div', { className: 'col', __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      }, _react2.default.createElement('button', { className: 'btn btn-edit btn-block', onClick: function onClick() {
          return _this3.change('ds');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        }
      }, 'Design')), _react2.default.createElement('div', { className: 'col', __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        }
      }, _react2.default.createElement('button', { className: 'btn btn-edit btn-block', onClick: function onClick() {
          return _this3.change('mk');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        }
      }, 'Marketing')), _react2.default.createElement('div', { className: 'col', __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        }
      }, _react2.default.createElement('button', { className: 'btn btn-edit btn-block', onClick: function onClick() {
          return _this3.change('ct');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        }
      }, 'Content'))), _react2.default.createElement('div', { className: 'mx-auto', __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }, _react2.default.createElement('table', { className: 'table w-100', __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }, _react2.default.createElement('thead', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }, _react2.default.createElement('tr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      }, _react2.default.createElement('th', { scope: 'col', __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }, '#'), _react2.default.createElement('th', { scope: 'col', __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        }
      }, 'Real Name'))), _react2.default.createElement('tbody', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      }, this.state.select.map(function (data, index) {
        return _react2.default.createElement('tr', { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 315
          }
        }, _react2.default.createElement('th', { scope: 'row', __source: {
            fileName: _jsxFileName,
            lineNumber: 316
          }
        }, data.interviewRef), _react2.default.createElement('td', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 317
          }
        }, data.firstName, ' ', data.lastName));
      }))))));
    }
  }]);

  return Announce;
}(_react2.default.Component);

exports.default = Announce;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2dlbmVyYWxhbm5vdW5jZS5qcyJdLCJuYW1lcyI6WyJIZWFkIiwiQXhpb3MiLCJzdHlsZWQiLCJpbmplY3RHbG9iYWwiLCJMYXlvdXQiLCJBbm5vdW5jZSIsInN0YXRlIiwiYWxsIiwiYWxsTW9ybmluZyIsImFsbE1vcm5pbmdQcm9ncmFtbWluZyIsImFsbE1vcm5pbmdEZXNpZ24iLCJhbGxNb3JuaW5nTWFya2V0aW5nIiwiYWxsTW9ybmluZ0NvbnRlbnQiLCJhbGxBZnRlcm5vb24iLCJhbGxBZnRlcm5vb25Qcm9ncmFtbWluZyIsImFsbEFmdGVybm9vbkRlc2lnbiIsImFsbEFmdGVybm9vbk1hcmtldGluZyIsImFsbEFmdGVybm9vbkNvbnRlbnQiLCJhbGxQcm9ncmFtbWluZyIsImFsbERlc2lnbiIsImFsbE1hcmtldGluZyIsImFsbENvbnRlbnQiLCJydERhdGEiLCJydENvbCIsIkhlYWRlciIsImFjY2Vzc29yIiwic2VsZWN0Iiwic2VhcmNoIiwiYnJhbmNoTm93IiwidGltZU5vdyIsImNvbXBvbmVudFdpbGxNb3VudCIsIm1ldGhvZCIsInVybCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJzZWFyY2hDaGFuZ2UiLCJlIiwiaW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1zZyIsInRvVXBwZXJDYXNlIiwibGVuZ3RoIiwicmVzIiwiZmlsdGVyIiwiZmlyc3ROYW1lIiwiaW5kZXhPZiIsImxhc3ROYW1lIiwiaW50ZXJ2aWV3UmVmIiwiY2hhbmdlIiwidGltZUNoYW5nZSIsIm1hcCIsImluZGV4IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBWTs7Ozs7Ozs7OztBQUVuQjs7SSxBQWtCTTs7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QUFESjt5QkFDSSxjQUFBLFlBQVEsV0FBUixBQUFrQiwwQkFBeUIsU0FBUyxtQkFBQTtpQkFBSSxPQUFBLEFBQUssT0FBVCxBQUFJLEFBQVk7QUFBcEU7b0JBQUE7c0JBQUE7QUFBQTtTQU5SLEFBS0ksQUFDSSxBQUVKLDRCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDSTtBQURKO3lCQUNJLGNBQUEsWUFBUSxXQUFSLEFBQWtCLDBCQUF5QixTQUFTLG1CQUFBO2lCQUFJLE9BQUEsQUFBSyxPQUFULEFBQUksQUFBWTtBQUFwRTtvQkFBQTtzQkFBQTtBQUFBO1NBVFIsQUFRSSxBQUNJLEFBRUosK0JBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNJO0FBREo7eUJBQ0ksY0FBQSxZQUFRLFdBQVIsQUFBa0IsMEJBQXlCLFNBQVMsbUJBQUE7aUJBQUksT0FBQSxBQUFLLE9BQVQsQUFBSSxBQUFZO0FBQXBFO29CQUFBO3NCQUFBO0FBQUE7U0FsQ1osQUFzQkksQUFXSSxBQUNJLEFBSUEsOEJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNJO0FBREo7eUJBQ0ksY0FBQSxXQUFPLFdBQVAsQUFBaUI7b0JBQWpCO3NCQUFBLEFBQ0k7QUFESjt5QkFDSSxjQUFBOztvQkFBQTtzQkFBQSxBQUNJO0FBREo7QUFBQSx5QkFDSSxjQUFBOztvQkFBQTtzQkFBQSxBQUNJO0FBREo7QUFBQSx5QkFDSSxjQUFBLFFBQUksT0FBSixBQUFVO29CQUFWO3NCQUFBO0FBQUE7U0FESixBQUNJLEFBQ0Esc0JBQUEsY0FBQSxRQUFJLE9BQUosQUFBVTtvQkFBVjtzQkFBQTtBQUFBO1NBSlosQUFDSSxBQUNJLEFBRUksQUFHUixnQ0FBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUVRO0FBRlI7QUFBQSxjQUVRLEFBQUssTUFBTCxBQUFXLE9BQVgsQUFBa0IsSUFBSSxVQUFBLEFBQUMsTUFBRCxBQUFNLE9BQU47K0JBQ3RCLGNBQUEsUUFBSSxLQUFKLEFBQVM7c0JBQVQ7d0JBQUEsQUFDSTtBQURKO1NBQUEsa0JBQ0ksY0FBQSxRQUFJLE9BQUosQUFBVTtzQkFBVjt3QkFBQSxBQUFpQjtBQUFqQjtnQkFESixBQUNJLEFBQXNCLEFBQ3RCLCtCQUFBLGNBQUE7O3NCQUFBO3dCQUFBLEFBQUs7QUFBTDtBQUFBLGdCQUFBLEFBQVUsV0FBWSxVQUhKLEFBQ3RCLEFBRUksQUFBMkI7QUFyRG5FLEFBQ0ksQUFDSSxBQXNDWSxBQUNJLEFBT0ksQUFFUSxBQTZDdkM7Ozs7O0VBL1VrQixnQkFBTSxBLEFBa1Y3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJnZW5lcmFsYW5ub3VuY2UuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BoYWNoYXJhL0Rlc2t0b3AvUHJvamVjdC8yMDE3L0hvbWV3b3JrL3l3YyJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/phachara/Desktop/Project/2017/Homework/ywc/pages/generalannounce.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/phachara/Desktop/Project/2017/Homework/ywc/pages/generalannounce.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/generalannounce")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi42OGUxMTBlNTJmODgxYzcxNTA1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZ2VuZXJhbGFubm91bmNlLmpzPzNkYzc0ZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkJ1xuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHN0eWxlZCAsIHsgaW5qZWN0R2xvYmFsIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuXG5pbmplY3RHbG9iYWxgXG4uYm94e1xuICAgIG1pbi1oZWlnaHQ6MTAwdmg7XG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IzFlMjYyZjtcbn1cbi5sb2dve1xuICAgIG1heC13aWR0aDoyNTBweDtcbn1cbnRoLHRyLHRke1xuICAgIGJhY2tncm91bmQ6d2hpdGU7XG59XG4uYnRuLWVkaXR7XG4gICAgYmFja2dyb3VuZDojNGNjZGVhO1xuICAgIGNvbG9yOndoaXRlXG59XG5gXG5cbmNsYXNzIEFubm91bmNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIHN0YXRlPXtcbiAgICAgICAgYWxsOltdLFxuICAgICAgICBhbGxNb3JuaW5nOltdLFxuICAgICAgICBhbGxNb3JuaW5nUHJvZ3JhbW1pbmc6W10sXG4gICAgICAgIGFsbE1vcm5pbmdEZXNpZ246W10sXG4gICAgICAgIGFsbE1vcm5pbmdNYXJrZXRpbmc6W10sXG4gICAgICAgIGFsbE1vcm5pbmdDb250ZW50OltdLFxuICAgICAgICBhbGxBZnRlcm5vb246W10sXG4gICAgICAgIGFsbEFmdGVybm9vblByb2dyYW1taW5nOltdLFxuICAgICAgICBhbGxBZnRlcm5vb25EZXNpZ246W10sXG4gICAgICAgIGFsbEFmdGVybm9vbk1hcmtldGluZzpbXSxcbiAgICAgICAgYWxsQWZ0ZXJub29uQ29udGVudDpbXSxcbiAgICAgICAgYWxsUHJvZ3JhbW1pbmc6W10sXG4gICAgICAgIGFsbERlc2lnbjpbXSxcbiAgICAgICAgYWxsTWFya2V0aW5nOltdLFxuICAgICAgICBhbGxDb250ZW50OltdLFxuICAgICAgICBydERhdGE6W10sXG4gICAgICAgIHJ0Q29sOlt7XG4gICAgICAgICAgSGVhZGVyOiAnQ29kZScsXG4gICAgICAgICAgYWNjZXNzb3I6ICdjb2RlJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgSGVhZGVyOiAnUmVhbE5hbWUnLFxuICAgICAgICAgIGFjY2Vzc29yOiAncmVhbG5hbWUnLFxuICAgICAgICB9XSxcbiAgICAgICAgc2VsZWN0OltdLFxuICAgICAgICBzZWFyY2g6W10sXG4gICAgICAgIGJyYW5jaE5vdzonJyxcbiAgICAgICAgdGltZU5vdzonJ1xuICAgICAgICBcbiAgICAgIH1cbiAgICAgIGNvbXBvbmVudFdpbGxNb3VudCA9IGFzeW5jKCkgPT57XG4gICAgICAgIC8vIGFsbFxuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IEF4aW9zKHtcbiAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICAgIHVybDogJ2h0dHBzOi8veXdjMTUueXdjLmluLnRoL2FwaS9pbnRlcnZpZXcnXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FsbDpkYXRhLmRhdGF9KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3Q6ZGF0YS5kYXRhfSlcbiAgICAgICAgXG4gICAgICAgIC8vIGFsbG1vcm5pbmcgXG4gICAgICAgIGRhdGEgPSBhd2FpdCBBeGlvcyh7XG4gICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvbmFtZWxpc3QvbW9ybmluZydcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxsTW9ybmluZzpkYXRhLmRhdGF9KVxuICAgIFxuICAgICAgICAvLyBhbGxtb3JuaW5ncGdcbiAgICAgICAgZGF0YSA9IGF3YWl0IEF4aW9zKHtcbiAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9uYW1lbGlzdC9tb3JuaW5nL3BnJ1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHthbGxNb3JuaW5nUHJvZ3JhbW1pbmc6ZGF0YS5kYXRhfSlcbiAgICBcbiAgICAgICAgLy8gYWxsbW9ybmluZ2RzXG4gICAgICAgIGRhdGEgPSBhd2FpdCBBeGlvcyh7XG4gICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvbmFtZWxpc3QvbW9ybmluZy9kcydcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxsTW9ybmluZ0Rlc2lnbjpkYXRhLmRhdGF9KVxuICAgIFxuICAgICAgICAvLyBhbGxtb3JuaW5nY3RcbiAgICAgICAgZGF0YSA9IGF3YWl0IEF4aW9zKHtcbiAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9uYW1lbGlzdC9tb3JuaW5nL2N0J1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHthbGxNb3JuaW5nQ29udGVudDpkYXRhLmRhdGF9KVxuICAgIFxuICAgICAgICAvLyBhbGxtb3JuaW5nbWtcbiAgICAgICAgZGF0YSA9IGF3YWl0IEF4aW9zKHtcbiAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9uYW1lbGlzdC9tb3JuaW5nL21rJ1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHthbGxNb3JuaW5nTWFya2V0aW5nOmRhdGEuZGF0YX0pXG4gICAgXG4gICAgICAgIC8vIGFsbGFmdGVybm9vblxuICAgICAgICBkYXRhID0gYXdhaXQgQXhpb3Moe1xuICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAxL25hbWVsaXN0L2FmdGVybm9vbidcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxsQWZ0ZXJub29uOmRhdGEuZGF0YX0pXG4gICAgICAgIFxuICAgICAgICAvLyBhbGxhZnRlcm5vb25wZ1xuICAgICAgICBkYXRhID0gYXdhaXQgQXhpb3Moe1xuICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAxL25hbWVsaXN0L2FmdGVybm9vbi9wZydcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxsQWZ0ZXJub29uUHJvZ3JhbW1pbmc6ZGF0YS5kYXRhfSlcbiAgICBcbiAgICAgICAgLy8gYWxsYWZ0ZXJub29ubWtcbiAgICAgICAgZGF0YSA9IGF3YWl0IEF4aW9zKHtcbiAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9uYW1lbGlzdC9hZnRlcm5vb24vbWsnXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FsbEFmdGVybm9vbk1hcmtldGluZzpkYXRhLmRhdGF9KVxuICAgIFxuICAgICAgICAvLyBhbGxhZnRlcm5vb25jdFxuICAgICAgICBkYXRhID0gYXdhaXQgQXhpb3Moe1xuICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAxL25hbWVsaXN0L2FmdGVybm9vbi9jdCdcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxsQWZ0ZXJub29uQ29udGVudDpkYXRhLmRhdGF9KVxuICAgIFxuICAgICAgICAvLyBhbGxhZnRlcm5vb25kc1xuICAgICAgICBkYXRhID0gYXdhaXQgQXhpb3Moe1xuICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAxL25hbWVsaXN0L2FmdGVybm9vbi9kcydcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxsQWZ0ZXJub29uRGVzaWduOmRhdGEuZGF0YX0pXG4gICAgXG4gICAgICAgIC8vIGFsbHBnXG4gICAgICAgIGRhdGEgPSBhd2FpdCBBeGlvcyh7XG4gICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvbmFtZWxpc3QvcHJvZ3JhbW1pbmcnXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FsbFByb2dyYW1taW5nOmRhdGEuZGF0YX0pXG4gICAgICAgIFxuICAgICAgICAvLyBhbGxta1xuICAgICAgICBkYXRhID0gYXdhaXQgQXhpb3Moe1xuICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAxL25hbWVsaXN0L21hcmtldGluZydcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxsTWFya2V0aW5nOmRhdGEuZGF0YX0pXG4gICAgXG4gICAgICAgIC8vIGFsbGN0XG4gICAgICAgIGRhdGEgPSBhd2FpdCBBeGlvcyh7XG4gICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvbmFtZWxpc3QvY29udGVudCdcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxsQ29udGVudDpkYXRhLmRhdGF9KVxuICAgIFxuICAgICAgICAvLyBhbGxkc1xuICAgICAgICBkYXRhID0gYXdhaXQgQXhpb3Moe1xuICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAxL25hbWVsaXN0L2Rlc2lnbidcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxsRGVzaWduOmRhdGEuZGF0YX0pXG4gICAgXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gICAgICAgIC8vIEVORCBDb21wb25lbnRXaWxsTW91bnRcbiAgICAgIH1cbiAgICAgIHNlYXJjaENoYW5nZSA9IGFzeW5jIChlKSA9PntcbiAgICAgICAgbGV0IGlucHV0ID1lLnRhcmdldC52YWx1ZTtcbiAgICAgICAgbGV0IG1zZyA9IGlucHV0LnRvVXBwZXJDYXNlKClcbiAgICAgICAgaWYobXNnLmxlbmd0aD09MCl7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0OnRoaXMuc3RhdGUuYWxsfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIGxldCByZXMgPSB0aGlzLnN0YXRlLmFsbC5maWx0ZXIoaW5wdXQgPT4gaW5wdXQuZmlyc3ROYW1lLmluZGV4T2YobXNnKT4tMSB8fCBpbnB1dC5sYXN0TmFtZS5pbmRleE9mKG1zZyk+LTEgfHwgaW5wdXQuaW50ZXJ2aWV3UmVmLmluZGV4T2YobXNnKT4tMSApXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdDpyZXN9KVxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc2VhcmNoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjaGFuZ2UgPSAoaW5wdXQpID0+e1xuICAgICAgICBcbiAgICAgICAgaWYoaW5wdXQ9PSdwZycpe1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2JyYW5jaE5vdzoncGcnfSlcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3Q6dGhpcy5zdGF0ZS5hbGxQcm9ncmFtbWluZ30pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihpbnB1dD09J2RzJyl7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0OnRoaXMuc3RhdGUuYWxsRGVzaWdufSlcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHticmFuY2hOb3c6J2RzJ30pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihpbnB1dD09J21rJyl7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0OnRoaXMuc3RhdGUuYWxsTWFya2V0aW5nfSlcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHticmFuY2hOb3c6J21rJ30pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihpbnB1dD09J2N0Jyl7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0OnRoaXMuc3RhdGUuYWxsQ29udGVudH0pXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YnJhbmNoTm93OidjdCd9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aW1lQ2hhbmdlID0gKGUpID0+e1xuICAgICAgICBpZihlLnRhcmdldC52YWx1ZT09J2FsbCcpe1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdDp0aGlzLnN0YXRlLmFsbH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihlLnRhcmdldC52YWx1ZT09J21vcm5pbmcnKXtcbiAgICAgICAgICBcbiAgICAgICAgICBpZih0aGlzLnN0YXRlLmJyYW5jaE5vdyA9PSdwZycpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0OnRoaXMuc3RhdGUuYWxsTW9ybmluZ1Byb2dyYW1taW5nfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZih0aGlzLnN0YXRlLmJyYW5jaE5vdyA9PSdkcycpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0OnRoaXMuc3RhdGUuYWxsTW9ybmluZ0Rlc2lnbn0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYodGhpcy5zdGF0ZS5icmFuY2hOb3cgPT0nbWsnKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdDp0aGlzLnN0YXRlLmFsbE1vcm5pbmdNYXJrZXRpbmd9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKHRoaXMuc3RhdGUuYnJhbmNoTm93ID09J2N0Jyl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3Q6dGhpcy5zdGF0ZS5hbGxNb3JuaW5nQ29udGVudH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZS50YXJnZXQudmFsdWU9PSdhZnRlcm5vb24nKXtcbiAgICAgICAgICBcbiAgICAgICAgICBpZih0aGlzLnN0YXRlLmJyYW5jaE5vdyA9PSdwZycpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0OnRoaXMuc3RhdGUuYWxsQWZ0ZXJub29uUHJvZ3JhbW1pbmd9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKHRoaXMuc3RhdGUuYnJhbmNoTm93ID09J2RzJyl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3Q6dGhpcy5zdGF0ZS5hbGxBZnRlcm5vb25EZXNpZ259KVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKHRoaXMuc3RhdGUuYnJhbmNoTm93ID09J21rJyl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3Q6dGhpcy5zdGF0ZS5hbGxBZnRlcm5vb25NYXJrZXRpbmd9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKHRoaXMuc3RhdGUuYnJhbmNoTm93ID09J2N0Jyl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3Q6dGhpcy5zdGF0ZS5hbGxBZnRlcm5vb25Db250ZW50fSlcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltZy9sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cImxvZ29cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLnNlYXJjaENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC01IG14LWF1dG8gbXQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJleGFtcGxlRm9ybUNvbnRyb2xTZWxlY3QxXCIgb25DaGFuZ2U9e3RoaXMudGltZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFsbFwiPkFsbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtb3JuaW5nXCI+TW9ybmluZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhZnRlcm5vb25cIj5BZnRlcm5vb248L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXktNFwiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZWRpdCBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKT0+dGhpcy5jaGFuZ2UoJ3BnJyl9PlByb2dyYW1taW5nPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWVkaXQgYnRuLWJsb2NrXCIgb25DbGljaz17KCk9PnRoaXMuY2hhbmdlKCdkcycpfT5EZXNpZ248L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZWRpdCBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKT0+dGhpcy5jaGFuZ2UoJ21rJyl9Pk1hcmtldGluZzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1lZGl0IGJ0bi1ibG9ja1wiIG9uQ2xpY2s9eygpPT50aGlzLmNoYW5nZSgnY3QnKX0+Q29udGVudDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdy0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPiM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5SZWFsIE5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3QubWFwKChkYXRhLGluZGV4KT0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPntkYXRhLmludGVydmlld1JlZn08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpcnN0TmFtZX0ge2RhdGEubGFzdE5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEhlYWRUZXh0PllXQyBJbnRlcnZpZXcgQW5ub3VuY2VtZW50PC9IZWFkVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKT0+dGhpcy5jaGFuZ2UoJ3BnJyl9PlByb2dyYW1taW5nPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWJsb2NrXCIgb25DbGljaz17KCk9PnRoaXMuY2hhbmdlKCdkcycpfT5EZXNpZ248L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKT0+dGhpcy5jaGFuZ2UoJ21rJyl9Pk1hcmtldGluZzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9ja1wiIG9uQ2xpY2s9eygpPT50aGlzLmNoYW5nZSgnY3QnKX0+Q29udGVudDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuc2VhcmNoQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPiM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5SZWFsIE5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdC5tYXAoKGRhdGEsaW5kZXgpPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj57ZGF0YS5pbnRlcnZpZXdSZWZ9PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maXJzdE5hbWV9IHtkYXRhLmxhc3ROYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5ub3VuY2VcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9nZW5lcmFsYW5ub3VuY2UuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFEQTtBQUlBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7QUFDQTs7O0FBMUJBO0FBNkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtBQUFBO0FBREE7QUFJQTtBQUxBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFWQTtBQUFBOztBQWNBO0FBQUE7QUFEQTtBQUlBO0FBTEE7QUFDQTtBQURBO0FBWkE7QUFDQTtBQWlCQTtBQUNBO0FBbkJBO0FBQUE7O0FBdUJBO0FBQUE7QUFEQTtBQUlBO0FBTEE7QUFDQTtBQURBO0FBckJBO0FBQ0E7QUEwQkE7QUFDQTtBQTVCQTtBQUFBOztBQWdDQTtBQUFBO0FBREE7QUFJQTtBQUxBO0FBQ0E7QUFEQTtBQTlCQTtBQUNBO0FBbUNBO0FBQ0E7QUFyQ0E7QUFBQTs7QUF5Q0E7QUFBQTtBQURBO0FBSUE7QUFMQTtBQUNBO0FBREE7QUF2Q0E7QUFDQTtBQTRDQTtBQUNBO0FBOUNBO0FBQUE7O0FBa0RBO0FBQUE7QUFEQTtBQUlBO0FBTEE7QUFDQTtBQURBO0FBaERBO0FBQ0E7QUFxREE7QUFDQTtBQXZEQTtBQUFBOztBQTJEQTtBQUFBO0FBREE7QUFJQTtBQUxBO0FBQ0E7QUFEQTtBQXpEQTtBQUNBO0FBOERBO0FBQ0E7QUFoRUE7QUFBQTs7QUFvRUE7QUFBQTtBQURBO0FBSUE7QUFMQTtBQUNBO0FBREE7QUFsRUE7QUFDQTtBQXVFQTtBQUNBO0FBekVBO0FBQUE7O0FBNkVBO0FBQUE7QUFEQTtBQUlBO0FBTEE7QUFDQTtBQURBO0FBM0VBO0FBQ0E7QUFnRkE7QUFDQTtBQWxGQTtBQUFBOztBQXNGQTtBQUFBO0FBREE7QUFJQTtBQUxBO0FBQ0E7QUFEQTtBQXBGQTtBQUNBO0FBeUZBO0FBQ0E7QUEzRkE7QUFBQTs7QUErRkE7QUFBQTtBQURBO0FBSUE7QUFMQTtBQUNBO0FBREE7QUE3RkE7QUFDQTtBQWtHQTtBQUNBO0FBcEdBO0FBQUE7O0FBd0dBO0FBQUE7QUFEQTtBQUlBO0FBTEE7QUFDQTtBQURBO0FBdEdBO0FBQ0E7QUEyR0E7QUFDQTtBQTdHQTtBQUFBOztBQWlIQTtBQUFBO0FBREE7QUFJQTtBQUxBO0FBQ0E7QUFEQTtBQS9HQTtBQUNBO0FBb0hBO0FBQ0E7QUF0SEE7QUFBQTs7QUEwSEE7QUFBQTtBQURBO0FBSUE7QUFMQTtBQUNBO0FBREE7QUF4SEE7QUFDQTtBQTZIQTtBQUNBO0FBL0hBO0FBQUE7O0FBbUlBO0FBQUE7QUFEQTtBQUlBO0FBTEE7QUFDQTtBQURBO0FBaklBO0FBQ0E7QUFzSUE7QUFDQTtBQUNBO0FBeklBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUE0SUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFWQTtBQUNBO0FBREE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7OztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFJQTtBQURBO0FBSUE7QUFEQTtBQUlBO0FBRUE7QUFkQTtBQUNBO0FBZ0JBO0FBQ0E7QUFEQTtBQUlBO0FBREE7QUFJQTtBQURBO0FBSUE7QUFHQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFJQTtBQUpBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7O0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEwQ0E7Ozs7O0FBL1VBO0FBQ0E7QUFpVkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==