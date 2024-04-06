import {
  require_react_dom
} from "./chunk-PXJLUKTU.js";
import {
  require_react
} from "./chunk-FQO5W7GE.js";
import {
  __commonJS
} from "./chunk-ZS7NZCD4.js";

// node_modules/react-quill/dist/react-quill.js
var require_react_quill = __commonJS({
  "node_modules/react-quill/dist/react-quill.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e(require_react(), require_react_dom()) : "function" == typeof define && define.amd ? define(["react", "react-dom"], e) : "object" == typeof exports ? exports.ReactQuill = e(require_react(), require_react_dom()) : t.ReactQuill = e(t.React, t.ReactDOM);
    }(window, function(t, e) {
      return function(t2) {
        var e2 = {};
        function n(r) {
          if (e2[r])
            return e2[r].exports;
          var o = e2[r] = { i: r, l: false, exports: {} };
          return t2[r].call(o.exports, o, o.exports, n), o.l = true, o.exports;
        }
        return n.m = t2, n.c = e2, n.d = function(t3, e3, r) {
          n.o(t3, e3) || Object.defineProperty(t3, e3, { enumerable: true, get: r });
        }, n.r = function(t3) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t3, "__esModule", { value: true });
        }, n.t = function(t3, e3) {
          if (1 & e3 && (t3 = n(t3)), 8 & e3)
            return t3;
          if (4 & e3 && "object" == typeof t3 && t3 && t3.__esModule)
            return t3;
          var r = /* @__PURE__ */ Object.create(null);
          if (n.r(r), Object.defineProperty(r, "default", { enumerable: true, value: t3 }), 2 & e3 && "string" != typeof t3)
            for (var o in t3)
              n.d(r, o, (function(e4) {
                return t3[e4];
              }).bind(null, o));
          return r;
        }, n.n = function(t3) {
          var e3 = t3 && t3.__esModule ? function() {
            return t3.default;
          } : function() {
            return t3;
          };
          return n.d(e3, "a", e3), e3;
        }, n.o = function(t3, e3) {
          return Object.prototype.hasOwnProperty.call(t3, e3);
        }, n.p = "", n(n.s = 23);
      }([function(t2, e2, n) {
        var r = n(13), o = "object" == typeof self && self && self.Object === Object && self, i = r || o || Function("return this")();
        t2.exports = i;
      }, function(t2, e2, n) {
        var r = n(40), o = n(45);
        t2.exports = function(t3, e3) {
          var n2 = o(t3, e3);
          return r(n2) ? n2 : void 0;
        };
      }, function(t2, e2, n) {
        var r = n(30), o = n(31), i = n(32), l = n(33), a = n(34);
        function s(t3) {
          var e3 = -1, n2 = null == t3 ? 0 : t3.length;
          for (this.clear(); ++e3 < n2; ) {
            var r2 = t3[e3];
            this.set(r2[0], r2[1]);
          }
        }
        s.prototype.clear = r, s.prototype.delete = o, s.prototype.get = i, s.prototype.has = l, s.prototype.set = a, t2.exports = s;
      }, function(t2, e2, n) {
        var r = n(11);
        t2.exports = function(t3, e3) {
          for (var n2 = t3.length; n2--; )
            if (r(t3[n2][0], e3))
              return n2;
          return -1;
        };
      }, function(t2, e2, n) {
        var r = n(9), o = n(41), i = n(42), l = "[object Null]", a = "[object Undefined]", s = r ? r.toStringTag : void 0;
        t2.exports = function(t3) {
          return null == t3 ? void 0 === t3 ? a : l : s && s in Object(t3) ? o(t3) : i(t3);
        };
      }, function(t2, e2, n) {
        var r = n(1)(Object, "create");
        t2.exports = r;
      }, function(t2, e2, n) {
        var r = n(54);
        t2.exports = function(t3, e3) {
          var n2 = t3.__data__;
          return r(e3) ? n2["string" == typeof e3 ? "string" : "hash"] : n2.map;
        };
      }, function(t2, e2) {
        t2.exports = function(t3) {
          return null != t3 && "object" == typeof t3;
        };
      }, function(t2, e2, n) {
        var r = n(1)(n(0), "Map");
        t2.exports = r;
      }, function(t2, e2, n) {
        var r = n(0).Symbol;
        t2.exports = r;
      }, function(t2, e2) {
        var n = Array.isArray;
        t2.exports = n;
      }, function(t2, e2) {
        t2.exports = function(t3, e3) {
          return t3 === e3 || t3 != t3 && e3 != e3;
        };
      }, function(t2, e2, n) {
        var r = n(4), o = n(15), i = "[object AsyncFunction]", l = "[object Function]", a = "[object GeneratorFunction]", s = "[object Proxy]";
        t2.exports = function(t3) {
          if (!o(t3))
            return false;
          var e3 = r(t3);
          return e3 == l || e3 == a || e3 == i || e3 == s;
        };
      }, function(t2, e2, n) {
        (function(e3) {
          var n2 = "object" == typeof e3 && e3 && e3.Object === Object && e3;
          t2.exports = n2;
        }).call(this, n(14));
      }, function(t2, e2) {
        var n;
        n = /* @__PURE__ */ function() {
          return this;
        }();
        try {
          n = n || new Function("return this")();
        } catch (t3) {
          "object" == typeof window && (n = window);
        }
        t2.exports = n;
      }, function(t2, e2) {
        t2.exports = function(t3) {
          var e3 = typeof t3;
          return null != t3 && ("object" == e3 || "function" == e3);
        };
      }, function(t2, e2) {
        var n = Function.prototype.toString;
        t2.exports = function(t3) {
          if (null != t3) {
            try {
              return n.call(t3);
            } catch (t4) {
            }
            try {
              return t3 + "";
            } catch (t4) {
            }
          }
          return "";
        };
      }, function(t2, e2, n) {
        var r = n(46), o = n(53), i = n(55), l = n(56), a = n(57);
        function s(t3) {
          var e3 = -1, n2 = null == t3 ? 0 : t3.length;
          for (this.clear(); ++e3 < n2; ) {
            var r2 = t3[e3];
            this.set(r2[0], r2[1]);
          }
        }
        s.prototype.clear = r, s.prototype.delete = o, s.prototype.get = i, s.prototype.has = l, s.prototype.set = a, t2.exports = s;
      }, function(t2, e2, n) {
        var r = n(58), o = n(61), i = n(62), l = 1, a = 2;
        t2.exports = function(t3, e3, n2, s, u, c) {
          var f = n2 & l, h = t3.length, p = e3.length;
          if (h != p && !(f && p > h))
            return false;
          var d = c.get(t3), y = c.get(e3);
          if (d && y)
            return d == e3 && y == t3;
          var v = -1, b = true, g = n2 & a ? new r() : void 0;
          for (c.set(t3, e3), c.set(e3, t3); ++v < h; ) {
            var m = t3[v], _ = e3[v];
            if (s)
              var O = f ? s(_, m, v, e3, t3, c) : s(m, _, v, t3, e3, c);
            if (void 0 !== O) {
              if (O)
                continue;
              b = false;
              break;
            }
            if (g) {
              if (!o(e3, function(t4, e4) {
                if (!i(g, e4) && (m === t4 || u(m, t4, n2, s, c)))
                  return g.push(e4);
              })) {
                b = false;
                break;
              }
            } else if (m !== _ && !u(m, _, n2, s, c)) {
              b = false;
              break;
            }
          }
          return c.delete(t3), c.delete(e3), b;
        };
      }, function(t2, e2, n) {
        (function(t3) {
          var r = n(0), o = n(79), i = e2 && !e2.nodeType && e2, l = i && "object" == typeof t3 && t3 && !t3.nodeType && t3, a = l && l.exports === i ? r.Buffer : void 0, s = (a ? a.isBuffer : void 0) || o;
          t3.exports = s;
        }).call(this, n(20)(t2));
      }, function(t2, e2) {
        t2.exports = function(t3) {
          return t3.webpackPolyfill || (t3.deprecate = function() {
          }, t3.paths = [], t3.children || (t3.children = []), Object.defineProperty(t3, "loaded", { enumerable: true, get: function() {
            return t3.l;
          } }), Object.defineProperty(t3, "id", { enumerable: true, get: function() {
            return t3.i;
          } }), t3.webpackPolyfill = 1), t3;
        };
      }, function(t2, e2, n) {
        var r = n(81), o = n(82), i = n(83), l = i && i.isTypedArray, a = l ? o(l) : r;
        t2.exports = a;
      }, function(t2, e2) {
        var n = 9007199254740991;
        t2.exports = function(t3) {
          return "number" == typeof t3 && t3 > -1 && t3 % 1 == 0 && t3 <= n;
        };
      }, function(t2, e2, n) {
        "use strict";
        var r, o = this && this.__extends || (r = function(t3, e3) {
          return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e4) {
            t4.__proto__ = e4;
          } || function(t4, e4) {
            for (var n2 in e4)
              e4.hasOwnProperty(n2) && (t4[n2] = e4[n2]);
          })(t3, e3);
        }, function(t3, e3) {
          function n2() {
            this.constructor = t3;
          }
          r(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (n2.prototype = e3.prototype, new n2());
        }), i = this && this.__assign || function() {
          return (i = Object.assign || function(t3) {
            for (var e3, n2 = 1, r2 = arguments.length; n2 < r2; n2++)
              for (var o2 in e3 = arguments[n2])
                Object.prototype.hasOwnProperty.call(e3, o2) && (t3[o2] = e3[o2]);
            return t3;
          }).apply(this, arguments);
        }, l = this && this.__spreadArrays || function() {
          for (var t3 = 0, e3 = 0, n2 = arguments.length; e3 < n2; e3++)
            t3 += arguments[e3].length;
          var r2 = Array(t3), o2 = 0;
          for (e3 = 0; e3 < n2; e3++)
            for (var i2 = arguments[e3], l2 = 0, a2 = i2.length; l2 < a2; l2++, o2++)
              r2[o2] = i2[l2];
          return r2;
        }, a = this && this.__importDefault || function(t3) {
          return t3 && t3.__esModule ? t3 : { default: t3 };
        }, s = a(n(24)), u = a(n(25)), c = a(n(26)), f = a(n(94)), h = function(t3) {
          function e3(e4) {
            var n2 = t3.call(this, e4) || this;
            n2.dirtyProps = ["modules", "formats", "bounds", "theme", "children"], n2.cleanProps = ["id", "className", "style", "placeholder", "tabIndex", "onChange", "onChangeSelection", "onFocus", "onBlur", "onKeyPress", "onKeyDown", "onKeyUp"], n2.state = { generation: 0 }, n2.selection = null, n2.onEditorChange = function(t4, e5, r3, o2) {
              var i2, l2, a2, s2;
              "text-change" === t4 ? null === (l2 = (i2 = n2).onEditorChangeText) || void 0 === l2 || l2.call(i2, n2.editor.root.innerHTML, e5, o2, n2.unprivilegedEditor) : "selection-change" === t4 && (null === (s2 = (a2 = n2).onEditorChangeSelection) || void 0 === s2 || s2.call(a2, e5, o2, n2.unprivilegedEditor));
            };
            var r2 = n2.isControlled() ? e4.value : e4.defaultValue;
            return n2.value = null != r2 ? r2 : "", n2;
          }
          return o(e3, t3), e3.prototype.validateProps = function(t4) {
            var e4;
            if (s.default.Children.count(t4.children) > 1)
              throw new Error("The Quill editing area can only be composed of a single React element.");
            if (s.default.Children.count(t4.children) && "textarea" === (null === (e4 = s.default.Children.only(t4.children)) || void 0 === e4 ? void 0 : e4.type))
              throw new Error("Quill does not support editing on a <textarea>. Use a <div> instead.");
            if (this.lastDeltaChangeSet && t4.value === this.lastDeltaChangeSet)
              throw new Error("You are passing the `delta` object from the `onChange` event back as `value`. You most probably want `editor.getContents()` instead. See: https://github.com/zenoamaro/react-quill#using-deltas");
          }, e3.prototype.shouldComponentUpdate = function(t4, e4) {
            var n2, r2 = this;
            if (this.validateProps(t4), !this.editor || this.state.generation !== e4.generation)
              return true;
            if ("value" in t4) {
              var o2 = this.getEditorContents(), i2 = null != (n2 = t4.value) ? n2 : "";
              this.isEqualValue(i2, o2) || this.setEditorContents(this.editor, i2);
            }
            return t4.readOnly !== this.props.readOnly && this.setEditorReadOnly(this.editor, t4.readOnly), l(this.cleanProps, this.dirtyProps).some(function(e5) {
              return !c.default(t4[e5], r2.props[e5]);
            });
          }, e3.prototype.shouldComponentRegenerate = function(t4) {
            var e4 = this;
            return this.dirtyProps.some(function(n2) {
              return !c.default(t4[n2], e4.props[n2]);
            });
          }, e3.prototype.componentDidMount = function() {
            this.instantiateEditor(), this.setEditorContents(this.editor, this.getEditorContents());
          }, e3.prototype.componentWillUnmount = function() {
            this.destroyEditor();
          }, e3.prototype.componentDidUpdate = function(t4, e4) {
            var n2 = this;
            if (this.editor && this.shouldComponentRegenerate(t4)) {
              var r2 = this.editor.getContents(), o2 = this.editor.getSelection();
              this.regenerationSnapshot = { delta: r2, selection: o2 }, this.setState({ generation: this.state.generation + 1 }), this.destroyEditor();
            }
            if (this.state.generation !== e4.generation) {
              var i2 = this.regenerationSnapshot, l2 = (r2 = i2.delta, i2.selection);
              delete this.regenerationSnapshot, this.instantiateEditor();
              var a2 = this.editor;
              a2.setContents(r2), p(function() {
                return n2.setEditorSelection(a2, l2);
              });
            }
          }, e3.prototype.instantiateEditor = function() {
            this.editor ? this.hookEditor(this.editor) : this.editor = this.createEditor(this.getEditingArea(), this.getEditorConfig());
          }, e3.prototype.destroyEditor = function() {
            this.editor && this.unhookEditor(this.editor);
          }, e3.prototype.isControlled = function() {
            return "value" in this.props;
          }, e3.prototype.getEditorConfig = function() {
            return { bounds: this.props.bounds, formats: this.props.formats, modules: this.props.modules, placeholder: this.props.placeholder, readOnly: this.props.readOnly, scrollingContainer: this.props.scrollingContainer, tabIndex: this.props.tabIndex, theme: this.props.theme };
          }, e3.prototype.getEditor = function() {
            if (!this.editor)
              throw new Error("Accessing non-instantiated editor");
            return this.editor;
          }, e3.prototype.createEditor = function(t4, e4) {
            var n2 = new f.default(t4, e4);
            return null != e4.tabIndex && this.setEditorTabIndex(n2, e4.tabIndex), this.hookEditor(n2), n2;
          }, e3.prototype.hookEditor = function(t4) {
            this.unprivilegedEditor = this.makeUnprivilegedEditor(t4), t4.on("editor-change", this.onEditorChange);
          }, e3.prototype.unhookEditor = function(t4) {
            t4.off("editor-change", this.onEditorChange);
          }, e3.prototype.getEditorContents = function() {
            return this.value;
          }, e3.prototype.getEditorSelection = function() {
            return this.selection;
          }, e3.prototype.isDelta = function(t4) {
            return t4 && t4.ops;
          }, e3.prototype.isEqualValue = function(t4, e4) {
            return this.isDelta(t4) && this.isDelta(e4) ? c.default(t4.ops, e4.ops) : c.default(t4, e4);
          }, e3.prototype.setEditorContents = function(t4, e4) {
            var n2 = this;
            this.value = e4;
            var r2 = this.getEditorSelection();
            "string" == typeof e4 ? t4.setContents(t4.clipboard.convert(e4)) : t4.setContents(e4), p(function() {
              return n2.setEditorSelection(t4, r2);
            });
          }, e3.prototype.setEditorSelection = function(t4, e4) {
            if (this.selection = e4, e4) {
              var n2 = t4.getLength();
              e4.index = Math.max(0, Math.min(e4.index, n2 - 1)), e4.length = Math.max(0, Math.min(e4.length, n2 - 1 - e4.index)), t4.setSelection(e4);
            }
          }, e3.prototype.setEditorTabIndex = function(t4, e4) {
            var n2, r2;
            (null === (r2 = null === (n2 = t4) || void 0 === n2 ? void 0 : n2.scroll) || void 0 === r2 ? void 0 : r2.domNode) && (t4.scroll.domNode.tabIndex = e4);
          }, e3.prototype.setEditorReadOnly = function(t4, e4) {
            e4 ? t4.disable() : t4.enable();
          }, e3.prototype.makeUnprivilegedEditor = function(t4) {
            var e4 = t4;
            return { getHTML: function() {
              return e4.root.innerHTML;
            }, getLength: e4.getLength.bind(e4), getText: e4.getText.bind(e4), getContents: e4.getContents.bind(e4), getSelection: e4.getSelection.bind(e4), getBounds: e4.getBounds.bind(e4) };
          }, e3.prototype.getEditingArea = function() {
            if (!this.editingArea)
              throw new Error("Instantiating on missing editing area");
            var t4 = u.default.findDOMNode(this.editingArea);
            if (!t4)
              throw new Error("Cannot find element for editing area");
            if (3 === t4.nodeType)
              throw new Error("Editing area cannot be a text node");
            return t4;
          }, e3.prototype.renderEditingArea = function() {
            var t4 = this, e4 = this.props, n2 = e4.children, r2 = e4.preserveWhitespace, o2 = { key: this.state.generation, ref: function(e5) {
              t4.editingArea = e5;
            } };
            return s.default.Children.count(n2) ? s.default.cloneElement(s.default.Children.only(n2), o2) : r2 ? s.default.createElement("pre", i({}, o2)) : s.default.createElement("div", i({}, o2));
          }, e3.prototype.render = function() {
            var t4;
            return s.default.createElement("div", { id: this.props.id, style: this.props.style, key: this.state.generation, className: "quill " + (t4 = this.props.className, null != t4 ? t4 : ""), onKeyPress: this.props.onKeyPress, onKeyDown: this.props.onKeyDown, onKeyUp: this.props.onKeyUp }, this.renderEditingArea());
          }, e3.prototype.onEditorChangeText = function(t4, e4, n2, r2) {
            var o2, i2;
            if (this.editor) {
              var l2 = this.isDelta(this.value) ? r2.getContents() : r2.getHTML();
              l2 !== this.getEditorContents() && (this.lastDeltaChangeSet = e4, this.value = l2, null === (i2 = (o2 = this.props).onChange) || void 0 === i2 || i2.call(o2, t4, e4, n2, r2));
            }
          }, e3.prototype.onEditorChangeSelection = function(t4, e4, n2) {
            var r2, o2, i2, l2, a2, s2;
            if (this.editor) {
              var u2 = this.getEditorSelection(), f2 = !u2 && t4, h2 = u2 && !t4;
              c.default(t4, u2) || (this.selection = t4, null === (o2 = (r2 = this.props).onChangeSelection) || void 0 === o2 || o2.call(r2, t4, e4, n2), f2 ? null === (l2 = (i2 = this.props).onFocus) || void 0 === l2 || l2.call(i2, t4, e4, n2) : h2 && (null === (s2 = (a2 = this.props).onBlur) || void 0 === s2 || s2.call(a2, u2, e4, n2)));
            }
          }, e3.prototype.focus = function() {
            this.editor && this.editor.focus();
          }, e3.prototype.blur = function() {
            this.editor && (this.selection = null, this.editor.blur());
          }, e3.displayName = "React Quill", e3.Quill = f.default, e3.defaultProps = { theme: "snow", modules: {}, readOnly: false }, e3;
        }(s.default.Component);
        function p(t3) {
          Promise.resolve().then(t3);
        }
        t2.exports = h;
      }, function(e2, n) {
        e2.exports = t;
      }, function(t2, n) {
        t2.exports = e;
      }, function(t2, e2, n) {
        var r = n(27);
        t2.exports = function(t3, e3) {
          return r(t3, e3);
        };
      }, function(t2, e2, n) {
        var r = n(28), o = n(7);
        t2.exports = function t3(e3, n2, i, l, a) {
          return e3 === n2 || (null == e3 || null == n2 || !o(e3) && !o(n2) ? e3 != e3 && n2 != n2 : r(e3, n2, i, l, t3, a));
        };
      }, function(t2, e2, n) {
        var r = n(29), o = n(18), i = n(63), l = n(67), a = n(89), s = n(10), u = n(19), c = n(21), f = 1, h = "[object Arguments]", p = "[object Array]", d = "[object Object]", y = Object.prototype.hasOwnProperty;
        t2.exports = function(t3, e3, n2, v, b, g) {
          var m = s(t3), _ = s(e3), O = m ? p : a(t3), w = _ ? p : a(e3), x = (O = O == h ? d : O) == d, E = (w = w == h ? d : w) == d, k = O == w;
          if (k && u(t3)) {
            if (!u(e3))
              return false;
            m = true, x = false;
          }
          if (k && !x)
            return g || (g = new r()), m || c(t3) ? o(t3, e3, n2, v, b, g) : i(t3, e3, O, n2, v, b, g);
          if (!(n2 & f)) {
            var A = x && y.call(t3, "__wrapped__"), j = E && y.call(e3, "__wrapped__");
            if (A || j) {
              var N = A ? t3.value() : t3, T = j ? e3.value() : e3;
              return g || (g = new r()), b(N, T, n2, v, g);
            }
          }
          return !!k && (g || (g = new r()), l(t3, e3, n2, v, b, g));
        };
      }, function(t2, e2, n) {
        var r = n(2), o = n(35), i = n(36), l = n(37), a = n(38), s = n(39);
        function u(t3) {
          var e3 = this.__data__ = new r(t3);
          this.size = e3.size;
        }
        u.prototype.clear = o, u.prototype.delete = i, u.prototype.get = l, u.prototype.has = a, u.prototype.set = s, t2.exports = u;
      }, function(t2, e2) {
        t2.exports = function() {
          this.__data__ = [], this.size = 0;
        };
      }, function(t2, e2, n) {
        var r = n(3), o = Array.prototype.splice;
        t2.exports = function(t3) {
          var e3 = this.__data__, n2 = r(e3, t3);
          return !(n2 < 0) && (n2 == e3.length - 1 ? e3.pop() : o.call(e3, n2, 1), --this.size, true);
        };
      }, function(t2, e2, n) {
        var r = n(3);
        t2.exports = function(t3) {
          var e3 = this.__data__, n2 = r(e3, t3);
          return n2 < 0 ? void 0 : e3[n2][1];
        };
      }, function(t2, e2, n) {
        var r = n(3);
        t2.exports = function(t3) {
          return r(this.__data__, t3) > -1;
        };
      }, function(t2, e2, n) {
        var r = n(3);
        t2.exports = function(t3, e3) {
          var n2 = this.__data__, o = r(n2, t3);
          return o < 0 ? (++this.size, n2.push([t3, e3])) : n2[o][1] = e3, this;
        };
      }, function(t2, e2, n) {
        var r = n(2);
        t2.exports = function() {
          this.__data__ = new r(), this.size = 0;
        };
      }, function(t2, e2) {
        t2.exports = function(t3) {
          var e3 = this.__data__, n = e3.delete(t3);
          return this.size = e3.size, n;
        };
      }, function(t2, e2) {
        t2.exports = function(t3) {
          return this.__data__.get(t3);
        };
      }, function(t2, e2) {
        t2.exports = function(t3) {
          return this.__data__.has(t3);
        };
      }, function(t2, e2, n) {
        var r = n(2), o = n(8), i = n(17), l = 200;
        t2.exports = function(t3, e3) {
          var n2 = this.__data__;
          if (n2 instanceof r) {
            var a = n2.__data__;
            if (!o || a.length < l - 1)
              return a.push([t3, e3]), this.size = ++n2.size, this;
            n2 = this.__data__ = new i(a);
          }
          return n2.set(t3, e3), this.size = n2.size, this;
        };
      }, function(t2, e2, n) {
        var r = n(12), o = n(43), i = n(15), l = n(16), a = /^\[object .+?Constructor\]$/, s = Function.prototype, u = Object.prototype, c = s.toString, f = u.hasOwnProperty, h = RegExp("^" + c.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        t2.exports = function(t3) {
          return !(!i(t3) || o(t3)) && (r(t3) ? h : a).test(l(t3));
        };
      }, function(t2, e2, n) {
        var r = n(9), o = Object.prototype, i = o.hasOwnProperty, l = o.toString, a = r ? r.toStringTag : void 0;
        t2.exports = function(t3) {
          var e3 = i.call(t3, a), n2 = t3[a];
          try {
            t3[a] = void 0;
            var r2 = true;
          } catch (t4) {
          }
          var o2 = l.call(t3);
          return r2 && (e3 ? t3[a] = n2 : delete t3[a]), o2;
        };
      }, function(t2, e2) {
        var n = Object.prototype.toString;
        t2.exports = function(t3) {
          return n.call(t3);
        };
      }, function(t2, e2, n) {
        var r, o = n(44), i = (r = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
        t2.exports = function(t3) {
          return !!i && i in t3;
        };
      }, function(t2, e2, n) {
        var r = n(0)["__core-js_shared__"];
        t2.exports = r;
      }, function(t2, e2) {
        t2.exports = function(t3, e3) {
          return null == t3 ? void 0 : t3[e3];
        };
      }, function(t2, e2, n) {
        var r = n(47), o = n(2), i = n(8);
        t2.exports = function() {
          this.size = 0, this.__data__ = { hash: new r(), map: new (i || o)(), string: new r() };
        };
      }, function(t2, e2, n) {
        var r = n(48), o = n(49), i = n(50), l = n(51), a = n(52);
        function s(t3) {
          var e3 = -1, n2 = null == t3 ? 0 : t3.length;
          for (this.clear(); ++e3 < n2; ) {
            var r2 = t3[e3];
            this.set(r2[0], r2[1]);
          }
        }
        s.prototype.clear = r, s.prototype.delete = o, s.prototype.get = i, s.prototype.has = l, s.prototype.set = a, t2.exports = s;
      }, function(t2, e2, n) {
        var r = n(5);
        t2.exports = function() {
          this.__data__ = r ? r(null) : {}, this.size = 0;
        };
      }, function(t2, e2) {
        t2.exports = function(t3) {
          var e3 = this.has(t3) && delete this.__data__[t3];
          return this.size -= e3 ? 1 : 0, e3;
        };
      }, function(t2, e2, n) {
        var r = n(5), o = "__lodash_hash_undefined__", i = Object.prototype.hasOwnProperty;
        t2.exports = function(t3) {
          var e3 = this.__data__;
          if (r) {
            var n2 = e3[t3];
            return n2 === o ? void 0 : n2;
          }
          return i.call(e3, t3) ? e3[t3] : void 0;
        };
      }, function(t2, e2, n) {
        var r = n(5), o = Object.prototype.hasOwnProperty;
        t2.exports = function(t3) {
          var e3 = this.__data__;
          return r ? void 0 !== e3[t3] : o.call(e3, t3);
        };
      }, function(t2, e2, n) {
        var r = n(5), o = "__lodash_hash_undefined__";
        t2.exports = function(t3, e3) {
          var n2 = this.__data__;
          return this.size += this.has(t3) ? 0 : 1, n2[t3] = r && void 0 === e3 ? o : e3, this;
        };
      }, function(t2, e2, n) {
        var r = n(6);
        t2.exports = function(t3) {
          var e3 = r(this, t3).delete(t3);
          return this.size -= e3 ? 1 : 0, e3;
        };
      }, function(t2, e2) {
        t2.exports = function(t3) {
          var e3 = typeof t3;
          return "string" == e3 || "number" == e3 || "symbol" == e3 || "boolean" == e3 ? "__proto__" !== t3 : null === t3;
        };
      }, function(t2, e2, n) {
        var r = n(6);
        t2.exports = function(t3) {
          return r(this, t3).get(t3);
        };
      }, function(t2, e2, n) {
        var r = n(6);
        t2.exports = function(t3) {
          return r(this, t3).has(t3);
        };
      }, function(t2, e2, n) {
        var r = n(6);
        t2.exports = function(t3, e3) {
          var n2 = r(this, t3), o = n2.size;
          return n2.set(t3, e3), this.size += n2.size == o ? 0 : 1, this;
        };
      }, function(t2, e2, n) {
        var r = n(17), o = n(59), i = n(60);
        function l(t3) {
          var e3 = -1, n2 = null == t3 ? 0 : t3.length;
          for (this.__data__ = new r(); ++e3 < n2; )
            this.add(t3[e3]);
        }
        l.prototype.add = l.prototype.push = o, l.prototype.has = i, t2.exports = l;
      }, function(t2, e2) {
        var n = "__lodash_hash_undefined__";
        t2.exports = function(t3) {
          return this.__data__.set(t3, n), this;
        };
      }, function(t2, e2) {
        t2.exports = function(t3) {
          return this.__data__.has(t3);
        };
      }, function(t2, e2) {
        t2.exports = function(t3, e3) {
          for (var n = -1, r = null == t3 ? 0 : t3.length; ++n < r; )
            if (e3(t3[n], n, t3))
              return true;
          return false;
        };
      }, function(t2, e2) {
        t2.exports = function(t3, e3) {
          return t3.has(e3);
        };
      }, function(t2, e2, n) {
        var r = n(9), o = n(64), i = n(11), l = n(18), a = n(65), s = n(66), u = 1, c = 2, f = "[object Boolean]", h = "[object Date]", p = "[object Error]", d = "[object Map]", y = "[object Number]", v = "[object RegExp]", b = "[object Set]", g = "[object String]", m = "[object Symbol]", _ = "[object ArrayBuffer]", O = "[object DataView]", w = r ? r.prototype : void 0, x = w ? w.valueOf : void 0;
        t2.exports = function(t3, e3, n2, r2, w2, E, k) {
          switch (n2) {
            case O:
              if (t3.byteLength != e3.byteLength || t3.byteOffset != e3.byteOffset)
                return false;
              t3 = t3.buffer, e3 = e3.buffer;
            case _:
              return !(t3.byteLength != e3.byteLength || !E(new o(t3), new o(e3)));
            case f:
            case h:
            case y:
              return i(+t3, +e3);
            case p:
              return t3.name == e3.name && t3.message == e3.message;
            case v:
            case g:
              return t3 == e3 + "";
            case d:
              var A = a;
            case b:
              var j = r2 & u;
              if (A || (A = s), t3.size != e3.size && !j)
                return false;
              var N = k.get(t3);
              if (N)
                return N == e3;
              r2 |= c, k.set(t3, e3);
              var T = l(A(t3), A(e3), r2, w2, E, k);
              return k.delete(t3), T;
            case m:
              if (x)
                return x.call(t3) == x.call(e3);
          }
          return false;
        };
      }, function(t2, e2, n) {
        var r = n(0).Uint8Array;
        t2.exports = r;
      }, function(t2, e2) {
        t2.exports = function(t3) {
          var e3 = -1, n = Array(t3.size);
          return t3.forEach(function(t4, r) {
            n[++e3] = [r, t4];
          }), n;
        };
      }, function(t2, e2) {
        t2.exports = function(t3) {
          var e3 = -1, n = Array(t3.size);
          return t3.forEach(function(t4) {
            n[++e3] = t4;
          }), n;
        };
      }, function(t2, e2, n) {
        var r = n(68), o = 1, i = Object.prototype.hasOwnProperty;
        t2.exports = function(t3, e3, n2, l, a, s) {
          var u = n2 & o, c = r(t3), f = c.length;
          if (f != r(e3).length && !u)
            return false;
          for (var h = f; h--; ) {
            var p = c[h];
            if (!(u ? p in e3 : i.call(e3, p)))
              return false;
          }
          var d = s.get(t3), y = s.get(e3);
          if (d && y)
            return d == e3 && y == t3;
          var v = true;
          s.set(t3, e3), s.set(e3, t3);
          for (var b = u; ++h < f; ) {
            var g = t3[p = c[h]], m = e3[p];
            if (l)
              var _ = u ? l(m, g, p, e3, t3, s) : l(g, m, p, t3, e3, s);
            if (!(void 0 === _ ? g === m || a(g, m, n2, l, s) : _)) {
              v = false;
              break;
            }
            b || (b = "constructor" == p);
          }
          if (v && !b) {
            var O = t3.constructor, w = e3.constructor;
            O != w && "constructor" in t3 && "constructor" in e3 && !("function" == typeof O && O instanceof O && "function" == typeof w && w instanceof w) && (v = false);
          }
          return s.delete(t3), s.delete(e3), v;
        };
      }, function(t2, e2, n) {
        var r = n(69), o = n(71), i = n(74);
        t2.exports = function(t3) {
          return r(t3, i, o);
        };
      }, function(t2, e2, n) {
        var r = n(70), o = n(10);
        t2.exports = function(t3, e3, n2) {
          var i = e3(t3);
          return o(t3) ? i : r(i, n2(t3));
        };
      }, function(t2, e2) {
        t2.exports = function(t3, e3) {
          for (var n = -1, r = e3.length, o = t3.length; ++n < r; )
            t3[o + n] = e3[n];
          return t3;
        };
      }, function(t2, e2, n) {
        var r = n(72), o = n(73), i = Object.prototype.propertyIsEnumerable, l = Object.getOwnPropertySymbols, a = l ? function(t3) {
          return null == t3 ? [] : (t3 = Object(t3), r(l(t3), function(e3) {
            return i.call(t3, e3);
          }));
        } : o;
        t2.exports = a;
      }, function(t2, e2) {
        t2.exports = function(t3, e3) {
          for (var n = -1, r = null == t3 ? 0 : t3.length, o = 0, i = []; ++n < r; ) {
            var l = t3[n];
            e3(l, n, t3) && (i[o++] = l);
          }
          return i;
        };
      }, function(t2, e2) {
        t2.exports = function() {
          return [];
        };
      }, function(t2, e2, n) {
        var r = n(75), o = n(84), i = n(88);
        t2.exports = function(t3) {
          return i(t3) ? r(t3) : o(t3);
        };
      }, function(t2, e2, n) {
        var r = n(76), o = n(77), i = n(10), l = n(19), a = n(80), s = n(21), u = Object.prototype.hasOwnProperty;
        t2.exports = function(t3, e3) {
          var n2 = i(t3), c = !n2 && o(t3), f = !n2 && !c && l(t3), h = !n2 && !c && !f && s(t3), p = n2 || c || f || h, d = p ? r(t3.length, String) : [], y = d.length;
          for (var v in t3)
            !e3 && !u.call(t3, v) || p && ("length" == v || f && ("offset" == v || "parent" == v) || h && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || a(v, y)) || d.push(v);
          return d;
        };
      }, function(t2, e2) {
        t2.exports = function(t3, e3) {
          for (var n = -1, r = Array(t3); ++n < t3; )
            r[n] = e3(n);
          return r;
        };
      }, function(t2, e2, n) {
        var r = n(78), o = n(7), i = Object.prototype, l = i.hasOwnProperty, a = i.propertyIsEnumerable, s = r(/* @__PURE__ */ function() {
          return arguments;
        }()) ? r : function(t3) {
          return o(t3) && l.call(t3, "callee") && !a.call(t3, "callee");
        };
        t2.exports = s;
      }, function(t2, e2, n) {
        var r = n(4), o = n(7), i = "[object Arguments]";
        t2.exports = function(t3) {
          return o(t3) && r(t3) == i;
        };
      }, function(t2, e2) {
        t2.exports = function() {
          return false;
        };
      }, function(t2, e2) {
        var n = 9007199254740991, r = /^(?:0|[1-9]\d*)$/;
        t2.exports = function(t3, e3) {
          var o = typeof t3;
          return !!(e3 = null == e3 ? n : e3) && ("number" == o || "symbol" != o && r.test(t3)) && t3 > -1 && t3 % 1 == 0 && t3 < e3;
        };
      }, function(t2, e2, n) {
        var r = n(4), o = n(22), i = n(7), l = {};
        l["[object Float32Array]"] = l["[object Float64Array]"] = l["[object Int8Array]"] = l["[object Int16Array]"] = l["[object Int32Array]"] = l["[object Uint8Array]"] = l["[object Uint8ClampedArray]"] = l["[object Uint16Array]"] = l["[object Uint32Array]"] = true, l["[object Arguments]"] = l["[object Array]"] = l["[object ArrayBuffer]"] = l["[object Boolean]"] = l["[object DataView]"] = l["[object Date]"] = l["[object Error]"] = l["[object Function]"] = l["[object Map]"] = l["[object Number]"] = l["[object Object]"] = l["[object RegExp]"] = l["[object Set]"] = l["[object String]"] = l["[object WeakMap]"] = false, t2.exports = function(t3) {
          return i(t3) && o(t3.length) && !!l[r(t3)];
        };
      }, function(t2, e2) {
        t2.exports = function(t3) {
          return function(e3) {
            return t3(e3);
          };
        };
      }, function(t2, e2, n) {
        (function(t3) {
          var r = n(13), o = e2 && !e2.nodeType && e2, i = o && "object" == typeof t3 && t3 && !t3.nodeType && t3, l = i && i.exports === o && r.process, a = function() {
            try {
              var t4 = i && i.require && i.require("util").types;
              return t4 || l && l.binding && l.binding("util");
            } catch (t5) {
            }
          }();
          t3.exports = a;
        }).call(this, n(20)(t2));
      }, function(t2, e2, n) {
        var r = n(85), o = n(86), i = Object.prototype.hasOwnProperty;
        t2.exports = function(t3) {
          if (!r(t3))
            return o(t3);
          var e3 = [];
          for (var n2 in Object(t3))
            i.call(t3, n2) && "constructor" != n2 && e3.push(n2);
          return e3;
        };
      }, function(t2, e2) {
        var n = Object.prototype;
        t2.exports = function(t3) {
          var e3 = t3 && t3.constructor;
          return t3 === ("function" == typeof e3 && e3.prototype || n);
        };
      }, function(t2, e2, n) {
        var r = n(87)(Object.keys, Object);
        t2.exports = r;
      }, function(t2, e2) {
        t2.exports = function(t3, e3) {
          return function(n) {
            return t3(e3(n));
          };
        };
      }, function(t2, e2, n) {
        var r = n(12), o = n(22);
        t2.exports = function(t3) {
          return null != t3 && o(t3.length) && !r(t3);
        };
      }, function(t2, e2, n) {
        var r = n(90), o = n(8), i = n(91), l = n(92), a = n(93), s = n(4), u = n(16), c = u(r), f = u(o), h = u(i), p = u(l), d = u(a), y = s;
        (r && "[object DataView]" != y(new r(new ArrayBuffer(1))) || o && "[object Map]" != y(new o()) || i && "[object Promise]" != y(i.resolve()) || l && "[object Set]" != y(new l()) || a && "[object WeakMap]" != y(new a())) && (y = function(t3) {
          var e3 = s(t3), n2 = "[object Object]" == e3 ? t3.constructor : void 0, r2 = n2 ? u(n2) : "";
          if (r2)
            switch (r2) {
              case c:
                return "[object DataView]";
              case f:
                return "[object Map]";
              case h:
                return "[object Promise]";
              case p:
                return "[object Set]";
              case d:
                return "[object WeakMap]";
            }
          return e3;
        }), t2.exports = y;
      }, function(t2, e2, n) {
        var r = n(1)(n(0), "DataView");
        t2.exports = r;
      }, function(t2, e2, n) {
        var r = n(1)(n(0), "Promise");
        t2.exports = r;
      }, function(t2, e2, n) {
        var r = n(1)(n(0), "Set");
        t2.exports = r;
      }, function(t2, e2, n) {
        var r = n(1)(n(0), "WeakMap");
        t2.exports = r;
      }, function(t2, e2, n) {
        (function(e3) {
          var n2;
          "undefined" != typeof self && self, n2 = function() {
            return function(t3) {
              var e4 = {};
              function n3(r) {
                if (e4[r])
                  return e4[r].exports;
                var o = e4[r] = { i: r, l: false, exports: {} };
                return t3[r].call(o.exports, o, o.exports, n3), o.l = true, o.exports;
              }
              return n3.m = t3, n3.c = e4, n3.d = function(t4, e5, r) {
                n3.o(t4, e5) || Object.defineProperty(t4, e5, { configurable: false, enumerable: true, get: r });
              }, n3.n = function(t4) {
                var e5 = t4 && t4.__esModule ? function() {
                  return t4.default;
                } : function() {
                  return t4;
                };
                return n3.d(e5, "a", e5), e5;
              }, n3.o = function(t4, e5) {
                return Object.prototype.hasOwnProperty.call(t4, e5);
              }, n3.p = "", n3(n3.s = 109);
            }([function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r = n3(17), o = n3(18), i = n3(19), l = n3(45), a = n3(46), s = n3(47), u = n3(48), c = n3(49), f = n3(12), h = n3(32), p = n3(33), d = n3(31), y = n3(1), v = { Scope: y.Scope, create: y.create, find: y.find, query: y.query, register: y.register, Container: r.default, Format: o.default, Leaf: i.default, Embed: u.default, Scroll: l.default, Block: s.default, Inline: a.default, Text: c.default, Attributor: { Attribute: f.default, Class: h.default, Style: p.default, Store: d.default } };
              e4.default = v;
            }, function(t3, e4, n3) {
              "use strict";
              var r, o = this && this.__extends || (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e5) {
                t4.__proto__ = e5;
              } || function(t4, e5) {
                for (var n4 in e5)
                  e5.hasOwnProperty(n4) && (t4[n4] = e5[n4]);
              }, function(t4, e5) {
                function n4() {
                  this.constructor = t4;
                }
                r(t4, e5), t4.prototype = null === e5 ? Object.create(e5) : (n4.prototype = e5.prototype, new n4());
              });
              Object.defineProperty(e4, "__esModule", { value: true });
              var i = function(t4) {
                function e5(e6) {
                  var n4 = this;
                  return e6 = "[Parchment] " + e6, (n4 = t4.call(this, e6) || this).message = e6, n4.name = n4.constructor.name, n4;
                }
                return o(e5, t4), e5;
              }(Error);
              e4.ParchmentError = i;
              var l, a = {}, s = {}, u = {}, c = {};
              function f(t4, e5) {
                var n4;
                if (void 0 === e5 && (e5 = l.ANY), "string" == typeof t4)
                  n4 = c[t4] || a[t4];
                else if (t4 instanceof Text || t4.nodeType === Node.TEXT_NODE)
                  n4 = c.text;
                else if ("number" == typeof t4)
                  t4 & l.LEVEL & l.BLOCK ? n4 = c.block : t4 & l.LEVEL & l.INLINE && (n4 = c.inline);
                else if (t4 instanceof HTMLElement) {
                  var r2 = (t4.getAttribute("class") || "").split(/\s+/);
                  for (var o2 in r2)
                    if (n4 = s[r2[o2]])
                      break;
                  n4 = n4 || u[t4.tagName];
                }
                return null == n4 ? null : e5 & l.LEVEL & n4.scope && e5 & l.TYPE & n4.scope ? n4 : null;
              }
              e4.DATA_KEY = "__blot", function(t4) {
                t4[t4.TYPE = 3] = "TYPE", t4[t4.LEVEL = 12] = "LEVEL", t4[t4.ATTRIBUTE = 13] = "ATTRIBUTE", t4[t4.BLOT = 14] = "BLOT", t4[t4.INLINE = 7] = "INLINE", t4[t4.BLOCK = 11] = "BLOCK", t4[t4.BLOCK_BLOT = 10] = "BLOCK_BLOT", t4[t4.INLINE_BLOT = 6] = "INLINE_BLOT", t4[t4.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", t4[t4.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", t4[t4.ANY = 15] = "ANY";
              }(l = e4.Scope || (e4.Scope = {})), e4.create = function(t4, e5) {
                var n4 = f(t4);
                if (null == n4)
                  throw new i("Unable to create " + t4 + " blot");
                var r2 = n4, o2 = t4 instanceof Node || t4.nodeType === Node.TEXT_NODE ? t4 : r2.create(e5);
                return new r2(o2, e5);
              }, e4.find = function t4(n4, r2) {
                return void 0 === r2 && (r2 = false), null == n4 ? null : null != n4[e4.DATA_KEY] ? n4[e4.DATA_KEY].blot : r2 ? t4(n4.parentNode, r2) : null;
              }, e4.query = f, e4.register = function t4() {
                for (var e5 = [], n4 = 0; n4 < arguments.length; n4++)
                  e5[n4] = arguments[n4];
                if (e5.length > 1)
                  return e5.map(function(e6) {
                    return t4(e6);
                  });
                var r2 = e5[0];
                if ("string" != typeof r2.blotName && "string" != typeof r2.attrName)
                  throw new i("Invalid definition");
                if ("abstract" === r2.blotName)
                  throw new i("Cannot register abstract class");
                return c[r2.blotName || r2.attrName] = r2, "string" == typeof r2.keyName ? a[r2.keyName] = r2 : (null != r2.className && (s[r2.className] = r2), null != r2.tagName && (Array.isArray(r2.tagName) ? r2.tagName = r2.tagName.map(function(t5) {
                  return t5.toUpperCase();
                }) : r2.tagName = r2.tagName.toUpperCase(), (Array.isArray(r2.tagName) ? r2.tagName : [r2.tagName]).forEach(function(t5) {
                  null != u[t5] && null != r2.className || (u[t5] = r2);
                }))), r2;
              };
            }, function(t3, e4, n3) {
              var r = n3(51), o = n3(11), i = n3(3), l = n3(20), a = String.fromCharCode(0), s = function(t4) {
                Array.isArray(t4) ? this.ops = t4 : null != t4 && Array.isArray(t4.ops) ? this.ops = t4.ops : this.ops = [];
              };
              s.prototype.insert = function(t4, e5) {
                var n4 = {};
                return 0 === t4.length ? this : (n4.insert = t4, null != e5 && "object" == typeof e5 && Object.keys(e5).length > 0 && (n4.attributes = e5), this.push(n4));
              }, s.prototype.delete = function(t4) {
                return t4 <= 0 ? this : this.push({ delete: t4 });
              }, s.prototype.retain = function(t4, e5) {
                if (t4 <= 0)
                  return this;
                var n4 = { retain: t4 };
                return null != e5 && "object" == typeof e5 && Object.keys(e5).length > 0 && (n4.attributes = e5), this.push(n4);
              }, s.prototype.push = function(t4) {
                var e5 = this.ops.length, n4 = this.ops[e5 - 1];
                if (t4 = i(true, {}, t4), "object" == typeof n4) {
                  if ("number" == typeof t4.delete && "number" == typeof n4.delete)
                    return this.ops[e5 - 1] = { delete: n4.delete + t4.delete }, this;
                  if ("number" == typeof n4.delete && null != t4.insert && (e5 -= 1, "object" != typeof (n4 = this.ops[e5 - 1])))
                    return this.ops.unshift(t4), this;
                  if (o(t4.attributes, n4.attributes)) {
                    if ("string" == typeof t4.insert && "string" == typeof n4.insert)
                      return this.ops[e5 - 1] = { insert: n4.insert + t4.insert }, "object" == typeof t4.attributes && (this.ops[e5 - 1].attributes = t4.attributes), this;
                    if ("number" == typeof t4.retain && "number" == typeof n4.retain)
                      return this.ops[e5 - 1] = { retain: n4.retain + t4.retain }, "object" == typeof t4.attributes && (this.ops[e5 - 1].attributes = t4.attributes), this;
                  }
                }
                return e5 === this.ops.length ? this.ops.push(t4) : this.ops.splice(e5, 0, t4), this;
              }, s.prototype.chop = function() {
                var t4 = this.ops[this.ops.length - 1];
                return t4 && t4.retain && !t4.attributes && this.ops.pop(), this;
              }, s.prototype.filter = function(t4) {
                return this.ops.filter(t4);
              }, s.prototype.forEach = function(t4) {
                this.ops.forEach(t4);
              }, s.prototype.map = function(t4) {
                return this.ops.map(t4);
              }, s.prototype.partition = function(t4) {
                var e5 = [], n4 = [];
                return this.forEach(function(r2) {
                  (t4(r2) ? e5 : n4).push(r2);
                }), [e5, n4];
              }, s.prototype.reduce = function(t4, e5) {
                return this.ops.reduce(t4, e5);
              }, s.prototype.changeLength = function() {
                return this.reduce(function(t4, e5) {
                  return e5.insert ? t4 + l.length(e5) : e5.delete ? t4 - e5.delete : t4;
                }, 0);
              }, s.prototype.length = function() {
                return this.reduce(function(t4, e5) {
                  return t4 + l.length(e5);
                }, 0);
              }, s.prototype.slice = function(t4, e5) {
                t4 = t4 || 0, "number" != typeof e5 && (e5 = 1 / 0);
                for (var n4 = [], r2 = l.iterator(this.ops), o2 = 0; o2 < e5 && r2.hasNext(); ) {
                  var i2;
                  o2 < t4 ? i2 = r2.next(t4 - o2) : (i2 = r2.next(e5 - o2), n4.push(i2)), o2 += l.length(i2);
                }
                return new s(n4);
              }, s.prototype.compose = function(t4) {
                var e5 = l.iterator(this.ops), n4 = l.iterator(t4.ops), r2 = [], i2 = n4.peek();
                if (null != i2 && "number" == typeof i2.retain && null == i2.attributes) {
                  for (var a2 = i2.retain; "insert" === e5.peekType() && e5.peekLength() <= a2; )
                    a2 -= e5.peekLength(), r2.push(e5.next());
                  i2.retain - a2 > 0 && n4.next(i2.retain - a2);
                }
                for (var u = new s(r2); e5.hasNext() || n4.hasNext(); )
                  if ("insert" === n4.peekType())
                    u.push(n4.next());
                  else if ("delete" === e5.peekType())
                    u.push(e5.next());
                  else {
                    var c = Math.min(e5.peekLength(), n4.peekLength()), f = e5.next(c), h = n4.next(c);
                    if ("number" == typeof h.retain) {
                      var p = {};
                      "number" == typeof f.retain ? p.retain = c : p.insert = f.insert;
                      var d = l.attributes.compose(f.attributes, h.attributes, "number" == typeof f.retain);
                      if (d && (p.attributes = d), u.push(p), !n4.hasNext() && o(u.ops[u.ops.length - 1], p)) {
                        var y = new s(e5.rest());
                        return u.concat(y).chop();
                      }
                    } else
                      "number" == typeof h.delete && "number" == typeof f.retain && u.push(h);
                  }
                return u.chop();
              }, s.prototype.concat = function(t4) {
                var e5 = new s(this.ops.slice());
                return t4.ops.length > 0 && (e5.push(t4.ops[0]), e5.ops = e5.ops.concat(t4.ops.slice(1))), e5;
              }, s.prototype.diff = function(t4, e5) {
                if (this.ops === t4.ops)
                  return new s();
                var n4 = [this, t4].map(function(e6) {
                  return e6.map(function(n5) {
                    if (null != n5.insert)
                      return "string" == typeof n5.insert ? n5.insert : a;
                    throw new Error("diff() called " + (e6 === t4 ? "on" : "with") + " non-document");
                  }).join("");
                }), i2 = new s(), u = r(n4[0], n4[1], e5), c = l.iterator(this.ops), f = l.iterator(t4.ops);
                return u.forEach(function(t5) {
                  for (var e6 = t5[1].length; e6 > 0; ) {
                    var n5 = 0;
                    switch (t5[0]) {
                      case r.INSERT:
                        n5 = Math.min(f.peekLength(), e6), i2.push(f.next(n5));
                        break;
                      case r.DELETE:
                        n5 = Math.min(e6, c.peekLength()), c.next(n5), i2.delete(n5);
                        break;
                      case r.EQUAL:
                        n5 = Math.min(c.peekLength(), f.peekLength(), e6);
                        var a2 = c.next(n5), s2 = f.next(n5);
                        o(a2.insert, s2.insert) ? i2.retain(n5, l.attributes.diff(a2.attributes, s2.attributes)) : i2.push(s2).delete(n5);
                    }
                    e6 -= n5;
                  }
                }), i2.chop();
              }, s.prototype.eachLine = function(t4, e5) {
                e5 = e5 || "\n";
                for (var n4 = l.iterator(this.ops), r2 = new s(), o2 = 0; n4.hasNext(); ) {
                  if ("insert" !== n4.peekType())
                    return;
                  var i2 = n4.peek(), a2 = l.length(i2) - n4.peekLength(), u = "string" == typeof i2.insert ? i2.insert.indexOf(e5, a2) - a2 : -1;
                  if (u < 0)
                    r2.push(n4.next());
                  else if (u > 0)
                    r2.push(n4.next(u));
                  else {
                    if (false === t4(r2, n4.next(1).attributes || {}, o2))
                      return;
                    o2 += 1, r2 = new s();
                  }
                }
                r2.length() > 0 && t4(r2, {}, o2);
              }, s.prototype.transform = function(t4, e5) {
                if (e5 = !!e5, "number" == typeof t4)
                  return this.transformPosition(t4, e5);
                for (var n4 = l.iterator(this.ops), r2 = l.iterator(t4.ops), o2 = new s(); n4.hasNext() || r2.hasNext(); )
                  if ("insert" !== n4.peekType() || !e5 && "insert" === r2.peekType())
                    if ("insert" === r2.peekType())
                      o2.push(r2.next());
                    else {
                      var i2 = Math.min(n4.peekLength(), r2.peekLength()), a2 = n4.next(i2), u = r2.next(i2);
                      if (a2.delete)
                        continue;
                      u.delete ? o2.push(u) : o2.retain(i2, l.attributes.transform(a2.attributes, u.attributes, e5));
                    }
                  else
                    o2.retain(l.length(n4.next()));
                return o2.chop();
              }, s.prototype.transformPosition = function(t4, e5) {
                e5 = !!e5;
                for (var n4 = l.iterator(this.ops), r2 = 0; n4.hasNext() && r2 <= t4; ) {
                  var o2 = n4.peekLength(), i2 = n4.peekType();
                  n4.next(), "delete" !== i2 ? ("insert" === i2 && (r2 < t4 || !e5) && (t4 += o2), r2 += o2) : t4 -= Math.min(o2, t4 - r2);
                }
                return t4;
              }, t3.exports = s;
            }, function(t3, e4) {
              "use strict";
              var n3 = Object.prototype.hasOwnProperty, r = Object.prototype.toString, o = Object.defineProperty, i = Object.getOwnPropertyDescriptor, l = function(t4) {
                return "function" == typeof Array.isArray ? Array.isArray(t4) : "[object Array]" === r.call(t4);
              }, a = function(t4) {
                if (!t4 || "[object Object]" !== r.call(t4))
                  return false;
                var e5, o2 = n3.call(t4, "constructor"), i2 = t4.constructor && t4.constructor.prototype && n3.call(t4.constructor.prototype, "isPrototypeOf");
                if (t4.constructor && !o2 && !i2)
                  return false;
                for (e5 in t4)
                  ;
                return void 0 === e5 || n3.call(t4, e5);
              }, s = function(t4, e5) {
                o && "__proto__" === e5.name ? o(t4, e5.name, { enumerable: true, configurable: true, value: e5.newValue, writable: true }) : t4[e5.name] = e5.newValue;
              }, u = function(t4, e5) {
                if ("__proto__" === e5) {
                  if (!n3.call(t4, e5))
                    return;
                  if (i)
                    return i(t4, e5).value;
                }
                return t4[e5];
              };
              t3.exports = function t4() {
                var e5, n4, r2, o2, i2, c, f = arguments[0], h = 1, p = arguments.length, d = false;
                for ("boolean" == typeof f && (d = f, f = arguments[1] || {}, h = 2), (null == f || "object" != typeof f && "function" != typeof f) && (f = {}); h < p; ++h)
                  if (null != (e5 = arguments[h]))
                    for (n4 in e5)
                      r2 = u(f, n4), f !== (o2 = u(e5, n4)) && (d && o2 && (a(o2) || (i2 = l(o2))) ? (i2 ? (i2 = false, c = r2 && l(r2) ? r2 : []) : c = r2 && a(r2) ? r2 : {}, s(f, { name: n4, newValue: t4(d, c, o2) })) : void 0 !== o2 && s(f, { name: n4, newValue: o2 }));
                return f;
              };
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true }), e4.default = e4.BlockEmbed = e4.bubbleFormats = void 0;
              var r = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), o = function t4(e5, n4, r2) {
                null === e5 && (e5 = Function.prototype);
                var o2 = Object.getOwnPropertyDescriptor(e5, n4);
                if (void 0 === o2) {
                  var i2 = Object.getPrototypeOf(e5);
                  return null === i2 ? void 0 : t4(i2, n4, r2);
                }
                if ("value" in o2)
                  return o2.value;
                var l2 = o2.get;
                return void 0 !== l2 ? l2.call(r2) : void 0;
              }, i = f(n3(3)), l = f(n3(2)), a = f(n3(0)), s = f(n3(16)), u = f(n3(6)), c = f(n3(7));
              function f(t4) {
                return t4 && t4.__esModule ? t4 : { default: t4 };
              }
              function h(t4, e5) {
                if (!(t4 instanceof e5))
                  throw new TypeError("Cannot call a class as a function");
              }
              function p(t4, e5) {
                if (!t4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e5 || "object" != typeof e5 && "function" != typeof e5 ? t4 : e5;
              }
              function d(t4, e5) {
                if ("function" != typeof e5 && null !== e5)
                  throw new TypeError("Super expression must either be null or a function, not " + typeof e5);
                t4.prototype = Object.create(e5 && e5.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e5 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e5) : t4.__proto__ = e5);
              }
              var y = function(t4) {
                function e5() {
                  return h(this, e5), p(this, (e5.__proto__ || Object.getPrototypeOf(e5)).apply(this, arguments));
                }
                return d(e5, t4), r(e5, [{ key: "attach", value: function() {
                  o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "attach", this).call(this), this.attributes = new a.default.Attributor.Store(this.domNode);
                } }, { key: "delta", value: function() {
                  return new l.default().insert(this.value(), (0, i.default)(this.formats(), this.attributes.values()));
                } }, { key: "format", value: function(t5, e6) {
                  var n4 = a.default.query(t5, a.default.Scope.BLOCK_ATTRIBUTE);
                  null != n4 && this.attributes.attribute(n4, e6);
                } }, { key: "formatAt", value: function(t5, e6, n4, r2) {
                  this.format(n4, r2);
                } }, { key: "insertAt", value: function(t5, n4, r2) {
                  if ("string" == typeof n4 && n4.endsWith("\n")) {
                    var i2 = a.default.create(v.blotName);
                    this.parent.insertBefore(i2, 0 === t5 ? this : this.next), i2.insertAt(0, n4.slice(0, -1));
                  } else
                    o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "insertAt", this).call(this, t5, n4, r2);
                } }]), e5;
              }(a.default.Embed);
              y.scope = a.default.Scope.BLOCK_BLOT;
              var v = function(t4) {
                function e5(t5) {
                  h(this, e5);
                  var n4 = p(this, (e5.__proto__ || Object.getPrototypeOf(e5)).call(this, t5));
                  return n4.cache = {}, n4;
                }
                return d(e5, t4), r(e5, [{ key: "delta", value: function() {
                  return null == this.cache.delta && (this.cache.delta = this.descendants(a.default.Leaf).reduce(function(t5, e6) {
                    return 0 === e6.length() ? t5 : t5.insert(e6.value(), b(e6));
                  }, new l.default()).insert("\n", b(this))), this.cache.delta;
                } }, { key: "deleteAt", value: function(t5, n4) {
                  o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "deleteAt", this).call(this, t5, n4), this.cache = {};
                } }, { key: "formatAt", value: function(t5, n4, r2, i2) {
                  n4 <= 0 || (a.default.query(r2, a.default.Scope.BLOCK) ? t5 + n4 === this.length() && this.format(r2, i2) : o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "formatAt", this).call(this, t5, Math.min(n4, this.length() - t5 - 1), r2, i2), this.cache = {});
                } }, { key: "insertAt", value: function(t5, n4, r2) {
                  if (null != r2)
                    return o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "insertAt", this).call(this, t5, n4, r2);
                  if (0 !== n4.length) {
                    var i2 = n4.split("\n"), l2 = i2.shift();
                    l2.length > 0 && (t5 < this.length() - 1 || null == this.children.tail ? o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "insertAt", this).call(this, Math.min(t5, this.length() - 1), l2) : this.children.tail.insertAt(this.children.tail.length(), l2), this.cache = {});
                    var a2 = this;
                    i2.reduce(function(t6, e6) {
                      return (a2 = a2.split(t6, true)).insertAt(0, e6), e6.length;
                    }, t5 + l2.length);
                  }
                } }, { key: "insertBefore", value: function(t5, n4) {
                  var r2 = this.children.head;
                  o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "insertBefore", this).call(this, t5, n4), r2 instanceof s.default && r2.remove(), this.cache = {};
                } }, { key: "length", value: function() {
                  return null == this.cache.length && (this.cache.length = o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "length", this).call(this) + 1), this.cache.length;
                } }, { key: "moveChildren", value: function(t5, n4) {
                  o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "moveChildren", this).call(this, t5, n4), this.cache = {};
                } }, { key: "optimize", value: function(t5) {
                  o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "optimize", this).call(this, t5), this.cache = {};
                } }, { key: "path", value: function(t5) {
                  return o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "path", this).call(this, t5, true);
                } }, { key: "removeChild", value: function(t5) {
                  o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "removeChild", this).call(this, t5), this.cache = {};
                } }, { key: "split", value: function(t5) {
                  var n4 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  if (n4 && (0 === t5 || t5 >= this.length() - 1)) {
                    var r2 = this.clone();
                    return 0 === t5 ? (this.parent.insertBefore(r2, this), this) : (this.parent.insertBefore(r2, this.next), r2);
                  }
                  var i2 = o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "split", this).call(this, t5, n4);
                  return this.cache = {}, i2;
                } }]), e5;
              }(a.default.Block);
              function b(t4) {
                var e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return null == t4 ? e5 : ("function" == typeof t4.formats && (e5 = (0, i.default)(e5, t4.formats())), null == t4.parent || "scroll" == t4.parent.blotName || t4.parent.statics.scope !== t4.statics.scope ? e5 : b(t4.parent, e5));
              }
              v.blotName = "block", v.tagName = "P", v.defaultChild = "break", v.allowedChildren = [u.default, a.default.Embed, c.default], e4.bubbleFormats = b, e4.BlockEmbed = y, e4.default = v;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true }), e4.default = e4.overload = e4.expandConfig = void 0;
              var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
                return typeof t4;
              } : function(t4) {
                return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
              }, o = function(t4, e5) {
                if (Array.isArray(t4))
                  return t4;
                if (Symbol.iterator in Object(t4))
                  return function(t5, e6) {
                    var n4 = [], r2 = true, o2 = false, i2 = void 0;
                    try {
                      for (var l2, a2 = t5[Symbol.iterator](); !(r2 = (l2 = a2.next()).done) && (n4.push(l2.value), !e6 || n4.length !== e6); r2 = true)
                        ;
                    } catch (t6) {
                      o2 = true, i2 = t6;
                    } finally {
                      try {
                        !r2 && a2.return && a2.return();
                      } finally {
                        if (o2)
                          throw i2;
                      }
                    }
                    return n4;
                  }(t4, e5);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              }, i = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }();
              n3(50);
              var l = v(n3(2)), a = v(n3(14)), s = v(n3(8)), u = v(n3(9)), c = v(n3(0)), f = n3(15), h = v(f), p = v(n3(3)), d = v(n3(10)), y = v(n3(34));
              function v(t4) {
                return t4 && t4.__esModule ? t4 : { default: t4 };
              }
              function b(t4, e5, n4) {
                return e5 in t4 ? Object.defineProperty(t4, e5, { value: n4, enumerable: true, configurable: true, writable: true }) : t4[e5] = n4, t4;
              }
              var g = (0, d.default)("quill"), m = function() {
                function t4(e5) {
                  var n4 = this, r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  if (function(t5, e6) {
                    if (!(t5 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, t4), this.options = _(e5, r2), this.container = this.options.container, null == this.container)
                    return g.error("Invalid Quill container", e5);
                  this.options.debug && t4.debug(this.options.debug);
                  var o2 = this.container.innerHTML.trim();
                  this.container.classList.add("ql-container"), this.container.innerHTML = "", this.container.__quill = this, this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.root.setAttribute("data-gramm", false), this.scrollingContainer = this.options.scrollingContainer || this.root, this.emitter = new s.default(), this.scroll = c.default.create(this.root, { emitter: this.emitter, whitelist: this.options.formats }), this.editor = new a.default(this.scroll), this.selection = new h.default(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.theme.init(), this.emitter.on(s.default.events.EDITOR_CHANGE, function(t5) {
                    t5 === s.default.events.TEXT_CHANGE && n4.root.classList.toggle("ql-blank", n4.editor.isBlank());
                  }), this.emitter.on(s.default.events.SCROLL_UPDATE, function(t5, e6) {
                    var r3 = n4.selection.lastRange, o3 = r3 && 0 === r3.length ? r3.index : void 0;
                    O.call(n4, function() {
                      return n4.editor.update(null, e6, o3);
                    }, t5);
                  });
                  var i2 = this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">` + o2 + "<p><br></p></div>");
                  this.setContents(i2), this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable();
                }
                return i(t4, null, [{ key: "debug", value: function(t5) {
                  true === t5 && (t5 = "log"), d.default.level(t5);
                } }, { key: "find", value: function(t5) {
                  return t5.__quill || c.default.find(t5);
                } }, { key: "import", value: function(t5) {
                  return null == this.imports[t5] && g.error("Cannot import " + t5 + ". Are you sure it was registered?"), this.imports[t5];
                } }, { key: "register", value: function(t5, e5) {
                  var n4 = this, r2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                  if ("string" != typeof t5) {
                    var o2 = t5.attrName || t5.blotName;
                    "string" == typeof o2 ? this.register("formats/" + o2, t5, e5) : Object.keys(t5).forEach(function(r3) {
                      n4.register(r3, t5[r3], e5);
                    });
                  } else
                    null == this.imports[t5] || r2 || g.warn("Overwriting " + t5 + " with", e5), this.imports[t5] = e5, (t5.startsWith("blots/") || t5.startsWith("formats/")) && "abstract" !== e5.blotName ? c.default.register(e5) : t5.startsWith("modules") && "function" == typeof e5.register && e5.register();
                } }]), i(t4, [{ key: "addContainer", value: function(t5) {
                  var e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                  if ("string" == typeof t5) {
                    var n4 = t5;
                    (t5 = document.createElement("div")).classList.add(n4);
                  }
                  return this.container.insertBefore(t5, e5), t5;
                } }, { key: "blur", value: function() {
                  this.selection.setRange(null);
                } }, { key: "deleteText", value: function(t5, e5, n4) {
                  var r2 = this, i2 = w(t5, e5, n4), l2 = o(i2, 4);
                  return t5 = l2[0], e5 = l2[1], n4 = l2[3], O.call(this, function() {
                    return r2.editor.deleteText(t5, e5);
                  }, n4, t5, -1 * e5);
                } }, { key: "disable", value: function() {
                  this.enable(false);
                } }, { key: "enable", value: function() {
                  var t5 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                  this.scroll.enable(t5), this.container.classList.toggle("ql-disabled", !t5);
                } }, { key: "focus", value: function() {
                  var t5 = this.scrollingContainer.scrollTop;
                  this.selection.focus(), this.scrollingContainer.scrollTop = t5, this.scrollIntoView();
                } }, { key: "format", value: function(t5, e5) {
                  var n4 = this, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.default.sources.API;
                  return O.call(this, function() {
                    var r3 = n4.getSelection(true), o2 = new l.default();
                    if (null == r3)
                      return o2;
                    if (c.default.query(t5, c.default.Scope.BLOCK))
                      o2 = n4.editor.formatLine(r3.index, r3.length, b({}, t5, e5));
                    else {
                      if (0 === r3.length)
                        return n4.selection.format(t5, e5), o2;
                      o2 = n4.editor.formatText(r3.index, r3.length, b({}, t5, e5));
                    }
                    return n4.setSelection(r3, s.default.sources.SILENT), o2;
                  }, r2);
                } }, { key: "formatLine", value: function(t5, e5, n4, r2, i2) {
                  var l2, a2 = this, s2 = w(t5, e5, n4, r2, i2), u2 = o(s2, 4);
                  return t5 = u2[0], e5 = u2[1], l2 = u2[2], i2 = u2[3], O.call(this, function() {
                    return a2.editor.formatLine(t5, e5, l2);
                  }, i2, t5, 0);
                } }, { key: "formatText", value: function(t5, e5, n4, r2, i2) {
                  var l2, a2 = this, s2 = w(t5, e5, n4, r2, i2), u2 = o(s2, 4);
                  return t5 = u2[0], e5 = u2[1], l2 = u2[2], i2 = u2[3], O.call(this, function() {
                    return a2.editor.formatText(t5, e5, l2);
                  }, i2, t5, 0);
                } }, { key: "getBounds", value: function(t5) {
                  var e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n4 = void 0;
                  n4 = "number" == typeof t5 ? this.selection.getBounds(t5, e5) : this.selection.getBounds(t5.index, t5.length);
                  var r2 = this.container.getBoundingClientRect();
                  return { bottom: n4.bottom - r2.top, height: n4.height, left: n4.left - r2.left, right: n4.right - r2.left, top: n4.top - r2.top, width: n4.width };
                } }, { key: "getContents", value: function() {
                  var t5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t5, n4 = w(t5, e5), r2 = o(n4, 2);
                  return t5 = r2[0], e5 = r2[1], this.editor.getContents(t5, e5);
                } }, { key: "getFormat", value: function() {
                  var t5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getSelection(true), e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                  return "number" == typeof t5 ? this.editor.getFormat(t5, e5) : this.editor.getFormat(t5.index, t5.length);
                } }, { key: "getIndex", value: function(t5) {
                  return t5.offset(this.scroll);
                } }, { key: "getLength", value: function() {
                  return this.scroll.length();
                } }, { key: "getLeaf", value: function(t5) {
                  return this.scroll.leaf(t5);
                } }, { key: "getLine", value: function(t5) {
                  return this.scroll.line(t5);
                } }, { key: "getLines", value: function() {
                  var t5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
                  return "number" != typeof t5 ? this.scroll.lines(t5.index, t5.length) : this.scroll.lines(t5, e5);
                } }, { key: "getModule", value: function(t5) {
                  return this.theme.modules[t5];
                } }, { key: "getSelection", value: function() {
                  var t5 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  return t5 && this.focus(), this.update(), this.selection.getRange()[0];
                } }, { key: "getText", value: function() {
                  var t5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t5, n4 = w(t5, e5), r2 = o(n4, 2);
                  return t5 = r2[0], e5 = r2[1], this.editor.getText(t5, e5);
                } }, { key: "hasFocus", value: function() {
                  return this.selection.hasFocus();
                } }, { key: "insertEmbed", value: function(e5, n4, r2) {
                  var o2 = this, i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t4.sources.API;
                  return O.call(this, function() {
                    return o2.editor.insertEmbed(e5, n4, r2);
                  }, i2, e5);
                } }, { key: "insertText", value: function(t5, e5, n4, r2, i2) {
                  var l2, a2 = this, s2 = w(t5, 0, n4, r2, i2), u2 = o(s2, 4);
                  return t5 = u2[0], l2 = u2[2], i2 = u2[3], O.call(this, function() {
                    return a2.editor.insertText(t5, e5, l2);
                  }, i2, t5, e5.length);
                } }, { key: "isEnabled", value: function() {
                  return !this.container.classList.contains("ql-disabled");
                } }, { key: "off", value: function() {
                  return this.emitter.off.apply(this.emitter, arguments);
                } }, { key: "on", value: function() {
                  return this.emitter.on.apply(this.emitter, arguments);
                } }, { key: "once", value: function() {
                  return this.emitter.once.apply(this.emitter, arguments);
                } }, { key: "pasteHTML", value: function(t5, e5, n4) {
                  this.clipboard.dangerouslyPasteHTML(t5, e5, n4);
                } }, { key: "removeFormat", value: function(t5, e5, n4) {
                  var r2 = this, i2 = w(t5, e5, n4), l2 = o(i2, 4);
                  return t5 = l2[0], e5 = l2[1], n4 = l2[3], O.call(this, function() {
                    return r2.editor.removeFormat(t5, e5);
                  }, n4, t5);
                } }, { key: "scrollIntoView", value: function() {
                  this.selection.scrollIntoView(this.scrollingContainer);
                } }, { key: "setContents", value: function(t5) {
                  var e5 = this, n4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.default.sources.API;
                  return O.call(this, function() {
                    t5 = new l.default(t5);
                    var n5 = e5.getLength(), r2 = e5.editor.deleteText(0, n5), o2 = e5.editor.applyDelta(t5), i2 = o2.ops[o2.ops.length - 1];
                    return null != i2 && "string" == typeof i2.insert && "\n" === i2.insert[i2.insert.length - 1] && (e5.editor.deleteText(e5.getLength() - 1, 1), o2.delete(1)), r2.compose(o2);
                  }, n4);
                } }, { key: "setSelection", value: function(e5, n4, r2) {
                  if (null == e5)
                    this.selection.setRange(null, n4 || t4.sources.API);
                  else {
                    var i2 = w(e5, n4, r2), l2 = o(i2, 4);
                    e5 = l2[0], n4 = l2[1], r2 = l2[3], this.selection.setRange(new f.Range(e5, n4), r2), r2 !== s.default.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer);
                  }
                } }, { key: "setText", value: function(t5) {
                  var e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.default.sources.API, n4 = new l.default().insert(t5);
                  return this.setContents(n4, e5);
                } }, { key: "update", value: function() {
                  var t5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.default.sources.USER, e5 = this.scroll.update(t5);
                  return this.selection.update(t5), e5;
                } }, { key: "updateContents", value: function(t5) {
                  var e5 = this, n4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.default.sources.API;
                  return O.call(this, function() {
                    return t5 = new l.default(t5), e5.editor.applyDelta(t5, n4);
                  }, n4, true);
                } }]), t4;
              }();
              function _(t4, e5) {
                if ((e5 = (0, p.default)(true, { container: t4, modules: { clipboard: true, keyboard: true, history: true } }, e5)).theme && e5.theme !== m.DEFAULTS.theme) {
                  if (e5.theme = m.import("themes/" + e5.theme), null == e5.theme)
                    throw new Error("Invalid theme " + e5.theme + ". Did you register it?");
                } else
                  e5.theme = y.default;
                var n4 = (0, p.default)(true, {}, e5.theme.DEFAULTS);
                [n4, e5].forEach(function(t5) {
                  t5.modules = t5.modules || {}, Object.keys(t5.modules).forEach(function(e6) {
                    true === t5.modules[e6] && (t5.modules[e6] = {});
                  });
                });
                var r2 = Object.keys(n4.modules).concat(Object.keys(e5.modules)).reduce(function(t5, e6) {
                  var n5 = m.import("modules/" + e6);
                  return null == n5 ? g.error("Cannot load " + e6 + " module. Are you sure you registered it?") : t5[e6] = n5.DEFAULTS || {}, t5;
                }, {});
                return null != e5.modules && e5.modules.toolbar && e5.modules.toolbar.constructor !== Object && (e5.modules.toolbar = { container: e5.modules.toolbar }), e5 = (0, p.default)(true, {}, m.DEFAULTS, { modules: r2 }, n4, e5), ["bounds", "container", "scrollingContainer"].forEach(function(t5) {
                  "string" == typeof e5[t5] && (e5[t5] = document.querySelector(e5[t5]));
                }), e5.modules = Object.keys(e5.modules).reduce(function(t5, n5) {
                  return e5.modules[n5] && (t5[n5] = e5.modules[n5]), t5;
                }, {}), e5;
              }
              function O(t4, e5, n4, r2) {
                if (this.options.strict && !this.isEnabled() && e5 === s.default.sources.USER)
                  return new l.default();
                var o2 = null == n4 ? null : this.getSelection(), i2 = this.editor.delta, a2 = t4();
                if (null != o2 && (true === n4 && (n4 = o2.index), null == r2 ? o2 = x(o2, a2, e5) : 0 !== r2 && (o2 = x(o2, n4, r2, e5)), this.setSelection(o2, s.default.sources.SILENT)), a2.length() > 0) {
                  var u2, c2, f2 = [s.default.events.TEXT_CHANGE, a2, i2, e5];
                  (u2 = this.emitter).emit.apply(u2, [s.default.events.EDITOR_CHANGE].concat(f2)), e5 !== s.default.sources.SILENT && (c2 = this.emitter).emit.apply(c2, f2);
                }
                return a2;
              }
              function w(t4, e5, n4, o2, i2) {
                var l2 = {};
                return "number" == typeof t4.index && "number" == typeof t4.length ? "number" != typeof e5 ? (i2 = o2, o2 = n4, n4 = e5, e5 = t4.length, t4 = t4.index) : (e5 = t4.length, t4 = t4.index) : "number" != typeof e5 && (i2 = o2, o2 = n4, n4 = e5, e5 = 0), "object" === (void 0 === n4 ? "undefined" : r(n4)) ? (l2 = n4, i2 = o2) : "string" == typeof n4 && (null != o2 ? l2[n4] = o2 : i2 = n4), [t4, e5, l2, i2 = i2 || s.default.sources.API];
              }
              function x(t4, e5, n4, r2) {
                if (null == t4)
                  return null;
                var i2 = void 0, a2 = void 0;
                if (e5 instanceof l.default) {
                  var u2 = [t4.index, t4.index + t4.length].map(function(t5) {
                    return e5.transformPosition(t5, r2 !== s.default.sources.USER);
                  }), c2 = o(u2, 2);
                  i2 = c2[0], a2 = c2[1];
                } else {
                  var h2 = [t4.index, t4.index + t4.length].map(function(t5) {
                    return t5 < e5 || t5 === e5 && r2 === s.default.sources.USER ? t5 : n4 >= 0 ? t5 + n4 : Math.max(e5, t5 + n4);
                  }), p2 = o(h2, 2);
                  i2 = p2[0], a2 = p2[1];
                }
                return new f.Range(i2, a2 - i2);
              }
              m.DEFAULTS = { bounds: null, formats: null, modules: {}, placeholder: "", readOnly: false, scrollingContainer: null, strict: true, theme: "default" }, m.events = s.default.events, m.sources = s.default.sources, m.version = "1.3.7", m.imports = { delta: l.default, parchment: c.default, "core/module": u.default, "core/theme": y.default }, e4.expandConfig = _, e4.overload = w, e4.default = m;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), o = function t4(e5, n4, r2) {
                null === e5 && (e5 = Function.prototype);
                var o2 = Object.getOwnPropertyDescriptor(e5, n4);
                if (void 0 === o2) {
                  var i2 = Object.getPrototypeOf(e5);
                  return null === i2 ? void 0 : t4(i2, n4, r2);
                }
                if ("value" in o2)
                  return o2.value;
                var l2 = o2.get;
                return void 0 !== l2 ? l2.call(r2) : void 0;
              }, i = a(n3(7)), l = a(n3(0));
              function a(t4) {
                return t4 && t4.__esModule ? t4 : { default: t4 };
              }
              var s = function(t4) {
                function e5() {
                  return function(t5, e6) {
                    if (!(t5 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5), function(t5, e6) {
                    if (!t5)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e6 || "object" != typeof e6 && "function" != typeof e6 ? t5 : e6;
                  }(this, (e5.__proto__ || Object.getPrototypeOf(e5)).apply(this, arguments));
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), r(e5, [{ key: "formatAt", value: function(t5, n4, r2, i2) {
                  if (e5.compare(this.statics.blotName, r2) < 0 && l.default.query(r2, l.default.Scope.BLOT)) {
                    var a2 = this.isolate(t5, n4);
                    i2 && a2.wrap(r2, i2);
                  } else
                    o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "formatAt", this).call(this, t5, n4, r2, i2);
                } }, { key: "optimize", value: function(t5) {
                  if (o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "optimize", this).call(this, t5), this.parent instanceof e5 && e5.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
                    var n4 = this.parent.isolate(this.offset(), this.length());
                    this.moveChildren(n4), n4.wrap(this);
                  }
                } }], [{ key: "compare", value: function(t5, n4) {
                  var r2 = e5.order.indexOf(t5), o2 = e5.order.indexOf(n4);
                  return r2 >= 0 || o2 >= 0 ? r2 - o2 : t5 === n4 ? 0 : t5 < n4 ? -1 : 1;
                } }]), e5;
              }(l.default.Inline);
              s.allowedChildren = [s, l.default.Embed, i.default], s.order = ["cursor", "inline", "underline", "strike", "italic", "bold", "script", "link", "code"], e4.default = s;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r, o = n3(0), i = function(t4) {
                function e5() {
                  return function(t5, e6) {
                    if (!(t5 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5), function(t5, e6) {
                    if (!t5)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e6 || "object" != typeof e6 && "function" != typeof e6 ? t5 : e6;
                  }(this, (e5.__proto__ || Object.getPrototypeOf(e5)).apply(this, arguments));
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), e5;
              }(((r = o) && r.__esModule ? r : { default: r }).default.Text);
              e4.default = i;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), o = function t4(e5, n4, r2) {
                null === e5 && (e5 = Function.prototype);
                var o2 = Object.getOwnPropertyDescriptor(e5, n4);
                if (void 0 === o2) {
                  var i2 = Object.getPrototypeOf(e5);
                  return null === i2 ? void 0 : t4(i2, n4, r2);
                }
                if ("value" in o2)
                  return o2.value;
                var l2 = o2.get;
                return void 0 !== l2 ? l2.call(r2) : void 0;
              }, i = l(n3(54));
              function l(t4) {
                return t4 && t4.__esModule ? t4 : { default: t4 };
              }
              var a = (0, l(n3(10)).default)("quill:events");
              ["selectionchange", "mousedown", "mouseup", "click"].forEach(function(t4) {
                document.addEventListener(t4, function() {
                  for (var t5 = arguments.length, e5 = Array(t5), n4 = 0; n4 < t5; n4++)
                    e5[n4] = arguments[n4];
                  [].slice.call(document.querySelectorAll(".ql-container")).forEach(function(t6) {
                    var n5;
                    t6.__quill && t6.__quill.emitter && (n5 = t6.__quill.emitter).handleDOM.apply(n5, e5);
                  });
                });
              });
              var s = function(t4) {
                function e5() {
                  !function(t6, e6) {
                    if (!(t6 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5);
                  var t5 = function(t6, e6) {
                    if (!t6)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e6 || "object" != typeof e6 && "function" != typeof e6 ? t6 : e6;
                  }(this, (e5.__proto__ || Object.getPrototypeOf(e5)).call(this));
                  return t5.listeners = {}, t5.on("error", a.error), t5;
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), r(e5, [{ key: "emit", value: function() {
                  a.log.apply(a, arguments), o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "emit", this).apply(this, arguments);
                } }, { key: "handleDOM", value: function(t5) {
                  for (var e6 = arguments.length, n4 = Array(e6 > 1 ? e6 - 1 : 0), r2 = 1; r2 < e6; r2++)
                    n4[r2 - 1] = arguments[r2];
                  (this.listeners[t5.type] || []).forEach(function(e7) {
                    var r3 = e7.node, o2 = e7.handler;
                    (t5.target === r3 || r3.contains(t5.target)) && o2.apply(void 0, [t5].concat(n4));
                  });
                } }, { key: "listenDOM", value: function(t5, e6, n4) {
                  this.listeners[t5] || (this.listeners[t5] = []), this.listeners[t5].push({ node: e6, handler: n4 });
                } }]), e5;
              }(i.default);
              s.events = { EDITOR_CHANGE: "editor-change", SCROLL_BEFORE_UPDATE: "scroll-before-update", SCROLL_OPTIMIZE: "scroll-optimize", SCROLL_UPDATE: "scroll-update", SELECTION_CHANGE: "selection-change", TEXT_CHANGE: "text-change" }, s.sources = { API: "api", SILENT: "silent", USER: "user" }, e4.default = s;
            }, function(t3, e4, n3) {
              "use strict";
              function r(t4, e5) {
                if (!(t4 instanceof e5))
                  throw new TypeError("Cannot call a class as a function");
              }
              Object.defineProperty(e4, "__esModule", { value: true });
              var o = function t4(e5) {
                var n4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                r(this, t4), this.quill = e5, this.options = n4;
              };
              o.DEFAULTS = {}, e4.default = o;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r = ["error", "warn", "log", "info"], o = "warn";
              function i(t4) {
                if (r.indexOf(t4) <= r.indexOf(o)) {
                  for (var e5, n4 = arguments.length, i2 = Array(n4 > 1 ? n4 - 1 : 0), l2 = 1; l2 < n4; l2++)
                    i2[l2 - 1] = arguments[l2];
                  (e5 = console)[t4].apply(e5, i2);
                }
              }
              function l(t4) {
                return r.reduce(function(e5, n4) {
                  return e5[n4] = i.bind(console, n4, t4), e5;
                }, {});
              }
              i.level = l.level = function(t4) {
                o = t4;
              }, e4.default = l;
            }, function(t3, e4, n3) {
              var r = Array.prototype.slice, o = n3(52), i = n3(53), l = t3.exports = function(t4, e5, n4) {
                return n4 || (n4 = {}), t4 === e5 || (t4 instanceof Date && e5 instanceof Date ? t4.getTime() === e5.getTime() : !t4 || !e5 || "object" != typeof t4 && "object" != typeof e5 ? n4.strict ? t4 === e5 : t4 == e5 : function(t5, e6, n5) {
                  var u, c;
                  if (a(t5) || a(e6))
                    return false;
                  if (t5.prototype !== e6.prototype)
                    return false;
                  if (i(t5))
                    return !!i(e6) && (t5 = r.call(t5), e6 = r.call(e6), l(t5, e6, n5));
                  if (s(t5)) {
                    if (!s(e6))
                      return false;
                    if (t5.length !== e6.length)
                      return false;
                    for (u = 0; u < t5.length; u++)
                      if (t5[u] !== e6[u])
                        return false;
                    return true;
                  }
                  try {
                    var f = o(t5), h = o(e6);
                  } catch (t6) {
                    return false;
                  }
                  if (f.length != h.length)
                    return false;
                  for (f.sort(), h.sort(), u = f.length - 1; u >= 0; u--)
                    if (f[u] != h[u])
                      return false;
                  for (u = f.length - 1; u >= 0; u--)
                    if (c = f[u], !l(t5[c], e6[c], n5))
                      return false;
                  return typeof t5 == typeof e6;
                }(t4, e5, n4));
              };
              function a(t4) {
                return null == t4;
              }
              function s(t4) {
                return !(!t4 || "object" != typeof t4 || "number" != typeof t4.length || "function" != typeof t4.copy || "function" != typeof t4.slice || t4.length > 0 && "number" != typeof t4[0]);
              }
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r = n3(1), o = function() {
                function t4(t5, e5, n4) {
                  void 0 === n4 && (n4 = {}), this.attrName = t5, this.keyName = e5;
                  var o2 = r.Scope.TYPE & r.Scope.ATTRIBUTE;
                  null != n4.scope ? this.scope = n4.scope & r.Scope.LEVEL | o2 : this.scope = r.Scope.ATTRIBUTE, null != n4.whitelist && (this.whitelist = n4.whitelist);
                }
                return t4.keys = function(t5) {
                  return [].map.call(t5.attributes, function(t6) {
                    return t6.name;
                  });
                }, t4.prototype.add = function(t5, e5) {
                  return !!this.canAdd(t5, e5) && (t5.setAttribute(this.keyName, e5), true);
                }, t4.prototype.canAdd = function(t5, e5) {
                  return null != r.query(t5, r.Scope.BLOT & (this.scope | r.Scope.TYPE)) && (null == this.whitelist || ("string" == typeof e5 ? this.whitelist.indexOf(e5.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(e5) > -1));
                }, t4.prototype.remove = function(t5) {
                  t5.removeAttribute(this.keyName);
                }, t4.prototype.value = function(t5) {
                  var e5 = t5.getAttribute(this.keyName);
                  return this.canAdd(t5, e5) && e5 ? e5 : "";
                }, t4;
              }();
              e4.default = o;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true }), e4.default = e4.Code = void 0;
              var r = function(t4, e5) {
                if (Array.isArray(t4))
                  return t4;
                if (Symbol.iterator in Object(t4))
                  return function(t5, e6) {
                    var n4 = [], r2 = true, o2 = false, i2 = void 0;
                    try {
                      for (var l2, a2 = t5[Symbol.iterator](); !(r2 = (l2 = a2.next()).done) && (n4.push(l2.value), !e6 || n4.length !== e6); r2 = true)
                        ;
                    } catch (t6) {
                      o2 = true, i2 = t6;
                    } finally {
                      try {
                        !r2 && a2.return && a2.return();
                      } finally {
                        if (o2)
                          throw i2;
                      }
                    }
                    return n4;
                  }(t4, e5);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              }, o = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), i = function t4(e5, n4, r2) {
                null === e5 && (e5 = Function.prototype);
                var o2 = Object.getOwnPropertyDescriptor(e5, n4);
                if (void 0 === o2) {
                  var i2 = Object.getPrototypeOf(e5);
                  return null === i2 ? void 0 : t4(i2, n4, r2);
                }
                if ("value" in o2)
                  return o2.value;
                var l2 = o2.get;
                return void 0 !== l2 ? l2.call(r2) : void 0;
              }, l = f(n3(2)), a = f(n3(0)), s = f(n3(4)), u = f(n3(6)), c = f(n3(7));
              function f(t4) {
                return t4 && t4.__esModule ? t4 : { default: t4 };
              }
              function h(t4, e5) {
                if (!(t4 instanceof e5))
                  throw new TypeError("Cannot call a class as a function");
              }
              function p(t4, e5) {
                if (!t4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e5 || "object" != typeof e5 && "function" != typeof e5 ? t4 : e5;
              }
              function d(t4, e5) {
                if ("function" != typeof e5 && null !== e5)
                  throw new TypeError("Super expression must either be null or a function, not " + typeof e5);
                t4.prototype = Object.create(e5 && e5.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e5 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e5) : t4.__proto__ = e5);
              }
              var y = function(t4) {
                function e5() {
                  return h(this, e5), p(this, (e5.__proto__ || Object.getPrototypeOf(e5)).apply(this, arguments));
                }
                return d(e5, t4), e5;
              }(u.default);
              y.blotName = "code", y.tagName = "CODE";
              var v = function(t4) {
                function e5() {
                  return h(this, e5), p(this, (e5.__proto__ || Object.getPrototypeOf(e5)).apply(this, arguments));
                }
                return d(e5, t4), o(e5, [{ key: "delta", value: function() {
                  var t5 = this, e6 = this.domNode.textContent;
                  return e6.endsWith("\n") && (e6 = e6.slice(0, -1)), e6.split("\n").reduce(function(e7, n4) {
                    return e7.insert(n4).insert("\n", t5.formats());
                  }, new l.default());
                } }, { key: "format", value: function(t5, n4) {
                  if (t5 !== this.statics.blotName || !n4) {
                    var o2 = this.descendant(c.default, this.length() - 1), l2 = r(o2, 1)[0];
                    null != l2 && l2.deleteAt(l2.length() - 1, 1), i(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "format", this).call(this, t5, n4);
                  }
                } }, { key: "formatAt", value: function(t5, n4, r2, o2) {
                  if (0 !== n4 && null != a.default.query(r2, a.default.Scope.BLOCK) && (r2 !== this.statics.blotName || o2 !== this.statics.formats(this.domNode))) {
                    var i2 = this.newlineIndex(t5);
                    if (!(i2 < 0 || i2 >= t5 + n4)) {
                      var l2 = this.newlineIndex(t5, true) + 1, s2 = i2 - l2 + 1, u2 = this.isolate(l2, s2), c2 = u2.next;
                      u2.format(r2, o2), c2 instanceof e5 && c2.formatAt(0, t5 - l2 + n4 - s2, r2, o2);
                    }
                  }
                } }, { key: "insertAt", value: function(t5, e6, n4) {
                  if (null == n4) {
                    var o2 = this.descendant(c.default, t5), i2 = r(o2, 2), l2 = i2[0], a2 = i2[1];
                    l2.insertAt(a2, e6);
                  }
                } }, { key: "length", value: function() {
                  var t5 = this.domNode.textContent.length;
                  return this.domNode.textContent.endsWith("\n") ? t5 : t5 + 1;
                } }, { key: "newlineIndex", value: function(t5) {
                  var e6 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  if (e6)
                    return this.domNode.textContent.slice(0, t5).lastIndexOf("\n");
                  var n4 = this.domNode.textContent.slice(t5).indexOf("\n");
                  return n4 > -1 ? t5 + n4 : -1;
                } }, { key: "optimize", value: function(t5) {
                  this.domNode.textContent.endsWith("\n") || this.appendChild(a.default.create("text", "\n")), i(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "optimize", this).call(this, t5);
                  var n4 = this.next;
                  null != n4 && n4.prev === this && n4.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === n4.statics.formats(n4.domNode) && (n4.optimize(t5), n4.moveChildren(this), n4.remove());
                } }, { key: "replace", value: function(t5) {
                  i(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "replace", this).call(this, t5), [].slice.call(this.domNode.querySelectorAll("*")).forEach(function(t6) {
                    var e6 = a.default.find(t6);
                    null == e6 ? t6.parentNode.removeChild(t6) : e6 instanceof a.default.Embed ? e6.remove() : e6.unwrap();
                  });
                } }], [{ key: "create", value: function(t5) {
                  var n4 = i(e5.__proto__ || Object.getPrototypeOf(e5), "create", this).call(this, t5);
                  return n4.setAttribute("spellcheck", false), n4;
                } }, { key: "formats", value: function() {
                  return true;
                } }]), e5;
              }(s.default);
              v.blotName = "code-block", v.tagName = "PRE", v.TAB = "  ", e4.Code = y, e4.default = v;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
                return typeof t4;
              } : function(t4) {
                return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
              }, o = function(t4, e5) {
                if (Array.isArray(t4))
                  return t4;
                if (Symbol.iterator in Object(t4))
                  return function(t5, e6) {
                    var n4 = [], r2 = true, o2 = false, i2 = void 0;
                    try {
                      for (var l2, a2 = t5[Symbol.iterator](); !(r2 = (l2 = a2.next()).done) && (n4.push(l2.value), !e6 || n4.length !== e6); r2 = true)
                        ;
                    } catch (t6) {
                      o2 = true, i2 = t6;
                    } finally {
                      try {
                        !r2 && a2.return && a2.return();
                      } finally {
                        if (o2)
                          throw i2;
                      }
                    }
                    return n4;
                  }(t4, e5);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              }, i = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), l = b(n3(2)), a = b(n3(20)), s = b(n3(0)), u = b(n3(13)), c = b(n3(24)), f = n3(4), h = b(f), p = b(n3(16)), d = b(n3(21)), y = b(n3(11)), v = b(n3(3));
              function b(t4) {
                return t4 && t4.__esModule ? t4 : { default: t4 };
              }
              var g = /^[ -~]*$/, m = function() {
                function t4(e5) {
                  !function(t5, e6) {
                    if (!(t5 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, t4), this.scroll = e5, this.delta = this.getDelta();
                }
                return i(t4, [{ key: "applyDelta", value: function(t5) {
                  var e5 = this, n4 = false;
                  this.scroll.update();
                  var i2 = this.scroll.length();
                  return this.scroll.batchStart(), (t5 = function(t6) {
                    return t6.reduce(function(t7, e6) {
                      if (1 === e6.insert) {
                        var n5 = (0, d.default)(e6.attributes);
                        return delete n5.image, t7.insert({ image: e6.attributes.image }, n5);
                      }
                      if (null == e6.attributes || true !== e6.attributes.list && true !== e6.attributes.bullet || ((e6 = (0, d.default)(e6)).attributes.list ? e6.attributes.list = "ordered" : (e6.attributes.list = "bullet", delete e6.attributes.bullet)), "string" == typeof e6.insert) {
                        var r2 = e6.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                        return t7.insert(r2, e6.attributes);
                      }
                      return t7.push(e6);
                    }, new l.default());
                  }(t5)).reduce(function(t6, l2) {
                    var u2 = l2.retain || l2.delete || l2.insert.length || 1, c2 = l2.attributes || {};
                    if (null != l2.insert) {
                      if ("string" == typeof l2.insert) {
                        var p2 = l2.insert;
                        p2.endsWith("\n") && n4 && (n4 = false, p2 = p2.slice(0, -1)), t6 >= i2 && !p2.endsWith("\n") && (n4 = true), e5.scroll.insertAt(t6, p2);
                        var d2 = e5.scroll.line(t6), y2 = o(d2, 2), b2 = y2[0], g2 = y2[1], m2 = (0, v.default)({}, (0, f.bubbleFormats)(b2));
                        if (b2 instanceof h.default) {
                          var _2 = b2.descendant(s.default.Leaf, g2), O = o(_2, 1)[0];
                          m2 = (0, v.default)(m2, (0, f.bubbleFormats)(O));
                        }
                        c2 = a.default.attributes.diff(m2, c2) || {};
                      } else if ("object" === r(l2.insert)) {
                        var w = Object.keys(l2.insert)[0];
                        if (null == w)
                          return t6;
                        e5.scroll.insertAt(t6, w, l2.insert[w]);
                      }
                      i2 += u2;
                    }
                    return Object.keys(c2).forEach(function(n5) {
                      e5.scroll.formatAt(t6, u2, n5, c2[n5]);
                    }), t6 + u2;
                  }, 0), t5.reduce(function(t6, n5) {
                    return "number" == typeof n5.delete ? (e5.scroll.deleteAt(t6, n5.delete), t6) : t6 + (n5.retain || n5.insert.length || 1);
                  }, 0), this.scroll.batchEnd(), this.update(t5);
                } }, { key: "deleteText", value: function(t5, e5) {
                  return this.scroll.deleteAt(t5, e5), this.update(new l.default().retain(t5).delete(e5));
                } }, { key: "formatLine", value: function(t5, e5) {
                  var n4 = this, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                  return this.scroll.update(), Object.keys(r2).forEach(function(o2) {
                    if (null == n4.scroll.whitelist || n4.scroll.whitelist[o2]) {
                      var i2 = n4.scroll.lines(t5, Math.max(e5, 1)), l2 = e5;
                      i2.forEach(function(e6) {
                        var i3 = e6.length();
                        if (e6 instanceof u.default) {
                          var a2 = t5 - e6.offset(n4.scroll), s2 = e6.newlineIndex(a2 + l2) - a2 + 1;
                          e6.formatAt(a2, s2, o2, r2[o2]);
                        } else
                          e6.format(o2, r2[o2]);
                        l2 -= i3;
                      });
                    }
                  }), this.scroll.optimize(), this.update(new l.default().retain(t5).retain(e5, (0, d.default)(r2)));
                } }, { key: "formatText", value: function(t5, e5) {
                  var n4 = this, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                  return Object.keys(r2).forEach(function(o2) {
                    n4.scroll.formatAt(t5, e5, o2, r2[o2]);
                  }), this.update(new l.default().retain(t5).retain(e5, (0, d.default)(r2)));
                } }, { key: "getContents", value: function(t5, e5) {
                  return this.delta.slice(t5, t5 + e5);
                } }, { key: "getDelta", value: function() {
                  return this.scroll.lines().reduce(function(t5, e5) {
                    return t5.concat(e5.delta());
                  }, new l.default());
                } }, { key: "getFormat", value: function(t5) {
                  var e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n4 = [], r2 = [];
                  0 === e5 ? this.scroll.path(t5).forEach(function(t6) {
                    var e6 = o(t6, 1)[0];
                    e6 instanceof h.default ? n4.push(e6) : e6 instanceof s.default.Leaf && r2.push(e6);
                  }) : (n4 = this.scroll.lines(t5, e5), r2 = this.scroll.descendants(s.default.Leaf, t5, e5));
                  var i2 = [n4, r2].map(function(t6) {
                    if (0 === t6.length)
                      return {};
                    for (var e6 = (0, f.bubbleFormats)(t6.shift()); Object.keys(e6).length > 0; ) {
                      var n5 = t6.shift();
                      if (null == n5)
                        return e6;
                      e6 = _((0, f.bubbleFormats)(n5), e6);
                    }
                    return e6;
                  });
                  return v.default.apply(v.default, i2);
                } }, { key: "getText", value: function(t5, e5) {
                  return this.getContents(t5, e5).filter(function(t6) {
                    return "string" == typeof t6.insert;
                  }).map(function(t6) {
                    return t6.insert;
                  }).join("");
                } }, { key: "insertEmbed", value: function(t5, e5, n4) {
                  return this.scroll.insertAt(t5, e5, n4), this.update(new l.default().retain(t5).insert(function(t6, e6, n5) {
                    return e6 in t6 ? Object.defineProperty(t6, e6, { value: n5, enumerable: true, configurable: true, writable: true }) : t6[e6] = n5, t6;
                  }({}, e5, n4)));
                } }, { key: "insertText", value: function(t5, e5) {
                  var n4 = this, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                  return e5 = e5.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), this.scroll.insertAt(t5, e5), Object.keys(r2).forEach(function(o2) {
                    n4.scroll.formatAt(t5, e5.length, o2, r2[o2]);
                  }), this.update(new l.default().retain(t5).insert(e5, (0, d.default)(r2)));
                } }, { key: "isBlank", value: function() {
                  if (0 == this.scroll.children.length)
                    return true;
                  if (this.scroll.children.length > 1)
                    return false;
                  var t5 = this.scroll.children.head;
                  return t5.statics.blotName === h.default.blotName && !(t5.children.length > 1) && t5.children.head instanceof p.default;
                } }, { key: "removeFormat", value: function(t5, e5) {
                  var n4 = this.getText(t5, e5), r2 = this.scroll.line(t5 + e5), i2 = o(r2, 2), a2 = i2[0], s2 = i2[1], c2 = 0, f2 = new l.default();
                  null != a2 && (c2 = a2 instanceof u.default ? a2.newlineIndex(s2) - s2 + 1 : a2.length() - s2, f2 = a2.delta().slice(s2, s2 + c2 - 1).insert("\n"));
                  var h2 = this.getContents(t5, e5 + c2).diff(new l.default().insert(n4).concat(f2)), p2 = new l.default().retain(t5).concat(h2);
                  return this.applyDelta(p2);
                } }, { key: "update", value: function(t5) {
                  var e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n4 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, r2 = this.delta;
                  if (1 === e5.length && "characterData" === e5[0].type && e5[0].target.data.match(g) && s.default.find(e5[0].target)) {
                    var o2 = s.default.find(e5[0].target), i2 = (0, f.bubbleFormats)(o2), a2 = o2.offset(this.scroll), u2 = e5[0].oldValue.replace(c.default.CONTENTS, ""), h2 = new l.default().insert(u2), p2 = new l.default().insert(o2.value()), d2 = new l.default().retain(a2).concat(h2.diff(p2, n4));
                    t5 = d2.reduce(function(t6, e6) {
                      return e6.insert ? t6.insert(e6.insert, i2) : t6.push(e6);
                    }, new l.default()), this.delta = r2.compose(t5);
                  } else
                    this.delta = this.getDelta(), t5 && (0, y.default)(r2.compose(t5), this.delta) || (t5 = r2.diff(this.delta, n4));
                  return t5;
                } }]), t4;
              }();
              function _(t4, e5) {
                return Object.keys(e5).reduce(function(n4, r2) {
                  return null == t4[r2] ? n4 : (e5[r2] === t4[r2] ? n4[r2] = e5[r2] : Array.isArray(e5[r2]) ? e5[r2].indexOf(t4[r2]) < 0 && (n4[r2] = e5[r2].concat([t4[r2]])) : n4[r2] = [e5[r2], t4[r2]], n4);
                }, {});
              }
              e4.default = m;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true }), e4.default = e4.Range = void 0;
              var r = function(t4, e5) {
                if (Array.isArray(t4))
                  return t4;
                if (Symbol.iterator in Object(t4))
                  return function(t5, e6) {
                    var n4 = [], r2 = true, o2 = false, i2 = void 0;
                    try {
                      for (var l2, a2 = t5[Symbol.iterator](); !(r2 = (l2 = a2.next()).done) && (n4.push(l2.value), !e6 || n4.length !== e6); r2 = true)
                        ;
                    } catch (t6) {
                      o2 = true, i2 = t6;
                    } finally {
                      try {
                        !r2 && a2.return && a2.return();
                      } finally {
                        if (o2)
                          throw i2;
                      }
                    }
                    return n4;
                  }(t4, e5);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              }, o = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), i = u(n3(0)), l = u(n3(21)), a = u(n3(11)), s = u(n3(8));
              function u(t4) {
                return t4 && t4.__esModule ? t4 : { default: t4 };
              }
              function c(t4) {
                if (Array.isArray(t4)) {
                  for (var e5 = 0, n4 = Array(t4.length); e5 < t4.length; e5++)
                    n4[e5] = t4[e5];
                  return n4;
                }
                return Array.from(t4);
              }
              function f(t4, e5) {
                if (!(t4 instanceof e5))
                  throw new TypeError("Cannot call a class as a function");
              }
              var h = (0, u(n3(10)).default)("quill:selection"), p = function t4(e5) {
                var n4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                f(this, t4), this.index = e5, this.length = n4;
              }, d = function() {
                function t4(e5, n4) {
                  var r2 = this;
                  f(this, t4), this.emitter = n4, this.scroll = e5, this.composing = false, this.mouseDown = false, this.root = this.scroll.domNode, this.cursor = i.default.create("cursor", this), this.lastRange = this.savedRange = new p(0, 0), this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, function() {
                    r2.mouseDown || setTimeout(r2.update.bind(r2, s.default.sources.USER), 1);
                  }), this.emitter.on(s.default.events.EDITOR_CHANGE, function(t5, e6) {
                    t5 === s.default.events.TEXT_CHANGE && e6.length() > 0 && r2.update(s.default.sources.SILENT);
                  }), this.emitter.on(s.default.events.SCROLL_BEFORE_UPDATE, function() {
                    if (r2.hasFocus()) {
                      var t5 = r2.getNativeRange();
                      null != t5 && t5.start.node !== r2.cursor.textNode && r2.emitter.once(s.default.events.SCROLL_UPDATE, function() {
                        try {
                          r2.setNativeRange(t5.start.node, t5.start.offset, t5.end.node, t5.end.offset);
                        } catch (t6) {
                        }
                      });
                    }
                  }), this.emitter.on(s.default.events.SCROLL_OPTIMIZE, function(t5, e6) {
                    if (e6.range) {
                      var n5 = e6.range, o2 = n5.startNode, i2 = n5.startOffset, l2 = n5.endNode, a2 = n5.endOffset;
                      r2.setNativeRange(o2, i2, l2, a2);
                    }
                  }), this.update(s.default.sources.SILENT);
                }
                return o(t4, [{ key: "handleComposition", value: function() {
                  var t5 = this;
                  this.root.addEventListener("compositionstart", function() {
                    t5.composing = true;
                  }), this.root.addEventListener("compositionend", function() {
                    if (t5.composing = false, t5.cursor.parent) {
                      var e5 = t5.cursor.restore();
                      if (!e5)
                        return;
                      setTimeout(function() {
                        t5.setNativeRange(e5.startNode, e5.startOffset, e5.endNode, e5.endOffset);
                      }, 1);
                    }
                  });
                } }, { key: "handleDragging", value: function() {
                  var t5 = this;
                  this.emitter.listenDOM("mousedown", document.body, function() {
                    t5.mouseDown = true;
                  }), this.emitter.listenDOM("mouseup", document.body, function() {
                    t5.mouseDown = false, t5.update(s.default.sources.USER);
                  });
                } }, { key: "focus", value: function() {
                  this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange));
                } }, { key: "format", value: function(t5, e5) {
                  if (null == this.scroll.whitelist || this.scroll.whitelist[t5]) {
                    this.scroll.update();
                    var n4 = this.getNativeRange();
                    if (null != n4 && n4.native.collapsed && !i.default.query(t5, i.default.Scope.BLOCK)) {
                      if (n4.start.node !== this.cursor.textNode) {
                        var r2 = i.default.find(n4.start.node, false);
                        if (null == r2)
                          return;
                        if (r2 instanceof i.default.Leaf) {
                          var o2 = r2.split(n4.start.offset);
                          r2.parent.insertBefore(this.cursor, o2);
                        } else
                          r2.insertBefore(this.cursor, n4.start.node);
                        this.cursor.attach();
                      }
                      this.cursor.format(t5, e5), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
                    }
                  }
                } }, { key: "getBounds", value: function(t5) {
                  var e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n4 = this.scroll.length();
                  t5 = Math.min(t5, n4 - 1), e5 = Math.min(t5 + e5, n4 - 1) - t5;
                  var o2 = void 0, i2 = this.scroll.leaf(t5), l2 = r(i2, 2), a2 = l2[0], s2 = l2[1];
                  if (null == a2)
                    return null;
                  var u2 = a2.position(s2, true), c2 = r(u2, 2);
                  o2 = c2[0], s2 = c2[1];
                  var f2 = document.createRange();
                  if (e5 > 0) {
                    f2.setStart(o2, s2);
                    var h2 = this.scroll.leaf(t5 + e5), p2 = r(h2, 2);
                    if (a2 = p2[0], s2 = p2[1], null == a2)
                      return null;
                    var d2 = a2.position(s2, true), y2 = r(d2, 2);
                    return o2 = y2[0], s2 = y2[1], f2.setEnd(o2, s2), f2.getBoundingClientRect();
                  }
                  var v = "left", b = void 0;
                  return o2 instanceof Text ? (s2 < o2.data.length ? (f2.setStart(o2, s2), f2.setEnd(o2, s2 + 1)) : (f2.setStart(o2, s2 - 1), f2.setEnd(o2, s2), v = "right"), b = f2.getBoundingClientRect()) : (b = a2.domNode.getBoundingClientRect(), s2 > 0 && (v = "right")), { bottom: b.top + b.height, height: b.height, left: b[v], right: b[v], top: b.top, width: 0 };
                } }, { key: "getNativeRange", value: function() {
                  var t5 = document.getSelection();
                  if (null == t5 || t5.rangeCount <= 0)
                    return null;
                  var e5 = t5.getRangeAt(0);
                  if (null == e5)
                    return null;
                  var n4 = this.normalizeNative(e5);
                  return h.info("getNativeRange", n4), n4;
                } }, { key: "getRange", value: function() {
                  var t5 = this.getNativeRange();
                  return null == t5 ? [null, null] : [this.normalizedToRange(t5), t5];
                } }, { key: "hasFocus", value: function() {
                  return document.activeElement === this.root;
                } }, { key: "normalizedToRange", value: function(t5) {
                  var e5 = this, n4 = [[t5.start.node, t5.start.offset]];
                  t5.native.collapsed || n4.push([t5.end.node, t5.end.offset]);
                  var o2 = n4.map(function(t6) {
                    var n5 = r(t6, 2), o3 = n5[0], l3 = n5[1], a3 = i.default.find(o3, true), s2 = a3.offset(e5.scroll);
                    return 0 === l3 ? s2 : a3 instanceof i.default.Container ? s2 + a3.length() : s2 + a3.index(o3, l3);
                  }), l2 = Math.min(Math.max.apply(Math, c(o2)), this.scroll.length() - 1), a2 = Math.min.apply(Math, [l2].concat(c(o2)));
                  return new p(a2, l2 - a2);
                } }, { key: "normalizeNative", value: function(t5) {
                  if (!y(this.root, t5.startContainer) || !t5.collapsed && !y(this.root, t5.endContainer))
                    return null;
                  var e5 = { start: { node: t5.startContainer, offset: t5.startOffset }, end: { node: t5.endContainer, offset: t5.endOffset }, native: t5 };
                  return [e5.start, e5.end].forEach(function(t6) {
                    for (var e6 = t6.node, n4 = t6.offset; !(e6 instanceof Text) && e6.childNodes.length > 0; )
                      if (e6.childNodes.length > n4)
                        e6 = e6.childNodes[n4], n4 = 0;
                      else {
                        if (e6.childNodes.length !== n4)
                          break;
                        n4 = (e6 = e6.lastChild) instanceof Text ? e6.data.length : e6.childNodes.length + 1;
                      }
                    t6.node = e6, t6.offset = n4;
                  }), e5;
                } }, { key: "rangeToNative", value: function(t5) {
                  var e5 = this, n4 = t5.collapsed ? [t5.index] : [t5.index, t5.index + t5.length], o2 = [], i2 = this.scroll.length();
                  return n4.forEach(function(t6, n5) {
                    t6 = Math.min(i2 - 1, t6);
                    var l2, a2 = e5.scroll.leaf(t6), s2 = r(a2, 2), u2 = s2[0], c2 = s2[1], f2 = u2.position(c2, 0 !== n5), h2 = r(f2, 2);
                    l2 = h2[0], c2 = h2[1], o2.push(l2, c2);
                  }), o2.length < 2 && (o2 = o2.concat(o2)), o2;
                } }, { key: "scrollIntoView", value: function(t5) {
                  var e5 = this.lastRange;
                  if (null != e5) {
                    var n4 = this.getBounds(e5.index, e5.length);
                    if (null != n4) {
                      var o2 = this.scroll.length() - 1, i2 = this.scroll.line(Math.min(e5.index, o2)), l2 = r(i2, 1)[0], a2 = l2;
                      if (e5.length > 0) {
                        var s2 = this.scroll.line(Math.min(e5.index + e5.length, o2));
                        a2 = r(s2, 1)[0];
                      }
                      if (null != l2 && null != a2) {
                        var u2 = t5.getBoundingClientRect();
                        n4.top < u2.top ? t5.scrollTop -= u2.top - n4.top : n4.bottom > u2.bottom && (t5.scrollTop += n4.bottom - u2.bottom);
                      }
                    }
                  }
                } }, { key: "setNativeRange", value: function(t5, e5) {
                  var n4 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t5, r2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e5, o2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                  if (h.info("setNativeRange", t5, e5, n4, r2), null == t5 || null != this.root.parentNode && null != t5.parentNode && null != n4.parentNode) {
                    var i2 = document.getSelection();
                    if (null != i2)
                      if (null != t5) {
                        this.hasFocus() || this.root.focus();
                        var l2 = (this.getNativeRange() || {}).native;
                        if (null == l2 || o2 || t5 !== l2.startContainer || e5 !== l2.startOffset || n4 !== l2.endContainer || r2 !== l2.endOffset) {
                          "BR" == t5.tagName && (e5 = [].indexOf.call(t5.parentNode.childNodes, t5), t5 = t5.parentNode), "BR" == n4.tagName && (r2 = [].indexOf.call(n4.parentNode.childNodes, n4), n4 = n4.parentNode);
                          var a2 = document.createRange();
                          a2.setStart(t5, e5), a2.setEnd(n4, r2), i2.removeAllRanges(), i2.addRange(a2);
                        }
                      } else
                        i2.removeAllRanges(), this.root.blur(), document.body.focus();
                  }
                } }, { key: "setRange", value: function(t5) {
                  var e5 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n4 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.default.sources.API;
                  if ("string" == typeof e5 && (n4 = e5, e5 = false), h.info("setRange", t5), null != t5) {
                    var r2 = this.rangeToNative(t5);
                    this.setNativeRange.apply(this, c(r2).concat([e5]));
                  } else
                    this.setNativeRange(null);
                  this.update(n4);
                } }, { key: "update", value: function() {
                  var t5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.default.sources.USER, e5 = this.lastRange, n4 = this.getRange(), o2 = r(n4, 2), i2 = o2[0], u2 = o2[1];
                  if (this.lastRange = i2, null != this.lastRange && (this.savedRange = this.lastRange), !(0, a.default)(e5, this.lastRange)) {
                    var c2;
                    !this.composing && null != u2 && u2.native.collapsed && u2.start.node !== this.cursor.textNode && this.cursor.restore();
                    var f2, h2 = [s.default.events.SELECTION_CHANGE, (0, l.default)(this.lastRange), (0, l.default)(e5), t5];
                    (c2 = this.emitter).emit.apply(c2, [s.default.events.EDITOR_CHANGE].concat(h2)), t5 !== s.default.sources.SILENT && (f2 = this.emitter).emit.apply(f2, h2);
                  }
                } }]), t4;
              }();
              function y(t4, e5) {
                try {
                  e5.parentNode;
                } catch (t5) {
                  return false;
                }
                return e5 instanceof Text && (e5 = e5.parentNode), t4.contains(e5);
              }
              e4.Range = p, e4.default = d;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r, o = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), i = n3(0), l = function(t4) {
                function e5() {
                  return function(t5, e6) {
                    if (!(t5 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5), function(t5, e6) {
                    if (!t5)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e6 || "object" != typeof e6 && "function" != typeof e6 ? t5 : e6;
                  }(this, (e5.__proto__ || Object.getPrototypeOf(e5)).apply(this, arguments));
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), o(e5, [{ key: "insertInto", value: function(t5, n4) {
                  0 === t5.children.length ? function t6(e6, n5, r2) {
                    null === e6 && (e6 = Function.prototype);
                    var o2 = Object.getOwnPropertyDescriptor(e6, n5);
                    if (void 0 === o2) {
                      var i2 = Object.getPrototypeOf(e6);
                      return null === i2 ? void 0 : t6(i2, n5, r2);
                    }
                    if ("value" in o2)
                      return o2.value;
                    var l2 = o2.get;
                    return void 0 !== l2 ? l2.call(r2) : void 0;
                  }(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "insertInto", this).call(this, t5, n4) : this.remove();
                } }, { key: "length", value: function() {
                  return 0;
                } }, { key: "value", value: function() {
                  return "";
                } }], [{ key: "value", value: function() {
                } }]), e5;
              }(((r = i) && r.__esModule ? r : { default: r }).default.Embed);
              l.blotName = "break", l.tagName = "BR", e4.default = l;
            }, function(t3, e4, n3) {
              "use strict";
              var r, o = this && this.__extends || (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e5) {
                t4.__proto__ = e5;
              } || function(t4, e5) {
                for (var n4 in e5)
                  e5.hasOwnProperty(n4) && (t4[n4] = e5[n4]);
              }, function(t4, e5) {
                function n4() {
                  this.constructor = t4;
                }
                r(t4, e5), t4.prototype = null === e5 ? Object.create(e5) : (n4.prototype = e5.prototype, new n4());
              });
              Object.defineProperty(e4, "__esModule", { value: true });
              var i = n3(44), l = n3(30), a = n3(1), s = function(t4) {
                function e5(e6) {
                  var n4 = t4.call(this, e6) || this;
                  return n4.build(), n4;
                }
                return o(e5, t4), e5.prototype.appendChild = function(t5) {
                  this.insertBefore(t5);
                }, e5.prototype.attach = function() {
                  t4.prototype.attach.call(this), this.children.forEach(function(t5) {
                    t5.attach();
                  });
                }, e5.prototype.build = function() {
                  var t5 = this;
                  this.children = new i.default(), [].slice.call(this.domNode.childNodes).reverse().forEach(function(e6) {
                    try {
                      var n4 = u(e6);
                      t5.insertBefore(n4, t5.children.head || void 0);
                    } catch (t6) {
                      if (t6 instanceof a.ParchmentError)
                        return;
                      throw t6;
                    }
                  });
                }, e5.prototype.deleteAt = function(t5, e6) {
                  if (0 === t5 && e6 === this.length())
                    return this.remove();
                  this.children.forEachAt(t5, e6, function(t6, e7, n4) {
                    t6.deleteAt(e7, n4);
                  });
                }, e5.prototype.descendant = function(t5, n4) {
                  var r2 = this.children.find(n4), o2 = r2[0], i2 = r2[1];
                  return null == t5.blotName && t5(o2) || null != t5.blotName && o2 instanceof t5 ? [o2, i2] : o2 instanceof e5 ? o2.descendant(t5, i2) : [null, -1];
                }, e5.prototype.descendants = function(t5, n4, r2) {
                  void 0 === n4 && (n4 = 0), void 0 === r2 && (r2 = Number.MAX_VALUE);
                  var o2 = [], i2 = r2;
                  return this.children.forEachAt(n4, r2, function(n5, r3, l2) {
                    (null == t5.blotName && t5(n5) || null != t5.blotName && n5 instanceof t5) && o2.push(n5), n5 instanceof e5 && (o2 = o2.concat(n5.descendants(t5, r3, i2))), i2 -= l2;
                  }), o2;
                }, e5.prototype.detach = function() {
                  this.children.forEach(function(t5) {
                    t5.detach();
                  }), t4.prototype.detach.call(this);
                }, e5.prototype.formatAt = function(t5, e6, n4, r2) {
                  this.children.forEachAt(t5, e6, function(t6, e7, o2) {
                    t6.formatAt(e7, o2, n4, r2);
                  });
                }, e5.prototype.insertAt = function(t5, e6, n4) {
                  var r2 = this.children.find(t5), o2 = r2[0], i2 = r2[1];
                  if (o2)
                    o2.insertAt(i2, e6, n4);
                  else {
                    var l2 = null == n4 ? a.create("text", e6) : a.create(e6, n4);
                    this.appendChild(l2);
                  }
                }, e5.prototype.insertBefore = function(t5, e6) {
                  if (null != this.statics.allowedChildren && !this.statics.allowedChildren.some(function(e7) {
                    return t5 instanceof e7;
                  }))
                    throw new a.ParchmentError("Cannot insert " + t5.statics.blotName + " into " + this.statics.blotName);
                  t5.insertInto(this, e6);
                }, e5.prototype.length = function() {
                  return this.children.reduce(function(t5, e6) {
                    return t5 + e6.length();
                  }, 0);
                }, e5.prototype.moveChildren = function(t5, e6) {
                  this.children.forEach(function(n4) {
                    t5.insertBefore(n4, e6);
                  });
                }, e5.prototype.optimize = function(e6) {
                  if (t4.prototype.optimize.call(this, e6), 0 === this.children.length)
                    if (null != this.statics.defaultChild) {
                      var n4 = a.create(this.statics.defaultChild);
                      this.appendChild(n4), n4.optimize(e6);
                    } else
                      this.remove();
                }, e5.prototype.path = function(t5, n4) {
                  void 0 === n4 && (n4 = false);
                  var r2 = this.children.find(t5, n4), o2 = r2[0], i2 = r2[1], l2 = [[this, t5]];
                  return o2 instanceof e5 ? l2.concat(o2.path(i2, n4)) : (null != o2 && l2.push([o2, i2]), l2);
                }, e5.prototype.removeChild = function(t5) {
                  this.children.remove(t5);
                }, e5.prototype.replace = function(n4) {
                  n4 instanceof e5 && n4.moveChildren(this), t4.prototype.replace.call(this, n4);
                }, e5.prototype.split = function(t5, e6) {
                  if (void 0 === e6 && (e6 = false), !e6) {
                    if (0 === t5)
                      return this;
                    if (t5 === this.length())
                      return this.next;
                  }
                  var n4 = this.clone();
                  return this.parent.insertBefore(n4, this.next), this.children.forEachAt(t5, this.length(), function(t6, r2, o2) {
                    t6 = t6.split(r2, e6), n4.appendChild(t6);
                  }), n4;
                }, e5.prototype.unwrap = function() {
                  this.moveChildren(this.parent, this.next), this.remove();
                }, e5.prototype.update = function(t5, e6) {
                  var n4 = this, r2 = [], o2 = [];
                  t5.forEach(function(t6) {
                    t6.target === n4.domNode && "childList" === t6.type && (r2.push.apply(r2, t6.addedNodes), o2.push.apply(o2, t6.removedNodes));
                  }), o2.forEach(function(t6) {
                    if (!(null != t6.parentNode && "IFRAME" !== t6.tagName && document.body.compareDocumentPosition(t6) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
                      var e7 = a.find(t6);
                      null != e7 && (null != e7.domNode.parentNode && e7.domNode.parentNode !== n4.domNode || e7.detach());
                    }
                  }), r2.filter(function(t6) {
                    return t6.parentNode == n4.domNode;
                  }).sort(function(t6, e7) {
                    return t6 === e7 ? 0 : t6.compareDocumentPosition(e7) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1;
                  }).forEach(function(t6) {
                    var e7 = null;
                    null != t6.nextSibling && (e7 = a.find(t6.nextSibling));
                    var r3 = u(t6);
                    r3.next == e7 && null != r3.next || (null != r3.parent && r3.parent.removeChild(n4), n4.insertBefore(r3, e7 || void 0));
                  });
                }, e5;
              }(l.default);
              function u(t4) {
                var e5 = a.find(t4);
                if (null == e5)
                  try {
                    e5 = a.create(t4);
                  } catch (n4) {
                    e5 = a.create(a.Scope.INLINE), [].slice.call(t4.childNodes).forEach(function(t5) {
                      e5.domNode.appendChild(t5);
                    }), t4.parentNode && t4.parentNode.replaceChild(e5.domNode, t4), e5.attach();
                  }
                return e5;
              }
              e4.default = s;
            }, function(t3, e4, n3) {
              "use strict";
              var r, o = this && this.__extends || (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e5) {
                t4.__proto__ = e5;
              } || function(t4, e5) {
                for (var n4 in e5)
                  e5.hasOwnProperty(n4) && (t4[n4] = e5[n4]);
              }, function(t4, e5) {
                function n4() {
                  this.constructor = t4;
                }
                r(t4, e5), t4.prototype = null === e5 ? Object.create(e5) : (n4.prototype = e5.prototype, new n4());
              });
              Object.defineProperty(e4, "__esModule", { value: true });
              var i = n3(12), l = n3(31), a = n3(17), s = n3(1), u = function(t4) {
                function e5(e6) {
                  var n4 = t4.call(this, e6) || this;
                  return n4.attributes = new l.default(n4.domNode), n4;
                }
                return o(e5, t4), e5.formats = function(t5) {
                  return "string" == typeof this.tagName || (Array.isArray(this.tagName) ? t5.tagName.toLowerCase() : void 0);
                }, e5.prototype.format = function(t5, e6) {
                  var n4 = s.query(t5);
                  n4 instanceof i.default ? this.attributes.attribute(n4, e6) : e6 && (null == n4 || t5 === this.statics.blotName && this.formats()[t5] === e6 || this.replaceWith(t5, e6));
                }, e5.prototype.formats = function() {
                  var t5 = this.attributes.values(), e6 = this.statics.formats(this.domNode);
                  return null != e6 && (t5[this.statics.blotName] = e6), t5;
                }, e5.prototype.replaceWith = function(e6, n4) {
                  var r2 = t4.prototype.replaceWith.call(this, e6, n4);
                  return this.attributes.copy(r2), r2;
                }, e5.prototype.update = function(e6, n4) {
                  var r2 = this;
                  t4.prototype.update.call(this, e6, n4), e6.some(function(t5) {
                    return t5.target === r2.domNode && "attributes" === t5.type;
                  }) && this.attributes.build();
                }, e5.prototype.wrap = function(n4, r2) {
                  var o2 = t4.prototype.wrap.call(this, n4, r2);
                  return o2 instanceof e5 && o2.statics.scope === this.statics.scope && this.attributes.move(o2), o2;
                }, e5;
              }(a.default);
              e4.default = u;
            }, function(t3, e4, n3) {
              "use strict";
              var r, o = this && this.__extends || (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e5) {
                t4.__proto__ = e5;
              } || function(t4, e5) {
                for (var n4 in e5)
                  e5.hasOwnProperty(n4) && (t4[n4] = e5[n4]);
              }, function(t4, e5) {
                function n4() {
                  this.constructor = t4;
                }
                r(t4, e5), t4.prototype = null === e5 ? Object.create(e5) : (n4.prototype = e5.prototype, new n4());
              });
              Object.defineProperty(e4, "__esModule", { value: true });
              var i = n3(30), l = n3(1), a = function(t4) {
                function e5() {
                  return null !== t4 && t4.apply(this, arguments) || this;
                }
                return o(e5, t4), e5.value = function(t5) {
                  return true;
                }, e5.prototype.index = function(t5, e6) {
                  return this.domNode === t5 || this.domNode.compareDocumentPosition(t5) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e6, 1) : -1;
                }, e5.prototype.position = function(t5, e6) {
                  var n4 = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
                  return t5 > 0 && (n4 += 1), [this.parent.domNode, n4];
                }, e5.prototype.value = function() {
                  var t5;
                  return (t5 = {})[this.statics.blotName] = this.statics.value(this.domNode) || true, t5;
                }, e5.scope = l.Scope.INLINE_BLOT, e5;
              }(i.default);
              e4.default = a;
            }, function(t3, e4, n3) {
              var r = n3(11), o = n3(3), i = { attributes: { compose: function(t4, e5, n4) {
                "object" != typeof t4 && (t4 = {}), "object" != typeof e5 && (e5 = {});
                var r2 = o(true, {}, e5);
                for (var i2 in n4 || (r2 = Object.keys(r2).reduce(function(t5, e6) {
                  return null != r2[e6] && (t5[e6] = r2[e6]), t5;
                }, {})), t4)
                  void 0 !== t4[i2] && void 0 === e5[i2] && (r2[i2] = t4[i2]);
                return Object.keys(r2).length > 0 ? r2 : void 0;
              }, diff: function(t4, e5) {
                "object" != typeof t4 && (t4 = {}), "object" != typeof e5 && (e5 = {});
                var n4 = Object.keys(t4).concat(Object.keys(e5)).reduce(function(n5, o2) {
                  return r(t4[o2], e5[o2]) || (n5[o2] = void 0 === e5[o2] ? null : e5[o2]), n5;
                }, {});
                return Object.keys(n4).length > 0 ? n4 : void 0;
              }, transform: function(t4, e5, n4) {
                if ("object" != typeof t4)
                  return e5;
                if ("object" == typeof e5) {
                  if (!n4)
                    return e5;
                  var r2 = Object.keys(e5).reduce(function(n5, r3) {
                    return void 0 === t4[r3] && (n5[r3] = e5[r3]), n5;
                  }, {});
                  return Object.keys(r2).length > 0 ? r2 : void 0;
                }
              } }, iterator: function(t4) {
                return new l(t4);
              }, length: function(t4) {
                return "number" == typeof t4.delete ? t4.delete : "number" == typeof t4.retain ? t4.retain : "string" == typeof t4.insert ? t4.insert.length : 1;
              } };
              function l(t4) {
                this.ops = t4, this.index = 0, this.offset = 0;
              }
              l.prototype.hasNext = function() {
                return this.peekLength() < 1 / 0;
              }, l.prototype.next = function(t4) {
                t4 || (t4 = 1 / 0);
                var e5 = this.ops[this.index];
                if (e5) {
                  var n4 = this.offset, r2 = i.length(e5);
                  if (t4 >= r2 - n4 ? (t4 = r2 - n4, this.index += 1, this.offset = 0) : this.offset += t4, "number" == typeof e5.delete)
                    return { delete: t4 };
                  var o2 = {};
                  return e5.attributes && (o2.attributes = e5.attributes), "number" == typeof e5.retain ? o2.retain = t4 : "string" == typeof e5.insert ? o2.insert = e5.insert.substr(n4, t4) : o2.insert = e5.insert, o2;
                }
                return { retain: 1 / 0 };
              }, l.prototype.peek = function() {
                return this.ops[this.index];
              }, l.prototype.peekLength = function() {
                return this.ops[this.index] ? i.length(this.ops[this.index]) - this.offset : 1 / 0;
              }, l.prototype.peekType = function() {
                return this.ops[this.index] ? "number" == typeof this.ops[this.index].delete ? "delete" : "number" == typeof this.ops[this.index].retain ? "retain" : "insert" : "retain";
              }, l.prototype.rest = function() {
                if (this.hasNext()) {
                  if (0 === this.offset)
                    return this.ops.slice(this.index);
                  var t4 = this.offset, e5 = this.index, n4 = this.next(), r2 = this.ops.slice(this.index);
                  return this.offset = t4, this.index = e5, [n4].concat(r2);
                }
                return [];
              }, t3.exports = i;
            }, function(t3, n3) {
              var r = function() {
                "use strict";
                function t4(t5, e4) {
                  return null != e4 && t5 instanceof e4;
                }
                var n4, r2, o;
                try {
                  n4 = Map;
                } catch (t5) {
                  n4 = function() {
                  };
                }
                try {
                  r2 = Set;
                } catch (t5) {
                  r2 = function() {
                  };
                }
                try {
                  o = Promise;
                } catch (t5) {
                  o = function() {
                  };
                }
                function i(l2, s, u, c, f) {
                  "object" == typeof s && (u = s.depth, c = s.prototype, f = s.includeNonEnumerable, s = s.circular);
                  var h = [], p = [], d = void 0 !== e3;
                  return void 0 === s && (s = true), void 0 === u && (u = 1 / 0), function l3(u2, y) {
                    if (null === u2)
                      return null;
                    if (0 === y)
                      return u2;
                    var v, b;
                    if ("object" != typeof u2)
                      return u2;
                    if (t4(u2, n4))
                      v = new n4();
                    else if (t4(u2, r2))
                      v = new r2();
                    else if (t4(u2, o))
                      v = new o(function(t5, e4) {
                        u2.then(function(e5) {
                          t5(l3(e5, y - 1));
                        }, function(t6) {
                          e4(l3(t6, y - 1));
                        });
                      });
                    else if (i.__isArray(u2))
                      v = [];
                    else if (i.__isRegExp(u2))
                      v = new RegExp(u2.source, a(u2)), u2.lastIndex && (v.lastIndex = u2.lastIndex);
                    else if (i.__isDate(u2))
                      v = new Date(u2.getTime());
                    else {
                      if (d && e3.isBuffer(u2))
                        return v = e3.allocUnsafe ? e3.allocUnsafe(u2.length) : new e3(u2.length), u2.copy(v), v;
                      t4(u2, Error) ? v = Object.create(u2) : void 0 === c ? (b = Object.getPrototypeOf(u2), v = Object.create(b)) : (v = Object.create(c), b = c);
                    }
                    if (s) {
                      var g = h.indexOf(u2);
                      if (-1 != g)
                        return p[g];
                      h.push(u2), p.push(v);
                    }
                    for (var m in t4(u2, n4) && u2.forEach(function(t5, e4) {
                      var n5 = l3(e4, y - 1), r3 = l3(t5, y - 1);
                      v.set(n5, r3);
                    }), t4(u2, r2) && u2.forEach(function(t5) {
                      var e4 = l3(t5, y - 1);
                      v.add(e4);
                    }), u2) {
                      var _;
                      b && (_ = Object.getOwnPropertyDescriptor(b, m)), _ && null == _.set || (v[m] = l3(u2[m], y - 1));
                    }
                    if (Object.getOwnPropertySymbols) {
                      var O = Object.getOwnPropertySymbols(u2);
                      for (m = 0; m < O.length; m++) {
                        var w = O[m];
                        (!(E = Object.getOwnPropertyDescriptor(u2, w)) || E.enumerable || f) && (v[w] = l3(u2[w], y - 1), E.enumerable || Object.defineProperty(v, w, { enumerable: false }));
                      }
                    }
                    if (f) {
                      var x = Object.getOwnPropertyNames(u2);
                      for (m = 0; m < x.length; m++) {
                        var E, k = x[m];
                        (E = Object.getOwnPropertyDescriptor(u2, k)) && E.enumerable || (v[k] = l3(u2[k], y - 1), Object.defineProperty(v, k, { enumerable: false }));
                      }
                    }
                    return v;
                  }(l2, u);
                }
                function l(t5) {
                  return Object.prototype.toString.call(t5);
                }
                function a(t5) {
                  var e4 = "";
                  return t5.global && (e4 += "g"), t5.ignoreCase && (e4 += "i"), t5.multiline && (e4 += "m"), e4;
                }
                return i.clonePrototype = function(t5) {
                  if (null === t5)
                    return null;
                  var e4 = function() {
                  };
                  return e4.prototype = t5, new e4();
                }, i.__objToStr = l, i.__isDate = function(t5) {
                  return "object" == typeof t5 && "[object Date]" === l(t5);
                }, i.__isArray = function(t5) {
                  return "object" == typeof t5 && "[object Array]" === l(t5);
                }, i.__isRegExp = function(t5) {
                  return "object" == typeof t5 && "[object RegExp]" === l(t5);
                }, i.__getRegExpFlags = a, i;
              }();
              "object" == typeof t3 && t3.exports && (t3.exports = r);
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r = function(t4, e5) {
                if (Array.isArray(t4))
                  return t4;
                if (Symbol.iterator in Object(t4))
                  return function(t5, e6) {
                    var n4 = [], r2 = true, o2 = false, i2 = void 0;
                    try {
                      for (var l2, a2 = t5[Symbol.iterator](); !(r2 = (l2 = a2.next()).done) && (n4.push(l2.value), !e6 || n4.length !== e6); r2 = true)
                        ;
                    } catch (t6) {
                      o2 = true, i2 = t6;
                    } finally {
                      try {
                        !r2 && a2.return && a2.return();
                      } finally {
                        if (o2)
                          throw i2;
                      }
                    }
                    return n4;
                  }(t4, e5);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              }, o = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), i = function t4(e5, n4, r2) {
                null === e5 && (e5 = Function.prototype);
                var o2 = Object.getOwnPropertyDescriptor(e5, n4);
                if (void 0 === o2) {
                  var i2 = Object.getPrototypeOf(e5);
                  return null === i2 ? void 0 : t4(i2, n4, r2);
                }
                if ("value" in o2)
                  return o2.value;
                var l2 = o2.get;
                return void 0 !== l2 ? l2.call(r2) : void 0;
              }, l = p(n3(0)), a = p(n3(8)), s = n3(4), u = p(s), c = p(n3(16)), f = p(n3(13)), h = p(n3(25));
              function p(t4) {
                return t4 && t4.__esModule ? t4 : { default: t4 };
              }
              function d(t4) {
                return t4 instanceof u.default || t4 instanceof s.BlockEmbed;
              }
              var y = function(t4) {
                function e5(t5, n4) {
                  !function(t6, e6) {
                    if (!(t6 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5);
                  var r2 = function(t6, e6) {
                    if (!t6)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e6 || "object" != typeof e6 && "function" != typeof e6 ? t6 : e6;
                  }(this, (e5.__proto__ || Object.getPrototypeOf(e5)).call(this, t5));
                  return r2.emitter = n4.emitter, Array.isArray(n4.whitelist) && (r2.whitelist = n4.whitelist.reduce(function(t6, e6) {
                    return t6[e6] = true, t6;
                  }, {})), r2.domNode.addEventListener("DOMNodeInserted", function() {
                  }), r2.optimize(), r2.enable(), r2;
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), o(e5, [{ key: "batchStart", value: function() {
                  this.batch = true;
                } }, { key: "batchEnd", value: function() {
                  this.batch = false, this.optimize();
                } }, { key: "deleteAt", value: function(t5, n4) {
                  var o2 = this.line(t5), l2 = r(o2, 2), a2 = l2[0], u2 = l2[1], h2 = this.line(t5 + n4), p2 = r(h2, 1)[0];
                  if (i(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "deleteAt", this).call(this, t5, n4), null != p2 && a2 !== p2 && u2 > 0) {
                    if (a2 instanceof s.BlockEmbed || p2 instanceof s.BlockEmbed)
                      return void this.optimize();
                    if (a2 instanceof f.default) {
                      var d2 = a2.newlineIndex(a2.length(), true);
                      if (d2 > -1 && (a2 = a2.split(d2 + 1)) === p2)
                        return void this.optimize();
                    } else if (p2 instanceof f.default) {
                      var y2 = p2.newlineIndex(0);
                      y2 > -1 && p2.split(y2 + 1);
                    }
                    var v = p2.children.head instanceof c.default ? null : p2.children.head;
                    a2.moveChildren(p2, v), a2.remove();
                  }
                  this.optimize();
                } }, { key: "enable", value: function() {
                  var t5 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                  this.domNode.setAttribute("contenteditable", t5);
                } }, { key: "formatAt", value: function(t5, n4, r2, o2) {
                  (null == this.whitelist || this.whitelist[r2]) && (i(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "formatAt", this).call(this, t5, n4, r2, o2), this.optimize());
                } }, { key: "insertAt", value: function(t5, n4, r2) {
                  if (null == r2 || null == this.whitelist || this.whitelist[n4]) {
                    if (t5 >= this.length())
                      if (null == r2 || null == l.default.query(n4, l.default.Scope.BLOCK)) {
                        var o2 = l.default.create(this.statics.defaultChild);
                        this.appendChild(o2), null == r2 && n4.endsWith("\n") && (n4 = n4.slice(0, -1)), o2.insertAt(0, n4, r2);
                      } else {
                        var a2 = l.default.create(n4, r2);
                        this.appendChild(a2);
                      }
                    else
                      i(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "insertAt", this).call(this, t5, n4, r2);
                    this.optimize();
                  }
                } }, { key: "insertBefore", value: function(t5, n4) {
                  if (t5.statics.scope === l.default.Scope.INLINE_BLOT) {
                    var r2 = l.default.create(this.statics.defaultChild);
                    r2.appendChild(t5), t5 = r2;
                  }
                  i(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "insertBefore", this).call(this, t5, n4);
                } }, { key: "leaf", value: function(t5) {
                  return this.path(t5).pop() || [null, -1];
                } }, { key: "line", value: function(t5) {
                  return t5 === this.length() ? this.line(t5 - 1) : this.descendant(d, t5);
                } }, { key: "lines", value: function() {
                  var t5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e6 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE, n4 = function t6(e7, n5, r2) {
                    var o2 = [], i2 = r2;
                    return e7.children.forEachAt(n5, r2, function(e8, n6, r3) {
                      d(e8) ? o2.push(e8) : e8 instanceof l.default.Container && (o2 = o2.concat(t6(e8, n6, i2))), i2 -= r3;
                    }), o2;
                  };
                  return n4(this, t5, e6);
                } }, { key: "optimize", value: function() {
                  var t5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  true !== this.batch && (i(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "optimize", this).call(this, t5, n4), t5.length > 0 && this.emitter.emit(a.default.events.SCROLL_OPTIMIZE, t5, n4));
                } }, { key: "path", value: function(t5) {
                  return i(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "path", this).call(this, t5).slice(1);
                } }, { key: "update", value: function(t5) {
                  if (true !== this.batch) {
                    var n4 = a.default.sources.USER;
                    "string" == typeof t5 && (n4 = t5), Array.isArray(t5) || (t5 = this.observer.takeRecords()), t5.length > 0 && this.emitter.emit(a.default.events.SCROLL_BEFORE_UPDATE, n4, t5), i(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "update", this).call(this, t5.concat([])), t5.length > 0 && this.emitter.emit(a.default.events.SCROLL_UPDATE, n4, t5);
                  }
                } }]), e5;
              }(l.default.Scroll);
              y.blotName = "scroll", y.className = "ql-editor", y.tagName = "DIV", y.defaultChild = "block", y.allowedChildren = [u.default, s.BlockEmbed, h.default], e4.default = y;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true }), e4.SHORTKEY = e4.default = void 0;
              var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
                return typeof t4;
              } : function(t4) {
                return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
              }, o = function(t4, e5) {
                if (Array.isArray(t4))
                  return t4;
                if (Symbol.iterator in Object(t4))
                  return function(t5, e6) {
                    var n4 = [], r2 = true, o2 = false, i2 = void 0;
                    try {
                      for (var l2, a2 = t5[Symbol.iterator](); !(r2 = (l2 = a2.next()).done) && (n4.push(l2.value), !e6 || n4.length !== e6); r2 = true)
                        ;
                    } catch (t6) {
                      o2 = true, i2 = t6;
                    } finally {
                      try {
                        !r2 && a2.return && a2.return();
                      } finally {
                        if (o2)
                          throw i2;
                      }
                    }
                    return n4;
                  }(t4, e5);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              }, i = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), l = y(n3(21)), a = y(n3(11)), s = y(n3(3)), u = y(n3(2)), c = y(n3(20)), f = y(n3(0)), h = y(n3(5)), p = y(n3(10)), d = y(n3(9));
              function y(t4) {
                return t4 && t4.__esModule ? t4 : { default: t4 };
              }
              function v(t4, e5, n4) {
                return e5 in t4 ? Object.defineProperty(t4, e5, { value: n4, enumerable: true, configurable: true, writable: true }) : t4[e5] = n4, t4;
              }
              var b = (0, p.default)("quill:keyboard"), g = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey", m = function(t4) {
                function e5(t5, n4) {
                  !function(t6, e6) {
                    if (!(t6 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5);
                  var r2 = function(t6, e6) {
                    if (!t6)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e6 || "object" != typeof e6 && "function" != typeof e6 ? t6 : e6;
                  }(this, (e5.__proto__ || Object.getPrototypeOf(e5)).call(this, t5, n4));
                  return r2.bindings = {}, Object.keys(r2.options.bindings).forEach(function(e6) {
                    ("list autofill" !== e6 || null == t5.scroll.whitelist || t5.scroll.whitelist.list) && r2.options.bindings[e6] && r2.addBinding(r2.options.bindings[e6]);
                  }), r2.addBinding({ key: e5.keys.ENTER, shiftKey: null }, E), r2.addBinding({ key: e5.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function() {
                  }), /Firefox/i.test(navigator.userAgent) ? (r2.addBinding({ key: e5.keys.BACKSPACE }, { collapsed: true }, O), r2.addBinding({ key: e5.keys.DELETE }, { collapsed: true }, w)) : (r2.addBinding({ key: e5.keys.BACKSPACE }, { collapsed: true, prefix: /^.?$/ }, O), r2.addBinding({ key: e5.keys.DELETE }, { collapsed: true, suffix: /^.?$/ }, w)), r2.addBinding({ key: e5.keys.BACKSPACE }, { collapsed: false }, x), r2.addBinding({ key: e5.keys.DELETE }, { collapsed: false }, x), r2.addBinding({ key: e5.keys.BACKSPACE, altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: true, offset: 0 }, O), r2.listen(), r2;
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), i(e5, null, [{ key: "match", value: function(t5, e6) {
                  return e6 = j(e6), !["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function(n4) {
                    return !!e6[n4] !== t5[n4] && null !== e6[n4];
                  }) && e6.key === (t5.which || t5.keyCode);
                } }]), i(e5, [{ key: "addBinding", value: function(t5) {
                  var e6 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n4 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r2 = j(t5);
                  if (null == r2 || null == r2.key)
                    return b.warn("Attempted to add invalid keyboard binding", r2);
                  "function" == typeof e6 && (e6 = { handler: e6 }), "function" == typeof n4 && (n4 = { handler: n4 }), r2 = (0, s.default)(r2, e6, n4), this.bindings[r2.key] = this.bindings[r2.key] || [], this.bindings[r2.key].push(r2);
                } }, { key: "listen", value: function() {
                  var t5 = this;
                  this.quill.root.addEventListener("keydown", function(n4) {
                    if (!n4.defaultPrevented) {
                      var i2 = n4.which || n4.keyCode, l2 = (t5.bindings[i2] || []).filter(function(t6) {
                        return e5.match(n4, t6);
                      });
                      if (0 !== l2.length) {
                        var s2 = t5.quill.getSelection();
                        if (null != s2 && t5.quill.hasFocus()) {
                          var u2 = t5.quill.getLine(s2.index), c2 = o(u2, 2), h2 = c2[0], p2 = c2[1], d2 = t5.quill.getLeaf(s2.index), y2 = o(d2, 2), v2 = y2[0], b2 = y2[1], g2 = 0 === s2.length ? [v2, b2] : t5.quill.getLeaf(s2.index + s2.length), m2 = o(g2, 2), _2 = m2[0], O2 = m2[1], w2 = v2 instanceof f.default.Text ? v2.value().slice(0, b2) : "", x2 = _2 instanceof f.default.Text ? _2.value().slice(O2) : "", E2 = { collapsed: 0 === s2.length, empty: 0 === s2.length && h2.length() <= 1, format: t5.quill.getFormat(s2), offset: p2, prefix: w2, suffix: x2 };
                          l2.some(function(e6) {
                            if (null != e6.collapsed && e6.collapsed !== E2.collapsed)
                              return false;
                            if (null != e6.empty && e6.empty !== E2.empty)
                              return false;
                            if (null != e6.offset && e6.offset !== E2.offset)
                              return false;
                            if (Array.isArray(e6.format)) {
                              if (e6.format.every(function(t6) {
                                return null == E2.format[t6];
                              }))
                                return false;
                            } else if ("object" === r(e6.format) && !Object.keys(e6.format).every(function(t6) {
                              return true === e6.format[t6] ? null != E2.format[t6] : false === e6.format[t6] ? null == E2.format[t6] : (0, a.default)(e6.format[t6], E2.format[t6]);
                            }))
                              return false;
                            return !(null != e6.prefix && !e6.prefix.test(E2.prefix) || null != e6.suffix && !e6.suffix.test(E2.suffix) || true === e6.handler.call(t5, s2, E2));
                          }) && n4.preventDefault();
                        }
                      }
                    }
                  });
                } }]), e5;
              }(d.default);
              function _(t4, e5) {
                var n4, r2 = t4 === m.keys.LEFT ? "prefix" : "suffix";
                return v(n4 = { key: t4, shiftKey: e5, altKey: null }, r2, /^$/), v(n4, "handler", function(n5) {
                  var r3 = n5.index;
                  t4 === m.keys.RIGHT && (r3 += n5.length + 1);
                  var i2 = this.quill.getLeaf(r3);
                  return !(o(i2, 1)[0] instanceof f.default.Embed && (t4 === m.keys.LEFT ? e5 ? this.quill.setSelection(n5.index - 1, n5.length + 1, h.default.sources.USER) : this.quill.setSelection(n5.index - 1, h.default.sources.USER) : e5 ? this.quill.setSelection(n5.index, n5.length + 1, h.default.sources.USER) : this.quill.setSelection(n5.index + n5.length + 1, h.default.sources.USER), 1));
                }), n4;
              }
              function O(t4, e5) {
                if (!(0 === t4.index || this.quill.getLength() <= 1)) {
                  var n4 = this.quill.getLine(t4.index), r2 = o(n4, 1)[0], i2 = {};
                  if (0 === e5.offset) {
                    var l2 = this.quill.getLine(t4.index - 1), a2 = o(l2, 1)[0];
                    if (null != a2 && a2.length() > 1) {
                      var s2 = r2.formats(), u2 = this.quill.getFormat(t4.index - 1, 1);
                      i2 = c.default.attributes.diff(s2, u2) || {};
                    }
                  }
                  var f2 = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e5.prefix) ? 2 : 1;
                  this.quill.deleteText(t4.index - f2, f2, h.default.sources.USER), Object.keys(i2).length > 0 && this.quill.formatLine(t4.index - f2, f2, i2, h.default.sources.USER), this.quill.focus();
                }
              }
              function w(t4, e5) {
                var n4 = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e5.suffix) ? 2 : 1;
                if (!(t4.index >= this.quill.getLength() - n4)) {
                  var r2 = {}, i2 = 0, l2 = this.quill.getLine(t4.index), a2 = o(l2, 1)[0];
                  if (e5.offset >= a2.length() - 1) {
                    var s2 = this.quill.getLine(t4.index + 1), u2 = o(s2, 1)[0];
                    if (u2) {
                      var f2 = a2.formats(), p2 = this.quill.getFormat(t4.index, 1);
                      r2 = c.default.attributes.diff(f2, p2) || {}, i2 = u2.length();
                    }
                  }
                  this.quill.deleteText(t4.index, n4, h.default.sources.USER), Object.keys(r2).length > 0 && this.quill.formatLine(t4.index + i2 - 1, n4, r2, h.default.sources.USER);
                }
              }
              function x(t4) {
                var e5 = this.quill.getLines(t4), n4 = {};
                if (e5.length > 1) {
                  var r2 = e5[0].formats(), o2 = e5[e5.length - 1].formats();
                  n4 = c.default.attributes.diff(o2, r2) || {};
                }
                this.quill.deleteText(t4, h.default.sources.USER), Object.keys(n4).length > 0 && this.quill.formatLine(t4.index, 1, n4, h.default.sources.USER), this.quill.setSelection(t4.index, h.default.sources.SILENT), this.quill.focus();
              }
              function E(t4, e5) {
                var n4 = this;
                t4.length > 0 && this.quill.scroll.deleteAt(t4.index, t4.length);
                var r2 = Object.keys(e5.format).reduce(function(t5, n5) {
                  return f.default.query(n5, f.default.Scope.BLOCK) && !Array.isArray(e5.format[n5]) && (t5[n5] = e5.format[n5]), t5;
                }, {});
                this.quill.insertText(t4.index, "\n", r2, h.default.sources.USER), this.quill.setSelection(t4.index + 1, h.default.sources.SILENT), this.quill.focus(), Object.keys(e5.format).forEach(function(t5) {
                  null == r2[t5] && (Array.isArray(e5.format[t5]) || "link" !== t5 && n4.quill.format(t5, e5.format[t5], h.default.sources.USER));
                });
              }
              function k(t4) {
                return { key: m.keys.TAB, shiftKey: !t4, format: { "code-block": true }, handler: function(e5) {
                  var n4 = f.default.query("code-block"), r2 = e5.index, i2 = e5.length, l2 = this.quill.scroll.descendant(n4, r2), a2 = o(l2, 2), s2 = a2[0], u2 = a2[1];
                  if (null != s2) {
                    var c2 = this.quill.getIndex(s2), p2 = s2.newlineIndex(u2, true) + 1, d2 = s2.newlineIndex(c2 + u2 + i2), y2 = s2.domNode.textContent.slice(p2, d2).split("\n");
                    u2 = 0, y2.forEach(function(e6, o2) {
                      t4 ? (s2.insertAt(p2 + u2, n4.TAB), u2 += n4.TAB.length, 0 === o2 ? r2 += n4.TAB.length : i2 += n4.TAB.length) : e6.startsWith(n4.TAB) && (s2.deleteAt(p2 + u2, n4.TAB.length), u2 -= n4.TAB.length, 0 === o2 ? r2 -= n4.TAB.length : i2 -= n4.TAB.length), u2 += e6.length + 1;
                    }), this.quill.update(h.default.sources.USER), this.quill.setSelection(r2, i2, h.default.sources.SILENT);
                  }
                } };
              }
              function A(t4) {
                return { key: t4[0].toUpperCase(), shortKey: true, handler: function(e5, n4) {
                  this.quill.format(t4, !n4.format[t4], h.default.sources.USER);
                } };
              }
              function j(t4) {
                if ("string" == typeof t4 || "number" == typeof t4)
                  return j({ key: t4 });
                if ("object" === (void 0 === t4 ? "undefined" : r(t4)) && (t4 = (0, l.default)(t4, false)), "string" == typeof t4.key)
                  if (null != m.keys[t4.key.toUpperCase()])
                    t4.key = m.keys[t4.key.toUpperCase()];
                  else {
                    if (1 !== t4.key.length)
                      return null;
                    t4.key = t4.key.toUpperCase().charCodeAt(0);
                  }
                return t4.shortKey && (t4[g] = t4.shortKey, delete t4.shortKey), t4;
              }
              m.keys = { BACKSPACE: 8, TAB: 9, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 }, m.DEFAULTS = { bindings: { bold: A("bold"), italic: A("italic"), underline: A("underline"), indent: { key: m.keys.TAB, format: ["blockquote", "indent", "list"], handler: function(t4, e5) {
                if (e5.collapsed && 0 !== e5.offset)
                  return true;
                this.quill.format("indent", "+1", h.default.sources.USER);
              } }, outdent: { key: m.keys.TAB, shiftKey: true, format: ["blockquote", "indent", "list"], handler: function(t4, e5) {
                if (e5.collapsed && 0 !== e5.offset)
                  return true;
                this.quill.format("indent", "-1", h.default.sources.USER);
              } }, "outdent backspace": { key: m.keys.BACKSPACE, collapsed: true, shiftKey: null, metaKey: null, ctrlKey: null, altKey: null, format: ["indent", "list"], offset: 0, handler: function(t4, e5) {
                null != e5.format.indent ? this.quill.format("indent", "-1", h.default.sources.USER) : null != e5.format.list && this.quill.format("list", false, h.default.sources.USER);
              } }, "indent code-block": k(true), "outdent code-block": k(false), "remove tab": { key: m.keys.TAB, shiftKey: true, collapsed: true, prefix: /\t$/, handler: function(t4) {
                this.quill.deleteText(t4.index - 1, 1, h.default.sources.USER);
              } }, tab: { key: m.keys.TAB, handler: function(t4) {
                this.quill.history.cutoff();
                var e5 = new u.default().retain(t4.index).delete(t4.length).insert("	");
                this.quill.updateContents(e5, h.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t4.index + 1, h.default.sources.SILENT);
              } }, "list empty enter": { key: m.keys.ENTER, collapsed: true, format: ["list"], empty: true, handler: function(t4, e5) {
                this.quill.format("list", false, h.default.sources.USER), e5.format.indent && this.quill.format("indent", false, h.default.sources.USER);
              } }, "checklist enter": { key: m.keys.ENTER, collapsed: true, format: { list: "checked" }, handler: function(t4) {
                var e5 = this.quill.getLine(t4.index), n4 = o(e5, 2), r2 = n4[0], i2 = n4[1], l2 = (0, s.default)({}, r2.formats(), { list: "checked" }), a2 = new u.default().retain(t4.index).insert("\n", l2).retain(r2.length() - i2 - 1).retain(1, { list: "unchecked" });
                this.quill.updateContents(a2, h.default.sources.USER), this.quill.setSelection(t4.index + 1, h.default.sources.SILENT), this.quill.scrollIntoView();
              } }, "header enter": { key: m.keys.ENTER, collapsed: true, format: ["header"], suffix: /^$/, handler: function(t4, e5) {
                var n4 = this.quill.getLine(t4.index), r2 = o(n4, 2), i2 = r2[0], l2 = r2[1], a2 = new u.default().retain(t4.index).insert("\n", e5.format).retain(i2.length() - l2 - 1).retain(1, { header: null });
                this.quill.updateContents(a2, h.default.sources.USER), this.quill.setSelection(t4.index + 1, h.default.sources.SILENT), this.quill.scrollIntoView();
              } }, "list autofill": { key: " ", collapsed: true, format: { list: false }, prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/, handler: function(t4, e5) {
                var n4 = e5.prefix.length, r2 = this.quill.getLine(t4.index), i2 = o(r2, 2), l2 = i2[0], a2 = i2[1];
                if (a2 > n4)
                  return true;
                var s2 = void 0;
                switch (e5.prefix.trim()) {
                  case "[]":
                  case "[ ]":
                    s2 = "unchecked";
                    break;
                  case "[x]":
                    s2 = "checked";
                    break;
                  case "-":
                  case "*":
                    s2 = "bullet";
                    break;
                  default:
                    s2 = "ordered";
                }
                this.quill.insertText(t4.index, " ", h.default.sources.USER), this.quill.history.cutoff();
                var c2 = new u.default().retain(t4.index - a2).delete(n4 + 1).retain(l2.length() - 2 - a2).retain(1, { list: s2 });
                this.quill.updateContents(c2, h.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t4.index - n4, h.default.sources.SILENT);
              } }, "code exit": { key: m.keys.ENTER, collapsed: true, format: ["code-block"], prefix: /\n\n$/, suffix: /^\s+$/, handler: function(t4) {
                var e5 = this.quill.getLine(t4.index), n4 = o(e5, 2), r2 = n4[0], i2 = n4[1], l2 = new u.default().retain(t4.index + r2.length() - i2 - 2).retain(1, { "code-block": null }).delete(1);
                this.quill.updateContents(l2, h.default.sources.USER);
              } }, "embed left": _(m.keys.LEFT, false), "embed left shift": _(m.keys.LEFT, true), "embed right": _(m.keys.RIGHT, false), "embed right shift": _(m.keys.RIGHT, true) } }, e4.default = m, e4.SHORTKEY = g;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r = function(t4, e5) {
                if (Array.isArray(t4))
                  return t4;
                if (Symbol.iterator in Object(t4))
                  return function(t5, e6) {
                    var n4 = [], r2 = true, o2 = false, i2 = void 0;
                    try {
                      for (var l2, a2 = t5[Symbol.iterator](); !(r2 = (l2 = a2.next()).done) && (n4.push(l2.value), !e6 || n4.length !== e6); r2 = true)
                        ;
                    } catch (t6) {
                      o2 = true, i2 = t6;
                    } finally {
                      try {
                        !r2 && a2.return && a2.return();
                      } finally {
                        if (o2)
                          throw i2;
                      }
                    }
                    return n4;
                  }(t4, e5);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              }, o = function t4(e5, n4, r2) {
                null === e5 && (e5 = Function.prototype);
                var o2 = Object.getOwnPropertyDescriptor(e5, n4);
                if (void 0 === o2) {
                  var i2 = Object.getPrototypeOf(e5);
                  return null === i2 ? void 0 : t4(i2, n4, r2);
                }
                if ("value" in o2)
                  return o2.value;
                var l2 = o2.get;
                return void 0 !== l2 ? l2.call(r2) : void 0;
              }, i = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), l = s(n3(0)), a = s(n3(7));
              function s(t4) {
                return t4 && t4.__esModule ? t4 : { default: t4 };
              }
              var u = function(t4) {
                function e5(t5, n4) {
                  !function(t6, e6) {
                    if (!(t6 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5);
                  var r2 = function(t6, e6) {
                    if (!t6)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e6 || "object" != typeof e6 && "function" != typeof e6 ? t6 : e6;
                  }(this, (e5.__proto__ || Object.getPrototypeOf(e5)).call(this, t5));
                  return r2.selection = n4, r2.textNode = document.createTextNode(e5.CONTENTS), r2.domNode.appendChild(r2.textNode), r2._length = 0, r2;
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), i(e5, null, [{ key: "value", value: function() {
                } }]), i(e5, [{ key: "detach", value: function() {
                  null != this.parent && this.parent.removeChild(this);
                } }, { key: "format", value: function(t5, n4) {
                  if (0 !== this._length)
                    return o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "format", this).call(this, t5, n4);
                  for (var r2 = this, i2 = 0; null != r2 && r2.statics.scope !== l.default.Scope.BLOCK_BLOT; )
                    i2 += r2.offset(r2.parent), r2 = r2.parent;
                  null != r2 && (this._length = e5.CONTENTS.length, r2.optimize(), r2.formatAt(i2, e5.CONTENTS.length, t5, n4), this._length = 0);
                } }, { key: "index", value: function(t5, n4) {
                  return t5 === this.textNode ? 0 : o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "index", this).call(this, t5, n4);
                } }, { key: "length", value: function() {
                  return this._length;
                } }, { key: "position", value: function() {
                  return [this.textNode, this.textNode.data.length];
                } }, { key: "remove", value: function() {
                  o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "remove", this).call(this), this.parent = null;
                } }, { key: "restore", value: function() {
                  if (!this.selection.composing && null != this.parent) {
                    var t5 = this.textNode, n4 = this.selection.getNativeRange(), o2 = void 0, i2 = void 0, s2 = void 0;
                    if (null != n4 && n4.start.node === t5 && n4.end.node === t5) {
                      var u2 = [t5, n4.start.offset, n4.end.offset];
                      o2 = u2[0], i2 = u2[1], s2 = u2[2];
                    }
                    for (; null != this.domNode.lastChild && this.domNode.lastChild !== this.textNode; )
                      this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                    if (this.textNode.data !== e5.CONTENTS) {
                      var c = this.textNode.data.split(e5.CONTENTS).join("");
                      this.next instanceof a.default ? (o2 = this.next.domNode, this.next.insertAt(0, c), this.textNode.data = e5.CONTENTS) : (this.textNode.data = c, this.parent.insertBefore(l.default.create(this.textNode), this), this.textNode = document.createTextNode(e5.CONTENTS), this.domNode.appendChild(this.textNode));
                    }
                    if (this.remove(), null != i2) {
                      var f = [i2, s2].map(function(t6) {
                        return Math.max(0, Math.min(o2.data.length, t6 - 1));
                      }), h = r(f, 2);
                      return i2 = h[0], s2 = h[1], { startNode: o2, startOffset: i2, endNode: o2, endOffset: s2 };
                    }
                  }
                } }, { key: "update", value: function(t5, e6) {
                  var n4 = this;
                  if (t5.some(function(t6) {
                    return "characterData" === t6.type && t6.target === n4.textNode;
                  })) {
                    var r2 = this.restore();
                    r2 && (e6.range = r2);
                  }
                } }, { key: "value", value: function() {
                  return "";
                } }]), e5;
              }(l.default.Embed);
              u.blotName = "cursor", u.className = "ql-cursor", u.tagName = "span", u.CONTENTS = "\uFEFF", e4.default = u;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r = l(n3(0)), o = n3(4), i = l(o);
              function l(t4) {
                return t4 && t4.__esModule ? t4 : { default: t4 };
              }
              var a = function(t4) {
                function e5() {
                  return function(t5, e6) {
                    if (!(t5 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5), function(t5, e6) {
                    if (!t5)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e6 || "object" != typeof e6 && "function" != typeof e6 ? t5 : e6;
                  }(this, (e5.__proto__ || Object.getPrototypeOf(e5)).apply(this, arguments));
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), e5;
              }(r.default.Container);
              a.allowedChildren = [i.default, o.BlockEmbed, a], e4.default = a;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true }), e4.ColorStyle = e4.ColorClass = e4.ColorAttributor = void 0;
              var r, o = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), i = n3(0), l = (r = i) && r.__esModule ? r : { default: r }, a = function(t4) {
                function e5() {
                  return function(t5, e6) {
                    if (!(t5 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5), function(t5, e6) {
                    if (!t5)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e6 || "object" != typeof e6 && "function" != typeof e6 ? t5 : e6;
                  }(this, (e5.__proto__ || Object.getPrototypeOf(e5)).apply(this, arguments));
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), o(e5, [{ key: "value", value: function(t5) {
                  var n4 = function t6(e6, n5, r2) {
                    null === e6 && (e6 = Function.prototype);
                    var o2 = Object.getOwnPropertyDescriptor(e6, n5);
                    if (void 0 === o2) {
                      var i2 = Object.getPrototypeOf(e6);
                      return null === i2 ? void 0 : t6(i2, n5, r2);
                    }
                    if ("value" in o2)
                      return o2.value;
                    var l2 = o2.get;
                    return void 0 !== l2 ? l2.call(r2) : void 0;
                  }(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "value", this).call(this, t5);
                  return n4.startsWith("rgb(") ? (n4 = n4.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), "#" + n4.split(",").map(function(t6) {
                    return ("00" + parseInt(t6).toString(16)).slice(-2);
                  }).join("")) : n4;
                } }]), e5;
              }(l.default.Attributor.Style), s = new l.default.Attributor.Class("color", "ql-color", { scope: l.default.Scope.INLINE }), u = new a("color", "color", { scope: l.default.Scope.INLINE });
              e4.ColorAttributor = a, e4.ColorClass = s, e4.ColorStyle = u;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true }), e4.sanitize = e4.default = void 0;
              var r, o = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), i = function t4(e5, n4, r2) {
                null === e5 && (e5 = Function.prototype);
                var o2 = Object.getOwnPropertyDescriptor(e5, n4);
                if (void 0 === o2) {
                  var i2 = Object.getPrototypeOf(e5);
                  return null === i2 ? void 0 : t4(i2, n4, r2);
                }
                if ("value" in o2)
                  return o2.value;
                var l2 = o2.get;
                return void 0 !== l2 ? l2.call(r2) : void 0;
              }, l = n3(6), a = function(t4) {
                function e5() {
                  return function(t5, e6) {
                    if (!(t5 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5), function(t5, e6) {
                    if (!t5)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e6 || "object" != typeof e6 && "function" != typeof e6 ? t5 : e6;
                  }(this, (e5.__proto__ || Object.getPrototypeOf(e5)).apply(this, arguments));
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), o(e5, [{ key: "format", value: function(t5, n4) {
                  if (t5 !== this.statics.blotName || !n4)
                    return i(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "format", this).call(this, t5, n4);
                  n4 = this.constructor.sanitize(n4), this.domNode.setAttribute("href", n4);
                } }], [{ key: "create", value: function(t5) {
                  var n4 = i(e5.__proto__ || Object.getPrototypeOf(e5), "create", this).call(this, t5);
                  return t5 = this.sanitize(t5), n4.setAttribute("href", t5), n4.setAttribute("rel", "noopener noreferrer"), n4.setAttribute("target", "_blank"), n4;
                } }, { key: "formats", value: function(t5) {
                  return t5.getAttribute("href");
                } }, { key: "sanitize", value: function(t5) {
                  return s(t5, this.PROTOCOL_WHITELIST) ? t5 : this.SANITIZED_URL;
                } }]), e5;
              }(((r = l) && r.__esModule ? r : { default: r }).default);
              function s(t4, e5) {
                var n4 = document.createElement("a");
                n4.href = t4;
                var r2 = n4.href.slice(0, n4.href.indexOf(":"));
                return e5.indexOf(r2) > -1;
              }
              a.blotName = "link", a.tagName = "A", a.SANITIZED_URL = "about:blank", a.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"], e4.default = a, e4.sanitize = s;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
                return typeof t4;
              } : function(t4) {
                return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
              }, o = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), i = a(n3(23)), l = a(n3(107));
              function a(t4) {
                return t4 && t4.__esModule ? t4 : { default: t4 };
              }
              var s = 0;
              function u(t4, e5) {
                t4.setAttribute(e5, !("true" === t4.getAttribute(e5)));
              }
              var c = function() {
                function t4(e5) {
                  var n4 = this;
                  !function(t5, e6) {
                    if (!(t5 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, t4), this.select = e5, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", function() {
                    n4.togglePicker();
                  }), this.label.addEventListener("keydown", function(t5) {
                    switch (t5.keyCode) {
                      case i.default.keys.ENTER:
                        n4.togglePicker();
                        break;
                      case i.default.keys.ESCAPE:
                        n4.escape(), t5.preventDefault();
                    }
                  }), this.select.addEventListener("change", this.update.bind(this));
                }
                return o(t4, [{ key: "togglePicker", value: function() {
                  this.container.classList.toggle("ql-expanded"), u(this.label, "aria-expanded"), u(this.options, "aria-hidden");
                } }, { key: "buildItem", value: function(t5) {
                  var e5 = this, n4 = document.createElement("span");
                  return n4.tabIndex = "0", n4.setAttribute("role", "button"), n4.classList.add("ql-picker-item"), t5.hasAttribute("value") && n4.setAttribute("data-value", t5.getAttribute("value")), t5.textContent && n4.setAttribute("data-label", t5.textContent), n4.addEventListener("click", function() {
                    e5.selectItem(n4, true);
                  }), n4.addEventListener("keydown", function(t6) {
                    switch (t6.keyCode) {
                      case i.default.keys.ENTER:
                        e5.selectItem(n4, true), t6.preventDefault();
                        break;
                      case i.default.keys.ESCAPE:
                        e5.escape(), t6.preventDefault();
                    }
                  }), n4;
                } }, { key: "buildLabel", value: function() {
                  var t5 = document.createElement("span");
                  return t5.classList.add("ql-picker-label"), t5.innerHTML = l.default, t5.tabIndex = "0", t5.setAttribute("role", "button"), t5.setAttribute("aria-expanded", "false"), this.container.appendChild(t5), t5;
                } }, { key: "buildOptions", value: function() {
                  var t5 = this, e5 = document.createElement("span");
                  e5.classList.add("ql-picker-options"), e5.setAttribute("aria-hidden", "true"), e5.tabIndex = "-1", e5.id = "ql-picker-options-" + s, s += 1, this.label.setAttribute("aria-controls", e5.id), this.options = e5, [].slice.call(this.select.options).forEach(function(n4) {
                    var r2 = t5.buildItem(n4);
                    e5.appendChild(r2), true === n4.selected && t5.selectItem(r2);
                  }), this.container.appendChild(e5);
                } }, { key: "buildPicker", value: function() {
                  var t5 = this;
                  [].slice.call(this.select.attributes).forEach(function(e5) {
                    t5.container.setAttribute(e5.name, e5.value);
                  }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions();
                } }, { key: "escape", value: function() {
                  var t5 = this;
                  this.close(), setTimeout(function() {
                    return t5.label.focus();
                  }, 1);
                } }, { key: "close", value: function() {
                  this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
                } }, { key: "selectItem", value: function(t5) {
                  var e5 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n4 = this.container.querySelector(".ql-selected");
                  if (t5 !== n4 && (null != n4 && n4.classList.remove("ql-selected"), null != t5 && (t5.classList.add("ql-selected"), this.select.selectedIndex = [].indexOf.call(t5.parentNode.children, t5), t5.hasAttribute("data-value") ? this.label.setAttribute("data-value", t5.getAttribute("data-value")) : this.label.removeAttribute("data-value"), t5.hasAttribute("data-label") ? this.label.setAttribute("data-label", t5.getAttribute("data-label")) : this.label.removeAttribute("data-label"), e5))) {
                    if ("function" == typeof Event)
                      this.select.dispatchEvent(new Event("change"));
                    else if ("object" === ("undefined" == typeof Event ? "undefined" : r(Event))) {
                      var o2 = document.createEvent("Event");
                      o2.initEvent("change", true, true), this.select.dispatchEvent(o2);
                    }
                    this.close();
                  }
                } }, { key: "update", value: function() {
                  var t5 = void 0;
                  if (this.select.selectedIndex > -1) {
                    var e5 = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
                    t5 = this.select.options[this.select.selectedIndex], this.selectItem(e5);
                  } else
                    this.selectItem(null);
                  var n4 = null != t5 && t5 !== this.select.querySelector("option[selected]");
                  this.label.classList.toggle("ql-active", n4);
                } }]), t4;
              }();
              e4.default = c;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r = b(n3(0)), o = b(n3(5)), i = n3(4), l = b(i), a = b(n3(16)), s = b(n3(25)), u = b(n3(24)), c = b(n3(35)), f = b(n3(6)), h = b(n3(22)), p = b(n3(7)), d = b(n3(55)), y = b(n3(42)), v = b(n3(23));
              function b(t4) {
                return t4 && t4.__esModule ? t4 : { default: t4 };
              }
              o.default.register({ "blots/block": l.default, "blots/block/embed": i.BlockEmbed, "blots/break": a.default, "blots/container": s.default, "blots/cursor": u.default, "blots/embed": c.default, "blots/inline": f.default, "blots/scroll": h.default, "blots/text": p.default, "modules/clipboard": d.default, "modules/history": y.default, "modules/keyboard": v.default }), r.default.register(l.default, a.default, u.default, f.default, h.default, p.default), e4.default = o.default;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r = n3(1), o = function() {
                function t4(t5) {
                  this.domNode = t5, this.domNode[r.DATA_KEY] = { blot: this };
                }
                return Object.defineProperty(t4.prototype, "statics", { get: function() {
                  return this.constructor;
                }, enumerable: true, configurable: true }), t4.create = function(t5) {
                  if (null == this.tagName)
                    throw new r.ParchmentError("Blot definition missing tagName");
                  var e5;
                  return Array.isArray(this.tagName) ? ("string" == typeof t5 && (t5 = t5.toUpperCase(), parseInt(t5).toString() === t5 && (t5 = parseInt(t5))), e5 = "number" == typeof t5 ? document.createElement(this.tagName[t5 - 1]) : this.tagName.indexOf(t5) > -1 ? document.createElement(t5) : document.createElement(this.tagName[0])) : e5 = document.createElement(this.tagName), this.className && e5.classList.add(this.className), e5;
                }, t4.prototype.attach = function() {
                  null != this.parent && (this.scroll = this.parent.scroll);
                }, t4.prototype.clone = function() {
                  var t5 = this.domNode.cloneNode(false);
                  return r.create(t5);
                }, t4.prototype.detach = function() {
                  null != this.parent && this.parent.removeChild(this), delete this.domNode[r.DATA_KEY];
                }, t4.prototype.deleteAt = function(t5, e5) {
                  this.isolate(t5, e5).remove();
                }, t4.prototype.formatAt = function(t5, e5, n4, o2) {
                  var i = this.isolate(t5, e5);
                  if (null != r.query(n4, r.Scope.BLOT) && o2)
                    i.wrap(n4, o2);
                  else if (null != r.query(n4, r.Scope.ATTRIBUTE)) {
                    var l = r.create(this.statics.scope);
                    i.wrap(l), l.format(n4, o2);
                  }
                }, t4.prototype.insertAt = function(t5, e5, n4) {
                  var o2 = null == n4 ? r.create("text", e5) : r.create(e5, n4), i = this.split(t5);
                  this.parent.insertBefore(o2, i);
                }, t4.prototype.insertInto = function(t5, e5) {
                  void 0 === e5 && (e5 = null), null != this.parent && this.parent.children.remove(this);
                  var n4 = null;
                  t5.children.insertBefore(this, e5), null != e5 && (n4 = e5.domNode), this.domNode.parentNode == t5.domNode && this.domNode.nextSibling == n4 || t5.domNode.insertBefore(this.domNode, n4), this.parent = t5, this.attach();
                }, t4.prototype.isolate = function(t5, e5) {
                  var n4 = this.split(t5);
                  return n4.split(e5), n4;
                }, t4.prototype.length = function() {
                  return 1;
                }, t4.prototype.offset = function(t5) {
                  return void 0 === t5 && (t5 = this.parent), null == this.parent || this == t5 ? 0 : this.parent.children.offset(this) + this.parent.offset(t5);
                }, t4.prototype.optimize = function(t5) {
                  null != this.domNode[r.DATA_KEY] && delete this.domNode[r.DATA_KEY].mutations;
                }, t4.prototype.remove = function() {
                  null != this.domNode.parentNode && this.domNode.parentNode.removeChild(this.domNode), this.detach();
                }, t4.prototype.replace = function(t5) {
                  null != t5.parent && (t5.parent.insertBefore(this, t5.next), t5.remove());
                }, t4.prototype.replaceWith = function(t5, e5) {
                  var n4 = "string" == typeof t5 ? r.create(t5, e5) : t5;
                  return n4.replace(this), n4;
                }, t4.prototype.split = function(t5, e5) {
                  return 0 === t5 ? this : this.next;
                }, t4.prototype.update = function(t5, e5) {
                }, t4.prototype.wrap = function(t5, e5) {
                  var n4 = "string" == typeof t5 ? r.create(t5, e5) : t5;
                  return null != this.parent && this.parent.insertBefore(n4, this.next), n4.appendChild(this), n4;
                }, t4.blotName = "abstract", t4;
              }();
              e4.default = o;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r = n3(12), o = n3(32), i = n3(33), l = n3(1), a = function() {
                function t4(t5) {
                  this.attributes = {}, this.domNode = t5, this.build();
                }
                return t4.prototype.attribute = function(t5, e5) {
                  e5 ? t5.add(this.domNode, e5) && (null != t5.value(this.domNode) ? this.attributes[t5.attrName] = t5 : delete this.attributes[t5.attrName]) : (t5.remove(this.domNode), delete this.attributes[t5.attrName]);
                }, t4.prototype.build = function() {
                  var t5 = this;
                  this.attributes = {};
                  var e5 = r.default.keys(this.domNode), n4 = o.default.keys(this.domNode), a2 = i.default.keys(this.domNode);
                  e5.concat(n4).concat(a2).forEach(function(e6) {
                    var n5 = l.query(e6, l.Scope.ATTRIBUTE);
                    n5 instanceof r.default && (t5.attributes[n5.attrName] = n5);
                  });
                }, t4.prototype.copy = function(t5) {
                  var e5 = this;
                  Object.keys(this.attributes).forEach(function(n4) {
                    var r2 = e5.attributes[n4].value(e5.domNode);
                    t5.format(n4, r2);
                  });
                }, t4.prototype.move = function(t5) {
                  var e5 = this;
                  this.copy(t5), Object.keys(this.attributes).forEach(function(t6) {
                    e5.attributes[t6].remove(e5.domNode);
                  }), this.attributes = {};
                }, t4.prototype.values = function() {
                  var t5 = this;
                  return Object.keys(this.attributes).reduce(function(e5, n4) {
                    return e5[n4] = t5.attributes[n4].value(t5.domNode), e5;
                  }, {});
                }, t4;
              }();
              e4.default = a;
            }, function(t3, e4, n3) {
              "use strict";
              var r, o = this && this.__extends || (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e5) {
                t4.__proto__ = e5;
              } || function(t4, e5) {
                for (var n4 in e5)
                  e5.hasOwnProperty(n4) && (t4[n4] = e5[n4]);
              }, function(t4, e5) {
                function n4() {
                  this.constructor = t4;
                }
                r(t4, e5), t4.prototype = null === e5 ? Object.create(e5) : (n4.prototype = e5.prototype, new n4());
              });
              function i(t4, e5) {
                return (t4.getAttribute("class") || "").split(/\s+/).filter(function(t5) {
                  return 0 === t5.indexOf(e5 + "-");
                });
              }
              Object.defineProperty(e4, "__esModule", { value: true });
              var l = function(t4) {
                function e5() {
                  return null !== t4 && t4.apply(this, arguments) || this;
                }
                return o(e5, t4), e5.keys = function(t5) {
                  return (t5.getAttribute("class") || "").split(/\s+/).map(function(t6) {
                    return t6.split("-").slice(0, -1).join("-");
                  });
                }, e5.prototype.add = function(t5, e6) {
                  return !!this.canAdd(t5, e6) && (this.remove(t5), t5.classList.add(this.keyName + "-" + e6), true);
                }, e5.prototype.remove = function(t5) {
                  i(t5, this.keyName).forEach(function(e6) {
                    t5.classList.remove(e6);
                  }), 0 === t5.classList.length && t5.removeAttribute("class");
                }, e5.prototype.value = function(t5) {
                  var e6 = (i(t5, this.keyName)[0] || "").slice(this.keyName.length + 1);
                  return this.canAdd(t5, e6) ? e6 : "";
                }, e5;
              }(n3(12).default);
              e4.default = l;
            }, function(t3, e4, n3) {
              "use strict";
              var r, o = this && this.__extends || (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e5) {
                t4.__proto__ = e5;
              } || function(t4, e5) {
                for (var n4 in e5)
                  e5.hasOwnProperty(n4) && (t4[n4] = e5[n4]);
              }, function(t4, e5) {
                function n4() {
                  this.constructor = t4;
                }
                r(t4, e5), t4.prototype = null === e5 ? Object.create(e5) : (n4.prototype = e5.prototype, new n4());
              });
              function i(t4) {
                var e5 = t4.split("-"), n4 = e5.slice(1).map(function(t5) {
                  return t5[0].toUpperCase() + t5.slice(1);
                }).join("");
                return e5[0] + n4;
              }
              Object.defineProperty(e4, "__esModule", { value: true });
              var l = function(t4) {
                function e5() {
                  return null !== t4 && t4.apply(this, arguments) || this;
                }
                return o(e5, t4), e5.keys = function(t5) {
                  return (t5.getAttribute("style") || "").split(";").map(function(t6) {
                    return t6.split(":")[0].trim();
                  });
                }, e5.prototype.add = function(t5, e6) {
                  return !!this.canAdd(t5, e6) && (t5.style[i(this.keyName)] = e6, true);
                }, e5.prototype.remove = function(t5) {
                  t5.style[i(this.keyName)] = "", t5.getAttribute("style") || t5.removeAttribute("style");
                }, e5.prototype.value = function(t5) {
                  var e6 = t5.style[i(this.keyName)];
                  return this.canAdd(t5, e6) ? e6 : "";
                }, e5;
              }(n3(12).default);
              e4.default = l;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), o = function() {
                function t4(e5, n4) {
                  !function(t5, e6) {
                    if (!(t5 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, t4), this.quill = e5, this.options = n4, this.modules = {};
                }
                return r(t4, [{ key: "init", value: function() {
                  var t5 = this;
                  Object.keys(this.options.modules).forEach(function(e5) {
                    null == t5.modules[e5] && t5.addModule(e5);
                  });
                } }, { key: "addModule", value: function(t5) {
                  var e5 = this.quill.constructor.import("modules/" + t5);
                  return this.modules[t5] = new e5(this.quill, this.options.modules[t5] || {}), this.modules[t5];
                } }]), t4;
              }();
              o.DEFAULTS = { modules: {} }, o.themes = { default: o }, e4.default = o;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), o = l(n3(0)), i = l(n3(7));
              function l(t4) {
                return t4 && t4.__esModule ? t4 : { default: t4 };
              }
              var a = "\uFEFF", s = function(t4) {
                function e5(t5) {
                  !function(t6, e6) {
                    if (!(t6 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5);
                  var n4 = function(t6, e6) {
                    if (!t6)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e6 || "object" != typeof e6 && "function" != typeof e6 ? t6 : e6;
                  }(this, (e5.__proto__ || Object.getPrototypeOf(e5)).call(this, t5));
                  return n4.contentNode = document.createElement("span"), n4.contentNode.setAttribute("contenteditable", false), [].slice.call(n4.domNode.childNodes).forEach(function(t6) {
                    n4.contentNode.appendChild(t6);
                  }), n4.leftGuard = document.createTextNode(a), n4.rightGuard = document.createTextNode(a), n4.domNode.appendChild(n4.leftGuard), n4.domNode.appendChild(n4.contentNode), n4.domNode.appendChild(n4.rightGuard), n4;
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), r(e5, [{ key: "index", value: function(t5, n4) {
                  return t5 === this.leftGuard ? 0 : t5 === this.rightGuard ? 1 : function t6(e6, n5, r2) {
                    null === e6 && (e6 = Function.prototype);
                    var o2 = Object.getOwnPropertyDescriptor(e6, n5);
                    if (void 0 === o2) {
                      var i2 = Object.getPrototypeOf(e6);
                      return null === i2 ? void 0 : t6(i2, n5, r2);
                    }
                    if ("value" in o2)
                      return o2.value;
                    var l2 = o2.get;
                    return void 0 !== l2 ? l2.call(r2) : void 0;
                  }(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "index", this).call(this, t5, n4);
                } }, { key: "restore", value: function(t5) {
                  var e6 = void 0, n4 = void 0, r2 = t5.data.split(a).join("");
                  if (t5 === this.leftGuard)
                    if (this.prev instanceof i.default) {
                      var l2 = this.prev.length();
                      this.prev.insertAt(l2, r2), e6 = { startNode: this.prev.domNode, startOffset: l2 + r2.length };
                    } else
                      n4 = document.createTextNode(r2), this.parent.insertBefore(o.default.create(n4), this), e6 = { startNode: n4, startOffset: r2.length };
                  else
                    t5 === this.rightGuard && (this.next instanceof i.default ? (this.next.insertAt(0, r2), e6 = { startNode: this.next.domNode, startOffset: r2.length }) : (n4 = document.createTextNode(r2), this.parent.insertBefore(o.default.create(n4), this.next), e6 = { startNode: n4, startOffset: r2.length }));
                  return t5.data = a, e6;
                } }, { key: "update", value: function(t5, e6) {
                  var n4 = this;
                  t5.forEach(function(t6) {
                    if ("characterData" === t6.type && (t6.target === n4.leftGuard || t6.target === n4.rightGuard)) {
                      var r2 = n4.restore(t6.target);
                      r2 && (e6.range = r2);
                    }
                  });
                } }]), e5;
              }(o.default.Embed);
              e4.default = s;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true }), e4.AlignStyle = e4.AlignClass = e4.AlignAttribute = void 0;
              var r, o = n3(0), i = (r = o) && r.__esModule ? r : { default: r }, l = { scope: i.default.Scope.BLOCK, whitelist: ["right", "center", "justify"] }, a = new i.default.Attributor.Attribute("align", "align", l), s = new i.default.Attributor.Class("align", "ql-align", l), u = new i.default.Attributor.Style("align", "text-align", l);
              e4.AlignAttribute = a, e4.AlignClass = s, e4.AlignStyle = u;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true }), e4.BackgroundStyle = e4.BackgroundClass = void 0;
              var r, o = n3(0), i = (r = o) && r.__esModule ? r : { default: r }, l = n3(26), a = new i.default.Attributor.Class("background", "ql-bg", { scope: i.default.Scope.INLINE }), s = new l.ColorAttributor("background", "background-color", { scope: i.default.Scope.INLINE });
              e4.BackgroundClass = a, e4.BackgroundStyle = s;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true }), e4.DirectionStyle = e4.DirectionClass = e4.DirectionAttribute = void 0;
              var r, o = n3(0), i = (r = o) && r.__esModule ? r : { default: r }, l = { scope: i.default.Scope.BLOCK, whitelist: ["rtl"] }, a = new i.default.Attributor.Attribute("direction", "dir", l), s = new i.default.Attributor.Class("direction", "ql-direction", l), u = new i.default.Attributor.Style("direction", "direction", l);
              e4.DirectionAttribute = a, e4.DirectionClass = s, e4.DirectionStyle = u;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true }), e4.FontClass = e4.FontStyle = void 0;
              var r, o = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), i = n3(0), l = (r = i) && r.__esModule ? r : { default: r }, a = { scope: l.default.Scope.INLINE, whitelist: ["serif", "monospace"] }, s = new l.default.Attributor.Class("font", "ql-font", a), u = new (function(t4) {
                function e5() {
                  return function(t5, e6) {
                    if (!(t5 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5), function(t5, e6) {
                    if (!t5)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e6 || "object" != typeof e6 && "function" != typeof e6 ? t5 : e6;
                  }(this, (e5.__proto__ || Object.getPrototypeOf(e5)).apply(this, arguments));
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), o(e5, [{ key: "value", value: function(t5) {
                  return function t6(e6, n4, r2) {
                    null === e6 && (e6 = Function.prototype);
                    var o2 = Object.getOwnPropertyDescriptor(e6, n4);
                    if (void 0 === o2) {
                      var i2 = Object.getPrototypeOf(e6);
                      return null === i2 ? void 0 : t6(i2, n4, r2);
                    }
                    if ("value" in o2)
                      return o2.value;
                    var l2 = o2.get;
                    return void 0 !== l2 ? l2.call(r2) : void 0;
                  }(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "value", this).call(this, t5).replace(/["']/g, "");
                } }]), e5;
              }(l.default.Attributor.Style))("font", "font-family", a);
              e4.FontStyle = u, e4.FontClass = s;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true }), e4.SizeStyle = e4.SizeClass = void 0;
              var r, o = n3(0), i = (r = o) && r.__esModule ? r : { default: r }, l = new i.default.Attributor.Class("size", "ql-size", { scope: i.default.Scope.INLINE, whitelist: ["small", "large", "huge"] }), a = new i.default.Attributor.Style("size", "font-size", { scope: i.default.Scope.INLINE, whitelist: ["10px", "18px", "32px"] });
              e4.SizeClass = l, e4.SizeStyle = a;
            }, function(t3, e4, n3) {
              "use strict";
              t3.exports = { align: { "": n3(76), center: n3(77), right: n3(78), justify: n3(79) }, background: n3(80), blockquote: n3(81), bold: n3(82), clean: n3(83), code: n3(58), "code-block": n3(58), color: n3(84), direction: { "": n3(85), rtl: n3(86) }, float: { center: n3(87), full: n3(88), left: n3(89), right: n3(90) }, formula: n3(91), header: { 1: n3(92), 2: n3(93) }, italic: n3(94), image: n3(95), indent: { "+1": n3(96), "-1": n3(97) }, link: n3(98), list: { ordered: n3(99), bullet: n3(100), check: n3(101) }, script: { sub: n3(102), super: n3(103) }, strike: n3(104), underline: n3(105), video: n3(106) };
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true }), e4.getLastChangeIndex = e4.default = void 0;
              var r = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), o = l(n3(0)), i = l(n3(5));
              function l(t4) {
                return t4 && t4.__esModule ? t4 : { default: t4 };
              }
              var a = function(t4) {
                function e5(t5, n4) {
                  !function(t6, e6) {
                    if (!(t6 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5);
                  var r2 = function(t6, e6) {
                    if (!t6)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e6 || "object" != typeof e6 && "function" != typeof e6 ? t6 : e6;
                  }(this, (e5.__proto__ || Object.getPrototypeOf(e5)).call(this, t5, n4));
                  return r2.lastRecorded = 0, r2.ignoreChange = false, r2.clear(), r2.quill.on(i.default.events.EDITOR_CHANGE, function(t6, e6, n5, o2) {
                    t6 !== i.default.events.TEXT_CHANGE || r2.ignoreChange || (r2.options.userOnly && o2 !== i.default.sources.USER ? r2.transform(e6) : r2.record(e6, n5));
                  }), r2.quill.keyboard.addBinding({ key: "Z", shortKey: true }, r2.undo.bind(r2)), r2.quill.keyboard.addBinding({ key: "Z", shortKey: true, shiftKey: true }, r2.redo.bind(r2)), /Win/i.test(navigator.platform) && r2.quill.keyboard.addBinding({ key: "Y", shortKey: true }, r2.redo.bind(r2)), r2;
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), r(e5, [{ key: "change", value: function(t5, e6) {
                  if (0 !== this.stack[t5].length) {
                    var n4 = this.stack[t5].pop();
                    this.stack[e6].push(n4), this.lastRecorded = 0, this.ignoreChange = true, this.quill.updateContents(n4[t5], i.default.sources.USER), this.ignoreChange = false;
                    var r2 = s(n4[t5]);
                    this.quill.setSelection(r2);
                  }
                } }, { key: "clear", value: function() {
                  this.stack = { undo: [], redo: [] };
                } }, { key: "cutoff", value: function() {
                  this.lastRecorded = 0;
                } }, { key: "record", value: function(t5, e6) {
                  if (0 !== t5.ops.length) {
                    this.stack.redo = [];
                    var n4 = this.quill.getContents().diff(e6), r2 = Date.now();
                    if (this.lastRecorded + this.options.delay > r2 && this.stack.undo.length > 0) {
                      var o2 = this.stack.undo.pop();
                      n4 = n4.compose(o2.undo), t5 = o2.redo.compose(t5);
                    } else
                      this.lastRecorded = r2;
                    this.stack.undo.push({ redo: t5, undo: n4 }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift();
                  }
                } }, { key: "redo", value: function() {
                  this.change("redo", "undo");
                } }, { key: "transform", value: function(t5) {
                  this.stack.undo.forEach(function(e6) {
                    e6.undo = t5.transform(e6.undo, true), e6.redo = t5.transform(e6.redo, true);
                  }), this.stack.redo.forEach(function(e6) {
                    e6.undo = t5.transform(e6.undo, true), e6.redo = t5.transform(e6.redo, true);
                  });
                } }, { key: "undo", value: function() {
                  this.change("undo", "redo");
                } }]), e5;
              }(l(n3(9)).default);
              function s(t4) {
                var e5 = t4.reduce(function(t5, e6) {
                  return t5 += e6.delete || 0;
                }, 0), n4 = t4.length() - e5;
                return function(t5) {
                  var e6 = t5.ops[t5.ops.length - 1];
                  return null != e6 && (null != e6.insert ? "string" == typeof e6.insert && e6.insert.endsWith("\n") : null != e6.attributes && Object.keys(e6.attributes).some(function(t6) {
                    return null != o.default.query(t6, o.default.Scope.BLOCK);
                  }));
                }(t4) && (n4 -= 1), n4;
              }
              a.DEFAULTS = { delay: 1e3, maxStack: 100, userOnly: false }, e4.default = a, e4.getLastChangeIndex = s;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true }), e4.default = e4.BaseTooltip = void 0;
              var r = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), o = p(n3(3)), i = p(n3(2)), l = p(n3(8)), a = p(n3(23)), s = p(n3(34)), u = p(n3(59)), c = p(n3(60)), f = p(n3(28)), h = p(n3(61));
              function p(t4) {
                return t4 && t4.__esModule ? t4 : { default: t4 };
              }
              function d(t4, e5) {
                if (!(t4 instanceof e5))
                  throw new TypeError("Cannot call a class as a function");
              }
              function y(t4, e5) {
                if (!t4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e5 || "object" != typeof e5 && "function" != typeof e5 ? t4 : e5;
              }
              function v(t4, e5) {
                if ("function" != typeof e5 && null !== e5)
                  throw new TypeError("Super expression must either be null or a function, not " + typeof e5);
                t4.prototype = Object.create(e5 && e5.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e5 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e5) : t4.__proto__ = e5);
              }
              var b = [false, "center", "right", "justify"], g = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"], m = [false, "serif", "monospace"], _ = ["1", "2", "3", false], O = ["small", false, "large", "huge"], w = function(t4) {
                function e5(t5, n4) {
                  d(this, e5);
                  var r2 = y(this, (e5.__proto__ || Object.getPrototypeOf(e5)).call(this, t5, n4));
                  return t5.emitter.listenDOM("click", document.body, function e6(n5) {
                    if (!document.body.contains(t5.root))
                      return document.body.removeEventListener("click", e6);
                    null == r2.tooltip || r2.tooltip.root.contains(n5.target) || document.activeElement === r2.tooltip.textbox || r2.quill.hasFocus() || r2.tooltip.hide(), null != r2.pickers && r2.pickers.forEach(function(t6) {
                      t6.container.contains(n5.target) || t6.close();
                    });
                  }), r2;
                }
                return v(e5, t4), r(e5, [{ key: "addModule", value: function(t5) {
                  var n4 = function t6(e6, n5, r2) {
                    null === e6 && (e6 = Function.prototype);
                    var o2 = Object.getOwnPropertyDescriptor(e6, n5);
                    if (void 0 === o2) {
                      var i2 = Object.getPrototypeOf(e6);
                      return null === i2 ? void 0 : t6(i2, n5, r2);
                    }
                    if ("value" in o2)
                      return o2.value;
                    var l2 = o2.get;
                    return void 0 !== l2 ? l2.call(r2) : void 0;
                  }(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "addModule", this).call(this, t5);
                  return "toolbar" === t5 && this.extendToolbar(n4), n4;
                } }, { key: "buildButtons", value: function(t5, e6) {
                  t5.forEach(function(t6) {
                    (t6.getAttribute("class") || "").split(/\s+/).forEach(function(n4) {
                      if (n4.startsWith("ql-") && (n4 = n4.slice("ql-".length), null != e6[n4]))
                        if ("direction" === n4)
                          t6.innerHTML = e6[n4][""] + e6[n4].rtl;
                        else if ("string" == typeof e6[n4])
                          t6.innerHTML = e6[n4];
                        else {
                          var r2 = t6.value || "";
                          null != r2 && e6[n4][r2] && (t6.innerHTML = e6[n4][r2]);
                        }
                    });
                  });
                } }, { key: "buildPickers", value: function(t5, e6) {
                  var n4 = this;
                  this.pickers = t5.map(function(t6) {
                    if (t6.classList.contains("ql-align"))
                      return null == t6.querySelector("option") && E(t6, b), new c.default(t6, e6.align);
                    if (t6.classList.contains("ql-background") || t6.classList.contains("ql-color")) {
                      var n5 = t6.classList.contains("ql-background") ? "background" : "color";
                      return null == t6.querySelector("option") && E(t6, g, "background" === n5 ? "#ffffff" : "#000000"), new u.default(t6, e6[n5]);
                    }
                    return null == t6.querySelector("option") && (t6.classList.contains("ql-font") ? E(t6, m) : t6.classList.contains("ql-header") ? E(t6, _) : t6.classList.contains("ql-size") && E(t6, O)), new f.default(t6);
                  }), this.quill.on(l.default.events.EDITOR_CHANGE, function() {
                    n4.pickers.forEach(function(t6) {
                      t6.update();
                    });
                  });
                } }]), e5;
              }(s.default);
              w.DEFAULTS = (0, o.default)(true, {}, s.default.DEFAULTS, { modules: { toolbar: { handlers: { formula: function() {
                this.quill.theme.tooltip.edit("formula");
              }, image: function() {
                var t4 = this, e5 = this.container.querySelector("input.ql-image[type=file]");
                null == e5 && ((e5 = document.createElement("input")).setAttribute("type", "file"), e5.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"), e5.classList.add("ql-image"), e5.addEventListener("change", function() {
                  if (null != e5.files && null != e5.files[0]) {
                    var n4 = new FileReader();
                    n4.onload = function(n5) {
                      var r2 = t4.quill.getSelection(true);
                      t4.quill.updateContents(new i.default().retain(r2.index).delete(r2.length).insert({ image: n5.target.result }), l.default.sources.USER), t4.quill.setSelection(r2.index + 1, l.default.sources.SILENT), e5.value = "";
                    }, n4.readAsDataURL(e5.files[0]);
                  }
                }), this.container.appendChild(e5)), e5.click();
              }, video: function() {
                this.quill.theme.tooltip.edit("video");
              } } } } });
              var x = function(t4) {
                function e5(t5, n4) {
                  d(this, e5);
                  var r2 = y(this, (e5.__proto__ || Object.getPrototypeOf(e5)).call(this, t5, n4));
                  return r2.textbox = r2.root.querySelector('input[type="text"]'), r2.listen(), r2;
                }
                return v(e5, t4), r(e5, [{ key: "listen", value: function() {
                  var t5 = this;
                  this.textbox.addEventListener("keydown", function(e6) {
                    a.default.match(e6, "enter") ? (t5.save(), e6.preventDefault()) : a.default.match(e6, "escape") && (t5.cancel(), e6.preventDefault());
                  });
                } }, { key: "cancel", value: function() {
                  this.hide();
                } }, { key: "edit", value: function() {
                  var t5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "link", e6 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                  this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), null != e6 ? this.textbox.value = e6 : t5 !== this.root.getAttribute("data-mode") && (this.textbox.value = ""), this.position(this.quill.getBounds(this.quill.selection.savedRange)), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-" + t5) || ""), this.root.setAttribute("data-mode", t5);
                } }, { key: "restoreFocus", value: function() {
                  var t5 = this.quill.scrollingContainer.scrollTop;
                  this.quill.focus(), this.quill.scrollingContainer.scrollTop = t5;
                } }, { key: "save", value: function() {
                  var t5, e6, n4 = this.textbox.value;
                  switch (this.root.getAttribute("data-mode")) {
                    case "link":
                      var r2 = this.quill.root.scrollTop;
                      this.linkRange ? (this.quill.formatText(this.linkRange, "link", n4, l.default.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", n4, l.default.sources.USER)), this.quill.root.scrollTop = r2;
                      break;
                    case "video":
                      e6 = (t5 = n4).match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || t5.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/), n4 = e6 ? (e6[1] || "https") + "://www.youtube.com/embed/" + e6[2] + "?showinfo=0" : (e6 = t5.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? (e6[1] || "https") + "://player.vimeo.com/video/" + e6[2] + "/" : t5;
                    case "formula":
                      if (!n4)
                        break;
                      var o2 = this.quill.getSelection(true);
                      if (null != o2) {
                        var i2 = o2.index + o2.length;
                        this.quill.insertEmbed(i2, this.root.getAttribute("data-mode"), n4, l.default.sources.USER), "formula" === this.root.getAttribute("data-mode") && this.quill.insertText(i2 + 1, " ", l.default.sources.USER), this.quill.setSelection(i2 + 2, l.default.sources.USER);
                      }
                  }
                  this.textbox.value = "", this.hide();
                } }]), e5;
              }(h.default);
              function E(t4, e5) {
                var n4 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                e5.forEach(function(e6) {
                  var r2 = document.createElement("option");
                  e6 === n4 ? r2.setAttribute("selected", "selected") : r2.setAttribute("value", e6), t4.appendChild(r2);
                });
              }
              e4.BaseTooltip = x, e4.default = w;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r = function() {
                function t4() {
                  this.head = this.tail = null, this.length = 0;
                }
                return t4.prototype.append = function() {
                  for (var t5 = [], e5 = 0; e5 < arguments.length; e5++)
                    t5[e5] = arguments[e5];
                  this.insertBefore(t5[0], null), t5.length > 1 && this.append.apply(this, t5.slice(1));
                }, t4.prototype.contains = function(t5) {
                  for (var e5, n4 = this.iterator(); e5 = n4(); )
                    if (e5 === t5)
                      return true;
                  return false;
                }, t4.prototype.insertBefore = function(t5, e5) {
                  t5 && (t5.next = e5, null != e5 ? (t5.prev = e5.prev, null != e5.prev && (e5.prev.next = t5), e5.prev = t5, e5 === this.head && (this.head = t5)) : null != this.tail ? (this.tail.next = t5, t5.prev = this.tail, this.tail = t5) : (t5.prev = null, this.head = this.tail = t5), this.length += 1);
                }, t4.prototype.offset = function(t5) {
                  for (var e5 = 0, n4 = this.head; null != n4; ) {
                    if (n4 === t5)
                      return e5;
                    e5 += n4.length(), n4 = n4.next;
                  }
                  return -1;
                }, t4.prototype.remove = function(t5) {
                  this.contains(t5) && (null != t5.prev && (t5.prev.next = t5.next), null != t5.next && (t5.next.prev = t5.prev), t5 === this.head && (this.head = t5.next), t5 === this.tail && (this.tail = t5.prev), this.length -= 1);
                }, t4.prototype.iterator = function(t5) {
                  return void 0 === t5 && (t5 = this.head), function() {
                    var e5 = t5;
                    return null != t5 && (t5 = t5.next), e5;
                  };
                }, t4.prototype.find = function(t5, e5) {
                  void 0 === e5 && (e5 = false);
                  for (var n4, r2 = this.iterator(); n4 = r2(); ) {
                    var o = n4.length();
                    if (t5 < o || e5 && t5 === o && (null == n4.next || 0 !== n4.next.length()))
                      return [n4, t5];
                    t5 -= o;
                  }
                  return [null, 0];
                }, t4.prototype.forEach = function(t5) {
                  for (var e5, n4 = this.iterator(); e5 = n4(); )
                    t5(e5);
                }, t4.prototype.forEachAt = function(t5, e5, n4) {
                  if (!(e5 <= 0))
                    for (var r2, o = this.find(t5), i = o[0], l = t5 - o[1], a = this.iterator(i); (r2 = a()) && l < t5 + e5; ) {
                      var s = r2.length();
                      t5 > l ? n4(r2, t5 - l, Math.min(e5, l + s - t5)) : n4(r2, 0, Math.min(s, t5 + e5 - l)), l += s;
                    }
                }, t4.prototype.map = function(t5) {
                  return this.reduce(function(e5, n4) {
                    return e5.push(t5(n4)), e5;
                  }, []);
                }, t4.prototype.reduce = function(t5, e5) {
                  for (var n4, r2 = this.iterator(); n4 = r2(); )
                    e5 = t5(e5, n4);
                  return e5;
                }, t4;
              }();
              e4.default = r;
            }, function(t3, e4, n3) {
              "use strict";
              var r, o = this && this.__extends || (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e5) {
                t4.__proto__ = e5;
              } || function(t4, e5) {
                for (var n4 in e5)
                  e5.hasOwnProperty(n4) && (t4[n4] = e5[n4]);
              }, function(t4, e5) {
                function n4() {
                  this.constructor = t4;
                }
                r(t4, e5), t4.prototype = null === e5 ? Object.create(e5) : (n4.prototype = e5.prototype, new n4());
              });
              Object.defineProperty(e4, "__esModule", { value: true });
              var i = n3(17), l = n3(1), a = { attributes: true, characterData: true, characterDataOldValue: true, childList: true, subtree: true }, s = function(t4) {
                function e5(e6) {
                  var n4 = t4.call(this, e6) || this;
                  return n4.scroll = n4, n4.observer = new MutationObserver(function(t5) {
                    n4.update(t5);
                  }), n4.observer.observe(n4.domNode, a), n4.attach(), n4;
                }
                return o(e5, t4), e5.prototype.detach = function() {
                  t4.prototype.detach.call(this), this.observer.disconnect();
                }, e5.prototype.deleteAt = function(e6, n4) {
                  this.update(), 0 === e6 && n4 === this.length() ? this.children.forEach(function(t5) {
                    t5.remove();
                  }) : t4.prototype.deleteAt.call(this, e6, n4);
                }, e5.prototype.formatAt = function(e6, n4, r2, o2) {
                  this.update(), t4.prototype.formatAt.call(this, e6, n4, r2, o2);
                }, e5.prototype.insertAt = function(e6, n4, r2) {
                  this.update(), t4.prototype.insertAt.call(this, e6, n4, r2);
                }, e5.prototype.optimize = function(e6, n4) {
                  var r2 = this;
                  void 0 === e6 && (e6 = []), void 0 === n4 && (n4 = {}), t4.prototype.optimize.call(this, n4);
                  for (var o2 = [].slice.call(this.observer.takeRecords()); o2.length > 0; )
                    e6.push(o2.pop());
                  for (var a2 = function(t5, e7) {
                    void 0 === e7 && (e7 = true), null != t5 && t5 !== r2 && null != t5.domNode.parentNode && (null == t5.domNode[l.DATA_KEY].mutations && (t5.domNode[l.DATA_KEY].mutations = []), e7 && a2(t5.parent));
                  }, s2 = function(t5) {
                    null != t5.domNode[l.DATA_KEY] && null != t5.domNode[l.DATA_KEY].mutations && (t5 instanceof i.default && t5.children.forEach(s2), t5.optimize(n4));
                  }, u = e6, c = 0; u.length > 0; c += 1) {
                    if (c >= 100)
                      throw new Error("[Parchment] Maximum optimize iterations reached");
                    for (u.forEach(function(t5) {
                      var e7 = l.find(t5.target, true);
                      null != e7 && (e7.domNode === t5.target && ("childList" === t5.type ? (a2(l.find(t5.previousSibling, false)), [].forEach.call(t5.addedNodes, function(t6) {
                        var e8 = l.find(t6, false);
                        a2(e8, false), e8 instanceof i.default && e8.children.forEach(function(t7) {
                          a2(t7, false);
                        });
                      })) : "attributes" === t5.type && a2(e7.prev)), a2(e7));
                    }), this.children.forEach(s2), o2 = (u = [].slice.call(this.observer.takeRecords())).slice(); o2.length > 0; )
                      e6.push(o2.pop());
                  }
                }, e5.prototype.update = function(e6, n4) {
                  var r2 = this;
                  void 0 === n4 && (n4 = {}), (e6 = e6 || this.observer.takeRecords()).map(function(t5) {
                    var e7 = l.find(t5.target, true);
                    return null == e7 ? null : null == e7.domNode[l.DATA_KEY].mutations ? (e7.domNode[l.DATA_KEY].mutations = [t5], e7) : (e7.domNode[l.DATA_KEY].mutations.push(t5), null);
                  }).forEach(function(t5) {
                    null != t5 && t5 !== r2 && null != t5.domNode[l.DATA_KEY] && t5.update(t5.domNode[l.DATA_KEY].mutations || [], n4);
                  }), null != this.domNode[l.DATA_KEY].mutations && t4.prototype.update.call(this, this.domNode[l.DATA_KEY].mutations, n4), this.optimize(e6, n4);
                }, e5.blotName = "scroll", e5.defaultChild = "block", e5.scope = l.Scope.BLOCK_BLOT, e5.tagName = "DIV", e5;
              }(i.default);
              e4.default = s;
            }, function(t3, e4, n3) {
              "use strict";
              var r, o = this && this.__extends || (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e5) {
                t4.__proto__ = e5;
              } || function(t4, e5) {
                for (var n4 in e5)
                  e5.hasOwnProperty(n4) && (t4[n4] = e5[n4]);
              }, function(t4, e5) {
                function n4() {
                  this.constructor = t4;
                }
                r(t4, e5), t4.prototype = null === e5 ? Object.create(e5) : (n4.prototype = e5.prototype, new n4());
              });
              Object.defineProperty(e4, "__esModule", { value: true });
              var i = n3(18), l = n3(1), a = function(t4) {
                function e5() {
                  return null !== t4 && t4.apply(this, arguments) || this;
                }
                return o(e5, t4), e5.formats = function(n4) {
                  if (n4.tagName !== e5.tagName)
                    return t4.formats.call(this, n4);
                }, e5.prototype.format = function(n4, r2) {
                  var o2 = this;
                  n4 !== this.statics.blotName || r2 ? t4.prototype.format.call(this, n4, r2) : (this.children.forEach(function(t5) {
                    t5 instanceof i.default || (t5 = t5.wrap(e5.blotName, true)), o2.attributes.copy(t5);
                  }), this.unwrap());
                }, e5.prototype.formatAt = function(e6, n4, r2, o2) {
                  null != this.formats()[r2] || l.query(r2, l.Scope.ATTRIBUTE) ? this.isolate(e6, n4).format(r2, o2) : t4.prototype.formatAt.call(this, e6, n4, r2, o2);
                }, e5.prototype.optimize = function(n4) {
                  t4.prototype.optimize.call(this, n4);
                  var r2 = this.formats();
                  if (0 === Object.keys(r2).length)
                    return this.unwrap();
                  var o2 = this.next;
                  o2 instanceof e5 && o2.prev === this && function(t5, e6) {
                    if (Object.keys(t5).length !== Object.keys(e6).length)
                      return false;
                    for (var n5 in t5)
                      if (t5[n5] !== e6[n5])
                        return false;
                    return true;
                  }(r2, o2.formats()) && (o2.moveChildren(this), o2.remove());
                }, e5.blotName = "inline", e5.scope = l.Scope.INLINE_BLOT, e5.tagName = "SPAN", e5;
              }(i.default);
              e4.default = a;
            }, function(t3, e4, n3) {
              "use strict";
              var r, o = this && this.__extends || (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e5) {
                t4.__proto__ = e5;
              } || function(t4, e5) {
                for (var n4 in e5)
                  e5.hasOwnProperty(n4) && (t4[n4] = e5[n4]);
              }, function(t4, e5) {
                function n4() {
                  this.constructor = t4;
                }
                r(t4, e5), t4.prototype = null === e5 ? Object.create(e5) : (n4.prototype = e5.prototype, new n4());
              });
              Object.defineProperty(e4, "__esModule", { value: true });
              var i = n3(18), l = n3(1), a = function(t4) {
                function e5() {
                  return null !== t4 && t4.apply(this, arguments) || this;
                }
                return o(e5, t4), e5.formats = function(n4) {
                  var r2 = l.query(e5.blotName).tagName;
                  if (n4.tagName !== r2)
                    return t4.formats.call(this, n4);
                }, e5.prototype.format = function(n4, r2) {
                  null != l.query(n4, l.Scope.BLOCK) && (n4 !== this.statics.blotName || r2 ? t4.prototype.format.call(this, n4, r2) : this.replaceWith(e5.blotName));
                }, e5.prototype.formatAt = function(e6, n4, r2, o2) {
                  null != l.query(r2, l.Scope.BLOCK) ? this.format(r2, o2) : t4.prototype.formatAt.call(this, e6, n4, r2, o2);
                }, e5.prototype.insertAt = function(e6, n4, r2) {
                  if (null == r2 || null != l.query(n4, l.Scope.INLINE))
                    t4.prototype.insertAt.call(this, e6, n4, r2);
                  else {
                    var o2 = this.split(e6), i2 = l.create(n4, r2);
                    o2.parent.insertBefore(i2, o2);
                  }
                }, e5.prototype.update = function(e6, n4) {
                  navigator.userAgent.match(/Trident/) ? this.build() : t4.prototype.update.call(this, e6, n4);
                }, e5.blotName = "block", e5.scope = l.Scope.BLOCK_BLOT, e5.tagName = "P", e5;
              }(i.default);
              e4.default = a;
            }, function(t3, e4, n3) {
              "use strict";
              var r, o = this && this.__extends || (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e5) {
                t4.__proto__ = e5;
              } || function(t4, e5) {
                for (var n4 in e5)
                  e5.hasOwnProperty(n4) && (t4[n4] = e5[n4]);
              }, function(t4, e5) {
                function n4() {
                  this.constructor = t4;
                }
                r(t4, e5), t4.prototype = null === e5 ? Object.create(e5) : (n4.prototype = e5.prototype, new n4());
              });
              Object.defineProperty(e4, "__esModule", { value: true });
              var i = function(t4) {
                function e5() {
                  return null !== t4 && t4.apply(this, arguments) || this;
                }
                return o(e5, t4), e5.formats = function(t5) {
                }, e5.prototype.format = function(e6, n4) {
                  t4.prototype.formatAt.call(this, 0, this.length(), e6, n4);
                }, e5.prototype.formatAt = function(e6, n4, r2, o2) {
                  0 === e6 && n4 === this.length() ? this.format(r2, o2) : t4.prototype.formatAt.call(this, e6, n4, r2, o2);
                }, e5.prototype.formats = function() {
                  return this.statics.formats(this.domNode);
                }, e5;
              }(n3(19).default);
              e4.default = i;
            }, function(t3, e4, n3) {
              "use strict";
              var r, o = this && this.__extends || (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e5) {
                t4.__proto__ = e5;
              } || function(t4, e5) {
                for (var n4 in e5)
                  e5.hasOwnProperty(n4) && (t4[n4] = e5[n4]);
              }, function(t4, e5) {
                function n4() {
                  this.constructor = t4;
                }
                r(t4, e5), t4.prototype = null === e5 ? Object.create(e5) : (n4.prototype = e5.prototype, new n4());
              });
              Object.defineProperty(e4, "__esModule", { value: true });
              var i = n3(19), l = n3(1), a = function(t4) {
                function e5(e6) {
                  var n4 = t4.call(this, e6) || this;
                  return n4.text = n4.statics.value(n4.domNode), n4;
                }
                return o(e5, t4), e5.create = function(t5) {
                  return document.createTextNode(t5);
                }, e5.value = function(t5) {
                  var e6 = t5.data;
                  return e6.normalize && (e6 = e6.normalize()), e6;
                }, e5.prototype.deleteAt = function(t5, e6) {
                  this.domNode.data = this.text = this.text.slice(0, t5) + this.text.slice(t5 + e6);
                }, e5.prototype.index = function(t5, e6) {
                  return this.domNode === t5 ? e6 : -1;
                }, e5.prototype.insertAt = function(e6, n4, r2) {
                  null == r2 ? (this.text = this.text.slice(0, e6) + n4 + this.text.slice(e6), this.domNode.data = this.text) : t4.prototype.insertAt.call(this, e6, n4, r2);
                }, e5.prototype.length = function() {
                  return this.text.length;
                }, e5.prototype.optimize = function(n4) {
                  t4.prototype.optimize.call(this, n4), this.text = this.statics.value(this.domNode), 0 === this.text.length ? this.remove() : this.next instanceof e5 && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
                }, e5.prototype.position = function(t5, e6) {
                  return void 0 === e6 && (e6 = false), [this.domNode, t5];
                }, e5.prototype.split = function(t5, e6) {
                  if (void 0 === e6 && (e6 = false), !e6) {
                    if (0 === t5)
                      return this;
                    if (t5 === this.length())
                      return this.next;
                  }
                  var n4 = l.create(this.domNode.splitText(t5));
                  return this.parent.insertBefore(n4, this.next), this.text = this.statics.value(this.domNode), n4;
                }, e5.prototype.update = function(t5, e6) {
                  var n4 = this;
                  t5.some(function(t6) {
                    return "characterData" === t6.type && t6.target === n4.domNode;
                  }) && (this.text = this.statics.value(this.domNode));
                }, e5.prototype.value = function() {
                  return this.text;
                }, e5.blotName = "text", e5.scope = l.Scope.INLINE_BLOT, e5;
              }(i.default);
              e4.default = a;
            }, function(t3, e4, n3) {
              "use strict";
              var r = document.createElement("div");
              if (r.classList.toggle("test-class", false), r.classList.contains("test-class")) {
                var o = DOMTokenList.prototype.toggle;
                DOMTokenList.prototype.toggle = function(t4, e5) {
                  return arguments.length > 1 && !this.contains(t4) == !e5 ? e5 : o.call(this, t4);
                };
              }
              String.prototype.startsWith || (String.prototype.startsWith = function(t4, e5) {
                return e5 = e5 || 0, this.substr(e5, t4.length) === t4;
              }), String.prototype.endsWith || (String.prototype.endsWith = function(t4, e5) {
                var n4 = this.toString();
                ("number" != typeof e5 || !isFinite(e5) || Math.floor(e5) !== e5 || e5 > n4.length) && (e5 = n4.length), e5 -= t4.length;
                var r2 = n4.indexOf(t4, e5);
                return -1 !== r2 && r2 === e5;
              }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", { value: function(t4) {
                if (null === this)
                  throw new TypeError("Array.prototype.find called on null or undefined");
                if ("function" != typeof t4)
                  throw new TypeError("predicate must be a function");
                for (var e5, n4 = Object(this), r2 = n4.length >>> 0, o2 = arguments[1], i = 0; i < r2; i++)
                  if (e5 = n4[i], t4.call(o2, e5, i, n4))
                    return e5;
              } }), document.addEventListener("DOMContentLoaded", function() {
                document.execCommand("enableObjectResizing", false, false), document.execCommand("autoUrlDetect", false, false);
              });
            }, function(t3, e4) {
              var n3 = -1, r = 1, o = 0;
              function i(t4, e5, u2) {
                if (t4 == e5)
                  return t4 ? [[o, t4]] : [];
                (u2 < 0 || t4.length < u2) && (u2 = null);
                var f = a(t4, e5), h = t4.substring(0, f);
                f = s(t4 = t4.substring(f), e5 = e5.substring(f));
                var p = t4.substring(t4.length - f), d = function(t5, e6) {
                  var u3;
                  if (!t5)
                    return [[r, e6]];
                  if (!e6)
                    return [[n3, t5]];
                  var c2 = t5.length > e6.length ? t5 : e6, f2 = t5.length > e6.length ? e6 : t5, h2 = c2.indexOf(f2);
                  if (-1 != h2)
                    return u3 = [[r, c2.substring(0, h2)], [o, f2], [r, c2.substring(h2 + f2.length)]], t5.length > e6.length && (u3[0][0] = u3[2][0] = n3), u3;
                  if (1 == f2.length)
                    return [[n3, t5], [r, e6]];
                  var p2 = function(t6, e7) {
                    var n4 = t6.length > e7.length ? t6 : e7, r2 = t6.length > e7.length ? e7 : t6;
                    if (n4.length < 4 || 2 * r2.length < n4.length)
                      return null;
                    function o2(t7, e8, n5) {
                      for (var r3, o3, i3, l3, u5 = t7.substring(n5, n5 + Math.floor(t7.length / 4)), c4 = -1, f4 = ""; -1 != (c4 = e8.indexOf(u5, c4 + 1)); ) {
                        var h4 = a(t7.substring(n5), e8.substring(c4)), p4 = s(t7.substring(0, n5), e8.substring(0, c4));
                        f4.length < p4 + h4 && (f4 = e8.substring(c4 - p4, c4) + e8.substring(c4, c4 + h4), r3 = t7.substring(0, n5 - p4), o3 = t7.substring(n5 + h4), i3 = e8.substring(0, c4 - p4), l3 = e8.substring(c4 + h4));
                      }
                      return 2 * f4.length >= t7.length ? [r3, o3, i3, l3, f4] : null;
                    }
                    var i2, l2, u4, c3, f3, h3 = o2(n4, r2, Math.ceil(n4.length / 4)), p3 = o2(n4, r2, Math.ceil(n4.length / 2));
                    if (!h3 && !p3)
                      return null;
                    i2 = p3 ? h3 && h3[4].length > p3[4].length ? h3 : p3 : h3, t6.length > e7.length ? (l2 = i2[0], u4 = i2[1], c3 = i2[2], f3 = i2[3]) : (c3 = i2[0], f3 = i2[1], l2 = i2[2], u4 = i2[3]);
                    var d3 = i2[4];
                    return [l2, u4, c3, f3, d3];
                  }(t5, e6);
                  if (p2) {
                    var d2 = p2[0], y = p2[1], v = p2[2], b = p2[3], g = p2[4], m = i(d2, v), _ = i(y, b);
                    return m.concat([[o, g]], _);
                  }
                  return function(t6, e7) {
                    for (var o2 = t6.length, i2 = e7.length, a2 = Math.ceil((o2 + i2) / 2), s2 = a2, u4 = 2 * a2, c3 = new Array(u4), f3 = new Array(u4), h3 = 0; h3 < u4; h3++)
                      c3[h3] = -1, f3[h3] = -1;
                    c3[s2 + 1] = 0, f3[s2 + 1] = 0;
                    for (var p3 = o2 - i2, d3 = p3 % 2 != 0, y2 = 0, v2 = 0, b2 = 0, g2 = 0, m2 = 0; m2 < a2; m2++) {
                      for (var _2 = -m2 + y2; _2 <= m2 - v2; _2 += 2) {
                        for (var O = s2 + _2, w = (j = _2 == -m2 || _2 != m2 && c3[O - 1] < c3[O + 1] ? c3[O + 1] : c3[O - 1] + 1) - _2; j < o2 && w < i2 && t6.charAt(j) == e7.charAt(w); )
                          j++, w++;
                        if (c3[O] = j, j > o2)
                          v2 += 2;
                        else if (w > i2)
                          y2 += 2;
                        else if (d3 && (k = s2 + p3 - _2) >= 0 && k < u4 && -1 != f3[k]) {
                          var x = o2 - f3[k];
                          if (j >= x)
                            return l(t6, e7, j, w);
                        }
                      }
                      for (var E = -m2 + b2; E <= m2 - g2; E += 2) {
                        for (var k = s2 + E, A = (x = E == -m2 || E != m2 && f3[k - 1] < f3[k + 1] ? f3[k + 1] : f3[k - 1] + 1) - E; x < o2 && A < i2 && t6.charAt(o2 - x - 1) == e7.charAt(i2 - A - 1); )
                          x++, A++;
                        if (f3[k] = x, x > o2)
                          g2 += 2;
                        else if (A > i2)
                          b2 += 2;
                        else if (!d3 && (O = s2 + p3 - E) >= 0 && O < u4 && -1 != c3[O]) {
                          var j = c3[O];
                          if (w = s2 + j - O, j >= (x = o2 - x))
                            return l(t6, e7, j, w);
                        }
                      }
                    }
                    return [[n3, t6], [r, e7]];
                  }(t5, e6);
                }(t4 = t4.substring(0, t4.length - f), e5 = e5.substring(0, e5.length - f));
                return h && d.unshift([o, h]), p && d.push([o, p]), function t5(e6) {
                  e6.push([o, ""]);
                  for (var i2, l2 = 0, u3 = 0, c2 = 0, f2 = "", h2 = ""; l2 < e6.length; )
                    switch (e6[l2][0]) {
                      case r:
                        c2++, h2 += e6[l2][1], l2++;
                        break;
                      case n3:
                        u3++, f2 += e6[l2][1], l2++;
                        break;
                      case o:
                        u3 + c2 > 1 ? (0 !== u3 && 0 !== c2 && (0 !== (i2 = a(h2, f2)) && (l2 - u3 - c2 > 0 && e6[l2 - u3 - c2 - 1][0] == o ? e6[l2 - u3 - c2 - 1][1] += h2.substring(0, i2) : (e6.splice(0, 0, [o, h2.substring(0, i2)]), l2++), h2 = h2.substring(i2), f2 = f2.substring(i2)), 0 !== (i2 = s(h2, f2)) && (e6[l2][1] = h2.substring(h2.length - i2) + e6[l2][1], h2 = h2.substring(0, h2.length - i2), f2 = f2.substring(0, f2.length - i2))), 0 === u3 ? e6.splice(l2 - c2, u3 + c2, [r, h2]) : 0 === c2 ? e6.splice(l2 - u3, u3 + c2, [n3, f2]) : e6.splice(l2 - u3 - c2, u3 + c2, [n3, f2], [r, h2]), l2 = l2 - u3 - c2 + (u3 ? 1 : 0) + (c2 ? 1 : 0) + 1) : 0 !== l2 && e6[l2 - 1][0] == o ? (e6[l2 - 1][1] += e6[l2][1], e6.splice(l2, 1)) : l2++, c2 = 0, u3 = 0, f2 = "", h2 = "";
                    }
                  "" === e6[e6.length - 1][1] && e6.pop();
                  var p2 = false;
                  for (l2 = 1; l2 < e6.length - 1; )
                    e6[l2 - 1][0] == o && e6[l2 + 1][0] == o && (e6[l2][1].substring(e6[l2][1].length - e6[l2 - 1][1].length) == e6[l2 - 1][1] ? (e6[l2][1] = e6[l2 - 1][1] + e6[l2][1].substring(0, e6[l2][1].length - e6[l2 - 1][1].length), e6[l2 + 1][1] = e6[l2 - 1][1] + e6[l2 + 1][1], e6.splice(l2 - 1, 1), p2 = true) : e6[l2][1].substring(0, e6[l2 + 1][1].length) == e6[l2 + 1][1] && (e6[l2 - 1][1] += e6[l2 + 1][1], e6[l2][1] = e6[l2][1].substring(e6[l2 + 1][1].length) + e6[l2 + 1][1], e6.splice(l2 + 1, 1), p2 = true)), l2++;
                  p2 && t5(e6);
                }(d), null != u2 && (d = function(t5, e6) {
                  var r2 = function(t6, e7) {
                    if (0 === e7)
                      return [o, t6];
                    for (var r3 = 0, i3 = 0; i3 < t6.length; i3++) {
                      var l3 = t6[i3];
                      if (l3[0] === n3 || l3[0] === o) {
                        var a3 = r3 + l3[1].length;
                        if (e7 === a3)
                          return [i3 + 1, t6];
                        if (e7 < a3) {
                          t6 = t6.slice();
                          var s3 = e7 - r3, u4 = [l3[0], l3[1].slice(0, s3)], c2 = [l3[0], l3[1].slice(s3)];
                          return t6.splice(i3, 1, u4, c2), [i3 + 1, t6];
                        }
                        r3 = a3;
                      }
                    }
                    throw new Error("cursor_pos is out of bounds!");
                  }(t5, e6), i2 = r2[1], l2 = r2[0], a2 = i2[l2], s2 = i2[l2 + 1];
                  if (null == a2)
                    return t5;
                  if (a2[0] !== o)
                    return t5;
                  if (null != s2 && a2[1] + s2[1] === s2[1] + a2[1])
                    return i2.splice(l2, 2, s2, a2), c(i2, l2, 2);
                  if (null != s2 && 0 === s2[1].indexOf(a2[1])) {
                    i2.splice(l2, 2, [s2[0], a2[1]], [0, a2[1]]);
                    var u3 = s2[1].slice(a2[1].length);
                    return u3.length > 0 && i2.splice(l2 + 2, 0, [s2[0], u3]), c(i2, l2, 3);
                  }
                  return t5;
                }(d, u2)), d = function(t5) {
                  for (var e6 = false, i2 = function(t6) {
                    return t6.charCodeAt(0) >= 56320 && t6.charCodeAt(0) <= 57343;
                  }, l2 = 2; l2 < t5.length; l2 += 1)
                    t5[l2 - 2][0] === o && (a2 = t5[l2 - 2][1]).charCodeAt(a2.length - 1) >= 55296 && a2.charCodeAt(a2.length - 1) <= 56319 && t5[l2 - 1][0] === n3 && i2(t5[l2 - 1][1]) && t5[l2][0] === r && i2(t5[l2][1]) && (e6 = true, t5[l2 - 1][1] = t5[l2 - 2][1].slice(-1) + t5[l2 - 1][1], t5[l2][1] = t5[l2 - 2][1].slice(-1) + t5[l2][1], t5[l2 - 2][1] = t5[l2 - 2][1].slice(0, -1));
                  var a2;
                  if (!e6)
                    return t5;
                  var s2 = [];
                  for (l2 = 0; l2 < t5.length; l2 += 1)
                    t5[l2][1].length > 0 && s2.push(t5[l2]);
                  return s2;
                }(d);
              }
              function l(t4, e5, n4, r2) {
                var o2 = t4.substring(0, n4), l2 = e5.substring(0, r2), a2 = t4.substring(n4), s2 = e5.substring(r2), u2 = i(o2, l2), c2 = i(a2, s2);
                return u2.concat(c2);
              }
              function a(t4, e5) {
                if (!t4 || !e5 || t4.charAt(0) != e5.charAt(0))
                  return 0;
                for (var n4 = 0, r2 = Math.min(t4.length, e5.length), o2 = r2, i2 = 0; n4 < o2; )
                  t4.substring(i2, o2) == e5.substring(i2, o2) ? i2 = n4 = o2 : r2 = o2, o2 = Math.floor((r2 - n4) / 2 + n4);
                return o2;
              }
              function s(t4, e5) {
                if (!t4 || !e5 || t4.charAt(t4.length - 1) != e5.charAt(e5.length - 1))
                  return 0;
                for (var n4 = 0, r2 = Math.min(t4.length, e5.length), o2 = r2, i2 = 0; n4 < o2; )
                  t4.substring(t4.length - o2, t4.length - i2) == e5.substring(e5.length - o2, e5.length - i2) ? i2 = n4 = o2 : r2 = o2, o2 = Math.floor((r2 - n4) / 2 + n4);
                return o2;
              }
              var u = i;
              function c(t4, e5, n4) {
                for (var r2 = e5 + n4 - 1; r2 >= 0 && r2 >= e5 - 1; r2--)
                  if (r2 + 1 < t4.length) {
                    var o2 = t4[r2], i2 = t4[r2 + 1];
                    o2[0] === i2[1] && t4.splice(r2, 2, [o2[0], o2[1] + i2[1]]);
                  }
                return t4;
              }
              u.INSERT = r, u.DELETE = n3, u.EQUAL = o, t3.exports = u;
            }, function(t3, e4) {
              function n3(t4) {
                var e5 = [];
                for (var n4 in t4)
                  e5.push(n4);
                return e5;
              }
              (t3.exports = "function" == typeof Object.keys ? Object.keys : n3).shim = n3;
            }, function(t3, e4) {
              var n3 = "[object Arguments]" == function() {
                return Object.prototype.toString.call(arguments);
              }();
              function r(t4) {
                return "[object Arguments]" == Object.prototype.toString.call(t4);
              }
              function o(t4) {
                return t4 && "object" == typeof t4 && "number" == typeof t4.length && Object.prototype.hasOwnProperty.call(t4, "callee") && !Object.prototype.propertyIsEnumerable.call(t4, "callee") || false;
              }
              (e4 = t3.exports = n3 ? r : o).supported = r, e4.unsupported = o;
            }, function(t3, e4) {
              "use strict";
              var n3 = Object.prototype.hasOwnProperty, r = "~";
              function o() {
              }
              function i(t4, e5, n4) {
                this.fn = t4, this.context = e5, this.once = n4 || false;
              }
              function l() {
                this._events = new o(), this._eventsCount = 0;
              }
              Object.create && (o.prototype = /* @__PURE__ */ Object.create(null), new o().__proto__ || (r = false)), l.prototype.eventNames = function() {
                var t4, e5, o2 = [];
                if (0 === this._eventsCount)
                  return o2;
                for (e5 in t4 = this._events)
                  n3.call(t4, e5) && o2.push(r ? e5.slice(1) : e5);
                return Object.getOwnPropertySymbols ? o2.concat(Object.getOwnPropertySymbols(t4)) : o2;
              }, l.prototype.listeners = function(t4, e5) {
                var n4 = r ? r + t4 : t4, o2 = this._events[n4];
                if (e5)
                  return !!o2;
                if (!o2)
                  return [];
                if (o2.fn)
                  return [o2.fn];
                for (var i2 = 0, l2 = o2.length, a = new Array(l2); i2 < l2; i2++)
                  a[i2] = o2[i2].fn;
                return a;
              }, l.prototype.emit = function(t4, e5, n4, o2, i2, l2) {
                var a = r ? r + t4 : t4;
                if (!this._events[a])
                  return false;
                var s, u, c = this._events[a], f = arguments.length;
                if (c.fn) {
                  switch (c.once && this.removeListener(t4, c.fn, void 0, true), f) {
                    case 1:
                      return c.fn.call(c.context), true;
                    case 2:
                      return c.fn.call(c.context, e5), true;
                    case 3:
                      return c.fn.call(c.context, e5, n4), true;
                    case 4:
                      return c.fn.call(c.context, e5, n4, o2), true;
                    case 5:
                      return c.fn.call(c.context, e5, n4, o2, i2), true;
                    case 6:
                      return c.fn.call(c.context, e5, n4, o2, i2, l2), true;
                  }
                  for (u = 1, s = new Array(f - 1); u < f; u++)
                    s[u - 1] = arguments[u];
                  c.fn.apply(c.context, s);
                } else {
                  var h, p = c.length;
                  for (u = 0; u < p; u++)
                    switch (c[u].once && this.removeListener(t4, c[u].fn, void 0, true), f) {
                      case 1:
                        c[u].fn.call(c[u].context);
                        break;
                      case 2:
                        c[u].fn.call(c[u].context, e5);
                        break;
                      case 3:
                        c[u].fn.call(c[u].context, e5, n4);
                        break;
                      case 4:
                        c[u].fn.call(c[u].context, e5, n4, o2);
                        break;
                      default:
                        if (!s)
                          for (h = 1, s = new Array(f - 1); h < f; h++)
                            s[h - 1] = arguments[h];
                        c[u].fn.apply(c[u].context, s);
                    }
                }
                return true;
              }, l.prototype.on = function(t4, e5, n4) {
                var o2 = new i(e5, n4 || this), l2 = r ? r + t4 : t4;
                return this._events[l2] ? this._events[l2].fn ? this._events[l2] = [this._events[l2], o2] : this._events[l2].push(o2) : (this._events[l2] = o2, this._eventsCount++), this;
              }, l.prototype.once = function(t4, e5, n4) {
                var o2 = new i(e5, n4 || this, true), l2 = r ? r + t4 : t4;
                return this._events[l2] ? this._events[l2].fn ? this._events[l2] = [this._events[l2], o2] : this._events[l2].push(o2) : (this._events[l2] = o2, this._eventsCount++), this;
              }, l.prototype.removeListener = function(t4, e5, n4, i2) {
                var l2 = r ? r + t4 : t4;
                if (!this._events[l2])
                  return this;
                if (!e5)
                  return 0 == --this._eventsCount ? this._events = new o() : delete this._events[l2], this;
                var a = this._events[l2];
                if (a.fn)
                  a.fn !== e5 || i2 && !a.once || n4 && a.context !== n4 || (0 == --this._eventsCount ? this._events = new o() : delete this._events[l2]);
                else {
                  for (var s = 0, u = [], c = a.length; s < c; s++)
                    (a[s].fn !== e5 || i2 && !a[s].once || n4 && a[s].context !== n4) && u.push(a[s]);
                  u.length ? this._events[l2] = 1 === u.length ? u[0] : u : 0 == --this._eventsCount ? this._events = new o() : delete this._events[l2];
                }
                return this;
              }, l.prototype.removeAllListeners = function(t4) {
                var e5;
                return t4 ? (e5 = r ? r + t4 : t4, this._events[e5] && (0 == --this._eventsCount ? this._events = new o() : delete this._events[e5])) : (this._events = new o(), this._eventsCount = 0), this;
              }, l.prototype.off = l.prototype.removeListener, l.prototype.addListener = l.prototype.on, l.prototype.setMaxListeners = function() {
                return this;
              }, l.prefixed = r, l.EventEmitter = l, void 0 !== t3 && (t3.exports = l);
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true }), e4.matchText = e4.matchSpacing = e4.matchNewline = e4.matchBlot = e4.matchAttributor = e4.default = void 0;
              var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
                return typeof t4;
              } : function(t4) {
                return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
              }, o = function(t4, e5) {
                if (Array.isArray(t4))
                  return t4;
                if (Symbol.iterator in Object(t4))
                  return function(t5, e6) {
                    var n4 = [], r2 = true, o2 = false, i2 = void 0;
                    try {
                      for (var l2, a2 = t5[Symbol.iterator](); !(r2 = (l2 = a2.next()).done) && (n4.push(l2.value), !e6 || n4.length !== e6); r2 = true)
                        ;
                    } catch (t6) {
                      o2 = true, i2 = t6;
                    } finally {
                      try {
                        !r2 && a2.return && a2.return();
                      } finally {
                        if (o2)
                          throw i2;
                      }
                    }
                    return n4;
                  }(t4, e5);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              }, i = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), l = m(n3(3)), a = m(n3(2)), s = m(n3(0)), u = m(n3(5)), c = m(n3(10)), f = m(n3(9)), h = n3(36), p = n3(37), d = m(n3(13)), y = n3(26), v = n3(38), b = n3(39), g = n3(40);
              function m(t4) {
                return t4 && t4.__esModule ? t4 : { default: t4 };
              }
              function _(t4, e5, n4) {
                return e5 in t4 ? Object.defineProperty(t4, e5, { value: n4, enumerable: true, configurable: true, writable: true }) : t4[e5] = n4, t4;
              }
              var O = (0, c.default)("quill:clipboard"), w = "__ql-matcher", x = [[Node.TEXT_NODE, M], [Node.TEXT_NODE, L], ["br", function(t4, e5) {
                return T(e5, "\n") || e5.insert("\n"), e5;
              }], [Node.ELEMENT_NODE, L], [Node.ELEMENT_NODE, C], [Node.ELEMENT_NODE, R], [Node.ELEMENT_NODE, q], [Node.ELEMENT_NODE, function(t4, e5) {
                var n4 = {}, r2 = t4.style || {};
                return r2.fontStyle && "italic" === N(t4).fontStyle && (n4.italic = true), r2.fontWeight && (N(t4).fontWeight.startsWith("bold") || parseInt(N(t4).fontWeight) >= 700) && (n4.bold = true), Object.keys(n4).length > 0 && (e5 = j(e5, n4)), parseFloat(r2.textIndent || 0) > 0 && (e5 = new a.default().insert("	").concat(e5)), e5;
              }], ["li", function(t4, e5) {
                var n4 = s.default.query(t4);
                if (null == n4 || "list-item" !== n4.blotName || !T(e5, "\n"))
                  return e5;
                for (var r2 = -1, o2 = t4.parentNode; !o2.classList.contains("ql-clipboard"); )
                  "list" === (s.default.query(o2) || {}).blotName && (r2 += 1), o2 = o2.parentNode;
                return r2 <= 0 ? e5 : e5.compose(new a.default().retain(e5.length() - 1).retain(1, { indent: r2 }));
              }], ["b", S.bind(S, "bold")], ["i", S.bind(S, "italic")], ["style", function() {
                return new a.default();
              }]], E = [h.AlignAttribute, v.DirectionAttribute].reduce(function(t4, e5) {
                return t4[e5.keyName] = e5, t4;
              }, {}), k = [h.AlignStyle, p.BackgroundStyle, y.ColorStyle, v.DirectionStyle, b.FontStyle, g.SizeStyle].reduce(function(t4, e5) {
                return t4[e5.keyName] = e5, t4;
              }, {}), A = function(t4) {
                function e5(t5, n4) {
                  !function(t6, e6) {
                    if (!(t6 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5);
                  var r2 = function(t6, e6) {
                    if (!t6)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e6 || "object" != typeof e6 && "function" != typeof e6 ? t6 : e6;
                  }(this, (e5.__proto__ || Object.getPrototypeOf(e5)).call(this, t5, n4));
                  return r2.quill.root.addEventListener("paste", r2.onPaste.bind(r2)), r2.container = r2.quill.addContainer("ql-clipboard"), r2.container.setAttribute("contenteditable", true), r2.container.setAttribute("tabindex", -1), r2.matchers = [], x.concat(r2.options.matchers).forEach(function(t6) {
                    var e6 = o(t6, 2), i2 = e6[0], l2 = e6[1];
                    (n4.matchVisual || l2 !== R) && r2.addMatcher(i2, l2);
                  }), r2;
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), i(e5, [{ key: "addMatcher", value: function(t5, e6) {
                  this.matchers.push([t5, e6]);
                } }, { key: "convert", value: function(t5) {
                  if ("string" == typeof t5)
                    return this.container.innerHTML = t5.replace(/\>\r?\n +\</g, "><"), this.convert();
                  var e6 = this.quill.getFormat(this.quill.selection.savedRange.index);
                  if (e6[d.default.blotName]) {
                    var n4 = this.container.innerText;
                    return this.container.innerHTML = "", new a.default().insert(n4, _({}, d.default.blotName, e6[d.default.blotName]));
                  }
                  var r2 = this.prepareMatching(), i2 = o(r2, 2), l2 = i2[0], s2 = i2[1], u2 = function t6(e7, n5, r3) {
                    return e7.nodeType === e7.TEXT_NODE ? r3.reduce(function(t7, n6) {
                      return n6(e7, t7);
                    }, new a.default()) : e7.nodeType === e7.ELEMENT_NODE ? [].reduce.call(e7.childNodes || [], function(o2, i3) {
                      var l3 = t6(i3, n5, r3);
                      return i3.nodeType === e7.ELEMENT_NODE && (l3 = n5.reduce(function(t7, e8) {
                        return e8(i3, t7);
                      }, l3), l3 = (i3[w] || []).reduce(function(t7, e8) {
                        return e8(i3, t7);
                      }, l3)), o2.concat(l3);
                    }, new a.default()) : new a.default();
                  }(this.container, l2, s2);
                  return T(u2, "\n") && null == u2.ops[u2.ops.length - 1].attributes && (u2 = u2.compose(new a.default().retain(u2.length() - 1).delete(1))), O.log("convert", this.container.innerHTML, u2), this.container.innerHTML = "", u2;
                } }, { key: "dangerouslyPasteHTML", value: function(t5, e6) {
                  var n4 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.default.sources.API;
                  if ("string" == typeof t5)
                    this.quill.setContents(this.convert(t5), e6), this.quill.setSelection(0, u.default.sources.SILENT);
                  else {
                    var r2 = this.convert(e6);
                    this.quill.updateContents(new a.default().retain(t5).concat(r2), n4), this.quill.setSelection(t5 + r2.length(), u.default.sources.SILENT);
                  }
                } }, { key: "onPaste", value: function(t5) {
                  var e6 = this;
                  if (!t5.defaultPrevented && this.quill.isEnabled()) {
                    var n4 = this.quill.getSelection(), r2 = new a.default().retain(n4.index), o2 = this.quill.scrollingContainer.scrollTop;
                    this.container.focus(), this.quill.selection.update(u.default.sources.SILENT), setTimeout(function() {
                      r2 = r2.concat(e6.convert()).delete(n4.length), e6.quill.updateContents(r2, u.default.sources.USER), e6.quill.setSelection(r2.length() - n4.length, u.default.sources.SILENT), e6.quill.scrollingContainer.scrollTop = o2, e6.quill.focus();
                    }, 1);
                  }
                } }, { key: "prepareMatching", value: function() {
                  var t5 = this, e6 = [], n4 = [];
                  return this.matchers.forEach(function(r2) {
                    var i2 = o(r2, 2), l2 = i2[0], a2 = i2[1];
                    switch (l2) {
                      case Node.TEXT_NODE:
                        n4.push(a2);
                        break;
                      case Node.ELEMENT_NODE:
                        e6.push(a2);
                        break;
                      default:
                        [].forEach.call(t5.container.querySelectorAll(l2), function(t6) {
                          t6[w] = t6[w] || [], t6[w].push(a2);
                        });
                    }
                  }), [e6, n4];
                } }]), e5;
              }(f.default);
              function j(t4, e5, n4) {
                return "object" === (void 0 === e5 ? "undefined" : r(e5)) ? Object.keys(e5).reduce(function(t5, n5) {
                  return j(t5, n5, e5[n5]);
                }, t4) : t4.reduce(function(t5, r2) {
                  return r2.attributes && r2.attributes[e5] ? t5.push(r2) : t5.insert(r2.insert, (0, l.default)({}, _({}, e5, n4), r2.attributes));
                }, new a.default());
              }
              function N(t4) {
                return t4.nodeType !== Node.ELEMENT_NODE ? {} : t4["__ql-computed-style"] || (t4["__ql-computed-style"] = window.getComputedStyle(t4));
              }
              function T(t4, e5) {
                for (var n4 = "", r2 = t4.ops.length - 1; r2 >= 0 && n4.length < e5.length; --r2) {
                  var o2 = t4.ops[r2];
                  if ("string" != typeof o2.insert)
                    break;
                  n4 = o2.insert + n4;
                }
                return n4.slice(-1 * e5.length) === e5;
              }
              function P(t4) {
                if (0 === t4.childNodes.length)
                  return false;
                var e5 = N(t4);
                return ["block", "list-item"].indexOf(e5.display) > -1;
              }
              function S(t4, e5, n4) {
                return j(n4, t4, true);
              }
              function q(t4, e5) {
                var n4 = s.default.Attributor.Attribute.keys(t4), r2 = s.default.Attributor.Class.keys(t4), o2 = s.default.Attributor.Style.keys(t4), i2 = {};
                return n4.concat(r2).concat(o2).forEach(function(e6) {
                  var n5 = s.default.query(e6, s.default.Scope.ATTRIBUTE);
                  null != n5 && (i2[n5.attrName] = n5.value(t4), i2[n5.attrName]) || (null == (n5 = E[e6]) || n5.attrName !== e6 && n5.keyName !== e6 || (i2[n5.attrName] = n5.value(t4) || void 0), null == (n5 = k[e6]) || n5.attrName !== e6 && n5.keyName !== e6 || (n5 = k[e6], i2[n5.attrName] = n5.value(t4) || void 0));
                }), Object.keys(i2).length > 0 && (e5 = j(e5, i2)), e5;
              }
              function C(t4, e5) {
                var n4 = s.default.query(t4);
                if (null == n4)
                  return e5;
                if (n4.prototype instanceof s.default.Embed) {
                  var r2 = {}, o2 = n4.value(t4);
                  null != o2 && (r2[n4.blotName] = o2, e5 = new a.default().insert(r2, n4.formats(t4)));
                } else
                  "function" == typeof n4.formats && (e5 = j(e5, n4.blotName, n4.formats(t4)));
                return e5;
              }
              function L(t4, e5) {
                return T(e5, "\n") || (P(t4) || e5.length() > 0 && t4.nextSibling && P(t4.nextSibling)) && e5.insert("\n"), e5;
              }
              function R(t4, e5) {
                if (P(t4) && null != t4.nextElementSibling && !T(e5, "\n\n")) {
                  var n4 = t4.offsetHeight + parseFloat(N(t4).marginTop) + parseFloat(N(t4).marginBottom);
                  t4.nextElementSibling.offsetTop > t4.offsetTop + 1.5 * n4 && e5.insert("\n");
                }
                return e5;
              }
              function M(t4, e5) {
                var n4 = t4.data;
                if ("O:P" === t4.parentNode.tagName)
                  return e5.insert(n4.trim());
                if (0 === n4.trim().length && t4.parentNode.classList.contains("ql-clipboard"))
                  return e5;
                if (!N(t4.parentNode).whiteSpace.startsWith("pre")) {
                  var r2 = function(t5, e6) {
                    return (e6 = e6.replace(/[^\u00a0]/g, "")).length < 1 && t5 ? " " : e6;
                  };
                  n4 = (n4 = n4.replace(/\r\n/g, " ").replace(/\n/g, " ")).replace(/\s\s+/g, r2.bind(r2, true)), (null == t4.previousSibling && P(t4.parentNode) || null != t4.previousSibling && P(t4.previousSibling)) && (n4 = n4.replace(/^\s+/, r2.bind(r2, false))), (null == t4.nextSibling && P(t4.parentNode) || null != t4.nextSibling && P(t4.nextSibling)) && (n4 = n4.replace(/\s+$/, r2.bind(r2, false)));
                }
                return e5.insert(n4);
              }
              A.DEFAULTS = { matchers: [], matchVisual: true }, e4.default = A, e4.matchAttributor = q, e4.matchBlot = C, e4.matchNewline = L, e4.matchSpacing = R, e4.matchText = M;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r, o = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), i = function t4(e5, n4, r2) {
                null === e5 && (e5 = Function.prototype);
                var o2 = Object.getOwnPropertyDescriptor(e5, n4);
                if (void 0 === o2) {
                  var i2 = Object.getPrototypeOf(e5);
                  return null === i2 ? void 0 : t4(i2, n4, r2);
                }
                if ("value" in o2)
                  return o2.value;
                var l2 = o2.get;
                return void 0 !== l2 ? l2.call(r2) : void 0;
              }, l = n3(6), a = function(t4) {
                function e5() {
                  return function(t5, e6) {
                    if (!(t5 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5), function(t5, e6) {
                    if (!t5)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e6 || "object" != typeof e6 && "function" != typeof e6 ? t5 : e6;
                  }(this, (e5.__proto__ || Object.getPrototypeOf(e5)).apply(this, arguments));
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), o(e5, [{ key: "optimize", value: function(t5) {
                  i(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "optimize", this).call(this, t5), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
                } }], [{ key: "create", value: function() {
                  return i(e5.__proto__ || Object.getPrototypeOf(e5), "create", this).call(this);
                } }, { key: "formats", value: function() {
                  return true;
                } }]), e5;
              }(((r = l) && r.__esModule ? r : { default: r }).default);
              a.blotName = "bold", a.tagName = ["STRONG", "B"], e4.default = a;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true }), e4.addControls = e4.default = void 0;
              var r = function(t4, e5) {
                if (Array.isArray(t4))
                  return t4;
                if (Symbol.iterator in Object(t4))
                  return function(t5, e6) {
                    var n4 = [], r2 = true, o2 = false, i2 = void 0;
                    try {
                      for (var l2, a2 = t5[Symbol.iterator](); !(r2 = (l2 = a2.next()).done) && (n4.push(l2.value), !e6 || n4.length !== e6); r2 = true)
                        ;
                    } catch (t6) {
                      o2 = true, i2 = t6;
                    } finally {
                      try {
                        !r2 && a2.return && a2.return();
                      } finally {
                        if (o2)
                          throw i2;
                      }
                    }
                    return n4;
                  }(t4, e5);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              }, o = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), i = c(n3(2)), l = c(n3(0)), a = c(n3(5)), s = c(n3(10)), u = c(n3(9));
              function c(t4) {
                return t4 && t4.__esModule ? t4 : { default: t4 };
              }
              function f(t4, e5) {
                if (!t4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e5 || "object" != typeof e5 && "function" != typeof e5 ? t4 : e5;
              }
              var h = (0, s.default)("quill:toolbar"), p = function(t4) {
                function e5(t5, n4) {
                  !function(t6, e6) {
                    if (!(t6 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5);
                  var o2, i2 = f(this, (e5.__proto__ || Object.getPrototypeOf(e5)).call(this, t5, n4));
                  if (Array.isArray(i2.options.container)) {
                    var l2 = document.createElement("div");
                    y(l2, i2.options.container), t5.container.parentNode.insertBefore(l2, t5.container), i2.container = l2;
                  } else
                    "string" == typeof i2.options.container ? i2.container = document.querySelector(i2.options.container) : i2.container = i2.options.container;
                  return i2.container instanceof HTMLElement ? (i2.container.classList.add("ql-toolbar"), i2.controls = [], i2.handlers = {}, Object.keys(i2.options.handlers).forEach(function(t6) {
                    i2.addHandler(t6, i2.options.handlers[t6]);
                  }), [].forEach.call(i2.container.querySelectorAll("button, select"), function(t6) {
                    i2.attach(t6);
                  }), i2.quill.on(a.default.events.EDITOR_CHANGE, function(t6, e6) {
                    t6 === a.default.events.SELECTION_CHANGE && i2.update(e6);
                  }), i2.quill.on(a.default.events.SCROLL_OPTIMIZE, function() {
                    var t6 = i2.quill.selection.getRange(), e6 = r(t6, 1)[0];
                    i2.update(e6);
                  }), i2) : (o2 = h.error("Container required for toolbar", i2.options), f(i2, o2));
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), o(e5, [{ key: "addHandler", value: function(t5, e6) {
                  this.handlers[t5] = e6;
                } }, { key: "attach", value: function(t5) {
                  var e6 = this, n4 = [].find.call(t5.classList, function(t6) {
                    return 0 === t6.indexOf("ql-");
                  });
                  if (n4) {
                    if (n4 = n4.slice("ql-".length), "BUTTON" === t5.tagName && t5.setAttribute("type", "button"), null == this.handlers[n4]) {
                      if (null != this.quill.scroll.whitelist && null == this.quill.scroll.whitelist[n4])
                        return void h.warn("ignoring attaching to disabled format", n4, t5);
                      if (null == l.default.query(n4))
                        return void h.warn("ignoring attaching to nonexistent format", n4, t5);
                    }
                    var o2 = "SELECT" === t5.tagName ? "change" : "click";
                    t5.addEventListener(o2, function(o3) {
                      var s2 = void 0;
                      if ("SELECT" === t5.tagName) {
                        if (t5.selectedIndex < 0)
                          return;
                        var u2 = t5.options[t5.selectedIndex];
                        s2 = !u2.hasAttribute("selected") && (u2.value || false);
                      } else
                        s2 = !t5.classList.contains("ql-active") && (t5.value || !t5.hasAttribute("value")), o3.preventDefault();
                      e6.quill.focus();
                      var c2 = e6.quill.selection.getRange(), f2 = r(c2, 1)[0];
                      if (null != e6.handlers[n4])
                        e6.handlers[n4].call(e6, s2);
                      else if (l.default.query(n4).prototype instanceof l.default.Embed) {
                        if (!(s2 = prompt("Enter " + n4)))
                          return;
                        e6.quill.updateContents(new i.default().retain(f2.index).delete(f2.length).insert(function(t6, e7, n5) {
                          return e7 in t6 ? Object.defineProperty(t6, e7, { value: n5, enumerable: true, configurable: true, writable: true }) : t6[e7] = n5, t6;
                        }({}, n4, s2)), a.default.sources.USER);
                      } else
                        e6.quill.format(n4, s2, a.default.sources.USER);
                      e6.update(f2);
                    }), this.controls.push([n4, t5]);
                  }
                } }, { key: "update", value: function(t5) {
                  var e6 = null == t5 ? {} : this.quill.getFormat(t5);
                  this.controls.forEach(function(n4) {
                    var o2 = r(n4, 2), i2 = o2[0], l2 = o2[1];
                    if ("SELECT" === l2.tagName) {
                      var a2 = void 0;
                      if (null == t5)
                        a2 = null;
                      else if (null == e6[i2])
                        a2 = l2.querySelector("option[selected]");
                      else if (!Array.isArray(e6[i2])) {
                        var s2 = e6[i2];
                        "string" == typeof s2 && (s2 = s2.replace(/\"/g, '\\"')), a2 = l2.querySelector('option[value="' + s2 + '"]');
                      }
                      null == a2 ? (l2.value = "", l2.selectedIndex = -1) : a2.selected = true;
                    } else if (null == t5)
                      l2.classList.remove("ql-active");
                    else if (l2.hasAttribute("value")) {
                      var u2 = e6[i2] === l2.getAttribute("value") || null != e6[i2] && e6[i2].toString() === l2.getAttribute("value") || null == e6[i2] && !l2.getAttribute("value");
                      l2.classList.toggle("ql-active", u2);
                    } else
                      l2.classList.toggle("ql-active", null != e6[i2]);
                  });
                } }]), e5;
              }(u.default);
              function d(t4, e5, n4) {
                var r2 = document.createElement("button");
                r2.setAttribute("type", "button"), r2.classList.add("ql-" + e5), null != n4 && (r2.value = n4), t4.appendChild(r2);
              }
              function y(t4, e5) {
                Array.isArray(e5[0]) || (e5 = [e5]), e5.forEach(function(e6) {
                  var n4 = document.createElement("span");
                  n4.classList.add("ql-formats"), e6.forEach(function(t5) {
                    if ("string" == typeof t5)
                      d(n4, t5);
                    else {
                      var e7 = Object.keys(t5)[0], r2 = t5[e7];
                      Array.isArray(r2) ? function(t6, e8, n5) {
                        var r3 = document.createElement("select");
                        r3.classList.add("ql-" + e8), n5.forEach(function(t7) {
                          var e9 = document.createElement("option");
                          false !== t7 ? e9.setAttribute("value", t7) : e9.setAttribute("selected", "selected"), r3.appendChild(e9);
                        }), t6.appendChild(r3);
                      }(n4, e7, r2) : d(n4, e7, r2);
                    }
                  }), t4.appendChild(n4);
                });
              }
              p.DEFAULTS = {}, p.DEFAULTS = { container: null, handlers: { clean: function() {
                var t4 = this, e5 = this.quill.getSelection();
                if (null != e5)
                  if (0 == e5.length) {
                    var n4 = this.quill.getFormat();
                    Object.keys(n4).forEach(function(e6) {
                      null != l.default.query(e6, l.default.Scope.INLINE) && t4.quill.format(e6, false);
                    });
                  } else
                    this.quill.removeFormat(e5, a.default.sources.USER);
              }, direction: function(t4) {
                var e5 = this.quill.getFormat().align;
                "rtl" === t4 && null == e5 ? this.quill.format("align", "right", a.default.sources.USER) : t4 || "right" !== e5 || this.quill.format("align", false, a.default.sources.USER), this.quill.format("direction", t4, a.default.sources.USER);
              }, indent: function(t4) {
                var e5 = this.quill.getSelection(), n4 = this.quill.getFormat(e5), r2 = parseInt(n4.indent || 0);
                if ("+1" === t4 || "-1" === t4) {
                  var o2 = "+1" === t4 ? 1 : -1;
                  "rtl" === n4.direction && (o2 *= -1), this.quill.format("indent", r2 + o2, a.default.sources.USER);
                }
              }, link: function(t4) {
                true === t4 && (t4 = prompt("Enter link URL:")), this.quill.format("link", t4, a.default.sources.USER);
              }, list: function(t4) {
                var e5 = this.quill.getSelection(), n4 = this.quill.getFormat(e5);
                "check" === t4 ? "checked" === n4.list || "unchecked" === n4.list ? this.quill.format("list", false, a.default.sources.USER) : this.quill.format("list", "unchecked", a.default.sources.USER) : this.quill.format("list", t4, a.default.sources.USER);
              } } }, e4.default = p, e4.addControls = y;
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>';
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r, o = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), i = function t4(e5, n4, r2) {
                null === e5 && (e5 = Function.prototype);
                var o2 = Object.getOwnPropertyDescriptor(e5, n4);
                if (void 0 === o2) {
                  var i2 = Object.getPrototypeOf(e5);
                  return null === i2 ? void 0 : t4(i2, n4, r2);
                }
                if ("value" in o2)
                  return o2.value;
                var l2 = o2.get;
                return void 0 !== l2 ? l2.call(r2) : void 0;
              }, l = n3(28), a = function(t4) {
                function e5(t5, n4) {
                  !function(t6, e6) {
                    if (!(t6 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5);
                  var r2 = function(t6, e6) {
                    if (!t6)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e6 || "object" != typeof e6 && "function" != typeof e6 ? t6 : e6;
                  }(this, (e5.__proto__ || Object.getPrototypeOf(e5)).call(this, t5));
                  return r2.label.innerHTML = n4, r2.container.classList.add("ql-color-picker"), [].slice.call(r2.container.querySelectorAll(".ql-picker-item"), 0, 7).forEach(function(t6) {
                    t6.classList.add("ql-primary");
                  }), r2;
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), o(e5, [{ key: "buildItem", value: function(t5) {
                  var n4 = i(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "buildItem", this).call(this, t5);
                  return n4.style.backgroundColor = t5.getAttribute("value") || "", n4;
                } }, { key: "selectItem", value: function(t5, n4) {
                  i(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "selectItem", this).call(this, t5, n4);
                  var r2 = this.label.querySelector(".ql-color-label"), o2 = t5 && t5.getAttribute("data-value") || "";
                  r2 && ("line" === r2.tagName ? r2.style.stroke = o2 : r2.style.fill = o2);
                } }]), e5;
              }(((r = l) && r.__esModule ? r : { default: r }).default);
              e4.default = a;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r, o = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), i = n3(28), l = function(t4) {
                function e5(t5, n4) {
                  !function(t6, e6) {
                    if (!(t6 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5);
                  var r2 = function(t6, e6) {
                    if (!t6)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e6 || "object" != typeof e6 && "function" != typeof e6 ? t6 : e6;
                  }(this, (e5.__proto__ || Object.getPrototypeOf(e5)).call(this, t5));
                  return r2.container.classList.add("ql-icon-picker"), [].forEach.call(r2.container.querySelectorAll(".ql-picker-item"), function(t6) {
                    t6.innerHTML = n4[t6.getAttribute("data-value") || ""];
                  }), r2.defaultItem = r2.container.querySelector(".ql-selected"), r2.selectItem(r2.defaultItem), r2;
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), o(e5, [{ key: "selectItem", value: function(t5, n4) {
                  (function t6(e6, n5, r2) {
                    null === e6 && (e6 = Function.prototype);
                    var o2 = Object.getOwnPropertyDescriptor(e6, n5);
                    if (void 0 === o2) {
                      var i2 = Object.getPrototypeOf(e6);
                      return null === i2 ? void 0 : t6(i2, n5, r2);
                    }
                    if ("value" in o2)
                      return o2.value;
                    var l2 = o2.get;
                    return void 0 !== l2 ? l2.call(r2) : void 0;
                  })(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "selectItem", this).call(this, t5, n4), t5 = t5 || this.defaultItem, this.label.innerHTML = t5.innerHTML;
                } }]), e5;
              }(((r = i) && r.__esModule ? r : { default: r }).default);
              e4.default = l;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), o = function() {
                function t4(e5, n4) {
                  var r2 = this;
                  !function(t5, e6) {
                    if (!(t5 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, t4), this.quill = e5, this.boundsContainer = n4 || document.body, this.root = e5.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, this.quill.root === this.quill.scrollingContainer && this.quill.root.addEventListener("scroll", function() {
                    r2.root.style.marginTop = -1 * r2.quill.root.scrollTop + "px";
                  }), this.hide();
                }
                return r(t4, [{ key: "hide", value: function() {
                  this.root.classList.add("ql-hidden");
                } }, { key: "position", value: function(t5) {
                  var e5 = t5.left + t5.width / 2 - this.root.offsetWidth / 2, n4 = t5.bottom + this.quill.root.scrollTop;
                  this.root.style.left = e5 + "px", this.root.style.top = n4 + "px", this.root.classList.remove("ql-flip");
                  var r2 = this.boundsContainer.getBoundingClientRect(), o2 = this.root.getBoundingClientRect(), i = 0;
                  if (o2.right > r2.right && (i = r2.right - o2.right, this.root.style.left = e5 + i + "px"), o2.left < r2.left && (i = r2.left - o2.left, this.root.style.left = e5 + i + "px"), o2.bottom > r2.bottom) {
                    var l = o2.bottom - o2.top, a = t5.bottom - t5.top + l;
                    this.root.style.top = n4 - a + "px", this.root.classList.add("ql-flip");
                  }
                  return i;
                } }, { key: "show", value: function() {
                  this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
                } }]), t4;
              }();
              e4.default = o;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r = function(t4, e5) {
                if (Array.isArray(t4))
                  return t4;
                if (Symbol.iterator in Object(t4))
                  return function(t5, e6) {
                    var n4 = [], r2 = true, o2 = false, i2 = void 0;
                    try {
                      for (var l2, a2 = t5[Symbol.iterator](); !(r2 = (l2 = a2.next()).done) && (n4.push(l2.value), !e6 || n4.length !== e6); r2 = true)
                        ;
                    } catch (t6) {
                      o2 = true, i2 = t6;
                    } finally {
                      try {
                        !r2 && a2.return && a2.return();
                      } finally {
                        if (o2)
                          throw i2;
                      }
                    }
                    return n4;
                  }(t4, e5);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              }, o = function t4(e5, n4, r2) {
                null === e5 && (e5 = Function.prototype);
                var o2 = Object.getOwnPropertyDescriptor(e5, n4);
                if (void 0 === o2) {
                  var i2 = Object.getPrototypeOf(e5);
                  return null === i2 ? void 0 : t4(i2, n4, r2);
                }
                if ("value" in o2)
                  return o2.value;
                var l2 = o2.get;
                return void 0 !== l2 ? l2.call(r2) : void 0;
              }, i = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), l = p(n3(3)), a = p(n3(8)), s = n3(43), u = p(s), c = p(n3(27)), f = n3(15), h = p(n3(41));
              function p(t4) {
                return t4 && t4.__esModule ? t4 : { default: t4 };
              }
              function d(t4, e5) {
                if (!(t4 instanceof e5))
                  throw new TypeError("Cannot call a class as a function");
              }
              function y(t4, e5) {
                if (!t4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e5 || "object" != typeof e5 && "function" != typeof e5 ? t4 : e5;
              }
              function v(t4, e5) {
                if ("function" != typeof e5 && null !== e5)
                  throw new TypeError("Super expression must either be null or a function, not " + typeof e5);
                t4.prototype = Object.create(e5 && e5.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e5 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e5) : t4.__proto__ = e5);
              }
              var b = [[{ header: ["1", "2", "3", false] }], ["bold", "italic", "underline", "link"], [{ list: "ordered" }, { list: "bullet" }], ["clean"]], g = function(t4) {
                function e5(t5, n4) {
                  d(this, e5), null != n4.modules.toolbar && null == n4.modules.toolbar.container && (n4.modules.toolbar.container = b);
                  var r2 = y(this, (e5.__proto__ || Object.getPrototypeOf(e5)).call(this, t5, n4));
                  return r2.quill.container.classList.add("ql-snow"), r2;
                }
                return v(e5, t4), i(e5, [{ key: "extendToolbar", value: function(t5) {
                  t5.container.classList.add("ql-snow"), this.buildButtons([].slice.call(t5.container.querySelectorAll("button")), h.default), this.buildPickers([].slice.call(t5.container.querySelectorAll("select")), h.default), this.tooltip = new m(this.quill, this.options.bounds), t5.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({ key: "K", shortKey: true }, function(e6, n4) {
                    t5.handlers.link.call(t5, !n4.format.link);
                  });
                } }]), e5;
              }(u.default);
              g.DEFAULTS = (0, l.default)(true, {}, u.default.DEFAULTS, { modules: { toolbar: { handlers: { link: function(t4) {
                if (t4) {
                  var e5 = this.quill.getSelection();
                  if (null == e5 || 0 == e5.length)
                    return;
                  var n4 = this.quill.getText(e5);
                  /^\S+@\S+\.\S+$/.test(n4) && 0 !== n4.indexOf("mailto:") && (n4 = "mailto:" + n4), this.quill.theme.tooltip.edit("link", n4);
                } else
                  this.quill.format("link", false);
              } } } } });
              var m = function(t4) {
                function e5(t5, n4) {
                  d(this, e5);
                  var r2 = y(this, (e5.__proto__ || Object.getPrototypeOf(e5)).call(this, t5, n4));
                  return r2.preview = r2.root.querySelector("a.ql-preview"), r2;
                }
                return v(e5, t4), i(e5, [{ key: "listen", value: function() {
                  var t5 = this;
                  o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "listen", this).call(this), this.root.querySelector("a.ql-action").addEventListener("click", function(e6) {
                    t5.root.classList.contains("ql-editing") ? t5.save() : t5.edit("link", t5.preview.textContent), e6.preventDefault();
                  }), this.root.querySelector("a.ql-remove").addEventListener("click", function(e6) {
                    if (null != t5.linkRange) {
                      var n4 = t5.linkRange;
                      t5.restoreFocus(), t5.quill.formatText(n4, "link", false, a.default.sources.USER), delete t5.linkRange;
                    }
                    e6.preventDefault(), t5.hide();
                  }), this.quill.on(a.default.events.SELECTION_CHANGE, function(e6, n4, o2) {
                    if (null != e6) {
                      if (0 === e6.length && o2 === a.default.sources.USER) {
                        var i2 = t5.quill.scroll.descendant(c.default, e6.index), l2 = r(i2, 2), s2 = l2[0], u2 = l2[1];
                        if (null != s2) {
                          t5.linkRange = new f.Range(e6.index - u2, s2.length());
                          var h2 = c.default.formats(s2.domNode);
                          return t5.preview.textContent = h2, t5.preview.setAttribute("href", h2), t5.show(), void t5.position(t5.quill.getBounds(t5.linkRange));
                        }
                      } else
                        delete t5.linkRange;
                      t5.hide();
                    }
                  });
                } }, { key: "show", value: function() {
                  o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "show", this).call(this), this.root.removeAttribute("data-mode");
                } }]), e5;
              }(s.BaseTooltip);
              m.TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""), e4.default = g;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r = R(n3(29)), o = n3(36), i = n3(38), l = n3(64), a = R(n3(65)), s = R(n3(66)), u = n3(67), c = R(u), f = n3(37), h = n3(26), p = n3(39), d = n3(40), y = R(n3(56)), v = R(n3(68)), b = R(n3(27)), g = R(n3(69)), m = R(n3(70)), _ = R(n3(71)), O = R(n3(72)), w = R(n3(73)), x = n3(13), E = R(x), k = R(n3(74)), A = R(n3(75)), j = R(n3(57)), N = R(n3(41)), T = R(n3(28)), P = R(n3(59)), S = R(n3(60)), q = R(n3(61)), C = R(n3(108)), L = R(n3(62));
              function R(t4) {
                return t4 && t4.__esModule ? t4 : { default: t4 };
              }
              r.default.register({ "attributors/attribute/direction": i.DirectionAttribute, "attributors/class/align": o.AlignClass, "attributors/class/background": f.BackgroundClass, "attributors/class/color": h.ColorClass, "attributors/class/direction": i.DirectionClass, "attributors/class/font": p.FontClass, "attributors/class/size": d.SizeClass, "attributors/style/align": o.AlignStyle, "attributors/style/background": f.BackgroundStyle, "attributors/style/color": h.ColorStyle, "attributors/style/direction": i.DirectionStyle, "attributors/style/font": p.FontStyle, "attributors/style/size": d.SizeStyle }, true), r.default.register({ "formats/align": o.AlignClass, "formats/direction": i.DirectionClass, "formats/indent": l.IndentClass, "formats/background": f.BackgroundStyle, "formats/color": h.ColorStyle, "formats/font": p.FontClass, "formats/size": d.SizeClass, "formats/blockquote": a.default, "formats/code-block": E.default, "formats/header": s.default, "formats/list": c.default, "formats/bold": y.default, "formats/code": x.Code, "formats/italic": v.default, "formats/link": b.default, "formats/script": g.default, "formats/strike": m.default, "formats/underline": _.default, "formats/image": O.default, "formats/video": w.default, "formats/list/item": u.ListItem, "modules/formula": k.default, "modules/syntax": A.default, "modules/toolbar": j.default, "themes/bubble": C.default, "themes/snow": L.default, "ui/icons": N.default, "ui/picker": T.default, "ui/icon-picker": S.default, "ui/color-picker": P.default, "ui/tooltip": q.default }, true), e4.default = r.default;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true }), e4.IndentClass = void 0;
              var r, o = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), i = function t4(e5, n4, r2) {
                null === e5 && (e5 = Function.prototype);
                var o2 = Object.getOwnPropertyDescriptor(e5, n4);
                if (void 0 === o2) {
                  var i2 = Object.getPrototypeOf(e5);
                  return null === i2 ? void 0 : t4(i2, n4, r2);
                }
                if ("value" in o2)
                  return o2.value;
                var l2 = o2.get;
                return void 0 !== l2 ? l2.call(r2) : void 0;
              }, l = n3(0), a = (r = l) && r.__esModule ? r : { default: r }, s = new (function(t4) {
                function e5() {
                  return function(t5, e6) {
                    if (!(t5 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5), function(t5, e6) {
                    if (!t5)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e6 || "object" != typeof e6 && "function" != typeof e6 ? t5 : e6;
                  }(this, (e5.__proto__ || Object.getPrototypeOf(e5)).apply(this, arguments));
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), o(e5, [{ key: "add", value: function(t5, n4) {
                  if ("+1" === n4 || "-1" === n4) {
                    var r2 = this.value(t5) || 0;
                    n4 = "+1" === n4 ? r2 + 1 : r2 - 1;
                  }
                  return 0 === n4 ? (this.remove(t5), true) : i(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "add", this).call(this, t5, n4);
                } }, { key: "canAdd", value: function(t5, n4) {
                  return i(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "canAdd", this).call(this, t5, n4) || i(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "canAdd", this).call(this, t5, parseInt(n4));
                } }, { key: "value", value: function(t5) {
                  return parseInt(i(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "value", this).call(this, t5)) || void 0;
                } }]), e5;
              }(a.default.Attributor.Class))("indent", "ql-indent", { scope: a.default.Scope.BLOCK, whitelist: [1, 2, 3, 4, 5, 6, 7, 8] });
              e4.IndentClass = s;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r, o = n3(4), i = function(t4) {
                function e5() {
                  return function(t5, e6) {
                    if (!(t5 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5), function(t5, e6) {
                    if (!t5)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e6 || "object" != typeof e6 && "function" != typeof e6 ? t5 : e6;
                  }(this, (e5.__proto__ || Object.getPrototypeOf(e5)).apply(this, arguments));
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), e5;
              }(((r = o) && r.__esModule ? r : { default: r }).default);
              i.blotName = "blockquote", i.tagName = "blockquote", e4.default = i;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r, o = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), i = n3(4), l = function(t4) {
                function e5() {
                  return function(t5, e6) {
                    if (!(t5 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5), function(t5, e6) {
                    if (!t5)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e6 || "object" != typeof e6 && "function" != typeof e6 ? t5 : e6;
                  }(this, (e5.__proto__ || Object.getPrototypeOf(e5)).apply(this, arguments));
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), o(e5, null, [{ key: "formats", value: function(t5) {
                  return this.tagName.indexOf(t5.tagName) + 1;
                } }]), e5;
              }(((r = i) && r.__esModule ? r : { default: r }).default);
              l.blotName = "header", l.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"], e4.default = l;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true }), e4.default = e4.ListItem = void 0;
              var r = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), o = function t4(e5, n4, r2) {
                null === e5 && (e5 = Function.prototype);
                var o2 = Object.getOwnPropertyDescriptor(e5, n4);
                if (void 0 === o2) {
                  var i2 = Object.getPrototypeOf(e5);
                  return null === i2 ? void 0 : t4(i2, n4, r2);
                }
                if ("value" in o2)
                  return o2.value;
                var l2 = o2.get;
                return void 0 !== l2 ? l2.call(r2) : void 0;
              }, i = s(n3(0)), l = s(n3(4)), a = s(n3(25));
              function s(t4) {
                return t4 && t4.__esModule ? t4 : { default: t4 };
              }
              function u(t4, e5) {
                if (!(t4 instanceof e5))
                  throw new TypeError("Cannot call a class as a function");
              }
              function c(t4, e5) {
                if (!t4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e5 || "object" != typeof e5 && "function" != typeof e5 ? t4 : e5;
              }
              function f(t4, e5) {
                if ("function" != typeof e5 && null !== e5)
                  throw new TypeError("Super expression must either be null or a function, not " + typeof e5);
                t4.prototype = Object.create(e5 && e5.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e5 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e5) : t4.__proto__ = e5);
              }
              var h = function(t4) {
                function e5() {
                  return u(this, e5), c(this, (e5.__proto__ || Object.getPrototypeOf(e5)).apply(this, arguments));
                }
                return f(e5, t4), r(e5, [{ key: "format", value: function(t5, n4) {
                  t5 !== p.blotName || n4 ? o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "format", this).call(this, t5, n4) : this.replaceWith(i.default.create(this.statics.scope));
                } }, { key: "remove", value: function() {
                  null == this.prev && null == this.next ? this.parent.remove() : o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "remove", this).call(this);
                } }, { key: "replaceWith", value: function(t5, n4) {
                  return this.parent.isolate(this.offset(this.parent), this.length()), t5 === this.parent.statics.blotName ? (this.parent.replaceWith(t5, n4), this) : (this.parent.unwrap(), o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "replaceWith", this).call(this, t5, n4));
                } }], [{ key: "formats", value: function(t5) {
                  return t5.tagName === this.tagName ? void 0 : o(e5.__proto__ || Object.getPrototypeOf(e5), "formats", this).call(this, t5);
                } }]), e5;
              }(l.default);
              h.blotName = "list-item", h.tagName = "LI";
              var p = function(t4) {
                function e5(t5) {
                  u(this, e5);
                  var n4 = c(this, (e5.__proto__ || Object.getPrototypeOf(e5)).call(this, t5)), r2 = function(e6) {
                    if (e6.target.parentNode === t5) {
                      var r3 = n4.statics.formats(t5), o2 = i.default.find(e6.target);
                      "checked" === r3 ? o2.format("list", "unchecked") : "unchecked" === r3 && o2.format("list", "checked");
                    }
                  };
                  return t5.addEventListener("touchstart", r2), t5.addEventListener("mousedown", r2), n4;
                }
                return f(e5, t4), r(e5, null, [{ key: "create", value: function(t5) {
                  var n4 = "ordered" === t5 ? "OL" : "UL", r2 = o(e5.__proto__ || Object.getPrototypeOf(e5), "create", this).call(this, n4);
                  return "checked" !== t5 && "unchecked" !== t5 || r2.setAttribute("data-checked", "checked" === t5), r2;
                } }, { key: "formats", value: function(t5) {
                  return "OL" === t5.tagName ? "ordered" : "UL" === t5.tagName ? t5.hasAttribute("data-checked") ? "true" === t5.getAttribute("data-checked") ? "checked" : "unchecked" : "bullet" : void 0;
                } }]), r(e5, [{ key: "format", value: function(t5, e6) {
                  this.children.length > 0 && this.children.tail.format(t5, e6);
                } }, { key: "formats", value: function() {
                  return t5 = {}, e6 = this.statics.blotName, n4 = this.statics.formats(this.domNode), e6 in t5 ? Object.defineProperty(t5, e6, { value: n4, enumerable: true, configurable: true, writable: true }) : t5[e6] = n4, t5;
                  var t5, e6, n4;
                } }, { key: "insertBefore", value: function(t5, n4) {
                  if (t5 instanceof h)
                    o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "insertBefore", this).call(this, t5, n4);
                  else {
                    var r2 = null == n4 ? this.length() : n4.offset(this), i2 = this.split(r2);
                    i2.parent.insertBefore(t5, i2);
                  }
                } }, { key: "optimize", value: function(t5) {
                  o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "optimize", this).call(this, t5);
                  var n4 = this.next;
                  null != n4 && n4.prev === this && n4.statics.blotName === this.statics.blotName && n4.domNode.tagName === this.domNode.tagName && n4.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked") && (n4.moveChildren(this), n4.remove());
                } }, { key: "replace", value: function(t5) {
                  if (t5.statics.blotName !== this.statics.blotName) {
                    var n4 = i.default.create(this.statics.defaultChild);
                    t5.moveChildren(n4), this.appendChild(n4);
                  }
                  o(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "replace", this).call(this, t5);
                } }]), e5;
              }(a.default);
              p.blotName = "list", p.scope = i.default.Scope.BLOCK_BLOT, p.tagName = ["OL", "UL"], p.defaultChild = "list-item", p.allowedChildren = [h], e4.ListItem = h, e4.default = p;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r, o = n3(56), i = function(t4) {
                function e5() {
                  return function(t5, e6) {
                    if (!(t5 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5), function(t5, e6) {
                    if (!t5)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e6 || "object" != typeof e6 && "function" != typeof e6 ? t5 : e6;
                  }(this, (e5.__proto__ || Object.getPrototypeOf(e5)).apply(this, arguments));
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), e5;
              }(((r = o) && r.__esModule ? r : { default: r }).default);
              i.blotName = "italic", i.tagName = ["EM", "I"], e4.default = i;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r, o = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), i = n3(6), l = function(t4) {
                function e5() {
                  return function(t5, e6) {
                    if (!(t5 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5), function(t5, e6) {
                    if (!t5)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e6 || "object" != typeof e6 && "function" != typeof e6 ? t5 : e6;
                  }(this, (e5.__proto__ || Object.getPrototypeOf(e5)).apply(this, arguments));
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), o(e5, null, [{ key: "create", value: function(t5) {
                  return "super" === t5 ? document.createElement("sup") : "sub" === t5 ? document.createElement("sub") : function t6(e6, n4, r2) {
                    null === e6 && (e6 = Function.prototype);
                    var o2 = Object.getOwnPropertyDescriptor(e6, n4);
                    if (void 0 === o2) {
                      var i2 = Object.getPrototypeOf(e6);
                      return null === i2 ? void 0 : t6(i2, n4, r2);
                    }
                    if ("value" in o2)
                      return o2.value;
                    var l2 = o2.get;
                    return void 0 !== l2 ? l2.call(r2) : void 0;
                  }(e5.__proto__ || Object.getPrototypeOf(e5), "create", this).call(this, t5);
                } }, { key: "formats", value: function(t5) {
                  return "SUB" === t5.tagName ? "sub" : "SUP" === t5.tagName ? "super" : void 0;
                } }]), e5;
              }(((r = i) && r.__esModule ? r : { default: r }).default);
              l.blotName = "script", l.tagName = ["SUB", "SUP"], e4.default = l;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r, o = n3(6), i = function(t4) {
                function e5() {
                  return function(t5, e6) {
                    if (!(t5 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5), function(t5, e6) {
                    if (!t5)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e6 || "object" != typeof e6 && "function" != typeof e6 ? t5 : e6;
                  }(this, (e5.__proto__ || Object.getPrototypeOf(e5)).apply(this, arguments));
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), e5;
              }(((r = o) && r.__esModule ? r : { default: r }).default);
              i.blotName = "strike", i.tagName = "S", e4.default = i;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r, o = n3(6), i = function(t4) {
                function e5() {
                  return function(t5, e6) {
                    if (!(t5 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5), function(t5, e6) {
                    if (!t5)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e6 || "object" != typeof e6 && "function" != typeof e6 ? t5 : e6;
                  }(this, (e5.__proto__ || Object.getPrototypeOf(e5)).apply(this, arguments));
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), e5;
              }(((r = o) && r.__esModule ? r : { default: r }).default);
              i.blotName = "underline", i.tagName = "U", e4.default = i;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r, o = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), i = function t4(e5, n4, r2) {
                null === e5 && (e5 = Function.prototype);
                var o2 = Object.getOwnPropertyDescriptor(e5, n4);
                if (void 0 === o2) {
                  var i2 = Object.getPrototypeOf(e5);
                  return null === i2 ? void 0 : t4(i2, n4, r2);
                }
                if ("value" in o2)
                  return o2.value;
                var l2 = o2.get;
                return void 0 !== l2 ? l2.call(r2) : void 0;
              }, l = n3(0), a = (r = l) && r.__esModule ? r : { default: r }, s = n3(27), u = ["alt", "height", "width"], c = function(t4) {
                function e5() {
                  return function(t5, e6) {
                    if (!(t5 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5), function(t5, e6) {
                    if (!t5)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e6 || "object" != typeof e6 && "function" != typeof e6 ? t5 : e6;
                  }(this, (e5.__proto__ || Object.getPrototypeOf(e5)).apply(this, arguments));
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), o(e5, [{ key: "format", value: function(t5, n4) {
                  u.indexOf(t5) > -1 ? n4 ? this.domNode.setAttribute(t5, n4) : this.domNode.removeAttribute(t5) : i(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "format", this).call(this, t5, n4);
                } }], [{ key: "create", value: function(t5) {
                  var n4 = i(e5.__proto__ || Object.getPrototypeOf(e5), "create", this).call(this, t5);
                  return "string" == typeof t5 && n4.setAttribute("src", this.sanitize(t5)), n4;
                } }, { key: "formats", value: function(t5) {
                  return u.reduce(function(e6, n4) {
                    return t5.hasAttribute(n4) && (e6[n4] = t5.getAttribute(n4)), e6;
                  }, {});
                } }, { key: "match", value: function(t5) {
                  return /\.(jpe?g|gif|png)$/.test(t5) || /^data:image\/.+;base64/.test(t5);
                } }, { key: "sanitize", value: function(t5) {
                  return (0, s.sanitize)(t5, ["http", "https", "data"]) ? t5 : "//:0";
                } }, { key: "value", value: function(t5) {
                  return t5.getAttribute("src");
                } }]), e5;
              }(a.default.Embed);
              c.blotName = "image", c.tagName = "IMG", e4.default = c;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true });
              var r, o = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), i = function t4(e5, n4, r2) {
                null === e5 && (e5 = Function.prototype);
                var o2 = Object.getOwnPropertyDescriptor(e5, n4);
                if (void 0 === o2) {
                  var i2 = Object.getPrototypeOf(e5);
                  return null === i2 ? void 0 : t4(i2, n4, r2);
                }
                if ("value" in o2)
                  return o2.value;
                var l2 = o2.get;
                return void 0 !== l2 ? l2.call(r2) : void 0;
              }, l = n3(4), a = n3(27), s = (r = a) && r.__esModule ? r : { default: r }, u = ["height", "width"], c = function(t4) {
                function e5() {
                  return function(t5, e6) {
                    if (!(t5 instanceof e6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e5), function(t5, e6) {
                    if (!t5)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e6 || "object" != typeof e6 && "function" != typeof e6 ? t5 : e6;
                  }(this, (e5.__proto__ || Object.getPrototypeOf(e5)).apply(this, arguments));
                }
                return function(t5, e6) {
                  if ("function" != typeof e6 && null !== e6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e6);
                  t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }), e6 && (Object.setPrototypeOf ? Object.setPrototypeOf(t5, e6) : t5.__proto__ = e6);
                }(e5, t4), o(e5, [{ key: "format", value: function(t5, n4) {
                  u.indexOf(t5) > -1 ? n4 ? this.domNode.setAttribute(t5, n4) : this.domNode.removeAttribute(t5) : i(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "format", this).call(this, t5, n4);
                } }], [{ key: "create", value: function(t5) {
                  var n4 = i(e5.__proto__ || Object.getPrototypeOf(e5), "create", this).call(this, t5);
                  return n4.setAttribute("frameborder", "0"), n4.setAttribute("allowfullscreen", true), n4.setAttribute("src", this.sanitize(t5)), n4;
                } }, { key: "formats", value: function(t5) {
                  return u.reduce(function(e6, n4) {
                    return t5.hasAttribute(n4) && (e6[n4] = t5.getAttribute(n4)), e6;
                  }, {});
                } }, { key: "sanitize", value: function(t5) {
                  return s.default.sanitize(t5);
                } }, { key: "value", value: function(t5) {
                  return t5.getAttribute("src");
                } }]), e5;
              }(l.BlockEmbed);
              c.blotName = "video", c.className = "ql-video", c.tagName = "IFRAME", e4.default = c;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true }), e4.default = e4.FormulaBlot = void 0;
              var r = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), o = a(n3(35)), i = a(n3(5)), l = a(n3(9));
              function a(t4) {
                return t4 && t4.__esModule ? t4 : { default: t4 };
              }
              function s(t4, e5) {
                if (!(t4 instanceof e5))
                  throw new TypeError("Cannot call a class as a function");
              }
              function u(t4, e5) {
                if (!t4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e5 || "object" != typeof e5 && "function" != typeof e5 ? t4 : e5;
              }
              function c(t4, e5) {
                if ("function" != typeof e5 && null !== e5)
                  throw new TypeError("Super expression must either be null or a function, not " + typeof e5);
                t4.prototype = Object.create(e5 && e5.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e5 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e5) : t4.__proto__ = e5);
              }
              var f = function(t4) {
                function e5() {
                  return s(this, e5), u(this, (e5.__proto__ || Object.getPrototypeOf(e5)).apply(this, arguments));
                }
                return c(e5, t4), r(e5, null, [{ key: "create", value: function(t5) {
                  var n4 = function t6(e6, n5, r2) {
                    null === e6 && (e6 = Function.prototype);
                    var o2 = Object.getOwnPropertyDescriptor(e6, n5);
                    if (void 0 === o2) {
                      var i2 = Object.getPrototypeOf(e6);
                      return null === i2 ? void 0 : t6(i2, n5, r2);
                    }
                    if ("value" in o2)
                      return o2.value;
                    var l2 = o2.get;
                    return void 0 !== l2 ? l2.call(r2) : void 0;
                  }(e5.__proto__ || Object.getPrototypeOf(e5), "create", this).call(this, t5);
                  return "string" == typeof t5 && (window.katex.render(t5, n4, { throwOnError: false, errorColor: "#f00" }), n4.setAttribute("data-value", t5)), n4;
                } }, { key: "value", value: function(t5) {
                  return t5.getAttribute("data-value");
                } }]), e5;
              }(o.default);
              f.blotName = "formula", f.className = "ql-formula", f.tagName = "SPAN";
              var h = function(t4) {
                function e5() {
                  s(this, e5);
                  var t5 = u(this, (e5.__proto__ || Object.getPrototypeOf(e5)).call(this));
                  if (null == window.katex)
                    throw new Error("Formula module requires KaTeX.");
                  return t5;
                }
                return c(e5, t4), r(e5, null, [{ key: "register", value: function() {
                  i.default.register(f, true);
                } }]), e5;
              }(l.default);
              e4.FormulaBlot = f, e4.default = h;
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true }), e4.default = e4.CodeToken = e4.CodeBlock = void 0;
              var r = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), o = a(n3(0)), i = a(n3(5)), l = a(n3(9));
              function a(t4) {
                return t4 && t4.__esModule ? t4 : { default: t4 };
              }
              function s(t4, e5) {
                if (!(t4 instanceof e5))
                  throw new TypeError("Cannot call a class as a function");
              }
              function u(t4, e5) {
                if (!t4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e5 || "object" != typeof e5 && "function" != typeof e5 ? t4 : e5;
              }
              function c(t4, e5) {
                if ("function" != typeof e5 && null !== e5)
                  throw new TypeError("Super expression must either be null or a function, not " + typeof e5);
                t4.prototype = Object.create(e5 && e5.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e5 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e5) : t4.__proto__ = e5);
              }
              var f = function(t4) {
                function e5() {
                  return s(this, e5), u(this, (e5.__proto__ || Object.getPrototypeOf(e5)).apply(this, arguments));
                }
                return c(e5, t4), r(e5, [{ key: "replaceWith", value: function(t5) {
                  this.domNode.textContent = this.domNode.textContent, this.attach(), function t6(e6, n4, r2) {
                    null === e6 && (e6 = Function.prototype);
                    var o2 = Object.getOwnPropertyDescriptor(e6, n4);
                    if (void 0 === o2) {
                      var i2 = Object.getPrototypeOf(e6);
                      return null === i2 ? void 0 : t6(i2, n4, r2);
                    }
                    if ("value" in o2)
                      return o2.value;
                    var l2 = o2.get;
                    return void 0 !== l2 ? l2.call(r2) : void 0;
                  }(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "replaceWith", this).call(this, t5);
                } }, { key: "highlight", value: function(t5) {
                  var e6 = this.domNode.textContent;
                  this.cachedText !== e6 && ((e6.trim().length > 0 || null == this.cachedText) && (this.domNode.innerHTML = t5(e6), this.domNode.normalize(), this.attach()), this.cachedText = e6);
                } }]), e5;
              }(a(n3(13)).default);
              f.className = "ql-syntax";
              var h = new o.default.Attributor.Class("token", "hljs", { scope: o.default.Scope.INLINE }), p = function(t4) {
                function e5(t5, n4) {
                  s(this, e5);
                  var r2 = u(this, (e5.__proto__ || Object.getPrototypeOf(e5)).call(this, t5, n4));
                  if ("function" != typeof r2.options.highlight)
                    throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
                  var o2 = null;
                  return r2.quill.on(i.default.events.SCROLL_OPTIMIZE, function() {
                    clearTimeout(o2), o2 = setTimeout(function() {
                      r2.highlight(), o2 = null;
                    }, r2.options.interval);
                  }), r2.highlight(), r2;
                }
                return c(e5, t4), r(e5, null, [{ key: "register", value: function() {
                  i.default.register(h, true), i.default.register(f, true);
                } }]), r(e5, [{ key: "highlight", value: function() {
                  var t5 = this;
                  if (!this.quill.selection.composing) {
                    this.quill.update(i.default.sources.USER);
                    var e6 = this.quill.getSelection();
                    this.quill.scroll.descendants(f).forEach(function(e7) {
                      e7.highlight(t5.options.highlight);
                    }), this.quill.update(i.default.sources.SILENT), null != e6 && this.quill.setSelection(e6, i.default.sources.SILENT);
                  }
                } }]), e5;
              }(l.default);
              p.DEFAULTS = { highlight: null == window.hljs ? null : function(t4) {
                return window.hljs.highlightAuto(t4).value;
              }, interval: 1e3 }, e4.CodeBlock = f, e4.CodeToken = h, e4.default = p;
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>';
            }, function(t3, e4) {
              t3.exports = '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>';
            }, function(t3, e4, n3) {
              "use strict";
              Object.defineProperty(e4, "__esModule", { value: true }), e4.default = e4.BubbleTooltip = void 0;
              var r = function t4(e5, n4, r2) {
                null === e5 && (e5 = Function.prototype);
                var o2 = Object.getOwnPropertyDescriptor(e5, n4);
                if (void 0 === o2) {
                  var i2 = Object.getPrototypeOf(e5);
                  return null === i2 ? void 0 : t4(i2, n4, r2);
                }
                if ("value" in o2)
                  return o2.value;
                var l2 = o2.get;
                return void 0 !== l2 ? l2.call(r2) : void 0;
              }, o = /* @__PURE__ */ function() {
                function t4(t5, e5) {
                  for (var n4 = 0; n4 < e5.length; n4++) {
                    var r2 = e5[n4];
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t5, r2.key, r2);
                  }
                }
                return function(e5, n4, r2) {
                  return n4 && t4(e5.prototype, n4), r2 && t4(e5, r2), e5;
                };
              }(), i = f(n3(3)), l = f(n3(8)), a = n3(43), s = f(a), u = n3(15), c = f(n3(41));
              function f(t4) {
                return t4 && t4.__esModule ? t4 : { default: t4 };
              }
              function h(t4, e5) {
                if (!(t4 instanceof e5))
                  throw new TypeError("Cannot call a class as a function");
              }
              function p(t4, e5) {
                if (!t4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e5 || "object" != typeof e5 && "function" != typeof e5 ? t4 : e5;
              }
              function d(t4, e5) {
                if ("function" != typeof e5 && null !== e5)
                  throw new TypeError("Super expression must either be null or a function, not " + typeof e5);
                t4.prototype = Object.create(e5 && e5.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e5 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e5) : t4.__proto__ = e5);
              }
              var y = [["bold", "italic", "link"], [{ header: 1 }, { header: 2 }, "blockquote"]], v = function(t4) {
                function e5(t5, n4) {
                  h(this, e5), null != n4.modules.toolbar && null == n4.modules.toolbar.container && (n4.modules.toolbar.container = y);
                  var r2 = p(this, (e5.__proto__ || Object.getPrototypeOf(e5)).call(this, t5, n4));
                  return r2.quill.container.classList.add("ql-bubble"), r2;
                }
                return d(e5, t4), o(e5, [{ key: "extendToolbar", value: function(t5) {
                  this.tooltip = new b(this.quill, this.options.bounds), this.tooltip.root.appendChild(t5.container), this.buildButtons([].slice.call(t5.container.querySelectorAll("button")), c.default), this.buildPickers([].slice.call(t5.container.querySelectorAll("select")), c.default);
                } }]), e5;
              }(s.default);
              v.DEFAULTS = (0, i.default)(true, {}, s.default.DEFAULTS, { modules: { toolbar: { handlers: { link: function(t4) {
                t4 ? this.quill.theme.tooltip.edit() : this.quill.format("link", false);
              } } } } });
              var b = function(t4) {
                function e5(t5, n4) {
                  h(this, e5);
                  var r2 = p(this, (e5.__proto__ || Object.getPrototypeOf(e5)).call(this, t5, n4));
                  return r2.quill.on(l.default.events.EDITOR_CHANGE, function(t6, e6, n5, o2) {
                    if (t6 === l.default.events.SELECTION_CHANGE)
                      if (null != e6 && e6.length > 0 && o2 === l.default.sources.USER) {
                        r2.show(), r2.root.style.left = "0px", r2.root.style.width = "", r2.root.style.width = r2.root.offsetWidth + "px";
                        var i2 = r2.quill.getLines(e6.index, e6.length);
                        if (1 === i2.length)
                          r2.position(r2.quill.getBounds(e6));
                        else {
                          var a2 = i2[i2.length - 1], s2 = r2.quill.getIndex(a2), c2 = Math.min(a2.length() - 1, e6.index + e6.length - s2), f2 = r2.quill.getBounds(new u.Range(s2, c2));
                          r2.position(f2);
                        }
                      } else
                        document.activeElement !== r2.textbox && r2.quill.hasFocus() && r2.hide();
                  }), r2;
                }
                return d(e5, t4), o(e5, [{ key: "listen", value: function() {
                  var t5 = this;
                  r(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "listen", this).call(this), this.root.querySelector(".ql-close").addEventListener("click", function() {
                    t5.root.classList.remove("ql-editing");
                  }), this.quill.on(l.default.events.SCROLL_OPTIMIZE, function() {
                    setTimeout(function() {
                      if (!t5.root.classList.contains("ql-hidden")) {
                        var e6 = t5.quill.getSelection();
                        null != e6 && t5.position(t5.quill.getBounds(e6));
                      }
                    }, 1);
                  });
                } }, { key: "cancel", value: function() {
                  this.show();
                } }, { key: "position", value: function(t5) {
                  var n4 = r(e5.prototype.__proto__ || Object.getPrototypeOf(e5.prototype), "position", this).call(this, t5), o2 = this.root.querySelector(".ql-tooltip-arrow");
                  if (o2.style.marginLeft = "", 0 === n4)
                    return n4;
                  o2.style.marginLeft = -1 * n4 - o2.offsetWidth / 2 + "px";
                } }]), e5;
              }(a.BaseTooltip);
              b.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""), e4.BubbleTooltip = b, e4.default = v;
            }, function(t3, e4, n3) {
              t3.exports = n3(63);
            }]).default;
          }, t2.exports = n2();
        }).call(this, n(95).Buffer);
      }, function(t2, e2, n) {
        "use strict";
        (function(t3) {
          var r = n(96), o = n(97), i = n(98);
          function l() {
            return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
          }
          function a(t4, e3) {
            if (l() < e3)
              throw new RangeError("Invalid typed array length");
            return s.TYPED_ARRAY_SUPPORT ? (t4 = new Uint8Array(e3)).__proto__ = s.prototype : (null === t4 && (t4 = new s(e3)), t4.length = e3), t4;
          }
          function s(t4, e3, n2) {
            if (!(s.TYPED_ARRAY_SUPPORT || this instanceof s))
              return new s(t4, e3, n2);
            if ("number" == typeof t4) {
              if ("string" == typeof e3)
                throw new Error("If encoding is specified then the first argument must be a string");
              return f(this, t4);
            }
            return u(this, t4, e3, n2);
          }
          function u(t4, e3, n2, r2) {
            if ("number" == typeof e3)
              throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && e3 instanceof ArrayBuffer ? function(t5, e4, n3, r3) {
              if (e4.byteLength, n3 < 0 || e4.byteLength < n3)
                throw new RangeError("'offset' is out of bounds");
              if (e4.byteLength < n3 + (r3 || 0))
                throw new RangeError("'length' is out of bounds");
              e4 = void 0 === n3 && void 0 === r3 ? new Uint8Array(e4) : void 0 === r3 ? new Uint8Array(e4, n3) : new Uint8Array(e4, n3, r3);
              s.TYPED_ARRAY_SUPPORT ? (t5 = e4).__proto__ = s.prototype : t5 = h(t5, e4);
              return t5;
            }(t4, e3, n2, r2) : "string" == typeof e3 ? function(t5, e4, n3) {
              "string" == typeof n3 && "" !== n3 || (n3 = "utf8");
              if (!s.isEncoding(n3))
                throw new TypeError('"encoding" must be a valid string encoding');
              var r3 = 0 | d(e4, n3), o2 = (t5 = a(t5, r3)).write(e4, n3);
              o2 !== r3 && (t5 = t5.slice(0, o2));
              return t5;
            }(t4, e3, n2) : function(t5, e4) {
              if (s.isBuffer(e4)) {
                var n3 = 0 | p(e4.length);
                return 0 === (t5 = a(t5, n3)).length ? t5 : (e4.copy(t5, 0, 0, n3), t5);
              }
              if (e4) {
                if ("undefined" != typeof ArrayBuffer && e4.buffer instanceof ArrayBuffer || "length" in e4)
                  return "number" != typeof e4.length || (r3 = e4.length) != r3 ? a(t5, 0) : h(t5, e4);
                if ("Buffer" === e4.type && i(e4.data))
                  return h(t5, e4.data);
              }
              var r3;
              throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
            }(t4, e3);
          }
          function c(t4) {
            if ("number" != typeof t4)
              throw new TypeError('"size" argument must be a number');
            if (t4 < 0)
              throw new RangeError('"size" argument must not be negative');
          }
          function f(t4, e3) {
            if (c(e3), t4 = a(t4, e3 < 0 ? 0 : 0 | p(e3)), !s.TYPED_ARRAY_SUPPORT)
              for (var n2 = 0; n2 < e3; ++n2)
                t4[n2] = 0;
            return t4;
          }
          function h(t4, e3) {
            var n2 = e3.length < 0 ? 0 : 0 | p(e3.length);
            t4 = a(t4, n2);
            for (var r2 = 0; r2 < n2; r2 += 1)
              t4[r2] = 255 & e3[r2];
            return t4;
          }
          function p(t4) {
            if (t4 >= l())
              throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + l().toString(16) + " bytes");
            return 0 | t4;
          }
          function d(t4, e3) {
            if (s.isBuffer(t4))
              return t4.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t4) || t4 instanceof ArrayBuffer))
              return t4.byteLength;
            "string" != typeof t4 && (t4 = "" + t4);
            var n2 = t4.length;
            if (0 === n2)
              return 0;
            for (var r2 = false; ; )
              switch (e3) {
                case "ascii":
                case "latin1":
                case "binary":
                  return n2;
                case "utf8":
                case "utf-8":
                case void 0:
                  return F(t4).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return 2 * n2;
                case "hex":
                  return n2 >>> 1;
                case "base64":
                  return H(t4).length;
                default:
                  if (r2)
                    return F(t4).length;
                  e3 = ("" + e3).toLowerCase(), r2 = true;
              }
          }
          function y(t4, e3, n2) {
            var r2 = false;
            if ((void 0 === e3 || e3 < 0) && (e3 = 0), e3 > this.length)
              return "";
            if ((void 0 === n2 || n2 > this.length) && (n2 = this.length), n2 <= 0)
              return "";
            if ((n2 >>>= 0) <= (e3 >>>= 0))
              return "";
            for (t4 || (t4 = "utf8"); ; )
              switch (t4) {
                case "hex":
                  return P(this, e3, n2);
                case "utf8":
                case "utf-8":
                  return A(this, e3, n2);
                case "ascii":
                  return N(this, e3, n2);
                case "latin1":
                case "binary":
                  return T(this, e3, n2);
                case "base64":
                  return k(this, e3, n2);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return S(this, e3, n2);
                default:
                  if (r2)
                    throw new TypeError("Unknown encoding: " + t4);
                  t4 = (t4 + "").toLowerCase(), r2 = true;
              }
          }
          function v(t4, e3, n2) {
            var r2 = t4[e3];
            t4[e3] = t4[n2], t4[n2] = r2;
          }
          function b(t4, e3, n2, r2, o2) {
            if (0 === t4.length)
              return -1;
            if ("string" == typeof n2 ? (r2 = n2, n2 = 0) : n2 > 2147483647 ? n2 = 2147483647 : n2 < -2147483648 && (n2 = -2147483648), n2 = +n2, isNaN(n2) && (n2 = o2 ? 0 : t4.length - 1), n2 < 0 && (n2 = t4.length + n2), n2 >= t4.length) {
              if (o2)
                return -1;
              n2 = t4.length - 1;
            } else if (n2 < 0) {
              if (!o2)
                return -1;
              n2 = 0;
            }
            if ("string" == typeof e3 && (e3 = s.from(e3, r2)), s.isBuffer(e3))
              return 0 === e3.length ? -1 : g(t4, e3, n2, r2, o2);
            if ("number" == typeof e3)
              return e3 &= 255, s.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o2 ? Uint8Array.prototype.indexOf.call(t4, e3, n2) : Uint8Array.prototype.lastIndexOf.call(t4, e3, n2) : g(t4, [e3], n2, r2, o2);
            throw new TypeError("val must be string, number or Buffer");
          }
          function g(t4, e3, n2, r2, o2) {
            var i2, l2 = 1, a2 = t4.length, s2 = e3.length;
            if (void 0 !== r2 && ("ucs2" === (r2 = String(r2).toLowerCase()) || "ucs-2" === r2 || "utf16le" === r2 || "utf-16le" === r2)) {
              if (t4.length < 2 || e3.length < 2)
                return -1;
              l2 = 2, a2 /= 2, s2 /= 2, n2 /= 2;
            }
            function u2(t5, e4) {
              return 1 === l2 ? t5[e4] : t5.readUInt16BE(e4 * l2);
            }
            if (o2) {
              var c2 = -1;
              for (i2 = n2; i2 < a2; i2++)
                if (u2(t4, i2) === u2(e3, -1 === c2 ? 0 : i2 - c2)) {
                  if (-1 === c2 && (c2 = i2), i2 - c2 + 1 === s2)
                    return c2 * l2;
                } else
                  -1 !== c2 && (i2 -= i2 - c2), c2 = -1;
            } else
              for (n2 + s2 > a2 && (n2 = a2 - s2), i2 = n2; i2 >= 0; i2--) {
                for (var f2 = true, h2 = 0; h2 < s2; h2++)
                  if (u2(t4, i2 + h2) !== u2(e3, h2)) {
                    f2 = false;
                    break;
                  }
                if (f2)
                  return i2;
              }
            return -1;
          }
          function m(t4, e3, n2, r2) {
            n2 = Number(n2) || 0;
            var o2 = t4.length - n2;
            r2 ? (r2 = Number(r2)) > o2 && (r2 = o2) : r2 = o2;
            var i2 = e3.length;
            if (i2 % 2 != 0)
              throw new TypeError("Invalid hex string");
            r2 > i2 / 2 && (r2 = i2 / 2);
            for (var l2 = 0; l2 < r2; ++l2) {
              var a2 = parseInt(e3.substr(2 * l2, 2), 16);
              if (isNaN(a2))
                return l2;
              t4[n2 + l2] = a2;
            }
            return l2;
          }
          function _(t4, e3, n2, r2) {
            return z(F(e3, t4.length - n2), t4, n2, r2);
          }
          function O(t4, e3, n2, r2) {
            return z(function(t5) {
              for (var e4 = [], n3 = 0; n3 < t5.length; ++n3)
                e4.push(255 & t5.charCodeAt(n3));
              return e4;
            }(e3), t4, n2, r2);
          }
          function w(t4, e3, n2, r2) {
            return O(t4, e3, n2, r2);
          }
          function x(t4, e3, n2, r2) {
            return z(H(e3), t4, n2, r2);
          }
          function E(t4, e3, n2, r2) {
            return z(function(t5, e4) {
              for (var n3, r3, o2, i2 = [], l2 = 0; l2 < t5.length && !((e4 -= 2) < 0); ++l2)
                n3 = t5.charCodeAt(l2), r3 = n3 >> 8, o2 = n3 % 256, i2.push(o2), i2.push(r3);
              return i2;
            }(e3, t4.length - n2), t4, n2, r2);
          }
          function k(t4, e3, n2) {
            return 0 === e3 && n2 === t4.length ? r.fromByteArray(t4) : r.fromByteArray(t4.slice(e3, n2));
          }
          function A(t4, e3, n2) {
            n2 = Math.min(t4.length, n2);
            for (var r2 = [], o2 = e3; o2 < n2; ) {
              var i2, l2, a2, s2, u2 = t4[o2], c2 = null, f2 = u2 > 239 ? 4 : u2 > 223 ? 3 : u2 > 191 ? 2 : 1;
              if (o2 + f2 <= n2)
                switch (f2) {
                  case 1:
                    u2 < 128 && (c2 = u2);
                    break;
                  case 2:
                    128 == (192 & (i2 = t4[o2 + 1])) && (s2 = (31 & u2) << 6 | 63 & i2) > 127 && (c2 = s2);
                    break;
                  case 3:
                    i2 = t4[o2 + 1], l2 = t4[o2 + 2], 128 == (192 & i2) && 128 == (192 & l2) && (s2 = (15 & u2) << 12 | (63 & i2) << 6 | 63 & l2) > 2047 && (s2 < 55296 || s2 > 57343) && (c2 = s2);
                    break;
                  case 4:
                    i2 = t4[o2 + 1], l2 = t4[o2 + 2], a2 = t4[o2 + 3], 128 == (192 & i2) && 128 == (192 & l2) && 128 == (192 & a2) && (s2 = (15 & u2) << 18 | (63 & i2) << 12 | (63 & l2) << 6 | 63 & a2) > 65535 && s2 < 1114112 && (c2 = s2);
                }
              null === c2 ? (c2 = 65533, f2 = 1) : c2 > 65535 && (c2 -= 65536, r2.push(c2 >>> 10 & 1023 | 55296), c2 = 56320 | 1023 & c2), r2.push(c2), o2 += f2;
            }
            return function(t5) {
              var e4 = t5.length;
              if (e4 <= j)
                return String.fromCharCode.apply(String, t5);
              var n3 = "", r3 = 0;
              for (; r3 < e4; )
                n3 += String.fromCharCode.apply(String, t5.slice(r3, r3 += j));
              return n3;
            }(r2);
          }
          e2.Buffer = s, e2.SlowBuffer = function(t4) {
            +t4 != t4 && (t4 = 0);
            return s.alloc(+t4);
          }, e2.INSPECT_MAX_BYTES = 50, s.TYPED_ARRAY_SUPPORT = void 0 !== t3.TYPED_ARRAY_SUPPORT ? t3.TYPED_ARRAY_SUPPORT : function() {
            try {
              var t4 = new Uint8Array(1);
              return t4.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
                return 42;
              } }, 42 === t4.foo() && "function" == typeof t4.subarray && 0 === t4.subarray(1, 1).byteLength;
            } catch (t5) {
              return false;
            }
          }(), e2.kMaxLength = l(), s.poolSize = 8192, s._augment = function(t4) {
            return t4.__proto__ = s.prototype, t4;
          }, s.from = function(t4, e3, n2) {
            return u(null, t4, e3, n2);
          }, s.TYPED_ARRAY_SUPPORT && (s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, { value: null, configurable: true })), s.alloc = function(t4, e3, n2) {
            return function(t5, e4, n3, r2) {
              return c(e4), e4 <= 0 ? a(t5, e4) : void 0 !== n3 ? "string" == typeof r2 ? a(t5, e4).fill(n3, r2) : a(t5, e4).fill(n3) : a(t5, e4);
            }(null, t4, e3, n2);
          }, s.allocUnsafe = function(t4) {
            return f(null, t4);
          }, s.allocUnsafeSlow = function(t4) {
            return f(null, t4);
          }, s.isBuffer = function(t4) {
            return !(null == t4 || !t4._isBuffer);
          }, s.compare = function(t4, e3) {
            if (!s.isBuffer(t4) || !s.isBuffer(e3))
              throw new TypeError("Arguments must be Buffers");
            if (t4 === e3)
              return 0;
            for (var n2 = t4.length, r2 = e3.length, o2 = 0, i2 = Math.min(n2, r2); o2 < i2; ++o2)
              if (t4[o2] !== e3[o2]) {
                n2 = t4[o2], r2 = e3[o2];
                break;
              }
            return n2 < r2 ? -1 : r2 < n2 ? 1 : 0;
          }, s.isEncoding = function(t4) {
            switch (String(t4).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return true;
              default:
                return false;
            }
          }, s.concat = function(t4, e3) {
            if (!i(t4))
              throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t4.length)
              return s.alloc(0);
            var n2;
            if (void 0 === e3)
              for (e3 = 0, n2 = 0; n2 < t4.length; ++n2)
                e3 += t4[n2].length;
            var r2 = s.allocUnsafe(e3), o2 = 0;
            for (n2 = 0; n2 < t4.length; ++n2) {
              var l2 = t4[n2];
              if (!s.isBuffer(l2))
                throw new TypeError('"list" argument must be an Array of Buffers');
              l2.copy(r2, o2), o2 += l2.length;
            }
            return r2;
          }, s.byteLength = d, s.prototype._isBuffer = true, s.prototype.swap16 = function() {
            var t4 = this.length;
            if (t4 % 2 != 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e3 = 0; e3 < t4; e3 += 2)
              v(this, e3, e3 + 1);
            return this;
          }, s.prototype.swap32 = function() {
            var t4 = this.length;
            if (t4 % 4 != 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e3 = 0; e3 < t4; e3 += 4)
              v(this, e3, e3 + 3), v(this, e3 + 1, e3 + 2);
            return this;
          }, s.prototype.swap64 = function() {
            var t4 = this.length;
            if (t4 % 8 != 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e3 = 0; e3 < t4; e3 += 8)
              v(this, e3, e3 + 7), v(this, e3 + 1, e3 + 6), v(this, e3 + 2, e3 + 5), v(this, e3 + 3, e3 + 4);
            return this;
          }, s.prototype.toString = function() {
            var t4 = 0 | this.length;
            return 0 === t4 ? "" : 0 === arguments.length ? A(this, 0, t4) : y.apply(this, arguments);
          }, s.prototype.equals = function(t4) {
            if (!s.isBuffer(t4))
              throw new TypeError("Argument must be a Buffer");
            return this === t4 || 0 === s.compare(this, t4);
          }, s.prototype.inspect = function() {
            var t4 = "", n2 = e2.INSPECT_MAX_BYTES;
            return this.length > 0 && (t4 = this.toString("hex", 0, n2).match(/.{2}/g).join(" "), this.length > n2 && (t4 += " ... ")), "<Buffer " + t4 + ">";
          }, s.prototype.compare = function(t4, e3, n2, r2, o2) {
            if (!s.isBuffer(t4))
              throw new TypeError("Argument must be a Buffer");
            if (void 0 === e3 && (e3 = 0), void 0 === n2 && (n2 = t4 ? t4.length : 0), void 0 === r2 && (r2 = 0), void 0 === o2 && (o2 = this.length), e3 < 0 || n2 > t4.length || r2 < 0 || o2 > this.length)
              throw new RangeError("out of range index");
            if (r2 >= o2 && e3 >= n2)
              return 0;
            if (r2 >= o2)
              return -1;
            if (e3 >= n2)
              return 1;
            if (this === t4)
              return 0;
            for (var i2 = (o2 >>>= 0) - (r2 >>>= 0), l2 = (n2 >>>= 0) - (e3 >>>= 0), a2 = Math.min(i2, l2), u2 = this.slice(r2, o2), c2 = t4.slice(e3, n2), f2 = 0; f2 < a2; ++f2)
              if (u2[f2] !== c2[f2]) {
                i2 = u2[f2], l2 = c2[f2];
                break;
              }
            return i2 < l2 ? -1 : l2 < i2 ? 1 : 0;
          }, s.prototype.includes = function(t4, e3, n2) {
            return -1 !== this.indexOf(t4, e3, n2);
          }, s.prototype.indexOf = function(t4, e3, n2) {
            return b(this, t4, e3, n2, true);
          }, s.prototype.lastIndexOf = function(t4, e3, n2) {
            return b(this, t4, e3, n2, false);
          }, s.prototype.write = function(t4, e3, n2, r2) {
            if (void 0 === e3)
              r2 = "utf8", n2 = this.length, e3 = 0;
            else if (void 0 === n2 && "string" == typeof e3)
              r2 = e3, n2 = this.length, e3 = 0;
            else {
              if (!isFinite(e3))
                throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
              e3 |= 0, isFinite(n2) ? (n2 |= 0, void 0 === r2 && (r2 = "utf8")) : (r2 = n2, n2 = void 0);
            }
            var o2 = this.length - e3;
            if ((void 0 === n2 || n2 > o2) && (n2 = o2), t4.length > 0 && (n2 < 0 || e3 < 0) || e3 > this.length)
              throw new RangeError("Attempt to write outside buffer bounds");
            r2 || (r2 = "utf8");
            for (var i2 = false; ; )
              switch (r2) {
                case "hex":
                  return m(this, t4, e3, n2);
                case "utf8":
                case "utf-8":
                  return _(this, t4, e3, n2);
                case "ascii":
                  return O(this, t4, e3, n2);
                case "latin1":
                case "binary":
                  return w(this, t4, e3, n2);
                case "base64":
                  return x(this, t4, e3, n2);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return E(this, t4, e3, n2);
                default:
                  if (i2)
                    throw new TypeError("Unknown encoding: " + r2);
                  r2 = ("" + r2).toLowerCase(), i2 = true;
              }
          }, s.prototype.toJSON = function() {
            return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
          };
          var j = 4096;
          function N(t4, e3, n2) {
            var r2 = "";
            n2 = Math.min(t4.length, n2);
            for (var o2 = e3; o2 < n2; ++o2)
              r2 += String.fromCharCode(127 & t4[o2]);
            return r2;
          }
          function T(t4, e3, n2) {
            var r2 = "";
            n2 = Math.min(t4.length, n2);
            for (var o2 = e3; o2 < n2; ++o2)
              r2 += String.fromCharCode(t4[o2]);
            return r2;
          }
          function P(t4, e3, n2) {
            var r2 = t4.length;
            (!e3 || e3 < 0) && (e3 = 0), (!n2 || n2 < 0 || n2 > r2) && (n2 = r2);
            for (var o2 = "", i2 = e3; i2 < n2; ++i2)
              o2 += U(t4[i2]);
            return o2;
          }
          function S(t4, e3, n2) {
            for (var r2 = t4.slice(e3, n2), o2 = "", i2 = 0; i2 < r2.length; i2 += 2)
              o2 += String.fromCharCode(r2[i2] + 256 * r2[i2 + 1]);
            return o2;
          }
          function q(t4, e3, n2) {
            if (t4 % 1 != 0 || t4 < 0)
              throw new RangeError("offset is not uint");
            if (t4 + e3 > n2)
              throw new RangeError("Trying to access beyond buffer length");
          }
          function C(t4, e3, n2, r2, o2, i2) {
            if (!s.isBuffer(t4))
              throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e3 > o2 || e3 < i2)
              throw new RangeError('"value" argument is out of bounds');
            if (n2 + r2 > t4.length)
              throw new RangeError("Index out of range");
          }
          function L(t4, e3, n2, r2) {
            e3 < 0 && (e3 = 65535 + e3 + 1);
            for (var o2 = 0, i2 = Math.min(t4.length - n2, 2); o2 < i2; ++o2)
              t4[n2 + o2] = (e3 & 255 << 8 * (r2 ? o2 : 1 - o2)) >>> 8 * (r2 ? o2 : 1 - o2);
          }
          function R(t4, e3, n2, r2) {
            e3 < 0 && (e3 = 4294967295 + e3 + 1);
            for (var o2 = 0, i2 = Math.min(t4.length - n2, 4); o2 < i2; ++o2)
              t4[n2 + o2] = e3 >>> 8 * (r2 ? o2 : 3 - o2) & 255;
          }
          function M(t4, e3, n2, r2, o2, i2) {
            if (n2 + r2 > t4.length)
              throw new RangeError("Index out of range");
            if (n2 < 0)
              throw new RangeError("Index out of range");
          }
          function I(t4, e3, n2, r2, i2) {
            return i2 || M(t4, 0, n2, 4), o.write(t4, e3, n2, r2, 23, 4), n2 + 4;
          }
          function B(t4, e3, n2, r2, i2) {
            return i2 || M(t4, 0, n2, 8), o.write(t4, e3, n2, r2, 52, 8), n2 + 8;
          }
          s.prototype.slice = function(t4, e3) {
            var n2, r2 = this.length;
            if ((t4 = ~~t4) < 0 ? (t4 += r2) < 0 && (t4 = 0) : t4 > r2 && (t4 = r2), (e3 = void 0 === e3 ? r2 : ~~e3) < 0 ? (e3 += r2) < 0 && (e3 = 0) : e3 > r2 && (e3 = r2), e3 < t4 && (e3 = t4), s.TYPED_ARRAY_SUPPORT)
              (n2 = this.subarray(t4, e3)).__proto__ = s.prototype;
            else {
              var o2 = e3 - t4;
              n2 = new s(o2, void 0);
              for (var i2 = 0; i2 < o2; ++i2)
                n2[i2] = this[i2 + t4];
            }
            return n2;
          }, s.prototype.readUIntLE = function(t4, e3, n2) {
            t4 |= 0, e3 |= 0, n2 || q(t4, e3, this.length);
            for (var r2 = this[t4], o2 = 1, i2 = 0; ++i2 < e3 && (o2 *= 256); )
              r2 += this[t4 + i2] * o2;
            return r2;
          }, s.prototype.readUIntBE = function(t4, e3, n2) {
            t4 |= 0, e3 |= 0, n2 || q(t4, e3, this.length);
            for (var r2 = this[t4 + --e3], o2 = 1; e3 > 0 && (o2 *= 256); )
              r2 += this[t4 + --e3] * o2;
            return r2;
          }, s.prototype.readUInt8 = function(t4, e3) {
            return e3 || q(t4, 1, this.length), this[t4];
          }, s.prototype.readUInt16LE = function(t4, e3) {
            return e3 || q(t4, 2, this.length), this[t4] | this[t4 + 1] << 8;
          }, s.prototype.readUInt16BE = function(t4, e3) {
            return e3 || q(t4, 2, this.length), this[t4] << 8 | this[t4 + 1];
          }, s.prototype.readUInt32LE = function(t4, e3) {
            return e3 || q(t4, 4, this.length), (this[t4] | this[t4 + 1] << 8 | this[t4 + 2] << 16) + 16777216 * this[t4 + 3];
          }, s.prototype.readUInt32BE = function(t4, e3) {
            return e3 || q(t4, 4, this.length), 16777216 * this[t4] + (this[t4 + 1] << 16 | this[t4 + 2] << 8 | this[t4 + 3]);
          }, s.prototype.readIntLE = function(t4, e3, n2) {
            t4 |= 0, e3 |= 0, n2 || q(t4, e3, this.length);
            for (var r2 = this[t4], o2 = 1, i2 = 0; ++i2 < e3 && (o2 *= 256); )
              r2 += this[t4 + i2] * o2;
            return r2 >= (o2 *= 128) && (r2 -= Math.pow(2, 8 * e3)), r2;
          }, s.prototype.readIntBE = function(t4, e3, n2) {
            t4 |= 0, e3 |= 0, n2 || q(t4, e3, this.length);
            for (var r2 = e3, o2 = 1, i2 = this[t4 + --r2]; r2 > 0 && (o2 *= 256); )
              i2 += this[t4 + --r2] * o2;
            return i2 >= (o2 *= 128) && (i2 -= Math.pow(2, 8 * e3)), i2;
          }, s.prototype.readInt8 = function(t4, e3) {
            return e3 || q(t4, 1, this.length), 128 & this[t4] ? -1 * (255 - this[t4] + 1) : this[t4];
          }, s.prototype.readInt16LE = function(t4, e3) {
            e3 || q(t4, 2, this.length);
            var n2 = this[t4] | this[t4 + 1] << 8;
            return 32768 & n2 ? 4294901760 | n2 : n2;
          }, s.prototype.readInt16BE = function(t4, e3) {
            e3 || q(t4, 2, this.length);
            var n2 = this[t4 + 1] | this[t4] << 8;
            return 32768 & n2 ? 4294901760 | n2 : n2;
          }, s.prototype.readInt32LE = function(t4, e3) {
            return e3 || q(t4, 4, this.length), this[t4] | this[t4 + 1] << 8 | this[t4 + 2] << 16 | this[t4 + 3] << 24;
          }, s.prototype.readInt32BE = function(t4, e3) {
            return e3 || q(t4, 4, this.length), this[t4] << 24 | this[t4 + 1] << 16 | this[t4 + 2] << 8 | this[t4 + 3];
          }, s.prototype.readFloatLE = function(t4, e3) {
            return e3 || q(t4, 4, this.length), o.read(this, t4, true, 23, 4);
          }, s.prototype.readFloatBE = function(t4, e3) {
            return e3 || q(t4, 4, this.length), o.read(this, t4, false, 23, 4);
          }, s.prototype.readDoubleLE = function(t4, e3) {
            return e3 || q(t4, 8, this.length), o.read(this, t4, true, 52, 8);
          }, s.prototype.readDoubleBE = function(t4, e3) {
            return e3 || q(t4, 8, this.length), o.read(this, t4, false, 52, 8);
          }, s.prototype.writeUIntLE = function(t4, e3, n2, r2) {
            (t4 = +t4, e3 |= 0, n2 |= 0, r2) || C(this, t4, e3, n2, Math.pow(2, 8 * n2) - 1, 0);
            var o2 = 1, i2 = 0;
            for (this[e3] = 255 & t4; ++i2 < n2 && (o2 *= 256); )
              this[e3 + i2] = t4 / o2 & 255;
            return e3 + n2;
          }, s.prototype.writeUIntBE = function(t4, e3, n2, r2) {
            (t4 = +t4, e3 |= 0, n2 |= 0, r2) || C(this, t4, e3, n2, Math.pow(2, 8 * n2) - 1, 0);
            var o2 = n2 - 1, i2 = 1;
            for (this[e3 + o2] = 255 & t4; --o2 >= 0 && (i2 *= 256); )
              this[e3 + o2] = t4 / i2 & 255;
            return e3 + n2;
          }, s.prototype.writeUInt8 = function(t4, e3, n2) {
            return t4 = +t4, e3 |= 0, n2 || C(this, t4, e3, 1, 255, 0), s.TYPED_ARRAY_SUPPORT || (t4 = Math.floor(t4)), this[e3] = 255 & t4, e3 + 1;
          }, s.prototype.writeUInt16LE = function(t4, e3, n2) {
            return t4 = +t4, e3 |= 0, n2 || C(this, t4, e3, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[e3] = 255 & t4, this[e3 + 1] = t4 >>> 8) : L(this, t4, e3, true), e3 + 2;
          }, s.prototype.writeUInt16BE = function(t4, e3, n2) {
            return t4 = +t4, e3 |= 0, n2 || C(this, t4, e3, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[e3] = t4 >>> 8, this[e3 + 1] = 255 & t4) : L(this, t4, e3, false), e3 + 2;
          }, s.prototype.writeUInt32LE = function(t4, e3, n2) {
            return t4 = +t4, e3 |= 0, n2 || C(this, t4, e3, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[e3 + 3] = t4 >>> 24, this[e3 + 2] = t4 >>> 16, this[e3 + 1] = t4 >>> 8, this[e3] = 255 & t4) : R(this, t4, e3, true), e3 + 4;
          }, s.prototype.writeUInt32BE = function(t4, e3, n2) {
            return t4 = +t4, e3 |= 0, n2 || C(this, t4, e3, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[e3] = t4 >>> 24, this[e3 + 1] = t4 >>> 16, this[e3 + 2] = t4 >>> 8, this[e3 + 3] = 255 & t4) : R(this, t4, e3, false), e3 + 4;
          }, s.prototype.writeIntLE = function(t4, e3, n2, r2) {
            if (t4 = +t4, e3 |= 0, !r2) {
              var o2 = Math.pow(2, 8 * n2 - 1);
              C(this, t4, e3, n2, o2 - 1, -o2);
            }
            var i2 = 0, l2 = 1, a2 = 0;
            for (this[e3] = 255 & t4; ++i2 < n2 && (l2 *= 256); )
              t4 < 0 && 0 === a2 && 0 !== this[e3 + i2 - 1] && (a2 = 1), this[e3 + i2] = (t4 / l2 >> 0) - a2 & 255;
            return e3 + n2;
          }, s.prototype.writeIntBE = function(t4, e3, n2, r2) {
            if (t4 = +t4, e3 |= 0, !r2) {
              var o2 = Math.pow(2, 8 * n2 - 1);
              C(this, t4, e3, n2, o2 - 1, -o2);
            }
            var i2 = n2 - 1, l2 = 1, a2 = 0;
            for (this[e3 + i2] = 255 & t4; --i2 >= 0 && (l2 *= 256); )
              t4 < 0 && 0 === a2 && 0 !== this[e3 + i2 + 1] && (a2 = 1), this[e3 + i2] = (t4 / l2 >> 0) - a2 & 255;
            return e3 + n2;
          }, s.prototype.writeInt8 = function(t4, e3, n2) {
            return t4 = +t4, e3 |= 0, n2 || C(this, t4, e3, 1, 127, -128), s.TYPED_ARRAY_SUPPORT || (t4 = Math.floor(t4)), t4 < 0 && (t4 = 255 + t4 + 1), this[e3] = 255 & t4, e3 + 1;
          }, s.prototype.writeInt16LE = function(t4, e3, n2) {
            return t4 = +t4, e3 |= 0, n2 || C(this, t4, e3, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[e3] = 255 & t4, this[e3 + 1] = t4 >>> 8) : L(this, t4, e3, true), e3 + 2;
          }, s.prototype.writeInt16BE = function(t4, e3, n2) {
            return t4 = +t4, e3 |= 0, n2 || C(this, t4, e3, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[e3] = t4 >>> 8, this[e3 + 1] = 255 & t4) : L(this, t4, e3, false), e3 + 2;
          }, s.prototype.writeInt32LE = function(t4, e3, n2) {
            return t4 = +t4, e3 |= 0, n2 || C(this, t4, e3, 4, 2147483647, -2147483648), s.TYPED_ARRAY_SUPPORT ? (this[e3] = 255 & t4, this[e3 + 1] = t4 >>> 8, this[e3 + 2] = t4 >>> 16, this[e3 + 3] = t4 >>> 24) : R(this, t4, e3, true), e3 + 4;
          }, s.prototype.writeInt32BE = function(t4, e3, n2) {
            return t4 = +t4, e3 |= 0, n2 || C(this, t4, e3, 4, 2147483647, -2147483648), t4 < 0 && (t4 = 4294967295 + t4 + 1), s.TYPED_ARRAY_SUPPORT ? (this[e3] = t4 >>> 24, this[e3 + 1] = t4 >>> 16, this[e3 + 2] = t4 >>> 8, this[e3 + 3] = 255 & t4) : R(this, t4, e3, false), e3 + 4;
          }, s.prototype.writeFloatLE = function(t4, e3, n2) {
            return I(this, t4, e3, true, n2);
          }, s.prototype.writeFloatBE = function(t4, e3, n2) {
            return I(this, t4, e3, false, n2);
          }, s.prototype.writeDoubleLE = function(t4, e3, n2) {
            return B(this, t4, e3, true, n2);
          }, s.prototype.writeDoubleBE = function(t4, e3, n2) {
            return B(this, t4, e3, false, n2);
          }, s.prototype.copy = function(t4, e3, n2, r2) {
            if (n2 || (n2 = 0), r2 || 0 === r2 || (r2 = this.length), e3 >= t4.length && (e3 = t4.length), e3 || (e3 = 0), r2 > 0 && r2 < n2 && (r2 = n2), r2 === n2)
              return 0;
            if (0 === t4.length || 0 === this.length)
              return 0;
            if (e3 < 0)
              throw new RangeError("targetStart out of bounds");
            if (n2 < 0 || n2 >= this.length)
              throw new RangeError("sourceStart out of bounds");
            if (r2 < 0)
              throw new RangeError("sourceEnd out of bounds");
            r2 > this.length && (r2 = this.length), t4.length - e3 < r2 - n2 && (r2 = t4.length - e3 + n2);
            var o2, i2 = r2 - n2;
            if (this === t4 && n2 < e3 && e3 < r2)
              for (o2 = i2 - 1; o2 >= 0; --o2)
                t4[o2 + e3] = this[o2 + n2];
            else if (i2 < 1e3 || !s.TYPED_ARRAY_SUPPORT)
              for (o2 = 0; o2 < i2; ++o2)
                t4[o2 + e3] = this[o2 + n2];
            else
              Uint8Array.prototype.set.call(t4, this.subarray(n2, n2 + i2), e3);
            return i2;
          }, s.prototype.fill = function(t4, e3, n2, r2) {
            if ("string" == typeof t4) {
              if ("string" == typeof e3 ? (r2 = e3, e3 = 0, n2 = this.length) : "string" == typeof n2 && (r2 = n2, n2 = this.length), 1 === t4.length) {
                var o2 = t4.charCodeAt(0);
                o2 < 256 && (t4 = o2);
              }
              if (void 0 !== r2 && "string" != typeof r2)
                throw new TypeError("encoding must be a string");
              if ("string" == typeof r2 && !s.isEncoding(r2))
                throw new TypeError("Unknown encoding: " + r2);
            } else
              "number" == typeof t4 && (t4 &= 255);
            if (e3 < 0 || this.length < e3 || this.length < n2)
              throw new RangeError("Out of range index");
            if (n2 <= e3)
              return this;
            var i2;
            if (e3 >>>= 0, n2 = void 0 === n2 ? this.length : n2 >>> 0, t4 || (t4 = 0), "number" == typeof t4)
              for (i2 = e3; i2 < n2; ++i2)
                this[i2] = t4;
            else {
              var l2 = s.isBuffer(t4) ? t4 : F(new s(t4, r2).toString()), a2 = l2.length;
              for (i2 = 0; i2 < n2 - e3; ++i2)
                this[i2 + e3] = l2[i2 % a2];
            }
            return this;
          };
          var D = /[^+\/0-9A-Za-z-_]/g;
          function U(t4) {
            return t4 < 16 ? "0" + t4.toString(16) : t4.toString(16);
          }
          function F(t4, e3) {
            var n2;
            e3 = e3 || 1 / 0;
            for (var r2 = t4.length, o2 = null, i2 = [], l2 = 0; l2 < r2; ++l2) {
              if ((n2 = t4.charCodeAt(l2)) > 55295 && n2 < 57344) {
                if (!o2) {
                  if (n2 > 56319) {
                    (e3 -= 3) > -1 && i2.push(239, 191, 189);
                    continue;
                  }
                  if (l2 + 1 === r2) {
                    (e3 -= 3) > -1 && i2.push(239, 191, 189);
                    continue;
                  }
                  o2 = n2;
                  continue;
                }
                if (n2 < 56320) {
                  (e3 -= 3) > -1 && i2.push(239, 191, 189), o2 = n2;
                  continue;
                }
                n2 = 65536 + (o2 - 55296 << 10 | n2 - 56320);
              } else
                o2 && (e3 -= 3) > -1 && i2.push(239, 191, 189);
              if (o2 = null, n2 < 128) {
                if ((e3 -= 1) < 0)
                  break;
                i2.push(n2);
              } else if (n2 < 2048) {
                if ((e3 -= 2) < 0)
                  break;
                i2.push(n2 >> 6 | 192, 63 & n2 | 128);
              } else if (n2 < 65536) {
                if ((e3 -= 3) < 0)
                  break;
                i2.push(n2 >> 12 | 224, n2 >> 6 & 63 | 128, 63 & n2 | 128);
              } else {
                if (!(n2 < 1114112))
                  throw new Error("Invalid code point");
                if ((e3 -= 4) < 0)
                  break;
                i2.push(n2 >> 18 | 240, n2 >> 12 & 63 | 128, n2 >> 6 & 63 | 128, 63 & n2 | 128);
              }
            }
            return i2;
          }
          function H(t4) {
            return r.toByteArray(function(t5) {
              if ((t5 = function(t6) {
                return t6.trim ? t6.trim() : t6.replace(/^\s+|\s+$/g, "");
              }(t5).replace(D, "")).length < 2)
                return "";
              for (; t5.length % 4 != 0; )
                t5 += "=";
              return t5;
            }(t4));
          }
          function z(t4, e3, n2, r2) {
            for (var o2 = 0; o2 < r2 && !(o2 + n2 >= e3.length || o2 >= t4.length); ++o2)
              e3[o2 + n2] = t4[o2];
            return o2;
          }
        }).call(this, n(14));
      }, function(t2, e2, n) {
        "use strict";
        e2.byteLength = function(t3) {
          var e3 = u(t3), n2 = e3[0], r2 = e3[1];
          return 3 * (n2 + r2) / 4 - r2;
        }, e2.toByteArray = function(t3) {
          var e3, n2, r2 = u(t3), l2 = r2[0], a2 = r2[1], s2 = new i(function(t4, e4, n3) {
            return 3 * (e4 + n3) / 4 - n3;
          }(0, l2, a2)), c2 = 0, f = a2 > 0 ? l2 - 4 : l2;
          for (n2 = 0; n2 < f; n2 += 4)
            e3 = o[t3.charCodeAt(n2)] << 18 | o[t3.charCodeAt(n2 + 1)] << 12 | o[t3.charCodeAt(n2 + 2)] << 6 | o[t3.charCodeAt(n2 + 3)], s2[c2++] = e3 >> 16 & 255, s2[c2++] = e3 >> 8 & 255, s2[c2++] = 255 & e3;
          2 === a2 && (e3 = o[t3.charCodeAt(n2)] << 2 | o[t3.charCodeAt(n2 + 1)] >> 4, s2[c2++] = 255 & e3);
          1 === a2 && (e3 = o[t3.charCodeAt(n2)] << 10 | o[t3.charCodeAt(n2 + 1)] << 4 | o[t3.charCodeAt(n2 + 2)] >> 2, s2[c2++] = e3 >> 8 & 255, s2[c2++] = 255 & e3);
          return s2;
        }, e2.fromByteArray = function(t3) {
          for (var e3, n2 = t3.length, o2 = n2 % 3, i2 = [], l2 = 0, a2 = n2 - o2; l2 < a2; l2 += 16383)
            i2.push(c(t3, l2, l2 + 16383 > a2 ? a2 : l2 + 16383));
          1 === o2 ? (e3 = t3[n2 - 1], i2.push(r[e3 >> 2] + r[e3 << 4 & 63] + "==")) : 2 === o2 && (e3 = (t3[n2 - 2] << 8) + t3[n2 - 1], i2.push(r[e3 >> 10] + r[e3 >> 4 & 63] + r[e3 << 2 & 63] + "="));
          return i2.join("");
        };
        for (var r = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, s = l.length; a < s; ++a)
          r[a] = l[a], o[l.charCodeAt(a)] = a;
        function u(t3) {
          var e3 = t3.length;
          if (e3 % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
          var n2 = t3.indexOf("=");
          return -1 === n2 && (n2 = e3), [n2, n2 === e3 ? 0 : 4 - n2 % 4];
        }
        function c(t3, e3, n2) {
          for (var o2, i2, l2 = [], a2 = e3; a2 < n2; a2 += 3)
            o2 = (t3[a2] << 16 & 16711680) + (t3[a2 + 1] << 8 & 65280) + (255 & t3[a2 + 2]), l2.push(r[(i2 = o2) >> 18 & 63] + r[i2 >> 12 & 63] + r[i2 >> 6 & 63] + r[63 & i2]);
          return l2.join("");
        }
        o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63;
      }, function(t2, e2) {
        e2.read = function(t3, e3, n, r, o) {
          var i, l, a = 8 * o - r - 1, s = (1 << a) - 1, u = s >> 1, c = -7, f = n ? o - 1 : 0, h = n ? -1 : 1, p = t3[e3 + f];
          for (f += h, i = p & (1 << -c) - 1, p >>= -c, c += a; c > 0; i = 256 * i + t3[e3 + f], f += h, c -= 8)
            ;
          for (l = i & (1 << -c) - 1, i >>= -c, c += r; c > 0; l = 256 * l + t3[e3 + f], f += h, c -= 8)
            ;
          if (0 === i)
            i = 1 - u;
          else {
            if (i === s)
              return l ? NaN : 1 / 0 * (p ? -1 : 1);
            l += Math.pow(2, r), i -= u;
          }
          return (p ? -1 : 1) * l * Math.pow(2, i - r);
        }, e2.write = function(t3, e3, n, r, o, i) {
          var l, a, s, u = 8 * i - o - 1, c = (1 << u) - 1, f = c >> 1, h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = r ? 0 : i - 1, d = r ? 1 : -1, y = e3 < 0 || 0 === e3 && 1 / e3 < 0 ? 1 : 0;
          for (e3 = Math.abs(e3), isNaN(e3) || e3 === 1 / 0 ? (a = isNaN(e3) ? 1 : 0, l = c) : (l = Math.floor(Math.log(e3) / Math.LN2), e3 * (s = Math.pow(2, -l)) < 1 && (l--, s *= 2), (e3 += l + f >= 1 ? h / s : h * Math.pow(2, 1 - f)) * s >= 2 && (l++, s /= 2), l + f >= c ? (a = 0, l = c) : l + f >= 1 ? (a = (e3 * s - 1) * Math.pow(2, o), l += f) : (a = e3 * Math.pow(2, f - 1) * Math.pow(2, o), l = 0)); o >= 8; t3[n + p] = 255 & a, p += d, a /= 256, o -= 8)
            ;
          for (l = l << o | a, u += o; u > 0; t3[n + p] = 255 & l, p += d, l /= 256, u -= 8)
            ;
          t3[n + p - d] |= 128 * y;
        };
      }, function(t2, e2) {
        var n = {}.toString;
        t2.exports = Array.isArray || function(t3) {
          return "[object Array]" == n.call(t3);
        };
      }]);
    });
  }
});
export default require_react_quill();
/*! Bundled license information:

react-quill/dist/react-quill.js:
  (*!
   * Quill Editor v1.3.7
   * https://quilljs.com/
   * Copyright (c) 2014, Jason Chen
   * Copyright (c) 2013, salesforce.com
   *)
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <http://feross.org>
   * @license  MIT
   *)
*/
//# sourceMappingURL=react-quill_dist_react-quill.js.map
