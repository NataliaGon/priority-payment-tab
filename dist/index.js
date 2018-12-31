'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var require$$0 = _interopDefault(require('prop-types'));
var reactDom = _interopDefault(require('react-dom'));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "/*\n * Global styles.\n */\n*, *:before, *:after {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\na, a:visited, a:hover {\n  text-decoration: none;\n  color: inherit; }\n\nbody {\n  line-height: 1; }\n\nol, ul, li {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n  blockquote:before, blockquote:after, q:before, q:after {\n    content: '';\n    content: none; }\n\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nbutton {\n  background-color: transparent;\n  outline: none;\n  border: 0;\n  cursor: pointer; }\n\n/*** Colors ***/\n/*** End - Colors ***/\n/*** Font Families ***/\n/*** End - Font Families ***/\n/*** Font Size ***/\n/*** End - Font Size ***/\n/*** Font Weight ***/\n/*** End - Font Weight ***/\nhtml {\n  font-size: 62.5%; }\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: #212529;\n  font-size: 1.4rem;\n  font-weight: 400; }\n\n.main_text-color-grey__3B-Xg, .main_text-color-grey__3B-Xg:before {\n  color: #788e97; }\n\n.main_text-color-blue__1tlYj, .main_text-color-blue__1tlYj:before {\n  color: #00adee !important; }\n\n.main_text-color-black__3Gzxl, .main_text-color-black__3Gzxl:before {\n  color: #212529; }\n\n.main_text-color-white__3qjk0, .main_text-color-white__3qjk0:before {\n  color: #fff; }\n\n.main_text-size-large__3r9td {\n  font-size: 2.8rem; }\n\n.main_text-size-medium__2cyde {\n  font-size: 2.2rem; }\n\n.main_text-size-regular__1FtQK {\n  font-size: 1.4rem; }\n\n.main_text-size-small__9RiYS {\n  font-size: 1.2rem; }\n\n.main_font-family-serif__3LsD- {\n  font-family: \"Bree Serif\", serif; }\n\n.main_font-family-regular__3L7lZ {\n  font-family: \"Roboto\", sans-serif; }\n\n.main_font-family-icons__3VSQT {\n  font-family: \"icomoon\" !important; }\n\n.main_icon-color-grey__3YBpx, .main_icon-color-grey__3YBpx:before {\n  color: #788e97; }\n\n.main_icon-color-blue__XhHsd, .main_icon-color-blue__XhHsd:before {\n  color: #00adee !important; }\n\n.main_icon-color-black__25hN9, .main_icon-color-black__25hN9:before {\n  color: #212529; }\n\n.main_icon-color-white__yMU9T, .main_icon-color-white__yMU9T:before {\n  color: #fff; }\n\n.main_position__1Xj62.main_absolute__1y3gK {\n  position: absolute; }\n\n.main_position__1Xj62.main_top__zFjTS {\n  top: 0; }\n\n.main_position__1Xj62.main_bottom__3-kT_ {\n  bottom: 0; }\n\n.main_position__1Xj62.main_left__GaIku {\n  left: 0; }\n\n.main_position__1Xj62.main_right__1CK6j {\n  right: 0; }\n\n@keyframes main_cssload-rotate-one__M-Kz4 {\n  0% {\n    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg); }\n  100% {\n    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg); } }\n\n@keyframes main_cssload-rotate-two__1aIit {\n  0% {\n    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg); }\n  100% {\n    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg); } }\n\n@keyframes main_cssload-rotate-three__1PGtn {\n  0% {\n    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg); }\n  100% {\n    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg); } }\n\n@-webkit-keyframes main_fadeIn__1dNSG {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-moz-keyframes main_fadeIn__1dNSG {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes main_fadeIn__1dNSG {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.main_header__2eR3n {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  height: 114px; }\n";
styleInject(css);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var css$1 = "/*** Colors ***/\n/*** End - Colors ***/\n/*** Font Families ***/\n/*** End - Font Families ***/\n/*** Font Size ***/\n/*** End - Font Size ***/\n/*** Font Weight ***/\n/*** End - Font Weight ***/\n.Label-module_component__1fQ2J {\n  display: inline-flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.4rem;\n  color: #788e97;\n  padding: 0 1rem; }\n\n.Label-module_href__2JL2M {\n  text-decoration: underline !important;\n  color: #788e97 !important; }\n\n.Label-module_large__17PEw {\n  font-size: 2.2rem;\n  color: #788e97; }\n\n.Label-module_regular__3fzK8 {\n  font-size: 1.4rem;\n  color: #788e97; }\n\n.Label-module_regular-hight-contrast__OoNCI {\n  font-size: 1.4rem;\n  color: #212529; }\n\n.Label-module_small__3_wci {\n  font-size: 1.2rem;\n  color: #212529; }\n\n.Label-module_padding-regular__2tJ52 {\n  padding: 0 0.5rem; }\n\n.Label-module_padding-double__3t0fK {\n  padding: 0 1rem; }\n\n.Label-module_darkTheme__1AJkF.Label-module_regular-hight-contrast__OoNCI {\n  color: #fff; }\n\n.Label-module_white__3RKo- {\n  color: #fff; }\n\n.Label-module_blue__1KCgI {\n  color: #00adee; }\n\n.Label-module_grey__kV4bh {\n  color: #788e97; }\n\n.Label-module_black__2ngfC {\n  color: #212529; }\n";
var styles = {"component":"Label-module_component__1fQ2J","href":"Label-module_href__2JL2M","large":"Label-module_large__17PEw","regular":"Label-module_regular__3fzK8","regular-hight-contrast":"Label-module_regular-hight-contrast__OoNCI","small":"Label-module_small__3_wci","padding-regular":"Label-module_padding-regular__2tJ52","padding-double":"Label-module_padding-double__3t0fK","darkTheme":"Label-module_darkTheme__1AJkF","white":"Label-module_white__3RKo-","blue":"Label-module_blue__1KCgI","grey":"Label-module_grey__kV4bh","black":"Label-module_black__2ngfC"};
styleInject(css$1);

var DefaultTextProperties = /** @class */ (function () {
    function DefaultTextProperties() {
        this.textSize = "regular";
        this.textColor = "grey";
        this.fontFamily = "regular";
    }
    return DefaultTextProperties;
}());
var ComponentBaseProperties = /** @class */ (function () {
    function ComponentBaseProperties() {
    }
    return ComponentBaseProperties;
}());
var ComponentBase = /** @class */ (function (_super) {
    __extends(ComponentBase, _super);
    function ComponentBase(properties, state) {
        var _this = _super.call(this, properties, state) || this;
        _this.defaultProperties = function () {
            return new DefaultTextProperties();
        };
        return _this;
    }
    return ComponentBase;
}(React.Component));
var ComponentAnimatedProperties = /** @class */ (function (_super) {
    __extends(ComponentAnimatedProperties, _super);
    function ComponentAnimatedProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ComponentAnimatedProperties;
}(ComponentBaseProperties));

var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Label.prototype.render = function () {
        var skinClass = "";
        if (this.props.skin) {
            skinClass = styles[this.props.skin];
        }
        var paddingClass = "";
        if (this.props.labelPadding) {
            paddingClass = styles["padding-" + this.props.labelPadding];
        }
        var linkClass = "";
        if (this.props.textHref) {
            linkClass = styles.href;
        }
        var colorClass = "grey";
        if (this.props.textColor) {
            if (this.props.textColor === "white") {
                colorClass = styles.white;
            }
            if (this.props.textColor === "blue") {
                colorClass = styles.blue;
            }
            if (this.props.textColor === "black") {
                colorClass = styles.black;
            }
            if (this.props.textColor === "grey") {
                colorClass = styles.grey;
            }
        }
        var elementClasses = classnames(styles.component, this.props.componentClasses, skinClass, paddingClass, linkClass, colorClass);
        return (this.props.textHref ?
            React.createElement("a", { className: elementClasses, href: this.props.textHref }, this.props.text ? this.props.text : this.props.children)
            : React.createElement("span", { className: elementClasses }, this.props.text ? this.props.text : this.props.children));
    };
    return Label;
}(ComponentBase));

var css$2 = "/*** Colors ***/\n/*** End - Colors ***/\n/*** Font Families ***/\n/*** End - Font Families ***/\n/*** Font Size ***/\n/*** End - Font Size ***/\n/*** Font Weight ***/\n/*** End - Font Weight ***/\n.Title-module_component__3gKg7 {\n  font-family: \"Bree Serif\", serif;\n  font-size: 2.8rem;\n  color: #00adee; }\n";
var styles$1 = {"component":"Title-module_component__3gKg7"};
styleInject(css$2);

var Title = /** @class */ (function (_super) {
    __extends(Title, _super);
    function Title(properties, state) {
        return _super.call(this, properties, state) || this;
    }
    Title.prototype.render = function () {
        var componentClasses = classnames(styles$1.component, this.props.componentClasses);
        return (React.createElement("h1", { className: componentClasses }, this.props.text ? this.props.text : this.props.children));
    };
    return Title;
}(ComponentBase));

var css$3 = "/*** Colors ***/\n/*** End - Colors ***/\n/*** Font Families ***/\n/*** End - Font Families ***/\n/*** Font Size ***/\n/*** End - Font Size ***/\n/*** Font Weight ***/\n/*** End - Font Weight ***/\n.Icon-module_component__rzWUk {\n  width: 2.4rem;\n  height: 2.4rem;\n  font-size: 2.4rem;\n  position: relative; }\n\n.Icon-module_white__3P7zB {\n  color: #fff; }\n\n.Icon-module_blue__1-tpS {\n  color: #00adee; }\n\n.Icon-module_grey__18aQ2 {\n  color: #788e97; }\n\n.Icon-module_black__1tCtr {\n  color: #212529; }\n";
var styles$2 = {"component":"Icon-module_component__rzWUk","white":"Icon-module_white__3P7zB","blue":"Icon-module_blue__1-tpS","grey":"Icon-module_grey__18aQ2","black":"Icon-module_black__1tCtr"};
styleInject(css$3);

var css$4 = ".IconCounter-module_component__3jDno {\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  border-radius: 50px;\n  min-width: 15px;\n  height: 15px;\n  background-color: #00adee;\n  color: white;\n  font-size: 12px;\n  font-family: 'Roboto';\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.IconCounter-module_component__3jDno span {\n  padding: 2.5px; }\n";
var styles$3 = {"component":"IconCounter-module_component__3jDno"};
styleInject(css$4);

var IconCounter = /** @class */ (function (_super) {
    __extends(IconCounter, _super);
    function IconCounter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IconCounter.prototype.render = function () {
        var iconClass = classnames(styles$3.component);
        if (this.props.count && this.props.count > 0) {
            return (React.createElement("div", { className: iconClass },
                React.createElement("span", null, this.props.count)));
        }
        return null;
    };
    return IconCounter;
}(ComponentBase));

var Icon = /** @class */ (function (_super) {
    __extends(Icon, _super);
    function Icon(properties, state) {
        var _this = _super.call(this, properties, state) || this;
        if (properties.counterValue) {
            _this.setState({ counterValue: properties.counterValue });
        }
        return _this;
    }
    Icon.prototype.render = function () {
        var iconColorClass = styles$2.grey;
        if (this.props.iconColor) {
            if (this.props.iconColor === "white") {
                iconColorClass = styles$2.white;
            }
            if (this.props.iconColor === "blue") {
                iconColorClass = styles$2.blue;
            }
            if (this.props.iconColor === "black") {
                iconColorClass = styles$2.black;
            }
            if (this.props.iconColor === "grey") {
                iconColorClass = styles$2.grey;
            }
        }
        var iconClass = classnames(styles$2.component, this.props.icon, iconColorClass);
        var iconCounter = this.state && this.state.counterValue ? React.createElement(IconCounter, { count: this.state.counterValue }) : null;
        return (React.createElement("div", { className: iconClass }, iconCounter));
    };
    return Icon;
}(ComponentBase));

var css$5 = "/*** Colors ***/\n/*** End - Colors ***/\n/*** Font Families ***/\n/*** End - Font Families ***/\n/*** Font Size ***/\n/*** End - Font Size ***/\n/*** Font Weight ***/\n/*** End - Font Weight ***/\n.Button-module_component__1-G0j {\n  height: 30px;\n  border-radius: 3px;\n  box-shadow: 0 5px 15px 0 rgba(0, 173, 238, 0.15);\n  font-size: 14px;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center; }\n\n.Button-module_regularFixed__RUQjA {\n  width: 120px; }\n\n.Button-module_fullWidth__3FZAe {\n  width: 100%; }\n\n.Button-module_contentWidth__2xs3y {\n  width: unset; }\n\n.Button-module_regular__5w0aR {\n  background-color: #00adee;\n  color: #fff; }\n\n.Button-module_secondary__2WKbk {\n  background-color: #60c5bb;\n  color: #fff; }\n\n.Button-module_stroke__2OI22 {\n  background-color: #fff;\n  border: solid 1px #00adee;\n  color: #00adee; }\n  .Button-module_stroke__2OI22:hover {\n    color: #fff;\n    background-color: #00adee; }\n\n.Button-module_roundStrokeIcon__2h9D- {\n  width: 30px;\n  border-radius: 50%;\n  border: 2px solid #00adee;\n  justify-content: center; }\n\n.Button-module_active__2_Pre {\n  background: #2e4049; }\n\n.Button-module_disabled__3qbwx {\n  background: #d6dddf;\n  opacity: 0.3; }\n\n.Button-module_darkTheme__KwnA-.Button-module_component__1-G0j {\n  height: 40px;\n  font-weight: 700; }\n\n.Button-module_darkTheme__KwnA-.Button-module_roundStrokeIcon__2h9D- {\n  height: 30px; }\n";
var styles$4 = {"component":"Button-module_component__1-G0j","regularFixed":"Button-module_regularFixed__RUQjA","fullWidth":"Button-module_fullWidth__3FZAe","contentWidth":"Button-module_contentWidth__2xs3y","regular":"Button-module_regular__5w0aR","secondary":"Button-module_secondary__2WKbk","stroke":"Button-module_stroke__2OI22","roundStrokeIcon":"Button-module_roundStrokeIcon__2h9D-","active":"Button-module_active__2_Pre","disabled":"Button-module_disabled__3qbwx","darkTheme":"Button-module_darkTheme__KwnA-"};
styleInject(css$5);

var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var skinClass = styles$4[this.props.skin ? this.props.skin : ""];
        var widthClass = styles$4[this.props.width ? this.props.width : ""];
        var darkThemeClass = styles$4.darkTheme;
        var buttonClass = classnames(styles$4.component, this.props.componentClasses, skinClass, widthClass, darkThemeClass);
        return (React.createElement("button", { className: buttonClass, onClick: this.props.onClick }, this.props.children));
    };
    return Button;
}(ComponentBase));

var css$6 = "/*** Colors ***/\n/*** End - Colors ***/\n/*** Font Families ***/\n/*** End - Font Families ***/\n/*** Font Size ***/\n/*** End - Font Size ***/\n/*** Font Weight ***/\n/*** End - Font Weight ***/\n.CheckBox-module_component__2pUWa {\n  font-family: \"icomoon\" !important;\n  color: #788e97;\n  height: 2rem;\n  width: 2rem;\n  font-size: 2rem;\n  border: 1px solid rgba(120, 142, 151, 0.3);\n  border-radius: 0.2rem; }\n  .CheckBox-module_component__2pUWa.CheckBox-module_checked__2F1lL:before {\n    content: \"\\E911\"; }\n  .CheckBox-module_component__2pUWa:hover {\n    color: #00adee;\n    border-color: #00adee; }\n  .CheckBox-module_component__2pUWa.CheckBox-module_disabled__pl-s7 {\n    background-color: #d6dddf;\n    border-color: #d6dddf; }\n";
var styles$5 = {"component":"CheckBox-module_component__2pUWa","checked":"CheckBox-module_checked__2F1lL","disabled":"CheckBox-module_disabled__pl-s7"};
styleInject(css$6);

var CheckBoxProperties = /** @class */ (function (_super) {
    __extends(CheckBoxProperties, _super);
    function CheckBoxProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CheckBoxProperties;
}(ComponentBaseProperties));
var CheckBox = /** @class */ (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            checked: true
        };
        return _this;
    }
    CheckBox.prototype.render = function () {
        var stateClass = "";
        if (this.state.checked) {
            stateClass = styles$5.checked;
        }
        var elementClasses = classnames(styles$5.component, this.props.componentClasses, stateClass);
        return (React.createElement("span", { className: elementClasses }));
    };
    return CheckBox;
}(ComponentBase));

var css$7 = "/*** Colors ***/\n/*** End - Colors ***/\n/*** Font Families ***/\n/*** End - Font Families ***/\n/*** Font Size ***/\n/*** End - Font Size ***/\n/*** Font Weight ***/\n/*** End - Font Weight ***/\n.LineInput-module_component__25Kb_ {\n  display: flex;\n  justify-content: flex-end;\n  border-bottom: 1px dashed #00adee;\n  padding-bottom: 5px;\n  width: 450px;\n  position: absolute;\n  left: 62px; }\n\n.LineInput-module_iconDoneWrapper__2p5rO {\n  background-color: #00adee;\n  border-radius: 50%; }\n\n.LineInput-module_input__2LLjx {\n  width: 100%;\n  background: transparent;\n  outline: none;\n  font-size: 2.2rem;\n  color: #788e97;\n  display: none; }\n\n.LineInput-module_span__20V4n {\n  width: 100%;\n  background: transparent;\n  outline: none;\n  font-size: 2.2rem;\n  color: #788e97; }\n\n.LineInput-module_displayNone__1b360 {\n  display: none; }\n\n.LineInput-module_displayBlock__37jDg {\n  display: block; }\n";
var styles$6 = {"component":"LineInput-module_component__25Kb_","iconDoneWrapper":"LineInput-module_iconDoneWrapper__2p5rO","input":"LineInput-module_input__2LLjx","span":"LineInput-module_span__20V4n","displayNone":"LineInput-module_displayNone__1b360","displayBlock":"LineInput-module_displayBlock__37jDg"};
styleInject(css$7);

(function (PriorityIcon) {
    PriorityIcon["filterBig"] = "icon-icon-filter-big";
    PriorityIcon["clear"] = "icon-icon---clear-search";
    PriorityIcon["edit"] = "icon-icon-edit";
    PriorityIcon["arrowLeftLong"] = "icon-icon-long-arrow-left";
    PriorityIcon["questionCircle"] = "icon-question-circle";
    PriorityIcon["operatorSearchBetween"] = "icon-search-between-v4";
    PriorityIcon["done"] = "icon-icon-done";
    PriorityIcon["closeSmall"] = "icon-icon-close-small";
    PriorityIcon["arrowDropUp"] = "icon-icon-arrow_drop_up";
    PriorityIcon["arrowDropDown"] = "icon-icon-arrow_drop_down";
})(exports.PriorityIcon || (exports.PriorityIcon = {}));

var LineInputProperties = /** @class */ (function (_super) {
    __extends(LineInputProperties, _super);
    function LineInputProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LineInputProperties;
}(ComponentBaseProperties));
var LineInput = /** @class */ (function (_super) {
    __extends(LineInput, _super);
    function LineInput(properties, state) {
        var _this = _super.call(this, properties, state) || this;
        _this.SpanInpitToggle = function () {
            _this.setState({ showInput: !(_this.state && _this.state.showInput) });
        };
        _this.state = {
            showInput: false
        };
        return _this;
    }
    LineInput.prototype.render = function () {
        var SpanClasses;
        var inputClasses;
        if (this.state.showInput) {
            SpanClasses = classnames(styles$6.span, styles$6.displayNone);
            inputClasses = classnames(styles$6.input, styles$6.displayBlock);
        }
        else {
            SpanClasses = classnames(styles$6.span);
            inputClasses = classnames(styles$6.input);
        }
        return (React.createElement("div", { className: styles$6.component },
            React.createElement("input", { type: "text", defaultValue: "New Search", onBlur: this.SpanInpitToggle.bind(this), className: inputClasses }),
            React.createElement("span", { className: SpanClasses, onClick: this.SpanInpitToggle.bind(this) }, "New Search"),
            React.createElement("button", { className: styles$6.iconDoneWrapper },
                React.createElement(Icon, { iconColor: "white", icon: exports.PriorityIcon.done })),
            React.createElement(Icon, { icon: exports.PriorityIcon.closeSmall })));
    };
    return LineInput;
}(ComponentBase));

var css$8 = "/*** Colors ***/\n/*** End - Colors ***/\n/*** Font Families ***/\n/*** End - Font Families ***/\n/*** Font Size ***/\n/*** End - Font Size ***/\n/*** Font Weight ***/\n/*** End - Font Weight ***/\n.Select-module_dropDownElements__21ytE {\n  height: 43px;\n  position: relative; }\n\n.Select-module_inputSmall__bBJSK {\n  height: 30px;\n  border-radius: 3px;\n  border: 1px solid #bfd0d7;\n  z-index: 3;\n  position: absolute;\n  width: 150px;\n  box-sizing: border-box; }\n\n.Select-module_optionsWrapper__1Cr8b {\n  background: #fff;\n  position: absolute;\n  width: 150px; }\n\n.Select-module_dropDownResult__4eWkA {\n  height: 30px;\n  background: #6e818a;\n  color: #fff;\n  display: inline-block;\n  line-height: 30px;\n  padding: 0 10px;\n  border-radius: 3px;\n  position: relative; }\n\n.Select-module_dropDownResultsContainer__2Z6Mg {\n  margin-top: 5px; }\n\n.Select-module_dropDownHide__21Dnp {\n  overflow: hidden;\n  height: 30px;\n  border-radius: 3px; }\n\n.Select-module_boxShadow__1YeZR {\n  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);\n  width: 160px;\n  margin-left: -5px;\n  margin-top: -5px;\n  padding: 5px;\n  border-radius: 3px;\n  z-index: 2; }\n\n.Select-module_drop-down_icon-wrapper__3xqih {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: #fff; }\n\n.Select-module_dropDownIconWrapper__3ruHJ {\n  position: absolute;\n  top: 0;\n  right: 0; }\n\n.Select-module_borderColorBlue__2gS6j {\n  border: 1px solid #00adee; }\n\n.Select-module_ul__egZga li:hover {\n  background-color: #D9F6F9; }\n\n.Select-module_ul__egZga li:first-child {\n  height: 27px; }\n  .Select-module_ul__egZga li:first-child:hover {\n    background-color: #fff; }\n\n.Select-module_ul__egZga li:nth-child(2) {\n  margin-top: 11px; }\n\n.Select-module_active__38GJG {\n  color: #00adee; }\n";
var styles$7 = {"dropDownElements":"Select-module_dropDownElements__21ytE","inputSmall":"Select-module_inputSmall__bBJSK","optionsWrapper":"Select-module_optionsWrapper__1Cr8b","dropDownResult":"Select-module_dropDownResult__4eWkA","dropDownResultsContainer":"Select-module_dropDownResultsContainer__2Z6Mg","dropDownHide":"Select-module_dropDownHide__21Dnp","boxShadow":"Select-module_boxShadow__1YeZR","drop-down_icon-wrapper":"Select-module_drop-down_icon-wrapper__3xqih","dropDownIconWrapper":"Select-module_dropDownIconWrapper__3ruHJ","borderColorBlue":"Select-module_borderColorBlue__2gS6j","ul":"Select-module_ul__egZga","active":"Select-module_active__38GJG"};
styleInject(css$8);

var css$9 = "/*** Colors ***/\n/*** End - Colors ***/\n/*** Font Families ***/\n/*** End - Font Families ***/\n/*** Font Size ***/\n/*** End - Font Size ***/\n/*** Font Weight ***/\n/*** End - Font Weight ***/\n.OptionItem-module_component__23SsC {\n  margin: 2px 7px;\n  display: flex;\n  height: 40px;\n  align-items: center;\n  padding-left: 10px; }\n";
var styles$8 = {"component":"OptionItem-module_component__23SsC"};
styleInject(css$9);

var OptionItem = /** @class */ (function (_super) {
    __extends(OptionItem, _super);
    function OptionItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OptionItem.prototype.render = function () {
        var elementClasses = classnames(styles$8.component, this.props.componentClasses);
        return (React.createElement("li", { className: elementClasses, onClick: this.props.onClick },
            React.createElement(Icon, { icon: exports.PriorityIcon.operatorSearchBetween, iconColor: this.state && this.state.selected ? "blue" : "grey" }),
            React.createElement(Label, { skin: "regular" }, this.props.children),
            this.props.displayValue ? React.createElement(Label, { skin: "small" }, this.props.value) : ""));
    };
    return OptionItem;
}(ComponentBase));

var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dropDownToggle = function () {
            _this.setState({ isOpen: !(_this.state && _this.state.isOpen) });
        };
        _this.renderOptions = function () {
            var dropDownOptions = _this.state && _this.state.dropDownOptions
                ? _this.state.dropDownOptions
                : _this.props.children;
            if (dropDownOptions && Array.isArray(dropDownOptions)) {
                return (React.createElement("ul", { className: styles$7.ul }, dropDownOptions.map(function (option) { return (React.createElement(OptionItem, { iconName: option.iconName, value: option.value, displayValue: option.displayValue ? true : false, key: option.name, onClick: function (e) { return _this.optionSelected(); } }, option.props.children)); })));
            }
            return null;
        };
        return _this;
    }
    Select.prototype.optionSelected = function () {
        this.dropDownToggle();
    };
    Select.prototype.render = function () {
        var classForDropDownIcon;
        var IconOptionsClass;
        if (this.state && this.state.isOpen) {
            IconOptionsClass = styles$7.active;
            classForDropDownIcon = exports.PriorityIcon.arrowDropUp; //"icon-icon-arrow_drop_up";
            var IconClasses = classnames(classForDropDownIcon, IconOptionsClass);
        }
        else {
            classForDropDownIcon = exports.PriorityIcon.arrowDropDown; //"icon-icon-arrow_drop_down";
        }
        var dropDownVisibilityClass = this.state && this.state.isOpen ? styles$7.boxShadow : styles$7.dropDownHide;
        var smallInputVisibilityClass = this.state && this.state.isOpen ? styles$7.borderColorBlue : '';
        var dropDownOptionsClass = styles$7.optionsWrapper;
        var smallInputOptionsClass = styles$7.inputSmall;
        var dropDownOptionsClasses = classnames(dropDownVisibilityClass, dropDownOptionsClass);
        var smallInputOptionsClasses = classnames(smallInputVisibilityClass, smallInputOptionsClass);
        return (React.createElement("div", { className: styles$7.containerForDropDown },
            React.createElement("div", { className: styles$7.dropDownElements },
                React.createElement("div", { className: smallInputOptionsClasses, onClick: this.dropDownToggle },
                    React.createElement("div", { className: styles$7.dropDownIconWrapper },
                        React.createElement(Icon, { icon: classForDropDownIcon }))),
                React.createElement("div", { className: dropDownOptionsClasses }, this.renderOptions()))));
    };
    return Select;
}(ComponentBase));

var css$a = "/*** Colors ***/\n/*** End - Colors ***/\n/*** Font Families ***/\n/*** End - Font Families ***/\n/*** Font Size ***/\n/*** End - Font Size ***/\n/*** Font Weight ***/\n/*** End - Font Weight ***/\n.InputAutofill-module_component__MAOAz {\n  width: 356px;\n  height: 30px;\n  border: 1px solid #bfd0d7;\n  border-radius: 3px;\n  margin-top: -12px;\n  box-sizing: border-box; }\n  .InputAutofill-module_component__MAOAz div {\n    width: 100%;\n    height: 100%;\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: 500;\n    font-style: italic;\n    font-stretch: normal;\n    line-height: 1.21;\n    letter-spacing: normal;\n    color: #788e97; }\n    .InputAutofill-module_component__MAOAz div input {\n      width: 100%;\n      height: 100%;\n      padding: 0 10px;\n      font-family: Roboto;\n      font-size: 14px;\n      font-weight: 500;\n      font-style: italic;\n      font-stretch: normal;\n      line-height: 1.21;\n      letter-spacing: normal;\n      color: #788e97; }\n    .InputAutofill-module_component__MAOAz div div {\n      left: 0px;\n      width: 356px;\n      z-index: 30;\n      height: auto; }\n      .InputAutofill-module_component__MAOAz div div div {\n        height: 30px;\n        line-height: 30px;\n        width: 100%;\n        padding: 0 10px; }\n        .InputAutofill-module_component__MAOAz div div div:hover {\n          background-color: #D9F6F9; }\n";
var styles$9 = {"component":"InputAutofill-module_component__MAOAz"};
styleInject(css$a);

var util = createCommonjsModule(function (module) {
var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

function getClientPosition(elem) {
  var box, x, y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
  box = elem.getBoundingClientRect();

  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top;

  // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.

  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.

  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;

  return {left: x, top: y};
}

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    //ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      //quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}
function _getComputedStyle(elem, name, computedStyle) {
  var val = '';
  var d = elem.ownerDocument;

  // https://github.com/kissyteam/kissy/issues/61
  if ((computedStyle = (computedStyle || d.defaultView.getComputedStyle(elem, null)))) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
var RE_POS = /^(top|right|bottom|left)$/,
  CURRENT_STYLE = 'currentStyle',
  RUNTIME_STYLE = 'runtimeStyle',
  LEFT = 'left',
  PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity
  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style,
      left = style[LEFT],
      rsLeft = elem[RUNTIME_STYLE][LEFT];

    // prevent flashing of content
    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

    // Put in the new values to get a computed value out
    style[LEFT] = name === 'fontSize' ? '1em' : (ret || 0);
    ret = style.pixelLeft + PX;

    // Revert the changed values
    style[LEFT] = left;

    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }
  return ret === '' ? 'auto' : ret;
}

var getComputedStyleX;
if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

// 设置 elem 相对 elem.ownerDocument 的坐标
function setOffset(elem, offset) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }

  var old = getOffset(elem),
    ret = {},
    current, key;

  for (key in offset) {
    current = parseFloat(css(elem, key)) || 0;
    ret[key] = current + offset[key] - old[key];
  }
  css(elem, ret);
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'],
  CONTENT_INDEX = -1,
  PADDING_INDEX = 2,
  BORDER_INDEX = 1,
  MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {},
    style = elem.style,
    name;

  // Remember the old values, and insert the new ones
  for (name in options) {
    old[name] = style[name];
    style[name] = options[name];
  }

  callback.call(elem);

  // Revert the old values
  for (name in options) {
    style[name] = old[name];
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0, prop, j, i;
  for (j = 0; j < props.length; j++) {
    prop = props[j];
    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp;
        if (prop === 'border') {
          cssProp = prop + which[i] + 'Width';
        } else {
          cssProp = prop + which[i];
        }
        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }
  return value;
}

/**
 * A crude way of determining if an object is a window
 * @member util
 */
function isWindow(obj) {
  // must use == for ie8
  /*jshint eqeqeq:false*/
  return obj != null && obj == obj.window;
}

var domUtils = {};

each(['Width', 'Height'], function (name) {
  domUtils['doc' + name] = function (refWin) {
    var d = refWin.document;
    return Math.max(
      //firefox chrome documentElement.scrollHeight< body.scrollHeight
      //ie standard mode : documentElement.scrollHeight> body.scrollHeight
      d.documentElement['scroll' + name],
      //quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
      d.body['scroll' + name],
      domUtils['viewport' + name](d));
  };

  domUtils['viewport' + name] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = 'client' + name,
      doc = win.document,
      body = doc.body,
      documentElement = doc.documentElement,
      documentElementProp = documentElement[prop];
    // 标准模式取 documentElement
    // backcompat 取 body
    return doc.compatMode === 'CSS1Compat' && documentElementProp ||
      body && body[prop] || documentElementProp;
  };
});

/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */
function getWH(elem, name, extra) {
  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'],
    borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem, computedStyle);
  var cssBoxValue = 0;
  if (borderBoxValue == null || borderBoxValue <= 0) {
    borderBoxValue = undefined;
    // Fall back to computed then un computed css if necessary
    cssBoxValue = getComputedStyleX(elem, name);
    if (cssBoxValue == null || (Number(cssBoxValue)) < 0) {
      cssBoxValue = elem.style[name] || 0;
    }
    // Normalize '', auto, and prepare for extra
    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }
  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }
  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;
  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'],
          which, computedStyle);
    } else {
      return cssBoxValue;
    }
  } else if (borderBoxValueOrIsBorderBox) {
    return val + (extra === BORDER_INDEX ? 0 :
        (extra === PADDING_INDEX ?
          -getPBMWidth(elem, ['border'], which, computedStyle) :
          getPBMWidth(elem, ['margin'], which, computedStyle)));
  } else {
    return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra),
        which, computedStyle);
  }
}

var cssShow = {position: 'absolute', visibility: 'hidden', display: 'block'};

// fix #119 : https://github.com/kissyteam/kissy/issues/119
function getWHIgnoreDisplay(elem) {
  var val, args = arguments;
  // in case elem is window
  // elem.offsetWidth === undefined
  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }
  return val;
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);
  domUtils['outer' + first] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, val) {
    if (val !== undefined) {
      if (elem) {
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);
        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
        }
        return css(elem, name, val);
      }
      return;
    }
    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

function css(el, name, value) {
  if (typeof name === 'object') {
    for (var i in name) {
      css(el, i, name[i]);
    }
    return;
  }
  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value = value + 'px';
    }
    el.style[name] = value;
  } else {
    return getComputedStyleX(el, name);
  }
}

function mix(to, from) {
  for (var i in from) {
    to[i] = from[i];
  }
  return to;
}

var utils = module.exports = {
  getWindow: function (node) {
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  offset: function (el, value) {
    if (typeof value !== 'undefined') {
      setOffset(el, value);
    } else {
      return getOffset(el);
    }
  },
  isWindow: isWindow,
  each: each,
  css: css,
  clone: function (obj) {
    var ret = {};
    for (var i in obj) {
      ret[i] = obj[i];
    }
    var overflow = obj.overflow;
    if (overflow) {
      for (i in obj) {
        ret.overflow[i] = obj.overflow[i];
      }
    }
    return ret;
  },
  mix: mix,
  scrollLeft: function (w, v) {
    if (isWindow(w)) {
      if (v === undefined) {
        return getScrollLeft(w);
      } else {
        window.scrollTo(v, getScrollTop(w));
      }
    } else {
      if (v === undefined) {
        return w.scrollLeft;
      } else {
        w.scrollLeft = v;
      }
    }
  },
  scrollTop: function (w, v) {
    if (isWindow(w)) {
      if (v === undefined) {
        return getScrollTop(w);
      } else {
        window.scrollTo(getScrollLeft(w), v);
      }
    } else {
      if (v === undefined) {
        return w.scrollTop;
      } else {
        w.scrollTop = v;
      }
    }
  },
  merge: function () {
    var ret = {};
    for (var i = 0; i < arguments.length; i++) {
      utils.mix(ret, arguments[i]);
    }
    return ret;
  },
  viewportWidth: 0,
  viewportHeight: 0
};

mix(utils, domUtils);
});
var util_1 = util.getWindow;
var util_2 = util.offset;
var util_3 = util.isWindow;
var util_4 = util.each;
var util_5 = util.css;
var util_6 = util.clone;
var util_7 = util.mix;
var util_8 = util.scrollLeft;
var util_9 = util.scrollTop;
var util_10 = util.merge;
var util_11 = util.viewportWidth;
var util_12 = util.viewportHeight;

function scrollIntoView(elem, container, config) {
  config = config || {};
  // document 归一化到 window
  if (container.nodeType === 9) {
    container = util.getWindow(container);
  }

  var allowHorizontalScroll = config.allowHorizontalScroll;
  var onlyScrollIfNeeded = config.onlyScrollIfNeeded;
  var alignWithTop = config.alignWithTop;
  var alignWithLeft = config.alignWithLeft;

  allowHorizontalScroll = allowHorizontalScroll === undefined ? true : allowHorizontalScroll;

  var isWin = util.isWindow(container);
  var elemOffset = util.offset(elem);
  var eh = util.outerHeight(elem);
  var ew = util.outerWidth(elem);
  var containerOffset, ch, cw, containerScroll,
    diffTop, diffBottom, win,
    winScroll, ww, wh;

  if (isWin) {
    win = container;
    wh = util.height(win);
    ww = util.width(win);
    winScroll = {
      left: util.scrollLeft(win),
      top: util.scrollTop(win)
    };
    // elem 相对 container 可视视窗的距离
    diffTop = {
      left: elemOffset.left - winScroll.left,
      top: elemOffset.top - winScroll.top
    };
    diffBottom = {
      left: elemOffset.left + ew - (winScroll.left + ww),
      top: elemOffset.top + eh - (winScroll.top + wh)
    };
    containerScroll = winScroll;
  } else {
    containerOffset = util.offset(container);
    ch = container.clientHeight;
    cw = container.clientWidth;
    containerScroll = {
      left: container.scrollLeft,
      top: container.scrollTop
    };
    // elem 相对 container 可视视窗的距离
    // 注意边框, offset 是边框到根节点
    diffTop = {
      left: elemOffset.left - (containerOffset.left +
      (parseFloat(util.css(container, 'borderLeftWidth')) || 0)),
      top: elemOffset.top - (containerOffset.top +
      (parseFloat(util.css(container, 'borderTopWidth')) || 0))
    };
    diffBottom = {
      left: elemOffset.left + ew -
      (containerOffset.left + cw +
      (parseFloat(util.css(container, 'borderRightWidth')) || 0)),
      top: elemOffset.top + eh -
      (containerOffset.top + ch +
      (parseFloat(util.css(container, 'borderBottomWidth')) || 0))
    };
  }

  if (diffTop.top < 0 || diffBottom.top > 0) {
    // 强制向上
    if (alignWithTop === true) {
      util.scrollTop(container, containerScroll.top + diffTop.top);
    } else if (alignWithTop === false) {
      util.scrollTop(container, containerScroll.top + diffBottom.top);
    } else {
      // 自动调整
      if (diffTop.top < 0) {
        util.scrollTop(container, containerScroll.top + diffTop.top);
      } else {
        util.scrollTop(container, containerScroll.top + diffBottom.top);
      }
    }
  } else {
    if (!onlyScrollIfNeeded) {
      alignWithTop = alignWithTop === undefined ? true : !!alignWithTop;
      if (alignWithTop) {
        util.scrollTop(container, containerScroll.top + diffTop.top);
      } else {
        util.scrollTop(container, containerScroll.top + diffBottom.top);
      }
    }
  }

  if (allowHorizontalScroll) {
    if (diffTop.left < 0 || diffBottom.left > 0) {
      // 强制向上
      if (alignWithLeft === true) {
        util.scrollLeft(container, containerScroll.left + diffTop.left);
      } else if (alignWithLeft === false) {
        util.scrollLeft(container, containerScroll.left + diffBottom.left);
      } else {
        // 自动调整
        if (diffTop.left < 0) {
          util.scrollLeft(container, containerScroll.left + diffTop.left);
        } else {
          util.scrollLeft(container, containerScroll.left + diffBottom.left);
        }
      }
    } else {
      if (!onlyScrollIfNeeded) {
        alignWithLeft = alignWithLeft === undefined ? true : !!alignWithLeft;
        if (alignWithLeft) {
          util.scrollLeft(container, containerScroll.left + diffTop.left);
        } else {
          util.scrollLeft(container, containerScroll.left + diffBottom.left);
        }
      }
    }
  }
}

var domScrollIntoView = scrollIntoView;

var domScrollIntoView$1 = domScrollIntoView;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var findDOMNode = reactDom.findDOMNode;



var IMPERATIVE_API = ['blur', 'checkValidity', 'click', 'focus', 'select', 'setCustomValidity', 'setSelectionRange', 'setRangeText'];

function getScrollOffset() {
  return {
    x: window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft,
    y: window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
  };
}

var Autocomplete = function (_React$Component) {
  _inherits(Autocomplete, _React$Component);

  function Autocomplete(props) {
    _classCallCheck(this, Autocomplete);

    var _this = _possibleConstructorReturn(this, (Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).call(this, props));

    _this.state = {
      isOpen: false,
      highlightedIndex: null
    };
    _this._debugStates = [];
    _this.ensureHighlightedIndex = _this.ensureHighlightedIndex.bind(_this);
    _this.exposeAPI = _this.exposeAPI.bind(_this);
    _this.handleInputFocus = _this.handleInputFocus.bind(_this);
    _this.handleInputBlur = _this.handleInputBlur.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleInputClick = _this.handleInputClick.bind(_this);
    _this.maybeAutoCompleteText = _this.maybeAutoCompleteText.bind(_this);
    return _this;
  }

  _createClass(Autocomplete, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // this.refs is frozen, so we need to assign a new object to it
      this.refs = {};
      this._ignoreBlur = false;
      this._ignoreFocus = false;
      this._scrollOffset = null;
      this._scrollTimer = null;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this._scrollTimer);
      this._scrollTimer = null;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.highlightedIndex !== null) {
        this.setState(this.ensureHighlightedIndex);
      }
      if (nextProps.autoHighlight && (this.props.value !== nextProps.value || this.state.highlightedIndex === null)) {
        this.setState(this.maybeAutoCompleteText);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.isOpen()) {
        this.setMenuPositions();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.isOpen && !prevState.isOpen || 'open' in this.props && this.props.open && !prevProps.open) this.setMenuPositions();

      this.maybeScrollItemIntoView();
      if (prevState.isOpen !== this.state.isOpen) {
        this.props.onMenuVisibilityChange(this.state.isOpen);
      }
    }
  }, {
    key: 'exposeAPI',
    value: function exposeAPI(el) {
      var _this2 = this;

      this.refs.input = el;
      IMPERATIVE_API.forEach(function (ev) {
        return _this2[ev] = el && el[ev] && el[ev].bind(el);
      });
    }
  }, {
    key: 'maybeScrollItemIntoView',
    value: function maybeScrollItemIntoView() {
      if (this.isOpen() && this.state.highlightedIndex !== null) {
        var itemNode = this.refs['item-' + this.state.highlightedIndex];
        var menuNode = this.refs.menu;
        domScrollIntoView$1(findDOMNode(itemNode), findDOMNode(menuNode), { onlyScrollIfNeeded: true });
      }
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      if (Autocomplete.keyDownHandlers[event.key]) Autocomplete.keyDownHandlers[event.key].call(this, event);else if (!this.isOpen()) {
        this.setState({
          isOpen: true
        });
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.props.onChange(event, event.target.value);
    }
  }, {
    key: 'getFilteredItems',
    value: function getFilteredItems(props) {
      var items = props.items;

      if (props.shouldItemRender) {
        items = items.filter(function (item) {
          return props.shouldItemRender(item, props.value);
        });
      }

      if (props.sortItems) {
        items.sort(function (a, b) {
          return props.sortItems(a, b, props.value);
        });
      }

      return items;
    }
  }, {
    key: 'maybeAutoCompleteText',
    value: function maybeAutoCompleteText(state, props) {
      var highlightedIndex = state.highlightedIndex;
      var value = props.value,
          getItemValue = props.getItemValue;

      var index = highlightedIndex === null ? 0 : highlightedIndex;
      var items = this.getFilteredItems(props);
      for (var i = 0; i < items.length; i++) {
        if (props.isItemSelectable(items[index])) break;
        index = (index + 1) % items.length;
      }
      var matchedItem = items[index] && props.isItemSelectable(items[index]) ? items[index] : null;
      if (value !== '' && matchedItem) {
        var itemValue = getItemValue(matchedItem);
        var itemValueDoesMatch = itemValue.toLowerCase().indexOf(value.toLowerCase()) === 0;
        if (itemValueDoesMatch) {
          return { highlightedIndex: index };
        }
      }
      return { highlightedIndex: null };
    }
  }, {
    key: 'ensureHighlightedIndex',
    value: function ensureHighlightedIndex(state, props) {
      if (state.highlightedIndex >= this.getFilteredItems(props).length) {
        return { highlightedIndex: null };
      }
    }
  }, {
    key: 'setMenuPositions',
    value: function setMenuPositions() {
      var node = this.refs.input;
      var rect = node.getBoundingClientRect();
      var computedStyle = commonjsGlobal.window.getComputedStyle(node);
      var marginBottom = parseInt(computedStyle.marginBottom, 10) || 0;
      var marginLeft = parseInt(computedStyle.marginLeft, 10) || 0;
      var marginRight = parseInt(computedStyle.marginRight, 10) || 0;
      this.setState({
        menuTop: rect.bottom + marginBottom,
        menuLeft: rect.left + marginLeft,
        menuWidth: rect.width + marginLeft + marginRight
      });
    }
  }, {
    key: 'highlightItemFromMouse',
    value: function highlightItemFromMouse(index) {
      this.setState({ highlightedIndex: index });
    }
  }, {
    key: 'selectItemFromMouse',
    value: function selectItemFromMouse(item) {
      var _this3 = this;

      var value = this.props.getItemValue(item);
      // The menu will de-render before a mouseLeave event
      // happens. Clear the flag to release control over focus
      this.setIgnoreBlur(false);
      this.setState({
        isOpen: false,
        highlightedIndex: null
      }, function () {
        _this3.props.onSelect(value, item);
      });
    }
  }, {
    key: 'setIgnoreBlur',
    value: function setIgnoreBlur(ignore) {
      this._ignoreBlur = ignore;
    }
  }, {
    key: 'renderMenu',
    value: function renderMenu() {
      var _this4 = this;

      var items = this.getFilteredItems(this.props).map(function (item, index) {
        var element = _this4.props.renderItem(item, _this4.state.highlightedIndex === index, { cursor: 'default' });
        return React__default.cloneElement(element, {
          onMouseEnter: _this4.props.isItemSelectable(item) ? function () {
            return _this4.highlightItemFromMouse(index);
          } : null,
          onClick: _this4.props.isItemSelectable(item) ? function () {
            return _this4.selectItemFromMouse(item);
          } : null,
          ref: function ref(e) {
            return _this4.refs['item-' + index] = e;
          }
        });
      });
      var style = {
        left: this.state.menuLeft,
        top: this.state.menuTop,
        minWidth: this.state.menuWidth
      };
      var menu = this.props.renderMenu(items, this.props.value, style);
      return React__default.cloneElement(menu, {
        ref: function ref(e) {
          return _this4.refs.menu = e;
        },
        // Ignore blur to prevent menu from de-rendering before we can process click
        onTouchStart: function onTouchStart() {
          return _this4.setIgnoreBlur(true);
        },
        onMouseEnter: function onMouseEnter() {
          return _this4.setIgnoreBlur(true);
        },
        onMouseLeave: function onMouseLeave() {
          return _this4.setIgnoreBlur(false);
        }
      });
    }
  }, {
    key: 'handleInputBlur',
    value: function handleInputBlur(event) {
      var _this5 = this;

      if (this._ignoreBlur) {
        this._ignoreFocus = true;
        this._scrollOffset = getScrollOffset();
        this.refs.input.focus();
        return;
      }
      var setStateCallback = void 0;
      var highlightedIndex = this.state.highlightedIndex;

      if (this.props.selectOnBlur && highlightedIndex !== null) {
        var items = this.getFilteredItems(this.props);
        var item = items[highlightedIndex];
        var value = this.props.getItemValue(item);
        setStateCallback = function setStateCallback() {
          return _this5.props.onSelect(value, item);
        };
      }
      this.setState({
        isOpen: false,
        highlightedIndex: null
      }, setStateCallback);
      var onBlur = this.props.inputProps.onBlur;

      if (onBlur) {
        onBlur(event);
      }
    }
  }, {
    key: 'handleInputFocus',
    value: function handleInputFocus(event) {
      var _this6 = this;

      if (this._ignoreFocus) {
        this._ignoreFocus = false;
        var _scrollOffset = this._scrollOffset,
            x = _scrollOffset.x,
            y = _scrollOffset.y;

        this._scrollOffset = null;
        // Focus will cause the browser to scroll the <input> into view.
        // This can cause the mouse coords to change, which in turn
        // could cause a new highlight to happen, cancelling the click
        // event (when selecting with the mouse)
        window.scrollTo(x, y);
        // Some browsers wait until all focus event handlers have been
        // processed before scrolling the <input> into view, so let's
        // scroll again on the next tick to ensure we're back to where
        // the user was before focus was lost. We could do the deferred
        // scroll only, but that causes a jarring split second jump in
        // some browsers that scroll before the focus event handlers
        // are triggered.
        clearTimeout(this._scrollTimer);
        this._scrollTimer = setTimeout(function () {
          _this6._scrollTimer = null;
          window.scrollTo(x, y);
        }, 0);
        return;
      }
      this.setState({ isOpen: true });
      var onFocus = this.props.inputProps.onFocus;

      if (onFocus) {
        onFocus(event);
      }
    }
  }, {
    key: 'isInputFocused',
    value: function isInputFocused() {
      var el = this.refs.input;
      return el.ownerDocument && el === el.ownerDocument.activeElement;
    }
  }, {
    key: 'handleInputClick',
    value: function handleInputClick() {
      // Input will not be focused if it's disabled
      if (this.isInputFocused() && !this.isOpen()) this.setState({ isOpen: true });
    }
  }, {
    key: 'composeEventHandlers',
    value: function composeEventHandlers(internal, external) {
      return external ? function (e) {
        internal(e);external(e);
      } : internal;
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return 'open' in this.props ? this.props.open : this.state.isOpen;
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.debug) {
        // you don't like it, you love it
        this._debugStates.push({
          id: this._debugStates.length,
          state: this.state
        });
      }

      var inputProps = this.props.inputProps;

      var open = this.isOpen();
      return React__default.createElement(
        'div',
        _extends({ style: _extends({}, this.props.wrapperStyle) }, this.props.wrapperProps),
        this.props.renderInput(_extends({}, inputProps, {
          role: 'combobox',
          'aria-autocomplete': 'list',
          'aria-expanded': open,
          autoComplete: 'off',
          ref: this.exposeAPI,
          onFocus: this.handleInputFocus,
          onBlur: this.handleInputBlur,
          onChange: this.handleChange,
          onKeyDown: this.composeEventHandlers(this.handleKeyDown, inputProps.onKeyDown),
          onClick: this.composeEventHandlers(this.handleInputClick, inputProps.onClick),
          value: this.props.value
        })),
        open && this.renderMenu(),
        this.props.debug && React__default.createElement(
          'pre',
          { style: { marginLeft: 300 } },
          JSON.stringify(this._debugStates.slice(Math.max(0, this._debugStates.length - 5), this._debugStates.length), null, 2)
        )
      );
    }
  }]);

  return Autocomplete;
}(React__default.Component);

Autocomplete.propTypes = {
  /**
   * The items to display in the dropdown menu
   */
  items: require$$0.array.isRequired,
  /**
   * The value to display in the input field
   */
  value: require$$0.any,
  /**
   * Arguments: `event: Event, value: String`
   *
   * Invoked every time the user changes the input's value.
   */
  onChange: require$$0.func,
  /**
   * Arguments: `value: String, item: Any`
   *
   * Invoked when the user selects an item from the dropdown menu.
   */
  onSelect: require$$0.func,
  /**
   * Arguments: `item: Any, value: String`
   *
   * Invoked for each entry in `items` and its return value is used to
   * determine whether or not it should be displayed in the dropdown menu.
   * By default all items are always rendered.
   */
  shouldItemRender: require$$0.func,
  /**
   * Arguments: `item: Any`
   *
   * Invoked when attempting to select an item. The return value is used to
   * determine whether the item should be selectable or not.
   * By default all items are selectable.
   */
  isItemSelectable: require$$0.func,
  /**
   * Arguments: `itemA: Any, itemB: Any, value: String`
   *
   * The function which is used to sort `items` before display.
   */
  sortItems: require$$0.func,
  /**
   * Arguments: `item: Any`
   *
   * Used to read the display value from each entry in `items`.
   */
  getItemValue: require$$0.func.isRequired,
  /**
   * Arguments: `item: Any, isHighlighted: Boolean, styles: Object`
   *
   * Invoked for each entry in `items` that also passes `shouldItemRender` to
   * generate the render tree for each item in the dropdown menu. `styles` is
   * an optional set of styles that can be applied to improve the look/feel
   * of the items in the dropdown menu.
   */
  renderItem: require$$0.func.isRequired,
  /**
   * Arguments: `items: Array<Any>, value: String, styles: Object`
   *
   * Invoked to generate the render tree for the dropdown menu. Ensure the
   * returned tree includes every entry in `items` or else the highlight order
   * and keyboard navigation logic will break. `styles` will contain
   * { top, left, minWidth } which are the coordinates of the top-left corner
   * and the width of the dropdown menu.
   */
  renderMenu: require$$0.func,
  /**
   * Styles that are applied to the dropdown menu in the default `renderMenu`
   * implementation. If you override `renderMenu` and you want to use
   * `menuStyle` you must manually apply them (`this.props.menuStyle`).
   */
  menuStyle: require$$0.object,
  /**
   * Arguments: `props: Object`
   *
   * Invoked to generate the input element. The `props` argument is the result
   * of merging `props.inputProps` with a selection of props that are required
   * both for functionality and accessibility. At the very least you need to
   * apply `props.ref` and all `props.on<event>` event handlers. Failing to do
   * this will cause `Autocomplete` to behave unexpectedly.
   */
  renderInput: require$$0.func,
  /**
   * Props passed to `props.renderInput`. By default these props will be
   * applied to the `<input />` element rendered by `Autocomplete`, unless you
   * have specified a custom value for `props.renderInput`. Any properties
   * supported by `HTMLInputElement` can be specified, apart from the
   * following which are set by `Autocomplete`: value, autoComplete, role,
   * aria-autocomplete. `inputProps` is commonly used for (but not limited to)
   * placeholder, event handlers (onFocus, onBlur, etc.), autoFocus, etc..
   */
  inputProps: require$$0.object,
  /**
   * Props that are applied to the element which wraps the `<input />` and
   * dropdown menu elements rendered by `Autocomplete`.
   */
  wrapperProps: require$$0.object,
  /**
   * This is a shorthand for `wrapperProps={{ style: <your styles> }}`.
   * Note that `wrapperStyle` is applied before `wrapperProps`, so the latter
   * will win if it contains a `style` entry.
   */
  wrapperStyle: require$$0.object,
  /**
   * Whether or not to automatically highlight the top match in the dropdown
   * menu.
   */
  autoHighlight: require$$0.bool,
  /**
   * Whether or not to automatically select the highlighted item when the
   * `<input>` loses focus.
   */
  selectOnBlur: require$$0.bool,
  /**
   * Arguments: `isOpen: Boolean`
   *
   * Invoked every time the dropdown menu's visibility changes (i.e. every
   * time it is displayed/hidden).
   */
  onMenuVisibilityChange: require$$0.func,
  /**
   * Used to override the internal logic which displays/hides the dropdown
   * menu. This is useful if you want to force a certain state based on your
   * UX/business logic. Use it together with `onMenuVisibilityChange` for
   * fine-grained control over the dropdown menu dynamics.
   */
  open: require$$0.bool,
  debug: require$$0.bool
};
Autocomplete.defaultProps = {
  value: '',
  wrapperProps: {},
  wrapperStyle: {
    display: 'inline-block'
  },
  inputProps: {},
  renderInput: function renderInput(props) {
    return React__default.createElement('input', props);
  },
  onChange: function onChange() {},
  onSelect: function onSelect() {},
  isItemSelectable: function isItemSelectable() {
    return true;
  },
  renderMenu: function renderMenu(items, value, style) {
    return React__default.createElement('div', { style: _extends({}, style, this.menuStyle), children: items });
  },

  menuStyle: {
    borderRadius: '3px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '2px 0',
    fontSize: '90%',
    position: 'fixed',
    overflow: 'auto',
    maxHeight: '50%' },
  autoHighlight: true,
  selectOnBlur: false,
  onMenuVisibilityChange: function onMenuVisibilityChange() {}
};
Autocomplete.keyDownHandlers = {
  ArrowDown: function ArrowDown(event) {
    event.preventDefault();
    var items = this.getFilteredItems(this.props);
    if (!items.length) return;
    var highlightedIndex = this.state.highlightedIndex;

    var index = highlightedIndex === null ? -1 : highlightedIndex;
    for (var i = 0; i < items.length; i++) {
      var p = (index + i + 1) % items.length;
      if (this.props.isItemSelectable(items[p])) {
        index = p;
        break;
      }
    }
    if (index > -1 && index !== highlightedIndex) {
      this.setState({
        highlightedIndex: index,
        isOpen: true
      });
    }
  },
  ArrowUp: function ArrowUp(event) {
    event.preventDefault();
    var items = this.getFilteredItems(this.props);
    if (!items.length) return;
    var highlightedIndex = this.state.highlightedIndex;

    var index = highlightedIndex === null ? items.length : highlightedIndex;
    for (var i = 0; i < items.length; i++) {
      var p = (index - (1 + i) + items.length) % items.length;
      if (this.props.isItemSelectable(items[p])) {
        index = p;
        break;
      }
    }
    if (index !== items.length) {
      this.setState({
        highlightedIndex: index,
        isOpen: true
      });
    }
  },
  Enter: function Enter(event) {
    var _this7 = this;

    // Key code 229 is used for selecting items from character selectors (Pinyin, Kana, etc)
    if (event.keyCode !== 13) return;
    // In case the user is currently hovering over the menu
    this.setIgnoreBlur(false);
    if (!this.isOpen()) {
      // menu is closed so there is no selection to accept -> do nothing
      return;
    } else if (this.state.highlightedIndex == null) {
      // input has focus but no menu item is selected + enter is hit -> close the menu, highlight whatever's in input
      this.setState({
        isOpen: false
      }, function () {
        _this7.refs.input.select();
      });
    } else {
      // text entered + menu item has been highlighted + enter is hit -> update value to that of selected menu item, close the menu
      event.preventDefault();
      var item = this.getFilteredItems(this.props)[this.state.highlightedIndex];
      var value = this.props.getItemValue(item);
      this.setState({
        isOpen: false,
        highlightedIndex: null
      }, function () {
        //this.refs.input.focus() // TODO: file issue
        _this7.refs.input.setSelectionRange(value.length, value.length);
        _this7.props.onSelect(value, item);
      });
    }
  },
  Escape: function Escape() {
    // In case the user is currently hovering over the menu
    this.setIgnoreBlur(false);
    this.setState({
      highlightedIndex: null,
      isOpen: false
    });
  },
  Tab: function Tab() {
    // In case the user is currently hovering over the menu
    this.setIgnoreBlur(false);
  }
};


var Autocomplete_1 = Autocomplete;

var InputAutoProperties = /** @class */ (function (_super) {
    __extends(InputAutoProperties, _super);
    function InputAutoProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InputAutoProperties;
}(ComponentBaseProperties));
var AutoFill = /** @class */ (function (_super) {
    __extends(AutoFill, _super);
    function AutoFill() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoFill.prototype.render = function () {
        var _this = this;
        var Autocomplete = require("react-autocomplete");
        this.state = {
            value: '',
        };
        return (React.createElement("div", { className: styles$9.component },
            React.createElement(Autocomplete_1, { items: [
                    { id: 'foo', label: 'foo' },
                    { id: 'bar', label: 'bar' },
                    { id: 'baz', label: 'baz' },
                ], shouldItemRender: function (item, value) { return item.label.toLowerCase().indexOf(value.toLowerCase()) > -1; }, getItemValue: function (item) { return item.label; }, renderItem: function (item, highlighted) {
                    return React.createElement("div", { key: item.id, style: { backgroundColor: highlighted ? '#eee' : 'transparent' } }, item.label);
                }, 
                // renderInput={
                // }
                value: this.state.value, onChange: function (e) { return _this.setState({ value: e.target.value }); }, onSelect: function (value) { return _this.setState({ value: value }); } })));
    };
    return AutoFill;
}(ComponentBase));

var css$b = "/*** Colors ***/\n/*** End - Colors ***/\n/*** Font Families ***/\n/*** End - Font Families ***/\n/*** Font Size ***/\n/*** End - Font Size ***/\n/*** Font Weight ***/\n/*** End - Font Weight ***/\n.StackPanel-module_component__mRChg {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0 30px;\n  position: relative; }\n  .StackPanel-module_component__mRChg > * {\n    width: 100%; }\n\n.StackPanel-module_transparent__Azr0Q {\n  background-color: transparent; }\n\n.StackPanel-module_default__j2xB8 {\n  background-color: #fff; }\n\n.StackPanel-module_silver__1YQMk {\n  background-color: #ebedee; }\n\n.StackPanel-module_light__3z7gi {\n  background-color: #ebedee;\n  border: 1px solid #e2eaf1;\n  padding: 0 20px 10px; }\n  .StackPanel-module_light__3z7gi:hover, .StackPanel-module_light__3z7gi.StackPanel-module_selected__PgC5l {\n    background-color: #fff;\n    border: 1px solid #00adee; }\n\n.StackPanel-module_dark__2fP6W {\n  background-color: #2e4049;\n  padding: 30px; }\n\n.StackPanel-module_padded-panel__3KL2s {\n  padding: 0 30px; }\n";
var styles$a = {"component":"StackPanel-module_component__mRChg","transparent":"StackPanel-module_transparent__Azr0Q","default":"StackPanel-module_default__j2xB8","silver":"StackPanel-module_silver__1YQMk","light":"StackPanel-module_light__3z7gi","selected":"StackPanel-module_selected__PgC5l","dark":"StackPanel-module_dark__2fP6W","padded-panel":"StackPanel-module_padded-panel__3KL2s"};
styleInject(css$b);

var StackPanelProperties = /** @class */ (function (_super) {
    __extends(StackPanelProperties, _super);
    function StackPanelProperties() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.skin = "default";
        return _this;
    }
    return StackPanelProperties;
}(ComponentBaseProperties));
var StackPanel = /** @class */ (function (_super) {
    __extends(StackPanel, _super);
    function StackPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackPanel.prototype.render = function () {
        var skinClass = "";
        if (this.props.skin) {
            skinClass = styles$a[this.props.skin];
        }
        var componentClasses = classnames(styles$a.component, this.props.componentClasses, skinClass, this.props.className);
        return (React.createElement("div", { className: componentClasses }, this.props.children));
    };
    return StackPanel;
}(ComponentBase));

var css$c = "/*** Colors ***/\n/*** End - Colors ***/\n/*** Font Families ***/\n/*** End - Font Families ***/\n/*** Font Size ***/\n/*** End - Font Size ***/\n/*** Font Weight ***/\n/*** End - Font Weight ***/\n.WrapPanel-module_component__2rpf2 {\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  align-items: center; }\n  .WrapPanel-module_component__2rpf2 > * {\n    margin-right: 5px; }\n\n.WrapPanel-module_transparent__2l89A {\n  background-color: transparent; }\n\n.WrapPanel-module_default__1l9n1 {\n  background-color: #fff; }\n\n.WrapPanel-module_header__37qtU {\n  background-color: #ebedee; }\n\n.WrapPanel-module_light__31Dqs {\n  background-color: #ebedee;\n  border: 1px solid #e2eaf1;\n  padding: 15px 20px; }\n  .WrapPanel-module_light__31Dqs:hover, .WrapPanel-module_light__31Dqs.WrapPanel-module_selected__1nLpf {\n    background-color: #fff;\n    border: 1px solid #00adee; }\n\n.WrapPanel-module_dark__1ADC6 {\n  background-color: #2e4049; }\n";
var styles$b = {"component":"WrapPanel-module_component__2rpf2","transparent":"WrapPanel-module_transparent__2l89A","default":"WrapPanel-module_default__1l9n1","header":"WrapPanel-module_header__37qtU","light":"WrapPanel-module_light__31Dqs","selected":"WrapPanel-module_selected__1nLpf","dark":"WrapPanel-module_dark__1ADC6"};
styleInject(css$c);

var WrapPanel = /** @class */ (function (_super) {
    __extends(WrapPanel, _super);
    function WrapPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WrapPanel.prototype.render = function () {
        var skinClass = "";
        if (this.props.skin) {
            skinClass = styles$b[this.props.skin];
        }
        var componentClasses = classnames(styles$b.component, this.props.componentClasses, skinClass);
        return (React.createElement("div", { className: componentClasses }, this.props.children));
    };
    return WrapPanel;
}(ComponentBase));

var css$d = "/*** Colors ***/\n/*** End - Colors ***/\n/*** Font Families ***/\n/*** End - Font Families ***/\n/*** Font Size ***/\n/*** End - Font Size ***/\n/*** Font Weight ***/\n/*** End - Font Weight ***/\n.RowPanel-module_component__3wDnh {\n  width: 100%;\n  height: 50px;\n  line-height: 50px;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: space-between; }\n\n.RowPanel-module_flex-start__1CNI6 {\n  justify-content: flex-start; }\n\n.RowPanel-module_flex-end__2qD_v {\n  justify-content: flex-end; }\n\n.RowPanel-module_space-between__39IWO {\n  justify-content: space-between; }\n";
var styles$c = {"component":"RowPanel-module_component__3wDnh","flex-start":"RowPanel-module_flex-start__1CNI6","flex-end":"RowPanel-module_flex-end__2qD_v","space-between":"RowPanel-module_space-between__39IWO"};
styleInject(css$d);

var RowPanel = /** @class */ (function (_super) {
    __extends(RowPanel, _super);
    function RowPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowPanel.prototype.render = function () {
        var alignItemsClass = "";
        if (this.props.alignItems) {
            alignItemsClass = styles$c[this.props.alignItems];
        }
        var componentClasses = classnames(styles$c.component, this.props.componentClasses, alignItemsClass);
        return (React.createElement("div", { className: componentClasses }, this.props.children));
    };
    return RowPanel;
}(ComponentBase));

var css$e = "/*** Colors ***/\n/*** End - Colors ***/\n/*** Font Families ***/\n/*** End - Font Families ***/\n/*** Font Size ***/\n/*** End - Font Size ***/\n/*** Font Weight ***/\n/*** End - Font Weight ***/\n.ScrollPanel-module_component__13H2d {\n  height: 100%; }\n\n.ScrollPanel-module_gradient__OvlCl {\n  width: 100%;\n  height: 100px;\n  position: absolute;\n  z-index: 1;\n  bottom: 0px;\n  background-image: linear-gradient(to bottom, transparent, #fff); }\n\n.ScrollPanel-module_scrollArea__3JylI {\n  direction: ltr; }\n\n.ScrollPanel-module_thumbVertical__2WPKQ {\n  background-color: #ebedee;\n  width: 6px !important;\n  border-radius: 3px; }\n";
var styles$d = {"component":"ScrollPanel-module_component__13H2d","gradient":"ScrollPanel-module_gradient__OvlCl","scrollArea":"ScrollPanel-module_scrollArea__3JylI","thumbVertical":"ScrollPanel-module_thumbVertical__2WPKQ"};
styleInject(css$e);

var performanceNow = createCommonjsModule(function (module) {
// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(commonjsGlobal);


});

var root = typeof window === 'undefined' ? commonjsGlobal : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix];
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix];
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60;

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = performanceNow()
        , next = Math.max(0, frameDuration - (_now - last));
      last = next + _now;
      setTimeout(function() {
        var cp = queue.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0;
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last);
            } catch(e) {
              setTimeout(function() { throw e }, 0);
            }
          }
        }
      }, Math.round(next));
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    });
    return id
  };

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}

var raf_1 = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
};
var cancel = function() {
  caf.apply(root, arguments);
};
var polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};
raf_1.cancel = cancel;
raf_1.polyfill = polyfill;

var div = null;
var prefixes = [ 'Webkit', 'Moz', 'O', 'ms' ];

var prefixStyle = function prefixStyle (prop) {
  // re-use a dummy div
  if (!div) {
    div = document.createElement('div');
  }

  var style = div.style;

  // prop exists without prefix
  if (prop in style) {
    return prop
  }

  // borderRadius -> BorderRadius
  var titleCase = prop.charAt(0).toUpperCase() + prop.slice(1);

  // find the vendor-prefixed prop
  for (var i = prefixes.length; i >= 0; i--) {
    var name = prefixes[i] + titleCase;
    // e.g. WebkitBorderRadius or webkitBorderRadius
    if (name in style) {
      return name
    }
  }

  return false
};

/**
 * Export.
 */

var toNoCase_1 = toNoCase;

/**
 * Test whether a string is camel-case.
 */

var hasSpace = /\s/;
var hasSeparator = /(_|-|\.|:)/;
var hasCamel = /([a-z][A-Z]|[A-Z][a-z])/;

/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 */

function toNoCase(string) {
  if (hasSpace.test(string)) return string.toLowerCase()
  if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase()
  if (hasCamel.test(string)) return uncamelize(string).toLowerCase()
  return string.toLowerCase()
}

/**
 * Separator splitter.
 */

var separatorSplitter = /[\W_]+(.|$)/g;

/**
 * Un-separate a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function unseparate(string) {
  return string.replace(separatorSplitter, function (m, next) {
    return next ? ' ' + next : ''
  })
}

/**
 * Camelcase splitter.
 */

var camelSplitter = /(.)([A-Z]+)/g;

/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function uncamelize(string) {
  return string.replace(camelSplitter, function (m, previous, uppers) {
    return previous + ' ' + uppers.toLowerCase().split('').join(' ')
  })
}

/**
 * Export.
 */

var toSpaceCase_1 = toSpaceCase;

/**
 * Convert a `string` to space case.
 *
 * @param {String} string
 * @return {String}
 */

function toSpaceCase(string) {
  return toNoCase_1(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
    return match ? ' ' + match : ''
  }).trim()
}

/**
 * Export.
 */

var toCamelCase_1 = toCamelCase;

/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */

function toCamelCase(string) {
  return toSpaceCase_1(string).replace(/\s(\w)/g, function (matches, letter) {
    return letter.toUpperCase()
  })
}

/* The following list is defined in React's core */
var IS_UNITLESS = {
  animationIterationCount: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridColumn: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  stopOpacity: true,
  strokeDashoffset: true,
  strokeOpacity: true,
  strokeWidth: true
};

var addPxToStyle = function(name, value) {
  if(typeof value === 'number' && !IS_UNITLESS[ name ]) {
    return value + 'px';
  } else {
    return value;
  }
};

var cache = { 'float': 'cssFloat' };


function style (element, property, value) {
  var camel = cache[property];
  if (typeof camel === 'undefined') {
    camel = detect(property);
  }

  // may be false if CSS prop is unsupported
  if (camel) {
    if (value === undefined) {
      return element.style[camel]
    }

    element.style[camel] = addPxToStyle(camel, value);
  }
}

function each (element, properties) {
  for (var k in properties) {
    if (properties.hasOwnProperty(k)) {
      style(element, k, properties[k]);
    }
  }
}

function detect (cssProp) {
  var camel = toCamelCase_1(cssProp);
  var result = prefixStyle(camel);
  cache[camel] = cache[cssProp] = cache[result] = result;
  return result
}

function set () {
  if (arguments.length === 2) {
    if (typeof arguments[1] === 'string') {
      arguments[0].style.cssText = arguments[1];
    } else {
      each(arguments[0], arguments[1]);
    }
  } else {
    style(arguments[0], arguments[1], arguments[2]);
  }
}

var domCss = set;
var set_1 = set;

var get = function (element, properties) {
  if (Array.isArray(properties)) {
    return properties.reduce(function (obj, prop) {
      obj[prop] = style(element, prop || '');
      return obj
    }, {})
  } else {
    return style(element, properties || '')
  }
};
domCss.set = set_1;
domCss.get = get;

var isString_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isString;
function isString(maybe) {
    return typeof maybe === 'string';
}
});

unwrapExports(isString_1);

var getScrollbarWidth_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = getScrollbarWidth;



var _domCss2 = _interopRequireDefault(domCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var scrollbarWidth = false;

function getScrollbarWidth() {
    if (scrollbarWidth !== false) return scrollbarWidth;
    /* istanbul ignore else */
    if (typeof document !== 'undefined') {
        var div = document.createElement('div');
        (0, _domCss2["default"])(div, {
            width: 100,
            height: 100,
            position: 'absolute',
            top: -9999,
            overflow: 'scroll',
            MsOverflowStyle: 'scrollbar'
        });
        document.body.appendChild(div);
        scrollbarWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);
    } else {
        scrollbarWidth = 0;
    }
    return scrollbarWidth || 0;
}
});

unwrapExports(getScrollbarWidth_1);

var returnFalse_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = returnFalse;
function returnFalse() {
    return false;
}
});

unwrapExports(returnFalse_1);

var getInnerWidth_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = getInnerWidth;
function getInnerWidth(el) {
    var clientWidth = el.clientWidth;

    var _getComputedStyle = getComputedStyle(el),
        paddingLeft = _getComputedStyle.paddingLeft,
        paddingRight = _getComputedStyle.paddingRight;

    return clientWidth - parseFloat(paddingLeft) - parseFloat(paddingRight);
}
});

unwrapExports(getInnerWidth_1);

var getInnerHeight_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = getInnerHeight;
function getInnerHeight(el) {
    var clientHeight = el.clientHeight;

    var _getComputedStyle = getComputedStyle(el),
        paddingTop = _getComputedStyle.paddingTop,
        paddingBottom = _getComputedStyle.paddingBottom;

    return clientHeight - parseFloat(paddingTop) - parseFloat(paddingBottom);
}
});

unwrapExports(getInnerHeight_1);

var styles$e = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
var containerStyleDefault = exports.containerStyleDefault = {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100%'
};

// Overrides containerStyleDefault properties
var containerStyleAutoHeight = exports.containerStyleAutoHeight = {
    height: 'auto'
};

var viewStyleDefault = exports.viewStyleDefault = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'scroll',
    WebkitOverflowScrolling: 'touch'
};

// Overrides viewStyleDefault properties
var viewStyleAutoHeight = exports.viewStyleAutoHeight = {
    position: 'relative',
    top: undefined,
    left: undefined,
    right: undefined,
    bottom: undefined
};

var viewStyleUniversalInitial = exports.viewStyleUniversalInitial = {
    overflow: 'hidden',
    marginRight: 0,
    marginBottom: 0
};

var trackHorizontalStyleDefault = exports.trackHorizontalStyleDefault = {
    position: 'absolute',
    height: 6
};

var trackVerticalStyleDefault = exports.trackVerticalStyleDefault = {
    position: 'absolute',
    width: 6
};

var thumbHorizontalStyleDefault = exports.thumbHorizontalStyleDefault = {
    position: 'relative',
    display: 'block',
    height: '100%'
};

var thumbVerticalStyleDefault = exports.thumbVerticalStyleDefault = {
    position: 'relative',
    display: 'block',
    width: '100%'
};

var disableSelectStyle = exports.disableSelectStyle = {
    userSelect: 'none'
};

var disableSelectStyleReset = exports.disableSelectStyleReset = {
    userSelect: ''
};
});

unwrapExports(styles$e);
var styles_1 = styles$e.containerStyleDefault;
var styles_2 = styles$e.containerStyleAutoHeight;
var styles_3 = styles$e.viewStyleDefault;
var styles_4 = styles$e.viewStyleAutoHeight;
var styles_5 = styles$e.viewStyleUniversalInitial;
var styles_6 = styles$e.trackHorizontalStyleDefault;
var styles_7 = styles$e.trackVerticalStyleDefault;
var styles_8 = styles$e.thumbHorizontalStyleDefault;
var styles_9 = styles$e.thumbVerticalStyleDefault;
var styles_10 = styles$e.disableSelectStyle;
var styles_11 = styles$e.disableSelectStyleReset;

var defaultRenderElements = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.renderViewDefault = renderViewDefault;
exports.renderTrackHorizontalDefault = renderTrackHorizontalDefault;
exports.renderTrackVerticalDefault = renderTrackVerticalDefault;
exports.renderThumbHorizontalDefault = renderThumbHorizontalDefault;
exports.renderThumbVerticalDefault = renderThumbVerticalDefault;



var _react2 = _interopRequireDefault(React__default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* eslint-disable react/prop-types */

function renderViewDefault(props) {
    return _react2["default"].createElement('div', props);
}

function renderTrackHorizontalDefault(_ref) {
    var style = _ref.style,
        props = _objectWithoutProperties(_ref, ['style']);

    var finalStyle = _extends({}, style, {
        right: 2,
        bottom: 2,
        left: 2,
        borderRadius: 3
    });
    return _react2["default"].createElement('div', _extends({ style: finalStyle }, props));
}

function renderTrackVerticalDefault(_ref2) {
    var style = _ref2.style,
        props = _objectWithoutProperties(_ref2, ['style']);

    var finalStyle = _extends({}, style, {
        right: 2,
        bottom: 2,
        top: 2,
        borderRadius: 3
    });
    return _react2["default"].createElement('div', _extends({ style: finalStyle }, props));
}

function renderThumbHorizontalDefault(_ref3) {
    var style = _ref3.style,
        props = _objectWithoutProperties(_ref3, ['style']);

    var finalStyle = _extends({}, style, {
        cursor: 'pointer',
        borderRadius: 'inherit',
        backgroundColor: 'rgba(0,0,0,.2)'
    });
    return _react2["default"].createElement('div', _extends({ style: finalStyle }, props));
}

function renderThumbVerticalDefault(_ref4) {
    var style = _ref4.style,
        props = _objectWithoutProperties(_ref4, ['style']);

    var finalStyle = _extends({}, style, {
        cursor: 'pointer',
        borderRadius: 'inherit',
        backgroundColor: 'rgba(0,0,0,.2)'
    });
    return _react2["default"].createElement('div', _extends({ style: finalStyle }, props));
}
});

unwrapExports(defaultRenderElements);
var defaultRenderElements_1 = defaultRenderElements.renderViewDefault;
var defaultRenderElements_2 = defaultRenderElements.renderTrackHorizontalDefault;
var defaultRenderElements_3 = defaultRenderElements.renderTrackVerticalDefault;
var defaultRenderElements_4 = defaultRenderElements.renderThumbHorizontalDefault;
var defaultRenderElements_5 = defaultRenderElements.renderThumbVerticalDefault;

var Scrollbars_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _raf3 = _interopRequireDefault(raf_1);



var _domCss2 = _interopRequireDefault(domCss);





var _propTypes2 = _interopRequireDefault(require$$0);



var _isString2 = _interopRequireDefault(isString_1);



var _getScrollbarWidth2 = _interopRequireDefault(getScrollbarWidth_1);



var _returnFalse2 = _interopRequireDefault(returnFalse_1);



var _getInnerWidth2 = _interopRequireDefault(getInnerWidth_1);



var _getInnerHeight2 = _interopRequireDefault(getInnerHeight_1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scrollbars = function (_Component) {
    _inherits(Scrollbars, _Component);

    function Scrollbars(props) {
        var _ref;

        _classCallCheck(this, Scrollbars);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Scrollbars.__proto__ || Object.getPrototypeOf(Scrollbars)).call.apply(_ref, [this, props].concat(rest)));

        _this.getScrollLeft = _this.getScrollLeft.bind(_this);
        _this.getScrollTop = _this.getScrollTop.bind(_this);
        _this.getScrollWidth = _this.getScrollWidth.bind(_this);
        _this.getScrollHeight = _this.getScrollHeight.bind(_this);
        _this.getClientWidth = _this.getClientWidth.bind(_this);
        _this.getClientHeight = _this.getClientHeight.bind(_this);
        _this.getValues = _this.getValues.bind(_this);
        _this.getThumbHorizontalWidth = _this.getThumbHorizontalWidth.bind(_this);
        _this.getThumbVerticalHeight = _this.getThumbVerticalHeight.bind(_this);
        _this.getScrollLeftForOffset = _this.getScrollLeftForOffset.bind(_this);
        _this.getScrollTopForOffset = _this.getScrollTopForOffset.bind(_this);

        _this.scrollLeft = _this.scrollLeft.bind(_this);
        _this.scrollTop = _this.scrollTop.bind(_this);
        _this.scrollToLeft = _this.scrollToLeft.bind(_this);
        _this.scrollToTop = _this.scrollToTop.bind(_this);
        _this.scrollToRight = _this.scrollToRight.bind(_this);
        _this.scrollToBottom = _this.scrollToBottom.bind(_this);

        _this.handleTrackMouseEnter = _this.handleTrackMouseEnter.bind(_this);
        _this.handleTrackMouseLeave = _this.handleTrackMouseLeave.bind(_this);
        _this.handleHorizontalTrackMouseDown = _this.handleHorizontalTrackMouseDown.bind(_this);
        _this.handleVerticalTrackMouseDown = _this.handleVerticalTrackMouseDown.bind(_this);
        _this.handleHorizontalThumbMouseDown = _this.handleHorizontalThumbMouseDown.bind(_this);
        _this.handleVerticalThumbMouseDown = _this.handleVerticalThumbMouseDown.bind(_this);
        _this.handleWindowResize = _this.handleWindowResize.bind(_this);
        _this.handleScroll = _this.handleScroll.bind(_this);
        _this.handleDrag = _this.handleDrag.bind(_this);
        _this.handleDragEnd = _this.handleDragEnd.bind(_this);

        _this.state = {
            didMountUniversal: false
        };
        return _this;
    }

    _createClass(Scrollbars, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.addListeners();
            this.update();
            this.componentDidMountUniversal();
        }
    }, {
        key: 'componentDidMountUniversal',
        value: function componentDidMountUniversal() {
            // eslint-disable-line react/sort-comp
            var universal = this.props.universal;

            if (!universal) return;
            this.setState({ didMountUniversal: true });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.update();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.removeListeners();
            (0, raf_1.cancel)(this.requestFrame);
            clearTimeout(this.hideTracksTimeout);
            clearInterval(this.detectScrollingInterval);
        }
    }, {
        key: 'getScrollLeft',
        value: function getScrollLeft() {
            if (!this.view) return 0;
            return this.view.scrollLeft;
        }
    }, {
        key: 'getScrollTop',
        value: function getScrollTop() {
            if (!this.view) return 0;
            return this.view.scrollTop;
        }
    }, {
        key: 'getScrollWidth',
        value: function getScrollWidth() {
            if (!this.view) return 0;
            return this.view.scrollWidth;
        }
    }, {
        key: 'getScrollHeight',
        value: function getScrollHeight() {
            if (!this.view) return 0;
            return this.view.scrollHeight;
        }
    }, {
        key: 'getClientWidth',
        value: function getClientWidth() {
            if (!this.view) return 0;
            return this.view.clientWidth;
        }
    }, {
        key: 'getClientHeight',
        value: function getClientHeight() {
            if (!this.view) return 0;
            return this.view.clientHeight;
        }
    }, {
        key: 'getValues',
        value: function getValues() {
            var _ref2 = this.view || {},
                _ref2$scrollLeft = _ref2.scrollLeft,
                scrollLeft = _ref2$scrollLeft === undefined ? 0 : _ref2$scrollLeft,
                _ref2$scrollTop = _ref2.scrollTop,
                scrollTop = _ref2$scrollTop === undefined ? 0 : _ref2$scrollTop,
                _ref2$scrollWidth = _ref2.scrollWidth,
                scrollWidth = _ref2$scrollWidth === undefined ? 0 : _ref2$scrollWidth,
                _ref2$scrollHeight = _ref2.scrollHeight,
                scrollHeight = _ref2$scrollHeight === undefined ? 0 : _ref2$scrollHeight,
                _ref2$clientWidth = _ref2.clientWidth,
                clientWidth = _ref2$clientWidth === undefined ? 0 : _ref2$clientWidth,
                _ref2$clientHeight = _ref2.clientHeight,
                clientHeight = _ref2$clientHeight === undefined ? 0 : _ref2$clientHeight;

            return {
                left: scrollLeft / (scrollWidth - clientWidth) || 0,
                top: scrollTop / (scrollHeight - clientHeight) || 0,
                scrollLeft: scrollLeft,
                scrollTop: scrollTop,
                scrollWidth: scrollWidth,
                scrollHeight: scrollHeight,
                clientWidth: clientWidth,
                clientHeight: clientHeight
            };
        }
    }, {
        key: 'getThumbHorizontalWidth',
        value: function getThumbHorizontalWidth() {
            var _props = this.props,
                thumbSize = _props.thumbSize,
                thumbMinSize = _props.thumbMinSize;
            var _view = this.view,
                scrollWidth = _view.scrollWidth,
                clientWidth = _view.clientWidth;

            var trackWidth = (0, _getInnerWidth2["default"])(this.trackHorizontal);
            var width = Math.ceil(clientWidth / scrollWidth * trackWidth);
            if (trackWidth === width) return 0;
            if (thumbSize) return thumbSize;
            return Math.max(width, thumbMinSize);
        }
    }, {
        key: 'getThumbVerticalHeight',
        value: function getThumbVerticalHeight() {
            var _props2 = this.props,
                thumbSize = _props2.thumbSize,
                thumbMinSize = _props2.thumbMinSize;
            var _view2 = this.view,
                scrollHeight = _view2.scrollHeight,
                clientHeight = _view2.clientHeight;

            var trackHeight = (0, _getInnerHeight2["default"])(this.trackVertical);
            var height = Math.ceil(clientHeight / scrollHeight * trackHeight);
            if (trackHeight === height) return 0;
            if (thumbSize) return thumbSize;
            return Math.max(height, thumbMinSize);
        }
    }, {
        key: 'getScrollLeftForOffset',
        value: function getScrollLeftForOffset(offset) {
            var _view3 = this.view,
                scrollWidth = _view3.scrollWidth,
                clientWidth = _view3.clientWidth;

            var trackWidth = (0, _getInnerWidth2["default"])(this.trackHorizontal);
            var thumbWidth = this.getThumbHorizontalWidth();
            return offset / (trackWidth - thumbWidth) * (scrollWidth - clientWidth);
        }
    }, {
        key: 'getScrollTopForOffset',
        value: function getScrollTopForOffset(offset) {
            var _view4 = this.view,
                scrollHeight = _view4.scrollHeight,
                clientHeight = _view4.clientHeight;

            var trackHeight = (0, _getInnerHeight2["default"])(this.trackVertical);
            var thumbHeight = this.getThumbVerticalHeight();
            return offset / (trackHeight - thumbHeight) * (scrollHeight - clientHeight);
        }
    }, {
        key: 'scrollLeft',
        value: function scrollLeft() {
            var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (!this.view) return;
            this.view.scrollLeft = left;
        }
    }, {
        key: 'scrollTop',
        value: function scrollTop() {
            var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (!this.view) return;
            this.view.scrollTop = top;
        }
    }, {
        key: 'scrollToLeft',
        value: function scrollToLeft() {
            if (!this.view) return;
            this.view.scrollLeft = 0;
        }
    }, {
        key: 'scrollToTop',
        value: function scrollToTop() {
            if (!this.view) return;
            this.view.scrollTop = 0;
        }
    }, {
        key: 'scrollToRight',
        value: function scrollToRight() {
            if (!this.view) return;
            this.view.scrollLeft = this.view.scrollWidth;
        }
    }, {
        key: 'scrollToBottom',
        value: function scrollToBottom() {
            if (!this.view) return;
            this.view.scrollTop = this.view.scrollHeight;
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            /* istanbul ignore if */
            if (typeof document === 'undefined' || !this.view) return;
            var view = this.view,
                trackHorizontal = this.trackHorizontal,
                trackVertical = this.trackVertical,
                thumbHorizontal = this.thumbHorizontal,
                thumbVertical = this.thumbVertical;

            view.addEventListener('scroll', this.handleScroll);
            if (!(0, _getScrollbarWidth2["default"])()) return;
            trackHorizontal.addEventListener('mouseenter', this.handleTrackMouseEnter);
            trackHorizontal.addEventListener('mouseleave', this.handleTrackMouseLeave);
            trackHorizontal.addEventListener('mousedown', this.handleHorizontalTrackMouseDown);
            trackVertical.addEventListener('mouseenter', this.handleTrackMouseEnter);
            trackVertical.addEventListener('mouseleave', this.handleTrackMouseLeave);
            trackVertical.addEventListener('mousedown', this.handleVerticalTrackMouseDown);
            thumbHorizontal.addEventListener('mousedown', this.handleHorizontalThumbMouseDown);
            thumbVertical.addEventListener('mousedown', this.handleVerticalThumbMouseDown);
            window.addEventListener('resize', this.handleWindowResize);
        }
    }, {
        key: 'removeListeners',
        value: function removeListeners() {
            /* istanbul ignore if */
            if (typeof document === 'undefined' || !this.view) return;
            var view = this.view,
                trackHorizontal = this.trackHorizontal,
                trackVertical = this.trackVertical,
                thumbHorizontal = this.thumbHorizontal,
                thumbVertical = this.thumbVertical;

            view.removeEventListener('scroll', this.handleScroll);
            if (!(0, _getScrollbarWidth2["default"])()) return;
            trackHorizontal.removeEventListener('mouseenter', this.handleTrackMouseEnter);
            trackHorizontal.removeEventListener('mouseleave', this.handleTrackMouseLeave);
            trackHorizontal.removeEventListener('mousedown', this.handleHorizontalTrackMouseDown);
            trackVertical.removeEventListener('mouseenter', this.handleTrackMouseEnter);
            trackVertical.removeEventListener('mouseleave', this.handleTrackMouseLeave);
            trackVertical.removeEventListener('mousedown', this.handleVerticalTrackMouseDown);
            thumbHorizontal.removeEventListener('mousedown', this.handleHorizontalThumbMouseDown);
            thumbVertical.removeEventListener('mousedown', this.handleVerticalThumbMouseDown);
            window.removeEventListener('resize', this.handleWindowResize);
            // Possibly setup by `handleDragStart`
            this.teardownDragging();
        }
    }, {
        key: 'handleScroll',
        value: function handleScroll(event) {
            var _this2 = this;

            var _props3 = this.props,
                onScroll = _props3.onScroll,
                onScrollFrame = _props3.onScrollFrame;

            if (onScroll) onScroll(event);
            this.update(function (values) {
                var scrollLeft = values.scrollLeft,
                    scrollTop = values.scrollTop;

                _this2.viewScrollLeft = scrollLeft;
                _this2.viewScrollTop = scrollTop;
                if (onScrollFrame) onScrollFrame(values);
            });
            this.detectScrolling();
        }
    }, {
        key: 'handleScrollStart',
        value: function handleScrollStart() {
            var onScrollStart = this.props.onScrollStart;

            if (onScrollStart) onScrollStart();
            this.handleScrollStartAutoHide();
        }
    }, {
        key: 'handleScrollStartAutoHide',
        value: function handleScrollStartAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.showTracks();
        }
    }, {
        key: 'handleScrollStop',
        value: function handleScrollStop() {
            var onScrollStop = this.props.onScrollStop;

            if (onScrollStop) onScrollStop();
            this.handleScrollStopAutoHide();
        }
    }, {
        key: 'handleScrollStopAutoHide',
        value: function handleScrollStopAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.hideTracks();
        }
    }, {
        key: 'handleWindowResize',
        value: function handleWindowResize() {
            this.update();
        }
    }, {
        key: 'handleHorizontalTrackMouseDown',
        value: function handleHorizontalTrackMouseDown(event) {
            event.preventDefault();
            var target = event.target,
                clientX = event.clientX;

            var _target$getBoundingCl = target.getBoundingClientRect(),
                targetLeft = _target$getBoundingCl.left;

            var thumbWidth = this.getThumbHorizontalWidth();
            var offset = Math.abs(targetLeft - clientX) - thumbWidth / 2;
            this.view.scrollLeft = this.getScrollLeftForOffset(offset);
        }
    }, {
        key: 'handleVerticalTrackMouseDown',
        value: function handleVerticalTrackMouseDown(event) {
            event.preventDefault();
            var target = event.target,
                clientY = event.clientY;

            var _target$getBoundingCl2 = target.getBoundingClientRect(),
                targetTop = _target$getBoundingCl2.top;

            var thumbHeight = this.getThumbVerticalHeight();
            var offset = Math.abs(targetTop - clientY) - thumbHeight / 2;
            this.view.scrollTop = this.getScrollTopForOffset(offset);
        }
    }, {
        key: 'handleHorizontalThumbMouseDown',
        value: function handleHorizontalThumbMouseDown(event) {
            event.preventDefault();
            this.handleDragStart(event);
            var target = event.target,
                clientX = event.clientX;
            var offsetWidth = target.offsetWidth;

            var _target$getBoundingCl3 = target.getBoundingClientRect(),
                left = _target$getBoundingCl3.left;

            this.prevPageX = offsetWidth - (clientX - left);
        }
    }, {
        key: 'handleVerticalThumbMouseDown',
        value: function handleVerticalThumbMouseDown(event) {
            event.preventDefault();
            this.handleDragStart(event);
            var target = event.target,
                clientY = event.clientY;
            var offsetHeight = target.offsetHeight;

            var _target$getBoundingCl4 = target.getBoundingClientRect(),
                top = _target$getBoundingCl4.top;

            this.prevPageY = offsetHeight - (clientY - top);
        }
    }, {
        key: 'setupDragging',
        value: function setupDragging() {
            (0, _domCss2["default"])(document.body, styles$e.disableSelectStyle);
            document.addEventListener('mousemove', this.handleDrag);
            document.addEventListener('mouseup', this.handleDragEnd);
            document.onselectstart = _returnFalse2["default"];
        }
    }, {
        key: 'teardownDragging',
        value: function teardownDragging() {
            (0, _domCss2["default"])(document.body, styles$e.disableSelectStyleReset);
            document.removeEventListener('mousemove', this.handleDrag);
            document.removeEventListener('mouseup', this.handleDragEnd);
            document.onselectstart = undefined;
        }
    }, {
        key: 'handleDragStart',
        value: function handleDragStart(event) {
            this.dragging = true;
            event.stopImmediatePropagation();
            this.setupDragging();
        }
    }, {
        key: 'handleDrag',
        value: function handleDrag(event) {
            if (this.prevPageX) {
                var clientX = event.clientX;

                var _trackHorizontal$getB = this.trackHorizontal.getBoundingClientRect(),
                    trackLeft = _trackHorizontal$getB.left;

                var thumbWidth = this.getThumbHorizontalWidth();
                var clickPosition = thumbWidth - this.prevPageX;
                var offset = -trackLeft + clientX - clickPosition;
                this.view.scrollLeft = this.getScrollLeftForOffset(offset);
            }
            if (this.prevPageY) {
                var clientY = event.clientY;

                var _trackVertical$getBou = this.trackVertical.getBoundingClientRect(),
                    trackTop = _trackVertical$getBou.top;

                var thumbHeight = this.getThumbVerticalHeight();
                var _clickPosition = thumbHeight - this.prevPageY;
                var _offset = -trackTop + clientY - _clickPosition;
                this.view.scrollTop = this.getScrollTopForOffset(_offset);
            }
            return false;
        }
    }, {
        key: 'handleDragEnd',
        value: function handleDragEnd() {
            this.dragging = false;
            this.prevPageX = this.prevPageY = 0;
            this.teardownDragging();
            this.handleDragEndAutoHide();
        }
    }, {
        key: 'handleDragEndAutoHide',
        value: function handleDragEndAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.hideTracks();
        }
    }, {
        key: 'handleTrackMouseEnter',
        value: function handleTrackMouseEnter() {
            this.trackMouseOver = true;
            this.handleTrackMouseEnterAutoHide();
        }
    }, {
        key: 'handleTrackMouseEnterAutoHide',
        value: function handleTrackMouseEnterAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.showTracks();
        }
    }, {
        key: 'handleTrackMouseLeave',
        value: function handleTrackMouseLeave() {
            this.trackMouseOver = false;
            this.handleTrackMouseLeaveAutoHide();
        }
    }, {
        key: 'handleTrackMouseLeaveAutoHide',
        value: function handleTrackMouseLeaveAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.hideTracks();
        }
    }, {
        key: 'showTracks',
        value: function showTracks() {
            clearTimeout(this.hideTracksTimeout);
            (0, _domCss2["default"])(this.trackHorizontal, { opacity: 1 });
            (0, _domCss2["default"])(this.trackVertical, { opacity: 1 });
        }
    }, {
        key: 'hideTracks',
        value: function hideTracks() {
            var _this3 = this;

            if (this.dragging) return;
            if (this.scrolling) return;
            if (this.trackMouseOver) return;
            var autoHideTimeout = this.props.autoHideTimeout;

            clearTimeout(this.hideTracksTimeout);
            this.hideTracksTimeout = setTimeout(function () {
                (0, _domCss2["default"])(_this3.trackHorizontal, { opacity: 0 });
                (0, _domCss2["default"])(_this3.trackVertical, { opacity: 0 });
            }, autoHideTimeout);
        }
    }, {
        key: 'detectScrolling',
        value: function detectScrolling() {
            var _this4 = this;

            if (this.scrolling) return;
            this.scrolling = true;
            this.handleScrollStart();
            this.detectScrollingInterval = setInterval(function () {
                if (_this4.lastViewScrollLeft === _this4.viewScrollLeft && _this4.lastViewScrollTop === _this4.viewScrollTop) {
                    clearInterval(_this4.detectScrollingInterval);
                    _this4.scrolling = false;
                    _this4.handleScrollStop();
                }
                _this4.lastViewScrollLeft = _this4.viewScrollLeft;
                _this4.lastViewScrollTop = _this4.viewScrollTop;
            }, 100);
        }
    }, {
        key: 'raf',
        value: function raf(callback) {
            var _this5 = this;

            if (this.requestFrame) _raf3["default"].cancel(this.requestFrame);
            this.requestFrame = (0, _raf3["default"])(function () {
                _this5.requestFrame = undefined;
                callback();
            });
        }
    }, {
        key: 'update',
        value: function update(callback) {
            var _this6 = this;

            this.raf(function () {
                return _this6._update(callback);
            });
        }
    }, {
        key: '_update',
        value: function _update(callback) {
            var _props4 = this.props,
                onUpdate = _props4.onUpdate,
                hideTracksWhenNotNeeded = _props4.hideTracksWhenNotNeeded;

            var values = this.getValues();
            if ((0, _getScrollbarWidth2["default"])()) {
                var scrollLeft = values.scrollLeft,
                    clientWidth = values.clientWidth,
                    scrollWidth = values.scrollWidth;

                var trackHorizontalWidth = (0, _getInnerWidth2["default"])(this.trackHorizontal);
                var thumbHorizontalWidth = this.getThumbHorizontalWidth();
                var thumbHorizontalX = scrollLeft / (scrollWidth - clientWidth) * (trackHorizontalWidth - thumbHorizontalWidth);
                var thumbHorizontalStyle = {
                    width: thumbHorizontalWidth,
                    transform: 'translateX(' + thumbHorizontalX + 'px)'
                };
                var scrollTop = values.scrollTop,
                    clientHeight = values.clientHeight,
                    scrollHeight = values.scrollHeight;

                var trackVerticalHeight = (0, _getInnerHeight2["default"])(this.trackVertical);
                var thumbVerticalHeight = this.getThumbVerticalHeight();
                var thumbVerticalY = scrollTop / (scrollHeight - clientHeight) * (trackVerticalHeight - thumbVerticalHeight);
                var thumbVerticalStyle = {
                    height: thumbVerticalHeight,
                    transform: 'translateY(' + thumbVerticalY + 'px)'
                };
                if (hideTracksWhenNotNeeded) {
                    var trackHorizontalStyle = {
                        visibility: scrollWidth > clientWidth ? 'visible' : 'hidden'
                    };
                    var trackVerticalStyle = {
                        visibility: scrollHeight > clientHeight ? 'visible' : 'hidden'
                    };
                    (0, _domCss2["default"])(this.trackHorizontal, trackHorizontalStyle);
                    (0, _domCss2["default"])(this.trackVertical, trackVerticalStyle);
                }
                (0, _domCss2["default"])(this.thumbHorizontal, thumbHorizontalStyle);
                (0, _domCss2["default"])(this.thumbVertical, thumbVerticalStyle);
            }
            if (onUpdate) onUpdate(values);
            if (typeof callback !== 'function') return;
            callback(values);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this7 = this;

            var scrollbarWidth = (0, _getScrollbarWidth2["default"])();
            /* eslint-disable no-unused-vars */

            var _props5 = this.props,
                onScroll = _props5.onScroll,
                onScrollFrame = _props5.onScrollFrame,
                onScrollStart = _props5.onScrollStart,
                onScrollStop = _props5.onScrollStop,
                onUpdate = _props5.onUpdate,
                renderView = _props5.renderView,
                renderTrackHorizontal = _props5.renderTrackHorizontal,
                renderTrackVertical = _props5.renderTrackVertical,
                renderThumbHorizontal = _props5.renderThumbHorizontal,
                renderThumbVertical = _props5.renderThumbVertical,
                tagName = _props5.tagName,
                hideTracksWhenNotNeeded = _props5.hideTracksWhenNotNeeded,
                autoHide = _props5.autoHide,
                autoHideTimeout = _props5.autoHideTimeout,
                autoHideDuration = _props5.autoHideDuration,
                thumbSize = _props5.thumbSize,
                thumbMinSize = _props5.thumbMinSize,
                universal = _props5.universal,
                autoHeight = _props5.autoHeight,
                autoHeightMin = _props5.autoHeightMin,
                autoHeightMax = _props5.autoHeightMax,
                style = _props5.style,
                children = _props5.children,
                props = _objectWithoutProperties(_props5, ['onScroll', 'onScrollFrame', 'onScrollStart', 'onScrollStop', 'onUpdate', 'renderView', 'renderTrackHorizontal', 'renderTrackVertical', 'renderThumbHorizontal', 'renderThumbVertical', 'tagName', 'hideTracksWhenNotNeeded', 'autoHide', 'autoHideTimeout', 'autoHideDuration', 'thumbSize', 'thumbMinSize', 'universal', 'autoHeight', 'autoHeightMin', 'autoHeightMax', 'style', 'children']);
            /* eslint-enable no-unused-vars */

            var didMountUniversal = this.state.didMountUniversal;


            var containerStyle = _extends({}, styles$e.containerStyleDefault, autoHeight && _extends({}, styles$e.containerStyleAutoHeight, {
                minHeight: autoHeightMin,
                maxHeight: autoHeightMax
            }), style);

            var viewStyle = _extends({}, styles$e.viewStyleDefault, {
                // Hide scrollbars by setting a negative margin
                marginRight: scrollbarWidth ? -scrollbarWidth : 0,
                marginBottom: scrollbarWidth ? -scrollbarWidth : 0
            }, autoHeight && _extends({}, styles$e.viewStyleAutoHeight, {
                // Add scrollbarWidth to autoHeight in order to compensate negative margins
                minHeight: (0, _isString2["default"])(autoHeightMin) ? 'calc(' + autoHeightMin + ' + ' + scrollbarWidth + 'px)' : autoHeightMin + scrollbarWidth,
                maxHeight: (0, _isString2["default"])(autoHeightMax) ? 'calc(' + autoHeightMax + ' + ' + scrollbarWidth + 'px)' : autoHeightMax + scrollbarWidth
            }), autoHeight && universal && !didMountUniversal && {
                minHeight: autoHeightMin,
                maxHeight: autoHeightMax
            }, universal && !didMountUniversal && styles$e.viewStyleUniversalInitial);

            var trackAutoHeightStyle = {
                transition: 'opacity ' + autoHideDuration + 'ms',
                opacity: 0
            };

            var trackHorizontalStyle = _extends({}, styles$e.trackHorizontalStyleDefault, autoHide && trackAutoHeightStyle, (!scrollbarWidth || universal && !didMountUniversal) && {
                display: 'none'
            });

            var trackVerticalStyle = _extends({}, styles$e.trackVerticalStyleDefault, autoHide && trackAutoHeightStyle, (!scrollbarWidth || universal && !didMountUniversal) && {
                display: 'none'
            });

            return (0, React__default.createElement)(tagName, _extends({}, props, { style: containerStyle, ref: function ref(_ref3) {
                    _this7.container = _ref3;
                } }), [(0, React__default.cloneElement)(renderView({ style: viewStyle }), { key: 'view', ref: function ref(_ref4) {
                    _this7.view = _ref4;
                } }, children), (0, React__default.cloneElement)(renderTrackHorizontal({ style: trackHorizontalStyle }), { key: 'trackHorizontal', ref: function ref(_ref5) {
                    _this7.trackHorizontal = _ref5;
                } }, (0, React__default.cloneElement)(renderThumbHorizontal({ style: styles$e.thumbHorizontalStyleDefault }), { ref: function ref(_ref6) {
                    _this7.thumbHorizontal = _ref6;
                } })), (0, React__default.cloneElement)(renderTrackVertical({ style: trackVerticalStyle }), { key: 'trackVertical', ref: function ref(_ref7) {
                    _this7.trackVertical = _ref7;
                } }, (0, React__default.cloneElement)(renderThumbVertical({ style: styles$e.thumbVerticalStyleDefault }), { ref: function ref(_ref8) {
                    _this7.thumbVertical = _ref8;
                } }))]);
        }
    }]);

    return Scrollbars;
}(React__default.Component);

exports["default"] = Scrollbars;


Scrollbars.propTypes = {
    onScroll: _propTypes2["default"].func,
    onScrollFrame: _propTypes2["default"].func,
    onScrollStart: _propTypes2["default"].func,
    onScrollStop: _propTypes2["default"].func,
    onUpdate: _propTypes2["default"].func,
    renderView: _propTypes2["default"].func,
    renderTrackHorizontal: _propTypes2["default"].func,
    renderTrackVertical: _propTypes2["default"].func,
    renderThumbHorizontal: _propTypes2["default"].func,
    renderThumbVertical: _propTypes2["default"].func,
    tagName: _propTypes2["default"].string,
    thumbSize: _propTypes2["default"].number,
    thumbMinSize: _propTypes2["default"].number,
    hideTracksWhenNotNeeded: _propTypes2["default"].bool,
    autoHide: _propTypes2["default"].bool,
    autoHideTimeout: _propTypes2["default"].number,
    autoHideDuration: _propTypes2["default"].number,
    autoHeight: _propTypes2["default"].bool,
    autoHeightMin: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
    autoHeightMax: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
    universal: _propTypes2["default"].bool,
    style: _propTypes2["default"].object,
    children: _propTypes2["default"].node
};

Scrollbars.defaultProps = {
    renderView: defaultRenderElements.renderViewDefault,
    renderTrackHorizontal: defaultRenderElements.renderTrackHorizontalDefault,
    renderTrackVertical: defaultRenderElements.renderTrackVerticalDefault,
    renderThumbHorizontal: defaultRenderElements.renderThumbHorizontalDefault,
    renderThumbVertical: defaultRenderElements.renderThumbVerticalDefault,
    tagName: 'div',
    thumbMinSize: 30,
    hideTracksWhenNotNeeded: false,
    autoHide: false,
    autoHideTimeout: 1000,
    autoHideDuration: 200,
    autoHeight: false,
    autoHeightMin: 0,
    autoHeightMax: 200,
    universal: false
};
});

unwrapExports(Scrollbars_1);

var lib = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scrollbars = undefined;



var _Scrollbars2 = _interopRequireDefault(Scrollbars_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = _Scrollbars2["default"];
exports.Scrollbars = _Scrollbars2["default"];
});

unwrapExports(lib);
var lib_1 = lib.Scrollbars;

var ScrollPanel = /** @class */ (function (_super) {
    __extends(ScrollPanel, _super);
    function ScrollPanel(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            scrolledToEnd: false
        };
        _this.checkScroll = _this.checkScroll.bind(_this);
        return _this;
    }
    ScrollPanel.prototype.componentDidMount = function () {
        this.props.gradient && this.checkScroll();
    };
    ScrollPanel.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, children = _a.children, gradient = _a.gradient;
        if (gradient && children !== prevProps.children) {
            this.checkScroll();
        }
    };
    ScrollPanel.prototype.checkScroll = function () {
        var scrolledToEnd = this.scrollbar.getScrollHeight() === this.scrollbar.getScrollTop() + this.scrollbar.getClientHeight();
        this.setState({ scrolledToEnd: scrolledToEnd });
    };
    ScrollPanel.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, autoHeight = _a.autoHeight, autoHeightMax = _a.autoHeightMax, autoHeightMin = _a.autoHeightMin, gradient = _a.gradient, children = _a.children;
        var scrollClass = classnames(styles$d.scrollArea, className);
        return (React.createElement("div", { className: styles$d.component },
            React.createElement(lib_1, { ref: function (s) { return _this.scrollbar = s; }, onScroll: gradient && this.checkScroll, autoHeight: autoHeight, autoHeightMax: autoHeightMax, autoHeightMin: autoHeightMin, className: scrollClass, renderThumbVertical: function (props) { return React.createElement("div", __assign({}, props, { className: styles$d.thumbVertical })); }, autoHide: true }, children),
            gradient && !this.state.scrolledToEnd && React.createElement("div", { className: styles$d.gradient })));
    };
    return ScrollPanel;
}(ComponentBase));

var css$f = "/*** Colors ***/\n/*** End - Colors ***/\n/*** Font Families ***/\n/*** End - Font Families ***/\n/*** Font Size ***/\n/*** End - Font Size ***/\n/*** Font Weight ***/\n/*** End - Font Weight ***/\n.Container-module_component__2uDlo {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center; }\n\n.Container-module_flexStart__2ySvs {\n  justify-content: flex-start; }\n\n.Container-module_flexEnd__1B58j {\n  justify-content: flex-end; }\n\n.Container-module_spaceBetween__EaTZn {\n  justify-content: space-between; }\n";
var styles$g = {"component":"Container-module_component__2uDlo","flexStart":"Container-module_flexStart__2ySvs","flexEnd":"Container-module_flexEnd__1B58j","spaceBetween":"Container-module_spaceBetween__EaTZn"};
styleInject(css$f);

var ContainerProperties = /** @class */ (function (_super) {
    __extends(ContainerProperties, _super);
    function ContainerProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ContainerProperties;
}(ComponentBaseProperties));
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Container.prototype.render = function () {
        var alignItemsClass = "";
        if (this.props.alignItems) {
            alignItemsClass = styles$g[this.props.alignItems];
        }
        var componentClasses = classnames(styles$g.component, this.props.componentClasses, alignItemsClass);
        var inlineStyle = {};
        if (this.props.width) {
            inlineStyle = { width: this.props.width };
        }
        return (React.createElement("div", { className: componentClasses, style: inlineStyle }, this.props.children));
    };
    return Container;
}(ComponentBase));

var interopRequireDefault = createCommonjsModule(function (module) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;
});

unwrapExports(interopRequireDefault);

var hasClass_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];
});

unwrapExports(hasClass_1);

var addClass_1 = createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = addClass;

var _hasClass = interopRequireDefault(hasClass_1);

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];
});

unwrapExports(addClass_1);

function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

var removeClass = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill$1(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}

var reactLifecyclesCompat_es = /*#__PURE__*/Object.freeze({
  polyfill: polyfill$1
});

var PropTypes = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.transitionTimeout = transitionTimeout;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;
  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.'); // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var timeoutsShape = _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
  enter: _propTypes.default.number,
  exit: _propTypes.default.number
}).isRequired]);

exports.timeoutsShape = timeoutsShape;

var classNamesShape = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
  enter: _propTypes.default.string,
  exit: _propTypes.default.string,
  active: _propTypes.default.string
}), _propTypes.default.shape({
  enter: _propTypes.default.string,
  enterDone: _propTypes.default.string,
  enterActive: _propTypes.default.string,
  exit: _propTypes.default.string,
  exitDone: _propTypes.default.string,
  exitActive: _propTypes.default.string
})]);

exports.classNamesShape = classNamesShape;
});

unwrapExports(PropTypes);
var PropTypes_1 = PropTypes.transitionTimeout;
var PropTypes_2 = PropTypes.classNamesShape;
var PropTypes_3 = PropTypes.timeoutsShape;

var Transition_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes$$1 = _interopRequireWildcard(require$$0);

var _react = _interopRequireDefault(React__default);

var _reactDom = _interopRequireDefault(reactDom);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the components.
 * It's up to you to give meaning and effect to those states. For example we can
 * add styles to a component when it enters or exits:
 *
 * ```jsx
 * import Transition from 'react-transition-group/Transition';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {(state) => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
 * What it does do is track transition states over time so you can update the
 * component (such as by adding styles or classes) when it changes states.
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component begins the
 * "Enter" stage. During this stage, the component will shift from its current transition state,
 * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
 * it's complete. Let's take the following example:
 *
 * ```jsx
 * state = { in: false };
 *
 * toggleEnterState = () => {
 *   this.setState({ in: true });
 * }
 *
 * render() {
 *   return (
 *     <div>
 *       <Transition in={this.state.in} timeout={500} />
 *       <button onClick={this.toggleEnterState}>Click to Enter</button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state and
 * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
 *
 * ## Timing
 *
 * Timing is often the trickiest part of animation, mistakes can result in slight delays
 * that are hard to pin down. A common example is when you want to add an exit transition,
 * you should set the desired final styles when the state is `'exiting'`. That's when the
 * transition to those styles will start and, if you matched the `timeout` prop with the
 * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
 *
 * > **Note**: For simpler transitions the `Transition` component might be enough, but
 * > take into account that it's platform-agnostic, while the `CSSTransition` component
 * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * > in order to make more complex transitions more predictable. For example, even though
 * > classes `example-enter` and `example-enter-active` are applied immediately one after
 * > another, you can still transition from one to the other because of the forced reflow
 * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
 * > for more info). Take this into account when choosing between `Transition` and
 * > `CSSTransition`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts(); // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing); // FIXME: appear timeout?


      _this2.onTransitionEnd(node, timeouts.enter, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);

    if (node) {
      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }

      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    } else {
      setTimeout(this.nextCallback, 0);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes$$1.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A `function` child can be used instead of a React element.
   * This function is called with the current transition status
   * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
   * to apply context specific props to a component.
   *
   * ```jsx
   * <Transition timeout={150}>
   *   {(status) => (
   *     <MyComponent className={`fade fade-${status}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes$$1.oneOfType([PropTypes$$1.func.isRequired, PropTypes$$1.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes$$1.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes$$1.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes$$1.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes$$1.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes$$1.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes$$1.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided
   *
   * You may specify a single timeout for all transitions like: `timeout={500}`,
   * or individually like:
   *
   * ```jsx
   * timeout={{
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * @type {number | { enter?: number, exit?: number }}
   */
  timeout: function timeout(props) {
    var pt = process.env.NODE_ENV !== "production" ? PropTypes.timeoutsShape : {};    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes$$1.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes$$1.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes$$1.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes$$1.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes$$1.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes$$1.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes$$1.func // Name the function so it is clearer in the documentation

} : {};

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, reactLifecyclesCompat_es.polyfill)(Transition);

exports.default = _default;
});

unwrapExports(Transition_1);
var Transition_2 = Transition_1.EXITING;
var Transition_3 = Transition_1.ENTERED;
var Transition_4 = Transition_1.ENTERING;
var Transition_5 = Transition_1.EXITED;
var Transition_6 = Transition_1.UNMOUNTED;

var CSSTransition_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var PropTypes$$1 = _interopRequireWildcard(require$$0);

var _addClass = _interopRequireDefault(addClass_1);

var _removeClass = _interopRequireDefault(removeClass);

var _react = _interopRequireDefault(React__default);

var _Transition = _interopRequireDefault(Transition_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass.default)(node, c);
  });
};

var removeClass$$1 = function removeClass$$1(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};

var propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _Transition.default.propTypes, {
  /**
   * The animation classNames applied to the component as it enters, exits or has finished the transition.
   * A single name can be provided and it will be suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-enter`, `fade-enter-active`, `fade-enter-done`,
   * `fade-exit`, `fade-exit-active`, `fade-exit-done`, `fade-appear`, and `fade-appear-active`.
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply spread
   * them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: PropTypes.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes$$1.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes$$1.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes$$1.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes$$1.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes$$1.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes$$1.func
}) : {};/**
 * A `Transition` component using CSS transitions and animations.
 * It's inspired by the excellent [ng-animate](http://www.nganimate.org/) library.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` stages of the transition. The first class is applied and then a
 * second "active" class in order to activate the css animation. After the animation,
 * matching `done` class names are applied to persist the animation state.
 *
 * When the `in` prop is toggled to `true` the Component will get
 * the `example-enter` CSS class and the `example-enter-active` CSS class
 * added in the next tick. This is a convention based on the `classNames` prop.
 */

var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');

      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var _this$getClassNames3 = _this.getClassNames('enter'),
          doneClassName = _this$getClassNames3.doneClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');

      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          className = _this$getClassNames4.className;

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames5.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      var _this$getClassNames6 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames6.doneClassName;

      _this.removeClasses(node, 'exit');

      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var className = typeof classNames !== 'string' ? classNames[type] : classNames + '-' + type;
      var activeClassName = typeof classNames !== 'string' ? classNames[type + 'Active'] : className + '-active';
      var doneClassName = typeof classNames !== 'string' ? classNames[type + 'Done'] : className + '-done';
      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$getClassNames7 = this.getClassNames(type),
        className = _this$getClassNames7.className,
        activeClassName = _this$getClassNames7.activeClassName,
        doneClassName = _this$getClassNames7.doneClassName;

    className && removeClass$$1(node, className);
    activeClassName && removeClass$$1(node, activeClassName);
    doneClassName && removeClass$$1(node, doneClassName);
  };

  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */

      addClass(node, className);
    }
  };

  _proto.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;
    return _react.default.createElement(_Transition.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
var _default = CSSTransition;
exports.default = _default;
module.exports = exports["default"];
});

unwrapExports(CSSTransition_1);

var ChildMapping = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;



/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, React__default.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) React__default.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, React__default.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, React__default.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, React__default.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, React__default.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, React__default.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, React__default.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, React__default.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}
});

unwrapExports(ChildMapping);
var ChildMapping_1 = ChildMapping.getChildMapping;
var ChildMapping_2 = ChildMapping.mergeChildMappings;
var ChildMapping_3 = ChildMapping.getInitialChildMapping;
var ChildMapping_4 = ChildMapping.getNextChildMapping;

var TransitionGroup_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require$$0);

var _react = _interopRequireDefault(React__default);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: _propTypes.default.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   */
  children: _propTypes.default.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: _propTypes.default.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: _propTypes.default.func
} : {};var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }

    return _react.default.createElement(Component, props, children);
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes.default.object.isRequired
};
TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
TransitionGroup.defaultProps = defaultProps;

var _default = (0, reactLifecyclesCompat_es.polyfill)(TransitionGroup);

exports.default = _default;
module.exports = exports["default"];
});

unwrapExports(TransitionGroup_1);

var ReplaceTransition_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require$$0);

var _react = _interopRequireDefault(React__default);



var _TransitionGroup = _interopRequireDefault(TransitionGroup_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var propTypes = process.env.NODE_ENV !== "production" ? {
  in: _propTypes.default.bool.isRequired,
  children: function children(props, propName) {
    if (_react.default.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : {};/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler]((0, reactDom.findDOMNode)(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
var _default = ReplaceTransition;
exports.default = _default;
module.exports = exports["default"];
});

unwrapExports(ReplaceTransition_1);

var reactTransitionGroup = createCommonjsModule(function (module) {

var _CSSTransition = _interopRequireDefault(CSSTransition_1);

var _ReplaceTransition = _interopRequireDefault(ReplaceTransition_1);

var _TransitionGroup = _interopRequireDefault(TransitionGroup_1);

var _Transition = _interopRequireDefault(Transition_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Transition: _Transition.default,
  TransitionGroup: _TransitionGroup.default,
  ReplaceTransition: _ReplaceTransition.default,
  CSSTransition: _CSSTransition.default
};
});

unwrapExports(reactTransitionGroup);
var reactTransitionGroup_1 = reactTransitionGroup.Transition;
var reactTransitionGroup_2 = reactTransitionGroup.TransitionGroup;
var reactTransitionGroup_3 = reactTransitionGroup.ReplaceTransition;
var reactTransitionGroup_4 = reactTransitionGroup.CSSTransition;

var keyCodes = {
    ESC: 27,
    ENTER: 13
};

var css$g = "/*** Colors ***/\n/*** End - Colors ***/\n/*** Font Families ***/\n/*** End - Font Families ***/\n/*** Font Size ***/\n/*** End - Font Size ***/\n/*** Font Weight ***/\n/*** End - Font Weight ***/\n.SidePanel-module_blocker__3mk7f {\n  z-index: 1000001;\n  position: fixed;\n  top: 0;\n  font-size: 1em;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.8); }\n  .SidePanel-module_blocker__3mk7f.SidePanel-module_enter__2P2sY .SidePanel-module_panel__1qcur {\n    width: 0; }\n    .SidePanel-module_blocker__3mk7f.SidePanel-module_enter__2P2sY .SidePanel-module_panel__1qcur .SidePanel-module_opacity__1iCfi {\n      opacity: 0; }\n    .SidePanel-module_blocker__3mk7f.SidePanel-module_enter__2P2sY .SidePanel-module_panel__1qcur.SidePanel-module_wide__5wF2t {\n      width: 0; }\n  .SidePanel-module_blocker__3mk7f.SidePanel-module_enterActive__25mya .SidePanel-module_panel__1qcur {\n    width: 800px;\n    transition: width 0.5s; }\n    .SidePanel-module_blocker__3mk7f.SidePanel-module_enterActive__25mya .SidePanel-module_panel__1qcur .SidePanel-module_opacity__1iCfi {\n      opacity: 1;\n      transition: opacity 0.4s linear 0.3s; }\n    .SidePanel-module_blocker__3mk7f.SidePanel-module_enterActive__25mya .SidePanel-module_panel__1qcur.SidePanel-module_wide__5wF2t {\n      width: 1192px; }\n  .SidePanel-module_blocker__3mk7f.SidePanel-module_leave__3aDrT .SidePanel-module_panel__1qcur {\n    width: 800px; }\n    .SidePanel-module_blocker__3mk7f.SidePanel-module_leave__3aDrT .SidePanel-module_panel__1qcur .SidePanel-module_opacity__1iCfi {\n      opacity: 1; }\n    .SidePanel-module_blocker__3mk7f.SidePanel-module_leave__3aDrT .SidePanel-module_panel__1qcur.SidePanel-module_wide__5wF2t {\n      width: 1192px; }\n  .SidePanel-module_blocker__3mk7f.SidePanel-module_leaveActive__3NI4B .SidePanel-module_panel__1qcur {\n    width: 0;\n    transition: width 0.5s; }\n    .SidePanel-module_blocker__3mk7f.SidePanel-module_leaveActive__3NI4B .SidePanel-module_panel__1qcur .SidePanel-module_opacity__1iCfi {\n      opacity: 0;\n      transition: opacity 0.4s; }\n    .SidePanel-module_blocker__3mk7f.SidePanel-module_leaveActive__3NI4B .SidePanel-module_panel__1qcur.SidePanel-module_wide__5wF2t {\n      width: 0; }\n  .SidePanel-module_blocker__3mk7f .SidePanel-module_component__1ocql {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    height: calc(100% - 46px);\n    background-color: #fff;\n    width: 25vw;\n    min-width: 620px;\n    box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.2);\n    transition: width 0.8s; }\n";
var styles$h = {"blocker":"SidePanel-module_blocker__3mk7f","enter":"SidePanel-module_enter__2P2sY","panel":"SidePanel-module_panel__1qcur","opacity":"SidePanel-module_opacity__1iCfi","wide":"SidePanel-module_wide__5wF2t","enterActive":"SidePanel-module_enterActive__25mya","leave":"SidePanel-module_leave__3aDrT","leaveActive":"SidePanel-module_leaveActive__3NI4B","component":"SidePanel-module_component__1ocql"};
styleInject(css$g);

var SidePanel = /** @class */ (function (_super) {
    __extends(SidePanel, _super);
    function SidePanel(properties) {
        var _this = _super.call(this, properties) || this;
        _this.state = {
            open: true
        };
        _this.open = _this.open.bind(_this);
        _this.close = _this.close.bind(_this);
        _this.hide = _this.hide.bind(_this);
        _this.escFunction = _this.escFunction.bind(_this);
        return _this;
    }
    SidePanel.prototype.componentDidMount = function () {
        //event listener for esc button
        document.addEventListener("keydown", this.escFunction, false);
    };
    SidePanel.prototype.componentDidUpdate = function () {
        this.focus();
    };
    SidePanel.prototype.componentWillUnmount = function () {
        //remove event listener for esc button
        document.removeEventListener("keydown", this.escFunction, false);
    };
    //close panel on clicking ESC button
    SidePanel.prototype.escFunction = function (event) {
        if (this.state.open && event.keyCode === keyCodes.ESC) {
            this.close();
        }
    };
    SidePanel.prototype.close = function () {
        var onClose = this.props.onClose;
        if (onClose && onClose(this.hide) === false) {
            return;
        }
        this.hide();
    };
    SidePanel.prototype.hide = function () {
        this.setState({ open: false });
    };
    SidePanel.prototype.open = function () {
        var onOpen = this.props.onOpen;
        if (onOpen && onOpen() === false) {
            return;
        }
        this.setState({ open: true });
    };
    SidePanel.prototype.focus = function () {
        this.focusRef && this.focusRef.focus();
    };
    SidePanel.prototype.render = function () {
        var _this = this;
        var Content = this.props.content;
        var _a = this.props, _b = _a.transitionName, _c = _a.transitionEnterTimeout, _d = _a.transitionLeaveTimeout;
        var open = this.state.open;
        var classes = classnames(styles$h.component, this.props.componentClasses);
        return (React.createElement(reactTransitionGroup_4, { in: open, key: 'SidePanel', classNames: {
                enter: styles$h.enter,
                enterActive: styles$h.enterActive,
                exit: styles$h.leave,
                exitActive: styles$h.leaveActive
            }, timeout: 500, unmountOnExit: true }, function () { return (React.createElement("div", { className: styles$h.blocker },
            React.createElement("div", { className: classes },
                Content && React.createElement(Content, __assign({ open: open, openPanel: _this.open, closePanel: _this.close, hidePanel: _this.hide }, _this.props)),
                _this.props.children))); }));
    };
    return SidePanel;
}(ComponentBase));

var css$h = "/*** Colors ***/\n/*** End - Colors ***/\n/*** Font Families ***/\n/*** End - Font Families ***/\n/*** Font Size ***/\n/*** End - Font Size ***/\n/*** Font Weight ***/\n/*** End - Font Weight ***/\n.Tag-module_component__2Ut0y {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  padding: 5px 0 5px 10px;\n  height: 30px;\n  color: #fff;\n  background-color: #6e818a;\n  font-weight: 700;\n  border-radius: 3px;\n  font-size: 1.4rem;\n  align-items: center; }\n  .Tag-module_component__2Ut0y:hover {\n    box-shadow: 0 5px 10px 0 rgba(11, 56, 51, 0.5); }\n";
var styles$i = {"component":"Tag-module_component__2Ut0y"};
styleInject(css$h);

var Tag = /** @class */ (function (_super) {
    __extends(Tag, _super);
    function Tag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tag.prototype.render = function () {
        var elementClasses = classnames(styles$i.component, this.props.componentClasses);
        return (React.createElement("div", { className: elementClasses },
            React.createElement(Label, { textColor: "white" }, this.props.text),
            React.createElement(Icon, { icon: exports.PriorityIcon.closeSmall, iconColor: "white" })));
    };
    return Tag;
}(ComponentBase));

exports.Label = Label;
exports.Title = Title;
exports.Icon = Icon;
exports.Button = Button;
exports.CheckBox = CheckBox;
exports.LineInput = LineInput;
exports.Select = Select;
exports.OptionItem = OptionItem;
exports.AutoFill = AutoFill;
exports.StackPanel = StackPanel;
exports.WrapPanel = WrapPanel;
exports.RowPanel = RowPanel;
exports.ScrollPanel = ScrollPanel;
exports.Container = Container;
exports.SidePanel = SidePanel;
exports.Tag = Tag;
//# sourceMappingURL=index.js.map
