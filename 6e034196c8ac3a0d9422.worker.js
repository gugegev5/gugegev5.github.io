!(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 16));
    // console.log(n.s, n(n.s));
})([
  function (t, e) {
    t.exports = function () {
      throw new Error("define cannot be used indirect");
    };
  },
  function (t, e, n) {
    (function (r) {
      var o; /** @license MIT License (c) copyright 2010-2014 original author or authors */
      !(function (i) {
        "use strict";
        void 0 ===
          (o = function (t) {
            var e,
              o = "undefined" != typeof setTimeout && setTimeout,
              i = function (t, e) {
                return setTimeout(t, e);
              },
              s = function (t) {
                return clearTimeout(t);
              },
              u = function (t) {
                return o(t, 0);
              };
            if (
              void 0 !== r &&
              "[object process]" === Object.prototype.toString.call(r)
            )
              u = function (t) {
                return r.nextTick(t);
              };
            else if (
              (e =
                ("undefined" != typeof MutationObserver && MutationObserver) ||
                ("undefined" != typeof WebKitMutationObserver &&
                  WebKitMutationObserver))
            )
              u = (function (t) {
                var e,
                  n = document.createTextNode("");
                new t(function () {
                  var t = e;
                  (e = void 0), t();
                }).observe(n, { characterData: !0 });
                var r = 0;
                return function (t) {
                  (e = t), (n.data = r ^= 1);
                };
              })(e);
            else if (!o) {
              var a = n(22);
              (i = function (t, e) {
                return a.setTimer(e, t);
              }),
                (s = a.cancelTimer),
                (u = a.runOnLoop || a.runOnContext);
            }
            return { setTimer: i, clearTimer: s, asap: u };
          }.call(e, n, e, t)) || (t.exports = o);
      })(n(0));
    }.call(this, n(2)));
  },
  function (t, e) {
    var n,
      r,
      o = (t.exports = {});
    function i() {
      throw new Error("setTimeout has not been defined");
    }
    function s() {
      throw new Error("clearTimeout has not been defined");
    }
    function u(t) {
      if (n === setTimeout) return setTimeout(t, 0);
      if ((n === i || !n) && setTimeout)
        return (n = setTimeout), setTimeout(t, 0);
      try {
        return n(t, 0);
      } catch (e) {
        try {
          return n.call(null, t, 0);
        } catch (e) {
          return n.call(this, t, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : i;
      } catch (t) {
        n = i;
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : s;
      } catch (t) {
        r = s;
      }
    })();
    var a,
      c = [],
      l = !1,
      f = -1;
    function h() {
      l &&
        a &&
        ((l = !1), a.length ? (c = a.concat(c)) : (f = -1), c.length && d());
    }
    function d() {
      if (!l) {
        var t = u(h);
        l = !0;
        for (var e = c.length; e; ) {
          for (a = c, c = []; ++f < e; ) a && a[f].run();
          (f = -1), (e = c.length);
        }
        (a = null),
          (l = !1),
          (function (t) {
            if (r === clearTimeout) return clearTimeout(t);
            if ((r === s || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(t);
            try {
              r(t);
            } catch (e) {
              try {
                return r.call(null, t);
              } catch (e) {
                return r.call(this, t);
              }
            }
          })(t);
      }
    }
    function p(t, e) {
      (this.fun = t), (this.array = e);
    }
    function v() {}
    (o.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      c.push(new p(t, e)), 1 !== c.length || l || u(d);
    }),
      (p.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (o.title = "browser"),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ""),
      (o.versions = {}),
      (o.on = v),
      (o.addListener = v),
      (o.once = v),
      (o.off = v),
      (o.removeListener = v),
      (o.removeAllListeners = v),
      (o.emit = v),
      (o.prependListener = v),
      (o.prependOnceListener = v),
      (o.listeners = function (t) {
        return [];
      }),
      (o.binding = function (t) {
        throw new Error("process.binding is not supported");
      }),
      (o.cwd = function () {
        return "/";
      }),
      (o.chdir = function (t) {
        throw new Error("process.chdir is not supported");
      }),
      (o.umask = function () {
        return 0;
      });
  },
  function (t, e, n) {
    var r; /** @license MIT License (c) copyright 2010-2014 original author or authors */ /** @license MIT License (c) copyright 2010-2014 original author or authors */
    !(function (o) {
      "use strict";
      void 0 ===
        (r = function () {
          function t(e) {
            Error.call(this),
              (this.message = e),
              (this.name = t.name),
              "function" == typeof Error.captureStackTrace &&
                Error.captureStackTrace(this, t);
          }
          return (
            (t.prototype = Object.create(Error.prototype)),
            (t.prototype.constructor = t),
            t
          );
        }.call(e, n, e, t)) || (t.exports = r);
    })(n(0));
  },
  function (t, e, n) {
    var r; /** @license MIT License (c) copyright 2010-2014 original author or authors */ /** @license MIT License (c) copyright 2010-2014 original author or authors */
    !(function (o) {
      "use strict";
      void 0 ===
        (r = function () {
          return {
            pending: t,
            fulfilled: n,
            rejected: e,
            inspect: function (t) {
              var r = t.state();
              return 0 === r
                ? { state: "pending" }
                : r > 0
                ? n(t.value)
                : e(t.value);
            },
          };
          function t() {
            return { state: "pending" };
          }
          function e(t) {
            return { state: "rejected", reason: t };
          }
          function n(t) {
            return { state: "fulfilled", value: t };
          }
        }.call(e, n, e, t)) || (t.exports = r);
    })(n(0));
  },
  function (t, e, n) {
    var r; /** @license MIT License (c) copyright 2010-2014 original author or authors */ /** @license MIT License (c) copyright 2010-2014 original author or authors */
    !(function (o) {
      "use strict";
      void 0 ===
        (r = function () {
          return (t.tryCatchResolve = e), t;
          function t(t, n) {
            return (
              arguments.length < 2 && (n = e),
              function (e, o, i) {
                var s = t._defer(),
                  u = i.length,
                  a = new Array(u);
                return (
                  r(
                    { f: e, thisArg: o, args: i, params: a, i: u - 1, call: n },
                    s._handler
                  ),
                  s
                );
              }
            );
            function r(e, r) {
              if (e.i < 0) return n(e.f, e.thisArg, e.params, r);
              t._handler(e.args[e.i]).fold(o, e, void 0, r);
            }
            function o(t, e, n) {
              (t.params[t.i] = e), (t.i -= 1), r(t, n);
            }
          }
          function e(t, e, n, r) {
            try {
              r.resolve(t.apply(e, n));
            } catch (t) {
              r.reject(t);
            }
          }
        }.call(e, n, e, t)) || (t.exports = r);
    })(n(0));
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ERROR = e.WARN = e.INFO = e.LOG = void 0),
      (e.getLogger = function (t, e) {
        for (
          var n =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            a = 0,
            c = o.length;
          a < c;
          a++
        ) {
          var l = o[a];
          if (l.key === t && l.color === e) return l.log;
        }
        return (function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "Global",
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : u,
            n =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            a = {
              enabled: !!n,
              key: t,
              color: e,
              log: function () {
                var o = [];
                r.default
                  ? (o.push("%cWorker%c %c" + t), o.push(s, " "))
                  : o.push("%c" + t),
                  o.push(i(e)),
                  o.push.apply(o, arguments),
                  n && console.log.apply(console, o);
              },
            };
          return o.push(a), a.log;
        })(t, e, n);
      });
    var r = (function (t) {
      return t && t.__esModule ? t : { default: t };
    })(n(7));
    var o = [],
      i = function (t) {
        return (
          "background: " +
          t +
          "; color: #FFFFFF; padding: 3px 5px; font-weight: bold;"
        );
      },
      s =
        "background: #cc00c5; color: #FFFFFF; padding: 3px 5px; font-weight: bold;";
    var u = (e.LOG = "#000000");
    (e.INFO = "#007bff"), (e.WARN = "#ffc107"), (e.ERROR = "#dc3545");
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = "function" == typeof importScripts),
      (t.exports = e.default);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = (function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    })();
    function o(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    var i = (function () {
      function t(e, n, r) {
        void 0 === n && (n = !1),
          o(this, t),
          (this._fn = e),
          (this._once = n),
          (this._thisArg = r),
          (this._next = this._prev = this._owner = null);
      }
      return (
        r(t, [
          {
            key: "detach",
            value: function () {
              return null !== this._owner && (this._owner.detach(this), !0);
            },
          },
        ]),
        t
      );
    })();
    function s(t, e) {
      return (
        t._head
          ? ((t._tail._next = e), (e._prev = t._tail), (t._tail = e))
          : ((t._head = e), (t._tail = e)),
        (e._owner = t),
        e
      );
    }
    var u = (function () {
      function t() {
        o(this, t), (this._head = this._tail = void 0);
      }
      return (
        r(t, [
          {
            key: "handlers",
            value: function () {
              var t =
                  !(arguments.length <= 0 || void 0 === arguments[0]) &&
                  arguments[0],
                e = this._head;
              if (t) return !!e;
              for (var n = []; e; ) n.push(e), (e = e._next);
              return n;
            },
          },
          {
            key: "has",
            value: function (t) {
              if (!(t instanceof i))
                throw new Error(
                  "MiniSignal#has(): First arg must be a MiniSignalBinding object."
                );
              return t._owner === this;
            },
          },
          {
            key: "dispatch",
            value: function () {
              var t = this._head;
              if (!t) return !1;
              for (; t; )
                t._once && this.detach(t),
                  t._fn.apply(t._thisArg, arguments),
                  (t = t._next);
              return !0;
            },
          },
          {
            key: "add",
            value: function (t) {
              var e =
                arguments.length <= 1 || void 0 === arguments[1]
                  ? null
                  : arguments[1];
              if ("function" != typeof t)
                throw new Error(
                  "MiniSignal#add(): First arg must be a Function."
                );
              return s(this, new i(t, !1, e));
            },
          },
          {
            key: "once",
            value: function (t) {
              var e =
                arguments.length <= 1 || void 0 === arguments[1]
                  ? null
                  : arguments[1];
              if ("function" != typeof t)
                throw new Error(
                  "MiniSignal#once(): First arg must be a Function."
                );
              return s(this, new i(t, !0, e));
            },
          },
          {
            key: "detach",
            value: function (t) {
              if (!(t instanceof i))
                throw new Error(
                  "MiniSignal#detach(): First arg must be a MiniSignalBinding object."
                );
              return t._owner !== this
                ? this
                : (t._prev && (t._prev._next = t._next),
                  t._next && (t._next._prev = t._prev),
                  t === this._head
                    ? ((this._head = t._next),
                      null === t._next && (this._tail = null))
                    : t === this._tail &&
                      ((this._tail = t._prev), (this._tail._next = null)),
                  (t._owner = null),
                  this);
            },
          },
          {
            key: "detachAll",
            value: function () {
              var t = this._head;
              if (!t) return this;
              for (this._head = this._tail = null; t; )
                (t._owner = null), (t = t._next);
              return this;
            },
          },
        ]),
        t
      );
    })();
    (u.MiniSignalBinding = i), (e.default = u), (t.exports = e.default);
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t, e) {
      e = e || {};
      for (
        var n = {
            key: [
              "source",
              "protocol",
              "authority",
              "userInfo",
              "user",
              "password",
              "host",
              "port",
              "relative",
              "path",
              "directory",
              "file",
              "query",
              "anchor",
            ],
            q: { name: "queryKey", parser: /(?:^|&)([^&=]*)=?([^&]*)/g },
            parser: {
              strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
              loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
            },
          },
          r = n.parser[e.strictMode ? "strict" : "loose"].exec(t),
          o = {},
          i = 14;
        i--;

      )
        o[n.key[i]] = r[i] || "";
      return (
        (o[n.q.name] = {}),
        o[n.key[12]].replace(n.q.parser, function (t, e, r) {
          e && (o[n.q.name][e] = r);
        }),
        o
      );
    };
  },
  function (t, e, n) {
    "use strict";
    function r() {}
    function o(t) {
      return function () {
        if (null === t) throw new Error("Callback was already called.");
        var e = t;
        (t = null), e.apply(this, arguments);
      };
    }
    (e.__esModule = !0),
      (e.eachSeries = function (t, e, n, r) {
        var o = 0,
          i = t.length;
        !(function s(u) {
          u || o === i
            ? n && n(u)
            : r
            ? setTimeout(function () {
                e(t[o++], s);
              }, 1)
            : e(t[o++], s);
        })();
      }),
      (e.queue = function (t, e) {
        if (null == e) e = 1;
        else if (0 === e) throw new Error("Concurrency must not be zero");
        var n = 0,
          i = {
            _tasks: [],
            concurrency: e,
            saturated: r,
            unsaturated: r,
            buffer: e / 4,
            empty: r,
            drain: r,
            error: r,
            started: !1,
            paused: !1,
            push: function (t, e) {
              s(t, !1, e);
            },
            kill: function () {
              (n = 0), (i.drain = r), (i.started = !1), (i._tasks = []);
            },
            unshift: function (t, e) {
              s(t, !0, e);
            },
            process: function () {
              for (; !i.paused && n < i.concurrency && i._tasks.length; ) {
                var e = i._tasks.shift();
                0 === i._tasks.length && i.empty(),
                  (n += 1) === i.concurrency && i.saturated(),
                  t(e.data, o(u(e)));
              }
            },
            length: function () {
              return i._tasks.length;
            },
            running: function () {
              return n;
            },
            idle: function () {
              return i._tasks.length + n === 0;
            },
            pause: function () {
              !0 !== i.paused && (i.paused = !0);
            },
            resume: function () {
              if (!1 !== i.paused) {
                i.paused = !1;
                for (var t = 1; t <= i.concurrency; t++) i.process();
              }
            },
          };
        function s(t, e, n) {
          if (null != n && "function" != typeof n)
            throw new Error("task callback must be a function");
          if (((i.started = !0), null == t && i.idle()))
            setTimeout(function () {
              return i.drain();
            }, 1);
          else {
            var o = { data: t, callback: "function" == typeof n ? n : r };
            e ? i._tasks.unshift(o) : i._tasks.push(o),
              setTimeout(function () {
                return i.process();
              }, 1);
          }
        }
        function u(t) {
          return function () {
            (n -= 1),
              t.callback.apply(t, arguments),
              null != arguments[0] && i.error(arguments[0], t.data),
              n <= i.concurrency - i.buffer && i.unsaturated(),
              i.idle() && i.drain(),
              i.process();
          };
        }
        return i;
      });
  },
  function (t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      o = s(n(9)),
      i = s(n(8));
    function s(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var u = "function" == typeof importScripts,
      a =
        !u &&
        !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest()),
      c = null;
    function l() {}
    var f = (function () {
      function t(e, n, r) {
        if (
          ((function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          "string" != typeof e || "string" != typeof n)
        )
          throw new Error(
            "Both name and url are required for constructing a resource."
          );
        (r = r || {}),
          (this._flags = 0),
          this._setFlag(t.STATUS_FLAGS.DATA_URL, 0 === n.indexOf("data:")),
          (this.name = e),
          (this.url = n),
          (this.extension = this._getExtension()),
          (this.data = null),
          (this.crossOrigin =
            !0 === r.crossOrigin ? "anonymous" : r.crossOrigin),
          (this.loadType = r.loadType || this._determineLoadType()),
          (this.xhrType = r.xhrType),
          (this.metadata = r.metadata || {}),
          (this.error = null),
          (this.xhr = null),
          (this.children = []),
          (this.type = t.TYPE.UNKNOWN),
          (this.progressChunk = 0),
          (this._dequeue = l),
          (this._onLoadBinding = null),
          (this._boundComplete = this.complete.bind(this)),
          (this._boundOnError = this._onError.bind(this)),
          (this._boundOnProgress = this._onProgress.bind(this)),
          (this._boundXhrOnError = this._xhrOnError.bind(this)),
          (this._boundXhrOnAbort = this._xhrOnAbort.bind(this)),
          (this._boundXhrOnLoad = this._xhrOnLoad.bind(this)),
          (this._boundXdrOnTimeout = this._xdrOnTimeout.bind(this)),
          (this.onStart = new i.default()),
          (this.onProgress = new i.default()),
          (this.onComplete = new i.default()),
          (this.onAfterMiddleware = new i.default());
      }
      return (
        (t.setExtensionLoadType = function (e, n) {
          h(t._loadTypeMap, e, n);
        }),
        (t.setExtensionXhrType = function (e, n) {
          h(t._xhrTypeMap, e, n);
        }),
        (t.prototype.complete = function () {
          if (
            (this.data &&
              this.data.removeEventListener &&
              (this.data.removeEventListener("error", this._boundOnError, !1),
              this.data.removeEventListener("load", this._boundComplete, !1),
              this.data.removeEventListener(
                "progress",
                this._boundOnProgress,
                !1
              ),
              this.data.removeEventListener(
                "canplaythrough",
                this._boundComplete,
                !1
              )),
            this.xhr &&
              (this.xhr.removeEventListener
                ? (this.xhr.removeEventListener(
                    "error",
                    this._boundXhrOnError,
                    !1
                  ),
                  this.xhr.removeEventListener(
                    "abort",
                    this._boundXhrOnAbort,
                    !1
                  ),
                  this.xhr.removeEventListener(
                    "progress",
                    this._boundOnProgress,
                    !1
                  ),
                  this.xhr.removeEventListener(
                    "load",
                    this._boundXhrOnLoad,
                    !1
                  ))
                : ((this.xhr.onerror = null),
                  (this.xhr.ontimeout = null),
                  (this.xhr.onprogress = null),
                  (this.xhr.onload = null))),
            this.isComplete)
          )
            throw new Error(
              "Complete called again for an already completed resource."
            );
          this._setFlag(t.STATUS_FLAGS.COMPLETE, !0),
            this._setFlag(t.STATUS_FLAGS.LOADING, !1),
            this.onComplete.dispatch(this);
        }),
        (t.prototype.abort = function (e) {
          if (!this.error) {
            if (((this.error = !0), this.xhr)) this.xhr.abort();
            else if (this.xdr) this.xdr.abort();
            else if (this.data)
              if (this.data.src) this.data.src = t.EMPTY_GIF;
              else
                for (; this.data.firstChild; )
                  this.data.removeChild(this.data.firstChild);
            this.complete();
          }
        }),
        (t.prototype.load = function (e) {
          var n = this;
          if (!this.isLoading)
            if (this.isComplete)
              e &&
                setTimeout(function () {
                  return e(n);
                }, 1);
            else
              switch (
                (e && this.onComplete.once(e),
                this._setFlag(t.STATUS_FLAGS.LOADING, !0),
                this.onStart.dispatch(this),
                (!1 !== this.crossOrigin &&
                  "string" == typeof this.crossOrigin) ||
                  (this.crossOrigin = this._determineCrossOrigin(this.url)),
                this.loadType)
              ) {
                case t.LOAD_TYPE.IMAGE:
                  (this.type = t.TYPE.IMAGE), this._loadElement("image");
                  break;
                case t.LOAD_TYPE.AUDIO:
                  (this.type = t.TYPE.AUDIO), this._loadSourceElement("audio");
                  break;
                case t.LOAD_TYPE.VIDEO:
                  (this.type = t.TYPE.VIDEO), this._loadSourceElement("video");
                  break;
                case t.LOAD_TYPE.XHR:
                default:
                  a && this.crossOrigin ? this._loadXdr() : this._loadXhr();
              }
        }),
        (t.prototype._hasFlag = function (t) {
          return !!(this._flags & t);
        }),
        (t.prototype._setFlag = function (t, e) {
          this._flags = e ? this._flags | t : this._flags & ~t;
        }),
        (t.prototype._loadElement = function (t) {
          this.metadata.loadElement
            ? (this.data = this.metadata.loadElement)
            : "image" === t && void 0 !== window.Image
            ? (this.data = new Image())
            : (this.data = document.createElement(t)),
            this.crossOrigin && (this.data.crossOrigin = this.crossOrigin),
            this.metadata.skipSource || (this.data.src = this.url),
            this.data.addEventListener("error", this._boundOnError, !1),
            this.data.addEventListener("load", this._boundComplete, !1),
            this.data.addEventListener("progress", this._boundOnProgress, !1);
        }),
        (t.prototype._loadSourceElement = function (t) {
          if (
            (this.metadata.loadElement
              ? (this.data = this.metadata.loadElement)
              : "audio" === t && void 0 !== window.Audio
              ? (this.data = new Audio())
              : (this.data = document.createElement(t)),
            null !== this.data)
          ) {
            if (!this.metadata.skipSource)
              if (navigator.isCocoonJS)
                this.data.src = Array.isArray(this.url)
                  ? this.url[0]
                  : this.url;
              else if (Array.isArray(this.url))
                for (
                  var e = this.metadata.mimeType, n = 0;
                  n < this.url.length;
                  ++n
                )
                  this.data.appendChild(
                    this._createSource(
                      t,
                      this.url[n],
                      Array.isArray(e) ? e[n] : e
                    )
                  );
              else {
                var r = this.metadata.mimeType;
                this.data.appendChild(
                  this._createSource(t, this.url, Array.isArray(r) ? r[0] : r)
                );
              }
            this.data.addEventListener("error", this._boundOnError, !1),
              this.data.addEventListener("load", this._boundComplete, !1),
              this.data.addEventListener("progress", this._boundOnProgress, !1),
              this.data.addEventListener(
                "canplaythrough",
                this._boundComplete,
                !1
              ),
              this.data.load();
          } else this.abort("Unsupported element: " + t);
        }),
        (t.prototype._loadXhr = function () {
          "string" != typeof this.xhrType &&
            (this.xhrType = this._determineXhrType());
          var e = (this.xhr = new XMLHttpRequest());
          e.open("GET", this.url, !0),
            this.xhrType === t.XHR_RESPONSE_TYPE.JSON ||
            this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT
              ? (e.responseType = t.XHR_RESPONSE_TYPE.TEXT)
              : (e.responseType = this.xhrType),
            e.addEventListener("error", this._boundXhrOnError, !1),
            e.addEventListener("abort", this._boundXhrOnAbort, !1),
            e.addEventListener("progress", this._boundOnProgress, !1),
            e.addEventListener("load", this._boundXhrOnLoad, !1),
            e.send();
        }),
        (t.prototype._loadXdr = function () {
          "string" != typeof this.xhrType &&
            (this.xhrType = this._determineXhrType());
          var t = (this.xhr = new XDomainRequest());
          (t.timeout = 5e3),
            (t.onerror = this._boundXhrOnError),
            (t.ontimeout = this._boundXdrOnTimeout),
            (t.onprogress = this._boundOnProgress),
            (t.onload = this._boundXhrOnLoad),
            t.open("GET", this.url, !0),
            setTimeout(function () {
              return t.send();
            }, 1);
        }),
        (t.prototype._createSource = function (t, e, n) {
          n || (n = t + "/" + this._getExtension(e));
          var r = document.createElement("source");
          return (r.src = e), (r.type = n), r;
        }),
        (t.prototype._onError = function (t) {
          this.abort("Failed to load element using: " + t.target.nodeName);
        }),
        (t.prototype._onProgress = function (t) {
          t &&
            t.lengthComputable &&
            this.onProgress.dispatch(this, t.loaded / t.total);
        }),
        (t.prototype._xhrOnError = function () {
          var t = this.xhr;
          this.abort(
            d(t) +
              " Request failed. Status: " +
              t.status +
              ', text: "' +
              t.statusText +
              '"'
          );
        }),
        (t.prototype._xhrOnAbort = function () {
          this.abort(d(this.xhr) + " Request was aborted by the user.");
        }),
        (t.prototype._xdrOnTimeout = function () {
          this.abort(d(this.xhr) + " Request timed out.");
        }),
        (t.prototype._xhrOnLoad = function () {
          var e = this.xhr,
            n = "",
            r = void 0 === e.status ? 200 : e.status;
          if (
            (("" !== e.responseType &&
              "text" !== e.responseType &&
              void 0 !== e.responseType) ||
              (n = e.responseText),
            0 === r &&
            (n.length > 0 || e.responseType === t.XHR_RESPONSE_TYPE.BUFFER)
              ? (r = 200)
              : 1223 === r && (r = 204),
            2 === ((r / 100) | 0))
          ) {
            if (this.xhrType === t.XHR_RESPONSE_TYPE.TEXT)
              (this.data = n), (this.type = t.TYPE.TEXT);
            else if (this.xhrType === t.XHR_RESPONSE_TYPE.JSON)
              try {
                (this.data = JSON.parse(n)), (this.type = t.TYPE.JSON);
              } catch (t) {
                return void this.abort(
                  "Error trying to parse loaded json: " + t
                );
              }
            else if (this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT)
              try {
                if (window.DOMParser) {
                  var o = new DOMParser();
                  this.data = o.parseFromString(n, "text/xml");
                } else {
                  var i = document.createElement("div");
                  (i.innerHTML = n), (this.data = i);
                }
                this.type = t.TYPE.XML;
              } catch (t) {
                return void this.abort(
                  "Error trying to parse loaded xml: " + t
                );
              }
            else this.data = e.response || n;
            this.complete();
          } else
            this.abort(
              "[" + e.status + "] " + e.statusText + ": " + e.responseURL
            );
        }),
        (t.prototype._determineCrossOrigin = function (t, e) {
          if (0 === t.indexOf("data:")) return "";
          (e = e || location),
            c || u || (c = document.createElement("a")),
            u || (c.href = t);
          var n =
              (!(t = (0, o.default)(u ? t : c.href, { strictMode: !0 })).port &&
                "" === e.port) ||
              t.port === e.port,
            r = t.protocol ? t.protocol + ":" : "";
          return t.host === e.hostname && n && r === e.protocol
            ? ""
            : "anonymous";
        }),
        (t.prototype._determineXhrType = function () {
          return t._xhrTypeMap[this.extension] || t.XHR_RESPONSE_TYPE.TEXT;
        }),
        (t.prototype._determineLoadType = function () {
          return t._loadTypeMap[this.extension] || t.LOAD_TYPE.XHR;
        }),
        (t.prototype._getExtension = function () {
          var t = this.url,
            e = "";
          if (this.isDataUrl) {
            var n = t.indexOf("/");
            e = t.substring(n + 1, t.indexOf(";", n));
          } else {
            var r = t.indexOf("?"),
              o = t.indexOf("#"),
              i = Math.min(r > -1 ? r : t.length, o > -1 ? o : t.length);
            e = (t = t.substring(0, i)).substring(t.lastIndexOf(".") + 1);
          }
          return e.toLowerCase();
        }),
        (t.prototype._getMimeFromXhrType = function (e) {
          switch (e) {
            case t.XHR_RESPONSE_TYPE.BUFFER:
              return "application/octet-binary";
            case t.XHR_RESPONSE_TYPE.BLOB:
              return "application/blob";
            case t.XHR_RESPONSE_TYPE.DOCUMENT:
              return "application/xml";
            case t.XHR_RESPONSE_TYPE.JSON:
              return "application/json";
            case t.XHR_RESPONSE_TYPE.DEFAULT:
            case t.XHR_RESPONSE_TYPE.TEXT:
            default:
              return "text/plain";
          }
        }),
        r(t, [
          {
            key: "isDataUrl",
            get: function () {
              return this._hasFlag(t.STATUS_FLAGS.DATA_URL);
            },
          },
          {
            key: "isComplete",
            get: function () {
              return this._hasFlag(t.STATUS_FLAGS.COMPLETE);
            },
          },
          {
            key: "isLoading",
            get: function () {
              return this._hasFlag(t.STATUS_FLAGS.LOADING);
            },
          },
        ]),
        t
      );
    })();
    function h(t, e, n) {
      e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t[e] = n);
    }
    function d(t) {
      return t.toString().replace("object ", "");
    }
    (e.default = f),
      (f.STATUS_FLAGS = { NONE: 0, DATA_URL: 1, COMPLETE: 2, LOADING: 4 }),
      (f.TYPE = {
        UNKNOWN: 0,
        JSON: 1,
        XML: 2,
        IMAGE: 3,
        AUDIO: 4,
        VIDEO: 5,
        TEXT: 6,
      }),
      (f.LOAD_TYPE = { XHR: 1, IMAGE: 2, AUDIO: 3, VIDEO: 4 }),
      (f.XHR_RESPONSE_TYPE = {
        DEFAULT: "text",
        BUFFER: "arraybuffer",
        BLOB: "blob",
        DOCUMENT: "document",
        JSON: "json",
        TEXT: "text",
      }),
      (f._loadTypeMap = {
        gif: f.LOAD_TYPE.IMAGE,
        png: f.LOAD_TYPE.IMAGE,
        bmp: f.LOAD_TYPE.IMAGE,
        jpg: f.LOAD_TYPE.IMAGE,
        jpeg: f.LOAD_TYPE.IMAGE,
        tif: f.LOAD_TYPE.IMAGE,
        tiff: f.LOAD_TYPE.IMAGE,
        webp: f.LOAD_TYPE.IMAGE,
        tga: f.LOAD_TYPE.IMAGE,
        svg: f.LOAD_TYPE.IMAGE,
        "svg+xml": f.LOAD_TYPE.IMAGE,
        mp3: f.LOAD_TYPE.AUDIO,
        ogg: f.LOAD_TYPE.AUDIO,
        wav: f.LOAD_TYPE.AUDIO,
        mp4: f.LOAD_TYPE.VIDEO,
        webm: f.LOAD_TYPE.VIDEO,
      }),
      (f._xhrTypeMap = {
        xhtml: f.XHR_RESPONSE_TYPE.DOCUMENT,
        html: f.XHR_RESPONSE_TYPE.DOCUMENT,
        htm: f.XHR_RESPONSE_TYPE.DOCUMENT,
        xml: f.XHR_RESPONSE_TYPE.DOCUMENT,
        tmx: f.XHR_RESPONSE_TYPE.DOCUMENT,
        svg: f.XHR_RESPONSE_TYPE.DOCUMENT,
        tsx: f.XHR_RESPONSE_TYPE.DOCUMENT,
        gif: f.XHR_RESPONSE_TYPE.BLOB,
        png: f.XHR_RESPONSE_TYPE.BLOB,
        bmp: f.XHR_RESPONSE_TYPE.BLOB,
        jpg: f.XHR_RESPONSE_TYPE.BLOB,
        jpeg: f.XHR_RESPONSE_TYPE.BLOB,
        tif: f.XHR_RESPONSE_TYPE.BLOB,
        tiff: f.XHR_RESPONSE_TYPE.BLOB,
        webp: f.XHR_RESPONSE_TYPE.BLOB,
        tga: f.XHR_RESPONSE_TYPE.BLOB,
        json: f.XHR_RESPONSE_TYPE.JSON,
        text: f.XHR_RESPONSE_TYPE.TEXT,
        txt: f.XHR_RESPONSE_TYPE.TEXT,
        ttf: f.XHR_RESPONSE_TYPE.BUFFER,
        otf: f.XHR_RESPONSE_TYPE.BUFFER,
      }),
      (f.EMPTY_GIF =
        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==");
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.isArray = function (t) {
        return !(!t || t.constructor !== Array);
      });
  },
  function (t, e, n) {
    "use strict";
    (function (r) {
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o,
        i = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        s = n(20),
        u = n(6);
      var a = (0, u.getLogger)("EventWorker", u.INFO, !1),
        c =
          ((function (t, e, n, r, o) {
            var i = {};
            Object.keys(r).forEach(function (t) {
              i[t] = r[t];
            }),
              (i.enumerable = !!i.enumerable),
              (i.configurable = !!i.configurable),
              ("value" in i || i.initializer) && (i.writable = !0),
              (i = n
                .slice()
                .reverse()
                .reduce(function (n, r) {
                  return r(t, e, n) || n;
                }, i)),
              o &&
                void 0 !== i.initializer &&
                ((i.value = i.initializer ? i.initializer.call(o) : void 0),
                (i.initializer = void 0)),
              void 0 === i.initializer &&
                (Object.defineProperty(t, e, i), (i = null));
          })(
            (o = (function () {
              function t(e) {
                !(function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (this._ctx = e),
                  (this._binded = !1),
                  (this._listeners = []);
              }
              return (
                i(t, [
                  {
                    key: "add",
                    value: function (t, e) {
                      this._binded || this._bind(),
                        this._listeners.push({ eventName: t, cb: e }),
                        a("'" + t + "' added");
                    },
                  },
                  {
                    key: "addOnce",
                    value: function (t) {
                      var e = (0, s.defer)();
                      return (
                        this._binded || this._bind(),
                        this._listeners.push({ eventName: t, cb: e.resolve }),
                        a("'" + t + "' added once"),
                        e.promise
                      );
                    },
                  },
                  {
                    key: "remove",
                    value: function (t) {
                      var e = this._getListener(t),
                        n = this._listeners.indexOf(e);
                      n > -1 && this._listeners.splice(n, 1),
                        a("'" + t + "' removed");
                    },
                  },
                  {
                    key: "dispatch",
                    value: function (t) {
                      var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null;
                      this._ctx.postMessage({ eventName: t, payload: e }),
                        a("'" + t + "' dispatched with payload :", e);
                    },
                  },
                  {
                    key: "_bind",
                    value: function () {
                      (this._binded = !0),
                        this._ctx.addEventListener(
                          "message",
                          this._onWorkerMessage
                        );
                    },
                  },
                  {
                    key: "_getListener",
                    value: function (t) {
                      for (var e = 0, n = this._listeners.length; e < n; e++) {
                        var r = this._listeners[e];
                        if (r.eventName === t) return r;
                      }
                      return null;
                    },
                  },
                  {
                    key: "_onWorkerMessage",
                    value: function (t) {
                      for (
                        var e = t.data,
                          n = e.eventName,
                          r = e.payload || null,
                          o = 0,
                          i = this._listeners.length;
                        o < i;
                        o++
                      ) {
                        var s = this._listeners[o];
                        s.eventName === n && s.cb(r);
                      }
                    },
                  },
                ]),
                t
              );
            })()).prototype,
            "_onWorkerMessage",
            [r],
            Object.getOwnPropertyDescriptor(o.prototype, "_onWorkerMessage"),
            o.prototype
          ),
          o);
      (e.default = c), (t.exports = e.default);
    }.call(this, n(17).bind));
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      o = n(35),
      i = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(o),
      s = n(6),
      u = n(38);
    var a = (0, s.getLogger)("PackLoader", s.ERROR, !1),
      c = (function (t) {
        function e(t, n) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          var r = (function (t, e) {
            if (!t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !e || ("object" != typeof e && "function" != typeof e)
              ? t
              : e;
          })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          return (
            (r._hash = n),
            (r._packName = t),
            r._addMiddlewares(),
            r._addPack(t),
            r
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              e &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, e)
                  : (t.__proto__ = e));
          })(e, i.default),
          r(e, [
            {
              key: "load",
              value: function (t) {
                var n = this;
                (function t(e, n, r) {
                  null === e && (e = Function.prototype);
                  var o = Object.getOwnPropertyDescriptor(e, n);
                  if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r);
                  }
                  if ("value" in o) return o.value;
                  var s = o.get;
                  return void 0 !== s ? s.call(r) : void 0;
                })(
                  e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                  "load",
                  this
                ).call(this, function (e, r) {
                  if (!n._checkForErrors(r)) {
                    var o = n._packName,
                      i = n.get(o + "-config") || [],
                      s = n.get(o + "-pack");
                    t(o, i, s);
                  }
                });
              },
            },
            {
              key: "get",
              value: function (t) {
                return this.resources && this.resources[t]
                  ? this.resources[t].data
                  : null;
              },
            },
            {
              key: "abort",
              value: function () {
                for (var t in this.resources) {
                  var e = this.resources[t];
                  e.isComplete || e.abort();
                }
              },
            },
            {
              key: "_addPack",
              value: function (t) {
                var e = (0, u.getPath)("static", this._hash),
                  n = [
                    {
                      name: t + "-config",
                      url: "/" + e + "/packs/" + t + ".json",
                    },
                  ];
                if(t==="common") {
                  n = [
                    {
                      name: t + "-config",
                      url: "/" + e + "/packs/" + t + ".json",
                    },
                    {
                      name: t + "-pack",
                      url: "/" + e + "/packs/" + t + ".pack",
                    },
                  ];
                }
                this._addManifest(n);
              },
            },
            {
              key: "_addManifest",
              value: function (t) {
                for (var e in t) {
                  var n = t[e];
                  this.add(n.name, n.url, n.options || null);
                }
              },
            },
            {
              key: "_addMiddlewares",
              value: function () {
                this.pre(this._extensionMiddleware);
              },
            },
            {
              key: "_checkForErrors",
              value: function (t) {
                for (var e in t) {
                  var n = t[e];
                  if (n.error)
                    return a("Resource '" + e + "' error :", n.error), !0;
                }
                return !1;
              },
            },
            {
              key: "_extensionMiddleware",
              value: function (t, e) {
                "pack" === t.extension &&
                  (t.xhrType = o.Resource.XHR_RESPONSE_TYPE.BUFFER),
                  e();
              },
            },
          ]),
          e
        );
      })();
    (e.default = c), (t.exports = e.default);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o,
      i = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      s = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(n(7));
    var u = void 0;
    u = s.default
      ? self.URL || self.webkitURL || self.mozURL || self.msURL
      : window.URL || window.webkitURL || window.mozURL || window.msURL;
    var a =
      ((o = r = (function () {
        function t(e, n) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this._config = e),
            (this._pack = n);
        }
        return (
          i(t, [
            {
              key: "getType",
              value: function (t) {
                return this._findFile(t).type || "text/plain";
              },
            },
            {
              key: "get",
              value: function (e) {
                var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
                switch ((n || (n = this._detectFormat(e)), n)) {
                  case t.RAW_FORMAT:
                    console.error('RAW_FORMAT getData', this.getData(e))
                    return this.getData(e);
                  case t.STRING_FORMAT:
                    return this.getAsString(e);
                  case t.BYTES_FORMAT:
                    return this.getAsBytes(e);
                  case t.URI_FORMAT:
                    return this.getAsURI(e);
                }
              },
            },
            {
              key: "getData",
              value: function (t) {
                var e = this._findFile(t);
                return this._slice(e.begin, e.end);
              },
            },
            {
              key: "getAsString",
              value: function (t) {
                if (null === this._pack) return "";
                var e = this.getData(t);
                if ("string" == typeof e || e instanceof String) return e;
                e = new Uint8Array(e);
                for (
                  var n = "", r = 0, o = Math.ceil(e.byteLength / 65535), i = 0;
                  i < o;
                  i++
                )
                  (n += String.fromCharCode.apply(
                    null,
                    new Uint8Array(e.buffer.slice(r, r + 65535))
                  )),
                    (r += 65535);
                return (n = decodeURIComponent(escape(n)));
              },
            },
            {
              key: "getAsBytes",
              value: function (t) {
                var e = this.getData(t);
                if ("string" == typeof e || e instanceof String) {
                  if ("function" != typeof Uint8Array)
                    throw new Error("TypedArray are not supported");
                  return new Uint8Array(
                    e.split("").map(function (t) {
                      return t.charCodeAt(0);
                    })
                  );
                }
                return e;
              },
            },
            {
              key: "getAsURI",
              value: function (t) {
                var file = this._findFile(t);
                if(file.url) {
                  n = this.getType(t);
                  // console.error('getAsURI', t, 'type', n, 'file', file)
                  return `/res/${file.url}`;
                }
                var e = this.getData(t),
                n = this.getType(t);
                
                console.warn('getAsURI', t, 'type', n, 'data', e)
                return (s.default ? self.Blob : Detect.supports.blob)
                  ? u.createObjectURL(new Blob([e], { type: n }))
                  : "data:" + n + ";base64," + btoa(e);
              },
            },
            {
              key: "_findFile",
              value: function (t) {
                for (var e = this._config.length; e-- > 0; )
                  if (this._config[e][0] === t) {
                    var n = this._config[e];
                    return { name: n[0], begin: n[1], end: n[2], type: n[3], url: n[4] };
                  }
              },
            },
            {
              key: "_slice",
              value: function (t, e) {
                return null === this._pack
                  ? "function" == typeof Uint8Array
                    ? new Uint8Array([])
                    : ""
                  : "function" == typeof this._pack.substr
                  ? this._pack.substr(t, e - t)
                  : this._pack.slice(t, e);
              },
            },
            {
              key: "_detectFormat",
              value: function (e) {
                switch (e.split(".").pop()) {
                  case "glb":
                  case "drc":
                  case "bin":
                  case "dds":
                    return t.RAW_FORMAT;
                  case "png":
                  case "jpg":
                    return t.URI_FORMAT;
                  case "json":
                    return t.STRING_FORMAT;
                  default:
                    return t.URI_FORMAT;
                }
              },
            },
          ]),
          t
        );
      })()),
      (r.RAW_FORMAT = "raw"),
      (r.STRING_FORMAT = "string"),
      (r.BYTES_FORMAT = "bytes"),
      (r.URI_FORMAT = "uri"),
      o);
    (e.default = a), (t.exports = e.default);
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(13),
      o = n.n(r),
      i = n(14),
      s = n.n(i),
      u = n(15),
      a = n.n(u);
    const c = new o.a(self),
      l = {},
      f = (t, e, n) => {
        const r = [],
          o = new a.a(e, n);
        for (let n = 0, i = e.length; n < i; n++) {
          const i = e[n][0],
            s = o.get(i),
            u = `${t}.${i.replace(/\.[^/.]+$/, "").replace(/\//g, ".")}`,
            a = o.getType(i),
            c = i.substr(i.lastIndexOf(".") + 1);
          r.push({ id: u, path: i, type: a, extension: c, data: s });
        }
        c.dispatch(`loaded:${t}`, r);
      };
    c.add("load", ({ packName: t, hash: e }) => {
      const n = new s.a(t, e);
      n.load(f),
        n.onProgress.add(({ progress: e }) => c.dispatch(`progress:${t}`, e)),
        (l[t] = n);
    }),
      c.add("abort", (t) => {
        const e = l[t];
        e && e.loading && e.abort();
      });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = i(n(18)),
      o = i(n(19));
    function i(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (e.default = { bind: r.default, mixin: o.default }),
      (t.exports = e.default);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default =
        /**
         * Bind decorator.
         * @function bind
         *
         * @license {@link https://opensource.org/licenses/MIT|MIT}
         *
         * @author Patrick Heng <hengpatrick.pro@gmail.com>
         * @author Fabien Motte <contact@fabienmotte.com>
         *
         * @param {Object} target Target.
         * @param {string} key Target key.
         * @param {Object} descriptor Descriptor for the target being modified.
         * @param {function} descriptor.value Value.
         * @param {function} descriptor.configurable Configurable.
         * @param {function} descriptor.enumerable Enumerable.
         *
         * @throws {SyntaxError} Bind decorator can only be applied to a method.
         *
         * @returns {function} Bound function.
         */
        function (t, e, n) {
          if (void 0 === n || "function" != typeof n.value)
            throw new SyntaxError(
              "@bind decorator can only be applied to a method"
            );
          var r = n.value,
            o = n.configurable,
            i = n.enumerable;
          return {
            configurable: o,
            enumerable: i,
            get: function () {
              if (this === t) return r;
              var n = r.bind(this);
              return (
                Object.defineProperty(this, e, {
                  configurable: !0,
                  writable: !0,
                  enumerable: !1,
                  value: n,
                }),
                n
              );
            },
          };
        }),
      (t.exports = e.default);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default =
        /**
         * Mixin decorator.
         * @function mixin
         *
         * @license {@link https://opensource.org/licenses/MIT|MIT}
         *
         * @author Patrick Heng <hengpatrick.pro@gmail.com>
         * @author Fabien Motte <contact@fabienmotte.com>
         *
         * @param {...Object} mixins Mixin(s).
         *
         * @throws {SyntaxError} Mixin decorator requires at least one mixin.
         *
         * @returns {function} Wrapped target class.
         */
        function () {
          for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          if ("function" == typeof e[0])
            throw new SyntaxError(
              "@mixin decorator '" + e[0].name + "' requires at least one mixin"
            );
          return function (t) {
            for (var n = t.prototype, r = {}, o = 0, i = e.length; o < i; o++) {
              var s = e[o];
              for (var u in s) {
                var a = s[u];
                "function" == typeof a
                  ? ((r[u] = r[u] || []), r[u].push(a))
                  : (n[u] = a);
              }
            }
            var c = function (t) {
              var e = r[t],
                o = n[t];
              n[t] = function () {
                for (
                  var t = void 0, n = arguments.length, r = Array(n), i = 0;
                  i < n;
                  i++
                )
                  r[i] = arguments[i];
                for (var s = 0, u = e.length; s < u; s++) {
                  var a = e[s];
                  t = a.apply(this, r);
                }
                return "function" == typeof o && (t = o.apply(this, r)), t;
              };
            };
            for (var l in r) c(l);
          };
        }),
      (t.exports = e.default);
  },
  function (t, e, n) {
    var r; /** @license MIT License (c) copyright 2010-2014 original author or authors */ /** @license MIT License (c) copyright 2010-2014 original author or authors */
    !(function (o) {
      "use strict";
      void 0 ===
        (r = function (t) {
          var e = n(21),
            r = n(23),
            o = n(24),
            i = n(25),
            s = n(26),
            u = n(27),
            a = n(28),
            c = n(29),
            l = n(30),
            f = n(3),
            h = [r, o, i, u, a, s, c, e, l].reduce(function (t, e) {
              return e(t);
            }, n(32)),
            d = n(5)(h);
          function p(t, e, n, r) {
            var o = h.resolve(t);
            return arguments.length < 2 ? o : o.then(e, n, r);
          }
          function v(t) {
            return function () {
              for (
                var e = 0, n = arguments.length, r = new Array(n);
                e < n;
                ++e
              )
                r[e] = arguments[e];
              return d(t, this, r);
            };
          }
          function _(t) {
            for (
              var e = 0, n = arguments.length - 1, r = new Array(n);
              e < n;
              ++e
            )
              r[e] = arguments[e + 1];
            return d(t, this, r);
          }
          return (
            (p.promise = function (t) {
              return new h(t);
            }),
            (p.resolve = h.resolve),
            (p.reject = h.reject),
            (p.lift = v),
            (p.try = _),
            (p.attempt = _),
            (p.iterate = h.iterate),
            (p.unfold = h.unfold),
            (p.join = function () {
              return h.all(arguments);
            }),
            (p.all = function (t) {
              return p(t, h.all);
            }),
            (p.settle = function (t) {
              return p(t, h.settle);
            }),
            (p.any = v(h.any)),
            (p.some = v(h.some)),
            (p.race = v(h.race)),
            (p.map = function (t, e) {
              return p(t, function (t) {
                return h.map(t, e);
              });
            }),
            (p.filter = function (t, e) {
              return p(t, function (t) {
                return h.filter(t, e);
              });
            }),
            (p.reduce = v(h.reduce)),
            (p.reduceRight = v(h.reduceRight)),
            (p.isPromiseLike = function (t) {
              return t && "function" == typeof t.then;
            }),
            (p.Promise = h),
            (p.defer = function () {
              return new (function () {
                var t = h._defer();
                function e(e) {
                  t._handler.resolve(e);
                }
                function n(e) {
                  t._handler.reject(e);
                }
                function r(e) {
                  t._handler.notify(e);
                }
                (this.promise = t),
                  (this.resolve = e),
                  (this.reject = n),
                  (this.notify = r),
                  (this.resolver = { resolve: e, reject: n, notify: r });
              })();
            }),
            (p.TimeoutError = f),
            p
          );
        }.call(e, n, e, t)) || (t.exports = r);
    })(n(0));
  },
  function (t, e, n) {
    var r; /** @license MIT License (c) copyright 2010-2014 original author or authors */ /** @license MIT License (c) copyright 2010-2014 original author or authors */
    !(function (o) {
      "use strict";
      void 0 ===
        (r = function (t) {
          var e = n(1),
            r = n(3);
          function o(t, n, r, o) {
            return e.setTimer(function () {
              t(r, o, n);
            }, n);
          }
          return function (t) {
            function n(t, e, n) {
              o(i, t, e, n);
            }
            function i(t, e) {
              e.resolve(t);
            }
            function s(t, e, n) {
              var o = void 0 === t ? new r("timed out after " + n + "ms") : t;
              e.reject(o);
            }
            return (
              (t.prototype.delay = function (t) {
                var e = this._beget();
                return this._handler.fold(n, t, void 0, e._handler), e;
              }),
              (t.prototype.timeout = function (t, n) {
                var r = this._beget(),
                  i = r._handler,
                  u = o(s, t, n, r._handler);
                return (
                  this._handler.visit(
                    i,
                    function (t) {
                      e.clearTimer(u), this.resolve(t);
                    },
                    function (t) {
                      e.clearTimer(u), this.reject(t);
                    },
                    i.notify
                  ),
                  r
                );
              }),
              t
            );
          };
        }.call(e, n, e, t)) || (t.exports = r);
    })(n(0));
  },
  function (t, e) {},
  function (t, e, n) {
    var r; /** @license MIT License (c) copyright 2010-2014 original author or authors */ /** @license MIT License (c) copyright 2010-2014 original author or authors */
    !(function (o) {
      "use strict";
      void 0 ===
        (r = function (t) {
          var e = n(4),
            r = n(5);
          return function (t) {
            var n = r(t),
              o = t.resolve,
              i = t.all,
              s = Array.prototype.reduce,
              u = Array.prototype.reduceRight,
              a = Array.prototype.slice;
            return (
              (t.any = function (e) {
                for (
                  var n,
                    r,
                    o = t._defer(),
                    i = o._handler,
                    s = e.length >>> 0,
                    u = s,
                    a = [],
                    c = 0;
                  c < s;
                  ++c
                )
                  if (void 0 !== (r = e[c]) || c in e) {
                    if ((n = t._handler(r)).state() > 0) {
                      i.become(n), t._visitRemaining(e, c, n);
                      break;
                    }
                    n.visit(i, l, f);
                  } else --u;
                0 === u &&
                  i.reject(new RangeError("any(): array must not be empty"));
                return o;
                function l(t) {
                  (a = null), this.resolve(t);
                }
                function f(t) {
                  this.resolved || (a.push(t), 0 == --u && this.reject(a));
                }
              }),
              (t.some = function (e, n) {
                var r,
                  o,
                  i,
                  s = t._defer(),
                  u = s._handler,
                  a = [],
                  c = [],
                  l = e.length >>> 0,
                  f = 0;
                for (i = 0; i < l; ++i)
                  (void 0 !== (o = e[i]) || i in e) && ++f;
                (n = Math.max(n, 0)),
                  (r = f - n + 1),
                  (f = Math.min(n, f)),
                  n > f
                    ? u.reject(
                        new RangeError(
                          "some(): array must contain at least " +
                            n +
                            " item(s), but had " +
                            f
                        )
                      )
                    : 0 === f && u.resolve(a);
                for (i = 0; i < l; ++i)
                  (void 0 !== (o = e[i]) || i in e) &&
                    t._handler(o).visit(u, h, d, u.notify);
                return s;
                function h(t) {
                  this.resolved ||
                    (a.push(t), 0 == --f && ((c = null), this.resolve(a)));
                }
                function d(t) {
                  this.resolved ||
                    (c.push(t), 0 == --r && ((a = null), this.reject(c)));
                }
              }),
              (t.settle = function (t) {
                return i(t.map(c));
              }),
              (t.map = function (e, n) {
                return t._traverse(n, e);
              }),
              (t.filter = function (e, n) {
                var r = a.call(e);
                return t._traverse(n, r).then(function (e) {
                  return (function (e, n) {
                    for (
                      var r = n.length, o = new Array(r), i = 0, s = 0;
                      i < r;
                      ++i
                    )
                      n[i] && (o[s++] = t._handler(e[i]).value);
                    return (o.length = s), o;
                  })(r, e);
                });
              }),
              (t.reduce = function (t, e) {
                return arguments.length > 2
                  ? s.call(t, l(e), arguments[2])
                  : s.call(t, l(e));
              }),
              (t.reduceRight = function (t, e) {
                return arguments.length > 2
                  ? u.call(t, l(e), arguments[2])
                  : u.call(t, l(e));
              }),
              (t.prototype.spread = function (t) {
                return this.then(i).then(function (e) {
                  return t.apply(this, e);
                });
              }),
              t
            );
            function c(n) {
              var r;
              return (
                n instanceof t && (r = n._handler.join()),
                (r && 0 === r.state()) || !r
                  ? o(n).then(e.fulfilled, e.rejected)
                  : (r._unreport(), e.inspect(r))
              );
            }
            function l(t) {
              return function (e, r, o) {
                return n(t, void 0, [e, r, o]);
              };
            }
          };
        }.call(e, n, e, t)) || (t.exports = r);
    })(n(0));
  },
  function (t, e, n) {
    var r; /** @license MIT License (c) copyright 2010-2014 original author or authors */ /** @license MIT License (c) copyright 2010-2014 original author or authors */
    !(function (o) {
      "use strict";
      void 0 ===
        (r = function () {
          return function (n) {
            var r = n.resolve,
              o = n.reject,
              i = n.prototype.catch;
            function s(t, e, n, o) {
              var i = t.call(e);
              return (function (t) {
                return (
                  ("object" == typeof t || "function" == typeof t) && null !== t
                );
              })(i)
                ? (function (t, e, n) {
                    return r(t).then(function () {
                      return e(n);
                    });
                  })(i, n, o)
                : n(o);
            }
            return (
              (n.prototype.done = function (t, e) {
                this._handler.visit(this._handler.receiver, t, e);
              }),
              (n.prototype.catch = n.prototype.otherwise = function (e) {
                return arguments.length < 2
                  ? i.call(this, e)
                  : "function" != typeof e
                  ? this.ensure(t)
                  : i.call(
                      this,
                      (function (t, e) {
                        return function (n) {
                          return (function (t, e) {
                            return (function (t) {
                              return (
                                t === Error ||
                                (null != t && t.prototype instanceof Error)
                              );
                            })(e)
                              ? t instanceof e
                              : e(t);
                          })(n, e)
                            ? t.call(this, n)
                            : o(n);
                        };
                      })(arguments[1], e)
                    );
              }),
              (n.prototype.finally = n.prototype.ensure = function (t) {
                return "function" != typeof t
                  ? this
                  : this.then(
                      function (n) {
                        return s(t, this, e, n);
                      },
                      function (e) {
                        return s(t, this, o, e);
                      }
                    );
              }),
              (n.prototype.else = n.prototype.orElse = function (t) {
                return this.then(void 0, function () {
                  return t;
                });
              }),
              (n.prototype.yield = function (t) {
                return this.then(function () {
                  return t;
                });
              }),
              (n.prototype.tap = function (t) {
                return this.then(t).yield(this);
              }),
              n
            );
          };
          function t() {
            throw new TypeError("catch predicate must be a function");
          }
          function e(t) {
            return t;
          }
        }.call(e, n, e, t)) || (t.exports = r);
    })(n(0));
  },
  function (t, e, n) {
    var r; /** @license MIT License (c) copyright 2010-2014 original author or authors */ /** @license MIT License (c) copyright 2010-2014 original author or authors */
    !(function (o) {
      "use strict";
      void 0 ===
        (r = function () {
          return function (t) {
            return (
              (t.prototype.fold = function (e, n) {
                var r = this._beget();
                return (
                  this._handler.fold(
                    function (n, r, o) {
                      t._handler(n).fold(
                        function (t, n, r) {
                          r.resolve(e.call(this, n, t));
                        },
                        r,
                        this,
                        o
                      );
                    },
                    n,
                    r._handler.receiver,
                    r._handler
                  ),
                  r
                );
              }),
              t
            );
          };
        }.call(e, n, e, t)) || (t.exports = r);
    })(n(0));
  },
  function (t, e, n) {
    var r; /** @license MIT License (c) copyright 2010-2014 original author or authors */ /** @license MIT License (c) copyright 2010-2014 original author or authors */
    !(function (o) {
      "use strict";
      void 0 ===
        (r = function (t) {
          var e = n(4).inspect;
          return function (t) {
            return (
              (t.prototype.inspect = function () {
                return e(t._handler(this));
              }),
              t
            );
          };
        }.call(e, n, e, t)) || (t.exports = r);
    })(n(0));
  },
  function (t, e, n) {
    var r; /** @license MIT License (c) copyright 2010-2014 original author or authors */ /** @license MIT License (c) copyright 2010-2014 original author or authors */
    !(function (o) {
      "use strict";
      void 0 ===
        (r = function () {
          return function (t) {
            var e = t.resolve;
            return (
              (t.iterate = function (t, e, r, o) {
                return n(
                  function (e) {
                    return [e, t(e)];
                  },
                  e,
                  r,
                  o
                );
              }),
              (t.unfold = n),
              t
            );
            function n(t, r, o, i) {
              return e(i).then(function (n) {
                return e(r(n)).then(function (r) {
                  return r ? n : e(t(n)).spread(s);
                });
              });
              function s(i, s) {
                return e(o(i)).then(function () {
                  return n(t, r, o, s);
                });
              }
            }
          };
        }.call(e, n, e, t)) || (t.exports = r);
    })(n(0));
  },
  function (t, e, n) {
    var r; /** @license MIT License (c) copyright 2010-2014 original author or authors */ /** @license MIT License (c) copyright 2010-2014 original author or authors */
    !(function (o) {
      "use strict";
      void 0 ===
        (r = function () {
          return function (t) {
            return (
              (t.prototype.progress = function (t) {
                return this.then(void 0, void 0, t);
              }),
              t
            );
          };
        }.call(e, n, e, t)) || (t.exports = r);
    })(n(0));
  },
  function (t, e, n) {
    var r; /** @license MIT License (c) copyright 2010-2014 original author or authors */ /** @license MIT License (c) copyright 2010-2014 original author or authors */
    !(function (o) {
      "use strict";
      void 0 ===
        (r = function () {
          return function (t) {
            return (
              (t.prototype.with = t.prototype.withThis = function (t) {
                var e = this._beget(),
                  n = e._handler;
                return (n.receiver = t), this._handler.chain(n, t), e;
              }),
              t
            );
          };
        }.call(e, n, e, t)) || (t.exports = r);
    })(n(0));
  },
  function (t, e, n) {
    var r; /** @license MIT License (c) copyright 2010-2014 original author or authors */ /** @license MIT License (c) copyright 2010-2014 original author or authors */
    !(function (o) {
      "use strict";
      void 0 ===
        (r = function (t) {
          var e = n(1).setTimer,
            r = n(31);
          return function (t) {
            var n,
              s = i,
              u = i;
            "undefined" != typeof console &&
              ((n = console),
              (s =
                void 0 !== n.error
                  ? function (t) {
                      n.error(t);
                    }
                  : function (t) {
                      n.log(t);
                    }),
              (u =
                void 0 !== n.info
                  ? function (t) {
                      n.info(t);
                    }
                  : function (t) {
                      n.log(t);
                    })),
              (t.onPotentiallyUnhandledRejection = function (t) {
                d(f, t);
              }),
              (t.onPotentiallyUnhandledRejectionHandled = function (t) {
                d(h, t);
              }),
              (t.onFatalRejection = function (t) {
                d(o, t.value);
              });
            var a = [],
              c = [],
              l = null;
            function f(t) {
              t.handled ||
                (c.push(t),
                s(
                  "Potentially unhandled rejection [" +
                    t.id +
                    "] " +
                    r.formatError(t.value)
                ));
            }
            function h(t) {
              var e = c.indexOf(t);
              e >= 0 &&
                (c.splice(e, 1),
                u(
                  "Handled previous rejection [" +
                    t.id +
                    "] " +
                    r.formatObject(t.value)
                ));
            }
            function d(t, n) {
              a.push(t, n), null === l && (l = e(p, 0));
            }
            function p() {
              for (l = null; a.length > 0; ) a.shift()(a.shift());
            }
            return t;
          };
          function o(t) {
            throw t;
          }
          function i() {}
        }.call(e, n, e, t)) || (t.exports = r);
    })(n(0));
  },
  function (t, e, n) {
    var r; /** @license MIT License (c) copyright 2010-2014 original author or authors */ /** @license MIT License (c) copyright 2010-2014 original author or authors */
    !(function (o) {
      "use strict";
      void 0 ===
        (r = function () {
          return {
            formatError: function (e) {
              var n =
                "object" == typeof e && null !== e && (e.stack || e.message)
                  ? e.stack || e.message
                  : t(e);
              return e instanceof Error ? n : n + " (WARNING: non-Error used)";
            },
            formatObject: t,
            tryStringify: e,
          };
          function t(t) {
            var n = String(t);
            return (
              "[object Object]" === n &&
                "undefined" != typeof JSON &&
                (n = e(t, n)),
              n
            );
          }
          function e(t, e) {
            try {
              return JSON.stringify(t);
            } catch (t) {
              return e;
            }
          }
        }.call(e, n, e, t)) || (t.exports = r);
    })(n(0));
  },
  function (t, e, n) {
    var r; /** @license MIT License (c) copyright 2010-2014 original author or authors */ /** @license MIT License (c) copyright 2010-2014 original author or authors */
    !(function (o) {
      "use strict";
      void 0 ===
        (r = function (t) {
          return n(33)({ scheduler: new (n(34))(n(1).asap) });
        }.call(e, n, e, t)) || (t.exports = r);
    })(n(0));
  },
  function (t, e, n) {
    (function (r) {
      var o; /** @license MIT License (c) copyright 2010-2014 original author or authors */ /** @license MIT License (c) copyright 2010-2014 original author or authors */
      !(function (i) {
        "use strict";
        void 0 ===
          (o = function () {
            return function (t) {
              var e = t.scheduler,
                n = (function () {
                  if (void 0 !== r && null !== r && "function" == typeof r.emit)
                    return function (t, e) {
                      return "unhandledRejection" === t
                        ? r.emit(t, e.value, e)
                        : r.emit(t, e);
                    };
                  if (
                    "undefined" != typeof self &&
                    (function () {
                      if ("function" == typeof CustomEvent)
                        try {
                          var t = new CustomEvent("unhandledRejection");
                          return t instanceof CustomEvent;
                        } catch (t) {}
                      return !1;
                    })()
                  )
                    return (function (t, e) {
                      return function (n, r) {
                        var o = new e(n, {
                          detail: { reason: r.value, key: r },
                          bubbles: !1,
                          cancelable: !0,
                        });
                        return !t.dispatchEvent(o);
                      };
                    })(self, CustomEvent);
                  if (
                    "undefined" != typeof self &&
                    (function () {
                      if (
                        "undefined" != typeof document &&
                        "function" == typeof document.createEvent
                      )
                        try {
                          var t = document.createEvent("CustomEvent");
                          return t.initCustomEvent("eventType", !1, !0, {}), !0;
                        } catch (t) {}
                      return !1;
                    })()
                  )
                    return (function (t, e) {
                      return function (n, r) {
                        var o = e.createEvent("CustomEvent");
                        return (
                          o.initCustomEvent(n, !1, !0, {
                            reason: r.value,
                            key: r,
                          }),
                          !t.dispatchEvent(o)
                        );
                      };
                    })(self, document);
                  return X;
                })(),
                o =
                  Object.create ||
                  function (t) {
                    function e() {}
                    return (e.prototype = t), new e();
                  };
              function i(t, e) {
                this._handler =
                  t === v
                    ? e
                    : (function (t) {
                        var e = new g();
                        try {
                          t(
                            function (t) {
                              e.resolve(t);
                            },
                            n,
                            function (t) {
                              e.notify(t);
                            }
                          );
                        } catch (t) {
                          n(t);
                        }
                        return e;
                        function n(t) {
                          e.reject(t);
                        }
                      })(t);
              }
              function s(t) {
                return L(t) ? t : new i(v, new b(d(t)));
              }
              function u(t) {
                return new i(v, new b(new T(t)));
              }
              function a() {
                return P;
              }
              function c(t, e, n) {
                for (
                  var r,
                    o =
                      "function" == typeof e
                        ? function (r, o, i) {
                            i.resolved || l(n, f, r, t(e, o, r), i);
                          }
                        : f,
                    s = new g(),
                    u = n.length >>> 0,
                    a = new Array(u),
                    c = 0;
                  c < n.length && !s.resolved;
                  ++c
                )
                  void 0 !== (r = n[c]) || c in n ? l(n, o, c, r, s) : --u;
                return 0 === u && s.become(new m(a)), new i(v, s);
                function f(t, e, n) {
                  (a[t] = e), 0 == --u && n.become(new m(a));
                }
              }
              function l(t, e, n, r, o) {
                if (M(r)) {
                  var i = (function (t) {
                      return L(t) ? t._handler.join() : p(t);
                    })(r),
                    s = i.state();
                  0 === s
                    ? i.fold(e, n, void 0, o)
                    : s > 0
                    ? e(n, i.value, o)
                    : (o.become(i), f(t, n + 1, i));
                } else e(n, r, o);
              }
              function f(t, e, n) {
                for (var r = e; r < t.length; ++r) h(d(t[r]), n);
              }
              function h(t, e) {
                if (t !== e) {
                  var n = t.state();
                  0 === n
                    ? t.visit(t, void 0, t._unreport)
                    : n < 0 && t._unreport();
                }
              }
              function d(t) {
                return L(t) ? t._handler.join() : M(t) ? p(t) : new m(t);
              }
              function p(t) {
                try {
                  var e = t.then;
                  return "function" == typeof e ? new E(e, t) : new m(t);
                } catch (t) {
                  return new T(t);
                }
              }
              function v() {}
              function _() {}
              (i.resolve = s),
                (i.reject = u),
                (i.never = a),
                (i._defer = function () {
                  return new i(v, new g());
                }),
                (i._handler = d),
                (i.prototype.then = function (t, e, n) {
                  var r = this._handler,
                    o = r.join().state();
                  if (
                    ("function" != typeof t && o > 0) ||
                    ("function" != typeof e && o < 0)
                  )
                    return new this.constructor(v, r);
                  var i = this._beget(),
                    s = i._handler;
                  return r.chain(s, r.receiver, t, e, n), i;
                }),
                (i.prototype.catch = function (t) {
                  return this.then(void 0, t);
                }),
                (i.prototype._beget = function () {
                  return (function (t, e) {
                    var n = new g(t.receiver, t.join().context);
                    return new e(v, n);
                  })(this._handler, this.constructor);
                }),
                (i.all = function (t) {
                  return c(U, null, t);
                }),
                (i.race = function (t) {
                  if ("object" != typeof t || null === t)
                    return u(new TypeError("non-iterable passed to race()"));
                  return 0 === t.length
                    ? a()
                    : 1 === t.length
                    ? s(t[0])
                    : (function (t) {
                        var e,
                          n,
                          r,
                          o = new g();
                        for (e = 0; e < t.length; ++e)
                          if (void 0 !== (n = t[e]) || e in t) {
                            if (0 !== (r = d(n)).state()) {
                              o.become(r), f(t, e + 1, r);
                              break;
                            }
                            r.visit(o, o.resolve, o.reject);
                          }
                        return new i(v, o);
                      })(t);
                }),
                (i._traverse = function (t, e) {
                  return c(N, t, e);
                }),
                (i._visitRemaining = f),
                (v.prototype.when = v.prototype.become = v.prototype.notify = v.prototype.fail = v.prototype._unreport = v.prototype._report = X),
                (v.prototype._state = 0),
                (v.prototype.state = function () {
                  return this._state;
                }),
                (v.prototype.join = function () {
                  for (var t = this; void 0 !== t.handler; ) t = t.handler;
                  return t;
                }),
                (v.prototype.chain = function (t, e, n, r, o) {
                  this.when({
                    resolver: t,
                    receiver: e,
                    fulfilled: n,
                    rejected: r,
                    progress: o,
                  });
                }),
                (v.prototype.visit = function (t, e, n, r) {
                  this.chain(y, t, e, n, r);
                }),
                (v.prototype.fold = function (t, e, n, r) {
                  this.when(new j(t, e, n, r));
                }),
                F(v, _),
                (_.prototype.become = function (t) {
                  t.fail();
                });
              var y = new _();
              function g(t, e) {
                i.createContext(this, e),
                  (this.consumers = void 0),
                  (this.receiver = t),
                  (this.handler = void 0),
                  (this.resolved = !1);
              }
              function b(t) {
                this.handler = t;
              }
              function E(t, n) {
                g.call(this), e.enqueue(new S(t, n, this));
              }
              function m(t) {
                i.createContext(this), (this.value = t);
              }
              F(v, g),
                (g.prototype._state = 0),
                (g.prototype.resolve = function (t) {
                  this.become(d(t));
                }),
                (g.prototype.reject = function (t) {
                  this.resolved || this.become(new T(t));
                }),
                (g.prototype.join = function () {
                  if (!this.resolved) return this;
                  for (var t = this; void 0 !== t.handler; )
                    if ((t = t.handler) === this)
                      return (this.handler = new T(
                        new TypeError("Promise cycle")
                      ));
                  return t;
                }),
                (g.prototype.run = function () {
                  var t = this.consumers,
                    e = this.handler;
                  (this.handler = this.handler.join()),
                    (this.consumers = void 0);
                  for (var n = 0; n < t.length; ++n) e.when(t[n]);
                }),
                (g.prototype.become = function (t) {
                  this.resolved ||
                    ((this.resolved = !0),
                    (this.handler = t),
                    void 0 !== this.consumers && e.enqueue(this),
                    void 0 !== this.context && t._report(this.context));
                }),
                (g.prototype.when = function (t) {
                  this.resolved
                    ? e.enqueue(new R(t, this.handler))
                    : void 0 === this.consumers
                    ? (this.consumers = [t])
                    : this.consumers.push(t);
                }),
                (g.prototype.notify = function (t) {
                  this.resolved || e.enqueue(new A(t, this));
                }),
                (g.prototype.fail = function (t) {
                  var e = void 0 === t ? this.context : t;
                  this.resolved && this.handler.join().fail(e);
                }),
                (g.prototype._report = function (t) {
                  this.resolved && this.handler.join()._report(t);
                }),
                (g.prototype._unreport = function () {
                  this.resolved && this.handler.join()._unreport();
                }),
                F(v, b),
                (b.prototype.when = function (t) {
                  e.enqueue(new R(t, this));
                }),
                (b.prototype._report = function (t) {
                  this.join()._report(t);
                }),
                (b.prototype._unreport = function () {
                  this.join()._unreport();
                }),
                F(g, E),
                F(v, m),
                (m.prototype._state = 1),
                (m.prototype.fold = function (t, e, n, r) {
                  !(function (t, e, n, r, o) {
                    if ("function" != typeof t) return o.become(n);
                    i.enterContext(n),
                      (function (t, e, n, r, o) {
                        try {
                          t.call(r, e, n, o);
                        } catch (t) {
                          o.become(new T(t));
                        }
                      })(t, e, n.value, r, o),
                      i.exitContext();
                  })(t, e, this, n, r);
                }),
                (m.prototype.when = function (t) {
                  k(t.fulfilled, this, t.receiver, t.resolver);
                });
              var O = 0;
              function T(t) {
                i.createContext(this),
                  (this.id = ++O),
                  (this.value = t),
                  (this.handled = !1),
                  (this.reported = !1),
                  this._report();
              }
              function w(t, e) {
                (this.rejection = t), (this.context = e);
              }
              function x(t) {
                this.rejection = t;
              }
              F(v, T),
                (T.prototype._state = -1),
                (T.prototype.fold = function (t, e, n, r) {
                  r.become(this);
                }),
                (T.prototype.when = function (t) {
                  "function" == typeof t.rejected && this._unreport(),
                    k(t.rejected, this, t.receiver, t.resolver);
                }),
                (T.prototype._report = function (t) {
                  e.afterQueue(new w(this, t));
                }),
                (T.prototype._unreport = function () {
                  this.handled ||
                    ((this.handled = !0), e.afterQueue(new x(this)));
                }),
                (T.prototype.fail = function (t) {
                  (this.reported = !0),
                    n("unhandledRejection", this),
                    i.onFatalRejection(this, void 0 === t ? this.context : t);
                }),
                (w.prototype.run = function () {
                  this.rejection.handled ||
                    this.rejection.reported ||
                    ((this.rejection.reported = !0),
                    n("unhandledRejection", this.rejection) ||
                      i.onPotentiallyUnhandledRejection(
                        this.rejection,
                        this.context
                      ));
                }),
                (x.prototype.run = function () {
                  this.rejection.reported &&
                    (n("rejectionHandled", this.rejection) ||
                      i.onPotentiallyUnhandledRejectionHandled(this.rejection));
                }),
                (i.createContext = i.enterContext = i.exitContext = i.onPotentiallyUnhandledRejection = i.onPotentiallyUnhandledRejectionHandled = i.onFatalRejection = X);
              var P = new i(v, new v());
              function R(t, e) {
                (this.continuation = t), (this.handler = e);
              }
              function A(t, e) {
                (this.handler = e), (this.value = t);
              }
              function S(t, e, n) {
                (this._then = t), (this.thenable = e), (this.resolver = n);
              }
              function j(t, e, n, r) {
                (this.f = t),
                  (this.z = e),
                  (this.c = n),
                  (this.to = r),
                  (this.resolver = y),
                  (this.receiver = this);
              }
              function L(t) {
                return t instanceof i;
              }
              function M(t) {
                return (
                  ("object" == typeof t || "function" == typeof t) && null !== t
                );
              }
              function k(t, e, n, r) {
                if ("function" != typeof t) return r.become(e);
                i.enterContext(e),
                  (function (t, e, n, r) {
                    try {
                      r.become(d(t.call(n, e)));
                    } catch (t) {
                      r.become(new T(t));
                    }
                  })(t, e.value, n, r),
                  i.exitContext();
              }
              function C(t, e, n, r, o) {
                if ("function" != typeof t) return o.notify(e);
                i.enterContext(n),
                  (function (t, e, n, r) {
                    try {
                      r.notify(t.call(n, e));
                    } catch (t) {
                      r.notify(t);
                    }
                  })(t, e, r, o),
                  i.exitContext();
              }
              function N(t, e, n) {
                try {
                  return t(e, n);
                } catch (t) {
                  return u(t);
                }
              }
              function F(t, e) {
                (e.prototype = o(t.prototype)), (e.prototype.constructor = e);
              }
              function U(t, e) {
                return e;
              }
              function X() {}
              return (
                (R.prototype.run = function () {
                  this.handler.join().when(this.continuation);
                }),
                (A.prototype.run = function () {
                  var t = this.handler.consumers;
                  if (void 0 !== t)
                    for (var e, n = 0; n < t.length; ++n)
                      C(
                        (e = t[n]).progress,
                        this.value,
                        this.handler,
                        e.receiver,
                        e.resolver
                      );
                }),
                (S.prototype.run = function () {
                  var t = this.resolver;
                  !(function (t, e, n, r, o) {
                    try {
                      t.call(e, n, r, o);
                    } catch (t) {
                      r(t);
                    }
                  })(
                    this._then,
                    this.thenable,
                    function (e) {
                      t.resolve(e);
                    },
                    function (e) {
                      t.reject(e);
                    },
                    function (e) {
                      t.notify(e);
                    }
                  );
                }),
                (j.prototype.fulfilled = function (t) {
                  this.f.call(this.c, this.z, t, this.to);
                }),
                (j.prototype.rejected = function (t) {
                  this.to.reject(t);
                }),
                (j.prototype.progress = function (t) {
                  this.to.notify(t);
                }),
                i
              );
            };
          }.call(e, n, e, t)) || (t.exports = o);
      })(n(0));
    }.call(this, n(2)));
  },
  function (t, e, n) {
    var r; /** @license MIT License (c) copyright 2010-2014 original author or authors */ /** @license MIT License (c) copyright 2010-2014 original author or authors */
    !(function (o) {
      "use strict";
      void 0 ===
        (r = function () {
          function t(t) {
            (this._async = t),
              (this._running = !1),
              (this._queue = this),
              (this._queueLen = 0),
              (this._afterQueue = {}),
              (this._afterQueueLen = 0);
            var e = this;
            this.drain = function () {
              e._drain();
            };
          }
          return (
            (t.prototype.enqueue = function (t) {
              (this._queue[this._queueLen++] = t), this.run();
            }),
            (t.prototype.afterQueue = function (t) {
              (this._afterQueue[this._afterQueueLen++] = t), this.run();
            }),
            (t.prototype.run = function () {
              this._running || ((this._running = !0), this._async(this.drain));
            }),
            (t.prototype._drain = function () {
              for (var t = 0; t < this._queueLen; ++t)
                this._queue[t].run(), (this._queue[t] = void 0);
              for (
                this._queueLen = 0, this._running = !1, t = 0;
                t < this._afterQueueLen;
                ++t
              )
                this._afterQueue[t].run(), (this._afterQueue[t] = void 0);
              this._afterQueueLen = 0;
            }),
            t
          );
        }.call(e, n, e, t)) || (t.exports = r);
    })(n(0));
  },
  function (t, e, n) {
    "use strict";
    var r = n(36).default,
      o = n(11).default,
      i = n(10),
      s = n(37);
    (r.Resource = o),
      (r.async = i),
      (r.base64 = s),
      (t.exports = r),
      (t.exports.default = r);
  },
  function (t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            },
      o = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      i = c(n(8)),
      s = c(n(9)),
      u = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return (e.default = t), e;
      })(n(10)),
      a = c(n(11));
    function c(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var l = /(#[\w-]+)?$/,
      f = (function () {
        function t() {
          var e = this,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 10;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.baseUrl = n),
            (this.progress = 0),
            (this.loading = !1),
            (this.defaultQueryString = ""),
            (this._beforeMiddleware = []),
            (this._afterMiddleware = []),
            (this._resourcesParsing = []),
            (this._boundLoadResource = function (t, n) {
              return e._loadResource(t, n);
            }),
            (this._queue = u.queue(this._boundLoadResource, r)),
            this._queue.pause(),
            (this.resources = {}),
            (this.onProgress = new i.default()),
            (this.onError = new i.default()),
            (this.onLoad = new i.default()),
            (this.onStart = new i.default()),
            (this.onComplete = new i.default());
        }
        return (
          (t.prototype.add = function (t, e, n, o) {
            if (Array.isArray(t)) {
              for (var i = 0; i < t.length; ++i) this.add(t[i]);
              return this;
            }
            if (
              ("object" === (void 0 === t ? "undefined" : r(t)) &&
                ((o = e || t.callback || t.onComplete),
                (n = t),
                (e = t.url),
                (t = t.name || t.key || t.url)),
              "string" != typeof e && ((o = n), (n = e), (e = t)),
              "string" != typeof e)
            )
              throw new Error("No url passed to add resource to loader.");
            if (
              ("function" == typeof n && ((o = n), (n = null)),
              this.loading && (!n || !n.parentResource))
            )
              throw new Error(
                "Cannot add resources while the loader is running."
              );
            if (this.resources[t])
              throw new Error('Resource named "' + t + '" already exists.');
            if (
              ((e = this._prepareUrl(e)),
              (this.resources[t] = new a.default(t, e, n)),
              "function" == typeof o &&
                this.resources[t].onAfterMiddleware.once(o),
              this.loading)
            ) {
              for (
                var s = n.parentResource, u = [], c = 0;
                c < s.children.length;
                ++c
              )
                s.children[c].isComplete || u.push(s.children[c]);
              var l = (s.progressChunk * (u.length + 1)) / (u.length + 2);
              s.children.push(this.resources[t]), (s.progressChunk = l);
              for (var f = 0; f < u.length; ++f) u[f].progressChunk = l;
              this.resources[t].progressChunk = l;
            }
            return this._queue.push(this.resources[t]), this;
          }),
          (t.prototype.pre = function (t) {
            return this._beforeMiddleware.push(t), this;
          }),
          (t.prototype.use = function (t) {
            return this._afterMiddleware.push(t), this;
          }),
          (t.prototype.reset = function () {
            for (var t in ((this.progress = 0),
            (this.loading = !1),
            this._queue.kill(),
            this._queue.pause(),
            this.resources)) {
              var e = this.resources[t];
              e._onLoadBinding && e._onLoadBinding.detach(),
                e.isLoading && e.abort();
            }
            return (this.resources = {}), this;
          }),
          (t.prototype.load = function (t) {
            if (
              ("function" == typeof t && this.onComplete.once(t), this.loading)
            )
              return this;
            if (this._queue.idle()) this._onStart(), this._onComplete();
            else {
              for (
                var e = 100 / this._queue._tasks.length, n = 0;
                n < this._queue._tasks.length;
                ++n
              )
                this._queue._tasks[n].data.progressChunk = e;
              this._onStart(), this._queue.resume();
            }
            return this;
          }),
          (t.prototype._prepareUrl = function (t) {
            var e = (0, s.default)(t, { strictMode: !0 }),
              n = void 0;
            if (
              ((n =
                e.protocol || !e.path || 0 === t.indexOf("//")
                  ? t
                  : this.baseUrl.length &&
                    this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 &&
                    "/" !== t.charAt(0)
                  ? this.baseUrl + "/" + t
                  : this.baseUrl + t),
              this.defaultQueryString)
            ) {
              var r = l.exec(n)[0];
              -1 !== (n = n.substr(0, n.length - r.length)).indexOf("?")
                ? (n += "&" + this.defaultQueryString)
                : (n += "?" + this.defaultQueryString),
                (n += r);
            }
            return n;
          }),
          (t.prototype._loadResource = function (t, e) {
            var n = this;
            (t._dequeue = e),
              u.eachSeries(
                this._beforeMiddleware,
                function (e, r) {
                  e.call(n, t, function () {
                    r(t.isComplete ? {} : null);
                  });
                },
                function () {
                  t.isComplete
                    ? n._onLoad(t)
                    : ((t._onLoadBinding = t.onComplete.once(n._onLoad, n)),
                      t.load());
                },
                !0
              );
          }),
          (t.prototype._onStart = function () {
            (this.progress = 0),
              (this.loading = !0),
              this.onStart.dispatch(this);
          }),
          (t.prototype._onComplete = function () {
            (this.progress = 100),
              (this.loading = !1),
              this.onComplete.dispatch(this, this.resources);
          }),
          (t.prototype._onLoad = function (t) {
            var e = this;
            (t._onLoadBinding = null),
              this._resourcesParsing.push(t),
              t._dequeue(),
              u.eachSeries(
                this._afterMiddleware,
                function (n, r) {
                  n.call(e, t, r);
                },
                function () {
                  t.onAfterMiddleware.dispatch(t),
                    (e.progress = Math.min(100, e.progress + t.progressChunk)),
                    e.onProgress.dispatch(e, t),
                    t.error
                      ? e.onError.dispatch(t.error, e, t)
                      : e.onLoad.dispatch(e, t),
                    e._resourcesParsing.splice(
                      e._resourcesParsing.indexOf(t),
                      1
                    ),
                    e._queue.idle() &&
                      0 === e._resourcesParsing.length &&
                      e._onComplete();
                },
                !0
              );
          }),
          o(t, [
            {
              key: "concurrency",
              get: function () {
                return this._queue.concurrency;
              },
              set: function (t) {
                this._queue.concurrency = t;
              },
            },
          ]),
          t
        );
      })();
    e.default = f;
  },
  function (t, e, n) {
    "use strict";
    (e.__esModule = !0),
      (e.encodeBinary = function (t) {
        var e = "",
          n = 0;
        for (; n < t.length; ) {
          for (var o = [0, 0, 0], i = [0, 0, 0, 0], s = 0; s < o.length; ++s)
            n < t.length ? (o[s] = 255 & t.charCodeAt(n++)) : (o[s] = 0);
          (i[0] = o[0] >> 2),
            (i[1] = ((3 & o[0]) << 4) | (o[1] >> 4)),
            (i[2] = ((15 & o[1]) << 2) | (o[2] >> 6)),
            (i[3] = 63 & o[2]);
          var u = n - (t.length - 1);
          switch (u) {
            case 2:
              (i[3] = 64), (i[2] = 64);
              break;
            case 1:
              i[3] = 64;
          }
          for (var a = 0; a < i.length; ++a) e += r.charAt(i[a]);
        }
        return e;
      });
    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        },
      o = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return (e.default = t), e;
      })(n(39)),
      i = u(n(46)),
      s = u(n(47));
    function u(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (e.default = r({}, o, { getPath: i.default, shuffleArray: s.default })),
      (t.exports = e.default);
  },
  function (t, e, n) {
    t.exports = n(40);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(41);
    Object.defineProperty(e, "getURLFileExtension", {
      enumerable: !0,
      get: function () {
        return r.getURLFileExtension;
      },
    });
    var o = n(12);
    Object.defineProperty(e, "isArray", {
      enumerable: !0,
      get: function () {
        return o.isArray;
      },
    });
    var i = n(42);
    Object.defineProperty(e, "isCorsSupported", {
      enumerable: !0,
      get: function () {
        return i.isCorsSupported;
      },
    });
    var s = n(43);
    Object.defineProperty(e, "isObject", {
      enumerable: !0,
      get: function () {
        return s.isObject;
      },
    });
    var u = n(44);
    Object.defineProperty(e, "scope", {
      enumerable: !0,
      get: function () {
        return u.scope;
      },
    });
    var a = n(45);
    Object.defineProperty(e, "uuid", {
      enumerable: !0,
      get: function () {
        return a.uuid;
      },
    });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.getURLFileExtension = function (t) {
        if (!t) return null;
        var e = t,
          n = "";
        if (
          -1 ===
          (e = (e = (e = e.substr(1 + e.lastIndexOf("/"))).split("?")[0]).split(
            "#"
          )[0]).lastIndexOf(".")
        )
          return null;
        n = e.substring(e.lastIndexOf(".") + 1);
        return n.toLowerCase();
      });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.isCorsSupported = function () {
        return "withCredentials" in new window.XMLHttpRequest();
      });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.isObject = function (t) {
        return t === Object(t) && !(0, r.isArray)(t);
      });
    var r = n(12);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.scope = function (t, e) {
        for (var n = 0, r = e.length; n < r; n++) t[e[n]] = t[e[n]].bind(t);
      });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.uuid = function () {
        var t = function () {
          return Math.floor(65536 * (1 + Math.random()))
            .toString(16)
            .substring(1);
        };
        return (
          t() +
          t() +
          "-" +
          t() +
          "-" +
          t() +
          "-" +
          t() +
          "-" +
          (t() + t() + t())
        );
      });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    (e.default = function (t, e) {
      e || (e = window.hash), t.endsWith("/") && (t = t.slice(0, -1));
      var n = t.split("/"),
        r = n[n.length - 1],
        o = r.split("."),
        i = o.pop(),
        s = o.join("."),
        u = n.slice(0, n.length - 1).join("/");
      return (
        "" !== u && (u += "/"),
        -1 === r.indexOf(".") ? t + "-" + e : "" + u + s + "-" + e + "." + i
      );
    }),
      (t.exports = e.default);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t) {
        for (var e = t.length - 1; e > 0; e--) {
          var n = Math.floor(Math.random() * (e + 1)),
            r = t[e];
          (t[e] = t[n]), (t[n] = r);
        }
      }),
      (t.exports = e.default);
  },
]);
