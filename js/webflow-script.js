/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var br = c(() => {
    "use strict";
    window.tram = (function (e) {
      function t(f, v) {
        var m = new N.Bare();
        return m.init(f, v);
      }
      function n(f) {
        return f.replace(/[A-Z]/g, function (v) {
          return "-" + v.toLowerCase();
        });
      }
      function r(f) {
        var v = parseInt(f.slice(1), 16),
          m = (v >> 16) & 255,
          O = (v >> 8) & 255,
          x = 255 & v;
        return [m, O, x];
      }
      function a(f, v, m) {
        return (
          "#" + ((1 << 24) | (f << 16) | (v << 8) | m).toString(16).slice(1)
        );
      }
      function i() {}
      function o(f, v) {
        l("Type warning: Expected: [" + f + "] Got: [" + typeof v + "] " + v);
      }
      function s(f, v, m) {
        l("Units do not match [" + f + "]: " + v + ", " + m);
      }
      function u(f, v, m) {
        if ((v !== void 0 && (m = v), f === void 0)) return m;
        var O = m;
        return (
          Gt.test(f) || !gt.test(f)
            ? (O = parseInt(f, 10))
            : gt.test(f) && (O = 1e3 * parseFloat(f)),
          0 > O && (O = 0),
          O === O ? O : m
        );
      }
      function l(f) {
        ae.debug && window && window.console.warn(f);
      }
      function h(f) {
        for (var v = -1, m = f ? f.length : 0, O = []; ++v < m; ) {
          var x = f[v];
          x && O.push(x);
        }
        return O;
      }
      var d = (function (f, v, m) {
          function O(Y) {
            return typeof Y == "object";
          }
          function x(Y) {
            return typeof Y == "function";
          }
          function S() {}
          function X(Y, ie) {
            function D() {
              var he = new K();
              return x(he.init) && he.init.apply(he, arguments), he;
            }
            function K() {}
            ie === m && ((ie = Y), (Y = Object)), (D.Bare = K);
            var Q,
              le = (S[f] = Y[f]),
              Fe = (K[f] = D[f] = new S());
            return (
              (Fe.constructor = D),
              (D.mixin = function (he) {
                return (K[f] = D[f] = X(D, he)[f]), D;
              }),
              (D.open = function (he) {
                if (
                  ((Q = {}),
                  x(he) ? (Q = he.call(D, Fe, le, D, Y)) : O(he) && (Q = he),
                  O(Q))
                )
                  for (var Bt in Q) v.call(Q, Bt) && (Fe[Bt] = Q[Bt]);
                return x(Fe.init) || (Fe.init = Y), D;
              }),
              D.open(ie)
            );
          }
          return X;
        })("prototype", {}.hasOwnProperty),
        p = {
          ease: [
            "ease",
            function (f, v, m, O) {
              var x = (f /= O) * f,
                S = x * f;
              return (
                v +
                m * (-2.75 * S * x + 11 * x * x + -15.5 * S + 8 * x + 0.25 * f)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (f, v, m, O) {
              var x = (f /= O) * f,
                S = x * f;
              return v + m * (-1 * S * x + 3 * x * x + -3 * S + 2 * x);
            },
          ],
          "ease-out": [
            "ease-out",
            function (f, v, m, O) {
              var x = (f /= O) * f,
                S = x * f;
              return (
                v +
                m * (0.3 * S * x + -1.6 * x * x + 2.2 * S + -1.8 * x + 1.9 * f)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (f, v, m, O) {
              var x = (f /= O) * f,
                S = x * f;
              return v + m * (2 * S * x + -5 * x * x + 2 * S + 2 * x);
            },
          ],
          linear: [
            "linear",
            function (f, v, m, O) {
              return (m * f) / O + v;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (f, v, m, O) {
              return m * (f /= O) * f + v;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (f, v, m, O) {
              return -m * (f /= O) * (f - 2) + v;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (f, v, m, O) {
              return (f /= O / 2) < 1
                ? (m / 2) * f * f + v
                : (-m / 2) * (--f * (f - 2) - 1) + v;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (f, v, m, O) {
              return m * (f /= O) * f * f + v;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (f, v, m, O) {
              return m * ((f = f / O - 1) * f * f + 1) + v;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (f, v, m, O) {
              return (f /= O / 2) < 1
                ? (m / 2) * f * f * f + v
                : (m / 2) * ((f -= 2) * f * f + 2) + v;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (f, v, m, O) {
              return m * (f /= O) * f * f * f + v;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (f, v, m, O) {
              return -m * ((f = f / O - 1) * f * f * f - 1) + v;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (f, v, m, O) {
              return (f /= O / 2) < 1
                ? (m / 2) * f * f * f * f + v
                : (-m / 2) * ((f -= 2) * f * f * f - 2) + v;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (f, v, m, O) {
              return m * (f /= O) * f * f * f * f + v;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (f, v, m, O) {
              return m * ((f = f / O - 1) * f * f * f * f + 1) + v;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (f, v, m, O) {
              return (f /= O / 2) < 1
                ? (m / 2) * f * f * f * f * f + v
                : (m / 2) * ((f -= 2) * f * f * f * f + 2) + v;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (f, v, m, O) {
              return -m * Math.cos((f / O) * (Math.PI / 2)) + m + v;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (f, v, m, O) {
              return m * Math.sin((f / O) * (Math.PI / 2)) + v;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (f, v, m, O) {
              return (-m / 2) * (Math.cos((Math.PI * f) / O) - 1) + v;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (f, v, m, O) {
              return f === 0 ? v : m * Math.pow(2, 10 * (f / O - 1)) + v;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (f, v, m, O) {
              return f === O
                ? v + m
                : m * (-Math.pow(2, (-10 * f) / O) + 1) + v;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (f, v, m, O) {
              return f === 0
                ? v
                : f === O
                ? v + m
                : (f /= O / 2) < 1
                ? (m / 2) * Math.pow(2, 10 * (f - 1)) + v
                : (m / 2) * (-Math.pow(2, -10 * --f) + 2) + v;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (f, v, m, O) {
              return -m * (Math.sqrt(1 - (f /= O) * f) - 1) + v;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (f, v, m, O) {
              return m * Math.sqrt(1 - (f = f / O - 1) * f) + v;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (f, v, m, O) {
              return (f /= O / 2) < 1
                ? (-m / 2) * (Math.sqrt(1 - f * f) - 1) + v
                : (m / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + v;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (f, v, m, O, x) {
              return (
                x === void 0 && (x = 1.70158),
                m * (f /= O) * f * ((x + 1) * f - x) + v
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (f, v, m, O, x) {
              return (
                x === void 0 && (x = 1.70158),
                m * ((f = f / O - 1) * f * ((x + 1) * f + x) + 1) + v
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (f, v, m, O, x) {
              return (
                x === void 0 && (x = 1.70158),
                (f /= O / 2) < 1
                  ? (m / 2) * f * f * (((x *= 1.525) + 1) * f - x) + v
                  : (m / 2) *
                      ((f -= 2) * f * (((x *= 1.525) + 1) * f + x) + 2) +
                    v
              );
            },
          ],
        },
        g = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        E = document,
        y = window,
        I = "bkwld-tram",
        _ = /[\-\.0-9]/g,
        A = /[A-Z]/,
        b = "number",
        R = /^(rgb|#)/,
        L = /(em|cm|mm|in|pt|pc|px)$/,
        w = /(em|cm|mm|in|pt|pc|px|%)$/,
        q = /(deg|rad|turn)$/,
        U = "unitless",
        G = /(all|none) 0s ease 0s/,
        B = /^(width|height)$/,
        H = " ",
        M = E.createElement("a"),
        T = ["Webkit", "Moz", "O", "ms"],
        P = ["-webkit-", "-moz-", "-o-", "-ms-"],
        V = function (f) {
          if (f in M.style) return { dom: f, css: f };
          var v,
            m,
            O = "",
            x = f.split("-");
          for (v = 0; v < x.length; v++)
            O += x[v].charAt(0).toUpperCase() + x[v].slice(1);
          for (v = 0; v < T.length; v++)
            if (((m = T[v] + O), m in M.style))
              return { dom: m, css: P[v] + f };
        },
        F = (t.support = {
          bind: Function.prototype.bind,
          transform: V("transform"),
          transition: V("transition"),
          backface: V("backface-visibility"),
          timing: V("transition-timing-function"),
        });
      if (F.transition) {
        var W = F.timing.dom;
        if (((M.style[W] = p["ease-in-back"][0]), !M.style[W]))
          for (var z in g) p[z][0] = g[z];
      }
      var J = (t.frame = (function () {
          var f =
            y.requestAnimationFrame ||
            y.webkitRequestAnimationFrame ||
            y.mozRequestAnimationFrame ||
            y.oRequestAnimationFrame ||
            y.msRequestAnimationFrame;
          return f && F.bind
            ? f.bind(y)
            : function (v) {
                y.setTimeout(v, 16);
              };
        })()),
        ee = (t.now = (function () {
          var f = y.performance,
            v = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
          return v && F.bind
            ? v.bind(f)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        Me = d(function (f) {
          function v(k, $) {
            var oe = h(("" + k).split(H)),
              te = oe[0];
            $ = $ || {};
            var ve = pt[te];
            if (!ve) return l("Unsupported property: " + te);
            if (!$.weak || !this.props[te]) {
              var Ne = ve[0],
                Ie = this.props[te];
              return (
                Ie || (Ie = this.props[te] = new Ne.Bare()),
                Ie.init(this.$el, oe, ve, $),
                Ie
              );
            }
          }
          function m(k, $, oe) {
            if (k) {
              var te = typeof k;
              if (
                ($ ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                te == "number" && $)
              )
                return (
                  (this.timer = new Z({
                    duration: k,
                    context: this,
                    complete: S,
                  })),
                  void (this.active = !0)
                );
              if (te == "string" && $) {
                switch (k) {
                  case "hide":
                    D.call(this);
                    break;
                  case "stop":
                    X.call(this);
                    break;
                  case "redraw":
                    K.call(this);
                    break;
                  default:
                    v.call(this, k, oe && oe[1]);
                }
                return S.call(this);
              }
              if (te == "function") return void k.call(this, this);
              if (te == "object") {
                var ve = 0;
                Fe.call(
                  this,
                  k,
                  function (fe, ah) {
                    fe.span > ve && (ve = fe.span), fe.stop(), fe.animate(ah);
                  },
                  function (fe) {
                    "wait" in fe && (ve = u(fe.wait, 0));
                  }
                ),
                  le.call(this),
                  ve > 0 &&
                    ((this.timer = new Z({ duration: ve, context: this })),
                    (this.active = !0),
                    $ && (this.timer.complete = S));
                var Ne = this,
                  Ie = !1,
                  En = {};
                J(function () {
                  Fe.call(Ne, k, function (fe) {
                    fe.active && ((Ie = !0), (En[fe.name] = fe.nextStyle));
                  }),
                    Ie && Ne.$el.css(En);
                });
              }
            }
          }
          function O(k) {
            (k = u(k, 0)),
              this.active
                ? this.queue.push({ options: k })
                : ((this.timer = new Z({
                    duration: k,
                    context: this,
                    complete: S,
                  })),
                  (this.active = !0));
          }
          function x(k) {
            return this.active
              ? (this.queue.push({ options: k, args: arguments }),
                void (this.timer.complete = S))
              : l(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function S() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var k = this.queue.shift();
              m.call(this, k.options, !0, k.args);
            }
          }
          function X(k) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var $;
            typeof k == "string"
              ? (($ = {}), ($[k] = 1))
              : ($ = typeof k == "object" && k != null ? k : this.props),
              Fe.call(this, $, he),
              le.call(this);
          }
          function Y(k) {
            X.call(this, k), Fe.call(this, k, Bt, rh);
          }
          function ie(k) {
            typeof k != "string" && (k = "block"), (this.el.style.display = k);
          }
          function D() {
            X.call(this), (this.el.style.display = "none");
          }
          function K() {
            this.el.offsetHeight;
          }
          function Q() {
            X.call(this), e.removeData(this.el, I), (this.$el = this.el = null);
          }
          function le() {
            var k,
              $,
              oe = [];
            this.upstream && oe.push(this.upstream);
            for (k in this.props)
              ($ = this.props[k]), $.active && oe.push($.string);
            (oe = oe.join(",")),
              this.style !== oe &&
                ((this.style = oe), (this.el.style[F.transition.dom] = oe));
          }
          function Fe(k, $, oe) {
            var te,
              ve,
              Ne,
              Ie,
              En = $ !== he,
              fe = {};
            for (te in k)
              (Ne = k[te]),
                te in Ae
                  ? (fe.transform || (fe.transform = {}),
                    (fe.transform[te] = Ne))
                  : (A.test(te) && (te = n(te)),
                    te in pt
                      ? (fe[te] = Ne)
                      : (Ie || (Ie = {}), (Ie[te] = Ne)));
            for (te in fe) {
              if (((Ne = fe[te]), (ve = this.props[te]), !ve)) {
                if (!En) continue;
                ve = v.call(this, te);
              }
              $.call(this, ve, Ne);
            }
            oe && Ie && oe.call(this, Ie);
          }
          function he(k) {
            k.stop();
          }
          function Bt(k, $) {
            k.set($);
          }
          function rh(k) {
            this.$el.css(k);
          }
          function Re(k, $) {
            f[k] = function () {
              return this.children
                ? ih.call(this, $, arguments)
                : (this.el && $.apply(this, arguments), this);
            };
          }
          function ih(k, $) {
            var oe,
              te = this.children.length;
            for (oe = 0; te > oe; oe++) k.apply(this.children[oe], $);
            return this;
          }
          (f.init = function (k) {
            if (
              ((this.$el = e(k)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              ae.keepInherited && !ae.fallback)
            ) {
              var $ = tt(this.el, "transition");
              $ && !G.test($) && (this.upstream = $);
            }
            F.backface &&
              ae.hideBackface &&
              Oe(this.el, F.backface.css, "hidden");
          }),
            Re("add", v),
            Re("start", m),
            Re("wait", O),
            Re("then", x),
            Re("next", S),
            Re("stop", X),
            Re("set", Y),
            Re("show", ie),
            Re("hide", D),
            Re("redraw", K),
            Re("destroy", Q);
        }),
        N = d(Me, function (f) {
          function v(m, O) {
            var x = e.data(m, I) || e.data(m, I, new Me.Bare());
            return x.el || x.init(m), O ? x.start(O) : x;
          }
          f.init = function (m, O) {
            var x = e(m);
            if (!x.length) return this;
            if (x.length === 1) return v(x[0], O);
            var S = [];
            return (
              x.each(function (X, Y) {
                S.push(v(Y, O));
              }),
              (this.children = S),
              this
            );
          };
        }),
        C = d(function (f) {
          function v() {
            var S = this.get();
            this.update("auto");
            var X = this.get();
            return this.update(S), X;
          }
          function m(S, X, Y) {
            return X !== void 0 && (Y = X), S in p ? S : Y;
          }
          function O(S) {
            var X = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(S);
            return (X ? a(X[1], X[2], X[3]) : S).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var x = { duration: 500, ease: "ease", delay: 0 };
          (f.init = function (S, X, Y, ie) {
            (this.$el = S), (this.el = S[0]);
            var D = X[0];
            Y[2] && (D = Y[2]),
              dt[D] && (D = dt[D]),
              (this.name = D),
              (this.type = Y[1]),
              (this.duration = u(X[1], this.duration, x.duration)),
              (this.ease = m(X[2], this.ease, x.ease)),
              (this.delay = u(X[3], this.delay, x.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = B.test(this.name)),
              (this.unit = ie.unit || this.unit || ae.defaultUnit),
              (this.angle = ie.angle || this.angle || ae.defaultAngle),
              ae.fallback || ie.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    H +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? H + p[this.ease][0] : "") +
                    (this.delay ? H + this.delay + "ms" : "")));
          }),
            (f.set = function (S) {
              (S = this.convert(S, this.type)), this.update(S), this.redraw();
            }),
            (f.transition = function (S) {
              (this.active = !0),
                (S = this.convert(S, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  S == "auto" && (S = v.call(this))),
                (this.nextStyle = S);
            }),
            (f.fallback = function (S) {
              var X =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (S = this.convert(S, this.type)),
                this.auto &&
                  (X == "auto" && (X = this.convert(this.get(), this.type)),
                  S == "auto" && (S = v.call(this))),
                (this.tween = new pe({
                  from: X,
                  to: S,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (f.get = function () {
              return tt(this.el, this.name);
            }),
            (f.update = function (S) {
              Oe(this.el, this.name, S);
            }),
            (f.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                Oe(this.el, this.name, this.get()));
              var S = this.tween;
              S && S.context && S.destroy();
            }),
            (f.convert = function (S, X) {
              if (S == "auto" && this.auto) return S;
              var Y,
                ie = typeof S == "number",
                D = typeof S == "string";
              switch (X) {
                case b:
                  if (ie) return S;
                  if (D && S.replace(_, "") === "") return +S;
                  Y = "number(unitless)";
                  break;
                case R:
                  if (D) {
                    if (S === "" && this.original) return this.original;
                    if (X.test(S))
                      return S.charAt(0) == "#" && S.length == 7 ? S : O(S);
                  }
                  Y = "hex or rgb string";
                  break;
                case L:
                  if (ie) return S + this.unit;
                  if (D && X.test(S)) return S;
                  Y = "number(px) or string(unit)";
                  break;
                case w:
                  if (ie) return S + this.unit;
                  if (D && X.test(S)) return S;
                  Y = "number(px) or string(unit or %)";
                  break;
                case q:
                  if (ie) return S + this.angle;
                  if (D && X.test(S)) return S;
                  Y = "number(deg) or string(angle)";
                  break;
                case U:
                  if (ie || (D && w.test(S))) return S;
                  Y = "number(unitless) or string(unit or %)";
              }
              return o(Y, S), S;
            }),
            (f.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        j = d(C, function (f, v) {
          f.init = function () {
            v.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), R));
          };
        }),
        ce = d(C, function (f, v) {
          (f.init = function () {
            v.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (f.get = function () {
              return this.$el[this.name]();
            }),
            (f.update = function (m) {
              this.$el[this.name](m);
            });
        }),
        Ee = d(C, function (f, v) {
          function m(O, x) {
            var S, X, Y, ie, D;
            for (S in O)
              (ie = Ae[S]),
                (Y = ie[0]),
                (X = ie[1] || S),
                (D = this.convert(O[S], Y)),
                x.call(this, X, D, Y);
          }
          (f.init = function () {
            v.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                Ae.perspective &&
                  ae.perspective &&
                  ((this.current.perspective = ae.perspective),
                  Oe(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (f.set = function (O) {
              m.call(this, O, function (x, S) {
                this.current[x] = S;
              }),
                Oe(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (f.transition = function (O) {
              var x = this.values(O);
              this.tween = new ye({
                current: this.current,
                values: x,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var S,
                X = {};
              for (S in this.current) X[S] = S in x ? x[S] : this.current[S];
              (this.active = !0), (this.nextStyle = this.style(X));
            }),
            (f.fallback = function (O) {
              var x = this.values(O);
              this.tween = new ye({
                current: this.current,
                values: x,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (f.update = function () {
              Oe(this.el, this.name, this.style(this.current));
            }),
            (f.style = function (O) {
              var x,
                S = "";
              for (x in O) S += x + "(" + O[x] + ") ";
              return S;
            }),
            (f.values = function (O) {
              var x,
                S = {};
              return (
                m.call(this, O, function (X, Y, ie) {
                  (S[X] = Y),
                    this.current[X] === void 0 &&
                      ((x = 0),
                      ~X.indexOf("scale") && (x = 1),
                      (this.current[X] = this.convert(x, ie)));
                }),
                S
              );
            });
        }),
        pe = d(function (f) {
          function v(D) {
            Y.push(D) === 1 && J(m);
          }
          function m() {
            var D,
              K,
              Q,
              le = Y.length;
            if (le)
              for (J(m), K = ee(), D = le; D--; ) (Q = Y[D]), Q && Q.render(K);
          }
          function O(D) {
            var K,
              Q = e.inArray(D, Y);
            Q >= 0 &&
              ((K = Y.slice(Q + 1)),
              (Y.length = Q),
              K.length && (Y = Y.concat(K)));
          }
          function x(D) {
            return Math.round(D * ie) / ie;
          }
          function S(D, K, Q) {
            return a(
              D[0] + Q * (K[0] - D[0]),
              D[1] + Q * (K[1] - D[1]),
              D[2] + Q * (K[2] - D[2])
            );
          }
          var X = { ease: p.ease[1], from: 0, to: 1 };
          (f.init = function (D) {
            (this.duration = D.duration || 0), (this.delay = D.delay || 0);
            var K = D.ease || X.ease;
            p[K] && (K = p[K][1]),
              typeof K != "function" && (K = X.ease),
              (this.ease = K),
              (this.update = D.update || i),
              (this.complete = D.complete || i),
              (this.context = D.context || this),
              (this.name = D.name);
            var Q = D.from,
              le = D.to;
            Q === void 0 && (Q = X.from),
              le === void 0 && (le = X.to),
              (this.unit = D.unit || ""),
              typeof Q == "number" && typeof le == "number"
                ? ((this.begin = Q), (this.change = le - Q))
                : this.format(le, Q),
              (this.value = this.begin + this.unit),
              (this.start = ee()),
              D.autoplay !== !1 && this.play();
          }),
            (f.play = function () {
              this.active ||
                (this.start || (this.start = ee()),
                (this.active = !0),
                v(this));
            }),
            (f.stop = function () {
              this.active && ((this.active = !1), O(this));
            }),
            (f.render = function (D) {
              var K,
                Q = D - this.start;
              if (this.delay) {
                if (Q <= this.delay) return;
                Q -= this.delay;
              }
              if (Q < this.duration) {
                var le = this.ease(Q, 0, 1, this.duration);
                return (
                  (K = this.startRGB
                    ? S(this.startRGB, this.endRGB, le)
                    : x(this.begin + le * this.change)),
                  (this.value = K + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (K = this.endHex || this.begin + this.change),
                (this.value = K + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (f.format = function (D, K) {
              if (((K += ""), (D += ""), D.charAt(0) == "#"))
                return (
                  (this.startRGB = r(K)),
                  (this.endRGB = r(D)),
                  (this.endHex = D),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var Q = K.replace(_, ""),
                  le = D.replace(_, "");
                Q !== le && s("tween", K, D), (this.unit = Q);
              }
              (K = parseFloat(K)),
                (D = parseFloat(D)),
                (this.begin = this.value = K),
                (this.change = D - K);
            }),
            (f.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = i);
            });
          var Y = [],
            ie = 1e3;
        }),
        Z = d(pe, function (f) {
          (f.init = function (v) {
            (this.duration = v.duration || 0),
              (this.complete = v.complete || i),
              (this.context = v.context),
              this.play();
          }),
            (f.render = function (v) {
              var m = v - this.start;
              m < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        ye = d(pe, function (f, v) {
          (f.init = function (m) {
            (this.context = m.context),
              (this.update = m.update),
              (this.tweens = []),
              (this.current = m.current);
            var O, x;
            for (O in m.values)
              (x = m.values[O]),
                this.current[O] !== x &&
                  this.tweens.push(
                    new pe({
                      name: O,
                      from: this.current[O],
                      to: x,
                      duration: m.duration,
                      delay: m.delay,
                      ease: m.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (f.render = function (m) {
              var O,
                x,
                S = this.tweens.length,
                X = !1;
              for (O = S; O--; )
                (x = this.tweens[O]),
                  x.context &&
                    (x.render(m), (this.current[x.name] = x.value), (X = !0));
              return X
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (f.destroy = function () {
              if ((v.destroy.call(this), this.tweens)) {
                var m,
                  O = this.tweens.length;
                for (m = O; m--; ) this.tweens[m].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        ae = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !F.transition,
          agentTests: [],
        });
      (t.fallback = function (f) {
        if (!F.transition) return (ae.fallback = !0);
        ae.agentTests.push("(" + f + ")");
        var v = new RegExp(ae.agentTests.join("|"), "i");
        ae.fallback = v.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (f) {
          return new pe(f);
        }),
        (t.delay = function (f, v, m) {
          return new Z({ complete: v, duration: f, context: m });
        }),
        (e.fn.tram = function (f) {
          return t.call(null, this, f);
        });
      var Oe = e.style,
        tt = e.css,
        dt = { transform: F.transform && F.transform.css },
        pt = {
          color: [j, R],
          background: [j, R, "background-color"],
          "outline-color": [j, R],
          "border-color": [j, R],
          "border-top-color": [j, R],
          "border-right-color": [j, R],
          "border-bottom-color": [j, R],
          "border-left-color": [j, R],
          "border-width": [C, L],
          "border-top-width": [C, L],
          "border-right-width": [C, L],
          "border-bottom-width": [C, L],
          "border-left-width": [C, L],
          "border-spacing": [C, L],
          "letter-spacing": [C, L],
          margin: [C, L],
          "margin-top": [C, L],
          "margin-right": [C, L],
          "margin-bottom": [C, L],
          "margin-left": [C, L],
          padding: [C, L],
          "padding-top": [C, L],
          "padding-right": [C, L],
          "padding-bottom": [C, L],
          "padding-left": [C, L],
          "outline-width": [C, L],
          opacity: [C, b],
          top: [C, w],
          right: [C, w],
          bottom: [C, w],
          left: [C, w],
          "font-size": [C, w],
          "text-indent": [C, w],
          "word-spacing": [C, w],
          width: [C, w],
          "min-width": [C, w],
          "max-width": [C, w],
          height: [C, w],
          "min-height": [C, w],
          "max-height": [C, w],
          "line-height": [C, U],
          "scroll-top": [ce, b, "scrollTop"],
          "scroll-left": [ce, b, "scrollLeft"],
        },
        Ae = {};
      F.transform &&
        ((pt.transform = [Ee]),
        (Ae = {
          x: [w, "translateX"],
          y: [w, "translateY"],
          rotate: [q],
          rotateX: [q],
          rotateY: [q],
          scale: [b],
          scaleX: [b],
          scaleY: [b],
          skew: [q],
          skewX: [q],
          skewY: [q],
        })),
        F.transform &&
          F.backface &&
          ((Ae.z = [w, "translateZ"]),
          (Ae.rotateZ = [q]),
          (Ae.scaleZ = [b]),
          (Ae.perspective = [L]));
      var Gt = /ms/,
        gt = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Qa = c((Nx, ja) => {
    "use strict";
    var oh = window.$,
      sh = br() && oh.tram;
    ja.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        n = Array.prototype,
        r = Object.prototype,
        a = Function.prototype,
        i = n.push,
        o = n.slice,
        s = n.concat,
        u = r.toString,
        l = r.hasOwnProperty,
        h = n.forEach,
        d = n.map,
        p = n.reduce,
        g = n.reduceRight,
        E = n.filter,
        y = n.every,
        I = n.some,
        _ = n.indexOf,
        A = n.lastIndexOf,
        b = Array.isArray,
        R = Object.keys,
        L = a.bind,
        w =
          (e.each =
          e.forEach =
            function (T, P, V) {
              if (T == null) return T;
              if (h && T.forEach === h) T.forEach(P, V);
              else if (T.length === +T.length) {
                for (var F = 0, W = T.length; F < W; F++)
                  if (P.call(V, T[F], F, T) === t) return;
              } else
                for (var z = e.keys(T), F = 0, W = z.length; F < W; F++)
                  if (P.call(V, T[z[F]], z[F], T) === t) return;
              return T;
            });
      (e.map = e.collect =
        function (T, P, V) {
          var F = [];
          return T == null
            ? F
            : d && T.map === d
            ? T.map(P, V)
            : (w(T, function (W, z, J) {
                F.push(P.call(V, W, z, J));
              }),
              F);
        }),
        (e.find = e.detect =
          function (T, P, V) {
            var F;
            return (
              q(T, function (W, z, J) {
                if (P.call(V, W, z, J)) return (F = W), !0;
              }),
              F
            );
          }),
        (e.filter = e.select =
          function (T, P, V) {
            var F = [];
            return T == null
              ? F
              : E && T.filter === E
              ? T.filter(P, V)
              : (w(T, function (W, z, J) {
                  P.call(V, W, z, J) && F.push(W);
                }),
                F);
          });
      var q =
        (e.some =
        e.any =
          function (T, P, V) {
            P || (P = e.identity);
            var F = !1;
            return T == null
              ? F
              : I && T.some === I
              ? T.some(P, V)
              : (w(T, function (W, z, J) {
                  if (F || (F = P.call(V, W, z, J))) return t;
                }),
                !!F);
          });
      (e.contains = e.include =
        function (T, P) {
          return T == null
            ? !1
            : _ && T.indexOf === _
            ? T.indexOf(P) != -1
            : q(T, function (V) {
                return V === P;
              });
        }),
        (e.delay = function (T, P) {
          var V = o.call(arguments, 2);
          return setTimeout(function () {
            return T.apply(null, V);
          }, P);
        }),
        (e.defer = function (T) {
          return e.delay.apply(e, [T, 1].concat(o.call(arguments, 1)));
        }),
        (e.throttle = function (T) {
          var P, V, F;
          return function () {
            P ||
              ((P = !0),
              (V = arguments),
              (F = this),
              sh.frame(function () {
                (P = !1), T.apply(F, V);
              }));
          };
        }),
        (e.debounce = function (T, P, V) {
          var F,
            W,
            z,
            J,
            ee,
            Me = function () {
              var N = e.now() - J;
              N < P
                ? (F = setTimeout(Me, P - N))
                : ((F = null), V || ((ee = T.apply(z, W)), (z = W = null)));
            };
          return function () {
            (z = this), (W = arguments), (J = e.now());
            var N = V && !F;
            return (
              F || (F = setTimeout(Me, P)),
              N && ((ee = T.apply(z, W)), (z = W = null)),
              ee
            );
          };
        }),
        (e.defaults = function (T) {
          if (!e.isObject(T)) return T;
          for (var P = 1, V = arguments.length; P < V; P++) {
            var F = arguments[P];
            for (var W in F) T[W] === void 0 && (T[W] = F[W]);
          }
          return T;
        }),
        (e.keys = function (T) {
          if (!e.isObject(T)) return [];
          if (R) return R(T);
          var P = [];
          for (var V in T) e.has(T, V) && P.push(V);
          return P;
        }),
        (e.has = function (T, P) {
          return l.call(T, P);
        }),
        (e.isObject = function (T) {
          return T === Object(T);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var U = /(.)^/,
        G = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        B = /\\|'|\r|\n|\u2028|\u2029/g,
        H = function (T) {
          return "\\" + G[T];
        },
        M = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (T, P, V) {
          !P && V && (P = V), (P = e.defaults({}, P, e.templateSettings));
          var F = RegExp(
              [
                (P.escape || U).source,
                (P.interpolate || U).source,
                (P.evaluate || U).source,
              ].join("|") + "|$",
              "g"
            ),
            W = 0,
            z = "__p+='";
          T.replace(F, function (N, C, j, ce, Ee) {
            return (
              (z += T.slice(W, Ee).replace(B, H)),
              (W = Ee + N.length),
              C
                ? (z +=
                    `'+
((__t=(` +
                    C +
                    `))==null?'':_.escape(__t))+
'`)
                : j
                ? (z +=
                    `'+
((__t=(` +
                    j +
                    `))==null?'':__t)+
'`)
                : ce &&
                  (z +=
                    `';
` +
                    ce +
                    `
__p+='`),
              N
            );
          }),
            (z += `';
`);
          var J = P.variable;
          if (J) {
            if (!M.test(J))
              throw new Error("variable is not a bare identifier: " + J);
          } else
            (z =
              `with(obj||{}){
` +
              z +
              `}
`),
              (J = "obj");
          z =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            z +
            `return __p;
`;
          var ee;
          try {
            ee = new Function(P.variable || "obj", "_", z);
          } catch (N) {
            throw ((N.source = z), N);
          }
          var Me = function (N) {
            return ee.call(this, N, e);
          };
          return (
            (Me.source =
              "function(" +
              J +
              `){
` +
              z +
              "}"),
            Me
          );
        }),
        e
      );
    })();
  });
  var qe = c((Cx, io) => {
    "use strict";
    var ne = {},
      Et = {},
      ht = [],
      Ar = window.Webflow || [],
      Ke = window.jQuery,
      Le = Ke(window),
      uh = Ke(document),
      De = Ke.isFunction,
      Ce = (ne._ = Qa()),
      Za = (ne.tram = br() && Ke.tram),
      vn = !1,
      Sr = !1;
    Za.config.hideBackface = !1;
    Za.config.keepInherited = !0;
    ne.define = function (e, t, n) {
      Et[e] && eo(Et[e]);
      var r = (Et[e] = t(Ke, Ce, n) || {});
      return Ja(r), r;
    };
    ne.require = function (e) {
      return Et[e];
    };
    function Ja(e) {
      ne.env() &&
        (De(e.design) && Le.on("__wf_design", e.design),
        De(e.preview) && Le.on("__wf_preview", e.preview)),
        De(e.destroy) && Le.on("__wf_destroy", e.destroy),
        e.ready && De(e.ready) && ch(e);
    }
    function ch(e) {
      if (vn) {
        e.ready();
        return;
      }
      Ce.contains(ht, e.ready) || ht.push(e.ready);
    }
    function eo(e) {
      De(e.design) && Le.off("__wf_design", e.design),
        De(e.preview) && Le.off("__wf_preview", e.preview),
        De(e.destroy) && Le.off("__wf_destroy", e.destroy),
        e.ready && De(e.ready) && lh(e);
    }
    function lh(e) {
      ht = Ce.filter(ht, function (t) {
        return t !== e.ready;
      });
    }
    ne.push = function (e) {
      if (vn) {
        De(e) && e();
        return;
      }
      Ar.push(e);
    };
    ne.env = function (e) {
      var t = window.__wf_design,
        n = typeof t < "u";
      if (!e) return n;
      if (e === "design") return n && t;
      if (e === "preview") return n && !t;
      if (e === "slug") return n && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var hn = navigator.userAgent.toLowerCase(),
      to = (ne.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      fh = (ne.env.chrome =
        /chrome/.test(hn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(hn.match(/chrome\/(\d+)\./)[1], 10)),
      dh = (ne.env.ios = /(ipod|iphone|ipad)/.test(hn));
    ne.env.safari = /safari/.test(hn) && !fh && !dh;
    var Or;
    to &&
      uh.on("touchstart mousedown", function (e) {
        Or = e.target;
      });
    ne.validClick = to
      ? function (e) {
          return e === Or || Ke.contains(e, Or);
        }
      : function () {
          return !0;
        };
    var no = "resize.webflow orientationchange.webflow load.webflow",
      ph = "scroll.webflow " + no;
    ne.resize = wr(Le, no);
    ne.scroll = wr(Le, ph);
    ne.redraw = wr();
    function wr(e, t) {
      var n = [],
        r = {};
      return (
        (r.up = Ce.throttle(function (a) {
          Ce.each(n, function (i) {
            i(a);
          });
        })),
        e && t && e.on(t, r.up),
        (r.on = function (a) {
          typeof a == "function" && (Ce.contains(n, a) || n.push(a));
        }),
        (r.off = function (a) {
          if (!arguments.length) {
            n = [];
            return;
          }
          n = Ce.filter(n, function (i) {
            return i !== a;
          });
        }),
        r
      );
    }
    ne.location = function (e) {
      window.location = e;
    };
    ne.env() && (ne.location = function () {});
    ne.ready = function () {
      (vn = !0), Sr ? gh() : Ce.each(ht, $a), Ce.each(Ar, $a), ne.resize.up();
    };
    function $a(e) {
      De(e) && e();
    }
    function gh() {
      (Sr = !1), Ce.each(Et, Ja);
    }
    var nt;
    ne.load = function (e) {
      nt.then(e);
    };
    function ro() {
      nt && (nt.reject(), Le.off("load", nt.resolve)),
        (nt = new Ke.Deferred()),
        Le.on("load", nt.resolve);
    }
    ne.destroy = function (e) {
      (e = e || {}),
        (Sr = !0),
        Le.triggerHandler("__wf_destroy"),
        e.domready != null && (vn = e.domready),
        Ce.each(Et, eo),
        ne.resize.off(),
        ne.scroll.off(),
        ne.redraw.off(),
        (ht = []),
        (Ar = []),
        nt.state() === "pending" && ro();
    };
    Ke(ne.ready);
    ro();
    io.exports = window.Webflow = ne;
  });
  var so = c((Lx, oo) => {
    "use strict";
    var ao = qe();
    ao.define("brand", (oo.exports = function () {}), function (e) {
      var t = {},
        n = document,
        r = e("html"),
        a = e("body"),
        i = ".w-webflow-badge",
        o = window.location,
        s = /PhantomJS/i.test(navigator.userAgent),
        u =
          "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
        l;
      t.ready = function () {
        var g = r.attr("data-wf-status"),
          E = r.attr("data-wf-domain") || "";
        /\.webflow\.io$/i.test(E) && o.hostname !== E && (g = !0),
          g &&
            !s &&
            ((l = l || d()), p(), setTimeout(p, 500), e(n).off(u, h).on(u, h));
      };
      function h() {
        var g =
          n.fullScreen ||
          n.mozFullScreen ||
          n.webkitIsFullScreen ||
          n.msFullscreenElement ||
          !!n.webkitFullscreenElement;
        e(l).attr("style", g ? "display: none !important;" : "");
      }
      function d() {
        var g = e('<a class="w-webflow-badge"></a>').attr(
            "href",
            "https://webflow.com?utm_campaign=brandjs"
          ),
          E = e("<img>")
            .attr("src", "../images/webflow-badge-icon-d2.89e12c322e.svg")
            .attr("alt", "")
            .css({ marginRight: "4px", width: "26px" }),
          y = e("<img>")
            .attr("src", "../images/webflow-badge-text-d2.c82cec3b78.svg")
            .attr("alt", "Made in Webflow");
        return g.append(E, y), g[0];
      }
      function p() {
        var g = a.children(i),
          E = g.length && g.get(0) === l,
          y = ao.env("editor");
        if (E) {
          y && g.remove();
          return;
        }
        g.length && g.remove(), y || a.append(l);
      }
      return t;
    });
  });
  var co = c((Px, uo) => {
    "use strict";
    var vt = qe();
    vt.define(
      "links",
      (uo.exports = function (e, t) {
        var n = {},
          r = e(window),
          a,
          i = vt.env(),
          o = window.location,
          s = document.createElement("a"),
          u = "w--current",
          l = /index\.(html|php)$/,
          h = /\/$/,
          d,
          p;
        n.ready = n.design = n.preview = g;
        function g() {
          (a = i && vt.env("design")),
            (p = vt.env("slug") || o.pathname || ""),
            vt.scroll.off(y),
            (d = []);
          for (var _ = document.links, A = 0; A < _.length; ++A) E(_[A]);
          d.length && (vt.scroll.on(y), y());
        }
        function E(_) {
          if (!_.getAttribute("hreflang")) {
            var A =
              (a && _.getAttribute("href-disabled")) || _.getAttribute("href");
            if (((s.href = A), !(A.indexOf(":") >= 0))) {
              var b = e(_);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === o.host + o.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var R = e(s.hash);
                R.length && d.push({ link: b, sec: R, active: !1 });
                return;
              }
              if (!(A === "#" || A === "")) {
                var L =
                  s.href === o.href || A === p || (l.test(A) && h.test(p));
                I(b, u, L);
              }
            }
          }
        }
        function y() {
          var _ = r.scrollTop(),
            A = r.height();
          t.each(d, function (b) {
            if (!b.link.attr("hreflang")) {
              var R = b.link,
                L = b.sec,
                w = L.offset().top,
                q = L.outerHeight(),
                U = A * 0.5,
                G = L.is(":visible") && w + q - U >= _ && w + U <= _ + A;
              b.active !== G && ((b.active = G), I(R, u, G));
            }
          });
        }
        function I(_, A, b) {
          var R = _.hasClass(A);
          (b && R) || (!b && !R) || (b ? _.addClass(A) : _.removeClass(A));
        }
        return n;
      })
    );
  });
  var fo = c((xx, lo) => {
    "use strict";
    var _n = qe();
    _n.define(
      "scroll",
      (lo.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          n = window.location,
          r = E() ? null : window.history,
          a = e(window),
          i = e(document),
          o = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (M) {
              window.setTimeout(M, 15);
            },
          u = _n.env("editor") ? ".w-editor-body" : "body",
          l =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          h = 'a[href="#"]',
          d = 'a[href*="#"]:not(.w-tab-link):not(' + h + ")",
          p = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          g = document.createElement("style");
        g.appendChild(document.createTextNode(p));
        function E() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var y = /^#[a-zA-Z0-9][\w:.-]*$/;
        function I(M) {
          return y.test(M.hash) && M.host + M.pathname === n.host + n.pathname;
        }
        let _ =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function A() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            _.matches
          );
        }
        function b(M, T) {
          var P;
          switch (T) {
            case "add":
              (P = M.attr("tabindex")),
                P
                  ? M.attr("data-wf-tabindex-swap", P)
                  : M.attr("tabindex", "-1");
              break;
            case "remove":
              (P = M.attr("data-wf-tabindex-swap")),
                P
                  ? (M.attr("tabindex", P),
                    M.removeAttr("data-wf-tabindex-swap"))
                  : M.removeAttr("tabindex");
              break;
          }
          M.toggleClass("wf-force-outline-none", T === "add");
        }
        function R(M) {
          var T = M.currentTarget;
          if (
            !(
              _n.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(T.className))
            )
          ) {
            var P = I(T) ? T.hash : "";
            if (P !== "") {
              var V = e(P);
              V.length &&
                (M && (M.preventDefault(), M.stopPropagation()),
                L(P, M),
                window.setTimeout(
                  function () {
                    w(V, function () {
                      b(V, "add"),
                        V.get(0).focus({ preventScroll: !0 }),
                        b(V, "remove");
                    });
                  },
                  M ? 0 : 300
                ));
            }
          }
        }
        function L(M) {
          if (
            n.hash !== M &&
            r &&
            r.pushState &&
            !(_n.env.chrome && n.protocol === "file:")
          ) {
            var T = r.state && r.state.hash;
            T !== M && r.pushState({ hash: M }, "", M);
          }
        }
        function w(M, T) {
          var P = a.scrollTop(),
            V = q(M);
          if (P !== V) {
            var F = U(M, P, V),
              W = Date.now(),
              z = function () {
                var J = Date.now() - W;
                window.scroll(0, G(P, V, J, F)),
                  J <= F ? s(z) : typeof T == "function" && T();
              };
            s(z);
          }
        }
        function q(M) {
          var T = e(l),
            P = T.css("position") === "fixed" ? T.outerHeight() : 0,
            V = M.offset().top - P;
          if (M.data("scroll") === "mid") {
            var F = a.height() - P,
              W = M.outerHeight();
            W < F && (V -= Math.round((F - W) / 2));
          }
          return V;
        }
        function U(M, T, P) {
          if (A()) return 0;
          var V = 1;
          return (
            o.add(M).each(function (F, W) {
              var z = parseFloat(W.getAttribute("data-scroll-time"));
              !isNaN(z) && z >= 0 && (V = z);
            }),
            (472.143 * Math.log(Math.abs(T - P) + 125) - 2e3) * V
          );
        }
        function G(M, T, P, V) {
          return P > V ? T : M + (T - M) * B(P / V);
        }
        function B(M) {
          return M < 0.5
            ? 4 * M * M * M
            : (M - 1) * (2 * M - 2) * (2 * M - 2) + 1;
        }
        function H() {
          var { WF_CLICK_EMPTY: M, WF_CLICK_SCROLL: T } = t;
          i.on(T, d, R),
            i.on(M, h, function (P) {
              P.preventDefault();
            }),
            document.head.insertBefore(g, document.head.firstChild);
        }
        return { ready: H };
      })
    );
  });
  var Eo = c((Mx, go) => {
    "use strict";
    var po = qe();
    po.define(
      "focus",
      (go.exports = function () {
        var e = [],
          t = !1;
        function n(o) {
          t &&
            (o.preventDefault(),
            o.stopPropagation(),
            o.stopImmediatePropagation(),
            e.unshift(o));
        }
        function r(o) {
          var s = o.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function a(o) {
          r(o) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, o.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function i() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            po.env.safari &&
            (document.addEventListener("mousedown", a, !0),
            document.addEventListener("mouseup", n, !0),
            document.addEventListener("click", n, !0));
        }
        return { ready: i };
      })
    );
  });
  var vo = c((Fx, ho) => {
    "use strict";
    var Eh = qe();
    Eh.define(
      "focus-visible",
      (ho.exports = function () {
        function e(n) {
          var r = !0,
            a = !1,
            i = null,
            o = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(b) {
            return !!(
              b &&
              b !== document &&
              b.nodeName !== "HTML" &&
              b.nodeName !== "BODY" &&
              "classList" in b &&
              "contains" in b.classList
            );
          }
          function u(b) {
            var R = b.type,
              L = b.tagName;
            return !!(
              (L === "INPUT" && o[R] && !b.readOnly) ||
              (L === "TEXTAREA" && !b.readOnly) ||
              b.isContentEditable
            );
          }
          function l(b) {
            b.getAttribute("data-wf-focus-visible") ||
              b.setAttribute("data-wf-focus-visible", "true");
          }
          function h(b) {
            b.getAttribute("data-wf-focus-visible") &&
              b.removeAttribute("data-wf-focus-visible");
          }
          function d(b) {
            b.metaKey ||
              b.altKey ||
              b.ctrlKey ||
              (s(n.activeElement) && l(n.activeElement), (r = !0));
          }
          function p() {
            r = !1;
          }
          function g(b) {
            s(b.target) && (r || u(b.target)) && l(b.target);
          }
          function E(b) {
            s(b.target) &&
              b.target.hasAttribute("data-wf-focus-visible") &&
              ((a = !0),
              window.clearTimeout(i),
              (i = window.setTimeout(function () {
                a = !1;
              }, 100)),
              h(b.target));
          }
          function y() {
            document.visibilityState === "hidden" && (a && (r = !0), I());
          }
          function I() {
            document.addEventListener("mousemove", A),
              document.addEventListener("mousedown", A),
              document.addEventListener("mouseup", A),
              document.addEventListener("pointermove", A),
              document.addEventListener("pointerdown", A),
              document.addEventListener("pointerup", A),
              document.addEventListener("touchmove", A),
              document.addEventListener("touchstart", A),
              document.addEventListener("touchend", A);
          }
          function _() {
            document.removeEventListener("mousemove", A),
              document.removeEventListener("mousedown", A),
              document.removeEventListener("mouseup", A),
              document.removeEventListener("pointermove", A),
              document.removeEventListener("pointerdown", A),
              document.removeEventListener("pointerup", A),
              document.removeEventListener("touchmove", A),
              document.removeEventListener("touchstart", A),
              document.removeEventListener("touchend", A);
          }
          function A(b) {
            (b.target.nodeName && b.target.nodeName.toLowerCase() === "html") ||
              ((r = !1), _());
          }
          document.addEventListener("keydown", d, !0),
            document.addEventListener("mousedown", p, !0),
            document.addEventListener("pointerdown", p, !0),
            document.addEventListener("touchstart", p, !0),
            document.addEventListener("visibilitychange", y, !0),
            I(),
            n.addEventListener("focus", g, !0),
            n.addEventListener("blur", E, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var yo = c((Dx, _o) => {
    "use strict";
    var hh = qe();
    hh.define(
      "touch",
      (_o.exports = function (e) {
        var t = {},
          n = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (i) {
            return (
              (i = typeof i == "string" ? e(i).get(0) : i), i ? new r(i) : null
            );
          });
        function r(i) {
          var o = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            l,
            h;
          i.addEventListener("touchstart", d, !1),
            i.addEventListener("touchmove", p, !1),
            i.addEventListener("touchend", g, !1),
            i.addEventListener("touchcancel", E, !1),
            i.addEventListener("mousedown", d, !1),
            i.addEventListener("mousemove", p, !1),
            i.addEventListener("mouseup", g, !1),
            i.addEventListener("mouseout", E, !1);
          function d(I) {
            var _ = I.touches;
            (_ && _.length > 1) ||
              ((o = !0),
              _ ? ((s = !0), (l = _[0].clientX)) : (l = I.clientX),
              (h = l));
          }
          function p(I) {
            if (o) {
              if (s && I.type === "mousemove") {
                I.preventDefault(), I.stopPropagation();
                return;
              }
              var _ = I.touches,
                A = _ ? _[0].clientX : I.clientX,
                b = A - h;
              (h = A),
                Math.abs(b) > u &&
                  n &&
                  String(n()) === "" &&
                  (a("swipe", I, { direction: b > 0 ? "right" : "left" }), E());
            }
          }
          function g(I) {
            if (o && ((o = !1), s && I.type === "mouseup")) {
              I.preventDefault(), I.stopPropagation(), (s = !1);
              return;
            }
          }
          function E() {
            o = !1;
          }
          function y() {
            i.removeEventListener("touchstart", d, !1),
              i.removeEventListener("touchmove", p, !1),
              i.removeEventListener("touchend", g, !1),
              i.removeEventListener("touchcancel", E, !1),
              i.removeEventListener("mousedown", d, !1),
              i.removeEventListener("mousemove", p, !1),
              i.removeEventListener("mouseup", g, !1),
              i.removeEventListener("mouseout", E, !1),
              (i = null);
          }
          this.destroy = y;
        }
        function a(i, o, s) {
          var u = e.Event(i, { originalEvent: o });
          e(o.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var mo = c((qx, Io) => {
    "use strict";
    var Rr = qe();
    Rr.define(
      "edit",
      (Io.exports = function (e, t, n) {
        if (
          ((n = n || {}),
          (Rr.env("test") || Rr.env("frame")) && !n.fixture && !vh())
        )
          return { exit: 1 };
        var r = {},
          a = e(window),
          i = e(document.documentElement),
          o = document.location,
          s = "hashchange",
          u,
          l = n.load || p,
          h = !1;
        try {
          h =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        h
          ? l()
          : o.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(o.search) ||
              /\?edit$/.test(o.href)) &&
            l()
          : a.on(s, d).triggerHandler(s);
        function d() {
          u || (/\?edit/.test(o.hash) && l());
        }
        function p() {
          (u = !0),
            (window.WebflowEditor = !0),
            a.off(s, d),
            A(function (R) {
              e.ajax({
                url: _("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: i.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: g(R),
              });
            });
        }
        function g(R) {
          return function (L) {
            if (!L) {
              console.error("Could not load editor data");
              return;
            }
            (L.thirdPartyCookiesSupported = R),
              E(I(L.scriptPath), function () {
                window.WebflowEditor(L);
              });
          };
        }
        function E(R, L) {
          e.ajax({ type: "GET", url: R, dataType: "script", cache: !0 }).then(
            L,
            y
          );
        }
        function y(R, L, w) {
          throw (console.error("Could not load editor script: " + L), w);
        }
        function I(R) {
          return R.indexOf("//") >= 0
            ? R
            : _("https://editor-api.webflow.com" + R);
        }
        function _(R) {
          return R.replace(/([^:])\/\//g, "$1/");
        }
        function A(R) {
          var L = window.document.createElement("iframe");
          (L.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (L.style.display = "none"),
            (L.sandbox = "allow-scripts allow-same-origin");
          var w = function (q) {
            q.data === "WF_third_party_cookies_unsupported"
              ? (b(L, w), R(!1))
              : q.data === "WF_third_party_cookies_supported" &&
                (b(L, w), R(!0));
          };
          (L.onerror = function () {
            b(L, w), R(!1);
          }),
            window.addEventListener("message", w, !1),
            window.document.body.appendChild(L);
        }
        function b(R, L) {
          window.removeEventListener("message", L, !1), R.remove();
        }
        return r;
      })
    );
    function vh() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Nr = c((Vx, To) => {
    var _h =
      typeof global == "object" && global && global.Object === Object && global;
    To.exports = _h;
  });
  var Pe = c((Ux, bo) => {
    var yh = Nr(),
      Ih = typeof self == "object" && self && self.Object === Object && self,
      mh = yh || Ih || Function("return this")();
    bo.exports = mh;
  });
  var _t = c((Gx, Oo) => {
    var Th = Pe(),
      bh = Th.Symbol;
    Oo.exports = bh;
  });
  var Ro = c((Bx, wo) => {
    var Ao = _t(),
      So = Object.prototype,
      Oh = So.hasOwnProperty,
      Ah = So.toString,
      Xt = Ao ? Ao.toStringTag : void 0;
    function Sh(e) {
      var t = Oh.call(e, Xt),
        n = e[Xt];
      try {
        e[Xt] = void 0;
        var r = !0;
      } catch {}
      var a = Ah.call(e);
      return r && (t ? (e[Xt] = n) : delete e[Xt]), a;
    }
    wo.exports = Sh;
  });
  var Co = c((Xx, No) => {
    var wh = Object.prototype,
      Rh = wh.toString;
    function Nh(e) {
      return Rh.call(e);
    }
    No.exports = Nh;
  });
  var je = c((kx, xo) => {
    var Lo = _t(),
      Ch = Ro(),
      Lh = Co(),
      Ph = "[object Null]",
      xh = "[object Undefined]",
      Po = Lo ? Lo.toStringTag : void 0;
    function Mh(e) {
      return e == null
        ? e === void 0
          ? xh
          : Ph
        : Po && Po in Object(e)
        ? Ch(e)
        : Lh(e);
    }
    xo.exports = Mh;
  });
  var Cr = c((Wx, Mo) => {
    function Fh(e, t) {
      return function (n) {
        return e(t(n));
      };
    }
    Mo.exports = Fh;
  });
  var Lr = c((Hx, Fo) => {
    var Dh = Cr(),
      qh = Dh(Object.getPrototypeOf, Object);
    Fo.exports = qh;
  });
  var He = c((zx, Do) => {
    function Vh(e) {
      return e != null && typeof e == "object";
    }
    Do.exports = Vh;
  });
  var Pr = c((Yx, Vo) => {
    var Uh = je(),
      Gh = Lr(),
      Bh = He(),
      Xh = "[object Object]",
      kh = Function.prototype,
      Wh = Object.prototype,
      qo = kh.toString,
      Hh = Wh.hasOwnProperty,
      zh = qo.call(Object);
    function Yh(e) {
      if (!Bh(e) || Uh(e) != Xh) return !1;
      var t = Gh(e);
      if (t === null) return !0;
      var n = Hh.call(t, "constructor") && t.constructor;
      return typeof n == "function" && n instanceof n && qo.call(n) == zh;
    }
    Vo.exports = Yh;
  });
  var Uo = c((xr) => {
    "use strict";
    Object.defineProperty(xr, "__esModule", { value: !0 });
    xr.default = Kh;
    function Kh(e) {
      var t,
        n = e.Symbol;
      return (
        typeof n == "function"
          ? n.observable
            ? (t = n.observable)
            : ((t = n("observable")), (n.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var Go = c((Fr, Mr) => {
    "use strict";
    Object.defineProperty(Fr, "__esModule", { value: !0 });
    var jh = Uo(),
      Qh = $h(jh);
    function $h(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var yt;
    typeof self < "u"
      ? (yt = self)
      : typeof window < "u"
      ? (yt = window)
      : typeof global < "u"
      ? (yt = global)
      : typeof Mr < "u"
      ? (yt = Mr)
      : (yt = Function("return this")());
    var Zh = (0, Qh.default)(yt);
    Fr.default = Zh;
  });
  var Dr = c((kt) => {
    "use strict";
    kt.__esModule = !0;
    kt.ActionTypes = void 0;
    kt.default = Wo;
    var Jh = Pr(),
      e0 = ko(Jh),
      t0 = Go(),
      Bo = ko(t0);
    function ko(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Xo = (kt.ActionTypes = { INIT: "@@redux/INIT" });
    function Wo(e, t, n) {
      var r;
      if (
        (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
        typeof n < "u")
      ) {
        if (typeof n != "function")
          throw new Error("Expected the enhancer to be a function.");
        return n(Wo)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var a = e,
        i = t,
        o = [],
        s = o,
        u = !1;
      function l() {
        s === o && (s = o.slice());
      }
      function h() {
        return i;
      }
      function d(y) {
        if (typeof y != "function")
          throw new Error("Expected listener to be a function.");
        var I = !0;
        return (
          l(),
          s.push(y),
          function () {
            if (I) {
              (I = !1), l();
              var A = s.indexOf(y);
              s.splice(A, 1);
            }
          }
        );
      }
      function p(y) {
        if (!(0, e0.default)(y))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof y.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (i = a(i, y));
        } finally {
          u = !1;
        }
        for (var I = (o = s), _ = 0; _ < I.length; _++) I[_]();
        return y;
      }
      function g(y) {
        if (typeof y != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (a = y), p({ type: Xo.INIT });
      }
      function E() {
        var y,
          I = d;
        return (
          (y = {
            subscribe: function (A) {
              if (typeof A != "object")
                throw new TypeError("Expected the observer to be an object.");
              function b() {
                A.next && A.next(h());
              }
              b();
              var R = I(b);
              return { unsubscribe: R };
            },
          }),
          (y[Bo.default] = function () {
            return this;
          }),
          y
        );
      }
      return (
        p({ type: Xo.INIT }),
        (r = { dispatch: p, subscribe: d, getState: h, replaceReducer: g }),
        (r[Bo.default] = E),
        r
      );
    }
  });
  var Vr = c((qr) => {
    "use strict";
    qr.__esModule = !0;
    qr.default = n0;
    function n0(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var Yo = c((Ur) => {
    "use strict";
    Ur.__esModule = !0;
    Ur.default = s0;
    var Ho = Dr(),
      r0 = Pr(),
      $x = zo(r0),
      i0 = Vr(),
      Zx = zo(i0);
    function zo(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function a0(e, t) {
      var n = t && t.type,
        r = (n && '"' + n.toString() + '"') || "an action";
      return (
        "Given action " +
        r +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function o0(e) {
      Object.keys(e).forEach(function (t) {
        var n = e[t],
          r = n(void 0, { type: Ho.ActionTypes.INIT });
        if (typeof r > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var a =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof n(void 0, { type: a }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                Ho.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function s0(e) {
      for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var a = t[r];
        typeof e[a] == "function" && (n[a] = e[a]);
      }
      var i = Object.keys(n);
      if (!1) var o;
      var s;
      try {
        o0(n);
      } catch (u) {
        s = u;
      }
      return function () {
        var l =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          h = arguments[1];
        if (s) throw s;
        if (!1) var d;
        for (var p = !1, g = {}, E = 0; E < i.length; E++) {
          var y = i[E],
            I = n[y],
            _ = l[y],
            A = I(_, h);
          if (typeof A > "u") {
            var b = a0(y, h);
            throw new Error(b);
          }
          (g[y] = A), (p = p || A !== _);
        }
        return p ? g : l;
      };
    }
  });
  var jo = c((Gr) => {
    "use strict";
    Gr.__esModule = !0;
    Gr.default = u0;
    function Ko(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function u0(e, t) {
      if (typeof e == "function") return Ko(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var n = Object.keys(e), r = {}, a = 0; a < n.length; a++) {
        var i = n[a],
          o = e[i];
        typeof o == "function" && (r[i] = Ko(o, t));
      }
      return r;
    }
  });
  var Xr = c((Br) => {
    "use strict";
    Br.__esModule = !0;
    Br.default = c0;
    function c0() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      if (t.length === 0)
        return function (i) {
          return i;
        };
      if (t.length === 1) return t[0];
      var r = t[t.length - 1],
        a = t.slice(0, -1);
      return function () {
        return a.reduceRight(function (i, o) {
          return o(i);
        }, r.apply(void 0, arguments));
      };
    }
  });
  var Qo = c((kr) => {
    "use strict";
    kr.__esModule = !0;
    var l0 =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    kr.default = g0;
    var f0 = Xr(),
      d0 = p0(f0);
    function p0(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function g0() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (r) {
        return function (a, i, o) {
          var s = r(a, i, o),
            u = s.dispatch,
            l = [],
            h = {
              getState: s.getState,
              dispatch: function (p) {
                return u(p);
              },
            };
          return (
            (l = t.map(function (d) {
              return d(h);
            })),
            (u = d0.default.apply(void 0, l)(s.dispatch)),
            l0({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var Wr = c((Se) => {
    "use strict";
    Se.__esModule = !0;
    Se.compose =
      Se.applyMiddleware =
      Se.bindActionCreators =
      Se.combineReducers =
      Se.createStore =
        void 0;
    var E0 = Dr(),
      h0 = It(E0),
      v0 = Yo(),
      _0 = It(v0),
      y0 = jo(),
      I0 = It(y0),
      m0 = Qo(),
      T0 = It(m0),
      b0 = Xr(),
      O0 = It(b0),
      A0 = Vr(),
      rM = It(A0);
    function It(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Se.createStore = h0.default;
    Se.combineReducers = _0.default;
    Se.bindActionCreators = I0.default;
    Se.applyMiddleware = T0.default;
    Se.compose = O0.default;
  });
  var $o = c((Hr) => {
    "use strict";
    Object.defineProperty(Hr, "__esModule", { value: !0 });
    function S0(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    S0(Hr, {
      EventAppliesTo: function () {
        return R0;
      },
      EventBasedOn: function () {
        return N0;
      },
      EventContinuousMouseAxes: function () {
        return C0;
      },
      EventLimitAffectedElements: function () {
        return L0;
      },
      EventTypeConsts: function () {
        return w0;
      },
      QuickEffectDirectionConsts: function () {
        return x0;
      },
      QuickEffectIds: function () {
        return P0;
      },
    });
    var w0 = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      },
      R0 = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
      N0 = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
      C0 = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
      L0 = {
        CHILDREN: "CHILDREN",
        SIBLINGS: "SIBLINGS",
        IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
      },
      P0 = {
        FADE_EFFECT: "FADE_EFFECT",
        SLIDE_EFFECT: "SLIDE_EFFECT",
        GROW_EFFECT: "GROW_EFFECT",
        SHRINK_EFFECT: "SHRINK_EFFECT",
        SPIN_EFFECT: "SPIN_EFFECT",
        FLY_EFFECT: "FLY_EFFECT",
        POP_EFFECT: "POP_EFFECT",
        FLIP_EFFECT: "FLIP_EFFECT",
        JIGGLE_EFFECT: "JIGGLE_EFFECT",
        PULSE_EFFECT: "PULSE_EFFECT",
        DROP_EFFECT: "DROP_EFFECT",
        BLINK_EFFECT: "BLINK_EFFECT",
        BOUNCE_EFFECT: "BOUNCE_EFFECT",
        FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
        FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
        RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
        JELLO_EFFECT: "JELLO_EFFECT",
        GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
        SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
        PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
      },
      x0 = {
        LEFT: "LEFT",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        TOP: "TOP",
        BOTTOM_LEFT: "BOTTOM_LEFT",
        BOTTOM_RIGHT: "BOTTOM_RIGHT",
        TOP_RIGHT: "TOP_RIGHT",
        TOP_LEFT: "TOP_LEFT",
        CLOCKWISE: "CLOCKWISE",
        COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
      };
  });
  var Yr = c((zr) => {
    "use strict";
    Object.defineProperty(zr, "__esModule", { value: !0 });
    function M0(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    M0(zr, {
      ActionAppliesTo: function () {
        return D0;
      },
      ActionTypeConsts: function () {
        return F0;
      },
    });
    var F0 = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_RIVE: "PLUGIN_RIVE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      },
      D0 = {
        ELEMENT: "ELEMENT",
        ELEMENT_CLASS: "ELEMENT_CLASS",
        TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
      };
  });
  var Zo = c((Kr) => {
    "use strict";
    Object.defineProperty(Kr, "__esModule", { value: !0 });
    Object.defineProperty(Kr, "InteractionTypeConsts", {
      enumerable: !0,
      get: function () {
        return q0;
      },
    });
    var q0 = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION",
    };
  });
  var Jo = c((jr) => {
    "use strict";
    Object.defineProperty(jr, "__esModule", { value: !0 });
    Object.defineProperty(jr, "ReducedMotionTypes", {
      enumerable: !0,
      get: function () {
        return z0;
      },
    });
    var V0 = Yr(),
      {
        TRANSFORM_MOVE: U0,
        TRANSFORM_SCALE: G0,
        TRANSFORM_ROTATE: B0,
        TRANSFORM_SKEW: X0,
        STYLE_SIZE: k0,
        STYLE_FILTER: W0,
        STYLE_FONT_VARIATION: H0,
      } = V0.ActionTypeConsts,
      z0 = {
        [U0]: !0,
        [G0]: !0,
        [B0]: !0,
        [X0]: !0,
        [k0]: !0,
        [W0]: !0,
        [H0]: !0,
      };
  });
  var es = c((Qr) => {
    "use strict";
    Object.defineProperty(Qr, "__esModule", { value: !0 });
    function Y0(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    Y0(Qr, {
      IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
        return lv;
      },
      IX2_ANIMATION_FRAME_CHANGED: function () {
        return iv;
      },
      IX2_CLEAR_REQUESTED: function () {
        return tv;
      },
      IX2_ELEMENT_STATE_CHANGED: function () {
        return cv;
      },
      IX2_EVENT_LISTENER_ADDED: function () {
        return nv;
      },
      IX2_EVENT_STATE_CHANGED: function () {
        return rv;
      },
      IX2_INSTANCE_ADDED: function () {
        return ov;
      },
      IX2_INSTANCE_REMOVED: function () {
        return uv;
      },
      IX2_INSTANCE_STARTED: function () {
        return sv;
      },
      IX2_MEDIA_QUERIES_DEFINED: function () {
        return dv;
      },
      IX2_PARAMETER_CHANGED: function () {
        return av;
      },
      IX2_PLAYBACK_REQUESTED: function () {
        return J0;
      },
      IX2_PREVIEW_REQUESTED: function () {
        return Z0;
      },
      IX2_RAW_DATA_IMPORTED: function () {
        return K0;
      },
      IX2_SESSION_INITIALIZED: function () {
        return j0;
      },
      IX2_SESSION_STARTED: function () {
        return Q0;
      },
      IX2_SESSION_STOPPED: function () {
        return $0;
      },
      IX2_STOP_REQUESTED: function () {
        return ev;
      },
      IX2_TEST_FRAME_RENDERED: function () {
        return pv;
      },
      IX2_VIEWPORT_WIDTH_CHANGED: function () {
        return fv;
      },
    });
    var K0 = "IX2_RAW_DATA_IMPORTED",
      j0 = "IX2_SESSION_INITIALIZED",
      Q0 = "IX2_SESSION_STARTED",
      $0 = "IX2_SESSION_STOPPED",
      Z0 = "IX2_PREVIEW_REQUESTED",
      J0 = "IX2_PLAYBACK_REQUESTED",
      ev = "IX2_STOP_REQUESTED",
      tv = "IX2_CLEAR_REQUESTED",
      nv = "IX2_EVENT_LISTENER_ADDED",
      rv = "IX2_EVENT_STATE_CHANGED",
      iv = "IX2_ANIMATION_FRAME_CHANGED",
      av = "IX2_PARAMETER_CHANGED",
      ov = "IX2_INSTANCE_ADDED",
      sv = "IX2_INSTANCE_STARTED",
      uv = "IX2_INSTANCE_REMOVED",
      cv = "IX2_ELEMENT_STATE_CHANGED",
      lv = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
      fv = "IX2_VIEWPORT_WIDTH_CHANGED",
      dv = "IX2_MEDIA_QUERIES_DEFINED",
      pv = "IX2_TEST_FRAME_RENDERED";
  });
  var ts = c(($r) => {
    "use strict";
    Object.defineProperty($r, "__esModule", { value: !0 });
    function gv(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    gv($r, {
      ABSTRACT_NODE: function () {
        return d_;
      },
      AUTO: function () {
        return t_;
      },
      BACKGROUND: function () {
        return jv;
      },
      BACKGROUND_COLOR: function () {
        return Kv;
      },
      BAR_DELIMITER: function () {
        return i_;
      },
      BORDER_COLOR: function () {
        return Qv;
      },
      BOUNDARY_SELECTOR: function () {
        return yv;
      },
      CHILDREN: function () {
        return a_;
      },
      COLON_DELIMITER: function () {
        return r_;
      },
      COLOR: function () {
        return $v;
      },
      COMMA_DELIMITER: function () {
        return n_;
      },
      CONFIG_UNIT: function () {
        return wv;
      },
      CONFIG_VALUE: function () {
        return bv;
      },
      CONFIG_X_UNIT: function () {
        return Ov;
      },
      CONFIG_X_VALUE: function () {
        return Iv;
      },
      CONFIG_Y_UNIT: function () {
        return Av;
      },
      CONFIG_Y_VALUE: function () {
        return mv;
      },
      CONFIG_Z_UNIT: function () {
        return Sv;
      },
      CONFIG_Z_VALUE: function () {
        return Tv;
      },
      DISPLAY: function () {
        return Zv;
      },
      FILTER: function () {
        return Wv;
      },
      FLEX: function () {
        return Jv;
      },
      FONT_VARIATION_SETTINGS: function () {
        return Hv;
      },
      HEIGHT: function () {
        return Yv;
      },
      HTML_ELEMENT: function () {
        return l_;
      },
      IMMEDIATE_CHILDREN: function () {
        return o_;
      },
      IX2_ID_DELIMITER: function () {
        return Ev;
      },
      OPACITY: function () {
        return kv;
      },
      PARENT: function () {
        return u_;
      },
      PLAIN_OBJECT: function () {
        return f_;
      },
      PRESERVE_3D: function () {
        return c_;
      },
      RENDER_GENERAL: function () {
        return g_;
      },
      RENDER_PLUGIN: function () {
        return h_;
      },
      RENDER_STYLE: function () {
        return E_;
      },
      RENDER_TRANSFORM: function () {
        return p_;
      },
      ROTATE_X: function () {
        return qv;
      },
      ROTATE_Y: function () {
        return Vv;
      },
      ROTATE_Z: function () {
        return Uv;
      },
      SCALE_3D: function () {
        return Dv;
      },
      SCALE_X: function () {
        return xv;
      },
      SCALE_Y: function () {
        return Mv;
      },
      SCALE_Z: function () {
        return Fv;
      },
      SIBLINGS: function () {
        return s_;
      },
      SKEW: function () {
        return Gv;
      },
      SKEW_X: function () {
        return Bv;
      },
      SKEW_Y: function () {
        return Xv;
      },
      TRANSFORM: function () {
        return Rv;
      },
      TRANSLATE_3D: function () {
        return Pv;
      },
      TRANSLATE_X: function () {
        return Nv;
      },
      TRANSLATE_Y: function () {
        return Cv;
      },
      TRANSLATE_Z: function () {
        return Lv;
      },
      WF_PAGE: function () {
        return hv;
      },
      WIDTH: function () {
        return zv;
      },
      WILL_CHANGE: function () {
        return e_;
      },
      W_MOD_IX: function () {
        return _v;
      },
      W_MOD_JS: function () {
        return vv;
      },
    });
    var Ev = "|",
      hv = "data-wf-page",
      vv = "w-mod-js",
      _v = "w-mod-ix",
      yv = ".w-dyn-item",
      Iv = "xValue",
      mv = "yValue",
      Tv = "zValue",
      bv = "value",
      Ov = "xUnit",
      Av = "yUnit",
      Sv = "zUnit",
      wv = "unit",
      Rv = "transform",
      Nv = "translateX",
      Cv = "translateY",
      Lv = "translateZ",
      Pv = "translate3d",
      xv = "scaleX",
      Mv = "scaleY",
      Fv = "scaleZ",
      Dv = "scale3d",
      qv = "rotateX",
      Vv = "rotateY",
      Uv = "rotateZ",
      Gv = "skew",
      Bv = "skewX",
      Xv = "skewY",
      kv = "opacity",
      Wv = "filter",
      Hv = "font-variation-settings",
      zv = "width",
      Yv = "height",
      Kv = "backgroundColor",
      jv = "background",
      Qv = "borderColor",
      $v = "color",
      Zv = "display",
      Jv = "flex",
      e_ = "willChange",
      t_ = "AUTO",
      n_ = ",",
      r_ = ":",
      i_ = "|",
      a_ = "CHILDREN",
      o_ = "IMMEDIATE_CHILDREN",
      s_ = "SIBLINGS",
      u_ = "PARENT",
      c_ = "preserve-3d",
      l_ = "HTML_ELEMENT",
      f_ = "PLAIN_OBJECT",
      d_ = "ABSTRACT_NODE",
      p_ = "RENDER_TRANSFORM",
      g_ = "RENDER_GENERAL",
      E_ = "RENDER_STYLE",
      h_ = "RENDER_PLUGIN";
  });
  var me = c((rt) => {
    "use strict";
    Object.defineProperty(rt, "__esModule", { value: !0 });
    function v_(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    v_(rt, {
      ActionTypeConsts: function () {
        return y_.ActionTypeConsts;
      },
      IX2EngineActionTypes: function () {
        return I_;
      },
      IX2EngineConstants: function () {
        return m_;
      },
      QuickEffectIds: function () {
        return __.QuickEffectIds;
      },
    });
    var __ = yn($o(), rt),
      y_ = yn(Yr(), rt);
    yn(Zo(), rt);
    yn(Jo(), rt);
    var I_ = rs(es()),
      m_ = rs(ts());
    function yn(e, t) {
      return (
        Object.keys(e).forEach(function (n) {
          n !== "default" &&
            !Object.prototype.hasOwnProperty.call(t, n) &&
            Object.defineProperty(t, n, {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            });
        }),
        e
      );
    }
    function ns(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (ns = function (r) {
        return r ? n : t;
      })(e);
    }
    function rs(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = ns(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
  });
  var is = c((Zr) => {
    "use strict";
    Object.defineProperty(Zr, "__esModule", { value: !0 });
    Object.defineProperty(Zr, "ixData", {
      enumerable: !0,
      get: function () {
        return O_;
      },
    });
    var T_ = me(),
      { IX2_RAW_DATA_IMPORTED: b_ } = T_.IX2EngineActionTypes,
      O_ = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case b_:
            return t.payload.ixData || Object.freeze({});
          default:
            return e;
        }
      };
  });
  var mt = c((se) => {
    "use strict";
    Object.defineProperty(se, "__esModule", { value: !0 });
    var A_ =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    se.clone = mn;
    se.addLast = ss;
    se.addFirst = us;
    se.removeLast = cs;
    se.removeFirst = ls;
    se.insert = fs;
    se.removeAt = ds;
    se.replaceAt = ps;
    se.getIn = Tn;
    se.set = bn;
    se.setIn = On;
    se.update = Es;
    se.updateIn = hs;
    se.merge = vs;
    se.mergeDeep = _s;
    se.mergeIn = ys;
    se.omit = Is;
    se.addDefaults = ms;
    var as = "INVALID_ARGS";
    function os(e) {
      throw new Error(e);
    }
    function Jr(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var S_ = {}.hasOwnProperty;
    function mn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Jr(e), n = {}, r = 0; r < t.length; r++) {
        var a = t[r];
        n[a] = e[a];
      }
      return n;
    }
    function Te(e, t, n) {
      var r = n;
      r == null && os(as);
      for (
        var a = !1, i = arguments.length, o = Array(i > 3 ? i - 3 : 0), s = 3;
        s < i;
        s++
      )
        o[s - 3] = arguments[s];
      for (var u = 0; u < o.length; u++) {
        var l = o[u];
        if (l != null) {
          var h = Jr(l);
          if (h.length)
            for (var d = 0; d <= h.length; d++) {
              var p = h[d];
              if (!(e && r[p] !== void 0)) {
                var g = l[p];
                t && In(r[p]) && In(g) && (g = Te(e, t, r[p], g)),
                  !(g === void 0 || g === r[p]) &&
                    (a || ((a = !0), (r = mn(r))), (r[p] = g));
              }
            }
        }
      }
      return r;
    }
    function In(e) {
      var t = typeof e > "u" ? "undefined" : A_(e);
      return e != null && (t === "object" || t === "function");
    }
    function ss(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function us(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function cs(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function ls(e) {
      return e.length ? e.slice(1) : e;
    }
    function fs(e, t, n) {
      return e
        .slice(0, t)
        .concat(Array.isArray(n) ? n : [n])
        .concat(e.slice(t));
    }
    function ds(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function ps(e, t, n) {
      if (e[t] === n) return e;
      for (var r = e.length, a = Array(r), i = 0; i < r; i++) a[i] = e[i];
      return (a[t] = n), a;
    }
    function Tn(e, t) {
      if ((!Array.isArray(t) && os(as), e != null)) {
        for (var n = e, r = 0; r < t.length; r++) {
          var a = t[r];
          if (((n = n?.[a]), n === void 0)) return n;
        }
        return n;
      }
    }
    function bn(e, t, n) {
      var r = typeof t == "number" ? [] : {},
        a = e ?? r;
      if (a[t] === n) return a;
      var i = mn(a);
      return (i[t] = n), i;
    }
    function gs(e, t, n, r) {
      var a = void 0,
        i = t[r];
      if (r === t.length - 1) a = n;
      else {
        var o =
          In(e) && In(e[i]) ? e[i] : typeof t[r + 1] == "number" ? [] : {};
        a = gs(o, t, n, r + 1);
      }
      return bn(e, i, a);
    }
    function On(e, t, n) {
      return t.length ? gs(e, t, n, 0) : n;
    }
    function Es(e, t, n) {
      var r = e?.[t],
        a = n(r);
      return bn(e, t, a);
    }
    function hs(e, t, n) {
      var r = Tn(e, t),
        a = n(r);
      return On(e, t, a);
    }
    function vs(e, t, n, r, a, i) {
      for (
        var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), u = 6;
        u < o;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Te.call.apply(Te, [null, !1, !1, e, t, n, r, a, i].concat(s))
        : Te(!1, !1, e, t, n, r, a, i);
    }
    function _s(e, t, n, r, a, i) {
      for (
        var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), u = 6;
        u < o;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Te.call.apply(Te, [null, !1, !0, e, t, n, r, a, i].concat(s))
        : Te(!1, !0, e, t, n, r, a, i);
    }
    function ys(e, t, n, r, a, i, o) {
      var s = Tn(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
          l = arguments.length,
          h = Array(l > 7 ? l - 7 : 0),
          d = 7;
        d < l;
        d++
      )
        h[d - 7] = arguments[d];
      return (
        h.length
          ? (u = Te.call.apply(Te, [null, !1, !1, s, n, r, a, i, o].concat(h)))
          : (u = Te(!1, !1, s, n, r, a, i, o)),
        On(e, t, u)
      );
    }
    function Is(e, t) {
      for (var n = Array.isArray(t) ? t : [t], r = !1, a = 0; a < n.length; a++)
        if (S_.call(e, n[a])) {
          r = !0;
          break;
        }
      if (!r) return e;
      for (var i = {}, o = Jr(e), s = 0; s < o.length; s++) {
        var u = o[s];
        n.indexOf(u) >= 0 || (i[u] = e[u]);
      }
      return i;
    }
    function ms(e, t, n, r, a, i) {
      for (
        var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), u = 6;
        u < o;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Te.call.apply(Te, [null, !0, !1, e, t, n, r, a, i].concat(s))
        : Te(!0, !1, e, t, n, r, a, i);
    }
    var w_ = {
      clone: mn,
      addLast: ss,
      addFirst: us,
      removeLast: cs,
      removeFirst: ls,
      insert: fs,
      removeAt: ds,
      replaceAt: ps,
      getIn: Tn,
      set: bn,
      setIn: On,
      update: Es,
      updateIn: hs,
      merge: vs,
      mergeDeep: _s,
      mergeIn: ys,
      omit: Is,
      addDefaults: ms,
    };
    se.default = w_;
  });
  var bs = c((ei) => {
    "use strict";
    Object.defineProperty(ei, "__esModule", { value: !0 });
    Object.defineProperty(ei, "ixRequest", {
      enumerable: !0,
      get: function () {
        return F_;
      },
    });
    var R_ = me(),
      N_ = mt(),
      {
        IX2_PREVIEW_REQUESTED: C_,
        IX2_PLAYBACK_REQUESTED: L_,
        IX2_STOP_REQUESTED: P_,
        IX2_CLEAR_REQUESTED: x_,
      } = R_.IX2EngineActionTypes,
      M_ = { preview: {}, playback: {}, stop: {}, clear: {} },
      Ts = Object.create(null, {
        [C_]: { value: "preview" },
        [L_]: { value: "playback" },
        [P_]: { value: "stop" },
        [x_]: { value: "clear" },
      }),
      F_ = (e = M_, t) => {
        if (t.type in Ts) {
          let n = [Ts[t.type]];
          return (0, N_.setIn)(e, [n], { ...t.payload });
        }
        return e;
      };
  });
  var As = c((ti) => {
    "use strict";
    Object.defineProperty(ti, "__esModule", { value: !0 });
    Object.defineProperty(ti, "ixSession", {
      enumerable: !0,
      get: function () {
        return K_;
      },
    });
    var D_ = me(),
      Ve = mt(),
      {
        IX2_SESSION_INITIALIZED: q_,
        IX2_SESSION_STARTED: V_,
        IX2_TEST_FRAME_RENDERED: U_,
        IX2_SESSION_STOPPED: G_,
        IX2_EVENT_LISTENER_ADDED: B_,
        IX2_EVENT_STATE_CHANGED: X_,
        IX2_ANIMATION_FRAME_CHANGED: k_,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: W_,
        IX2_VIEWPORT_WIDTH_CHANGED: H_,
        IX2_MEDIA_QUERIES_DEFINED: z_,
      } = D_.IX2EngineActionTypes,
      Os = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      },
      Y_ = 20,
      K_ = (e = Os, t) => {
        switch (t.type) {
          case q_: {
            let { hasBoundaryNodes: n, reducedMotion: r } = t.payload;
            return (0, Ve.merge)(e, { hasBoundaryNodes: n, reducedMotion: r });
          }
          case V_:
            return (0, Ve.set)(e, "active", !0);
          case U_: {
            let {
              payload: { step: n = Y_ },
            } = t;
            return (0, Ve.set)(e, "tick", e.tick + n);
          }
          case G_:
            return Os;
          case k_: {
            let {
              payload: { now: n },
            } = t;
            return (0, Ve.set)(e, "tick", n);
          }
          case B_: {
            let n = (0, Ve.addLast)(e.eventListeners, t.payload);
            return (0, Ve.set)(e, "eventListeners", n);
          }
          case X_: {
            let { stateKey: n, newState: r } = t.payload;
            return (0, Ve.setIn)(e, ["eventState", n], r);
          }
          case W_: {
            let { actionListId: n, isPlaying: r } = t.payload;
            return (0, Ve.setIn)(e, ["playbackState", n], r);
          }
          case H_: {
            let { width: n, mediaQueries: r } = t.payload,
              a = r.length,
              i = null;
            for (let o = 0; o < a; o++) {
              let { key: s, min: u, max: l } = r[o];
              if (n >= u && n <= l) {
                i = s;
                break;
              }
            }
            return (0, Ve.merge)(e, { viewportWidth: n, mediaQueryKey: i });
          }
          case z_:
            return (0, Ve.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e;
        }
      };
  });
  var ws = c((hM, Ss) => {
    function j_() {
      (this.__data__ = []), (this.size = 0);
    }
    Ss.exports = j_;
  });
  var An = c((vM, Rs) => {
    function Q_(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Rs.exports = Q_;
  });
  var Wt = c((_M, Ns) => {
    var $_ = An();
    function Z_(e, t) {
      for (var n = e.length; n--; ) if ($_(e[n][0], t)) return n;
      return -1;
    }
    Ns.exports = Z_;
  });
  var Ls = c((yM, Cs) => {
    var J_ = Wt(),
      ey = Array.prototype,
      ty = ey.splice;
    function ny(e) {
      var t = this.__data__,
        n = J_(t, e);
      if (n < 0) return !1;
      var r = t.length - 1;
      return n == r ? t.pop() : ty.call(t, n, 1), --this.size, !0;
    }
    Cs.exports = ny;
  });
  var xs = c((IM, Ps) => {
    var ry = Wt();
    function iy(e) {
      var t = this.__data__,
        n = ry(t, e);
      return n < 0 ? void 0 : t[n][1];
    }
    Ps.exports = iy;
  });
  var Fs = c((mM, Ms) => {
    var ay = Wt();
    function oy(e) {
      return ay(this.__data__, e) > -1;
    }
    Ms.exports = oy;
  });
  var qs = c((TM, Ds) => {
    var sy = Wt();
    function uy(e, t) {
      var n = this.__data__,
        r = sy(n, e);
      return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
    }
    Ds.exports = uy;
  });
  var Ht = c((bM, Vs) => {
    var cy = ws(),
      ly = Ls(),
      fy = xs(),
      dy = Fs(),
      py = qs();
    function Tt(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    Tt.prototype.clear = cy;
    Tt.prototype.delete = ly;
    Tt.prototype.get = fy;
    Tt.prototype.has = dy;
    Tt.prototype.set = py;
    Vs.exports = Tt;
  });
  var Gs = c((OM, Us) => {
    var gy = Ht();
    function Ey() {
      (this.__data__ = new gy()), (this.size = 0);
    }
    Us.exports = Ey;
  });
  var Xs = c((AM, Bs) => {
    function hy(e) {
      var t = this.__data__,
        n = t.delete(e);
      return (this.size = t.size), n;
    }
    Bs.exports = hy;
  });
  var Ws = c((SM, ks) => {
    function vy(e) {
      return this.__data__.get(e);
    }
    ks.exports = vy;
  });
  var zs = c((wM, Hs) => {
    function _y(e) {
      return this.__data__.has(e);
    }
    Hs.exports = _y;
  });
  var Ue = c((RM, Ys) => {
    function yy(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    Ys.exports = yy;
  });
  var ni = c((NM, Ks) => {
    var Iy = je(),
      my = Ue(),
      Ty = "[object AsyncFunction]",
      by = "[object Function]",
      Oy = "[object GeneratorFunction]",
      Ay = "[object Proxy]";
    function Sy(e) {
      if (!my(e)) return !1;
      var t = Iy(e);
      return t == by || t == Oy || t == Ty || t == Ay;
    }
    Ks.exports = Sy;
  });
  var Qs = c((CM, js) => {
    var wy = Pe(),
      Ry = wy["__core-js_shared__"];
    js.exports = Ry;
  });
  var Js = c((LM, Zs) => {
    var ri = Qs(),
      $s = (function () {
        var e = /[^.]+$/.exec((ri && ri.keys && ri.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function Ny(e) {
      return !!$s && $s in e;
    }
    Zs.exports = Ny;
  });
  var ii = c((PM, eu) => {
    var Cy = Function.prototype,
      Ly = Cy.toString;
    function Py(e) {
      if (e != null) {
        try {
          return Ly.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    eu.exports = Py;
  });
  var nu = c((xM, tu) => {
    var xy = ni(),
      My = Js(),
      Fy = Ue(),
      Dy = ii(),
      qy = /[\\^$.*+?()[\]{}|]/g,
      Vy = /^\[object .+?Constructor\]$/,
      Uy = Function.prototype,
      Gy = Object.prototype,
      By = Uy.toString,
      Xy = Gy.hasOwnProperty,
      ky = RegExp(
        "^" +
          By.call(Xy)
            .replace(qy, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function Wy(e) {
      if (!Fy(e) || My(e)) return !1;
      var t = xy(e) ? ky : Vy;
      return t.test(Dy(e));
    }
    tu.exports = Wy;
  });
  var iu = c((MM, ru) => {
    function Hy(e, t) {
      return e?.[t];
    }
    ru.exports = Hy;
  });
  var Qe = c((FM, au) => {
    var zy = nu(),
      Yy = iu();
    function Ky(e, t) {
      var n = Yy(e, t);
      return zy(n) ? n : void 0;
    }
    au.exports = Ky;
  });
  var Sn = c((DM, ou) => {
    var jy = Qe(),
      Qy = Pe(),
      $y = jy(Qy, "Map");
    ou.exports = $y;
  });
  var zt = c((qM, su) => {
    var Zy = Qe(),
      Jy = Zy(Object, "create");
    su.exports = Jy;
  });
  var lu = c((VM, cu) => {
    var uu = zt();
    function eI() {
      (this.__data__ = uu ? uu(null) : {}), (this.size = 0);
    }
    cu.exports = eI;
  });
  var du = c((UM, fu) => {
    function tI(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    fu.exports = tI;
  });
  var gu = c((GM, pu) => {
    var nI = zt(),
      rI = "__lodash_hash_undefined__",
      iI = Object.prototype,
      aI = iI.hasOwnProperty;
    function oI(e) {
      var t = this.__data__;
      if (nI) {
        var n = t[e];
        return n === rI ? void 0 : n;
      }
      return aI.call(t, e) ? t[e] : void 0;
    }
    pu.exports = oI;
  });
  var hu = c((BM, Eu) => {
    var sI = zt(),
      uI = Object.prototype,
      cI = uI.hasOwnProperty;
    function lI(e) {
      var t = this.__data__;
      return sI ? t[e] !== void 0 : cI.call(t, e);
    }
    Eu.exports = lI;
  });
  var _u = c((XM, vu) => {
    var fI = zt(),
      dI = "__lodash_hash_undefined__";
    function pI(e, t) {
      var n = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (n[e] = fI && t === void 0 ? dI : t),
        this
      );
    }
    vu.exports = pI;
  });
  var Iu = c((kM, yu) => {
    var gI = lu(),
      EI = du(),
      hI = gu(),
      vI = hu(),
      _I = _u();
    function bt(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    bt.prototype.clear = gI;
    bt.prototype.delete = EI;
    bt.prototype.get = hI;
    bt.prototype.has = vI;
    bt.prototype.set = _I;
    yu.exports = bt;
  });
  var bu = c((WM, Tu) => {
    var mu = Iu(),
      yI = Ht(),
      II = Sn();
    function mI() {
      (this.size = 0),
        (this.__data__ = {
          hash: new mu(),
          map: new (II || yI)(),
          string: new mu(),
        });
    }
    Tu.exports = mI;
  });
  var Au = c((HM, Ou) => {
    function TI(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Ou.exports = TI;
  });
  var Yt = c((zM, Su) => {
    var bI = Au();
    function OI(e, t) {
      var n = e.__data__;
      return bI(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
    }
    Su.exports = OI;
  });
  var Ru = c((YM, wu) => {
    var AI = Yt();
    function SI(e) {
      var t = AI(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    wu.exports = SI;
  });
  var Cu = c((KM, Nu) => {
    var wI = Yt();
    function RI(e) {
      return wI(this, e).get(e);
    }
    Nu.exports = RI;
  });
  var Pu = c((jM, Lu) => {
    var NI = Yt();
    function CI(e) {
      return NI(this, e).has(e);
    }
    Lu.exports = CI;
  });
  var Mu = c((QM, xu) => {
    var LI = Yt();
    function PI(e, t) {
      var n = LI(this, e),
        r = n.size;
      return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
    }
    xu.exports = PI;
  });
  var wn = c(($M, Fu) => {
    var xI = bu(),
      MI = Ru(),
      FI = Cu(),
      DI = Pu(),
      qI = Mu();
    function Ot(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    Ot.prototype.clear = xI;
    Ot.prototype.delete = MI;
    Ot.prototype.get = FI;
    Ot.prototype.has = DI;
    Ot.prototype.set = qI;
    Fu.exports = Ot;
  });
  var qu = c((ZM, Du) => {
    var VI = Ht(),
      UI = Sn(),
      GI = wn(),
      BI = 200;
    function XI(e, t) {
      var n = this.__data__;
      if (n instanceof VI) {
        var r = n.__data__;
        if (!UI || r.length < BI - 1)
          return r.push([e, t]), (this.size = ++n.size), this;
        n = this.__data__ = new GI(r);
      }
      return n.set(e, t), (this.size = n.size), this;
    }
    Du.exports = XI;
  });
  var ai = c((JM, Vu) => {
    var kI = Ht(),
      WI = Gs(),
      HI = Xs(),
      zI = Ws(),
      YI = zs(),
      KI = qu();
    function At(e) {
      var t = (this.__data__ = new kI(e));
      this.size = t.size;
    }
    At.prototype.clear = WI;
    At.prototype.delete = HI;
    At.prototype.get = zI;
    At.prototype.has = YI;
    At.prototype.set = KI;
    Vu.exports = At;
  });
  var Gu = c((e5, Uu) => {
    var jI = "__lodash_hash_undefined__";
    function QI(e) {
      return this.__data__.set(e, jI), this;
    }
    Uu.exports = QI;
  });
  var Xu = c((t5, Bu) => {
    function $I(e) {
      return this.__data__.has(e);
    }
    Bu.exports = $I;
  });
  var Wu = c((n5, ku) => {
    var ZI = wn(),
      JI = Gu(),
      em = Xu();
    function Rn(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.__data__ = new ZI(); ++t < n; ) this.add(e[t]);
    }
    Rn.prototype.add = Rn.prototype.push = JI;
    Rn.prototype.has = em;
    ku.exports = Rn;
  });
  var zu = c((r5, Hu) => {
    function tm(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
        if (t(e[n], n, e)) return !0;
      return !1;
    }
    Hu.exports = tm;
  });
  var Ku = c((i5, Yu) => {
    function nm(e, t) {
      return e.has(t);
    }
    Yu.exports = nm;
  });
  var oi = c((a5, ju) => {
    var rm = Wu(),
      im = zu(),
      am = Ku(),
      om = 1,
      sm = 2;
    function um(e, t, n, r, a, i) {
      var o = n & om,
        s = e.length,
        u = t.length;
      if (s != u && !(o && u > s)) return !1;
      var l = i.get(e),
        h = i.get(t);
      if (l && h) return l == t && h == e;
      var d = -1,
        p = !0,
        g = n & sm ? new rm() : void 0;
      for (i.set(e, t), i.set(t, e); ++d < s; ) {
        var E = e[d],
          y = t[d];
        if (r) var I = o ? r(y, E, d, t, e, i) : r(E, y, d, e, t, i);
        if (I !== void 0) {
          if (I) continue;
          p = !1;
          break;
        }
        if (g) {
          if (
            !im(t, function (_, A) {
              if (!am(g, A) && (E === _ || a(E, _, n, r, i))) return g.push(A);
            })
          ) {
            p = !1;
            break;
          }
        } else if (!(E === y || a(E, y, n, r, i))) {
          p = !1;
          break;
        }
      }
      return i.delete(e), i.delete(t), p;
    }
    ju.exports = um;
  });
  var $u = c((o5, Qu) => {
    var cm = Pe(),
      lm = cm.Uint8Array;
    Qu.exports = lm;
  });
  var Ju = c((s5, Zu) => {
    function fm(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (r, a) {
          n[++t] = [a, r];
        }),
        n
      );
    }
    Zu.exports = fm;
  });
  var tc = c((u5, ec) => {
    function dm(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (r) {
          n[++t] = r;
        }),
        n
      );
    }
    ec.exports = dm;
  });
  var oc = c((c5, ac) => {
    var nc = _t(),
      rc = $u(),
      pm = An(),
      gm = oi(),
      Em = Ju(),
      hm = tc(),
      vm = 1,
      _m = 2,
      ym = "[object Boolean]",
      Im = "[object Date]",
      mm = "[object Error]",
      Tm = "[object Map]",
      bm = "[object Number]",
      Om = "[object RegExp]",
      Am = "[object Set]",
      Sm = "[object String]",
      wm = "[object Symbol]",
      Rm = "[object ArrayBuffer]",
      Nm = "[object DataView]",
      ic = nc ? nc.prototype : void 0,
      si = ic ? ic.valueOf : void 0;
    function Cm(e, t, n, r, a, i, o) {
      switch (n) {
        case Nm:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case Rm:
          return !(e.byteLength != t.byteLength || !i(new rc(e), new rc(t)));
        case ym:
        case Im:
        case bm:
          return pm(+e, +t);
        case mm:
          return e.name == t.name && e.message == t.message;
        case Om:
        case Sm:
          return e == t + "";
        case Tm:
          var s = Em;
        case Am:
          var u = r & vm;
          if ((s || (s = hm), e.size != t.size && !u)) return !1;
          var l = o.get(e);
          if (l) return l == t;
          (r |= _m), o.set(e, t);
          var h = gm(s(e), s(t), r, a, i, o);
          return o.delete(e), h;
        case wm:
          if (si) return si.call(e) == si.call(t);
      }
      return !1;
    }
    ac.exports = Cm;
  });
  var Nn = c((l5, sc) => {
    function Lm(e, t) {
      for (var n = -1, r = t.length, a = e.length; ++n < r; ) e[a + n] = t[n];
      return e;
    }
    sc.exports = Lm;
  });
  var ge = c((f5, uc) => {
    var Pm = Array.isArray;
    uc.exports = Pm;
  });
  var ui = c((d5, cc) => {
    var xm = Nn(),
      Mm = ge();
    function Fm(e, t, n) {
      var r = t(e);
      return Mm(e) ? r : xm(r, n(e));
    }
    cc.exports = Fm;
  });
  var fc = c((p5, lc) => {
    function Dm(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, a = 0, i = []; ++n < r; ) {
        var o = e[n];
        t(o, n, e) && (i[a++] = o);
      }
      return i;
    }
    lc.exports = Dm;
  });
  var ci = c((g5, dc) => {
    function qm() {
      return [];
    }
    dc.exports = qm;
  });
  var li = c((E5, gc) => {
    var Vm = fc(),
      Um = ci(),
      Gm = Object.prototype,
      Bm = Gm.propertyIsEnumerable,
      pc = Object.getOwnPropertySymbols,
      Xm = pc
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                Vm(pc(e), function (t) {
                  return Bm.call(e, t);
                }));
          }
        : Um;
    gc.exports = Xm;
  });
  var hc = c((h5, Ec) => {
    function km(e, t) {
      for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
      return r;
    }
    Ec.exports = km;
  });
  var _c = c((v5, vc) => {
    var Wm = je(),
      Hm = He(),
      zm = "[object Arguments]";
    function Ym(e) {
      return Hm(e) && Wm(e) == zm;
    }
    vc.exports = Ym;
  });
  var Kt = c((_5, mc) => {
    var yc = _c(),
      Km = He(),
      Ic = Object.prototype,
      jm = Ic.hasOwnProperty,
      Qm = Ic.propertyIsEnumerable,
      $m = yc(
        (function () {
          return arguments;
        })()
      )
        ? yc
        : function (e) {
            return Km(e) && jm.call(e, "callee") && !Qm.call(e, "callee");
          };
    mc.exports = $m;
  });
  var bc = c((y5, Tc) => {
    function Zm() {
      return !1;
    }
    Tc.exports = Zm;
  });
  var Cn = c((jt, St) => {
    var Jm = Pe(),
      eT = bc(),
      Sc = typeof jt == "object" && jt && !jt.nodeType && jt,
      Oc = Sc && typeof St == "object" && St && !St.nodeType && St,
      tT = Oc && Oc.exports === Sc,
      Ac = tT ? Jm.Buffer : void 0,
      nT = Ac ? Ac.isBuffer : void 0,
      rT = nT || eT;
    St.exports = rT;
  });
  var Ln = c((I5, wc) => {
    var iT = 9007199254740991,
      aT = /^(?:0|[1-9]\d*)$/;
    function oT(e, t) {
      var n = typeof e;
      return (
        (t = t ?? iT),
        !!t &&
          (n == "number" || (n != "symbol" && aT.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    wc.exports = oT;
  });
  var Pn = c((m5, Rc) => {
    var sT = 9007199254740991;
    function uT(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= sT;
    }
    Rc.exports = uT;
  });
  var Cc = c((T5, Nc) => {
    var cT = je(),
      lT = Pn(),
      fT = He(),
      dT = "[object Arguments]",
      pT = "[object Array]",
      gT = "[object Boolean]",
      ET = "[object Date]",
      hT = "[object Error]",
      vT = "[object Function]",
      _T = "[object Map]",
      yT = "[object Number]",
      IT = "[object Object]",
      mT = "[object RegExp]",
      TT = "[object Set]",
      bT = "[object String]",
      OT = "[object WeakMap]",
      AT = "[object ArrayBuffer]",
      ST = "[object DataView]",
      wT = "[object Float32Array]",
      RT = "[object Float64Array]",
      NT = "[object Int8Array]",
      CT = "[object Int16Array]",
      LT = "[object Int32Array]",
      PT = "[object Uint8Array]",
      xT = "[object Uint8ClampedArray]",
      MT = "[object Uint16Array]",
      FT = "[object Uint32Array]",
      re = {};
    re[wT] =
      re[RT] =
      re[NT] =
      re[CT] =
      re[LT] =
      re[PT] =
      re[xT] =
      re[MT] =
      re[FT] =
        !0;
    re[dT] =
      re[pT] =
      re[AT] =
      re[gT] =
      re[ST] =
      re[ET] =
      re[hT] =
      re[vT] =
      re[_T] =
      re[yT] =
      re[IT] =
      re[mT] =
      re[TT] =
      re[bT] =
      re[OT] =
        !1;
    function DT(e) {
      return fT(e) && lT(e.length) && !!re[cT(e)];
    }
    Nc.exports = DT;
  });
  var Pc = c((b5, Lc) => {
    function qT(e) {
      return function (t) {
        return e(t);
      };
    }
    Lc.exports = qT;
  });
  var Mc = c((Qt, wt) => {
    var VT = Nr(),
      xc = typeof Qt == "object" && Qt && !Qt.nodeType && Qt,
      $t = xc && typeof wt == "object" && wt && !wt.nodeType && wt,
      UT = $t && $t.exports === xc,
      fi = UT && VT.process,
      GT = (function () {
        try {
          var e = $t && $t.require && $t.require("util").types;
          return e || (fi && fi.binding && fi.binding("util"));
        } catch {}
      })();
    wt.exports = GT;
  });
  var xn = c((O5, qc) => {
    var BT = Cc(),
      XT = Pc(),
      Fc = Mc(),
      Dc = Fc && Fc.isTypedArray,
      kT = Dc ? XT(Dc) : BT;
    qc.exports = kT;
  });
  var di = c((A5, Vc) => {
    var WT = hc(),
      HT = Kt(),
      zT = ge(),
      YT = Cn(),
      KT = Ln(),
      jT = xn(),
      QT = Object.prototype,
      $T = QT.hasOwnProperty;
    function ZT(e, t) {
      var n = zT(e),
        r = !n && HT(e),
        a = !n && !r && YT(e),
        i = !n && !r && !a && jT(e),
        o = n || r || a || i,
        s = o ? WT(e.length, String) : [],
        u = s.length;
      for (var l in e)
        (t || $T.call(e, l)) &&
          !(
            o &&
            (l == "length" ||
              (a && (l == "offset" || l == "parent")) ||
              (i &&
                (l == "buffer" || l == "byteLength" || l == "byteOffset")) ||
              KT(l, u))
          ) &&
          s.push(l);
      return s;
    }
    Vc.exports = ZT;
  });
  var Mn = c((S5, Uc) => {
    var JT = Object.prototype;
    function eb(e) {
      var t = e && e.constructor,
        n = (typeof t == "function" && t.prototype) || JT;
      return e === n;
    }
    Uc.exports = eb;
  });
  var Bc = c((w5, Gc) => {
    var tb = Cr(),
      nb = tb(Object.keys, Object);
    Gc.exports = nb;
  });
  var Fn = c((R5, Xc) => {
    var rb = Mn(),
      ib = Bc(),
      ab = Object.prototype,
      ob = ab.hasOwnProperty;
    function sb(e) {
      if (!rb(e)) return ib(e);
      var t = [];
      for (var n in Object(e)) ob.call(e, n) && n != "constructor" && t.push(n);
      return t;
    }
    Xc.exports = sb;
  });
  var it = c((N5, kc) => {
    var ub = ni(),
      cb = Pn();
    function lb(e) {
      return e != null && cb(e.length) && !ub(e);
    }
    kc.exports = lb;
  });
  var Zt = c((C5, Wc) => {
    var fb = di(),
      db = Fn(),
      pb = it();
    function gb(e) {
      return pb(e) ? fb(e) : db(e);
    }
    Wc.exports = gb;
  });
  var zc = c((L5, Hc) => {
    var Eb = ui(),
      hb = li(),
      vb = Zt();
    function _b(e) {
      return Eb(e, vb, hb);
    }
    Hc.exports = _b;
  });
  var jc = c((P5, Kc) => {
    var Yc = zc(),
      yb = 1,
      Ib = Object.prototype,
      mb = Ib.hasOwnProperty;
    function Tb(e, t, n, r, a, i) {
      var o = n & yb,
        s = Yc(e),
        u = s.length,
        l = Yc(t),
        h = l.length;
      if (u != h && !o) return !1;
      for (var d = u; d--; ) {
        var p = s[d];
        if (!(o ? p in t : mb.call(t, p))) return !1;
      }
      var g = i.get(e),
        E = i.get(t);
      if (g && E) return g == t && E == e;
      var y = !0;
      i.set(e, t), i.set(t, e);
      for (var I = o; ++d < u; ) {
        p = s[d];
        var _ = e[p],
          A = t[p];
        if (r) var b = o ? r(A, _, p, t, e, i) : r(_, A, p, e, t, i);
        if (!(b === void 0 ? _ === A || a(_, A, n, r, i) : b)) {
          y = !1;
          break;
        }
        I || (I = p == "constructor");
      }
      if (y && !I) {
        var R = e.constructor,
          L = t.constructor;
        R != L &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof R == "function" &&
            R instanceof R &&
            typeof L == "function" &&
            L instanceof L
          ) &&
          (y = !1);
      }
      return i.delete(e), i.delete(t), y;
    }
    Kc.exports = Tb;
  });
  var $c = c((x5, Qc) => {
    var bb = Qe(),
      Ob = Pe(),
      Ab = bb(Ob, "DataView");
    Qc.exports = Ab;
  });
  var Jc = c((M5, Zc) => {
    var Sb = Qe(),
      wb = Pe(),
      Rb = Sb(wb, "Promise");
    Zc.exports = Rb;
  });
  var tl = c((F5, el) => {
    var Nb = Qe(),
      Cb = Pe(),
      Lb = Nb(Cb, "Set");
    el.exports = Lb;
  });
  var pi = c((D5, nl) => {
    var Pb = Qe(),
      xb = Pe(),
      Mb = Pb(xb, "WeakMap");
    nl.exports = Mb;
  });
  var Dn = c((q5, cl) => {
    var gi = $c(),
      Ei = Sn(),
      hi = Jc(),
      vi = tl(),
      _i = pi(),
      ul = je(),
      Rt = ii(),
      rl = "[object Map]",
      Fb = "[object Object]",
      il = "[object Promise]",
      al = "[object Set]",
      ol = "[object WeakMap]",
      sl = "[object DataView]",
      Db = Rt(gi),
      qb = Rt(Ei),
      Vb = Rt(hi),
      Ub = Rt(vi),
      Gb = Rt(_i),
      at = ul;
    ((gi && at(new gi(new ArrayBuffer(1))) != sl) ||
      (Ei && at(new Ei()) != rl) ||
      (hi && at(hi.resolve()) != il) ||
      (vi && at(new vi()) != al) ||
      (_i && at(new _i()) != ol)) &&
      (at = function (e) {
        var t = ul(e),
          n = t == Fb ? e.constructor : void 0,
          r = n ? Rt(n) : "";
        if (r)
          switch (r) {
            case Db:
              return sl;
            case qb:
              return rl;
            case Vb:
              return il;
            case Ub:
              return al;
            case Gb:
              return ol;
          }
        return t;
      });
    cl.exports = at;
  });
  var vl = c((V5, hl) => {
    var yi = ai(),
      Bb = oi(),
      Xb = oc(),
      kb = jc(),
      ll = Dn(),
      fl = ge(),
      dl = Cn(),
      Wb = xn(),
      Hb = 1,
      pl = "[object Arguments]",
      gl = "[object Array]",
      qn = "[object Object]",
      zb = Object.prototype,
      El = zb.hasOwnProperty;
    function Yb(e, t, n, r, a, i) {
      var o = fl(e),
        s = fl(t),
        u = o ? gl : ll(e),
        l = s ? gl : ll(t);
      (u = u == pl ? qn : u), (l = l == pl ? qn : l);
      var h = u == qn,
        d = l == qn,
        p = u == l;
      if (p && dl(e)) {
        if (!dl(t)) return !1;
        (o = !0), (h = !1);
      }
      if (p && !h)
        return (
          i || (i = new yi()),
          o || Wb(e) ? Bb(e, t, n, r, a, i) : Xb(e, t, u, n, r, a, i)
        );
      if (!(n & Hb)) {
        var g = h && El.call(e, "__wrapped__"),
          E = d && El.call(t, "__wrapped__");
        if (g || E) {
          var y = g ? e.value() : e,
            I = E ? t.value() : t;
          return i || (i = new yi()), a(y, I, n, r, i);
        }
      }
      return p ? (i || (i = new yi()), kb(e, t, n, r, a, i)) : !1;
    }
    hl.exports = Yb;
  });
  var Ii = c((U5, Il) => {
    var Kb = vl(),
      _l = He();
    function yl(e, t, n, r, a) {
      return e === t
        ? !0
        : e == null || t == null || (!_l(e) && !_l(t))
        ? e !== e && t !== t
        : Kb(e, t, n, r, yl, a);
    }
    Il.exports = yl;
  });
  var Tl = c((G5, ml) => {
    var jb = ai(),
      Qb = Ii(),
      $b = 1,
      Zb = 2;
    function Jb(e, t, n, r) {
      var a = n.length,
        i = a,
        o = !r;
      if (e == null) return !i;
      for (e = Object(e); a--; ) {
        var s = n[a];
        if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++a < i; ) {
        s = n[a];
        var u = s[0],
          l = e[u],
          h = s[1];
        if (o && s[2]) {
          if (l === void 0 && !(u in e)) return !1;
        } else {
          var d = new jb();
          if (r) var p = r(l, h, u, e, t, d);
          if (!(p === void 0 ? Qb(h, l, $b | Zb, r, d) : p)) return !1;
        }
      }
      return !0;
    }
    ml.exports = Jb;
  });
  var mi = c((B5, bl) => {
    var eO = Ue();
    function tO(e) {
      return e === e && !eO(e);
    }
    bl.exports = tO;
  });
  var Al = c((X5, Ol) => {
    var nO = mi(),
      rO = Zt();
    function iO(e) {
      for (var t = rO(e), n = t.length; n--; ) {
        var r = t[n],
          a = e[r];
        t[n] = [r, a, nO(a)];
      }
      return t;
    }
    Ol.exports = iO;
  });
  var Ti = c((k5, Sl) => {
    function aO(e, t) {
      return function (n) {
        return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
      };
    }
    Sl.exports = aO;
  });
  var Rl = c((W5, wl) => {
    var oO = Tl(),
      sO = Al(),
      uO = Ti();
    function cO(e) {
      var t = sO(e);
      return t.length == 1 && t[0][2]
        ? uO(t[0][0], t[0][1])
        : function (n) {
            return n === e || oO(n, e, t);
          };
    }
    wl.exports = cO;
  });
  var Jt = c((H5, Nl) => {
    var lO = je(),
      fO = He(),
      dO = "[object Symbol]";
    function pO(e) {
      return typeof e == "symbol" || (fO(e) && lO(e) == dO);
    }
    Nl.exports = pO;
  });
  var Vn = c((z5, Cl) => {
    var gO = ge(),
      EO = Jt(),
      hO = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      vO = /^\w*$/;
    function _O(e, t) {
      if (gO(e)) return !1;
      var n = typeof e;
      return n == "number" ||
        n == "symbol" ||
        n == "boolean" ||
        e == null ||
        EO(e)
        ? !0
        : vO.test(e) || !hO.test(e) || (t != null && e in Object(t));
    }
    Cl.exports = _O;
  });
  var xl = c((Y5, Pl) => {
    var Ll = wn(),
      yO = "Expected a function";
    function bi(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(yO);
      var n = function () {
        var r = arguments,
          a = t ? t.apply(this, r) : r[0],
          i = n.cache;
        if (i.has(a)) return i.get(a);
        var o = e.apply(this, r);
        return (n.cache = i.set(a, o) || i), o;
      };
      return (n.cache = new (bi.Cache || Ll)()), n;
    }
    bi.Cache = Ll;
    Pl.exports = bi;
  });
  var Fl = c((K5, Ml) => {
    var IO = xl(),
      mO = 500;
    function TO(e) {
      var t = IO(e, function (r) {
          return n.size === mO && n.clear(), r;
        }),
        n = t.cache;
      return t;
    }
    Ml.exports = TO;
  });
  var ql = c((j5, Dl) => {
    var bO = Fl(),
      OO =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      AO = /\\(\\)?/g,
      SO = bO(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(OO, function (n, r, a, i) {
            t.push(a ? i.replace(AO, "$1") : r || n);
          }),
          t
        );
      });
    Dl.exports = SO;
  });
  var Oi = c((Q5, Vl) => {
    function wO(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
        a[n] = t(e[n], n, e);
      return a;
    }
    Vl.exports = wO;
  });
  var Wl = c(($5, kl) => {
    var Ul = _t(),
      RO = Oi(),
      NO = ge(),
      CO = Jt(),
      LO = 1 / 0,
      Gl = Ul ? Ul.prototype : void 0,
      Bl = Gl ? Gl.toString : void 0;
    function Xl(e) {
      if (typeof e == "string") return e;
      if (NO(e)) return RO(e, Xl) + "";
      if (CO(e)) return Bl ? Bl.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -LO ? "-0" : t;
    }
    kl.exports = Xl;
  });
  var zl = c((Z5, Hl) => {
    var PO = Wl();
    function xO(e) {
      return e == null ? "" : PO(e);
    }
    Hl.exports = xO;
  });
  var en = c((J5, Yl) => {
    var MO = ge(),
      FO = Vn(),
      DO = ql(),
      qO = zl();
    function VO(e, t) {
      return MO(e) ? e : FO(e, t) ? [e] : DO(qO(e));
    }
    Yl.exports = VO;
  });
  var Nt = c((eF, Kl) => {
    var UO = Jt(),
      GO = 1 / 0;
    function BO(e) {
      if (typeof e == "string" || UO(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -GO ? "-0" : t;
    }
    Kl.exports = BO;
  });
  var Un = c((tF, jl) => {
    var XO = en(),
      kO = Nt();
    function WO(e, t) {
      t = XO(t, e);
      for (var n = 0, r = t.length; e != null && n < r; ) e = e[kO(t[n++])];
      return n && n == r ? e : void 0;
    }
    jl.exports = WO;
  });
  var Gn = c((nF, Ql) => {
    var HO = Un();
    function zO(e, t, n) {
      var r = e == null ? void 0 : HO(e, t);
      return r === void 0 ? n : r;
    }
    Ql.exports = zO;
  });
  var Zl = c((rF, $l) => {
    function YO(e, t) {
      return e != null && t in Object(e);
    }
    $l.exports = YO;
  });
  var ef = c((iF, Jl) => {
    var KO = en(),
      jO = Kt(),
      QO = ge(),
      $O = Ln(),
      ZO = Pn(),
      JO = Nt();
    function eA(e, t, n) {
      t = KO(t, e);
      for (var r = -1, a = t.length, i = !1; ++r < a; ) {
        var o = JO(t[r]);
        if (!(i = e != null && n(e, o))) break;
        e = e[o];
      }
      return i || ++r != a
        ? i
        : ((a = e == null ? 0 : e.length),
          !!a && ZO(a) && $O(o, a) && (QO(e) || jO(e)));
    }
    Jl.exports = eA;
  });
  var nf = c((aF, tf) => {
    var tA = Zl(),
      nA = ef();
    function rA(e, t) {
      return e != null && nA(e, t, tA);
    }
    tf.exports = rA;
  });
  var af = c((oF, rf) => {
    var iA = Ii(),
      aA = Gn(),
      oA = nf(),
      sA = Vn(),
      uA = mi(),
      cA = Ti(),
      lA = Nt(),
      fA = 1,
      dA = 2;
    function pA(e, t) {
      return sA(e) && uA(t)
        ? cA(lA(e), t)
        : function (n) {
            var r = aA(n, e);
            return r === void 0 && r === t ? oA(n, e) : iA(t, r, fA | dA);
          };
    }
    rf.exports = pA;
  });
  var Bn = c((sF, of) => {
    function gA(e) {
      return e;
    }
    of.exports = gA;
  });
  var Ai = c((uF, sf) => {
    function EA(e) {
      return function (t) {
        return t?.[e];
      };
    }
    sf.exports = EA;
  });
  var cf = c((cF, uf) => {
    var hA = Un();
    function vA(e) {
      return function (t) {
        return hA(t, e);
      };
    }
    uf.exports = vA;
  });
  var ff = c((lF, lf) => {
    var _A = Ai(),
      yA = cf(),
      IA = Vn(),
      mA = Nt();
    function TA(e) {
      return IA(e) ? _A(mA(e)) : yA(e);
    }
    lf.exports = TA;
  });
  var $e = c((fF, df) => {
    var bA = Rl(),
      OA = af(),
      AA = Bn(),
      SA = ge(),
      wA = ff();
    function RA(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? AA
        : typeof e == "object"
        ? SA(e)
          ? OA(e[0], e[1])
          : bA(e)
        : wA(e);
    }
    df.exports = RA;
  });
  var Si = c((dF, pf) => {
    var NA = $e(),
      CA = it(),
      LA = Zt();
    function PA(e) {
      return function (t, n, r) {
        var a = Object(t);
        if (!CA(t)) {
          var i = NA(n, 3);
          (t = LA(t)),
            (n = function (s) {
              return i(a[s], s, a);
            });
        }
        var o = e(t, n, r);
        return o > -1 ? a[i ? t[o] : o] : void 0;
      };
    }
    pf.exports = PA;
  });
  var wi = c((pF, gf) => {
    function xA(e, t, n, r) {
      for (var a = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < a; )
        if (t(e[i], i, e)) return i;
      return -1;
    }
    gf.exports = xA;
  });
  var hf = c((gF, Ef) => {
    var MA = /\s/;
    function FA(e) {
      for (var t = e.length; t-- && MA.test(e.charAt(t)); );
      return t;
    }
    Ef.exports = FA;
  });
  var _f = c((EF, vf) => {
    var DA = hf(),
      qA = /^\s+/;
    function VA(e) {
      return e && e.slice(0, DA(e) + 1).replace(qA, "");
    }
    vf.exports = VA;
  });
  var Xn = c((hF, mf) => {
    var UA = _f(),
      yf = Ue(),
      GA = Jt(),
      If = 0 / 0,
      BA = /^[-+]0x[0-9a-f]+$/i,
      XA = /^0b[01]+$/i,
      kA = /^0o[0-7]+$/i,
      WA = parseInt;
    function HA(e) {
      if (typeof e == "number") return e;
      if (GA(e)) return If;
      if (yf(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = yf(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = UA(e);
      var n = XA.test(e);
      return n || kA.test(e) ? WA(e.slice(2), n ? 2 : 8) : BA.test(e) ? If : +e;
    }
    mf.exports = HA;
  });
  var Of = c((vF, bf) => {
    var zA = Xn(),
      Tf = 1 / 0,
      YA = 17976931348623157e292;
    function KA(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = zA(e)), e === Tf || e === -Tf)) {
        var t = e < 0 ? -1 : 1;
        return t * YA;
      }
      return e === e ? e : 0;
    }
    bf.exports = KA;
  });
  var Ri = c((_F, Af) => {
    var jA = Of();
    function QA(e) {
      var t = jA(e),
        n = t % 1;
      return t === t ? (n ? t - n : t) : 0;
    }
    Af.exports = QA;
  });
  var wf = c((yF, Sf) => {
    var $A = wi(),
      ZA = $e(),
      JA = Ri(),
      eS = Math.max;
    function tS(e, t, n) {
      var r = e == null ? 0 : e.length;
      if (!r) return -1;
      var a = n == null ? 0 : JA(n);
      return a < 0 && (a = eS(r + a, 0)), $A(e, ZA(t, 3), a);
    }
    Sf.exports = tS;
  });
  var Ni = c((IF, Rf) => {
    var nS = Si(),
      rS = wf(),
      iS = nS(rS);
    Rf.exports = iS;
  });
  var Wn = c((Ci) => {
    "use strict";
    Object.defineProperty(Ci, "__esModule", { value: !0 });
    function aS(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    aS(Ci, {
      ELEMENT_MATCHES: function () {
        return uS;
      },
      FLEX_PREFIXED: function () {
        return cS;
      },
      IS_BROWSER_ENV: function () {
        return Cf;
      },
      TRANSFORM_PREFIXED: function () {
        return Lf;
      },
      TRANSFORM_STYLE_PREFIXED: function () {
        return lS;
      },
      withBrowser: function () {
        return kn;
      },
    });
    var oS = sS(Ni());
    function sS(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Cf = typeof window < "u",
      kn = (e, t) => (Cf ? e() : t),
      uS = kn(() =>
        (0, oS.default)(
          [
            "matches",
            "matchesSelector",
            "mozMatchesSelector",
            "msMatchesSelector",
            "oMatchesSelector",
            "webkitMatchesSelector",
          ],
          (e) => e in Element.prototype
        )
      ),
      cS = kn(() => {
        let e = document.createElement("i"),
          t = [
            "flex",
            "-webkit-flex",
            "-ms-flexbox",
            "-moz-box",
            "-webkit-box",
          ],
          n = "";
        try {
          let { length: r } = t;
          for (let a = 0; a < r; a++) {
            let i = t[a];
            if (((e.style.display = i), e.style.display === i)) return i;
          }
          return n;
        } catch {
          return n;
        }
      }, "flex"),
      Lf = kn(() => {
        let e = document.createElement("i");
        if (e.style.transform == null) {
          let t = ["Webkit", "Moz", "ms"],
            n = "Transform",
            { length: r } = t;
          for (let a = 0; a < r; a++) {
            let i = t[a] + n;
            if (e.style[i] !== void 0) return i;
          }
        }
        return "transform";
      }, "transform"),
      Nf = Lf.split("transform")[0],
      lS = Nf ? Nf + "TransformStyle" : "transformStyle";
  });
  var Li = c((TF, Df) => {
    var fS = 4,
      dS = 0.001,
      pS = 1e-7,
      gS = 10,
      tn = 11,
      Hn = 1 / (tn - 1),
      ES = typeof Float32Array == "function";
    function Pf(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function xf(e, t) {
      return 3 * t - 6 * e;
    }
    function Mf(e) {
      return 3 * e;
    }
    function zn(e, t, n) {
      return ((Pf(t, n) * e + xf(t, n)) * e + Mf(t)) * e;
    }
    function Ff(e, t, n) {
      return 3 * Pf(t, n) * e * e + 2 * xf(t, n) * e + Mf(t);
    }
    function hS(e, t, n, r, a) {
      var i,
        o,
        s = 0;
      do
        (o = t + (n - t) / 2), (i = zn(o, r, a) - e), i > 0 ? (n = o) : (t = o);
      while (Math.abs(i) > pS && ++s < gS);
      return o;
    }
    function vS(e, t, n, r) {
      for (var a = 0; a < fS; ++a) {
        var i = Ff(t, n, r);
        if (i === 0) return t;
        var o = zn(t, n, r) - e;
        t -= o / i;
      }
      return t;
    }
    Df.exports = function (t, n, r, a) {
      if (!(0 <= t && t <= 1 && 0 <= r && r <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var i = ES ? new Float32Array(tn) : new Array(tn);
      if (t !== n || r !== a)
        for (var o = 0; o < tn; ++o) i[o] = zn(o * Hn, t, r);
      function s(u) {
        for (var l = 0, h = 1, d = tn - 1; h !== d && i[h] <= u; ++h) l += Hn;
        --h;
        var p = (u - i[h]) / (i[h + 1] - i[h]),
          g = l + p * Hn,
          E = Ff(g, t, r);
        return E >= dS ? vS(u, g, t, r) : E === 0 ? g : hS(u, l, l + Hn, t, r);
      }
      return function (l) {
        return t === n && r === a
          ? l
          : l === 0
          ? 0
          : l === 1
          ? 1
          : zn(s(l), n, a);
      };
    };
  });
  var xi = c((Pi) => {
    "use strict";
    Object.defineProperty(Pi, "__esModule", { value: !0 });
    function _S(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    _S(Pi, {
      bounce: function () {
        return t1;
      },
      bouncePast: function () {
        return n1;
      },
      ease: function () {
        return IS;
      },
      easeIn: function () {
        return mS;
      },
      easeInOut: function () {
        return bS;
      },
      easeOut: function () {
        return TS;
      },
      inBack: function () {
        return zS;
      },
      inCirc: function () {
        return XS;
      },
      inCubic: function () {
        return wS;
      },
      inElastic: function () {
        return jS;
      },
      inExpo: function () {
        return US;
      },
      inOutBack: function () {
        return KS;
      },
      inOutCirc: function () {
        return WS;
      },
      inOutCubic: function () {
        return NS;
      },
      inOutElastic: function () {
        return $S;
      },
      inOutExpo: function () {
        return BS;
      },
      inOutQuad: function () {
        return SS;
      },
      inOutQuart: function () {
        return PS;
      },
      inOutQuint: function () {
        return FS;
      },
      inOutSine: function () {
        return VS;
      },
      inQuad: function () {
        return OS;
      },
      inQuart: function () {
        return CS;
      },
      inQuint: function () {
        return xS;
      },
      inSine: function () {
        return DS;
      },
      outBack: function () {
        return YS;
      },
      outBounce: function () {
        return HS;
      },
      outCirc: function () {
        return kS;
      },
      outCubic: function () {
        return RS;
      },
      outElastic: function () {
        return QS;
      },
      outExpo: function () {
        return GS;
      },
      outQuad: function () {
        return AS;
      },
      outQuart: function () {
        return LS;
      },
      outQuint: function () {
        return MS;
      },
      outSine: function () {
        return qS;
      },
      swingFrom: function () {
        return JS;
      },
      swingFromTo: function () {
        return ZS;
      },
      swingTo: function () {
        return e1;
      },
    });
    var Yn = yS(Li());
    function yS(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var ze = 1.70158,
      IS = (0, Yn.default)(0.25, 0.1, 0.25, 1),
      mS = (0, Yn.default)(0.42, 0, 1, 1),
      TS = (0, Yn.default)(0, 0, 0.58, 1),
      bS = (0, Yn.default)(0.42, 0, 0.58, 1);
    function OS(e) {
      return Math.pow(e, 2);
    }
    function AS(e) {
      return -(Math.pow(e - 1, 2) - 1);
    }
    function SS(e) {
      return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
    }
    function wS(e) {
      return Math.pow(e, 3);
    }
    function RS(e) {
      return Math.pow(e - 1, 3) + 1;
    }
    function NS(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 3)
        : 0.5 * (Math.pow(e - 2, 3) + 2);
    }
    function CS(e) {
      return Math.pow(e, 4);
    }
    function LS(e) {
      return -(Math.pow(e - 1, 4) - 1);
    }
    function PS(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 4)
        : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
    }
    function xS(e) {
      return Math.pow(e, 5);
    }
    function MS(e) {
      return Math.pow(e - 1, 5) + 1;
    }
    function FS(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 5)
        : 0.5 * (Math.pow(e - 2, 5) + 2);
    }
    function DS(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1;
    }
    function qS(e) {
      return Math.sin(e * (Math.PI / 2));
    }
    function VS(e) {
      return -0.5 * (Math.cos(Math.PI * e) - 1);
    }
    function US(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
    }
    function GS(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
    }
    function BS(e) {
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (e /= 0.5) < 1
        ? 0.5 * Math.pow(2, 10 * (e - 1))
        : 0.5 * (-Math.pow(2, -10 * --e) + 2);
    }
    function XS(e) {
      return -(Math.sqrt(1 - e * e) - 1);
    }
    function kS(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2));
    }
    function WS(e) {
      return (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
    function HS(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function zS(e) {
      let t = ze;
      return e * e * ((t + 1) * e - t);
    }
    function YS(e) {
      let t = ze;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function KS(e) {
      let t = ze;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function jS(e) {
      let t = ze,
        n = 0,
        r = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (n || (n = 0.3),
          r < 1
            ? ((r = 1), (t = n / 4))
            : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
          -(
            r *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / n)
          ));
    }
    function QS(e) {
      let t = ze,
        n = 0,
        r = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (n || (n = 0.3),
          r < 1
            ? ((r = 1), (t = n / 4))
            : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
          r * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / n) +
            1);
    }
    function $S(e) {
      let t = ze,
        n = 0,
        r = 1;
      return e === 0
        ? 0
        : (e /= 1 / 2) === 2
        ? 1
        : (n || (n = 0.3 * 1.5),
          r < 1
            ? ((r = 1), (t = n / 4))
            : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
          e < 1
            ? -0.5 *
              (r *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / n))
            : r *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / n) *
                0.5 +
              1);
    }
    function ZS(e) {
      let t = ze;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function JS(e) {
      let t = ze;
      return e * e * ((t + 1) * e - t);
    }
    function e1(e) {
      let t = ze;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function t1(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function n1(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
        ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
        : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
    }
  });
  var Di = c((Fi) => {
    "use strict";
    Object.defineProperty(Fi, "__esModule", { value: !0 });
    function r1(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    r1(Fi, {
      applyEasing: function () {
        return u1;
      },
      createBezierEasing: function () {
        return s1;
      },
      optimizeFloat: function () {
        return Mi;
      },
    });
    var qf = o1(xi()),
      i1 = a1(Li());
    function a1(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Vf(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (Vf = function (r) {
        return r ? n : t;
      })(e);
    }
    function o1(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = Vf(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    function Mi(e, t = 5, n = 10) {
      let r = Math.pow(n, t),
        a = Number(Math.round(e * r) / r);
      return Math.abs(a) > 1e-4 ? a : 0;
    }
    function s1(e) {
      return (0, i1.default)(...e);
    }
    function u1(e, t, n) {
      return t === 0
        ? 0
        : t === 1
        ? 1
        : Mi(n ? (t > 0 ? n(t) : t) : t > 0 && e && qf[e] ? qf[e](t) : t);
    }
  });
  var Xf = c((Vi) => {
    "use strict";
    Object.defineProperty(Vi, "__esModule", { value: !0 });
    function c1(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    c1(Vi, {
      createElementState: function () {
        return Bf;
      },
      ixElements: function () {
        return b1;
      },
      mergeActionState: function () {
        return qi;
      },
    });
    var Kn = mt(),
      Gf = me(),
      {
        HTML_ELEMENT: AF,
        PLAIN_OBJECT: l1,
        ABSTRACT_NODE: SF,
        CONFIG_X_VALUE: f1,
        CONFIG_Y_VALUE: d1,
        CONFIG_Z_VALUE: p1,
        CONFIG_VALUE: g1,
        CONFIG_X_UNIT: E1,
        CONFIG_Y_UNIT: h1,
        CONFIG_Z_UNIT: v1,
        CONFIG_UNIT: _1,
      } = Gf.IX2EngineConstants,
      {
        IX2_SESSION_STOPPED: y1,
        IX2_INSTANCE_ADDED: I1,
        IX2_ELEMENT_STATE_CHANGED: m1,
      } = Gf.IX2EngineActionTypes,
      Uf = {},
      T1 = "refState",
      b1 = (e = Uf, t = {}) => {
        switch (t.type) {
          case y1:
            return Uf;
          case I1: {
            let {
                elementId: n,
                element: r,
                origin: a,
                actionItem: i,
                refType: o,
              } = t.payload,
              { actionTypeId: s } = i,
              u = e;
            return (
              (0, Kn.getIn)(u, [n, r]) !== r && (u = Bf(u, r, o, n, i)),
              qi(u, n, s, a, i)
            );
          }
          case m1: {
            let {
              elementId: n,
              actionTypeId: r,
              current: a,
              actionItem: i,
            } = t.payload;
            return qi(e, n, r, a, i);
          }
          default:
            return e;
        }
      };
    function Bf(e, t, n, r, a) {
      let i =
        n === l1 ? (0, Kn.getIn)(a, ["config", "target", "objectId"]) : null;
      return (0, Kn.mergeIn)(e, [r], { id: r, ref: t, refId: i, refType: n });
    }
    function qi(e, t, n, r, a) {
      let i = A1(a),
        o = [t, T1, n];
      return (0, Kn.mergeIn)(e, o, r, i);
    }
    var O1 = [
      [f1, E1],
      [d1, h1],
      [p1, v1],
      [g1, _1],
    ];
    function A1(e) {
      let { config: t } = e;
      return O1.reduce((n, r) => {
        let a = r[0],
          i = r[1],
          o = t[a],
          s = t[i];
        return o != null && s != null && (n[i] = s), n;
      }, {});
    }
  });
  var kf = c((Ui) => {
    "use strict";
    Object.defineProperty(Ui, "__esModule", { value: !0 });
    function S1(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    S1(Ui, {
      clearPlugin: function () {
        return x1;
      },
      createPluginInstance: function () {
        return L1;
      },
      getPluginConfig: function () {
        return w1;
      },
      getPluginDestination: function () {
        return C1;
      },
      getPluginDuration: function () {
        return R1;
      },
      getPluginOrigin: function () {
        return N1;
      },
      renderPlugin: function () {
        return P1;
      },
    });
    var w1 = (e) => e.value,
      R1 = (e, t) => {
        if (t.config.duration !== "auto") return null;
        let n = parseFloat(e.getAttribute("data-duration"));
        return n > 0
          ? n * 1e3
          : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
      },
      N1 = (e) => e || { value: 0 },
      C1 = (e) => ({ value: e.value }),
      L1 = (e) => {
        let t = window.Webflow.require("lottie").createInstance(e);
        return t.stop(), t.setSubframe(!0), t;
      },
      P1 = (e, t, n) => {
        if (!e) return;
        let r = t[n.actionTypeId].value / 100;
        e.goToFrame(e.frames * r);
      },
      x1 = (e) => {
        window.Webflow.require("lottie").createInstance(e).stop();
      };
  });
  var Hf = c((Gi) => {
    "use strict";
    Object.defineProperty(Gi, "__esModule", { value: !0 });
    function M1(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    M1(Gi, {
      clearPlugin: function () {
        return W1;
      },
      createPluginInstance: function () {
        return X1;
      },
      getPluginConfig: function () {
        return V1;
      },
      getPluginDestination: function () {
        return B1;
      },
      getPluginDuration: function () {
        return U1;
      },
      getPluginOrigin: function () {
        return G1;
      },
      renderPlugin: function () {
        return k1;
      },
    });
    var F1 = (e) => document.querySelector(`[data-w-id="${e}"]`),
      D1 = () => window.Webflow.require("spline"),
      q1 = (e, t) => e.filter((n) => !t.includes(n)),
      V1 = (e, t) => e.value[t],
      U1 = () => null,
      Wf = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      G1 = (e, t) => {
        let n = t.config.value,
          r = Object.keys(n);
        if (e) {
          let i = Object.keys(e),
            o = q1(r, i);
          return o.length ? o.reduce((u, l) => ((u[l] = Wf[l]), u), e) : e;
        }
        return r.reduce((i, o) => ((i[o] = Wf[o]), i), {});
      },
      B1 = (e) => e.value,
      X1 = (e, t) => {
        let n = t?.config?.target?.pluginElement;
        return n ? F1(n) : null;
      },
      k1 = (e, t, n) => {
        let r = D1(),
          a = r.getInstance(e),
          i = n.config.target.objectId,
          o = (s) => {
            if (!s)
              throw new Error("Invalid spline app passed to renderSpline");
            let u = i && s.findObjectById(i);
            if (!u) return;
            let { PLUGIN_SPLINE: l } = t;
            l.positionX != null && (u.position.x = l.positionX),
              l.positionY != null && (u.position.y = l.positionY),
              l.positionZ != null && (u.position.z = l.positionZ),
              l.rotationX != null && (u.rotation.x = l.rotationX),
              l.rotationY != null && (u.rotation.y = l.rotationY),
              l.rotationZ != null && (u.rotation.z = l.rotationZ),
              l.scaleX != null && (u.scale.x = l.scaleX),
              l.scaleY != null && (u.scale.y = l.scaleY),
              l.scaleZ != null && (u.scale.z = l.scaleZ);
          };
        a ? o(a.spline) : r.setLoadHandler(e, o);
      },
      W1 = () => null;
  });
  var zf = c((ki) => {
    "use strict";
    Object.defineProperty(ki, "__esModule", { value: !0 });
    function H1(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    H1(ki, {
      clearPlugin: function () {
        return e2;
      },
      createPluginInstance: function () {
        return Z1;
      },
      getPluginConfig: function () {
        return K1;
      },
      getPluginDestination: function () {
        return $1;
      },
      getPluginDuration: function () {
        return j1;
      },
      getPluginOrigin: function () {
        return Q1;
      },
      renderPlugin: function () {
        return J1;
      },
    });
    var Bi = "--wf-rive-fit",
      Xi = "--wf-rive-alignment",
      z1 = (e) => document.querySelector(`[data-w-id="${e}"]`),
      Y1 = () => window.Webflow.require("rive"),
      K1 = (e, t) => e.value.inputs[t],
      j1 = () => null,
      Q1 = (e, t) => {
        if (e) return e;
        let n = {},
          { inputs: r = {} } = t.config.value;
        for (let a in r) r[a] == null && (n[a] = 0);
        return n;
      },
      $1 = (e) => e.value.inputs ?? {},
      Z1 = (e, t) => {
        if ((t.config?.target?.selectorGuids || []).length > 0) return e;
        let r = t?.config?.target?.pluginElement;
        return r ? z1(r) : null;
      },
      J1 = (e, { PLUGIN_RIVE: t }, n) => {
        let r = Y1(),
          a = r.getInstance(e),
          i = r.rive.StateMachineInputType,
          { name: o, inputs: s = {} } = n.config.value || {};
        function u(l) {
          if (l.loaded) h();
          else {
            let d = () => {
              h(), l?.off("load", d);
            };
            l?.on("load", d);
          }
          function h() {
            let d = l.stateMachineInputs(o);
            if (d != null) {
              if ((l.isPlaying || l.play(o, !1), Bi in s || Xi in s)) {
                let p = l.layout,
                  g = s[Bi] ?? p.fit,
                  E = s[Xi] ?? p.alignment;
                (g !== p.fit || E !== p.alignment) &&
                  (l.layout = p.copyWith({ fit: g, alignment: E }));
              }
              for (let p in s) {
                if (p === Bi || p === Xi) continue;
                let g = d.find((E) => E.name === p);
                if (g != null)
                  switch (g.type) {
                    case i.Boolean: {
                      if (s[p] != null) {
                        let E = !!s[p];
                        g.value = E;
                      }
                      break;
                    }
                    case i.Number: {
                      let E = t[p];
                      E != null && (g.value = E);
                      break;
                    }
                    case i.Trigger: {
                      s[p] && g.fire();
                      break;
                    }
                  }
              }
            }
          }
        }
        a?.rive ? u(a.rive) : r.setLoadHandler(e, u);
      },
      e2 = (e, t) => null;
  });
  var Hi = c((Wi) => {
    "use strict";
    Object.defineProperty(Wi, "__esModule", { value: !0 });
    Object.defineProperty(Wi, "normalizeColor", {
      enumerable: !0,
      get: function () {
        return t2;
      },
    });
    var Yf = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function t2(e) {
      let t,
        n,
        r,
        a = 1,
        i = e.replace(/\s/g, "").toLowerCase(),
        s = (typeof Yf[i] == "string" ? Yf[i].toLowerCase() : null) || i;
      if (s.startsWith("#")) {
        let u = s.substring(1);
        u.length === 3 || u.length === 4
          ? ((t = parseInt(u[0] + u[0], 16)),
            (n = parseInt(u[1] + u[1], 16)),
            (r = parseInt(u[2] + u[2], 16)),
            u.length === 4 && (a = parseInt(u[3] + u[3], 16) / 255))
          : (u.length === 6 || u.length === 8) &&
            ((t = parseInt(u.substring(0, 2), 16)),
            (n = parseInt(u.substring(2, 4), 16)),
            (r = parseInt(u.substring(4, 6), 16)),
            u.length === 8 && (a = parseInt(u.substring(6, 8), 16) / 255));
      } else if (s.startsWith("rgba")) {
        let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (n = parseInt(u[1], 10)),
          (r = parseInt(u[2], 10)),
          (a = parseFloat(u[3]));
      } else if (s.startsWith("rgb")) {
        let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (n = parseInt(u[1], 10)),
          (r = parseInt(u[2], 10));
      } else if (s.startsWith("hsla")) {
        let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
          l = parseFloat(u[0]),
          h = parseFloat(u[1].replace("%", "")) / 100,
          d = parseFloat(u[2].replace("%", "")) / 100;
        a = parseFloat(u[3]);
        let p = (1 - Math.abs(2 * d - 1)) * h,
          g = p * (1 - Math.abs(((l / 60) % 2) - 1)),
          E = d - p / 2,
          y,
          I,
          _;
        l >= 0 && l < 60
          ? ((y = p), (I = g), (_ = 0))
          : l >= 60 && l < 120
          ? ((y = g), (I = p), (_ = 0))
          : l >= 120 && l < 180
          ? ((y = 0), (I = p), (_ = g))
          : l >= 180 && l < 240
          ? ((y = 0), (I = g), (_ = p))
          : l >= 240 && l < 300
          ? ((y = g), (I = 0), (_ = p))
          : ((y = p), (I = 0), (_ = g)),
          (t = Math.round((y + E) * 255)),
          (n = Math.round((I + E) * 255)),
          (r = Math.round((_ + E) * 255));
      } else if (s.startsWith("hsl")) {
        let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
          l = parseFloat(u[0]),
          h = parseFloat(u[1].replace("%", "")) / 100,
          d = parseFloat(u[2].replace("%", "")) / 100,
          p = (1 - Math.abs(2 * d - 1)) * h,
          g = p * (1 - Math.abs(((l / 60) % 2) - 1)),
          E = d - p / 2,
          y,
          I,
          _;
        l >= 0 && l < 60
          ? ((y = p), (I = g), (_ = 0))
          : l >= 60 && l < 120
          ? ((y = g), (I = p), (_ = 0))
          : l >= 120 && l < 180
          ? ((y = 0), (I = p), (_ = g))
          : l >= 180 && l < 240
          ? ((y = 0), (I = g), (_ = p))
          : l >= 240 && l < 300
          ? ((y = g), (I = 0), (_ = p))
          : ((y = p), (I = 0), (_ = g)),
          (t = Math.round((y + E) * 255)),
          (n = Math.round((I + E) * 255)),
          (r = Math.round((_ + E) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(r))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: n, blue: r, alpha: a };
    }
  });
  var Kf = c((zi) => {
    "use strict";
    Object.defineProperty(zi, "__esModule", { value: !0 });
    function n2(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    n2(zi, {
      clearPlugin: function () {
        return f2;
      },
      createPluginInstance: function () {
        return u2;
      },
      getPluginConfig: function () {
        return i2;
      },
      getPluginDestination: function () {
        return s2;
      },
      getPluginDuration: function () {
        return a2;
      },
      getPluginOrigin: function () {
        return o2;
      },
      renderPlugin: function () {
        return l2;
      },
    });
    var r2 = Hi(),
      i2 = (e, t) => e.value[t],
      a2 = () => null,
      o2 = (e, t) => {
        if (e) return e;
        let n = t.config.value,
          r = t.config.target.objectId,
          a = getComputedStyle(document.documentElement).getPropertyValue(r);
        if (n.size != null) return { size: parseInt(a, 10) };
        if (n.unit === "%" || n.unit === "-") return { size: parseFloat(a) };
        if (n.red != null && n.green != null && n.blue != null)
          return (0, r2.normalizeColor)(a);
      },
      s2 = (e) => e.value,
      u2 = () => null,
      c2 = {
        color: {
          match: ({ red: e, green: t, blue: n, alpha: r }) =>
            [e, t, n, r].every((a) => a != null),
          getValue: ({ red: e, green: t, blue: n, alpha: r }) =>
            `rgba(${e}, ${t}, ${n}, ${r})`,
        },
        size: {
          match: ({ size: e }) => e != null,
          getValue: ({ size: e }, t) => {
            switch (t) {
              case "-":
                return e;
              default:
                return `${e}${t}`;
            }
          },
        },
      },
      l2 = (e, t, n) => {
        let {
            target: { objectId: r },
            value: { unit: a },
          } = n.config,
          i = t.PLUGIN_VARIABLE,
          o = Object.values(c2).find((s) => s.match(i, a));
        o && document.documentElement.style.setProperty(r, o.getValue(i, a));
      },
      f2 = (e, t) => {
        let n = t.config.target.objectId;
        document.documentElement.style.removeProperty(n);
      };
  });
  var Qf = c((Yi) => {
    "use strict";
    Object.defineProperty(Yi, "__esModule", { value: !0 });
    Object.defineProperty(Yi, "pluginMethodMap", {
      enumerable: !0,
      get: function () {
        return h2;
      },
    });
    var jn = me(),
      d2 = Qn(kf()),
      p2 = Qn(Hf()),
      g2 = Qn(zf()),
      E2 = Qn(Kf());
    function jf(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (jf = function (r) {
        return r ? n : t;
      })(e);
    }
    function Qn(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = jf(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var h2 = new Map([
      [jn.ActionTypeConsts.PLUGIN_LOTTIE, { ...d2 }],
      [jn.ActionTypeConsts.PLUGIN_SPLINE, { ...p2 }],
      [jn.ActionTypeConsts.PLUGIN_RIVE, { ...g2 }],
      [jn.ActionTypeConsts.PLUGIN_VARIABLE, { ...E2 }],
    ]);
  });
  var ji = c((Ki) => {
    "use strict";
    Object.defineProperty(Ki, "__esModule", { value: !0 });
    function v2(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    v2(Ki, {
      clearPlugin: function () {
        return S2;
      },
      createPluginInstance: function () {
        return O2;
      },
      getPluginConfig: function () {
        return I2;
      },
      getPluginDestination: function () {
        return b2;
      },
      getPluginDuration: function () {
        return T2;
      },
      getPluginOrigin: function () {
        return m2;
      },
      isPluginType: function () {
        return y2;
      },
      renderPlugin: function () {
        return A2;
      },
    });
    var _2 = Wn(),
      $f = Qf();
    function y2(e) {
      return $f.pluginMethodMap.has(e);
    }
    var ot = (e) => (t) => {
        if (!_2.IS_BROWSER_ENV) return () => null;
        let n = $f.pluginMethodMap.get(t);
        if (!n) throw new Error(`IX2 no plugin configured for: ${t}`);
        let r = n[e];
        if (!r) throw new Error(`IX2 invalid plugin method: ${e}`);
        return r;
      },
      I2 = ot("getPluginConfig"),
      m2 = ot("getPluginOrigin"),
      T2 = ot("getPluginDuration"),
      b2 = ot("getPluginDestination"),
      O2 = ot("createPluginInstance"),
      A2 = ot("renderPlugin"),
      S2 = ot("clearPlugin");
  });
  var Jf = c((FF, Zf) => {
    function w2(e, t) {
      return e == null || e !== e ? t : e;
    }
    Zf.exports = w2;
  });
  var td = c((DF, ed) => {
    function R2(e, t, n, r) {
      var a = -1,
        i = e == null ? 0 : e.length;
      for (r && i && (n = e[++a]); ++a < i; ) n = t(n, e[a], a, e);
      return n;
    }
    ed.exports = R2;
  });
  var rd = c((qF, nd) => {
    function N2(e) {
      return function (t, n, r) {
        for (var a = -1, i = Object(t), o = r(t), s = o.length; s--; ) {
          var u = o[e ? s : ++a];
          if (n(i[u], u, i) === !1) break;
        }
        return t;
      };
    }
    nd.exports = N2;
  });
  var ad = c((VF, id) => {
    var C2 = rd(),
      L2 = C2();
    id.exports = L2;
  });
  var Qi = c((UF, od) => {
    var P2 = ad(),
      x2 = Zt();
    function M2(e, t) {
      return e && P2(e, t, x2);
    }
    od.exports = M2;
  });
  var ud = c((GF, sd) => {
    var F2 = it();
    function D2(e, t) {
      return function (n, r) {
        if (n == null) return n;
        if (!F2(n)) return e(n, r);
        for (
          var a = n.length, i = t ? a : -1, o = Object(n);
          (t ? i-- : ++i < a) && r(o[i], i, o) !== !1;

        );
        return n;
      };
    }
    sd.exports = D2;
  });
  var $i = c((BF, cd) => {
    var q2 = Qi(),
      V2 = ud(),
      U2 = V2(q2);
    cd.exports = U2;
  });
  var fd = c((XF, ld) => {
    function G2(e, t, n, r, a) {
      return (
        a(e, function (i, o, s) {
          n = r ? ((r = !1), i) : t(n, i, o, s);
        }),
        n
      );
    }
    ld.exports = G2;
  });
  var pd = c((kF, dd) => {
    var B2 = td(),
      X2 = $i(),
      k2 = $e(),
      W2 = fd(),
      H2 = ge();
    function z2(e, t, n) {
      var r = H2(e) ? B2 : W2,
        a = arguments.length < 3;
      return r(e, k2(t, 4), n, a, X2);
    }
    dd.exports = z2;
  });
  var Ed = c((WF, gd) => {
    var Y2 = wi(),
      K2 = $e(),
      j2 = Ri(),
      Q2 = Math.max,
      $2 = Math.min;
    function Z2(e, t, n) {
      var r = e == null ? 0 : e.length;
      if (!r) return -1;
      var a = r - 1;
      return (
        n !== void 0 &&
          ((a = j2(n)), (a = n < 0 ? Q2(r + a, 0) : $2(a, r - 1))),
        Y2(e, K2(t, 3), a, !0)
      );
    }
    gd.exports = Z2;
  });
  var vd = c((HF, hd) => {
    var J2 = Si(),
      ew = Ed(),
      tw = J2(ew);
    hd.exports = tw;
  });
  var yd = c((Zi) => {
    "use strict";
    Object.defineProperty(Zi, "__esModule", { value: !0 });
    Object.defineProperty(Zi, "default", {
      enumerable: !0,
      get: function () {
        return rw;
      },
    });
    function _d(e, t) {
      return e === t
        ? e !== 0 || t !== 0 || 1 / e === 1 / t
        : e !== e && t !== t;
    }
    function nw(e, t) {
      if (_d(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      let n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (let a = 0; a < n.length; a++)
        if (!Object.hasOwn(t, n[a]) || !_d(e[n[a]], t[n[a]])) return !1;
      return !0;
    }
    var rw = nw;
  });
  var Vd = c((sa) => {
    "use strict";
    Object.defineProperty(sa, "__esModule", { value: !0 });
    function iw(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    iw(sa, {
      cleanupHTMLElement: function () {
        return rR;
      },
      clearAllStyles: function () {
        return nR;
      },
      clearObjectCache: function () {
        return bw;
      },
      getActionListProgress: function () {
        return aR;
      },
      getAffectedElements: function () {
        return aa;
      },
      getComputedStyle: function () {
        return Lw;
      },
      getDestinationValues: function () {
        return Vw;
      },
      getElementId: function () {
        return ww;
      },
      getInstanceId: function () {
        return Aw;
      },
      getInstanceOrigin: function () {
        return Mw;
      },
      getItemConfigByKey: function () {
        return qw;
      },
      getMaxDurationItemIndex: function () {
        return qd;
      },
      getNamespacedParameterId: function () {
        return uR;
      },
      getRenderType: function () {
        return Md;
      },
      getStyleProp: function () {
        return Uw;
      },
      mediaQueriesEqual: function () {
        return lR;
      },
      observeStore: function () {
        return Cw;
      },
      reduceListToGroup: function () {
        return oR;
      },
      reifyState: function () {
        return Rw;
      },
      renderHTMLElement: function () {
        return Gw;
      },
      shallowEqual: function () {
        return wd.default;
      },
      shouldAllowMediaQuery: function () {
        return cR;
      },
      shouldNamespaceEventParameter: function () {
        return sR;
      },
      stringifyTarget: function () {
        return fR;
      },
    });
    var Ze = er(Jf()),
      ta = er(pd()),
      ea = er(vd()),
      Id = mt(),
      st = me(),
      wd = er(yd()),
      aw = Di(),
      ow = Hi(),
      Xe = ji(),
      _e = Wn();
    function er(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var {
        BACKGROUND: sw,
        TRANSFORM: uw,
        TRANSLATE_3D: cw,
        SCALE_3D: lw,
        ROTATE_X: fw,
        ROTATE_Y: dw,
        ROTATE_Z: pw,
        SKEW: gw,
        PRESERVE_3D: Ew,
        FLEX: hw,
        OPACITY: Zn,
        FILTER: nn,
        FONT_VARIATION_SETTINGS: rn,
        WIDTH: Ge,
        HEIGHT: Be,
        BACKGROUND_COLOR: Rd,
        BORDER_COLOR: vw,
        COLOR: _w,
        CHILDREN: md,
        IMMEDIATE_CHILDREN: yw,
        SIBLINGS: Td,
        PARENT: Iw,
        DISPLAY: Jn,
        WILL_CHANGE: Ct,
        AUTO: Je,
        COMMA_DELIMITER: an,
        COLON_DELIMITER: mw,
        BAR_DELIMITER: Ji,
        RENDER_TRANSFORM: Nd,
        RENDER_GENERAL: na,
        RENDER_STYLE: ra,
        RENDER_PLUGIN: Cd,
      } = st.IX2EngineConstants,
      {
        TRANSFORM_MOVE: Lt,
        TRANSFORM_SCALE: Pt,
        TRANSFORM_ROTATE: xt,
        TRANSFORM_SKEW: on,
        STYLE_OPACITY: Ld,
        STYLE_FILTER: sn,
        STYLE_FONT_VARIATION: un,
        STYLE_SIZE: Mt,
        STYLE_BACKGROUND_COLOR: Ft,
        STYLE_BORDER: Dt,
        STYLE_TEXT_COLOR: qt,
        GENERAL_DISPLAY: tr,
        OBJECT_VALUE: Tw,
      } = st.ActionTypeConsts,
      Pd = (e) => e.trim(),
      ia = Object.freeze({ [Ft]: Rd, [Dt]: vw, [qt]: _w }),
      xd = Object.freeze({
        [_e.TRANSFORM_PREFIXED]: uw,
        [Rd]: sw,
        [Zn]: Zn,
        [nn]: nn,
        [Ge]: Ge,
        [Be]: Be,
        [rn]: rn,
      }),
      $n = new Map();
    function bw() {
      $n.clear();
    }
    var Ow = 1;
    function Aw() {
      return "i" + Ow++;
    }
    var Sw = 1;
    function ww(e, t) {
      for (let n in e) {
        let r = e[n];
        if (r && r.ref === t) return r.id;
      }
      return "e" + Sw++;
    }
    function Rw({ events: e, actionLists: t, site: n } = {}) {
      let r = (0, ta.default)(
          e,
          (o, s) => {
            let { eventTypeId: u } = s;
            return o[u] || (o[u] = {}), (o[u][s.id] = s), o;
          },
          {}
        ),
        a = n && n.mediaQueries,
        i = [];
      return (
        a
          ? (i = a.map((o) => o.key))
          : ((a = []), console.warn("IX2 missing mediaQueries in site data")),
        {
          ixData: {
            events: e,
            actionLists: t,
            eventTypeMap: r,
            mediaQueries: a,
            mediaQueryKeys: i,
          },
        }
      );
    }
    var Nw = (e, t) => e === t;
    function Cw({ store: e, select: t, onChange: n, comparator: r = Nw }) {
      let { getState: a, subscribe: i } = e,
        o = i(u),
        s = t(a());
      function u() {
        let l = t(a());
        if (l == null) {
          o();
          return;
        }
        r(l, s) || ((s = l), n(s, e));
      }
      return o;
    }
    function bd(e) {
      let t = typeof e;
      if (t === "string") return { id: e };
      if (e != null && t === "object") {
        let {
          id: n,
          objectId: r,
          selector: a,
          selectorGuids: i,
          appliesTo: o,
          useEventTarget: s,
        } = e;
        return {
          id: n,
          objectId: r,
          selector: a,
          selectorGuids: i,
          appliesTo: o,
          useEventTarget: s,
        };
      }
      return {};
    }
    function aa({
      config: e,
      event: t,
      eventTarget: n,
      elementRoot: r,
      elementApi: a,
    }) {
      if (!a) throw new Error("IX2 missing elementApi");
      let { targets: i } = e;
      if (Array.isArray(i) && i.length > 0)
        return i.reduce(
          (M, T) =>
            M.concat(
              aa({
                config: { target: T },
                event: t,
                eventTarget: n,
                elementRoot: r,
                elementApi: a,
              })
            ),
          []
        );
      let {
          getValidDocument: o,
          getQuerySelector: s,
          queryDocument: u,
          getChildElements: l,
          getSiblingElements: h,
          matchSelector: d,
          elementContains: p,
          isSiblingNode: g,
        } = a,
        { target: E } = e;
      if (!E) return [];
      let {
        id: y,
        objectId: I,
        selector: _,
        selectorGuids: A,
        appliesTo: b,
        useEventTarget: R,
      } = bd(E);
      if (I) return [$n.has(I) ? $n.get(I) : $n.set(I, {}).get(I)];
      if (b === st.EventAppliesTo.PAGE) {
        let M = o(y);
        return M ? [M] : [];
      }
      let w = (t?.action?.config?.affectedElements ?? {})[y || _] || {},
        q = !!(w.id || w.selector),
        U,
        G,
        B,
        H = t && s(bd(t.target));
      if (
        (q
          ? ((U = w.limitAffectedElements), (G = H), (B = s(w)))
          : (G = B = s({ id: y, selector: _, selectorGuids: A })),
        t && R)
      ) {
        let M = n && (B || R === !0) ? [n] : u(H);
        if (B) {
          if (R === Iw) return u(B).filter((T) => M.some((P) => p(T, P)));
          if (R === md) return u(B).filter((T) => M.some((P) => p(P, T)));
          if (R === Td) return u(B).filter((T) => M.some((P) => g(P, T)));
        }
        return M;
      }
      return G == null || B == null
        ? []
        : _e.IS_BROWSER_ENV && r
        ? u(B).filter((M) => r.contains(M))
        : U === md
        ? u(G, B)
        : U === yw
        ? l(u(G)).filter(d(B))
        : U === Td
        ? h(u(G)).filter(d(B))
        : u(B);
    }
    function Lw({ element: e, actionItem: t }) {
      if (!_e.IS_BROWSER_ENV) return {};
      let { actionTypeId: n } = t;
      switch (n) {
        case Mt:
        case Ft:
        case Dt:
        case qt:
        case tr:
          return window.getComputedStyle(e);
        default:
          return {};
      }
    }
    var Od = /px/,
      Pw = (e, t) =>
        t.reduce(
          (n, r) => (n[r.type] == null && (n[r.type] = Bw[r.type]), n),
          e || {}
        ),
      xw = (e, t) =>
        t.reduce(
          (n, r) => (
            n[r.type] == null &&
              (n[r.type] = Xw[r.type] || r.defaultValue || 0),
            n
          ),
          e || {}
        );
    function Mw(e, t = {}, n = {}, r, a) {
      let { getStyle: i } = a,
        { actionTypeId: o } = r;
      if ((0, Xe.isPluginType)(o)) return (0, Xe.getPluginOrigin)(o)(t[o], r);
      switch (r.actionTypeId) {
        case Lt:
        case Pt:
        case xt:
        case on:
          return t[r.actionTypeId] || oa[r.actionTypeId];
        case sn:
          return Pw(t[r.actionTypeId], r.config.filters);
        case un:
          return xw(t[r.actionTypeId], r.config.fontVariations);
        case Ld:
          return { value: (0, Ze.default)(parseFloat(i(e, Zn)), 1) };
        case Mt: {
          let s = i(e, Ge),
            u = i(e, Be),
            l,
            h;
          return (
            r.config.widthUnit === Je
              ? (l = Od.test(s) ? parseFloat(s) : parseFloat(n.width))
              : (l = (0, Ze.default)(parseFloat(s), parseFloat(n.width))),
            r.config.heightUnit === Je
              ? (h = Od.test(u) ? parseFloat(u) : parseFloat(n.height))
              : (h = (0, Ze.default)(parseFloat(u), parseFloat(n.height))),
            { widthValue: l, heightValue: h }
          );
        }
        case Ft:
        case Dt:
        case qt:
          return Jw({
            element: e,
            actionTypeId: r.actionTypeId,
            computedStyle: n,
            getStyle: i,
          });
        case tr:
          return { value: (0, Ze.default)(i(e, Jn), n.display) };
        case Tw:
          return t[r.actionTypeId] || { value: 0 };
        default:
          return;
      }
    }
    var Fw = (e, t) => (t && (e[t.type] = t.value || 0), e),
      Dw = (e, t) => (t && (e[t.type] = t.value || 0), e),
      qw = (e, t, n) => {
        if ((0, Xe.isPluginType)(e)) return (0, Xe.getPluginConfig)(e)(n, t);
        switch (e) {
          case sn: {
            let r = (0, ea.default)(n.filters, ({ type: a }) => a === t);
            return r ? r.value : 0;
          }
          case un: {
            let r = (0, ea.default)(n.fontVariations, ({ type: a }) => a === t);
            return r ? r.value : 0;
          }
          default:
            return n[t];
        }
      };
    function Vw({ element: e, actionItem: t, elementApi: n }) {
      if ((0, Xe.isPluginType)(t.actionTypeId))
        return (0, Xe.getPluginDestination)(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
        case Lt:
        case Pt:
        case xt:
        case on: {
          let { xValue: r, yValue: a, zValue: i } = t.config;
          return { xValue: r, yValue: a, zValue: i };
        }
        case Mt: {
          let { getStyle: r, setStyle: a, getProperty: i } = n,
            { widthUnit: o, heightUnit: s } = t.config,
            { widthValue: u, heightValue: l } = t.config;
          if (!_e.IS_BROWSER_ENV) return { widthValue: u, heightValue: l };
          if (o === Je) {
            let h = r(e, Ge);
            a(e, Ge, ""), (u = i(e, "offsetWidth")), a(e, Ge, h);
          }
          if (s === Je) {
            let h = r(e, Be);
            a(e, Be, ""), (l = i(e, "offsetHeight")), a(e, Be, h);
          }
          return { widthValue: u, heightValue: l };
        }
        case Ft:
        case Dt:
        case qt: {
          let {
            rValue: r,
            gValue: a,
            bValue: i,
            aValue: o,
            globalSwatchId: s,
          } = t.config;
          if (s && s.startsWith("--")) {
            let { getStyle: u } = n,
              l = u(e, s),
              h = (0, ow.normalizeColor)(l);
            return {
              rValue: h.red,
              gValue: h.green,
              bValue: h.blue,
              aValue: h.alpha,
            };
          }
          return { rValue: r, gValue: a, bValue: i, aValue: o };
        }
        case sn:
          return t.config.filters.reduce(Fw, {});
        case un:
          return t.config.fontVariations.reduce(Dw, {});
        default: {
          let { value: r } = t.config;
          return { value: r };
        }
      }
    }
    function Md(e) {
      if (/^TRANSFORM_/.test(e)) return Nd;
      if (/^STYLE_/.test(e)) return ra;
      if (/^GENERAL_/.test(e)) return na;
      if (/^PLUGIN_/.test(e)) return Cd;
    }
    function Uw(e, t) {
      return e === ra ? t.replace("STYLE_", "").toLowerCase() : null;
    }
    function Gw(e, t, n, r, a, i, o, s, u) {
      switch (s) {
        case Nd:
          return Hw(e, t, n, a, o);
        case ra:
          return eR(e, t, n, a, i, o);
        case na:
          return tR(e, a, o);
        case Cd: {
          let { actionTypeId: l } = a;
          if ((0, Xe.isPluginType)(l)) return (0, Xe.renderPlugin)(l)(u, t, a);
        }
      }
    }
    var oa = {
        [Lt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Pt]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [xt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [on]: Object.freeze({ xValue: 0, yValue: 0 }),
      },
      Bw = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      Xw = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
      kw = (e, t) => {
        let n = (0, ea.default)(t.filters, ({ type: r }) => r === e);
        if (n && n.unit) return n.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      },
      Ww = Object.keys(oa);
    function Hw(e, t, n, r, a) {
      let i = Ww.map((s) => {
          let u = oa[s],
            {
              xValue: l = u.xValue,
              yValue: h = u.yValue,
              zValue: d = u.zValue,
              xUnit: p = "",
              yUnit: g = "",
              zUnit: E = "",
            } = t[s] || {};
          switch (s) {
            case Lt:
              return `${cw}(${l}${p}, ${h}${g}, ${d}${E})`;
            case Pt:
              return `${lw}(${l}${p}, ${h}${g}, ${d}${E})`;
            case xt:
              return `${fw}(${l}${p}) ${dw}(${h}${g}) ${pw}(${d}${E})`;
            case on:
              return `${gw}(${l}${p}, ${h}${g})`;
            default:
              return "";
          }
        }).join(" "),
        { setStyle: o } = a;
      ut(e, _e.TRANSFORM_PREFIXED, a),
        o(e, _e.TRANSFORM_PREFIXED, i),
        Kw(r, n) && o(e, _e.TRANSFORM_STYLE_PREFIXED, Ew);
    }
    function zw(e, t, n, r) {
      let a = (0, ta.default)(t, (o, s, u) => `${o} ${u}(${s}${kw(u, n)})`, ""),
        { setStyle: i } = r;
      ut(e, nn, r), i(e, nn, a);
    }
    function Yw(e, t, n, r) {
      let a = (0, ta.default)(
          t,
          (o, s, u) => (o.push(`"${u}" ${s}`), o),
          []
        ).join(", "),
        { setStyle: i } = r;
      ut(e, rn, r), i(e, rn, a);
    }
    function Kw({ actionTypeId: e }, { xValue: t, yValue: n, zValue: r }) {
      return (
        (e === Lt && r !== void 0) ||
        (e === Pt && r !== void 0) ||
        (e === xt && (t !== void 0 || n !== void 0))
      );
    }
    var jw = "\\(([^)]+)\\)",
      Qw = /^rgb/,
      $w = RegExp(`rgba?${jw}`);
    function Zw(e, t) {
      let n = e.exec(t);
      return n ? n[1] : "";
    }
    function Jw({
      element: e,
      actionTypeId: t,
      computedStyle: n,
      getStyle: r,
    }) {
      let a = ia[t],
        i = r(e, a),
        o = Qw.test(i) ? i : n[a],
        s = Zw($w, o).split(an);
      return {
        rValue: (0, Ze.default)(parseInt(s[0], 10), 255),
        gValue: (0, Ze.default)(parseInt(s[1], 10), 255),
        bValue: (0, Ze.default)(parseInt(s[2], 10), 255),
        aValue: (0, Ze.default)(parseFloat(s[3]), 1),
      };
    }
    function eR(e, t, n, r, a, i) {
      let { setStyle: o } = i;
      switch (r.actionTypeId) {
        case Mt: {
          let { widthUnit: s = "", heightUnit: u = "" } = r.config,
            { widthValue: l, heightValue: h } = n;
          l !== void 0 &&
            (s === Je && (s = "px"), ut(e, Ge, i), o(e, Ge, l + s)),
            h !== void 0 &&
              (u === Je && (u = "px"), ut(e, Be, i), o(e, Be, h + u));
          break;
        }
        case sn: {
          zw(e, n, r.config, i);
          break;
        }
        case un: {
          Yw(e, n, r.config, i);
          break;
        }
        case Ft:
        case Dt:
        case qt: {
          let s = ia[r.actionTypeId],
            u = Math.round(n.rValue),
            l = Math.round(n.gValue),
            h = Math.round(n.bValue),
            d = n.aValue;
          ut(e, s, i),
            o(
              e,
              s,
              d >= 1 ? `rgb(${u},${l},${h})` : `rgba(${u},${l},${h},${d})`
            );
          break;
        }
        default: {
          let { unit: s = "" } = r.config;
          ut(e, a, i), o(e, a, n.value + s);
          break;
        }
      }
    }
    function tR(e, t, n) {
      let { setStyle: r } = n;
      switch (t.actionTypeId) {
        case tr: {
          let { value: a } = t.config;
          a === hw && _e.IS_BROWSER_ENV
            ? r(e, Jn, _e.FLEX_PREFIXED)
            : r(e, Jn, a);
          return;
        }
      }
    }
    function ut(e, t, n) {
      if (!_e.IS_BROWSER_ENV) return;
      let r = xd[t];
      if (!r) return;
      let { getStyle: a, setStyle: i } = n,
        o = a(e, Ct);
      if (!o) {
        i(e, Ct, r);
        return;
      }
      let s = o.split(an).map(Pd);
      s.indexOf(r) === -1 && i(e, Ct, s.concat(r).join(an));
    }
    function Fd(e, t, n) {
      if (!_e.IS_BROWSER_ENV) return;
      let r = xd[t];
      if (!r) return;
      let { getStyle: a, setStyle: i } = n,
        o = a(e, Ct);
      !o ||
        o.indexOf(r) === -1 ||
        i(
          e,
          Ct,
          o
            .split(an)
            .map(Pd)
            .filter((s) => s !== r)
            .join(an)
        );
    }
    function nR({ store: e, elementApi: t }) {
      let { ixData: n } = e.getState(),
        { events: r = {}, actionLists: a = {} } = n;
      Object.keys(r).forEach((i) => {
        let o = r[i],
          { config: s } = o.action,
          { actionListId: u } = s,
          l = a[u];
        l && Ad({ actionList: l, event: o, elementApi: t });
      }),
        Object.keys(a).forEach((i) => {
          Ad({ actionList: a[i], elementApi: t });
        });
    }
    function Ad({ actionList: e = {}, event: t, elementApi: n }) {
      let { actionItemGroups: r, continuousParameterGroups: a } = e;
      r &&
        r.forEach((i) => {
          Sd({ actionGroup: i, event: t, elementApi: n });
        }),
        a &&
          a.forEach((i) => {
            let { continuousActionGroups: o } = i;
            o.forEach((s) => {
              Sd({ actionGroup: s, event: t, elementApi: n });
            });
          });
    }
    function Sd({ actionGroup: e, event: t, elementApi: n }) {
      let { actionItems: r } = e;
      r.forEach((a) => {
        let { actionTypeId: i, config: o } = a,
          s;
        (0, Xe.isPluginType)(i)
          ? (s = (u) => (0, Xe.clearPlugin)(i)(u, a))
          : (s = Dd({ effect: iR, actionTypeId: i, elementApi: n })),
          aa({ config: o, event: t, elementApi: n }).forEach(s);
      });
    }
    function rR(e, t, n) {
      let { setStyle: r, getStyle: a } = n,
        { actionTypeId: i } = t;
      if (i === Mt) {
        let { config: o } = t;
        o.widthUnit === Je && r(e, Ge, ""), o.heightUnit === Je && r(e, Be, "");
      }
      a(e, Ct) && Dd({ effect: Fd, actionTypeId: i, elementApi: n })(e);
    }
    var Dd =
      ({ effect: e, actionTypeId: t, elementApi: n }) =>
      (r) => {
        switch (t) {
          case Lt:
          case Pt:
          case xt:
          case on:
            e(r, _e.TRANSFORM_PREFIXED, n);
            break;
          case sn:
            e(r, nn, n);
            break;
          case un:
            e(r, rn, n);
            break;
          case Ld:
            e(r, Zn, n);
            break;
          case Mt:
            e(r, Ge, n), e(r, Be, n);
            break;
          case Ft:
          case Dt:
          case qt:
            e(r, ia[t], n);
            break;
          case tr:
            e(r, Jn, n);
            break;
        }
      };
    function iR(e, t, n) {
      let { setStyle: r } = n;
      Fd(e, t, n),
        r(e, t, ""),
        t === _e.TRANSFORM_PREFIXED && r(e, _e.TRANSFORM_STYLE_PREFIXED, "");
    }
    function qd(e) {
      let t = 0,
        n = 0;
      return (
        e.forEach((r, a) => {
          let { config: i } = r,
            o = i.delay + i.duration;
          o >= t && ((t = o), (n = a));
        }),
        n
      );
    }
    function aR(e, t) {
      let { actionItemGroups: n, useFirstGroupAsInitialState: r } = e,
        { actionItem: a, verboseTimeElapsed: i = 0 } = t,
        o = 0,
        s = 0;
      return (
        n.forEach((u, l) => {
          if (r && l === 0) return;
          let { actionItems: h } = u,
            d = h[qd(h)],
            { config: p, actionTypeId: g } = d;
          a.id === d.id && (s = o + i);
          let E = Md(g) === na ? 0 : p.duration;
          o += p.delay + E;
        }),
        o > 0 ? (0, aw.optimizeFloat)(s / o) : 0
      );
    }
    function oR({ actionList: e, actionItemId: t, rawData: n }) {
      let { actionItemGroups: r, continuousParameterGroups: a } = e,
        i = [],
        o = (s) => (
          i.push((0, Id.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
          s.id === t
        );
      return (
        r && r.some(({ actionItems: s }) => s.some(o)),
        a &&
          a.some((s) => {
            let { continuousActionGroups: u } = s;
            return u.some(({ actionItems: l }) => l.some(o));
          }),
        (0, Id.setIn)(n, ["actionLists"], {
          [e.id]: { id: e.id, actionItemGroups: [{ actionItems: i }] },
        })
      );
    }
    function sR(e, { basedOn: t }) {
      return (
        (e === st.EventTypeConsts.SCROLLING_IN_VIEW &&
          (t === st.EventBasedOn.ELEMENT || t == null)) ||
        (e === st.EventTypeConsts.MOUSE_MOVE && t === st.EventBasedOn.ELEMENT)
      );
    }
    function uR(e, t) {
      return e + mw + t;
    }
    function cR(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1;
    }
    function lR(e, t) {
      return (0, wd.default)(e && e.sort(), t && t.sort());
    }
    function fR(e) {
      if (typeof e == "string") return e;
      if (e.pluginElement && e.objectId)
        return e.pluginElement + Ji + e.objectId;
      if (e.objectId) return e.objectId;
      let { id: t = "", selector: n = "", useEventTarget: r = "" } = e;
      return t + Ji + n + Ji + r;
    }
  });
  var ct = c((ua) => {
    "use strict";
    Object.defineProperty(ua, "__esModule", { value: !0 });
    function dR(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    dR(ua, {
      IX2BrowserSupport: function () {
        return pR;
      },
      IX2EasingUtils: function () {
        return ER;
      },
      IX2Easings: function () {
        return gR;
      },
      IX2ElementsReducer: function () {
        return hR;
      },
      IX2VanillaPlugins: function () {
        return vR;
      },
      IX2VanillaUtils: function () {
        return _R;
      },
    });
    var pR = Vt(Wn()),
      gR = Vt(xi()),
      ER = Vt(Di()),
      hR = Vt(Xf()),
      vR = Vt(ji()),
      _R = Vt(Vd());
    function Ud(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (Ud = function (r) {
        return r ? n : t;
      })(e);
    }
    function Vt(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = Ud(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
  });
  var kd = c((la) => {
    "use strict";
    Object.defineProperty(la, "__esModule", { value: !0 });
    Object.defineProperty(la, "ixInstances", {
      enumerable: !0,
      get: function () {
        return LR;
      },
    });
    var Gd = me(),
      Bd = ct(),
      Ut = mt(),
      {
        IX2_RAW_DATA_IMPORTED: yR,
        IX2_SESSION_STOPPED: IR,
        IX2_INSTANCE_ADDED: mR,
        IX2_INSTANCE_STARTED: TR,
        IX2_INSTANCE_REMOVED: bR,
        IX2_ANIMATION_FRAME_CHANGED: OR,
      } = Gd.IX2EngineActionTypes,
      {
        optimizeFloat: nr,
        applyEasing: Xd,
        createBezierEasing: AR,
      } = Bd.IX2EasingUtils,
      { RENDER_GENERAL: SR } = Gd.IX2EngineConstants,
      {
        getItemConfigByKey: ca,
        getRenderType: wR,
        getStyleProp: RR,
      } = Bd.IX2VanillaUtils,
      NR = (e, t) => {
        let {
            position: n,
            parameterId: r,
            actionGroups: a,
            destinationKeys: i,
            smoothing: o,
            restingValue: s,
            actionTypeId: u,
            customEasingFn: l,
            skipMotion: h,
            skipToValue: d,
          } = e,
          { parameters: p } = t.payload,
          g = Math.max(1 - o, 0.01),
          E = p[r];
        E == null && ((g = 1), (E = s));
        let y = Math.max(E, 0) || 0,
          I = nr(y - n),
          _ = h ? d : nr(n + I * g),
          A = _ * 100;
        if (_ === n && e.current) return e;
        let b, R, L, w;
        for (let U = 0, { length: G } = a; U < G; U++) {
          let { keyframe: B, actionItems: H } = a[U];
          if ((U === 0 && (b = H[0]), A >= B)) {
            b = H[0];
            let M = a[U + 1],
              T = M && A !== B;
            (R = T ? M.actionItems[0] : null),
              T && ((L = B / 100), (w = (M.keyframe - B) / 100));
          }
        }
        let q = {};
        if (b && !R)
          for (let U = 0, { length: G } = i; U < G; U++) {
            let B = i[U];
            q[B] = ca(u, B, b.config);
          }
        else if (b && R && L !== void 0 && w !== void 0) {
          let U = (_ - L) / w,
            G = b.config.easing,
            B = Xd(G, U, l);
          for (let H = 0, { length: M } = i; H < M; H++) {
            let T = i[H],
              P = ca(u, T, b.config),
              W = (ca(u, T, R.config) - P) * B + P;
            q[T] = W;
          }
        }
        return (0, Ut.merge)(e, { position: _, current: q });
      },
      CR = (e, t) => {
        let {
            active: n,
            origin: r,
            start: a,
            immediate: i,
            renderType: o,
            verbose: s,
            actionItem: u,
            destination: l,
            destinationKeys: h,
            pluginDuration: d,
            instanceDelay: p,
            customEasingFn: g,
            skipMotion: E,
          } = e,
          y = u.config.easing,
          { duration: I, delay: _ } = u.config;
        d != null && (I = d),
          (_ = p ?? _),
          o === SR ? (I = 0) : (i || E) && (I = _ = 0);
        let { now: A } = t.payload;
        if (n && r) {
          let b = A - (a + _);
          if (s) {
            let U = A - a,
              G = I + _,
              B = nr(Math.min(Math.max(0, U / G), 1));
            e = (0, Ut.set)(e, "verboseTimeElapsed", G * B);
          }
          if (b < 0) return e;
          let R = nr(Math.min(Math.max(0, b / I), 1)),
            L = Xd(y, R, g),
            w = {},
            q = null;
          return (
            h.length &&
              (q = h.reduce((U, G) => {
                let B = l[G],
                  H = parseFloat(r[G]) || 0,
                  T = (parseFloat(B) - H) * L + H;
                return (U[G] = T), U;
              }, {})),
            (w.current = q),
            (w.position = R),
            R === 1 && ((w.active = !1), (w.complete = !0)),
            (0, Ut.merge)(e, w)
          );
        }
        return e;
      },
      LR = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case yR:
            return t.payload.ixInstances || Object.freeze({});
          case IR:
            return Object.freeze({});
          case mR: {
            let {
                instanceId: n,
                elementId: r,
                actionItem: a,
                eventId: i,
                eventTarget: o,
                eventStateKey: s,
                actionListId: u,
                groupIndex: l,
                isCarrier: h,
                origin: d,
                destination: p,
                immediate: g,
                verbose: E,
                continuous: y,
                parameterId: I,
                actionGroups: _,
                smoothing: A,
                restingValue: b,
                pluginInstance: R,
                pluginDuration: L,
                instanceDelay: w,
                skipMotion: q,
                skipToValue: U,
              } = t.payload,
              { actionTypeId: G } = a,
              B = wR(G),
              H = RR(B, G),
              M = Object.keys(p).filter(
                (P) => p[P] != null && typeof p[P] != "string"
              ),
              { easing: T } = a.config;
            return (0, Ut.set)(e, n, {
              id: n,
              elementId: r,
              active: !1,
              position: 0,
              start: 0,
              origin: d,
              destination: p,
              destinationKeys: M,
              immediate: g,
              verbose: E,
              current: null,
              actionItem: a,
              actionTypeId: G,
              eventId: i,
              eventTarget: o,
              eventStateKey: s,
              actionListId: u,
              groupIndex: l,
              renderType: B,
              isCarrier: h,
              styleProp: H,
              continuous: y,
              parameterId: I,
              actionGroups: _,
              smoothing: A,
              restingValue: b,
              pluginInstance: R,
              pluginDuration: L,
              instanceDelay: w,
              skipMotion: q,
              skipToValue: U,
              customEasingFn:
                Array.isArray(T) && T.length === 4 ? AR(T) : void 0,
            });
          }
          case TR: {
            let { instanceId: n, time: r } = t.payload;
            return (0, Ut.mergeIn)(e, [n], {
              active: !0,
              complete: !1,
              start: r,
            });
          }
          case bR: {
            let { instanceId: n } = t.payload;
            if (!e[n]) return e;
            let r = {},
              a = Object.keys(e),
              { length: i } = a;
            for (let o = 0; o < i; o++) {
              let s = a[o];
              s !== n && (r[s] = e[s]);
            }
            return r;
          }
          case OR: {
            let n = e,
              r = Object.keys(e),
              { length: a } = r;
            for (let i = 0; i < a; i++) {
              let o = r[i],
                s = e[o],
                u = s.continuous ? NR : CR;
              n = (0, Ut.set)(n, o, u(s, t));
            }
            return n;
          }
          default:
            return e;
        }
      };
  });
  var Wd = c((fa) => {
    "use strict";
    Object.defineProperty(fa, "__esModule", { value: !0 });
    Object.defineProperty(fa, "ixParameters", {
      enumerable: !0,
      get: function () {
        return DR;
      },
    });
    var PR = me(),
      {
        IX2_RAW_DATA_IMPORTED: xR,
        IX2_SESSION_STOPPED: MR,
        IX2_PARAMETER_CHANGED: FR,
      } = PR.IX2EngineActionTypes,
      DR = (e = {}, t) => {
        switch (t.type) {
          case xR:
            return t.payload.ixParameters || {};
          case MR:
            return {};
          case FR: {
            let { key: n, value: r } = t.payload;
            return (e[n] = r), e;
          }
          default:
            return e;
        }
      };
  });
  var Hd = c((da) => {
    "use strict";
    Object.defineProperty(da, "__esModule", { value: !0 });
    Object.defineProperty(da, "default", {
      enumerable: !0,
      get: function () {
        return HR;
      },
    });
    var qR = Wr(),
      VR = is(),
      UR = bs(),
      GR = As(),
      BR = ct(),
      XR = kd(),
      kR = Wd(),
      { ixElements: WR } = BR.IX2ElementsReducer,
      HR = (0, qR.combineReducers)({
        ixData: VR.ixData,
        ixRequest: UR.ixRequest,
        ixSession: GR.ixSession,
        ixElements: WR,
        ixInstances: XR.ixInstances,
        ixParameters: kR.ixParameters,
      });
  });
  var Yd = c((ZF, zd) => {
    var zR = je(),
      YR = ge(),
      KR = He(),
      jR = "[object String]";
    function QR(e) {
      return typeof e == "string" || (!YR(e) && KR(e) && zR(e) == jR);
    }
    zd.exports = QR;
  });
  var jd = c((JF, Kd) => {
    var $R = Ai(),
      ZR = $R("length");
    Kd.exports = ZR;
  });
  var $d = c((eD, Qd) => {
    var JR = "\\ud800-\\udfff",
      eN = "\\u0300-\\u036f",
      tN = "\\ufe20-\\ufe2f",
      nN = "\\u20d0-\\u20ff",
      rN = eN + tN + nN,
      iN = "\\ufe0e\\ufe0f",
      aN = "\\u200d",
      oN = RegExp("[" + aN + JR + rN + iN + "]");
    function sN(e) {
      return oN.test(e);
    }
    Qd.exports = sN;
  });
  var op = c((tD, ap) => {
    var Jd = "\\ud800-\\udfff",
      uN = "\\u0300-\\u036f",
      cN = "\\ufe20-\\ufe2f",
      lN = "\\u20d0-\\u20ff",
      fN = uN + cN + lN,
      dN = "\\ufe0e\\ufe0f",
      pN = "[" + Jd + "]",
      pa = "[" + fN + "]",
      ga = "\\ud83c[\\udffb-\\udfff]",
      gN = "(?:" + pa + "|" + ga + ")",
      ep = "[^" + Jd + "]",
      tp = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      np = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      EN = "\\u200d",
      rp = gN + "?",
      ip = "[" + dN + "]?",
      hN = "(?:" + EN + "(?:" + [ep, tp, np].join("|") + ")" + ip + rp + ")*",
      vN = ip + rp + hN,
      _N = "(?:" + [ep + pa + "?", pa, tp, np, pN].join("|") + ")",
      Zd = RegExp(ga + "(?=" + ga + ")|" + _N + vN, "g");
    function yN(e) {
      for (var t = (Zd.lastIndex = 0); Zd.test(e); ) ++t;
      return t;
    }
    ap.exports = yN;
  });
  var up = c((nD, sp) => {
    var IN = jd(),
      mN = $d(),
      TN = op();
    function bN(e) {
      return mN(e) ? TN(e) : IN(e);
    }
    sp.exports = bN;
  });
  var lp = c((rD, cp) => {
    var ON = Fn(),
      AN = Dn(),
      SN = it(),
      wN = Yd(),
      RN = up(),
      NN = "[object Map]",
      CN = "[object Set]";
    function LN(e) {
      if (e == null) return 0;
      if (SN(e)) return wN(e) ? RN(e) : e.length;
      var t = AN(e);
      return t == NN || t == CN ? e.size : ON(e).length;
    }
    cp.exports = LN;
  });
  var dp = c((iD, fp) => {
    var PN = "Expected a function";
    function xN(e) {
      if (typeof e != "function") throw new TypeError(PN);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    fp.exports = xN;
  });
  var Ea = c((aD, pp) => {
    var MN = Qe(),
      FN = (function () {
        try {
          var e = MN(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    pp.exports = FN;
  });
  var ha = c((oD, Ep) => {
    var gp = Ea();
    function DN(e, t, n) {
      t == "__proto__" && gp
        ? gp(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
        : (e[t] = n);
    }
    Ep.exports = DN;
  });
  var vp = c((sD, hp) => {
    var qN = ha(),
      VN = An(),
      UN = Object.prototype,
      GN = UN.hasOwnProperty;
    function BN(e, t, n) {
      var r = e[t];
      (!(GN.call(e, t) && VN(r, n)) || (n === void 0 && !(t in e))) &&
        qN(e, t, n);
    }
    hp.exports = BN;
  });
  var Ip = c((uD, yp) => {
    var XN = vp(),
      kN = en(),
      WN = Ln(),
      _p = Ue(),
      HN = Nt();
    function zN(e, t, n, r) {
      if (!_p(e)) return e;
      t = kN(t, e);
      for (var a = -1, i = t.length, o = i - 1, s = e; s != null && ++a < i; ) {
        var u = HN(t[a]),
          l = n;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (a != o) {
          var h = s[u];
          (l = r ? r(h, u, s) : void 0),
            l === void 0 && (l = _p(h) ? h : WN(t[a + 1]) ? [] : {});
        }
        XN(s, u, l), (s = s[u]);
      }
      return e;
    }
    yp.exports = zN;
  });
  var Tp = c((cD, mp) => {
    var YN = Un(),
      KN = Ip(),
      jN = en();
    function QN(e, t, n) {
      for (var r = -1, a = t.length, i = {}; ++r < a; ) {
        var o = t[r],
          s = YN(e, o);
        n(s, o) && KN(i, jN(o, e), s);
      }
      return i;
    }
    mp.exports = QN;
  });
  var Op = c((lD, bp) => {
    var $N = Nn(),
      ZN = Lr(),
      JN = li(),
      eC = ci(),
      tC = Object.getOwnPropertySymbols,
      nC = tC
        ? function (e) {
            for (var t = []; e; ) $N(t, JN(e)), (e = ZN(e));
            return t;
          }
        : eC;
    bp.exports = nC;
  });
  var Sp = c((fD, Ap) => {
    function rC(e) {
      var t = [];
      if (e != null) for (var n in Object(e)) t.push(n);
      return t;
    }
    Ap.exports = rC;
  });
  var Rp = c((dD, wp) => {
    var iC = Ue(),
      aC = Mn(),
      oC = Sp(),
      sC = Object.prototype,
      uC = sC.hasOwnProperty;
    function cC(e) {
      if (!iC(e)) return oC(e);
      var t = aC(e),
        n = [];
      for (var r in e)
        (r == "constructor" && (t || !uC.call(e, r))) || n.push(r);
      return n;
    }
    wp.exports = cC;
  });
  var Cp = c((pD, Np) => {
    var lC = di(),
      fC = Rp(),
      dC = it();
    function pC(e) {
      return dC(e) ? lC(e, !0) : fC(e);
    }
    Np.exports = pC;
  });
  var Pp = c((gD, Lp) => {
    var gC = ui(),
      EC = Op(),
      hC = Cp();
    function vC(e) {
      return gC(e, hC, EC);
    }
    Lp.exports = vC;
  });
  var Mp = c((ED, xp) => {
    var _C = Oi(),
      yC = $e(),
      IC = Tp(),
      mC = Pp();
    function TC(e, t) {
      if (e == null) return {};
      var n = _C(mC(e), function (r) {
        return [r];
      });
      return (
        (t = yC(t)),
        IC(e, n, function (r, a) {
          return t(r, a[0]);
        })
      );
    }
    xp.exports = TC;
  });
  var Dp = c((hD, Fp) => {
    var bC = $e(),
      OC = dp(),
      AC = Mp();
    function SC(e, t) {
      return AC(e, OC(bC(t)));
    }
    Fp.exports = SC;
  });
  var Vp = c((vD, qp) => {
    var wC = Fn(),
      RC = Dn(),
      NC = Kt(),
      CC = ge(),
      LC = it(),
      PC = Cn(),
      xC = Mn(),
      MC = xn(),
      FC = "[object Map]",
      DC = "[object Set]",
      qC = Object.prototype,
      VC = qC.hasOwnProperty;
    function UC(e) {
      if (e == null) return !0;
      if (
        LC(e) &&
        (CC(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          PC(e) ||
          MC(e) ||
          NC(e))
      )
        return !e.length;
      var t = RC(e);
      if (t == FC || t == DC) return !e.size;
      if (xC(e)) return !wC(e).length;
      for (var n in e) if (VC.call(e, n)) return !1;
      return !0;
    }
    qp.exports = UC;
  });
  var Gp = c((_D, Up) => {
    var GC = ha(),
      BC = Qi(),
      XC = $e();
    function kC(e, t) {
      var n = {};
      return (
        (t = XC(t, 3)),
        BC(e, function (r, a, i) {
          GC(n, a, t(r, a, i));
        }),
        n
      );
    }
    Up.exports = kC;
  });
  var Xp = c((yD, Bp) => {
    function WC(e, t) {
      for (
        var n = -1, r = e == null ? 0 : e.length;
        ++n < r && t(e[n], n, e) !== !1;

      );
      return e;
    }
    Bp.exports = WC;
  });
  var Wp = c((ID, kp) => {
    var HC = Bn();
    function zC(e) {
      return typeof e == "function" ? e : HC;
    }
    kp.exports = zC;
  });
  var zp = c((mD, Hp) => {
    var YC = Xp(),
      KC = $i(),
      jC = Wp(),
      QC = ge();
    function $C(e, t) {
      var n = QC(e) ? YC : KC;
      return n(e, jC(t));
    }
    Hp.exports = $C;
  });
  var Kp = c((TD, Yp) => {
    var ZC = Pe(),
      JC = function () {
        return ZC.Date.now();
      };
    Yp.exports = JC;
  });
  var $p = c((bD, Qp) => {
    var e6 = Ue(),
      va = Kp(),
      jp = Xn(),
      t6 = "Expected a function",
      n6 = Math.max,
      r6 = Math.min;
    function i6(e, t, n) {
      var r,
        a,
        i,
        o,
        s,
        u,
        l = 0,
        h = !1,
        d = !1,
        p = !0;
      if (typeof e != "function") throw new TypeError(t6);
      (t = jp(t) || 0),
        e6(n) &&
          ((h = !!n.leading),
          (d = "maxWait" in n),
          (i = d ? n6(jp(n.maxWait) || 0, t) : i),
          (p = "trailing" in n ? !!n.trailing : p));
      function g(w) {
        var q = r,
          U = a;
        return (r = a = void 0), (l = w), (o = e.apply(U, q)), o;
      }
      function E(w) {
        return (l = w), (s = setTimeout(_, t)), h ? g(w) : o;
      }
      function y(w) {
        var q = w - u,
          U = w - l,
          G = t - q;
        return d ? r6(G, i - U) : G;
      }
      function I(w) {
        var q = w - u,
          U = w - l;
        return u === void 0 || q >= t || q < 0 || (d && U >= i);
      }
      function _() {
        var w = va();
        if (I(w)) return A(w);
        s = setTimeout(_, y(w));
      }
      function A(w) {
        return (s = void 0), p && r ? g(w) : ((r = a = void 0), o);
      }
      function b() {
        s !== void 0 && clearTimeout(s), (l = 0), (r = u = a = s = void 0);
      }
      function R() {
        return s === void 0 ? o : A(va());
      }
      function L() {
        var w = va(),
          q = I(w);
        if (((r = arguments), (a = this), (u = w), q)) {
          if (s === void 0) return E(u);
          if (d) return clearTimeout(s), (s = setTimeout(_, t)), g(u);
        }
        return s === void 0 && (s = setTimeout(_, t)), o;
      }
      return (L.cancel = b), (L.flush = R), L;
    }
    Qp.exports = i6;
  });
  var Jp = c((OD, Zp) => {
    var a6 = $p(),
      o6 = Ue(),
      s6 = "Expected a function";
    function u6(e, t, n) {
      var r = !0,
        a = !0;
      if (typeof e != "function") throw new TypeError(s6);
      return (
        o6(n) &&
          ((r = "leading" in n ? !!n.leading : r),
          (a = "trailing" in n ? !!n.trailing : a)),
        a6(e, t, { leading: r, maxWait: t, trailing: a })
      );
    }
    Zp.exports = u6;
  });
  var rr = c((_a) => {
    "use strict";
    Object.defineProperty(_a, "__esModule", { value: !0 });
    function c6(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    c6(_a, {
      actionListPlaybackChanged: function () {
        return j6;
      },
      animationFrameChanged: function () {
        return k6;
      },
      clearRequested: function () {
        return U6;
      },
      elementStateChanged: function () {
        return K6;
      },
      eventListenerAdded: function () {
        return G6;
      },
      eventStateChanged: function () {
        return X6;
      },
      instanceAdded: function () {
        return H6;
      },
      instanceRemoved: function () {
        return Y6;
      },
      instanceStarted: function () {
        return z6;
      },
      mediaQueriesDefined: function () {
        return $6;
      },
      parameterChanged: function () {
        return W6;
      },
      playbackRequested: function () {
        return q6;
      },
      previewRequested: function () {
        return D6;
      },
      rawDataImported: function () {
        return P6;
      },
      sessionInitialized: function () {
        return x6;
      },
      sessionStarted: function () {
        return M6;
      },
      sessionStopped: function () {
        return F6;
      },
      stopRequested: function () {
        return V6;
      },
      testFrameRendered: function () {
        return B6;
      },
      viewportWidthChanged: function () {
        return Q6;
      },
    });
    var eg = me(),
      l6 = ct(),
      {
        IX2_RAW_DATA_IMPORTED: f6,
        IX2_SESSION_INITIALIZED: d6,
        IX2_SESSION_STARTED: p6,
        IX2_SESSION_STOPPED: g6,
        IX2_PREVIEW_REQUESTED: E6,
        IX2_PLAYBACK_REQUESTED: h6,
        IX2_STOP_REQUESTED: v6,
        IX2_CLEAR_REQUESTED: _6,
        IX2_EVENT_LISTENER_ADDED: y6,
        IX2_TEST_FRAME_RENDERED: I6,
        IX2_EVENT_STATE_CHANGED: m6,
        IX2_ANIMATION_FRAME_CHANGED: T6,
        IX2_PARAMETER_CHANGED: b6,
        IX2_INSTANCE_ADDED: O6,
        IX2_INSTANCE_STARTED: A6,
        IX2_INSTANCE_REMOVED: S6,
        IX2_ELEMENT_STATE_CHANGED: w6,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: R6,
        IX2_VIEWPORT_WIDTH_CHANGED: N6,
        IX2_MEDIA_QUERIES_DEFINED: C6,
      } = eg.IX2EngineActionTypes,
      { reifyState: L6 } = l6.IX2VanillaUtils,
      P6 = (e) => ({ type: f6, payload: { ...L6(e) } }),
      x6 = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
        type: d6,
        payload: { hasBoundaryNodes: e, reducedMotion: t },
      }),
      M6 = () => ({ type: p6 }),
      F6 = () => ({ type: g6 }),
      D6 = ({ rawData: e, defer: t }) => ({
        type: E6,
        payload: { defer: t, rawData: e },
      }),
      q6 = ({
        actionTypeId: e = eg.ActionTypeConsts.GENERAL_START_ACTION,
        actionListId: t,
        actionItemId: n,
        eventId: r,
        allowEvents: a,
        immediate: i,
        testManual: o,
        verbose: s,
        rawData: u,
      }) => ({
        type: h6,
        payload: {
          actionTypeId: e,
          actionListId: t,
          actionItemId: n,
          testManual: o,
          eventId: r,
          allowEvents: a,
          immediate: i,
          verbose: s,
          rawData: u,
        },
      }),
      V6 = (e) => ({ type: v6, payload: { actionListId: e } }),
      U6 = () => ({ type: _6 }),
      G6 = (e, t) => ({ type: y6, payload: { target: e, listenerParams: t } }),
      B6 = (e = 1) => ({ type: I6, payload: { step: e } }),
      X6 = (e, t) => ({ type: m6, payload: { stateKey: e, newState: t } }),
      k6 = (e, t) => ({ type: T6, payload: { now: e, parameters: t } }),
      W6 = (e, t) => ({ type: b6, payload: { key: e, value: t } }),
      H6 = (e) => ({ type: O6, payload: { ...e } }),
      z6 = (e, t) => ({ type: A6, payload: { instanceId: e, time: t } }),
      Y6 = (e) => ({ type: S6, payload: { instanceId: e } }),
      K6 = (e, t, n, r) => ({
        type: w6,
        payload: { elementId: e, actionTypeId: t, current: n, actionItem: r },
      }),
      j6 = ({ actionListId: e, isPlaying: t }) => ({
        type: R6,
        payload: { actionListId: e, isPlaying: t },
      }),
      Q6 = ({ width: e, mediaQueries: t }) => ({
        type: N6,
        payload: { width: e, mediaQueries: t },
      }),
      $6 = () => ({ type: C6 });
  });
  var rg = c((Ia) => {
    "use strict";
    Object.defineProperty(Ia, "__esModule", { value: !0 });
    function Z6(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    Z6(Ia, {
      elementContains: function () {
        return lL;
      },
      getChildElements: function () {
        return dL;
      },
      getClosestElement: function () {
        return gL;
      },
      getProperty: function () {
        return aL;
      },
      getQuerySelector: function () {
        return sL;
      },
      getRefType: function () {
        return EL;
      },
      getSiblingElements: function () {
        return pL;
      },
      getStyle: function () {
        return iL;
      },
      getValidDocument: function () {
        return uL;
      },
      isSiblingNode: function () {
        return fL;
      },
      matchSelector: function () {
        return oL;
      },
      queryDocument: function () {
        return cL;
      },
      setStyle: function () {
        return rL;
      },
    });
    var J6 = ct(),
      eL = me(),
      { ELEMENT_MATCHES: ya } = J6.IX2BrowserSupport,
      {
        IX2_ID_DELIMITER: tg,
        HTML_ELEMENT: tL,
        PLAIN_OBJECT: nL,
        WF_PAGE: ng,
      } = eL.IX2EngineConstants;
    function rL(e, t, n) {
      e.style[t] = n;
    }
    function iL(e, t) {
      if (t.startsWith("--"))
        return window
          .getComputedStyle(document.documentElement)
          .getPropertyValue(t);
      if (e.style instanceof CSSStyleDeclaration) return e.style[t];
    }
    function aL(e, t) {
      return e[t];
    }
    function oL(e) {
      return (t) => t[ya](e);
    }
    function sL({ id: e, selector: t }) {
      if (e) {
        let n = e;
        if (e.indexOf(tg) !== -1) {
          let r = e.split(tg),
            a = r[0];
          if (((n = r[1]), a !== document.documentElement.getAttribute(ng)))
            return null;
        }
        return `[data-w-id="${n}"], [data-w-id^="${n}_instance"]`;
      }
      return t;
    }
    function uL(e) {
      return e == null || e === document.documentElement.getAttribute(ng)
        ? document
        : null;
    }
    function cL(e, t) {
      return Array.prototype.slice.call(
        document.querySelectorAll(t ? e + " " + t : e)
      );
    }
    function lL(e, t) {
      return e.contains(t);
    }
    function fL(e, t) {
      return e !== t && e.parentNode === t.parentNode;
    }
    function dL(e) {
      let t = [];
      for (let n = 0, { length: r } = e || []; n < r; n++) {
        let { children: a } = e[n],
          { length: i } = a;
        if (i) for (let o = 0; o < i; o++) t.push(a[o]);
      }
      return t;
    }
    function pL(e = []) {
      let t = [],
        n = [];
      for (let r = 0, { length: a } = e; r < a; r++) {
        let { parentNode: i } = e[r];
        if (!i || !i.children || !i.children.length || n.indexOf(i) !== -1)
          continue;
        n.push(i);
        let o = i.firstElementChild;
        for (; o != null; )
          e.indexOf(o) === -1 && t.push(o), (o = o.nextElementSibling);
      }
      return t;
    }
    var gL = Element.prototype.closest
      ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
      : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let n = e;
          do {
            if (n[ya] && n[ya](t)) return n;
            n = n.parentNode;
          } while (n != null);
          return null;
        };
    function EL(e) {
      return e != null && typeof e == "object"
        ? e instanceof Element
          ? tL
          : nL
        : null;
    }
  });
  var ma = c((wD, ag) => {
    var hL = Ue(),
      ig = Object.create,
      vL = (function () {
        function e() {}
        return function (t) {
          if (!hL(t)) return {};
          if (ig) return ig(t);
          e.prototype = t;
          var n = new e();
          return (e.prototype = void 0), n;
        };
      })();
    ag.exports = vL;
  });
  var ir = c((RD, og) => {
    function _L() {}
    og.exports = _L;
  });
  var or = c((ND, sg) => {
    var yL = ma(),
      IL = ir();
    function ar(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    ar.prototype = yL(IL.prototype);
    ar.prototype.constructor = ar;
    sg.exports = ar;
  });
  var fg = c((CD, lg) => {
    var ug = _t(),
      mL = Kt(),
      TL = ge(),
      cg = ug ? ug.isConcatSpreadable : void 0;
    function bL(e) {
      return TL(e) || mL(e) || !!(cg && e && e[cg]);
    }
    lg.exports = bL;
  });
  var gg = c((LD, pg) => {
    var OL = Nn(),
      AL = fg();
    function dg(e, t, n, r, a) {
      var i = -1,
        o = e.length;
      for (n || (n = AL), a || (a = []); ++i < o; ) {
        var s = e[i];
        t > 0 && n(s)
          ? t > 1
            ? dg(s, t - 1, n, r, a)
            : OL(a, s)
          : r || (a[a.length] = s);
      }
      return a;
    }
    pg.exports = dg;
  });
  var hg = c((PD, Eg) => {
    var SL = gg();
    function wL(e) {
      var t = e == null ? 0 : e.length;
      return t ? SL(e, 1) : [];
    }
    Eg.exports = wL;
  });
  var _g = c((xD, vg) => {
    function RL(e, t, n) {
      switch (n.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, n[0]);
        case 2:
          return e.call(t, n[0], n[1]);
        case 3:
          return e.call(t, n[0], n[1], n[2]);
      }
      return e.apply(t, n);
    }
    vg.exports = RL;
  });
  var mg = c((MD, Ig) => {
    var NL = _g(),
      yg = Math.max;
    function CL(e, t, n) {
      return (
        (t = yg(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var r = arguments, a = -1, i = yg(r.length - t, 0), o = Array(i);
            ++a < i;

          )
            o[a] = r[t + a];
          a = -1;
          for (var s = Array(t + 1); ++a < t; ) s[a] = r[a];
          return (s[t] = n(o)), NL(e, this, s);
        }
      );
    }
    Ig.exports = CL;
  });
  var bg = c((FD, Tg) => {
    function LL(e) {
      return function () {
        return e;
      };
    }
    Tg.exports = LL;
  });
  var Sg = c((DD, Ag) => {
    var PL = bg(),
      Og = Ea(),
      xL = Bn(),
      ML = Og
        ? function (e, t) {
            return Og(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: PL(t),
              writable: !0,
            });
          }
        : xL;
    Ag.exports = ML;
  });
  var Rg = c((qD, wg) => {
    var FL = 800,
      DL = 16,
      qL = Date.now;
    function VL(e) {
      var t = 0,
        n = 0;
      return function () {
        var r = qL(),
          a = DL - (r - n);
        if (((n = r), a > 0)) {
          if (++t >= FL) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    wg.exports = VL;
  });
  var Cg = c((VD, Ng) => {
    var UL = Sg(),
      GL = Rg(),
      BL = GL(UL);
    Ng.exports = BL;
  });
  var Pg = c((UD, Lg) => {
    var XL = hg(),
      kL = mg(),
      WL = Cg();
    function HL(e) {
      return WL(kL(e, void 0, XL), e + "");
    }
    Lg.exports = HL;
  });
  var Fg = c((GD, Mg) => {
    var xg = pi(),
      zL = xg && new xg();
    Mg.exports = zL;
  });
  var qg = c((BD, Dg) => {
    function YL() {}
    Dg.exports = YL;
  });
  var Ta = c((XD, Ug) => {
    var Vg = Fg(),
      KL = qg(),
      jL = Vg
        ? function (e) {
            return Vg.get(e);
          }
        : KL;
    Ug.exports = jL;
  });
  var Bg = c((kD, Gg) => {
    var QL = {};
    Gg.exports = QL;
  });
  var ba = c((WD, kg) => {
    var Xg = Bg(),
      $L = Object.prototype,
      ZL = $L.hasOwnProperty;
    function JL(e) {
      for (
        var t = e.name + "", n = Xg[t], r = ZL.call(Xg, t) ? n.length : 0;
        r--;

      ) {
        var a = n[r],
          i = a.func;
        if (i == null || i == e) return a.name;
      }
      return t;
    }
    kg.exports = JL;
  });
  var ur = c((HD, Wg) => {
    var e3 = ma(),
      t3 = ir(),
      n3 = 4294967295;
    function sr(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = n3),
        (this.__views__ = []);
    }
    sr.prototype = e3(t3.prototype);
    sr.prototype.constructor = sr;
    Wg.exports = sr;
  });
  var zg = c((zD, Hg) => {
    function r3(e, t) {
      var n = -1,
        r = e.length;
      for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
      return t;
    }
    Hg.exports = r3;
  });
  var Kg = c((YD, Yg) => {
    var i3 = ur(),
      a3 = or(),
      o3 = zg();
    function s3(e) {
      if (e instanceof i3) return e.clone();
      var t = new a3(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = o3(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    Yg.exports = s3;
  });
  var $g = c((KD, Qg) => {
    var u3 = ur(),
      jg = or(),
      c3 = ir(),
      l3 = ge(),
      f3 = He(),
      d3 = Kg(),
      p3 = Object.prototype,
      g3 = p3.hasOwnProperty;
    function cr(e) {
      if (f3(e) && !l3(e) && !(e instanceof u3)) {
        if (e instanceof jg) return e;
        if (g3.call(e, "__wrapped__")) return d3(e);
      }
      return new jg(e);
    }
    cr.prototype = c3.prototype;
    cr.prototype.constructor = cr;
    Qg.exports = cr;
  });
  var Jg = c((jD, Zg) => {
    var E3 = ur(),
      h3 = Ta(),
      v3 = ba(),
      _3 = $g();
    function y3(e) {
      var t = v3(e),
        n = _3[t];
      if (typeof n != "function" || !(t in E3.prototype)) return !1;
      if (e === n) return !0;
      var r = h3(n);
      return !!r && e === r[0];
    }
    Zg.exports = y3;
  });
  var rE = c((QD, nE) => {
    var eE = or(),
      I3 = Pg(),
      m3 = Ta(),
      Oa = ba(),
      T3 = ge(),
      tE = Jg(),
      b3 = "Expected a function",
      O3 = 8,
      A3 = 32,
      S3 = 128,
      w3 = 256;
    function R3(e) {
      return I3(function (t) {
        var n = t.length,
          r = n,
          a = eE.prototype.thru;
        for (e && t.reverse(); r--; ) {
          var i = t[r];
          if (typeof i != "function") throw new TypeError(b3);
          if (a && !o && Oa(i) == "wrapper") var o = new eE([], !0);
        }
        for (r = o ? r : n; ++r < n; ) {
          i = t[r];
          var s = Oa(i),
            u = s == "wrapper" ? m3(i) : void 0;
          u &&
          tE(u[0]) &&
          u[1] == (S3 | O3 | A3 | w3) &&
          !u[4].length &&
          u[9] == 1
            ? (o = o[Oa(u[0])].apply(o, u[3]))
            : (o = i.length == 1 && tE(i) ? o[s]() : o.thru(i));
        }
        return function () {
          var l = arguments,
            h = l[0];
          if (o && l.length == 1 && T3(h)) return o.plant(h).value();
          for (var d = 0, p = n ? t[d].apply(this, l) : h; ++d < n; )
            p = t[d].call(this, p);
          return p;
        };
      });
    }
    nE.exports = R3;
  });
  var aE = c(($D, iE) => {
    var N3 = rE(),
      C3 = N3();
    iE.exports = C3;
  });
  var sE = c((ZD, oE) => {
    function L3(e, t, n) {
      return (
        e === e &&
          (n !== void 0 && (e = e <= n ? e : n),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    oE.exports = L3;
  });
  var cE = c((JD, uE) => {
    var P3 = sE(),
      Aa = Xn();
    function x3(e, t, n) {
      return (
        n === void 0 && ((n = t), (t = void 0)),
        n !== void 0 && ((n = Aa(n)), (n = n === n ? n : 0)),
        t !== void 0 && ((t = Aa(t)), (t = t === t ? t : 0)),
        P3(Aa(e), t, n)
      );
    }
    uE.exports = x3;
  });
  var wE = c((La) => {
    "use strict";
    Object.defineProperty(La, "__esModule", { value: !0 });
    Object.defineProperty(La, "default", {
      enumerable: !0,
      get: function () {
        return EP;
      },
    });
    var M3 = Ca(aE()),
      F3 = Ca(Gn()),
      D3 = Ca(cE()),
      lt = me(),
      Sa = Pa(),
      lr = rr(),
      q3 = ct();
    function Ca(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var {
        MOUSE_CLICK: V3,
        MOUSE_SECOND_CLICK: U3,
        MOUSE_DOWN: G3,
        MOUSE_UP: B3,
        MOUSE_OVER: X3,
        MOUSE_OUT: k3,
        DROPDOWN_CLOSE: W3,
        DROPDOWN_OPEN: H3,
        SLIDER_ACTIVE: z3,
        SLIDER_INACTIVE: Y3,
        TAB_ACTIVE: K3,
        TAB_INACTIVE: j3,
        NAVBAR_CLOSE: Q3,
        NAVBAR_OPEN: $3,
        MOUSE_MOVE: Z3,
        PAGE_SCROLL_DOWN: _E,
        SCROLL_INTO_VIEW: yE,
        SCROLL_OUT_OF_VIEW: J3,
        PAGE_SCROLL_UP: eP,
        SCROLLING_IN_VIEW: tP,
        PAGE_FINISH: IE,
        ECOMMERCE_CART_CLOSE: nP,
        ECOMMERCE_CART_OPEN: rP,
        PAGE_START: mE,
        PAGE_SCROLL: iP,
      } = lt.EventTypeConsts,
      wa = "COMPONENT_ACTIVE",
      TE = "COMPONENT_INACTIVE",
      { COLON_DELIMITER: lE } = lt.IX2EngineConstants,
      { getNamespacedParameterId: fE } = q3.IX2VanillaUtils,
      bE = (e) => (t) => typeof t == "object" && e(t) ? !0 : t,
      ln = bE(({ element: e, nativeEvent: t }) => e === t.target),
      aP = bE(({ element: e, nativeEvent: t }) => e.contains(t.target)),
      ke = (0, M3.default)([ln, aP]),
      OE = (e, t) => {
        if (t) {
          let { ixData: n } = e.getState(),
            { events: r } = n,
            a = r[t];
          if (a && !sP[a.eventTypeId]) return a;
        }
        return null;
      },
      oP = ({ store: e, event: t }) => {
        let { action: n } = t,
          { autoStopEventId: r } = n.config;
        return !!OE(e, r);
      },
      be = ({ store: e, event: t, element: n, eventStateKey: r }, a) => {
        let { action: i, id: o } = t,
          { actionListId: s, autoStopEventId: u } = i.config,
          l = OE(e, u);
        return (
          l &&
            (0, Sa.stopActionGroup)({
              store: e,
              eventId: u,
              eventTarget: n,
              eventStateKey: u + lE + r.split(lE)[1],
              actionListId: (0, F3.default)(l, "action.config.actionListId"),
            }),
          (0, Sa.stopActionGroup)({
            store: e,
            eventId: o,
            eventTarget: n,
            eventStateKey: r,
            actionListId: s,
          }),
          (0, Sa.startActionGroup)({
            store: e,
            eventId: o,
            eventTarget: n,
            eventStateKey: r,
            actionListId: s,
          }),
          a
        );
      },
      xe = (e, t) => (n, r) => e(n, r) === !0 ? t(n, r) : r,
      fn = { handler: xe(ke, be) },
      AE = { ...fn, types: [wa, TE].join(" ") },
      Ra = [
        { target: window, types: "resize orientationchange", throttle: !0 },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        },
      ],
      dE = "mouseover mouseout",
      Na = { types: Ra },
      sP = { PAGE_START: mE, PAGE_FINISH: IE },
      cn = (() => {
        let e = window.pageXOffset !== void 0,
          n =
            document.compatMode === "CSS1Compat"
              ? document.documentElement
              : document.body;
        return () => ({
          scrollLeft: e ? window.pageXOffset : n.scrollLeft,
          scrollTop: e ? window.pageYOffset : n.scrollTop,
          stiffScrollTop: (0, D3.default)(
            e ? window.pageYOffset : n.scrollTop,
            0,
            n.scrollHeight - window.innerHeight
          ),
          scrollWidth: n.scrollWidth,
          scrollHeight: n.scrollHeight,
          clientWidth: n.clientWidth,
          clientHeight: n.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        });
      })(),
      uP = (e, t) =>
        !(
          e.left > t.right ||
          e.right < t.left ||
          e.top > t.bottom ||
          e.bottom < t.top
        ),
      cP = ({ element: e, nativeEvent: t }) => {
        let { type: n, target: r, relatedTarget: a } = t,
          i = e.contains(r);
        if (n === "mouseover" && i) return !0;
        let o = e.contains(a);
        return !!(n === "mouseout" && i && o);
      },
      lP = (e) => {
        let {
            element: t,
            event: { config: n },
          } = e,
          { clientWidth: r, clientHeight: a } = cn(),
          i = n.scrollOffsetValue,
          u = n.scrollOffsetUnit === "PX" ? i : (a * (i || 0)) / 100;
        return uP(t.getBoundingClientRect(), {
          left: 0,
          top: u,
          right: r,
          bottom: a - u,
        });
      },
      SE = (e) => (t, n) => {
        let { type: r } = t.nativeEvent,
          a = [wa, TE].indexOf(r) !== -1 ? r === wa : n.isActive,
          i = { ...n, isActive: a };
        return ((!n || i.isActive !== n.isActive) && e(t, i)) || i;
      },
      pE = (e) => (t, n) => {
        let r = { elementHovered: cP(t) };
        return (
          ((n ? r.elementHovered !== n.elementHovered : r.elementHovered) &&
            e(t, r)) ||
          r
        );
      },
      fP = (e) => (t, n) => {
        let r = { ...n, elementVisible: lP(t) };
        return (
          ((n ? r.elementVisible !== n.elementVisible : r.elementVisible) &&
            e(t, r)) ||
          r
        );
      },
      gE =
        (e) =>
        (t, n = {}) => {
          let { stiffScrollTop: r, scrollHeight: a, innerHeight: i } = cn(),
            {
              event: { config: o, eventTypeId: s },
            } = t,
            { scrollOffsetValue: u, scrollOffsetUnit: l } = o,
            h = l === "PX",
            d = a - i,
            p = Number((r / d).toFixed(2));
          if (n && n.percentTop === p) return n;
          let g = (h ? u : (i * (u || 0)) / 100) / d,
            E,
            y,
            I = 0;
          n &&
            ((E = p > n.percentTop),
            (y = n.scrollingDown !== E),
            (I = y ? p : n.anchorTop));
          let _ = s === _E ? p >= I + g : p <= I - g,
            A = {
              ...n,
              percentTop: p,
              inBounds: _,
              anchorTop: I,
              scrollingDown: E,
            };
          return (n && _ && (y || A.inBounds !== n.inBounds) && e(t, A)) || A;
        },
      dP = (e, t) =>
        e.left > t.left &&
        e.left < t.right &&
        e.top > t.top &&
        e.top < t.bottom,
      pP = (e) => (t, n) => {
        let r = { finished: document.readyState === "complete" };
        return r.finished && !(n && n.finshed) && e(t), r;
      },
      gP = (e) => (t, n) => {
        let r = { started: !0 };
        return n || e(t), r;
      },
      EE =
        (e) =>
        (t, n = { clickCount: 0 }) => {
          let r = { clickCount: (n.clickCount % 2) + 1 };
          return (r.clickCount !== n.clickCount && e(t, r)) || r;
        },
      fr = (e = !0) => ({
        ...AE,
        handler: xe(
          e ? ke : ln,
          SE((t, n) => (n.isActive ? fn.handler(t, n) : n))
        ),
      }),
      dr = (e = !0) => ({
        ...AE,
        handler: xe(
          e ? ke : ln,
          SE((t, n) => (n.isActive ? n : fn.handler(t, n)))
        ),
      }),
      hE = {
        ...Na,
        handler: fP((e, t) => {
          let { elementVisible: n } = t,
            { event: r, store: a } = e,
            { ixData: i } = a.getState(),
            { events: o } = i;
          return !o[r.action.config.autoStopEventId] && t.triggered
            ? t
            : (r.eventTypeId === yE) === n
            ? (be(e), { ...t, triggered: !0 })
            : t;
        }),
      },
      vE = 0.05,
      EP = {
        [z3]: fr(),
        [Y3]: dr(),
        [H3]: fr(),
        [W3]: dr(),
        [$3]: fr(!1),
        [Q3]: dr(!1),
        [K3]: fr(),
        [j3]: dr(),
        [rP]: { types: "ecommerce-cart-open", handler: xe(ke, be) },
        [nP]: { types: "ecommerce-cart-close", handler: xe(ke, be) },
        [V3]: {
          types: "click",
          handler: xe(
            ke,
            EE((e, { clickCount: t }) => {
              oP(e) ? t === 1 && be(e) : be(e);
            })
          ),
        },
        [U3]: {
          types: "click",
          handler: xe(
            ke,
            EE((e, { clickCount: t }) => {
              t === 2 && be(e);
            })
          ),
        },
        [G3]: { ...fn, types: "mousedown" },
        [B3]: { ...fn, types: "mouseup" },
        [X3]: {
          types: dE,
          handler: xe(
            ke,
            pE((e, t) => {
              t.elementHovered && be(e);
            })
          ),
        },
        [k3]: {
          types: dE,
          handler: xe(
            ke,
            pE((e, t) => {
              t.elementHovered || be(e);
            })
          ),
        },
        [Z3]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: n,
              nativeEvent: r,
              eventStateKey: a,
            },
            i = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
          ) => {
            let {
                basedOn: o,
                selectedAxis: s,
                continuousParameterGroupId: u,
                reverse: l,
                restingState: h = 0,
              } = n,
              {
                clientX: d = i.clientX,
                clientY: p = i.clientY,
                pageX: g = i.pageX,
                pageY: E = i.pageY,
              } = r,
              y = s === "X_AXIS",
              I = r.type === "mouseout",
              _ = h / 100,
              A = u,
              b = !1;
            switch (o) {
              case lt.EventBasedOn.VIEWPORT: {
                _ = y
                  ? Math.min(d, window.innerWidth) / window.innerWidth
                  : Math.min(p, window.innerHeight) / window.innerHeight;
                break;
              }
              case lt.EventBasedOn.PAGE: {
                let {
                  scrollLeft: R,
                  scrollTop: L,
                  scrollWidth: w,
                  scrollHeight: q,
                } = cn();
                _ = y ? Math.min(R + g, w) / w : Math.min(L + E, q) / q;
                break;
              }
              case lt.EventBasedOn.ELEMENT:
              default: {
                A = fE(a, u);
                let R = r.type.indexOf("mouse") === 0;
                if (R && ke({ element: t, nativeEvent: r }) !== !0) break;
                let L = t.getBoundingClientRect(),
                  { left: w, top: q, width: U, height: G } = L;
                if (!R && !dP({ left: d, top: p }, L)) break;
                (b = !0), (_ = y ? (d - w) / U : (p - q) / G);
                break;
              }
            }
            return (
              I && (_ > 1 - vE || _ < vE) && (_ = Math.round(_)),
              (o !== lt.EventBasedOn.ELEMENT || b || b !== i.elementHovered) &&
                ((_ = l ? 1 - _ : _),
                e.dispatch((0, lr.parameterChanged)(A, _))),
              { elementHovered: b, clientX: d, clientY: p, pageX: g, pageY: E }
            );
          },
        },
        [iP]: {
          types: Ra,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: n, reverse: r } = t,
              { scrollTop: a, scrollHeight: i, clientHeight: o } = cn(),
              s = a / (i - o);
            (s = r ? 1 - s : s), e.dispatch((0, lr.parameterChanged)(n, s));
          },
        },
        [tP]: {
          types: Ra,
          handler: (
            { element: e, store: t, eventConfig: n, eventStateKey: r },
            a = { scrollPercent: 0 }
          ) => {
            let {
                scrollLeft: i,
                scrollTop: o,
                scrollWidth: s,
                scrollHeight: u,
                clientHeight: l,
              } = cn(),
              {
                basedOn: h,
                selectedAxis: d,
                continuousParameterGroupId: p,
                startsEntering: g,
                startsExiting: E,
                addEndOffset: y,
                addStartOffset: I,
                addOffsetValue: _ = 0,
                endOffsetValue: A = 0,
              } = n,
              b = d === "X_AXIS";
            if (h === lt.EventBasedOn.VIEWPORT) {
              let R = b ? i / s : o / u;
              return (
                R !== a.scrollPercent &&
                  t.dispatch((0, lr.parameterChanged)(p, R)),
                { scrollPercent: R }
              );
            } else {
              let R = fE(r, p),
                L = e.getBoundingClientRect(),
                w = (I ? _ : 0) / 100,
                q = (y ? A : 0) / 100;
              (w = g ? w : 1 - w), (q = E ? q : 1 - q);
              let U = L.top + Math.min(L.height * w, l),
                B = L.top + L.height * q - U,
                H = Math.min(l + B, u),
                T = Math.min(Math.max(0, l - U), H) / H;
              return (
                T !== a.scrollPercent &&
                  t.dispatch((0, lr.parameterChanged)(R, T)),
                { scrollPercent: T }
              );
            }
          },
        },
        [yE]: hE,
        [J3]: hE,
        [_E]: {
          ...Na,
          handler: gE((e, t) => {
            t.scrollingDown && be(e);
          }),
        },
        [eP]: {
          ...Na,
          handler: gE((e, t) => {
            t.scrollingDown || be(e);
          }),
        },
        [IE]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: xe(ln, pP(be)),
        },
        [mE]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: xe(ln, gP(be)),
        },
      };
  });
  var Pa = c((Ba) => {
    "use strict";
    Object.defineProperty(Ba, "__esModule", { value: !0 });
    function hP(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    hP(Ba, {
      observeRequests: function () {
        return WP;
      },
      startActionGroup: function () {
        return Va;
      },
      startEngine: function () {
        return vr;
      },
      stopActionGroup: function () {
        return qa;
      },
      stopAllActionGroups: function () {
        return qE;
      },
      stopEngine: function () {
        return _r;
      },
    });
    var vP = Ye(Ni()),
      et = Ye(Gn()),
      _P = Ye(lp()),
      yP = Ye(Dp()),
      IP = Ye(Vp()),
      mP = Ye(Gp()),
      dn = Ye(zp()),
      TP = Ye(Jp()),
      we = me(),
      CE = ct(),
      ue = rr(),
      de = OP(rg()),
      bP = Ye(wE());
    function Ye(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function LE(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (LE = function (r) {
        return r ? n : t;
      })(e);
    }
    function OP(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = LE(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var AP = Object.keys(we.QuickEffectIds),
      xa = (e) => AP.includes(e),
      {
        COLON_DELIMITER: Ma,
        BOUNDARY_SELECTOR: pr,
        HTML_ELEMENT: PE,
        RENDER_GENERAL: SP,
        W_MOD_IX: RE,
      } = we.IX2EngineConstants,
      {
        getAffectedElements: gr,
        getElementId: wP,
        getDestinationValues: Fa,
        observeStore: ft,
        getInstanceId: RP,
        renderHTMLElement: NP,
        clearAllStyles: xE,
        getMaxDurationItemIndex: CP,
        getComputedStyle: LP,
        getInstanceOrigin: PP,
        reduceListToGroup: xP,
        shouldNamespaceEventParameter: MP,
        getNamespacedParameterId: FP,
        shouldAllowMediaQuery: Er,
        cleanupHTMLElement: DP,
        clearObjectCache: qP,
        stringifyTarget: VP,
        mediaQueriesEqual: UP,
        shallowEqual: GP,
      } = CE.IX2VanillaUtils,
      {
        isPluginType: hr,
        createPluginInstance: Da,
        getPluginDuration: BP,
      } = CE.IX2VanillaPlugins,
      NE = navigator.userAgent,
      XP = NE.match(/iPad/i) || NE.match(/iPhone/),
      kP = 12;
    function WP(e) {
      ft({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: YP }),
        ft({
          store: e,
          select: ({ ixRequest: t }) => t.playback,
          onChange: KP,
        }),
        ft({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: jP }),
        ft({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: QP });
    }
    function HP(e) {
      ft({
        store: e,
        select: ({ ixSession: t }) => t.mediaQueryKey,
        onChange: () => {
          _r(e),
            xE({ store: e, elementApi: de }),
            vr({ store: e, allowEvents: !0 }),
            ME();
        },
      });
    }
    function zP(e, t) {
      let n = ft({
        store: e,
        select: ({ ixSession: r }) => r.tick,
        onChange: (r) => {
          t(r), n();
        },
      });
    }
    function YP({ rawData: e, defer: t }, n) {
      let r = () => {
        vr({ store: n, rawData: e, allowEvents: !0 }), ME();
      };
      t ? setTimeout(r, 0) : r();
    }
    function ME() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function KP(e, t) {
      let {
          actionTypeId: n,
          actionListId: r,
          actionItemId: a,
          eventId: i,
          allowEvents: o,
          immediate: s,
          testManual: u,
          verbose: l = !0,
        } = e,
        { rawData: h } = e;
      if (r && a && h && s) {
        let d = h.actionLists[r];
        d && (h = xP({ actionList: d, actionItemId: a, rawData: h }));
      }
      if (
        (vr({ store: t, rawData: h, allowEvents: o, testManual: u }),
        (r && n === we.ActionTypeConsts.GENERAL_START_ACTION) || xa(n))
      ) {
        qa({ store: t, actionListId: r }),
          DE({ store: t, actionListId: r, eventId: i });
        let d = Va({
          store: t,
          eventId: i,
          actionListId: r,
          immediate: s,
          verbose: l,
        });
        l &&
          d &&
          t.dispatch(
            (0, ue.actionListPlaybackChanged)({
              actionListId: r,
              isPlaying: !s,
            })
          );
      }
    }
    function jP({ actionListId: e }, t) {
      e ? qa({ store: t, actionListId: e }) : qE({ store: t }), _r(t);
    }
    function QP(e, t) {
      _r(t), xE({ store: t, elementApi: de });
    }
    function vr({ store: e, rawData: t, allowEvents: n, testManual: r }) {
      let { ixSession: a } = e.getState();
      t && e.dispatch((0, ue.rawDataImported)(t)),
        a.active ||
          (e.dispatch(
            (0, ue.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(pr),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          n &&
            (nx(e),
            $P(),
            e.getState().ixSession.hasDefinedMediaQueries && HP(e)),
          e.dispatch((0, ue.sessionStarted)()),
          ZP(e, r));
    }
    function $P() {
      let { documentElement: e } = document;
      e.className.indexOf(RE) === -1 && (e.className += ` ${RE}`);
    }
    function ZP(e, t) {
      let n = (r) => {
        let { ixSession: a, ixParameters: i } = e.getState();
        a.active &&
          (e.dispatch((0, ue.animationFrameChanged)(r, i)),
          t ? zP(e, n) : requestAnimationFrame(n));
      };
      n(window.performance.now());
    }
    function _r(e) {
      let { ixSession: t } = e.getState();
      if (t.active) {
        let { eventListeners: n } = t;
        n.forEach(JP), qP(), e.dispatch((0, ue.sessionStopped)());
      }
    }
    function JP({ target: e, listenerParams: t }) {
      e.removeEventListener.apply(e, t);
    }
    function ex({
      store: e,
      eventStateKey: t,
      eventTarget: n,
      eventId: r,
      eventConfig: a,
      actionListId: i,
      parameterGroup: o,
      smoothing: s,
      restingValue: u,
    }) {
      let { ixData: l, ixSession: h } = e.getState(),
        { events: d } = l,
        p = d[r],
        { eventTypeId: g } = p,
        E = {},
        y = {},
        I = [],
        { continuousActionGroups: _ } = o,
        { id: A } = o;
      MP(g, a) && (A = FP(t, A));
      let b = h.hasBoundaryNodes && n ? de.getClosestElement(n, pr) : null;
      _.forEach((R) => {
        let { keyframe: L, actionItems: w } = R;
        w.forEach((q) => {
          let { actionTypeId: U } = q,
            { target: G } = q.config;
          if (!G) return;
          let B = G.boundaryMode ? b : null,
            H = VP(G) + Ma + U;
          if (((y[H] = tx(y[H], L, q)), !E[H])) {
            E[H] = !0;
            let { config: M } = q;
            gr({
              config: M,
              event: p,
              eventTarget: n,
              elementRoot: B,
              elementApi: de,
            }).forEach((T) => {
              I.push({ element: T, key: H });
            });
          }
        });
      }),
        I.forEach(({ element: R, key: L }) => {
          let w = y[L],
            q = (0, et.default)(w, "[0].actionItems[0]", {}),
            { actionTypeId: U } = q,
            B = (
              U === we.ActionTypeConsts.PLUGIN_RIVE
                ? (q.config?.target?.selectorGuids || []).length === 0
                : hr(U)
            )
              ? Da(U)(R, q)
              : null,
            H = Fa({ element: R, actionItem: q, elementApi: de }, B);
          Ua({
            store: e,
            element: R,
            eventId: r,
            actionListId: i,
            actionItem: q,
            destination: H,
            continuous: !0,
            parameterId: A,
            actionGroups: w,
            smoothing: s,
            restingValue: u,
            pluginInstance: B,
          });
        });
    }
    function tx(e = [], t, n) {
      let r = [...e],
        a;
      return (
        r.some((i, o) => (i.keyframe === t ? ((a = o), !0) : !1)),
        a == null && ((a = r.length), r.push({ keyframe: t, actionItems: [] })),
        r[a].actionItems.push(n),
        r
      );
    }
    function nx(e) {
      let { ixData: t } = e.getState(),
        { eventTypeMap: n } = t;
      FE(e),
        (0, dn.default)(n, (a, i) => {
          let o = bP.default[i];
          if (!o) {
            console.warn(`IX2 event type not configured: ${i}`);
            return;
          }
          ux({ logic: o, store: e, events: a });
        });
      let { ixSession: r } = e.getState();
      r.eventListeners.length && ix(e);
    }
    var rx = ["resize", "orientationchange"];
    function ix(e) {
      let t = () => {
        FE(e);
      };
      rx.forEach((n) => {
        window.addEventListener(n, t),
          e.dispatch((0, ue.eventListenerAdded)(window, [n, t]));
      }),
        t();
    }
    function FE(e) {
      let { ixSession: t, ixData: n } = e.getState(),
        r = window.innerWidth;
      if (r !== t.viewportWidth) {
        let { mediaQueries: a } = n;
        e.dispatch((0, ue.viewportWidthChanged)({ width: r, mediaQueries: a }));
      }
    }
    var ax = (e, t) => (0, yP.default)((0, mP.default)(e, t), IP.default),
      ox = (e, t) => {
        (0, dn.default)(e, (n, r) => {
          n.forEach((a, i) => {
            let o = r + Ma + i;
            t(a, r, o);
          });
        });
      },
      sx = (e) => {
        let t = { target: e.target, targets: e.targets };
        return gr({ config: t, elementApi: de });
      };
    function ux({ logic: e, store: t, events: n }) {
      cx(n);
      let { types: r, handler: a } = e,
        { ixData: i } = t.getState(),
        { actionLists: o } = i,
        s = ax(n, sx);
      if (!(0, _P.default)(s)) return;
      (0, dn.default)(s, (d, p) => {
        let g = n[p],
          { action: E, id: y, mediaQueries: I = i.mediaQueryKeys } = g,
          { actionListId: _ } = E.config;
        UP(I, i.mediaQueryKeys) || t.dispatch((0, ue.mediaQueriesDefined)()),
          E.actionTypeId === we.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
            (Array.isArray(g.config) ? g.config : [g.config]).forEach((b) => {
              let { continuousParameterGroupId: R } = b,
                L = (0, et.default)(o, `${_}.continuousParameterGroups`, []),
                w = (0, vP.default)(L, ({ id: G }) => G === R),
                q = (b.smoothing || 0) / 100,
                U = (b.restingState || 0) / 100;
              w &&
                d.forEach((G, B) => {
                  let H = y + Ma + B;
                  ex({
                    store: t,
                    eventStateKey: H,
                    eventTarget: G,
                    eventId: y,
                    eventConfig: b,
                    actionListId: _,
                    parameterGroup: w,
                    smoothing: q,
                    restingValue: U,
                  });
                });
            }),
          (E.actionTypeId === we.ActionTypeConsts.GENERAL_START_ACTION ||
            xa(E.actionTypeId)) &&
            DE({ store: t, actionListId: _, eventId: y });
      });
      let u = (d) => {
          let { ixSession: p } = t.getState();
          ox(s, (g, E, y) => {
            let I = n[E],
              _ = p.eventState[y],
              { action: A, mediaQueries: b = i.mediaQueryKeys } = I;
            if (!Er(b, p.mediaQueryKey)) return;
            let R = (L = {}) => {
              let w = a(
                {
                  store: t,
                  element: g,
                  event: I,
                  eventConfig: L,
                  nativeEvent: d,
                  eventStateKey: y,
                },
                _
              );
              GP(w, _) || t.dispatch((0, ue.eventStateChanged)(y, w));
            };
            A.actionTypeId === we.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
              ? (Array.isArray(I.config) ? I.config : [I.config]).forEach(R)
              : R();
          });
        },
        l = (0, TP.default)(u, kP),
        h = ({ target: d = document, types: p, throttle: g }) => {
          p.split(" ")
            .filter(Boolean)
            .forEach((E) => {
              let y = g ? l : u;
              d.addEventListener(E, y),
                t.dispatch((0, ue.eventListenerAdded)(d, [E, y]));
            });
        };
      Array.isArray(r) ? r.forEach(h) : typeof r == "string" && h(e);
    }
    function cx(e) {
      if (!XP) return;
      let t = {},
        n = "";
      for (let r in e) {
        let { eventTypeId: a, target: i } = e[r],
          o = de.getQuerySelector(i);
        t[o] ||
          ((a === we.EventTypeConsts.MOUSE_CLICK ||
            a === we.EventTypeConsts.MOUSE_SECOND_CLICK) &&
            ((t[o] = !0),
            (n += o + "{cursor: pointer;touch-action: manipulation;}")));
      }
      if (n) {
        let r = document.createElement("style");
        (r.textContent = n), document.body.appendChild(r);
      }
    }
    function DE({ store: e, actionListId: t, eventId: n }) {
      let { ixData: r, ixSession: a } = e.getState(),
        { actionLists: i, events: o } = r,
        s = o[n],
        u = i[t];
      if (u && u.useFirstGroupAsInitialState) {
        let l = (0, et.default)(u, "actionItemGroups[0].actionItems", []),
          h = (0, et.default)(s, "mediaQueries", r.mediaQueryKeys);
        if (!Er(h, a.mediaQueryKey)) return;
        l.forEach((d) => {
          let { config: p, actionTypeId: g } = d,
            E =
              p?.target?.useEventTarget === !0 && p?.target?.objectId == null
                ? { target: s.target, targets: s.targets }
                : p,
            y = gr({ config: E, event: s, elementApi: de }),
            I = hr(g);
          y.forEach((_) => {
            let A = I ? Da(g)(_, d) : null;
            Ua({
              destination: Fa({ element: _, actionItem: d, elementApi: de }, A),
              immediate: !0,
              store: e,
              element: _,
              eventId: n,
              actionItem: d,
              actionListId: t,
              pluginInstance: A,
            });
          });
        });
      }
    }
    function qE({ store: e }) {
      let { ixInstances: t } = e.getState();
      (0, dn.default)(t, (n) => {
        if (!n.continuous) {
          let { actionListId: r, verbose: a } = n;
          Ga(n, e),
            a &&
              e.dispatch(
                (0, ue.actionListPlaybackChanged)({
                  actionListId: r,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function qa({
      store: e,
      eventId: t,
      eventTarget: n,
      eventStateKey: r,
      actionListId: a,
    }) {
      let { ixInstances: i, ixSession: o } = e.getState(),
        s = o.hasBoundaryNodes && n ? de.getClosestElement(n, pr) : null;
      (0, dn.default)(i, (u) => {
        let l = (0, et.default)(u, "actionItem.config.target.boundaryMode"),
          h = r ? u.eventStateKey === r : !0;
        if (u.actionListId === a && u.eventId === t && h) {
          if (s && l && !de.elementContains(s, u.element)) return;
          Ga(u, e),
            u.verbose &&
              e.dispatch(
                (0, ue.actionListPlaybackChanged)({
                  actionListId: a,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function Va({
      store: e,
      eventId: t,
      eventTarget: n,
      eventStateKey: r,
      actionListId: a,
      groupIndex: i = 0,
      immediate: o,
      verbose: s,
    }) {
      let { ixData: u, ixSession: l } = e.getState(),
        { events: h } = u,
        d = h[t] || {},
        { mediaQueries: p = u.mediaQueryKeys } = d,
        g = (0, et.default)(u, `actionLists.${a}`, {}),
        { actionItemGroups: E, useFirstGroupAsInitialState: y } = g;
      if (!E || !E.length) return !1;
      i >= E.length && (0, et.default)(d, "config.loop") && (i = 0),
        i === 0 && y && i++;
      let _ =
          (i === 0 || (i === 1 && y)) && xa(d.action?.actionTypeId)
            ? d.config.delay
            : void 0,
        A = (0, et.default)(E, [i, "actionItems"], []);
      if (!A.length || !Er(p, l.mediaQueryKey)) return !1;
      let b = l.hasBoundaryNodes && n ? de.getClosestElement(n, pr) : null,
        R = CP(A),
        L = !1;
      return (
        A.forEach((w, q) => {
          let { config: U, actionTypeId: G } = w,
            B = hr(G),
            { target: H } = U;
          if (!H) return;
          let M = H.boundaryMode ? b : null;
          gr({
            config: U,
            event: d,
            eventTarget: n,
            elementRoot: M,
            elementApi: de,
          }).forEach((P, V) => {
            let F = B ? Da(G)(P, w) : null,
              W = B ? BP(G)(P, w) : null;
            L = !0;
            let z = R === q && V === 0,
              J = LP({ element: P, actionItem: w }),
              ee = Fa({ element: P, actionItem: w, elementApi: de }, F);
            Ua({
              store: e,
              element: P,
              actionItem: w,
              eventId: t,
              eventTarget: n,
              eventStateKey: r,
              actionListId: a,
              groupIndex: i,
              isCarrier: z,
              computedStyle: J,
              destination: ee,
              immediate: o,
              verbose: s,
              pluginInstance: F,
              pluginDuration: W,
              instanceDelay: _,
            });
          });
        }),
        L
      );
    }
    function Ua(e) {
      let { store: t, computedStyle: n, ...r } = e,
        {
          element: a,
          actionItem: i,
          immediate: o,
          pluginInstance: s,
          continuous: u,
          restingValue: l,
          eventId: h,
        } = r,
        d = !u,
        p = RP(),
        { ixElements: g, ixSession: E, ixData: y } = t.getState(),
        I = wP(g, a),
        { refState: _ } = g[I] || {},
        A = de.getRefType(a),
        b = E.reducedMotion && we.ReducedMotionTypes[i.actionTypeId],
        R;
      if (b && u)
        switch (y.events[h]?.eventTypeId) {
          case we.EventTypeConsts.MOUSE_MOVE:
          case we.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            R = l;
            break;
          default:
            R = 0.5;
            break;
        }
      let L = PP(a, _, n, i, de, s);
      if (
        (t.dispatch(
          (0, ue.instanceAdded)({
            instanceId: p,
            elementId: I,
            origin: L,
            refType: A,
            skipMotion: b,
            skipToValue: R,
            ...r,
          })
        ),
        VE(document.body, "ix2-animation-started", p),
        o)
      ) {
        lx(t, p);
        return;
      }
      ft({ store: t, select: ({ ixInstances: w }) => w[p], onChange: UE }),
        d && t.dispatch((0, ue.instanceStarted)(p, E.tick));
    }
    function Ga(e, t) {
      VE(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState(),
      });
      let { elementId: n, actionItem: r } = e,
        { ixElements: a } = t.getState(),
        { ref: i, refType: o } = a[n] || {};
      o === PE && DP(i, r, de), t.dispatch((0, ue.instanceRemoved)(e.id));
    }
    function VE(e, t, n) {
      let r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, n), e.dispatchEvent(r);
    }
    function lx(e, t) {
      let { ixParameters: n } = e.getState();
      e.dispatch((0, ue.instanceStarted)(t, 0)),
        e.dispatch((0, ue.animationFrameChanged)(performance.now(), n));
      let { ixInstances: r } = e.getState();
      UE(r[t], e);
    }
    function UE(e, t) {
      let {
          active: n,
          continuous: r,
          complete: a,
          elementId: i,
          actionItem: o,
          actionTypeId: s,
          renderType: u,
          current: l,
          groupIndex: h,
          eventId: d,
          eventTarget: p,
          eventStateKey: g,
          actionListId: E,
          isCarrier: y,
          styleProp: I,
          verbose: _,
          pluginInstance: A,
        } = e,
        { ixData: b, ixSession: R } = t.getState(),
        { events: L } = b,
        w = L && L[d] ? L[d] : {},
        { mediaQueries: q = b.mediaQueryKeys } = w;
      if (Er(q, R.mediaQueryKey) && (r || n || a)) {
        if (l || (u === SP && a)) {
          t.dispatch((0, ue.elementStateChanged)(i, s, l, o));
          let { ixElements: U } = t.getState(),
            { ref: G, refType: B, refState: H } = U[i] || {},
            M = H && H[s];
          (B === PE || hr(s)) && NP(G, H, M, d, o, I, de, u, A);
        }
        if (a) {
          if (y) {
            let U = Va({
              store: t,
              eventId: d,
              eventTarget: p,
              eventStateKey: g,
              actionListId: E,
              groupIndex: h + 1,
              verbose: _,
            });
            _ &&
              !U &&
              t.dispatch(
                (0, ue.actionListPlaybackChanged)({
                  actionListId: E,
                  isPlaying: !1,
                })
              );
          }
          Ga(e, t);
        }
      }
    }
  });
  var XE = c((ka) => {
    "use strict";
    Object.defineProperty(ka, "__esModule", { value: !0 });
    function fx(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    fx(ka, {
      actions: function () {
        return gx;
      },
      destroy: function () {
        return BE;
      },
      init: function () {
        return _x;
      },
      setEnv: function () {
        return vx;
      },
      store: function () {
        return yr;
      },
    });
    var dx = Wr(),
      px = Ex(Hd()),
      Xa = Pa(),
      gx = hx(rr());
    function Ex(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function GE(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (GE = function (r) {
        return r ? n : t;
      })(e);
    }
    function hx(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = GE(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var yr = (0, dx.createStore)(px.default);
    function vx(e) {
      e() && (0, Xa.observeRequests)(yr);
    }
    function _x(e) {
      BE(), (0, Xa.startEngine)({ store: yr, rawData: e, allowEvents: !0 });
    }
    function BE() {
      (0, Xa.stopEngine)(yr);
    }
  });
  var zE = c((rq, HE) => {
    "use strict";
    var kE = qe(),
      WE = XE();
    WE.setEnv(kE.env);
    kE.define(
      "ix2",
      (HE.exports = function () {
        return WE;
      })
    );
  });
  var jE = c((iq, KE) => {
    "use strict";
    var Wa = window.jQuery,
      We = {},
      Ir = [],
      YE = ".w-ix",
      mr = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Wa(t).triggerHandler(We.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Wa(t).triggerHandler(We.types.OUTRO));
        },
      };
    We.triggers = {};
    We.types = { INTRO: "w-ix-intro" + YE, OUTRO: "w-ix-outro" + YE };
    We.init = function () {
      for (var e = Ir.length, t = 0; t < e; t++) {
        var n = Ir[t];
        n[0](0, n[1]);
      }
      (Ir = []), Wa.extend(We.triggers, mr);
    };
    We.async = function () {
      for (var e in mr) {
        var t = mr[e];
        mr.hasOwnProperty(e) &&
          (We.triggers[e] = function (n, r) {
            Ir.push([t, r]);
          });
      }
    };
    We.async();
    KE.exports = We;
  });
  var JE = c((aq, ZE) => {
    "use strict";
    var Ha = jE();
    function QE(e, t) {
      var n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
    }
    var yx = window.jQuery,
      Tr = {},
      $E = ".w-ix",
      Ix = {
        reset: function (e, t) {
          Ha.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Ha.triggers.intro(e, t), QE(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Ha.triggers.outro(e, t), QE(t, "COMPONENT_INACTIVE");
        },
      };
    Tr.triggers = {};
    Tr.types = { INTRO: "w-ix-intro" + $E, OUTRO: "w-ix-outro" + $E };
    yx.extend(Tr.triggers, Ix);
    ZE.exports = Tr;
  });
  var nh = c((oq, th) => {
    "use strict";
    var za = qe(),
      eh = "w-condition-invisible",
      mx = "." + eh;
    function Tx(e) {
      return e.filter(function (t) {
        return !gn(t);
      });
    }
    function gn(e) {
      return !!(e.$el && e.$el.closest(mx).length);
    }
    function Ya(e, t) {
      for (var n = e; n >= 0; n--) if (!gn(t[n])) return n;
      return -1;
    }
    function Ka(e, t) {
      for (var n = e; n <= t.length - 1; n++) if (!gn(t[n])) return n;
      return -1;
    }
    function bx(e, t) {
      return Ya(e - 1, t) === -1;
    }
    function Ox(e, t) {
      return Ka(e + 1, t) === -1;
    }
    function pn(e, t) {
      e.attr("aria-label") || e.attr("aria-label", t);
    }
    function Ax(e, t, n, r) {
      var a = n.tram,
        i = Array.isArray,
        o = "w-lightbox",
        s = o + "-",
        u = /(^|\s+)/g,
        l = [],
        h,
        d,
        p,
        g = [];
      function E(N, C) {
        return (
          (l = i(N) ? N : [N]),
          d || E.build(),
          Tx(l).length > 1 &&
            ((d.items = d.empty),
            l.forEach(function (j, ce) {
              var Ee = ee("thumbnail"),
                pe = ee("item")
                  .prop("tabIndex", 0)
                  .attr("aria-controls", "w-lightbox-view")
                  .attr("role", "tab")
                  .append(Ee);
              pn(pe, `show item ${ce + 1} of ${l.length}`),
                gn(j) && pe.addClass(eh),
                (d.items = d.items.add(pe)),
                B(j.thumbnailUrl || j.url, function (Z) {
                  Z.prop("width") > Z.prop("height")
                    ? F(Z, "wide")
                    : F(Z, "tall"),
                    Ee.append(F(Z, "thumbnail-image"));
                });
            }),
            d.strip.empty().append(d.items),
            F(d.content, "group")),
          a(W(d.lightbox, "hide").trigger("focus"))
            .add("opacity .3s")
            .start({ opacity: 1 }),
          F(d.html, "noscroll"),
          E.show(C || 0)
        );
      }
      (E.build = function () {
        return (
          E.destroy(),
          (d = { html: n(t.documentElement), empty: n() }),
          (d.arrowLeft = ee("control left inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (d.arrowRight = ee("control right inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (d.close = ee("control close").attr("role", "button")),
          pn(d.arrowLeft, "previous image"),
          pn(d.arrowRight, "next image"),
          pn(d.close, "close lightbox"),
          (d.spinner = ee("spinner")
            .attr("role", "progressbar")
            .attr("aria-live", "polite")
            .attr("aria-hidden", !1)
            .attr("aria-busy", !0)
            .attr("aria-valuemin", 0)
            .attr("aria-valuemax", 100)
            .attr("aria-valuenow", 0)
            .attr("aria-valuetext", "Loading image")),
          (d.strip = ee("strip").attr("role", "tablist")),
          (p = new T(d.spinner, P("hide"))),
          (d.content = ee("content").append(
            d.spinner,
            d.arrowLeft,
            d.arrowRight,
            d.close
          )),
          (d.container = ee("container").append(d.content, d.strip)),
          (d.lightbox = ee("backdrop hide").append(d.container)),
          d.strip.on("click", V("item"), b),
          d.content
            .on("swipe", R)
            .on("click", V("left"), I)
            .on("click", V("right"), _)
            .on("click", V("close"), A)
            .on("click", V("image, caption"), _),
          d.container.on("click", V("view"), A).on("dragstart", V("img"), w),
          d.lightbox.on("keydown", q).on("focusin", L),
          n(r).append(d.lightbox),
          E
        );
      }),
        (E.destroy = function () {
          d && (W(d.html, "noscroll"), d.lightbox.remove(), (d = void 0));
        }),
        (E.show = function (N) {
          if (N !== h) {
            var C = l[N];
            if (!C) return E.hide();
            if (gn(C)) {
              if (N < h) {
                var j = Ya(N - 1, l);
                N = j > -1 ? j : N;
              } else {
                var ce = Ka(N + 1, l);
                N = ce > -1 ? ce : N;
              }
              C = l[N];
            }
            var Ee = h;
            (h = N),
              d.spinner
                .attr("aria-hidden", !1)
                .attr("aria-busy", !0)
                .attr("aria-valuenow", 0)
                .attr("aria-valuetext", "Loading image"),
              p.show();
            var pe = (C.html && Me(C.width, C.height)) || C.url;
            return (
              B(pe, function (Z) {
                if (N !== h) return;
                var ye = ee("figure", "figure").append(F(Z, "image")),
                  ae = ee("frame").append(ye),
                  Oe = ee("view")
                    .prop("tabIndex", 0)
                    .attr("id", "w-lightbox-view")
                    .append(ae),
                  tt,
                  dt;
                C.html &&
                  ((tt = n(C.html)),
                  (dt = tt.is("iframe")),
                  dt && tt.on("load", pt),
                  ye.append(F(tt, "embed"))),
                  C.caption &&
                    ye.append(ee("caption", "figcaption").text(C.caption)),
                  d.spinner.before(Oe),
                  dt || pt();
                function pt() {
                  if (
                    (d.spinner
                      .attr("aria-hidden", !0)
                      .attr("aria-busy", !1)
                      .attr("aria-valuenow", 100)
                      .attr("aria-valuetext", "Loaded image"),
                    p.hide(),
                    N !== h)
                  ) {
                    Oe.remove();
                    return;
                  }
                  let Ae = bx(N, l);
                  z(d.arrowLeft, "inactive", Ae),
                    J(d.arrowLeft, Ae),
                    Ae && d.arrowLeft.is(":focus") && d.arrowRight.focus();
                  let Gt = Ox(N, l);
                  if (
                    (z(d.arrowRight, "inactive", Gt),
                    J(d.arrowRight, Gt),
                    Gt && d.arrowRight.is(":focus") && d.arrowLeft.focus(),
                    d.view
                      ? (a(d.view)
                          .add("opacity .3s")
                          .start({ opacity: 0 })
                          .then(H(d.view)),
                        a(Oe)
                          .add("opacity .3s")
                          .add("transform .3s")
                          .set({ x: N > Ee ? "80px" : "-80px" })
                          .start({ opacity: 1, x: 0 }))
                      : Oe.css("opacity", 1),
                    (d.view = Oe),
                    d.view.prop("tabIndex", 0),
                    d.items)
                  ) {
                    W(d.items, "active"), d.items.removeAttr("aria-selected");
                    var gt = d.items.eq(N);
                    F(gt, "active"), gt.attr("aria-selected", !0), M(gt);
                  }
                }
              }),
              d.close.prop("tabIndex", 0),
              n(":focus").addClass("active-lightbox"),
              g.length === 0 &&
                (n("body")
                  .children()
                  .each(function () {
                    n(this).hasClass("w-lightbox-backdrop") ||
                      n(this).is("script") ||
                      (g.push({
                        node: n(this),
                        hidden: n(this).attr("aria-hidden"),
                        tabIndex: n(this).attr("tabIndex"),
                      }),
                      n(this).attr("aria-hidden", !0).attr("tabIndex", -1));
                  }),
                d.close.focus()),
              E
            );
          }
        }),
        (E.hide = function () {
          return (
            a(d.lightbox).add("opacity .3s").start({ opacity: 0 }).then(G), E
          );
        }),
        (E.prev = function () {
          var N = Ya(h - 1, l);
          N > -1 && E.show(N);
        }),
        (E.next = function () {
          var N = Ka(h + 1, l);
          N > -1 && E.show(N);
        });
      function y(N) {
        return function (C) {
          this === C.target && (C.stopPropagation(), C.preventDefault(), N());
        };
      }
      var I = y(E.prev),
        _ = y(E.next),
        A = y(E.hide),
        b = function (N) {
          var C = n(this).index();
          N.preventDefault(), E.show(C);
        },
        R = function (N, C) {
          N.preventDefault(),
            C.direction === "left"
              ? E.next()
              : C.direction === "right" && E.prev();
        },
        L = function () {
          this.focus();
        };
      function w(N) {
        N.preventDefault();
      }
      function q(N) {
        var C = N.keyCode;
        C === 27 || U(C, "close")
          ? E.hide()
          : C === 37 || U(C, "left")
          ? E.prev()
          : C === 39 || U(C, "right")
          ? E.next()
          : U(C, "item") && n(":focus").click();
      }
      function U(N, C) {
        if (N !== 13 && N !== 32) return !1;
        var j = n(":focus").attr("class"),
          ce = P(C).trim();
        return j.includes(ce);
      }
      function G() {
        d &&
          (d.strip.scrollLeft(0).empty(),
          W(d.html, "noscroll"),
          F(d.lightbox, "hide"),
          d.view && d.view.remove(),
          W(d.content, "group"),
          F(d.arrowLeft, "inactive"),
          F(d.arrowRight, "inactive"),
          (h = d.view = void 0),
          g.forEach(function (N) {
            var C = N.node;
            C &&
              (N.hidden
                ? C.attr("aria-hidden", N.hidden)
                : C.removeAttr("aria-hidden"),
              N.tabIndex
                ? C.attr("tabIndex", N.tabIndex)
                : C.removeAttr("tabIndex"));
          }),
          (g = []),
          n(".active-lightbox").removeClass("active-lightbox").focus());
      }
      function B(N, C) {
        var j = ee("img", "img");
        return (
          j.one("load", function () {
            C(j);
          }),
          j.attr("src", N),
          j
        );
      }
      function H(N) {
        return function () {
          N.remove();
        };
      }
      function M(N) {
        var C = N.get(0),
          j = d.strip.get(0),
          ce = C.offsetLeft,
          Ee = C.clientWidth,
          pe = j.scrollLeft,
          Z = j.clientWidth,
          ye = j.scrollWidth - Z,
          ae;
        ce < pe
          ? (ae = Math.max(0, ce + Ee - Z))
          : ce + Ee > Z + pe && (ae = Math.min(ce, ye)),
          ae != null &&
            a(d.strip).add("scroll-left 500ms").start({ "scroll-left": ae });
      }
      function T(N, C, j) {
        (this.$element = N),
          (this.className = C),
          (this.delay = j || 200),
          this.hide();
      }
      (T.prototype.show = function () {
        var N = this;
        N.timeoutId ||
          (N.timeoutId = setTimeout(function () {
            N.$element.removeClass(N.className), delete N.timeoutId;
          }, N.delay));
      }),
        (T.prototype.hide = function () {
          var N = this;
          if (N.timeoutId) {
            clearTimeout(N.timeoutId), delete N.timeoutId;
            return;
          }
          N.$element.addClass(N.className);
        });
      function P(N, C) {
        return N.replace(u, (C ? " ." : " ") + s);
      }
      function V(N) {
        return P(N, !0);
      }
      function F(N, C) {
        return N.addClass(P(C));
      }
      function W(N, C) {
        return N.removeClass(P(C));
      }
      function z(N, C, j) {
        return N.toggleClass(P(C), j);
      }
      function J(N, C) {
        return N.attr("aria-hidden", C).attr("tabIndex", C ? -1 : 0);
      }
      function ee(N, C) {
        return F(n(t.createElement(C || "div")), N);
      }
      function Me(N, C) {
        var j =
          '<svg xmlns="http://www.w3.org/2000/svg" width="' +
          N +
          '" height="' +
          C +
          '"/>';
        return "data:image/svg+xml;charset=utf-8," + encodeURI(j);
      }
      return (
        (function () {
          var N = e.navigator.userAgent,
            C = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
            j = N.match(C),
            ce = N.indexOf("Android ") > -1 && N.indexOf("Chrome") === -1;
          if (!ce && (!j || j[2] > 7)) return;
          var Ee = t.createElement("style");
          t.head.appendChild(Ee), e.addEventListener("resize", pe, !0);
          function pe() {
            var Z = e.innerHeight,
              ye = e.innerWidth,
              ae =
                ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                Z +
                "px}.w-lightbox-view {width:" +
                ye +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.86 * Z +
                "px}.w-lightbox-image {max-width:" +
                ye +
                "px;max-height:" +
                Z +
                "px}.w-lightbox-group .w-lightbox-image {max-height:" +
                0.86 * Z +
                "px}.w-lightbox-strip {padding: 0 " +
                0.01 * Z +
                "px}.w-lightbox-item {width:" +
                0.1 * Z +
                "px;padding:" +
                0.02 * Z +
                "px " +
                0.01 * Z +
                "px}.w-lightbox-thumbnail {height:" +
                0.1 * Z +
                "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                0.96 * Z +
                "px}.w-lightbox-content {margin-top:" +
                0.02 * Z +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.84 * Z +
                "px}.w-lightbox-image {max-width:" +
                0.96 * ye +
                "px;max-height:" +
                0.96 * Z +
                "px}.w-lightbox-group .w-lightbox-image {max-width:" +
                0.823 * ye +
                "px;max-height:" +
                0.84 * Z +
                "px}}";
            Ee.textContent = ae;
          }
          pe();
        })(),
        E
      );
    }
    za.define(
      "lightbox",
      (th.exports = function (e) {
        var t = {},
          n = za.env(),
          r = Ax(window, document, e, n ? "#lightbox-mountpoint" : "body"),
          a = e(document),
          i,
          o,
          s = ".w-lightbox",
          u;
        t.ready = t.design = t.preview = l;
        function l() {
          (o = n && za.env("design")),
            r.destroy(),
            (u = {}),
            (i = a.find(s)),
            i.webflowLightBox(),
            i.each(function () {
              pn(e(this), "open lightbox"),
                e(this).attr("aria-haspopup", "dialog");
            });
        }
        jQuery.fn.extend({
          webflowLightBox: function () {
            var g = this;
            e.each(g, function (E, y) {
              var I = e.data(y, s);
              I ||
                (I = e.data(y, s, {
                  el: e(y),
                  mode: "images",
                  images: [],
                  embed: "",
                })),
                I.el.off(s),
                h(I),
                o
                  ? I.el.on("setting" + s, h.bind(null, I))
                  : I.el.on("click" + s, d(I)).on("click" + s, function (_) {
                      _.preventDefault();
                    });
            });
          },
        });
        function h(g) {
          var E = g.el.children(".w-json").html(),
            y,
            I;
          if (!E) {
            g.items = [];
            return;
          }
          try {
            E = JSON.parse(E);
          } catch (_) {
            console.error("Malformed lightbox JSON configuration.", _);
          }
          p(E),
            E.items.forEach(function (_) {
              _.$el = g.el;
            }),
            (y = E.group),
            y
              ? ((I = u[y]),
                I || (I = u[y] = []),
                (g.items = I),
                E.items.length &&
                  ((g.index = I.length), I.push.apply(I, E.items)))
              : ((g.items = E.items), (g.index = 0));
        }
        function d(g) {
          return function () {
            g.items.length && r(g.items, g.index || 0);
          };
        }
        function p(g) {
          g.images &&
            (g.images.forEach(function (E) {
              E.type = "image";
            }),
            (g.items = g.images)),
            g.embed && ((g.embed.type = "video"), (g.items = [g.embed])),
            g.groupId && (g.group = g.groupId);
        }
        return t;
      })
    );
  });
  so();
  co();
  fo();
  Eo();
  vo();
  yo();
  mo();
  zE();
  JE();
  nh();
  Webflow.require("ix2").init({
    events: {
      "e-5": {
        id: "e-5",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_START",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-6",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66b5dafd3f326ae9781d336b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66b5dafd3f326ae9781d336b",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1723221802167,
      },
      "e-7": {
        id: "e-7",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-2",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-8",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66b5dafd3f326ae9781d336b|06b20b1b-cbc6-b2d9-0bcc-97c2d17acfa9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66b5dafd3f326ae9781d336b|06b20b1b-cbc6-b2d9-0bcc-97c2d17acfa9",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1723224774966,
      },
      "e-9": {
        id: "e-9",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-3",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-10",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66b5dafd3f326ae9781d336b|eba7df0c-4c27-2696-0057-e8dc5fde027e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66b5dafd3f326ae9781d336b|eba7df0c-4c27-2696-0057-e8dc5fde027e",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1723224979418,
      },
      "e-11": {
        id: "e-11",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-4",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-12",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66b5dafd3f326ae9781d336b|3fcd7c31-9503-6004-3632-cf200543a2bb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66b5dafd3f326ae9781d336b|3fcd7c31-9503-6004-3632-cf200543a2bb",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1723225063804,
      },
      "e-13": {
        id: "e-13",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-5",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-14",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66b5dafd3f326ae9781d336b|bf42450f-49e1-fc87-821d-d68bc9dbcf60",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66b5dafd3f326ae9781d336b|bf42450f-49e1-fc87-821d-d68bc9dbcf60",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1723225301352,
      },
      "e-17": {
        id: "e-17",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-6",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-18",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66b5dafd3f326ae9781d336b|bf42450f-49e1-fc87-821d-d68bc9dbcf60",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66b5dafd3f326ae9781d336b|bf42450f-49e1-fc87-821d-d68bc9dbcf60",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1723283663978,
      },
      "e-19": {
        id: "e-19",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-7",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-20",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66b5dafd3f326ae9781d336b|bf42450f-49e1-fc87-821d-d68bc9dbcf60",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66b5dafd3f326ae9781d336b|bf42450f-49e1-fc87-821d-d68bc9dbcf60",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1723293468379,
      },
      "e-20": {
        id: "e-20",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-8",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-19",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66b5dafd3f326ae9781d336b|bf42450f-49e1-fc87-821d-d68bc9dbcf60",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66b5dafd3f326ae9781d336b|bf42450f-49e1-fc87-821d-d68bc9dbcf60",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1723293468380,
      },
      "e-21": {
        id: "e-21",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-9",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-22",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66b5dafd3f326ae9781d336b|eba7df0c-4c27-2696-0057-e8dc5fde027e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66b5dafd3f326ae9781d336b|eba7df0c-4c27-2696-0057-e8dc5fde027e",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1723295461630,
      },
      "e-22": {
        id: "e-22",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-10",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-21",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66b5dafd3f326ae9781d336b|eba7df0c-4c27-2696-0057-e8dc5fde027e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66b5dafd3f326ae9781d336b|eba7df0c-4c27-2696-0057-e8dc5fde027e",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1723295461630,
      },
      "e-23": {
        id: "e-23",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_MOVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-11", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main"],
        target: {
          id: "66b5dafd3f326ae9781d336b|4eca39e8-3b2e-ebe0-46da-3945aa5660fc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66b5dafd3f326ae9781d336b|4eca39e8-3b2e-ebe0-46da-3945aa5660fc",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-11-p",
            selectedAxis: "X_AXIS",
            basedOn: "ELEMENT",
            reverse: !1,
            smoothing: 80,
            restingState: 50,
          },
          {
            continuousParameterGroupId: "a-11-p-2",
            selectedAxis: "Y_AXIS",
            basedOn: "ELEMENT",
            reverse: !1,
            smoothing: 80,
            restingState: 50,
          },
        ],
        createdOn: 1625926537871,
      },
      "e-24": {
        id: "e-24",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-25",
          },
        },
        mediaQueries: ["main", "medium"],
        target: {
          id: "66b5dafd3f326ae9781d336b|4eca39e8-3b2e-ebe0-46da-3945aa5660fe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            selector: ".collection-item-6",
            originalId:
              "66b5dafd3f326ae9781d336b|4eca39e8-3b2e-ebe0-46da-3945aa5660fe",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: 0,
          direction: null,
          effectIn: !1,
        },
        createdOn: 1625929121895,
      },
      "e-25": {
        id: "e-25",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-13",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-24",
          },
        },
        mediaQueries: ["main", "medium"],
        target: {
          id: "66b5dafd3f326ae9781d336b|4eca39e8-3b2e-ebe0-46da-3945aa5660fe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            selector: ".collection-item-6",
            originalId:
              "66b5dafd3f326ae9781d336b|4eca39e8-3b2e-ebe0-46da-3945aa5660fe",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: 0,
          direction: null,
          effectIn: !0,
        },
        createdOn: 1625929121898,
      },
      "e-26": {
        id: "e-26",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-14",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-27",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66b5dafd3f326ae9781d336b|4eca39e8-3b2e-ebe0-46da-3945aa5660fe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66b5dafd3f326ae9781d336b|4eca39e8-3b2e-ebe0-46da-3945aa5660fe",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: 0,
          direction: null,
          effectIn: !1,
        },
        createdOn: 1626004463599,
      },
      "e-28": {
        id: "e-28",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-15",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-29",
          },
        },
        mediaQueries: ["main", "medium", "small"],
        target: {
          id: "66b5dafd3f326ae9781d336b|3fcd7c31-9503-6004-3632-cf200543a2bb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66b5dafd3f326ae9781d336b|3fcd7c31-9503-6004-3632-cf200543a2bb",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1723296730293,
      },
      "e-29": {
        id: "e-29",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-16",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-28",
          },
        },
        mediaQueries: ["main", "medium", "small"],
        target: {
          id: "66b5dafd3f326ae9781d336b|3fcd7c31-9503-6004-3632-cf200543a2bb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66b5dafd3f326ae9781d336b|3fcd7c31-9503-6004-3632-cf200543a2bb",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1723296730294,
      },
      "e-30": {
        id: "e-30",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-17",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-31",
          },
        },
        mediaQueries: ["tiny"],
        target: {
          id: "66b5dafd3f326ae9781d336b|3fcd7c31-9503-6004-3632-cf200543a2bb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66b5dafd3f326ae9781d336b|3fcd7c31-9503-6004-3632-cf200543a2bb",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1723297860032,
      },
      "e-31": {
        id: "e-31",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-18",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-30",
          },
        },
        mediaQueries: ["tiny"],
        target: {
          id: "66b5dafd3f326ae9781d336b|3fcd7c31-9503-6004-3632-cf200543a2bb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66b5dafd3f326ae9781d336b|3fcd7c31-9503-6004-3632-cf200543a2bb",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1723297860032,
      },
      "e-32": {
        id: "e-32",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-19",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-33",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66b76a1fe63e989b8de0844e|9dbe1915-921e-1d09-902e-90f7ef176fb8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66b76a1fe63e989b8de0844e|9dbe1915-921e-1d09-902e-90f7ef176fb8",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1626005763964,
      },
      "e-36": {
        id: "e-36",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_START",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-21",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-37",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66b781a91e3179991502a356",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66b781a91e3179991502a356",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1723303358647,
      },
      "e-38": {
        id: "e-38",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-39",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66b5dafd3f326ae9781d336b|3e3ed1bd-95f7-379c-28cf-89f2ce8e47b5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66b5dafd3f326ae9781d336b|3e3ed1bd-95f7-379c-28cf-89f2ce8e47b5",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1624538026162,
      },
      "e-39": {
        id: "e-39",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-23",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-38",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66b5dafd3f326ae9781d336b|3e3ed1bd-95f7-379c-28cf-89f2ce8e47b5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66b5dafd3f326ae9781d336b|3e3ed1bd-95f7-379c-28cf-89f2ce8e47b5",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1624538026162,
      },
      "e-40": {
        id: "e-40",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-41",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66b5dafd3f326ae9781d336b|a6718cd1-2542-0edf-9766-1ca6371670b3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66b5dafd3f326ae9781d336b|a6718cd1-2542-0edf-9766-1ca6371670b3",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1724592147828,
      },
      "e-41": {
        id: "e-41",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-23",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-40",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66b5dafd3f326ae9781d336b|a6718cd1-2542-0edf-9766-1ca6371670b3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66b5dafd3f326ae9781d336b|a6718cd1-2542-0edf-9766-1ca6371670b3",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1724592147828,
      },
    },
    actionLists: {
      a: {
        id: "a",
        title: "Scrolling Marquee",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "66b5dafd3f326ae9781d336b|c067daba-a113-7ad8-c2e9-321fcd4f1359",
                  },
                  xValue: 100,
                  xUnit: "vw",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 5e4,
                  target: {
                    id: "66b5dafd3f326ae9781d336b|c067daba-a113-7ad8-c2e9-321fcd4f1359",
                  },
                  xValue: -117,
                  xUnit: "vw",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    id: "66b5dafd3f326ae9781d336b|c067daba-a113-7ad8-c2e9-321fcd4f1359",
                  },
                  xValue: 100,
                  xUnit: "vw",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1723221306595,
      },
      "a-2": {
        id: "a-2",
        title: "Opacity-1",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-2-n",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "66b5dafd3f326ae9781d336b|06b20b1b-cbc6-b2d9-0bcc-97c2d17acfa9",
                  },
                  globalSwatchId: "",
                  rValue: 114,
                  bValue: 211,
                  gValue: 201,
                  aValue: 0.6,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-2-n-2",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 2e3,
                  target: {
                    useEventTarget: !0,
                    id: "66b5dafd3f326ae9781d336b|06b20b1b-cbc6-b2d9-0bcc-97c2d17acfa9",
                  },
                  globalSwatchId: "",
                  rValue: 114,
                  bValue: 211,
                  gValue: 201,
                  aValue: 1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1723224784282,
      },
      "a-3": {
        id: "a-3",
        title: "Opacity-2",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-3-n",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "66b5dafd3f326ae9781d336b|06b20b1b-cbc6-b2d9-0bcc-97c2d17acfa9",
                  },
                  globalSwatchId: "",
                  rValue: 254,
                  bValue: 2,
                  gValue: 190,
                  aValue: 0.6,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-3-n-2",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 2e3,
                  target: {
                    useEventTarget: !0,
                    id: "66b5dafd3f326ae9781d336b|06b20b1b-cbc6-b2d9-0bcc-97c2d17acfa9",
                  },
                  globalSwatchId: "",
                  rValue: 254,
                  bValue: 2,
                  gValue: 190,
                  aValue: 1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1723224784282,
      },
      "a-4": {
        id: "a-4",
        title: "Opacity-3",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-4-n",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "66b5dafd3f326ae9781d336b|06b20b1b-cbc6-b2d9-0bcc-97c2d17acfa9",
                  },
                  globalSwatchId: "",
                  rValue: 39,
                  bValue: 99,
                  gValue: 171,
                  aValue: 0.6,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-4-n-2",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 2e3,
                  target: {
                    useEventTarget: !0,
                    id: "66b5dafd3f326ae9781d336b|06b20b1b-cbc6-b2d9-0bcc-97c2d17acfa9",
                  },
                  globalSwatchId: "",
                  rValue: 39,
                  bValue: 99,
                  gValue: 171,
                  aValue: 1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1723224784282,
      },
      "a-5": {
        id: "a-5",
        title: "Opacity-4",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-5-n",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "66b5dafd3f326ae9781d336b|06b20b1b-cbc6-b2d9-0bcc-97c2d17acfa9",
                  },
                  globalSwatchId: "",
                  rValue: 255,
                  bValue: 121,
                  gValue: 119,
                  aValue: 0.6,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-5-n-2",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 2e3,
                  target: {
                    useEventTarget: !0,
                    id: "66b5dafd3f326ae9781d336b|06b20b1b-cbc6-b2d9-0bcc-97c2d17acfa9",
                  },
                  globalSwatchId: "",
                  rValue: 255,
                  bValue: 121,
                  gValue: 119,
                  aValue: 1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1723224784282,
      },
      "a-6": {
        id: "a-6",
        title: "elements-moving",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-6-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "66b5dafd3f326ae9781d336b|b165ae32-cc40-4e88-b23d-54d40f16ed13",
                  },
                  xValue: -65,
                  yValue: 0,
                  xUnit: "px",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-6-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "66b5dafd3f326ae9781d336b|ac41b237-0da5-9bfe-a9a2-907336b5783f",
                  },
                  xValue: 0,
                  yValue: -15,
                  xUnit: "px",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-6-n-5",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "66b5dafd3f326ae9781d336b|5892fe33-ee75-1022-fe24-08457d912ec3",
                  },
                  xValue: 0,
                  yValue: 0,
                  zValue: 1,
                  locked: !0,
                },
              },
              {
                id: "a-6-n-7",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "66b5dafd3f326ae9781d336b|a32cf147-1f33-8cc4-c01a-cdfe818f37a0",
                  },
                  yValue: -156,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-6-n-9",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "66b5dafd3f326ae9781d336b|121478a4-e471-e16d-00cb-626f53c0e4c7",
                  },
                  yValue: -164,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-6-n-11",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "66b5dafd3f326ae9781d336b|ec7859e6-2741-284a-2883-c3eec28f2f06",
                  },
                  yValue: -25,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-6-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "easeOut",
                  duration: 2e3,
                  target: {
                    id: "66b5dafd3f326ae9781d336b|b165ae32-cc40-4e88-b23d-54d40f16ed13",
                  },
                  xValue: 0,
                  yValue: 0,
                  xUnit: "px",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-6-n-4",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "66b5dafd3f326ae9781d336b|ac41b237-0da5-9bfe-a9a2-907336b5783f",
                  },
                  xValue: 0,
                  yValue: 9,
                  xUnit: "px",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-6-n-6",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "66b5dafd3f326ae9781d336b|5892fe33-ee75-1022-fe24-08457d912ec3",
                  },
                  xValue: 1.2,
                  yValue: 1.2,
                  locked: !0,
                },
              },
              {
                id: "a-6-n-8",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "66b5dafd3f326ae9781d336b|a32cf147-1f33-8cc4-c01a-cdfe818f37a0",
                  },
                  xValue: 0,
                  yValue: 11,
                  xUnit: "px",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-6-n-10",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "66b5dafd3f326ae9781d336b|121478a4-e471-e16d-00cb-626f53c0e4c7",
                  },
                  yValue: 11,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-6-n-12",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "66b5dafd3f326ae9781d336b|ec7859e6-2741-284a-2883-c3eec28f2f06",
                  },
                  yValue: 16,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1723282517263,
      },
      "a-7": {
        id: "a-7",
        title: "Contact Form - Open",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-7-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".section---contact-form",
                    selectorGuids: ["82b0a15e-d505-dcea-c74e-d580f2fb3ec7"],
                  },
                  widthValue: 100,
                  heightValue: 0,
                  widthUnit: "%",
                  heightUnit: "px",
                  locked: !1,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-7-n-2",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".section---contact-form",
                    selectorGuids: ["82b0a15e-d505-dcea-c74e-d580f2fb3ec7"],
                  },
                  widthValue: 100,
                  widthUnit: "%",
                  heightUnit: "AUTO",
                  locked: !1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1723293476331,
      },
      "a-8": {
        id: "a-8",
        title: "Contact Form - Close",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-8-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".section---contact-form",
                    selectorGuids: ["82b0a15e-d505-dcea-c74e-d580f2fb3ec7"],
                  },
                  widthValue: 100,
                  widthUnit: "%",
                  heightUnit: "AUTO",
                  locked: !1,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-8-n-2",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".section---contact-form",
                    selectorGuids: ["82b0a15e-d505-dcea-c74e-d580f2fb3ec7"],
                  },
                  widthValue: 100,
                  heightValue: 0,
                  widthUnit: "%",
                  heightUnit: "px",
                  locked: !1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1723293885596,
      },
      "a-9": {
        id: "a-9",
        title: "Resume Form - Open",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-9-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".section---resume-form",
                    selectorGuids: ["3509dce7-c7a8-4bf5-d046-f09104016238"],
                  },
                  widthValue: 100,
                  heightValue: 0,
                  widthUnit: "%",
                  heightUnit: "px",
                  locked: !1,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-9-n-2",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".section---resume-form",
                    selectorGuids: ["3509dce7-c7a8-4bf5-d046-f09104016238"],
                  },
                  widthValue: 100,
                  widthUnit: "%",
                  heightUnit: "AUTO",
                  locked: !1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1723295467361,
      },
      "a-10": {
        id: "a-10",
        title: "Resume Form - Close",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-10-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".section---resume-form",
                    selectorGuids: ["3509dce7-c7a8-4bf5-d046-f09104016238"],
                  },
                  widthValue: 100,
                  widthUnit: "%",
                  heightUnit: "AUTO",
                  locked: !1,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-10-n-2",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".section---resume-form",
                    selectorGuids: ["3509dce7-c7a8-4bf5-d046-f09104016238"],
                  },
                  widthValue: 100,
                  heightValue: 0,
                  widthUnit: "%",
                  heightUnit: "px",
                  locked: !1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1723295574039,
      },
      "a-11": {
        id: "a-11",
        title: "New Mouse Animation",
        continuousParameterGroups: [
          {
            id: "a-11-p",
            type: "MOUSE_X",
            parameterLabel: "Mouse X",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-11-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "66b5dafd3f326ae9781d336b|4eca39e8-3b2e-ebe0-46da-3945aa5660fc",
                      },
                      xValue: 70,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-11-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: 20,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-11-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "66b5dafd3f326ae9781d336b|4eca39e8-3b2e-ebe0-46da-3945aa5660fc",
                      },
                      xValue: -70,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-11-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: -20,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
          },
          {
            id: "a-11-p-2",
            type: "MOUSE_Y",
            parameterLabel: "Mouse Y",
            continuousActionGroups: [],
          },
        ],
        createdOn: 1625926547391,
      },
      "a-12": {
        id: "a-12",
        title: "Work Item - Hover In",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-12-n",
                actionTypeId: "STYLE_FILTER",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {},
                  filters: [
                    { type: "invert", filterId: "f42a", value: 100, unit: "%" },
                  ],
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1625928261139,
      },
      "a-13": {
        id: "a-13",
        title: "Work Item - Hover Out",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-13-n",
                actionTypeId: "STYLE_FILTER",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {},
                  filters: [
                    { type: "invert", filterId: "cdb7", value: 0, unit: "%" },
                  ],
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1625928261139,
      },
      "a-14": {
        id: "a-14",
        title: "Page Out - Home",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-14-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "PARENT",
                    id: "66b646e0e83131456cb95595|b809cffa-e851-d967-d9a9-68726c884548",
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-14-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "PARENT",
                    id: "66b646e0e83131456cb95595|b809cffa-e851-d967-d9a9-68726c884548",
                  },
                  xValue: 0,
                  xUnit: "vw",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                id: "a-14-n-3",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "PARENT",
                    id: "66b646e0e83131456cb95595|5537c1676569780a0f44f8dc",
                  },
                  globalSwatchId: "c3ed0a0d",
                  rValue: 248,
                  bValue: 116,
                  gValue: 203,
                  aValue: 1,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-14-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "PARENT",
                    id: "66b646e0e83131456cb95595|b809cffa-e851-d967-d9a9-68726c884548",
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-14-n-5",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "PARENT",
                    id: "66b646e0e83131456cb95595|5537c1676569780a0f44f8dc",
                  },
                  globalSwatchId: "",
                  rValue: 255,
                  bValue: 255,
                  gValue: 255,
                  aValue: 1,
                },
              },
              {
                id: "a-14-n-6",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "PARENT",
                    id: "66b646e0e83131456cb95595|b809cffa-e851-d967-d9a9-68726c884548",
                  },
                  xValue: -5,
                  xUnit: "vw",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1626004489474,
      },
      "a-15": {
        id: "a-15",
        title: "Work Page Appear",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-15-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "SIBLINGS",
                    id: "66b5dafd3f326ae9781d336b|4eca39e8-3b2e-ebe0-46da-3945aa5660fb",
                  },
                  widthValue: 100,
                  heightValue: 0,
                  widthUnit: "vw",
                  heightUnit: "vh",
                  locked: !1,
                },
              },
              {
                id: "a-15-n-5",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".collection-item-6",
                    selectorGuids: ["39e079ed-749e-0059-59fe-753f6f5c58ca"],
                  },
                  widthValue: 0,
                  widthUnit: "vw",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
              {
                id: "a-15-n-2",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "SIBLINGS",
                    id: "66b5dafd3f326ae9781d336b|4eca39e8-3b2e-ebe0-46da-3945aa5660fb",
                  },
                  value: "none",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-15-n-3",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "SIBLINGS",
                    id: "66b5dafd3f326ae9781d336b|4eca39e8-3b2e-ebe0-46da-3945aa5660fb",
                  },
                  value: "flex",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-15-n-4",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 100,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "SIBLINGS",
                    id: "66b5dafd3f326ae9781d336b|4eca39e8-3b2e-ebe0-46da-3945aa5660fb",
                  },
                  widthValue: 100,
                  heightValue: 100,
                  widthUnit: "vw",
                  heightUnit: "vh",
                  locked: !1,
                },
              },
              {
                id: "a-15-n-6",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 100,
                  easing: "",
                  duration: 800,
                  target: {
                    selector: ".collection-item-6",
                    selectorGuids: ["39e079ed-749e-0059-59fe-753f6f5c58ca"],
                  },
                  widthValue: 15,
                  widthUnit: "vw",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1723296737809,
      },
      "a-16": {
        id: "a-16",
        title: "Work Page Disappear",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-16-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".collection-item-6",
                    selectorGuids: ["39e079ed-749e-0059-59fe-753f6f5c58ca"],
                  },
                  widthValue: 0,
                  widthUnit: "vw",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
              {
                id: "a-16-n-2",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 800,
                  target: {
                    useEventTarget: "SIBLINGS",
                    id: "66b5dafd3f326ae9781d336b|4eca39e8-3b2e-ebe0-46da-3945aa5660fb",
                  },
                  widthValue: 100,
                  heightValue: 0,
                  widthUnit: "vw",
                  heightUnit: "vh",
                  locked: !1,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-16-n-3",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "SIBLINGS",
                    id: "66b5dafd3f326ae9781d336b|4eca39e8-3b2e-ebe0-46da-3945aa5660fb",
                  },
                  value: "none",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1723297538270,
      },
      "a-17": {
        id: "a-17",
        title: "Work Page Appear - Mobile",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-17-n",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "SIBLINGS",
                    id: "66b5dafd3f326ae9781d336b|4eca39e8-3b2e-ebe0-46da-3945aa5660fb",
                  },
                  value: "none",
                },
              },
              {
                id: "a-17-n-2",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "SIBLINGS",
                    id: "66b5dafd3f326ae9781d336b|4eca39e8-3b2e-ebe0-46da-3945aa5660fb",
                  },
                  widthValue: 100,
                  heightValue: 0,
                  widthUnit: "vw",
                  heightUnit: "vh",
                  locked: !1,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-17-n-3",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "SIBLINGS",
                    id: "66b5dafd3f326ae9781d336b|4eca39e8-3b2e-ebe0-46da-3945aa5660fb",
                  },
                  value: "block",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-17-n-4",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 1e3,
                  target: {
                    useEventTarget: "SIBLINGS",
                    id: "66b5dafd3f326ae9781d336b|4eca39e8-3b2e-ebe0-46da-3945aa5660fb",
                  },
                  widthValue: 100,
                  widthUnit: "vw",
                  heightUnit: "AUTO",
                  locked: !1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1723297862626,
      },
      "a-18": {
        id: "a-18",
        title: "Work Page Disappear - Mobile",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-18-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "SIBLINGS",
                    id: "66b5dafd3f326ae9781d336b|4eca39e8-3b2e-ebe0-46da-3945aa5660fb",
                  },
                  widthValue: 100,
                  heightValue: 0,
                  widthUnit: "vw",
                  heightUnit: "vh",
                  locked: !1,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-18-n-2",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "SIBLINGS",
                    id: "66b5dafd3f326ae9781d336b|4eca39e8-3b2e-ebe0-46da-3945aa5660fb",
                  },
                  value: "none",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1723298007062,
      },
      "a-19": {
        id: "a-19",
        title: "Page In 2",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-19-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "66b76a1fe63e989b8de0844e|9dbe1915-921e-1d09-902e-90f7ef176fb7",
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-19-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "PARENT",
                    id: "66b646e0e83131456cb95599|14466507-69c5-07be-0aad-7f27685a6420",
                  },
                  xValue: 0,
                  xUnit: "vw",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                id: "a-19-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "PARENT",
                    id: "66b646e0e83131456cb95599|14466507-69c5-07be-0aad-7f27685a6420",
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-19-n-4",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "66b76a1fe63e989b8de0844e|9dbe1915-921e-1d09-902e-90f7ef176fb7",
                  },
                  xValue: 0,
                  xUnit: "vw",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-19-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 200,
                  target: {
                    id: "66b76a1fe63e989b8de0844e|9dbe1915-921e-1d09-902e-90f7ef176fb7",
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-19-n-6",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 200,
                  target: {
                    id: "66b76a1fe63e989b8de0844e|9dbe1915-921e-1d09-902e-90f7ef176fb7",
                  },
                  xValue: -5,
                  xUnit: "vw",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                id: "a-19-n-7",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 200,
                  target: {
                    useEventTarget: "PARENT",
                    id: "66b646e0e83131456cb95599|14466507-69c5-07be-0aad-7f27685a6420",
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-19-n-8",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 200,
                  target: {
                    useEventTarget: "PARENT",
                    id: "66b646e0e83131456cb95599|14466507-69c5-07be-0aad-7f27685a6420",
                  },
                  xValue: -5,
                  xUnit: "vw",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1626005028593,
      },
      "a-21": {
        id: "a-21",
        title: "my-face-spin",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-21-n",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "66b781a91e3179991502a356|8c4a70e4-cec3-1de1-4fa6-0db6aa8533e3",
                  },
                  yValue: 0,
                  xUnit: "DEG",
                  yUnit: "deg",
                  zUnit: "DEG",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-21-n-2",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "66b781a91e3179991502a356|8c4a70e4-cec3-1de1-4fa6-0db6aa8533e3",
                  },
                  yValue: -180,
                  xUnit: "DEG",
                  yUnit: "deg",
                  zUnit: "DEG",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-21-n-3",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 1e3,
                  target: {
                    id: "66b781a91e3179991502a356|8c4a70e4-cec3-1de1-4fa6-0db6aa8533e3",
                  },
                  yValue: 0,
                  xUnit: "DEG",
                  yUnit: "deg",
                  zUnit: "DEG",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1723303362866,
      },
      "a-22": {
        id: "a-22",
        title: "Social Label Show",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-22-n",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {},
                  value: "none",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-22-n-2",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {},
                  value: "block",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1624536445513,
      },
      "a-23": {
        id: "a-23",
        title: "Social Label Show 2",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-23-n",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {},
                  value: "block",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-23-n-2",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {},
                  value: "none",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1624536445513,
      },
    },
    site: {
      mediaQueries: [
        { key: "main", min: 992, max: 1e4 },
        { key: "medium", min: 768, max: 991 },
        { key: "small", min: 480, max: 767 },
        { key: "tiny", min: 0, max: 479 },
      ],
    },
  });
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
