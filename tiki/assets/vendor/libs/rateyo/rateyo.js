﻿!function (t, e) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = e();
    else if ("function" == typeof define && define.amd)
        define([], e);
    else {
        var r = e();
        for (var n in r)
            ("object" == typeof exports ? exports : t)[n] = r[n]
    }
}(self, (function () {
    return function () {
        var t = {
            3020: function () {
                !function (t) {
                    "use strict";
                    var e = '<?xml version="1.0" encoding="utf-8"?><svg version="1.1"xmlns="http://www.w3.org/2000/svg"viewBox="0 12.705 512 486.59"x="0px" y="0px"xml:space="preserve"><polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "/></svg>'
                        , r = {
                            starWidth: "32px",
                            normalFill: "gray",
                            ratedFill: "#f39c12",
                            numStars: 5,
                            maxValue: 5,
                            precision: 1,
                            rating: 0,
                            fullStar: !1,
                            halfStar: !1,
                            readOnly: !1,
                            spacing: "0px",
                            rtl: !1,
                            multiColor: null,
                            onInit: null,
                            onChange: null,
                            onSet: null,
                            starSvg: null
                        }
                        , n = {
                            startColor: "#c0392b",
                            endColor: "#f1c40f"
                        };
                    function a(t, e, r) {
                        return t === e ? t = e : t === r && (t = r),
                            t
                    }
                    function o(t) {
                        return void 0 !== t
                    }
                    var i = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i
                        , l = function (t) {
                            if (!i.test(t))
                                return null;
                            var e = i.exec(t);
                            return {
                                r: parseInt(e[1], 16),
                                g: parseInt(e[2], 16),
                                b: parseInt(e[3], 16)
                            }
                        };
                    function s(t, e, r) {
                        var n = r / 100 * (e - t);
                        return 1 === (n = Math.round(t + n).toString(16)).length && (n = "0" + n),
                            n
                    }
                    function c(r, i) {
                        this.node = r.get(0);
                        var u = this;
                        r.empty().addClass("jq-ry-container");
                        var p, f, d, g, m, h, v = t("<div/>").addClass("jq-ry-group-wrapper").appendTo(r), y = t("<div/>").addClass("jq-ry-normal-group").addClass("jq-ry-group").appendTo(v), b = t("<div/>").addClass("jq-ry-rated-group").addClass("jq-ry-group").appendTo(v), w = 0, x = i.rating, k = !1;
                        function S(t) {
                            o(t) || (t = i.rating),
                                x = t;
                            var e = t / p
                                , r = e * d;
                            e > 1 && (r += (Math.ceil(e) - 1) * m),
                                I(i.ratedFill),
                                (r = i.rtl ? 100 - r : r) < 0 ? r = 0 : r > 100 && (r = 100),
                                b.css("width", r + "%")
                        }
                        function C() {
                            h = f * i.numStars + g * (i.numStars - 1),
                                d = f / h * 100,
                                m = g / h * 100,
                                r.width(h),
                                S()
                        }
                        function F(t) {
                            var e = i.starWidth = t;
                            return f = window.parseFloat(i.starWidth.replace("px", "")),
                                y.find("svg").attr({
                                    width: i.starWidth,
                                    height: e
                                }),
                                b.find("svg").attr({
                                    width: i.starWidth,
                                    height: e
                                }),
                                C(),
                                r
                        }
                        function j(t) {
                            return i.spacing = t,
                                g = parseFloat(i.spacing.replace("px", "")),
                                y.find("svg:not(:first-child)").css({
                                    "margin-left": t
                                }),
                                b.find("svg:not(:first-child)").css({
                                    "margin-left": t
                                }),
                                C(),
                                r
                        }
                        function q(t) {
                            return i.normalFill = t,
                                (i.rtl ? b : y).find("svg").attr({
                                    fill: i.normalFill
                                }),
                                r
                        }
                        var z = i.ratedFill;
                        function I(t) {
                            if (i.multiColor) {
                                var e = (x - w) / i.maxValue * 100
                                    , a = i.multiColor || {};
                                t = function (t, e, r) {
                                    if (!t || !e)
                                        return null;
                                    r = o(r) ? r : 0,
                                        t = l(t),
                                        e = l(e);
                                    var n = s(t.r, e.r, r)
                                        , a = s(t.b, e.b, r);
                                    return "#" + n + s(t.g, e.g, r) + a
                                }(a.startColor || n.startColor, a.endColor || n.endColor, e)
                            } else
                                z = t;
                            return i.ratedFill = t,
                                (i.rtl ? y : b).find("svg").attr({
                                    fill: i.ratedFill
                                }),
                                r
                        }
                        function O(t) {
                            t = !!t,
                                i.rtl = t,
                                q(i.normalFill),
                                S()
                        }
                        function V(t) {
                            i.multiColor = t,
                                I(t || z)
                        }
                        function M(n) {
                            i.numStars = n,
                                p = i.maxValue / i.numStars,
                                y.empty(),
                                b.empty();
                            for (var a = 0; a < i.numStars; a++)
                                y.append(t(i.starSvg || e)),
                                    b.append(t(i.starSvg || e));
                            return F(i.starWidth),
                                q(i.normalFill),
                                j(i.spacing),
                                S(),
                                r
                        }
                        function E(t) {
                            return i.maxValue = t,
                                p = i.maxValue / i.numStars,
                                i.rating > t && R(t),
                                S(),
                                r
                        }
                        function W(t) {
                            return i.precision = t,
                                R(i.rating),
                                r
                        }
                        function A(t) {
                            return i.halfStar = t,
                                r
                        }
                        function T(t) {
                            return i.fullStar = t,
                                r
                        }
                        function _(t) {
                            var e, r, n, a, o, l = y.offset().left, s = l + y.width(), c = i.maxValue, u = t.pageX, f = 0;
                            if (u < l)
                                f = w;
                            else if (u > s)
                                f = c;
                            else {
                                var h = (u - l) / (s - l);
                                if (g > 0)
                                    for (var v = h *= 100; v > 0;)
                                        v > d ? (f += p,
                                            v -= d + m) : (f += v / d * p,
                                                v = 0);
                                else
                                    f = h * i.maxValue;
                                r = (e = f) % p,
                                    n = p / 2,
                                    a = i.halfStar,
                                    f = (o = i.fullStar) || a ? (o || a && r > n ? e += p - r : (e -= r,
                                        r > 0 && (e += n)),
                                        e) : e
                            }
                            return i.rtl && (f = c - f),
                                parseFloat(f)
                        }
                        function P(t) {
                            return i.readOnly = t,
                                r.attr("readonly", !0),
                                H(),
                                t || (r.removeAttr("readonly"),
                                    r.on("mousemove", N).on("mouseenter", N).on("mouseleave", Q).on("click", X).on("rateyo.init", $).on("rateyo.change", D).on("rateyo.set", G)),
                                r
                        }
                        function R(t) {
                            var e = t
                                , n = i.maxValue;
                            return "string" == typeof e && ("%" === e[e.length - 1] && (e = e.substr(0, e.length - 1),
                                E(n = 100)),
                                e = parseFloat(e)),
                                function (t, e, r) {
                                    if (!(t >= e && t <= r))
                                        throw Error("Invalid Rating, expected value between " + e + " and " + r)
                                }(e, w, n),
                                e = parseFloat(e.toFixed(i.precision)),
                                a(parseFloat(e), w, n),
                                i.rating = e,
                                S(),
                                k && r.trigger("rateyo.set", {
                                    rating: e
                                }),
                                r
                        }
                        function Y(t) {
                            return i.onInit = t,
                                r
                        }
                        function B(t) {
                            return i.onSet = t,
                                r
                        }
                        function L(t) {
                            return i.onChange = t,
                                r
                        }
                        function N(t) {
                            var e = _(t).toFixed(i.precision)
                                , n = i.maxValue;
                            S(e = a(parseFloat(e), w, n)),
                                r.trigger("rateyo.change", {
                                    rating: e
                                })
                        }
                        function Q() {
                            var t, e;
                            e = !1,
                                t = navigator.userAgent || navigator.vendor || window.opera,
                                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0),
                                e || (S(),
                                    r.trigger("rateyo.change", {
                                        rating: i.rating
                                    }))
                        }
                        function X(t) {
                            var e = _(t).toFixed(i.precision);
                            e = parseFloat(e),
                                u.rating(e)
                        }
                        function $(t, e) {
                            i.onInit && "function" == typeof i.onInit && i.onInit.apply(this, [e.rating, u])
                        }
                        function D(t, e) {
                            i.onChange && "function" == typeof i.onChange && i.onChange.apply(this, [e.rating, u])
                        }
                        function G(t, e) {
                            i.onSet && "function" == typeof i.onSet && i.onSet.apply(this, [e.rating, u])
                        }
                        function H() {
                            r.off("mousemove", N).off("mouseenter", N).off("mouseleave", Q).off("click", X).off("rateyo.init", $).off("rateyo.change", D).off("rateyo.set", G)
                        }
                        this.rating = function (t) {
                            return o(t) ? (R(t),
                                r) : i.rating
                        }
                            ,
                            this.destroy = function () {
                                var e, n;
                                return i.readOnly || H(),
                                    c.prototype.collection = (e = r.get(0),
                                        n = this.collection,
                                        t.each(n, (function (t) {
                                            if (e === this.node) {
                                                var r = n.slice(0, t)
                                                    , a = n.slice(t + 1, n.length);
                                                return n = r.concat(a),
                                                    !1
                                            }
                                        }
                                        )),
                                        n),
                                    r.removeClass("jq-ry-container").children().remove(),
                                    r
                            }
                            ,
                            this.method = function (t) {
                                if (!t)
                                    throw Error("Method name not specified!");
                                if (!o(this[t]))
                                    throw Error("Method " + t + " doesn't exist!");
                                var e = Array.prototype.slice.apply(arguments, []).slice(1);
                                return this[t].apply(this, e)
                            }
                            ,
                            this.option = function (t, e) {
                                if (!o(t))
                                    return i;
                                var r;
                                switch (t) {
                                    case "starWidth":
                                        r = F;
                                        break;
                                    case "numStars":
                                        r = M;
                                        break;
                                    case "normalFill":
                                        r = q;
                                        break;
                                    case "ratedFill":
                                        r = I;
                                        break;
                                    case "multiColor":
                                        r = V;
                                        break;
                                    case "maxValue":
                                        r = E;
                                        break;
                                    case "precision":
                                        r = W;
                                        break;
                                    case "rating":
                                        r = R;
                                        break;
                                    case "halfStar":
                                        r = A;
                                        break;
                                    case "fullStar":
                                        r = T;
                                        break;
                                    case "readOnly":
                                        r = P;
                                        break;
                                    case "spacing":
                                        r = j;
                                        break;
                                    case "rtl":
                                        r = O;
                                        break;
                                    case "onInit":
                                        r = Y;
                                        break;
                                    case "onSet":
                                        r = B;
                                        break;
                                    case "onChange":
                                        r = L;
                                        break;
                                    default:
                                        throw Error("No such option as " + t)
                                }
                                return o(e) ? r(e) : i[t]
                            }
                            ,
                            M(i.numStars),
                            P(i.readOnly),
                            i.rtl && O(i.rtl),
                            this.collection.push(this),
                            this.rating(i.rating, !0),
                            k = !0,
                            r.trigger("rateyo.init", {
                                rating: i.rating
                            })
                    }
                    function u(e, r) {
                        var n;
                        return t.each(r, (function () {
                            if (e === this.node)
                                return n = this,
                                    !1
                        }
                        )),
                            n
                    }
                    function p(e) {
                        var n = c.prototype.collection
                            , a = t(this);
                        if (0 === a.length)
                            return a;
                        var o = Array.prototype.slice.apply(arguments, []);
                        if (0 === o.length)
                            e = o[0] = {};
                        else {
                            if (1 !== o.length || "object" != typeof o[0]) {
                                if (o.length >= 1 && "string" == typeof o[0]) {
                                    var i = o[0]
                                        , l = o.slice(1)
                                        , s = [];
                                    return t.each(a, (function (t, e) {
                                        var r = u(e, n);
                                        if (!r)
                                            throw Error("Trying to set options before even initialization");
                                        var a = r[i];
                                        if (!a)
                                            throw Error("Method " + i + " does not exist!");
                                        var o = a.apply(r, l);
                                        s.push(o)
                                    }
                                    )),
                                        s = 1 === s.length ? s[0] : s
                                }
                                throw Error("Invalid Arguments")
                            }
                            e = o[0]
                        }
                        return e = t.extend({}, r, e),
                            t.each(a, (function () {
                                var r = u(this, n);
                                if (r)
                                    return r;
                                var a = t(this)
                                    , o = {}
                                    , i = t.extend({}, e);
                                return t.each(a.data(), (function (t, e) {
                                    if (0 === t.indexOf("rateyo")) {
                                        var r = t.replace(/^rateyo/, "");
                                        r = r[0].toLowerCase() + r.slice(1),
                                            o[r] = e,
                                            delete i[r]
                                    }
                                }
                                )),
                                    new c(t(this), t.extend({}, o, i))
                            }
                            ))
                    }
                    c.prototype.collection = [],
                        window.RateYo = c,
                        t.fn.rateYo = function () {
                            return p.apply(this, Array.prototype.slice.apply(arguments, []))
                        }
                }(window.jQuery)
            }
        }
            , e = {};
        function r(n) {
            var a = e[n];
            if (void 0 !== a)
                return a.exports;
            var o = e[n] = {
                exports: {}
            };
            return t[n](o, o.exports, r),
                o.exports
        }
        r.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            }
                : function () {
                    return t
                }
                ;
            return r.d(e, {
                a: e
            }),
                e
        }
            ,
            r.d = function (t, e) {
                for (var n in e)
                    r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: e[n]
                    })
            }
            ,
            r.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            ,
            r.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
            }
            ;
        var n = {};
        return function () {
            "use strict";
            r.r(n),
                r(3020)
        }(),
            n
    }()
}
));
