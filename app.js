! function(n) {
    var r = {};

    function i(t) {
        if (r[t]) return r[t].exports;
        var e = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return n[t].call(e.exports, e, e.exports, i), e.l = !0, e.exports
    }
    i.m = n, i.c = r, i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) i.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 6)
}([function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "isString", function() {
        return s
    }), n.d(e, "isObject", function() {
        return c
    }), n.d(e, "isRegExp", function() {
        return l
    }), n.d(e, "isFunction", function() {
        return u
    }), n.d(e, "has", function() {
        return p
    }), n.d(e, "assign", function() {
        return f
    }), n.d(e, "arrayReplaceAt", function() {
        return d
    }), n.d(e, "isValidEntityCode", function() {
        return v
    }), n.d(e, "fromCodePoint", function() {
        return g
    }), n.d(e, "unescapeMd", function() {
        return w
    }), n.d(e, "unescapeAll", function() {
        return k
    }), n.d(e, "escapeHtml", function() {
        return S
    }), n.d(e, "unescapeHtml", function() {
        return T
    }), n.d(e, "escapeRE", function() {
        return D
    }), n.d(e, "isSpace", function() {
        return P
    }), n.d(e, "isNumeric", function() {
        return F
    }), n.d(e, "isWhiteSpace", function() {
        return z
    }), n.d(e, "isPunctChar", function() {
        return R
    }), n.d(e, "isMdAsciiPunct", function() {
        return H
    }), n.d(e, "normalizeReference", function() {
        return N
    }), n.d(e, "lib", function() {
        return q
    });
    var a = n(5),
        r = n(4),
        i = n(3);

    function o(t) {
        return Object.prototype.toString.call(t)
    }

    function s(t) {
        return "[object String]" === o(t)
    }

    function c(t) {
        return "[object Object]" === o(t)
    }

    function l(t) {
        return "[object RegExp]" === o(t)
    }

    function u(t) {
        return "[object Function]" === o(t)
    }
    var h = Object.prototype.hasOwnProperty;

    function p(t, e) {
        return h.call(t, e)
    }

    function f(n) {
        for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
        return t.forEach(function(e) {
            if (e) {
                if ("object" != typeof e) throw new TypeError(e + "must be object");
                Object.keys(e).forEach(function(t) {
                    n[t] = e[t]
                })
            }
        }), n
    }

    function d(t, e, n) {
        return [].concat(t.slice(0, e), n, t.slice(e + 1))
    }

    function v(t) {
        return !(55296 <= t && t <= 57343) && (!(64976 <= t && t <= 65007) && (65535 != (65535 & t) && 65534 != (65535 & t) && (!(0 <= t && t <= 8) && (11 !== t && (!(14 <= t && t <= 31) && (!(127 <= t && t <= 159) && !(1114111 < t)))))))
    }

    function g(t) {
        if (65535 < t) {
            var e = 55296 + ((t -= 65536) >> 10),
                n = 56320 + (1023 & t);
            return String.fromCharCode(e, n)
        }
        return String.fromCharCode(t)
    }
    var m = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,
        y = new RegExp(m.source + "|" + /&([a-z#][a-z0-9]{1,31});/gi.source, "gi"),
        b = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;

    function w(t) {
        return t.indexOf("\\") < 0 ? t : t.replace(m, "$1")
    }

    function k(t) {
        return t.indexOf("\\") < 0 && t.indexOf("&") < 0 ? t : t.replace(y, function(t, e, n) {
            return e || (r = t, i = n, o = 0, p(a.a, i) ? a.a[i] : 35 === i.charCodeAt(0) && b.test(i) && v(o = "x" === i[1].toLowerCase() ? parseInt(i.slice(2), 16) : parseInt(i.slice(1), 10)) ? g(o) : r);
            var r, i, o
        })
    }
    var E = /[&<>"]/,
        C = /[&<>"]/g,
        x = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;"
        };

    function _(t) {
        return x[t]
    }

    function S(t) {
        return E.test(t) ? t.replace(C, _) : t
    }
    var L = /&(amp|lt|gt|quot);/g,
        M = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };

    function A(t) {
        return M[t]
    }

    function T(t) {
        return t.replace(L, A)
    }
    var O = /[.?*+^$[\]\\(){}|-]/g;

    function D(t) {
        return t.replace(O, "\\$&")
    }

    function P(t) {
        switch (t) {
            case 9:
            case 32:
                return !0
        }
        return !1
    }

    function F(t) {
        return 48 <= t && t <= 57
    }

    function z(t) {
        if (8192 <= t && t <= 8202) return !0;
        switch (t) {
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 32:
            case 160:
            case 5760:
            case 8239:
            case 8287:
            case 12288:
                return !0
        }
        return !1
    }
    var I = i.P;

    function R(t) {
        return I.test(t)
    }

    function H(t) {
        switch (t) {
            case 33:
            case 34:
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 41:
            case 42:
            case 43:
            case 44:
            case 45:
            case 46:
            case 47:
            case 58:
            case 59:
            case 60:
            case 61:
            case 62:
            case 63:
            case 64:
            case 91:
            case 92:
            case 93:
            case 94:
            case 95:
            case 96:
            case 123:
            case 124:
            case 125:
            case 126:
                return !0;
            default:
                return !1
        }
    }

    function N(t) {
        return t = t.trim().replace(/\s+/g, " "), "Ṿ" === "ẞ".toLowerCase() && (t = t.replace(/ẞ/g, "ß")), t.toLowerCase().toUpperCase()
    }
    var q = {
        mdurl: r,
        ucmicro: i
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", function() {
        return o
    }), n.d(e, "c", function() {
        return a
    }), n.d(e, "d", function() {
        return s
    }), n.d(e, "f", function() {
        return c
    }), n.d(e, "h", function() {
        return l
    }), n.d(e, "e", function() {
        return u
    }), n.d(e, "q", function() {
        return p
    }), n.d(e, "r", function() {
        return f
    }), n.d(e, "i", function() {
        return d
    }), n.d(e, "l", function() {
        return v
    }), n.d(e, "s", function() {
        return g
    }), n.d(e, "j", function() {
        return y
    }), n.d(e, "n", function() {
        return b
    }), n.d(e, "p", function() {
        return k
    }), n.d(e, "a", function() {
        return E
    }), n.d(e, "k", function() {
        return x
    }), n.d(e, "m", function() {
        return _
    }), n.d(e, "g", function() {
        return S
    }), n.d(e, "o", function() {
        return L
    });
    var r = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        i = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        o = ["*", '"', "\\", "/", "<", ">", ":", "|", "?"],
        a = /[*"\\/<>:|?]/,
        s = /[*"\\<>:|?]/,
        c = /[!"#$%&()*+,.:;<=>?@^`{|}~\/\[\]\\]/g;

    function l(t, n, r, i, o) {
        function a() {
            c = null, o && (p = Date.now()), t.apply(l, u)
        }

        function s(t, e) {
            t && c && window.clearTimeout(c), !t && c || (c = window.setTimeout(a, e))
        }
        var c = null,
            l = null,
            u = null,
            h = !1,
            p = 0,
            f = function() {
                if (h) return f;
                if (!c || i) {
                    l = this, u = [];
                    for (var t = 0; t < arguments.length; t++) u.push(arguments[t])
                }
                if (o) {
                    var e = Date.now();
                    if (p < e - n) return p = e, a(), f
                }
                return s(r, n), f
            };
        return f.cancel = function() {
            return c && (clearTimeout(c), c = null), f
        }, f.disable = function() {
            return h = !0, f
        }, f.enable = function() {
            return h = !1, f
        }, f.set_timeout = function(t) {
            return n = t, c && s(!0, n), f
        }, f.flush = function() {
            return s(!0, 0), f
        }, f
    }
    var u = (h.prototype.add = function(t, e) {
        var n = this.data,
            r = n[t];
        r || (r = [], n[t] = r), r.contains(e) || r.push(e)
    }, h.prototype.remove = function(t, e) {
        var n = this.data,
            r = n[t];
        r && (r.remove(e), 0 === r.length && delete n[t])
    }, h.prototype.get = function(t) {
        return this.data[t]
    }, h.prototype.keys = function() {
        return Object.keys(this.data)
    }, h.prototype.clear = function(t) {
        delete this.data[t]
    }, h.prototype.contains = function(t, e) {
        var n = this.data[t];
        return n && n.contains(e)
    }, h.prototype.count = function() {
        var t = this.data,
            e = 0;
        for (var n in t) t.hasOwnProperty(n) && (e += t[n].length);
        return e
    }, h);

    function h() {
        this.data = {}
    }

    function p(t) {
        t.focus();
        var e = document.createRange();
        e.selectNodeContents(t);
        var n = window.getSelection();
        n.removeAllRanges(), n.addRange(e)
    }

    function f(t) {
        t.focus();
        var e = document.createRange();
        e.selectNodeContents(t), e.collapse(!1);
        var n = window.getSelection();
        n.removeAllRanges(), n.addRange(e)
    }

    function d(t, e) {
        var n = t.x - e.x,
            r = t.y - e.y;
        return Math.sqrt(n * n + r * r)
    }

    function v(t, e, n) {
        return n = n || e + "s", 1 === t ? t + " " + e : t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + n
    }

    function g(n) {
        return r(this, void 0, Promise, function() {
            var e;
            return i(this, function(t) {
                switch (t.label) {
                    case 0:
                        return e = m, [4, function(e) {
                            return r(this, void 0, Promise, function() {
                                return i(this, function(t) {
                                    return [2, crypto.subtle.digest("SHA-256", new Uint8Array(e))]
                                })
                            })
                        }(n)];
                    case 1:
                        return [2, e.apply(void 0, [t.sent()])]
                }
            })
        })
    }

    function m(t) {
        return Array.from(new Uint8Array(t)).map(function(t) {
            return t.toString(16).padStart(2, "0")
        }).join("").toLowerCase()
    }

    function y(t, e) {
        return t.length > e - 3 ? t.substring(0, e - 3) + "..." : t
    }

    function b(t, e) {
        for (var n = 0, r = 0, i = e ? e.offsetParent : null; t && t !== e && t !== i;) n += t.offsetTop, r += t.offsetLeft, (t = t.offsetParent) && (n -= t.scrollTop);
        return {
            top: n,
            left: r
        }
    }
    var w = 10;

    function k(t, e, n) {
        n = n || {}, e.show();
        var r = n.gap || 0,
            i = n.preference || "bottom",
            o = n.offsetParent || e.offsetParent || document.documentElement,
            a = n.horizontalAlignment || "left",
            s = o.scrollTop + w,
            c = o.scrollTop + o.clientHeight - w,
            l = Math.min(t.top, c),
            u = Math.max(t.bottom, s),
            h = e.offsetHeight,
            p = h + r <= t.top - s,
            f = h + r <= c - t.bottom,
            d = 0,
            v = "";
        v = !p || "top" !== i && f ? !f || "bottom" !== i && p ? (d = o.clientHeight < h + r ? s : "top" === i ? s + r : c - h, "overlap") : (d = u + r, "bottom") : (d = l - r - h, "top");
        var g = o.scrollLeft + w,
            m = o.scrollLeft + o.clientWidth - w,
            y = e.offsetWidth,
            b = "left" === a ? t.left : t.right - y;
        return b < g ? b = g : m - y < b && (b = m - y), e.style.top = d + "px", e.style.left = b + "px", {
            top: d,
            left: b,
            vresult: v
        }
    }
    var E = (C.prototype.onCancel = function(t) {
        this.cancelled ? t() : this.callbacks.push(t)
    }, C.prototype.cancel = function() {
        if (!this.cancelled) {
            this.cancelled = !0;
            for (var t = 0, e = this.callbacks; t < e.length; t++)(0, e[t])();
            this.callbacks = []
        }
    }, C.prototype.isCancelled = function() {
        return this.cancelled
    }, C);

    function C() {
        this.cancelled = !1, this.callbacks = []
    }

    function x(t) {
        return t.replace(" ", " ")
    }

    function _(t) {
        for (var e = [], n = 0; n < t; n++) e.push((16 * Math.random() | 0).toString(16));
        return e.join("")
    }

    function S(t, e, n) {
        var r = setInterval(function() {
            document.body.contains(t) || (clearInterval(r), n())
        }, e);
        return function() {
            clearInterval(r)
        }
    }

    function L(t, e) {
        var n = t.pageX,
            r = t.pageY,
            i = e.getBoundingClientRect();
        return n >= i.x && n <= i.x + i.width && r >= i.y && r <= i.y + i.height
    }
}, function(t, e, n) {
    "use strict";
    var L = n(0);

    function r(t, e, n) {
        var r, i, o = e,
            a = {
                ok: !1,
                pos: 0,
                lines: 0,
                str: ""
            };
        if (60 === t.charCodeAt(e)) {
            for (e++; e < n;) {
                if (10 === (r = t.charCodeAt(e))) return a;
                if (62 === r) return a.pos = e + 1, a.str = Object(L.unescapeAll)(t.slice(o + 1, e)), a.ok = !0, a;
                92 === r && e + 1 < n ? e += 2 : e++
            }
            return a
        }
        for (i = 0; e < n && 32 !== (r = t.charCodeAt(e)) && !(r < 32 || 127 === r);)
            if (92 === r && e + 1 < n) e += 2;
            else {
                if (40 === r && i++, 41 === r) {
                    if (0 === i) break;
                    i--
                }
                e++
            } return o === e || 0 !== i || (a.str = Object(L.unescapeAll)(t.slice(o, e)), a.lines = 0, a.pos = e, a.ok = !0), a
    }

    function i(t, e, n) {
        var r, i, o, a, s = -1,
            c = t.posMax,
            l = t.pos;
        for (t.pos = e + 1, r = 1; t.pos < c;) {
            if (93 === (o = t.src.charCodeAt(t.pos)) && 0 === --r) {
                i = !0;
                break
            }
            if (a = t.pos, t.md.inline.skipToken(t), 91 === o)
                if (a === t.pos - 1) r++;
                else if (n) return t.pos = l, -1
        }
        return i && (s = t.pos), t.pos = l, s
    }

    function o(t, e, n) {
        var r, i, o = 0,
            a = e,
            s = {
                ok: !1,
                pos: 0,
                lines: 0,
                str: ""
            };
        if (n <= e) return s;
        if (34 !== (i = t.charCodeAt(e)) && 39 !== i && 40 !== i) return s;
        for (e++, 40 === i && (i = 41); e < n;) {
            if ((r = t.charCodeAt(e)) === i) return s.pos = e + 1, s.lines = o, s.str = Object(L.unescapeAll)(t.slice(a + 1, e)), s.ok = !0, s;
            10 === r ? o++ : 92 === r && e + 1 < n && (e++, 10 === t.charCodeAt(e) && o++), e++
        }
        return s
    }
    var c = n(3);
    var a = {
        fuzzyLink: !0,
        fuzzyEmail: !0,
        fuzzyIP: !1
    };
    var s = {
            "http:": {
                validate: function(t, e, n) {
                    var r = t.slice(e);
                    return n.re.http || (n.re.http = new RegExp("^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path, "i")), n.re.http.test(r) ? r.match(n.re.http)[0].length : 0
                }
            },
            "https:": "http:",
            "ftp:": "http:",
            "//": {
                validate: function(t, e, n) {
                    var r = t.slice(e);
                    return n.re.no_http || (n.re.no_http = new RegExp("^" + n.re.src_auth + "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path, "i")), !n.re.no_http.test(r) || 3 <= e && ":" === t[e - 3] || 3 <= e && "/" === t[e - 3] ? 0 : r.match(n.re.no_http)[0].length
                }
            },
            "mailto:": {
                validate: function(t, e, n) {
                    var r = t.slice(e);
                    return n.re.mailto || (n.re.mailto = new RegExp("^" + n.re.src_email_name + "@" + n.re.src_host_strict, "i")), n.re.mailto.test(r) ? r.match(n.re.mailto)[0].length : 0
                }
            }
        },
        l = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
        u = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

    function h() {
        return function(t, e) {
            e.normalize(t)
        }
    }

    function p(i) {
        var e = i.re = function(t) {
                var e = {};
                e.src_Any = c.Any.source, e.src_Cc = c.Cc.source, e.src_Z = c.Z.source, e.src_P = c.P.source, e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join("|"), e.src_ZCc = [e.src_Z, e.src_Cc].join("|");
                var n = "[><｜]";
                return e.src_pseudo_letter = "(?:(?![><｜]|" + e.src_ZPCc + ")" + e.src_Any + ")", e.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", e.src_auth = "(?:(?:(?!" + e.src_ZCc + "|[@/\\[\\]()]).)+@)?", e.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", e.src_host_terminator = "(?=$|[><｜]|" + e.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + e.src_ZPCc + "))", e.src_path = "(?:[/?#](?:(?!" + e.src_ZCc + "|" + n + "|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + e.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + e.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + e.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + e.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + e.src_ZCc + "|[']).)+\\'|\\'(?=" + e.src_pseudo_letter + "|[-]).|\\.{2,4}[a-zA-Z0-9%/]|\\.(?!" + e.src_ZCc + "|[.]).|" + (t && t["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + e.src_ZCc + ").|\\!(?!" + e.src_ZCc + "|[!]).|\\?(?!" + e.src_ZCc + "|[?]).)+|\\/)?", e.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', e.src_xn = "xn--[a-z0-9\\-]{1,59}", e.src_domain_root = "(?:" + e.src_xn + "|" + e.src_pseudo_letter + "{1,63})", e.src_domain = "(?:" + e.src_xn + "|(?:" + e.src_pseudo_letter + ")|(?:" + e.src_pseudo_letter + "(?:-|" + e.src_pseudo_letter + "){0,61}" + e.src_pseudo_letter + "))", e.src_host = "(?:(?:(?:(?:" + e.src_domain + ")\\.)*" + e.src_domain + "))", e.tpl_host_fuzzy = "(?:" + e.src_ip4 + "|(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%)))", e.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%))", e.src_host_strict = e.src_host + e.src_host_terminator, e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator, e.src_host_port_strict = e.src_host + e.src_port + e.src_host_terminator, e.tpl_host_port_fuzzy_strict = e.tpl_host_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_port_no_ip_fuzzy_strict = e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + e.src_ZPCc + "|>|$))", e.tpl_email_fuzzy = '(^|[><｜]|"|\\(|' + e.src_ZCc + ")(" + e.src_email_name + "@" + e.tpl_host_fuzzy_strict + ")", e.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_fuzzy_strict + e.src_path + ")", e.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_no_ip_fuzzy_strict + e.src_path + ")", e
            }(i.__opts__),
            t = i.__tlds__.slice();

        function n(t) {
            return t.replace("%TLDS%", e.src_tlds)
        }
        i.onCompile(), i.__tlds_replaced__ || t.push(l), t.push(e.src_xn), e.src_tlds = t.join("|"), e.email_fuzzy = RegExp(n(e.tpl_email_fuzzy), "i"), e.link_fuzzy = RegExp(n(e.tpl_link_fuzzy), "i"), e.link_no_ip_fuzzy = RegExp(n(e.tpl_link_no_ip_fuzzy), "i"), e.host_fuzzy_test = RegExp(n(e.tpl_host_fuzzy_test), "i");
        var o = [];

        function a(t, e) {
            throw new Error('(LinkifyIt) Invalid schema "' + t + '": ' + e)
        }
        i.__compiled__ = {}, Object.keys(i.__schemas__).forEach(function(t) {
            var e = i.__schemas__[t];
            if (null !== e) {
                var r, n = {
                    validate: null,
                    link: null
                };
                if (i.__compiled__[t] = n, Object(L.isObject)(e)) return e = e, Object(L.isRegExp)(e.validate) ? n.validate = (r = e.validate, function(t, e) {
                    var n = t.slice(e);
                    return r.test(n) ? n.match(r)[0].length : 0
                }) : Object(L.isFunction)(e.validate) ? n.validate = e.validate : a(t, e), void(Object(L.isFunction)(e.normalize) ? n.normalize = e.normalize : e.normalize ? a(t, e) : n.normalize = h());
                Object(L.isString)(e) ? o.push(t) : a(t, e)
            }
        }), o.forEach(function(t) {
            var e = i.__schemas__[t];
            e && Object(L.isString)(e) && i.__compiled__[e] && (i.__compiled__[t].validate = i.__compiled__[e].validate, i.__compiled__[t].normalize = i.__compiled__[e].normalize)
        }), i.__compiled__[""] = {
            validate: null,
            normalize: h()
        };
        var r, s = Object.keys(i.__compiled__).filter(function(t) {
            return 0 < t.length && i.__compiled__[t]
        }).map(L.escapeRE).join("|");
        i.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + s + ")", "i"), i.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + s + ")", "ig"), i.re.pretest = RegExp("(" + i.re.schema_test.source + ")|(" + i.re.host_fuzzy_test.source + ")|@", "i"), (r = i).__index__ = -1, r.__text_cache__ = ""
    }
    var f = function(t, e) {
        var n = t.__index__,
            r = t.__last_index__,
            i = t.__text_cache__.slice(n, r);
        this.schema = t.__schema__.toLowerCase(), this.index = n + e, this.lastIndex = r + e, this.raw = i, this.text = i, this.url = i
    };

    function d(t, e) {
        var n = new f(t, e);
        return t.__compiled__[n.schema].normalize(n, t), n
    }

    function v(t, e) {
        var n;
        e || (n = t, Object.keys(n || {}).reduce(function(t, e) {
            return t || a.hasOwnProperty(e)
        }, !1) && (e = t, t = {})), this.__opts__ = Object(L.assign)({}, a, e), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = Object(L.assign)({}, s, t), this.__compiled__ = {}, this.__tlds__ = u, this.__tlds_replaced__ = !1, this.re = {}, p(this)
    }
    var g = (v.prototype.add = function(t, e) {
            return this.__schemas__[t] = e, p(this), this
        }, v.prototype.set = function(t) {
            return this.__opts__ = Object(L.assign)(this.__opts__, t), this
        }, v.prototype.test = function(t) {
            if (this.__text_cache__ = t, this.__index__ = -1, !t.length) return !1;
            var e, n, r, i, o, a, s, c;
            if (this.re.schema_test.test(t))
                for ((s = this.re.schema_search).lastIndex = 0; null !== (e = s.exec(t));)
                    if (i = this.testSchemaAt(t, e[2], s.lastIndex)) {
                        this.__schema__ = e[2], this.__index__ = e.index + e[1].length, this.__last_index__ = e.index + e[0].length + i;
                        break
                    } return this.__opts__.fuzzyLink && this.__compiled__["http:"] && 0 <= (c = t.search(this.re.host_fuzzy_test)) && (this.__index__ < 0 || c < this.__index__) && null !== (n = t.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (o = n.index + n[1].length, (this.__index__ < 0 || o < this.__index__) && (this.__schema__ = "", this.__index__ = o, this.__last_index__ = n.index + n[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && 0 <= t.indexOf("@") && null !== (r = t.match(this.re.email_fuzzy)) && (o = r.index + r[1].length, a = r.index + r[0].length, (this.__index__ < 0 || o < this.__index__ || o === this.__index__ && a > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = o, this.__last_index__ = a)), 0 <= this.__index__
        }, v.prototype.pretest = function(t) {
            return this.re.pretest.test(t)
        }, v.prototype.testSchemaAt = function(t, e, n) {
            return this.__compiled__[e.toLowerCase()] ? this.__compiled__[e.toLowerCase()].validate(t, n, this) : 0
        }, v.prototype.match = function(t) {
            var e = 0,
                n = [];
            0 <= this.__index__ && this.__text_cache__ === t && (n.push(d(this, e)), e = this.__last_index__);
            for (var r = e ? t.slice(e) : t; this.test(r);) n.push(d(this, e)), r = r.slice(this.__last_index__), e += this.__last_index__;
            return n.length ? n : null
        }, v.prototype.tlds = function(t, e) {
            return t = Array.isArray(t) ? t : [t], e ? this.__tlds__ = this.__tlds__.concat(t).sort().filter(function(t, e, n) {
                return t !== n[e - 1]
            }).reverse() : (this.__tlds__ = t.slice(), this.__tlds_replaced__ = !0), p(this), this
        }, v.prototype.normalize = function(t) {
            t.schema || (t.url = "http://" + t.url), "mailto:" !== t.schema || /^mailto:/i.test(t.url) || (t.url = "mailto:" + t.url)
        }, v.prototype.onCompile = function() {}, v),
        m = n(4),
        y = (b.prototype.__find__ = function(t) {
            for (var e = 0; e < this.__rules__.length; e++)
                if (this.__rules__[e].name === t) return e;
            return -1
        }, b.prototype.__compile__ = function() {
            var n = this,
                e = [""];
            n.__rules__.forEach(function(t) {
                t.enabled && t.alt.forEach(function(t) {
                    e.indexOf(t) < 0 && e.push(t)
                })
            }), n.__cache__ = {}, e.forEach(function(e) {
                n.__cache__[e] = [], n.__rules__.forEach(function(t) {
                    t.enabled && (e && t.alt.indexOf(e) < 0 || n.__cache__[e].push(t.fn))
                })
            })
        }, b.prototype.at = function(t, e, n) {
            var r = this.__find__(t),
                i = n || {};
            if (-1 === r) throw new Error("Parser rule not found: " + t);
            this.__rules__[r].fn = e, this.__rules__[r].alt = i.alt || [], this.__cache__ = null
        }, b.prototype.before = function(t, e, n, r) {
            var i = this.__find__(t),
                o = r || {};
            if (-1 === i) throw new Error("Parser rule not found: " + t);
            this.__rules__.splice(i, 0, {
                name: e,
                enabled: !0,
                fn: n,
                alt: o.alt || []
            }), this.__cache__ = null
        }, b.prototype.after = function(t, e, n, r) {
            var i = this.__find__(t),
                o = r || {};
            if (-1 === i) throw new Error("Parser rule not found: " + t);
            this.__rules__.splice(i + 1, 0, {
                name: e,
                enabled: !0,
                fn: n,
                alt: o.alt || []
            }), this.__cache__ = null
        }, b.prototype.push = function(t, e, n) {
            var r = n || {};
            this.__rules__.push({
                name: t,
                enabled: !0,
                fn: e,
                alt: r.alt || []
            }), this.__cache__ = null
        }, b.prototype.enable = function(t, n) {
            Array.isArray(t) || (t = [t]);
            var r = [];
            return t.forEach(function(t) {
                var e = this.__find__(t);
                if (e < 0) {
                    if (n) return;
                    throw new Error("Rules manager: invalid rule name " + t)
                }
                this.__rules__[e].enabled = !0, r.push(t)
            }, this), this.__cache__ = null, r
        }, b.prototype.enableOnly = function(t, e) {
            Array.isArray(t) || (t = [t]), this.__rules__.forEach(function(t) {
                t.enabled = !1
            }), this.enable(t, e)
        }, b.prototype.disable = function(t, n) {
            Array.isArray(t) || (t = [t]);
            var r = [];
            return t.forEach(function(t) {
                var e = this.__find__(t);
                if (e < 0) {
                    if (n) return;
                    throw new Error("Rules manager: invalid rule name " + t)
                }
                this.__rules__[e].enabled = !1, r.push(t)
            }, this), this.__cache__ = null, r
        }, b.prototype.getRules = function(t) {
            return null === this.__cache__ && this.__compile__(), this.__cache__[t] || []
        }, b);

    function b() {
        this.__rules__ = [], this.__cache__ = null
    }
    var w = "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",
        k = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",
        E = new RegExp("^(?:" + w + "|" + k + "|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"),
        C = new RegExp("^(?:" + w + "|" + k + ")"),
        x = [
            [/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, !0],
            [/^<!--/, /-->/, !0],
            [/^<\?/, /\?>/, !0],
            [/^<![A-Z]/, />/, !0],
            [/^<!\[CDATA\[/, /\]\]>/, !0],
            [new RegExp("^</?(" + ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "meta", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "source", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"].join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
            [new RegExp(C.source + "\\s*$"), /^$/, !1]
        ];

    function F(t, e) {
        var n, r, i, o;
        return r = t.bMarks[e] + t.tShift[e], i = t.eMarks[e], 42 !== (n = t.src.charCodeAt(r++)) && 45 !== n && 43 !== n || r < i && (o = t.src.charCodeAt(r), !Object(L.isSpace)(o)) ? -1 : r
    }

    function z(t, e) {
        var n, r = t.bMarks[e] + t.tShift[e],
            i = r,
            o = t.eMarks[e];
        if (o <= i + 1) return -1;
        if ((n = t.src.charCodeAt(i++)) < 48 || 57 < n) return -1;
        for (;;) {
            if (o <= i) return -1;
            if (!(48 <= (n = t.src.charCodeAt(i++)) && n <= 57)) {
                if (41 === n || 46 === n) break;
                return -1
            }
            if (10 <= i - r) return -1
        }
        return i < o && (n = t.src.charCodeAt(i), !Object(L.isSpace)(n)) ? -1 : i
    }
    var _ = (S.prototype.attrIndex = function(t) {
        var e, n, r;
        if (!this.attrs) return -1;
        for (n = 0, r = (e = this.attrs).length; n < r; n++)
            if (e[n][0] === t) return n;
        return -1
    }, S.prototype.attrPush = function(t) {
        this.attrs ? this.attrs.push(t) : this.attrs = [t]
    }, S.prototype.attrSet = function(t, e) {
        var n = this.attrIndex(t),
            r = [t, e];
        n < 0 ? this.attrPush(r) : this.attrs[n] = r
    }, S.prototype.attrGet = function(t) {
        var e = this.attrIndex(t),
            n = null;
        return 0 <= e && (n = this.attrs[e][1]), n
    }, S.prototype.attrJoin = function(t, e) {
        var n = this.attrIndex(t);
        n < 0 ? this.attrPush([t, e]) : this.attrs[n][1] = this.attrs[n][1] + " " + e
    }, S);

    function S(t, e, n) {
        this.type = t, this.tag = e, this.attrs = null, this.map = null, this.nesting = n, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1
    }

    function M(t, e, n) {
        this.Token = _, this.src = t, this.env = n, this.tokens = [], this.inlineMode = !1, this.md = e
    }
    var A, T, O = ((A = function(t, e) {
        return (A = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            })(t, e)
    }, function(t, e) {
        function n() {
            this.constructor = t
        }
        A(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    })(D, T = M), D.prototype.push = function(t, e, n) {
        var r = new _(t, e, n);
        return r.block = !0, n < 0 && this.level--, r.level = this.level, 0 < n && this.level++, this.tokens.push(r), r
    }, D.prototype.isEmpty = function(t) {
        return this.bMarks[t] + this.tShift[t] >= this.eMarks[t]
    }, D.prototype.skipEmptyLines = function(t) {
        for (var e = this.lineMax; t < e && !(this.bMarks[t] + this.tShift[t] < this.eMarks[t]); t++);
        return t
    }, D.prototype.skipSpaces = function(t) {
        for (var e, n = this.src.length; t < n && (e = this.src.charCodeAt(t), Object(L.isSpace)(e)); t++);
        return t
    }, D.prototype.skipSpacesBack = function(t, e) {
        if (t <= e) return t;
        for (; e < t;)
            if (!Object(L.isSpace)(this.src.charCodeAt(--t))) return t + 1;
        return t
    }, D.prototype.skipChars = function(t, e) {
        for (var n = this.src.length; t < n && this.src.charCodeAt(t) === e; t++);
        return t
    }, D.prototype.skipCharsBack = function(t, e, n) {
        if (t <= n) return t;
        for (; n < t;)
            if (e !== this.src.charCodeAt(--t)) return t + 1;
        return t
    }, D.prototype.getLines = function(t, e, n, r) {
        var i, o, a, s, c, l, u, h = t;
        if (e <= t) return "";
        for (l = new Array(e - t), i = 0; h < e; h++, i++) {
            for (o = 0, u = s = this.bMarks[h], c = h + 1 < e || r ? this.eMarks[h] + 1 : this.eMarks[h]; s < c && o < n;) {
                if (a = this.src.charCodeAt(s), Object(L.isSpace)(a)) 9 === a ? o += 4 - (o + this.bsCount[h]) % 4 : o++;
                else {
                    if (!(s - u < this.tShift[h])) break;
                    o++
                }
                s++
            }
            l[i] = n < o ? new Array(o - n + 1).join(" ") + this.src.slice(s, c) : this.src.slice(s, c)
        }
        return l.join("")
    }, D);

    function D(t, e, n, r) {
        var i, o, a, s, c, l, u, h, p = T.call(this, t, e, n) || this;
        for (p.Token = _, p.tokens = r, p.bMarks = [], p.eMarks = [], p.tShift = [], p.sCount = [], p.bsCount = [], p.blkIndent = 0, p.line = 0, p.lineMax = 0, p.tight = !1, p.ddIndent = -1, p.listIndent = -1, p.parentType = "root", p.level = 0, p.result = "", h = !1, a = s = l = u = 0, c = (o = p.src).length; s < c; s++) {
            if (i = o.charCodeAt(s), !h) {
                if (Object(L.isSpace)(i)) {
                    l++, 9 === i ? u += 4 - u % 4 : u++;
                    continue
                }
                h = !0
            }
            10 !== i && s !== c - 1 || (10 !== i && s++, p.bMarks.push(a), p.eMarks.push(s), p.tShift.push(l), p.sCount.push(u), p.bsCount.push(0), h = !1, u = l = 0, a = s + 1)
        }
        return p.bMarks.push(o.length), p.eMarks.push(o.length), p.tShift.push(0), p.sCount.push(0), p.bsCount.push(0), p.lineMax = p.bMarks.length - 1, p
    }

    function P(t, e) {
        var n = t.bMarks[e] + t.blkIndent,
            r = t.eMarks[e];
        return t.src.substr(n, r - n)
    }

    function I(t) {
        var e, n = [],
            r = 0,
            i = t.length,
            o = 0,
            a = 0,
            s = !1,
            c = 0;
        for (e = t.charCodeAt(r); r < i;) 96 === e ? s ? (s = !1, c = r) : o % 2 == 0 && (s = !0, c = r) : 124 !== e || o % 2 != 0 || s || (n.push(t.substring(a, r)), a = r + 1), 92 === e ? o++ : o = 0, ++r === i && s && (s = !1, r = c + 1), e = t.charCodeAt(r);
        return n.push(t.substring(a)), n
    }
    var R = [
            ["table", function(t, e, n, r) {
                    var i, o, a, s, c, l, u, h, p, f, d, v;
                    if (n < e + 2) return !1;
                    if (c = e + 1, t.sCount[c] < t.blkIndent) return !1;
                    if (4 <= t.sCount[c] - t.blkIndent) return !1;
                    if ((a = t.bMarks[c] + t.tShift[c]) >= t.eMarks[c]) return !1;
                    if (124 !== (i = t.src.charCodeAt(a++)) && 45 !== i && 58 !== i) return !1;
                    for (; a < t.eMarks[c];) {
                        if (124 !== (i = t.src.charCodeAt(a)) && 45 !== i && 58 !== i && !Object(L.isSpace)(i)) return !1;
                        a++
                    }
                    for (l = (o = P(t, e + 1)).split("|"), p = [], s = 0; s < l.length; s++) {
                        if (!(f = l[s].trim())) {
                            if (0 === s || s === l.length - 1) continue;
                            return !1
                        }
                        if (!/^:?-+:?$/.test(f)) return !1;
                        58 === f.charCodeAt(f.length - 1) ? p.push(58 === f.charCodeAt(0) ? "center" : "right") : 58 === f.charCodeAt(0) ? p.push("left") : p.push("")
                    }
                    if (-1 === (o = P(t, e).trim()).indexOf("|")) return !1;
                    if (4 <= t.sCount[e] - t.blkIndent) return !1;
                    if ((u = (l = I(o.replace(/^\||\|$/g, ""))).length) > p.length) return !1;
                    if (r) return !0;
                    for ((h = t.push("table_open", "table", 1)).map = d = [e, 0], (h = t.push("thead_open", "thead", 1)).map = [e, e + 1], (h = t.push("tr_open", "tr", 1)).map = [e, e + 1], s = 0; s < l.length; s++)(h = t.push("th_open", "th", 1)).map = [e, e + 1], p[s] && (h.attrs = [
                        ["style", "text-align:" + p[s]]
                    ]), (h = t.push("inline", "", 0)).content = l[s].trim(), h.map = [e, e + 1], h.children = [], h = t.push("th_close", "th", -1);
                    for (h = t.push("tr_close", "tr", -1), h = t.push("thead_close", "thead", -1), (h = t.push("tbody_open", "tbody", 1)).map = v = [e + 2, 0], c = e + 2; c < n && !(t.sCount[c] < t.blkIndent) && -1 !== (o = P(t, c).trim()).indexOf("|") && !(4 <= t.sCount[c] - t.blkIndent); c++) {
                        for (l = I(o.replace(/^\||\|$/g, "")), h = t.push("tr_open", "tr", 1), s = 0; s < u; s++) h = t.push("td_open", "td", 1), p[s] && (h.attrs = [
                            ["align", p[s]]
                        ]), (h = t.push("inline", "", 0)).content = l[s] ? l[s].trim() : "", h.children = [], h = t.push("td_close", "td", -1);
                        h = t.push("tr_close", "tr", -1)
                    }
                    return h = t.push("tbody_close", "tbody", -1), h = t.push("table_close", "table", -1), d[1] = v[1] = c, t.line = c, !0
                },
                ["paragraph", "reference"]
            ],
            ["code", function(t, e, n) {
                var r, i, o;
                if (t.sCount[e] - t.blkIndent < 4) return !1;
                for (i = r = e + 1; r < n;)
                    if (t.isEmpty(r)) r++;
                    else {
                        if (!(4 <= t.sCount[r] - t.blkIndent)) break;
                        i = ++r
                    } return t.line = i, (o = t.push("code_block", "code", 0)).content = t.getLines(e, i, 4 + t.blkIndent, !0), o.map = [e, t.line], !0
            }],
            ["fence", function(t, e, n, r) {
                    var i, o, a, s, c, l, u, h = !1,
                        p = t.bMarks[e] + t.tShift[e],
                        f = t.eMarks[e];
                    if (4 <= t.sCount[e] - t.blkIndent) return !1;
                    if (f < p + 3) return !1;
                    if (126 !== (i = t.src.charCodeAt(p)) && 96 !== i) return !1;
                    if (c = p, (o = (p = t.skipChars(p, i)) - c) < 3) return !1;
                    if (u = t.src.slice(c, p), a = t.src.slice(p, f), 96 === i && 0 <= a.indexOf(String.fromCharCode(i))) return !1;
                    if (r) return !0;
                    for (s = e; !(n <= ++s) && !((p = c = t.bMarks[s] + t.tShift[s]) < (f = t.eMarks[s]) && t.sCount[s] < t.blkIndent);)
                        if (t.src.charCodeAt(p) === i && !(4 <= t.sCount[s] - t.blkIndent || (p = t.skipChars(p, i)) - c < o || (p = t.skipSpaces(p)) < f)) {
                            h = !0;
                            break
                        } return o = t.sCount[e], t.line = s + (h ? 1 : 0), (l = t.push("fence", "code", 0)).info = a, l.content = t.getLines(e + 1, s, o, !0), l.markup = u, l.map = [e, t.line], !0
                },
                ["paragraph", "reference", "blockquote", "list"]
            ],
            ["blockquote", function(t, e, n, r) {
                    var i, o, a, s, c, l, u, h, p, f, d, v, g, m, y, b, w, k, E, C, x = t.lineMax,
                        _ = t.bMarks[e] + t.tShift[e],
                        S = t.eMarks[e];
                    if (4 <= t.sCount[e] - t.blkIndent) return !1;
                    if (62 !== t.src.charCodeAt(_++)) return !1;
                    if (r) return !0;
                    for (s = p = t.sCount[e] + _ - (t.bMarks[e] + t.tShift[e]), 32 === t.src.charCodeAt(_) ? (_++, s++, p++, b = !(i = !1)) : 9 === t.src.charCodeAt(_) ? (b = !0, i = (t.bsCount[e] + p) % 4 != 3 || (_++, s++, p++, !1)) : b = !1, f = [t.bMarks[e]], t.bMarks[e] = _; _ < S && (o = t.src.charCodeAt(_), Object(L.isSpace)(o));) 9 === o ? p += 4 - (p + t.bsCount[e] + (i ? 1 : 0)) % 4 : p++, _++;
                    for (d = [t.bsCount[e]], t.bsCount[e] = t.sCount[e] + 1 + (b ? 1 : 0), l = S <= _, m = [t.sCount[e]], t.sCount[e] = p - s, y = [t.tShift[e]], t.tShift[e] = _ - t.bMarks[e], k = t.md.block.ruler.getRules("blockquote"), g = t.parentType, C = !(t.parentType = "blockquote"), h = e + 1; h < n && (t.sCount[h] < t.blkIndent && (C = !0), _ = t.bMarks[h] + t.tShift[h], !((S = t.eMarks[h]) <= _)); h++)
                        if (62 !== t.src.charCodeAt(_++) || C) {
                            if (l) break;
                            for (w = !1, a = 0, c = k.length; a < c; a++)
                                if (k[a](t, h, n, !0)) {
                                    w = !0;
                                    break
                                } if (w) {
                                t.lineMax = h, 0 !== t.blkIndent && (f.push(t.bMarks[h]), d.push(t.bsCount[h]), y.push(t.tShift[h]), m.push(t.sCount[h]), t.sCount[h] -= t.blkIndent);
                                break
                            }
                            f.push(t.bMarks[h]), d.push(t.bsCount[h]), y.push(t.tShift[h]), m.push(t.sCount[h]), t.sCount[h] = -1
                        } else {
                            for (s = p = t.sCount[h] + _ - (t.bMarks[h] + t.tShift[h]), 32 === t.src.charCodeAt(_) ? (_++, s++, p++, b = !(i = !1)) : 9 === t.src.charCodeAt(_) ? (b = !0, i = (t.bsCount[h] + p) % 4 != 3 || (_++, s++, p++, !1)) : b = !1, f.push(t.bMarks[h]), t.bMarks[h] = _; _ < S && (o = t.src.charCodeAt(_), Object(L.isSpace)(o));) 9 === o ? p += 4 - (p + t.bsCount[h] + (i ? 1 : 0)) % 4 : p++, _++;
                            l = S <= _, d.push(t.bsCount[h]), t.bsCount[h] = t.sCount[h] + 1 + (b ? 1 : 0), m.push(t.sCount[h]), t.sCount[h] = p - s, y.push(t.tShift[h]), t.tShift[h] = _ - t.bMarks[h]
                        } for (v = t.blkIndent, t.blkIndent = 0, (E = t.push("blockquote_open", "blockquote", 1)).markup = ">", E.map = u = [e, 0], t.md.block.tokenize(t, e, h), (E = t.push("blockquote_close", "blockquote", -1)).markup = ">", t.lineMax = x, t.parentType = g, u[1] = t.line, a = 0; a < y.length; a++) t.bMarks[a + e] = f[a], t.tShift[a + e] = y[a], t.sCount[a + e] = m[a], t.bsCount[a + e] = d[a];
                    return t.blkIndent = v, !0
                },
                ["paragraph", "reference", "blockquote", "list"]
            ],
            ["hr", function(t, e, n, r) {
                    var i, o, a, s, c = t.bMarks[e] + t.tShift[e],
                        l = t.eMarks[e];
                    if (4 <= t.sCount[e] - t.blkIndent) return !1;
                    if (42 !== (i = t.src.charCodeAt(c++)) && 45 !== i && 95 !== i) return !1;
                    for (o = 1; c < l;) {
                        if ((a = t.src.charCodeAt(c++)) !== i && !Object(L.isSpace)(a)) return !1;
                        a === i && o++
                    }
                    return !(o < 3) && (r || (t.line = e + 1, (s = t.push("hr", "hr", 0)).map = [e, t.line], s.markup = Array(o + 1).join(String.fromCharCode(i))), !0)
                },
                ["paragraph", "reference", "blockquote", "list"]
            ],
            ["list", function(t, e, n, r) {
                    var i, o, a, s, c, l, u, h, p, f, d, v, g, m, y, b, w, k, E, C, x, _, S, L, M, A, T, O, D = !1,
                        P = !0;
                    if (4 <= t.sCount[e] - t.blkIndent) return !1;
                    if (0 <= t.listIndent && 4 <= t.sCount[e] - t.listIndent && t.sCount[e] < t.blkIndent) return !1;
                    if (r && "paragraph" === t.parentType && t.tShift[e] >= t.blkIndent && (D = !0), 0 <= (S = z(t, e))) {
                        if (u = !0, M = t.bMarks[e] + t.tShift[e], g = Number(t.src.substr(M, S - M - 1)), D && 1 !== g) return !1
                    } else {
                        if (!(0 <= (S = F(t, e)))) return !1;
                        u = !1
                    }
                    if (D && t.skipSpaces(S) >= t.eMarks[e]) return !1;
                    if (v = t.src.charCodeAt(S - 1), r) return !0;
                    for (d = t.tokens.length, u ? (O = t.push("ordered_list_open", "ol", 1), 1 !== g && (O.attrs = [
                            ["start", String(g)]
                        ])) : O = t.push("bullet_list_open", "ul", 1), O.map = f = [e, 0], O.markup = String.fromCharCode(v), y = e, L = !1, T = t.md.block.ruler.getRules("list"), k = t.parentType, t.parentType = "list"; y < n;) {
                        for (_ = S, m = t.eMarks[y], l = b = t.sCount[y] + S - (t.bMarks[e] + t.tShift[e]); _ < m;) {
                            if (9 === (i = t.src.charCodeAt(_))) b += 4 - (b + t.bsCount[y]) % 4;
                            else {
                                if (32 !== i) break;
                                b++
                            }
                            _++
                        }
                        if (4 < (c = m <= (o = _) ? 1 : b - l) && (c = 1), s = l + c, (O = t.push("list_item_open", "li", 1)).markup = String.fromCharCode(v), O.map = h = [e, 0], x = t.tight, C = t.tShift[e], E = t.sCount[e], w = t.listIndent, t.listIndent = t.blkIndent, t.blkIndent = s, t.tight = !0, t.tShift[e] = o - t.bMarks[e], t.sCount[e] = b, m <= o && t.isEmpty(e + 1) ? t.line = Math.min(t.line + 2, n) : t.md.block.tokenize(t, e, n), t.tight && !L || (P = !1), L = 1 < t.line - e && t.isEmpty(t.line - 1), t.blkIndent = t.listIndent, t.listIndent = w, t.tShift[e] = C, t.sCount[e] = E, t.tight = x, (O = t.push("list_item_close", "li", -1)).markup = String.fromCharCode(v), y = e = t.line, h[1] = y, o = t.bMarks[e], n <= y) break;
                        if (t.sCount[y] < t.blkIndent) break;
                        if (4 <= t.sCount[e] - t.blkIndent) break;
                        for (A = !1, a = 0, p = T.length; a < p; a++)
                            if (T[a](t, y, n, !0)) {
                                A = !0;
                                break
                            } if (A) break;
                        if (u) {
                            if ((S = z(t, y)) < 0) break
                        } else if ((S = F(t, y)) < 0) break;
                        if (v !== t.src.charCodeAt(S - 1)) break
                    }
                    return (O = u ? t.push("ordered_list_close", "ol", -1) : t.push("bullet_list_close", "ul", -1)).markup = String.fromCharCode(v), f[1] = y, t.line = y, t.parentType = k, P && function(t, e) {
                        var n, r, i = t.level + 2;
                        for (n = e + 2, r = t.tokens.length - 2; n < r; n++) t.tokens[n].level === i && "paragraph_open" === t.tokens[n].type && (t.tokens[n + 2].hidden = !0, t.tokens[n].hidden = !0, n += 2)
                    }(t, d), !0
                },
                ["paragraph", "reference", "blockquote"]
            ],
            ["reference", function(t, e, n, r) {
                var i, o, a, s, c, l, u, h, p, f, d, v, g, m, y, b, w = 0,
                    k = t.bMarks[e] + t.tShift[e],
                    E = t.eMarks[e],
                    C = e + 1;
                if (4 <= t.sCount[e] - t.blkIndent) return !1;
                if (91 !== t.src.charCodeAt(k)) return !1;
                for (; ++k < E;)
                    if (93 === t.src.charCodeAt(k) && 92 !== t.src.charCodeAt(k - 1)) {
                        if (k + 1 === E) return !1;
                        if (58 !== t.src.charCodeAt(k + 1)) return !1;
                        break
                    } for (s = t.lineMax, y = t.md.block.ruler.getRules("reference"), f = t.parentType, t.parentType = "reference"; C < s && !t.isEmpty(C); C++)
                    if (!(3 < t.sCount[C] - t.blkIndent || t.sCount[C] < 0)) {
                        for (m = !1, l = 0, u = y.length; l < u; l++)
                            if (y[l](t, C, s, !0)) {
                                m = !0;
                                break
                            } if (m) break
                    } for (E = (g = t.getLines(e, C, t.blkIndent, !1).trim()).length, k = 1; k < E; k++) {
                    if (91 === (i = g.charCodeAt(k))) return !1;
                    if (93 === i) {
                        p = k;
                        break
                    }(10 === i || 92 === i && ++k < E && 10 === g.charCodeAt(k)) && w++
                }
                if (p < 0 || 58 !== g.charCodeAt(p + 1)) return !1;
                for (k = p + 2; k < E; k++)
                    if (10 === (i = g.charCodeAt(k))) w++;
                    else if (!Object(L.isSpace)(i)) break;
                if (!(d = t.md.helpers.parseLinkDestination(g, k, E)).ok) return !1;
                if (c = t.md.normalizeLink(d.str), !t.md.validateLink(c)) return !1;
                for (k = d.pos, a = w += d.lines, v = o = k; k < E; k++)
                    if (10 === (i = g.charCodeAt(k))) w++;
                    else if (!Object(L.isSpace)(i)) break;
                for (d = t.md.helpers.parseLinkTitle(g, k, E), k < E && v !== k && d.ok ? (b = d.str, k = d.pos, w += d.lines) : (b = "", k = o, w = a); k < E && (i = g.charCodeAt(k), Object(L.isSpace)(i));) k++;
                if (k < E && 10 !== g.charCodeAt(k) && b)
                    for (b = "", k = o, w = a; k < E && (i = g.charCodeAt(k), Object(L.isSpace)(i));) k++;
                return !(k < E && 10 !== g.charCodeAt(k)) && (!!(h = Object(L.normalizeReference)(g.slice(1, p))) && (r || (void 0 === t.env.references && (t.env.references = {}), void 0 === t.env.references[h] && (t.env.references[h] = {
                    title: b,
                    href: c
                }), t.parentType = f, t.line = e + w + 1), !0))
            }],
            ["heading", function(t, e, n, r) {
                    var i, o, a, s, c = t.bMarks[e] + t.tShift[e],
                        l = t.eMarks[e];
                    if (4 <= t.sCount[e] - t.blkIndent) return !1;
                    if (35 !== (i = t.src.charCodeAt(c)) || l <= c) return !1;
                    for (o = 1, i = t.src.charCodeAt(++c); 35 === i && c < l && o <= 6;) o++, i = t.src.charCodeAt(++c);
                    return !(6 < o || c < l && !Object(L.isSpace)(i)) && (r || (l = t.skipSpacesBack(l, c), c < (a = t.skipCharsBack(l, 35, c)) && Object(L.isSpace)(t.src.charCodeAt(a - 1)) && (l = a), t.line = e + 1, (s = t.push("heading_open", "h" + String(o), 1)).markup = "########".slice(0, o), s.map = [e, t.line], (s = t.push("inline", "", 0)).content = t.src.slice(c, l).trim(), s.map = [e, t.line], s.children = [], (s = t.push("heading_close", "h" + String(o), -1)).markup = "########".slice(0, o)), !0)
                },
                ["paragraph", "reference", "blockquote"]
            ],
            ["lheading", function(t, e, n) {
                var r, i, o, a, s, c, l, u, h, p, f = e + 1,
                    d = t.md.block.ruler.getRules("paragraph");
                if (4 <= t.sCount[e] - t.blkIndent) return !1;
                for (p = t.parentType, t.parentType = "paragraph"; f < n && !t.isEmpty(f); f++)
                    if (!(3 < t.sCount[f] - t.blkIndent)) {
                        if (t.sCount[f] >= t.blkIndent && (c = t.bMarks[f] + t.tShift[f]) < (l = t.eMarks[f]) && (45 === (h = t.src.charCodeAt(c)) || 61 === h) && (c = t.skipChars(c, h), l <= (c = t.skipSpaces(c)))) {
                            u = 61 === h ? 1 : 2;
                            break
                        }
                        if (!(t.sCount[f] < 0)) {
                            for (i = !1, o = 0, a = d.length; o < a; o++)
                                if (d[o](t, f, n, !0)) {
                                    i = !0;
                                    break
                                } if (i) break
                        }
                    } return !!u && (r = t.getLines(e, f, t.blkIndent, !1).trim(), t.line = f + 1, (s = t.push("heading_open", "h" + String(u), 1)).markup = String.fromCharCode(h), s.map = [e, t.line], (s = t.push("inline", "", 0)).content = r, s.map = [e, t.line - 1], s.children = [], (s = t.push("heading_close", "h" + String(u), -1)).markup = String.fromCharCode(h), t.parentType = p, !0)
            }],
            ["html_block", function(t, e, n, r) {
                    var i, o, a, s, c = t.bMarks[e] + t.tShift[e],
                        l = t.eMarks[e];
                    if (4 <= t.sCount[e] - t.blkIndent) return !1;
                    if (!t.md.options.html) return !1;
                    if (60 !== t.src.charCodeAt(c)) return !1;
                    for (s = t.src.slice(c, l), i = 0; i < x.length && !x[i][0].test(s); i++);
                    if (i === x.length) return !1;
                    if (r) return x[i][2];
                    if (o = e + 1, !x[i][1].test(s))
                        for (; o < n && !(t.sCount[o] < t.blkIndent); o++)
                            if (c = t.bMarks[o] + t.tShift[o], l = t.eMarks[o], s = t.src.slice(c, l), x[i][1].test(s)) {
                                0 !== s.length && o++;
                                break
                            } return t.line = o, (a = t.push("html_block", "", 0)).map = [e, o], a.content = t.getLines(e, o, t.blkIndent, !0), !0
                },
                ["paragraph", "reference", "blockquote"]
            ],
            ["paragraph", function(t, e) {
                var n, r, i, o, a, s, c = e + 1,
                    l = t.md.block.ruler.getRules("paragraph"),
                    u = t.lineMax;
                for (s = t.parentType, t.parentType = "paragraph"; c < u && !t.isEmpty(c); c++)
                    if (!(3 < t.sCount[c] - t.blkIndent || t.sCount[c] < 0)) {
                        for (r = !1, i = 0, o = l.length; i < o; i++)
                            if (l[i](t, c, u, !0)) {
                                r = !0;
                                break
                            } if (r) break
                    } return n = t.getLines(e, c, t.blkIndent, !1).trim(), t.line = c, (a = t.push("paragraph_open", "p", 1)).map = [e, t.line], (a = t.push("inline", "", 0)).content = n, a.map = [e, t.line], a.children = [], a = t.push("paragraph_close", "p", -1), t.parentType = s, !0
            }]
        ],
        H = (N.prototype.tokenize = function(t, e, n) {
            for (var r, i = this.ruler.getRules(""), o = i.length, a = e, s = !1, c = t.md.options.maxNesting; a < n && (t.line = a = t.skipEmptyLines(a), !(n <= a)) && !(t.sCount[a] < t.blkIndent);) {
                if (t.level >= c) {
                    t.line = n;
                    break
                }
                for (r = 0; r < o && !i[r](t, a, n, !1); r++);
                t.tight = !s, t.isEmpty(t.line - 1) && (s = !0), (a = t.line) < n && t.isEmpty(a) && (s = !0, a++, t.line = a)
            }
        }, N.prototype.parse = function(t, e, n, r) {
            var i;
            t && (i = new this.State(t, e, n, r), this.tokenize(i, i.line, i.lineMax))
        }, N);

    function N() {
        this.State = O, this.ruler = new y;
        for (var t = 0; t < R.length; t++) this.ruler.push(R[t][0], R[t][1], {
            alt: (R[t][2] || []).slice()
        })
    }
    var q = /\r\n?|\n/g,
        B = /\0/g;
    var j = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
        V = /\((c|tm|r|p)\)/i,
        G = /\((c|tm|r|p)\)/gi,
        U = {
            c: "©",
            r: "®",
            p: "§",
            tm: "™"
        };

    function W(t, e) {
        return U[e.toLowerCase()]
    }

    function K(t) {
        var e, n, r = 0;
        for (e = t.length - 1; 0 <= e; e--) "text" !== (n = t[e]).type || r || (n.content = n.content.replace(G, W)), "link_open" === n.type && "auto" === n.info && r--, "link_close" === n.type && "auto" === n.info && r++
    }

    function $(t) {
        var e, n, r = 0;
        for (e = t.length - 1; 0 <= e; e--) "text" !== (n = t[e]).type || r || j.test(n.content) && (n.content = n.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/gm, "$1—$2").replace(/(^|\s)--(\s|$)/gm, "$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/gm, "$1–$2")), "link_open" === n.type && "auto" === n.info && r--, "link_close" === n.type && "auto" === n.info && r++
    }
    var Z = /['"]/,
        Y = /['"]/g,
        J = "’";

    function X(t, e, n) {
        return t.substr(0, e) + n + t.substr(e + 1)
    }

    function Q(t, e) {
        var n, r, i, o, a, s, c, l, u, h, p, f, d, v, g, m, y, b, w, k, E;
        for (w = [], n = 0; n < t.length; n++) {
            for (r = t[n], c = t[n].level, y = w.length - 1; 0 <= y && !(w[y].level <= c); y--);
            if (w.length = y + 1, "text" === r.type) {
                a = 0, s = (i = r.content).length;
                t: for (; a < s && (Y.lastIndex = a, o = Y.exec(i));) {
                    if (g = m = !0, a = o.index + 1, b = "'" === o[0], u = 32, 0 <= o.index - 1) u = i.charCodeAt(o.index - 1);
                    else
                        for (y = n - 1; 0 <= y && ("softbreak" !== t[y].type && "hardbreak" !== t[y].type); y--)
                            if ("text" === t[y].type) {
                                u = t[y].content.charCodeAt(t[y].content.length - 1);
                                break
                            } if (h = 32, a < s) h = i.charCodeAt(a);
                    else
                        for (y = n + 1; y < t.length && ("softbreak" !== t[y].type && "hardbreak" !== t[y].type); y++)
                            if ("text" === t[y].type) {
                                h = t[y].content.charCodeAt(0);
                                break
                            } if (p = Object(L.isMdAsciiPunct)(u) || Object(L.isPunctChar)(String.fromCharCode(u)), f = Object(L.isMdAsciiPunct)(h) || Object(L.isPunctChar)(String.fromCharCode(h)), d = Object(L.isWhiteSpace)(u), (v = Object(L.isWhiteSpace)(h)) ? g = !1 : f && (d || p || (g = !1)), d ? m = !1 : p && (v || f || (m = !1)), 34 === h && '"' === o[0] && 48 <= u && u <= 57 && (m = g = !1), g && m && (g = !1, m = f), g || m) {
                        if (m)
                            for (y = w.length - 1; 0 <= y && (l = w[y], !(w[y].level < c)); y--)
                                if (l.single === b && w[y].level === c) {
                                    l = w[y], E = b ? (k = e.md.options.quotes[2], e.md.options.quotes[3]) : (k = e.md.options.quotes[0], e.md.options.quotes[1]), r.content = X(r.content, o.index, E), t[l.token].content = X(t[l.token].content, l.pos, k), a += E.length - 1, l.token === n && (a += k.length - 1), s = (i = r.content).length, w.length = y;
                                    continue t
                                } g ? w.push({
                            token: n,
                            pos: o.index,
                            single: b,
                            level: c
                        }) : m && b && (r.content = X(r.content, o.index, J))
                    } else b && (r.content = X(r.content, o.index, J))
                }
            }
        }
    }
    var tt = [
            ["normalize", function(t) {
                var e;
                e = (e = t.src.replace(q, "\n")).replace(B, "�"), t.src = e
            }],
            ["block", function(t) {
                var e;
                t.inlineMode ? ((e = new t.Token("inline", "", 0)).content = t.src, e.map = [0, 1], e.children = [], t.tokens.push(e)) : t.md.block.parse(t.src, t.md, t.env, t.tokens)
            }],
            ["inline", function(t) {
                var e, n, r, i = t.tokens;
                for (n = 0, r = i.length; n < r; n++) "inline" === (e = i[n]).type && t.md.inline.parse(e.content, t.md, t.env, e.children)
            }],
            ["linkify", function(t) {
                var e, n, r, i, o, a, s, c, l, u, h, p, f, d, v, g, m, y, b, w = t.tokens;
                if (t.md.options.linkify)
                    for (n = 0, r = w.length; n < r; n++)
                        if ("inline" === w[n].type && t.md.linkify.pretest(w[n].content))
                            for (f = 0, e = (i = w[n].children).length - 1; 0 <= e; e--)
                                if ("link_close" !== (a = i[e]).type)
                                    if ("ilink_close" !== a.type)
                                        if ("iembed_close" !== a.type) {
                                            if ("html_inline" === a.type && (b = a.content, /^<a[>\s]/i.test(b) && 0 < f && f--, y = a.content, /^<\/a\s*>/i.test(y) && f++), !(0 < f) && "text" === a.type && t.md.linkify.test(a.content)) {
                                                for (l = a.content, m = t.md.linkify.match(l), s = [], p = a.level, c = h = 0; c < m.length; c++) d = m[c].url, v = t.md.normalizeLink(d), t.md.validateLink(v) && (g = m[c].text, g = m[c].schema ? "mailto:" !== m[c].schema || /^mailto:/i.test(g) ? t.md.normalizeLinkText(g) : t.md.normalizeLinkText("mailto:" + g).replace(/^mailto:/, "") : t.md.normalizeLinkText("http://" + g).replace(/^http:\/\//, ""), h < (u = m[c].index) && ((o = new t.Token("text", "", 0)).content = l.slice(h, u), o.level = p, s.push(o)), (o = new t.Token("link_open", "a", 1)).attrs = [
                                                    ["href", v]
                                                ], o.level = p++, o.markup = "linkify", o.info = "auto", o.attrJoin("class", "external-link"), o.attrJoin("target", "_blank"), s.push(o), (o = new t.Token("text", "", 0)).content = g, o.level = p, s.push(o), (o = new t.Token("link_close", "a", -1)).level = --p, o.markup = "linkify", o.info = "auto", s.push(o), h = m[c].lastIndex);
                                                h < l.length && ((o = new t.Token("text", "", 0)).content = l.slice(h), o.level = p, s.push(o)), w[n].children = i = Object(L.arrayReplaceAt)(i, e, s)
                                            }
                                        } else
                                            for (e--; i[e].level !== a.level && "iembed_open" !== i[e].type;) e--;
                else
                    for (e--; i[e].level !== a.level && "ilink_open" !== i[e].type;) e--;
                else
                    for (e--; i[e].level !== a.level && "link_open" !== i[e].type;) e--
            }],
            ["replacements", function(t) {
                var e;
                if (t.md.options.typographer)
                    for (e = t.tokens.length - 1; 0 <= e; e--) "inline" === t.tokens[e].type && (V.test(t.tokens[e].content) && K(t.tokens[e].children), j.test(t.tokens[e].content) && $(t.tokens[e].children))
            }],
            ["smartquotes", function(t) {
                var e;
                if (t.md.options.typographer)
                    for (e = t.tokens.length - 1; 0 <= e; e--) "inline" === t.tokens[e].type && Z.test(t.tokens[e].content) && Q(t.tokens[e].children, t)
            }]
        ],
        et = (nt.prototype.process = function(t) {
            var e, n, r;
            for (e = 0, n = (r = this.ruler.getRules("")).length; e < n; e++) r[e](t)
        }, nt);

    function nt() {
        this.State = M, this.ruler = new y;
        for (var t = 0; t < tt.length; t++) this.ruler.push(tt[t][0], tt[t][1])
    }
    var rt = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,
        it = /^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;

    function ot(t, e) {
        var n, r, i, o, a, s, c, l, u = {},
            h = e.length;
        for (n = 0; n < h; n++)
            if ((i = e[n]).length = i.length || 0, i.close) {
                for (u.hasOwnProperty(i.marker) || (u[i.marker] = [-1, -1, -1]), a = u[i.marker][i.length % 3], s = -1, r = n - i.jump - 1; a < r; r -= o.jump + 1)
                    if ((o = e[r]).marker === i.marker && (-1 === s && (s = r), o.open && o.end < 0 && o.level === i.level && (c = !1, (o.close || i.open) && (o.length + i.length) % 3 == 0 && (o.length % 3 == 0 && i.length % 3 == 0 || (c = !0)), !c))) {
                        l = 0 < r && !e[r - 1].open ? e[r - 1].jump + 1 : 0, i.jump = n - r + l, i.open = !1, o.end = n, o.jump = l, o.close = !1, s = -1;
                        break
                    } - 1 !== s && (u[i.marker][(i.length || 0) % 3] = s)
            }
    }

    function at(t, e) {
        var n, r, i, o, a, s;
        for (n = e.length - 1; 0 <= n; n--) 95 !== (r = e[n]).marker && 42 !== r.marker || -1 !== r.end && (i = e[r.end], s = 0 < n && e[n - 1].end === r.end + 1 && e[n - 1].token === r.token - 1 && e[r.end + 1].token === i.token + 1 && e[n - 1].marker === r.marker, a = String.fromCharCode(r.marker), (o = t.tokens[r.token]).type = s ? "strong_open" : "em_open", o.tag = s ? "strong" : "em", o.nesting = 1, o.markup = s ? a + a : a, o.content = "", (o = t.tokens[i.token]).type = s ? "strong_close" : "em_close", o.tag = s ? "strong" : "em", o.nesting = -1, o.markup = s ? a + a : a, o.content = "", s && (t.tokens[e[n - 1].token].content = "", t.tokens[e[r.end + 1].token].content = "", n--))
    }
    var st = n(5),
        ct = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,
        lt = /^&([a-z][a-z0-9]{1,31});/i;
    var ut, ht, pt = ((ut = function(t, e) {
        return (ut = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            })(t, e)
    }, function(t, e) {
        function n() {
            this.constructor = t
        }
        ut(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    })(ft, ht = M), ft.prototype.pushPending = function() {
        var t = new _("text", "", 0);
        return t.content = this.pending, t.level = this.pendingLevel, this.tokens.push(t), this.pending = "", t
    }, ft.prototype.push = function(t, e, n) {
        this.pending && this.pushPending();
        var r = new _(t, e, n),
            i = null;
        return n < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), r.level = this.level, 0 < n && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], i = {
            delimiters: this.delimiters
        }), this.pendingLevel = this.level, this.tokens.push(r), this.tokens_meta.push(i), r
    }, ft.prototype.scanDelims = function(t, e) {
        var n, r, i, o, a, s, c, l, u, h = t,
            p = !0,
            f = !0,
            d = this.posMax,
            v = this.src.charCodeAt(t);
        for (n = 0 < t ? this.src.charCodeAt(t - 1) : 32; h < d && this.src.charCodeAt(h) === v;) h++;
        return i = h - t, r = h < d ? this.src.charCodeAt(h) : 32, c = Object(L.isMdAsciiPunct)(n) || Object(L.isPunctChar)(String.fromCharCode(n)), u = Object(L.isMdAsciiPunct)(r) || Object(L.isPunctChar)(String.fromCharCode(r)), s = Object(L.isWhiteSpace)(n), (l = Object(L.isWhiteSpace)(r)) ? p = !1 : u && (s || c || (p = !1)), s ? f = !1 : c && (l || u || (f = !1)), a = e ? (o = p, f) : (o = p && (!f || c), f && (!p || u)), {
            can_open: o,
            can_close: a,
            length: i
        }
    }, ft);

    function ft(t, e, n, r) {
        var i = ht.call(this, t, e, n) || this;
        return i.Token = _, i.tokens = r, i.tokens_meta = Array(r.length), i.pos = 0, i.posMax = i.src.length, i.level = 0, i.pending = "", i.pendingLevel = 0, i.cache = {}, i.delimiters = [], i._prev_delimiters = [], i
    }

    function dt(t, e) {
        var n, r, i, o, a, s = [],
            c = e.length;
        for (n = 0; n < c; n++) 126 === (i = e[n]).marker && -1 !== i.end && (o = e[i.end], (a = t.tokens[i.token]).type = "s_open", a.tag = "s", a.nesting = 1, a.markup = "~~", a.content = "", (a = t.tokens[o.token]).type = "s_close", a.tag = "s", a.nesting = -1, a.markup = "~~", a.content = "", "text" === t.tokens[o.token - 1].type && "~" === t.tokens[o.token - 1].content && s.push(o.token - 1));
        for (; s.length;) {
            for (r = (n = s.pop()) + 1; r < t.tokens.length && "s_close" === t.tokens[r].type;) r++;
            n !== --r && (a = t.tokens[r], t.tokens[r] = t.tokens[n], t.tokens[n] = a)
        }
    }

    function vt(t) {
        switch (t) {
            case 10:
            case 33:
            case 35:
            case 36:
            case 37:
            case 38:
            case 42:
            case 43:
            case 45:
            case 58:
            case 60:
            case 61:
            case 62:
            case 64:
            case 91:
            case 92:
            case 93:
            case 94:
            case 95:
            case 96:
            case 123:
            case 125:
            case 126:
                return 1;
            default:
                return
        }
    }
    for (var gt = [], mt = 0; mt < 256; mt++) gt.push(0);
    "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(t) {
        gt[t.charCodeAt(0)] = 1
    });
    var yt = [
            ["text", function(t, e) {
                for (var n = t.pos; n < t.posMax && !vt(t.src.charCodeAt(n));) n++;
                return n !== t.pos && (e || (t.pending += t.src.slice(t.pos, n)), t.pos = n, !0)
            }],
            ["newline", function(t, e) {
                var n, r, i = t.pos;
                if (10 !== t.src.charCodeAt(i)) return !1;
                for (n = t.pending.length - 1, r = t.posMax, e || (0 <= n && 32 === t.pending.charCodeAt(n) ? 1 <= n && 32 === t.pending.charCodeAt(n - 1) ? (t.pending = t.pending.replace(/ +$/, ""), t.push("hardbreak", "br", 0)) : (t.pending = t.pending.slice(0, -1), t.push("softbreak", "br", 0)) : t.push("softbreak", "br", 0)), i++; i < r && Object(L.isSpace)(t.src.charCodeAt(i));) i++;
                return t.pos = i, !0
            }],
            ["escape", function(t, e) {
                var n, r = t.pos,
                    i = t.posMax;
                if (92 !== t.src.charCodeAt(r)) return !1;
                if (++r < i) {
                    if ((n = t.src.charCodeAt(r)) < 256 && 0 !== gt[n]) return e || (t.pending += t.src[r]), t.pos += 2, !0;
                    if (10 === n) {
                        for (e || t.push("hardbreak", "br", 0), r++; r < i && (n = t.src.charCodeAt(r), Object(L.isSpace)(n));) r++;
                        return t.pos = r, !0
                    }
                }
                return e || (t.pending += "\\"), t.pos++, !0
            }],
            ["backticks", function(t, e) {
                var n, r, i, o, a, s, c = t.pos;
                if (96 !== t.src.charCodeAt(c)) return !1;
                for (n = c, c++, r = t.posMax; c < r && 96 === t.src.charCodeAt(c);) c++;
                for (i = t.src.slice(n, c), o = a = c; - 1 !== (o = t.src.indexOf("`", a));) {
                    for (a = o + 1; a < r && 96 === t.src.charCodeAt(a);) a++;
                    if (a - o === i.length) return e || ((s = t.push("code_inline", "code", 0)).markup = i, s.content = t.src.slice(c, o).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")), t.pos = a, !0
                }
                return e || (t.pending += i), t.pos += i.length, !0
            }],
            ["strikethrough", function(t, e) {
                var n, r, i, o, a = t.pos,
                    s = t.src.charCodeAt(a);
                if (e) return !1;
                if (126 !== s) return !1;
                if (i = (r = t.scanDelims(t.pos, !0)).length, o = String.fromCharCode(s), i < 2) return !1;
                for (i % 2 && (t.push("text", "", 0).content = o, i--), n = 0; n < i; n += 2) t.push("text", "", 0).content = o + o, t.delimiters.push({
                    marker: s,
                    length: 0,
                    jump: n,
                    token: t.tokens.length - 1,
                    end: -1,
                    open: r.can_open,
                    close: r.can_close,
                    level: t.level
                });
                return t.pos += r.length, !0
            }],
            ["emphasis", function(t, e) {
                var n, r, i = t.pos,
                    o = t.src.charCodeAt(i);
                if (e) return !1;
                if (95 !== o && 42 !== o) return !1;
                for (r = t.scanDelims(t.pos, 42 === o), n = 0; n < r.length; n++) t.push("text", "", 0).content = String.fromCharCode(o), t.delimiters.push({
                    marker: o,
                    length: r.length,
                    jump: n,
                    token: t.tokens.length - 1,
                    end: -1,
                    open: r.can_open,
                    close: r.can_close,
                    level: t.level
                });
                return t.pos += r.length, !0
            }],
            ["link", function(t, e) {
                var n, r, i, o, a, s, c, l, u, h, p = "",
                    f = t.pos,
                    d = t.posMax,
                    v = t.pos,
                    g = t.pos,
                    m = !0;
                if (91 !== t.src.charCodeAt(t.pos)) return !1;
                if (a = t.pos + 1, (o = t.md.helpers.parseLinkLabel(t, t.pos, !0)) < 0) return !1;
                if ((s = o + 1) < d && 40 === t.src.charCodeAt(s)) {
                    for (m = !1, s++; s < d && (r = t.src.charCodeAt(s), Object(L.isSpace)(r) || 10 === r); s++);
                    if (d <= s) return !1;
                    for (g = s, (c = t.md.helpers.parseLinkDestination(t.src, s, t.posMax)).ok && (p = t.md.normalizeLink(c.str), t.md.validateLink(p) ? s = c.pos : p = ""), g = s; s < d && (r = t.src.charCodeAt(s), Object(L.isSpace)(r) || 10 === r); s++);
                    if (c = t.md.helpers.parseLinkTitle(t.src, s, t.posMax), s < d && g !== s && c.ok)
                        for (u = c.str, s = c.pos; s < d && (r = t.src.charCodeAt(s), Object(L.isSpace)(r) || 10 === r); s++);
                    else u = "";
                    (d <= s || 41 !== t.src.charCodeAt(s)) && (m = !0), s++
                }
                if (m) {
                    if (void 0 === t.env.references) return !1;
                    if (s < d && 91 === t.src.charCodeAt(s) ? (g = s + 1, 0 <= (s = t.md.helpers.parseLinkLabel(t, s)) ? i = t.src.slice(g, s++) : s = o + 1) : s = o + 1, i = i || t.src.slice(a, o), !(l = t.env.references[Object(L.normalizeReference)(i)])) return t.pos = f, !1;
                    p = l.href, u = l.title
                }
                return e || (t.pos = a, t.posMax = o, (h = t.push("link_open", "a", 1)).attrs = n = [
                    ["href", p]
                ], u && n.push(["title", u]), h.attrJoin("class", "external-link"), h.attrJoin("target", "_blank"), h.content = t.src.substring(a, o), h.markup = t.src.substring(v, s), t.md.inline.tokenize(t), h = t.push("link_close", "a", -1)), t.pos = s, t.posMax = d, !0
            }],
            ["image", function(t, e) {
                var n, r, i, o, a, s, c, l, u, h, p, f, d, v = t.pos,
                    g = "",
                    m = t.pos,
                    y = t.posMax;
                if (33 !== t.src.charCodeAt(t.pos)) return !1;
                if (91 !== t.src.charCodeAt(t.pos + 1)) return !1;
                if (s = t.pos + 2, (a = t.md.helpers.parseLinkLabel(t, t.pos + 1, !1)) < 0) return !1;
                if ((c = a + 1) < y && 40 === t.src.charCodeAt(c)) {
                    for (c++; c < y && (r = t.src.charCodeAt(c), Object(L.isSpace)(r) || 10 === r); c++);
                    if (y <= c) return !1;
                    for (d = c, (u = t.md.helpers.parseLinkDestination(t.src, c, t.posMax)).ok && (g = t.md.normalizeLink(u.str), t.md.validateLink(g) ? c = u.pos : g = ""), d = c; c < y && (r = t.src.charCodeAt(c), Object(L.isSpace)(r) || 10 === r); c++);
                    if (u = t.md.helpers.parseLinkTitle(t.src, c, t.posMax), c < y && d !== c && u.ok)
                        for (h = u.str, c = u.pos; c < y && (r = t.src.charCodeAt(c), Object(L.isSpace)(r) || 10 === r); c++);
                    else h = "";
                    if (y <= c || 41 !== t.src.charCodeAt(c)) return t.pos = m, !1;
                    c++
                } else {
                    if (void 0 === t.env.references) return !1;
                    if (c < y && 91 === t.src.charCodeAt(c) ? (d = c + 1, 0 <= (c = t.md.helpers.parseLinkLabel(t, c)) ? o = t.src.slice(d, c++) : c = a + 1) : c = a + 1, o = o || t.src.slice(s, a), !(l = t.env.references[Object(L.normalizeReference)(o)])) return t.pos = m, !1;
                    g = l.href, h = l.title
                }
                return e || (i = t.src.slice(s, a), t.md.inline.parse(i, t.md, t.env, f = []), (p = t.push("image", "img", 0)).attrs = n = [
                    ["src", g],
                    ["alt", ""]
                ], p.children = f, p.content = i, p.markup = t.src.substring(v, c), h && n.push(["title", h])), t.pos = c, t.posMax = y, !0
            }],
            ["autolink", function(t, e) {
                var n, r, i, o, a, s, c = t.pos;
                return 60 === t.src.charCodeAt(c) && (!((n = t.src.slice(c)).indexOf(">") < 0) && (it.test(n) ? (o = (r = n.match(it))[0].slice(1, -1), a = t.md.normalizeLink(o), !!t.md.validateLink(a) && (e || ((s = t.push("link_open", "a", 1)).attrs = [
                    ["href", a]
                ], s.markup = "autolink", s.info = "auto", s.attrJoin("class", "external-link"), s.attrJoin("target", "_blank"), (s = t.push("text", "", 0)).content = t.md.normalizeLinkText(o), (s = t.push("link_close", "a", -1)).markup = "autolink", s.info = "auto"), t.pos += r[0].length, !0)) : !!rt.test(n) && (o = (i = n.match(rt))[0].slice(1, -1), a = t.md.normalizeLink("mailto:" + o), !!t.md.validateLink(a) && (e || ((s = t.push("link_open", "a", 1)).attrs = [
                    ["href", a]
                ], s.markup = "autolink", s.info = "auto", (s = t.push("text", "", 0)).content = t.md.normalizeLinkText(o), (s = t.push("link_close", "a", -1)).markup = "autolink", s.info = "auto"), t.pos += i[0].length, !0))))
            }],
            ["html_inline", function(t, e) {
                var n, r, i, o, a = t.pos;
                return !!t.md.options.html && (i = t.posMax, !(60 !== t.src.charCodeAt(a) || i <= a + 2) && ((33 === (n = t.src.charCodeAt(a + 1)) || 63 === n || 47 === n || 97 <= (o = 32 | n) && o <= 122) && (!!(r = t.src.slice(a).match(E)) && (e || (t.push("html_inline", "", 0).content = t.src.slice(a, a + r[0].length)), t.pos += r[0].length, !0))))
            }],
            ["entity", function(t, e) {
                var n, r, i = t.pos,
                    o = t.posMax;
                if (38 !== t.src.charCodeAt(i)) return !1;
                if (i + 1 < o)
                    if (35 === t.src.charCodeAt(i + 1)) {
                        if (r = t.src.slice(i).match(ct)) return e || (n = "x" === r[1][0].toLowerCase() ? parseInt(r[1].slice(1), 16) : parseInt(r[1], 10), t.pending += Object(L.isValidEntityCode)(n) ? Object(L.fromCodePoint)(n) : Object(L.fromCodePoint)(65533)), t.pos += r[0].length, !0
                    } else if ((r = t.src.slice(i).match(lt)) && Object(L.has)(st.a, r[1])) return e || (t.pending += st.a[r[1]]), t.pos += r[0].length, !0;
                return e || (t.pending += "&"), t.pos++, !0
            }]
        ],
        bt = [
            ["balance_pairs", function(t) {
                var e, n = t.tokens_meta,
                    r = t.tokens_meta.length;
                for (ot(0, t.delimiters), e = 0; e < r; e++) n[e] && n[e].delimiters && ot(0, n[e].delimiters)
            }],
            ["strikethrough", function(t) {
                var e, n = t.tokens_meta,
                    r = t.tokens_meta.length;
                for (dt(t, t.delimiters), e = 0; e < r; e++) n[e] && n[e].delimiters && dt(t, n[e].delimiters)
            }],
            ["emphasis", function(t) {
                var e, n = t.tokens_meta,
                    r = t.tokens_meta.length;
                for (at(t, t.delimiters), e = 0; e < r; e++) n[e] && n[e].delimiters && at(t, n[e].delimiters)
            }],
            ["text_collapse", function(t) {
                var e, n, r = 0,
                    i = t.tokens,
                    o = t.tokens.length;
                for (e = n = 0; e < o; e++) i[e].nesting < 0 && r--, i[e].level = r, 0 < i[e].nesting && r++, "text" === i[e].type && e + 1 < o && "text" === i[e + 1].type ? i[e + 1].content = i[e].content + i[e + 1].content : (e !== n && (i[n] = i[e]), n++);
                e !== n && (i.length = n)
            }]
        ],
        wt = (kt.prototype.skipToken = function(t) {
            var e, n, r = t.pos,
                i = this.ruler.getRules(""),
                o = i.length,
                a = t.md.options.maxNesting,
                s = t.cache;
            if (void 0 === s[r]) {
                if (t.level < a)
                    for (n = 0; n < o && (t.level++, e = i[n](t, !0), t.level--, !e); n++);
                else t.pos = t.posMax;
                e || t.pos++, s[r] = t.pos
            } else t.pos = s[r]
        }, kt.prototype.tokenize = function(t) {
            for (var e, n, r = this.ruler.getRules(""), i = r.length, o = t.posMax, a = t.md.options.maxNesting; t.pos < o;) {
                if (t.level < a)
                    for (n = 0; n < i && !(e = r[n](t, !1)); n++);
                if (e) {
                    if (t.pos >= o) break
                } else t.pending += t.src[t.pos++]
            }
            t.pending && t.pushPending()
        }, kt.prototype.parse = function(t, e, n, r) {
            var i, o, a, s = new this.State(t, e, n, r);
            for (this.tokenize(s), a = (o = this.ruler2.getRules("")).length, i = 0; i < a; i++) o[i](s)
        }, kt);

    function kt() {
        var t;
        for (this.State = pt, this.ruler = new y, t = 0; t < yt.length; t++) this.ruler.push(yt[t][0], yt[t][1]);
        for (this.ruler2 = new y, t = 0; t < bt.length; t++) this.ruler2.push(bt[t][0], bt[t][1])
    }
    var Et = 2147483647,
        Ct = /^xn--/,
        xt = /[^\0-\x7E]/,
        _t = /[\x2E\u3002\uFF0E\uFF61]/g,
        St = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input"
        },
        Lt = Math.floor,
        Mt = String.fromCharCode;

    function At(t) {
        throw new RangeError(St[t])
    }

    function Tt(t, e) {
        var n = t.split("@"),
            r = "";
        return 1 < n.length && (r = n[0] + "@", t = n[1]), r + function(t, e) {
            for (var n = [], r = t.length; r--;) n[r] = e(t[r]);
            return n
        }((t = t.replace(_t, ".")).split("."), e).join(".")
    }

    function Ot(t) {
        for (var e = [], n = 0, r = t.length; n < r;) {
            var i = t.charCodeAt(n++);
            if (55296 <= i && i <= 56319 && n < r) {
                var o = t.charCodeAt(n++);
                56320 == (64512 & o) ? e.push(((1023 & i) << 10) + (1023 & o) + 65536) : (e.push(i), n--)
            } else e.push(i)
        }
        return e
    }

    function Dt(t, e) {
        return t + 22 + (t < 26 ? 75 : 0) - (0 !== e ? 32 : 0)
    }

    function Pt(t, e, n) {
        var r = 0;
        for (t = n ? Lt(t / 700) : t >> 1, t += Lt(t / e); 455 < t; r += 36) t = Lt(t / 35);
        return Lt(r + 36 * t / (t + 38))
    }
    var Ft = function(t) {
            return Tt(t, function(t) {
                return Ct.test(t) ? function(t) {
                    var e, n = [],
                        r = t.length,
                        i = 0,
                        o = 128,
                        a = 72,
                        s = t.lastIndexOf("-");
                    s < 0 && (s = 0);
                    for (var c = 0; c < s; ++c) 128 <= t.charCodeAt(c) && At("not-basic"), n.push(t.charCodeAt(c));
                    for (var l = 0 < s ? s + 1 : 0; l < r;) {
                        for (var u = i, h = 1, p = 36;; p += 36) {
                            r <= l && At("invalid-input");
                            var f = (e = t.charCodeAt(l++)) - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : 36;
                            (36 <= f || f > Lt((Et - i) / h)) && At("overflow"), i += f * h;
                            var d = p <= a ? 1 : a + 26 <= p ? 26 : p - a;
                            if (f < d) break;
                            var v = 36 - d;
                            h > Lt(Et / v) && At("overflow"), h *= v
                        }
                        var g = n.length + 1;
                        a = Pt(i - u, g, 0 == u), Lt(i / g) > Et - o && At("overflow"), o += Lt(i / g), i %= g, n.splice(i++, 0, o)
                    }
                    return String.fromCodePoint.apply(String, n)
                }(t.slice(4).toLowerCase()) : t
            })
        },
        zt = function(t) {
            return Tt(t, function(t) {
                return xt.test(t) ? "xn--" + function(t) {
                    for (var e = [], n = Ot(t), r = n.length, i = 128, o = 0, a = 72, s = 0, c = n; s < c.length; s++) {
                        (m = c[s]) < 128 && e.push(Mt(m))
                    }
                    var l = e.length,
                        u = l;
                    for (l && e.push("-"); u < r;) {
                        for (var h = Et, p = 0, f = n; p < f.length; p++) {
                            i <= (m = f[p]) && m < h && (h = m)
                        }
                        var d = u + 1;
                        h - i > Lt((Et - o) / d) && At("overflow"), o += (h - i) * d, i = h;
                        for (var v = 0, g = n; v < g.length; v++) {
                            var m;
                            if ((m = g[v]) < i && ++o > Et && At("overflow"), m == i) {
                                for (var y = o, b = 36;; b += 36) {
                                    var w = b <= a ? 1 : a + 26 <= b ? 26 : b - a;
                                    if (y < w) break;
                                    var k = y - w,
                                        E = 36 - w;
                                    e.push(Mt(Dt(w + k % E, 0))), y = Lt(k / E)
                                }
                                e.push(Mt(Dt(y, 0))), a = Pt(o, d, u == l), o = 0, ++u
                            }
                        }++o, ++i
                    }
                    return e.join("")
                }(t) : t
            })
        },
        It = {
            code_inline: function(t, e, n, r, i) {
                var o = t[e];
                return "<code" + i.renderAttrs(o) + ">" + Object(L.escapeHtml)(t[e].content) + "</code>"
            },
            code_block: function(t, e, n, r, i) {
                var o = t[e];
                return "<pre" + i.renderAttrs(o) + "><code>" + Object(L.escapeHtml)(t[e].content) + "</code></pre>\n"
            },
            fence: function(t, e, n, r, i) {
                var o, a, s, c, l = t[e],
                    u = l.info ? Object(L.unescapeAll)(l.info).trim() : "",
                    h = "";
                return u && (h = u.split(/\s+/g)[0]), 0 === (o = n.highlight && n.highlight(l.content, h) || Object(L.escapeHtml)(l.content)).indexOf("<pre") ? o + "\n" : u ? (a = l.attrIndex("class"), s = l.attrs ? l.attrs.slice() : [], a < 0 ? s.push(["class", n.langPrefix + h]) : s[a][1] += " " + n.langPrefix + h, c = {
                    attrs: s
                }, "<pre><code" + i.renderAttrs(c) + ">" + o + "</code></pre>\n") : "<pre><code" + i.renderAttrs(l) + ">" + o + "</code></pre>\n"
            },
            image: function(t, e, n, r, i) {
                var o = t[e];
                return o.attrs[o.attrIndex("alt")][1] = i.renderInlineAsText(o.children, n, r), i.renderToken(t, e, n)
            },
            hardbreak: function(t, e, n) {
                return n.xhtmlOut ? "<br />\n" : "<br>\n"
            },
            softbreak: function(t, e, n) {
                return n.breaks ? n.xhtmlOut ? "<br />\n" : "<br>\n" : "\n"
            },
            text: function(t, e) {
                return Object(L.escapeHtml)(t[e].content)
            },
            html_block: function(t, e) {
                return t[e].content
            },
            html_inline: function(t, e) {
                return t[e].content
            }
        },
        Rt = (Ht.prototype.renderAttrs = function(t) {
            var e, n, r;
            if (!t.attrs) return "";
            for (r = "", e = 0, n = t.attrs.length; e < n; e++) r += " " + Object(L.escapeHtml)(t.attrs[e][0]) + '="' + Object(L.escapeHtml)(t.attrs[e][1]) + '"';
            return r
        }, Ht.prototype.renderToken = function(t, e, n) {
            var r, i = "",
                o = !1,
                a = t[e];
            return a.hidden ? "" : (a.block && -1 !== a.nesting && e && t[e - 1].hidden && (i += "\n"), i += (-1 === a.nesting ? "</" : "<") + a.tag, i += this.renderAttrs(a), 0 === a.nesting && n.xhtmlOut && (i += " /"), a.block && (o = !0, 1 === a.nesting && e + 1 < t.length && ("inline" === (r = t[e + 1]).type || r.hidden || -1 === r.nesting && r.tag === a.tag) && (o = !1)), i += o ? ">\n" : ">")
        }, Ht.prototype.renderInline = function(t, e, n) {
            for (var r, i = "", o = this.rules, a = 0, s = t.length; a < s; a++) void 0 !== o[r = t[a].type] ? i += o[r](t, a, e, n, this) : i += this.renderToken(t, a, e);
            return i
        }, Ht.prototype.renderInlineAsText = function(t, e, n) {
            for (var r = "", i = 0, o = t.length; i < o; i++) "text" === t[i].type ? r += t[i].content : "image" === t[i].type && (r += this.renderInlineAsText(t[i].children, e, n));
            return r
        }, Ht.prototype.render = function(t, e, n) {
            var r, i, o, a = "",
                s = this.rules;
            for (r = 0, i = t.length; r < i; r++) "inline" === (o = t[r].type) ? a += this.renderInline(t[r].children, e, n) : void 0 !== s[o] ? a += s[t[r].type](t, r, e, n, this) : a += this.renderToken(t, r, e);
            return a
        }, Ht);

    function Ht() {
        this.rules = Object(L.assign)({}, It)
    }
    var Nt = {
            default: {
                options: {
                    html: !1,
                    xhtmlOut: !1,
                    breaks: !1,
                    langPrefix: "language-",
                    linkify: !1,
                    typographer: !1,
                    quotes: "“”‘’",
                    highlight: null,
                    maxNesting: 100
                },
                components: {
                    core: {},
                    block: {},
                    inline: {}
                }
            },
            zero: {
                options: {
                    html: !1,
                    xhtmlOut: !1,
                    breaks: !1,
                    langPrefix: "language-",
                    linkify: !1,
                    typographer: !1,
                    quotes: "“”‘’",
                    highlight: null,
                    maxNesting: 20
                },
                components: {
                    core: {
                        rules: ["normalize", "block", "inline"]
                    },
                    block: {
                        rules: ["paragraph"]
                    },
                    inline: {
                        rules: ["text"],
                        rules2: ["balance_pairs", "text_collapse"]
                    }
                }
            },
            commonmark: {
                options: {
                    html: !0,
                    xhtmlOut: !0,
                    breaks: !1,
                    langPrefix: "language-",
                    linkify: !1,
                    typographer: !1,
                    quotes: "“”‘’",
                    highlight: null,
                    maxNesting: 20
                },
                components: {
                    core: {
                        rules: ["normalize", "block", "inline"]
                    },
                    block: {
                        rules: ["blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph"]
                    },
                    inline: {
                        rules: ["autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text"],
                        rules2: ["balance_pairs", "emphasis", "text_collapse"]
                    }
                }
            }
        },
        qt = /^(vbscript|javascript|data):/,
        Bt = /^data:image\/(gif|png|jpeg|webp);/;

    function jt(t) {
        var e = t.trim().toLowerCase();
        return !qt.test(e) || Bt.test(e)
    }
    var Vt = ["http:", "https:", "mailto:"];

    function Gt(t) {
        var e = m.parse(t, !0);
        if (e.hostname && (!e.protocol || 0 <= Vt.indexOf(e.protocol))) try {
            e.hostname = zt(e.hostname)
        } catch (t) {}
        return m.encode(m.format(e))
    }

    function Ut(t) {
        var e = m.parse(t, !0);
        if (e.hostname && (!e.protocol || 0 <= Vt.indexOf(e.protocol))) try {
            e.hostname = Ft(e.hostname)
        } catch (t) {}
        return m.decode(m.format(e))
    }
    var Wt = (Kt.prototype.set = function(t) {
        return L.assign(this.options, t), this
    }, Kt.prototype.configure = function(e) {
        var n = this;
        if (L.isString(e)) {
            var t = e;
            if (!(e = Nt[t])) throw new Error('Wrong `markdown-it` preset "' + t + '", check name')
        }
        if (!e) throw new Error("Wrong `markdown-it` preset, can't be empty");
        return e.options && this.set(e.options), e.components && Object.keys(e.components).forEach(function(t) {
            e.components[t].rules && n[t].ruler.enableOnly(e.components[t].rules), e.components[t].rules2 && n[t].ruler2.enableOnly(e.components[t].rules2)
        }), this
    }, Kt.prototype.enable = function(e, t) {
        var n = [];
        Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(t) {
            n = n.concat(this[t].ruler.enable(e, !0))
        }, this), n = n.concat(this.inline.ruler2.enable(e, !0));
        var r = e.filter(function(t) {
            return n.indexOf(t) < 0
        });
        if (r.length && !t) throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + r);
        return this
    }, Kt.prototype.disable = function(e, t) {
        var n = [];
        Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(t) {
            n = n.concat(this[t].ruler.disable(e, !0))
        }, this), n = n.concat(this.inline.ruler2.disable(e, !0));
        var r = e.filter(function(t) {
            return n.indexOf(t) < 0
        });
        if (r.length && !t) throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + r);
        return this
    }, Kt.prototype.use = function(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        var r = [this].concat(Array.prototype.slice.call(arguments, 1));
        return t.apply(t, r), this
    }, Kt.prototype.parse = function(t, e) {
        if ("string" != typeof t) throw new Error("Input data should be a String");
        var n = new this.core.State(t, this, e);
        return this.core.process(n), n.tokens
    }, Kt.prototype.render = function(t, e) {
        return e = e || {}, this.renderer.render(this.parse(t, e), this.options, e)
    }, Kt.prototype.parseInline = function(t, e) {
        var n = new this.core.State(t, this, e);
        return n.inlineMode = !0, this.core.process(n), n.tokens
    }, Kt.prototype.renderInline = function(t, e) {
        return e = e || {}, this.renderer.render(this.parseInline(t, e), this.options, e)
    }, Kt);

    function Kt(t, e) {
        e || L.isString(t) || (e = t || {}, t = "default"), this.inline = new wt, this.block = new H, this.core = new et, this.renderer = new Rt, this.linkify = new g, this.validateLink = jt, this.normalizeLink = Gt, this.normalizeLinkText = Ut, this.utils = L, this.helpers = {
            parseLinkDestination: r,
            parseLinkLabel: i,
            parseLinkTitle: o
        }, this.options = {}, this.configure(t), e && this.set(e)
    }

    function $t(t, e, n, r) {
        var i = Number(t[e].meta.id + 1).toString(),
            o = "";
        return "string" == typeof r.docId && (o = "-" + r.docId + "-"), o + i
    }

    function Zt(t, e) {
        var n = Number(t[e].meta.id + 1).toString();
        return 0 < t[e].meta.subId && (n += ":" + t[e].meta.subId), "[" + n + "]"
    }

    function Yt(t, e, n, r, i) {
        var o = i.rules.footnote_anchor_name(t, e, n, r, i),
            a = i.rules.footnote_caption(t, e, n, r, i),
            s = o;
        return 0 < t[e].meta.subId && (s += ":" + t[e].meta.subId), '<sup class="footnote-ref"><a href="#fn' + o + '" id="fnref' + s + '">' + a + "</a></sup>"
    }

    function Jt(t, e, n) {
        return (n.xhtmlOut ? '<hr class="footnotes-sep" />\n' : '<hr class="footnotes-sep">\n') + '<section class="footnotes">\n<ol class="footnotes-list">\n'
    }

    function Xt() {
        return "</ol>\n</section>\n"
    }

    function Qt(t, e, n, r, i) {
        var o = i.rules.footnote_anchor_name(t, e, n, r, i);
        return 0 < t[e].meta.subId && (o += ":" + t[e].meta.subId), '<li id="fn' + o + '" class="footnote-item">'
    }

    function te() {
        return "</li>\n"
    }

    function ee(t, e, n, r, i) {
        var o = i.rules.footnote_anchor_name(t, e, n, r, i);
        return 0 < t[e].meta.subId && (o += ":" + t[e].meta.subId), ' <a href="#fnref' + o + '" class="footnote-backref">↩︎</a>'
    }

    function ne(t) {
        var c = t.helpers.parseLinkLabel,
            m = t.utils.isSpace;
        t.renderer.rules.footnote_ref = Yt, t.renderer.rules.footnote_block_open = Jt, t.renderer.rules.footnote_block_close = Xt, t.renderer.rules.footnote_open = Qt, t.renderer.rules.footnote_close = te, t.renderer.rules.footnote_anchor = ee, t.renderer.rules.footnote_caption = Zt, t.renderer.rules.footnote_anchor_name = $t, t.block.ruler.before("reference", "footnote_def", function(t, e, n, r) {
            var i, o, a, s, c, l, u, h, p, f, d, v = t.bMarks[e] + t.tShift[e],
                g = t.eMarks[e];
            if (g < v + 4) return !1;
            if (91 !== t.src.charCodeAt(v)) return !1;
            if (94 !== t.src.charCodeAt(v + 1)) return !1;
            for (c = v + 2; c < g; c++) {
                if (32 === t.src.charCodeAt(c)) return !1;
                if (93 === t.src.charCodeAt(c)) break
            }
            if (c === v + 2) return !1;
            if (g <= c + 1 || 58 !== t.src.charCodeAt(++c)) return !1;
            if (r) return !0;
            for (c++, t.env.footnotes || (t.env.footnotes = {}), t.env.footnotes.refs || (t.env.footnotes.refs = {}), l = t.src.slice(v + 2, c - 2), t.env.footnotes.refs[":" + l] = -1, (u = new t.Token("footnote_reference_open", "", 1)).meta = {
                    label: l
                }, u.level = t.level++, t.tokens.push(u), i = t.bMarks[e], o = t.tShift[e], a = t.sCount[e], s = t.parentType, d = c, h = p = t.sCount[e] + c - (t.bMarks[e] + t.tShift[e]); c < g && (f = t.src.charCodeAt(c), m(f));) 9 === f ? p += 4 - p % 4 : p++, c++;
            return t.tShift[e] = c - d, t.sCount[e] = p - h, t.bMarks[e] = d, t.blkIndent += 4, t.parentType = "footnote", t.sCount[e] < t.blkIndent && (t.sCount[e] += t.blkIndent), t.md.block.tokenize(t, e, n), t.parentType = s, t.blkIndent -= 4, t.tShift[e] = o, t.sCount[e] = a, t.bMarks[e] = i, (u = new t.Token("footnote_reference_close", "", -1)).level = --t.level, t.tokens.push(u), !0
        }, {
            alt: ["paragraph", "reference"]
        }), t.inline.ruler.after("image", "footnote_inline", function(t, e) {
            var n, r, i, o, a = t.posMax,
                s = t.pos;
            return !(a <= s + 2) && (94 === t.src.charCodeAt(s) && (91 === t.src.charCodeAt(s + 1) && (n = s + 2, !((r = c(t, s + 1)) < 0) && (e || (t.env.footnotes || (t.env.footnotes = {}), t.env.footnotes.list || (t.env.footnotes.list = []), i = t.env.footnotes.list.length, t.md.inline.parse(t.src.slice(n, r), t.md, t.env, o = []), t.push("footnote_ref", "", 0).meta = {
                id: i
            }, t.env.footnotes.list[i] = {
                content: t.src.slice(n, r),
                tokens: o
            }), t.pos = r + 1, t.posMax = a, !0))))
        }), t.inline.ruler.after("footnote_inline", "footnote_ref", function(t, e) {
            var n, r, i, o, a = t.posMax,
                s = t.pos;
            if (a < s + 3) return !1;
            if (!t.env.footnotes || !t.env.footnotes.refs) return !1;
            if (91 !== t.src.charCodeAt(s)) return !1;
            if (94 !== t.src.charCodeAt(s + 1)) return !1;
            for (r = s + 2; r < a; r++) {
                if (32 === t.src.charCodeAt(r)) return !1;
                if (10 === t.src.charCodeAt(r)) return !1;
                if (93 === t.src.charCodeAt(r)) break
            }
            return r !== s + 2 && (!(a <= r) && (r++, n = t.src.slice(s + 2, r - 1), void 0 !== t.env.footnotes.refs[":" + n] && (e || (t.env.footnotes.list || (t.env.footnotes.list = []), t.env.footnotes.refs[":" + n] < 0 ? (i = t.env.footnotes.list.length, t.env.footnotes.list[i] = {
                label: n,
                count: 0
            }, t.env.footnotes.refs[":" + n] = i) : i = t.env.footnotes.refs[":" + n], o = t.env.footnotes.list[i].count, t.env.footnotes.list[i].count++, t.push("footnote_ref", "", 0).meta = {
                id: i,
                subId: o,
                label: n
            }), t.pos = r, t.posMax = a, !0)))
        }), t.core.ruler.after("inline", "footnote_tail", function(t) {
            var e, n, r, i, o, a, s, c, l, u, h = !1,
                p = {};
            if (t.env.footnotes && (t.tokens = t.tokens.filter(function(t) {
                    return "footnote_reference_open" === t.type ? (h = !0, l = [], u = t.meta.label, !1) : "footnote_reference_close" === t.type ? (h = !1, p[":" + u] = l, !1) : (h && l.push(t), !h)
                }), t.env.footnotes.list)) {
                for (a = t.env.footnotes.list, s = new t.Token("footnote_block_open", "", 1), t.tokens.push(s), e = 0, n = a.length; e < n; e++) {
                    for ((s = new t.Token("footnote_open", "", 1)).meta = {
                            id: e,
                            label: a[e].label
                        }, t.tokens.push(s), a[e].tokens ? (c = [], (s = new t.Token("paragraph_open", "p", 1)).block = !0, c.push(s), (s = new t.Token("inline", "", 0)).children = a[e].tokens, s.content = a[e].content, c.push(s), (s = new t.Token("paragraph_close", "p", -1)).block = !0, c.push(s)) : a[e].label && (c = p[":" + a[e].label]), t.tokens = t.tokens.concat(c), o = "paragraph_close" === t.tokens[t.tokens.length - 1].type ? t.tokens.pop() : null, i = 0 < a[e].count ? a[e].count : 1, r = 0; r < i; r++)(s = new t.Token("footnote_anchor", "", 0)).meta = {
                        id: e,
                        subId: r,
                        label: a[e].label
                    }, t.tokens.push(s);
                    o && t.tokens.push(o), s = new t.Token("footnote_close", "", -1), t.tokens.push(s)
                }
                s = new t.Token("footnote_block_close", "", -1), t.tokens.push(s)
            }
        })
    }

    function re(t) {
        function i(t, e) {
            var n, r, i, o, a, s = [],
                c = e.length;
            for (n = 0; n < c; n++) 61 === (i = e[n]).marker && -1 !== i.end && (o = e[i.end], (a = t.tokens[i.token]).type = "mark_open", a.tag = "mark", a.nesting = 1, a.markup = "==", a.content = "", (a = t.tokens[o.token]).type = "mark_close", a.tag = "mark", a.nesting = -1, a.markup = "==", a.content = "", "text" === t.tokens[o.token - 1].type && "=" === t.tokens[o.token - 1].content && s.push(o.token - 1));
            for (; s.length;) {
                for (r = (n = s.pop()) + 1; r < t.tokens.length && "mark_close" === t.tokens[r].type;) r++;
                n !== --r && (a = t.tokens[r], t.tokens[r] = t.tokens[n], t.tokens[n] = a)
            }
        }
        t.inline.ruler.before("emphasis", "mark", function(t, e) {
            var n, r, i, o, a = t.pos,
                s = t.src.charCodeAt(a);
            if (e) return !1;
            if (61 !== s) return !1;
            if (i = (r = t.scanDelims(t.pos, !0)).length, o = String.fromCharCode(s), i < 2) return !1;
            for (i % 2 && (t.push("text", "", 0).content = o, i--), n = 0; n < i; n += 2) t.push("text", "", 0).content = o + o, (r.can_open || r.can_close) && t.delimiters.push({
                marker: s,
                length: 0,
                jump: n,
                token: t.tokens.length - 1,
                end: -1,
                open: r.can_open,
                close: r.can_close,
                level: 0
            });
            return t.pos += r.length, !0
        }), t.inline.ruler2.before("emphasis", "mark", function(t) {
            var e, n = t.tokens_meta,
                r = (t.tokens_meta || []).length;
            for (i(t, t.delimiters), e = 0; e < r; e++) n[e] && n[e].delimiters && i(t, n[e].delimiters)
        })
    }
    var ie = n(1);
    n.d(e, "b", function() {
        return le
    }), n.d(e, "a", function() {
        return he
    }), n.d(e, "c", function() {
        return pe
    });
    var oe = ["normalize", "block", "inline", "linkify", "replacements", "smartquotes"],
        ae = ["code", "fence", "blockquote", "hr", "list", "reference", "heading", "lheading", "html_block", "table", "paragraph"],
        se = ["text", "newline", "escape", "backticks", "strikethrough", "emphasis", "link", "image", "autolink", "html_inline", "entity"],
        ce = ["balance_pairs", "strikethrough", "emphasis", "text_collapse"],
        le = (ue.getLinktext = function(t) {
            if (!t) return "";
            var e = t.indexOf("|");
            return -1 !== e && ("\\" === t.charAt(e - 1) && e--, t = t.slice(0, e)), t = t.trim()
        }, ue);

    function ue() {
        var t = new Wt("zero", {
            maxNesting: 50
        });
        t.core.ruler.enable([], !0), t.block.ruler.enable([], !0), t.inline.ruler.enable([], !0), t.set({
            html: !0,
            breaks: !0,
            linkify: !0,
            typographer: !0,
            langPrefix: "prism language-"
        }), t.core.ruler.enable(oe);
        var e = ae.slice();
        t.block.ruler.enable(e);
        var n = se.slice(),
            r = ce.slice();
        t.inline.ruler.enable(n), t.inline.ruler2.enable(r), ne(t), re(t), t.inline.ruler.before("link", "ilink", function(t, e) {
            var n = t.src,
                r = t.pos;
            if (91 !== n.charCodeAt(t.pos) || 91 !== n.charCodeAt(t.pos + 1)) return !1;
            for (var i = t.posMax, o = t.pos + 2, a = o; a < i - 1 && (93 !== n.charCodeAt(a) || 93 !== n.charCodeAt(a + 1));) a++;
            if (a < 0 || o === a || i - 1 <= a) return !1;
            var s = a + 2,
                c = t.src.substring(o, a);
            if (-1 !== c.indexOf("[[")) return !1;
            var l = "",
                u = c.indexOf("|");
            if (0 < u ? (l = c.substr(u + 1), c = c.substr(0, u)) : l = c, c.endsWith("\\") && (c = c.substr(0, c.length - 1)), c = Object(ie.k)(c).trim(), l = l.trim(), !e) {
                var h = t.push("ilink_open", "a", 1);
                h.attrSet("href", c), h.attrJoin("class", "internal-link"), t.pending = l, h.markup = n.substring(r, s), t.push("ilink_close", "a", -1)
            }
            return t.pos = s, t.posMax = i, !0
        }), t.inline.ruler.before("link", "iembed", function(t, e) {
            var n = t.src,
                r = t.pos;
            if (33 !== t.src.charCodeAt(t.pos) || 91 !== t.src.charCodeAt(t.pos + 1) || 91 !== t.src.charCodeAt(t.pos + 2)) return !1;
            for (var i = t.posMax, o = t.pos + 3, a = o; a < i - 1 && (93 !== n.charCodeAt(a) || 93 !== n.charCodeAt(a + 1));) a++;
            if (a < 0 || o === a || i - 1 <= a) return !1;
            var s = a + 2,
                c = t.src.substring(o, a);
            if (-1 !== c.indexOf("[[")) return !1;
            if (c = Object(ie.k)(c).trim(), !e) {
                var l = t.push("iembed_open", "div", 1);
                l.attrSet("src", c), l.attrJoin("class", "internal-embed"), l.markup = n.substring(r, s), t.push("iembed_close", "div", -1)
            }
            return t.pos = s, t.posMax = i, !0
        }), t.inline.ruler.before("image", "tag", function(t, e) {
            if (35 !== t.src.charCodeAt(t.pos)) return !1;
            if (1 <= t.pos && !Object(L.isWhiteSpace)(t.src.charCodeAt(t.pos - 1))) return !1;
            for (var n = t.posMax, r = t.pos + 1, i = t.src.charCodeAt(r), o = r, a = !0; !Object(L.isWhiteSpace)(i) && (!Object(L.isMdAsciiPunct)(i) || 45 === i) && o <= n;)(i < 48 || 57 < i) && (a = !1), o++, i = t.src.charCodeAt(o);
            if (r === o) return !1;
            if (a) return !1;
            var s = "#" + t.src.substring(r, o);
            if (!e) {
                var c = t.push("tag_open", "a", 1);
                c.attrSet("href", s), c.attrJoin("class", "tag"), t.push("text", "", 0).content = s, t.push("tag_close", "a", -1)
            }
            return t.pos = o, t.posMax = n, !0
        }), t.core.ruler.after("inline", "tasklist", function(t) {
            for (var e = t.tokens, n = t.Token, r = 2; r < e.length; r++) {
                var i = e[r];
                if (i.content && 91 === i.content.charCodeAt(0) && 93 === i.content.charCodeAt(2) && 32 === i.content.charCodeAt(3) && "inline" === i.type && "paragraph_open" === e[r - 1].type && "list_item_open" === e[r - 2].type) {
                    var o = i.content[1].toLowerCase();
                    if (" " === o || "x" === o) {
                        i.children[0].content = i.children[0].content.slice(3), i.content = i.content.slice(3);
                        var a = new n("checkbox", "input", 1);
                        a.attrSet("type", "checkbox"), a.attrSet("class", "task-list-item-checkbox"), "x" === o && a.attrSet("checked", "true"), i.children.unshift(a), e[r - 2].attrSet("class", "task-list-item")
                    }
                }
            }
        });

        function a(t, e) {
            var n = 0 < e && t[e - 1].charCodeAt(0);
            return !n || 92 !== n && (n < 48 || 57 < n)
        }

        function s(t, e) {
            var n = t[e + 1] && t[e + 1].charCodeAt(0);
            return !n || n < 48 || 57 < n
        }

        function l(t, e, n, r) {
            var i, o;
            return t.rex.lastIndex = n, (i = e.startsWith(t.tag, n) && (!t.pre || t.pre(e, n)) && t.rex.exec(e)) && (i.lastIndex = t.rex.lastIndex, o = (!t.post || t.post(e, i.lastIndex - 1)) && (!r || !i[1].includes("\n"))), t.rex.lastIndex = 0, o && i
        }
        t.inline.ruler.before("escape", "math_inline", function(t, e) {
            var n = {
                    name: "math_single",
                    rex: /\$([^$\s\\])\$/gy,
                    tmpl: "<eq>$1</eq>",
                    tag: "$",
                    pre: a,
                    post: s
                },
                r = {
                    name: "math_inline",
                    rex: /\$(\S[^$\r\n]*?[^\s\\])\$/gy,
                    tmpl: "<eq>$1</eq>",
                    tag: "$",
                    pre: a,
                    post: s
                },
                i = l(r, t.src, t.pos);
            if (i = i || l(r = n, t.src, t.pos)) {
                if (!e) {
                    var o = t.push("math_inline", "span", 1);
                    o.markup = r.tag, o.attrSet("class", "math math-inline"), t.push("math", "", 0).content = i[1], t.push("math_inline", "span", -1)
                }
                t.pos = i.lastIndex
            }
            return !!i
        }), t.block.ruler.before("fence", "math_block", function(t, e, n, r) {
            var i = {
                    name: "math_block",
                    rex: /\${2}([^$]*?)\${2}/gmy,
                    tmpl: "<section><eqn>$1</eqn></section>",
                    tag: "$$"
                },
                o = l(i, t.src, t.bMarks[e] + t.tShift[e], "blockquote" === t.parentType);
            if (o) {
                if (!r) {
                    var a = t.push("math_block", "div", 1);
                    a.block = !0, a.info = o[o.length - 1], a.markup = i.tag, a.attrSet("class", "math math-block"), t.push("math", "", 0).content = o[1], t.push("math_block", "div", -1)
                }
                for (var s = e, c = o.lastIndex - 1; s < n; s++)
                    if (c >= t.bMarks[s] && c <= t.eMarks[s]) {
                        t.line = s + 1;
                        break
                    } t.pos = o.lastIndex
            }
            return !!o
        }), t.core.ruler.after("inline", "iconvert", function(t) {
            for (var e = 0, n = t.tokens; e < n.length; e++) {
                var r = n[e];
                if ("inline" === r.type)
                    for (var i = r.children, o = 0; o < i.length; o++) {
                        var a = i[o];
                        if ("link_open" === a.type) {
                            var s = a.attrGet("href");
                            if (!s) continue;
                            pe(s) && (s = Object(ie.k)(decodeURI(s)).trim(), a.attrSet("href", s), a.attrSet("class", "internal-link"))
                        } else if ("image" === a.type) {
                            var c = a.attrGet("src");
                            if (!c) continue;
                            if (pe(c)) {
                                var l = new _("iembed_open", "div", 1);
                                l.attrSet("src", Object(ie.k)(decodeURI(c))), l.attrJoin("class", "internal-embed"), l.markup = a.markup;
                                var u = new _("iembed_close", "div", -1);
                                i.splice(o, 1, l, u)
                            }
                        }
                    }
            }
        }), t.renderer.rules.math = function(t, e, n, r, i) {
            var o = t[e];
            return Object(L.escapeHtml)(o.content)
        }, this.md = t
    }
    var he = ["paragraph_open", "blockquote_open", "heading_open", "code", "fence", "table_open", "html_block", "bullet_list_open", "ordered_list_open", "hr", "dl_open"];

    function pe(t) {
        return !(!t.startsWith("./") && !t.startsWith("../")) || -1 === t.indexOf(":")
    }
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "Any", function() {
        return r
    }), n.d(e, "Cc", function() {
        return i
    }), n.d(e, "Cf", function() {
        return o
    }), n.d(e, "P", function() {
        return a
    }), n.d(e, "Z", function() {
        return s
    });
    var r = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
        i = /[\0-\x1F\x7F-\x9F]/,
        o = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,
        a = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,
        s = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/
}, function(t, e, n) {
    "use strict";

    function r(t) {
        var e = "";
        return e += t.protocol || "", e += t.slashes ? "//" : "", e += t.auth ? t.auth + "@" : "", t.hostname && -1 !== t.hostname.indexOf(":") ? e += "[" + t.hostname + "]" : e += t.hostname || "", e += t.port ? ":" + t.port : "", e += t.pathname || "", e += t.search || "", e += t.hash || ""
    }
    n.r(e), n.d(e, "format", function() {
        return r
    }), n.d(e, "encode", function() {
        return u
    }), n.d(e, "decode", function() {
        return o
    }), n.d(e, "parse", function() {
        return h
    });
    var l = {};

    function u(t, e, n) {
        var r, i, o, a, s, c = "";
        for ("string" != typeof e && (n = e, e = u.defaultChars), void 0 === n && (n = !0), s = function(t) {
                var e, n, r = l[t];
                if (r) return r;
                for (r = l[t] = [], e = 0; e < 128; e++) n = String.fromCharCode(e), /^[0-9a-z]$/i.test(n) ? r.push(n) : r.push("%" + ("0" + e.toString(16).toUpperCase()).slice(-2));
                for (e = 0; e < t.length; e++) r[t.charCodeAt(e)] = t[e];
                return r
            }(e), r = 0, i = t.length; r < i; r++)
            if (o = t.charCodeAt(r), n && 37 === o && r + 2 < i && /^[0-9a-f]{2}$/i.test(t.slice(r + 1, r + 3))) c += t.slice(r, r + 3), r += 2;
            else if (o < 128) c += s[o];
        else if (55296 <= o && o <= 57343) {
            if (55296 <= o && o <= 56319 && r + 1 < i && 56320 <= (a = t.charCodeAt(r + 1)) && a <= 57343) {
                c += encodeURIComponent(t[r] + t[r + 1]), r++;
                continue
            }
            c += "%EF%BF%BD"
        } else c += encodeURIComponent(t[r]);
        return c
    }
    u.defaultChars = ";/?:@&=+$,-_.!~*'()#", u.componentChars = "-_.!~*'()";
    var i = {};

    function o(t, e) {
        var l;
        return "string" != typeof e && (e = o.defaultChars), l = function(t) {
            var e, n, r = i[t];
            if (r) return r;
            for (r = i[t] = [], e = 0; e < 128; e++) n = String.fromCharCode(e), r.push(n);
            for (e = 0; e < t.length; e++) r[n = t.charCodeAt(e)] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
            return r
        }(e), t.replace(/(%[a-f0-9]{2})+/gi, function(t) {
            var e, n, r, i, o, a, s, c = "";
            for (e = 0, n = t.length; e < n; e += 3)(r = parseInt(t.slice(e + 1, e + 3), 16)) < 128 ? c += l[r] : 192 == (224 & r) && e + 3 < n && 128 == (192 & (i = parseInt(t.slice(e + 4, e + 6), 16))) ? (c += (s = r << 6 & 1984 | 63 & i) < 128 ? "��" : String.fromCharCode(s), e += 3) : 224 == (240 & r) && e + 6 < n && (i = parseInt(t.slice(e + 4, e + 6), 16), o = parseInt(t.slice(e + 7, e + 9), 16), 128 == (192 & i) && 128 == (192 & o)) ? (c += (s = r << 12 & 61440 | i << 6 & 4032 | 63 & o) < 2048 || 55296 <= s && s <= 57343 ? "���" : String.fromCharCode(s), e += 6) : 240 == (248 & r) && e + 9 < n && (i = parseInt(t.slice(e + 4, e + 6), 16), o = parseInt(t.slice(e + 7, e + 9), 16), a = parseInt(t.slice(e + 10, e + 12), 16), 128 == (192 & i) && 128 == (192 & o) && 128 == (192 & a)) ? ((s = r << 18 & 1835008 | i << 12 & 258048 | o << 6 & 4032 | 63 & a) < 65536 || 1114111 < s ? c += "����" : (s -= 65536, c += String.fromCharCode(55296 + (s >> 10), 56320 + (1023 & s))), e += 9) : c += "�";
            return c
        })
    }
    o.defaultChars = ";/?:@&=+$,#", o.componentChars = "";
    var S = /^([a-z0-9.+-]+:)/i,
        a = /:[0-9]*$/,
        L = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        s = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
        c = ["'"].concat(s),
        M = ["%", "/", "?", ";", "#"].concat(c),
        A = ["/", "?", "#"],
        T = /^[+a-z0-9A-Z_-]{0,63}$/,
        O = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        D = {
            javascript: !0,
            "javascript:": !0
        },
        P = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        };

    function h(t, e) {
        if (t && t instanceof p) return t;
        var n = new p;
        return n.parse(t, e), n
    }
    var p = (f.prototype.parse = function(t, e) {
        var n, r, i, o, a, s = t;
        if (s = s.trim(), !e && 1 === t.split("#").length) {
            var c = L.exec(s);
            if (c) return this.pathname = c[1], c[2] && (this.search = c[2]), this
        }
        var l, u = S.exec(s);
        if (u && (i = (l = u[0]).toLowerCase(), this.protocol = l, s = s.substr(l.length)), (e || l || s.match(/^\/\/[^@\/]+@[^@\/]+/)) && (!(a = "//" === s.substr(0, 2)) || l && D[l] || (s = s.substr(2), this.slashes = !0)), !D[l] && (a || l && !P[l])) {
            var h, p, f = -1;
            for (n = 0; n < A.length; n++) - 1 !== (o = s.indexOf(A[n])) && (-1 === f || o < f) && (f = o);
            for (-1 !== (p = -1 === f ? s.lastIndexOf("@") : s.lastIndexOf("@", f)) && (h = s.slice(0, p), s = s.slice(p + 1), this.auth = h), f = -1, n = 0; n < M.length; n++) - 1 !== (o = s.indexOf(M[n])) && (-1 === f || o < f) && (f = o); - 1 === f && (f = s.length), ":" === s[f - 1] && f--;
            var d = s.slice(0, f);
            s = s.slice(f), this.parseHost(d), this.hostname = this.hostname || "";
            var v = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!v) {
                var g = this.hostname.split(/\./);
                for (n = 0, r = g.length; n < r; n++) {
                    var m = g[n];
                    if (m && !m.match(T)) {
                        for (var y = "", b = 0, w = m.length; b < w; b++) 127 < m.charCodeAt(b) ? y += "x" : y += m[b];
                        if (!y.match(T)) {
                            var k = g.slice(0, n),
                                E = g.slice(n + 1),
                                C = m.match(O);
                            C && (k.push(C[1]), E.unshift(C[2])), E.length && (s = E.join(".") + s), this.hostname = k.join(".");
                            break
                        }
                    }
                }
            }
            255 < this.hostname.length && (this.hostname = ""), v && (this.hostname = this.hostname.substr(1, this.hostname.length - 2))
        }
        var x = s.indexOf("#"); - 1 !== x && (this.hash = s.substr(x), s = s.slice(0, x));
        var _ = s.indexOf("?");
        return -1 !== _ && (this.search = s.substr(_), s = s.slice(0, _)), s && (this.pathname = s), P[i] && this.hostname && !this.pathname && (this.pathname = ""), this
    }, f.prototype.parseHost = function(t) {
        var e, n = a.exec(t);
        n && (":" !== (e = n[0]) && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
    }, f);

    function f() {
        this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null
    }
}, function(t, e, n) {
    "use strict";
    e.a = {
        Aacute: "Á",
        aacute: "á",
        Abreve: "Ă",
        abreve: "ă",
        ac: "∾",
        acd: "∿",
        acE: "∾̳",
        Acirc: "Â",
        acirc: "â",
        acute: "´",
        Acy: "А",
        acy: "а",
        AElig: "Æ",
        aelig: "æ",
        af: "⁡",
        Afr: "𝔄",
        afr: "𝔞",
        Agrave: "À",
        agrave: "à",
        alefsym: "ℵ",
        aleph: "ℵ",
        Alpha: "Α",
        alpha: "α",
        Amacr: "Ā",
        amacr: "ā",
        amalg: "⨿",
        amp: "&",
        AMP: "&",
        andand: "⩕",
        And: "⩓",
        and: "∧",
        andd: "⩜",
        andslope: "⩘",
        andv: "⩚",
        ang: "∠",
        ange: "⦤",
        angle: "∠",
        angmsdaa: "⦨",
        angmsdab: "⦩",
        angmsdac: "⦪",
        angmsdad: "⦫",
        angmsdae: "⦬",
        angmsdaf: "⦭",
        angmsdag: "⦮",
        angmsdah: "⦯",
        angmsd: "∡",
        angrt: "∟",
        angrtvb: "⊾",
        angrtvbd: "⦝",
        angsph: "∢",
        angst: "Å",
        angzarr: "⍼",
        Aogon: "Ą",
        aogon: "ą",
        Aopf: "𝔸",
        aopf: "𝕒",
        apacir: "⩯",
        ap: "≈",
        apE: "⩰",
        ape: "≊",
        apid: "≋",
        apos: "'",
        ApplyFunction: "⁡",
        approx: "≈",
        approxeq: "≊",
        Aring: "Å",
        aring: "å",
        Ascr: "𝒜",
        ascr: "𝒶",
        Assign: "≔",
        ast: "*",
        asymp: "≈",
        asympeq: "≍",
        Atilde: "Ã",
        atilde: "ã",
        Auml: "Ä",
        auml: "ä",
        awconint: "∳",
        awint: "⨑",
        backcong: "≌",
        backepsilon: "϶",
        backprime: "‵",
        backsim: "∽",
        backsimeq: "⋍",
        Backslash: "∖",
        Barv: "⫧",
        barvee: "⊽",
        barwed: "⌅",
        Barwed: "⌆",
        barwedge: "⌅",
        bbrk: "⎵",
        bbrktbrk: "⎶",
        bcong: "≌",
        Bcy: "Б",
        bcy: "б",
        bdquo: "„",
        becaus: "∵",
        because: "∵",
        Because: "∵",
        bemptyv: "⦰",
        bepsi: "϶",
        bernou: "ℬ",
        Bernoullis: "ℬ",
        Beta: "Β",
        beta: "β",
        beth: "ℶ",
        between: "≬",
        Bfr: "𝔅",
        bfr: "𝔟",
        bigcap: "⋂",
        bigcirc: "◯",
        bigcup: "⋃",
        bigodot: "⨀",
        bigoplus: "⨁",
        bigotimes: "⨂",
        bigsqcup: "⨆",
        bigstar: "★",
        bigtriangledown: "▽",
        bigtriangleup: "△",
        biguplus: "⨄",
        bigvee: "⋁",
        bigwedge: "⋀",
        bkarow: "⤍",
        blacklozenge: "⧫",
        blacksquare: "▪",
        blacktriangle: "▴",
        blacktriangledown: "▾",
        blacktriangleleft: "◂",
        blacktriangleright: "▸",
        blank: "␣",
        blk12: "▒",
        blk14: "░",
        blk34: "▓",
        block: "█",
        bne: "=⃥",
        bnequiv: "≡⃥",
        bNot: "⫭",
        bnot: "⌐",
        Bopf: "𝔹",
        bopf: "𝕓",
        bot: "⊥",
        bottom: "⊥",
        bowtie: "⋈",
        boxbox: "⧉",
        boxdl: "┐",
        boxdL: "╕",
        boxDl: "╖",
        boxDL: "╗",
        boxdr: "┌",
        boxdR: "╒",
        boxDr: "╓",
        boxDR: "╔",
        boxh: "─",
        boxH: "═",
        boxhd: "┬",
        boxHd: "╤",
        boxhD: "╥",
        boxHD: "╦",
        boxhu: "┴",
        boxHu: "╧",
        boxhU: "╨",
        boxHU: "╩",
        boxminus: "⊟",
        boxplus: "⊞",
        boxtimes: "⊠",
        boxul: "┘",
        boxuL: "╛",
        boxUl: "╜",
        boxUL: "╝",
        boxur: "└",
        boxuR: "╘",
        boxUr: "╙",
        boxUR: "╚",
        boxv: "│",
        boxV: "║",
        boxvh: "┼",
        boxvH: "╪",
        boxVh: "╫",
        boxVH: "╬",
        boxvl: "┤",
        boxvL: "╡",
        boxVl: "╢",
        boxVL: "╣",
        boxvr: "├",
        boxvR: "╞",
        boxVr: "╟",
        boxVR: "╠",
        bprime: "‵",
        breve: "˘",
        Breve: "˘",
        brvbar: "¦",
        bscr: "𝒷",
        Bscr: "ℬ",
        bsemi: "⁏",
        bsim: "∽",
        bsime: "⋍",
        bsolb: "⧅",
        bsol: "\\",
        bsolhsub: "⟈",
        bull: "•",
        bullet: "•",
        bump: "≎",
        bumpE: "⪮",
        bumpe: "≏",
        Bumpeq: "≎",
        bumpeq: "≏",
        Cacute: "Ć",
        cacute: "ć",
        capand: "⩄",
        capbrcup: "⩉",
        capcap: "⩋",
        cap: "∩",
        Cap: "⋒",
        capcup: "⩇",
        capdot: "⩀",
        CapitalDifferentialD: "ⅅ",
        caps: "∩︀",
        caret: "⁁",
        caron: "ˇ",
        Cayleys: "ℭ",
        ccaps: "⩍",
        Ccaron: "Č",
        ccaron: "č",
        Ccedil: "Ç",
        ccedil: "ç",
        Ccirc: "Ĉ",
        ccirc: "ĉ",
        Cconint: "∰",
        ccups: "⩌",
        ccupssm: "⩐",
        Cdot: "Ċ",
        cdot: "ċ",
        cedil: "¸",
        Cedilla: "¸",
        cemptyv: "⦲",
        cent: "¢",
        centerdot: "·",
        CenterDot: "·",
        cfr: "𝔠",
        Cfr: "ℭ",
        CHcy: "Ч",
        chcy: "ч",
        check: "✓",
        checkmark: "✓",
        Chi: "Χ",
        chi: "χ",
        circ: "ˆ",
        circeq: "≗",
        circlearrowleft: "↺",
        circlearrowright: "↻",
        circledast: "⊛",
        circledcirc: "⊚",
        circleddash: "⊝",
        CircleDot: "⊙",
        circledR: "®",
        circledS: "Ⓢ",
        CircleMinus: "⊖",
        CirclePlus: "⊕",
        CircleTimes: "⊗",
        cir: "○",
        cirE: "⧃",
        cire: "≗",
        cirfnint: "⨐",
        cirmid: "⫯",
        cirscir: "⧂",
        ClockwiseContourIntegral: "∲",
        CloseCurlyDoubleQuote: "”",
        CloseCurlyQuote: "’",
        clubs: "♣",
        clubsuit: "♣",
        colon: ":",
        Colon: "∷",
        Colone: "⩴",
        colone: "≔",
        coloneq: "≔",
        comma: ",",
        commat: "@",
        comp: "∁",
        compfn: "∘",
        complement: "∁",
        complexes: "ℂ",
        cong: "≅",
        congdot: "⩭",
        Congruent: "≡",
        conint: "∮",
        Conint: "∯",
        ContourIntegral: "∮",
        copf: "𝕔",
        Copf: "ℂ",
        coprod: "∐",
        Coproduct: "∐",
        copy: "©",
        COPY: "©",
        copysr: "℗",
        CounterClockwiseContourIntegral: "∳",
        crarr: "↵",
        cross: "✗",
        Cross: "⨯",
        Cscr: "𝒞",
        cscr: "𝒸",
        csub: "⫏",
        csube: "⫑",
        csup: "⫐",
        csupe: "⫒",
        ctdot: "⋯",
        cudarrl: "⤸",
        cudarrr: "⤵",
        cuepr: "⋞",
        cuesc: "⋟",
        cularr: "↶",
        cularrp: "⤽",
        cupbrcap: "⩈",
        cupcap: "⩆",
        CupCap: "≍",
        cup: "∪",
        Cup: "⋓",
        cupcup: "⩊",
        cupdot: "⊍",
        cupor: "⩅",
        cups: "∪︀",
        curarr: "↷",
        curarrm: "⤼",
        curlyeqprec: "⋞",
        curlyeqsucc: "⋟",
        curlyvee: "⋎",
        curlywedge: "⋏",
        curren: "¤",
        curvearrowleft: "↶",
        curvearrowright: "↷",
        cuvee: "⋎",
        cuwed: "⋏",
        cwconint: "∲",
        cwint: "∱",
        cylcty: "⌭",
        dagger: "†",
        Dagger: "‡",
        daleth: "ℸ",
        darr: "↓",
        Darr: "↡",
        dArr: "⇓",
        dash: "‐",
        Dashv: "⫤",
        dashv: "⊣",
        dbkarow: "⤏",
        dblac: "˝",
        Dcaron: "Ď",
        dcaron: "ď",
        Dcy: "Д",
        dcy: "д",
        ddagger: "‡",
        ddarr: "⇊",
        DD: "ⅅ",
        dd: "ⅆ",
        DDotrahd: "⤑",
        ddotseq: "⩷",
        deg: "°",
        Del: "∇",
        Delta: "Δ",
        delta: "δ",
        demptyv: "⦱",
        dfisht: "⥿",
        Dfr: "𝔇",
        dfr: "𝔡",
        dHar: "⥥",
        dharl: "⇃",
        dharr: "⇂",
        DiacriticalAcute: "´",
        DiacriticalDot: "˙",
        DiacriticalDoubleAcute: "˝",
        DiacriticalGrave: "`",
        DiacriticalTilde: "˜",
        diam: "⋄",
        diamond: "⋄",
        Diamond: "⋄",
        diamondsuit: "♦",
        diams: "♦",
        die: "¨",
        DifferentialD: "ⅆ",
        digamma: "ϝ",
        disin: "⋲",
        div: "÷",
        divide: "÷",
        divideontimes: "⋇",
        divonx: "⋇",
        DJcy: "Ђ",
        djcy: "ђ",
        dlcorn: "⌞",
        dlcrop: "⌍",
        dollar: "$",
        Dopf: "𝔻",
        dopf: "𝕕",
        Dot: "¨",
        dot: "˙",
        DotDot: "⃜",
        doteq: "≐",
        doteqdot: "≑",
        DotEqual: "≐",
        dotminus: "∸",
        dotplus: "∔",
        dotsquare: "⊡",
        doublebarwedge: "⌆",
        DoubleContourIntegral: "∯",
        DoubleDot: "¨",
        DoubleDownArrow: "⇓",
        DoubleLeftArrow: "⇐",
        DoubleLeftRightArrow: "⇔",
        DoubleLeftTee: "⫤",
        DoubleLongLeftArrow: "⟸",
        DoubleLongLeftRightArrow: "⟺",
        DoubleLongRightArrow: "⟹",
        DoubleRightArrow: "⇒",
        DoubleRightTee: "⊨",
        DoubleUpArrow: "⇑",
        DoubleUpDownArrow: "⇕",
        DoubleVerticalBar: "∥",
        DownArrowBar: "⤓",
        downarrow: "↓",
        DownArrow: "↓",
        Downarrow: "⇓",
        DownArrowUpArrow: "⇵",
        DownBreve: "̑",
        downdownarrows: "⇊",
        downharpoonleft: "⇃",
        downharpoonright: "⇂",
        DownLeftRightVector: "⥐",
        DownLeftTeeVector: "⥞",
        DownLeftVectorBar: "⥖",
        DownLeftVector: "↽",
        DownRightTeeVector: "⥟",
        DownRightVectorBar: "⥗",
        DownRightVector: "⇁",
        DownTeeArrow: "↧",
        DownTee: "⊤",
        drbkarow: "⤐",
        drcorn: "⌟",
        drcrop: "⌌",
        Dscr: "𝒟",
        dscr: "𝒹",
        DScy: "Ѕ",
        dscy: "ѕ",
        dsol: "⧶",
        Dstrok: "Đ",
        dstrok: "đ",
        dtdot: "⋱",
        dtri: "▿",
        dtrif: "▾",
        duarr: "⇵",
        duhar: "⥯",
        dwangle: "⦦",
        DZcy: "Џ",
        dzcy: "џ",
        dzigrarr: "⟿",
        Eacute: "É",
        eacute: "é",
        easter: "⩮",
        Ecaron: "Ě",
        ecaron: "ě",
        Ecirc: "Ê",
        ecirc: "ê",
        ecir: "≖",
        ecolon: "≕",
        Ecy: "Э",
        ecy: "э",
        eDDot: "⩷",
        Edot: "Ė",
        edot: "ė",
        eDot: "≑",
        ee: "ⅇ",
        efDot: "≒",
        Efr: "𝔈",
        efr: "𝔢",
        eg: "⪚",
        Egrave: "È",
        egrave: "è",
        egs: "⪖",
        egsdot: "⪘",
        el: "⪙",
        Element: "∈",
        elinters: "⏧",
        ell: "ℓ",
        els: "⪕",
        elsdot: "⪗",
        Emacr: "Ē",
        emacr: "ē",
        empty: "∅",
        emptyset: "∅",
        EmptySmallSquare: "◻",
        emptyv: "∅",
        EmptyVerySmallSquare: "▫",
        emsp13: " ",
        emsp14: " ",
        emsp: " ",
        ENG: "Ŋ",
        eng: "ŋ",
        ensp: " ",
        Eogon: "Ę",
        eogon: "ę",
        Eopf: "𝔼",
        eopf: "𝕖",
        epar: "⋕",
        eparsl: "⧣",
        eplus: "⩱",
        epsi: "ε",
        Epsilon: "Ε",
        epsilon: "ε",
        epsiv: "ϵ",
        eqcirc: "≖",
        eqcolon: "≕",
        eqsim: "≂",
        eqslantgtr: "⪖",
        eqslantless: "⪕",
        Equal: "⩵",
        equals: "=",
        EqualTilde: "≂",
        equest: "≟",
        Equilibrium: "⇌",
        equiv: "≡",
        equivDD: "⩸",
        eqvparsl: "⧥",
        erarr: "⥱",
        erDot: "≓",
        escr: "ℯ",
        Escr: "ℰ",
        esdot: "≐",
        Esim: "⩳",
        esim: "≂",
        Eta: "Η",
        eta: "η",
        ETH: "Ð",
        eth: "ð",
        Euml: "Ë",
        euml: "ë",
        euro: "€",
        excl: "!",
        exist: "∃",
        Exists: "∃",
        expectation: "ℰ",
        exponentiale: "ⅇ",
        ExponentialE: "ⅇ",
        fallingdotseq: "≒",
        Fcy: "Ф",
        fcy: "ф",
        female: "♀",
        ffilig: "ﬃ",
        fflig: "ﬀ",
        ffllig: "ﬄ",
        Ffr: "𝔉",
        ffr: "𝔣",
        filig: "ﬁ",
        FilledSmallSquare: "◼",
        FilledVerySmallSquare: "▪",
        fjlig: "fj",
        flat: "♭",
        fllig: "ﬂ",
        fltns: "▱",
        fnof: "ƒ",
        Fopf: "𝔽",
        fopf: "𝕗",
        forall: "∀",
        ForAll: "∀",
        fork: "⋔",
        forkv: "⫙",
        Fouriertrf: "ℱ",
        fpartint: "⨍",
        frac12: "½",
        frac13: "⅓",
        frac14: "¼",
        frac15: "⅕",
        frac16: "⅙",
        frac18: "⅛",
        frac23: "⅔",
        frac25: "⅖",
        frac34: "¾",
        frac35: "⅗",
        frac38: "⅜",
        frac45: "⅘",
        frac56: "⅚",
        frac58: "⅝",
        frac78: "⅞",
        frasl: "⁄",
        frown: "⌢",
        fscr: "𝒻",
        Fscr: "ℱ",
        gacute: "ǵ",
        Gamma: "Γ",
        gamma: "γ",
        Gammad: "Ϝ",
        gammad: "ϝ",
        gap: "⪆",
        Gbreve: "Ğ",
        gbreve: "ğ",
        Gcedil: "Ģ",
        Gcirc: "Ĝ",
        gcirc: "ĝ",
        Gcy: "Г",
        gcy: "г",
        Gdot: "Ġ",
        gdot: "ġ",
        ge: "≥",
        gE: "≧",
        gEl: "⪌",
        gel: "⋛",
        geq: "≥",
        geqq: "≧",
        geqslant: "⩾",
        gescc: "⪩",
        ges: "⩾",
        gesdot: "⪀",
        gesdoto: "⪂",
        gesdotol: "⪄",
        gesl: "⋛︀",
        gesles: "⪔",
        Gfr: "𝔊",
        gfr: "𝔤",
        gg: "≫",
        Gg: "⋙",
        ggg: "⋙",
        gimel: "ℷ",
        GJcy: "Ѓ",
        gjcy: "ѓ",
        gla: "⪥",
        gl: "≷",
        glE: "⪒",
        glj: "⪤",
        gnap: "⪊",
        gnapprox: "⪊",
        gne: "⪈",
        gnE: "≩",
        gneq: "⪈",
        gneqq: "≩",
        gnsim: "⋧",
        Gopf: "𝔾",
        gopf: "𝕘",
        grave: "`",
        GreaterEqual: "≥",
        GreaterEqualLess: "⋛",
        GreaterFullEqual: "≧",
        GreaterGreater: "⪢",
        GreaterLess: "≷",
        GreaterSlantEqual: "⩾",
        GreaterTilde: "≳",
        Gscr: "𝒢",
        gscr: "ℊ",
        gsim: "≳",
        gsime: "⪎",
        gsiml: "⪐",
        gtcc: "⪧",
        gtcir: "⩺",
        gt: ">",
        GT: ">",
        Gt: "≫",
        gtdot: "⋗",
        gtlPar: "⦕",
        gtquest: "⩼",
        gtrapprox: "⪆",
        gtrarr: "⥸",
        gtrdot: "⋗",
        gtreqless: "⋛",
        gtreqqless: "⪌",
        gtrless: "≷",
        gtrsim: "≳",
        gvertneqq: "≩︀",
        gvnE: "≩︀",
        Hacek: "ˇ",
        hairsp: " ",
        half: "½",
        hamilt: "ℋ",
        HARDcy: "Ъ",
        hardcy: "ъ",
        harrcir: "⥈",
        harr: "↔",
        hArr: "⇔",
        harrw: "↭",
        Hat: "^",
        hbar: "ℏ",
        Hcirc: "Ĥ",
        hcirc: "ĥ",
        hearts: "♥",
        heartsuit: "♥",
        hellip: "…",
        hercon: "⊹",
        hfr: "𝔥",
        Hfr: "ℌ",
        HilbertSpace: "ℋ",
        hksearow: "⤥",
        hkswarow: "⤦",
        hoarr: "⇿",
        homtht: "∻",
        hookleftarrow: "↩",
        hookrightarrow: "↪",
        hopf: "𝕙",
        Hopf: "ℍ",
        horbar: "―",
        HorizontalLine: "─",
        hscr: "𝒽",
        Hscr: "ℋ",
        hslash: "ℏ",
        Hstrok: "Ħ",
        hstrok: "ħ",
        HumpDownHump: "≎",
        HumpEqual: "≏",
        hybull: "⁃",
        hyphen: "‐",
        Iacute: "Í",
        iacute: "í",
        ic: "⁣",
        Icirc: "Î",
        icirc: "î",
        Icy: "И",
        icy: "и",
        Idot: "İ",
        IEcy: "Е",
        iecy: "е",
        iexcl: "¡",
        iff: "⇔",
        ifr: "𝔦",
        Ifr: "ℑ",
        Igrave: "Ì",
        igrave: "ì",
        ii: "ⅈ",
        iiiint: "⨌",
        iiint: "∭",
        iinfin: "⧜",
        iiota: "℩",
        IJlig: "Ĳ",
        ijlig: "ĳ",
        Imacr: "Ī",
        imacr: "ī",
        image: "ℑ",
        ImaginaryI: "ⅈ",
        imagline: "ℐ",
        imagpart: "ℑ",
        imath: "ı",
        Im: "ℑ",
        imof: "⊷",
        imped: "Ƶ",
        Implies: "⇒",
        incare: "℅",
        in: "∈",
        infin: "∞",
        infintie: "⧝",
        inodot: "ı",
        intcal: "⊺",
        int: "∫",
        Int: "∬",
        integers: "ℤ",
        Integral: "∫",
        intercal: "⊺",
        Intersection: "⋂",
        intlarhk: "⨗",
        intprod: "⨼",
        InvisibleComma: "⁣",
        InvisibleTimes: "⁢",
        IOcy: "Ё",
        iocy: "ё",
        Iogon: "Į",
        iogon: "į",
        Iopf: "𝕀",
        iopf: "𝕚",
        Iota: "Ι",
        iota: "ι",
        iprod: "⨼",
        iquest: "¿",
        iscr: "𝒾",
        Iscr: "ℐ",
        isin: "∈",
        isindot: "⋵",
        isinE: "⋹",
        isins: "⋴",
        isinsv: "⋳",
        isinv: "∈",
        it: "⁢",
        Itilde: "Ĩ",
        itilde: "ĩ",
        Iukcy: "І",
        iukcy: "і",
        Iuml: "Ï",
        iuml: "ï",
        Jcirc: "Ĵ",
        jcirc: "ĵ",
        Jcy: "Й",
        jcy: "й",
        Jfr: "𝔍",
        jfr: "𝔧",
        jmath: "ȷ",
        Jopf: "𝕁",
        jopf: "𝕛",
        Jscr: "𝒥",
        jscr: "𝒿",
        Jsercy: "Ј",
        jsercy: "ј",
        Jukcy: "Є",
        jukcy: "є",
        Kappa: "Κ",
        kappa: "κ",
        kappav: "ϰ",
        Kcedil: "Ķ",
        kcedil: "ķ",
        Kcy: "К",
        kcy: "к",
        Kfr: "𝔎",
        kfr: "𝔨",
        kgreen: "ĸ",
        KHcy: "Х",
        khcy: "х",
        KJcy: "Ќ",
        kjcy: "ќ",
        Kopf: "𝕂",
        kopf: "𝕜",
        Kscr: "𝒦",
        kscr: "𝓀",
        lAarr: "⇚",
        Lacute: "Ĺ",
        lacute: "ĺ",
        laemptyv: "⦴",
        lagran: "ℒ",
        Lambda: "Λ",
        lambda: "λ",
        lang: "⟨",
        Lang: "⟪",
        langd: "⦑",
        langle: "⟨",
        lap: "⪅",
        Laplacetrf: "ℒ",
        laquo: "«",
        larrb: "⇤",
        larrbfs: "⤟",
        larr: "←",
        Larr: "↞",
        lArr: "⇐",
        larrfs: "⤝",
        larrhk: "↩",
        larrlp: "↫",
        larrpl: "⤹",
        larrsim: "⥳",
        larrtl: "↢",
        latail: "⤙",
        lAtail: "⤛",
        lat: "⪫",
        late: "⪭",
        lates: "⪭︀",
        lbarr: "⤌",
        lBarr: "⤎",
        lbbrk: "❲",
        lbrace: "{",
        lbrack: "[",
        lbrke: "⦋",
        lbrksld: "⦏",
        lbrkslu: "⦍",
        Lcaron: "Ľ",
        lcaron: "ľ",
        Lcedil: "Ļ",
        lcedil: "ļ",
        lceil: "⌈",
        lcub: "{",
        Lcy: "Л",
        lcy: "л",
        ldca: "⤶",
        ldquo: "“",
        ldquor: "„",
        ldrdhar: "⥧",
        ldrushar: "⥋",
        ldsh: "↲",
        le: "≤",
        lE: "≦",
        LeftAngleBracket: "⟨",
        LeftArrowBar: "⇤",
        leftarrow: "←",
        LeftArrow: "←",
        Leftarrow: "⇐",
        LeftArrowRightArrow: "⇆",
        leftarrowtail: "↢",
        LeftCeiling: "⌈",
        LeftDoubleBracket: "⟦",
        LeftDownTeeVector: "⥡",
        LeftDownVectorBar: "⥙",
        LeftDownVector: "⇃",
        LeftFloor: "⌊",
        leftharpoondown: "↽",
        leftharpoonup: "↼",
        leftleftarrows: "⇇",
        leftrightarrow: "↔",
        LeftRightArrow: "↔",
        Leftrightarrow: "⇔",
        leftrightarrows: "⇆",
        leftrightharpoons: "⇋",
        leftrightsquigarrow: "↭",
        LeftRightVector: "⥎",
        LeftTeeArrow: "↤",
        LeftTee: "⊣",
        LeftTeeVector: "⥚",
        leftthreetimes: "⋋",
        LeftTriangleBar: "⧏",
        LeftTriangle: "⊲",
        LeftTriangleEqual: "⊴",
        LeftUpDownVector: "⥑",
        LeftUpTeeVector: "⥠",
        LeftUpVectorBar: "⥘",
        LeftUpVector: "↿",
        LeftVectorBar: "⥒",
        LeftVector: "↼",
        lEg: "⪋",
        leg: "⋚",
        leq: "≤",
        leqq: "≦",
        leqslant: "⩽",
        lescc: "⪨",
        les: "⩽",
        lesdot: "⩿",
        lesdoto: "⪁",
        lesdotor: "⪃",
        lesg: "⋚︀",
        lesges: "⪓",
        lessapprox: "⪅",
        lessdot: "⋖",
        lesseqgtr: "⋚",
        lesseqqgtr: "⪋",
        LessEqualGreater: "⋚",
        LessFullEqual: "≦",
        LessGreater: "≶",
        lessgtr: "≶",
        LessLess: "⪡",
        lesssim: "≲",
        LessSlantEqual: "⩽",
        LessTilde: "≲",
        lfisht: "⥼",
        lfloor: "⌊",
        Lfr: "𝔏",
        lfr: "𝔩",
        lg: "≶",
        lgE: "⪑",
        lHar: "⥢",
        lhard: "↽",
        lharu: "↼",
        lharul: "⥪",
        lhblk: "▄",
        LJcy: "Љ",
        ljcy: "љ",
        llarr: "⇇",
        ll: "≪",
        Ll: "⋘",
        llcorner: "⌞",
        Lleftarrow: "⇚",
        llhard: "⥫",
        lltri: "◺",
        Lmidot: "Ŀ",
        lmidot: "ŀ",
        lmoustache: "⎰",
        lmoust: "⎰",
        lnap: "⪉",
        lnapprox: "⪉",
        lne: "⪇",
        lnE: "≨",
        lneq: "⪇",
        lneqq: "≨",
        lnsim: "⋦",
        loang: "⟬",
        loarr: "⇽",
        lobrk: "⟦",
        longleftarrow: "⟵",
        LongLeftArrow: "⟵",
        Longleftarrow: "⟸",
        longleftrightarrow: "⟷",
        LongLeftRightArrow: "⟷",
        Longleftrightarrow: "⟺",
        longmapsto: "⟼",
        longrightarrow: "⟶",
        LongRightArrow: "⟶",
        Longrightarrow: "⟹",
        looparrowleft: "↫",
        looparrowright: "↬",
        lopar: "⦅",
        Lopf: "𝕃",
        lopf: "𝕝",
        loplus: "⨭",
        lotimes: "⨴",
        lowast: "∗",
        lowbar: "_",
        LowerLeftArrow: "↙",
        LowerRightArrow: "↘",
        loz: "◊",
        lozenge: "◊",
        lozf: "⧫",
        lpar: "(",
        lparlt: "⦓",
        lrarr: "⇆",
        lrcorner: "⌟",
        lrhar: "⇋",
        lrhard: "⥭",
        lrm: "‎",
        lrtri: "⊿",
        lsaquo: "‹",
        lscr: "𝓁",
        Lscr: "ℒ",
        lsh: "↰",
        Lsh: "↰",
        lsim: "≲",
        lsime: "⪍",
        lsimg: "⪏",
        lsqb: "[",
        lsquo: "‘",
        lsquor: "‚",
        Lstrok: "Ł",
        lstrok: "ł",
        ltcc: "⪦",
        ltcir: "⩹",
        lt: "<",
        LT: "<",
        Lt: "≪",
        ltdot: "⋖",
        lthree: "⋋",
        ltimes: "⋉",
        ltlarr: "⥶",
        ltquest: "⩻",
        ltri: "◃",
        ltrie: "⊴",
        ltrif: "◂",
        ltrPar: "⦖",
        lurdshar: "⥊",
        luruhar: "⥦",
        lvertneqq: "≨︀",
        lvnE: "≨︀",
        macr: "¯",
        male: "♂",
        malt: "✠",
        maltese: "✠",
        Map: "⤅",
        map: "↦",
        mapsto: "↦",
        mapstodown: "↧",
        mapstoleft: "↤",
        mapstoup: "↥",
        marker: "▮",
        mcomma: "⨩",
        Mcy: "М",
        mcy: "м",
        mdash: "—",
        mDDot: "∺",
        measuredangle: "∡",
        MediumSpace: " ",
        Mellintrf: "ℳ",
        Mfr: "𝔐",
        mfr: "𝔪",
        mho: "℧",
        micro: "µ",
        midast: "*",
        midcir: "⫰",
        mid: "∣",
        middot: "·",
        minusb: "⊟",
        minus: "−",
        minusd: "∸",
        minusdu: "⨪",
        MinusPlus: "∓",
        mlcp: "⫛",
        mldr: "…",
        mnplus: "∓",
        models: "⊧",
        Mopf: "𝕄",
        mopf: "𝕞",
        mp: "∓",
        mscr: "𝓂",
        Mscr: "ℳ",
        mstpos: "∾",
        Mu: "Μ",
        mu: "μ",
        multimap: "⊸",
        mumap: "⊸",
        nabla: "∇",
        Nacute: "Ń",
        nacute: "ń",
        nang: "∠⃒",
        nap: "≉",
        napE: "⩰̸",
        napid: "≋̸",
        napos: "ŉ",
        napprox: "≉",
        natural: "♮",
        naturals: "ℕ",
        natur: "♮",
        nbsp: " ",
        nbump: "≎̸",
        nbumpe: "≏̸",
        ncap: "⩃",
        Ncaron: "Ň",
        ncaron: "ň",
        Ncedil: "Ņ",
        ncedil: "ņ",
        ncong: "≇",
        ncongdot: "⩭̸",
        ncup: "⩂",
        Ncy: "Н",
        ncy: "н",
        ndash: "–",
        nearhk: "⤤",
        nearr: "↗",
        neArr: "⇗",
        nearrow: "↗",
        ne: "≠",
        nedot: "≐̸",
        NegativeMediumSpace: "​",
        NegativeThickSpace: "​",
        NegativeThinSpace: "​",
        NegativeVeryThinSpace: "​",
        nequiv: "≢",
        nesear: "⤨",
        nesim: "≂̸",
        NestedGreaterGreater: "≫",
        NestedLessLess: "≪",
        NewLine: "\n",
        nexist: "∄",
        nexists: "∄",
        Nfr: "𝔑",
        nfr: "𝔫",
        ngE: "≧̸",
        nge: "≱",
        ngeq: "≱",
        ngeqq: "≧̸",
        ngeqslant: "⩾̸",
        nges: "⩾̸",
        nGg: "⋙̸",
        ngsim: "≵",
        nGt: "≫⃒",
        ngt: "≯",
        ngtr: "≯",
        nGtv: "≫̸",
        nharr: "↮",
        nhArr: "⇎",
        nhpar: "⫲",
        ni: "∋",
        nis: "⋼",
        nisd: "⋺",
        niv: "∋",
        NJcy: "Њ",
        njcy: "њ",
        nlarr: "↚",
        nlArr: "⇍",
        nldr: "‥",
        nlE: "≦̸",
        nle: "≰",
        nleftarrow: "↚",
        nLeftarrow: "⇍",
        nleftrightarrow: "↮",
        nLeftrightarrow: "⇎",
        nleq: "≰",
        nleqq: "≦̸",
        nleqslant: "⩽̸",
        nles: "⩽̸",
        nless: "≮",
        nLl: "⋘̸",
        nlsim: "≴",
        nLt: "≪⃒",
        nlt: "≮",
        nltri: "⋪",
        nltrie: "⋬",
        nLtv: "≪̸",
        nmid: "∤",
        NoBreak: "⁠",
        NonBreakingSpace: " ",
        nopf: "𝕟",
        Nopf: "ℕ",
        Not: "⫬",
        not: "¬",
        NotCongruent: "≢",
        NotCupCap: "≭",
        NotDoubleVerticalBar: "∦",
        NotElement: "∉",
        NotEqual: "≠",
        NotEqualTilde: "≂̸",
        NotExists: "∄",
        NotGreater: "≯",
        NotGreaterEqual: "≱",
        NotGreaterFullEqual: "≧̸",
        NotGreaterGreater: "≫̸",
        NotGreaterLess: "≹",
        NotGreaterSlantEqual: "⩾̸",
        NotGreaterTilde: "≵",
        NotHumpDownHump: "≎̸",
        NotHumpEqual: "≏̸",
        notin: "∉",
        notindot: "⋵̸",
        notinE: "⋹̸",
        notinva: "∉",
        notinvb: "⋷",
        notinvc: "⋶",
        NotLeftTriangleBar: "⧏̸",
        NotLeftTriangle: "⋪",
        NotLeftTriangleEqual: "⋬",
        NotLess: "≮",
        NotLessEqual: "≰",
        NotLessGreater: "≸",
        NotLessLess: "≪̸",
        NotLessSlantEqual: "⩽̸",
        NotLessTilde: "≴",
        NotNestedGreaterGreater: "⪢̸",
        NotNestedLessLess: "⪡̸",
        notni: "∌",
        notniva: "∌",
        notnivb: "⋾",
        notnivc: "⋽",
        NotPrecedes: "⊀",
        NotPrecedesEqual: "⪯̸",
        NotPrecedesSlantEqual: "⋠",
        NotReverseElement: "∌",
        NotRightTriangleBar: "⧐̸",
        NotRightTriangle: "⋫",
        NotRightTriangleEqual: "⋭",
        NotSquareSubset: "⊏̸",
        NotSquareSubsetEqual: "⋢",
        NotSquareSuperset: "⊐̸",
        NotSquareSupersetEqual: "⋣",
        NotSubset: "⊂⃒",
        NotSubsetEqual: "⊈",
        NotSucceeds: "⊁",
        NotSucceedsEqual: "⪰̸",
        NotSucceedsSlantEqual: "⋡",
        NotSucceedsTilde: "≿̸",
        NotSuperset: "⊃⃒",
        NotSupersetEqual: "⊉",
        NotTilde: "≁",
        NotTildeEqual: "≄",
        NotTildeFullEqual: "≇",
        NotTildeTilde: "≉",
        NotVerticalBar: "∤",
        nparallel: "∦",
        npar: "∦",
        nparsl: "⫽⃥",
        npart: "∂̸",
        npolint: "⨔",
        npr: "⊀",
        nprcue: "⋠",
        nprec: "⊀",
        npreceq: "⪯̸",
        npre: "⪯̸",
        nrarrc: "⤳̸",
        nrarr: "↛",
        nrArr: "⇏",
        nrarrw: "↝̸",
        nrightarrow: "↛",
        nRightarrow: "⇏",
        nrtri: "⋫",
        nrtrie: "⋭",
        nsc: "⊁",
        nsccue: "⋡",
        nsce: "⪰̸",
        Nscr: "𝒩",
        nscr: "𝓃",
        nshortmid: "∤",
        nshortparallel: "∦",
        nsim: "≁",
        nsime: "≄",
        nsimeq: "≄",
        nsmid: "∤",
        nspar: "∦",
        nsqsube: "⋢",
        nsqsupe: "⋣",
        nsub: "⊄",
        nsubE: "⫅̸",
        nsube: "⊈",
        nsubset: "⊂⃒",
        nsubseteq: "⊈",
        nsubseteqq: "⫅̸",
        nsucc: "⊁",
        nsucceq: "⪰̸",
        nsup: "⊅",
        nsupE: "⫆̸",
        nsupe: "⊉",
        nsupset: "⊃⃒",
        nsupseteq: "⊉",
        nsupseteqq: "⫆̸",
        ntgl: "≹",
        Ntilde: "Ñ",
        ntilde: "ñ",
        ntlg: "≸",
        ntriangleleft: "⋪",
        ntrianglelefteq: "⋬",
        ntriangleright: "⋫",
        ntrianglerighteq: "⋭",
        Nu: "Ν",
        nu: "ν",
        num: "#",
        numero: "№",
        numsp: " ",
        nvap: "≍⃒",
        nvdash: "⊬",
        nvDash: "⊭",
        nVdash: "⊮",
        nVDash: "⊯",
        nvge: "≥⃒",
        nvgt: ">⃒",
        nvHarr: "⤄",
        nvinfin: "⧞",
        nvlArr: "⤂",
        nvle: "≤⃒",
        nvlt: "<⃒",
        nvltrie: "⊴⃒",
        nvrArr: "⤃",
        nvrtrie: "⊵⃒",
        nvsim: "∼⃒",
        nwarhk: "⤣",
        nwarr: "↖",
        nwArr: "⇖",
        nwarrow: "↖",
        nwnear: "⤧",
        Oacute: "Ó",
        oacute: "ó",
        oast: "⊛",
        Ocirc: "Ô",
        ocirc: "ô",
        ocir: "⊚",
        Ocy: "О",
        ocy: "о",
        odash: "⊝",
        Odblac: "Ő",
        odblac: "ő",
        odiv: "⨸",
        odot: "⊙",
        odsold: "⦼",
        OElig: "Œ",
        oelig: "œ",
        ofcir: "⦿",
        Ofr: "𝔒",
        ofr: "𝔬",
        ogon: "˛",
        Ograve: "Ò",
        ograve: "ò",
        ogt: "⧁",
        ohbar: "⦵",
        ohm: "Ω",
        oint: "∮",
        olarr: "↺",
        olcir: "⦾",
        olcross: "⦻",
        oline: "‾",
        olt: "⧀",
        Omacr: "Ō",
        omacr: "ō",
        Omega: "Ω",
        omega: "ω",
        Omicron: "Ο",
        omicron: "ο",
        omid: "⦶",
        ominus: "⊖",
        Oopf: "𝕆",
        oopf: "𝕠",
        opar: "⦷",
        OpenCurlyDoubleQuote: "“",
        OpenCurlyQuote: "‘",
        operp: "⦹",
        oplus: "⊕",
        orarr: "↻",
        Or: "⩔",
        or: "∨",
        ord: "⩝",
        order: "ℴ",
        orderof: "ℴ",
        ordf: "ª",
        ordm: "º",
        origof: "⊶",
        oror: "⩖",
        orslope: "⩗",
        orv: "⩛",
        oS: "Ⓢ",
        Oscr: "𝒪",
        oscr: "ℴ",
        Oslash: "Ø",
        oslash: "ø",
        osol: "⊘",
        Otilde: "Õ",
        otilde: "õ",
        otimesas: "⨶",
        Otimes: "⨷",
        otimes: "⊗",
        Ouml: "Ö",
        ouml: "ö",
        ovbar: "⌽",
        OverBar: "‾",
        OverBrace: "⏞",
        OverBracket: "⎴",
        OverParenthesis: "⏜",
        para: "¶",
        parallel: "∥",
        par: "∥",
        parsim: "⫳",
        parsl: "⫽",
        part: "∂",
        PartialD: "∂",
        Pcy: "П",
        pcy: "п",
        percnt: "%",
        period: ".",
        permil: "‰",
        perp: "⊥",
        pertenk: "‱",
        Pfr: "𝔓",
        pfr: "𝔭",
        Phi: "Φ",
        phi: "φ",
        phiv: "ϕ",
        phmmat: "ℳ",
        phone: "☎",
        Pi: "Π",
        pi: "π",
        pitchfork: "⋔",
        piv: "ϖ",
        planck: "ℏ",
        planckh: "ℎ",
        plankv: "ℏ",
        plusacir: "⨣",
        plusb: "⊞",
        pluscir: "⨢",
        plus: "+",
        plusdo: "∔",
        plusdu: "⨥",
        pluse: "⩲",
        PlusMinus: "±",
        plusmn: "±",
        plussim: "⨦",
        plustwo: "⨧",
        pm: "±",
        Poincareplane: "ℌ",
        pointint: "⨕",
        popf: "𝕡",
        Popf: "ℙ",
        pound: "£",
        prap: "⪷",
        Pr: "⪻",
        pr: "≺",
        prcue: "≼",
        precapprox: "⪷",
        prec: "≺",
        preccurlyeq: "≼",
        Precedes: "≺",
        PrecedesEqual: "⪯",
        PrecedesSlantEqual: "≼",
        PrecedesTilde: "≾",
        preceq: "⪯",
        precnapprox: "⪹",
        precneqq: "⪵",
        precnsim: "⋨",
        pre: "⪯",
        prE: "⪳",
        precsim: "≾",
        prime: "′",
        Prime: "″",
        primes: "ℙ",
        prnap: "⪹",
        prnE: "⪵",
        prnsim: "⋨",
        prod: "∏",
        Product: "∏",
        profalar: "⌮",
        profline: "⌒",
        profsurf: "⌓",
        prop: "∝",
        Proportional: "∝",
        Proportion: "∷",
        propto: "∝",
        prsim: "≾",
        prurel: "⊰",
        Pscr: "𝒫",
        pscr: "𝓅",
        Psi: "Ψ",
        psi: "ψ",
        puncsp: " ",
        Qfr: "𝔔",
        qfr: "𝔮",
        qint: "⨌",
        qopf: "𝕢",
        Qopf: "ℚ",
        qprime: "⁗",
        Qscr: "𝒬",
        qscr: "𝓆",
        quaternions: "ℍ",
        quatint: "⨖",
        quest: "?",
        questeq: "≟",
        quot: '"',
        QUOT: '"',
        rAarr: "⇛",
        race: "∽̱",
        Racute: "Ŕ",
        racute: "ŕ",
        radic: "√",
        raemptyv: "⦳",
        rang: "⟩",
        Rang: "⟫",
        rangd: "⦒",
        range: "⦥",
        rangle: "⟩",
        raquo: "»",
        rarrap: "⥵",
        rarrb: "⇥",
        rarrbfs: "⤠",
        rarrc: "⤳",
        rarr: "→",
        Rarr: "↠",
        rArr: "⇒",
        rarrfs: "⤞",
        rarrhk: "↪",
        rarrlp: "↬",
        rarrpl: "⥅",
        rarrsim: "⥴",
        Rarrtl: "⤖",
        rarrtl: "↣",
        rarrw: "↝",
        ratail: "⤚",
        rAtail: "⤜",
        ratio: "∶",
        rationals: "ℚ",
        rbarr: "⤍",
        rBarr: "⤏",
        RBarr: "⤐",
        rbbrk: "❳",
        rbrace: "}",
        rbrack: "]",
        rbrke: "⦌",
        rbrksld: "⦎",
        rbrkslu: "⦐",
        Rcaron: "Ř",
        rcaron: "ř",
        Rcedil: "Ŗ",
        rcedil: "ŗ",
        rceil: "⌉",
        rcub: "}",
        Rcy: "Р",
        rcy: "р",
        rdca: "⤷",
        rdldhar: "⥩",
        rdquo: "”",
        rdquor: "”",
        rdsh: "↳",
        real: "ℜ",
        realine: "ℛ",
        realpart: "ℜ",
        reals: "ℝ",
        Re: "ℜ",
        rect: "▭",
        reg: "®",
        REG: "®",
        ReverseElement: "∋",
        ReverseEquilibrium: "⇋",
        ReverseUpEquilibrium: "⥯",
        rfisht: "⥽",
        rfloor: "⌋",
        rfr: "𝔯",
        Rfr: "ℜ",
        rHar: "⥤",
        rhard: "⇁",
        rharu: "⇀",
        rharul: "⥬",
        Rho: "Ρ",
        rho: "ρ",
        rhov: "ϱ",
        RightAngleBracket: "⟩",
        RightArrowBar: "⇥",
        rightarrow: "→",
        RightArrow: "→",
        Rightarrow: "⇒",
        RightArrowLeftArrow: "⇄",
        rightarrowtail: "↣",
        RightCeiling: "⌉",
        RightDoubleBracket: "⟧",
        RightDownTeeVector: "⥝",
        RightDownVectorBar: "⥕",
        RightDownVector: "⇂",
        RightFloor: "⌋",
        rightharpoondown: "⇁",
        rightharpoonup: "⇀",
        rightleftarrows: "⇄",
        rightleftharpoons: "⇌",
        rightrightarrows: "⇉",
        rightsquigarrow: "↝",
        RightTeeArrow: "↦",
        RightTee: "⊢",
        RightTeeVector: "⥛",
        rightthreetimes: "⋌",
        RightTriangleBar: "⧐",
        RightTriangle: "⊳",
        RightTriangleEqual: "⊵",
        RightUpDownVector: "⥏",
        RightUpTeeVector: "⥜",
        RightUpVectorBar: "⥔",
        RightUpVector: "↾",
        RightVectorBar: "⥓",
        RightVector: "⇀",
        ring: "˚",
        risingdotseq: "≓",
        rlarr: "⇄",
        rlhar: "⇌",
        rlm: "‏",
        rmoustache: "⎱",
        rmoust: "⎱",
        rnmid: "⫮",
        roang: "⟭",
        roarr: "⇾",
        robrk: "⟧",
        ropar: "⦆",
        ropf: "𝕣",
        Ropf: "ℝ",
        roplus: "⨮",
        rotimes: "⨵",
        RoundImplies: "⥰",
        rpar: ")",
        rpargt: "⦔",
        rppolint: "⨒",
        rrarr: "⇉",
        Rrightarrow: "⇛",
        rsaquo: "›",
        rscr: "𝓇",
        Rscr: "ℛ",
        rsh: "↱",
        Rsh: "↱",
        rsqb: "]",
        rsquo: "’",
        rsquor: "’",
        rthree: "⋌",
        rtimes: "⋊",
        rtri: "▹",
        rtrie: "⊵",
        rtrif: "▸",
        rtriltri: "⧎",
        RuleDelayed: "⧴",
        ruluhar: "⥨",
        rx: "℞",
        Sacute: "Ś",
        sacute: "ś",
        sbquo: "‚",
        scap: "⪸",
        Scaron: "Š",
        scaron: "š",
        Sc: "⪼",
        sc: "≻",
        sccue: "≽",
        sce: "⪰",
        scE: "⪴",
        Scedil: "Ş",
        scedil: "ş",
        Scirc: "Ŝ",
        scirc: "ŝ",
        scnap: "⪺",
        scnE: "⪶",
        scnsim: "⋩",
        scpolint: "⨓",
        scsim: "≿",
        Scy: "С",
        scy: "с",
        sdotb: "⊡",
        sdot: "⋅",
        sdote: "⩦",
        searhk: "⤥",
        searr: "↘",
        seArr: "⇘",
        searrow: "↘",
        sect: "§",
        semi: ";",
        seswar: "⤩",
        setminus: "∖",
        setmn: "∖",
        sext: "✶",
        Sfr: "𝔖",
        sfr: "𝔰",
        sfrown: "⌢",
        sharp: "♯",
        SHCHcy: "Щ",
        shchcy: "щ",
        SHcy: "Ш",
        shcy: "ш",
        ShortDownArrow: "↓",
        ShortLeftArrow: "←",
        shortmid: "∣",
        shortparallel: "∥",
        ShortRightArrow: "→",
        ShortUpArrow: "↑",
        shy: "­",
        Sigma: "Σ",
        sigma: "σ",
        sigmaf: "ς",
        sigmav: "ς",
        sim: "∼",
        simdot: "⩪",
        sime: "≃",
        simeq: "≃",
        simg: "⪞",
        simgE: "⪠",
        siml: "⪝",
        simlE: "⪟",
        simne: "≆",
        simplus: "⨤",
        simrarr: "⥲",
        slarr: "←",
        SmallCircle: "∘",
        smallsetminus: "∖",
        smashp: "⨳",
        smeparsl: "⧤",
        smid: "∣",
        smile: "⌣",
        smt: "⪪",
        smte: "⪬",
        smtes: "⪬︀",
        SOFTcy: "Ь",
        softcy: "ь",
        solbar: "⌿",
        solb: "⧄",
        sol: "/",
        Sopf: "𝕊",
        sopf: "𝕤",
        spades: "♠",
        spadesuit: "♠",
        spar: "∥",
        sqcap: "⊓",
        sqcaps: "⊓︀",
        sqcup: "⊔",
        sqcups: "⊔︀",
        Sqrt: "√",
        sqsub: "⊏",
        sqsube: "⊑",
        sqsubset: "⊏",
        sqsubseteq: "⊑",
        sqsup: "⊐",
        sqsupe: "⊒",
        sqsupset: "⊐",
        sqsupseteq: "⊒",
        square: "□",
        Square: "□",
        SquareIntersection: "⊓",
        SquareSubset: "⊏",
        SquareSubsetEqual: "⊑",
        SquareSuperset: "⊐",
        SquareSupersetEqual: "⊒",
        SquareUnion: "⊔",
        squarf: "▪",
        squ: "□",
        squf: "▪",
        srarr: "→",
        Sscr: "𝒮",
        sscr: "𝓈",
        ssetmn: "∖",
        ssmile: "⌣",
        sstarf: "⋆",
        Star: "⋆",
        star: "☆",
        starf: "★",
        straightepsilon: "ϵ",
        straightphi: "ϕ",
        strns: "¯",
        sub: "⊂",
        Sub: "⋐",
        subdot: "⪽",
        subE: "⫅",
        sube: "⊆",
        subedot: "⫃",
        submult: "⫁",
        subnE: "⫋",
        subne: "⊊",
        subplus: "⪿",
        subrarr: "⥹",
        subset: "⊂",
        Subset: "⋐",
        subseteq: "⊆",
        subseteqq: "⫅",
        SubsetEqual: "⊆",
        subsetneq: "⊊",
        subsetneqq: "⫋",
        subsim: "⫇",
        subsub: "⫕",
        subsup: "⫓",
        succapprox: "⪸",
        succ: "≻",
        succcurlyeq: "≽",
        Succeeds: "≻",
        SucceedsEqual: "⪰",
        SucceedsSlantEqual: "≽",
        SucceedsTilde: "≿",
        succeq: "⪰",
        succnapprox: "⪺",
        succneqq: "⪶",
        succnsim: "⋩",
        succsim: "≿",
        SuchThat: "∋",
        sum: "∑",
        Sum: "∑",
        sung: "♪",
        sup1: "¹",
        sup2: "²",
        sup3: "³",
        sup: "⊃",
        Sup: "⋑",
        supdot: "⪾",
        supdsub: "⫘",
        supE: "⫆",
        supe: "⊇",
        supedot: "⫄",
        Superset: "⊃",
        SupersetEqual: "⊇",
        suphsol: "⟉",
        suphsub: "⫗",
        suplarr: "⥻",
        supmult: "⫂",
        supnE: "⫌",
        supne: "⊋",
        supplus: "⫀",
        supset: "⊃",
        Supset: "⋑",
        supseteq: "⊇",
        supseteqq: "⫆",
        supsetneq: "⊋",
        supsetneqq: "⫌",
        supsim: "⫈",
        supsub: "⫔",
        supsup: "⫖",
        swarhk: "⤦",
        swarr: "↙",
        swArr: "⇙",
        swarrow: "↙",
        swnwar: "⤪",
        szlig: "ß",
        Tab: "\t",
        target: "⌖",
        Tau: "Τ",
        tau: "τ",
        tbrk: "⎴",
        Tcaron: "Ť",
        tcaron: "ť",
        Tcedil: "Ţ",
        tcedil: "ţ",
        Tcy: "Т",
        tcy: "т",
        tdot: "⃛",
        telrec: "⌕",
        Tfr: "𝔗",
        tfr: "𝔱",
        there4: "∴",
        therefore: "∴",
        Therefore: "∴",
        Theta: "Θ",
        theta: "θ",
        thetasym: "ϑ",
        thetav: "ϑ",
        thickapprox: "≈",
        thicksim: "∼",
        ThickSpace: "  ",
        ThinSpace: " ",
        thinsp: " ",
        thkap: "≈",
        thksim: "∼",
        THORN: "Þ",
        thorn: "þ",
        tilde: "˜",
        Tilde: "∼",
        TildeEqual: "≃",
        TildeFullEqual: "≅",
        TildeTilde: "≈",
        timesbar: "⨱",
        timesb: "⊠",
        times: "×",
        timesd: "⨰",
        tint: "∭",
        toea: "⤨",
        topbot: "⌶",
        topcir: "⫱",
        top: "⊤",
        Topf: "𝕋",
        topf: "𝕥",
        topfork: "⫚",
        tosa: "⤩",
        tprime: "‴",
        trade: "™",
        TRADE: "™",
        triangle: "▵",
        triangledown: "▿",
        triangleleft: "◃",
        trianglelefteq: "⊴",
        triangleq: "≜",
        triangleright: "▹",
        trianglerighteq: "⊵",
        tridot: "◬",
        trie: "≜",
        triminus: "⨺",
        TripleDot: "⃛",
        triplus: "⨹",
        trisb: "⧍",
        tritime: "⨻",
        trpezium: "⏢",
        Tscr: "𝒯",
        tscr: "𝓉",
        TScy: "Ц",
        tscy: "ц",
        TSHcy: "Ћ",
        tshcy: "ћ",
        Tstrok: "Ŧ",
        tstrok: "ŧ",
        twixt: "≬",
        twoheadleftarrow: "↞",
        twoheadrightarrow: "↠",
        Uacute: "Ú",
        uacute: "ú",
        uarr: "↑",
        Uarr: "↟",
        uArr: "⇑",
        Uarrocir: "⥉",
        Ubrcy: "Ў",
        ubrcy: "ў",
        Ubreve: "Ŭ",
        ubreve: "ŭ",
        Ucirc: "Û",
        ucirc: "û",
        Ucy: "У",
        ucy: "у",
        udarr: "⇅",
        Udblac: "Ű",
        udblac: "ű",
        udhar: "⥮",
        ufisht: "⥾",
        Ufr: "𝔘",
        ufr: "𝔲",
        Ugrave: "Ù",
        ugrave: "ù",
        uHar: "⥣",
        uharl: "↿",
        uharr: "↾",
        uhblk: "▀",
        ulcorn: "⌜",
        ulcorner: "⌜",
        ulcrop: "⌏",
        ultri: "◸",
        Umacr: "Ū",
        umacr: "ū",
        uml: "¨",
        UnderBar: "_",
        UnderBrace: "⏟",
        UnderBracket: "⎵",
        UnderParenthesis: "⏝",
        Union: "⋃",
        UnionPlus: "⊎",
        Uogon: "Ų",
        uogon: "ų",
        Uopf: "𝕌",
        uopf: "𝕦",
        UpArrowBar: "⤒",
        uparrow: "↑",
        UpArrow: "↑",
        Uparrow: "⇑",
        UpArrowDownArrow: "⇅",
        updownarrow: "↕",
        UpDownArrow: "↕",
        Updownarrow: "⇕",
        UpEquilibrium: "⥮",
        upharpoonleft: "↿",
        upharpoonright: "↾",
        uplus: "⊎",
        UpperLeftArrow: "↖",
        UpperRightArrow: "↗",
        upsi: "υ",
        Upsi: "ϒ",
        upsih: "ϒ",
        Upsilon: "Υ",
        upsilon: "υ",
        UpTeeArrow: "↥",
        UpTee: "⊥",
        upuparrows: "⇈",
        urcorn: "⌝",
        urcorner: "⌝",
        urcrop: "⌎",
        Uring: "Ů",
        uring: "ů",
        urtri: "◹",
        Uscr: "𝒰",
        uscr: "𝓊",
        utdot: "⋰",
        Utilde: "Ũ",
        utilde: "ũ",
        utri: "▵",
        utrif: "▴",
        uuarr: "⇈",
        Uuml: "Ü",
        uuml: "ü",
        uwangle: "⦧",
        vangrt: "⦜",
        varepsilon: "ϵ",
        varkappa: "ϰ",
        varnothing: "∅",
        varphi: "ϕ",
        varpi: "ϖ",
        varpropto: "∝",
        varr: "↕",
        vArr: "⇕",
        varrho: "ϱ",
        varsigma: "ς",
        varsubsetneq: "⊊︀",
        varsubsetneqq: "⫋︀",
        varsupsetneq: "⊋︀",
        varsupsetneqq: "⫌︀",
        vartheta: "ϑ",
        vartriangleleft: "⊲",
        vartriangleright: "⊳",
        vBar: "⫨",
        Vbar: "⫫",
        vBarv: "⫩",
        Vcy: "В",
        vcy: "в",
        vdash: "⊢",
        vDash: "⊨",
        Vdash: "⊩",
        VDash: "⊫",
        Vdashl: "⫦",
        veebar: "⊻",
        vee: "∨",
        Vee: "⋁",
        veeeq: "≚",
        vellip: "⋮",
        verbar: "|",
        Verbar: "‖",
        vert: "|",
        Vert: "‖",
        VerticalBar: "∣",
        VerticalLine: "|",
        VerticalSeparator: "❘",
        VerticalTilde: "≀",
        VeryThinSpace: " ",
        Vfr: "𝔙",
        vfr: "𝔳",
        vltri: "⊲",
        vnsub: "⊂⃒",
        vnsup: "⊃⃒",
        Vopf: "𝕍",
        vopf: "𝕧",
        vprop: "∝",
        vrtri: "⊳",
        Vscr: "𝒱",
        vscr: "𝓋",
        vsubnE: "⫋︀",
        vsubne: "⊊︀",
        vsupnE: "⫌︀",
        vsupne: "⊋︀",
        Vvdash: "⊪",
        vzigzag: "⦚",
        Wcirc: "Ŵ",
        wcirc: "ŵ",
        wedbar: "⩟",
        wedge: "∧",
        Wedge: "⋀",
        wedgeq: "≙",
        weierp: "℘",
        Wfr: "𝔚",
        wfr: "𝔴",
        Wopf: "𝕎",
        wopf: "𝕨",
        wp: "℘",
        wr: "≀",
        wreath: "≀",
        Wscr: "𝒲",
        wscr: "𝓌",
        xcap: "⋂",
        xcirc: "◯",
        xcup: "⋃",
        xdtri: "▽",
        Xfr: "𝔛",
        xfr: "𝔵",
        xharr: "⟷",
        xhArr: "⟺",
        Xi: "Ξ",
        xi: "ξ",
        xlarr: "⟵",
        xlArr: "⟸",
        xmap: "⟼",
        xnis: "⋻",
        xodot: "⨀",
        Xopf: "𝕏",
        xopf: "𝕩",
        xoplus: "⨁",
        xotime: "⨂",
        xrarr: "⟶",
        xrArr: "⟹",
        Xscr: "𝒳",
        xscr: "𝓍",
        xsqcup: "⨆",
        xuplus: "⨄",
        xutri: "△",
        xvee: "⋁",
        xwedge: "⋀",
        Yacute: "Ý",
        yacute: "ý",
        YAcy: "Я",
        yacy: "я",
        Ycirc: "Ŷ",
        ycirc: "ŷ",
        Ycy: "Ы",
        ycy: "ы",
        yen: "¥",
        Yfr: "𝔜",
        yfr: "𝔶",
        YIcy: "Ї",
        yicy: "ї",
        Yopf: "𝕐",
        yopf: "𝕪",
        Yscr: "𝒴",
        yscr: "𝓎",
        YUcy: "Ю",
        yucy: "ю",
        yuml: "ÿ",
        Yuml: "Ÿ",
        Zacute: "Ź",
        zacute: "ź",
        Zcaron: "Ž",
        zcaron: "ž",
        Zcy: "З",
        zcy: "з",
        Zdot: "Ż",
        zdot: "ż",
        zeetrf: "ℨ",
        ZeroWidthSpace: "​",
        Zeta: "Ζ",
        zeta: "ζ",
        zfr: "𝔷",
        Zfr: "ℨ",
        ZHcy: "Ж",
        zhcy: "ж",
        zigrarr: "⇝",
        zopf: "𝕫",
        Zopf: "ℤ",
        Zscr: "𝒵",
        zscr: "𝓏",
        zwj: "‍",
        zwnj: "‌"
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    n(7);
    "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? n(8) : n(10)
}, function(t, e, n) {}, function(t, e, n) {
    "use strict";
    n.r(e);
    var a = new(n(2).b);

    function s(t) {
        self.postMessage(t)
    }
    self.onmessage = function(t) {
        var u = {
                links: [],
                embeds: [],
                tags: [],
                headings: []
            },
            e = t.data.content;
        if (e) {
            for (var n = (new TextDecoder).decode(e), o = a.md.parse(n, {}), h = [0, 0], r = function(t) {
                    var l = o[t];
                    if (l.map && (h = l.map), "heading_open" === l.type) {
                        var e = o[t + 1];
                        if (e) {
                            var n = parseInt(l.tag.substr(1));
                            u.headings.push({
                                line: h[0],
                                heading: e.content,
                                level: n
                            })
                        }
                    } else if ("inline" === l.type)
                        for (var r = function(n) {
                                function t() {
                                    var t = "";
                                    if (0 < n)
                                        for (var e = 0; e < n; e++) {
                                            t += l.children[e].content || ""
                                        }
                                    return t
                                }

                                function e() {
                                    var t = "";
                                    if (n < l.children.length - 3)
                                        for (var e = n + 3; e < l.children.length; e++) {
                                            t += l.children[e].content || ""
                                        }
                                    return t
                                }
                                var r = l.children[n];
                                if ("ilink_open" === r.type) {
                                    var i = r.attrGet("href"),
                                        o = r.markup,
                                        a = "";
                                    if (n < l.children.length - 1) {
                                        var s = l.children[n + 1].content;
                                        i !== s && (a = s)
                                    }
                                    u.links.push({
                                        line: h[0],
                                        link: i,
                                        original: o,
                                        displayText: a,
                                        beforeContext: t(),
                                        afterContext: e()
                                    })
                                } else if ("iembed_open" === r.type) {
                                    i = r.attrGet("src"), o = r.markup;
                                    u.embeds.push({
                                        line: h[0],
                                        link: i,
                                        original: o,
                                        beforeContext: t(),
                                        afterContext: e()
                                    })
                                } else if ("link_open" === r.type && "internal-link" === r.attrGet("class")) {
                                    i = r.attrGet("href"), o = r.markup, a = r.content;
                                    u.links.push({
                                        line: h[0],
                                        link: i,
                                        original: o,
                                        displayText: a,
                                        beforeContext: t(),
                                        afterContext: e()
                                    })
                                } else if ("tag_open" === r.type) {
                                    var c = r.attrGet("href");
                                    u.tags.push({
                                        line: h[0],
                                        tag: c
                                    })
                                }
                            }, i = 0; i < l.children.length; i++) r(i)
                }, i = 0; i < o.length; i++) r(i);
            s(u)
        } else s(u)
    }
}, function(t, e) {
    Object.isEmpty || (Object.isEmpty = function(t) {
        for (var e in t)
            if (t.hasOwnProperty(e)) return !1;
        return !0
    }), Object.each || (Object.each = function(t, e, n) {
        for (var r in t)
            if (t.hasOwnProperty(r) && !1 === e.call(n, t[r], r)) return !1;
        return !0
    }), Array.prototype.first || (Array.prototype.first = function() {
        return 0 === this.length ? null : this[0]
    }), Array.prototype.last || (Array.prototype.last = function() {
        return 0 === this.length ? null : this[this.length - 1]
    }), Array.prototype.contains || (Array.prototype.contains = function(t) {
        return -1 !== this.indexOf(t)
    }), Array.prototype.remove || (Array.prototype.remove = function(t) {
        for (var e = this.length - 1; 0 <= e; e--) this[e] === t && this.splice(e, 1)
    }), Math.clamp || (Math.clamp = function(t, e, n) {
        return Math.min(Math.max(t, e), n)
    }), Math.square || (Math.square = function(t) {
        return t * t
    }), String.isString || (String.isString = function(t) {
        return "string" == typeof t || t instanceof String
    }), String.prototype.contains || (String.prototype.contains = function(t) {
        return -1 !== this.indexOf(t)
    }), String.prototype.startsWith || (String.prototype.startsWith = function(t, e) {
        return this.substr(!e || e < 0 ? 0 : +e, t.length) === t
    }), String.prototype.endsWith || (String.prototype.endsWith = function(t, e) {
        return (void 0 === e || e > this.length) && (e = this.length), this.substring(e - t.length, e) === t
    }), String.prototype.format || (String.prototype.format = function() {
        for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
        return this.replace(/{(\d+)}/g, function(t, e) {
            return void 0 !== n[e] ? n[e] : t
        })
    });
    var i = function(t) {
        var e = t.nodeType;
        if (1 !== e && 9 !== e && 11 !== e) return 3 === e || 4 === e ? t.nodeValue : "";
        if ("string" == typeof t.textContent) return t.textContent;
        for (var n = [], r = t.firstChild; r; r = r.nextSibling) n.push(i(r));
        return n.join("")
    };
    Element.prototype.getText = function() {
        return i(this)
    }, Element.prototype.setText = function(t) {
        var e, n, r;
        n = t, 1 !== (r = (e = this).nodeType) && 9 !== r && 11 !== r || (e.textContent = n)
    }, Element.prototype.appendText = function(t) {
        this.appendChild(document.createTextNode(t))
    }, Element.prototype.addClass = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this.addClasses(t)
    }, Element.prototype.addClasses = function(t) {
        for (var e = 0; e < t.length; e++) this.classList.add(t[e])
    }, Element.prototype.removeClass = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this.removeClasses(t)
    }, Element.prototype.removeClasses = function(t) {
        for (var e = 0; e < t.length; e++) this.classList.remove(t[e])
    }, Element.prototype.toggleClass = function(t, e) {
        t instanceof Array || (t = [t]), e ? this.addClasses(t) : this.removeClasses(t)
    }, Element.prototype.hasClass = function(t) {
        return this.classList.contains(t)
    }, Node.prototype.detach = function() {
        this.parentNode && this.parentNode.removeChild(this)
    }, Node.prototype.empty = function() {
        for (; this.lastChild;) this.removeChild(this.lastChild)
    }, Node.prototype.insertAfter = function(t) {
        t.parentNode && t.parentNode.insertBefore(this, t.nextSibling)
    }, Node.prototype.indexOf = function(t) {
        return Array.prototype.indexOf.call(this.childNodes, t)
    }, Node.prototype.setChildrenInPlace = function(t) {
        for (var e = this.firstChild, n = 0, r = t; n < r.length; n++) {
            var i = r[n];
            i !== e ? this.insertBefore(i, e) : e = e.nextSibling
        }
        for (; e;) {
            var o = e;
            e = e.nextSibling, this.removeChild(o)
        }
    }, Element.prototype.setAttr = function(t, e) {
        this.setAttribute(t, String(e))
    }, Element.prototype.setAttrs = function(t) {
        for (var e in t) t.hasOwnProperty(e) && this.setAttr(e, t[e])
    }, Element.prototype.getAttr = Element.prototype.getAttribute, HTMLElement.prototype.show || (HTMLElement.prototype.show = function() {
        "none" === this.style.display && (this.style.display = this.getAttribute("data-display") || "", this.removeAttribute("data-display"))
    }), HTMLElement.prototype.hide || (HTMLElement.prototype.hide = function() {
        var t = this.style.display;
        "none" !== t && (this.style.display = "none", t ? this.setAttribute("data-display", t) : this.removeAttribute("data-display"))
    }), HTMLElement.prototype.toggle || (HTMLElement.prototype.toggle = function(t) {
        t ? this.show() : this.hide()
    }), window.fish = function(t) {
        return document.querySelector(t)
    }, window.fishAll = function(t) {
        return Array.prototype.slice.call(document.querySelectorAll(t))
    }, Element.prototype.find = function(t) {
        return this.querySelector(t)
    }, Element.prototype.findAll = function(t) {
        return Array.prototype.slice.call(this.querySelectorAll(t))
    }, Node.prototype.createEl = function(t, e, n) {
        return (e = e || {}).parent = this, createEl(t, e, n)
    }, window.createEl = function(t, e, n) {
        var r = e || {},
            i = r.cls,
            o = r.text,
            a = r.attr,
            s = r.title,
            c = r.value,
            l = r.type,
            u = r.parent,
            h = document.createElement(t);
        return i && (Array.isArray(i) ? h.className = i.join(" ") : h.className = i), o && h.setText(o), a && h.setAttrs(a), s && (h.title = s), c && (h instanceof HTMLInputElement || h instanceof HTMLSelectElement || h instanceof HTMLOptionElement) && (h.value = c), l && h instanceof HTMLInputElement && (h.type = l), n && n(h), u && u.appendChild(h), h
    };

    function n(t, n, r, e) {
        var i = this._EVENTS;
        i || (i = {}, this._EVENTS = i);
        var o = i[t];

        function a(t) {
            var e = function t(e, n, r) {
                return e ? e.matches(n) ? e : e === r ? null : t(e.parentElement, n, r) : null
            }(t.target, n, t.currentTarget);
            e && r.call(this, t, e)
        }
        o || (o = [], i[t] = o), o.push({
            selector: n,
            listener: r,
            options: e,
            callback: a
        }), this.addEventListener(t, a, e)
    }

    function r(n, r, i, o) {
        var a = this,
            t = this._EVENTS;
        if (t) {
            var e = t[n];
            e && (t[n] = e.filter(function(t) {
                if (t.selector !== r || t.listener !== i || t.options !== o) return !0;
                var e = t.callback;
                return a.removeEventListener(n, e, o), !1
            }))
        }
    }
    HTMLElement.prototype.on = n, Document.prototype.on = n, HTMLElement.prototype.off = r, Document.prototype.off = r, HTMLElement.prototype.onClickEvent = function(t, e) {
        this.addEventListener("click", t, e), this.addEventListener("auxclick", t, e)
    }, window.ajax = function(t) {
        var e = t.method,
            n = t.url,
            r = t.success,
            i = t.error,
            o = t.data,
            a = t.withCredentials;
        e = e || "GET", void 0 === a && (a = !0);
        var s = new XMLHttpRequest;
        s.open(e, n, !0), s.onload = function() {
            var t = s.status,
                e = s.response;
            200 <= t && t < 400 ? r && r(e, s) : i && i(e, s)
        }, s.onerror = function(t) {
            i && i(t, s)
        }, o ? (s.setRequestHeader("Content-Type", "application/json; charset=utf-8"), s.withCredentials = a, s.send(JSON.stringify(o))) : s.send()
    }, window.ready = function(t) {
        "loading" !== document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = "https://api.obsidian.md",
        i = r + "/vault/create",
        o = "obsidian-account",
        a = (s.prototype.save = function() {
            var t = {
                email: this.email,
                name: this.name,
                token: this.token,
                license: this.license,
                key: this.key
            };
            localStorage.setItem(o, JSON.stringify(t))
        }, s.prototype.login = function(t, e, n) {
            var r = this;
            ajax({
                url: "https://api.obsidian.md/user/signin",
                method: "POST",
                withCredentials: !1,
                data: {
                    email: t,
                    password: e
                },
                success: function(t) {
                    var e = JSON.parse(t);
                    e.token && (r.token = e.token, r.save()), n && n(e)
                }
            })
        }, s.prototype.logout = function(e) {
            ajax({
                url: "https://api.obsidian.md/user/signout",
                method: "POST",
                withCredentials: !1,
                data: {
                    token: this.token
                },
                success: function(t) {
                    e && e(t)
                }
            })
        }, s.prototype.getUserInfo = function(n) {
            var r = this;
            ajax({
                url: "https://api.obsidian.md/user/info",
                method: "POST",
                withCredentials: !1,
                data: {
                    token: this.token
                },
                success: function(t) {
                    var e = JSON.parse(t);
                    if ("Not logged in" === e.error) return r.email = null, r.name = null, r.token = null, r.license = null, void r.save();
                    r.isLoggedIn = !0, r.email = e.email, r.name = e.name, r.license = e.license, r.save(), n && n()
                }
            })
        }, s.prototype.checkKey = function(n) {
            var r = this;
            this.key ? ajax({
                url: "https://api.obsidian.md/subscription/business",
                method: "POST",
                withCredentials: !1,
                data: {
                    key: this.key
                },
                success: function(t) {
                    var e = JSON.parse(t);
                    if (e.error) return r.keyValidation = e.error, void(n && n());
                    r.keyValidation = "valid", r.company = e.company, r.expiry = e.expiry, r.seats = e.seats, r.save(), n && n()
                },
                error: n
            }) : n()
        }, s.prototype.getVaults = function(n) {
            ajax({
                url: "https://api.obsidian.md/vault/list",
                method: "POST",
                withCredentials: !1,
                data: {
                    token: this.token
                },
                success: function(t) {
                    var e = JSON.parse(t);
                    n && n(e.vaults)
                }
            })
        }, s.prototype.createVault = function(t, n) {
            ajax({
                url: i,
                method: "POST",
                withCredentials: !1,
                data: {
                    name: t,
                    token: this.token
                },
                success: function(t) {
                    var e = JSON.parse(t);
                    console.log(e), n && n()
                }
            })
        }, s.prototype.getSites = function(n) {
            ajax({
                url: "https://api.obsidian.md/sites/list",
                method: "POST",
                withCredentials: !1,
                data: {
                    token: this.token
                },
                success: function(t) {
                    var e = JSON.parse(t);
                    n && n(e.sites)
                }
            })
        }, s.prototype.createSite = function(t, n) {
            ajax({
                url: i,
                method: "POST",
                withCredentials: !1,
                data: {
                    id: t,
                    token: this.token
                },
                success: function(t) {
                    var e = JSON.parse(t);
                    console.log(e), n && n()
                },
                error: function(t) {
                    n && n(t)
                }
            })
        }, s);

    function s() {
        this.isLoggedIn = !1, this.keyValidation = "", this.company = "", this.expiry = 0, this.seats = 0;
        try {
            var t = JSON.parse(localStorage.getItem(o));
            this.email = t.email, this.name = t.name, this.token = t.token, this.license = t.license, this.key = t.key
        } catch (t) {}
    }

    function c(t) {
        t.checkCallback ? t.checkCallback(!1) : t.callback ? t.callback() : console.error("Command " + t + " did not provide a callback")
    }
    var l = (u.prototype.addCommand = function(t) {
        (this.commands[t.id] = t).hotkeys && this.app.hotkeyManager.addDefaultHotkeys(t.id, t.hotkeys)
    }, u.prototype.removeCommand = function(t) {
        this.commands.hasOwnProperty(t) && (delete this.commands[t], this.app.hotkeyManager.removeAllHotkeys(t))
    }, u.prototype.findCommand = function(t) {
        return this.commands[t]
    }, u.prototype.listCommands = function() {
        return Object.values(this.commands).filter(function(t) {
            return !t.checkCallback || t.checkCallback(!0)
        })
    }, u.prototype.executeCommandById = function(t) {
        var e = this.findCommand(t);
        e && c(e)
    }, u);

    function u(t) {
        this.commands = {}, this.app = t
    }
    var p = ["png", "jpg", "jpeg", "gif"],
        h = ["mp3", "wav", "m4a", "3gp", "flac"],
        f = ["webm", "mp4", "ogg"],
        d = ["pdf"],
        v = ["md"],
        g = [].concat(p, h, f, d, v);

    function m(t) {
        var e = t.lastIndexOf("/");
        return -1 === e ? t : t.slice(e + 1)
    }

    function y(t) {
        var e = t.lastIndexOf("/");
        return -1 === e ? "" : t.slice(0, e)
    }

    function b(t) {
        for (; t;) {
            if (m(t).startsWith(".")) return 1;
            t = y(t)
        }
    }

    function w(t) {
        var e = m(t),
            n = e.lastIndexOf(".");
        return -1 === n || n === e.length - 1 || 0 === n ? t : e.substr(0, n)
    }

    function k(t) {
        var e = t.lastIndexOf(".");
        return -1 === e || e === t.length - 1 || 0 === e ? t : t.substr(0, e)
    }

    function E(t) {
        var e = t.lastIndexOf(".");
        return -1 === e || e === t.length - 1 || 0 === e ? "" : t.substr(e + 1).toLowerCase()
    }

    function C(t, e) {
        return e ? t + "." + e : t
    }

    function x(t, e) {
        return E(t) === e
    }

    function _(t) {
        return g.contains(t)
    }
    var A = n(1),
        S = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        L = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        };

    function M(t) {
        return {
            ctime: t.birthtimeMs,
            mtime: t.mtimeMs,
            size: t.size
        }
    }

    function T(t) {
        return t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength)
    }
    var O, D = window.process.platform,
        P = "darwin" === D,
        F = "win32" === D,
        z = P || F,
        I = (R.prototype.testInsensitive = function() {
            return S(this, void 0, Promise, function() {
                var e, n, r, i, o, a;
                return L(this, function(t) {
                    return n = (e = this).fs, r = e.path, i = e.basePath, o = r.join(i, ".OBSIDIANTEST"), a = r.join(i, ".OBSIDIANTEST".toLowerCase()), n.existsSync(o) && n.unlinkSync(o), n.writeFileSync(o, "", "utf8"), this.insensitive = n.existsSync(a), n.unlinkSync(o), console.log("FileSystem is case " + (this.insensitive ? "insensitive" : "sensitive")), [2]
                })
            })
        }, R.prototype.getName = function() {
            return this.path.basename(this.basePath)
        }, R.prototype.listAll = function() {
            return S(this, void 0, Promise, function() {
                return L(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return this.files["/"] = {
                                type: "folder",
                                realpath: "/"
                            }, [4, this.listRecursive("")];
                        case 1:
                            return t.sent(), [2]
                    }
                })
            })
        }, R.prototype.listRecursive = function(l) {
            return S(this, void 0, Promise, function() {
                var e, n, r, i, o, a, s, c;
                return L(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e = this.getFullRealPath(l), [4, this.fs.promises.readdir(e, {
                                withFileTypes: !0
                            })];
                        case 1:
                            n = t.sent(), r = 0, i = n, t.label = 2;
                        case 2:
                            return r < i.length ? (o = i[r], a = R.normalizeRealPath("" === l ? o.name : l + "/" + o.name), s = R.normalizePath(a), !o.isFile() || this.files[s] ? [3, 5] : [4, this.fs.promises.stat(this.getFullRealPath(a))]) : [3, 8];
                        case 3:
                            return c = t.sent(), [4, this.reconcileFileCreation(a, s, c)];
                        case 4:
                            t.sent(), t.label = 5;
                        case 5:
                            return o.isDirectory() ? [4, this.reconcileFolderCreation(a, s)] : [3, 7];
                        case 6:
                            t.sent(), t.label = 7;
                        case 7:
                            return r++, [3, 2];
                        case 8:
                            return [2]
                    }
                })
            })
        }, R.normalizeRealPath = function(t) {
            for (t = t.replace(/\\/g, "/"); t.startsWith("/") && "/" !== t;) t = t.substr(1);
            for (; t.endsWith("/") && "/" !== t;) t = t.substr(0, t.length - 1);
            return "" === t && (t = "/"), t
        }, R.normalizePath = function(t) {
            return Object(A.k)(this.normalizeRealPath(t)).normalize("NFC")
        }, R.prototype.mkdir = function(n) {
            var t = this;
            return this.queue(function() {
                return S(t, void 0, void 0, function() {
                    var e;
                    return L(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return e = this.getFullPath(n), [4, this.fs.promises.mkdir(e)];
                            case 1:
                                return t.sent(), [4, this.reconcileInternalFile(n)];
                            case 2:
                                return t.sent(), [2]
                        }
                    })
                })
            })
        }, R.prototype.trashSystem = function(r) {
            var t = this;
            return this.queue(function() {
                return S(t, void 0, void 0, function() {
                    var e, n;
                    return L(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return e = this.getFullPath(r), (n = this.shell.moveItemToTrash(e, !1)) ? [4, this.reconcileInternalFile(r)] : [3, 2];
                            case 1:
                                t.sent(), t.label = 2;
                            case 2:
                                return [2, n]
                        }
                    })
                })
            })
        }, R.prototype.trashLocal = function(s) {
            var t = this;
            return this.queue(function() {
                return S(t, void 0, void 0, function() {
                    var e, n, r, i, o, a;
                    return L(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return e = this.getFullPath(s), n = this.getFullPath(".trash"), [4, this.fs.promises.mkdir(n, {
                                    recursive: !0
                                })];
                            case 1:
                                for (t.sent(), r = this.path.extname(e), i = this.path.basename(e, r), o = this.path.join(n, i + r), a = 1; this.fs.existsSync(o);) a++, o = this.path.join(n, i + " " + a + r);
                                return [4, this.fs.promises.rename(e, o)];
                            case 2:
                                return t.sent(), [4, this.reconcileInternalFile(s)];
                            case 3:
                                return t.sent(), [2]
                        }
                    })
                })
            })
        }, R.prototype.rmdir = function(n, r) {
            var t = this;
            return this.queue(function() {
                return S(t, void 0, void 0, function() {
                    var e;
                    return L(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return e = this.getFullPath(n), [4, this.fs.promises.rmdir(e, {
                                    maxRetries: 5,
                                    recursive: r
                                })];
                            case 1:
                                return t.sent(), [4, this.reconcileInternalFile(n)];
                            case 2:
                                return t.sent(), [2]
                        }
                    })
                })
            })
        }, R.prototype.read = function(e) {
            var n = this;
            return this.queue(function() {
                var t = n.getFullPath(e);
                return n.fs.promises.readFile(t, "utf-8")
            })
        }, R.prototype.readBinary = function(n) {
            var t = this;
            return this.queue(function() {
                return S(t, void 0, void 0, function() {
                    var e;
                    return L(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return e = this.getFullPath(n), [4, this.fs.promises.readFile(e)];
                            case 1:
                                return [2, T(t.sent())]
                        }
                    })
                })
            })
        }, R.prototype.write = function(n, r, i) {
            var t = this;
            return this.queue(function() {
                return S(t, void 0, void 0, function() {
                    var e;
                    return L(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return e = this.getFullPath(n), [4, this.fs.promises.writeFile(e, r, i)];
                            case 1:
                                return t.sent(), [4, this.reconcileInternalFile(n)];
                            case 2:
                                return t.sent(), [2]
                        }
                    })
                })
            })
        }, R.prototype.writeBinary = function(i, o) {
            var t = this;
            return this.queue(function() {
                return S(t, void 0, void 0, function() {
                    var n, r;
                    return L(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return n = this.getFullPath(i), e = o, r = Buffer.from(e), [4, this.fs.promises.writeFile(n, r)];
                            case 1:
                                return t.sent(), [4, this.reconcileInternalFile(i)];
                            case 2:
                                return t.sent(), [2]
                        }
                        var e
                    })
                })
            })
        }, R.prototype.remove = function(n) {
            var t = this;
            return this.queue(function() {
                return S(t, void 0, void 0, function() {
                    var e;
                    return L(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return e = this.getFullPath(n), [4, this.fs.promises.unlink(e)];
                            case 1:
                                return t.sent(), [4, this.reconcileInternalFile(n)];
                            case 2:
                                return t.sent(), [2]
                        }
                    })
                })
            })
        }, R.prototype.rename = function(h, p) {
            return S(this, void 0, Promise, function() {
                var e = this;
                return L(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return h === p ? [2] : [4, this.queue(function() {
                                return S(e, void 0, void 0, function() {
                                    var e, n, r, i, o, a, s, c, l, u;
                                    return L(this, function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return e = this.getFullPath(h), n = this.getFullPath(p), [4, this._exists(n, !1)];
                                            case 1:
                                                if (t.sent() && (!this.insensitive || h.toLowerCase() !== p.toLowerCase())) throw new Error("Destination file already exists!");
                                                return r = this.files[h], i = r.realpath, [4, this.fs.promises.rename(e, n)];
                                            case 2:
                                                if (t.sent(), delete this.files[h], o = this.getRealPath(p), r.realpath = o, this.files[p] = r, this.trigger("renamed", p, h), "folder" === r.type)
                                                    for (a in this.files) this.files.hasOwnProperty(a) && a.startsWith(h + "/") && (s = a.slice(h.length), c = p + s, l = this.files[a], delete this.files[a], u = l.realpath.slice(i.length), l.realpath = o + u, this.files[c] = l, this.trigger("renamed", c, a));
                                                return [2]
                                        }
                                    })
                                })
                            })];
                        case 1:
                            return t.sent(), [2]
                    }
                })
            })
        }, R.prototype.copy = function(r, i) {
            return S(this, void 0, Promise, function() {
                var e = this;
                return L(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.queue(function() {
                                return S(e, void 0, void 0, function() {
                                    var e, n;
                                    return L(this, function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return e = this.getFullPath(r), n = this.getFullPath(i), [4, this.fs.promises.copyFile(e, n, this.fs.constants.COPYFILE_EXCL)];
                                            case 1:
                                                return t.sent(), [4, this.reconcileInternalFile(i)];
                                            case 2:
                                                return t.sent(), [2]
                                        }
                                    })
                                })
                            })];
                        case 1:
                            return t.sent(), [2]
                    }
                })
            })
        }, R.prototype.setCtime = function(n, r) {
            return S(this, void 0, Promise, function() {
                var e = this;
                return L(this, function(t) {
                    return [2, this.queue(function() {
                        return S(e, void 0, void 0, function() {
                            var e;
                            return L(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.btime ? (e = this.getFullPath(n), this.btime.btime(e, r), [4, this.reconcileInternalFile(n)]) : [2];
                                    case 1:
                                        return t.sent(), [2]
                                }
                            })
                        })
                    })]
                })
            })
        }, R.prototype.setMtime = function(n, r) {
            return S(this, void 0, Promise, function() {
                var e = this;
                return L(this, function(t) {
                    return [2, this.queue(function() {
                        return S(e, void 0, void 0, function() {
                            var e;
                            return L(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return e = this.getFullPath(n), [4, this.fs.promises.utimes(e, r / 1e3, r / 1e3)];
                                    case 1:
                                        return t.sent(), [4, this.reconcileInternalFile(n)];
                                    case 2:
                                        return t.sent(), [2]
                                }
                            })
                        })
                    })]
                })
            })
        }, R.prototype.exists = function(n, r) {
            return S(this, void 0, Promise, function() {
                var e = this;
                return L(this, function(t) {
                    return [2, this.queue(function() {
                        var t = e.getFullPath(n);
                        return e._exists(t, r)
                    })]
                })
            })
        }, R.prototype._exists = function(r, i) {
            return S(this, void 0, Promise, function() {
                var e, n;
                return L(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return this.fs.existsSync(r) ? i && this.insensitive ? (e = this.path.dirname(r), n = this.path.basename(r), [4, this.fs.promises.readdir(e)]) : [3, 2] : [2, !1];
                        case 1:
                            if (-1 === t.sent().indexOf(n)) return [2, !1];
                            t.label = 2;
                        case 2:
                            return [2, !0]
                    }
                })
            })
        }, R.prototype.watch = function(n) {
            return S(this, void 0, Promise, function() {
                var e = this;
                return L(this, function(t) {
                    return this.stopWatch(), this.handler = n, this.startWatchPath("/", z), [2, this.queue(function() {
                        return e.listAll()
                    })]
                })
            })
        }, R.prototype.stopWatch = function() {
            for (var t in this.watchers) this.watchers.hasOwnProperty(t) && this.stopWatchPath(t);
            this.handler = null
        }, R.prototype.startWatchPath = function(r, t) {
            var i = this,
                e = R.normalizePath(r),
                n = this.getFullPath(e),
                o = this.fs.watch(n, {
                    persistent: !1,
                    encoding: "utf8",
                    recursive: t
                });
            o.on("change", function(t, e) {
                var n = "/" === r ? e : r + "/" + e;
                i.onFileChange(n)
            }), o.on("error", function() {
                i.onFileChange(r)
            }), this.watchers[e] = o
        }, R.prototype.stopWatchPath = function(t) {
            var e = this.watchers[t];
            e && (e.close(), delete this.watchers[t])
        }, R.prototype.onFileChange = function(e) {
            var n = this;
            e && (e = R.normalizeRealPath(e), setTimeout(function() {
                var t = R.normalizePath(e);
                n.queue(function() {
                    return n.reconcileFile(e, t, !1)
                })
            }, 0))
        }, R.prototype.reconcileInternalFile = function(e) {
            return S(this, void 0, Promise, function() {
                return L(this, function(t) {
                    return [2, this.reconcileFile(this.getRealPath(e), e)]
                })
            })
        }, R.prototype.reconcileFile = function(a, s, c) {
            return void 0 === c && (c = !0), S(this, void 0, Promise, function() {
                var e, n, r, i, o;
                return L(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return t.trys.push([0, 11, , 14]), e = this.getFullRealPath(a), this.insensitive ? (n = this.path.dirname(e), r = this.path.basename(s), [4, this.fs.promises.readdir(n)]) : [3, 3];
                        case 1:
                            return -1 !== t.sent().map(function(t) {
                                return Object(A.k)(t).normalize("NFC")
                            }).indexOf(r) ? [3, 3] : [4, this.reconcileDeletion(a, s, c)];
                        case 2:
                            return [2, t.sent()];
                        case 3:
                            return [4, this.fs.promises.stat(e)];
                        case 4:
                            return (i = t.sent()).isFile() ? (o = this.files[s]) ? (o.realpath = a, "file" === o.type && (o.mtime === i.mtimeMs && o.size === i.size || (o.mtime = i.mtimeMs, o.size = i.size, this.trigger("modified", s, s, M(i)))), [3, 7]) : [3, 5] : [3, 8];
                        case 5:
                            return [4, this.reconcileFileCreation(a, s, i)];
                        case 6:
                            t.sent(), t.label = 7;
                        case 7:
                            return [3, 10];
                        case 8:
                            return i.isDirectory() ? [4, this.reconcileFolderCreation(a, s)] : [3, 10];
                        case 9:
                            t.sent(), t.label = 10;
                        case 10:
                            return [3, 14];
                        case 11:
                            return "ENOENT" !== t.sent().code ? [3, 13] : [4, this.reconcileDeletion(a, s, c)];
                        case 12:
                            t.sent(), t.label = 13;
                        case 13:
                            return [3, 14];
                        case 14:
                            return [2]
                    }
                })
            })
        }, R.prototype.reconcileFileCreation = function(r, i, o) {
            return S(this, void 0, Promise, function() {
                return L(this, function(t) {
                    return b(i) || this.files[i] || (this.files[i] = (e = r, (n = o).isFile() ? {
                        type: "file",
                        realpath: e,
                        ctime: n.birthtimeMs,
                        mtime: n.mtimeMs,
                        size: n.size
                    } : n.isDirectory() ? {
                        type: "folder",
                        realpath: e
                    } : void 0), this.trigger("file-created", i, i, M(o))), [2];
                    var e, n
                })
            })
        }, R.prototype.reconcileFolderCreation = function(e, n) {
            return S(this, void 0, Promise, function() {
                return L(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return b(n) ? [2] : this.files.hasOwnProperty(n) ? [3, 2] : (this.files[n] = {
                                type: "folder",
                                realpath: e
                            }, this.trigger("folder-created", n), z || this.startWatchPath(e, !1), [4, this.listRecursive(e)]);
                        case 1:
                            return t.sent(), [3, 3];
                        case 2:
                            this.files[n].realpath = e, t.label = 3;
                        case 3:
                            return [2]
                    }
                })
            })
        }, R.prototype.reconcileDeletion = function(i, o, a) {
            return void 0 === a && (a = !0), S(this, void 0, Promise, function() {
                var e, n, r = this;
                return L(this, function(t) {
                    if ("/" === o) return this.trigger("closed", o), [2];
                    if (!a) return setTimeout(function() {
                        r.queue(function() {
                            return r.reconcileFile(i, o)
                        })
                    }, 100), [2];
                    if ((e = this.files[o]) && "folder" === e.type)
                        for (n in this.stopWatchPath(o), this.files) this.files.hasOwnProperty(n) && n.startsWith(o + "/") && this.removeFile(n);
                    return this.removeFile(o), [2]
                })
            })
        }, R.prototype.trigger = function(t, e, n, r) {
            this.handler && this.handler(t, e, n, r)
        }, R.prototype.getRealPath = function(t) {
            for (var e = t; e;) {
                if (this.files.hasOwnProperty(e)) {
                    var n = t.substr(e.length);
                    return this.files[e].realpath + n
                }
                e = y(e)
            }
            return t
        }, R.prototype.getFullPath = function(t) {
            var e = this.getRealPath(t);
            return this.getFullRealPath(e)
        }, R.prototype.getFullRealPath = function(t) {
            return this.path.join(this.basePath, t)
        }, R.prototype.queue = function(t) {
            var e = this.promise.then(t, t);
            return this.promise = e
        }, R.prototype.removeFile = function(t) {
            var e = this.files[t];
            delete this.files[t], e && ("file" === e.type ? this.trigger("file-removed", t) : "folder" === e.type && this.trigger("folder-removed", t))
        }, R.readLocalFile = function(i) {
            return S(this, void 0, Promise, function() {
                var e, n, r;
                return L(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return (e = window.require) ? (n = e("fs"), r = T, [4, n.promises.readFile(i)]) : [3, 2];
                        case 1:
                            return [2, r.apply(void 0, [t.sent()])];
                        case 2:
                            return [2, null]
                    }
                })
            })
        }, R.mkdir = function(n) {
            return S(this, void 0, Promise, function() {
                var e;
                return L(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return (e = window.require) ? [4, e("fs").promises.mkdir(n, {
                                recursive: !0
                            })] : [3, 2];
                        case 1:
                            return [2, t.sent()];
                        case 2:
                            return [2, null]
                    }
                })
            })
        }, R);

    function R(t) {
        var e = this;
        this.basePath = t, this.fs = window.require("fs"), this.path = window.require("path");
        var n = window.require("electron");
        this.app = n.remote.app, this.shell = n.shell, this.files = {}, this.promise = Promise.resolve(), this.watcher = null, this.watchers = {}, this.handler = null;
        try {
            this.btime = window.require("btime")
        } catch (t) {
            console.error(t)
        }
        this.insensitive = P || F, S(e, void 0, void 0, function() {
            return L(this, function(t) {
                try {
                    this.testInsensitive()
                } catch (t) {
                    console.error(t)
                }
                return [2]
            })
        })
    }
    var H = "lastOpenFiles",
        N = "pluginEnabledStatus",
        q = "leftSidedock",
        B = "rightSidedock",
        j = "theme",
        V = "alwaysUpdateLinks",
        G = "readableLineLength",
        U = "autoPairBrackets",
        W = "autoPairMarkdown",
        K = "smartIndentList",
        $ = "foldHeading",
        Z = "foldIndent",
        Y = "showLineNumber",
        J = "useTab",
        X = "tabSize",
        Q = "vimMode",
        tt = "attachmentFolderPath",
        et = "newFileLocation",
        nt = "newFileFolderPath",
        rt = "workspaceLayout",
        it = "fileSortOrder",
        ot = "hotkeys",
        at = "defaultViewMode",
        st = "promptDelete",
        ct = "trashOption",
        lt = ((O = {})[H] = [], O[q] = {}, O[B] = {}, O[N] = {}, O[j] = "obsidian", O[V] = !1, O[G] = !0, O[U] = !0, O[W] = !0, O[K] = !0, O[$] = !1, O[Z] = !1, O[Y] = !1, O[J] = !0, O[X] = 4, O[Q] = !1, O[tt] = "/", O[et] = "root", O[nt] = "/", O[rt] = null, O[it] = "alphabetical", O[ot] = {}, O[at] = "source", O[st] = !0, O[ct] = "system", O),
        ut = (ht.prototype.on = function(t, e, n) {
            var r = this._,
                i = r[t];
            i || (r[t] = i = []);
            var o = {
                e: this,
                name: t,
                fn: e,
                ctx: n
            };
            return i.push(o), o
        }, ht.prototype.off = function(t, e) {
            var n = this._,
                r = n[t],
                i = [];
            if (r && e)
                for (var o = 0; o < r.length; o++) r[o].fn !== e && i.push(r[o]);
            0 < i.length ? n[t] = i : delete n[t]
        }, ht.prototype.offref = function(t) {
            if (t) {
                var e = t.name,
                    n = this._,
                    r = n[e],
                    i = [];
                if (r && t)
                    for (var o = 0; o < r.length; o++) r[o] !== t && i.push(r[o]);
                i.length ? n[e] = i : delete n[e]
            }
        }, ht.prototype.trigger = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            if (!this.disabled) {
                var r = this._[t];
                if (r) {
                    r = r.slice();
                    for (var i = 0; i < r.length; i++) this.tryTrigger(r[i], e)
                }
            }
        }, ht.prototype.tryTrigger = function(t, e) {
            try {
                t.fn.apply(t.ctx, e)
            } catch (t) {
                setTimeout(function() {
                    throw t
                }, 0)
            }
        }, ht.prototype.disableFor = function(t) {
            try {
                this.disabled = !0, t()
            } finally {
                this.disabled = !1
            }
        }, ht);

    function ht() {
        this._ = {}, this.disabled = !1
    }
    var pt, ft = (pt = function(t, e) {
            return (pt = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            pt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        dt = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        vt = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        gt = function(t) {
            return this instanceof gt ? (this.v = t, this) : new gt(t)
        },
        mt = function(t, e, n) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var i, o = n.apply(t, e || []),
                a = [];
            return i = {}, r("next"), r("throw"), r("return"), i[Symbol.asyncIterator] = function() {
                return this
            }, i;

            function r(r) {
                o[r] && (i[r] = function(n) {
                    return new Promise(function(t, e) {
                        1 < a.push([r, n, t, e]) || s(r, n)
                    })
                })
            }

            function s(t, e) {
                try {
                    (n = o[t](e)).value instanceof gt ? Promise.resolve(n.value.v).then(c, l) : u(a[0][2], n)
                } catch (t) {
                    u(a[0][3], t)
                }
                var n
            }

            function c(t) {
                s("next", t)
            }

            function l(t) {
                s("throw", t)
            }

            function u(t, e) {
                t(e), a.shift(), a.length && s(a[0][0], a[0][1])
            }
        },
        yt = function() {
            for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
            var r = Array(t),
                i = 0;
            for (e = 0; e < n; e++)
                for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
            return r
        },
        bt = ".obsidian",
        wt = bt + "/config",
        kt = bt + "/cache",
        Et = (Ct.prototype.setPath = function(t) {
            this.path = t, this.name = m(t)
        }, Ct.prototype.getNewPathAfterRename = function(t) {
            return this.parent ? this.parent.isRoot() ? t : this.parent.path + "/" + t : ""
        }, Ct);

    function Ct(t, e) {
        this.vault = t, this.setPath(e)
    }
    var xt, _t = (ft(St, xt = Et), St.prototype.setPath = function(t) {
        xt.prototype.setPath.call(this, t), this.basename = w(this.name), this.extension = E(this.name)
    }, St.prototype.getNewPathAfterRename = function(t) {
        return xt.prototype.getNewPathAfterRename.call(this, C(t, this.extension))
    }, St.prototype.cache = function(t) {
        if (null != t) {
            var e = this.vault.cacheLimit;
            t.length <= e && (this.cachedData = t)
        } else this.cachedData = null
    }, St.prototype.updateCacheLimit = function() {
        var t = this.vault.cacheLimit;
        this.cachedData && this.cachedData.length > t && (this.cachedData = null)
    }, St);

    function St(t, e) {
        var n = xt.call(this, t, e) || this;
        return n.saving = !1, n.cachedData = null, n.stat = null, n
    }
    var Lt, Mt = (ft(At, Lt = Et), At.prototype.isRoot = function() {
        return "/" === this.path
    }, At.prototype.getParentPrefix = function() {
        return this.isRoot() ? "" : this.path + "/"
    }, At);

    function At(t, e) {
        var n = Lt.call(this, t, e) || this;
        return n.children = [], n
    }
    var Tt, Ot = (ft(Dt, Tt = ut), Dt.prototype.setupConfigAndCache = function() {
        return dt(this, void 0, void 0, function() {
            var e, n;
            return vt(this, function(t) {
                switch (t.label) {
                    case 0:
                        return t.trys.push([0, 4, , 7]), [4, this.adapter.read(bt)];
                    case 1:
                        return t.sent(), [4, this.adapter.remove(bt)];
                    case 2:
                        return t.sent(), [4, this.adapter.mkdir(bt)];
                    case 3:
                        return t.sent(), [3, 7];
                    case 4:
                        return "ENOENT" !== t.sent().code ? [3, 6] : [4, this.adapter.mkdir(bt)];
                    case 5:
                        t.sent(), t.label = 6;
                    case 6:
                        return [3, 7];
                    case 7:
                        return t.trys.push([7, 9, , 10]), [4, this.adapter.read(wt)];
                    case 8:
                        return e = t.sent(), this.config = JSON.parse(e), [3, 10];
                    case 9:
                        return "ENOENT" === t.sent().code && this.requestSaveConfig(), [3, 10];
                    case 10:
                        return t.trys.push([10, 12, , 13]), [4, this.adapter.read(kt)];
                    case 11:
                        return n = t.sent(), this.cache = JSON.parse(n), [3, 13];
                    case 12:
                        return t.sent(), [3, 13];
                    case 13:
                        return [2]
                }
            })
        })
    }, Dt.prototype.setFileCacheLimit = function(t) {
        this.cacheLimit = t;
        var e = this.fileMap;
        for (var n in e)
            if (e.hasOwnProperty(n)) {
                var r = e[n];
                r instanceof _t && r.updateCacheLimit()
            }
    }, Dt.prototype.getName = function() {
        return this.adapter.getName()
    }, Dt.prototype.saveConfig = function() {
        return dt(this, void 0, void 0, function() {
            return vt(this, function(t) {
                switch (t.label) {
                    case 0:
                        return t.trys.push([0, 2, , 3]), [4, this.adapter.mkdir(bt)];
                    case 1:
                    case 2:
                        return t.sent(), [3, 3];
                    case 3:
                        return t.trys.push([3, 5, , 6]), [4, this.adapter.write(wt, JSON.stringify(this.config, null, 2))];
                    case 4:
                    case 5:
                        return t.sent(), [3, 6];
                    case 6:
                        return [2]
                }
            })
        })
    }, Dt.prototype.getConfig = function(t) {
        var e = this.config[t];
        return void 0 === e ? lt[t] : e
    }, Dt.prototype.setConfig = function(t, e) {
        this.config[t] = e, this.requestSaveConfig()
    }, Dt.prototype.getCache = function() {
        return this.cache
    }, Dt.prototype.saveCache = function() {
        return dt(this, void 0, void 0, function() {
            return vt(this, function(t) {
                switch (t.label) {
                    case 0:
                        return t.trys.push([0, 2, , 3]), [4, this.adapter.mkdir(bt)];
                    case 1:
                    case 2:
                        return t.sent(), [3, 3];
                    case 3:
                        return t.trys.push([3, 5, , 6]), [4, this.adapter.write(kt, JSON.stringify(this.cache))];
                    case 4:
                    case 5:
                        return t.sent(), [3, 6];
                    case 6:
                        return [2]
                }
            })
        })
    }, Dt.prototype.readPluginData = function(i) {
        return dt(this, void 0, Promise, function() {
            var e, n, r;
            return vt(this, function(t) {
                switch (t.label) {
                    case 0:
                        return t.trys.push([0, 2, , 3]), n = (e = JSON).parse, [4, this.adapter.read(bt + "/" + i + ".json")];
                    case 1:
                        return [2, n.apply(e, [t.sent()])];
                    case 2:
                        return "ENOENT" !== (r = t.sent()).code && console.error(r), [3, 3];
                    case 3:
                        return [2, null]
                }
            })
        })
    }, Dt.prototype.writePluginData = function(e, n) {
        return dt(this, void 0, Promise, function() {
            return vt(this, function(t) {
                switch (t.label) {
                    case 0:
                        return t.trys.push([0, 2, , 3]), [4, this.adapter.write(bt + "/" + e + ".json", JSON.stringify(n))];
                    case 1:
                    case 2:
                        return t.sent(), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })
    }, Dt.prototype.load = function() {
        return dt(this, void 0, Promise, function() {
            var e, n;
            return vt(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, this.adapter.watch(this.onChange.bind(this))];
                    case 1:
                        for (t.sent(), e = 0, n = this.initializedCallbacks; e < n.length; e++)(0, n[e])();
                        return this.initializedCallbacks = null, [2]
                }
            })
        })
    }, Dt.prototype.getAbstractFileByPath = function(t) {
        return this.fileMap[t]
    }, Dt.prototype.isEmpty = function() {
        return 1 === Object.keys(this.fileMap).length
    }, Dt.prototype.getRoot = function() {
        return this.root
    }, Dt.prototype.checkForDuplicate = function(t, e) {
        var n = t.getNewPathAfterRename(e),
            r = this.fileMap[n];
        return r && r !== t
    }, Dt.prototype.isNameAllowed = function(t) {
        return !A.c.test(t)
    }, Dt.prototype.isPathAllowed = function(t) {
        return !A.d.test(t)
    }, Dt.prototype.checkPath = function(t) {
        if (!this.isPathAllowed(t)) throw new Error('File name cannot contain any of the following characters: * " \\ / < > : |')
    }, Dt.prototype.registerInitializedCallback = function(t) {
        null !== this.initializedCallbacks ? this.initializedCallbacks.push(t) : t()
    }, Dt.prototype.onChange = function(t, e, n, r) {
        if ("folder-created" === t) {
            var i = new Mt(this, e);
            this.fileMap[e] = i, this.addChild(i), this.trigger("create", this.fileMap[e])
        } else if ("file-created" === t) {
            var o = new _t(this, e);
            o.stat = r, this.fileMap[e] = o, this.addChild(o), this.trigger("create", this.fileMap[e])
        } else if ("modified" === t) {
            if (!this.fileMap.hasOwnProperty(e)) return;
            (a = this.fileMap[e]) instanceof _t && (a.stat = r, a.saving || a.cache(null)), this.trigger("modify", a)
        } else if ("file-removed" === t || "folder-removed" === t) {
            if (this.fileMap.hasOwnProperty(e)) {
                var a = this.fileMap[e];
                this.removeChild(a), delete this.fileMap[e], this.trigger("delete", a)
            }
        } else if ("renamed" === t) {
            if (this.fileMap.hasOwnProperty(n)) {
                var s = this.fileMap[n];
                this.removeChild(s), s.setPath(e), this.addChild(s), this.fileMap[e] = s, delete this.fileMap[n], this.trigger("rename", s, n)
            }
        } else "closed" === t && this.trigger("closed")
    }, Dt.prototype.getDirectParent = function(t) {
        var e = t.path,
            n = e.lastIndexOf("/");
        if (-1 === n) return this.fileMap["/"];
        var r = e.slice(0, n),
            i = this.fileMap[r];
        return i && i instanceof Mt ? i : null
    }, Dt.prototype.addChild = function(t) {
        var e = this.getDirectParent(t);
        e && (t.parent = e).children.push(t)
    }, Dt.prototype.removeChild = function(t) {
        var e = this.getDirectParent(t);
        e && e.children.remove(t)
    }, Dt.prototype.create = function(n, r) {
        return dt(this, void 0, Promise, function() {
            var e;
            return vt(this, function(t) {
                switch (t.label) {
                    case 0:
                        return n = Object(A.k)(n).normalize("NFC"), this.checkPath(n), [4, this.adapter.exists(n, !1)];
                    case 1:
                        if (t.sent()) throw new Error("File already exists.");
                        return [4, this.adapter.write(n, r)];
                    case 2:
                        return t.sent(), (e = this.getAbstractFileByPath(n)) instanceof _t ? [2, e] : [2, null]
                }
            })
        })
    }, Dt.prototype.createBinary = function(n, r) {
        return dt(this, void 0, Promise, function() {
            var e;
            return vt(this, function(t) {
                switch (t.label) {
                    case 0:
                        return n = Object(A.k)(n).normalize("NFC"), this.checkPath(n), [4, this.adapter.exists(n, !1)];
                    case 1:
                        if (t.sent()) throw new Error("File already exists.");
                        return [4, this.adapter.writeBinary(n, r)];
                    case 2:
                        return t.sent(), (e = this.getAbstractFileByPath(n)) instanceof _t ? [2, e] : [2, null]
                }
            })
        })
    }, Dt.prototype.createFolder = function(e) {
        return dt(this, void 0, Promise, function() {
            return vt(this, function(t) {
                switch (t.label) {
                    case 0:
                        return e = Object(A.k)(e).normalize("NFC"), this.checkPath(e), [4, this.adapter.exists(e, !1)];
                    case 1:
                        if (t.sent()) throw new Error("Folder already exists.");
                        return [2, this.adapter.mkdir(e)]
                }
            })
        })
    }, Dt.prototype.read = function(n) {
        return dt(this, void 0, Promise, function() {
            var e;
            return vt(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, this.adapter.read(n.path)];
                    case 1:
                        return e = t.sent(), n.cache(e), [2, e]
                }
            })
        })
    }, Dt.prototype.cachedRead = function(e) {
        return dt(this, void 0, Promise, function() {
            return vt(this, function(t) {
                return null !== e.cachedData ? [2, e.cachedData] : [2, this.read(e)]
            })
        })
    }, Dt.prototype.readBinary = function(n) {
        return dt(this, void 0, Promise, function() {
            var e;
            return vt(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, this.adapter.readBinary(n.path)];
                    case 1:
                        e = t.sent();
                        try {
                            "md" === n.extension && e.byteLength <= this.cacheLimit && n.cache((new TextDecoder).decode(e))
                        } catch (t) {}
                        return [2, e]
                }
            })
        })
    }, Dt.prototype.readRaw = function(e) {
        return dt(this, void 0, Promise, function() {
            return vt(this, function(t) {
                return e = e.normalize("NFC"), [2, this.adapter.read(e)]
            })
        })
    }, Dt.prototype.delete = function(e, n) {
        return dt(this, void 0, Promise, function() {
            return vt(this, function(t) {
                switch (t.label) {
                    case 0:
                        return e ? e instanceof _t ? [4, this.adapter.remove(e.path)] : [3, 2] : [3, 4];
                    case 1:
                        return t.sent(), [3, 4];
                    case 2:
                        return e instanceof Mt ? [4, this.adapter.rmdir(e.path, n)] : [3, 4];
                    case 3:
                        t.sent(), t.label = 4;
                    case 4:
                        return [2]
                }
            })
        })
    }, Dt.prototype.trash = function(e, n) {
        return dt(this, void 0, void 0, function() {
            return vt(this, function(t) {
                switch (t.label) {
                    case 0:
                        return e ? n ? [4, this.adapter.trashSystem(e.path)] : [3, 2] : [2];
                    case 1:
                        if (t.sent()) return [2];
                        t.label = 2;
                    case 2:
                        return [4, this.adapter.trashLocal(e.path)];
                    case 3:
                        return t.sent(), [2]
                }
            })
        })
    }, Dt.prototype.rename = function(e, n) {
        return dt(this, void 0, Promise, function() {
            return vt(this, function(t) {
                switch (t.label) {
                    case 0:
                        return n = Object(A.k)(n).normalize("NFC"), e.path === n ? [2] : (this.checkPath(n), [4, this.adapter.rename(e.path, n)]);
                    case 1:
                        return t.sent(), [2]
                }
            })
        })
    }, Dt.prototype.modify = function(r, i, o) {
        return dt(this, void 0, Promise, function() {
            var e, n;
            return vt(this, function(t) {
                switch (t.label) {
                    case 0:
                        e = r.saving, r.saving = !0, t.label = 1;
                    case 1:
                        return t.trys.push([1, 3, 4, 5]), r.cache(i), [4, this.adapter.write(r.path, i, o)];
                    case 2:
                        return t.sent(), [3, 5];
                    case 3:
                        throw n = t.sent(), r.cache(null), n;
                    case 4:
                        return r.saving = e, [7];
                    case 5:
                        return [2]
                }
            })
        })
    }, Dt.prototype.modifyBinary = function(n, r) {
        return dt(this, void 0, Promise, function() {
            var e;
            return vt(this, function(t) {
                switch (t.label) {
                    case 0:
                        e = n.saving, n.saving = !0, t.label = 1;
                    case 1:
                        return t.trys.push([1, , 3, 4]), [4, this.adapter.writeBinary(n.path, r)];
                    case 2:
                        return t.sent(), [3, 4];
                    case 3:
                        return n.saving = e, [7];
                    case 4:
                        return [2]
                }
            })
        })
    }, Dt.prototype.modifyBinaryRaw = function(e, n) {
        return dt(this, void 0, Promise, function() {
            return vt(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, this.adapter.writeBinary(e, n)];
                    case 1:
                        return t.sent(), [2]
                }
            })
        })
    }, Dt.prototype.copy = function(n, r) {
        return dt(this, void 0, Promise, function() {
            var e;
            return vt(this, function(t) {
                switch (t.label) {
                    case 0:
                        return r = r.normalize("NFC"), this.checkPath(r), [4, this.adapter.copy(n.path, r)];
                    case 1:
                        return t.sent(), (e = this.getAbstractFileByPath(r)) instanceof _t ? [2, e] : [2, null]
                }
            })
        })
    }, Dt.prototype.setCtime = function(e, n) {
        return dt(this, void 0, Promise, function() {
            return vt(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, this.adapter.setCtime(e.path, n)];
                    case 1:
                        return t.sent(), [2]
                }
            })
        })
    }, Dt.prototype.setMtime = function(e, n) {
        return dt(this, void 0, Promise, function() {
            return vt(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, this.adapter.setMtime(e.path, n)];
                    case 1:
                        return t.sent(), [2]
                }
            })
        })
    }, Dt.prototype.getFileCount = function() {
        return Object.keys(this.fileMap).length - 1
    }, Dt.prototype.getAllLoadedFiles = function() {
        var t = [];
        for (var e in this.fileMap)
            if (this.fileMap.hasOwnProperty(e)) {
                var n = this.fileMap[e];
                t.push(n)
            } return t
    }, Dt.prototype.getAvailablePath = function(t, e) {
        for (var n = 1, r = C(t, e); this.getAbstractFileByPath(r);) r = C(t + " " + n, e), n++;
        return r
    }, Dt.prototype.getAvailablePathForAttachments = function(t, e) {
        var n = this.config[tt],
            r = this.getAbstractFileByPath(n);
        return r instanceof Mt ? this.getAvailablePath(r.getParentPrefix() + t, e) : this.getAvailablePath(t, e)
    }, Dt.recurseChildren = function(t, e) {
        for (var n = [t]; n.length;) {
            var r = n.shift();
            if (r && (e(r), r instanceof Mt)) {
                var i = r.children;
                n = n.concat(i)
            }
        }
    }, Dt.prototype.iterateMarkdownFiles = function(a) {
        return mt(this, arguments, function() {
            var e, n, r, i, o;
            return vt(this, function(t) {
                switch (t.label) {
                    case 0:
                        e = [], n = this.getRoot(), Dt.recurseChildren(n, function(t) {
                            t instanceof _t && "md" === t.extension && e.push(t)
                        }), r = 0, t.label = 1;
                    case 1:
                        return r < e.length ? (i = e[r], a ? [4, gt(this.cachedRead(i))] : [3, 3]) : [3, 9];
                    case 2:
                        return o = t.sent(), [3, 5];
                    case 3:
                        return [4, gt(this.read(i))];
                    case 4:
                        o = t.sent(), t.label = 5;
                    case 5:
                        return [4, gt({
                            file: i,
                            content: o
                        })];
                    case 6:
                        return [4, t.sent()];
                    case 7:
                        t.sent(), t.label = 8;
                    case 8:
                        return r++, [3, 1];
                    case 9:
                        return [2]
                }
            })
        })
    }, Dt.prototype.trigger = function(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        Tt.prototype.trigger.apply(this, yt([t], e))
    }, Dt.prototype.on = function(t, e, n) {
        return Tt.prototype.on.call(this, t, e, n)
    }, Dt);

    function Dt(t) {
        var e = Tt.call(this) || this;
        e.fileMap = {}, e.config = {}, e.cache = {}, e.initializedCallbacks = [], e.cacheLimit = 65536, e.adapter = t, e.root = new Mt(e, ""), e.onChange("folder-created", "/"), e.root = e.fileMap["/"], e.requestSaveConfig = Object(A.h)(e.saveConfig.bind(e), 1e3, !0);
        var n = Math.floor(1e4 * Math.random());
        return e.requestSaveCache = Object(A.h)(e.saveCache.bind(e), 1e4 + n, !0), e
    }
    var Pt = (Ft.prototype.queue = function(t) {
        var e = this.promise.then(t, t);
        return this.promise = e
    }, Ft);

    function Ft() {
        this.promise = Promise.resolve()
    }
    var zt, It = (zt = function(t, e) {
            return (zt = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            zt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        Rt = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        Ht = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        Nt = function() {
            for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
            var r = Array(t),
                i = 0;
            for (e = 0; e < n; e++)
                for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
            return r
        };
    var qt, Bt = "metadata",
        jt = "algorithmVersion",
        Vt = (It(Gt, qt = ut), Gt.prototype.getLinkSuggestions = function(i) {
            function t(t) {
                if (!s[t]) {
                    var e = o.getLinktextDest(t, i.path);
                    if (!e) return a.push({
                        displayText: t,
                        linktext: t
                    }), void(s[t] = !0);
                    var n = e.file,
                        r = n.path;
                    x(r, "md") && (r = k(r)), s[r] || (a.push({
                        displayText: r,
                        linktext: o.fileToLinktext(n, i.path)
                    }), s[r] = !0)
                }
            }
            var o = this,
                a = [],
                s = {};
            for (var e in this.fileCache)
                if (this.fileCache.hasOwnProperty(e)) {
                    t(e);
                    var n = this.fileCache[e].hash,
                        r = this.metadataCache[n];
                    if (r) {
                        for (var c = 0, l = r.links; c < l.length; c++) t(l[c].link);
                        for (var u = 0, h = r.embeds; u < h.length; u++) t(h[u].link)
                    }
                } return a
        }, Gt.prototype.getTags = function() {
            var t = {};
            for (var e in this.fileCache)
                if (this.fileCache.hasOwnProperty(e)) {
                    var n = this.fileCache[e].hash,
                        r = this.metadataCache[n];
                    if (r)
                        for (var i = 0, o = r.tags; i < o.length; i++) {
                            var a = o[i].tag;
                            t[a] ? t[a] += 1 : t[a] = 1
                        }
                } return t
        }, Gt.prototype.getLinktextDest = function(t, e) {
            var n = Gt.parseLinktext(t),
                r = n.path,
                i = n.headings,
                o = this.getLinkpathDest(r, e);
            if (0 < o.length && i) {
                var a = o[0],
                    s = "",
                    c = -1,
                    l = -1;
                if ("md" === a.extension && i && 0 < i.length) {
                    s = "#" + i.join("#");
                    var u = this.getFileCache(a);
                    if (u) {
                        for (var h = 0, p = 0, f = null, d = null, v = 0, g = u.headings; v < g.length; v++) {
                            var m = g[v];
                            if (f && m.level <= p) {
                                d = m;
                                break
                            }!f && Gt.stripHeading(m.heading).toLowerCase() === Gt.stripHeading(i[h]).toLowerCase() && m.level > p && (h++, p = m.level, h === i.length && (f = m))
                        }
                        f && (c = f.line), d && (l = d.line)
                    }
                }
                return {
                    file: a,
                    heading: s,
                    lineStart: c,
                    lineEnd: l
                }
            }
            return null
        }, Gt.stripHeading = function(t) {
            return A.f.lastIndex = 0, t.replace(A.f, " ").replace(/\s+/g, " ").trim()
        }, Gt.prototype.getLinkpathDest = function(t, e) {
            if ("" === t && e) {
                var n = this.vault.getAbstractFileByPath(e);
                if (n instanceof _t) return [n]
            }
            var r = this._getLinkpathDest(t, e);
            return 0 === r.length && (r = this._getLinkpathDest(t + ".md", e)), r
        }, Gt.prototype._getLinkpathDest = function(t, e) {
            var n = t.toLowerCase(),
                r = m(n),
                i = this.uniqueFileLookup.get(r);
            if (!i) return [];
            var o = y(e).toLowerCase();
            if (n.startsWith("./") || n.startsWith("../")) {
                if (n.startsWith("./../") && (n = n.substr(2)), n.startsWith("./")) "" !== o && (o += "/"), n = o + n.substring(2);
                else {
                    for (; n.startsWith("../");) n = n.substr(3), o = y(o), console.log(o, n);
                    "" !== o && (o += "/"), n = o + n
                }
                for (var a = 0, s = i; a < s.length; a++)
                    if ((v = (d = s[a]).path.toLowerCase()) === n) return [d]
            }
            for (var c = 0, l = i; c < l.length; c++)
                if ((v = (d = l[c]).path.toLowerCase()) === n) return [d];
            for (var u = [], h = [], p = 0, f = i; p < f.length; p++) {
                var d, v;
                (v = (d = f[p]).path.toLowerCase()).endsWith(n) && (v.startsWith(o) ? u.push(d) : h.push(d))
            }
            return u.sort(function(t, e) {
                return t.path.length - e.path.length
            }), h.sort(function(t, e) {
                return t.path.length - e.path.length
            }), u.concat(h)
        }, Gt.parseLinktext = function(t) {
            for (var e = (t = Object(A.k)(t).normalize("NFC")).split("#"), n = e[0], r = [], i = 1; i < e.length; i++) {
                var o = e[i];
                o && r.push(o)
            }
            return {
                path: n,
                headings: r,
                originalHeading: 1 < e.length ? "#" + e.slice(1).join("#") : ""
            }
        }, Gt.prototype.getLinks = function() {
            var t = {};
            for (var e in this.fileCache)
                if (this.fileCache.hasOwnProperty(e)) {
                    var n = [],
                        r = this.fileCache[e].hash,
                        i = this.metadataCache[r];
                    i && (n = i.links.concat(i.embeds)), t[e] = n
                } return t
        }, Gt.prototype.getFileCache = function(t) {
            var e = t.path;
            if (this.fileCache.hasOwnProperty(e)) {
                var n = this.fileCache[e].hash;
                return this.metadataCache[n]
            }
        }, Gt.prototype.getFileInfo = function(t) {
            return this.fileCache[t]
        }, Gt.prototype.getBacklinks = function(r) {
            function t(t, e) {
                var n = i.getLinktextDest(e.link, t);
                n && n.file === r && o.add(t, e)
            }
            var i = this,
                o = new A.e;
            for (var e in this.fileCache)
                if (this.fileCache.hasOwnProperty(e)) {
                    var n = this.fileCache[e].hash,
                        a = this.metadataCache[n];
                    if (a) {
                        if (a.links)
                            for (var s = 0, c = a.links; s < c.length; s++) t(e, c[s]);
                        if (a.embeds)
                            for (var l = 0, u = a.embeds; l < u.length; l++) t(e, u[l])
                    }
                } return o
        }, Gt.prototype.fileToLinktext = function(t, e) {
            var n = "md" === t.extension ? t.basename : t.name,
                r = this.getLinktextDest(n, e);
            return r && r.file === t ? n : "md" === t.extension ? k(t.path) : t.path
        }, Gt.prototype.watchVaultChanges = function() {
            var t = this.vault;
            t.on("create", this.onCreateOrModify.bind(this)), t.on("modify", this.onCreateOrModify.bind(this)), t.on("delete", this.onDelete.bind(this)), t.on("rename", this.onRename.bind(this))
        }, Gt.prototype.onInitialize = function() {
            for (var t = {}, e = this.vault.getAllLoadedFiles(), n = this.fileCache, r = 0, i = e; r < i.length; r++)(a = i[r]) instanceof _t && _(a.extension) && (this.uniqueFileLookup.add(a.name.toLowerCase(), a), t[a.path] = a);
            for (var o in n)
                if (n.hasOwnProperty(o)) {
                    var a = t[o],
                        s = n[o];
                    a ? this.metadataCache[s.hash] && a.stat.mtime === s.mtime && a.stat.size === s.size || this.onCreateOrModify(a) : this.deletePath(o)
                } for (var o in t) t.hasOwnProperty(o) && (a = t[o], n[o] || this.onCreateOrModify(a));
            this.watchVaultChanges(), this.cleanupDeletedCache()
        }, Gt.prototype.onCreateOrModify = function(i) {
            var n = this;
            if (i && i instanceof _t) {
                var o = i.stat;
                if (_(i.extension)) {
                    this.uniqueFileLookup.add(i.name.toLowerCase(), i);
                    var t = i.path,
                        a = this.fileCache[t],
                        e = !1;
                    if (a) {
                        var r = a.mtime === o.mtime && a.size === o.size,
                            s = a.hash && !!this.metadataCache[a.hash];
                        e = r && s
                    } else this.fileCache[t] = a = {
                        mtime: 0,
                        size: 0,
                        hash: ""
                    };
                    e || (this.inProgressTaskCount++, this.workQueue.queue(function() {
                        return Rt(n, void 0, void 0, function() {
                            var e;
                            return Ht(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), [4, Rt(n, void 0, void 0, function() {
                                            var e, n, r;
                                            return Ht(this, function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return [4, this.vault.readBinary(i)];
                                                    case 1:
                                                        return e = t.sent(), [4, Object(A.s)(e)];
                                                    case 2:
                                                        return n = t.sent(), a.mtime = o.mtime, a.size = o.size, a.hash = n, this.vault.requestSaveCache(), this.metadataCache[n] ? [2] : "md" !== i.extension ? (this.metadataCache[n] = {
                                                            links: [],
                                                            embeds: [],
                                                            tags: [],
                                                            headings: []
                                                        }, [2]) : [4, this.work(e)];
                                                    case 3:
                                                        return (r = t.sent()) && (this.metadataCache[n] = r, this.vault.requestSaveCache()), [2]
                                                }
                                            })
                                        })];
                                    case 1:
                                        return t.sent(), [3, 3];
                                    case 2:
                                        return e = t.sent(), console.error(e), [3, 3];
                                    case 3:
                                        return this.inProgressTaskCount--, 0 === this.inProgressTaskCount && this.trigger("changed"), [2]
                                }
                            })
                        })
                    }))
                }
            }
        }, Gt.prototype.onDelete = function(t) {
            t && t instanceof _t && _(t.extension) && (this.uniqueFileLookup.remove(t.name.toLowerCase(), t), this.deletePath(t.path))
        }, Gt.prototype.deletePath = function(t) {
            delete this.fileCache[t], this.vault.requestSaveCache(), this.trigger("changed")
        }, Gt.prototype.onRename = function(t, e) {
            t && t instanceof _t && _(t.extension) && (this.uniqueFileLookup.remove(m(e).toLowerCase(), t), this.uniqueFileLookup.add(t.name.toLowerCase(), t), this.fileCache[t.path] = this.fileCache[e], delete this.fileCache[e], this.vault.requestSaveCache())
        }, Gt.prototype.work = function(e) {
            var n = this;
            if (this.workerResolve) throw new Error("Work queue must be sequential!");
            return new Promise(function(t) {
                n.workerResolve = t, n.worker.postMessage({
                    content: e
                }, [e])
            })
        }, Gt.prototype.onReceiveMessageFromWorker = function(t) {
            this.workerResolve && (this.workerResolve(t.data), this.workerResolve = null)
        }, Gt.prototype.cleanupDeletedCache = function() {
            var t = this.fileCache,
                e = this.metadataCache,
                n = {};
            for (var r in t) t.hasOwnProperty(r) && (n[t[r].hash] = !0);
            var i = !1;
            for (var o in e) e.hasOwnProperty(o) && (n[o] || (delete e[o], i = !0));
            i && this.vault.requestSaveCache()
        }, Gt.prototype.trigger = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            qt.prototype.trigger.apply(this, Nt([t], e))
        }, Gt.prototype.on = function(t, e, n) {
            return qt.prototype.on.call(this, t, e, n)
        }, Gt);

    function Gt(t, e, n) {
        var r = qt.call(this) || this;
        r.worker = null, r.inProgressTaskCount = 0, r.fileCache = {}, r.metadataCache = {}, r.workQueue = new Pt, r.uniqueFileLookup = new A.e, r.workerResolve = null, r.app = t, r.vault = e, r.parser = n, r.worker = new Worker("app.js"), r.worker.onmessage = r.onReceiveMessageFromWorker.bind(r);
        var i = r.vault.getCache();
        return 9 !== (i[jt] || 0) ? (i.files = r.fileCache = {}, i[Bt] = r.metadataCache = {}, i[jt] = 9) : (r.fileCache = i.files || {}, r.metadataCache = i[Bt] || {}), e.registerInitializedCallback(r.onInitialize.bind(r)), setInterval(r.cleanupDeletedCache.bind(r), 6e5), r
    }
    var Ut, Wt = n(2),
        Kt = "logo-crystal",
        $t = "create-new",
        Zt = "trash",
        Yt = "search",
        Jt = "right-triangle",
        Xt = "document",
        Qt = "folder",
        te = "pencil",
        ee = "left-arrow",
        ne = "right-arrow",
        re = "three-horizontal-bars",
        ie = "dot-network",
        oe = "audio-file",
        ae = "image-file",
        se = "pdf-file",
        ce = "gear",
        le = "documents",
        ue = "blocks",
        he = "go-to-file",
        pe = "presentation",
        fe = "cross-in-box",
        de = "microphone",
        ve = "microphone-filled",
        ge = "two-columns",
        me = "link",
        ye = "popup-open",
        be = "checkmark",
        we = "hashtag",
        ke = "left-arrow-with-tail",
        Ee = "right-arrow-with-tail",
        Ce = "lines-of-text",
        xe = "vertical-three-dots",
        _e = "pin",
        Se = "magnifying-glass",
        Le = "info",
        Me = "horizontal-split",
        Ae = "vertical-split",
        Te = "calendar-with-checkmark",
        Oe = "sheets-in-box",
        De = "up-and-down-arrows",
        Pe = "broken-link",
        Fe = "cross",
        ze = "any-key",
        Ie = "reset",
        Re = "star",
        He = "crossed-star",
        Ne = "dice",
        qe = "filled-pin",
        Be = "enter",
        je = "help",
        Ve = "vault",
        Ge = "open-vault",
        Ue = ((Ut = {})[$t] = '<path fill="currentColor" stroke="currentColor" stroke-width="2" d="M12,0v96h56c3.3,2.5,7.5,4,12,4c11,0,20-9,20-20c0-8.2-5-15.2-12-18.3V29.2l-0.6-0.6l-28-28L58.8,0L12,0z M16,4h40v28h28 v28.4c-1.3-0.3-2.6-0.4-4-0.4c-11,0-20,9-20,20c0,4.5,1.5,8.6,4.1,12H16L16,4z M60,6.9L81.1,28H60L60,6.9z M80,64 c8.9,0,16,7.1,16,16c0,8.9-7.1,16-16,16c-8.9,0-16-7.1-16-16C64,71.1,71.1,64,80,64z M78,70v8h-8v4h8v8h4v-8h8v-4h-8v-8H78z"/>', Ut[Zt] = '<path fill="currentColor" stroke="currentColor" stroke-width="2" d="M42,4c-3.3,0-6,2.7-6,6v4H20.3c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0H16c-0.7,0-1.4,0.4-1.8,1c-0.4,0.6-0.4,1.4,0,2 c0.4,0.6,1,1,1.8,1h2v72c0,3.3,2.7,6,6,6h52c3.3,0,6-2.7,6-6V18h2c0.7,0,1.4-0.4,1.8-1c0.4-0.6,0.4-1.4,0-2c-0.4-0.6-1-1-1.8-1 h-3.7c-0.2,0-0.4,0-0.7,0H64v-4c0-3.3-2.7-6-6-6L42,4z M42,8h16c1.1,0,2,0.9,2,2v4H40v-4C40,8.9,40.9,8,42,8z M22,18h15.7 c0.2,0,0.4,0,0.7,0h23.3c0.2,0,0.4,0,0.7,0H78v72c0,1.1-0.9,2-2,2H24c-1.1,0-2-0.9-2-2V18z M38,28c-1.1,0-2,0.9-2,2v50 c0,0.7,0.4,1.4,1,1.8s1.4,0.4,2,0s1-1,1-1.8V30c0-0.5-0.2-1.1-0.6-1.4C39,28.2,38.5,28,38,28z M50,28c-1.1,0-2,0.9-2,2v50 c0,0.7,0.4,1.4,1,1.8c0.6,0.4,1.4,0.4,2,0s1-1,1-1.8V30c0-0.5-0.2-1.1-0.6-1.4C51,28.2,50.5,28,50,28z M62,28c-1.1,0-2,0.9-2,2v50 c0,0.7,0.4,1.4,1,1.8c0.6,0.4,1.4,0.4,2,0s1-1,1-1.8V30c0-0.5-0.2-1.1-0.6-1.4C63,28.2,62.5,28,62,28z"/>', Ut[Kt] = '<defs><linearGradient id="a" x1="82.85" y1="30.41" x2="51.26" y2="105.9" gradientTransform="matrix(1, 0, 0, -1, -22.41, 110.97)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6c56cc"/><stop offset="1" stop-color="#9785e5"/></linearGradient></defs><title>logo-fat</title><polygon points="44.61 0 12.91 17.52 0 45.45 19.57 90.47 47.35 100 52.44 89.8 63 26.39 44.61 0" fill="#34208c"/><polygon points="63 26.39 43.44 14.41 16.43 35.7 47.35 100 52.44 89.8 63 26.39" fill="url(#a)"/><polygon points="63 26.39 63 26.39 44.61 0 43.44 14.41 63 26.39" fill="#af9ff4"/><polygon points="43.44 14.41 44.61 0 12.91 17.52 16.43 35.7 43.44 14.41" fill="#4a37a0"/><polygon points="16.43 35.7 19.57 90.47 47.35 100 16.43 35.7" fill="#4a37a0"/>', Ut[Yt] = '<path fill="currentColor" stroke="currentColor" stroke-width="2" d="M42,6C23.2,6,8,21.2,8,40s15.2,34,34,34c7.4,0,14.3-2.4,19.9-6.4l26.3,26.3l5.6-5.6l-26-26.1c5.1-6,8.2-13.7,8.2-22.1 C76,21.2,60.8,6,42,6z M42,10c16.6,0,30,13.4,30,30S58.6,70,42,70S12,56.6,12,40S25.4,10,42,10z"/>', Ut[Jt] = '<path fill="currentColor" stroke="currentColor" d="M94.9,20.8c-1.4-2.5-4.1-4.1-7.1-4.1H12.2c-3,0-5.7,1.6-7.1,4.1c-1.3,2.4-1.2,5.2,0.2,7.6L43.1,88c1.5,2.3,4,3.7,6.9,3.7 s5.4-1.4,6.9-3.7l37.8-59.6C96.1,26,96.2,23.2,94.9,20.8L94.9,20.8z"/>', Ut[Xt] = '<path fill="currentColor" stroke="currentColor" d="M14,4v92h72V29.2l-0.6-0.6l-24-24L60.8,4L14,4z M18,8h40v24h24v60H18L18,8z M62,10.9L79.1,28H62V10.9z"/>', Ut[Qt] = '<path fill="currentColor" stroke="currentColor" d="M6.1,8c-3.3,0-6,2.7-6,6v73.8c-0.1,0.5-0.1,0.9,0.1,1.4c0.6,2.7,3,4.8,5.9,4.8h78c3,0,5.4-2.2,5.9-5.1 c0-0.1,0.1-0.2,0.1-0.4c0,0,0-0.1,0-0.1l0.1-0.3c0,0,0,0,0-0.1l9.9-53.6l0.1-0.2V34c0-3.3-2.7-6-6-6v-6c0-3.3-2.7-6-6-6H36.1 c0,0,0,0-0.1,0c-0.1,0-0.2-0.2-0.6-0.6c-0.5-0.6-1.1-1.5-1.7-2.5c-0.6-1-1.3-2.1-2.1-3C30.9,9,29.7,8,28.1,8L6.1,8z M6.1,12h22 c-0.1,0,0.1,0,0.6,0.6c0.5,0.6,1.1,1.5,1.7,2.5c0.6,1,1.3,2.1,2.1,3c0.8,0.9,1.9,1.9,3.6,1.9h52c1.1,0,2,0.9,2,2v6h-74 c-3.1,0-5.7,2.5-5.9,5.6h-0.1L10.1,34l-6,32.4V14C4.1,12.9,4.9,12,6.1,12z M16.1,32h78c1.1,0,2,0.9,2,2l-9.8,53.1l-0.1,0.1 c0,0.1,0,0.2-0.1,0.2c0,0.1,0,0.2-0.1,0.2c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0.1,0,0.2-0.1,0.3c0,0.1,0,0.1,0,0.2 c0,0.1,0,0.2,0,0.2c-0.3,0.8-1,1.4-1.9,1.4h-78c-1.1,0-2-0.9-2-2L14,34.4l0.1-0.2V34C14.1,32.9,14.9,32,16.1,32L16.1,32z"/>', Ut[te] = '<path fill="currentColor" stroke="currentColor" d="M86.3,4c-2.5,0-5,1-6.9,2.9l-1.6,1.6l13.7,13.7c0,0,1.6-1.6,1.6-1.6c3.8-3.8,3.8-10,0-13.8C91.2,5,88.7,4,86.3,4z M74.7,12.1c-0.5,0.1-0.9,0.3-1.2,0.6L8.6,77.6c-0.3,0.2-0.5,0.5-0.6,0.9l-4,15c-0.2,0.7,0,1.4,0.5,1.9s1.2,0.7,1.9,0.5l15-4 c0.3-0.1,0.6-0.3,0.9-0.6l64.9-64.9c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L19.9,88.2l-8.1-8.1l64.6-64.6 c0.6-0.6,0.8-1.5,0.4-2.2c-0.3-0.8-1.1-1.2-1.9-1.2C74.8,12.1,74.7,12.1,74.7,12.1z"/>', Ut[ee] = '<path fill="currentColor" stroke="currentColor" d="M70,8c-0.5,0-1,0.2-1.4,0.6l-40,40c-0.8,0.8-0.8,2,0,2.8l40,40c0.5,0.5,1.3,0.7,1.9,0.5c0.7-0.2,1.3-0.7,1.4-1.4 c0.2-0.7,0-1.4-0.5-1.9L32.8,50l38.6-38.6c0.6-0.6,0.8-1.5,0.4-2.2C71.5,8.4,70.8,8,70,8L70,8z"/>', Ut[ne] = '<path fill="currentColor" stroke="currentColor" d="M30,8c-0.8,0-1.5,0.5-1.9,1.2c-0.3,0.8-0.1,1.6,0.5,2.2L67.2,50L28.6,88.6c-0.5,0.5-0.7,1.3-0.5,1.9 c0.2,0.7,0.7,1.2,1.4,1.4c0.7,0.2,1.4,0,1.9-0.5l40-40c0.8-0.8,0.8-2,0-2.8l-40-40C31,8.2,30.5,8,30,8z"/>', Ut[re] = '<path fill="currentColor" stroke="currentColor" d="M6,18c-0.7,0-1.4,0.4-1.8,1c-0.4,0.6-0.4,1.4,0,2c0.4,0.6,1,1,1.8,1h88c0.7,0,1.4-0.4,1.8-1s0.4-1.4,0-2 c-0.4-0.6-1-1-1.8-1H6z M6,48c-0.7,0-1.4,0.4-1.8,1c-0.4,0.6-0.4,1.4,0,2c0.4,0.6,1,1,1.8,1h88c0.7,0,1.4-0.4,1.8-1 c0.4-0.6,0.4-1.4,0-2s-1-1-1.8-1H6z M6,78c-0.7,0-1.4,0.4-1.8,1c-0.4,0.6-0.4,1.4,0,2c0.4,0.6,1,1,1.8,1h88c0.7,0,1.4-0.4,1.8-1 s0.4-1.4,0-2s-1-1-1.8-1H6z"/>', Ut[ie] = '<path fill="currentColor" stroke="currentColor" d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12c2.6,0,5-0.8,6.9-2.2l15.6,15.6C31.7,40.8,30,45.2,30,50c0,4,1.2,7.6,3.2,10.7 L20.1,71.1c-2.1-1.9-5-3.1-8.1-3.1C5.4,68,0,73.4,0,80s5.4,12,12,12s12-5.4,12-12c0-2.1-0.5-4-1.5-5.8l13.2-10.4 C39.3,67.6,44.4,70,50,70c2.7,0,5.2-0.5,7.5-1.4l5.3,9.9C59.9,80.7,58,84.1,58,88c0,6.6,5.4,12,12,12s12-5.4,12-12s-5.4-12-12-12 c-1.3,0-2.6,0.2-3.8,0.6L61,66.7c3.8-2.5,6.7-6.2,8.1-10.6l6.9,1.4c0,0.2,0,0.3,0,0.5c0,6.6,5.4,12,12,12s12-5.4,12-12 c0-6.6-5.4-12-12-12c-5.1,0-9.4,3.2-11.2,7.6l-6.9-1.5c0.1-0.7,0.1-1.4,0.1-2.1c0-7.9-4.6-14.7-11.3-17.9l3.1-8.2 c0.7,0.1,1.5,0.2,2.2,0.2c6.6,0,12-5.4,12-12S70.6,0,64,0S52,5.4,52,12c0,4.4,2.5,8.3,6.1,10.4L55,30.7c-1.6-0.4-3.3-0.7-5-0.7 c-4.8,0-9.2,1.7-12.6,4.5L21.8,18.9c1.4-2,2.2-4.4,2.2-6.9C24,5.4,18.6,0,12,0L12,0z M12,4c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8 S7.6,4,12,4z M64,4c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S59.6,4,64,4z M50,34c8.9,0,16,7.1,16,16c0,8.9-7.1,16-16,16 c-8.9,0-16-7.1-16-16c0-4.3,1.7-8.2,4.4-11.1c0.2-0.1,0.3-0.3,0.4-0.4C41.8,35.7,45.7,34,50,34z M88,50c4.4,0,8,3.6,8,8 s-3.6,8-8,8s-8-3.6-8-8S83.6,50,88,50z M12,72c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S7.6,72,12,72z M70,80c4.4,0,8,3.6,8,8 s-3.6,8-8,8c-4.4,0-8-3.6-8-8c0-3,1.7-5.6,4.1-7c0.1,0,0.1,0,0.2-0.1c0,0,0,0,0.1-0.1c0,0,0.1,0,0.1-0.1C67.6,80.3,68.7,80,70,80z "/>', Ut[oe] = '<path fill="currentColor" stroke="currentColor" d="M48.4,6c-0.6,0-1.2,0.1-1.8,0.3c-1.2,0.4-2.4,1.1-3.4,2.1L19.7,31.9H6.1C2.7,31.9,0,34.7,0,38v24c0,3.3,2.7,6.1,6.1,6.1 h13.6l23.4,23.3c2.2,2.2,5.1,3.2,7.4,2.1c2.4-1.1,3.5-3.8,3.5-6.9v-74c0-3-1.5-5.5-3.9-6.3C49.6,6.1,49,6,48.4,6z M48.4,10 c0.2,0,0.4,0,0.5,0.1c0.6,0.2,1.1,0.7,1.1,2.6v74c0,2.1-0.7,3.1-1.2,3.3c-0.5,0.2-1.5,0.3-3-1.3L20.7,63.4c0,0-0.1,0-0.1-0.1 c0.1,0.1-0.5-1.1-0.5-1.9v-23c0-0.7,0.7-2,0.5-1.9c0,0,0.1-0.1,0.1-0.1L46,11.2C46.9,10.3,47.8,10,48.4,10L48.4,10z M76.6,13.6 c-0.9,0.1-1.5,0.9-1.6,1.7c-0.1,0.9,0.4,1.7,1.2,2.1c11.9,6,20,18.3,20,32.6s-8.1,26.6-20,32.6c-0.7,0.2-1.2,0.9-1.3,1.7 c-0.1,0.8,0.3,1.5,0.9,1.9c0.7,0.4,1.5,0.4,2.1,0c13.2-6.7,22.3-20.3,22.3-36.1s-9-29.5-22.3-36.1c-0.3-0.2-0.7-0.3-1.1-0.3 C76.8,13.6,76.7,13.6,76.6,13.6L76.6,13.6z M69.5,24.3c-0.9,0.1-1.6,0.8-1.7,1.7c-0.1,0.9,0.3,1.8,1.2,2.1 c7.8,4.2,13.1,12.4,13.1,21.9c0,9.5-5.3,17.7-13.1,21.9c-1,0.5-1.3,1.8-0.8,2.7c0.5,1,1.8,1.3,2.7,0.8C80,70.5,86.1,61,86.1,50 c0-11-6.1-20.6-15.2-25.5c-0.4-0.2-0.8-0.3-1.2-0.3C69.6,24.3,69.6,24.3,69.5,24.3z M6.1,36.1h10.4c-0.3,0.8-0.4,1.6-0.4,2.4v23 c0,0.8,0.1,1.7,0.4,2.4H6.1c-1.1,0-1.9-0.9-1.9-1.9V38C4.1,36.9,5,36.1,6.1,36.1z M61.1,36.8c-1,0.1-1.7,0.9-1.8,1.9 c0,1,0.6,1.8,1.6,2c4.1,1.1,7.1,4.8,7.1,9.2s-3,8.2-7.1,9.3c-1.1,0.3-1.7,1.4-1.4,2.4c0.3,1.1,1.4,1.7,2.4,1.4 c5.8-1.5,10.1-6.9,10.1-13.1s-4.3-11.6-10.1-13.1C61.7,36.8,61.4,36.8,61.1,36.8z"/>', Ut[ae] = '<path fill="currentColor" stroke="currentColor" d="M0,10v80h100V10L0,10z M4,14h92v52H74.6l-14-10H48.8l-8.2-8.2l-9.7,2l-8.6-12.9L4,55.2L4,14z M75,26c-4.9,0-9,4.1-9,9 s4.1,9,9,9s9-4.1,9-9S79.9,26,75,26z M75,30c2.8,0,5,2.2,5,5s-2.2,5-5,5s-5-2.2-5-5C70,32.2,72.2,30,75,30z M21.7,43.1l7.4,11.1 l10.3-2l7.8,7.8h12.2l14,10H96v16H4V60.8L21.7,43.1z"/>', Ut[se] = '<path fill="currentColor" stroke="currentColor" d="M97.3,57.2c-5.4-5.4-21-3.9-28.7-2.9c-7.7-4.7-12.8-11.2-16.4-20.7c1.7-7.2,4.5-18.1,2.4-25C52.7-3,37.7-1.9,35.6,6 c-2,7.2-0.2,17.2,3.1,30c-4.5,10.7-11.1,25-15.8,33.2C14,73.8,1.9,80.9,0.1,89.8c-1.5,7.1,11.6,24.6,34-13.9c10-3.3,20.9-7.4,30.5-9 c8.4,4.6,18.3,7.6,24.9,7.6C100.9,74.5,102,61.9,97.3,57.2z M43.9,6.9c6.8,0,6.2,16.4,1.6,20.9C41.6,20.7,41.6,6.9,43.9,6.9z M30.7,71.3c6-10.5,11.2-23.1,15.4-34.2c5.2,9.4,11.8,17,18.8,22.1C52,62,40.6,67.4,30.7,71.3z M95.7,67.5c0,0-2.6,6.6-25.2-5.7 C93.2,57,97.8,64.9,95.7,67.5z M24.5,76.5C12.2,98.6,6.6,94.1,6.6,94.1C3.6,92.9,3.2,83.5,24.5,76.5z"/>', Ut[ce] = '<path fill="currentColor" stroke="currentColor" d="M44.4,4c-1,0-1.8,0.7-2,1.7l-1.9,11.9c-2.3,0.7-4.6,1.6-6.7,2.7l-9.8-7c-0.8-0.6-1.9-0.5-2.6,0.2l-7.8,7.8 c-0.7,0.7-0.8,1.8-0.2,2.6l6.9,9.9c-1.2,2.1-2.1,4.4-2.8,6.7l-11.9,2c-1,0.2-1.7,1-1.7,2v11c0,1,0.7,1.8,1.6,2l11.9,2.1 c0.7,2.4,1.6,4.6,2.8,6.7l-7,9.8c-0.6,0.8-0.5,1.9,0.2,2.6l7.8,7.8c0.7,0.7,1.8,0.8,2.6,0.2l9.9-6.9c2.1,1.2,4.3,2.1,6.7,2.8 l2,11.9c0.2,1,1,1.7,2,1.7h11c1,0,1.8-0.7,2-1.7l2.1-12c2.3-0.7,4.6-1.6,6.7-2.8l10,7c0.8,0.6,1.9,0.5,2.6-0.2l7.8-7.8 c0.7-0.7,0.8-1.8,0.2-2.6l-7.1-9.9c1.1-2.1,2.1-4.3,2.7-6.6l12-2.1c1-0.2,1.7-1,1.7-2v-11c0-1-0.7-1.8-1.7-2l-12-2 c-0.7-2.3-1.6-4.5-2.7-6.6l7-10c0.6-0.8,0.5-1.9-0.2-2.6l-7.8-7.8c-0.7-0.7-1.8-0.8-2.6-0.2l-9.8,7.1c-2.1-1.2-4.3-2.1-6.7-2.8 l-2.1-12c-0.2-1-1-1.7-2-1.7L44.4,4z M46.1,8h7.6l2,11.4c0.1,0.8,0.7,1.4,1.5,1.6c2.9,0.7,5.7,1.9,8.2,3.4 c0.7,0.4,1.6,0.4,2.2-0.1l9.4-6.7l5.4,5.4l-6.7,9.5c-0.5,0.6-0.5,1.5-0.1,2.2c1.5,2.5,2.6,5.2,3.4,8.1c0.2,0.8,0.8,1.4,1.6,1.5 L92,46.1v7.6l-11.4,2c-0.8,0.1-1.4,0.7-1.6,1.5c-0.7,2.9-1.9,5.6-3.4,8.1c-0.4,0.7-0.4,1.6,0.1,2.2l6.8,9.4l-5.4,5.4l-9.5-6.7 c-0.7-0.5-1.5-0.5-2.2-0.1c-2.5,1.5-5.2,2.7-8.2,3.4c-0.8,0.2-1.3,0.8-1.5,1.6l-2,11.4h-7.6l-1.9-11.3c-0.1-0.8-0.7-1.4-1.5-1.6 c-2.9-0.7-5.7-1.9-8.2-3.4c-0.7-0.4-1.5-0.4-2.2,0.1l-9.4,6.6l-5.4-5.4l6.6-9.3c0.5-0.7,0.5-1.5,0.1-2.2c-1.5-2.5-2.7-5.3-3.4-8.2 c-0.2-0.8-0.8-1.3-1.6-1.5L8,53.7v-7.6l11.3-1.9c0.8-0.1,1.4-0.7,1.6-1.5c0.7-2.9,1.9-5.7,3.4-8.2c0.4-0.7,0.4-1.5-0.1-2.2 l-6.6-9.4l5.4-5.4l9.3,6.7c0.6,0.5,1.5,0.5,2.2,0.1c2.5-1.5,5.3-2.7,8.2-3.4c0.8-0.2,1.4-0.8,1.5-1.6L46.1,8z M50,34 c-8.8,0-16,7.2-16,16s7.2,16,16,16s16-7.2,16-16S58.8,34,50,34z M50,38c6.7,0,12,5.3,12,12s-5.3,12-12,12s-12-5.3-12-12 S43.3,38,50,38z"/>', Ut[le] = '<path fill="currentColor" stroke="currentColor" d="M74,4c-0.1,0-0.2,0-0.3,0H40v11.5l4,4V8h28v20h20v48H64v4h32V26.3c0-0.2,0-0.4,0-0.6v-0.5l-0.4-0.4 c-0.1-0.1-0.2-0.3-0.4-0.4c0,0,0,0,0,0L75.6,4.8c-0.1-0.1-0.2-0.3-0.4-0.4L74.8,4h-0.5C74.2,4,74.1,4,74,4L74,4z M76,10.8L89.2,24 H76V10.8z M38,20c-0.1,0-0.2,0-0.3,0H4v76h56V42.3c0-0.2,0-0.4,0-0.6v-0.5l-0.4-0.4c-0.1-0.1-0.2-0.3-0.4-0.4L39.6,20.7 c-0.1-0.1-0.2-0.3-0.4-0.4L38.8,20h-0.5C38.2,20,38.1,20,38,20z M8,24h28v20h20v48H8L8,24z M40,26.8L53.2,40H40V26.8z M60.5,36 l4,4H84v-4L60.5,36z M64,48v4h12v-4H64z M16,52v4h32v-4H16z M64,60v4h20v-4H64z M16,64v4h24v-4H16z M16,76v4h32v-4H16z"/>', Ut[ue] = '<path fill="currentColor" stroke="currentColor" d="M47.7,0c-0.5,0.1-1,0.4-1.3,0.8L32.3,20.3c-0.6,0.9-0.4,2.1,0.4,2.7l19.4,14.1c0,0,0.1,0.1,0.1,0.1c0.9,0.5,2,0.3,2.6-0.6 l14.2-19.4c0.3-0.4,0.5-1,0.4-1.5c-0.1-0.5-0.4-1-0.8-1.3L49.2,0.4C48.8,0.1,48.3,0,47.9,0C47.8,0,47.8,0,47.7,0z M73.6,0 c-1,0.2-1.6,1-1.6,2v24c0,1.1,0.9,2,2,2h24c1.1,0,2-0.9,2-2V2c0-1.1-0.9-2-2-2H74c-0.1,0-0.1,0-0.2,0S73.7,0,73.6,0z M76,4h20v20 H76V4z M48.5,4.8l16.1,11.7L52.9,32.8L36.7,20.9L48.5,4.8z M1.6,24c-1,0.2-1.6,1-1.6,2v23.8c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2 v23.6c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2V98c0,1.1,0.9,2,2,2h72c1.1,0,2-0.9,2-2V74c0-1.1-0.9-2-2-2H52V50c0-1.1-0.9-2-2-2H28 V26c0-1.1-0.9-2-2-2H2c-0.1,0-0.1,0-0.2,0S1.7,24,1.6,24L1.6,24z M4,28h20v20H4L4,28z M87.3,30.9c-0.1,0-0.2,0-0.3,0.1l-22.7,7.6 c-0.5,0.2-0.9,0.5-1.2,1c-0.2,0.5-0.3,1-0.1,1.5l7.6,22.7c0,0,0,0.1,0.1,0.1c0.4,1,1.5,1.5,2.5,1.1l22.7-7.6 c1-0.4,1.6-1.5,1.3-2.5l-7.6-22.7C89.1,31.3,88.2,30.7,87.3,30.9L87.3,30.9z M86.3,35.4l6.3,19l-18.9,6.3l-6.3-18.9L86.3,35.4z M4,52h20v20H4L4,52z M28,52h20v20H28L28,52z M4,76h20v20H4L4,76z M28,76h20v20H28L28,76z M52,76h20v20H52V76z"/>', Ut[he] = '<path fill="currentColor" stroke="currentColor" d="M16,4c-1.1,0-2,0.9-2,2v26h4V8h64v84H18V78h-4v16c0,1.1,0.9,2,2,2h68c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2L16,4z M32,20v4 h36v-4H32z M32,32v4h36v-4H32z M22,36v12H6v2v12h16v12l25.3-19L22,36z M26,44l14.7,11L26,66v-8H10v-6h16V44z M54,46 c-1.1,0-2,0.9-2,2v14c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V48c0-1.1-0.9-2-2-2H54z M56,50h8v10h-8V50z M32,74v4h36v-4H32z"/>', Ut[pe] = '<path fill="currentColor" stroke="currentColor" d="M5.6,4C4.7,4.2,4,5,4,6v8c0,1.1,0.9,2,2,2h2v62c0,1.1,0.9,2,2,2h38v4.4c-2.3,0.8-4,3-4,5.6c0,3.3,2.7,6,6,6s6-2.7,6-6 c0-2.6-1.7-4.8-4-5.6V80h38c1.1,0,2-0.9,2-2V16h2c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2H6C5.9,4,5.9,4,5.8,4S5.7,4,5.6,4L5.6,4z M8,8 h84v4H8L8,8z M12,16h76v60H50.4c-0.3-0.1-0.5-0.1-0.8,0H12L12,16z M37.6,28c-1,0.2-1.6,1-1.6,2v10c0,1.1,0.9,2,2,2h10 c1.1,0,2-0.9,2-2c0-6.6-5.4-12-12-12c-0.1,0-0.1,0-0.2,0C37.8,28,37.7,28,37.6,28z M40,32.4c2.8,0.7,4.9,2.8,5.6,5.6H40V32.4z M32,34c-6.6,0-12,5.4-12,12c0,6.6,5.4,12,12,12s12-5.4,12-12c0-1.1-0.9-2-2-2h-8v-8C34,34.9,33.1,34,32,34z M55.4,34 c-1.1,0.2-1.9,1.2-1.7,2.3s1.2,1.9,2.3,1.7h22c0.7,0,1.4-0.4,1.8-1c0.4-0.6,0.4-1.4,0-2c-0.4-0.6-1-1-1.8-1H56c-0.1,0-0.1,0-0.2,0 c-0.1,0-0.1,0-0.2,0C55.6,34,55.5,34,55.4,34L55.4,34z M30,38.4V46c0,1.1,0.9,2,2,2h7.6c-0.9,3.4-3.9,6-7.6,6c-4.4,0-8-3.6-8-8 C24,42.3,26.6,39.3,30,38.4z M55.4,44c-1.1,0.2-1.9,1.2-1.7,2.3c0.2,1.1,1.2,1.9,2.3,1.7h22c0.7,0,1.4-0.4,1.8-1 c0.4-0.6,0.4-1.4,0-2c-0.4-0.6-1-1-1.8-1H56c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0C55.6,44,55.5,44,55.4,44L55.4,44z M55.4,54 c-1.1,0.2-1.9,1.2-1.7,2.3c0.2,1.1,1.2,1.9,2.3,1.7h22c0.7,0,1.4-0.4,1.8-1c0.4-0.6,0.4-1.4,0-2c-0.4-0.6-1-1-1.8-1H56 c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0C55.6,54,55.5,54,55.4,54L55.4,54z M49.8,88c0.1,0,0.1,0,0.2,0c1.1,0,2,0.9,2,2s-0.9,2-2,2 c-1.1,0-2-0.9-2-2C48,88.9,48.8,88.1,49.8,88z"/>', Ut[fe] = '<path fill="currentColor" stroke="currentColor" d="M18,8C12.5,8,8,12.5,8,18v64c0,5.5,4.5,10,10,10h64c5.5,0,10-4.5,10-10V18c0-5.5-4.5-10-10-10L18,8z M18,12h64 c3.3,0,6,2.7,6,6v64c0,3.3-2.7,6-6,6H18c-3.3,0-6-2.7-6-6V18C12,14.7,14.7,12,18,12z M33.4,30.6l-2.8,2.8L47.2,50L30.6,66.6 l2.8,2.8L50,52.8l16.6,16.6l2.8-2.8L52.8,50l16.6-16.6l-2.8-2.8L50,47.2L33.4,30.6z"/>', Ut[de] = '<path fill="currentColor" stroke="currentColor" d="M50,0c-12.1,0-22,9.6-22,21.5v25.1c0,11.9,9.9,21.5,22,21.5s22-9.6,22-21.5V21.5C72,9.6,62.1,0,50,0z M50,4.1 c10,0,17.9,7.8,17.9,17.4V22H57c-0.1,0-0.1,0-0.2,0c-1.1,0.1-2,1-1.9,2.1c0.1,1.1,1,2,2.1,1.9h10.9v4H57c-0.1,0-0.1,0-0.2,0 c-1.1,0.1-2,1-1.9,2.1s1,2,2.1,1.9h10.9v4H57c-0.1,0-0.1,0-0.2,0c-1.1,0.1-2,1-1.9,2.1s1,2,2.1,1.9h10.9v4.6 c0,9.6-8,17.4-17.9,17.4S32,56.2,32,46.6V42H43c0.7,0,1.4-0.4,1.8-1c0.4-0.6,0.4-1.4,0-2c-0.4-0.6-1-1-1.8-1H32v-4H43 c0.7,0,1.4-0.4,1.8-1c0.4-0.6,0.4-1.4,0-2c-0.4-0.6-1-1-1.8-1H32v-4H43c0.7,0,1.4-0.4,1.8-1c0.4-0.6,0.4-1.4,0-2 c-0.4-0.6-1-1-1.8-1H32v-0.6C32,11.9,40,4.1,50,4.1L50,4.1z M19.6,34.3c-0.8,0.2-1.4,0.9-1.4,1.7v10c0,15.4,11.1,28.3,25.7,31.2 V90h-13c-3.8,0-6.9,3.1-6.9,6.9v2.9h51.7v-2.9c0-3.8-3.1-6.9-6.9-6.9H56V77.2C70.6,74.4,81.7,61.4,81.7,46V36c0-1-0.8-1.7-1.7-1.7 s-1.7,0.8-1.7,1.7v10c0,15.6-12.6,28.2-28.2,28.2S21.7,61.6,21.7,46V36c0-0.5-0.2-1-0.6-1.3c-0.4-0.3-0.9-0.5-1.4-0.4 C19.7,34.3,19.7,34.3,19.6,34.3L19.6,34.3z M48,77.6c0.6,0,1.3,0.1,1.9,0.1c0.6,0,1.3-0.1,1.9-0.1v12.3H48L48,77.6z M30.9,94h14.6 c0.2,0,0.3,0.1,0.5,0.1h8c0.1,0,0.3,0,0.4-0.1h14.4c1.3,0,2.1,0.8,2.6,1.9h-43C28.8,94.8,29.6,94,30.9,94z"/>', Ut[ge] = '<path fill="currentColor" stroke="currentColor" d="M10,8c-1.1,0-2,0.9-2,2v80c0,1.1,0.9,2,2,2h80c1.1,0,2-0.9,2-2V10c0-1.1-0.9-2-2-2L10,8z M12,12h36v76H12V12z M52,12h36 v76H52V12z"/>', Ut[me] = '<path fill="currentColor" stroke="currentColor" d="M74,8c-4.8,0-9.3,1.9-12.7,5.3l-10,10c-2.9,2.9-4.7,6.6-5.1,10.6C46,34.6,46,35.3,46,36c0,2.7,0.6,5.4,1.8,7.8l3.1-3.1 C50.3,39.2,50,37.6,50,36c0-3.7,1.5-7.3,4.1-9.9l10-10c2.6-2.6,6.2-4.1,9.9-4.1s7.3,1.5,9.9,4.1c2.6,2.6,4.1,6.2,4.1,9.9 s-1.5,7.3-4.1,9.9l-10,10C71.3,48.5,67.7,50,64,50c-1.6,0-3.2-0.3-4.7-0.8l-3.1,3.1c2.4,1.1,5,1.8,7.8,1.8c4.8,0,9.3-1.9,12.7-5.3 l10-10C90.1,35.3,92,30.8,92,26s-1.9-9.3-5.3-12.7C83.3,9.9,78.8,8,74,8L74,8z M62,36c-0.5,0-1,0.2-1.4,0.6l-24,24 c-0.5,0.5-0.7,1.2-0.6,1.9c0.2,0.7,0.7,1.2,1.4,1.4c0.7,0.2,1.4,0,1.9-0.6l24-24c0.6-0.6,0.8-1.5,0.4-2.2C63.5,36.4,62.8,36,62,36 z M36,46c-4.8,0-9.3,1.9-12.7,5.3l-10,10c-3.1,3.1-5,7.2-5.2,11.6c0,0.4,0,0.8,0,1.2c0,4.8,1.9,9.3,5.3,12.7 C16.7,90.1,21.2,92,26,92s9.3-1.9,12.7-5.3l10-10C52.1,73.3,54,68.8,54,64c0-2.7-0.6-5.4-1.8-7.8l-3.1,3.1 c0.5,1.5,0.8,3.1,0.8,4.7c0,3.7-1.5,7.3-4.1,9.9l-10,10C33.3,86.5,29.7,88,26,88s-7.3-1.5-9.9-4.1S12,77.7,12,74 c0-3.7,1.5-7.3,4.1-9.9l10-10c2.6-2.6,6.2-4.1,9.9-4.1c1.6,0,3.2,0.3,4.7,0.8l3.1-3.1C41.4,46.6,38.7,46,36,46L36,46z"/>', Ut[ye] = '<path fill="currentColor" stroke="currentColor" d="M21.5,8.3c-3.7,0-6.6,2.9-6.6,6.6v65.8l4.4-4.4V14.9c0-1.3,0.9-2.2,2.2-2.2h57c1.3,0,2.2,0.9,2.2,2.2v70.2 c0,1.3-0.9,2.2-2.2,2.2H30.3l-4.4,4.4h52.6c3.7,0,6.6-2.9,6.6-6.6V14.9c0-3.7-2.9-6.6-6.6-6.6H21.5z M30.3,50v4.4h18.9l-34,34 l3.1,3.1l34-34v18.9h4.4V50H30.3z"/>', Ut[be] = '<path fill="currentColor" stroke="currentColor" d="M85.8,17.3c-0.1,0-0.1,0-0.2,0.1c-0.5,0.1-1,0.5-1.3,0.9L43.4,81.6L15.3,56.2c-0.5-0.6-1.3-0.9-2.1-0.7 c-0.8,0.2-1.3,0.9-1.5,1.6c-0.1,0.8,0.2,1.6,0.9,2l29.8,27c0.4,0.4,1,0.6,1.6,0.5c0.6-0.1,1.1-0.4,1.4-0.9l42.2-65.4 c0.5-0.7,0.5-1.5,0.1-2.2S86.5,17.1,85.8,17.3L85.8,17.3z"/>', Ut[we] = '<path fill="currentColor" stroke="currentColor" d="M36,18l-1.5,16H20l-0.4,4h14.5l-2.4,26H17.2l-0.4,4h14.5L30,82h4l1.3-14h26L60,82h4l1.3-14h15.5l0.4-4H65.7l2.4-26h15.5 l0.4-4H68.5L70,18h-4l-1.5,16h-26L40,18L36,18z M38.1,38h26l-2.4,26h-26L38.1,38z"/>', Ut[ke] = '<path fill="currentColor" stroke="currentColor" d="M39.6,26.2c-0.4,0.1-0.8,0.3-1.1,0.6L16.7,48.6L15.3,50l1.4,1.4l21.8,21.8c0.5,0.6,1.3,0.9,2,0.7c0.7-0.2,1.3-0.8,1.5-1.5 c0.2-0.8-0.1-1.5-0.7-2L22.9,52H82c0.7,0,1.4-0.4,1.8-1c0.4-0.6,0.4-1.4,0-2c-0.4-0.6-1-1-1.8-1H22.9l18.4-18.4 c0.6-0.6,0.8-1.6,0.4-2.3C41.4,26.5,40.5,26,39.6,26.2L39.6,26.2z"/>', Ut[Ee] = '<path fill="currentColor" stroke="currentColor" d="M59.7,26.2c-0.8,0.1-1.4,0.7-1.6,1.4c-0.2,0.7,0,1.5,0.6,2L77.1,48H18c-0.1,0-0.1,0-0.2,0c-1.1,0.1-2,1-1.9,2.1 c0.1,1.1,1,2,2.1,1.9h59.1L58.7,70.4c-0.6,0.5-0.9,1.3-0.7,2c0.2,0.7,0.8,1.3,1.5,1.5c0.8,0.2,1.5-0.1,2-0.7l21.8-21.7l1.4-1.4 l-1.4-1.4L61.5,26.8c-0.4-0.4-1-0.7-1.6-0.6C59.8,26.2,59.8,26.2,59.7,26.2L59.7,26.2z"/>', Ut[Ce] = '<path fill="currentColor" stroke="currentColor" d="M16,10c-3.3,0-6,2.7-6,6v68c0,3.3,2.7,6,6,6h68c3.3,0,6-2.7,6-6V16c0-3.3-2.7-6-6-6L16,10z M16,14h68c1.1,0,2,0.9,2,2v68 c0,1.1-0.9,2-2,2H16c-1.1,0-2-0.9-2-2V16C14,14.9,14.9,14,16,14z M22,24v4h52v-4H22z M22,36v4h34v-4L22,36z M22,48v4h52v-4H22z M22,60v4h34v-4H22z M22,72v4h52v-4H22z"/>', Ut[xe] = '<path fill="currentColor" stroke="currentColor" d="M50,6c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S56.6,6,50,6z M50,10c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8 S45.6,10,50,10z M50,38c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S56.6,38,50,38z M50,42c4.4,0,8,3.6,8,8s-3.6,8-8,8 s-8-3.6-8-8S45.6,42,50,42z M50,70c-6.6,0-12,5.4-12,12c0,6.6,5.4,12,12,12s12-5.4,12-12C62,75.4,56.6,70,50,70z M50,74 c4.4,0,8,3.6,8,8c0,4.4-3.6,8-8,8s-8-3.6-8-8C42,77.6,45.6,74,50,74z"/>', Ut[_e] = '<path fill="currentColor" stroke="currentColor" d="M71.9,0c-0.4,0-0.7,0.1-1.1,0.2c-1.5,0.4-2.8,1.4-3.9,2.7c0,0,0,0-0.1,0.1L50.1,26.4c-10.3-2.4-21.5,0.3-29.4,8.3 c-0.8,0.8-0.8,2,0,2.8l14.9,14.8L0.4,96.7c-0.6,0.8-0.6,1.9,0.1,2.7c0.7,0.7,1.9,0.8,2.7,0.1l44.4-35.1l14.9,14.8 c0.8,0.8,2,0.8,2.8,0c8.1-8.1,10.7-19.5,8.2-29.9l23.4-15.9c0,0,0,0,0.1-0.1c1.4-1,2.3-2.3,2.7-3.7c0.4-1.5,0.2-3.3-1-4.6 L75.3,1.3c-0.6-0.6-1.4-1-2.2-1.1C72.7,0,72.3,0,71.9,0z M72.3,4c0.1,0,0.1,0,0.1,0.1l23.6,23.8c0.1,0.1,0.1,0.1,0,0.6 c-0.1,0.4-0.6,1.1-1.3,1.7l-0.1,0.1L70.3,46.7c0,0,0,0-0.1,0.1l-0.1,0.1c-0.7,0.5-0.9,1.4-0.7,2.2c2.6,8.8,0.6,18.4-5.7,25.7 L25.1,36.3c7.2-6.2,16.8-8.3,25.4-5.8c0.8,0.2,1.7-0.1,2.2-0.8L70,5.4l0.1-0.1c0.6-0.7,1.3-1.1,1.7-1.2C72,4,72.2,4,72.3,4L72.3,4 z M38.4,55.2l6.4,6.4L14.3,85.7L38.4,55.2z"/>', Ut[Se] = '<path fill="currentColor" stroke="currentColor" d="M42,6C23.2,6,8,21.2,8,40s15.2,34,34,34c7.4,0,14.3-2.4,19.9-6.4l26.3,26.3l5.6-5.6l-26-26.1c5.1-6,8.2-13.7,8.2-22.1 C76,21.2,60.8,6,42,6z M42,10c16.6,0,30,13.4,30,30S58.6,70,42,70S12,56.6,12,40S25.4,10,42,10z"/>', Ut[Le] = '<path fill="currentColor" stroke="currentColor" d="M50,4C24.6,4,4,24.6,4,50s20.6,46,46,46s46-20.6,46-46S75.4,4,50,4L50,4z M50,8c23.2,0,42,18.8,42,42S73.2,92,50,92 S8,73.2,8,50S26.8,8,50,8z M50,22c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S53.3,22,50,22z M42,42v4h2h2v26h-2h-2v4h2h2h8h2h2v-4h-2 h-2V42h-2h-8L42,42z"/>', Ut[Me] = '<path fill="currentColor" stroke="currentColor" d="M50,0.2l-1.4,1.4l-17,17c-0.8,0.8-0.8,2.1,0,2.9c0.8,0.8,2.1,0.8,2.9,0L48,7.9V40H0v4h100v-4H52V7.9l13.6,13.6 c0.8,0.8,2.1,0.8,2.9,0c0.8-0.8,0.8-2.1,0-2.9l-17-17L50,0.2z M49.8,55.9c-0.1,0-0.1,0-0.2,0.1H0v4h48v32.1L34.4,78.6 c-0.5-0.5-1.2-0.7-1.9-0.6c-0.8,0.1-1.4,0.7-1.6,1.4c-0.2,0.7,0,1.5,0.6,2l17,17l1.4,1.4l1.4-1.4l17-17c0.8-0.8,0.8-2.1,0-2.9 s-2.1-0.8-2.9,0L52,92.1V60h48v-4H50.4C50.2,55.9,50,55.9,49.8,55.9L49.8,55.9z"/>', Ut[Ae] = '<path fill="currentColor" stroke="currentColor" d="M40,0v48H7.9l13.6-13.6c0.6-0.6,0.8-1.6,0.4-2.3c-0.4-0.8-1.3-1.2-2.1-1.1c-0.4,0-0.9,0.3-1.2,0.6l-17,17L0.2,50l1.4,1.4 l17,17c0.8,0.8,2.1,0.8,2.9,0c0.8-0.8,0.8-2.1,0-2.9L7.9,52H40v48h4V50.4c0.1-0.3,0.1-0.5,0-0.8V0H40z M56,0v49.4 c-0.1,0.4-0.1,0.8,0,1.2V100h4V52h32.1L78.6,65.6c-0.8,0.8-0.8,2.1,0,2.9c0.8,0.8,2.1,0.8,2.9,0l17-17l1.4-1.4l-1.4-1.4l-17-17 c-0.4-0.4-1-0.7-1.6-0.6c-0.1,0-0.2,0-0.3,0.1c-0.7,0.1-1.4,0.7-1.6,1.4c-0.2,0.7,0,1.5,0.6,2L92.1,48H60V0H56z"/>', Ut[Te] = '<path fill="currentColor" stroke="currentColor" d="M24,0c-2.2,0-4,1.8-4,4v4H8c-2.1,0-4,1.6-4,3.9v80.5c0,1.1,0.7,2.3,1.5,2.8C6.3,95.8,7.1,96,8,96h84 c0.9,0,1.7-0.2,2.5-0.8c0.8-0.6,1.5-1.7,1.5-2.8V11.9C96,9.8,94.3,8,92.2,8H80V4c0-2.2-1.8-4-4-4h-4c-2.2,0-4,1.8-4,4v4H32V4 c0-2.2-1.8-4-4-4L24,0z M24,4h4v12h-4V4z M72,4h4v12h-4V4z M8,12h12v4c0,2.2,1.8,4,4,4h4c2.2,0,4-1.8,4-4v-4h36v4c0,2.2,1.8,4,4,4 h4c2.2,0,4-1.8,4-4v-4h12v14H8L8,12z M8,30h84v62H8L8,30z M65.4,41.2l-1.1,1.7L48,68.2l-10.7-9.7l-1.5-1.3l-2.7,3l1.5,1.3 l14.2,12.8l18.8-29.2l1.1-1.7L65.4,41.2z"/>', Ut[Oe] = '<path fill="currentColor" stroke="currentColor" d="M22,6c-1.1,0-2,0.9-2,2v8h-2c-1.1,0-2,0.9-2,2v8h-2c-1.1,0-2,0.9-2,2v30H8c-1.1,0-2,0.9-2,2v32c0,1.1,0.9,2,2,2h84 c1.1,0,2-0.9,2-2V60c0-1.1-0.9-2-2-2h-4V28c0-1.1-0.9-2-2-2h-2v-8c0-1.1-0.9-2-2-2h-2V8c0-1.1-0.9-2-2-2L22,6z M24,10h52v6H24V10z M20,20h1.7c0.2,0,0.4,0,0.7,0h55.3c0.2,0,0.4,0,0.7,0H80v6H20L20,20z M16,30h1.7c0.2,0,0.4,0,0.7,0h63.3c0.2,0,0.4,0,0.7,0H84v28 H62c-1.1,0-2,0.9-2,2c0,5.5-4.5,10-10,10s-10-4.5-10-10c0-1.1-0.9-2-2-2H16V30z M10,62h26.4c1,6.7,6.6,12,13.6,12 s12.6-5.3,13.6-12H90v28H10L10,62z"/>', Ut[De] = '<path fill="currentColor" stroke="currentColor" d="M25.8,5.9c-0.1,0-0.2,0-0.3,0.1c-0.1,0-0.1,0-0.2,0.1c-0.1,0-0.1,0-0.2,0.1c-0.1,0.1-0.3,0.2-0.4,0.3 c-0.1,0.1-0.2,0.1-0.3,0.2c-0.1,0.1-0.2,0.2-0.3,0.3L8.6,22.6c-0.8,0.8-0.8,2.1,0,2.9c0.8,0.8,2.1,0.8,2.9,0L24,12.9V76 c0,0.7,0.4,1.4,1,1.8c0.6,0.4,1.4,0.4,2,0c0.6-0.4,1-1,1-1.8V12.9l12.6,12.6c0.8,0.8,2.1,0.8,2.9,0c0.8-0.8,0.8-2.1,0-2.9 L27.7,6.9c-0.1-0.2-0.3-0.4-0.6-0.6c-0.2-0.2-0.5-0.3-0.8-0.3C26.2,6,26,5.9,25.8,5.9L25.8,5.9z M74,6c-1.1,0-2,0.9-2,2s0.9,2,2,2 s2-0.9,2-2S75.1,6,74,6z M74,14c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S75.1,14,74,14z M73.8,21.9c-0.1,0-0.2,0-0.3,0.1 c-0.9,0.2-1.6,1-1.6,2v63.1L59.4,74.6c-0.5-0.5-1.2-0.7-1.9-0.6c-0.8,0.1-1.4,0.7-1.6,1.4c-0.2,0.7,0,1.5,0.6,2l15.8,15.7 c0,0.1,0.1,0.1,0.1,0.2l0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0.1,0c0.1,0.1,0.3,0.2,0.4,0.3c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0.1 c0,0,0,0,0.1,0c0.1,0,0.1,0,0.2,0.1c0.2,0,0.4,0,0.6,0c0,0,0.1,0,0.1,0c0.2,0,0.3-0.1,0.5-0.2c0.3-0.1,0.5-0.3,0.7-0.6l15.9-15.8 c0.8-0.8,0.8-2.1,0-2.9c-0.8-0.8-2.1-0.8-2.9,0L76,87.1V24c0-0.6-0.2-1.1-0.6-1.5C75,22.1,74.4,21.9,73.8,21.9L73.8,21.9z M26,82 c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2C28,82.9,27.1,82,26,82z M26,90c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2 C28,90.9,27.1,90,26,90z"/>', Ut[Pe] = '<path fill="currentColor" stroke="currentColor" d="M74,8c-4.8,0-9.3,1.9-12.7,5.3l-10,10c-2.9,2.9-4.7,6.6-5.1,10.6C46,34.6,46,35.3,46,36c0,2.7,0.6,5.4,1.8,7.8l3.1-3.1 C50.3,39.2,50,37.6,50,36c0-3.7,1.5-7.3,4.1-9.9l10-10c2.6-2.6,6.2-4.1,9.9-4.1s7.3,1.5,9.9,4.1c2.6,2.6,4.1,6.2,4.1,9.9 s-1.5,7.3-4.1,9.9l-10,10C71.3,48.5,67.7,50,64,50c-1.6,0-3.2-0.3-4.7-0.8l-3.1,3.1c2.4,1.1,5,1.8,7.8,1.8c4.8,0,9.3-1.9,12.7-5.3 l10-10C90.1,35.3,92,30.8,92,26s-1.9-9.3-5.3-12.7C83.3,9.9,78.8,8,74,8L74,8z M62,36c-0.5,0-1,0.2-1.4,0.6l-24,24 c-0.5,0.5-0.7,1.2-0.6,1.9c0.2,0.7,0.7,1.2,1.4,1.4c0.7,0.2,1.4,0,1.9-0.6l24-24c0.6-0.6,0.8-1.5,0.4-2.2C63.5,36.4,62.8,36,62,36 z M36,46c-4.8,0-9.3,1.9-12.7,5.3l-10,10c-3.1,3.1-5,7.2-5.2,11.6c0,0.4,0,0.8,0,1.2c0,4.8,1.9,9.3,5.3,12.7 C16.7,90.1,21.2,92,26,92s9.3-1.9,12.7-5.3l10-10C52.1,73.3,54,68.8,54,64c0-2.7-0.6-5.4-1.8-7.8l-3.1,3.1 c0.5,1.5,0.8,3.1,0.8,4.7c0,3.7-1.5,7.3-4.1,9.9l-10,10C33.3,86.5,29.7,88,26,88s-7.3-1.5-9.9-4.1S12,77.7,12,74 c0-3.7,1.5-7.3,4.1-9.9l10-10c2.6-2.6,6.2-4.1,9.9-4.1c1.6,0,3.2,0.3,4.7,0.8l3.1-3.1C41.4,46.6,38.7,46,36,46L36,46z M80,60 c-10.3,0-18.8,7.9-19.9,17.9C60,78.6,60,79.3,60,80c0,11,9,20,20,20s20-9,20-20S91,60,80,60z M80,64c8.8,0,16,7.2,16,16 s-7.2,16-16,16s-16-7.2-16-16S71.2,64,80,64z M73.2,71c-0.1,0-0.3,0-0.4,0h-0.2c-1,0.2-1.8,1.2-1.6,2.4c0,0.4,0.2,0.8,0.6,1.2 l5.6,5.6l-5.6,5.6c-0.8,0.8-0.8,2,0,2.8c0.8,0.8,2,0.8,2.8,0L80,83l5.6,5.6c0.8,0.8,2,0.8,2.8,0c0.8-0.8,0.8-2,0-2.8L82.8,80 l5.6-5.6c0.8-0.8,0.8-2,0.2-2.8c-0.4-0.4-1.2-0.8-1.8-0.6c-0.4,0-0.8,0.2-1.2,0.6L80,77.2l-5.6-5.6C74.1,71.3,73.7,71,73.2,71z"/>', Ut[Fe] = '<path fill="currentColor" stroke="currentColor" d="M15.4,12.6l-2.9,2.9L47.1,50L12.6,84.6l2.9,2.9L50,52.9l34.6,34.6l2.9-2.9L52.9,50l34.6-34.6l-2.9-2.9L50,47.1L15.4,12.6z "/>', Ut[ze] = '<path fill="currentColor" stroke="currentColor" d="M27.2,8C17.7,8,10,15.7,10,25.2v37.6v14C10,86.3,17.7,94,27.2,94h45.6C82.3,94,90,86.3,90,76.8V61.2v-36 C90,15.7,82.3,8,72.8,8L27.2,8z M27.2,12h45.6C80.1,12,86,17.9,86,25.2v36v1.6C86,70.1,80.1,76,72.8,76H27.2 C19.9,76,14,70.1,14,62.8v-1.6v-36C14,17.9,19.9,12,27.2,12z M48,26v14.5L35.6,33l-2.1,3.4L46.1,44l-12.6,7.6l2.1,3.4L48,47.5V62 h4V47.5L64.4,55l2.1-3.4L53.9,44l12.6-7.6L64.4,33L52,40.5V26H48z M14,73.8c3.2,3.8,7.9,6.2,13.2,6.2h45.6c5.3,0,10-2.4,13.2-6.2 v3C86,84.1,80.1,90,72.8,90H27.2C19.9,90,14,84.1,14,76.8L14,73.8z"/>', Ut[Ie] = '<path fill="currentColor" stroke="currentColor" d="M50,4c-14.6,0-27.6,6.8-36,17.4V8c0-0.5-0.2-1.1-0.6-1.4C13,6.2,12.5,6,12,6c-1.1,0-2,0.9-2,2v20h20c0.7,0,1.4-0.4,1.8-1 s0.4-1.4,0-2c-0.4-0.6-1-1-1.8-1H17c7.7-9.7,19.6-16,33-16c23.2,0,42,18.8,42,42S73.2,92,50,92S8,73.2,8,50c0-0.7-0.4-1.4-1-1.8 s-1.4-0.4-2,0c-0.6,0.4-1,1-1,1.8c0,25.4,20.6,46,46,46s46-20.6,46-46S75.4,4,50,4L50,4z M50,38c-6.6,0-12,5.4-12,12s5.4,12,12,12 s12-5.4,12-12S56.6,38,50,38z M50,42c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S45.6,42,50,42z"/>', Ut[Re] = '<path fill="currentColor" stroke="currentColor" d="M50,2c-0.8,0-1.6,0.5-1.9,1.3L35.8,35.1L1.9,36.8c-0.8,0-1.5,0.6-1.8,1.4c-0.3,0.8,0,1.6,0.6,2.2l26.4,21.6l-8.7,32.8 c-0.2,0.8,0.1,1.6,0.8,2.1s1.6,0.5,2.3,0.1L50,78.6l28.5,18.3c0.7,0.4,1.6,0.4,2.3-0.1s1-1.3,0.8-2.1l-8.7-32.8l26.4-21.6 c0.6-0.5,0.9-1.4,0.6-2.2c-0.3-0.8-1-1.3-1.8-1.4l-33.9-1.7L51.9,3.3C51.6,2.5,50.8,2,50,2L50,2z M50,9.5l10.9,28.2 c0.3,0.7,1,1.2,1.8,1.3l30,1.5L69.3,59.7c-0.6,0.5-0.9,1.3-0.7,2.1l7.7,29L51.1,74.5c-0.7-0.4-1.5-0.4-2.2,0L23.6,90.7l7.7-29 c0.2-0.8-0.1-1.6-0.7-2.1L7.3,40.5l30-1.5c0.8,0,1.5-0.5,1.8-1.3L50,9.5z"/>', Ut[He] = '<path fill="currentColor" stroke="currentColor" d="M50.1,2c-0.8,0-1.6,0.6-1.8,1.2L36.6,33.7L7.5,4.6C7.1,4.2,6.6,4,6.1,4C5.2,4,4.5,4.5,4.2,5.2C3.9,6,4.1,6.8,4.7,7.4 l88,88c0.5,0.5,1.2,0.7,1.9,0.6s1.2-0.7,1.4-1.4c0.2-0.7,0-1.4-0.6-1.9L76.2,73.3l-3.1-11.4l26.4-21.4c0.6-0.4,0.8-1.4,0.6-2.2 c-0.2-0.8-1-1.4-1.8-1.4l-34-1.8L51.9,3.2C51.7,2.6,50.9,2,50.1,2L50.1,2z M50.1,9.6l10.8,28.2c0.2,0.8,1,1.2,1.8,1.2l30.2,1.6 l-23.4,19c-0.6,0.4-0.8,1.4-0.6,2l1.6,6L39.7,36.8L50.1,9.6z M27.1,35.6L1.9,36.8c-0.8,0-1.6,0.6-1.8,1.4c-0.2,0.8,0,1.6,0.6,2.2 l26.4,21.4l-8.6,33c-0.2,0.8,0,1.6,0.8,2.2c0.4,0.2,0.8,0.4,1.2,0.4s0.8-0.2,1-0.4l28.6-18.6l28.6,18.4c0.6,0.4,1.6,0.4,2.2,0 s1-1.4,0.8-2.2l-1.8-6.4l-5.6-5.6l2.2,8.2L51.1,74.4c-0.2-0.2-0.6-0.4-1-0.4s-0.8,0.2-1,0.4L23.7,90.8l7.8-29.2 c0.2-0.8,0-1.6-0.6-2l-23.6-19l23.6-1.2L27.1,35.6z"/>', Ut[Ne] = '<path fill="currentColor" stroke="currentColor" d="M27,4c-4.5,0-8.6,2.4-10.6,6.5c0,0,0,0-0.1,0.1L9.8,23.1c0,0.1,0,0.2-0.1,0.3c0,0,0,0-0.1,0.1c0,0,0,0,0,0.1 C8.6,25.4,8,27.6,8,30v52c0,7.7,6.3,14,14,14h56c7.7,0,14-6.3,14-14V30c0-2.4-0.6-4.5-1.6-6.5c0-0.2-0.1-0.4-0.2-0.6l-6.6-12.6 c0,0,0,0,0-0.1h-0.1C81.5,6.4,77.5,4,73,4L27,4z M27,8h46c3.1,0,5.8,1.6,7,4.1l2.4,4.6C81,16.3,79.6,16,78,16H22 c-1.5,0-2.9,0.2-4.3,0.7l2.3-4.4c0,0,0,0,0-0.1C21.3,9.6,23.9,8,27,8z M51.2,9.9c-1.5,0-2.9,0.1-4,0.4c-1.8,0.6-2,1.2-2,1.6 c0,0.4,0.2,1.2,2,1.6c1.2,0.2,2.6,0.4,4,0.4c1.6,0,3-0.2,4-0.4c1.8-0.6,2-1.2,2-1.6c0-0.4-0.2-1.2-2-1.6 C54.1,10.1,52.6,9.9,51.2,9.9z M22,20h56c5.5,0,10,4.5,10,10v52c0,5.5-4.5,10-10,10H22c-5.5,0-10-4.5-10-10V30 C12,24.5,16.5,20,22,20z M68,32c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S71.3,32,68,32z M50,50c-3.3,0-6,2.7-6,6s2.7,6,6,6 s6-2.7,6-6S53.3,50,50,50z M32,68c-3.3,0-6,2.7-6,6c0,3.3,2.7,6,6,6s6-2.7,6-6C38,70.7,35.3,68,32,68z"/>', Ut[qe] = '<path fill="currentColor" stroke="currentColor" d="M72.1,0c-1.9,0-3.8,1.1-5.3,3L50.3,26.3c-2.4-0.6-4.8-0.8-7.3-0.8c-8.4,0-16.4,3.3-22.3,9.2c-0.4,0.4-0.6,0.8-0.6,1.4 c0,0.5,0.2,1.1,0.6,1.4l41.8,41.8c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6c7.9-7.9,11-19.2,8.3-29.9L97,33.4c1.8-1.3,2.9-3.1,3-4.9 c0.1-1.3-0.4-2.6-1.2-3.4L75.3,1.3C74.5,0.4,73.3,0,72.1,0L72.1,0z M33.1,55.5L0.4,96.8c-0.6,0.8-0.6,2,0.1,2.7 C1,99.8,1.5,100,2,100c0.4,0,0.9-0.1,1.3-0.4l41.2-32.6L33.1,55.5z"/>', Ut[Be] = '<path fill="currentColor" stroke="currentColor" d="M96.3,0c1,0.2,1.6,1.1,1.6,2.1V98c0,1.1-0.9,2.1-2.1,2.1H35.9c-1.1,0-2.1-0.9-2.1-2.1V78h4.1v17.9h55.9V4.1H38V22h-4.1V2 c0-1.1,1-2,2.1-2h59.9C96.1,0,96.2,0,96.3,0L96.3,0z M50.4,30.2c0.5,0.1,0.9,0.3,1.2,0.6l17.8,17.8l1.4,1.4l-1.4,1.4L51.6,69.1 c-0.5,0.6-1.3,0.9-2,0.7c-0.7-0.2-1.3-0.8-1.5-1.5s0.1-1.5,0.7-2L63.1,52h-59c-0.7,0-1.4-0.4-1.8-1s-0.4-1.4,0-2s1-1,1.8-1h59 L48.8,33.6c-0.6-0.6-0.8-1.5-0.4-2.3C48.7,30.6,49.5,30.1,50.4,30.2L50.4,30.2z"/>', Ut[je] = '<path fill="currentColor" stroke="currentColor" d="M50,4C24.6,4,4,24.6,4,50s20.6,46,46,46s46-20.6,46-46S75.4,4,50,4L50,4z M50,8c23.2,0,42,18.8,42,42S73.2,92,50,92 S8,73.2,8,50S26.8,8,50,8z M50.6,25c-7.5,0-12.4,4.5-13.5,11.4c-0.1,0.4,0.1,0.7,0.6,0.8l4.5,0.8c0.4,0.1,0.7-0.1,0.8-0.6 c0.9-4.4,3.4-6.8,7.5-6.8c4.1,0,7,2.6,7,6.7c0,2.4-0.9,4.1-3.4,7.5l-4.8,6.6c-1.5,2.1-2.1,3.6-2.1,6.5v2.9c0,0.4,0.3,0.7,0.7,0.7 h4.7c0.4,0,0.7-0.3,0.7-0.7v-2.3c0-2.4,0.4-3.4,1.9-5.4l4.8-6.6c2.4-3.4,3.7-5.9,3.7-9.3C63.6,30.1,58.3,25,50.6,25L50.6,25z M47.4,67c-0.4,0-0.7,0.3-0.7,0.7v6.2c0,0.4,0.3,0.7,0.7,0.7h5.5c0.4,0,0.7-0.3,0.7-0.7v-6.2c0-0.4-0.3-0.7-0.7-0.7H47.4z"/>', Ut[ve] = '<path fill="currentColor" stroke="currentColor" d="M50,0C37.8,0,28,9.6,28,21.4V22h15c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2H28v4h15c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2H28v4h15 c1.1,0,2,0.9,2,2s-0.9,2-2,2H28v4.6C28,58.4,37.8,68,50,68s22-9.6,22-21.4V42H57c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2h15v-4H57 c-1.1,0-2-0.9-2-2s0.9-2,2-2h15v-4H57c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2h15v-0.6C72,9.6,62.2,0,50,0L50,0z M19.6,34.3 c-0.8,0.2-1.4,0.9-1.4,1.7v10c0,15.4,11.1,28.4,25.8,31.2V88h12V77.2C70.6,74.4,81.8,61.4,81.8,46V36c0-1-0.8-1.8-1.8-1.8 c-1,0-1.7,0.8-1.7,1.8v10c0,15.6-12.6,28.2-28.3,28.2S21.8,61.6,21.8,46V36c0-0.5-0.2-1-0.6-1.3c-0.4-0.3-0.9-0.5-1.4-0.4 C19.8,34.3,19.7,34.3,19.6,34.3L19.6,34.3z M31,92c-3.8,0-6.9,3.1-6.9,6.9L24,100l51.8-0.1l0.1-0.9c0-3.8-3.1-6.9-6.9-6.9H31z"/>', Ut[Ve] = '<path fill="currentColor" stroke="currentColor" d="M10,10c-4.4,0-8,3.6-8,8v64c0,4.4,3.6,8,8,8h2v2h10v-2h56v2h10v-2h2c4.4,0,8-3.6,8-8V18c0-4.4-3.6-8-8-8L10,10z M10,14h80 c2.2,0,4,1.8,4,4v64c0,2.2-1.8,4-4,4H10c-2.2,0-4-1.8-4-4V18C6,15.8,7.8,14,10,14z M13.6,20c-1,0.2-1.6,1-1.6,2v23.4 c-0.1,0.4-0.1,0.8,0,1.2v7.1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.3,0,0.4c0,0.1,0,0.1,0,0.2V78c0,1.1,0.9,2,2,2h72c1.1,0,2-0.9,2-2V22 c0-1.1-0.9-2-2-2H14c-0.1,0-0.1,0-0.2,0S13.7,20,13.6,20z M16,24h68v52H16V54.9l3.4-3.4c0.4-0.4,0.6-0.9,0.6-1.4s-0.2-1.1-0.6-1.4 L16,45.1L16,24z M49.8,27.9c-0.1,0-0.2,0-0.3,0.1c-0.1,0-0.1,0-0.2,0.1c-5.5,0.2-10.5,2.4-14.3,5.9c-0.5,0.2-0.9,0.6-1.1,1.1 c-3.4,3.7-5.6,8.6-5.9,13.9c-0.4,0.6-0.4,1.4,0,2c0.2,5.3,2.3,10.1,5.7,13.8c0.2,0.7,0.7,1.3,1.4,1.4c3.8,3.4,8.8,5.5,14.3,5.7 c0.1,0,0.1,0,0.2,0.1c0.1,0,0.3,0,0.4,0c0.1,0,0.3,0,0.4,0c0.1,0,0.1,0,0.2-0.1c5.4-0.2,10.4-2.3,14.2-5.7 c0.7-0.2,1.3-0.8,1.4-1.5c3.4-3.8,5.5-8.7,5.7-14.2c0,0,0-0.1,0.1-0.1c0,0,0,0,0-0.1c0-0.1,0-0.3,0-0.4c0-0.1,0-0.2,0-0.3 c0-0.1,0-0.3-0.1-0.4c-0.2-5.6-2.4-10.7-6-14.5c0,0,0,0-0.1-0.1c0,0,0-0.1-0.1-0.1c-0.2-0.2-0.4-0.4-0.6-0.6 c-3.8-3.6-8.9-5.9-14.4-6.1C50.5,27.9,50.1,27.9,49.8,27.9z M48,32.1c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2c3.5,0.4,6.6,1.8,9.3,3.9 c-0.6,0.5-0.9,1.3-0.7,2c0.2,0.7,0.8,1.3,1.5,1.5c0.8,0.2,1.5-0.1,2-0.7c2.1,2.6,3.5,5.8,3.9,9.3c0,0-0.1,0-0.1,0 c-0.1,0-0.1,0-0.2,0c-1.1,0.1-1.8,1.1-1.7,2.1s1,1.9,2.1,1.9c-0.4,3.5-1.8,6.6-3.9,9.3c-0.4-0.4-1-0.6-1.6-0.6c-0.1,0-0.1,0-0.2,0 c-0.7,0.1-1.3,0.7-1.5,1.4c-0.2,0.7,0,1.5,0.5,2c-2.6,2.1-5.8,3.5-9.3,3.9c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-1-0.6-1.5-0.5 c-0.1,0-0.2,0-0.3,0.1c-0.9,0.2-1.6,1-1.6,1.9c-3.5-0.4-6.6-1.8-9.3-3.9c0.6-0.6,0.7-1.5,0.4-2.2c-0.3-0.7-1.1-1.2-1.9-1.2 c-0.1,0-0.1,0-0.2,0c-0.4,0.1-0.8,0.3-1.1,0.6c-2.1-2.6-3.5-5.8-3.9-9.3c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2c0.4-3.5,1.8-6.6,3.9-9.3 c0.5,0.6,1.3,0.9,2,0.7c0.7-0.2,1.3-0.8,1.5-1.5c0.2-0.8-0.1-1.5-0.7-2C41.4,33.9,44.5,32.4,48,32.1L48,32.1z M50,40 c-5.5,0-10,4.5-10,10s4.5,10,10,10s10-4.5,10-10S55.5,40,50,40z M50,44c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6S46.7,44,50,44z"/>', Ut[Ge] = '<path fill="currentColor" stroke="currentColor" d="M58,10c-0.1,0-0.2,0-0.3,0H10c-4.4,0-8,3.6-8,8v64c0,4.4,3.6,8,8,8h2v2h10v-2h35.7c0.2,0,0.4,0,0.7,0H78v2h10v-2h2 c4.4,0,8-3.6,8-8V18c0-4.4-3.6-8-8-8H58.3C58.2,10,58.1,10,58,10z M10,14h46v6H14c-1.1,0-2,0.9-2,2v56c0,1.1,0.9,2,2,2h42v6H22H12 h-2c-2.2,0-4-1.8-4-4V18C6,15.8,7.8,14,10,14z M60,14h6v72h-6V58v-8v-8V14z M60,42c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2 c0-1.1-0.9-2-2-2C60.9,40,60,40.9,60,42z M60,50c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2C60.9,48,60,48.9,60,50z M60,58 c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2C60.9,56,60,56.9,60,58z M75.7,14H90c2.2,0,4,1.8,4,4v64c0,2.2-1.8,4-4,4h-2H78 h-2.3L87,79.8c0.6-0.4,1-1,1-1.8V62.9c0.7-1.6,1.4-3.1,1.5-3.4c0.4-0.3,0.8-0.7,1-1.1c0.4-0.7,0.6-1.4,0.9-2.3 c0.4-1.7,0.6-3.8,0.6-6.1c0-2.3-0.2-4.5-0.6-6.1c-0.2-0.8-0.5-1.6-0.9-2.3c-0.2-0.4-0.5-0.8-0.9-1.1c-0.3-0.6-0.8-1.9-1.6-3.7V22 c0-0.7-0.4-1.4-1-1.8L75.7,14z M70,15.4l14,7.8v5.9c-0.1-0.2-0.2-0.3-0.4-0.5C83.3,28.4,82.9,28,82,28c-1,0-1.7,0.5-2.2,1 c-0.5,0.5-0.8,1.1-1.1,1.7c-0.6,1.3-1,2.8-1.4,4.8C76.4,39.3,76,44.4,76,50s0.4,10.7,1.2,14.5c0.4,1.9,0.8,3.5,1.4,4.8 c0.3,0.6,0.6,1.2,1.1,1.7c0.5,0.5,1.3,1,2.2,1c1.1,0,1.4-0.5,1.6-0.7c0.2-0.2,0.3-0.3,0.4-0.4v6l-14,7.8V15.4z M16,24h40v52H16 L16,24z M82,33.4c0.5,1,1.1,2.2,1.7,3.4c0.9,1.9,1.5,3.5,2,4.6c0,0.1-0.1,0.1-0.1,0.2c-0.4,0.7-0.6,1.4-0.9,2.3 C84.2,45.5,84,47.7,84,50s0.2,4.5,0.6,6.1c0.2,0.8,0.5,1.6,0.9,2.3c0,0,0.1,0.1,0.1,0.1c-0.4,0.9-1,2.3-2.1,4.6 c-0.6,1.2-1.1,2.3-1.6,3.3c-0.3-0.8-0.5-1.5-0.8-2.7C80.4,60.3,80,55.4,80,50s0.4-10.3,1.1-13.8C81.4,35,81.7,34.2,82,33.4 L82,33.4z"/>', Ut);

    function We(t, e, n) {
        var r = t.firstChild;
        r && r instanceof SVGSVGElement && r.classList.contains(e) || (r && t.removeChild(r), r = function(t, e) {
            if (void 0 === e && (e = 16), !Ue[t]) return null;
            var n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            return n.setAttribute("viewBox", "0 0 100 100"), n.setAttribute("width", e.toString()), n.setAttribute("height", e.toString()), n.innerHTML = Ue[t], n.classList.add(t), n
        }(e, n), t.appendChild(r))
    }
    for (var Ke, $e, Ze, Ye = -1 !== (Ke = navigator.appVersion).indexOf("Win") ? "Windows" : -1 !== Ke.indexOf("Mac") ? "MacOS" : -1 !== Ke.indexOf("X11") || -1 !== Ke.indexOf("Linux") ? "Linux" : "Unknown OS", Je = (navigator.userAgent.toLowerCase().indexOf(" electron/"), "MacOS" == Ye), Xe = {
            3: "Cancel",
            6: "Help",
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            28: "Convert",
            29: "NonConvert",
            30: "Accept",
            31: "ModeChange",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            41: "Select",
            42: "Print",
            43: "Execute",
            44: "PrintScreen",
            45: "Insert",
            46: "Delete",
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            57: "9",
            91: "OS",
            93: "ContextMenu",
            106: "*",
            107: "+",
            109: "-",
            110: ".",
            111: "/",
            144: "NumLock",
            145: "ScrollLock",
            181: "VolumeMute",
            182: "VolumeDown",
            183: "VolumeUp",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'",
            224: "Meta",
            225: "AltGraph",
            246: "Attn",
            247: "CrSel",
            248: "ExSel",
            249: "EraseEof",
            250: "Play",
            251: "ZoomOut"
        }, Qe = 1; Qe < 25; Qe++) Xe[111 + Qe] = "F" + Qe;
    for (Qe = 65; Qe < 91; Qe++) {
        var tn = String.fromCharCode(Qe);
        Xe[Qe] = tn.toUpperCase()
    }
    for (Qe = 96; Qe < 106; Qe++) Xe[Qe] = String.fromCharCode(Qe - 48);

    function en(t) {
        var e = t.key;
        if (!e) {
            var n = t.which || t.keyCode;
            e = Xe[n]
        }
        return e
    }
    var nn = "Mod",
        rn = "Ctrl",
        on = "Shift",
        an = "Alt",
        sn = "Meta",
        cn = (($e = {})[nn] = "⌘", $e[sn] = "⌘", $e[rn] = "⌃", $e[an] = "⌥", $e[on] = "⇧", $e),
        ln = ((Ze = {})[nn] = "Ctrl", Ze[sn] = "Win", Ze[rn] = "Ctrl", Ze[an] = "Alt", Ze[on] = "Shift", Ze),
        un = Je ? cn : ln,
        hn = [nn, sn, rn, an, on],
        pn = (fn.prototype.registerKey = function(t, e, n) {
            var r = {
                scope: this,
                modifiers: t ? dn.compileModifiers(t) : null,
                key: e,
                func: n
            };
            return this.keys.push(r), r
        }, fn.prototype.unregister = function(t) {
            this.keys.remove(t)
        }, fn.prototype.handleKey = function(t, e, n) {
            for (var r = 0, i = this.keys; r < i.length; r++) {
                var o = i[r];
                if (dn.isMatch(o.modifiers, o.key, e, n)) {
                    var a = o.func(t, e, n);
                    if (void 0 !== a) return a
                }
            }
            if (this.parent) return this.parent.handleKey(t, e, n)
        }, fn);

    function fn(t) {
        this.keys = [], this.parent = t
    }
    var dn = (vn.prototype.getRootScope = function() {
        return this.rootScope
    }, vn.prototype.pushScope = function(t) {
        this.scope !== t && (this.prevScopes.push(this.scope), this.scope = t)
    }, vn.prototype.popScope = function(t) {
        this.scope === t && t !== this.rootScope && (this.scope = this.prevScopes.pop())
    }, vn.prototype.onKeyEvent = function(t) {
        this.updateModifiers(t);
        var e = en(t);
        if (!vn.isModifierKey(e)) {
            var n = this.scope;
            if (n) {
                var r = this.modifiers;
                return !1 === n.handleKey(t, r, e) ? (t.preventDefault(), !1) : void 0
            }
        }
    }, vn.prototype.updateModifiers = function(t) {
        this.modifiers = vn.getModifiers(t)
    }, vn.getModifiers = function(t) {
        var e = [];
        return t.ctrlKey && e.push(rn), t.metaKey && e.push(sn), t.altKey && e.push(an), t.shiftKey && e.push(on), vn.compileModifiers(e)
    }, vn.compileModifiers = function(t) {
        return t.map(function(t) {
            return t === nn ? "MacOS" == Ye ? sn : rn : t
        }).sort().join(",")
    }, vn.decompileModifiers = function(t) {
        return t.split(",").map(function(t) {
            return "MacOS" == Ye && t === sn || "MacOS" != Ye && t === rn ? nn : t
        }).filter(function(t) {
            return t
        })
    }, vn.isModifierKey = function(t) {
        return "Control" === t || "Alt" === t || "Shift" === t || "OS" === t || "Meta" === t
    }, vn.prototype.matchModifiers = function(t) {
        return this.modifiers === t
    }, vn.isModifier = function(t, e) {
        return e === rn ? t.ctrlKey : e === sn ? t.metaKey : e === an ? t.altKey : e === on ? t.shiftKey : e === nn && ("MacOS" == Ye ? t.metaKey : t.ctrlKey)
    }, vn.isMatch = function(t, e, n, r) {
        return !(e && e.toLowerCase() !== r.toLowerCase() || null !== t && t !== n)
    }, vn);

    function vn() {
        this.rootScope = new pn, this.scope = this.rootScope, this.prevScopes = [], window.addEventListener("keydown", this.onKeyEvent.bind(this))
    }
    var gn = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        mn = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        };

    function yn(t, e) {
        return {
            modifiers: t,
            key: e
        }
    }

    function bn(e) {
        var t, n, r = [];
        return hn.forEach(function(t) {
            e.modifiers.contains(t) && r.push(un[t])
        }), r.push((t = e.key, "Arrow Left" === (n = (n = t.replace(/([A-Z])/g, " $1").trim()).charAt(0).toUpperCase() + n.slice(1)) ? n = "←" : "Arrow Right" === n && (n = "→"), n)), r.join(Je ? " " : " + ")
    }
    var wn = (kn.prototype.save = function() {
        return gn(this, void 0, void 0, function() {
            var e;
            return mn(this, function(t) {
                return e = this.customKeys, this.app.vault.setConfig(ot, e), [2]
            })
        })
    }, kn.prototype.load = function() {
        var t = this.app.vault.getConfig(ot);
        t && "object" == typeof t && (this.customKeys = t || {}, this.baked = !1)
    }, kn.prototype.getDefaultHotkeys = function(t) {
        return this.defaultKeys[t]
    }, kn.prototype.addDefaultHotkeys = function(t, e) {
        this.defaultKeys[t] = e, this.baked = !1
    }, kn.prototype.removeDefaultHotkeys = function(t) {
        delete this.defaultKeys[t], this.baked = !1
    }, kn.prototype.getHotkeys = function(t) {
        return this.customKeys[t]
    }, kn.prototype.setHotkeys = function(t, e) {
        this.customKeys[t] = e, this.baked = !1
    }, kn.prototype.removeHotkeys = function(t) {
        delete this.customKeys[t], this.baked = !1
    }, kn.prototype.removeAllHotkeys = function(t) {
        this.removeDefaultHotkeys(t), this.removeHotkeys(t)
    }, kn.prototype.printHotkeyForCommand = function(t) {
        var e = this.getHotkeys(t),
            n = this.getDefaultHotkeys(t);
        return e && 0 < e.length ? bn(e[0]) : n && 0 < n.length ? bn(n[0]) : ""
    }, kn.prototype.bake = function() {
        if (!this.baked) {
            this.baked = !0;
            var t = this.defaultKeys,
                e = this.customKeys,
                o = [],
                a = [],
                n = function(t, e) {
                    for (var n = 0, r = e; n < r.length; n++) {
                        var i = r[n];
                        o.push({
                            modifiers: dn.compileModifiers(i.modifiers),
                            key: i.key
                        }), a.push(t)
                    }
                };
            for (var r in t) t.hasOwnProperty(r) && !e.hasOwnProperty(r) && n(r, t[r]);
            for (var r in e) e.hasOwnProperty(r) && n(r, e[r]);
            this.bakedHotkeys = o, this.bakedIds = a
        }
    }, kn.prototype.onTrigger = function(t, e, n) {
        this.bake();
        for (var r = this.bakedHotkeys, i = this.bakedIds, o = 0; o < r.length; o++) {
            var a = r[o];
            if (dn.isMatch(a.modifiers, a.key, e, n)) {
                var s = i[o];
                return this.app.commands.executeCommandById(s), !1
            }
        }
    }, kn);

    function kn(t) {
        this.defaultKeys = {}, this.customKeys = {}, this.baked = !1, this.bakedHotkeys = [], this.bakedIds = [], this.app = t, this.app.scope.registerKey(null, null, this.onTrigger.bind(this))
    }
    var En = n(0),
        Cn = {
            height: "",
            paddingTop: "",
            paddingBottom: "",
            marginTop: "",
            marginBottom: ""
        },
        xn = new WeakMap,
        _n = 100,
        Sn = 50,
        Ln = [],
        Mn = [],
        An = function() {
            this.from = {}, this.to = {}, this.end = {}
        };

    function Tn(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t.style[n] = e[n])
    }

    function On(t) {
        var e = window.getComputedStyle(t),
            n = {};
        for (var r in Cn)
            if (Cn.hasOwnProperty(r)) {
                var i = e[r];
                if (i && i.endsWith("px")) {
                    var o = parseFloat(i.substr(0, i.length - 2));
                    0 !== o && (n[r] = o)
                }
            } return n
    }

    function Dn(t) {
        var e = xn.get(t);
        if (xn.delete(t), e && (Tn(t, e.props.end), clearTimeout(e.timer), t.removeEventListener("transitionend", e.fn), Ln.remove(e), e.complete && e.complete(), 0 === Ln.length)) {
            var n = Mn;
            Mn = [], n.forEach(function(t) {
                return t()
            })
        }
    }

    function Pn(t, e, n) {
        e.from.overflow = "hidden", e.end.overflow = "", e.from.transition = "all " + _n + "ms cubic-bezier(.02, .01, .47, 1)", e.end.transition = "", Tn(t, e.from);
        var r = {
            props: e,
            fn: function() {
                return Dn(t)
            },
            timer: 0,
            complete: n
        };
        xn.set(t, r), Ln.push(r), setTimeout(function() {
            Tn(t, e.to), t.addEventListener("transitionend", r.fn), r.timer = window.setTimeout(r.fn, _n + Sn)
        }, 0)
    }

    function Fn(t, e) {
        Dn(t);
        var n = On(t),
            r = new An;
        for (var i in n) n.hasOwnProperty(i) && (r.from[i] = "0px", r.to[i] = n[i] + "px", r.end[i] = "");
        Pn(t, r, function() {
            e && e()
        })
    }

    function zn(t, e) {
        Dn(t);
        var n = On(t),
            r = new An;
        for (var i in n) n.hasOwnProperty(i) && (r.from[i] = n[i] + "px", r.to[i] = "0px", r.end[i] = "");
        Pn(t, r, function() {
            e && e()
        })
    }
    var In = (Rn.prototype.load = function() {}, Rn.prototype.unload = function() {
        for (var t = 0, e = this.eventRefs; t < e.length; t++) {
            var n = e[t];
            n.e.offref(n)
        }
        this.eventRefs = [];
        for (var r = 0, i = this.scopeRefs; r < i.length; r++) {
            var o = i[r];
            o.scope.unregister(o)
        }
        this.scopeRefs = [];
        for (var a = 0, s = this.domEvents; a < s.length; a++) {
            var c = s[a];
            c.el.removeEventListener(c.type, c.callback)
        }
        this.domEvents = []
    }, Rn.prototype.registerEvent = function(t) {
        this.eventRefs.push(t)
    }, Rn.prototype.registerDomEvent = function(t, e, n) {
        t.addEventListener(e, n), this.domEvents.push({
            el: t,
            type: e,
            callback: n
        })
    }, Rn.prototype.registerScopeEvent = function(t) {
        this.scopeRefs.push(t)
    }, Rn);

    function Rn() {
        this.eventRefs = [], this.scopeRefs = [], this.domEvents = []
    }
    var Hn, Nn, qn = (Hn = function(t, e) {
            return (Hn = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            Hn(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        Bn = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        jn = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        Vn = (qn(Gn, Nn = In), Gn.prototype.open = function(e) {
            return Bn(this, void 0, Promise, function() {
                return jn(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e.appendChild(this.containerEl), this.load(), [4, this.onOpen()];
                        case 1:
                            return t.sent(), [2]
                    }
                })
            })
        }, Gn.prototype.close = function() {
            return Bn(this, void 0, Promise, function() {
                return jn(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return this.containerEl.detach(), this.unload(), [4, this.onClose()];
                        case 1:
                            return t.sent(), [2]
                    }
                })
            })
        }, Gn.prototype.onOpen = function() {
            return Bn(this, void 0, Promise, function() {
                return jn(this, function(t) {
                    return [2]
                })
            })
        }, Gn.prototype.onClose = function() {
            return Bn(this, void 0, Promise, function() {
                return jn(this, function(t) {
                    return [2]
                })
            })
        }, Gn.prototype.getState = function() {
            return {}
        }, Gn.prototype.setState = function(t, e) {
            return Bn(this, void 0, Promise, function() {
                return jn(this, function(t) {
                    return [2]
                })
            })
        }, Gn.prototype.getEphemeralState = function() {
            return {}
        }, Gn.prototype.setEphemeralState = function(t) {}, Gn.prototype.getIcon = function() {
            return this.icon ? this.icon : Xt
        }, Gn.prototype.onHeaderMenu = function(t) {}, Gn);

    function Gn(t) {
        var e = Nn.call(this) || this;
        return e.icon = Xt, e.navigation = !0, e.app = t.app, e.leaf = t, e.containerEl = createEl("div", {
            cls: "workspace-leaf-content"
        }), e.containerEl.setAttribute("data-type", e.getViewType()), e
    }
    var Un, Wn, Kn = (Un = function(t, e) {
            return (Un = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            Un(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        $n = (Kn(Zn, Wn = ut), Zn.prototype.serialize = function() {
            var t = {
                id: this.id,
                type: this.type
            };
            return this.dimension && (t.dimension = this.dimension), t
        }, Zn.prototype.onResizeStart = function(t) {
            if (0 === t.button) {
                var e = this.parentSplit;
                e instanceof tr && e.onChildResizeStart(this, t)
            }
        }, Zn.prototype.setParent = function(t) {
            this.parentSplit = t
        }, Zn.prototype.getRoot = function() {
            for (var t = this; t.parentSplit;) t = t.parentSplit;
            return t
        }, Zn.prototype.setDimension = function(t) {
            if (null !== t && (t <= 0 || 100 <= t) && (t = null), this.dimension !== t) {
                this.dimension = t;
                var e = this.containerEl,
                    n = this.parentSplit;
                if (e.setAttr("style", ""), t && n instanceof tr) {
                    e.style.flex = "initial";
                    var r = n.direction;
                    "vertical" === r ? e.style.width = t.toFixed(4) + "%" : "horizontal" === r && (e.style.height = t.toFixed(4) + "%")
                }
            }
        }, Zn.prototype.detach = function() {
            this.parentSplit && this.parentSplit.removeChild(this)
        }, Zn.prototype.getIcon = function() {
            return Xt
        }, Zn.prototype.updateHeader = function() {
            We(this.tabHeaderInnerIconEl, this.getIcon(), 17)
        }, Zn);

    function Zn(t, e) {
        var n = Wn.call(this) || this;
        n.parentSplit = null, n.containerEl = null, n.tabHeaderEl = null, n.tabHeaderInnerIconEl = null, n.dimension = null, n.app = t.app, n.workspace = t, n.id = e || Object(A.m)(16);
        var r = n.containerEl = createEl("div"),
            i = n.resizeHandleEl = r.createEl("hr", {
                cls: "workspace-leaf-resize-handle"
            });
        return n.tabHeaderEl = createEl("div", {
            cls: "workspace-tab-header"
        }), n.tabHeaderEl.createEl("div", {
            cls: "workspace-tab-header-inner"
        }, function(t) {
            n.tabHeaderInnerIconEl = t.createEl("div", {
                cls: "workspace-tab-header-inner-icon"
            })
        }), i.addEventListener("mousedown", n.onResizeStart.bind(n)), n.updateHeader(), n
    }
    var Yn, Jn = (Kn(Xn, Yn = $n), Xn.prototype.serialize = function() {
        var t = Yn.prototype.serialize.call(this);
        return t.children = this.children.map(function(t) {
            return t.serialize()
        }), t
    }, Xn.prototype.replaceChild = function(t, e, n) {
        var r = this.workspace,
            i = this.containerEl,
            o = this.children;
        t < 0 && (t = 0), t >= o.length && (t = o.length);
        var a = o[t],
            s = a.containerEl.nextSibling;
        a.containerEl.detach(), a.setParent(null);
        var c = (o[t] = e).containerEl;
        i.insertBefore(c, s), e.setParent(this), n || (this.recomputeChildrenDimensions(), r.onLayoutChange())
    }, Xn.prototype.insertChild = function(t, e, n) {
        var r = this.workspace,
            i = this.containerEl,
            o = this.children;
        (t < 0 || t >= o.length) && (t = o.length);
        var a = o[t],
            s = a ? a.containerEl : null;
        o.splice(t, 0, e);
        var c = e.containerEl;
        i.insertBefore(c, s), e.setParent(this), n || (this.recomputeChildrenDimensions(), r.onLayoutChange())
    }, Xn.prototype.removeChild = function(t, e) {
        var n = this.workspace,
            r = this.parentSplit,
            i = this.children;
        if (i.remove(t), t.containerEl.detach(), t.setParent(null), r)
            if (1 !== i.length || this.allowSingleChild) {
                if (0 === i.length) return void r.removeChild(this, e)
            } else {
                var o = i[0];
                i.remove(o), o.containerEl.detach(), o.setParent(null);
                var a = r.children.indexOf(this);
                r.replaceChild(a, o, !0), o.setDimension(this.dimension)
            } e || (this.recomputeChildrenDimensions(), n.onLayoutChange())
    }, Xn.prototype.recomputeChildrenDimensions = function() {}, Xn);

    function Xn() {
        var t = null !== Yn && Yn.apply(this, arguments) || this;
        return t.allowSingleChild = !1, t.children = [], t
    }
    var Qn, tr = (Kn(er, Qn = Jn), er.prototype.serialize = function() {
        var t = Qn.prototype.serialize.call(this);
        return t.direction = this.direction, t
    }, er.prototype.setDirection = function(t) {
        this.containerEl.removeClass("mod-" + this.direction), this.direction = t, this.containerEl.addClass("mod-" + t)
    }, er.prototype.recomputeChildrenDimensions = function() {
        for (var t = this.children, e = 0, n = 0, r = t; n < r.length; n++) {
            if (null == (a = r[n]).dimension) {
                e = null;
                break
            }
            e += a.dimension
        }
        for (var i = 0, o = t; i < o.length; i++) {
            var a = o[i];
            null == e || isNaN(e) ? a.setDimension(null) : a.setDimension(100 * a.dimension / e)
        }
        this.workspace.requestResize()
    }, er.prototype.onChildResizeStart = function(c, t) {
        var l = this;

        function e(t) {
            var e = t.pageX,
                n = t.pageY,
                r = 0;
            "vertical" === l.direction ? r = e - l.resizeStartPos.x : "horizontal" === l.direction && (r = n - l.resizeStartPos.y);
            var i = l.children.indexOf(c);
            if (l.isResizing || (l.originalSizes = l.children.map(function(t) {
                    return l.getElSize(t.containerEl)
                }), l.isResizing = !0), l.isResizing) {
                var o = l.children.slice(0, i + 1),
                    a = l.children.slice(i + 1);
                if (o.reverse(), 0 < r) {
                    var s = l.resizeItemsByDiff(a, r, 1);
                    Math.abs(r) > s && (r = s), l.resizeItemsByDiff(o, r, -1)
                } else s = l.resizeItemsByDiff(o, r, -1), Math.abs(r) > s && (r = -s), l.resizeItemsByDiff(a, r, 1);
                t.preventDefault()
            }
        }
        this.resizeStartPos = {
            x: t.pageX,
            y: t.pageY
        };
        var n = function() {
            try {
                l.finishResize()
            } catch (t) {
                console.error(t)
            }
            document.removeEventListener("mousemove", e), document.removeEventListener("mouseup", n)
        };
        document.addEventListener("mousemove", e), document.addEventListener("mouseup", n)
    }, er.prototype.resizeItemsByDiff = function(t, e, n) {
        for (var r = 0, i = 0, o = t; i < o.length; i++) {
            var a = o[i],
                s = this.children.indexOf(a),
                c = this.originalSizes[s],
                l = c - e * n,
                u = c - (l = Math.max(200, l));
            e -= u * n, r += Math.abs(u), this.setElSize(this.children[s].containerEl, l)
        }
        return r
    }, er.prototype.finishResize = function() {
        this.isResizing = !1, this.resizeStartPos = null;
        for (var t = this.getElSize(this.containerEl), e = this.containerEl.childNodes, n = 0, r = 0; r < e.length; r++) {
            var i = e.item(r);
            if (!i.hasClass("workspace-leaf-resize-handle") && !i.hasClass("workspace-sidedock-empty-state")) {
                var o = this.children[n];
                n++;
                var a = this.getElSize(i) / t * 100;
                this.unsetElSize(i), o.setDimension(a)
            }
        }
        this.workspace.saveLayout(), this.workspace.requestResize()
    }, er.prototype.getElSize = function(t) {
        return "vertical" === this.direction ? t.offsetWidth : "horizontal" === this.direction ? t.offsetHeight : void 0
    }, er.prototype.setElSize = function(t, e) {
        return t.style.flex = "0 0 auto", "vertical" === this.direction ? t.style.width = e + "px" : "horizontal" === this.direction ? t.style.height = e + "px" : void 0
    }, er.prototype.unsetElSize = function(t) {
        t.setAttribute("style", "")
    }, er);

    function er(t, e, n) {
        var r = Qn.call(this, t, n) || this;
        return r.type = "split", r.direction = null, r.resizeStartPos = null, r.originalSizes = null, r.isResizing = !1, r.workspace = t, r.containerEl.addClass("workspace-split"), r.setDirection(e), r
    }
    var nr, rr = (Kn(ir, nr = Jn), ir.prototype.serialize = function() {
        var t = nr.prototype.serialize.call(this);
        return 0 < this.currentTab && (t.currentTab = this.currentTab), t
    }, ir.prototype.selectTab = function(t) {
        this.currentTab = t, this.recomputeChildrenDimensions(), this.workspace.requestSaveLayout(), this.workspace.requestResize()
    }, ir.prototype.recomputeChildrenDimensions = function() {
        var t = this,
            e = t.resizeHandleEl,
            n = t.currentTab,
            r = t.tabsInnerEl,
            i = t.tabHeaderEl,
            o = t.containerEl,
            a = t.children;
        if (0 !== a.length) {
            n < 0 && (n = 0), n >= a.length && (n = a.length - 1), n !== this.currentTab && (this.currentTab = n, this.workspace.requestSaveLayout(), this.workspace.requestResize());
            for (var s = [], c = null, l = 0; l < a.length; l++) {
                var u = a[l],
                    h = u.tabHeaderEl;
                l === n ? (h.addClass("is-active"), c = u) : h.removeClass("is-active"), s.push(h)
            }
            c ? (o.setChildrenInPlace([e, i, c.containerEl]), r.setChildrenInPlace(s)) : o.empty(), this.tabHeaderEls = s, this.updateDecorativeCurves()
        } else o.empty()
    }, ir.prototype.updateDecorativeCurves = function() {
        var t = this.currentTab,
            e = this.children;
        this.tabHeaderEls.forEach(function(t) {
            return t.removeClass("is-before-active", "is-after-active")
        }), this.tabsBeforeEl.removeClass("is-before-active"), this.tabsAfterEl.removeClass("is-after-active"), -1 !== t && (0 < t ? this.tabHeaderEls[t - 1].addClass("is-before-active") : this.tabsBeforeEl.addClass("is-before-active"), t < e.length - 1 ? this.tabHeaderEls[t + 1].addClass("is-after-active") : this.tabsAfterEl.addClass("is-after-active"))
    }, ir);

    function ir(t, e) {
        var r = nr.call(this, t, e) || this;
        r.type = "tabs", r.allowSingleChild = !0, r.tabContainerEl = null, r.tabHeaderEls = [], r.currentTab = 0, r.tabHeaderEl = null, r.tabsBeforeEl = null, r.tabsInnerEl = null, r.tabsAfterEl = null, r.workspace = t, r.containerEl.addClass("workspace-tabs"), r.tabContainerEl = r.containerEl.createEl("div", {
            cls: "workspace-tab-container"
        });
        var n = r.tabHeaderEl = r.containerEl.createEl("div", {
            cls: "workspace-tab-header-container"
        });
        return r.tabsBeforeEl = n.createEl("div", {
            cls: "workspace-tab-container-before"
        }, function(t) {
            t.createEl("div", {
                cls: "workspace-tab-header-inner"
            })
        }), r.tabsInnerEl = n.createEl("div", {
            cls: "workspace-tab-container-inner"
        }), r.tabsAfterEl = n.createEl("div", {
            cls: "workspace-tab-container-after"
        }, function(t) {
            t.createEl("div", {
                cls: "workspace-tab-header-inner"
            })
        }), r.tabsInnerEl.on("click", ".workspace-tab-header", function(t, e) {
            var n = r.tabHeaderEls.indexOf(e); - 1 !== n && r.selectTab(n)
        }), r
    }
    var or, ar = (Kn(sr, or = tr), sr.prototype.serialize = function() {
        var t = or.prototype.serialize.call(this);
        return t.width = this.size, this.collapsed && (t.collapsed = !0), t
    }, sr.prototype.setSize = function(t) {
        this.size = t, this.containerEl.style.width = t + "px"
    }, sr.prototype.toggle = function() {
        this.collapsed ? this.expand() : this.collapse(), this.workspace.requestSaveLayout()
    }, sr.prototype.collapse = function() {
        var t = this;
        this.collapsed = !0, this.containerEl.style.width = "0", this.resizeHandleEl.style.visibility = "hidden", "left" === this.side ? this.workspace.leftRibbon.setCollapsedState(!0) : "right" === this.side && this.workspace.rightRibbon.setCollapsedState(!0), setTimeout(function() {
            return t.workspace.requestResize()
        }, 200)
    }, sr.prototype.expand = function() {
        var t = this;
        this.collapsed = !1, this.containerEl.style.width = this.size + "px", this.resizeHandleEl.style.visibility = "visible", "left" === this.side ? this.workspace.leftRibbon.setCollapsedState(!1) : "right" === this.side && this.workspace.rightRibbon.setCollapsedState(!1), setTimeout(function() {
            return t.workspace.requestResize()
        }, 200)
    }, sr.prototype.onSidedockResizeStart = function(t) {
        var i = this;
        if (0 === t.button) {
            this.app.disableCssTransition();
            var e = function(t) {
                    var e = t.pageX,
                        n = 200;
                    if ("left" === i.side) n = e - i.containerEl.getBoundingClientRect().x, n += i.resizeHandleEl.offsetWidth / 2;
                    else if ("right" === i.side) {
                        var r = i.containerEl.getBoundingClientRect();
                        n = r.x + r.width - e, n += i.resizeHandleEl.offsetWidth / 2
                    }
                    n = Math.max(n, 100), i.setSize(n), t.preventDefault()
                },
                n = function(t) {
                    0 === t.button && (document.removeEventListener("mousemove", e), document.removeEventListener("mouseup", n), i.app.enableCssTransition(), i.workspace.requestSaveLayout(), i.workspace.requestResize())
                };
            document.addEventListener("mousemove", e), document.addEventListener("mouseup", n)
        }
    }, sr.prototype.recomputeChildrenDimensions = function() {
        or.prototype.recomputeChildrenDimensions.call(this), 0 === this.children.length ? (this.collapse(), this.emptyStateEl.show(), "right" === this.side && (this.workspace.rightRibbon.hide(), this.containerEl.addClass("is-ribbon-hidden"))) : (this.emptyStateEl.hide(), "right" === this.side && (this.workspace.rightRibbon.show(), this.containerEl.removeClass("is-ribbon-hidden")))
    }, sr);

    function sr(t, e, n, r) {
        var i = or.call(this, t, e, r) || this;
        return i.size = 300, i.collapsed = !1, i.emptyStateEl = null, i.side = n, i.containerEl.addClass("mod-" + n + "-split"), i.resizeHandleEl.addEventListener("mousedown", i.onSidedockResizeStart.bind(i)), i.emptyStateEl = i.containerEl.createEl("div", {
            cls: "workspace-sidedock-empty-state"
        }, function(t) {
            t.createEl("p", {
                text: "The sidebar is empty, try dragging a pane here."
            })
        }), i.setSize(i.size), i
    }
    var cr, lr = (cr = function(t, e) {
            return (cr = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            cr(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        ur = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        hr = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        pr = function(c) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var t, e = c[Symbol.asyncIterator];
            return e ? e.call(c) : (c = "function" == typeof __values ? __values(c) : c[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                return this
            }, t);

            function n(s) {
                t[s] = c[s] && function(a) {
                    return new Promise(function(t, e) {
                        var n, r, i, o;
                        a = c[s](a), n = t, r = e, i = a.done, o = a.value, Promise.resolve(o).then(function(t) {
                            n({
                                value: t,
                                done: i
                            })
                        }, r)
                    })
                }
            }
        },
        fr = (dr.prototype.emptyResults = function() {
            this.searchResultEl.empty(), this.emptyStateEl.hide()
        }, dr.prototype.startLoader = function() {
            this.searchResultEl.addClass("is-loading")
        }, dr.prototype.stopLoader = function() {
            this.searchResultEl.removeClass("is-loading")
        }, dr.prototype.renderFileResult = function(s, i, c, t) {
            var l = this;
            if (void 0 === c && (c = null), void 0 === t && (t = null), s) {
                this.showingEmptyState = !1;
                var e = this.searchResultEl.createEl("div", {
                        cls: "search-result"
                    }),
                    n = Object(En.escapeHtml)(k(s.name));
                t && (n = n.replace(t, '<span class="search-result-file-matched-text">$&</span>')), e.createEl("div", {
                    cls: "search-result-file-title"
                }, function(t) {
                    t.innerHTML = n, t.onClickEvent(function(t) {
                        if (0 === t.button || 1 === t.button) {
                            t.preventDefault();
                            var e = l.app.workspace,
                                n = dn.isModifier(t, nn);
                            e.getLeaf(n || 1 === t.button).openFile(s, {
                                active: !0
                            })
                        }
                    })
                }), e.createEl("div", {
                    cls: "search-result-file-matches"
                }, function(t) {
                    for (var e = function(e) {
                            var n = e.match,
                                i = e.startIndex,
                                o = i + n.length,
                                a = e.line;
                            t.createEl("div", {
                                cls: "search-result-file-match"
                            }, function(t) {
                                t.createEl("span", {
                                    text: e.beforeContext
                                }), t.createEl("span", {
                                    cls: "search-result-file-matched-text",
                                    text: n
                                }), t.createEl("span", {
                                    text: e.afterContext
                                }), t.onClickEvent(function(t) {
                                    if (0 === t.button || 1 === t.button) {
                                        t.preventDefault();
                                        var e = {
                                                line: a,
                                                startPos: i,
                                                endPos: o
                                            },
                                            n = l.app.workspace,
                                            r = dn.isModifier(t, nn);
                                        n.getLeaf(r || 1 === t.button).openFile(s, {
                                            active: !0,
                                            eState: e
                                        })
                                    }
                                }), c && void 0 !== i && t.createEl("button", {
                                    cls: "search-result-file-match-replace-button",
                                    text: "Link"
                                }, function(t) {
                                    t.addEventListener("click", function(e) {
                                        return ur(l, void 0, void 0, function() {
                                            return hr(this, function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return e.stopPropagation(), [4, gr.replace(this.app.vault, s, [{
                                                            match: n,
                                                            index: i,
                                                            replaceText: "[[" + c + "]]"
                                                        }])];
                                                    case 1:
                                                        return t.sent(), [2]
                                                }
                                            })
                                        })
                                    })
                                })
                            })
                        }, n = 0, r = i; n < r.length; n++) e(r[n])
                })
            }
        }, dr.prototype.showEmptyState = function() {
            this.showingEmptyState = !0, this.emptyStateEl.show()
        }, dr.prototype.show = function() {
            this.showingEmptyState ? (this.emptyStateEl.show(), Fn(this.emptyStateEl)) : (this.searchResultEl.show(), Fn(this.searchResultEl))
        }, dr.prototype.hide = function() {
            var t = this;
            this.showingEmptyState ? zn(this.emptyStateEl, function() {
                t.emptyStateEl.hide()
            }) : zn(this.searchResultEl, function() {
                t.searchResultEl.hide()
            })
        }, dr);

    function dr(t, e, n, r) {
        void 0 === r && (r = ""), this.searchResultEl = null, this.emptyStateEl = null, this.showingEmptyState = !1, this.app = t, this.searchResultEl = e.createEl("div", {
            cls: "search-result-container " + r
        }), this.emptyStateEl = e.createEl("div", {
            cls: "search-empty-state",
            text: n
        }), this.emptyStateEl.hide()
    }

    function vr(C, x, _, S, L, M, A) {
        var T, O;
        return void 0 === L && (L = 0), void 0 === M && (M = null), void 0 === A && (A = []), ur(this, void 0, void 0, function() {
            var e, n, r, i, o, a, s, c, l, u, h, p, f, d, v, g, m, y, b, w, k, E;
            return hr(this, function(t) {
                switch (t.label) {
                    case 0:
                        _.emptyResults(), _.startLoader(), x.onCancel(function() {
                            _.stopLoader()
                        }), n = e = 0, t.label = 1;
                    case 1:
                        t.trys.push([1, 7, 8, 13]), r = pr(C.vault.iterateMarkdownFiles(!0)), t.label = 2;
                    case 2:
                        return [4, r.next()];
                    case 3:
                        if ((i = t.sent()).done) return [3, 6];
                        if (o = i.value, a = o.file, s = o.content, x.isCancelled()) return [2];
                        if (A.contains(a)) return [3, 5];
                        for (c = !1, -1 !== a.basename.search(S) && (e++, c = !0), l = [], u = S.exec(s), c = c || !!u, p = h = 0; null !== u;) {
                            if (f = u[L], d = u.index, 0 !== L)
                                for (v = 1; v < L; v++) d += u[v].length;
                            for (g = Math.max(0, d - 100), m = Math.min(s.length, u.index + f.length + 100), y = s.slice(g, d).trimLeft(), 0 !== g && (y = "..." + y), b = s.slice(d + f.length, m).trimRight(), m !== s.length && (b += "..."); - 1 !== p && p < d;) {
                                if (!(-1 !== (w = s.indexOf("\n", p)) && w < d)) {
                                    d <= w && (p = d);
                                    break
                                }
                                p = w + 1, h++
                            }
                            k = {
                                beforeContext: y,
                                match: f,
                                afterContext: b,
                                line: h,
                                startIndex: d
                            }, l.push(k), u = S.exec(s), e += 1
                        }
                        return S.lastIndex = 0, c && _.renderFileResult(a, l, M, S), ++n % 10 != 0 ? [3, 5] : [4, new Promise(function(t) {
                            return C.nextFrame(t)
                        })];
                    case 4:
                        t.sent(), t.label = 5;
                    case 5:
                        return [3, 2];
                    case 6:
                        return [3, 13];
                    case 7:
                        return E = t.sent(), T = {
                            error: E
                        }, [3, 13];
                    case 8:
                        return t.trys.push([8, , 11, 12]), i && !i.done && (O = r.return) ? [4, O.call(r)] : [3, 10];
                    case 9:
                        t.sent(), t.label = 10;
                    case 10:
                        return [3, 12];
                    case 11:
                        if (T) throw T.error;
                        return [7];
                    case 12:
                        return [7];
                    case 13:
                        return 0 === e && _.showEmptyState(), x.cancel(), [2]
                }
            })
        })
    }
    var gr = (mr.replace = function(l, u, h, p) {
        return ur(this, void 0, void 0, function() {
            var e, n, r, i, o, a, s, c;
            return hr(this, function(t) {
                switch (t.label) {
                    case 0:
                        return void 0 === p ? [3, 1] : (e = p, [3, 3]);
                    case 1:
                        return [4, l.cachedRead(u)];
                    case 2:
                        e = t.sent(), t.label = 3;
                    case 3:
                        for (h.reverse(), n = e, r = 0, i = h; r < i.length; r++) o = i[r], a = o.match, s = o.index, c = o.replaceText, n = this.replaceOccurrence(n, a, s, c);
                        return [4, l.modify(u, n)];
                    case 4:
                        return t.sent(), [2]
                }
            })
        })
    }, mr.replaceOccurrence = function(t, e, n, r) {
        return t.slice(0, n) + r + t.slice(n + e.length)
    }, mr);

    function mr() {}
    var yr = (br.prototype.init = function(t, e) {
        this.app = t, e.registerGlobalCommand({
            id: "global-search:open",
            name: "Search in all files",
            callback: function() {
                t.openGlobalSearch("")
            },
            hotkeys: [yn([nn, on], "f")]
        }), e.registerViewType(kr, function(t) {
            return new Er(t)
        })
    }, br.prototype.onEnable = function(t, e) {
        e.registerEvent(t.workspace.on("layout-ready", this.initLeaf, this))
    }, br.prototype.onUserEnable = function() {
        this.initLeaf()
    }, br.prototype.initLeaf = function() {
        0 === this.app.workspace.getLeavesOfType(kr).length && this.app.workspace.getLeftLeaf(!1).setViewState({
            type: kr
        })
    }, br);

    function br() {
        this.id = "global-search", this.name = "Search", this.description = "Search for keyword in all the notes.", this.defaultOn = !0, this.app = null
    }
    var wr, kr = "search",
        Er = (lr(Cr, wr = Vn), Cr.prototype.getDisplayText = function() {
            return "Search"
        }, Cr.prototype.getViewType = function() {
            return kr
        }, Cr.prototype.startSearch = function() {
            var t = this.searchInputEl.value;
            if ("" === t) return this.stopSearch(), void this.dom.emptyResults();
            this.renderSearchResults(t)
        }, Cr.prototype.stopSearch = function() {
            var t = this.searching;
            t && (t.cancel(), this.searching = null)
        }, Cr.prototype.renderSearchResults = function(t) {
            this.stopSearch();
            var e = this.searching = new A.a;
            vr(this.app, e, this.dom, new RegExp(Object(En.escapeRE)(t), "gi"))
        }, Cr.prototype.openSearch = function(t) {
            var e = this.leaf.parentSplit;
            e instanceof rr && e.selectTab(e.children.indexOf(this.leaf)), this.searchInputEl.value = t, this.searchInputEl.focus(), "" !== t && this.renderSearchResults(t)
        }, Cr);

    function Cr(t) {
        var e = wr.call(this, t) || this;
        e.icon = Yt, e.dom = null, e.searchInputEl = null, e.searching = null;
        var n = e.containerEl;
        return e.searchInputEl = n.createEl("input", {
            cls: "search-input",
            type: "text"
        }), e.searchInputEl.placeholder = "Type to start search...", e.dom = new fr(e.app, n, "No matches found.", "mod-global-search"), e.requestSearch = Object(A.h)(e.startSearch.bind(e), 250, !0), e.searchInputEl.addEventListener("input", function() {
            e.stopSearch(), e.dom.emptyResults(), e.requestSearch()
        }), e
    }
    var xr, _r = (xr = function(t, e) {
            return (xr = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            xr(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        Sr = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        Lr = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        Mr = (Ar.prototype.open = function() {
            this.app.keymap.pushScope(this.scope), this.app.dom.appContainerEl.appendChild(this.containerEl), this.onOpen()
        }, Ar.prototype.close = function() {
            this.app.keymap.popScope(this.scope), this.containerEl.remove(), this.onClose()
        }, Ar.prototype.onOpen = function() {}, Ar.prototype.onClose = function() {}, Ar);

    function Ar(t) {
        this.app = t, this.scope = new pn, this.scope.registerKey([], "Escape", this.close.bind(this)), this.containerEl = createEl("div", {
            cls: "modal-container"
        });
        var e = this.containerEl.createEl("div", {
            cls: "modal-bg"
        });
        this.modalEl = this.containerEl.createEl("div", {
            cls: "modal"
        });
        var n = this.modalEl.createEl("div", {
            cls: "modal-close-button"
        });
        this.titleEl = this.modalEl.createEl("div", {
            cls: "modal-title"
        }), this.contentEl = this.modalEl.createEl("div", {
            cls: "modal-content"
        }), n.addEventListener("click", this.close.bind(this)), e.addEventListener("click", this.close.bind(this))
    }
    var Tr, Or = (_r(Dr, Tr = Mr), Dr);

    function Dr(t, e, n, r, i, o) {
        void 0 === o && (o = !1);
        var a = Tr.call(this, t) || this;
        a.buttonContainerEl = null, a.titleEl.setText(e), n && a.contentEl.append(n), a.buttonContainerEl = a.modalEl.createEl("div", {
            cls: "modal-button-container"
        });
        var s = a.buttonContainerEl.createEl("button", {
                cls: o ? "mod-warning" : "mod-cta",
                text: r
            }),
            c = a.buttonContainerEl.createEl("button", {
                text: "Cancel"
            });
        return s.addEventListener("click", function() {
            return Sr(a, void 0, void 0, function() {
                return Lr(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, i()];
                        case 1:
                            return t.sent() || this.close(), [2]
                    }
                })
            })
        }), c.addEventListener("click", a.close.bind(a)), a
    }
    Pr.prototype.closeAllModals = function() {
        for (var t = 0, e = this.currentModals; t < e.length; t++) e[t].close()
    };

    function Pr() {
        this.currentModals = []
    }
    var Fr = function(t) {
            var e = document.querySelector("body").createEl("div", {
                cls: "notice",
                text: t
            });
            setTimeout(function() {
                setTimeout(function() {
                    e.addClass("mod-disappearing"), setTimeout(function() {
                        e.detach()
                    }, 1e3)
                })
            }, 4e3)
        },
        zr = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        Ir = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        Rr = (Hr.prototype.getNewFileParent = function(t) {
            var e = this.vault,
                n = e.getConfig(et);
            if ("folder" === n) {
                var r = e.getConfig(nt);
                if ((i = e.getAbstractFileByPath(r)) instanceof Mt) return i
            } else if ("current" === n) {
                var i;
                if (r = y(t), (i = e.getAbstractFileByPath(r)) instanceof Mt) return i
            }
            return e.getRoot()
        }, Hr.prototype.createNewMarkdownFile = function(i, o) {
            return zr(this, void 0, Promise, function() {
                var e, n, r;
                return Ir(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e = this.vault, i = i || e.getRoot(), n = i.getParentPrefix(), r = o ? (x(o, "md") || (o = C(o, "md")), n + o) : e.getAvailablePath(n + "Untitled", "md"), [4, e.create(r, "")];
                        case 1:
                            return [2, t.sent()]
                    }
                })
            })
        }, Hr.prototype.createNewFolder = function(i) {
            return zr(this, void 0, Promise, function() {
                var e, n, r;
                return Ir(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e = !i || i.isRoot() ? "" : i.path + "/", n = this.vault.getAvailablePath(e + "Untitled"), [4, this.vault.createFolder(n)];
                        case 1:
                            return t.sent(), (r = this.vault.getAbstractFileByPath(n)) && r instanceof Mt ? [2, r] : [2, null]
                    }
                })
            })
        }, Hr.prototype.renameFile = function(u, h) {
            return zr(this, void 0, Promise, function() {
                var e, n, r, i, o, a, s, c, l = this;
                return Ir(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return u instanceof _t ? [3, 2] : [4, this.vault.rename(u, h)];
                        case 1:
                            return t.sent(), [2];
                        case 2:
                            return e = this.app.metadataCache.getBacklinks(u), n = e.count(), r = e.keys(), 0 !== n ? [3, 4] : [4, this.vault.rename(u, h)];
                        case 3:
                            return t.sent(), [2];
                        case 4:
                            return i = Object(A.l)(n, "link") + " in " + Object(A.l)(r.length, "file"), o = "This will affect " + i + ".", a = "Updated " + i + ".", this.vault.getConfig(V) ? [4, this.renameAndUpdateInternalLinks(u, h, r)] : [3, 6];
                        case 5:
                            return t.sent(), new Fr(a), [2];
                        case 6:
                            return (s = new Mr(this.app)).titleEl.setText("Update internal links"), s.contentEl.createEl("p", {
                                text: "Do you want to update internal links that link to this file?"
                            }), s.contentEl.createEl("p", {
                                text: o
                            }), (c = s.modalEl.createEl("div", {
                                cls: "modal-button-container"
                            })).createEl("button", {
                                text: "Always update"
                            }).addEventListener("click", function() {
                                return zr(l, void 0, void 0, function() {
                                    return Ir(this, function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return s.close(), [4, this.renameAndUpdateInternalLinks(u, h, r)];
                                            case 1:
                                                return t.sent(), new Fr(a), this.app.vault.setConfig(V, !0), [2]
                                        }
                                    })
                                })
                            }), c.createEl("button", {
                                text: "Just once"
                            }).addEventListener("click", function() {
                                return zr(l, void 0, void 0, function() {
                                    return Ir(this, function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, this.renameAndUpdateInternalLinks(u, h, r)];
                                            case 1:
                                                return t.sent(), s.close(), new Fr(a), [2]
                                        }
                                    })
                                })
                            }), c.createEl("button", {
                                text: "Do not update"
                            }, function(t) {
                                t.addEventListener("click", function() {
                                    return zr(l, void 0, void 0, function() {
                                        return Ir(this, function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return [4, this.vault.rename(u, h)];
                                                case 1:
                                                    return t.sent(), s.close(), [2]
                                            }
                                        })
                                    })
                                })
                            }), s.open(), [2]
                    }
                })
            })
        }, Hr.prototype.renameAndUpdateInternalLinks = function(C, x, _) {
            return zr(this, void 0, void 0, function() {
                var e, n, r, i, o, a, s, c, l, u, h, p, f, d, v, g, m, y, b, w, k, E;
                return Ir(this, function(t) {
                    switch (t.label) {
                        case 0:
                            e = new RegExp(/\[\[(.*?)(\|.*?)?\]\]/, "gi"), n = this.app.metadataCache, r = [], i = 0, o = _, t.label = 1;
                        case 1:
                            return i < o.length ? (a = o[i], (s = this.vault.getAbstractFileByPath(a)) && s instanceof _t ? [4, this.vault.read(s)] : [3, 3]) : [3, 4];
                        case 2:
                            for (c = t.sent(), l = void 0, u = []; l = e.exec(c);) l[1] && "#" !== (p = l[1]).charAt(0) && (f = n.getLinktextDest(p, s.path)) && f.file === C && u.push({
                                match: p,
                                index: l.index + 2,
                                replaceText: p,
                                encode: !1
                            });
                            for (h = new RegExp(/\[.*?]\((.*?)\)/, "gi"); l = h.exec(c);) l[1] && (p = l[1], Object(Wt.c)(p) && "#" !== p.charAt(0) && (f = n.getLinktextDest(p, s.path)) && f.file === C && u.push({
                                match: p,
                                index: l.index + l[0].length - 1 - p.length,
                                replaceText: p,
                                encode: !0
                            }));
                            0 < u.length && r.push({
                                file: s,
                                data: c,
                                locations: u
                            }), t.label = 3;
                        case 3:
                            return i++, [3, 1];
                        case 4:
                            return [4, this.vault.rename(C, x)];
                        case 5:
                            t.sent(), d = 0, v = r, t.label = 6;
                        case 6:
                            if (!(d < v.length)) return [3, 9];
                            for (g = v[d], m = n.fileToLinktext(C, g.file.path), y = 0, b = g.locations; y < b.length; y++) w = b[y], k = w.match, E = Vt.parseLinktext(k).originalHeading, w.replaceText = m, E && (w.replaceText += E), w.encode && (w.replaceText = encodeURI(w.replaceText));
                            return [4, gr.replace(this.vault, g.file, g.locations, g.data)];
                        case 7:
                            t.sent(), t.label = 8;
                        case 8:
                            return d++, [3, 6];
                        case 9:
                            return [2]
                    }
                })
            })
        }, Hr.prototype.promptForFolderDeletion = function(t) {
            var e = this,
                n = this.app,
                r = n.vault.getConfig(st),
                i = n.vault.getConfig(ct);
            if (r) {
                var o = createEl("div");
                o.createEl("p", {
                    text: 'Are you sure you want to delete "' + t.name + '"?'
                }), "system" === i ? o.createEl("p", {
                    text: "It will be moved to your system trash."
                }) : "local" === i ? o.createEl("p", {
                    text: "It will be moved to your Obsidian trash."
                }) : "none" === i && o.createEl("p", {
                    cls: "mod-warning",
                    text: "The file will be permanent deleted."
                }), 0 < t.children.length && (o.createEl("p", {
                    cls: "mod-warning",
                    text: "This folder is not empty."
                }), o.createEl("p", {
                    cls: "mod-warning",
                    text: "If you continue, all files inside this folder will be deleted."
                }));
                var a = new Or(n, "Delete folder", o, "Delete", function() {
                        e.trashFile(t)
                    }, !0),
                    s = createEl("button", {
                        cls: "mod-warning",
                        text: "Delete and don't ask again"
                    });
                s.addEventListener("click", function() {
                    n.vault.setConfig(st, !1), e.trashFile(t), a.close()
                });
                var c = a.buttonContainerEl.firstChild;
                a.buttonContainerEl.insertBefore(s, c), a.open()
            } else this.trashFile(t)
        }, Hr.prototype.promptForFileDeletion = function(t) {
            var e = this,
                n = this.app,
                r = n.vault.getConfig(st),
                i = n.vault.getConfig(ct);
            if (r) {
                var o = createEl("div");
                o.createEl("p", {
                    text: 'Are you sure you want to delete "' + t.name + '"?'
                }), "system" === i ? o.createEl("p", {
                    text: "It will be moved to your system trash."
                }) : "local" === i ? o.createEl("p", {
                    text: "It will be moved to your Obsidian trash."
                }) : "none" === i && o.createEl("p", {
                    cls: "mod-warning",
                    text: "The file will be permanent deleted."
                });
                var a = n.metadataCache.getBacklinks(t).count();
                if (0 < a) {
                    var s = "There are currently " + Object(A.l)(a, "internal link") + " pointing to this note.";
                    o.createEl("p", {
                        cls: "mod-warning",
                        text: s
                    })
                }
                var c = new Or(n, "Delete file", o, "Delete", function() {
                        e.trashFile(t)
                    }, !0),
                    l = createEl("button", {
                        cls: "mod-warning",
                        text: "Delete and don't ask again"
                    });
                l.addEventListener("click", function() {
                    n.vault.setConfig(st, !1), e.trashFile(t), c.close()
                });
                var u = c.buttonContainerEl.firstChild;
                c.buttonContainerEl.insertBefore(l, u), c.open()
            } else this.trashFile(t)
        }, Hr.prototype.trashFile = function(t) {
            var e = this.app,
                n = e.vault.getConfig(ct);
            "system" === n ? e.vault.trash(t, !0) : "local" === n ? e.vault.trash(t, !1) : "none" === n && e.vault.delete(t)
        }, Hr);

    function Hr(t) {
        this.app = null, this.vault = null, this.app = t, this.vault = t.vault
    }
    var Nr, qr = (Nr = function(t, e) {
            return (Nr = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            Nr(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        Br = (jr.prototype.setDisabled = function(t) {
            this.dom.toggleClass("is-disabled", t)
        }, jr.prototype.setActive = function(t) {
            this.isActive = t, this.updateIcon()
        }, jr.prototype.updateIcon = function() {
            this.isActive ? We(this.iconEl, be, 16) : this.iconString ? We(this.iconEl, this.iconString, 16) : this.iconEl.empty()
        }, jr);

    function jr(t, e, n) {
        this.name = null, this.dom = null, this.iconEl = null, this.iconString = null, this.isActive = !1, this.name = t, this.dom = createEl("div", {
            cls: "menu-item"
        }), this.iconEl = this.dom.createEl("div", {
            cls: "menu-item-icon"
        }), n && (this.iconString = n, this.updateIcon()), this.dom.createEl("div", {
            cls: "menu-item-title",
            text: t
        }), this.dom.addEventListener("click", e)
    }
    var Vr = (Gr.prototype.addItem = function(t, e, n) {
        var r = new Br(t, e, n);
        return this.itemDoms.push(r), this.dom.appendChild(r.dom), r
    }, Gr);

    function Gr() {
        this.itemDoms = [], this.dom = createEl("div", {
            cls: "menu-group"
        })
    }
    var Ur, Wr = (qr(Kr, Ur = In), Kr.prototype.load = function() {
        this.registerDomEvent(document, "click", this.hide.bind(this))
    }, Kr.prototype.addGroup = function() {
        var t = new Vr;
        return this.groupDoms.push(t), this.dom.appendChild(t.dom), t
    }, Kr.prototype.showAtPosition = function(t) {
        document.body.appendChild(this.dom);
        var e = this.dom.offsetWidth;
        t.x + e > window.innerWidth ? this.dom.style.left = t.x - e + 2 + "px" : this.dom.style.left = t.x + 2 + "px";
        var n = this.dom.offsetHeight;
        t.y + n > window.innerHeight ? this.dom.style.top = t.y - n + 2 + "px" : this.dom.style.top = t.y + 2 + "px"
    }, Kr.prototype.hide = function() {
        this.unload(), this.dom.detach()
    }, Kr);

    function Kr() {
        var t = Ur.call(this) || this;
        return t.groupDoms = [], t.dom = createEl("div", {
            cls: "menu"
        }), t.load(), t
    }
    var $r, Zr, Yr = ($r = function(t, e) {
            return ($r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            $r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        Jr = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        Xr = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        Qr = (Yr(ti, Zr = Vn), ti.prototype.load = function() {
            Zr.prototype.load.call(this);
            var t = this.leaf;
            We(this.iconEl, this.getIcon(), 18), this.titleEl.setText(this.getDisplayText()), this.registerEvent(t.on("pinned-change", this.onPinnedChange, this)), this.registerEvent(t.on("group-change", this.onGroupChange, this))
        }, ti.prototype.onPinnedChange = function(t) {
            this.pinButtonEl.toggleClass("is-active", t), t ? (We(this.pinButtonEl, qe, 20), this.pinButtonEl.show()) : (We(this.pinButtonEl, _e, 20), this.pinButtonEl.hide())
        }, ti.prototype.onInitMenu = function(t) {
            var e = this,
                n = t.addGroup();
            return this.leaf.group || n.addItem("Link with pane...", function() {
                return Jr(e, void 0, void 0, function() {
                    return Xr(this, function(t) {
                        return this.app.workspace.onStartLink(this.leaf), [2]
                    })
                })
            }, me), this.leaf.pinned || n.addItem("Pin", function() {
                return Jr(e, void 0, void 0, function() {
                    return Xr(this, function(t) {
                        return this.leaf.togglePinned(), [2]
                    })
                })
            }, _e), n.addItem("Split vertically", function() {
                return Jr(e, void 0, void 0, function() {
                    var e, n;
                    return Xr(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return e = this.app.workspace.createLeafBySplit(this.leaf, "vertical"), (n = this.leaf.getViewState()).active = !0, [4, e.setViewState(n)];
                            case 1:
                                return t.sent(), [2]
                        }
                    })
                })
            }, Ae), n.addItem("Split horizontally", function() {
                return Jr(e, void 0, void 0, function() {
                    var e, n;
                    return Xr(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return e = this.app.workspace.createLeafBySplit(this.leaf, "horizontal"), (n = this.leaf.getViewState()).active = !0, [4, e.setViewState(n)];
                            case 1:
                                return t.sent(), [2]
                        }
                    })
                })
            }, Me), n
        }, ti.prototype.onGroupChange = function() {
            this.groupButtonEl.toggle(!!this.leaf.group)
        }, ti.prototype.addAction = function(t, e, n, r) {
            void 0 === r && (r = 18);
            var i = createEl("a", {
                cls: "view-action"
            });
            return this.actionsEl.prepend(i), i.setAttribute("aria-label", e), We(i, t, r), i.onClickEvent(function(t) {
                if (0 === t.button || 1 === t.button) return n(t)
            }), i
        }, ti.prototype.onMoreOptions = function(e) {
            var n = this;
            0 === e.button && (e.preventDefault(), setTimeout(function() {
                var t = new Wr;
                n.onInitMenu(t), t.showAtPosition({
                    x: e.pageX,
                    y: e.pageY
                })
            }, 0))
        }, ti.prototype.onHeaderMenu = function(t) {
            var e = this;
            Zr.prototype.onHeaderMenu.call(this, t), t.addItem("Close", function() {
                return Jr(e, void 0, void 0, function() {
                    return Xr(this, function(t) {
                        return this.leaf.detach(), [2]
                    })
                })
            }, Fe)
        }, ti);

    function ti(t) {
        var i = Zr.call(this, t) || this;
        i.groupButtonEl = null;
        var e = i.headerEl = i.containerEl.createEl("div", {
            cls: "view-header"
        });
        i.contentEl = i.containerEl.createEl("div", {
            cls: "view-content"
        });
        var n = i.iconEl = e.createEl("div", {
            cls: "view-header-icon"
        });
        n.setAttribute("aria-label", "Drag to rearrange"), i.titleContainerEl = e.createEl("div", {
            cls: "view-header-title-container"
        }), i.titleEl = i.titleContainerEl.createEl("div", {
            cls: "view-header-title"
        }), i.actionsEl = e.createEl("div", {
            cls: "view-actions"
        }), i.addAction(xe, "More options", i.onMoreOptions.bind(i)), i.addAction(Fe, "Close", function() {
            i.leaf.detach()
        }, 16).addClass("mod-close-leaf"), i.pinButtonEl = i.addAction(_e, "Pin", function() {
            i.leaf.togglePinned()
        }), i.pinButtonEl.addClass("mod-pin-leaf"), i.pinButtonEl.hide(), n.addEventListener("mousedown", function(t) {
            i.leaf.workspace.onDragLeaf(t, i.leaf)
        });
        var o = i.groupButtonEl = i.addAction(me, "Unlink pane", function() {
            for (var t = i.leaf.group, e = 0, n = i.leaf.workspace.getGroupLeaves(t); e < n.length; e++) {
                n[e].unhighlight()
            }
            i.leaf.setGroup(null)
        });
        return o.addEventListener("mouseover", function() {
            We(o, Pe, 18);
            for (var t = i.leaf.group, e = 0, n = i.leaf.workspace.getGroupLeaves(t); e < n.length; e++) {
                var r = n[e];
                r !== i.leaf && r.highlight()
            }
        }), o.addEventListener("mouseout", function() {
            We(o, me, 18);
            for (var t = i.leaf.group, e = 0, n = i.leaf.workspace.getGroupLeaves(t); e < n.length; e++) {
                n[e].unhighlight()
            }
        }), i.onGroupChange(), i
    }
    var ei, ni, ri = (ei = function(t, e) {
            return (ei = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            ei(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        ii = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        oi = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        ai = (ri(si, ni = Qr), si.prototype.getDisplayText = function() {
            return this.file ? this.file.basename : "No File"
        }, si.prototype.load = function() {
            ni.prototype.load.call(this);
            var t = this.app.vault;
            this.registerEvent(t.on("rename", this.onRename.bind(this))), this.registerEvent(t.on("delete", this.onDelete.bind(this)))
        }, si.prototype.getState = function() {
            var t = ni.prototype.getState.call(this),
                e = this.file;
            return e && (t.file = e.path), t
        }, si.prototype.getSyncViewState = function() {
            var t = this.getState();
            return t.sync = !0, {
                state: t,
                eState: this.getEphemeralState()
            }
        }, si.prototype.syncState = function(l) {
            return ii(this, void 0, void 0, function() {
                var e, n, r, i, o, a, s, c;
                return oi(this, function(t) {
                    switch (t.label) {
                        case 0:
                            if (e = this.leaf, n = e.workspace, !(r = e.group)) return [3, 4];
                            i = this.getSyncViewState(), o = n.getGroupLeaves(r), a = 0, s = o, t.label = 1;
                        case 1:
                            return a < s.length ? (c = s[a]) === e || !l && c.view.getViewType() !== this.getViewType() ? [3, 3] : [4, c.openFile(this.file, i)] : [3, 4];
                        case 2:
                            t.sent(), t.label = 3;
                        case 3:
                            return a++, [3, 1];
                        case 4:
                            return [2]
                    }
                })
            })
        }, si.prototype.setState = function(r, i) {
            return ii(this, void 0, Promise, function() {
                var e, n;
                return oi(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return (e = this.app.vault.getAbstractFileByPath(r.file)) instanceof _t ? [4, this.loadFile(e)] : [3, 2];
                        case 1:
                            return n = t.sent(), [3, 4];
                        case 2:
                            return [4, this.loadFile(null)];
                        case 3:
                            n = t.sent(), this.allowNoFile || (i.close = !0), t.label = 4;
                        case 4:
                            return n && (i.layout = !0, i.history = !0), [4, ni.prototype.setState.call(this, r, i)];
                        case 5:
                            return t.sent(), r.sync || !i.layout && !i.history ? [3, 7] : [4, this.syncState(!0)];
                        case 6:
                            t.sent(), t.label = 7;
                        case 7:
                            return [2]
                    }
                })
            })
        }, si.prototype.onClose = function() {
            return ii(this, void 0, Promise, function() {
                return oi(this, function(t) {
                    return this.contentEl.empty(), this.loadFile(null), [2]
                })
            })
        }, si.prototype.loadFile = function(r) {
            return ii(this, void 0, Promise, function() {
                var e, n;
                return oi(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return this.file === r ? [2, !1] : this.file ? [4, this.onUnloadFile(this.file)] : [3, 2];
                        case 1:
                            t.sent(), t.label = 2;
                        case 2:
                            return this.file = r, this.titleEl.setText(this.getDisplayText()), r ? [4, this.onLoadFile(r)] : [3, 4];
                        case 3:
                            t.sent(), t.label = 4;
                        case 4:
                            return e = this.leaf, (n = e.workspace).activeLeaf === e && n.trigger("file-open", r), [2, !0]
                    }
                })
            })
        }, si.prototype.onLoadFile = function(t) {
            return ii(this, void 0, Promise, function() {
                return oi(this, function(t) {
                    return [2]
                })
            })
        }, si.prototype.onUnloadFile = function(t) {
            return ii(this, void 0, Promise, function() {
                return oi(this, function(t) {
                    return [2]
                })
            })
        }, si.prototype.onInitMenu = function(t) {
            var n = this;
            ni.prototype.onInitMenu.call(this, t);
            var r = this.file,
                i = t.addGroup();
            if (i.addItem("Delete file", function() {
                    n.app.fileManager.promptForFileDeletion(r)
                }, Zt), r)
                for (var e = function(e) {
                        i.addItem(e.title, function() {
                            return ii(n, void 0, void 0, function() {
                                return oi(this, function(t) {
                                    return e.callback(r), [2]
                                })
                            })
                        }, e.icon)
                    }, o = 0, a = this.app.plugins.onFileMenu("pane-more-options", r, this.leaf); o < a.length; o++) e(a[o]);
            return i
        }, si.prototype.onHeaderMenu = function(t) {
            var n = this;
            ni.prototype.onHeaderMenu.call(this, t);
            var r = this.file;
            if (r)
                for (var e = function(e) {
                        t.addItem(e.title, function() {
                            return ii(n, void 0, void 0, function() {
                                return oi(this, function(t) {
                                    return e.callback(r), [2]
                                })
                            })
                        }, e.icon)
                    }, i = 0, o = this.app.plugins.onFileMenu("sidebar-context-menu", r, this.leaf); i < o.length; i++) e(o[i])
        }, si.prototype.onRename = function(e) {
            return ii(this, void 0, void 0, function() {
                return oi(this, function(t) {
                    return e === this.file && (this.titleEl.setText(e.basename), this.leaf.updateStateResult({
                        history: !1,
                        layout: !0
                    })), [2]
                })
            })
        }, si.prototype.onDelete = function(e) {
            return ii(this, void 0, void 0, function() {
                return oi(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e !== this.file ? [3, 2] : [4, this.leaf.open(null)];
                        case 1:
                            t.sent(), t.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })
        }, si.prototype.canAcceptExtension = function(t) {
            return !1
        }, si);

    function si(t) {
        var e = ni.call(this, t) || this;
        return e.allowNoFile = !1, e
    }
    var ci, li, ui = (ci = function(t, e) {
            return (ci = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            ci(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        hi = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        pi = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        fi = (ui(di, li = ai), di.prototype.setState = function(e, n) {
            return hi(this, void 0, Promise, function() {
                return pi(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, li.prototype.setState.call(this, e, n)];
                        case 1:
                            return t.sent(), e.rename && this.selectTitle(!1), [2]
                    }
                })
            })
        }, di.prototype.onOpen = function() {
            return hi(this, void 0, Promise, function() {
                var e;
                return pi(this, function(t) {
                    return (e = this.titleEl).setAttr("contenteditable", "true"), e.setAttr("spellcheck", "false"), e.addEventListener("blur", this.saveTitle.bind(this)), e.addEventListener("input", this.onTitleChange.bind(this)), e.addEventListener("keypress", this.onTitleKeypress.bind(this)), e.addEventListener("keydown", this.onTitleKeydown.bind(this)), [2]
                })
            })
        }, di.prototype.onTitleChange = function() {
            this.clearTitleErrorTooltip();
            var t = this.file,
                e = this.app,
                n = this.titleEl,
                r = n.getText();
            1 === n.childNodes.length && n.firstChild.nodeType === Node.TEXT_NODE || (n.setText(r), Object(A.r)(n)), r = r.trim(), e.vault.checkForDuplicate(t, r) && this.displayError("There's already a file with the same name", !1)
        }, di.prototype.saveTitle = function() {
            return hi(this, void 0, void 0, function() {
                var e, n, r, i, o, a, s;
                return pi(this, function(t) {
                    switch (t.label) {
                        case 0:
                            if (this.clearTitleErrorTooltip(), n = (e = this).file, r = e.titleEl, "" === (i = r.getText().trim())) return r.setText(n.basename), this.displayError("File name cannot be empty.", !0), [2];
                            if (o = n.getNewPathAfterRename(i), n.path === o) return [2];
                            t.label = 1;
                        case 1:
                            return t.trys.push([1, 3, , 4]), [4, this.app.fileManager.renameFile(n, o)];
                        case 2:
                            return t.sent(), [3, 4];
                        case 3:
                            return (a = t.sent()) && (s = a.message || a.code || a.toString(), this.displayError(s, !0)), [3, 4];
                        case 4:
                            return r.setText(n.basename), [2]
                    }
                })
            })
        }, di.prototype.displayError = function(t, e) {
            var n = this.app,
                r = this.titleContainerEl;
            n.tooltip.displayTooltip(r, t, "bottom", ["mod-wide", "mod-error"]), e && setTimeout(this.clearTitleErrorTooltip.bind(this), 2e3)
        }, di.prototype.onTitleKeypress = function(e) {
            if (this.clearTitleErrorTooltip(), A.b.some(function(t) {
                    return t === e.key
                })) return e.preventDefault(), void this.displayError("File name cannot contain any of the following characters: " + A.b.join(" "), !1)
        }, di.prototype.onTitleKeydown = function(t) {
            if ("Enter" === t.key && (t.stopPropagation(), (e = this.titleEl).blur()), "Escape" === t.key) {
                t.stopPropagation();
                var e, n = this.file;
                (e = this.titleEl).setText(n.basename), e.blur()
            }
        }, di.prototype.clearTitleErrorTooltip = function() {
            this.app.tooltip.hideTooltip()
        }, di.prototype.selectTitle = function(t) {
            void 0 === t && (t = !0), (t ? Object(A.q) : Object(A.r))(this.titleEl)
        }, di);

    function di() {
        return null !== li && li.apply(this, arguments) || this
    }
    var vi, gi, mi = (vi = function(t, e) {
            return (vi = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            vi(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        yi = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        bi = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        wi = (mi(ki, gi = fi), ki.getViewType = function() {
            return "audio"
        }, ki.prototype.getViewType = function() {
            return "audio"
        }, ki.prototype.canAcceptExtension = function(t) {
            return h.contains(t)
        }, ki.prototype.onLoadFile = function(o) {
            return yi(this, void 0, void 0, function() {
                var e, n, r, i;
                return bi(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return n = (e = this).app, (r = e.contentEl).empty(), i = r.createEl("div", {
                                cls: "audio-container"
                            }), [4, ki.displayInEl(o, n, i)];
                        case 1:
                            return t.sent(), [2]
                    }
                })
            })
        }, ki.displayInEl = function(c, l, u) {
            return yi(this, void 0, Promise, function() {
                var e, n, r, i, o, a, s;
                return bi(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e = "audio/" + c.extension, [4, l.vault.readBinary(c)];
                        case 1:
                            return n = t.sent(), r = new Blob([n], {
                                type: e
                            }), i = URL.createObjectURL(r), o = u.createEl("audio", {
                                attr: {
                                    controls: "",
                                    src: i
                                }
                            }), a = null, s = function() {
                                clearInterval(a), URL.revokeObjectURL(i)
                            }, o.onload = s, o.onerror = s, a = window.setInterval(function() {
                                document.body.contains(o) || s()
                            }, 5e3), [2]
                    }
                })
            })
        }, ki);

    function ki() {
        var t = null !== gi && gi.apply(this, arguments) || this;
        return t.icon = oe, t
    }
    var Ei, Ci, xi = (Ei = function(t, e) {
            return (Ei = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            Ei(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        _i = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        Si = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        Li = (xi(Mi, Ci = fi), Mi.getViewType = function() {
            return "image"
        }, Mi.prototype.getViewType = function() {
            return "image"
        }, Mi.prototype.canAcceptExtension = function(t) {
            return p.contains(t)
        }, Mi.prototype.onLoadFile = function(o) {
            return _i(this, void 0, void 0, function() {
                var e, n, r, i;
                return Si(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return n = (e = this).app, (r = e.contentEl).empty(), i = r.createEl("div", {
                                cls: "image-container"
                            }), [4, Mi.displayInEl(o, n, i)];
                        case 1:
                            return t.sent(), [2]
                    }
                })
            })
        }, Mi.displayInEl = function(a, s, c) {
            return _i(this, void 0, Promise, function() {
                var e, n, r, i, o;
                return Si(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e = "image/" + a.extension, [4, s.vault.readBinary(a)];
                        case 1:
                            return n = t.sent(), r = new Blob([n], {
                                type: e
                            }), i = URL.createObjectURL(r), o = c.createEl("img", {
                                attr: {
                                    alt: a.name,
                                    src: i
                                }
                            }), [4, new Promise(function(t) {
                                function e() {
                                    URL.revokeObjectURL(i), t()
                                }
                                o.onload = e, o.onerror = e
                            })];
                        case 2:
                            return t.sent(), [2]
                    }
                })
            })
        }, Mi);

    function Mi() {
        var t = null !== Ci && Ci.apply(this, arguments) || this;
        return t.icon = ae, t
    }
    var Ai, Ti, Oi = (Ai = function(t, e) {
            return (Ai = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            Ai(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        Di = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        Pi = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        Fi = (Oi(zi, Ti = fi), zi.getViewType = function() {
            return "video"
        }, zi.prototype.getViewType = function() {
            return "video"
        }, zi.prototype.canAcceptExtension = function(t) {
            return f.contains(t)
        }, zi.prototype.onLoadFile = function(o) {
            return Di(this, void 0, void 0, function() {
                var e, n, r, i;
                return Pi(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return n = (e = this).app, (r = e.contentEl).empty(), i = r.createEl("div", {
                                cls: "video-container"
                            }), [4, zi.displayInEl(o, n, i)];
                        case 1:
                            return t.sent(), [2]
                    }
                })
            })
        }, zi.displayInEl = function(c, l, u) {
            return Di(this, void 0, Promise, function() {
                var e, n, r, i, o, a, s;
                return Pi(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e = "video/" + c.extension, [4, l.vault.readBinary(c)];
                        case 1:
                            return n = t.sent(), r = new Blob([n], {
                                type: e
                            }), i = URL.createObjectURL(r), o = u.createEl("video", {
                                attr: {
                                    controls: "",
                                    src: i
                                }
                            }), a = null, s = function() {
                                clearInterval(a), URL.revokeObjectURL(i)
                            }, o.onload = s, o.onerror = s, a = window.setInterval(function() {
                                document.body.contains(o) || s()
                            }, 5e3), [2]
                    }
                })
            })
        }, zi);

    function zi() {
        return null !== Ti && Ti.apply(this, arguments) || this
    }
    var Ii = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        Ri = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        Hi = (Ni.load = function(o, a, s, c, l, u) {
            return void 0 === l && (l = !0), void 0 === u && (u = !0), Ii(this, void 0, Promise, function() {
                var e, n, r, i;
                return Ri(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e = o.metadataCache.getLinktextDest(a, s), c.empty(), e ? (n = e.file, r = n.extension, p.contains(r) ? [4, Li.displayInEl(n, o, c)] : [3, 2]) : [2, !1];
                        case 1:
                            return t.sent(), [3, 9];
                        case 2:
                            return h.contains(r) ? [4, wi.displayInEl(n, o, c)] : [3, 4];
                        case 3:
                            return t.sent(), [3, 9];
                        case 4:
                            return f.contains(r) ? [4, Fi.displayInEl(n, o, c)] : [3, 6];
                        case 5:
                            return t.sent(), [3, 9];
                        case 6:
                            return v.contains(r) && l ? [4, xo.displayInEl(n, o, u, c, e.lineStart, e.lineEnd, a, s)] : [3, 8];
                        case 7:
                            return t.sent(), [3, 9];
                        case 8:
                            (i = c.createEl("div", {
                                cls: "file-embed"
                            })).createEl("div", {
                                cls: "file-embed-title",
                                text: n.name
                            }), i.createEl("div", {
                                cls: "file-embed-link"
                            }, function(t) {
                                t.addEventListener("click", function() {
                                    o.openWithDefaultApp(n)
                                }), We(t, ye, 20), t.setAttribute("aria-label", "Open in default app")
                            }), t.label = 9;
                        case 9:
                            return c.addClass("is-loaded"), [2, !0]
                    }
                })
            })
        }, Ni);

    function Ni() {}
    var qi, Bi = function() {
            return (Bi = Object.assign || function(t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }).apply(this, arguments)
        },
        ji = /^(vbscript|javascript|data):/,
        Vi = /^data:image\/(gif|png|jpeg|webp);/,
        Gi = window.document.createElement("a");
    var Ui = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
        Wi = /^<\/\s*([\w:-]+)[^>]*>/,
        Ki = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
        $i = /^</,
        Zi = /^<\//,
        Yi = /<!--(.*?)-->/g,
        Ji = /<!DOCTYPE([^>]*?)>/i,
        Xi = /<!\[CDATA\[(.*?)]]>/g,
        Qi = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        to = /([^\#-~| |!])/g,
        eo = vo("area,br,col,hr,img,wbr,input"),
        no = vo("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        ro = vo("rp,rt"),
        io = Bi(Bi({}, ro), no),
        oo = Bi(Bi({}, no), vo("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul"));
    oo.iframe = !0;
    var ao = Bi(Bi({}, ro), vo("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
        so = vo("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use"),
        co = vo("script,style"),
        lo = Bi(Bi(Bi(Bi(Bi({}, eo), oo), ao), io), so),
        uo = vo("background,cite,href,longdesc,src,usemap,xlink:href"),
        ho = vo("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width,checked,for"),
        po = vo("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan", !0),
        fo = Bi(Bi(Bi({}, uo), po), ho);

    function vo(t, e) {
        var n, r = {},
            i = t.split(",");
        for (n = 0; n < i.length; n++) r[e ? i[n].toLowerCase() : i[n]] = !0;
        return r
    }
    fo.id = !0, fo.allowfullscreen = !0;
    var go = document.createElement("pre");

    function mo(t) {
        return t ? (go.innerHTML = t.replace(/</g, "&lt;"), go.textContent) : ""
    }

    function yo(t) {
        return t.replace(/&/g, "&amp;").replace(Qi, function(t) {
            return "&#" + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ";"
        }).replace(to, function(t) {
            return "&#" + t.charCodeAt(0) + ";"
        }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function bo(t) {
        var e, a, n, s;
        return function(t, i) {
            "string" != typeof t && (t = null == t ? "" : "" + t);
            var e, n, r, o, s = [],
                a = t;
            for (s.last = function() {
                    return s[s.length - 1]
                }; t;) {
                if (n = !(o = ""), s.last() && co[s.last()] ? (t = t.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*" + s.last() + "[^>]*>", "i"), function(t, e) {
                        return e = e.replace(Yi, "$1").replace(Xi, "$1"), i.chars && i.chars(mo(e)), ""
                    }), l("", s.last())) : (0 === t.indexOf("\x3c!--") ? 0 <= (e = t.indexOf("--", 4)) && t.lastIndexOf("--\x3e", e) === e && (i.comment && i.comment(t.substring(4, e)), t = t.substring(e + 3), n = !1) : Ji.test(t) ? (r = t.match(Ji)) && (t = t.replace(r[0], ""), n = !1) : Zi.test(t) ? (r = t.match(Wi)) && (t = t.substring(r[0].length), r[0].replace(Wi, l), n = !1) : $i.test(t) && ((r = t.match(Ui)) ? (r[4] && (t = t.substring(r[0].length), r[0].replace(Ui, c)), n = !1) : (o += "<", t = t.substring(1))), n && (o += (e = t.indexOf("<")) < 0 ? t : t.substring(0, e), t = e < 0 ? "" : t.substring(e), i.chars && i.chars(mo(o)))), t == a) return s.reverse(), s.forEach(function(t) {
                    qi.push("</"), qi.push(t), qi.push(">")
                });
                a = t
            }

            function c(t, e, n, r) {
                if (e = e && e.toLowerCase(), oo[e])
                    for (; s.last() && ao[s.last()];) l("", s.last());
                io[e] && s.last() == e && l("", e), (r = eo[e] || !!r) || s.push(e);
                var a = {};
                return n.replace(Ki, function(t, e, n, r, i) {
                    var o = n || r || i || "";
                    return a[e] = mo(o), ""
                }), i.start && i.start(e, a, r), ""
            }

            function l(t, e) {
                var n, r = 0;
                if (e = e && e.toLowerCase())
                    for (r = s.length - 1; 0 <= r && s[r] != e; r--);
                if (0 <= r) {
                    for (n = s.length - 1; r <= n; n--) i.end && i.end(s[n]);
                    s.length = r
                }
                return ""
            }
            l()
        }(t, (a = function(t, e) {
            return !/^unsafe/.test(function(t) {
                Gi.setAttribute("href", t);
                var e = Gi.href;
                return "" === e || (e = e.toLowerCase(), !ji.test(e) || Vi.test(e)) ? t : "unsafe:" + e
            }(t))
        }, n = "", s = (e = qi = []).push.bind(e), {
            start: function(i, o, t) {
                i = i && i.toLowerCase(), !n && co[i] && (n = i), n || !0 !== lo[i] || (s("<"), s(i), Object.keys(o).forEach(function(t) {
                    var e = o[t],
                        n = t && t.toLowerCase(),
                        r = "img" === i && "src" === n || "background" === n;
                    !0 !== fo[n] && 0 !== n.indexOf("data-") || !0 === uo[n] && !a(e, r) || (s(" "), s(t), s('="'), s(yo(e)), s('"'))
                }), s(t ? "/>" : ">"))
            },
            end: function(t) {
                t = t && t.toLowerCase(), n || !0 !== lo[t] || (s("</"), s(t), s(">")), t == n && (n = "")
            },
            chars: function(t) {
                n || s(yo(t))
            },
            comment: function(t) {
                n || (s("\x3c!--"), s(yo(t)), s("--\x3e"))
            }
        })), qi.join("")
    }
    var wo = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        ko = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        Eo = (Co.prototype.render = function() {
            this.rendered || (this.el.innerHTML = this.html, this.rendered = !0, this.computed = !1)
        }, Co.prototype.compute = function() {
            var t = this.rendered,
                e = this.computed,
                n = this.el;
            t && !e && (this.top = n.offsetTop, this.computed = !0)
        }, Co.prototype.resetCompute = function() {
            this.computed = !1
        }, Co);

    function Co(t) {
        this.rendered = !1, this.top = 0, this.computed = !1, this.lines = 0, this.lineStart = 0, this.html = t, this.el = createEl("div", {
            cls: "markdown-preview-section"
        })
    }
    var xo = (_o.prototype.show = function() {
        this.previewEl.show()
    }, _o.prototype.hide = function() {
        this.previewEl.hide()
    }, _o.prototype.get = function() {
        return this.text
    }, _o.prototype.set = function(t, e) {
        e && this.clear(), this.text = t, this.queueRender()
    }, _o.prototype.clear = function() {
        this.sections = [], this.mathSections = [], this.previewEl.empty(), this.text = "", this.lastText = ""
    }, _o.prototype.getEphemeralState = function(t) {}, _o.prototype.setEphemeralState = function(t) {
        var e = this;
        if (t.scroll) {
            var n = t.scroll;
            this.onRendered(function() {
                e.applyScroll(n)
            })
        }
        if (void 0 !== t.line && 0 <= t.line) {
            var r = t.line;
            this.onRendered(function() {
                setTimeout(function() {
                    e.applyScroll({
                        line: r - 1,
                        percent: 0
                    }, !0)
                })
            })
        }
    }, _o.prototype.updateOptions = function() {
        var t = this.app.vault.getConfig(G);
        this.previewEl.toggleClass("is-readable-line-width", t)
    }, _o.prototype.updateCheckbox = function(t, f) {
        var d = this;
        t.preventDefault(), setTimeout(function() {
            var t = parseInt(f.getAttribute("data-line"));
            if (!(t < 0 || isNaN(t))) {
                for (var e = null, n = 0, r = d.sections; n < r.length; n++) {
                    var i = r[n];
                    if (i.el.contains(f)) {
                        e = i;
                        break
                    }
                }
                if (e) {
                    for (var o = d.text, a = e.lineStart + t, s = 0, c = 0; s < a;) {
                        if (-1 === (c = o.indexOf("\n", c) + 1)) return;
                        s++
                    }
                    var l = o.indexOf("\n", c); - 1 === l && (l = o.length);
                    var u = o.slice(c, l).search(/\[[ xX]\]/);
                    if (-1 !== u) {
                        var h = c + u + 1,
                            p = " " === o.charAt(h) ? "x" : " ";
                        d.text = o.slice(0, h) + p + o.slice(h + 1), d.view.triggerQuickPreview(d.text), d.queueRender(), wo(d, void 0, void 0, function() {
                            return ko(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.view.save()];
                                    case 1:
                                        return t.sent(), [2]
                                }
                            })
                        })
                    }
                }
            }
        }, 10)
    }, _o.prototype.onInternalLinkClick = function(r, i) {
        return wo(this, void 0, void 0, function() {
            var e, n;
            return ko(this, function(t) {
                return 0 !== r.button && 1 !== r.button || (r.preventDefault(), (e = i.getAttr("href")) && (n = dn.isModifier(r, nn), this.app.workspace.openLinkText(e, this.view.file.path, n || 1 === r.button))), [2]
            })
        })
    }, _o.prototype.onExternalLinkClick = function(n, r) {
        return wo(this, void 0, void 0, function() {
            var e;
            return ko(this, function(t) {
                return 0 !== n.button && 1 !== n.button || (e = r.getAttr("href")) && e.startsWith("file:///") && window.open(e), [2]
            })
        })
    }, _o.prototype.onPreviewInternalLinkMouseover = function(t, e) {
        var n = e.getAttr("href");
        n && this.app.workspace.onLinkHover(e, n, this.view.file)
    }, _o.prototype.queueRender = function() {
        this.rendered || (this.rendered = []), this.queuedRender || (this.queuedRender = !0, this.app.nextFrame(this.onRender.bind(this)))
    }, _o.prototype.onRender = function() {
        this.queuedRender = !1;
        var t = this.previewEl.scrollTop;
        this.lastText !== this.text && this.parse(), this.render(), this.previewEl.scrollTop = t
    }, _o.prototype.parse = function() {
        for (var t = this.md, e = this.previewEl, n = this.text, r = {}, i = [
                []
            ], o = [0], a = 0, s = t.parse(n, r); a < s.length; a++) {
            if (0 === (v = s[a]).level && Wt.a.contains(v.type) && v.map) {
                var c = v.map[1];
                o.last() <= c && (i.push([]), o.push(v.map[1]))
            }
            i.last().push(v)
        }
        0 === i[0].length && (i.shift(), o.shift());
        for (var l = [], u = 0; u < i.length; u++) {
            for (var h = i[u], p = 0 === u ? 0 : o[u - 1], f = 0, d = h; f < d.length; f++) {
                var v;
                if ("inline" === (v = d[f]).type && v.map) {
                    c = v.map[0];
                    for (var g = 0, m = v.children; g < m.length; g++) {
                        var y = m[g];
                        "checkbox" === y.type && y.attrSet("data-line", String(c - p))
                    }
                }
            }
            var b = bo(t.renderer.render(h, t.options, r));
            l.push(b)
        }
        var w = this.sections,
            k = [],
            E = 0;
        for (u = 0; u < l.length; u++) {
            b = l[u];
            for (var C = null, x = 0, _ = w; x < _.length; x++) {
                var S = _[x];
                if (S.html === b) {
                    w.remove(S), C = S;
                    break
                }
            }
            var L = o[u] - E;
            C || (C = new Eo(b)), C.lines = L, C.lineStart = E, k.push(C), E = o[u]
        }
        this.sections = k;
        var M = this.mathSections;
        this.mathSections = [];
        for (var A = 0, T = M; A < T.length; A++) h = T[A], k.contains(h) && this.mathSections.push(h);
        var O = this.embedSections;
        this.embedSections = [];
        for (var D = 0, P = O; D < P.length; D++) h = P[D], O.contains(h) && this.embedSections.push(h);
        e.setChildrenInPlace(k.map(function(t) {
            return t.el
        })), this.lastText = n
    }, _o.prototype.render = function() {
        for (var t = this, e = this.sections, r = 0, n = function(e) {
                if (!e.rendered) {
                    r++, e.render(), Prism.highlightAllUnder(e.el), _o.renderMath(e.el) && i.mathSections.push(e);
                    var n = _o.getPendingEmbeds(e.el);
                    if (0 < n.length && (i.embedSections.push(e), wo(t, void 0, void 0, function() {
                            return ko(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, _o.loadEmbeds(this.app, this.view.file, n, !0)];
                                    case 1:
                                        return t.sent(), this.embedSections.remove(e), this.recompute(e), [2]
                                }
                            })
                        })), 10 <= r) return "break"
                }
            }, i = this, o = 0, a = e; o < a.length && "break" !== n(u = a[o]); o++);
        var s = r < 10;
        if (s && 0 < this.mathSections.length) {
            MathJax.startup.document.clear(), MathJax.startup.document.updateDocument();
            for (var c = 0, l = this.mathSections; c < l.length; c++) {
                var u = l[c];
                this.recompute(u)
            }
            this.mathSections = []
        } else {
            for (var h = 0, p = e; h < p.length; h++) !(u = p[h]).computed && u.rendered && u.compute();
            if (this.lastRender = Date.now(), s) {
                if (0 < this.embedSections.length) return;
                if (this.rendered)
                    for (var f = 0, d = this.rendered; f < d.length; f++)(0, d[f])();
                this.rendered = null
            } else this.queueRender()
        }
    }, _o.prototype.onRendered = function(t) {
        this.rendered ? this.rendered.push(t) : t()
    }, _o.prototype.recompute = function(t) {
        var e = this.sections,
            n = e.indexOf(t);
        if (-1 !== n) {
            for (var r = n; r < e.length; r++) e[r].resetCompute();
            this.queueRender()
        }
    }, _o.prototype.onResize = function() {
        for (var t = 0, e = this.sections; t < e.length; t++) e[t].resetCompute();
        this.queueRender()
    }, _o.prototype.onScroll = function() {
        this.scrolling ? this.scrolling = !1 : Date.now() - this.lastRender < 100 || this.view.onMarkdownScroll()
    }, _o.prototype.getScroll = function() {
        var t = this.previewEl,
            e = this.sections;
        if (0 === e.length) return null;
        for (var s = t.scrollTop, n = function(t, e, n, r) {
                var i = e / r,
                    o = s - t,
                    a = Math.floor(o / i);
                return {
                    line: n += a,
                    percent: o / i - a
                }
            }, r = 0, i = 0; i < e.length - 1; i++) {
            var o = e[i],
                a = e[i + 1];
            if (!a.computed) return null;
            var c = o.top;
            if (0 === i && (c = 0), !(s > a.top)) {
                var l = o.lines;
                return n(c, a.top - c, r, l)
            }
            r += o.lines
        }
        var u = e.last(),
            h = u.top;
        return n(h, t.scrollHeight - h, r, u.lines)
    }, _o.prototype.applyScroll = function(t, o) {
        if (t) {
            var a = t.line,
                s = t.percent;
            this.scrolling = !0;
            for (var c = this.previewEl, l = this.sections, u = 0, e = function(t) {
                    var e = l[t],
                        n = l[t + 1];
                    if (!e.computed) return {
                        value: void 0
                    };
                    if (u + e.lines <= a) return u += e.lines, "continue";
                    var r = 0 === t ? 0 : e.top,
                        i = ((n ? n.top : c.scrollHeight) - r) / e.lines;
                    return c.scrollTop = r + i * (a - u + s), o && (e.el.addClass("mod-highlighted"), setTimeout(function() {
                        e.el.removeClass("mod-highlighted")
                    }, 3e3)), {
                        value: void 0
                    }
                }, n = 0; n < l.length; n++) {
                var r = e(n);
                if ("object" == typeof r) return r.value
            }
        }
    }, _o.getPendingEmbeds = function(t) {
        return t.findAll(".internal-embed:not(.is-loaded)")
    }, _o.getMathBlocks = function(t) {
        return t.findAll(".math")
    }, _o.renderMath = function(t) {
        for (var e = _o.getMathBlocks(t), n = 0, r = e; n < r.length; n++) {
            var i = r[n],
                o = Object(En.unescapeHtml)(i.innerHTML);
            i.empty();
            var a = MathJax.tex2chtml(o, {
                display: i.classList.contains("math-block")
            });
            i.appendChild(a)
        }
        return 0 < e.length
    }, _o.loadEmbeds = function(o, a, s, c) {
        return wo(this, void 0, Promise, function() {
            var e, n, r, i;
            return ko(this, function(t) {
                switch (t.label) {
                    case 0:
                        e = 0, n = s, t.label = 1;
                    case 1:
                        return e < n.length ? (r = n[e], i = r.getAttribute("src"), [4, Hi.load(o, i, a.path, r, c)]) : [3, 4];
                    case 2:
                        t.sent(), t.label = 3;
                    case 3:
                        return e++, [3, 1];
                    case 4:
                        return [2]
                }
            })
        })
    }, _o.displayInEl = function(a, s, c, l, u, h, p, f) {
        return void 0 === u && (u = -1), void 0 === h && (h = -1), wo(this, void 0, Promise, function() {
            var e, n, r, i, o;
            return ko(this, function(t) {
                switch (t.label) {
                    case 0:
                        return e = l.createEl("div", {
                            cls: "markdown-embed"
                        }), c && -1 === u && e.createEl("div", {
                            cls: "markdown-embed-title",
                            text: a.basename
                        }), e.createEl("div", {
                            cls: "markdown-embed-link"
                        }, function(t) {
                            We(t, me, 20), t.setAttribute("aria-label", "Open link"), t.onClickEvent(function(t) {
                                if (0 === t.button || 1 === t.button) {
                                    t.preventDefault(), t.stopPropagation();
                                    var e = dn.isModifier(t, nn);
                                    s.workspace.openLinkText(p, f, e || 1 === t.button)
                                }
                            })
                        }), n = e.createEl("div", {
                            cls: "markdown-embed-content"
                        }), [4, s.vault.cachedRead(a)];
                    case 1:
                        if ((r = t.sent()).length <= 1 && !c) return [2, null];
                        if (-1 !== u || -1 !== h) {
                            if (i = r.split("\n"), (-1 === u || u < 0) && (u = 0), (-1 === h || h > i.length) && (h = i.length), h <= u) return [2, null];
                            i = i.slice(u, h), r = i.join("\n")
                        }
                        return n.innerHTML = bo(s.parser.md.render(r)), Prism.highlightAllUnder(n), _o.renderMath(n) && (MathJax.startup.document.clear(), MathJax.startup.document.updateDocument()), o = _o.getPendingEmbeds(e), [4, _o.loadEmbeds(s, a, o, !1)];
                    case 2:
                        return t.sent(), [2, e]
                }
            })
        })
    }, _o);

    function _o(t) {
        var r = this;
        this.previewEl = null, this.md = null, this.sections = [], this.mathSections = [], this.embedSections = [], this.queuedRender = !1, this.lastText = "", this.text = "", this.rendered = null, this.lastRender = 0, this.scrolling = !1, this.view = t, this.app = t.app, this.md = this.app.parser.md;
        var e = this.previewEl = t.contentEl.createEl("div", {
            cls: "markdown-preview-view"
        });
        e.on("mouseover", ".internal-link", this.onPreviewInternalLinkMouseover.bind(this)), e.on("click", ".internal-link", this.onInternalLinkClick.bind(this)), e.on("click", ".external-link", this.onExternalLinkClick.bind(this)), e.on("auxclick", ".internal-link", this.onInternalLinkClick.bind(this)), e.on("click", ".tag", function(t, e) {
            t.preventDefault();
            var n = e.getText();
            r.app.openGlobalSearch(n)
        }), e.on("click", ".task-list-item-checkbox", this.updateCheckbox.bind(this)), e.addEventListener("scroll", this.onScroll.bind(this)), this.updateOptions()
    }
    var So, Lo, Mo, Ao, To, Oo = function() {
            return (Oo = Object.assign || function(t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }).apply(this, arguments)
        },
        Do = window.CodeMirror,
        Po = /[^\\][$|]/,
        Fo = /^(?:[*\-+]|^[0-9]+([.)]))\s+/,
        zo = /^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i,
        Io = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        Ro = /^\.{0,2}\/[^\>\s]+/,
        Ho = /^(?:[^\u2000-\u206F\u2E00-\u2E7F'!"#$%&()*+,.:;<=>?@^`{|}~\/\[\]\\\s])+/;
    (Mo = Lo = Lo || {})[Mo.NONE = 0] = "NONE", Mo[Mo.NORMAL = 1] = "NORMAL", Mo[Mo.WITH_SPACE = 2] = "WITH_SPACE", (To = Ao = Ao || {})[To.NONE = 0] = "NONE", To[To.SIMPLE = 1] = "SIMPLE", To[To.NORMAL = 2] = "NORMAL";
    var No, qo, Bo, jo, Vo = /^\s*[^\|].*?\|.*[^|]\s*$/,
        Go = /^\s*[^\|].*\|/,
        Uo = /^\s*\|[^\|]+\|.+\|\s*$/,
        Wo = /^\s*\|/,
        Ko = /^\s*-+\s*:\s*$/,
        $o = /^\s*:\s*-+\s*$/,
        Zo = /^\s*:\s*-+\s*:\s*$/,
        Yo = /^\s*-+\s*$/;
    (qo = No = No || {})[qo.NONE = 0] = "NONE", qo[qo.FRONT_MATTER = 1] = "FRONT_MATTER", qo[qo.FRONT_MATTER_END = 2] = "FRONT_MATTER_END", (jo = Bo = Bo || {})[jo.NONE = 0] = "NONE", jo[jo.BARELINK = 1] = "BARELINK", jo[jo.FOOTREF = 2] = "FOOTREF", jo[jo.NORMAL = 3] = "NORMAL", jo[jo.FOOTNOTE = 4] = "FOOTNOTE", jo[jo.MAYBE_FOOTNOTE_URL = 5] = "MAYBE_FOOTNOTE_URL", jo[jo.BARELINK2 = 6] = "BARELINK2", jo[jo.FOOTREF2 = 7] = "FOOTREF2", jo[jo.INTERNAL_LINK = 8] = "INTERNAL_LINK", jo[jo.EMBED = 9] = "EMBED";
    var Jo = ((So = {})[Bo.BARELINK] = "hmd-barelink", So[Bo.BARELINK2] = "hmd-barelink2", So[Bo.FOOTREF] = "hmd-barelink footref", So[Bo.FOOTNOTE] = "hmd-footnote line-HyperMD-footnote", So[Bo.FOOTREF2] = "hmd-footref2", So[Bo.INTERNAL_LINK] = "hmd-internal-link", So[Bo.EMBED] = "hmd-embed", So);

    function Xo(t) {
        t.hmdTable = Ao.NONE, t.hmdTableColumns = [], t.hmdTableID = null, t.hmdTableCol = t.hmdTableRow = 0
    }
    var Qo = /^\s+((\d+[).]|[-*+])\s+)?/,
        ta = {
            hr: "line-HyperMD-hr line-background-HyperMD-hr-bg hr",
            list1: "list-1",
            list2: "list-2",
            list3: "list-3",
            code: "inline-code",
            hashtag: "hashtag meta"
        };
    window.CodeMirror.defineMode("hypermd", function(N, t) {
        var q = {
            front_matter: !0,
            math: !0,
            table: !0,
            toc: !0,
            orgModeMarkup: !0,
            hashtag: !0,
            fencedCodeBlockHighlighting: !0,
            name: "markdown",
            highlightFormatting: !0,
            taskLists: !0,
            strikethrough: !0,
            emoji: !0,
            highlight: !0,
            tokenTypeOverrides: ta
        };
        Object.assign(q, t), q.tokenTypeOverrides !== ta && (q.tokenTypeOverrides = Object.assign({}, ta, q.tokenTypeOverrides)), q.name = "markdown";
        var B = {
                htmlBlock: null
            },
            j = Do.getMode(N, q),
            e = Oo({}, j);

        function o(t, e) {
            var n = e.hmdInnerExitChecker(t, e),
                r = e.hmdInnerStyle,
                i = (!n || !n.skipInnerMode) && e.hmdInnerMode.token(t, e.hmdInnerState) || "";
            return r && (i += " " + r), n && (n.style && (i += " " + n.style), n.endPos && (t.pos = n.endPos), e.hmdInnerExitChecker = null, e.hmdInnerMode = null, e.hmdInnerState = null, e.hmdOverride = null), i.trim() || null
        }

        function V(n) {
            return {
                token: function(t) {
                    var e = t.string.indexOf(n, t.start);
                    return -1 === e ? t.skipToEnd() : 0 === e ? t.pos += n.length : (t.pos = e, "\\" === t.string.charAt(e - 1) && t.pos++), null
                }
            }
        }

        function G(n, r) {
            return r = r || {},
                function(t, e) {
                    return t.string.substr(t.start, n.length) === n ? (r.endPos = t.start + n.length, r) : null
                }
        }

        function U(t, e, n, r) {
            if ("string" == typeof n && (n = Do.getMode(N, n)), !(n && "null" !== n.name || (n = "endTag" in r ? V(r.endTag) : "function" == typeof r.fallbackMode && r.fallbackMode()))) throw new Error("no mode");
            e.hmdInnerExitChecker = "endTag" in r ? G(r.endTag) : r.exitChecker, e.hmdInnerStyle = r.style, e.hmdInnerMode = n, e.hmdOverride = o, e.hmdInnerState = Do.startState(n);
            var i = r.style || "";
            return r.skipFirstToken || (i += " " + n.token(t, e.hmdInnerState)), i.trim()
        }
        return e.startState = function() {
            var t = j.startState();
            return Xo(t), t.hmdOverride = null, t.hmdInnerExitChecker = null, t.hmdInnerMode = null, t.hmdLinkType = Bo.NONE, t.hmdNextMaybe = q.front_matter ? No.FRONT_MATTER : No.NONE, t.hmdNextState = null, t.hmdNextStyle = null, t.hmdNextPos = null, t.hmdHashtag = Lo.NONE, t
        }, e.copyState = function(t) {
            for (var e = j.copyState(t), n = 0, r = ["hmdLinkType", "hmdNextMaybe", "hmdTable", "hmdTableID", "hmdTableCol", "hmdTableRow", "hmdOverride", "hmdInnerMode", "hmdInnerStyle", "hmdInnerExitChecker", "hmdNextPos", "hmdNextState", "hmdNextStyle", "hmdHashtag"]; n < r.length; n++) {
                var i = r[n];
                e[i] = t[i]
            }
            return e.hmdTableColumns = t.hmdTableColumns.slice(0), t.hmdInnerMode && (e.hmdInnerState = Do.copyState(t.hmdInnerMode, t.hmdInnerState)), e
        }, e.blankLine = function(t) {
            var e, n = t.hmdInnerMode;
            return n ? n.blankLine && (e = n.blankLine(t.hmdInnerState)) : e = j.blankLine(t), e = e || "", -1 === t.code && (e += " line-HyperMD-codeblock line-background-HyperMD-codeblock-bg"), Xo(t), e.trim() || null
        }, e.indent = function(t, e) {
            var n = t.hmdInnerMode || j,
                r = n.indent;
            return "function" == typeof r ? r.apply(n, arguments) : Do.Pass
        }, e.innerMode = function(t) {
            return t.hmdInnerMode ? {
                mode: t.hmdInnerMode,
                state: t.hmdInnerState
            } : j.innerMode(t)
        }, e.token = function(t, e) {
            if (e.hmdOverride) return e.hmdOverride(t, e);
            if (e.hmdNextMaybe === No.FRONT_MATTER) {
                if ("---" === t.string) return e.hmdNextMaybe = No.FRONT_MATTER_END, U(t, e, "yaml", {
                    style: "hmd-frontmatter",
                    fallbackMode: function() {
                        return V("---")
                    },
                    exitChecker: function(t, e) {
                        return "---" === t.string ? (e.hmdNextMaybe = No.NONE, {
                            endPos: 3
                        }) : null
                    }
                });
                e.hmdNextMaybe = No.NONE
            }
            var n, r = e.f === B.htmlBlock,
                i = -1 === e.code,
                o = 0 === t.start,
                a = e.linkText,
                s = e.linkHref,
                c = !(i || r),
                l = c && !(e.code || e.indentedCode || e.linkHref),
                u = "";
            if (c) {
                if (q.math && l) {
                    var h = t.match(/^(\$)[^\s$]/, !1),
                        p = t.match(/^(\${2})/, !1),
                        f = h ? "$" : "$$",
                        d = t.string.slice(t.pos),
                        v = h && d.match(/[^\s\\]\$/);
                    if (v || p) {
                        var g = Do.getMode(N, {
                                name: "stex"
                            }),
                            m = "stex" !== g.name;
                        return u += U(t, e, g, {
                            style: "math",
                            skipFirstToken: m,
                            fallbackMode: function() {
                                return V(f)
                            },
                            exitChecker: G(f, {
                                style: "formatting formatting-math formatting-math-end math-"
                            })
                        }), v ? (m && (t.pos += h[1].length), u += " formatting formatting-math formatting-math-begin") : (m && (t.pos += p[1].length), u += " formatting formatting-math formatting-math-begin math-block")
                    }
                }
                if (l)
                    if (e.internalLink) e.hmdLinkType = Bo.INTERNAL_LINK, e.internalLink = !1;
                    else if (n = t.match(/^\[\[.+\]\]/, !1)) e.internalLink = !0, t.pos += 1, u += " formatting-link";
                else if (e.hmdLinkType === Bo.INTERNAL_LINK && t.match(/^\]\]/)) return e.hmdLinkType = Bo.NONE, e.linkText = !1, u += " formatting-link";
                if (o && q.orgModeMarkup && (n = t.match(/^\#\+(\w+\:?)\s*/))) return t.eol() || (e.hmdOverride = function(t, e) {
                    return t.skipToEnd(), e.hmdOverride = null, "string hmd-orgmode-markup"
                }), "meta formatting-hmd-orgmode-markup hmd-orgmode-markup line-HyperMD-orgmode-markup";
                if (o && q.toc && t.match(/^\[TOCM?\]\s*$/i)) return "meta line-HyperMD-toc hmd-toc";
                l && (e.hmdLinkType || !t.match(zo) && !t.match(Io) || (u += " url"))
            }
            e.hmdNextState ? (t.pos = e.hmdNextPos, u += " " + (e.hmdNextStyle || ""), Object.assign(e, e.hmdNextState), e.hmdNextState = null, e.hmdNextStyle = null, e.hmdNextPos = null) : u += " " + (j.token(t, e) || ""), e.hmdHashtag !== Lo.NONE && (u += " " + q.tokenTypeOverrides.hashtag), !B.htmlBlock && e.htmlState && (B.htmlBlock = e.f);
            var y = e.f === B.htmlBlock,
                b = -1 === e.code;
            c = c && !(y || b), (l = l && c && !(e.code || e.indentedCode || e.linkHref)) && (n = t.current().match(Po)) && (t.pos = t.start + n.index + 1);
            var w = t.current();
            if (y != r && (y ? (u += " hmd-html-begin", B.htmlBlock = e.f) : u += " hmd-html-end"), (i || b) && (e.localMode && i || (u = u.replace("inline-code", "")), u += " line-HyperMD-codeblock line-background-HyperMD-codeblock-bg", b != i && (b ? i || (u += " line-HyperMD-codeblock-begin line-background-HyperMD-codeblock-begin-bg") : u += " line-HyperMD-codeblock-end line-background-HyperMD-codeblock-end-bg")), c) {
                var k = e.hmdTable;
                if (o && k)(k == Ao.SIMPLE ? Go : Wo).test(t.string) ? (e.hmdTableCol = 0, e.hmdTableRow++) : Xo(e);
                if (o && e.header && (/^(?:---+|===+)\s*$/.test(t.string) && e.prevLine && e.prevLine.header ? u += " line-HyperMD-header-line line-HyperMD-header-line-" + e.header : u += " line-HyperMD-header line-HyperMD-header-" + e.header), e.indentedCode && (u += " hmd-indented-code"), e.quote) {
                    if (t.eol() && (u += " line-HyperMD-quote line-HyperMD-quote-" + e.quote, /^ {0,3}\>/.test(t.string) || (u += " line-HyperMD-quote-lazy")), o && (n = w.match(/^\s+/))) return t.pos = n[0].length, (u += " hmd-indent-in-quote").trim();
                    /^>\s+$/.test(w) && ">" != t.peek() && (t.pos = t.start + 1, w = ">", e.hmdOverride = function(t, e) {
                        return t.match(Qo), e.hmdOverride = null, "hmd-indent-in-quote line-HyperMD-quote line-HyperMD-quote-" + e.quote
                    })
                }
                var E = (e.listStack[e.listStack.length - 1] || 0) + 3,
                    C = o && /^\s+$/.test(w) && (!1 !== e.list || t.indentation() <= E),
                    x = e.list && /formatting-list/.test(u);
                if (x || C && (!1 !== e.list || t.match(Fo, !1))) {
                    var _ = e.listStack && e.listStack.length || 0;
                    if (C) {
                        if (t.match(Fo, !1)) !1 === e.list && _++;
                        else {
                            for (; 0 < _ && t.pos < e.listStack[_ - 1];) _--;
                            if (!_) return u.trim() || null;
                            u += " line-HyperMD-list-line-nobullet line-HyperMD-list-line line-HyperMD-list-line-" + _
                        }
                        u += " hmd-list-indent hmd-list-indent-" + _
                    } else x && (u += " line-HyperMD-list-line line-HyperMD-list-line-" + _)
                }
                if (a !== e.linkText && (a || e.internalLink ? (e.hmdLinkType in Jo && (u += " " + Jo[e.hmdLinkType]), e.hmdLinkType === Bo.FOOTNOTE ? e.hmdLinkType = Bo.MAYBE_FOOTNOTE_URL : e.hmdLinkType = Bo.NONE) : (n = t.match(/^([^\]]+)\](\(| ?\[|\:)?/, !1)) ? n[2] ? ":" === n[2] ? e.hmdLinkType = Bo.FOOTNOTE : "[" !== n[2] && " [" !== n[2] || "]" !== t.string.charAt(t.pos + n[0].length) ? e.hmdLinkType = Bo.NORMAL : e.hmdLinkType = Bo.BARELINK2 : "^" === n[1].charAt(0) ? e.hmdLinkType = Bo.FOOTREF : e.hmdLinkType = Bo.BARELINK : e.hmdLinkType = Bo.BARELINK), s !== e.linkHref && (s ? e.hmdLinkType && (u += " " + Jo[e.hmdLinkType], e.hmdLinkType = Bo.NONE) : "[" === w && "]" !== t.peek() && (e.hmdLinkType = Bo.FOOTREF2)), e.hmdLinkType !== Bo.NONE && (e.hmdLinkType in Jo && (u += " " + Jo[e.hmdLinkType]), e.hmdLinkType === Bo.MAYBE_FOOTNOTE_URL && (/^(?:\]\:)?\s*$/.test(w) || (zo.test(w) || Ro.test(w) ? u += " hmd-footnote-url" : u = u.replace("string url", ""), e.hmdLinkType = Bo.NONE))), /formatting-escape/.test(u) && 1 < w.length) {
                    var S = w.length - 1,
                        L = u.replace("formatting-escape", "escape") + " hmd-escape-char";
                    return e.hmdOverride = function(t, e) {
                        return t.pos += S, e.hmdOverride = null, L.trim()
                    }, u += " hmd-escape-backslash", t.pos -= S, u
                }
                if (!u.trim() && q.table) {
                    var M = !1;
                    if ("|" === w.charAt(0) && (t.pos = t.start + 1, w = "|", M = !0), M) {
                        if (!k) {
                            Vo.test(t.string) ? k = Ao.SIMPLE : Uo.test(t.string) && (k = Ao.NORMAL);
                            var A = void 0;
                            if (k) {
                                var T = t.lookAhead(1);
                                if (k === Ao.NORMAL ? Uo.test(T) ? T = T.replace(/^\s*\|/, "").replace(/\|\s*$/, "") : k = Ao.NONE : k === Ao.SIMPLE && (Vo.test(T) || (k = Ao.NONE)), k) {
                                    A = T.split("|");
                                    for (var O = 0; O < A.length; O++) {
                                        var D = A[O];
                                        if (Ko.test(D)) D = "right";
                                        else if ($o.test(D)) D = "left";
                                        else if (Zo.test(D)) D = "center";
                                        else {
                                            if (!Yo.test(D)) {
                                                k = Ao.NONE;
                                                break
                                            }
                                            D = "default"
                                        }
                                        A[O] = D
                                    }
                                }
                            }
                            k && (e.hmdTable = k, e.hmdTableColumns = A, e.hmdTableID = "T" + t.lineOracle.line, e.hmdTableRow = e.hmdTableCol = 0)
                        }
                        if (k) {
                            var P = e.hmdTableColumns.length - 1;
                            if (k === Ao.NORMAL && (0 === e.hmdTableCol && /^\s*\|$/.test(t.string.slice(0, t.pos)) || t.match(/^\s*$/, !1))) u += " hmd-table-sep hmd-table-sep-dummy";
                            else if (e.hmdTableCol < P) {
                                D = e.hmdTableRow;
                                var F = e.hmdTableCol++;
                                0 == F && (u += " line-HyperMD-table_" + e.hmdTableID + " line-HyperMD-table-" + k + " line-HyperMD-table-row line-HyperMD-table-row-" + D), u += " hmd-table-sep hmd-table-sep-" + F
                            }
                        }
                    }
                }
                if (k && 1 === e.hmdTableRow && /emoji/.test(u) && (u = ""), l && "<" === w) {
                    var z = null;
                    if (t.match(/^\![A-Z]+/) ? z = ">" : t.match("?") ? z = "?>" : t.match("![CDATA[") && (z = "]]>"), null != z) return U(t, e, null, {
                        endTag: z,
                        style: (u + " comment hmd-cdata-html").trim()
                    })
                }
                if (q.hashtag && l) switch (e.hmdHashtag) {
                    case Lo.NONE:
                        if ("#" === w && !e.linkText && !e.image && (o || /^\s*$/.test(t.string.charAt(t.start - 1)))) {
                            var I = t.string.slice(t.pos).replace(/\\./g, "");
                            if (n = Ho.exec(I))
                                for (new RegExp("^[^\\d" + Ta + "]?[^" + Ta + "]*$").test(n[0]) ? e.hmdHashtag = Lo.NORMAL : e.hmdHashtag = Lo.NONE, I = I.slice(n[0].length);;) {
                                    if ("#" === I[0] && (1 === I.length || !Ho.test(I[1]))) {
                                        e.hmdHashtag = Lo.WITH_SPACE;
                                        break
                                    }
                                    if (!(n = I.match(/^\s+/)) || !(n = (I = I.slice(n[0].length)).match(Ho))) break;
                                    I = I.slice(n[0].length)
                                }
                            e.hmdHashtag && (u += " formatting formatting-hashtag hashtag-begin " + q.tokenTypeOverrides.hashtag)
                        }
                        break;
                    case Lo.NORMAL:
                        var R = !1;
                        if (!/formatting/.test(u) && !/^\s*$/.test(w)) {
                            n = w.match(Ho);
                            var H = w.length - (n ? n[0].length : 0);
                            0 < H && (t.backUp(H), R = !0)
                        }(R = (R = R || t.eol()) || !Ho.test(t.peek())) && (u += " hashtag-end", e.hmdHashtag = Lo.NONE);
                        break;
                    case Lo.WITH_SPACE:
                        "#" === w && (u = u.replace(/\sformatting-header(?:-\d+)?/g, ""), u += " formatting formatting-hashtag hashtag-end", e.hmdHashtag = Lo.NONE)
                }
            }
            return u.trim() || null
        }, e
    }, "hypermd"), Do.defineMIME("text/x-hypermd", "hypermd");
    var ea = (na.prototype.setSuggestions = function(t) {
        var e = this.suggestEl;
        e.empty();
        var n = [];
        if (t) {
            for (var r = 0, i = t; r < i.length; r++) {
                var o = i[r],
                    a = e.createEl("div", {
                        cls: "suggestion-item"
                    });
                this.chooser.createSuggestion(o, a), n.push(a)
            }
            this.checkEmptyState ? this.checkEmptyState(t) && e.createEl("div", {
                cls: "suggestion-empty",
                text: this.emptyStateMessage
            }) : 0 === t.length && this.chooser.isOpen && this.chooser.close()
        }
        this.values = t, this.suggestions = n, this.setSelectedItem(0)
    }, na.prototype.setSelectedItem = function(t, e) {
        void 0 === e && (e = !1);
        var n = this.suggestions;
        if (0 !== n.length) {
            t < 0 ? t = n.length - 1 : t >= n.length && (t = 0);
            var r = n[this.selectedItem];
            r && r.removeClass("is-selected"), this.selectedItem = t;
            var i = n[this.selectedItem];
            i && (i.addClass("is-selected"), e && i.scrollIntoView(!1))
        }
    }, na.prototype.onSuggestionClick = function(t, e) {
        this.app.keymap.updateModifiers(t);
        var n = this.suggestions.indexOf(e);
        this.setSelectedItem(n), this.useSuggested(), t.preventDefault()
    }, na.prototype.onSuggestionMouseover = function(t, e) {
        var n = this.suggestions.indexOf(e);
        this.setSelectedItem(n)
    }, na.prototype.useSuggested = function(t) {
        var e = this.values[this.selectedItem];
        e && this.chooser.onSelectSuggestion(e, t)
    }, na);

    function na(t, e, n, r, i, o) {
        var a = this;
        void 0 === i && (i = null), void 0 === o && (o = "No notes found."), this.app = t, this.chooser = e, this.scope = r, this.checkEmptyState = i, this.emptyStateMessage = o, this.suggestEl = n, this.values = [], this.suggestions = [], this.selectedItem = 0, this.suggestEl.on("click", ".suggestion-item", this.onSuggestionClick.bind(this)), this.suggestEl.on("mousemove", ".suggestion-item", this.onSuggestionMouseover.bind(this)), this.scope.registerKey([], "ArrowUp", function() {
            if (a.chooser.isOpen) return a.setSelectedItem(a.selectedItem - 1, !0), !1
        }), this.scope.registerKey([], "ArrowDown", function() {
            if (a.chooser.isOpen) return a.setSelectedItem(a.selectedItem + 1, !0), !1
        }), this.scope.registerKey([], "Enter", function() {
            if (a.chooser.isOpen) return a.useSuggested(), !1
        })
    }
    var ra = (ia.prototype.trigger = function(t) {
        this.isOpen = !0;
        var e = this.getMatchedSuggestions(t);
        return this.chooser.setSuggestions(e), this.isOpen
    }, ia.prototype.position = function(t, e, n) {
        var r = this;
        if (!this.isOpen) return !1;
        var i = this.suggestEl,
            o = this.getContainerEl(),
            a = this.getAnchorEl();
        o.appendChild(i), i.style.left = "0", i.style.top = "0";
        var s = Object(A.n)(a, o);
        e += s.top, t += s.left, Object(A.p)({
            top: e,
            bottom: e + n,
            left: t,
            right: t
        }, this.suggestEl, {
            gap: 5,
            offsetParent: o
        }), this.autoDestroy = Object(A.g)(a, 500, function() {
            r.close()
        })
    }, ia.prototype.close = function() {
        this.autoDestroy && (this.autoDestroy(), this.autoDestroy = null), this.isOpen = !1, this.chooser.setSuggestions([]), this.suggestEl.detach()
    }, ia);

    function ia(t, e) {
        var n = this;
        this.isOpen = !1, this.app = t, this.scope = e, this.suggestEl = createEl("div", {
            cls: "suggestion-container"
        });
        var r = this.suggestEl.createEl("div", {
            cls: "suggestion"
        });
        this.chooser = new ea(t, this, r, this.scope), this.isOpen = !1, this.scope.registerKey([], "Escape", function() {
            if (n.isOpen) return n.close(), !1
        })
    }

    function oa(i, t, e) {
        function n(t) {
            var e = t.length,
                n = i.getRange(aa(s, -e), s),
                r = i.getRange(c, aa(c, e));
            return n === t && r === t
        }

        function r(t, e) {
            var n = e.length,
                r = e + a + e;
            i.replaceRange(r, aa(s, -t), aa(c, t)), i.setSelection(aa(s, n - t), aa(c, n - t))
        }
        var o = t.length,
            a = i.getSelection(),
            s = i.getCursor("from"),
            c = i.getCursor("to");
        if (1 === e) {
            if (n("***")) return r(3, "**");
            if (n("___")) return r(3, "__");
            if (!n("**") && !n("__") && (n("*") || n("_"))) return r(1, "")
        } else if (n("**") || n("__")) return r(2, "");
        i.replaceSelection("" + t + a + t), i.setSelection(aa(s, o), aa(c, o))
    }

    function aa(t, e) {
        return {
            line: t.line,
            ch: t.ch + e
        }
    }
    var sa, ca, la = ((sa = function(t, e) {
        return (sa = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            })(t, e)
    }, function(t, e) {
        function n() {
            this.constructor = t
        }
        sa(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    })(ua, ca = ra), ua.prototype.trigger = function(t, e) {
        return !!ca.prototype.trigger.call(this, t) && (this.textStart = e, this.textEnd = aa(e, t.length), this.app.keymap.pushScope(this.scope), !0)
    }, ua.prototype.close = function() {
        ca.prototype.close.call(this), this.app.keymap.popScope(this.scope)
    }, ua.prototype.getContainerEl = function() {
        return this.app.dom.appContainerEl
    }, ua.prototype.getAnchorEl = function() {
        return this.editor.editorEl
    }, ua);

    function ua(t) {
        var e = this,
            n = new pn(t.scope);
        return (e = ca.call(this, t.app, n) || this).editor = t, e
    }

    function ha(t) {
        for (var e = t.length, n = [], r = t.toLowerCase(), i = 0; i < e; ++i) n[i] = r.charCodeAt(i);
        return n
    }

    function pa(t) {
        for (var e = t.length, n = function(t) {
                for (var e = t.length, n = [], r = 0, i = !1, o = !1, a = 0; a < e; ++a) {
                    var s = t.charCodeAt(a),
                        c = 65 <= s && s <= 90,
                        l = c || 97 <= s && s <= 122 || 48 <= s && s <= 57,
                        u = c && !i || !o || !l;
                    i = c, o = l, u && (n[r++] = a)
                }
                return n
            }(t), r = [], i = n[0], o = 0, a = 0; a < e; ++a) a < i ? r[a] = i : (i = n[++o], r[a] = void 0 === i ? e : i);
        return r
    }

    function fa(t, e) {
        var n = function(t, e) {
            for (var n = t[0], r = ha(e), i = t.length, o = r.length, a = 0, s = 0, c = 0, l = [];;) {
                if (n === r[s]) {
                    if (l[c++] = s, ++a === i) break;
                    n = t[a]
                }
                if (o <= ++s) return null
            }
            var u = !1,
                h = [],
                p = a = 0,
                f = pa(e);
            if (s !== o)
                for (;;)
                    if (o <= s) {
                        if (a <= 0) break;
                        --a, s = f[h[--p]]
                    } else {
                        if (t[a] === r[s]) {
                            if (h[p++] = s, ++a === i) {
                                u = !0;
                                break
                            }++s
                        } else s = f[s]
                    } var d = void 0;
            d = u ? h : l;
            for (var v = 0, g = -1, m = 0; m < i; ++m) {
                var y = d[m];
                g !== y - 1 && (v -= y), g = y
            }
            return u || (v *= 1e3), {
                score: v -= o - i,
                indexes: d
            }
        }(t, e);
        if (!n) return null;
        for (var r = n.score, i = n.indexes, o = [], a = 0; a < i.length; a++) {
            var s = i[a];
            if (0 === o.length) o.push([s, s + 1]);
            else {
                var c = o[o.length - 1];
                c[1] < s ? o.push([s, s + 1]) : c[1] = s + 1
            }
        }
        return {
            matches: o,
            score: r
        }
    }

    function da(t, e, n) {
        if (n) {
            t.empty();
            for (var r = 0, i = 0; r < e.length && i < n.length; i++) {
                var o = n[i];
                o[0] !== r && t.appendText(e.substring(r, o[0])), t.createEl("span", {
                    cls: "suggestion-highlight",
                    text: e.substring(o[0], o[1])
                }), r = o[1]
            }
            r < e.length && t.appendText(e.substring(r))
        } else t.setText(e)
    }
    var va, ga, ma = ((va = function(t, e) {
        return (va = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            })(t, e)
    }, function(t, e) {
        function n() {
            this.constructor = t
        }
        va(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    })(ya, ga = la), ya.prototype.createSuggestion = function(t, e) {
        da(e, t.displayText, t.match ? t.match.matches : null)
    }, ya.prototype.onSelectSuggestion = function(t, e) {
        var n = this.editor.cmEditor.getDoc(),
            r = t.linktext,
            i = this.textEnd;
        "#" !== e && "|" !== e || (r += e), "]]" !== n.getRange(i, aa(i, 2)) && (r += "]]"), n.replaceRange(r, this.textStart, this.textEnd), "#" === e || "|" === e ? n.setCursor(aa(this.textStart, t.linktext.length + 1)) : "\t" === e ? n.setCursor(aa(this.textStart, t.linktext.length)) : n.setCursor(aa(this.textStart, t.linktext.length + 2)), this.close()
    }, ya.prototype.getMatchedSuggestions = function(t) {
        var e = this.app.metadataCache,
            n = Vt.parseLinktext(t),
            r = n.path,
            i = n.headings,
            o = n.originalHeading,
            a = this.editor.view.file;
        if (o) {
            var s = e.getLinktextDest(r, a.path);
            if (s) {
                var c = e.getFileCache(s.file);
                if (c && c.headings) {
                    var l = [];
                    t.endsWith("#") && i.push("");
                    var u = 0,
                        h = 0,
                        p = "#" + i.slice(0, i.length - 1).join("#");
                    p.endsWith("#") || (p += "#");
                    for (var f = 0, d = c.headings; f < d.length; f++) {
                        var v = d[f];
                        if (v.level <= h || u >= i.length) break;
                        var g = v.heading.toLowerCase();
                        if (u === i.length - 1) {
                            var m = fa(ha(i[u]), v.heading);
                            if ("" === i[u] || m) {
                                var y = new Array(v.level).fill("#").join("") + " ";
                                if (m)
                                    for (var b = y.length, w = 0, k = m.matches; w < k.length; w++) {
                                        var E = k[w];
                                        E[0] += b, E[1] += b
                                    }
                                l.push({
                                    displayText: y + v.heading,
                                    linktext: r + p + Vt.stripHeading(v.heading),
                                    match: m
                                })
                            }
                        } else g === i[u].toLowerCase() && (u++, h = v.level)
                    }
                    return l
                }
            }
        }
        var C = e.getLinkSuggestions(a),
            x = ha(r);
        return "" === t ? C : C.map(function(t) {
            return t.match = fa(x, t.displayText), t
        }).filter(function(t) {
            return t.match
        }).sort(function(t, e) {
            return e.match.score - t.match.score
        })
    }, ya);

    function ya(t) {
        var e = ga.call(this, t) || this;
        return e.suggestEl.createEl("div", {
            cls: "prompt-instructions"
        }, function(t) {
            t.createEl("div", {
                cls: "prompt-instruction"
            }, function(t) {
                t.createEl("span", {
                    cls: "prompt-instruction-command",
                    text: "Type #"
                }), t.createEl("span", {
                    text: "to link heading"
                })
            }), t.createEl("div", {
                cls: "prompt-instruction"
            }, function(t) {
                t.createEl("span", {
                    cls: "prompt-instruction-command",
                    text: "Type |"
                }), t.createEl("span", {
                    text: "to change display text"
                })
            })
        }), e.scope.registerKey(null, "#", function() {
            if (e.isOpen) return e.chooser.useSuggested("#"), !1
        }), e.scope.registerKey(null, "|", function() {
            if (e.isOpen) return e.chooser.useSuggested("|"), !1
        }), e.scope.registerKey([], "Tab", function() {
            if (e.isOpen) return e.chooser.useSuggested("\t"), !1
        }), e
    }
    var ba = (wa.prototype.show = function(t) {
        void 0 === t && (t = !1), this.isActive = !0, this.searchContainer.show(), this.searchInputEl.focus(), this.sourceView.app.keymap.pushScope(this.scope), t ? (this.parentContainer.removeClass("is-searching"), this.parentContainer.addClass("is-replacing")) : (this.parentContainer.removeClass("is-replacing"), this.parentContainer.addClass("is-searching")), this.searchContainer.toggleClass("mod-replace-mode", t)
    }, wa.prototype.hide = function() {
        this.isActive = !1, this.searchContainer.hide(), this.searchInputEl.value = "", this.searchInputEl.removeClass("mod-no-match"), this.parentContainer.removeClass("is-replacing"), this.parentContainer.removeClass("is-searching"), this.cmSearchCursor = null, this.sourceView.clearHighlights(), this.sourceView.app.keymap.popScope(this.scope)
    }, wa.prototype.onSearchInput = function() {
        this.cmSearchCursor = this.cmEditor.getSearchCursor(this.getQuery(), null, {
            caseFold: !0
        }), this.sourceView.clearHighlights();
        var t = this.cmSearchCursor.findNext();
        t && this.highlightFoundMatch(), this.searchInputEl.toggleClass("mod-no-match", !t)
    }, wa.prototype.findPrevious = function() {
        if (this.cmSearchCursor) {
            var t = this.cmEditor;
            this.sourceView.clearHighlights();
            var e = this.cmSearchCursor.findPrevious();
            if (!e) {
                var n = CodeMirror.Pos(t.getDoc().lastLine());
                this.cmSearchCursor = t.getSearchCursor(this.getQuery(), n, {
                    caseFold: !0
                }), e = this.cmSearchCursor.findPrevious()
            }
            e && this.highlightFoundMatch()
        }
    }, wa.prototype.findNextOrReplace = function() {
        if (this.cmSearchCursor) {
            var t = this.replaceInputEl.value;
            this.replaceInputEl === document.activeElement && "" !== t && this.cmSearchCursor.replace(t), this.findNext()
        }
    }, wa.prototype.replaceCurrentMatch = function() {
        if (this.cmSearchCursor) {
            var t = this.replaceInputEl.value;
            this.cmSearchCursor.replace(t), this.findNext()
        }
    }, wa.prototype.replaceAll = function() {
        var t = this.cmSearchCursor = this.cmEditor.getSearchCursor(this.getQuery(), null, {
            caseFold: !0
        });
        this.sourceView.clearHighlights();
        for (var e = this.replaceInputEl.value, n = t.findNext(); n;) t.replace(e, "searchReplace"), n = t.findNext()
    }, wa.prototype.findNext = function() {
        if (this.cmSearchCursor) {
            var t = this.cmEditor;
            this.sourceView.clearHighlights();
            var e = this.cmSearchCursor.findNext();
            e || (this.cmSearchCursor = t.getSearchCursor(this.getQuery(), null, {
                caseFold: !0
            }), e = this.cmSearchCursor.findNext()), e && this.highlightFoundMatch()
        }
    }, wa.prototype.searchAll = function() {
        this.cmSearchCursor = this.cmEditor.getSearchCursor(this.getQuery(), null, {
            caseFold: !0
        }), this.sourceView.clearHighlights();
        for (var t = null, e = this.cmSearchCursor.findNext(); e;) t = t || {
            from: this.cmSearchCursor.from(),
            to: this.cmSearchCursor.to()
        }, this.highlightFoundMatch(!1, !1), e = this.cmSearchCursor.findNext();
        t && this.cmEditor.scrollIntoView(t)
    }, wa.prototype.highlightFoundMatch = function(t, e) {
        var n = this.cmSearchCursor.from(),
            r = this.cmSearchCursor.to();
        this.sourceView.highlightSearchMatch(n, r, t, e)
    }, wa.prototype.goToNextInput = function(t) {
        this.searchInputEl === document.activeElement ? (this.replaceInputEl.focus(), t.preventDefault()) : this.replaceInputEl === document.activeElement && (this.searchInputEl.focus(), t.preventDefault())
    }, wa.prototype.getQuery = function() {
        return this.searchInputEl.value
    }, wa.prototype.onEnter = function(t) {
        this.searchInputEl !== document.activeElement && this.replaceInputEl !== document.activeElement || this.findNextOrReplace()
    }, wa);

    function wa(t, e, n) {
        var r = this;
        this.sourceView = null, this.scope = null, this.cmEditor = null, this.cmSearchCursor = null, this.parentContainer = null, this.searchContainer = null, this.searchInputEl = null, this.replaceInputEl = null, this.isActive = !1, this.sourceView = t, this.cmEditor = e, this.scope = new pn(t.scope), this.parentContainer = n;
        var i = this.searchContainer = n.createEl("div", {
                cls: "document-search-container"
            }),
            o = this.searchContainer.createEl("div", {
                cls: "document-search"
            });
        this.searchInputEl = o.createEl("input", {
            cls: "document-search-input",
            type: "text"
        });
        var a = o.createEl("div", {
            cls: "document-search-buttons",
            type: "text"
        });
        a.createEl("button", {
            cls: "document-search-button",
            text: "Prev"
        }, function(t) {
            t.setAttribute("aria-label", "Shift + F3"), t.setAttribute("aria-label-position", "top"), t.addEventListener("click", function(t) {
                t.preventDefault(), r.findPrevious()
            })
        }), a.createEl("button", {
            cls: "document-search-button",
            text: "Next"
        }, function(t) {
            t.setAttribute("aria-label", "Enter or F3"), t.setAttribute("aria-label-position", "top"), t.addEventListener("click", function(t) {
                t.preventDefault(), r.findNext()
            })
        }), a.createEl("button", {
            cls: "document-search-button",
            text: "All"
        }, function(t) {
            t.addEventListener("click", function(t) {
                t.preventDefault(), r.searchAll()
            })
        }), a.createEl("span", {
            cls: "document-search-close-button"
        }, function(t) {
            t.setAttribute("aria-label", "Exit search"), t.setAttribute("aria-label-position", "top"), t.addEventListener("click", function(t) {
                t.preventDefault(), r.hide()
            })
        }), this.searchInputEl.addEventListener("input", this.onSearchInput.bind(this));
        var s = this.searchContainer.createEl("div", {
            cls: "document-replace"
        });
        this.replaceInputEl = s.createEl("input", {
            cls: "document-replace-input",
            type: "text"
        });
        var c = s.createEl("div", {
            cls: "document-replace-buttons",
            type: "text"
        });
        c.createEl("button", {
            cls: "document-search-button",
            text: "Replace"
        }, function(t) {
            t.addEventListener("click", r.replaceCurrentMatch.bind(r)), t.setAttribute("aria-label", "Enter"), t.setAttribute("aria-label-position", "top")
        }), c.createEl("button", {
            cls: "document-search-button",
            text: "Replace all"
        }, function(t) {
            t.addEventListener("click", r.replaceAll.bind(r))
        }), i.hide(), this.scope.registerKey([on], "F3", this.findPrevious.bind(this)), this.scope.registerKey([], "F3", this.findNext.bind(this)), this.scope.registerKey([], "Enter", this.onEnter.bind(this)), this.scope.registerKey([], "Escape", this.hide.bind(this)), this.scope.registerKey([], "Tab", this.goToNextInput.bind(this)), this.scope.registerKey([on], "Tab", this.goToNextInput.bind(this))
    }
    var ka, Ea, Ca = ((ka = function(t, e) {
        return (ka = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            })(t, e)
    }, function(t, e) {
        function n() {
            this.constructor = t
        }
        ka(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    })(xa, Ea = la), xa.prototype.createSuggestion = function(t, e) {
        e.setText(t)
    }, xa.prototype.onSelectSuggestion = function(t) {
        this.editor.cmEditor.replaceRange(t + " ", this.textStart, this.textEnd), this.close()
    }, xa.prototype.getMatchedSuggestions = function(e) {
        var t = this.editor.app.metadataCache;
        return Object.keys(t.getTags()).filter(function(t) {
            return "" === e || t.toLowerCase().contains(e.toLowerCase())
        })
    }, xa);

    function xa() {
        return null !== Ea && Ea.apply(this, arguments) || this
    }
    var _a = window.require;

    function Sa(t) {
        return _a && _a(t)
    }

    function La(t) {
        var e = Sa("electron");
        e && t(e)
    }
    var Ma = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        Aa = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        Ta = "\\s.,\\/#!$%\\^&\\*;:{}=\\_`~()",
        Oa = "obsidian-search-match-highlight",
        Da = window.CodeMirror,
        Pa = (Fa.prototype.show = function() {
            this.editorEl.show()
        }, Fa.prototype.hide = function() {
            this.editorEl.hide(), this.closeSuggestion()
        }, Fa.prototype.clear = function() {
            var t = this.cmEditor.getDoc();
            t.setValue(""), t.clearHistory()
        }, Fa.prototype.get = function() {
            return this.cmEditor.getDoc().getValue()
        }, Fa.prototype.set = function(t, e) {
            var n = this.cmEditor,
                r = n.getDoc();
            if (e) r.setValue(t), r.clearHistory(), this.lastCursor = null;
            else {
                var i = n.getScrollInfo(),
                    o = n.getCursor("anchor"),
                    a = n.getCursor("head");
                r.setValue(t), r.setSelection(o, a), n.scrollTo(i.left, i.top)
            }
            this.ignoreNextChange = !0
        }, Fa.prototype.getEphemeralState = function(t) {
            var e = this.cmEditor;
            if (e.hasFocus()) {
                var n = e.getCursor("anchor"),
                    r = e.getCursor("head");
                t.cursor = {
                    from: {
                        line: n.line,
                        ch: n.ch
                    },
                    to: {
                        line: r.line,
                        ch: r.ch
                    }
                }
            }
        }, Fa.prototype.setEphemeralState = function(t) {
            var e = this.cmEditor,
                n = t.cursor;
            n && n.from && n.to ? (e.focus(), e.setSelection(n.from, n.to)) : t.focus && (this.lastCursor ? e.setCursor(this.lastCursor) : e.execCommand("goDocStart"), e.focus()), t.scroll && this.applyScroll(t.scroll);
            var r = this.cmEditor.getDoc();
            if (void 0 !== t.startPos && void 0 !== t.endPos) {
                var i = function(t, e, n) {
                    for (var r = t.lineCount(), i = 0, o = 0, a = t.lineSeparator(), s = {
                            from: null,
                            to: null
                        }, c = 0; c < r; c++) {
                        if (e < i + (o = t.getLine(c).length + a.length) && (s.from = {
                                ch: e - i,
                                line: c
                            }), n < i + o && (s.to = {
                                ch: n - i,
                                line: c
                            }), s.from && s.to) return s;
                        i += o
                    }
                    return null
                }(r, t.startPos, t.endPos);
                this.highlightSearchMatch(i.from, i.to)
            } else if (void 0 !== t.line && 0 <= t.line) {
                var o = t.line,
                    a = {
                        line: o,
                        ch: 0
                    },
                    s = {
                        line: o,
                        ch: r.getLine(o).length
                    };
                this.highlightSearchMatch(a, s), e.setSelection(s, s)
            }
        }, Fa.prototype.updateOptions = function() {
            var t = this.app.vault,
                e = this.cmEditor,
                n = t.getConfig(G);
            this.editorEl.toggleClass("is-readable-line-width", n);
            var r = "";
            t.getConfig(U) && (r += "()[]{}''\"\""), t.getConfig(W) && (r += "**__``"), r ? e.setOption("autoCloseBrackets", {
                pairs: r,
                explode: "",
                override: !0
            }) : e.setOption("autoCloseBrackets", !1);
            var i = t.getConfig(K);
            this.setupCmKeys(i);
            var o = t.getConfig($),
                a = t.getConfig(Z);
            if (o || a) {
                e.setOption("foldGutter", !0), e.setOption("gutters", ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]);
                var s = void 0;
                o && a ? s = new Da.fold.combine(Da.fold.indent, Da.fold.markdown) : o ? s = Da.fold.markdown : a && (s = Da.fold.indent), e.setOption("foldOptions", {
                    rangeFinder: s
                })
            } else e.setOption("foldGutter", !1), e.setOption("gutters", []), e.setOption("foldOptions", {});
            var c = t.getConfig(Y);
            e.setOption("lineNumbers", c);
            var l = t.getConfig(J);
            e.setOption("indentWithTabs", !!l);
            var u = t.getConfig(X);
            e.setOption("tabSize", u), e.setOption("indentUnit", u), t.getConfig(Q) ? e.setOption("keyMap", "vim") : e.setOption("keyMap", "default"), e.refresh()
        }, Fa.prototype.showSearch = function(t) {
            void 0 === t && (t = !1), this.search.show(t)
        }, Fa.prototype.highlightSearchMatch = function(t, e, n, r) {
            void 0 === n && (n = !0), void 0 === r && (r = !0);
            var i = this.cmEditor,
                o = i.getDoc();
            i.refresh(), r && this.clearHighlights(), o.markText(t, e, {
                className: Oa
            }), n && i.scrollIntoView({
                from: t,
                to: e
            }, i.getWrapperElement().offsetHeight / 4)
        }, Fa.prototype.clearHighlights = function() {
            for (var t = 0, e = this.cmEditor.getDoc().getAllMarks(); t < e.length; t++) {
                var n = e[t];
                n.className === Oa && n.clear()
            }
        }, Fa.prototype.onScroll = function() {
            this.updateSuggestionPosition(), this.scrolling ? this.scrolling = !1 : this.view.onMarkdownScroll()
        }, Fa.prototype.getScroll = function() {
            var t = this.cmEditor,
                e = t.getScrollInfo(),
                n = t.lineAtHeight(e.top, "local"),
                r = t.charCoords({
                    line: n,
                    ch: 0
                }, "local"),
                i = t.charCoords({
                    line: n + 1,
                    ch: 0
                }, "local"),
                o = r.top,
                a = i.top;
            return {
                line: n,
                percent: Math.max(0, (e.top - o) / (a - o))
            }
        }, Fa.prototype.applyScroll = function(t) {
            if (t) {
                var e = t.line,
                    n = t.percent;
                this.scrolling = !0;
                var r = this.cmEditor,
                    i = r.charCoords({
                        line: e,
                        ch: 0
                    }, "local"),
                    o = r.charCoords({
                        line: e + 1,
                        ch: 0
                    }, "local"),
                    a = i.top,
                    s = o.top;
                r.scrollTo(null, a + (s - a) * n)
            }
        }, Fa.prototype.attachCmEvents = function() {
            var o = this,
                c = this.cmEditor,
                a = Object(A.h)(this.triggerSuggestion.bind(this), 50),
                t = Object(A.h)(this.triggerSuggestion.bind(this), 50),
                s = Object(A.h)(function() {
                    return o.view.save()
                }, 2e3);
            c.on("changes", function(t, e) {
                for (var n = 0, r = e; n < r.length; n++)
                    if ("setValue" !== r[n].origin) {
                        s(), a();
                        var i = c.getValue();
                        return void o.view.triggerQuickPreview(i)
                    }
            }), c.on("cursorActivity", function() {
                o.saveCursor(), t(!0)
            }), c.on("focus", function() {
                o.clearHighlights(), o.saveCursor()
            }), c.on("paste", function(t, e) {
                o.handlePasteIntoEditor(e)
            }), c.on("drop", function(t, e) {
                o.handleDropIntoEditor(e)
            }), c.on("scroll", this.onScroll.bind(this)), c.on("refresh", function() {
                var t = c.getWrapperElement().find(".CodeMirror-measure");
                if (t.offsetParent) {
                    var e = t.createEl("span");
                    e.appendText("x");
                    for (var n = {}, r = 0, i = l; r < i.length; r++) {
                        var o = i[r];
                        n[o] = e.createEl("span", {
                            text: o
                        })
                    }
                    e.appendText("x");
                    for (var a = 0, s = l; a < s.length; a++) o = s[a], u[o] = n[o].getBoundingClientRect().width;
                    e.detach()
                }
            });
            for (var l = [" ", "*", "+", "-", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", ">"], u = {}, e = 0, n = l; e < n.length; e++) {
                var r = n[e];
                u[r] = 0
            }
            c.on("renderLine", function(t, e, n) {
                var r = (/^\s*([*+-]\s+|\d+\.\s+|>\s*|\[[ xX]]\s+)*/.exec(e.text) || [""])[0],
                    i = 0;
                if (r) {
                    for (var o = t.getOption("tabSize"), a = 0; a < r.length; a++) i += "\t" === r.charAt(a) ? o * u[" "] : u[r.charAt(a)] || u[" "];
                    n.style.textIndent = "-" + i + "px", n.style.paddingLeft = 4 + i + "px"
                }
            }), c.refresh()
        }, Fa.prototype.attachDomEvents = function() {
            var r = this;
            this.editorEl.on("click", ".cm-hashtag", function(t, e) {
                if (dn.isModifier(t, nn)) {
                    var n = e.getText();
                    n.startsWith("#") || (n = "#" + n), r.app.openGlobalSearch(n)
                }
            }), this.editorEl.on("mouseover", ".cm-hmd-internal-link", this.onInternalLinkMouseover.bind(this)), this.editorEl.on("click", ".cm-hmd-internal-link", this.onInternalLinkClick.bind(this)), this.editorEl.on("auxclick", ".cm-hmd-internal-link", this.onInternalLinkClick.bind(this)), this.editorEl.on("click", ".cm-url", function(e, n) {
                return Ma(r, void 0, void 0, function() {
                    return Aa(this, function(t) {
                        return dn.isModifier(e, nn) && window.open(n.getText()), [2]
                    })
                })
            })
        }, Fa.prototype.setupCmKeys = function(e) {
            var n = this,
                t = {
                    Up: this.passIfNoSuggestion.bind(this),
                    Down: this.passIfNoSuggestion.bind(this),
                    Enter: function(t) {
                        if (!n.isShowingSuggestion()) {
                            if (!e) return Da.Pass;
                            t.execCommand("newlineAndIndentContinueMarkdownList")
                        }
                    }
                };
            t[Je ? "Cmd-B" : "Ctrl-B"] = function(t) {
                oa(t.getDoc(), "**", 2)
            }, t[Je ? "Cmd-I" : "Ctrl-I"] = function(t) {
                oa(t.getDoc(), "*", 1)
            }, t[Je ? "Cmd-K" : "Ctrl-K"] = function(t) {
                var e, n, r, i;
                e = t.getDoc(), n = e.getSelection(), r = e.getCursor("from"), i = e.getCursor("to"), n ? (e.replaceSelection("[" + n + "]()"), e.setSelection(aa(r, n.length + 3))) : r.line === i.line && r.ch === i.ch && (e.replaceSelection("[]()"), e.setSelection(aa(r, 1)))
            }, e && (t[Je ? "Cmd-[" : "Ctrl-["] = function(t) {
                t.execCommand("indentLess"), t.execCommand("indentUnindentContinueMarkdownList")
            }, t[Je ? "Cmd-]" : "Ctrl-]"] = function(t) {
                t.execCommand("indentMore"), t.execCommand("indentUnindentContinueMarkdownList")
            }, t.Tab = "autoIndentMarkdownList", t["Shift-Tab"] = "autoUnindentMarkdownList"), t.End = "goLineRight", t.Home = "goLineLeftSmart", this.cmEditor.setOption("extraKeys", t)
        }, Fa.prototype.handlePasteIntoEditor = function(v) {
            return Ma(this, void 0, void 0, function() {
                var e, n, r, i, o, a, s, c, l, u, h, p, f, d = this;
                return Aa(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return v.clipboardData.getData("text/plain") ? [3, 6] : (e = null, La(function(t) {
                                e = t.remote.clipboard
                            }), e ? [4, e.readImage()] : [3, 5]);
                        case 1:
                            return (n = t.sent()) ? "data:image/png;base64," === n.toDataURL() ? [3, 3] : [4, this.saveBase64Image(n.toDataURL())] : [3, 5];
                        case 2:
                            return t.sent(), [3, 5];
                        case 3:
                            return r = "", "Windows" == Ye ? r = (r = e.read("FileNameW")) && r.replace(new RegExp(String.fromCharCode(0), "g"), "") : "MacOS" == Ye && (r = (r = e.read("public.file-url")) && r.replace("file://", "")), r ? [4, this.app.importLocalFile(r)] : [3, 5];
                        case 4:
                            (i = t.sent()) && (o = this.app.metadataCache.fileToLinktext(i, this.view.file.path), a = this.cmEditor, s = a.getCursor("from"), c = a.getCursor("to"), a.replaceRange("![[" + o + "]]", s, c)), t.label = 5;
                        case 5:
                            for (u in l = v.clipboardData.items) l.hasOwnProperty(u) && "file" === (h = l[u]).kind && h.type.startsWith("image/png") && (p = h.getAsFile(), (f = new FileReader).onload = function(e) {
                                return Ma(d, void 0, void 0, function() {
                                    return Aa(this, function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, this.saveBase64Image(e.target.result)];
                                            case 1:
                                                return t.sent(), [2]
                                        }
                                    })
                                })
                            }, f.readAsDataURL(p));
                            t.label = 6;
                        case 6:
                            return [2]
                    }
                })
            })
        }, Fa.prototype.handleDropIntoEditor = function(h) {
            return Ma(this, void 0, void 0, function() {
                var e, n, r, i, o, a, s, c, l, u = this;
                return Aa(this, function(t) {
                    switch (t.label) {
                        case 0:
                            if (e = h.dataTransfer, n = e.files, r = e.items, !(0 < n.length)) return [3, 5];
                            c = 0, t.label = 1;
                        case 1:
                            return c < n.length ? (i = n[c]).path ? [4, this.app.importLocalFile(i.path)] : [3, 3] : [3, 4];
                        case 2:
                            (o = t.sent()) && (a = this.app.metadataCache.fileToLinktext(o, this.view.file.path), (s = this.cmEditor.getDoc()).replaceSelection("![[" + a + "]]"), c < n.length - 1 && s.replaceSelection("\n\n")), t.label = 3;
                        case 3:
                            return c++, [3, 1];
                        case 4:
                            return [3, 6];
                        case 5:
                            if (0 < r.length)
                                for (c = 0; c < r.length; c++) "text/uri-list" === (l = r[c]).type && l.getAsString(function(t) {
                                    var e = E(m(t));
                                    p.contains(e) && u.cmEditor.getDoc().replaceSelection("![](" + t + ")")
                                });
                            t.label = 6;
                        case 6:
                            return [2]
                    }
                })
            })
        }, Fa.prototype.saveBase64Image = function(a) {
            return Ma(this, void 0, void 0, function() {
                var e, n, r, i, o;
                return Aa(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e = a.replace(/^data:image\/png;base64,/, ""), [4, this.app.saveBase64Png("Pasted image", e, this.view.file.path)];
                        case 1:
                            return (n = t.sent()) && (r = this.cmEditor, i = r.getCursor("from"), o = r.getCursor("to"), r.replaceRange("![[" + n + "]]", i, o)), [2]
                    }
                })
            })
        }, Fa.prototype.passIfNoSuggestion = function() {
            if (!this.isShowingSuggestion()) return Da.Pass
        }, Fa.prototype.isShowingSuggestion = function() {
            return this.showingSuggestion && this.showingSuggestion.isOpen
        }, Fa.prototype.onInternalLinkMouseover = function(t, e) {
            if (t.ctrlKey || t.metaKey) {
                var n = t.target,
                    r = Wt.b.getLinktext(n.getText());
                r && this.app.workspace.onLinkHover(e, r, this.view.file)
            }
        }, Fa.prototype.onInternalLinkClick = function(r) {
            return Ma(this, void 0, void 0, function() {
                var e, n;
                return Aa(this, function(t) {
                    if (r.preventDefault(), dn.isModifier(r, nn)) {
                        if (e = r.target, !(n = Wt.b.getLinktext(e.getText()))) return [2];
                        this.app.workspace.openLinkText(n, this.view.file.path, r.shiftKey || 1 === r.button)
                    }
                    return [2]
                })
            })
        }, Fa.prototype.showSuggestionPopup = function(t, e, n) {
            t.trigger(n, e) && (this.showingSuggestion = t, this.updateSuggestionPosition())
        }, Fa.prototype.updateSuggestionPosition = function() {
            if (this.isShowingSuggestion()) {
                var t = this.cmEditor,
                    e = this.showingSuggestion,
                    n = t.cursorCoords(e.textStart, "local"),
                    r = n.left,
                    i = n.top,
                    o = n.bottom,
                    a = t.getScrollInfo();
                e.position(r - a.left + 20, i - a.top + 20, o - i)
            }
        }, Fa.prototype.triggerSuggestion = function(t) {
            var e = this.cmEditor.getDoc(),
                n = e.getCursor("anchor"),
                r = e.getCursor("head");
            if (n.line === r.line && n.ch === r.ch) {
                var i = r.line,
                    o = {
                        line: i,
                        ch: 0
                    },
                    a = e.getRange(o, r),
                    s = a.lastIndexOf("[["),
                    c = a.lastIndexOf("]"),
                    l = a.lastIndexOf("|"),
                    u = new RegExp("(^|\\s)#[^0-9" + Ta + "]?[^" + Ta + "]*$", "g");
                if (-1 !== s && c < s && l < s) {
                    if (t) return;
                    var h = {
                            line: i,
                            ch: s + 2
                        },
                        p = e.getRange(h, r);
                    this.showSuggestionPopup(this.linkSuggestion, h, p)
                } else if (a.match(u)) {
                    if (t) return;
                    h = {
                        line: i,
                        ch: a.lastIndexOf("#")
                    }, p = e.getRange(h, r), this.showSuggestionPopup(this.tagSuggestion, h, p)
                } else this.closeSuggestion()
            }
        }, Fa.prototype.closeSuggestion = function() {
            this.linkSuggestion.close(), this.tagSuggestion.close(), this.showingSuggestion = null
        }, Fa.prototype.saveCursor = function() {
            var t = this.cmEditor;
            t.hasFocus() && (this.lastCursor = t.getCursor("anchor"))
        }, Fa.prototype.onDocumentClick = function() {
            this.linkSuggestion.close(), this.tagSuggestion.close(), this.clearHighlights()
        }, Fa.prototype.onResize = function() {
            this.cmEditor.refresh()
        }, Fa.prototype.getLinktextUnderCursor = function() {
            var t = "hmd-internal-link",
                e = this.cmEditor,
                n = e.getDoc().getCursor(),
                r = e.getLineTokens(n.line),
                i = e.getTokenAt(n, !0);
            if (i.type) {
                var o = i.type.contains(t),
                    a = i.type.contains("formatting-link") && ["[[", "]]"].contains(i.string);
                if (o || a) {
                    for (var s = "", c = !1, l = 0, u = r; l < u.length; l++) {
                        var h = u[l];
                        if (h.type && h.type.contains(t)) s += h.string;
                        else {
                            if (c) break;
                            s = ""
                        }
                        i.start === h.start && i.end === h.end && (c = !0)
                    }
                    return Wt.b.getLinktext(s)
                }
                return null
            }
        }, Fa.prototype.followLinkUnderCursor = function() {
            var t = this.getLinktextUnderCursor();
            t && this.app.workspace.openLinkText(t, this.view.file.path, !1)
        }, Fa.prototype.openLinkUnderCursorInNewLeaf = function() {
            var t = this.getLinktextUnderCursor();
            t && this.app.workspace.openLinkText(t, this.view.file.path, !0)
        }, Fa);

    function Fa(t) {
        this.cmEditor = null, this.scope = null, this.editorEl = null, this.showingSuggestion = null, this.search = null, this.ignoreNextChange = !1, this.lastCursor = null, this.scrolling = !1, this.view = t;
        var e = this.app = t.app;
        this.scope = new pn(e.scope);
        var n = this.editorEl = t.contentEl.createEl("div", {
                cls: "markdown-source-view"
            }),
            r = this.cmEditor = Da(this.editorEl, {
                mode: "hypermd",
                theme: "obsidian",
                lineWrapping: !0,
                styleActiveLine: !0,
                autoRefresh: {
                    delay: 50
                },
                configureMouse: function(t, e, n) {
                    return {
                        addNew: n.altKey && !n.ctrlKey && !n.metaKey
                    }
                }
            });
        this.updateOptions();
        var i = r.getWrapperElement().find(".CodeMirror-vscrollbar");
        i.detach(), n.insertBefore(i, n.firstChild), i.style.width = "100%", this.search = new ba(this, this.cmEditor, this.editorEl), this.linkSuggestion = new ma(this), this.tagSuggestion = new Ca(this), this.attachCmEvents(), this.attachDomEvents()
    }
    var za, Ia, Ra = (za = function(t, e) {
            return (za = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            za(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        Ha = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        Na = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        qa = "markdown",
        Ba = (Ra(ja, Ia = fi), ja.prototype.load = function() {
            Ia.prototype.load.call(this);
            var t = this.app.vault,
                e = this.leaf;
            this.registerEvent(t.on("modify", this.onModify, this)), this.registerEvent(e.workspace.on("quick-preview", this.onQuickPreview, this)), this.registerEvent(e.workspace.on("resize", this.onResize, this)), this.registerEvent(e.workspace.on("click", this.onDocumentClick, this))
        }, ja.getViewType = function() {
            return qa
        }, ja.prototype.getViewType = function() {
            return qa
        }, ja.prototype.canAcceptExtension = function(t) {
            return v.contains(t)
        }, ja.prototype.getState = function() {
            var t = Ia.prototype.getState.call(this);
            return t.mode = this.getMode(), t
        }, ja.prototype.setState = function(n, r) {
            return Ha(this, void 0, Promise, function() {
                var e;
                return Na(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e = !1, "preview" !== n.mode ? [3, 2] : [4, this.setMode(this.previewMode)];
                        case 1:
                            return e = t.sent(), [3, 4];
                        case 2:
                            return "source" !== n.mode ? [3, 4] : [4, this.setMode(this.sourceMode)];
                        case 3:
                            e = t.sent(), t.label = 4;
                        case 4:
                            return e && (r.layout = !0), [4, Ia.prototype.setState.call(this, n, r)];
                        case 5:
                            return t.sent(), [2]
                    }
                })
            })
        }, ja.prototype.getEphemeralState = function() {
            var t = {};
            return this.currentMode.getEphemeralState(t), t.scroll = this.scroll, t
        }, ja.prototype.setEphemeralState = function(t) {
            this.currentMode.setEphemeralState(t), t.scroll && (this.scroll = t.scroll)
        }, ja.prototype.getMode = function() {
            var t = this.currentMode;
            return t !== this.sourceMode && t === this.previewMode ? "preview" : "source"
        }, ja.prototype.updateButtons = function() {
            var t = this.currentMode,
                e = this.sourceMode,
                n = this.previewMode;
            this.previewButtonEl.toggle(t === e), this.editButtonEl.toggle(t === n)
        }, ja.prototype.getSyncViewState = function() {
            var t = Ia.prototype.getSyncViewState.call(this);
            return delete t.state.mode, delete t.eState.cursor, t
        }, ja.prototype.setMode = function(o) {
            return Ha(this, void 0, Promise, function() {
                var e, n, r, i;
                return Na(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return this.currentMode === o ? [2, !1] : (n = (e = this).currentMode, r = e.sourceMode, i = e.scroll, n !== r ? [3, 2] : [4, this.save()]);
                        case 1:
                            t.sent(), t.label = 2;
                        case 2:
                            return n.hide(), (this.currentMode = o).show(), null !== this.data && o.set(this.data, !1), o.onResize(), i && o.setEphemeralState({
                                scroll: i
                            }), this.updateButtons(), this.containerEl.setAttribute("data-mode", this.getMode()), [2, !0]
                    }
                })
            })
        }, ja.prototype.onUnloadFile = function(t) {
            return Ha(this, void 0, Promise, function() {
                return Na(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.save(!0)];
                        case 1:
                            return t.sent(), [2]
                    }
                })
            })
        }, ja.prototype.onLoadFile = function(e) {
            return Ha(this, void 0, Promise, function() {
                return Na(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.loadFileInternal(e, !0)];
                        case 1:
                            return t.sent(), [2]
                    }
                })
            })
        }, ja.prototype.save = function(s) {
            return Ha(this, void 0, void 0, function() {
                var e, n, r, i, o, a;
                return Na(this, function(t) {
                    switch (t.label) {
                        case 0:
                            if (!(e = this.file)) return [2];
                            if (this.saving) return [2];
                            if (r = (n = this).currentMode, i = n.sourceMode, o = n.previewMode, a = r.get(), !e || this.lastSavedData === a || null === this.lastSavedData) return [3, 4];
                            s ? (this.data = null, this.lastSavedData = null, o.clear(), i.clear()) : (this.data = a, this.lastSavedData = a), this.saving = !0, t.label = 1;
                        case 1:
                            return t.trys.push([1, , 3, 4]), [4, this.app.vault.modify(e, a)];
                        case 2:
                            return t.sent(), [3, 4];
                        case 3:
                            return this.saving = !1, [7];
                        case 4:
                            return [2]
                    }
                })
            })
        }, ja.prototype.onModify = function(t) {
            if (!this.saving && t === this.file) {
                var e = this.file;
                this.loadFileInternal(e, !1)
            }
        }, ja.prototype.loadFileInternal = function(n, r) {
            return Ha(this, void 0, void 0, function() {
                var e;
                return Na(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return n.saving ? [4, this.app.vault.cachedRead(n)] : [3, 2];
                        case 1:
                            return e = t.sent(), [3, 4];
                        case 2:
                            return [4, this.app.vault.read(n)];
                        case 3:
                            e = t.sent(), t.label = 4;
                        case 4:
                            return this.lastSavedData = e, this.setData(e, r), [2]
                    }
                })
            })
        }, ja.prototype.onSwitchView = function(a) {
            return Ha(this, void 0, void 0, function() {
                var e, n, r, i, o;
                return Na(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return a.preventDefault(), e = this.leaf, n = dn.isModifier(a, nn), (r = this.getState()).mode = "preview" === this.getMode() ? "source" : "preview", i = {
                                type: qa,
                                state: r
                            }, !n && 1 !== a.button || (o = this.app.workspace, e = o.createLeafBySplit(this.leaf), i.active = !0, i.group = this.leaf), [4, e.setViewState(i)];
                        case 1:
                            return t.sent(), [2]
                    }
                })
            })
        }, ja.prototype.onMarkdownScroll = function() {
            var t = this.currentMode.getScroll();
            t && (this.scroll = t), this.syncState(!1)
        }, ja.prototype.onInitMenu = function(t) {
            var e = this,
                n = Ia.prototype.onInitMenu.call(this, t);
            return this.currentMode === this.sourceMode && (n.addItem("Find...", function() {
                e.sourceMode.showSearch()
            }, Se), n.addItem("Replace...", function() {
                e.sourceMode.showSearch(!0)
            }, Se)), n
        }, ja.prototype.onResize = function() {
            this.currentMode.onResize()
        }, ja.prototype.onTitleKeydown = function(t) {
            Ia.prototype.onTitleKeydown.call(this, t), "Enter" === t.key && (t.preventDefault(), this.setEphemeralState({
                focus: !0
            }))
        }, ja.prototype.triggerQuickPreview = function(t) {
            this.data = t, this.leaf.workspace.onQuickPreview(this.file, t)
        }, ja.prototype.onQuickPreview = function(t, e) {
            t === this.file && this.setData(e, !1)
        }, ja.prototype.setData = function(t, e) {
            if (this.data !== t) {
                this.data = t;
                var n = this.currentMode,
                    r = this.previewMode,
                    i = this.sourceMode;
                e && (n !== i && i.set("", e), n !== r && r.set("", e)), n.set(t, e)
            }
        }, ja.prototype.onDocumentClick = function() {
            this.currentMode === this.sourceMode && this.sourceMode.onDocumentClick()
        }, ja.prototype.updateOptions = function() {
            this.sourceMode.updateOptions(), this.previewMode.updateOptions()
        }, ja.prototype.showSearch = function(t) {
            void 0 === t && (t = !1), this.currentMode === this.sourceMode && this.sourceMode.showSearch(t)
        }, ja);

    function ja(t) {
        var e = Ia.call(this, t) || this;
        e.icon = Xt, e.previewButtonEl = null, e.editButtonEl = null, e.lastSavedData = null, e.saving = !1, e.data = null, e.scroll = null, e.sourceMode = new Pa(e), e.previewMode = new xo(e);
        var n = e.app.vault.getConfig(at);
        return e.editButtonEl = e.addAction(te, "Edit (Ctrl/Cmd+Click to edit in new pane)", e.onSwitchView.bind(e), 17), e.previewButtonEl = e.addAction(Ce, "Preview (Ctrl/Cmd+Click to open in new pane)", e.onSwitchView.bind(e)), e.sourceMode.hide(), e.previewMode.hide(), "source" === n ? e.currentMode = e.sourceMode : "preview" === n && (e.currentMode = e.previewMode), e.currentMode.show(), e.updateButtons(), e
    }
    var Va, Ga, Ua = (Va = function(t, e) {
            return (Va = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            Va(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        Wa = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        Ka = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        $a = function() {
            this.viewContainerEl = createEl("div", {
                cls: "pdf-container"
            });
            var t = this.viewContainerEl.createEl("div", {
                    cls: "pdf-scroll-container"
                }),
                e = this.viewContainerEl.createEl("div", {
                    cls: "pdf-controls"
                });
            this.previousPageEl = e.createEl("div", {
                cls: "pdf-controls-pager mod-previous"
            }, function(t) {
                return We(t, ee, 16)
            }), this.pageInfoEl = e.createEl("div", {
                cls: "pdf-controls-page-info"
            }), this.nextPageEl = e.createEl("div", {
                cls: "pdf-controls-pager mod-next"
            }, function(t) {
                return We(t, ne, 16)
            }), this.canvasEl = t.createEl("canvas", {
                cls: "pdf-canvas"
            })
        },
        Za = (Ua(Ya, Ga = fi), Ya.getViewType = function() {
            return "pdf"
        }, Ya.prototype.getViewType = function() {
            return "pdf"
        }, Ya.prototype.navigatePage = function(t) {
            var e = this.pdfDoc;
            if (this.pdfDoc) {
                var n = this.pageNum + t;
                n < 1 && (n = 1);
                var r = e._pdfInfo.numPages;
                r < n && (n = r), this.pageNum = n, this.renderPage()
            }
        }, Ya.prototype.renderPage = function() {
            return Wa(this, void 0, void 0, function() {
                var e, n, r, i, o, a, s, c, l;
                return Ka(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return n = (e = this).pdfDoc, r = e.dom, i = e.pageNum, n ? (o = n._pdfInfo.numPages, [4, n.getPage(i)]) : [2];
                        case 1:
                            return a = t.sent(), s = a.getViewport({
                                scale: 5
                            }), c = r.canvasEl.getContext("2d"), r.canvasEl.height = s.height, r.canvasEl.width = s.width, r.pageInfoEl.setText(a.pageNumber + " / " + o), l = {
                                canvasContext: c,
                                viewport: s
                            }, [4, a.render(l).promise];
                        case 2:
                            return t.sent(), [2]
                    }
                })
            })
        }, Ya.prototype.onLoadFile = function(s) {
            return Wa(this, void 0, Promise, function() {
                var e, n, r, i, o, a;
                return Ka(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return n = (e = this).app, r = e.dom, e.contentEl.append(r.viewContainerEl), [4, n.vault.readBinary(s)];
                        case 1:
                            i = t.sent(), t.label = 2;
                        case 2:
                            return t.trys.push([2, 4, , 5]), o = this, [4, window.pdfjsLib.getDocument(i).promise];
                        case 3:
                            return o.pdfDoc = t.sent(), this.pageNum = 1, this.renderPage(), [3, 5];
                        case 4:
                            return a = t.sent(), console.error(a), [3, 5];
                        case 5:
                            return [2]
                    }
                })
            })
        }, Ya.prototype.onUnloadFile = function(t) {
            return Wa(this, void 0, Promise, function() {
                return Ka(this, function(t) {
                    return this.pdfDoc.destroy(), this.pdfDoc = null, this.pageNum = null, [2]
                })
            })
        }, Ya);

    function Ya(t) {
        var e = Ga.call(this, t) || this;
        e.icon = se, e.dom = null, e.pdfDoc = null, e.pageNum = null;
        var n = e.dom = new $a;
        return n.previousPageEl.addEventListener("click", function() {
            e.navigatePage(-1)
        }), n.nextPageEl.addEventListener("click", function() {
            e.navigatePage(1)
        }), e
    }
    var Ja = (Xa.registerView = function(t, e) {
        this.ViewByType[t] = e
    }, Xa.unregisterView = function(t) {
        delete this.ViewByType[t]
    }, Xa.registerExtensions = function(t, e) {
        for (var n = 0, r = t; n < r.length; n++) {
            var i = r[n];
            this.TypeByExtension[i] = e
        }
    }, Xa.registerViewWithExtensions = function(t, e, n) {
        this.registerView(t, e), this.registerExtensions(n, t)
    }, Xa.getViewCreatorByType = function(t) {
        return this.ViewByType[t]
    }, Xa.getTypeByExtension = function(t) {
        return this.TypeByExtension[t]
    }, Xa.getViewCreatorByExtension = function(t) {
        var e = this.getTypeByExtension(t);
        return this.getViewCreatorByType(e)
    }, Xa.ViewByType = {}, Xa.TypeByExtension = {}, Xa);

    function Xa() {}
    Ja.registerViewWithExtensions(Ba.getViewType(), function(t) {
        return new Ba(t)
    }, v), Ja.registerViewWithExtensions(Li.getViewType(), function(t) {
        return new Li(t)
    }, p), Ja.registerViewWithExtensions(wi.getViewType(), function(t) {
        return new wi(t)
    }, h), Ja.registerViewWithExtensions(Fi.getViewType(), function(t) {
        return new Fi(t)
    }, f), Ja.registerViewWithExtensions(Za.getViewType(), function(t) {
        return new Za(t)
    }, d);
    var Qa, ts, es = (Qa = function(t, e) {
            return (Qa = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            Qa(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        ns = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        rs = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        is = function() {
            for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
            var r = Array(t),
                i = 0;
            for (e = 0; e < n; e++)
                for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
            return r
        },
        os = (es(as, ts = In), as.prototype.init = function() {
            var t = this.plugin;
            t.init && t.init(this.app, this)
        }, as.prototype.enable = function(t) {
            if (!this.enabled) {
                this.enabled = !0;
                for (var e = this.plugin, n = this.views, r = this.app, i = 0, o = this.commands; i < o.length; i++) {
                    var a = o[i];
                    r.commands.addCommand(a)
                }
                for (var s = 0, c = this.ribbonActions; s < c.length; s++) {
                    var l = c[s],
                        u = r.workspace.leftRibbon.addRibbonActionButton(l.icon, l.title, l.callback);
                    this.addedButtonEls.push(u)
                }
                this.hasStatusBarItem && (this.statusBarEl = r.statusBar.registerStatusBarItem());
                var h = this.settingTab;
                for (var p in h && r.setting.addPluginTab(h), n) n.hasOwnProperty(p) && Ja.registerView(p, n[p]);
                e.onEnable && e.onEnable(r, this), t && e.onUserEnable && e.onUserEnable(r), this.updateEnabledConfig(r), this.manager.trigger("change", this)
            }
        }, as.prototype.disable = function(t) {
            if (this.enabled) {
                this.enabled = !1;
                var e = this.plugin,
                    n = this.views,
                    r = this.app;
                e.onDisable && e.onDisable(r, this), t && e.onUserDisable && e.onUserDisable(r);
                for (var i = 0, o = this.commands; i < o.length; i++) {
                    var a = o[i];
                    r.commands.removeCommand(a.id)
                }
                for (var s = 0, c = this.addedButtonEls; s < c.length; s++) c[s].detach();
                this.statusBarEl && this.statusBarEl.detach();
                var l = this.settingTab;
                for (var u in l && r.setting.removePluginTab(l), n) n.hasOwnProperty(u) && (Ja.unregisterView(u), t && r.workspace.detachLeavesOfType(u));
                this.unload(), this.updateEnabledConfig(r), this.manager.trigger("change", this)
            }
        }, as.prototype.updateEnabledConfig = function(t) {
            var e = t.vault.getConfig(N);
            e[this.plugin.name] = this.enabled, t.vault.setConfig(N, e)
        }, as.prototype.loadData = function() {
            return ns(this, void 0, Promise, function() {
                var e;
                return rs(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e = this.plugin.id, [4, this.manager.app.vault.readPluginData(e)];
                        case 1:
                            return [2, t.sent()]
                    }
                })
            })
        }, as.prototype.saveData = function(n) {
            return ns(this, void 0, Promise, function() {
                var e;
                return rs(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e = this.plugin.id, [4, this.manager.app.vault.writePluginData(e, n)];
                        case 1:
                            return t.sent(), [2]
                    }
                })
            })
        }, as.prototype.registerViewType = function(t, e) {
            this.views[t] = e
        }, as.prototype.registerGlobalCommand = function(t) {
            this.commands.push(t)
        }, as.prototype.registerRibbonAction = function(t, e, n) {
            this.ribbonActions.push({
                title: t,
                icon: e,
                callback: n
            })
        }, as.prototype.registerStatusBarItem = function() {
            this.hasStatusBarItem = !0
        }, as.prototype.registerSettingTab = function(t) {
            this.settingTab = t
        }, as);

    function as(t, e, n) {
        var r = ts.call(this) || this;
        return r.manager = null, r.plugin = null, r.enabled = !1, r.commands = [], r.ribbonActions = [], r.hasStatusBarItem = !1, r.statusBarEl = null, r.addedButtonEls = [], r.settingTab = null, r.views = {}, r.app = t, r.plugin = e, r.manager = n, r
    }
    var ss, cs = (es(ls, ss = ut), ls.prototype.loadPlugin = function(t) {
        var e = this.app,
            n = new os(e, t, this);
        return n.init(), this.plugins.push(n), t
    }, ls.prototype.getEnabledPlugins = function() {
        return this.plugins.filter(function(t) {
            return t.enabled
        })
    }, ls.prototype.enable = function() {
        for (var t = this.app.vault.getConfig(N), e = 0, n = this.plugins; e < n.length; e++) {
            var r = n[e],
                i = r.plugin,
                o = t[i.name];
            (!0 === o || void 0 === o && i.defaultOn) && r.enable(!1)
        }
    }, ls.prototype.onFileMenu = function(t, e, n) {
        for (var r = [], i = 0, o = this.getEnabledPlugins(); i < o.length; i++) {
            var a = o[i];
            if (a.plugin.onFileMenu) {
                var s = a.plugin.onFileMenu(this.app, t, e, n);
                s && 0 < s.length && (r = r.concat(s))
            }
        }
        return r
    }, ls.prototype.onLinkHover = function(t, e, n) {
        for (var r = 0, i = this.getEnabledPlugins(); r < i.length; r++) {
            var o = i[r];
            o.plugin.onLinkHover && o.plugin.onLinkHover(this.app, t, e, n)
        }
    }, ls.prototype.trigger = function(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        ss.prototype.trigger.apply(this, is([t], e))
    }, ls.prototype.on = function(t, e, n) {
        return ss.prototype.on.call(this, t, e, n)
    }, ls);

    function ls(t) {
        var e = ss.call(this) || this;
        return e.plugins = [], e.app = t, e
    }
    var us = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        hs = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        ps = null;
    La(function(t) {
        ps = t.remote.systemPreferences
    });
    var fs = (ds.prototype.init = function(t, e) {
        var n = this;
        this.app = t, (this.pluginInstance = e).registerRibbonAction("Start/Stop Recording", de, this.onRecordAudio.bind(this)), e.registerGlobalCommand({
            id: "audio-recorder:start",
            name: "Audio recorder: start recording",
            checkCallback: function(t) {
                return !n.recording && (t || n.onStartRecording(), !0)
            }
        }), e.registerGlobalCommand({
            id: "audio-recorder:stop",
            name: "Audio recorder: stop recording",
            checkCallback: function(t) {
                return !!n.recording && (t || n.onStopRecording(), !0)
            }
        })
    }, ds.prototype.checkPermission = function() {
        return us(this, void 0, Promise, function() {
            var e;
            return hs(this, function(t) {
                switch (t.label) {
                    case 0:
                        return "MacOS" != Ye ? [3, 5] : (e = ps.getMediaAccessStatus("microphone"), ["denied", "restricted", "unknown"].contains(e) ? (this.showRecordingMessage("Microphone access was denied, please enable it from the preference pane.", !0), [2, !1]) : [3, 1]);
                    case 1:
                        return "not-determined" !== e ? [3, 3] : (this.showRecordingMessage("Please grant microphone permission to start recording", !1), [4, ps.askForMediaAccess("microphone")]);
                    case 2:
                        return [2, t.sent()];
                    case 3:
                        if ("granted" === e) return [2, !0];
                        t.label = 4;
                    case 4:
                        return [2, !1];
                    case 5:
                        return [2, !0]
                }
            })
        })
    }, ds.prototype.onRecordAudio = function() {
        return us(this, void 0, void 0, function() {
            return hs(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, this.checkPermission()];
                    case 1:
                        return t.sent() ? this.recording ? [3, 3] : [4, this.onStartRecording()] : [2];
                    case 2:
                        return t.sent(), [3, 4];
                    case 3:
                        this.onStopRecording(), t.label = 4;
                    case 4:
                        return [2]
                }
            })
        })
    }, ds.prototype.onStartRecording = function() {
        return us(this, void 0, void 0, function() {
            var e, n;
            return hs(this, function(t) {
                switch (t.label) {
                    case 0:
                        return t.trys.push([0, 3, , 4]), [4, navigator.mediaDevices.getUserMedia({
                            audio: !0,
                            video: !1
                        })];
                    case 1:
                        return e = t.sent(), [4, this.startRecording(e)];
                    case 2:
                        return t.sent(), [3, 4];
                    case 3:
                        return (n = t.sent()).message.contains("Requested device not found") && 0 < this.pluginInstance.addedButtonEls.length ? this.showRecordingMessage("No microphone is connected.", !0) : console.error(n), [2];
                    case 4:
                        return this.recording = !0, this.pluginInstance.addedButtonEls.forEach(function(t) {
                            We(t, ve, 18), t.addClass("is-active")
                        }), [2]
                }
            })
        })
    }, ds.prototype.onStopRecording = function() {
        this.recording = !1, this.recorder.stop(), this.pluginInstance.addedButtonEls.forEach(function(t) {
            We(t, de, 18), t.removeClass("is-active")
        })
    }, ds.prototype.startRecording = function(r) {
        var t = this,
            i = [];
        this.recorder = new MediaRecorder(r, {
            mimeType: 'audio/webm;codecs="opus"'
        }), this.recorder.addEventListener("dataavailable", function(t) {
            0 < t.data.size && i.push(t.data)
        }), this.recorder.addEventListener("stop", function() {
            return us(t, void 0, void 0, function() {
                var e, n = this;
                return hs(this, function(t) {
                    return this.recorder = null, r.getTracks().forEach(function(t) {
                        t.stop()
                    }), (e = new FileReader).addEventListener("loadend", function() {
                        return us(n, void 0, void 0, function() {
                            return hs(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.saveRecording(e.result)];
                                    case 1:
                                        return t.sent(), [2]
                                }
                            })
                        })
                    }), e.readAsArrayBuffer(i[0]), [2]
                })
            })
        }), this.recorder.start()
    }, ds.prototype.saveRecording = function(l) {
        return us(this, void 0, void 0, function() {
            var e, n, r, i, o, a, s, c;
            return hs(this, function(t) {
                switch (t.label) {
                    case 0:
                        return e = this.app, n = e.vault.getAvailablePathForAttachments("Untitled recording", "webm"), [4, e.vault.createBinary(n, l)];
                    case 1:
                        return r = t.sent(), (i = e.workspace.activeLeaf) && (o = i.view) instanceof Ba ? (a = o.file, s = e.metadataCache.fileToLinktext(r, a.path), [4, e.vault.read(a)]) : [3, 4];
                    case 2:
                        return c = t.sent(), c += "\n![[" + s + "]]\n", [4, e.vault.modify(a, c)];
                    case 3:
                        return t.sent(), [2];
                    case 4:
                        return [4, e.workspace.getUnpinnedLeaf().openFile(r, {
                            active: !0
                        })];
                    case 5:
                        return t.sent(), [2]
                }
            })
        })
    }, ds.prototype.showRecordingMessage = function(t, e) {
        if (0 < this.pluginInstance.addedButtonEls.length) {
            var n = this.pluginInstance.addedButtonEls[0];
            this.app.tooltip.displayTooltip(n, t, "right", e ? ["mod-error"] : [])
        }
    }, ds);

    function ds() {
        this.id = "audio-recorder", this.name = "Audio recorder", this.description = "Record audio and save as attachment.", this.app = null, this.pluginInstance = null, this.recording = !1, this.recorder = null
    }
    var vs, gs = (vs = function(t, e) {
            return (vs = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            vs(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        ms = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        ys = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        bs = "backlink",
        ws = (ks.prototype.init = function(t, e) {
            this.app = t, this.instance = e, this.instance.registerStatusBarItem(), this.instance.registerViewType(bs, function(t) {
                return new Cs(t)
            }), t.commands.addCommand({
                id: "backlink:open-backlinks",
                name: "Open backlinks for the current file",
                checkCallback: this.openBacklinksForActiveFile.bind(this)
            })
        }, ks.prototype.onEnable = function(t, e) {
            e.registerEvent(t.workspace.on("file-open", this.onFileOpen, this)), e.registerEvent(t.workspace.on("layout-ready", this.initLeaf, this)), e.registerEvent(t.metadataCache.on("changed", this.updateBacklinks, this))
        }, ks.prototype.onUserEnable = function() {
            this.initLeaf()
        }, ks.prototype.initLeaf = function() {
            0 === this.app.workspace.getLeavesOfType(bs).length && this.app.workspace.getRightLeaf(!1).setViewState({
                type: bs
            })
        }, ks.prototype.onFileMenu = function(r, t, e, i) {
            var o = this;
            return e instanceof _t && "pane-more-options" === t ? [{
                title: "Open backlinks",
                icon: me,
                callback: function(n) {
                    return ms(o, void 0, void 0, function() {
                        var e;
                        return ys(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return e = r.workspace, [4, ((i = i || e.activeLeaf) ? e.createLeafBySplit(i, "horizontal") : e.splitActiveLeaf("horizontal")).setViewState({
                                        type: bs,
                                        active: !0,
                                        group: i,
                                        state: {
                                            file: n.path
                                        }
                                    })];
                                case 1:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }
            }] : null
        }, ks.prototype.onFileOpen = function(t) {
            this.file = t instanceof _t ? t : null, this.updateBacklinks()
        }, ks.prototype.updateBacklinks = function() {
            var t = this.file,
                e = 0;
            t && (e = this.app.metadataCache.getBacklinks(t).count());
            var n = this.instance.statusBarEl;
            n && n.setText(Object(A.l)(e, "backlink"))
        }, ks.prototype.openBacklinksForActiveFile = function(i) {
            return ms(this, void 0, void 0, function() {
                var e, n, r;
                return ys(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e = this.app.workspace, (n = e.activeLeaf) && n.view instanceof ai && (r = n.view.file) ? i ? [3, 2] : [4, e.splitActiveLeaf("horizontal").setViewState({
                                type: bs,
                                active: !0,
                                group: n,
                                state: {
                                    file: r.path
                                }
                            })] : [2, !1];
                        case 1:
                            t.sent(), t.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })
        }, ks);

    function ks() {
        this.id = "backlinks", this.name = "Backlinks", this.description = "Show number of backlinks in the status bar.", this.defaultOn = !0
    }
    var Es, Cs = (gs(xs, Es = ai), xs.prototype.getDisplayText = function() {
        return this.file ? "Backlinks for " + Es.prototype.getDisplayText.call(this) : "Backlinks"
    }, xs.prototype.getViewType = function() {
        return bs
    }, xs.prototype.canAcceptExtension = function(t) {
        return !0
    }, xs.prototype.load = function() {
        Es.prototype.load.call(this);
        var t = this.app;
        this.registerEvent(t.workspace.on("file-open", this.onFileOpen, this)), this.registerEvent(t.metadataCache.on("changed", this.forceUpdate, this))
    }, xs.prototype.onLoadFile = function(t) {
        return ms(this, void 0, Promise, function() {
            return ys(this, function(t) {
                return this.requestUpdate(), [2]
            })
        })
    }, xs.prototype.onUnloadFile = function(t) {
        return ms(this, void 0, Promise, function() {
            return ys(this, function(t) {
                return this.requestUpdate(), [2]
            })
        })
    }, xs.prototype.onFileOpen = function(t) {
        t !== this.activeFile && (this.activeFile = t instanceof _t ? t : null, this.requestUpdate())
    }, xs.prototype.toggleBacklinkCollapsed = function() {
        this.setBacklinkCollapsed(!this.backlinkCollapsed)
    }, xs.prototype.setBacklinkCollapsed = function(t) {
        this.backlinkCollapsed = t, this.backlinkHeaderEl.toggleClass("is-collapsed", t), t ? this.backlinkDom.hide() : this.backlinkDom.show(), this.requestUpdate()
    }, xs.prototype.toggleUnlinkedCollapsed = function() {
        this.setUnlinkedCollapsed(!this.unlinkedCollapsed)
    }, xs.prototype.setUnlinkedCollapsed = function(t) {
        this.unlinkedCollapsed = t, this.unlinkedHeaderEl.toggleClass("is-collapsed", t), t ? this.unlinkedMentionDom.hide() : this.unlinkedMentionDom.show(), this.requestUpdate()
    }, xs.prototype.forceUpdate = function() {
        this.backlinkFile = null, this.unlinkedFile = null, this.requestUpdate()
    }, xs.prototype.update = function() {
        var t = this.backlinkCollapsed,
            e = this.unlinkedCollapsed;
        if (e && this.stopSearch(), this.leaf.updateHeader(), !t || !e) {
            var n = this.file,
                r = (n = n || this.activeFile) ? this.app.metadataCache.getBacklinks(n) : new A.e;
            t || this.backlinkFile === n || (this.backlinkFile = n, this.updateBacklink(r)), e || this.unlinkedFile === n || (this.unlinkedFile = n, this.updateUnlinked(n))
        }
    }, xs.prototype.updateBacklink = function(t) {
        var e = this.backlinkDom;
        e.emptyResults();
        for (var n = 0, r = 0, i = t.keys(); r < i.length; r++) {
            for (var o = i[r], a = [], s = 0, c = t.get(o); s < c.length; s++) {
                var l = c[s],
                    u = l.line,
                    h = l.beforeContext,
                    p = l.original,
                    f = l.afterContext,
                    d = Math.max(h.length - 100, 0),
                    v = Math.min(f.length, 100),
                    g = h.slice(d).trimLeft();
                0 !== d && (g = "..." + g);
                var m = f.slice(0, v).trimRight();
                v !== f.length && (m += "...");
                var y = {
                    line: u,
                    beforeContext: g,
                    match: p,
                    afterContext: m
                };
                a.push(y), n += 1
            }
            var b = this.app.vault.getAbstractFileByPath(o);
            b && b instanceof _t && e.renderFileResult(b, a)
        }
        0 === n && e.showEmptyState()
    }, xs.prototype.updateUnlinked = function(t) {
        if (this.stopSearch(), t) {
            var e = Object(En.escapeRE)(t.basename),
                n = new RegExp("(?!\\[\\[)(" + e + ")(?!.md)(?!#.*?)(?!\\|.*?)(?!\\]\\])", "gi"),
                r = this.app.metadataCache.fileToLinktext(t, ""),
                i = this.searching = new A.a;
            vr(this.app, i, this.unlinkedMentionDom, n, 1, r, [t])
        }
    }, xs.prototype.onGroupChange = function() {
        if (Es.prototype.onGroupChange.call(this), this.leaf.group)
            for (var t = 0, e = this.leaf.workspace.getGroupLeaves(this.leaf.group); t < e.length; t++) {
                var n = e[t];
                if (n !== this.leaf && n.view instanceof ai) {
                    var r = n.view.getSyncViewState();
                    this.leaf.openFile(n.view.file, r)
                }
            } else this.loadFile(null)
    }, xs.prototype.stopSearch = function() {
        var t = this.searching;
        t && (t.cancel(), this.searching = null, this.unlinkedFile = null)
    }, xs);

    function xs(t) {
        var e = Es.call(this, t) || this;
        e.icon = me, e.navigation = !1, e.allowNoFile = !0, e.searching = null, e.activeFile = null, e.backlinkFile = null, e.unlinkedFile = null, e.backlinkCollapsed = !1, e.unlinkedCollapsed = !0, e.backlinkHeaderEl = null, e.unlinkedHeaderEl = null;
        var n = e.contentEl.createEl("div", {
                cls: "backlink-pane"
            }),
            r = e.backlinkHeaderEl = n.createEl("div", {
                cls: "side-dock-collapsible-section-header"
            });
        r.createEl("div", {
            cls: "side-dock-collapsible-section-header-indicator"
        }, function(t) {
            We(t, Jt, 8)
        }), r.createEl("div", {
            text: "Linked mentions"
        }), r.addEventListener("click", e.toggleBacklinkCollapsed.bind(e)), e.backlinkDom = new fr(e.app, n, "No backlinks found.");
        var i = e.unlinkedHeaderEl = n.createEl("div", {
            cls: "side-dock-collapsible-section-header is-collapsed"
        });
        return i.createEl("div", {
            cls: "side-dock-collapsible-section-header-indicator"
        }, function(t) {
            We(t, Jt, 8)
        }), i.createEl("div", {
            text: "Unlinked mentions"
        }), i.addEventListener("click", e.toggleUnlinkedCollapsed.bind(e)), e.requestUpdate = Object(A.h)(e.update, 0), e.unlinkedMentionDom = new fr(e.app, n, "No unlinked mentions found."), e.requestUpdate(), e
    }
    var _s, Ss, Ls = (_s = function(t, e) {
            return (_s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            _s(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        Ms = (Ls(As, Ss = Mr), As.prototype.onOpen = function() {
            this.inputEl.value = "", this.inputEl.focus(), this.onInput(), this.isOpen = !0
        }, As.prototype.onInput = function() {
            var t, e = this.inputEl.value,
                n = this.getItemsToFilter(),
                r = ha(e),
                i = [];
            if ("" === e) t = this.getEmptySearchItems().map(function(t) {
                return {
                    item: t,
                    match: null
                }
            });
            else {
                for (var o = 0, a = n; o < a.length; o++) {
                    var s = a[o],
                        c = fa(r, this.searchItemOn(s));
                    c && i.push({
                        match: c,
                        item: s
                    })
                }
                i.sort(function(t, e) {
                    return e.match.score - t.match.score
                }), t = i.slice(0, 5)
            }
            return this.chooser.setSuggestions(t), t
        }, As.prototype.createSuggestion = function(t, e) {
            var n = this.searchItemOn(t.item);
            e.createEl("span", {
                cls: "suggestion-text",
                text: n
            })
        }, As.prototype.onSelectSuggestion = function(t) {
            this.close(), this.onChooseOption(t.item), this.isOpen = !1
        }, As);

    function As(t, e, n, i) {
        void 0 === n && (n = null);
        var r = Ss.call(this, t) || this;
        return r.isOpen = !1, r.el = null, r.inputEl = null, r.resultContainerEl = null, r.modalEl.removeClass("modal"), r.modalEl.addClass("prompt"), r.modalEl.empty(), r.el = r.modalEl, r.inputEl = r.el.createEl("input", {
            cls: "prompt-input",
            type: "text"
        }), r.resultContainerEl = r.el.createEl("div", {
            cls: "prompt-results"
        }), r.el.createEl("div", {
            cls: "prompt-instructions"
        }, function(t) {
            for (var e = function(e) {
                    t.createEl("div", {
                        cls: "prompt-instruction"
                    }, function(t) {
                        t.createEl("span", {
                            cls: "prompt-instruction-command",
                            text: e.command
                        }), t.createEl("span", {
                            text: e.purpose
                        })
                    })
                }, n = 0, r = i; n < r.length; n++) {
                e(r[n])
            }
        }), r.chooser = new ea(r.app, r, r.resultContainerEl, r.scope, n, e), r.inputEl.addEventListener("input", r.onInput.bind(r)), r
    }
    var Ts, Os = (Ts = function(t, e) {
            return (Ts = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            Ts(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        Ds = (Ps.prototype.init = function(t, e) {
            this.openCallback = this.onOpen.bind(this), e.registerGlobalCommand({
                id: "command-palette:open",
                name: "Open command palette",
                callback: this.openCallback,
                hotkeys: [yn([nn], "p")]
            })
        }, Ps.prototype.onEnable = function(t, e) {
            this.modal = new Is(t)
        }, Ps.prototype.onDisable = function(t, e) {
            this.modal = null
        }, Ps.prototype.onOpen = function() {
            return this.modal && this.modal.open(), !1
        }, Ps);

    function Ps() {
        this.id = "command-palette", this.name = "Command palette", this.description = "Type a command to invoke it. No need to use the UI or remember the shortcut.", this.defaultOn = !0, this.modal = null
    }
    var Fs, zs = [{
            command: "↑↓",
            purpose: "to navigate"
        }, {
            command: "↵",
            purpose: "to use"
        }, {
            command: "esc",
            purpose: "to dismiss"
        }],
        Is = (Os(Rs, Fs = Ms), Rs.prototype.getItemsToFilter = function() {
            return this.app.commands.listCommands()
        }, Rs.prototype.getEmptySearchItems = function() {
            return this.getItemsToFilter()
        }, Rs.prototype.searchItemOn = function(t) {
            return t.name
        }, Rs.prototype.createSuggestion = function(t, e) {
            var n = t.item;
            e.createEl("span", {
                cls: "suggestion-text",
                text: n.name
            });
            var r = this.app,
                i = r.hotkeyManager.getHotkeys(n.id),
                o = r.hotkeyManager.getDefaultHotkeys(n.id);
            if (i)
                for (var a = 0, s = i; a < s.length; a++) {
                    var c = s[a];
                    e.createEl("kbd", {
                        cls: "suggestion-hotkey",
                        text: bn(c)
                    })
                } else if (o)
                    for (var l = 0, u = o; l < u.length; l++) {
                        var h = u[l];
                        e.createEl("kbd", {
                            cls: "suggestion-hotkey",
                            text: bn(h)
                        })
                    }
        }, Rs.prototype.onChooseOption = function(t) {
            this.close(), this.isOpen = !1, c(t)
        }, Rs);

    function Rs(t) {
        var e = Fs.call(this, t, "No commands found.", function(t) {
            return 0 === t.length
        }, zs) || this;
        return e.inputEl.setAttribute("placeholder", "Type a command..."), e.scope.registerKey(null, "Tab", function() {
            return !1
        }), e
    }
    var Hs = (Ns.prototype.load = function() {
        var e = this,
            t = this.setting;
        this.containerEl = t.tabContentContainer.createEl("div", {
            cls: "vertical-tab-content"
        }), this.navEl = t.tabContainer.createEl("div", {
            cls: "vertical-tab-nav-item",
            text: this.name
        }, function(t) {
            t.addEventListener("click", function() {
                e.isActive || e.open()
            })
        })
    }, Ns.prototype.unload = function() {
        this.containerEl.remove(), this.navEl.remove()
    }, Ns.prototype.open = function() {
        this.setting.closeActiveTab(), this.navEl.addClass("is-active"), this.display(), this.containerEl.addClass("is-active"), this.setting.setActiveTab(this), this.isActive = !0
    }, Ns.prototype.close = function() {
        this.navEl.removeClass("is-active"), this.containerEl.removeClass("is-active"), this.isActive = !1
    }, Ns);

    function Ns(t, e) {
        this.app = null, this.setting = null, this.containerEl = null, this.navEl = null, this.isActive = !1, this.app = t, this.setting = e
    }
    var qs, Bs, js = ((qs = function(t, e) {
        return (qs = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            })(t, e)
    }, function(t, e) {
        function n() {
            this.constructor = t
        }
        qs(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    })(Vs, Bs = Hs), Vs.prototype.display = function() {
        var c = this;
        this.containerEl.empty();
        var e = "Unknown",
            n = "";
        La(function(t) {
            e = t.ipcRenderer.sendSync("version"), n = t.ipcRenderer.sendSync("update")
        });
        var t = "Your app is up to date gergie!<br><a href='https://forum.obsidian.md/c/announcements/13'>Read the changelog</a>.";
        "update-manual-required" === n ? t = 'You must manually install the latest version. <a href="https://obsidian.md">Download here</a>.' : "update-downloaded" === n && (t = "An new update is ready to be installed. <a href='https://forum.obsidian.md/c/announcements/13'>Read the changelog</a>.<br>Relaunch the app to update."), Lc.addAndGetSettingEl(this.containerEl, "Current version: v" + e, t).createEl("div", {
            cls: "setting-item-control"
        }, function(t) {
            "update-downloaded" === n && t.createEl("button", {
                cls: "mod-cta",
                text: "Relaunch"
            }, function(t) {
                t.addEventListener("click", function() {
                    La(function(t) {
                        t.ipcRenderer.sendSync("relaunch")
                    })
                })
            })
        });
        var r = this.app.setting;
        Lc.addAndGetSettingEl(this.containerEl, "Obsidian Help", "Open the help documents.").createEl("div", {
            cls: "setting-item-control"
        }, function(t) {
            t.createEl("button", {
                cls: "mod-cta",
                text: "Open"
            }, function(t) {
                t.addEventListener("click", function() {
                    r.close(), c.app.openHelp()
                })
            })
        });
        var l = this.app.account;
        l.checkKey(function() {
            var t = l.license,
                e = l.key,
                n = l.keyValidation;
            if (t) {
                var r = Lc.addAndGetSettingEl(c.containerEl, "Receive insider builds", "Auto-update to insider builds to try out new features. Note that these builds are bleeding edge and might be less stable."),
                    i = !1;
                La(function(t) {
                    i = t.ipcRenderer.sendSync("insiderBuild", null)
                });
                var o = r.createEl("div", {
                    cls: "setting-item-control"
                }).createEl("div", {
                    cls: "checkbox-container"
                });
                o.toggleClass("is-enabled", i), o.addEventListener("click", function() {
                    var e = o.hasClass("is-enabled");
                    La(function(t) {
                        t.ipcRenderer.sendSync("insiderBuild", !e)
                    }), o.toggleClass("is-enabled", !e)
                })
            }
            if (e) {
                var a = c.containerEl.createEl("div", {
                        cls: "setting-item"
                    }).createEl("div", {
                        cls: "setting-item-info"
                    }),
                    s = "****" + e.slice(e.length - 4);
                a.createEl("p", {
                    text: "Your commercial license key is "
                }, function(t) {
                    t.createEl("b", {
                        cls: "u-pop",
                        text: s
                    }, function(t) {
                        t.setAttribute("aria-label", e), t.setAttribute("aria-label-classes", "mod-multiline")
                    }), t.createEl("span", {
                        text: "."
                    })
                }), "valid" === n ? a.createEl("p", {
                    text: 'Registered to "' + l.company + '" for ' + l.seats + " users. Valid until " + window.moment(l.expiry).format("MMMM D, YYYY") + "."
                }) : n ? (a.createEl("p", {
                    text: "License invalid: " + n
                }), a.createEl("button", {
                    cls: "mod-cta",
                    text: "Activate commercial license"
                }, function(t) {
                    t.addEventListener("click", function() {
                        c.setting.close(), c.commercialLicenseEl.open()
                    })
                })) : a.createEl("p", {
                    text: "Validating..."
                })
            } else t ? Lc.addAndGetSettingEl(c.containerEl, "License", '<b class="u-pop">Catalyst ' + t + "</b> personal license. Thank you for your support!").createEl("div", {
                cls: "setting-item-control"
            }, function(t) {
                t.createEl("button", {
                    text: "Activate commercial license"
                }, function(t) {
                    t.addEventListener("click", function() {
                        c.setting.close(), c.commercialLicenseEl.open()
                    })
                })
            }) : Lc.addAndGetSettingEl(c.containerEl, "License", "Personal license: free for personal use.").createEl("div", {
                cls: "setting-item-control"
            }, function(t) {
                t.createEl("button", {
                    cls: "mod-cta",
                    text: "Activate commercial license"
                }, function(t) {
                    t.addEventListener("click", function() {
                        c.setting.close(), c.commercialLicenseEl.open()
                    })
                })
            })
        })
    }, Vs);

    function Vs(t, e) {
        var n, r, i = Bs.call(this, t, e) || this;
        i.name = "About", i.id = "about", i.commercialLicenseEl = null;
        var o = createEl("div", {}, function(t) {
            t.createEl("div", {
                cls: "message-container"
            }, function(t) {
                r = t.createEl("div", {
                    cls: "message mod-error"
                })
            }), r.hide(), t.createEl("p", {}, function(t) {
                t.innerHTML = 'To obtain a commercial license, visit <a href="https://obsidian.md/pricing">https://obsidian.md/pricing</a>'
            }), t.createEl("p", {
                text: "Please enter your commercial license key:"
            }), t.createEl("p", {}, function(t) {
                t.createEl("label", {
                    cls: "input-label",
                    text: "License key"
                }), n = t.createEl("input", {
                    type: "text"
                }, function(t) {
                    t.setAttribute("placeholder", "Your license key...")
                })
            })
        });
        return i.commercialLicenseEl = new Or(t, "Activate license", o, "Activate", function() {
            return t.account.key = n.value, t.account.checkKey(function() {
                "valid" === t.account.keyValidation ? (i.commercialLicenseEl.close(), i.setting.open()) : (t.account.key = null, r.setText(t.account.keyValidation), r.show())
            }), !0
        }), i
    }
    var Gs, Us, Ws = ((Gs = function(t, e) {
        return (Gs = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            })(t, e)
    }, function(t, e) {
        function n() {
            this.constructor = t
        }
        Gs(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    })(Ks, Us = Hs), Ks.prototype.display = function() {
        var r, o, a = this,
            s = this.app.account;
        this.containerEl.empty(), r = this.containerEl.createEl("div");
        var t = this.containerEl.createEl("div", {}, function(t) {
                var r, i;
                t.createEl("h2", {
                    text: "Log in"
                }), t.createEl("div", {
                    cls: "message-container"
                }, function(t) {
                    (o = t.createEl("div", {
                        cls: "message mod-error"
                    })).hide()
                }), t.createEl("p", {
                    cls: "login-field"
                }, function(t) {
                    t.createEl("label", {
                        cls: "input-label",
                        text: "Email"
                    }), r = t.createEl("input", {
                        type: "text"
                    }, function(t) {
                        t.setAttribute("placeholder", "Your email...")
                    })
                }), t.createEl("p", {
                    cls: "login-field"
                }, function(t) {
                    t.createEl("label", {
                        cls: "input-label",
                        text: "Password"
                    }), i = t.createEl("input", {
                        type: "password"
                    }, function(t) {
                        t.setAttribute("placeholder", "Your password...")
                    })
                }), t.createEl("div", {
                    cls: "button-container u-center-text"
                }, function(t) {
                    t.createEl("button", {
                        cls: "mod-cta",
                        text: "Login"
                    }, function(t) {
                        t.addEventListener("click", function() {
                            o.hide();
                            var t = r.value,
                                e = i.value,
                                n = !1;
                            "" === t ? (o.setText("Email cannot be empty."), n = !0) : -1 === t.indexOf("@") ? (o.setText("Email is not valid."), n = !0) : "" === e && (o.setText("Password cannot be empty."), n = !0), n ? o.show() : s.login(t, e, function(t) {
                                if (t.error && "Login failed" === t.error) return o.setText("Login failed, please double check your email and password."), void o.show();
                                a.display()
                            })
                        })
                    })
                }), t.createEl("p", {
                    cls: "u-center-text"
                }, function(t) {
                    t.createEl("span", {
                        text: "Don't have an account? "
                    }), t.createEl("a", {
                        text: "Sign up now"
                    }, function(t) {
                        t.setAttribute("href", "https://obsidian.md/account#mode=signup"), t.setAttribute("target", "_blank")
                    }), t.createEl("span", {
                        text: "."
                    })
                })
            }),
            i = function() {
                s.getUserInfo(function() {
                    s.checkKey(function() {
                        ! function() {
                            r.empty(), r.createEl("h2", {
                                text: "Welcome, " + a.app.account.name + "!"
                            }), r.createEl("p", {
                                text: "Your account is "
                            }, function(t) {
                                t.createEl("span", {
                                    cls: "u-pop",
                                    text: a.app.account.email
                                })
                            });
                            var e = a.app.account,
                                t = r.createEl("div"),
                                n = e.license;
                            "insider" === n ? t.createEl("p", {}, function(t) {
                                t.innerHTML = 'You\'re an <b class="u-pop">insider</b>! Thank you. You have access to our insider builds.'
                            }) : "supporter" === n ? (t.createEl("p", {}, function(t) {
                                t.innerHTML = 'You\'re a <b class="u-pop">supporter</b>! Thank you. You have access to our insider builds.'
                            }), t.createEl("p", {
                                text: "For community badges, please email support@obsidian.md if you haven't received them 24 hours after obtaining your license."
                            })) : "vip" === n ? (t.createEl("p", {}, function(t) {
                                t.innerHTML = 'You\'re a <b class="u-pop">VIP</b>! Thank you. You have access to our insider builds.'
                            }), t.createEl("p", {
                                text: "For community badges and VIP lounge access, please email support@obsidian.md if you haven't received them 24 hours after obtaining your license."
                            })) : n = null, e.key && e.license || r.createEl("p", {
                                text: "You may want to..."
                            }), e.key || r.createEl("p", {}, function(t) {
                                t.createEl("button", {
                                    cls: "mod-cta"
                                }, function(t) {
                                    t.createEl("a", {
                                        text: "Get a commercial license"
                                    }, function(t) {
                                        t.setAttribute("href", "https://obsidian.md/pricing"), t.setAttribute("target", "_blank")
                                    })
                                })
                            }), e.license || r.createEl("p", {}, function(t) {
                                t.createEl("button", {
                                    cls: "mod-cta"
                                }, function(t) {
                                    t.createEl("a", {
                                        text: "Support Obsidian with Obsidian Catalyst"
                                    }, function(t) {
                                        t.setAttribute("href", "https://obsidian.md/pricing"), t.setAttribute("target", "_blank")
                                    })
                                }), t.createEl("button", {
                                    cls: "mod-cta",
                                    text: "Check for Obsidian Catalyst"
                                }, function(t) {
                                    t.addEventListener("click", function() {
                                        i()
                                    })
                                })
                            }), n && "vip" !== n && r.createEl("a", {}, function(t) {
                                t.createEl("button", {
                                    cls: "mod-cta",
                                    text: "Upgrade to a higher tier"
                                }), t.setAttribute("href", "https://obsidian.md/account"), t.setAttribute("target", "_blank")
                            }), r.createEl("button", {
                                text: "Log out"
                            }, function(t) {
                                t.addEventListener("click", function() {
                                    e.logout(a.display.bind(a))
                                })
                            })
                        }(), s.isLoggedIn ? (t.hide(), r.show()) : (t.show(), r.hide())
                    })
                })
            };
        i()
    }, Ks);

    function Ks(t, e) {
        var n, r = Us.call(this, t, e) || this;
        r.name = "Account", r.id = "account", r.createVaultModal = null;
        var i = createEl("p", {
            cls: "u-center-text"
        }, function(t) {
            t.createEl("label", {
                cls: "input-label",
                text: "Name your vault"
            }), n = t.createEl("input", {
                type: "text"
            }, function(t) {
                t.setAttribute("placeholder", "Obsidian vault")
            })
        });
        return r.createVaultModal = new Or(t, "Create new vault", i, "Create", function() {
            r.app.account.createVault(n.value, function() {
                r.app.account.getVaults(function() {
                    r.createVaultModal.close(), r.setting.open(), r.display()
                })
            })
        }), r
    }
    var $s, Zs, Ys = ($s = function(t, e) {
            return ($s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            $s(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        Js = [{
            id: "obsidian",
            name: "Dark mode"
        }, {
            id: "moonstone",
            name: "Light mode"
        }],
        Xs = "custom-css",
        Qs = (Ys(tc, Zs = Hs), tc.prototype.display = function() {
            var e = this,
                t = this.containerEl,
                o = this.app;
            t.empty(), Lc.addAndGetSettingEl(t, "Base mode", "The base color scheme of Obsidian.").createEl("div", {
                cls: "setting-item-control"
            }, function(t) {
                var i = o.getTheme();
                t.createEl("select", {
                    cls: "dropdown"
                }, function(n) {
                    for (var t = function(e) {
                            n.createEl("option", {
                                value: e.id,
                                text: e.name
                            }, function(t) {
                                t.selected = e.id === i
                            })
                        }, e = 0, r = Js; e < r.length; e++) t(r[e]);
                    n.addEventListener("change", function() {
                        var t = n.value;
                        o.changeTheme(t)
                    })
                })
            });
            var n = o.plugins.plugins.find(function(t) {
                return t.plugin.id === Xs
            });
            if (n) {
                var r, i = n.plugin,
                    a = Lc.addAndGetSettingEl(t, i.name, i.description).createEl("div", {
                        cls: "setting-item-control"
                    }).createEl("div", {
                        cls: "checkbox-container"
                    });
                a.toggleClass("is-enabled", n.enabled), a.addEventListener("click", function() {
                    var t = !n.enabled;
                    a.toggleClass("is-enabled", t), t ? n.enable(!0) : n.disable(!0), r.toggle(t)
                }), (r = Lc.addAndGetSettingEl(t, "Open community themes", "Preview and use amazing themes created by the community.")).createEl("div", {
                    cls: "setting-item-control"
                }, function(t) {
                    t.createEl("button", {
                        cls: "mod-cta",
                        text: "See community themes"
                    }, function(t) {
                        t.addEventListener("click", function() {
                            e.setting.openTabById(Xs)
                        })
                    })
                }), r.toggle(n.enabled)
            }
        }, tc);

    function tc() {
        var t = null !== Zs && Zs.apply(this, arguments) || this;
        return t.name = "Appearance", t.id = "appearance", t
    }
    var ec, nc, rc = (ec = function(t, e) {
            return (ec = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            ec(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        ic = [{
            configKey: G,
            name: "Readable line length",
            description: "Limit maximum line length. Fits less content on the screen, but makes long paragraphs more readable."
        }, {
            configKey: U,
            name: "Auto pair brackets",
            description: "Pair brackets and quotes automatically."
        }, {
            configKey: W,
            name: "Auto pair Markdown syntax",
            description: "Pair * and _ automatically."
        }, {
            configKey: K,
            name: "Smart indent lists",
            description: "Take care of indentation and list marker for you."
        }, {
            configKey: $,
            name: "Fold heading",
            description: "Let you fold everything under a heading."
        }, {
            configKey: Z,
            name: "Fold indent",
            description: "Let you fold a portion of the same indentation, such as lists."
        }, {
            configKey: Y,
            name: "Show line number",
            description: "Show line number in the gutter."
        }, {
            configKey: J,
            name: "Use tabs",
            description: 'Use tabs to indent when pressing the "Tab" key. Set this to off to use spaces.'
        }, {
            configKey: Q,
            name: "Vim key bindings",
            description: "Let you use Vim key bindings in the source editor."
        }],
        oc = (rc(ac, nc = Hs), ac.prototype.display = function() {
            var i = this;
            this.containerEl.empty();
            for (var t = function(t) {
                    var e = t.configKey,
                        n = o.app.vault.getConfig(e),
                        r = Lc.addAndGetSettingEl(o.containerEl, t.name, t.description).createEl("div", {
                            cls: "setting-item-control"
                        }).createEl("div", {
                            cls: "checkbox-container"
                        });
                    r.toggleClass("is-enabled", n), r.addEventListener("click", function() {
                        var t = r.hasClass("is-enabled");
                        i.app.vault.setConfig(e, !t), r.toggleClass("is-enabled", !t), i.app.workspace.iterateAllLeaves(function(t) {
                            t && t.view instanceof Ba && t.view.updateOptions()
                        })
                    })
                }, o = this, e = 0, n = ic; e < n.length; e++) t(n[e])
        }, ac);

    function ac() {
        var t = null !== nc && nc.apply(this, arguments) || this;
        return t.name = "Editor", t.id = "editor", t
    }
    var sc, cc, lc = (sc = function(t, e) {
            return (sc = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            sc(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        uc = [{
            value: "system",
            description: "Move to system trash"
        }, {
            value: "local",
            description: "Move to Obsidian trash (.trash)"
        }, {
            value: "none",
            description: "Permanent delete"
        }],
        hc = [{
            value: "root",
            description: "Vault root"
        }, {
            value: "current",
            description: "Same folder as the file is in"
        }, {
            value: "folder",
            description: "In the folder specified below"
        }],
        pc = (lc(fc, cc = Hs), fc.prototype.display = function() {
            var r = this,
                o = this.app;
            this.containerEl.empty(), Lc.addAndGetSettingEl(this.containerEl, "Confirm file deletion", "Whether you want to get prompted to confirm file deletion.").createEl("div", {
                cls: "setting-item-control"
            }, function(t) {
                var e = o.vault.getConfig(st),
                    n = t.createEl("div", {
                        cls: "checkbox-container"
                    });
                n.toggleClass("is-enabled", e), n.addEventListener("click", function() {
                    var t = n.hasClass("is-enabled");
                    r.app.vault.setConfig(st, !t), n.toggleClass("is-enabled", !t)
                })
            });
            var t, e, n = Lc.addAndGetSettingEl(this.containerEl, "Deleted files", "What to do with files after you delete them.");

            function a() {
                "folder" === e.value ? t.show() : t.hide()
            }
            n.createEl("div", {
                cls: "setting-item-control"
            }, function(t) {
                var i = o.vault.getConfig(ct);
                n = t.createEl("select", {
                    cls: "dropdown"
                }, function(n) {
                    for (var t = function(e) {
                            n.createEl("option", {
                                value: e.value,
                                text: e.description
                            }, function(t) {
                                t.selected = i === e.value
                            })
                        }, e = 0, r = uc; e < r.length; e++) t(r[e]);
                    n.addEventListener("change", function() {
                        var t = n.value;
                        o.vault.setConfig(ct, t)
                    })
                })
            }), Lc.addAndGetSettingEl(this.containerEl, "Always update internal links", "Whether to automatically update internal links after renaming a file, or always prompt.").createEl("div", {
                cls: "setting-item-control"
            }, function(t) {
                var e = o.vault.getConfig(V),
                    n = t.createEl("div", {
                        cls: "checkbox-container"
                    });
                n.toggleClass("is-enabled", e), n.addEventListener("click", function() {
                    var t = n.hasClass("is-enabled");
                    r.app.vault.setConfig(V, !t), n.toggleClass("is-enabled", !t)
                })
            }), Lc.addAndGetSettingEl(this.containerEl, "New note default location", "Where to put newly created notes. Plugin settings will override this.").createEl("div", {
                cls: "setting-item-control"
            }, function(t) {
                var i = o.vault.getConfig(et);
                e = t.createEl("select", {
                    cls: "dropdown"
                }, function(n) {
                    for (var t = function(e) {
                            n.createEl("option", {
                                value: e.value,
                                text: e.description
                            }, function(t) {
                                t.selected = i === e.value
                            })
                        }, e = 0, r = hc; e < r.length; e++) t(r[e]);
                    n.addEventListener("change", function() {
                        var t = n.value;
                        o.vault.setConfig(et, t), a()
                    })
                })
            });
            var i = o.vault.getConfig(nt),
                s = (t = Lc.addAndGetSettingEl(this.containerEl, "Folder to create new notes in", "Newly created notes will appear under this folder. Plugin settings will override this.")).createEl("input", {
                    type: "text"
                });
            s.value = "/" === i ? "" : i, s.setAttribute("placeholder", "Example: folder 1/folder 2"), s.addEventListener("input", function() {
                var t = s.value;
                o.vault.setConfig(nt, t)
            });
            var c = o.vault.getConfig(tt),
                l = Lc.addAndGetSettingEl(this.containerEl, "Attachment folder path", "Newly created attachment files will appear here. That includes images created via drag and drop or pasting, and audio recordings.").createEl("input", {
                    type: "text"
                });
            l.value = "/" === c ? "" : c, l.setAttribute("placeholder", "Example: folder 1/folder 2"), l.addEventListener("input", function() {
                var t = l.value;
                o.vault.setConfig(tt, t)
            }), a()
        }, fc);

    function fc() {
        var t = null !== cc && cc.apply(this, arguments) || this;
        return t.name = "File", t.id = "file", t
    }
    var dc, vc, gc = (dc = function(t, e) {
            return (dc = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            dc(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        mc = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        yc = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        bc = (gc(wc, vc = Hs), wc.prototype.display = function() {
            var e = this,
                t = this.containerEl;
            t.empty();
            var n = t.createEl("div", {
                cls: "hotkey-settings-container"
            });
            n.createEl("div", {
                cls: "hotkey-search-container"
            }, function(t) {
                e.searchInputEl = t.createEl("input", {
                    type: "text"
                }, function(t) {
                    t.setAttribute("placeholder", "Filter..."), t.addEventListener("input", function() {
                        e.updateHotkeyVisibility()
                    })
                })
            }), this.hotkeyListContainerEl = n.createEl("div", {
                cls: "hotkey-list-container"
            }), this.updateHotkeyVisibility()
        }, wc.prototype.updateHotkeyVisibility = function() {
            var d = this,
                e = this.app.commands,
                v = this.app.hotkeyManager;

            function t(p) {
                if (!e.commands.hasOwnProperty(p)) return 1;
                var f = e.commands[p],
                    t = n.searchInputEl.value.toLowerCase();
                if ("" !== t && !f.name.toLowerCase().contains(t)) return 1;
                Lc.addAndGetSettingEl(n.hotkeyListContainerEl, f.name).createEl("div", {
                    cls: "setting-item-control mod-hotkey"
                }, function(t) {
                    var r = v.getHotkeys(p),
                        e = v.getDefaultHotkeys(p),
                        i = t.createEl("div", {
                            cls: "setting-command-hotkeys"
                        }),
                        n = void 0 !== r,
                        o = void 0 !== e;
                    if (n)
                        for (var a = function(n) {
                                i.createEl("span", {
                                    cls: "setting-hotkey"
                                }, function(t) {
                                    t.setText(bn(n)), t.createEl("span", {
                                        cls: "setting-delete-hotkey"
                                    }, function(t) {
                                        We(t, Fe, 8), t.setAttribute("aria-label", "Delete hotkey"), t.addEventListener("click", function() {
                                            return mc(d, void 0, void 0, function() {
                                                var e;
                                                return yc(this, function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return e = r.filter(function(t) {
                                                                return bn(t) !== bn(n)
                                                            }), v.setHotkeys(p, e), [4, v.save()];
                                                        case 1:
                                                            return t.sent(), this.updateHotkeyVisibility(), [2]
                                                    }
                                                })
                                            })
                                        })
                                    })
                                })
                            }, s = 0, c = r; s < c.length; s++) a(c[s]);
                    else if (o && 0 < e.length)
                        for (var l = function(e) {
                                i.createEl("span", {
                                    cls: "setting-hotkey"
                                }, function(t) {
                                    t.setText(bn(e)), t.createEl("span", {
                                        cls: "setting-delete-hotkey"
                                    }, function(t) {
                                        We(t, Fe, 8), t.setAttribute("aria-label", "Delete hotkey"), t.addEventListener("click", function() {
                                            return mc(d, void 0, void 0, function() {
                                                return yc(this, function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return v.setHotkeys(p, []), [4, v.save()];
                                                        case 1:
                                                            return t.sent(), this.updateHotkeyVisibility(), [2]
                                                    }
                                                })
                                            })
                                        })
                                    })
                                })
                            }, u = 0, h = e; u < h.length; u++) l(h[u]);
                    d.commandBeingCustomized && p === d.commandBeingCustomized.id ? i.createEl("span", {
                        cls: "setting-hotkey mod-active",
                        text: "Press hotkey..."
                    }) : (n && 0 === r.length || !n && !o) && i.createEl("span", {
                        cls: "setting-hotkey mod-empty",
                        text: "Blank"
                    }), n && t.createEl("span", {
                        cls: "setting-restore-hotkey-button"
                    }, function(t) {
                        We(t, Ie, 18), t.setAttribute("aria-label", "Restore default"), t.addEventListener("click", function() {
                            return mc(d, void 0, void 0, function() {
                                return yc(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return v.removeHotkeys(p), [4, v.save()];
                                        case 1:
                                            return t.sent(), this.finishCustomizingHotkey(), [2]
                                    }
                                })
                            })
                        })
                    }), t.createEl("span", {
                        cls: "setting-add-hotkey-button"
                    }, function(t) {
                        We(t, ze, 22), t.setAttribute("aria-label", "Customize this command"), t.addEventListener("click", function() {
                            d.commandBeingCustomized = f, d.app.keymap.pushScope(d.setHotkeyScope), d.updateHotkeyVisibility()
                        }), t.toggleClass("mod-active", f === d.commandBeingCustomized)
                    })
                })
            }
            this.hotkeyListContainerEl.empty();
            var n = this;
            for (var r in e.commands) t(r)
        }, wc.prototype.finishCustomizingHotkey = function() {
            this.app.keymap.popScope(this.setHotkeyScope), this.commandBeingCustomized = null, this.updateHotkeyVisibility()
        }, wc);

    function wc(c, t) {
        var l = vc.call(this, c, t) || this;
        return l.name = "Hotkeys", l.id = "hotkeys", l.setHotkeyScope = null, l.commandBeingCustomized = null, l.searchInputEl = null, l.hotkeyListContainerEl = null, l.setHotkeyScope = new pn(t.scope), l.setHotkeyScope.registerKey(null, null, function(t) {
            var e = l.commandBeingCustomized,
                n = c.hotkeyManager;
            if (e) {
                var r = en(t),
                    i = dn.getModifiers(t),
                    o = dn.decompileModifiers(i);
                if (!dn.isModifierKey(r) && 0 < o.length) {
                    var a = yn(o, r),
                        s = n.getHotkeys(e.id) || [];
                    0 < s.filter(function(t) {
                        return bn(t) === bn(a)
                    }).length || (s.push(a), n.setHotkeys(e.id, s), mc(l, void 0, void 0, function() {
                        return yc(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, n.save()];
                                case 1:
                                    return t.sent(), [2]
                            }
                        })
                    })), l.finishCustomizingHotkey()
                }
                t.preventDefault(), t.stopPropagation()
            }
        }), l.setHotkeyScope.registerKey([], "Escape", function() {
            if (l.commandBeingCustomized) return l.finishCustomizingHotkey(), !1
        }), l
    }
    var kc, Ec, Cc = ((kc = function(t, e) {
        return (kc = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            })(t, e)
    }, function(t, e) {
        function n() {
            this.constructor = t
        }
        kc(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    })(xc, Ec = Hs), xc.prototype.display = function() {
        var a = this.app.plugins;
        this.containerEl.empty();
        for (var r = this.containerEl.createEl("div", {
                cls: "plugin-list-plugins"
            }), s = {}, i = function() {
                for (var t = 0, e = a.plugins; t < e.length; t++) {
                    var n = e[t],
                        r = n.plugin,
                        i = s[r.id];
                    if (i) {
                        var o = n.enabled;
                        i.toggleClass("is-enabled", o)
                    }
                }
            }, t = function(t) {
                var e = t.plugin;
                if (!0 === e.lockOn) return "continue";
                var n = Lc.addAndGetSettingEl(r, e.name, e.description).createEl("div", {
                    cls: "setting-item-control"
                }).createEl("div", {
                    cls: "checkbox-container"
                });
                n.toggleClass("is-enabled", t.enabled), n.addEventListener("click", function() {
                    t.enabled ? t.disable(!0) : t.enable(!0), i()
                }), s[e.id] = n
            }, e = 0, n = a.plugins; e < n.length; e++) t(n[e]);
        a.on("change", i)
    }, xc);

    function xc() {
        var t = null !== Ec && Ec.apply(this, arguments) || this;
        return t.name = "Plugins", t.id = "plugins", t
    }
    var _c, Sc, Lc = ((_c = function(t, e) {
        return (_c = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            })(t, e)
    }, function(t, e) {
        function n() {
            this.constructor = t
        }
        _c(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    })(Mc, Sc = Mr), Mc.prototype.addPluginTab = function(t) {
        this.pluginTabs.push(t), t.load()
    }, Mc.prototype.removePluginTab = function(t) {
        var e = this.activeTab;
        e && e === t && t.close(), t.unload(), this.pluginTabs.remove(t)
    }, Mc.prototype.closeActiveTab = function() {
        var t = this.activeTab;
        t && t.close()
    }, Mc.prototype.setActiveTab = function(t) {
        this.activeTab = t
    }, Mc.prototype.openTabById = function(t) {
        for (var e = 0, n = this.settingTabs; e < n.length; e++) {
            var r = n[e];
            r.id === t && r.open()
        }
        for (var i = 0, o = this.pluginTabs; i < o.length; i++) {
            var a = o[i];
            a.id === t && a.open()
        }
    }, Mc.prototype.onOpen = function() {
        Sc.prototype.onOpen.call(this), this.activeTab && this.activeTab.display()
    }, Mc.addAndGetSettingEl = function(t, e, n) {
        return t.createEl("div", {
            cls: "setting-item"
        }, function(t) {
            t.createEl("div", {
                cls: "setting-item-info"
            }, function(t) {
                t.createEl("div", {
                    cls: "setting-item-name",
                    text: e
                }), n && t.createEl("div", {
                    cls: "setting-item-description"
                }, function(t) {
                    t.innerHTML = n
                })
            })
        })
    }, Mc);

    function Mc(t) {
        var e = Sc.call(this, t) || this;
        e.tabContainer = null, e.pluginTabContainer = null, e.tabContentContainer = null, e.settingTabs = [], e.pluginTabs = [], e.activeTab = null, e.modalEl.addClass("mod-settings"), e.contentEl.createEl("div", {
            cls: "vertical-tabs-container"
        }, function(t) {
            t.createEl("div", {
                cls: "vertical-tab-header"
            }, function(t) {
                t.createEl("div", {
                    cls: "vertical-tab-header-group"
                }, function(t) {
                    t.createEl("div", {
                        cls: "vertical-tab-header-group-title",
                        text: "Core"
                    }), e.tabContainer = t.createEl("div", {
                        cls: "vertical-tab-header-group-items"
                    })
                }), t.createEl("div", {
                    cls: "vertical-tab-header-group"
                }, function(t) {
                    t.createEl("div", {
                        cls: "vertical-tab-header-group-title",
                        text: "Plugins"
                    }), e.pluginTabContainer = t.createEl("div", {
                        cls: "vertical-tab-header-group-items"
                    })
                })
            }), e.tabContentContainer = t.createEl("div", {
                cls: "vertical-tab-content-container"
            })
        }), e.settingTabs.push(new oc(t, e)), e.settingTabs.push(new Cc(t, e)), e.settingTabs.push(new pc(t, e)), e.settingTabs.push(new Qs(t, e)), e.settingTabs.push(new bc(t, e)), e.settingTabs.push(new js(t, e)), e.settingTabs.push(new Ws(t, e));
        for (var n = 0, r = e.settingTabs; n < r.length; n++) {
            r[n].load()
        }
        return e.settingTabs[0].open(), e
    }
    var Ac, Tc = (Ac = function(t, e) {
        return (Ac = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            })(t, e)
    }, function(t, e) {
        function n() {
            this.constructor = t
        }
        Ac(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    });
    Oc.prototype.getValue = function() {
        return this.toggleEl.hasClass("is-enabled")
    }, Oc.prototype.setValue = function(t) {
        this.toggleEl.toggleClass("is-enabled", t)
    }, Oc.prototype.onChange = function(t) {
        this.changeCallback = t
    };

    function Oc(t, e, n) {
        var r = this;
        this.toggleEl = null, this.changeCallback = null;
        var i = Lc.addAndGetSettingEl(t, e, n);
        this.toggleEl = i.createEl("div", {
            cls: "checkbox-container"
        }), this.toggleEl.addEventListener("click", function() {
            var t = r.getValue();
            r.setValue(!t), r.changeCallback && r.changeCallback()
        })
    }
    var Dc = (Pc.prototype.getValue = function() {
        return this.inputEl.value
    }, Pc.prototype.setValue = function(t) {
        this.inputEl.value = t
    }, Pc.prototype.onChange = function(t) {
        this.changeCallback = t
    }, Pc);

    function Pc(t, e, n, r) {
        var i = this;
        this.changeCallback = null;
        var o = this.settingEl = Lc.addAndGetSettingEl(t, e, n);
        this.inputEl = o.createEl("input", {
            type: "text"
        }), r && this.inputEl.setAttribute("placeholder", r), this.inputEl.addEventListener("input", function() {
            i.changeCallback && i.changeCallback()
        })
    }
    var Fc, zc = (Tc(Ic, Fc = Hs), Ic.prototype.load = function() {
        Fc.prototype.load.call(this), this.navEl.detach(), this.setting.pluginTabContainer.appendChild(this.navEl)
    }, Ic.prototype.display = function() {}, Ic.prototype.addTextSetting = function(t, e, n) {
        return new Dc(this.containerEl, t, e, n)
    }, Ic);

    function Ic(t, e) {
        var n = Fc.call(this, t, t.setting) || this;
        return n.pluginInstance = null, n.pluginInstance = e, n.name = e.plugin.name, n.id = e.plugin.id, n
    }
    var Rc, Hc = (Rc = function(t, e) {
            return (Rc = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            Rc(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        Nc = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        qc = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        Bc = "https://raw.githubusercontent.com/",
        jc = "obsidian.css";

    function Vc(t, e) {
        var n = new XMLHttpRequest;
        n.open("GET", t), n.send(null), n.onload = function() {
            e(n.responseText)
        }, n.onerror = function() {
            throw Error(n.statusText)
        }
    }
    var Gc = (Uc.prototype.init = function(t, e) {
        e.registerSettingTab(new Kc(t, e))
    }, Uc.prototype.onEnable = function(n, t) {
        return Nc(this, void 0, void 0, function() {
            var e;
            return qc(this, function(t) {
                switch (t.label) {
                    case 0:
                        return this.app = n, e = this.styleEl = createEl("style", {
                            type: "text/css"
                        }), n.vault.on("create", this.boundFileUpdated), n.vault.on("modify", this.boundFileUpdated), n.vault.on("delete", this.boundFileUpdated), [4, this.reloadCss()];
                    case 1:
                        return t.sent(), document.head.appendChild(e), [2]
                }
            })
        })
    }, Uc.prototype.onFileUpdated = function(t) {
        t.path === jc && this.reloadCss()
    }, Uc.prototype.reloadCss = function() {
        return Nc(this, void 0, void 0, function() {
            var e, n, r;
            return qc(this, function(t) {
                switch (t.label) {
                    case 0:
                        return e = this.app, (n = e.vault.getAbstractFileByPath(jc)) instanceof _t ? (r = this.applyCss, [4, e.vault.read(n)]) : [3, 2];
                    case 1:
                        return r.apply(this, [t.sent()]), [3, 3];
                    case 2:
                        this.applyCss(""), t.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, Uc.prototype.applyCss = function(t) {
        this.styleEl.textContent = t
    }, Uc.prototype.onDisable = function() {
        var t = this.app;
        t.vault.off("create", this.boundFileUpdated), t.vault.off("modify", this.boundFileUpdated), t.vault.off("delete", this.boundFileUpdated), this.styleEl && this.styleEl.detach()
    }, Uc);

    function Uc() {
        this.id = "custom-css", this.name = "Custom CSS", this.description = 'Reads "obsidian.css" in the vault and applies it.', this.app = null, this.styleEl = null, this.boundFileUpdated = this.onFileUpdated.bind(this)
    }
    var Wc, Kc = (Hc($c, Wc = zc), $c.prototype.display = function() {
        var h = this;
        Wc.prototype.display.call(this), this.containerEl.empty();
        var p, f = this.pluginInstance.plugin,
            c = this.app.getTheme();
        try {
            new Fr("Fetching community theme data..."), Vc("https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-themes.json", function(t) {
                var u = JSON.parse(t);
                u.sort(function(t, e) {
                    return t.name.localeCompare(e.name)
                });
                var n, r, e = h.containerEl.createEl("div", {
                        cls: "community-theme-container"
                    }),
                    i = e.createEl("div", {
                        cls: "community-theme-filters-container"
                    });
                i.createEl("div", {
                    cls: "community-theme-search-container"
                }, function(t) {
                    n = t.createEl("input", {
                        type: "text"
                    }, function(e) {
                        e.setAttribute("placeholder", "Filter..."), e.addEventListener("input", function() {
                            var t = e.value.toLowerCase();
                            h.updateThemeVisibility(t, r.hasClass("is-enabled"))
                        })
                    })
                }), i.createEl("div", {
                    cls: "community-theme-mode-toggle-container"
                }, function(t) {
                    t.createEl("label", {
                        cls: "community-theme-mode-toggle-label",
                        text: "obsidian" === c ? "Dark mode only" : "Light mode only"
                    }), r = t.createEl("div", {
                        cls: "checkbox-container is-enabled"
                    }, function(e) {
                        e.addEventListener("click", function() {
                            var t = !e.hasClass("is-enabled");
                            e.toggleClass("is-enabled", t), h.updateThemeVisibility(n.value.toLowerCase(), t)
                        })
                    })
                }), p = e.createEl("div", {
                    cls: "community-theme-list"
                });
                for (var o = function(e) {
                        var o = e.name,
                            a = e.author,
                            t = e.github,
                            n = e.repo,
                            r = e.screenshot,
                            i = (e.compatibleModes, p.createEl("div", {
                                cls: "community-theme"
                            }));
                        e.domEl = i, h.themes.push(e), i.createEl("div", {
                            cls: "community-theme-title",
                            text: '"' + o + '" by ' + a
                        });
                        var s = Bc + t + "/" + n + "/master/obsidian.css";
                        if (r) {
                            var c = Bc + t + "/" + n + "/master/" + r;
                            i.createEl("img", {
                                cls: "community-theme-screenshot"
                            }, function(t) {
                                t.setAttribute("alt", '"' + o + '" by ' + a), t.setAttribute("src", c)
                            })
                        }
                        var l = i.createEl("div", {
                            cls: "modal-button-container"
                        });
                        l.createEl("button", {
                            cls: "community-theme-preview-button",
                            text: "Preview"
                        }, function(e) {
                            e.addEventListener("click", function() {
                                e.hasClass("mod-cta") ? (e.removeClass("mod-cta"), f.reloadCss(), e.setText("Preview")) : (new Fr("Fetching CSS..."), Vc(s, function(t) {
                                    h.containerEl.findAll(".community-theme-preview-button").forEach(function(t) {
                                        t.removeClass("mod-cta"), t.setText("Preview")
                                    }), e.addClass("mod-cta"), e.setText("Stop preview"), f.applyCss(t)
                                }))
                            })
                        }), l.createEl("button", {
                            text: "Use"
                        }, function(t) {
                            t.addEventListener("click", function() {
                                var r = h.app,
                                    i = r.vault.getAbstractFileByPath(jc);
                                if (i instanceof _t) {
                                    var t = createEl("div");
                                    t.createEl("p", {
                                        text: 'You already have the "obsidian.css" custom CSS file.'
                                    }), t.createEl("p", {
                                        text: "Are you sure you want to override it? You will lose your original CSS file. Please make a back up if necessary."
                                    }), new Or(r, "Override current CSS", t, "Override", function() {
                                        return Nc(h, void 0, void 0, function() {
                                            var n = this;
                                            return qc(this, function(t) {
                                                return new Fr("Fetching CSS..."), Vc(s, function(e) {
                                                    return Nc(n, void 0, void 0, function() {
                                                        return qc(this, function(t) {
                                                            switch (t.label) {
                                                                case 0:
                                                                    return [4, r.vault.modify(i, e)];
                                                                case 1:
                                                                    return t.sent(), new Fr("You're now using \"" + o + '" by ' + a + " as your custom CSS."), f.reloadCss(), [2, !1]
                                                            }
                                                        })
                                                    })
                                                }), [2]
                                            })
                                        })
                                    }, !0).open()
                                } else new Fr("Fetching CSS..."), Vc(s, function(e) {
                                    return Nc(h, void 0, void 0, function() {
                                        return qc(this, function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return [4, r.vault.create(jc, e)];
                                                case 1:
                                                    return t.sent(), new Fr("You're now using \"" + o + '" by ' + a + " as your custom CSS."), f.reloadCss(), [2]
                                            }
                                        })
                                    })
                                })
                            })
                        }), l.createEl("a", {
                            text: "Visit on GitHub"
                        }, function(t) {
                            t.setAttribute("href", "https://github.com/" + e.github + "/" + e.repo), t.setAttribute("_target", "blank")
                        }), e !== u.last() && i.createEl("hr")
                    }, a = 0, s = u; a < s.length; a++) o(s[a]);
                h.updateThemeVisibility("", !0)
            })
        } catch (t) {
            this.containerEl.createEl("div", {
                cls: "message-container"
            }, function(t) {
                t.createEl("div", {
                    cls: "message mod-error",
                    text: "Could not load community themes, please check your network."
                })
            })
        }
    }, $c.prototype.updateThemeVisibility = function(t, e) {
        for (var n, r = "obsidian" === this.app.getTheme() ? "dark" : "light", i = 0, o = this.themes; i < o.length; i++) {
            var a = o[i],
                s = a.name,
                c = a.author,
                l = a.compatibleModes,
                u = !0,
                h = !0;
            "" !== t && (u = ('"' + s + '" by ' + c).toLowerCase().contains(t)), e && l && (h = l.contains(r)), null !== (n = a.domEl) && void 0 !== n && n.toggle(u && h)
        }
    }, $c);

    function $c(t, e) {
        var n = Wc.call(this, t, e) || this;
        return n.themes = [], n.name = "Community themes", n
    }
    var Zc, Yc = (Zc = function(t, e) {
            return (Zc = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            Zc(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        Jc = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        Xc = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        Qc = "YYYY-MM-DD",
        tl = (el.prototype.init = function(t, e) {
            this.app = t, (this.pluginInstance = e).registerRibbonAction("Open today's note", Te, this.onOpenDailyNote.bind(this)), e.registerGlobalCommand({
                id: "daily-notes",
                name: "Open today's note",
                callback: this.onOpenDailyNote.bind(this)
            }), e.registerSettingTab(new rl(t, e, this))
        }, el.prototype.onEnable = function(t, n) {
            return Jc(this, void 0, void 0, function() {
                var e;
                return Xc(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e = this, [4, n.loadData()];
                        case 1:
                            return e.options = t.sent() || {}, [2]
                    }
                })
            })
        }, el.prototype.onOpenDailyNote = function() {
            return Jc(this, void 0, void 0, function() {
                var e, n, r, i, o, a, s, c, l, u, h, p, f, d, v, g, m;
                return Xc(this, function(t) {
                    switch (t.label) {
                        case 0:
                            if (n = (e = this).app, r = e.options, i = window.moment, o = i(), a = null, (s = r.format) && String.isString(s)) try {
                                a = o.format(s)
                            } catch (t) {
                                new Fr('Failed to create daily note. "' + s + '" is not a valid format!'), console.error(t)
                            }
                            if (a = (a = a && a.trim()) || o.format(Qc), c = this.app.workspace.getLeaf(), l = n.metadataCache.getLinktextDest(a, "")) return [3, 5];
                            if (h = void 0, (p = r.folder) && String.isString(p)) {
                                if (f = I.normalizePath(Object(A.k)(p).normalize("NFC")), !((d = n.vault.getAbstractFileByPath(f)) instanceof Mt)) return new Fr('Failed to create daily note. Folder "' + p + '" not found!'), [2];
                                h = d
                            } else h = n.fileManager.getNewFileParent("");
                            return (v = r.template) ? 0 === (g = n.metadataCache.getLinkpathDest(v, "")).length ? (new Fr('Failed to create daily note. Template file "' + v + '" not found!'), [2]) : (m = h.getParentPrefix(), x(a, "md") || (a = C(a, "md")), [4, n.vault.copy(g[0], m + a)]) : [3, 2];
                        case 1:
                            return u = t.sent(), [3, 4];
                        case 2:
                            return [4, n.fileManager.createNewMarkdownFile(h, a)];
                        case 3:
                            u = t.sent(), t.label = 4;
                        case 4:
                            return [3, 6];
                        case 5:
                            u = l.file, t.label = 6;
                        case 6:
                            return [4, c.openFile(u, {
                                state: {
                                    mode: "source"
                                },
                                eState: {
                                    focus: !0
                                }
                            })];
                        case 7:
                            return t.sent(), [2]
                    }
                })
            })
        }, el);

    function el() {
        this.id = "daily-notes", this.name = "Daily notes", this.description = "Open today's daily note, or create one if not present.", this.app = null, this.pluginInstance = null, this.options = {}
    }
    var nl, rl = (Yc(il, nl = zc), il.prototype.display = function() {
        var t = this;

        function e() {
            var t = i.getValue().trim() || Qc,
                e = (0, window.moment)().format(t);
            i.settingEl.find(".setting-item-description").innerHTML = r.format(e)
        }
        nl.prototype.display.call(this), this.containerEl.empty();
        var n = this.plugin.options,
            r = "ISO (default): " + Qc + '<br>US: MMMM Do, YYYY<br>For more syntax, refer to <a href="https://momentjs.com/docs/#/displaying/format/" target="_blank">format reference</a>.<br>Here is what it will look like: <b class="u-pop">{0}</b>.',
            i = this.addTextSetting("Date Format", r, Qc);
        e(), i.inputEl.addEventListener("input", e);
        var o = this.addTextSetting("New file location", "The folder path to create the new daily note.", "Example: folder1/folder2"),
            a = this.addTextSetting("Template file location", "The file path to use as template.", "Example: folder1/note.md");
        n.format && i.setValue(n.format), n.folder && o.setValue(n.folder), n.template && a.setValue(n.template), i.onChange(function() {
            n.format = i.getValue().trim(), t.pluginInstance.saveData(n)
        }), o.onChange(function() {
            n.folder = o.getValue().trim(), t.pluginInstance.saveData(n)
        }), a.onChange(function() {
            n.template = a.getValue().trim(), t.pluginInstance.saveData(n)
        })
    }, il);

    function il(t, e, n) {
        var r = nl.call(this, t, e) || this;
        return r.plugin = n, r
    }
    var ol = (al.prototype.init = function(t) {
        this.app = t
    }, al.prototype.openWithDefaultApp = function(t) {
        this.app.openWithDefaultApp(t)
    }, al.prototype.onFileMenu = function(t, e, n) {
        return n instanceof _t ? [{
            title: "Open in default app",
            icon: ye,
            callback: this.openWithDefaultApp.bind(this)
        }] : null
    }, al);

    function al() {
        this.id = "open-with-default-app", this.name = "Open with default app", this.description = "Add button to open current file with the default app.", this.app = null
    }
    var sl = (cl.prototype.get = function(t) {
        return this.map.get(t)
    }, cl.prototype.set = function(t, e) {
        return this.map.set(t, e), this
    }, cl.prototype.has = function(t) {
        return this.map.has(t)
    }, cl.prototype.delete = function(t) {
        return this.map.delete(t)
    }, cl);

    function cl() {
        this.map = new WeakMap
    }
    var ll = 0,
        ul = (hl.prototype.get = function(t) {
            return this.has(t) ? t[this._] : void 0
        }, hl.prototype.set = function(t, e) {
            return Object.defineProperty(t, this._, {
                configurable: !0,
                value: e
            }), this
        }, hl.prototype.has = function(t) {
            return Object.hasOwnProperty.call(t, this._)
        }, hl.prototype.delete = function(t) {
            return this.has(t) && delete t[this._]
        }, hl);

    function hl() {
        this._ = "_weakmap_" + ll++
    }

    function pl() {
        return new(window.WeakMap ? sl : ul)
    }
    var fl = (dl.prototype.addElement = function(t) {
        this.elements.push(t), this.invalidate(!0)
    }, dl.prototype.removeElement = function(t) {
        this.elements.remove(t), this.invalidate(!0)
    }, dl.prototype.invalidate = function(t) {
        this.rendered = !1, t && this.requestRerender()
    }, dl.prototype.onScroll = function() {
        if (this.running) {
            if (!this.rendered) return this.rerender();
            for (var t = this.parent, e = this.elements, n = this.nodeInfos, r = t.scrollTop, i = t.scrollHeight, o = t.clientHeight, a = r + o, s = Math.max(0, r - o / 2), c = Math.min(i, a + o / 2), l = 0, u = e; l < u.length; l++) {
                var h = u[l];
                if ("none" !== h.style.display) {
                    var p = h.firstChild;
                    if (p) {
                        for (var f = -1, d = f, v = 1, g = -1, m = g; p;) {
                            if (p instanceof HTMLElement) {
                                if (p.classList.contains("sizer")) {
                                    p = p.nextSibling;
                                    continue
                                }
                                var y = n.get(p),
                                    b = y.top,
                                    w = y.height,
                                    k = y.width,
                                    E = b + w;
                                v = Math.max(v, k), E < s ? (p.hide(), -1 === f && (f = b), d = E) : y.top > c ? (p.hide(), -1 === g && (g = b), m = E) : p.show()
                            }
                            p = p.nextSibling
                        }
                        var C = h.firstChild,
                            x = null;
                        C instanceof HTMLElement && C.classList.contains("sizer") ? x = C : (x = createEl("div", {
                            cls: "sizer"
                        }), h.insertBefore(x, C)), x.style.width = v + "px", x.style.height = d - f + "px";
                        var _ = h.lastChild;
                        x = null, _ instanceof HTMLElement && _.classList.contains("sizer") ? x = _ : (x = createEl("div", {
                            cls: "sizer"
                        }), h.appendChild(x)), x.style.width = v + "px", x.style.height = m - g + "px"
                    }
                }
            }
        }
    }, dl.prototype.rerender = function() {
        for (var t = this.elements, e = this.nodeInfos, n = 0, r = t; n < r.length; n++)(a = (l = r[n]).firstChild) && a instanceof HTMLElement && a.classList.contains("sizer") && a.detach(), (a = l.lastChild) && a instanceof HTMLElement && a.classList.contains("sizer") && a.detach();
        for (var i = 0, o = t; i < o.length; i++)
            for (var a = (l = o[i]).firstChild; a;) a instanceof HTMLElement && (a.show(), e.delete(a)), a = a.nextSibling;
        if (this.running) {
            for (var s = 0, c = t; s < c.length; s++) {
                var l;
                for (a = (l = c[s]).firstChild; a;) a instanceof HTMLElement && e.set(a, {
                    top: a.offsetTop,
                    height: a.offsetHeight,
                    width: a.scrollWidth
                }), a = a.nextSibling
            }
            this.rendered = !0, this.onScroll()
        }
    }, dl.prototype.start = function() {
        this.running = !0, this.invalidate(!0)
    }, dl.prototype.stop = function() {
        this.running = !1, this.rerender()
    }, dl);

    function dl(t) {
        this.elements = [], this.rendered = !1, this.nodeInfos = pl(), this.running = !0, t.style.position = "relative", (this.parent = t).addEventListener("scroll", Object(A.h)(this.onScroll.bind(this), 1)), this.requestRerender = Object(A.h)(this.rerender.bind(this), 1)
    }
    var vl, gl = (vl = function(t, e) {
            return (vl = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            vl(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        ml = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        yl = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        bl = (wl.prototype.init = function(t, e) {
            this.app = t, this.instance = e, t.commands.addCommand({
                id: "explorer:new-file",
                name: "Create new note",
                callback: function() {
                    return wl.onKeyNew(t, !1)
                },
                hotkeys: [yn([nn], "n")]
            }), e.registerViewType(Pl, function(t) {
                return new Fl(t)
            })
        }, wl.prototype.onEnable = function(t, e) {
            e.registerEvent(t.workspace.on("layout-ready", this.initLeaf, this))
        }, wl.prototype.onUserEnable = function() {
            this.initLeaf()
        }, wl.prototype.initLeaf = function() {
            0 === this.app.workspace.getLeavesOfType(Pl).length && this.app.workspace.getLeftLeaf(!1).setViewState({
                type: Pl
            })
        }, wl.onKeyNew = function(o, a) {
            return ml(this, void 0, void 0, function() {
                var e, n, r, i;
                return yl(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e = o.workspace, n = "", e.activeLeaf && e.activeLeaf.view instanceof ai && (n = e.activeLeaf.view.file.path), r = o.fileManager.getNewFileParent(n), [4, o.fileManager.createNewMarkdownFile(r)];
                        case 1:
                            return i = t.sent(), [4, e.getLeaf(a).openFile(i, {
                                active: !0,
                                state: {
                                    rename: !0
                                }
                            })];
                        case 2:
                            return t.sent(), [2]
                    }
                })
            }), !1
        }, wl);

    function wl() {
        this.id = "file-explorer", this.name = "File explorer", this.description = "See all the files in your vault.", this.defaultOn = !0
    }
    var kl = [{
            order: "alphabetical",
            description: "Sort by file name (A to Z)"
        }, {
            order: "alphabeticalReverse",
            description: "Sort by file name (Z to A)"
        }, {
            order: "byModifiedTime",
            description: "Sort by edit time (new to old)"
        }, {
            order: "byModifiedTimeReverse",
            description: "Sort by edit time (old to new)"
        }],
        El = {
            alphabetical: function(t, e) {
                return t.basename.localeCompare(e.basename)
            },
            alphabeticalReverse: function(t, e) {
                return -El.alphabetical(t, e)
            },
            byModifiedTime: function(t, e) {
                return e.stat.mtime - t.stat.mtime
            },
            byModifiedTimeReverse: function(t, e) {
                return -El.byModifiedTime(t, e)
            }
        },
        Cl = (xl.prototype.updateTitle = function() {
            this.titleInnerEl.setText(this.getTitle())
        }, xl.prototype.isFullTitleShown = function() {
            var t = this.titleEl;
            return t.scrollWidth === t.clientWidth
        }, xl.prototype.startDrag = function() {
            this.titleEl.addClass("is-being-dragged")
        }, xl.prototype.endDrag = function() {
            this.titleEl.removeClass("is-being-dragged")
        }, xl.prototype.startRename = function() {
            var t = this.titleInnerEl;
            t.addClass("is-being-renamed"), t.setAttribute("contenteditable", "true"), Object(A.q)(t)
        }, xl.prototype.stopRename = function() {
            var t = this.titleInnerEl;
            t.removeClass("is-being-renamed"), t.removeAttribute("contenteditable");
            var e = t.parentElement.find(".tooltip");
            e && e.remove()
        }, xl);

    function xl() {}
    var _l, Sl = (gl(Ll, _l = Cl), Ll.prototype.getTitle = function() {
        return this.file.basename
    }, Ll);

    function Ll(t) {
        var e = _l.call(this) || this;
        e.file = t;
        var n = e.el = createEl("div", {
                cls: "nav-file"
            }),
            r = e.titleEl = n.createEl("div", {
                cls: "nav-file-title"
            }),
            i = t.extension;
        return v.contains(i) || (e.tagEl = r.createEl("div", {
            cls: "nav-file-tag",
            text: i
        })), e.titleInnerEl = r.createEl("div", {
            cls: "nav-file-title-content"
        }), e.updateTitle(), e
    }
    var Ml, Al = (gl(Tl, Ml = Cl), Tl.prototype.getTitle = function() {
        var t = this.folder,
            e = t.name;
        return t.isRoot() && (e = t.vault.getName()), e
    }, Tl.prototype.onTitleElClick = function() {
        this.toggleCollapsed()
    }, Tl.prototype.toggleCollapsed = function(t) {
        this.collapsed = !this.collapsed, this.updateCollapsed(!0, t)
    }, Tl.prototype.updateCollapsed = function(t, e) {
        var n = this;

        function r() {
            e && e(), n.explorer.dom.infinityScroll.invalidate(!0)
        }
        void 0 === t && (t = !1), this.collapsed ? (this.el.addClass("is-collapsed"), t ? zn(this.childrenContainerEl, function() {
            n.childrenContainerEl.detach(), r()
        }) : (this.childrenContainerEl.detach(), r())) : (this.el.appendChild(this.childrenContainerEl), this.el.removeClass("is-collapsed"), t ? Fn(this.childrenContainerEl, r) : r())
    }, Tl.prototype.sort = function() {
        var t = this.folder,
            e = this.explorer,
            n = this.childrenContainerEl,
            i = El[e.currentSortOrder],
            r = t.children.slice();
        r.sort(function(t, e) {
            var n = t instanceof Mt,
                r = e instanceof Mt;
            return n || r ? n && !r ? -1 : r && !n ? 1 : t.path.localeCompare(e.path) : i(t, e)
        });
        for (var o = [], a = 0, s = r; a < s.length; a++) {
            var c = s[a],
                l = e.fileItems[c.path];
            l && o.push(l.el)
        }
        n.setChildrenInPlace(o)
    }, Tl);

    function Tl(t, e) {
        var n = Ml.call(this) || this;
        n.explorer = null, n.explorer = t;
        var r = (n.folder = e).isRoot(),
            i = n.el = createEl("div", {
                cls: "nav-folder"
            });
        r && i.addClass("mod-root");
        var o = n.titleEl = i.createEl("div", {
            cls: "nav-folder-title"
        });
        return n.collapseIndicatorEl = o.createEl("div", {
            cls: "nav-folder-collapse-indicator"
        }), n.titleInnerEl = o.createEl("div", {
            cls: "nav-folder-title-content"
        }), n.childrenContainerEl = i.createEl("div", {
            cls: "nav-folder-children"
        }), n.collapsed = !r, r || (We(n.collapseIndicatorEl, Jt, 8), o.addEventListener("click", n.onTitleElClick.bind(n))), n.updateTitle(), n.updateCollapsed(), n
    }
    var Ol, Dl = function(t) {
            this.headerButtonsContainerEl = null, this.navFileContainerEl = null;
            var e = t.createEl("div", {
                cls: "nav-header"
            });
            this.headerButtonsContainerEl = e.createEl("div", {
                cls: "nav-buttons-container"
            }), this.navFileContainerEl = t.createEl("div", {
                cls: "nav-files-container"
            }), this.infinityScroll = new fl(this.navFileContainerEl)
        },
        Pl = "file-explorer",
        Fl = (gl(zl, Ol = Vn), zl.prototype.getDisplayText = function() {
            return "File Explorer"
        }, zl.prototype.getViewType = function() {
            return Pl
        }, zl.prototype.load = function() {
            var r = this;
            Ol.prototype.load.call(this);
            var i = this.app,
                t = i.vault;
            this.registerEvent(t.on("create", this.onCreate, this)), this.registerEvent(t.on("delete", this.onDelete, this)), this.registerEvent(t.on("rename", this.onRename, this)), this.registerEvent(i.workspace.on("file-open", this.onFileOpen, this)), this.registerEvent(i.workspace.on("resize", this.onResize, this)), this.registerScopeEvent(i.scope.registerKey([], "F2", this.onRenameWithShortcut.bind(this))), this.ready = !1, i.vault.registerInitializedCallback(function() {
                for (var t = 0, e = i.vault.getAllLoadedFiles(); t < e.length; t++) {
                    var n = e[t];
                    r.onCreate(n)
                }
                r.ready = !0, r.requestSort(), r.dom.infinityScroll.invalidate(!0)
            })
        }, zl.prototype.addNavButton = function(t, e, n) {
            var r = this.dom.headerButtonsContainerEl.createEl("div", {
                cls: "nav-action-button"
            });
            r.addEventListener("click", n), r.setAttribute("aria-label", e), We(r, t, 20)
        }, zl.prototype.onCreate = function(t) {
            if (!(t instanceof _t) || _(t.extension)) {
                var e = t.path,
                    n = this.fileItems[e];
                n || (t instanceof _t ? n = this.createItemDom(t) : t instanceof Mt && (n = this.createFolderDom(t)), n instanceof Al && this.dom.infinityScroll.addElement(n.childrenContainerEl), this.fileItems[e] = n, this.files.set(n.el, t)), this.requestSort()
            }
        }, zl.prototype.onDelete = function(t) {
            if (!(t instanceof _t) || _(t.extension)) {
                var e = t.path,
                    n = this.fileItems[e];
                n && (n.el.detach(), n instanceof Al && this.dom.infinityScroll.removeElement(n.childrenContainerEl), this.files.delete(n.el), delete this.fileItems[e], this.currentFile === t && (this.currentFile = null))
            }
        }, zl.prototype.onRename = function(t, e) {
            if (!(t instanceof _t) || _(t.extension)) {
                var n = t.path,
                    r = this.fileItems[e];
                r && (r.updateTitle(), delete this.fileItems[e], this.fileItems[n] = r, this.files.set(r.el, t), this.requestSort())
            }
        }, zl.prototype.openFileContextMenu = function(t, e) {
            var n = this;
            t.preventDefault();
            var o = this.files.get(e.parentElement);
            if (!(o instanceof Mt && o.isRoot())) {
                var r = new Wr;
                if (o instanceof Mt) {
                    var i = o,
                        a = r.addGroup();
                    a.addItem("New note", function(t) {
                        var e = dn.isModifier(t, nn);
                        n.createAbstractFile("file", i, e)
                    }, $t), a.addItem("New folder", function(t) {
                        var e = dn.isModifier(t, nn);
                        n.createAbstractFile("folder", i, e)
                    }, Qt), a.addItem("Set as attachment folder", function() {
                        n.app.setAttachmentFolder(i)
                    }, ae)
                }
                var s = r.addGroup();
                s.addItem("Rename", function() {
                    n.startRenameFile(o)
                }, te), s.addItem("Delete", function() {
                    return ml(n, void 0, void 0, function() {
                        return yl(this, function(t) {
                            return o instanceof Mt ? this.app.fileManager.promptForFolderDeletion(o) : o instanceof _t && this.app.fileManager.promptForFileDeletion(o), [2]
                        })
                    })
                }, Zt);
                for (var c = function(e) {
                        s.addItem(e.title, function() {
                            return ml(n, void 0, void 0, function() {
                                return yl(this, function(t) {
                                    return e.callback(o), [2]
                                })
                            })
                        }, e.icon)
                    }, l = 0, u = this.app.plugins.onFileMenu("file-explorer-context-menu", o, null); l < u.length; l++) c(u[l]);
                o instanceof _t && s.addItem("Make a copy", function(i) {
                    return ml(n, void 0, void 0, function() {
                        var e, n, r;
                        return yl(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return o instanceof _t ? (e = dn.isModifier(i, nn), n = this.app.vault.getAvailablePath(k(o.path), o.extension), [4, this.app.vault.copy(o, n)]) : [3, 2];
                                case 1:
                                    r = t.sent(), this.afterCreate(r, e), t.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                }, le), r.showAtPosition({
                    x: t.pageX,
                    y: t.pageY
                })
            }
        }, zl.prototype.onOpenSortMenu = function(t) {
            var n = this;
            t.preventDefault(), t.stopPropagation();
            for (var e = new Wr, r = e.addGroup(), i = function(t) {
                    var e = r.addItem(t.description, function() {
                        n.setSortOrder(t.order)
                    });
                    t.order === o.currentSortOrder && e.setActive(!0)
                }, o = this, a = 0, s = kl; a < s.length; a++) i(s[a]);
            e.showAtPosition({
                x: t.pageX,
                y: t.pageY
            })
        }, zl.prototype.setSortOrder = function(t) {
            this.currentSortOrder = t, this.app.vault.setConfig(it, t), this.requestSort()
        }, zl.prototype.onCreateNewFolderClick = function(e) {
            return ml(this, void 0, void 0, function() {
                return yl(this, function(t) {
                    return e.preventDefault(), this.createAbstractFile("folder", null, !1), [2]
                })
            })
        }, zl.prototype.onCreateNewNoteClick = function(o) {
            return ml(this, void 0, void 0, function() {
                var e, n, r, i;
                return yl(this, function(t) {
                    return o.preventDefault(), e = dn.isModifier(o, nn), n = this.app.workspace, r = "", n.activeLeaf && n.activeLeaf.view instanceof ai && (r = n.activeLeaf.view.file.path), i = this.app.fileManager.getNewFileParent(r), this.createAbstractFile("file", i, e), [2]
                })
            })
        }, zl.prototype.createAbstractFile = function(r, i, o) {
            return ml(this, void 0, void 0, function() {
                var e, n;
                return yl(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e = this.app, n = null, "file" !== r ? [3, 2] : [4, e.fileManager.createNewMarkdownFile(i)];
                        case 1:
                            return n = t.sent(), [3, 4];
                        case 2:
                            return "folder" !== r ? [3, 4] : [4, e.fileManager.createNewFolder(i)];
                        case 3:
                            n = t.sent(), t.label = 4;
                        case 4:
                            return this.afterCreate(n, o), [2]
                    }
                })
            })
        }, zl.prototype.afterCreate = function(r, i) {
            return ml(this, void 0, void 0, function() {
                var e, n = this;
                return yl(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return r ? (e = this.app, r instanceof _t ? [4, e.workspace.getLeaf(i).openFile(r, {
                                active: !0,
                                state: {
                                    rename: !0
                                }
                            })] : [3, 2]) : [2];
                        case 1:
                            return t.sent(), [3, 3];
                        case 2:
                            e.nextFrame(function() {
                                return ml(n, void 0, void 0, function() {
                                    var e;
                                    return yl(this, function(t) {
                                        return this.sort(), this.startRenameFile(r), (e = this.fileItems[r.path]) && e.titleEl.scrollIntoView(!1), [2]
                                    })
                                })
                            }), t.label = 3;
                        case 3:
                            return [2]
                    }
                })
            })
        }, zl.prototype.onFileClick = function(t, e) {
            if (0 === t.button || 1 === t.button) {
                t.preventDefault();
                var n = this.files.get(e);
                if (n && n instanceof _t) {
                    var r = this.app.workspace,
                        i = dn.isModifier(t, nn);
                    r.getLeaf(i || 1 === t.button).openFile(n, {
                        active: !0,
                        eState: {
                            focus: !0
                        }
                    })
                }
            }
        }, zl.prototype.onFileMouseover = function(t, e) {
            var n = this.files.get(e);
            if (!((this.currentHoverFile = n) instanceof Mt && n.isRoot())) {
                var r = this.fileItems[n.path];
                r && !r.isFullTitleShown() && this.app.tooltip.displayTooltip(e, r.getTitle(), "right", ["mod-multiline"], 24)
            }
        }, zl.prototype.onFileMouseout = function() {
            this.currentHoverFile = null, this.clearTooltip()
        }, zl.prototype.onFileOpen = function(t) {
            this.currentFile && this.fileItems[this.currentFile.path].el.removeClass("is-active"), (this.currentFile = t) && this.fileItems[t.path].el.addClass("is-active")
        }, zl.prototype.onResize = function() {
            this.dom.infinityScroll.invalidate(!0)
        }, zl.prototype.sort = function() {
            if (this.ready) {
                var t = [];
                for (var e in this.fileItems) this.fileItems.hasOwnProperty(e) && t.push(this.fileItems[e]);
                for (var n = this.dom.navFileContainerEl, r = n.scrollTop, i = 0, o = t; i < o.length; i++) {
                    var a = o[i];
                    a instanceof Al && (a.sort(), a.folder.isRoot() && n.appendChild(a.el))
                }
                this.dom.infinityScroll.invalidate(!1), n.scrollTop = r
            }
        }, zl.prototype.attachFileEvents = function(t) {
            t.titleEl.addEventListener("mousedown", this.onFileTitleMousedown.bind(this)), t.titleInnerEl.addEventListener("blur", this.onTitleBlur.bind(this)), t.titleInnerEl.addEventListener("keypress", this.onFileRenameKeypress.bind(this)), t.titleInnerEl.addEventListener("input", this.onFileRenameInput.bind(this))
        }, zl.prototype.attachPrepareToDragEvents = function() {
            function t(t) {
                var e = {
                    x: t.pageX,
                    y: t.pageY
                };
                !n.isDragging && 3 < Object(A.i)(n.startPos, e) && (n.fileItems[n.fileBeingDragged.path].startDrag(), n.isDragging = !0, document.body.addClass("is-grabbing")), n.isDragging && n.dragMove(e, !1)
            }
            var n = this,
                e = function() {
                    n.endDrag(), document.removeEventListener("mousemove", t), document.removeEventListener("mouseup", e)
                };
            document.addEventListener("mousemove", t), document.addEventListener("mouseup", e)
        }, zl.prototype.dragMove = function(t, e) {
            var n = this.dragGhostEl,
                r = t.x,
                i = t.y;
            e ? (r -= 60, i += 30) : (r += 5, i += 5), n.style.left = r + "px", n.style.top = i + "px", n.parentNode || this.app.dom.appContainerEl.appendChild(n)
        }, zl.prototype.createItemDom = function(t) {
            var e = new Sl(t);
            return this.attachFileEvents(e), e
        }, zl.prototype.createFolderDom = function(t) {
            var e = new Al(this, t);
            return e.titleEl.addEventListener("mouseenter", this.onMouseenterFolder.bind(this)), e.titleEl.addEventListener("mouseleave", this.onMouseleaveFolder.bind(this)), e.titleEl.addEventListener("mouseup", this.onDropFolder.bind(this)), this.attachFileEvents(e), e
        }, zl.prototype.onFileTitleMousedown = function(t) {
            if (0 === t.button) {
                var e = t.currentTarget,
                    n = this.files.get(e.parentElement);
                n instanceof Mt && n.isRoot() || (this.startPos = {
                    x: t.pageX,
                    y: t.pageY
                }, this.fileBeingDragged = n, this.dragGhostEl.innerHTML = e.outerHTML, this.attachPrepareToDragEvents())
            }
        }, zl.prototype.onTitleBlur = function() {
            return ml(this, void 0, void 0, function() {
                return yl(this, function(t) {
                    return this.finishRename(), [2]
                })
            })
        }, zl.prototype.onFileRenameKeypress = function(e) {
            var t = e.currentTarget;
            this.clearTooltip(), A.b.some(function(t) {
                return t === e.key
            }) && (e.preventDefault(), this.app.tooltip.displayTooltip(t.parentElement, "File name cannot contain any of the following characters: " + A.b.join(" "), "bottom", ["mod-error"]))
        }, zl.prototype.onFileRenameInput = function(t) {
            var e = t.currentTarget,
                n = this.files.get(e.parentElement.parentElement),
                r = e.getText();
            1 === e.childNodes.length && e.firstChild.nodeType === Node.TEXT_NODE || (e.setText(r), Object(A.r)(e)), r = r.trim(), this.clearTooltip(), this.app.vault.checkForDuplicate(n, r) && this.app.tooltip.displayTooltip(e.parentElement, "There's already a file with the same name", "bottom", ["mod-error"])
        }, zl.prototype.startRenameFile = function(a) {
            return ml(this, void 0, void 0, function() {
                var e, n, r, i, o = this;
                return yl(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return a instanceof Mt && a.isRoot() ? [2] : [4, this.finishRename()];
                        case 1:
                            for (t.sent(), e = function() {
                                    o.app.keymap.pushScope(o.fileRenameScope), o.fileItems[a.path].startRename()
                                }, this.fileBeingRenamed = a, n = a.parent, r = !1; n && null !== n.path;)(i = this.fileItems[n.path]) && i instanceof Al && i.collapsed && i.toggleCollapsed(function() {
                                r && e()
                            }), n = n.parent;
                            return r = !0, e(), [2]
                    }
                })
            })
        }, zl.prototype.finishRename = function() {
            return ml(this, void 0, void 0, function() {
                var e, n, r, i, o, a, s;
                return yl(this, function(t) {
                    switch (t.label) {
                        case 0:
                            if (!(e = this.fileBeingRenamed)) return [2];
                            if (this.exitRename(), n = this.fileItems[e.path], r = n.titleInnerEl, "" === (i = r.getText().trim())) return n.updateTitle(), this.displayError("File name cannot be empty.", n), [2];
                            if (o = e.getNewPathAfterRename(i), e.path === o) return [2];
                            t.label = 1;
                        case 1:
                            return t.trys.push([1, 3, , 4]), [4, this.app.fileManager.renameFile(e, o)];
                        case 2:
                            return t.sent(), [3, 4];
                        case 3:
                            return (a = t.sent()) && (s = a.message || a.code || a.toString(), this.displayError(s, n)), [3, 4];
                        case 4:
                            return n.updateTitle(), [2]
                    }
                })
            })
        }, zl.prototype.displayError = function(t, e) {
            this.app.tooltip.displayTooltip(e.titleEl, t, "bottom", ["mod-error"]), setTimeout(this.clearTooltip.bind(this), 2e3)
        }, zl.prototype.exitRename = function() {
            var t = this.fileBeingRenamed;
            this.fileBeingRenamed = null, this.fileItems[t.path].stopRename(), this.app.keymap.popScope(this.fileRenameScope)
        }, zl.prototype.onMouseenterFolder = function(t) {
            this.isDragging && t.currentTarget.addClass("is-being-dragged-over")
        }, zl.prototype.onMouseleaveFolder = function(t) {
            this.isDragging && t.currentTarget.removeClass("is-being-dragged-over")
        }, zl.prototype.onDropFolder = function(s) {
            return ml(this, void 0, void 0, function() {
                var e, n, r, i, o, a;
                return yl(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return this.isDragging ? ((e = s.currentTarget).removeClass("is-being-dragged-over"), n = this.fileBeingDragged, r = this.files.get(e.parentElement), n === r ? [2] : (i = n.name, "/" !== r.path && (i = r.path + "/" + i), n.path === i ? [2] : (this.app.vault.getAbstractFileByPath(i) && (o = k(i), a = E(m(i)), i = this.app.vault.getAvailablePath(o, a)), [4, this.app.fileManager.renameFile(n, i)]))) : [3, 2];
                        case 1:
                            t.sent(), t.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })
        }, zl.prototype.endDrag = function() {
            this.fileItems[this.fileBeingDragged.path].endDrag(), document.body.removeClass("is-grabbing"), this.isDragging = !1, this.fileBeingDragged = null, this.dragGhostEl.detach(), this.startPos = null
        }, zl.prototype.onKeyEnterInRename = function(t) {
            t.preventDefault(), this.finishRename()
        }, zl.prototype.onKeyEscInRename = function() {
            var t = this.fileBeingRenamed;
            t && (this.fileItems[t.path].updateTitle(), this.exitRename())
        }, zl.prototype.onRenameWithShortcut = function() {
            return ml(this, void 0, void 0, function() {
                return yl(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return this.currentHoverFile ? [4, this.startRenameFile(this.currentHoverFile)] : [3, 2];
                        case 1:
                            t.sent(), t.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })
        }, zl.prototype.clearTooltip = function() {
            this.app.tooltip.hideTooltip()
        }, zl);

    function zl(t) {
        var e = Ol.call(this, t) || this;
        e.icon = Qt, e.dom = null, e.currentFile = null, e.currentHoverFile = null, e.currentSortOrder = "alphabetical", e.isDragging = !1, e.fileBeingDragged = null, e.fileBeingRenamed = null, e.fileRenameScope = null, e.startPos = null, e.dragGhostEl = createEl("div", {
            cls: "drag-ghost"
        }), e.ready = !1, e.fileItems = {}, e.files = pl(), e.currentFile = null, e.fileRenameScope = new pn(e.app.scope), e.currentSortOrder = e.app.vault.getConfig(it), e.fileRenameScope.registerKey([], "Enter", e.onKeyEnterInRename.bind(e)), e.fileRenameScope.registerKey([], "Escape", e.onKeyEscInRename.bind(e)), e.requestSort = e.app.nextFrameOnceCallback(e.sort.bind(e));
        var n = e.containerEl;
        return e.dom = new Dl(n), n.on("click", ".nav-file", e.onFileClick.bind(e)), n.on("auxclick", ".nav-file", e.onFileClick.bind(e)), n.on("mouseover", ".nav-file, .nav-folder", e.onFileMouseover.bind(e)), n.on("mouseout", ".nav-file, .nav-folder", e.onFileMouseout.bind(e)), n.on("contextmenu", ".nav-file-title, .nav-folder-title", e.openFileContextMenu.bind(e)), e.addNavButton(Xt, "New note", e.onCreateNewNoteClick.bind(e)), e.addNavButton(Qt, "New folder", e.onCreateNewFolderClick.bind(e)), e.addNavButton(De, "Change sort order", e.onOpenSortMenu.bind(e)), e
    }
    var Il, Rl = (Il = function(t, e) {
            return (Il = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            Il(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        Hl = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        Nl = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        ql = (Bl.prototype.init = function(t, e) {
            this.app = t, (this.pluginInstance = e).registerRibbonAction("Open graph view", ie, this.openGraphView.bind(this)), e.registerGlobalCommand({
                id: "graph:open",
                name: "Open graph view",
                callback: this.openGraphView.bind(this),
                hotkeys: [yn([nn], "g")]
            }), e.registerViewType(Zl, function(t) {
                return new Yl(t)
            })
        }, Bl.prototype.openGraphView = function() {
            return Hl(this, void 0, void 0, function() {
                return Nl(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.app.workspace.getLeaf().setViewState({
                                type: Zl,
                                active: !0,
                                state: {}
                            })];
                        case 1:
                            return t.sent(), [2]
                    }
                })
            })
        }, Bl);

    function Bl() {
        this.name = "Graph view", this.description = "See a graph overview of which notes link to which.", this.defaultOn = !0
    }
    var jl = (Vl.prototype.initGraphics = function() {
        this.hanger = new PIXI.Container;
        for (var t = 0, e = this.links; t < e.length; t++) e[t].initGraphics();
        for (var n = 0, r = this.nodes; n < r.length; n++) r[n].initGraphics()
    }, Vl.prototype.clearGraphics = function() {
        this.hanger = null;
        for (var t = 0, e = this.links; t < e.length; t++) e[t].clearGraphics();
        for (var n = 0, r = this.nodes; n < r.length; n++) r[n].clearGraphics()
    }, Vl.prototype.addNode = function(t) {
        var e = this.nodes,
            n = this.nodeLookup;
        if (n.hasOwnProperty(t)) return n[t];
        var r = new Gl(this, t);
        return e.push(r), n[r.id] = r
    }, Vl.prototype.addLink = function(t, e) {
        if (t !== e) {
            var n = this.linkLookup.get(t.id);
            if (!n || !n.contains(e.id)) {
                var r = new Wl(this, t, e);
                this.links.push(r), this.linkLookup.add(t.id, e.id), this.linkLookup.add(e.id, t.id)
            }
        }
    }, Vl.prototype.highlight = function(t) {
        this.highlightNode && (this.highlightNode.rendered = !1), (this.highlightNode = t) && (t.rendered = !1), this.changed()
    }, Vl.prototype.updateZoom = function() {
        if (.02 <= Math.abs(this.targetScale - this.scale)) {
            var t = this.hanger,
                e = this.scale,
                n = this.targetScale,
                r = this.zoomCenterX,
                i = this.zoomCenterY,
                o = (r - t.x) / t.scale.x,
                a = (i - t.y) / t.scale.y;
            this.scale = e = .8 * e + .2 * n;
            var s = o * e + t.x,
                c = a * e + t.y;
            t.x -= s - r, t.y -= c - i, t.scale.x = e, t.scale.y = e, this.changed()
        }
    }, Vl.prototype.changed = function() {
        this.lastChange = Date.now()
    }, Vl);

    function Vl() {
        this.nodeLookup = {}, this.nodes = [], this.links = [], this.linkLookup = new A.e, this.highlightNode = null, this.scale = 1, this.targetScale = 1, this.zoomCenterX = 0, this.zoomCenterY = 0, this.hanger = null
    }
    var Gl = (Ul.prototype.initGraphics = function() {
        var t = this.data,
            e = this.circle = new PIXI.Graphics;
        e.interactive = !0, e.buttonMode = !0, e.zIndex = 1;
        var n = this.getSize(),
            r = new PIXI.TextStyle({
                fontSize: 14 + n / 4,
                fill: t.colorText,
                fontFamily: "Inter",
                wordWrap: !0,
                wordWrapWidth: 300,
                align: "center"
            }),
            i = this.text = new PIXI.Text(this.getDisplayText(), r);
        i.anchor.set(.5, 0), i.resolution = 2, i.zIndex = 2, t.hanger.addChild(e), t.hanger.addChild(i)
    }, Ul.prototype.clearGraphics = function() {
        this.circle = null, this.text = null, this.rendered = !1
    }, Ul.prototype.render = function() {
        var t = this.data,
            e = this.x,
            n = this.y,
            r = this.circle,
            i = this.text,
            o = this.rendered,
            a = this.getSize();
        r.x = e, r.y = n;
        var s = t.highlightNode,
            c = .2;
        if (s && s !== this) {
            var l = t.linkLookup.get(s.id);
            l && l.contains(this.id) && (c = 1)
        } else c = 1;
        r.alpha = .7 * r.alpha + .3 * c;
        var u = 2 * (t.scale - .3);
        u = Math.max(0, Math.min(1, u)), u = r.alpha * u, t.highlightNode === this && (u = 1), this.text.alpha = u;
        var h = Math.sqrt(1 / t.scale);
        if (r.scale.x = h, r.scale.y = h, i.scale.x = h, i.scale.y = h, i.x = e, i.y = n + (a + 5) * h, t.highlightNode === this && t.scale < 1 && (i.scale.x = 1 / t.scale, i.scale.y = 1 / t.scale), !o) {
            var p = this.data.highlightNode === this;
            r.clear(), p && r.lineStyle(Math.max(1, 1 / t.scale), t.colorCircle, 1), r.beginFill(p ? t.colorFillHighlight : t.colorFill, 1), r.drawCircle(0, 0, a), r.endFill(), this.rendered = !0
        }
    }, Ul.prototype.getSize = function() {
        return Math.max(8, Math.min(3 * Math.sqrt(this.weight + 1), 25))
    }, Ul.prototype.getDisplayText = function() {
        var t = this.id;
        return x(t, "md") && (t = w(t)), t
    }, Ul);

    function Ul(t, e) {
        this.weight = 0, this.rendered = !1, this.data = t, this.id = e
    }
    var Wl = (Kl.prototype.initGraphics = function() {
        var t = new PIXI.Graphics;
        this.data.hanger.addChild(t), this.px = t
    }, Kl.prototype.clearGraphics = function() {
        this.px = null
    }, Kl.prototype.render = function() {
        var t = this.px,
            e = this.data,
            n = this.source,
            r = this.target,
            i = e.colorLine,
            o = .2,
            a = this.data.highlightNode;
        a || (o = 1), n !== a && r !== a || (i = e.colorLineHighlight, o = 1);
        var s = 2 / e.scale;
        t.clear(), t.lineStyle(s, i, 1), t.moveTo(n.x, n.y), t.lineTo(r.x, r.y), t.alpha = .7 * t.alpha + .3 * o
    }, Kl);

    function Kl(t, e, n) {
        this.data = t, this.source = e, this.target = n
    }
    var $l, Zl = "graph",
        Yl = (Rl(Jl, $l = Qr), Jl.prototype.getDisplayText = function() {
            return "Graph view"
        }, Jl.prototype.load = function() {
            $l.prototype.load.call(this), this.registerEvent(this.leaf.workspace.on("resize", this.onResize, this))
        }, Jl.prototype.getViewType = function() {
            return Zl
        }, Jl.prototype.onOpen = function() {
            return Hl(this, void 0, Promise, function() {
                var e, o = this;
                return Nl(this, function(t) {
                    return e = this.contentEl, PIXI.utils.skipHello(), this.app.nextFrame(function() {
                        o.app.vault.registerInitializedCallback(function() {
                            function n(t) {
                                t.style.margin = "0", t.style.padding = "0", t.style.border = "0", t.style.width = "100%", t.style.height = "100%", t.style.overflow = "hidden"
                            }
                            var r = e.createEl("iframe"),
                                i = o.interactiveEl = e.createEl("canvas");

                            function t() {
                                var t = r.contentDocument.body;
                                n(t), t.innerHTML = "<canvas>";
                                var e = t.firstChild;
                                n(e), o.px && o.px.destroy(!0, {
                                    children: !0,
                                    texture: !0,
                                    baseTexture: !0
                                }), (o.px = new PIXI.Application({
                                    view: e,
                                    antialias: !0,
                                    transparent: !0
                                })).renderer.plugins.interaction.setTargetElement(i), o.displayGraph()
                            }
                            e.style.padding = "0", e.style.overflow = "hidden", e.style.position = "relative", i.style.position = "absolute", i.style.left = "0", i.style.top = "0", n(i), n(r), i.addEventListener("mousedown", function(t) {
                                return t.preventDefault()
                            }), r.onload = t, r.contentDocument && t()
                        })
                    }), [2]
                })
            })
        }, Jl.prototype.onClose = function() {
            return Hl(this, void 0, Promise, function() {
                var e, n, r, i, o;
                return Nl(this, function(t) {
                    return cancelAnimationFrame(this.timer), n = (e = this).contentEl, r = e.simulation, i = e.px, o = e.interactiveEl, n.empty(), r && (r.stop(), this.simulation = null), i && (i.destroy(!0, {
                        children: !0,
                        texture: !0,
                        baseTexture: !0
                    }), this.px = null), o && (o.detach(), this.interactiveEl = null), this.data = null, document.body.removeClass("is-grabbing"), [2]
                })
            })
        }, Jl.prototype.onResize = function() {
            var t = this.px,
                e = this.contentEl,
                n = this.data,
                r = this.interactiveEl;
            if (t) {
                var i = window.devicePixelRatio,
                    o = e.clientWidth,
                    a = e.clientHeight,
                    s = Math.round(o * i),
                    c = Math.round(a * i),
                    l = t.renderer;
                l.view.style.width = o + "px", l.view.style.height = a + "px", l.resize(s, c), r.width = o, r.height = a, t.renderer.plugins.interaction.resolution = 1 / i
            }
            n && n.changed()
        }, Jl.prototype.onMouseEnter = function() {
            this.focus = !0
        }, Jl.prototype.onMouseLeave = function() {
            this.focus = !1
        }, Jl.prototype.assembleGraphData = function() {
            var n = this.app.metadataCache.getLinks(),
                t = Object.keys(n);
            t.sort(function(t, e) {
                return n[e].length - n[t].length
            });
            for (var e = new jl, r = 0, i = t; r < i.length; r++) "md" === E(s = i[r]) && e.addNode(s);
            for (var o = 0, a = t; o < a.length; o++)
                for (var s = a[o], c = e.nodeLookup[s], l = 0, u = n[s]; l < u.length; l++) {
                    var h = u[l].link,
                        p = this.app.metadataCache.getLinktextDest(h, s);
                    if (p) {
                        if ("md" !== p.file.extension) continue;
                        h = p.file.path
                    }
                    var f = e.addNode(h);
                    e.addLink(c, f), c.weight += 1, f.weight += 1
                }
            return e
        }, Jl.prototype.displayGraph = function() {
            var i = this;
            cancelAnimationFrame(this.timer);
            var a = this.data;

            function t(t) {
                var e = document.body.createEl("div", {
                        cls: "graph-view " + t
                    }),
                    n = getComputedStyle(e).color;
                e.detach();
                var r = n.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*\d+\s*)?\)$/i);
                return r ? (255 & parseInt(r[1])) << 16 | (255 & parseInt(r[2])) << 8 | 255 & parseInt(r[3]) : 0
            }
            a ? a.clearGraphics() : a = this.data = this.assembleGraphData(), a.colorFill = t("color-fill"), a.colorCircle = t("color-circle"), a.colorLine = t("color-line"), a.colorText = t("color-text"), a.colorFillHighlight = t("color-fill-highlight"), a.colorLineHighlight = t("color-line-highlight"), this.onResize();
            var s = this.px,
                r = this.contentEl,
                c = this.simulation;
            if (!c) {
                var e = r.clientWidth,
                    n = r.clientHeight,
                    o = window.d3;
                (c = this.simulation = o.forceSimulation(a.nodes).force("forceX", o.forceX().strength(.1).x(e / 2)).force("forceY", o.forceY().strength(.1).y(n / 2)).force("link", o.forceLink().id(function(t) {
                    return t.id
                }).distance(250)).force("charge", o.forceManyBody().strength(function(t) {
                    return -1e3
                })).force("center", o.forceCenter(e / 2, n / 2)).force("collision", o.forceCollide().radius(60))).nodes(a.nodes), c.force("link").links(a.links)
            }
            a.initGraphics();
            var l = a.hanger,
                u = null,
                h = null,
                p = new PIXI.Graphics;
            p.beginFill(0), p.drawRect(0, 0, 1e4, 1e4), p.endFill(), p.alpha = 0, p.interactive = !0, p.on("pointerdown", function(t) {
                u = t.data.getLocalPosition(s.stage), h = {
                    x: l.x,
                    y: l.y
                }, document.body.addClass("is-grabbing")
            }).on("pointerup", function() {
                u = null, document.body.removeClass("is-grabbing")
            }).on("pointerupoutside", function() {
                u = null, document.body.removeClass("is-grabbing")
            }).on("pointermove", function(t) {
                if (u) {
                    var e = t.data.getLocalPosition(s.stage);
                    l.x = h.x + e.x - u.x, l.y = h.y + e.y - u.y, a.changed()
                }
            }), s.stage.addChild(p), s.stage.addChild(l);
            var f = new Map,
                d = null,
                v = this.interactiveEl;

            function g(t) {
                t.data.originalEvent.target === v && (this.dragging = !0, d = t.data.getLocalPosition(s.stage))
            }
            var m = function(t, e) {
                i.app.workspace.openLinkText(t.id, "", e)
            };

            function y(t) {
                if (t.data.originalEvent.target === v) {
                    this.dragging = !1;
                    var e = a.nodeLookup[f.get(this)];
                    e && (d && m(e, dn.isModifier(t.data.originalEvent, nn)), e.fx = null, e.fy = null, c.alphaTarget(0))
                }
            }

            function b(t) {
                if (this.dragging) {
                    var e = t.data.getLocalPosition(a.hanger),
                        n = a.nodeLookup[f.get(this)];
                    if (n) {
                        if (d) {
                            var r = t.data.getLocalPosition(s.stage),
                                i = r.x - d.x,
                                o = r.y - d.y;
                            25 < i * i + o * o && (d = null)
                        }
                        n.fx = e.x, n.fy = e.y, c.alphaTarget(.3), c.restart(), a.changed()
                    }
                }
            }

            function w(t) {
                a.highlight(t)
            }

            function k() {
                w(a.nodeLookup[f.get(this)])
            }

            function E() {
                w(null)
            }
            for (var C = 0, x = a.nodes; C < x.length; C++) {
                var _ = x[C];
                _.circle.on("pointerdown", g).on("pointerup", y).on("pointerupoutside", y).on("pointermove", b).on("pointerover", k).on("pointerout", E), f.set(_.circle, _.id)
            }
            l.sortChildren(), this.interactiveEl.addEventListener("wheel", function(t) {
                if (i.px === s) {
                    var e = t.deltaY;
                    1 === t.deltaMode ? e *= 40 : 2 === t.deltaMode && (e *= 800), a.targetScale *= Math.pow(1.5, -e / 120), a.targetScale = Math.min(4, Math.max(1 / 32, a.targetScale));
                    var n = window.devicePixelRatio;
                    a.targetScale < a.scale ? (a.zoomCenterX = r.clientWidth / 2 * n, a.zoomCenterY = r.clientHeight / 2 * n) : (a.zoomCenterX = t.offsetX * n, a.zoomCenterY = t.offsetY * n), a.changed(), cancelAnimationFrame(i.timer), i.timer = requestAnimationFrame(S)
                }
            });
            var S = function() {
                if (c.alpha() > c.alphaMin() && (c.tick(), a.changed()), a.updateZoom(), a.lastChange + 1e3 < Date.now()) s.ticker.stop();
                else {
                    for (var t = 0, e = a.links; t < e.length; t++) e[t].render();
                    for (var n = 0, r = a.nodes; n < r.length; n++) r[n].render();
                    s.ticker.start()
                }
                cancelAnimationFrame(i.timer), i.timer = requestAnimationFrame(S)
            };
            S()
        }, Jl);

    function Jl(t) {
        var e = $l.call(this, t) || this;
        e.icon = ie, e.timer = null, e.simulation = null, e.px = null, e.data = null, e.interactiveEl = null, e.focus = !0;
        var n = e.containerEl;
        return n.addEventListener("mouseenter", e.onMouseEnter.bind(e)), n.addEventListener("mouseleave", e.onMouseLeave.bind(e)), e
    }
    var Xl = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        Ql = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        tu = (eu.prototype.init = function(t, e) {
            this.app = t, this.pluginInstance = e
        }, eu.prototype.onLinkHover = function(e, n, r, i) {
            var t = this,
                o = e.workspace.showHoverPopover(n);
            Xl(t, void 0, void 0, function() {
                return Ql(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, Hi.load(this.app, r, i.path, o, !0, !1)];
                        case 1:
                            return t.sent() || (o.createEl("div", {
                                cls: "markdown-embed",
                                text: '"' + r + '" is not created yet. Click to create.'
                            }), o.addClass("mod-empty")), e.workspace.positionPopover(n), [2]
                    }
                })
            })
        }, eu);

    function eu() {
        this.id = "page-hover-preview", this.name = "Page preview", this.description = "Preview a note when hovering an internal link. Ctrl/Cmd + hover in editor mode."
    }
    var nu, ru = (nu = function(t, e) {
            return (nu = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            nu(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        iu = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        ou = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        au = function(c) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var t, e = c[Symbol.asyncIterator];
            return e ? e.call(c) : (c = "function" == typeof __values ? __values(c) : c[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                return this
            }, t);

            function n(s) {
                t[s] = c[s] && function(a) {
                    return new Promise(function(t, e) {
                        var n, r, i, o;
                        a = c[s](a), n = t, r = e, i = a.done, o = a.value, Promise.resolve(o).then(function(t) {
                            n({
                                value: t,
                                done: i
                            })
                        }, r)
                    })
                }
            }
        },
        su = (cu.prototype.init = function(t, e) {
            e.registerRibbonAction("Open Markdown importer", ue, this.onOpen.bind(this)), e.registerGlobalCommand({
                id: "markdown-importer:open",
                name: "Open Markdown importer",
                callback: this.onOpen.bind(this)
            })
        }, cu.prototype.onEnable = function(t, e) {
            this.modal = new gu(t)
        }, cu.prototype.onDisable = function(t, e) {
            this.modal = null
        }, cu.prototype.onOpen = function() {
            return this.modal && this.modal.open(), !1
        }, cu);

    function cu() {
        this.id = "markdown-importer", this.name = "Markdown format importer", this.description = "Convert Mdown from other apps to Obsidian format.", this.defaultOn = !0, this.modal = null
    }
    var lu, uu = /\^\^(\S(.*?\S)?)\^\^/g,
        hu = /\[\[(\d+?)\]\]/g,
        pu = /\B\#([^\u2000-\u206F\u2E00-\u2E7F'!"#$%&()*+,.:;<=>?@^`{|}~\/\[\]\\\s]+\b)/g,
        fu = /\B\#(\[\[[\w \t]*?\]\])/g,
        du = /\{\{\[\[(TODO|DONE)\]\]\}\}/g,
        vu = [{
            name: "Roam Research tag fixer",
            description: "Converts <code>#tag</code> and <code>#[[tag]]</code> to <code>[[tag]]</code>.",
            convert: function(t, e, n, o) {
                return (n = n.replace(pu, function(t, e) {
                    for (var n = !0, r = 0; r < e.length; r++) {
                        var i = e.charCodeAt(r);
                        if (i < 48 || 57 < i) {
                            n = !1;
                            break
                        }
                    }
                    return n ? t : (o.replaced++, "[[" + e + "]]")
                })).replace(fu, function(t, e) {
                    return o.replaced++, e
                })
            }
        }, {
            name: "Roam Research highlight fixer",
            description: "Converts <code>^^highlight^^</code> to <code>==highlight==</code>.",
            convert: function(t, e, n, r) {
                return n.replace(uu, function(t, e) {
                    return r.replaced++, "==" + e + "=="
                })
            }
        }, {
            name: "Roam Research TODO converter",
            description: "Converts <code>{{[[TODO]]}}</code> to <code>[ ]</code>.",
            convert: function(t, e, n, r) {
                return n.replace(du, function(t, e) {
                    return r.replaced++, "TODO" === e ? "[ ]" : "[x]"
                })
            }
        }, {
            name: "Zettelkasten link fixer",
            description: "Fixes <code>[[UID]]</code> links to full <code>[[UID File Name]]</code>.",
            convert: function(o, a, t, s) {
                return t.replace(hu, function(t, e) {
                    for (var n = 0, r = o.vault.getAllLoadedFiles(); n < r.length; n++) {
                        var i = r[n];
                        if (i instanceof _t && i.basename.contains(e)) return s.replaced++, "[[" + o.metadataCache.fileToLinktext(i, a.path) + "]]"
                    }
                    return t
                })
            }
        }, {
            name: "Zettelkasten link beautifier",
            description: "Fixes <code>[[UID]]</code> links and also beautify them <code>[[UID File Name|File Name]]</code>.",
            convert: function(o, a, t, s) {
                return t.replace(hu, function(t, e) {
                    for (var n = 0, r = o.vault.getAllLoadedFiles(); n < r.length; n++) {
                        var i = r[n];
                        if (i instanceof _t && i.basename.contains(e)) return s.replaced++, "[[" + o.metadataCache.fileToLinktext(i, a.path) + "|" + i.basename.replace(e, "").trim() + "]]"
                    }
                    return t
                })
            }
        }],
        gu = (ru(mu, lu = Mr), mu.prototype.onProcess = function() {
            for (var t = this, e = [], n = 0, r = this.converters; n < r.length; n++) {
                var i = r[n];
                i.toggleEl.hasClass("is-enabled") && e.push(i.conversion)
            }
            0 !== e.length && (this.cancellable = new A.a, this.conversionsEl.detach(), this.contentEl.append(this.resultEl), this.cancelEl.show(), this.goBackEl.hide(), this.doneEl.hide(), this.statusEl.setText("Processing..."), this.cancellable.onCancel(function() {
                t.cancelEl.hide(), t.statusEl.setText("Cancelling...")
            }), this.process(e))
        }, mu.prototype.onCancel = function() {
            var t = this.cancellable;
            t && t.cancel()
        }, mu.prototype.onGoBack = function() {
            this.resultEl.detach(), this.contentEl.append(this.conversionsEl);
            for (var t = 0, e = this.converters; t < e.length; t++) e[t].toggleEl.removeClass("is-enabled")
        }, mu.prototype.onFinish = function(t) {
            this.renderStats(t), this.cancelEl.hide(), this.goBackEl.show(), this.statusEl.setText("Finished!"), this.doneEl.show()
        }, mu.prototype.renderStats = function(t) {
            this.processedEl.setText("Processed files"), this.processedEl.setAttribute("data-label", t.processed.toString()), this.modifiedEl.setText("Modified files"), this.modifiedEl.setAttribute("data-label", t.modified.toString()), this.replacedEl.setText("Total replacements"), this.replacedEl.setAttribute("data-label", t.replaced.toString())
        }, mu.prototype.onClose = function() {
            this.onCancel(), this.onGoBack()
        }, mu.prototype.process = function(v) {
            var g, m;
            return iu(this, void 0, void 0, function() {
                var e, n, r, i, o, a, s, c, l, u, h, p, f, d;
                return ou(this, function(t) {
                    switch (t.label) {
                        case 0:
                            n = (e = this).app, r = e.cancellable, i = {
                                processed: 0,
                                modified: 0,
                                replaced: 0
                            }, t.label = 1;
                        case 1:
                            t.trys.push([1, 9, 10, 15]), o = au(n.vault.iterateMarkdownFiles()), t.label = 2;
                        case 2:
                            return [4, o.next()];
                        case 3:
                            if ((a = t.sent()).done) return [3, 8];
                            if (s = a.value, c = s.file, l = s.content, r.isCancelled()) return this.onFinish(i), [3, 8];
                            for (u = l, h = 0, p = v; h < p.length; h++) f = p[h], u = f.convert(n, c, u, i);
                            return u === l ? [3, 5] : (i.modified++, [4, n.vault.modify(c, u)]);
                        case 4:
                            t.sent(), t.label = 5;
                        case 5:
                            return i.processed++, r.isCancelled() ? (this.onFinish(i), [3, 8]) : (this.renderStats(i), i.processed % 10 != 0 ? [3, 7] : [4, n.nextFramePromise()]);
                        case 6:
                            t.sent(), t.label = 7;
                        case 7:
                            return [3, 2];
                        case 8:
                            return [3, 15];
                        case 9:
                            return d = t.sent(), g = {
                                error: d
                            }, [3, 15];
                        case 10:
                            return t.trys.push([10, , 13, 14]), a && !a.done && (m = o.return) ? [4, m.call(o)] : [3, 12];
                        case 11:
                            t.sent(), t.label = 12;
                        case 12:
                            return [3, 14];
                        case 13:
                            if (g) throw g.error;
                            return [7];
                        case 14:
                            return [7];
                        case 15:
                            return this.onFinish(i), [2]
                    }
                })
            })
        }, mu);

    function mu(t) {
        var e = lu.call(this, t) || this;
        e.converters = [];
        var n = e.contentEl,
            i = e.converters;
        e.titleEl.setText("Markdown format importer");
        for (var o = e.conversionsEl = n.createEl("div"), r = function(e) {
                var t = o.createEl("div", {
                        cls: "setting-item"
                    }),
                    n = t.createEl("div", {
                        cls: "setting-item-info"
                    });
                n.createEl("div", {
                    cls: "setting-item-name",
                    text: e.name
                }), n.createEl("div", {
                    cls: "setting-item-description"
                }, function(t) {
                    t.innerHTML = e.description
                });
                var r = null;
                t.createEl("div", {
                    cls: "setting-item-control"
                }, function(t) {
                    r = t.createEl("div", {
                        cls: "checkbox-container"
                    })
                }), r.addEventListener("click", function() {
                    var t = r.hasClass("is-enabled");
                    r.toggleClass("is-enabled", !t)
                }), i.push({
                    toggleEl: r,
                    conversion: e
                })
            }, a = 0, s = vu; a < s.length; a++) {
            r(s[a])
        }
        o.createEl("p", {
            cls: "setting-message mod-warning",
            text: "Warning: the importer will convert all the files in your vault, not just the current file."
        }), o.createEl("p", {
            cls: "setting-message mod-warning",
            text: "Your files will be overwritten. Back up all your files before attempting conversion."
        }), o.createEl("div", {
            cls: "modal-button-container"
        }).createEl("button", {
            cls: "mod-cta",
            text: "Start Conversion"
        }).addEventListener("click", e.onProcess.bind(e));
        var c = e.resultEl = createEl("div");
        e.statusEl = c.createEl("p", {
            cls: "u-center-text"
        }), e.processedEl = c.createEl("div", {
            cls: "changelog-item mod-success"
        }), e.modifiedEl = c.createEl("div", {
            cls: "changelog-item mod-highlighted"
        }), e.replacedEl = c.createEl("div", {
            cls: "changelog-item mod-highlighted"
        }), e.renderStats({
            processed: 0,
            modified: 0,
            replaced: 0
        });
        var l = c.createEl("div", {
            cls: "modal-button-container"
        });
        return (e.cancelEl = l.createEl("button", {
            cls: "mod-warning",
            text: "Stop"
        })).addEventListener("click", e.onCancel.bind(e)), (e.goBackEl = l.createEl("button", {
            cls: "",
            text: "Go Back"
        })).addEventListener("click", e.onGoBack.bind(e)), (e.doneEl = l.createEl("button", {
            cls: "mod-cta",
            text: "Done"
        })).addEventListener("click", e.close.bind(e)), e
    }
    var yu, bu = (yu = function(t, e) {
            return (yu = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            yu(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        wu = (ku.prototype.init = function(t, e) {
            e.registerRibbonAction("Open quick switcher", he, this.onOpen.bind(this)), e.registerGlobalCommand({
                id: "switcher:open",
                name: "Open quick switcher",
                callback: this.onOpen.bind(this),
                hotkeys: [yn([nn], "o")]
            })
        }, ku.prototype.onEnable = function(t, e) {
            this.modal = new xu(t)
        }, ku.prototype.onDisable = function(t, e) {
            this.modal = null
        }, ku.prototype.onOpen = function() {
            var t = this.modal;
            return t && t.open(), !1
        }, ku);

    function ku() {
        this.id = "switcher", this.name = "Quick switcher", this.description = "Jump to any files without leaving your keyboard. Ctrl/Cmd+O to activate.", this.defaultOn = !0
    }
    var Eu, Cu = [{
            command: "↑↓",
            purpose: "to navigate"
        }, {
            command: "↵",
            purpose: "to open"
        }, {
            command: Je ? "cmd ↵" : "ctrl ↵",
            purpose: "to open in new pane"
        }, {
            command: "shift ↵",
            purpose: "to create"
        }, {
            command: "esc",
            purpose: "to dismiss"
        }],
        xu = (bu(_u, Eu = Ms), _u.prototype.getItemsToFilter = function() {
            return this.app.vault.getAllLoadedFiles().filter(function(t) {
                return t instanceof _t
            }).map(function(t) {
                return t.path
            })
        }, _u.prototype.getEmptySearchItems = function() {
            var n = this;
            return this.app.workspace.getLastOpenFiles().map(function(t) {
                var e = n.app.vault.getAbstractFileByPath(t);
                return !e || e instanceof Mt ? null : e.path
            }).filter(function(t) {
                return !!t
            })
        }, _u.prototype.searchItemOn = function(t) {
            return k(t)
        }, _u.prototype.createSuggestion = function(t, e) {
            var n = t.item;
            da(e, k(n), t.match ? t.match.matches : null), !this.app.vault.getAbstractFileByPath(n) && 0 < this.app.vault.getFileCount() && e.createEl("kbd", {
                cls: "suggestion-hotkey",
                text: "Enter to create"
            })
        }, _u.prototype.onInput = function() {
            var t = this.inputEl.value,
                e = Eu.prototype.onInput.call(this);
            if (t && 0 === e.length && 0 < this.app.vault.getFileCount()) {
                var n = [{
                    item: t,
                    match: null
                }];
                return this.chooser.setSuggestions(n), n
            }
        }, _u.prototype.onChooseOption = function(t) {
            this.close();
            var e = this.app.keymap.matchModifiers(dn.compileModifiers([nn]));
            this.app.workspace.openLinkText(t, "", e, {
                eState: {
                    focus: !0
                }
            }), this.isOpen = !1
        }, _u);

    function _u(e) {
        var n = Eu.call(this, e, "No notes found. Enter to create a new one.", function(t) {
            return 1 === t.length && (0 === n.app.vault.getFileCount() || !e.vault.getAbstractFileByPath(t[0].item))
        }, Cu) || this;
        return n.inputEl.setAttribute("placeholder", "Type file to switch to or create..."), n.scope.registerKey([nn], "Enter", function() {
            if (n.isOpen) return n.chooser.useSuggested(), !1
        }), n.scope.registerKey([on], "Enter", function() {
            if (n.isOpen) {
                var t = n.inputEl.value;
                return n.onChooseOption(t), !1
            }
        }), n.scope.registerKey(null, "Tab", function() {
            return !1
        }), n
    }
    var Su = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        Lu = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        Mu = (Au.prototype.init = function(t, e) {
            this.app = t, (this.pluginInstance = e).registerRibbonAction("Open random note", Ne, this.onRandomNote.bind(this)), e.registerGlobalCommand({
                id: "random-note",
                name: "Open random note",
                callback: this.onRandomNote.bind(this)
            })
        }, Au.prototype.onRandomNote = function() {
            return Su(this, void 0, void 0, function() {
                var e, n, r, i, o;
                return Lu(this, function(t) {
                    switch (t.label) {
                        case 0:
                            for (e = [], n = 0, r = this.app.vault.getAllLoadedFiles(); n < r.length; n++)(i = r[n]) instanceof _t && "md" === i.extension && e.push(i);
                            return o = e[Math.floor(Math.random() * e.length)], [4, this.app.workspace.getLeaf().openFile(o, {
                                eState: {
                                    focus: !0
                                }
                            })];
                        case 1:
                            return t.sent(), [2]
                    }
                })
            })
        }, Au);

    function Au() {
        this.id = "random-note", this.name = "Random note", this.description = "Opens a random note. Useful for reviewing and discovering.", this.app = null, this.pluginInstance = null
    }
    var Tu, Ou = (Tu = function(t, e) {
            return (Tu = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            Tu(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        Du = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        Pu = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        Fu = "slides",
        zu = (Iu.prototype.init = function(t, e) {
            this.app = t, e.registerViewType(Fu, function(t) {
                return new Hu(t)
            })
        }, Iu.prototype.onFileMenu = function(t, e, n) {
            var r = this;
            return n instanceof _t && "md" === n.extension ? [{
                title: "Start presentation",
                icon: pe,
                callback: function(n) {
                    return Du(r, void 0, void 0, function() {
                        var e;
                        return Pu(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return (e = this.app.workspace.getLeaf()) ? [4, e.setViewState({
                                        type: Fu,
                                        active: !0,
                                        state: {
                                            file: n.path
                                        }
                                    })] : [3, 2];
                                case 1:
                                    t.sent(), t.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                }
            }] : null
        }, Iu);

    function Iu() {
        this.id = "slides", this.name = "Slides", this.description = 'Present from Markdown. Use "---" to separate slides.', this.app = null
    }
    var Ru, Hu = (Ou(Nu, Ru = ai), Nu.prototype.getViewType = function() {
        return Fu
    }, Nu.prototype.onLoadFile = function(p) {
        return Du(this, void 0, void 0, function() {
            var e, n, r, i, o, a, s, c, l, u, h = this;
            return Pu(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, this.app.vault.read(p)];
                    case 1:
                        e = t.sent(), n = createEl("div", {
                            cls: "reveal"
                        }, function(t) {
                            t.createEl("div", {
                                cls: "slides"
                            }, function(t) {
                                t.createEl("section", {}, function(t) {
                                    t.setAttribute("data-markdown", ""), t.setAttribute("data-separator", "\n---\n"), t.createEl("script", {
                                        text: e
                                    }, function(t) {
                                        t.setAttribute("type", "text/template")
                                    })
                                })
                            }), t.createEl("div", {
                                cls: "slides-close-btn"
                            }, function(t) {
                                We(t, fe, 30), t.addEventListener("click", h.exitPresentation.bind(h)), t.setAttribute("onclick", "parent.close();")
                            })
                        }), window.close = this.exitPresentation.bind(this);
                        try {
                            r = "moonstone" === this.app.vault.getConfig(j), i = this.contentEl.createEl("iframe", {
                                cls: "slides-iframe"
                            }), o = i.contentWindow.document, (a = o.createElement("link")).setAttribute("rel", "stylesheet"), a.setAttribute("href", "reveal.css"), (s = o.createElement("link")).setAttribute("rel", "stylesheet"), r ? s.setAttribute("href", "reveal.white.css") : s.setAttribute("href", "reveal.black.css"), (c = o.createElement("link")).setAttribute("rel", "stylesheet"), c.setAttribute("href", "app.css"), (l = o.createElement("script")).setAttribute("type", "text/javascript"), l.setAttribute("src", "reveal.min.js"), (u = o.createElement("script")).setAttribute("type", "text/javascript"), u.textContent = 'document.addEventListener("DOMContentLoaded", function() {Reveal.initialize({controlsTutorial: false, overview: false });});', o.head.append(a), o.head.append(s), o.head.append(c), o.body.className = r ? "theme-light" : "theme-dark", o.body.innerHTML = n.outerHTML, o.body.append(l), i.focus()
                        } catch (t) {
                            console.error(t), this.exitPresentation()
                        }
                        return [2]
                }
            })
        })
    }, Nu.prototype.onClose = function() {
        return Du(this, void 0, Promise, function() {
            return Pu(this, function(t) {
                return window.close = null, [2]
            })
        })
    }, Nu.prototype.exitPresentation = function() {
        return Du(this, void 0, void 0, function() {
            return Pu(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, this.leaf.openFile(this.file, {
                            active: !0
                        })];
                    case 1:
                        return t.sent(), [2]
                }
            })
        })
    }, Nu);

    function Nu() {
        return null !== Ru && Ru.apply(this, arguments) || this
    }
    var qu, Bu, ju = (qu = function(t, e) {
            return (qu = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            qu(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        Vu = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        Gu = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        Uu = function() {
            for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
            var r = Array(t),
                i = 0;
            for (e = 0; e < n; e++)
                for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
            return r
        },
        Wu = (ju(Ku, Bu = ut), Ku.prototype.init = function(r, t) {
            var i = this;
            this.app = r, (this.instance = t).registerGlobalCommand({
                id: "star:star-current-file",
                name: "Star/unstar current file",
                callback: function() {
                    var t = r.workspace.activeLeaf;
                    if (t && t.view instanceof ai) {
                        var e = t.view.file,
                            n = i.findStarredFile(e);
                        n ? i.removeFile(n) : i.addFile(e)
                    }
                }
            }), this.instance.registerViewType(Zu, function(t) {
                return new Yu(t, i)
            })
        }, Ku.prototype.onEnable = function(n, r) {
            return Vu(this, void 0, Promise, function() {
                var e;
                return Gu(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return r.registerEvent(n.workspace.on("layout-ready", this.initLeaf, this)), r.registerEvent(n.vault.on("rename", this.onRename, this)), [4, r.loadData()];
                        case 1:
                            return (e = t.sent()) && e.items && Array.isArray(e.items) && (this.items = e.items, this.onItemsChanged(!1)), [2]
                    }
                })
            })
        }, Ku.prototype.onUserEnable = function() {
            this.initLeaf()
        }, Ku.prototype.initLeaf = function() {
            0 === this.app.workspace.getLeavesOfType(Zu).length && this.app.workspace.getLeftLeaf(!1).setViewState({
                type: Zu
            })
        }, Ku.prototype.onRename = function(t, e) {
            for (var n = !1, r = 0, i = this.items; r < i.length; r++) {
                var o = i[r];
                "file" === o.type && o.path === e && (o.path = t.path, n = !0)
            }
            n && this.onItemsChanged(!0)
        }, Ku.prototype.onDisable = function(t, e) {
            Ja.unregisterView(Zu)
        }, Ku.prototype.onFileMenu = function(t, e, n) {
            var r = this;
            if (n instanceof _t) {
                var i = [];
                return this.isFileStarred(n) ? i.push({
                    title: "Unstar",
                    icon: He,
                    callback: function(n) {
                        return Vu(r, void 0, void 0, function() {
                            var e;
                            return Gu(this, function(t) {
                                return n instanceof _t && (e = this.findStarredFile(n), this.removeFile(e)), [2]
                            })
                        })
                    }
                }) : i.push({
                    title: "Star",
                    icon: Re,
                    callback: function(e) {
                        return Vu(r, void 0, void 0, function() {
                            return Gu(this, function(t) {
                                return e instanceof _t && this.addFile(e), [2]
                            })
                        })
                    }
                }), i
            }
            return null
        }, Ku.prototype.findStarredFile = function(e) {
            var t = this.items.filter(function(t) {
                return t.path === e.path
            });
            return 0 < t.length ? t[0] : null
        }, Ku.prototype.isFileStarred = function(t) {
            return null !== this.findStarredFile(t)
        }, Ku.prototype.addFile = function(t) {
            this.isFileStarred(t) || (this.items.push({
                type: "file",
                title: t.basename,
                path: t.path
            }), new Fr("Successfully starred " + t.basename + "."), this.onItemsChanged(!0))
        }, Ku.prototype.removeFile = function(t) {
            this.items.remove(t), new Fr("Removed starred file " + t.title + "."), this.onItemsChanged(!0)
        }, Ku.prototype.onItemsChanged = function(t) {
            this.trigger("changed"), t && this.instance.saveData({
                items: this.items
            })
        }, Ku.prototype.trigger = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            Bu.prototype.trigger.apply(this, Uu([t], e))
        }, Ku.prototype.on = function(t, e, n) {
            return Bu.prototype.on.call(this, t, e, n)
        }, Ku);

    function Ku() {
        var t = null !== Bu && Bu.apply(this, arguments) || this;
        return t.id = "starred", t.name = "Starred", t.description = "Star frequently used files.", t.app = null, t.instance = null, t.items = [], t
    }
    var $u, Zu = "starred",
        Yu = (ju(Ju, $u = Vn), Ju.prototype.getDisplayText = function() {
            return "Starred"
        }, Ju.prototype.getViewType = function() {
            return Zu
        }, Ju.prototype.load = function() {
            $u.prototype.load.call(this), this.registerEvent(this.plugin.on("changed", this.renderItems, this))
        }, Ju.prototype.renderItems = function() {
            var r = this;
            this.listEl.empty();
            for (var t = function(n) {
                    if ("file" !== n.type) return "continue";
                    var t = i.app.vault.getAbstractFileByPath(n.path);
                    if (!(t instanceof _t)) return "continue";
                    var e = new Sl(t);
                    i.listEl.appendChild(e.el), i.files.set(e.el, n), e.el.onClickEvent(function(t) {
                        if (0 === t.button || 1 === t.button) {
                            var e = dn.isModifier(t, nn);
                            r.triggerStarredItem(n, e || 1 === t.button)
                        }
                    })
                }, i = this, e = 0, n = this.plugin.items; e < n.length; e++) t(n[e])
        }, Ju.prototype.triggerStarredItem = function(t, e) {
            var n = this.app;
            if ("file" === t.type) {
                var r = n.vault.getAbstractFileByPath(t.path);
                if (!(r instanceof _t)) return void new Fr('Cannot find file at "' + t.path + '".');
                this.app.workspace.getLeaf(e).openFile(r, {
                    active: !0
                })
            }
        }, Ju.prototype.addNavButton = function(t, e, n) {
            var r = this.headerButtonsContainerEl.createEl("div", {
                cls: "nav-action-button"
            });
            r.addEventListener("click", n), r.setAttribute("aria-label", e), We(r, t, 20)
        }, Ju.prototype.onStar = function() {
            var t = this.app.workspace.activeLeaf;
            if (t && t.view instanceof ai) {
                var e = t.view.file,
                    n = this.plugin.findStarredFile(e);
                n ? this.plugin.removeFile(n) : this.plugin.addFile(e)
            }
        }, Ju.prototype.openContextMenu = function(t, e) {
            var n = this;
            t.preventDefault();
            var r = new Wr,
                i = r.addGroup(),
                o = this.files.get(e.parentElement);
            i.addItem("Remove", function() {
                return Vu(n, void 0, void 0, function() {
                    return Gu(this, function(t) {
                        return this.plugin.removeFile(o), [2]
                    })
                })
            }, Re), r.showAtPosition({
                x: t.pageX,
                y: t.pageY
            })
        }, Ju);

    function Ju(t, e) {
        var n = $u.call(this, t) || this;
        n.icon = Re, n.headerButtonsContainerEl = null, n.listEl = null, n.plugin = e, n.files = pl();
        var r = n.containerEl,
            i = r.createEl("div", {
                cls: "nav-header"
            });
        return n.headerButtonsContainerEl = i.createEl("div", {
            cls: "nav-buttons-container"
        }), n.listEl = r.createEl("div", {
            cls: "item-list"
        }), n.listEl.on("contextmenu", ".nav-file-title", n.openContextMenu.bind(n)), n.app.vault.registerInitializedCallback(n.renderItems.bind(n)), n.addNavButton(Re, "Star/unstar current file", n.onStar.bind(n)), n
    }
    var Xu, Qu = (Xu = function(t, e) {
            return (Xu = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            Xu(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        th = (eh.prototype.init = function(t, e) {
            this.app = t, this.instance = e, this.instance.registerViewType(rh, function(t) {
                return new ih(t)
            })
        }, eh.prototype.onEnable = function(t, e) {
            e.registerEvent(t.workspace.on("layout-ready", this.initLeaf, this))
        }, eh.prototype.onUserEnable = function() {
            this.initLeaf()
        }, eh.prototype.initLeaf = function() {
            0 === this.app.workspace.getLeavesOfType(rh).length && this.app.workspace.getRightLeaf(!1).setViewState({
                type: rh
            })
        }, eh);

    function eh() {
        this.id = "tag-pane", this.name = "Tag pane", this.description = "Displays all your tags and along with their number of occurrences."
    }
    var nh, rh = "tag",
        ih = (Qu(oh, nh = Vn), oh.prototype.getDisplayText = function() {
            return "Tags"
        }, oh.prototype.getViewType = function() {
            return rh
        }, oh.prototype.load = function() {
            nh.prototype.load.call(this);
            var t = this.app;
            this.registerEvent(t.metadataCache.on("changed", this.updateTags, this)), this.registerEvent(t.workspace.on("resize", this.onResize, this)), this.updateTags()
        }, oh.prototype.onResize = function() {
            this.infinityScroll.invalidate(!0)
        }, oh.prototype.updateTags = function() {
            var n = this;
            this.tagPaneEl.empty();
            var i = this.app.metadataCache.getTags(),
                t = Object.keys(i);
            if (0 < t.length) {
                t.sort(function(t, e) {
                    var n = i[t],
                        r = i[e];
                    return n === r ? t.localeCompare(e) : r - n
                });
                for (var e = function(t) {
                        var e = r.tagPaneEl.createEl("div", {
                            cls: "tag-pane-tag"
                        });
                        e.createEl("div", {
                            cls: "tag-pane-tag-text",
                            text: t
                        }), e.createEl("div", {
                            cls: "tag-pane-tag-count",
                            text: "" + i[t]
                        }), e.addEventListener("click", function() {
                            n.app.openGlobalSearch(t)
                        })
                    }, r = this, o = 0, a = t; o < a.length; o++) e(a[o])
            } else this.tagPaneEl.createEl("div", {
                cls: "tag-pane-empty",
                text: "No tags found."
            });
            this.infinityScroll.invalidate(!0)
        }, oh);

    function oh(t) {
        var e = nh.call(this, t) || this;
        e.icon = we, e.tagPaneEl = null;
        var n = e.tagPaneEl = createEl("div", {
            cls: "tag-pane-tags"
        });
        return e.containerEl.append(n), (e.infinityScroll = new fl(n)).addElement(n), e
    }
    var ah = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        sh = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        };
    var ch = (lh.prototype.init = function(t, e) {
        this.app = t, (this.instance = e).registerStatusBarItem()
    }, lh.prototype.onEnable = function(t, e) {
        this.instance.registerEvent(t.workspace.on("file-open", this.onFileOpen, this)), this.instance.registerEvent(t.workspace.on("quick-preview", this.onQuickPreview, this))
    }, lh.prototype.onFileOpen = function(n) {
        return ah(this, void 0, void 0, function() {
            var e;
            return sh(this, function(t) {
                switch (t.label) {
                    case 0:
                        return n instanceof _t && "md" === n.extension ? (e = this.updateWordCount, [4, this.app.vault.cachedRead(n)]) : [3, 2];
                    case 1:
                        return e.apply(this, [t.sent()]), [3, 3];
                    case 2:
                        this.updateWordCount(""), t.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, lh.prototype.onQuickPreview = function(t, e) {
        var n = this.app.workspace.activeLeaf;
        n && n.view instanceof ai && n.view.file === t && this.updateWordCount(e)
    }, lh.prototype.updateWordCount = function(t) {
        var e = this.instance.statusBarEl;
        if (e) {
            var n = function(t) {
                var e = t.match(/[a-zA-Z0-9_\u0392-\u03c9\u00c0-\u00ff\u0600-\u06ff\u0400-\u04ff]+|[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/gm),
                    n = 0;
                if (!e) return 0;
                for (var r = 0; r < e.length; r++) 19968 <= e[r].charCodeAt(0) ? n += e[r].length : n += 1;
                return n
            }(t);
            e.empty(), e.createEl("span", {
                cls: "status-bar-item-segment",
                text: Object(A.l)(n, "word")
            }), e.createEl("span", {
                cls: "status-bar-item-segment",
                text: Object(A.l)(t.length, "character")
            })
        }
    }, lh);

    function lh() {
        this.id = "word-count", this.name = "Word count", this.description = "Show word count in the status bar.", this.defaultOn = !0
    }
    var uh, hh = (uh = function(t, e) {
            return (uh = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            uh(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        ph = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        fh = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        dh = (vh.prototype.init = function(t, e) {
            this.app = t, (this.pluginInstance = e).registerRibbonAction("Create new Zettelkasten note", Oe, this.onCreateNote.bind(this)), e.registerGlobalCommand({
                id: "zk-prefixer",
                name: "Create new Zettelkasten note",
                callback: this.onCreateNote.bind(this)
            }), e.registerSettingTab(new mh(t, e, this))
        }, vh.prototype.onEnable = function(t, n) {
            return ph(this, void 0, void 0, function() {
                var e;
                return fh(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e = this, [4, n.loadData()];
                        case 1:
                            return e.options = t.sent() || {}, [2]
                    }
                })
            })
        }, vh.prototype.onCreateNote = function() {
            return ph(this, void 0, void 0, function() {
                var e, n, r, i, o, a, s, c, l, u, h, p, f;
                return fh(this, function(t) {
                    switch (t.label) {
                        case 0:
                            for (n = (e = this).app, r = e.options, i = window.moment, o = i(); !a;) s = o.format("YYYYMMDDHHmm"), this.checkNoteExists(s) ? o = o.add(1, "m") : a = s;
                            if (c = this.app.workspace.getLeaf(), (u = r.folder) && String.isString(u)) {
                                if (h = I.normalizePath(Object(A.k)(u).normalize("NFC")), !((p = n.vault.getAbstractFileByPath(h)) instanceof Mt)) return new Fr('Failed to create Zettelkasten note. Folder "' + u + '" not found!'), [2];
                                l = p
                            } else l = n.fileManager.getNewFileParent("");
                            return [4, n.fileManager.createNewMarkdownFile(l, a)];
                        case 1:
                            return f = t.sent(), [4, c.openFile(f, {
                                state: {
                                    mode: "source",
                                    rename: !0
                                }
                            })];
                        case 2:
                            return t.sent(), [2]
                    }
                })
            })
        }, vh.prototype.checkNoteExists = function(t) {
            for (var e = !1, n = 0, r = this.app.vault.getAllLoadedFiles(); n < r.length; n++) {
                var i = r[n];
                if (i instanceof _t && i.name.startsWith(t)) {
                    e = !0;
                    break
                }
            }
            return e
        }, vh);

    function vh() {
        this.id = "zk-prefixer", this.name = "Zettelkasten prefixer", this.description = "Create a new note with the 12-digit Zettelkasten ID format YYYYMMDDHHII (Example 202001010000).", this.app = null, this.pluginInstance = null, this.options = {}
    }
    var gh, mh = (hh(yh, gh = zc), yh.prototype.display = function() {
        var e = this;
        gh.prototype.display.call(this), this.containerEl.empty();
        var n = this.plugin.options,
            r = this.addTextSetting("New file location", "The folder path to create the new Zettelkasten note.", "Example: folder1/folder2");
        n.folder && r.setValue(n.folder), r.onChange(function() {
            var t = r.getValue();
            n.folder = t.trim(), e.pluginInstance.saveData(n)
        })
    }, yh);

    function yh(t, e, n) {
        var r = gh.call(this, t, e) || this;
        return r.plugin = n, r
    }
    var bh = (wh.prototype.registerStatusBarItem = function() {
        return this.containerEl.createEl("div", {
            cls: "status-bar-item"
        })
    }, wh);

    function wh(t, e) {
        this.app = t, this.containerEl = e
    }
    var kh = (Eh.prototype.displayTooltip = function(t, e, n, r, i) {
        if (this.parentEl !== t) {
            this.hideTooltip();
            var o = t.getBoundingClientRect(),
                a = o.top,
                s = o.left,
                c = o.width,
                l = o.height;
            void 0 === i && (i = 8);
            var u, h, p = createEl("div", {
                    cls: "tooltip",
                    text: e
                }),
                f = p.createEl("div", {
                    cls: "tooltip-arrow"
                }),
                d = r || [];
            "bottom" === n ? (u = a + l + i, h = s + c / 2) : "right" === n ? (u = a + l / 2, h = s + c + i, d.push("mod-right")) : "left" === n ? (u = a + l / 2, h = s - i, d.push("mod-left")) : "top" === n && (u = a - i - 5, h = s + c / 2, d.push("mod-top")), p.addClasses(d), p.style.top = u + "px", p.style.left = h + "px", this.body.appendChild(p);
            var v = p.getBoundingClientRect(),
                g = u,
                m = h,
                y = ["bottom", "top"].contains(n) ? v.width / 2 : v.width,
                b = "right" === n || "left" === n ? v.height / 2 : v.height;
            if ("left" === n ? h -= y : "top" === n && (u -= b), u + b > window.innerHeight && (u = window.innerHeight - b - i), u = Math.max(u, i), h + y > window.innerWidth) {
                var w = h + y + i - window.innerWidth;
                h -= w, f.style.left = "initial", f.style.right = y - w - i / 2 + "px"
            }
            h = Math.max(h, i), g !== u && (p.style.top = u + "px"), m !== h && (p.style.left = h + "px"), this.tooltipEl = p, this.parentEl = t
        }
    }, Eh.prototype.onDisplayTooltip = function(t, e) {
        var n = e.getAttribute("aria-label"),
            r = "bottom",
            i = [];
        e.hasAttribute("aria-label-position") && (r = e.getAttribute("aria-label-position")), e.hasAttribute("aria-label-classes") && (i = e.getAttribute("aria-label-classes").split(" ")), this.displayTooltip(e, n, r, i)
    }, Eh.prototype.onMouseOut = function(t, e) {
        var n = t.relatedTarget;
        n instanceof Node && e.contains(n) || this.hideTooltip()
    }, Eh.prototype.hideTooltip = function() {
        this.tooltipEl && (this.tooltipEl.detach(), this.tooltipEl = null, this.parentEl = null)
    }, Eh);

    function Eh() {
        this.body = document.querySelector("body"), this.body.on("mouseover", "[aria-label]", this.onDisplayTooltip.bind(this)), this.body.on("mouseout", "[aria-label]", this.onMouseOut.bind(this)), this.body.addEventListener("click", this.hideTooltip.bind(this))
    }
    var Ch, xh, _h = (Ch = function(t, e) {
            return (Ch = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            Ch(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        Sh = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        Lh = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        Mh = (_h(Ah, xh = Vn), Ah.prototype.getDisplayText = function() {
            return "Empty"
        }, Ah.prototype.getViewType = function() {
            return "empty"
        }, Ah.prototype.onOpen = function() {
            return Sh(this, void 0, Promise, function() {
                var e, n, r, i, o, a, s, c = this;
                return Lh(this, function(t) {
                    return n = (e = this).app, (r = e.actionListEl).empty(), i = n.hotkeyManager.printHotkeyForCommand("explorer:new-file"), o = "", i && (o = " (" + i + ")"), r.createEl("div", {
                        cls: "empty-state-action",
                        text: "Create new file" + o
                    }, function(t) {
                        t.addEventListener("click", function() {
                            return Sh(c, void 0, void 0, function() {
                                var e;
                                return Lh(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, n.fileManager.createNewMarkdownFile()];
                                        case 1:
                                            return e = t.sent(), [4, n.workspace.getUnpinnedLeaf().openFile(e)];
                                        case 2:
                                            return t.sent(), [2]
                                    }
                                })
                            })
                        })
                    }), this.app.vault.isEmpty() || (a = n.hotkeyManager.printHotkeyForCommand("switcher:open"), s = "", a && (s = " (" + a + ")"), r.createEl("div", {
                        cls: "empty-state-action",
                        text: "Go to file" + s
                    }, function(t) {
                        t.addEventListener("click", function() {
                            return Sh(c, void 0, void 0, function() {
                                return Lh(this, function(t) {
                                    return n.commands.executeCommandById("switcher:open"), [2]
                                })
                            })
                        })
                    }), r.createEl("div", {
                        cls: "empty-state-action",
                        text: "See recent files" + s
                    }, function(t) {
                        t.addEventListener("click", function() {
                            return Sh(c, void 0, void 0, function() {
                                return Lh(this, function(t) {
                                    return n.commands.executeCommandById("switcher:open"), [2]
                                })
                            })
                        })
                    })), r.createEl("div", {
                        cls: "empty-state-action mod-close",
                        text: "Close"
                    }, function(t) {
                        t.addEventListener("click", function() {
                            return Sh(c, void 0, void 0, function() {
                                return Lh(this, function(t) {
                                    return this.leaf.detach(), [2]
                                })
                            })
                        })
                    }), [2]
                })
            })
        }, Ah);

    function Ah(t) {
        var e = xh.call(this, t) || this,
            n = e.emptyStateEl = e.containerEl.createEl("div", {
                cls: "empty-state"
            }),
            r = e.clickableArea = n.createEl("div", {
                cls: "empty-state-container"
            });
        return e.emptyTitleEl = r.createEl("div", {
            cls: "empty-state-title",
            text: "No file is open"
        }, function(t) {
            t.createEl("span", {
                cls: "empty-state-close-button"
            }, function(t) {
                We(t, Fe, 20), t.addEventListener("click", function() {
                    e.leaf.detach()
                })
            })
        }), e.actionListEl = r.createEl("div", {
            cls: "empty-state-action-list"
        }), e
    }
    var Th, Oh, Dh = (Th = function(t, e) {
            return (Th = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            Th(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        Ph = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        Fh = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        zh = function() {
            for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
            var r = Array(t),
                i = 0;
            for (e = 0; e < n; e++)
                for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
            return r
        },
        Ih = (Dh(Rh, Oh = $n), Rh.prototype.serialize = function() {
            var t = Oh.prototype.serialize.call(this);
            return this === this.workspace.activeLeaf && (t.active = !0), this.pinned && (t.pinned = !0), t.state = this.getViewState(), this.group && (t.group = this.group), t
        }, Rh.prototype.openFile = function(o, a) {
            return Ph(this, void 0, Promise, function() {
                var e, n, r, i;
                return Fh(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return a = a || {}, e = this.view, n = Ja.getTypeByExtension(o.extension), e && e instanceof ai && e.canAcceptExtension(o.extension) && (n = e.getViewType()), (r = a.state || {}).file = o.path, i = {
                                type: n,
                                state: r,
                                active: a.active,
                                group: a.group
                            }, [4, this.setViewState(i, a.eState)];
                        case 1:
                            return t.sent(), [2]
                    }
                })
            })
        }, Rh.prototype.open = function(n) {
            return Ph(this, void 0, Promise, function() {
                var e;
                return Fh(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e = this.view, n === e ? [2, n] : e ? [4, e.close()] : [3, 2];
                        case 1:
                            t.sent(), t.label = 2;
                        case 2:
                            return n = n || new Mh(this), [4, (this.view = n).open(this.containerEl)];
                        case 3:
                            return t.sent(), [2, n]
                    }
                })
            })
        }, Rh.prototype.highlight = function() {
            this.containerEl.addClass("is-highlighted")
        }, Rh.prototype.unhighlight = function() {
            this.containerEl.removeClass("is-highlighted")
        }, Rh.prototype.getViewState = function() {
            var t = this.view,
                e = this.pinned,
                n = {
                    type: t.getViewType(),
                    state: t.getState()
                };
            return e && (n.pinned = !0), n
        }, Rh.prototype.setViewState = function(a, s) {
            return Ph(this, void 0, Promise, function() {
                var e, n, r, i, o;
                return Fh(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e = this.view, n = e ? e.getViewType() : "", r = {
                                history: !1,
                                layout: !1,
                                close: !1
                            }, a.type === n ? [3, 2] : (i = Ja.getViewCreatorByType(a.type), e = i ? i(this) : new Mh(this), [4, this.open(e)]);
                        case 1:
                            t.sent(), r.history = !0, r.layout = !0, t.label = 2;
                        case 2:
                            return t.trys.push([2, 4, , 5]), [4, e.setState(a.state || {}, r)];
                        case 3:
                            return t.sent(), [3, 5];
                        case 4:
                            return o = t.sent(), console.error(o), [3, 5];
                        case 5:
                            return r.close ? [4, this.setViewState({
                                type: "empty",
                                state: {}
                            })] : [3, 7];
                        case 6:
                            return t.sent(), [2];
                        case 7:
                            return a.active && this.workspace.setActiveLeaf(this, !a.popstate), void 0 !== a.group && this.setGroupMember(a.group), s && this.setEphemeralState(s), a.popstate && (r.history = !1), this.updateStateResult(r), this.updateHeader(), [2]
                    }
                })
            })
        }, Rh.prototype.getEphemeralState = function() {
            return this.view.getEphemeralState()
        }, Rh.prototype.setEphemeralState = function(t) {
            this.view.setEphemeralState(t)
        }, Rh.prototype.updateStateResult = function(t) {
            t.history ? this.workspace.recordHistory(this, !0) : this.workspace.requestSaveHistory(), t.layout && this.workspace.onLayoutChange()
        }, Rh.prototype.togglePinned = function() {
            this.pinned = !this.pinned, this.trigger("pinned-change", this.pinned), this.workspace.requestSaveLayout()
        }, Rh.prototype.setGroupMember = function(t) {
            if (t !== this) {
                var e = null;
                t && ((e = t.group) || (e = Object(A.m)(16), t.setGroup(e))), this.setGroup(e)
            }
        }, Rh.prototype.setGroup = function(t) {
            t !== this.group && (this.group = t, this.trigger("group-change", t), this.workspace.requestUpdateGroups(), this.workspace.requestSaveLayout())
        }, Rh.prototype.detach = function() {
            Oh.prototype.detach.call(this);
            var t = this.view;
            t && t.close()
        }, Rh.prototype.updateHeader = function() {
            Oh.prototype.updateHeader.call(this), this.tabHeaderEl.setAttribute("aria-label", this.getDisplayText())
        }, Rh.prototype.getIcon = function() {
            var t, e = null === (t = this.view) || void 0 === t ? void 0 : t.getIcon();
            return e || Oh.prototype.getIcon.call(this)
        }, Rh.prototype.getDisplayText = function() {
            var t, e = null === (t = this.view) || void 0 === t ? void 0 : t.getDisplayText();
            return e || ""
        }, Rh.prototype.onOpenTabHeaderMenu = function(n) {
            n.preventDefault();
            var r = this.view;
            r && setTimeout(function() {
                var t = new Wr,
                    e = t.addGroup();
                r.onHeaderMenu(e), 0 < e.itemDoms.length && t.showAtPosition({
                    x: n.pageX,
                    y: n.pageY
                })
            }, 0)
        }, Rh.prototype.trigger = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            Oh.prototype.trigger.apply(this, zh([t], e))
        }, Rh.prototype.on = function(t, e, n) {
            return Oh.prototype.on.call(this, t, e, n)
        }, Rh);

    function Rh(t, e) {
        var n = Oh.call(this, t.workspace, e) || this;
        n.type = "leaf", n.view = null, n.activeTime = 0, n.group = null, n.pinned = !1, n.app = t;
        var r = n.containerEl;
        return r.addClass("workspace-leaf"), r.addEventListener("focusin", function(t) {
            n.app.workspace.setActiveLeaf(n)
        }), r.addEventListener("click", function(t) {
            n.app.workspace.setActiveLeaf(n)
        }), n.view = new Mh(n), n.view.open(n.containerEl), n.tabHeaderEl.addEventListener("mousedown", function(t) {
            n.workspace.onDragLeaf(t, n)
        }), n.tabHeaderEl.addEventListener("contextmenu", n.onOpenTabHeaderMenu.bind(n)), n
    }
    var Hh, Nh, qh = (Hh = function(t, e) {
            return (Hh = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            Hh(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        Bh = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        jh = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        Vh = function() {
            for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
            var r = Array(t),
                i = 0;
            for (e = 0; e < n; e++)
                for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
            return r
        },
        Gh = (qh(Uh, Nh = ut), Uh.prototype.loadLayout = function() {
            return Bh(this, void 0, void 0, function() {
                var e, n, r, i, o, a, s, c, l, u, h, p, f, d, v;
                return jh(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e = this.app.vault, (n = e.getConfig(rt)) ? [4, (a = this).deserializeLayout(n, null)] : [3, 2];
                        case 1:
                            (r = a.rootSplit = t.sent()) && "vertical" !== r.direction && (r.setDirection("vertical"), r.recomputeChildrenDimensions()), r.containerEl.addClass("mod-root"), t.label = 2;
                        case 2:
                            return (s = e.getConfig(q)) ? [4, (c = this).deserializeLayout(s, "left")] : [3, 4];
                        case 3:
                            (i = c.leftSplit = t.sent()) && "horizontal" !== i.direction && (i.setDirection("horizontal"), i.recomputeChildrenDimensions()), t.label = 4;
                        case 4:
                            return (l = e.getConfig(B)) ? [4, (u = this).deserializeLayout(l, "right")] : [3, 6];
                        case 5:
                            (o = u.rightSplit = t.sent()) && "horizontal" !== o.direction && (o.setDirection("horizontal"), o.recomputeChildrenDimensions()), t.label = 6;
                        case 6:
                            return r ? [3, 9] : (r = this.rootSplit = new tr(this, "vertical"), h = new Ih(this.app), r.insertChild(0, h, !0), 0 < (p = this.getLastOpenFiles()).length ? (f = p[0], (d = e.getAbstractFileByPath(f)) && d instanceof _t ? [4, h.openFile(d)] : [3, 8]) : [3, 8]);
                        case 7:
                            t.sent(), t.label = 8;
                        case 8:
                            this.setActiveLeaf(h), t.label = 9;
                        case 9:
                            return i = i || (this.leftSplit = new ar(this, "horizontal", "left")), o || (o = this.rightSplit = new ar(this, "horizontal", "right")).collapse(), this.layoutReady = !0, (v = this.containerEl).appendChild(i.containerEl), v.appendChild(r.containerEl), v.appendChild(o.containerEl), this.trigger("layout-ready"), this.onLayoutChange(), [2]
                    }
                })
            })
        }, Uh.prototype.deserializeLayout = function(l, u) {
            return Bh(this, void 0, Promise, function() {
                var e, n, r, i, o, a, s, c;
                return jh(this, function(t) {
                    switch (t.label) {
                        case 0:
                            if ("split" !== l.type) return [3, 5];
                            e = void 0, u ? (n = e = new ar(this, l.direction, u, l.id), l.width && n.setSize(l.width), l.collapsed && n.collapse()) : e = new tr(this, l.direction, l.id), o = 0, t.label = 1;
                        case 1:
                            return o < l.children.length ? [4, this.deserializeLayout(l.children[o], null)] : [3, 4];
                        case 2:
                            (a = t.sent()) ? e.insertChild(o, a, !0): (l.children.splice(o, 1), o--), t.label = 3;
                        case 3:
                            return o++, [3, 1];
                        case 4:
                            for (o = 0; o < l.children.length; o++) r = l.children[o].dimension, e.children[o].setDimension(r);
                            return e.recomputeChildrenDimensions(), [2, e];
                        case 5:
                            if ("tabs" !== l.type) return [3, 10];
                            i = new rr(this, l.id), o = 0, t.label = 6;
                        case 6:
                            return o < l.children.length ? [4, this.deserializeLayout(l.children[o], null)] : [3, 9];
                        case 7:
                            (a = t.sent()) ? i.insertChild(o, a, !0): (l.children.splice(o, 1), o--), t.label = 8;
                        case 8:
                            return o++, [3, 6];
                        case 9:
                            return l.currentTab && i.selectTab(l.currentTab), i.recomputeChildrenDimensions(), [2, i];
                        case 10:
                            return "leaf" !== l.type ? [3, 12] : (s = new Ih(this.app, l.id), (c = l.state || {}).active = l.active, [4, s.setViewState(c)]);
                        case 11:
                            return t.sent(), l.group && s.setGroup(l.group), l.pinned && s.togglePinned(), [2, s];
                        case 12:
                            return [2, null]
                    }
                })
            })
        }, Uh.prototype.saveLayout = function() {
            return Bh(this, void 0, void 0, function() {
                return jh(this, function(t) {
                    return this.layoutReady && (this.app.vault.setConfig(rt, this.rootSplit.serialize()), this.app.vault.setConfig(q, this.leftSplit.serialize()), this.app.vault.setConfig(B, this.rightSplit.serialize())), [2]
                })
            })
        }, Uh.prototype.updateGroups = function() {
            var n = {};
            for (var t in this.iterateAllLeaves(function(t) {
                    var e = t.group;
                    e && (n[e] = (n[e] || 0) + 1)
                }), n)
                if (n.hasOwnProperty(t) && 1 === n[t])
                    for (var e = 0, r = this.getGroupLeaves(t); e < r.length; e++) r[e].setGroup(null)
        }, Uh.prototype.onDragLeaf = function(t, y) {
            var b = this;
            if (0 === t.button) {
                t.preventDefault();
                var w = this.containerEl.createEl("div", {
                        cls: "workspace-drop-overlay mod-drag"
                    }),
                    k = this.containerEl.createEl("div", {
                        cls: "workspace-fake-target-overlay"
                    }),
                    E = this.containerEl.createEl("div", {
                        cls: "drag-ghost mod-leaf"
                    }, function(t) {
                        t.createEl("div", {
                            cls: "drag-ghost-icon"
                        }, function(t) {
                            We(t, y.getIcon(), 14)
                        }), t.createEl("span", {
                            text: Object(A.j)(y.getDisplayText(), 60)
                        })
                    });
                w.hide(), k.hide(), E.hide();
                var C = t.pageX,
                    x = t.pageY,
                    _ = !1,
                    S = null,
                    L = function(t, e) {
                        return t instanceof ar ? ["left", "right", "top", "bottom"] : e ? ["left", "right"] : null
                    },
                    M = function() {
                        S && (S.style.opacity = null), w.hide(), k.hide()
                    },
                    d = function(t) {
                        t.preventDefault();
                        var e = t.pageX,
                            n = t.pageY;
                        if (!_) {
                            var r = e - C,
                                i = n - x;
                            if (r * r + i * i < 25) return;
                            _ = !0, E.show(), document.body.addClass("is-grabbing")
                        }
                        E.style.left = e + 5 + "px", E.style.top = n + 5 + "px";
                        var o = b.getDropLocation(t);
                        if (o) {
                            var a = o.target;
                            if (a && a !== y)
                                if (a.getRoot() !== b.rootSplit || y.view instanceof Qr || y.view instanceof Mh) {
                                    var s = a.containerEl.getBoundingClientRect(),
                                        c = s.width,
                                        l = s.height,
                                        u = s.x,
                                        h = s.y,
                                        p = b.getDropDirection(t, s, L(a, o.sidedock), a);
                                    if (a !== y.parentSplit || "center" !== p && 1 !== y.parentSplit.children.length) {
                                        a === b.leftSplit && b.leftSplit.collapsed ? s = b.leftRibbon.containerEl.getBoundingClientRect() : a === b.rightSplit && b.rightSplit.collapsed ? s = b.rightRibbon.containerEl.getBoundingClientRect() : a instanceof rr && "center" === p && (s = a.tabHeaderEl.getBoundingClientRect()), w.show(), w.style.transform = "translate(" + s.x + "px, " + s.y + "px)", w.style.width = s.width + "px", w.style.height = s.height + "px";
                                        var f, d, v, g, m = !1;
                                        if (a instanceof Ih && a.view && a.view instanceof Yl && (m = !0), "center" === p || m) return S && (S.style.opacity = null), void k.hide();
                                        "top" === p ? (f = s.x, d = h + s.height, g = c, v = l - s.height) : "left" === p ? (f = u + s.width, d = s.y, g = c - s.width, v = l) : "right" === p ? (f = u, d = h, g = c - s.width, v = l) : "bottom" === p && (f = u, d = h, g = c, v = l - s.height), S && a.containerEl === S || (S && (S.style.opacity = null), k.innerHTML = a.containerEl.innerHTML, a.containerEl.style.opacity = "0", S = a.containerEl), a.containerEl.style.opacity = "center" === p ? null : "0", k.toggle("center" !== p), k.style.transform = "translate(" + f + "px, " + d + "px)", k.style.width = g + "px", k.style.height = v + "px"
                                    } else M()
                                } else M();
                            else M()
                        } else M()
                    },
                    v = function(t) {
                        if (document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", v), S && (S.style.opacity = null), w.detach(), k.detach(), E.detach(), document.body.removeClass("is-grabbing"), _) {
                            var e = b.getDropLocation(t);
                            if (e.target) {
                                var n = e.target;
                                if (n && n !== y) {
                                    if (n === b.leftSplit) {
                                        y.parentSplit.removeChild(y), y.setDimension(null);
                                        var r = new rr(b);
                                        return b.leftSplit.insertChild(-1, r), r.insertChild(-1, y), void b.requestResize()
                                    }
                                    if (n === b.rightSplit) return y.parentSplit.removeChild(y), y.setDimension(null), r = new rr(b), b.rightSplit.insertChild(-1, r), r.insertChild(-1, y), void b.requestResize();
                                    if (n.getRoot() !== b.rootSplit || y.view instanceof Qr || y.view instanceof Mh) {
                                        var i = n.containerEl.getBoundingClientRect(),
                                            o = b.getDropDirection(t, i, L(n, e.sidedock), n);
                                        if (n !== y.parentSplit || "center" !== o && 1 !== y.parentSplit.children.length) {
                                            if (e.sidedock && y.setGroupMember(null), e.sidedock && n instanceof rr && "center" === o) return y.parentSplit.removeChild(y), y.setDimension(null), n.insertChild(-1, y), n.selectTab(n.children.length - 1), void b.requestResize();
                                            var a = n.parentSplit;
                                            if (a && a instanceof tr) {
                                                var s = y.parentSplit,
                                                    c = "top" === o || "bottom" === o ? "horizontal" : "vertical";
                                                if (e.sidedock) r = new rr(b), b.splitLeaf(n, r, c, "left" === o || "top" === o), s.removeChild(y), y.setDimension(null), r.insertChild(0, y);
                                                else if ("center" === o) {
                                                    var l = s.children.indexOf(y),
                                                        u = a.children.indexOf(n),
                                                        h = y.dimension,
                                                        p = n.dimension,
                                                        f = new Ih(b.app);
                                                    a.replaceChild(u, f), s.replaceChild(l, n), a.replaceChild(u, y), y.setDimension(p), n.setDimension(h)
                                                } else s.removeChild(y), y.setDimension(null), b.splitLeaf(n, y, c, "left" === o || "top" === o);
                                                b.requestResize()
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    };
                document.addEventListener("mousemove", d), document.addEventListener("mouseup", v)
            }
        }, Uh.prototype.onStartLink = function(r) {
            function i() {
                a.hide(), document.body.removeClass("is-hovering-clickable")
            }

            function n(t) {
                t.preventDefault();
                var e = o.getDropLocation(t).target;
                if (e && e !== r)
                    if (e instanceof Ih)
                        if (e.view instanceof Qr || e.view instanceof Mh) {
                            var n = e.containerEl.getBoundingClientRect();
                            document.body.addClass("is-hovering-clickable"), a.show(), a.style.transform = "translate(" + n.x + "px, " + n.y + "px)", a.style.width = n.width + "px", a.style.height = n.height + "px"
                        } else i();
                else i();
                else i()
            }
            var o = this,
                a = this.containerEl.createEl("div", {
                    cls: "workspace-drop-overlay mod-link"
                }),
                s = function(t) {
                    document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", s), i();
                    var e = o.getDropLocation(t).target;
                    e && e !== r && e instanceof Ih && (e.view instanceof Qr || e.view instanceof Mh) && r.setGroupMember(e)
                };
            document.addEventListener("mousemove", n), document.addEventListener("mouseup", s)
        }, Uh.prototype.getDropLocation = function(t) {
            return t.pageX < this.leftRibbon.containerEl.offsetWidth ? {
                target: this.leftSplit,
                sidedock: !0
            } : t.pageX > this.rightRibbon.containerEl.getBoundingClientRect().x ? {
                target: this.rightSplit,
                sidedock: !0
            } : Object(A.o)(t, this.leftSplit.containerEl) ? 0 === this.leftSplit.children.length ? {
                target: this.leftSplit,
                sidedock: !0
            } : {
                target: this.recursiveGetTarget(t, this.leftSplit),
                sidedock: !0
            } : Object(A.o)(t, this.rightSplit.containerEl) ? 0 === this.rightSplit.children.length ? {
                target: this.rightSplit,
                sidedock: !0
            } : {
                target: this.recursiveGetTarget(t, this.rightSplit),
                sidedock: !0
            } : Object(A.o)(t, this.rootSplit.containerEl) ? {
                target: this.recursiveGetTarget(t, this.rootSplit),
                sidedock: !1
            } : null
        }, Uh.prototype.recursiveGetTarget = function(t, e) {
            for (var n = 0, r = e.children; n < r.length; n++) {
                var i = r[n];
                if (Object(A.o)(t, i.containerEl)) return !(i instanceof rr) && i instanceof Jn ? this.recursiveGetTarget(t, i) : i
            }
            return null
        }, Uh.prototype.getDropDirection = function(t, e, n, r) {
            var i = t.pageX,
                o = t.pageY,
                a = Math.abs(i - e.x) / e.width,
                s = Math.abs(o - e.y) / e.height,
                c = Math.abs(i - (e.x + e.width)) / e.width,
                l = Math.abs(o - (e.y + e.height)) / e.height;
            n = n || [];
            var u = "center",
                h = 1;
            a < .33 && a < h && !n.contains("left") && (u = "left", h = a), s < .33 && s < h && !n.contains("top") && (u = "top", h = s, r instanceof rr && o - e.y < 30 && (u = "center")), c < .33 && c < h && !n.contains("right") && (u = "right", h = c), l < .33 && l < h && !n.contains("bottom") && (u = "bottom", h = l);
            var p = ["left", "right"].contains(u) ? e.width : e.height;
            switch (p = Math.max(p / 3, 40), u) {
                case "center":
                    break;
                case "left":
                    e.width = p;
                    break;
                case "top":
                    e.height = p;
                    break;
                case "right":
                    e.x += e.width - p, e.width = p;
                    break;
                case "bottom":
                    e.y += e.height - p, e.height = p
            }
            return u
        }, Uh.prototype.createLeafInParent = function(t, e) {
            var n = new Ih(this.app);
            return 0 < t.children.length && n.setDimension(100 / t.children.length), t.insertChild(e, n), n
        }, Uh.prototype.splitLeaf = function(t, e, n, r) {
            var i = t.parentSplit,
                o = t.dimension,
                a = i.children.indexOf(t);
            if (n && i instanceof tr && n !== i.direction) {
                t.setDimension(null);
                var s = new tr(this, n);
                i.replaceChild(a, s, !0), s.setDimension(o), i.recomputeChildrenDimensions(), r ? (s.insertChild(0, e), s.insertChild(1, t)) : (s.insertChild(0, t), s.insertChild(1, e))
            } else null !== o && (t.setDimension(o / 2), e.setDimension(o / 2)), r ? i.insertChild(a, e) : i.insertChild(a + 1, e), i instanceof tr && i.recomputeChildrenDimensions()
        }, Uh.prototype.createLeafBySplit = function(t, e, n) {
            var r = new Ih(this.app);
            return this.splitLeaf(t, r, e, n), r
        }, Uh.prototype.splitActiveLeaf = function(t) {
            var e = this.activeLeaf;
            return (e = e || this.getMostRecentLeaf()) ? this.createLeafBySplit(e, t) : this.createLeafInParent(this.rootSplit, 0)
        }, Uh.prototype.duplicateActiveLeaf = function(i) {
            return Bh(this, void 0, void 0, function() {
                var e, n, r;
                return jh(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e = this.getLeaf(), n = e.getViewState(), r = this.createLeafBySplit(e, i), n.active = !0, [4, r.setViewState(n)];
                        case 1:
                            return t.sent(), [2]
                    }
                })
            })
        }, Uh.prototype.getUnpinnedLeaf = function() {
            var e = this.activeLeaf;
            return e && !e.pinned ? e : (e = null, this.iterateRootLeaves(function(t) {
                if (!t.pinned && t.view.navigation) return (!e || e.activeTime < t.activeTime) && (e = t), !0
            }), e = e || this.createLeafInParent(this.rootSplit, -1))
        }, Uh.prototype.getLeaf = function(t) {
            return t ? this.splitActiveLeaf() : this.getUnpinnedLeaf()
        }, Uh.prototype.openLinkText = function(l, u, h, p) {
            return Bh(this, void 0, void 0, function() {
                var e, n, r, i, o, a, s, c;
                return jh(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return t.trys.push([0, 5, , 6]), p = p || {}, e = this.app, l = Object(A.k)(l), n = e.metadataCache.getLinktextDest(l, u), r = p.state || {}, i = p.eState || {}, o = void 0, n ? (o = n.file, -1 !== n.lineStart && (i.line = n.lineStart), [3, 3]) : [3, 1];
                        case 1:
                            return a = Vt.parseLinktext(l).path, s = null, a.contains("/") || (s = e.fileManager.getNewFileParent(u)), [4, e.fileManager.createNewMarkdownFile(s, a)];
                        case 2:
                            o = t.sent(), r.rename = !0, t.label = 3;
                        case 3:
                            return p.state = r, p.eState = i, [4, this.app.workspace.getLeaf(h).openFile(o, p)];
                        case 4:
                            return t.sent(), [3, 6];
                        case 5:
                            return c = t.sent(), new Fr(c.message), [2];
                        case 6:
                            return [2]
                    }
                })
            })
        }, Uh.prototype.setActiveLeaf = function(t, e) {
            void 0 === e && (e = !0);
            var n = this.activeLeaf;
            if (n !== t && (!t || t.getRoot() === this.rootSplit) && (n && n.containerEl.removeClass("mod-active"), this.activeLeaf = t)) {
                if (t.activeTime = Date.now(), t.containerEl.addClass("mod-active"), t.view instanceof ai) {
                    var r = t.view.file;
                    this.trigger("file-open", r)
                } else this.trigger("file-open", null);
                this.recordHistory(t, e), this.hideHoverPopover()
            }
        }, Uh.prototype.updateHistory = function() {
            this.activeLeaf && this.recordHistory(this.activeLeaf, !1)
        }, Uh.prototype.recordHistory = function(t, e) {
            if (this.activeLeaf === t) {
                var n = history.state;
                if (n && n.group && n.group === t.group && n.leaf !== t.id) {
                    var r = this.getLeafById(n.leaf);
                    r && (t = r)
                }
                var i = t.getViewState(),
                    o = JSON.stringify(i),
                    a = JSON.stringify(t.getEphemeralState() || {}),
                    s = t.id;
                if (!n || n.state !== o || n.eState !== a || n.leaf !== s) {
                    null === n && (e = !1);
                    var c = {
                        leaf: t.id,
                        group: t.group,
                        state: o,
                        eState: a
                    };
                    e ? history.pushState(c, "") : history.replaceState(c, "")
                }
            }
        }, Uh.prototype.getLeafById = function(e) {
            var n = null;
            return this.iterateAllLeaves(function(t) {
                if (t.id === e) return n = t, !0
            }), n
        }, Uh.prototype.getGroupLeaves = function(e) {
            var n = [];
            return this.iterateAllLeaves(function(t) {
                t.group === e && n.push(t)
            }), n
        }, Uh.prototype.getMostRecentLeaf = function() {
            var e = null;
            return this.iterateRootLeaves(function(t) {
                return (!e || e.activeTime < t.activeTime) && (e = t), !0
            }), e
        }, Uh.prototype.getLeftLeaf = function(t) {
            return this.getSideLeaf(this.leftSplit, t)
        }, Uh.prototype.getRightLeaf = function(t) {
            return this.getSideLeaf(this.rightSplit, t)
        }, Uh.prototype.getSideLeaf = function(t, e) {
            if (e) {
                var n = new rr(this);
                t.insertChild(-1, n);
                var r = new Ih(this.app);
                return n.insertChild(-1, r), r
            }
            0 === t.children.length && t.insertChild(0, new rr(this));
            var i = t.children[0];
            return i instanceof Jn ? (r = new Ih(this.app), i.insertChild(-1, r), r) : null
        }, Uh.prototype.iterateLeaves = function(t, e) {
            if (e instanceof Ih) {
                if (t(e)) return
            } else if (e instanceof Jn)
                for (var n = 0, r = e.children; n < r.length; n++) {
                    var i = r[n];
                    this.iterateLeaves(t, i)
                }
        }, Uh.prototype.iterateRootLeaves = function(t) {
            this.iterateLeaves(t, this.rootSplit)
        }, Uh.prototype.iterateAllLeaves = function(t) {
            this.iterateLeaves(t, this.rootSplit), this.iterateLeaves(t, this.leftSplit), this.iterateLeaves(t, this.rightSplit)
        }, Uh.prototype.getLeavesOfType = function(e) {
            var n = [];
            return this.iterateAllLeaves(function(t) {
                t.view && t.view.getViewType() === e && n.push(t)
            }), n
        }, Uh.prototype.detachLeavesOfType = function(t) {
            for (var e = 0, n = this.getLeavesOfType(t); e < n.length; e++) n[e].detach()
        }, Uh.prototype.onLinkHover = function(t, e, n) {
            this.hideHoverPopover(), this.app.plugins.onLinkHover(t, e, n)
        }, Uh.prototype.showHoverPopover = function(t) {
            var e = this,
                n = this.hoverPopoverEl = createEl("div", {
                    cls: "popover hover-popover"
                });
            return n.style.pointerEvents = "none", t.addEventListener("mouseout", this.hideHoverPopover.bind(this)), this.hoverDestroy = Object(A.g)(t, 500, function() {
                e.hideHoverPopover()
            }), this.positionPopover(t), n
        }, Uh.prototype.positionPopover = function(t) {
            var e = this.hoverPopoverEl;
            if (e) {
                var n = this.app.dom.appContainerEl,
                    r = Object(A.n)(t, n);
                n.appendChild(e);
                var i = {
                    top: r.top,
                    bottom: r.top + t.offsetHeight,
                    left: r.left,
                    right: r.left + t.offsetWidth
                };
                Object(A.p)(i, e, {
                    gap: 10
                })
            }
        }, Uh.prototype.hideHoverPopover = function() {
            this.hoverDestroy && (this.hoverDestroy(), this.hoverDestroy = null), this.hoverPopoverEl && this.hoverPopoverEl.detach(), this.hoverPopoverEl = null
        }, Uh.prototype.getLastOpenFiles = function() {
            return this.app.vault.getConfig(H)
        }, Uh.prototype.recordMostRecentOpenedFile = function(t) {
            var e = this.getLastOpenFiles();
            e.remove(t.path), e.unshift(t.path), e = e.slice(0, 5), this.app.vault.setConfig(H, e)
        }, Uh.prototype.onLayoutChange = function() {
            if (this.layoutReady) {
                if (!this.activeLeaf || this.activeLeaf.getRoot() !== this.rootSplit) {
                    var t = this.getMostRecentLeaf();
                    t = t || this.createLeafInParent(this.rootSplit, 0), this.setActiveLeaf(t)
                }
                this.requestUpdateGroups(), this.requestSaveLayout(), this.requestResize()
            }
        }, Uh.prototype.onQuickPreview = function(t, e) {
            this.trigger("quick-preview", t, e)
        }, Uh.prototype.onResize = function() {
            this.trigger("resize")
        }, Uh.prototype.onDocumentClick = function(t) {
            this.hideHoverPopover(), t.defaultPrevented || this.trigger("click")
        }, Uh.prototype.trigger = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            Nh.prototype.trigger.apply(this, Vh([t], e))
        }, Uh.prototype.on = function(t, e, n) {
            return Nh.prototype.on.call(this, t, e, n)
        }, Uh);

    function Uh(t, e) {
        var o = Nh.call(this) || this;
        o.leftSplit = null, o.rightSplit = null, o.leftRibbon = null, o.rightRibbon = null, o.rootSplit = null, o.activeLeaf = null, o.hoverPopoverEl = null, o.hoverDestroy = null, o.containerEl = null, o.layoutReady = !1, o.app = t, o.containerEl = e, o.leftRibbon = new Wh(o, "left"), o.rightRibbon = new Wh(o, "right");
        var n = t.vault;
        return o.requestSaveLayout = Object(A.h)(o.saveLayout.bind(o), 1e3), o.requestSaveHistory = Object(A.h)(o.updateHistory.bind(o), 100), o.requestUpdateGroups = Object(A.h)(o.updateGroups.bind(o), 0), o.requestResize = Object(A.h)(o.onResize.bind(o), 0), n.registerInitializedCallback(o.loadLayout.bind(o)), window.addEventListener("resize", o.requestResize.bind(o)), window.addEventListener("popstate", function(t) {
            var e = t.state;
            if (t.preventDefault(), e) {
                var n = o.getLeafById(e.leaf),
                    r = JSON.parse(e.state),
                    i = JSON.parse(e.eState);
                n && !n.pinned && n.view.navigation || (n = o.getUnpinnedLeaf()), r.popstate = !0, r.active = !0, n.setViewState(r, i)
            }
        }), document.addEventListener("click", o.onDocumentClick.bind(o)), o.on("file-open", function(t) {
            t && o.recordMostRecentOpenedFile(t)
        }), o.app.commands.addCommand({
            id: "editor:save-file",
            name: "Editor: save file",
            callback: function() {
                var t = o.activeLeaf;
                t && t.view instanceof Ba && t.view.save()
            },
            hotkeys: [yn([nn], "s")]
        }), o.app.commands.addCommand({
            id: "editor:follow-link",
            name: "Follow link under cursor",
            checkCallback: function(t) {
                var e = o.activeLeaf;
                return !!(e && e.view instanceof Ba) && (t || e.view.sourceMode.followLinkUnderCursor(), !0)
            },
            hotkeys: [yn([an], "Enter")]
        }), o.app.commands.addCommand({
            id: "editor:open-link-in-new-leaf",
            name: "Open link under cursor in new pane",
            checkCallback: function(t) {
                var e = o.activeLeaf;
                return !!(e && e.view instanceof Ba) && (t || e.view.sourceMode.openLinkUnderCursorInNewLeaf(), !0)
            },
            hotkeys: [yn([nn, an], "Enter")]
        }), setInterval(o.updateHistory.bind(o), 1e3), o
    }
    var Wh = (Kh.prototype.addRibbonActionButton = function(t, e, n) {
        var r = this.makeRibbonActionButton(t, e, n);
        return this.ribbonActionsEl.insertBefore(r, null), r
    }, Kh.prototype.setCollapsedState = function(t) {
        this.containerEl.toggleClass("is-collapsed", t), t ? this.collapseButtonEl.setAttribute("aria-label", "Expand") : this.collapseButtonEl.setAttribute("aria-label", "Collapse")
    }, Kh.prototype.hide = function() {
        this.containerEl.addClass("is-hidden")
    }, Kh.prototype.show = function() {
        this.containerEl.removeClass("is-hidden")
    }, Kh.prototype.makeRibbonActionButton = function(t, e, n) {
        var r = createEl("div", {
            cls: "side-dock-ribbon-action"
        });
        return r.addEventListener("click", n), r.setAttribute("aria-label", e), r.setAttribute("aria-label-position", "right"), We(r, t, 18), r
    }, Kh);

    function Kh(t, e) {
        var n = this;
        this.workspace = null, this.containerEl = null, this.tabsEl = null, this.ribbonActionsEl = null, this.collapseButtonEl = null, this.tabsBeforeEl = null, this.tabsAfterEl = null, this.ribbonSettingEl = null, this.workspace = t;
        var r = this.containerEl = t.containerEl.createEl("div", {
            cls: "workspace-ribbon side-dock-ribbon"
        });
        r.addClass("mod-" + e), this.collapseButtonEl = r.createEl("div", {
            cls: "workspace-ribbon-collapse-btn"
        }, function(t) {
            t.setAttribute("aria-label", "Collapse"), "left" === e ? (t.setAttribute("aria-label-position", "right"), We(t, ee)) : "right" === e && (t.setAttribute("aria-label-position", "left"), We(t, ne)), t.addEventListener("click", function() {
                "left" === e ? n.workspace.leftSplit.toggle() : "right" === e && n.workspace.rightSplit.toggle()
            })
        }), "left" === e && (this.ribbonActionsEl = r.createEl("div", {
            cls: "side-dock-actions"
        }), this.ribbonSettingEl = r.createEl("div", {
            cls: "side-dock-settings"
        }));
        var i = t.app;
        if ("left" === e) {
            var o = this.makeRibbonActionButton(Ve, "Open another vault", function(t) {
                t.stopPropagation(), i.openStarter()
            });
            o.addEventListener("mouseover", function() {
                We(o, Ge, 18)
            }), o.addEventListener("mouseout", function() {
                We(o, Ve, 18)
            }), this.ribbonSettingEl.appendChild(o);
            var a = this.makeRibbonActionButton(je, "Help", function(t) {
                t.stopPropagation(), i.openHelp()
            });
            this.ribbonSettingEl.appendChild(a);
            var s = this.makeRibbonActionButton(ce, "Settings", function(t) {
                t.stopPropagation(), i.setting.open()
            });
            this.ribbonSettingEl.appendChild(s)
        }
    }
    var $h = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        Zh = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        },
        Yh = function(t) {
            this.appContainerEl = null, this.workspaceEl = null, this.statusBarEl = null, this.appContainerEl = t.createEl("div", {
                cls: "app-container is-left-sidedock-collapsed is-right-sidedock-collapsed"
            });
            var e = this.appContainerEl.createEl("div", {
                cls: "horizontal-main-container"
            });
            this.workspaceEl = e.createEl("div", {
                cls: "workspace"
            }), this.statusBarEl = this.appContainerEl.createEl("div", {
                cls: "status-bar"
            })
        };
    La(function(t) {
        t.remote.dialog
    });
    var Jh = (Xh.prototype.saveBase64Png = function(r, i, o) {
        return $h(this, void 0, Promise, function() {
            var e, n;
            return Zh(this, function(t) {
                switch (t.label) {
                    case 0:
                        return e = this.vault.getAvailablePathForAttachments(r, "png"), [4, this.vault.create(e, "")];
                    case 1:
                        return t.sent(), (n = this.vault.getAbstractFileByPath(e)) ? [4, this.vault.modify(n, i, "base64")] : [3, 3];
                    case 2:
                        return t.sent(), [2, this.metadataCache.fileToLinktext(n, o)];
                    case 3:
                        return [2, null]
                }
            })
        })
    }, Xh.prototype.setAttachmentFolder = function(t) {
        this.vault.setConfig(tt, t.path);
        var e = 'Attachments will be saved to "' + t.path + '" from now on.';
        new Fr(e)
    }, Xh.prototype.nextFrame = function(t) {
        this.nextFrameTimer || (this.nextFrameTimer = window.requestAnimationFrame(this.onNextFrame.bind(this))), this.nextFrameEvents.push(t)
    }, Xh.prototype.nextFramePromise = function() {
        var e = this;
        return new Promise(function(t) {
            return e.nextFrame(t)
        })
    }, Xh.prototype.onNextFrame = function(t) {
        this.nextFrameTimer = null;
        var e = this.nextFrameEvents;
        this.nextFrameEvents = [];
        for (var n = 0, r = e; n < r.length; n++)(0, r[n])(t)
    }, Xh.prototype.nextFrameOnceCallback = function(e) {
        var t = this,
            n = !1;
        return function() {
            n || (n = !0, t.nextFrame(function(t) {
                n = !1, e(t)
            }))
        }
    }, Xh.prototype.nextFrameOnce = function() {
        var t = this,
            n = !1;
        return function(e) {
            n || (n = !0, t.nextFrame(function(t) {
                n = !1, e(t)
            }))
        }
    }, Xh.prototype.initializeWithAdapter = function(n) {
        return $h(this, void 0, void 0, function() {
            var e, o = this;
            return Zh(this, function(t) {
                switch (t.label) {
                    case 0:
                        this.vault = new Ot(n), t.label = 1;
                    case 1:
                        return t.trys.push([1, 3, , 4]), [4, this.vault.readRaw("")];
                    case 2:
                        return t.sent(), [3, 4];
                    case 3:
                        return "ENOENT" === (e = t.sent()).code ? (this.vault = null, this.openStarter(), window.close(), [2]) : (e.code, [3, 4]);
                    case 4:
                        return [4, this.vault.setupConfigAndCache()];
                    case 5:
                        return t.sent(), this.workspace = new Gh(this, this.dom.workspaceEl), this.fileManager = new Rr(this), this.statusBar = new bh(this, this.dom.statusBarEl), this.metadataCache = new Vt(this, this.vault, this.parser), this.account = new a, this.setting = new Lc(this), this.plugins = new cs(this), this.plugins.loadPlugin(new bl), this.globalSearch = this.plugins.loadPlugin(new yr), this.plugins.loadPlugin(new wu), this.plugins.loadPlugin(new ql), this.plugins.loadPlugin(new ws), this.plugins.loadPlugin(new th), this.plugins.loadPlugin(new tu), this.plugins.loadPlugin(new Wu), this.plugins.loadPlugin(new Gc), this.plugins.loadPlugin(new Ds), this.plugins.loadPlugin(new su), this.plugins.loadPlugin(new tl), this.plugins.loadPlugin(new dh), this.plugins.loadPlugin(new Mu), this.plugins.loadPlugin(new ch), this.plugins.loadPlugin(new zu), this.plugins.loadPlugin(new fs), this.plugins.loadPlugin(new ol), this.hotkeyManager.load(), $h(o, void 0, void 0, function() {
                            var e, n, r, i = this;
                            return Zh(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.disableCssTransition(), this.changeTheme(this.vault.getConfig(j)), this.plugins.enable(), [4, this.vault.load()];
                                    case 1:
                                        return t.sent(), this.vault.on("closed", function() {
                                            i.openStarter(), window.close()
                                        }), setTimeout(function() {
                                            i.enableCssTransition()
                                        }, 500), "Obsidian Help" === this.vault.getName() && (e = this.vault.getAbstractFileByPath("Start here.md")) ? (n = this.workspace.getUnpinnedLeaf(), r = this.workspace.createLeafBySplit(n, "vertical"), [4, n.openFile(e, {
                                            active: !0,
                                            state: {
                                                mode: "source"
                                            }
                                        })]) : [3, 4];
                                    case 2:
                                        return t.sent(), [4, r.openFile(e, {
                                            group: n,
                                            state: {
                                                mode: "preview"
                                            }
                                        })];
                                    case 3:
                                        t.sent(), t.label = 4;
                                    case 4:
                                        return [2]
                                }
                            })
                        }), this.commands.addCommand({
                            id: "app:go-back",
                            name: "Navigate back",
                            callback: function() {
                                history.back()
                            },
                            hotkeys: [yn([nn, an], "ArrowLeft")]
                        }), this.commands.addCommand({
                            id: "app:go-forward",
                            name: "Navigate forward",
                            callback: function() {
                                history.forward()
                            },
                            hotkeys: [yn([nn, an], "ArrowRight")]
                        }), this.commands.addCommand({
                            id: "app:open-vault",
                            name: "Open another vault",
                            callback: this.openStarter.bind(this)
                        }), this.commands.addCommand({
                            id: "theme:use-dark",
                            name: "Use dark theme",
                            callback: function() {
                                o.changeTheme("obsidian")
                            }
                        }), this.commands.addCommand({
                            id: "theme:use-light",
                            name: "Use light theme",
                            callback: function() {
                                o.changeTheme("moonstone")
                            }
                        }), this.commands.addCommand({
                            id: "editor:open-search",
                            name: "Search current file",
                            checkCallback: function(t) {
                                var e = o.workspace.activeLeaf;
                                return !!(e && e.view instanceof Ba && "source" === e.view.getMode()) && (t || e.view.showSearch(), !0)
                            },
                            hotkeys: [yn([nn], "f")]
                        }), this.commands.addCommand({
                            id: "editor:open-search-replace",
                            name: "Search & replace in current file",
                            checkCallback: function(t) {
                                var e = o.workspace.activeLeaf;
                                return !!(e && e.view instanceof Ba && "source" === e.view.getMode()) && (t || e.view.showSearch(!0), !0)
                            },
                            hotkeys: [yn([nn], "h")]
                        }), this.commands.addCommand({
                            id: "app:open-settings",
                            name: "Open settings",
                            callback: function() {
                                o.setting.open()
                            },
                            hotkeys: [yn([nn], ",")]
                        }), this.commands.addCommand({
                            id: "markdown:toggle-preview",
                            name: "Toggle edit/preview mode",
                            checkCallback: function(t) {
                                var e = o.workspace.activeLeaf;
                                if (e && e.view instanceof Ba) {
                                    if (!t) {
                                        var n = e.getViewState();
                                        n.state.mode = "preview" === n.state.mode ? "source" : "preview", e.setViewState(n, {
                                            focus: !0
                                        })
                                    }
                                    return !0
                                }
                                return !1
                            },
                            hotkeys: [yn([nn], "e")]
                        }), this.commands.addCommand({
                            id: "app:delete-file",
                            name: "Delete current file",
                            checkCallback: function(t) {
                                var e = o.workspace.activeLeaf;
                                return !!(e && e.view instanceof ai) && (t || o.fileManager.promptForFileDeletion(e.view.file), !0)
                            }
                        }), this.commands.addCommand({
                            id: "workspace:split-vertical",
                            name: "Split vertical",
                            callback: function() {
                                o.workspace.duplicateActiveLeaf("vertical")
                            }
                        }), this.commands.addCommand({
                            id: "workspace:split-horizontal",
                            name: "Split horizontal",
                            callback: function() {
                                o.workspace.duplicateActiveLeaf("horizontal")
                            }
                        }), this.commands.addCommand({
                            id: "workspace:close",
                            name: "Close active pane",
                            checkCallback: function(t) {
                                var e = o.workspace.activeLeaf;
                                return !!e && (t || e.detach(), !0)
                            },
                            hotkeys: [yn([nn], "w")]
                        }), this.commands.addCommand({
                            id: "workspace:close-others",
                            name: "Close all other panes",
                            checkCallback: function(t) {
                                var e = o.workspace.activeLeaf,
                                    n = [];
                                if (o.workspace.iterateRootLeaves(function(t) {
                                        t !== e && n.push(t)
                                    }), !t)
                                    for (var r = 0, i = n; r < i.length; r++) i[r].detach();
                                return 0 < n.length
                            }
                        }), this.commands.addCommand({
                            id: "app:toggle-left-sidebar",
                            name: "Toggle left sidebar",
                            callback: function() {
                                o.workspace.leftSplit.toggle()
                            }
                        }), this.commands.addCommand({
                            id: "app:toggle-right-sidebar",
                            name: "Toggle right sidebar",
                            callback: function() {
                                o.workspace.rightSplit.toggle()
                            }
                        }), this.commands.addCommand({
                            id: "app:toggle-default-view-mode",
                            name: "Toggle default view mode",
                            callback: function() {
                                var t = o.vault.getConfig(at);
                                "source" === t ? (o.vault.setConfig(at, "preview"), new Fr("Switched default view mode to preview.")) : "preview" === t && (o.vault.setConfig(at, "source"), new Fr("Switched default view mode to editor."))
                            }
                        }), this.commands.addCommand({
                            id: "app:open-help",
                            name: "Open help",
                            callback: this.openHelp.bind(this),
                            hotkeys: [yn([], "F1")]
                        }), window.addEventListener("click", this.onMouseEvent.bind(this)), window.addEventListener("mousedown", this.onMouseEvent.bind(this)), [2]
                }
            })
        })
    }, Xh.prototype.disableCssTransition = function() {
        this.dom.appContainerEl.addClass("no-transition")
    }, Xh.prototype.enableCssTransition = function() {
        this.dom.appContainerEl.removeClass("no-transition")
    }, Xh.prototype.getTheme = function() {
        return this.vault.getConfig(j)
    }, Xh.prototype.changeTheme = function(t) {
        var e = this;
        if (t) {
            var n = fish("body");
            this.disableCssTransition(), "obsidian" === t ? (n.removeClass("theme-light"), n.addClass("theme-dark")) : "moonstone" === t && (n.removeClass("theme-dark"), n.addClass("theme-light")), setTimeout(function() {
                e.enableCssTransition()
            }, 200), this.vault.setConfig(j, t)
        }
    }, Xh.prototype.garbleText = function() {
        this.dom.appContainerEl.addClass("is-text-garbled")
    }, Xh.prototype.importLocalFile = function(a) {
        return $h(this, void 0, Promise, function() {
            var e, n, r, i, o;
            return Zh(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, I.readLocalFile(a)];
                    case 1:
                        return (e = t.sent()) ? (n = m(I.normalizePath(a)), r = E(n), i = w(n), o = this.vault.getAvailablePathForAttachments(i, r), [4, this.vault.createBinary(o, e)]) : [2, null];
                    case 2:
                        return [2, t.sent()]
                }
            })
        })
    }, Xh.prototype.onMouseEvent = function(t) {
        3 !== t.button && 4 !== t.button || (t.preventDefault(), t.stopPropagation())
    }, Xh.prototype.openStarter = function() {
        La(function(t) {
            t.ipcRenderer.sendSync("starter")
        })
    }, Xh.prototype.openHelp = function() {
        La(function(t) {
            t.ipcRenderer.sendSync("helpdocs")
        })
    }, Xh.prototype.openGlobalSearch = function(t) {
        var e, n = this.workspace.getLeavesOfType("search");
        0 === n.length ? (e = this.workspace.getLeftLeaf(!0)).setViewState({
            type: "search"
        }) : e = n[0];
        var r = e.getRoot();
        r instanceof ar && r.collapsed && r.toggle(), e.view instanceof Er && e.view.openSearch(t)
    }, Xh.prototype.openWithDefaultApp = function(n) {
        var r = this.vault.adapter;
        La(function(t) {
            var e = t.shell;
            e && r instanceof I && e.openItem(r.basePath + "/" + n.path)
        })
    }, Xh);

    function Xh(t) {
        this.hotkeyManager = null, this.nextFrameEvents = [], this.nextFrameTimer = null, this.tooltip = new kh, this.fileManager = null, this.setting = null, this.account = null, this.keymap = new dn, this.scope = this.keymap.getRootScope(), this.parser = new Wt.b, this.commands = new l(this), this.hotkeyManager = new wn(this), this.dom = new Yh(fish("body")), this.initializeWithAdapter(t)
    }
    n(9);
    var Qh = function(t, a, s, c) {
            return new(s = s || Promise)(function(n, e) {
                function r(t) {
                    try {
                        o(c.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function i(t) {
                    try {
                        o(c.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof s ? e : new s(function(t) {
                        t(e)
                    })).then(r, i)
                }
                o((c = c.apply(t, a || [])).next())
            })
        },
        tp = function(n, r) {
            var i, o, a, t, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return t = {
                next: e(0),
                throw: e(1),
                return: e(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                            switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, o = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        s.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && s.label < a[1]) {
                                        s.label = a[1], a = e;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(e);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) {
                            e = [6, t], o = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, t])
                }
            }
        };
    document.addEventListener("DOMContentLoaded", function() {
        return Qh(void 0, void 0, void 0, function() {
            var n;
            return tp(this, function(t) {
                return n = null, La(function(t) {
                    var e = t.ipcRenderer.sendSync("vault");
                    e && Sa("fs").existsSync(e) && (n = new I(e)), n || t.ipcRenderer.sendSync("starter"), document.title = "Obsidian v" + t.ipcRenderer.sendSync("version") + " - " + m(I.normalizePath(e))
                }), n || window.close(), window.app = new Jh(n), [2]
            })
        })
    }, !1)
}]);