(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown;
var MenuItem = ReactBootstrap.MenuItem;
var Panel = ReactBootstrap.Panel;
;var modelMaster = new Backbone.Model();

modelMaster.set({ prop1: 0 });var AppContainer = React.createClass({
  displayName: "AppContainer",


  render: function render() {
    return React.createElement(
      "div",
      { className: "container-fluid" },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(Paragraph, null),
        React.createElement(Paragraph, null),
        React.createElement(Paragraph, null)
      ),
      React.createElement("hr", null),
      React.createElement(
        "footer",
        null,
        React.createElement(
          "p",
          null,
          "\xA9 2017 Luggy Boy and Company, Inc."
        )
      )
    );
  }
});;var AppNavBar = React.createClass({
  displayName: "AppNavBar",

  handleClick: function handleClick(e) {
    e.preventDefault();
    console.log('he clicked it');
  },
  render: function render() {

    return React.createElement(
      Navbar,
      { inverse: true, collapseOnSelect: true, fixedTop: true, fluid: true },
      React.createElement(
        Navbar.Header,
        null,
        React.createElement(
          Navbar.Brand,
          null,
          React.createElement(
            "a",
            { href: "#" },
            "Nodemazon"
          )
        ),
        React.createElement(Navbar.Toggle, null)
      ),
      React.createElement(
        Navbar.Collapse,
        null,
        React.createElement(
          Nav,
          null,
          React.createElement(AppNavLinks, null),
          React.createElement(
            NavDropdown,
            { eventKey: 3, title: "Dropdown", id: "basic-nav-dropdown" },
            React.createElement(
              MenuItem,
              { eventKey: 3.1, onClick: this.handleClick },
              "Action luggy"
            ),
            React.createElement(
              MenuItem,
              { eventKey: 3.2 },
              "Another action"
            ),
            React.createElement(
              MenuItem,
              { eventKey: 3.3 },
              "Something else here"
            ),
            React.createElement(MenuItem, { divider: true }),
            React.createElement(
              MenuItem,
              { eventKey: 3.3 },
              "Separated link"
            )
          )
        ),
        React.createElement(
          Nav,
          { pullRight: true },
          React.createElement(
            NavItem,
            { eventKey: 1, href: "#" },
            "Link Right"
          ),
          React.createElement(
            NavItem,
            { eventKey: 2, href: "#" },
            "Link Right"
          )
        )
      )
    );
  }

});
var AppNavLinks = function (_React$Component) {
  _inherits(AppNavLinks, _React$Component);

  function AppNavLinks(props) {
    _classCallCheck(this, AppNavLinks);

    var _this = _possibleConstructorReturn(this, (AppNavLinks.__proto__ || Object.getPrototypeOf(AppNavLinks)).call(this, props));

    _this.state = {
      links: []
    };

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(AppNavLinks, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      modelMaster.on('change', this.onChange);
    }
  }, {
    key: "onChange",
    value: function onChange() {
      console.log('yip', this.state);
      this.setState({ links: modelMaster.get('links') });
      console.log('yup nope', this.state);
    }
  }, {
    key: "render",
    value: function render() {

      //alert(this.state.links.length);

      var itms = [];

      for (var i = 0; i < this.state.links.length; i++) {
        itms.push(React.createElement(
          NavItem,
          { href: this.state.links[i].url },
          this.state.links[i].label
        ));
      }

      return React.createElement(
        Nav,
        null,
        [itms]
      );
    }
  }]);

  return AppNavLinks;
}(React.Component);

;var Jumbotron = React.createClass({
  displayName: "Jumbotron",


  render: function render() {
    return React.createElement(
      "div",
      { className: "jumbotron" },
      React.createElement(
        Panel,
        { bsStyle: "info" },
        "Panel content"
      ),
      React.createElement(
        "div",
        { className: "container-fluid" },
        React.createElement(
          "h1",
          null,
          "Watcha gain tiplex ",
          this.props.prop1
        ),
        React.createElement(
          "p",
          null,
          "This is a template for a simple marketing or informational website. luggy boy rules It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique."
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "a",
            { className: "btn btn-primary btn-lg", href: "#", role: "button" },
            "Learn more \xBB"
          )
        )
      )
    );
  }
});;var MainView = React.createClass({
  displayName: "MainView",


  render: function render() {
    return React.createElement(
      "div",
      { onClick: this.props.onClick },
      React.createElement(AppNavBar, null),
      React.createElement(JumbotronContainer, null),
      React.createElement(AppContainer, null)
    );
  }
});
;var Paragraph = React.createClass({
  displayName: "Paragraph",


  render: function render() {
    return React.createElement(
      "div",
      { className: "col-md-4" },
      React.createElement(
        "h2",
        null,
        "Heading"
      ),
      React.createElement(
        "p",
        null,
        "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. "
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "a",
          { className: "btn btn-default", href: "#", role: "button" },
          "View details \xBB"
        )
      )
    );
  }
});;
var JumbotronContainer = function (_React$Component2) {
  _inherits(JumbotronContainer, _React$Component2);

  function JumbotronContainer(props) {
    _classCallCheck(this, JumbotronContainer);

    var _this2 = _possibleConstructorReturn(this, (JumbotronContainer.__proto__ || Object.getPrototypeOf(JumbotronContainer)).call(this, props));

    _this2.state = { prop1: 0 };
    _this2.onChange = _this2.onChange.bind(_this2);
    return _this2;
  }

  _createClass(JumbotronContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      modelMaster.on('change', this.onChange);
    }
  }, {
    key: "onChange",
    value: function onChange() {
      console.log('yip', this.state);
      this.setState({ prop1: modelMaster.get('prop1') });
      console.log('yup nope', this.state);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(Jumbotron, { prop1: this.state.prop1 });
    }
  }]);

  return JumbotronContainer;
}(React.Component);

;var MainApp = React.createClass({
  displayName: "MainApp",


  componentDidMount: function componentDidMount() {

    var parent = this;
    reqwest({
      url: 'api/links',
      method: 'get',
      success: function success(resp) {

        modelMaster.set({ links: resp.links });
      }
    });
  },

  handleClick: function handleClick(e) {

    modelMaster.set({ prop1: modelMaster.get('prop1') + 1 });
    //e.preventDefault();
    console.log('The link was clicked x. ', e._targetInst._hostNode.href);
    if (e._targetInst._hostNode.href) {
      window.location = e._targetInst._hostNode.href;
    }
  },

  render: function render() {
    return React.createElement(MainView, { onClick: this.handleClick });
  }
});
; // Split location into `/` separated parts, then render `Application` with it
function handleNewHash() {
  var location = window.location.hash.replace(/^#\/?|\/$/g, '').split('/');
}

// Handle the initial route and browser navigation events
handleNewHash();
window.addEventListener('hashchange', handleNewHash, false);;
ReactDOM.render(React.createElement(MainApp, null), document.getElementById('app'));

},{}]},{},[1]);
