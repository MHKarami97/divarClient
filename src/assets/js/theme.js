function copyLinkFunction() {
  var copyText = document.getElementById("shortlink");
  copyText.select();
  document.execCommand("copy");
  jQuery('.post-link__button').attr("title", "کپی شد").tooltip("_fixTitle").tooltip("show").attr(
    "title", "کپی لینک").tooltip("_fixTitle");
}

function copyPhoneFunction() {
  var copyText = document.getElementById("shortphone");
  copyText.select();
  document.execCommand("copy");
  jQuery('#post-phone__button').attr("title", "کپی شد").tooltip("_fixTitle").tooltip("show").attr(
    "title", "کپی لینک").tooltip("_fixTitle");
}

(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
})(this, function () {
  'use strict';

  function e(e) {
    return e && '[object Function]' === {}.toString.call(e)
  }

  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var o = window.getComputedStyle(e, null);
    return t ? o[t] : o
  }

  function o(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host
  }

  function n(e) {
    if (!e || -1 !== ['HTML', 'BODY', '#document'].indexOf(e.nodeName)) return window.document.body;
    var i = t(e),
      r = i.overflow,
      p = i.overflowX,
      s = i.overflowY;
    return /(auto|scroll)/.test(r + s + p) ? e : n(o(e))
  }

  function r(e) {
    var o = e && e.offsetParent,
      i = o && o.nodeName;
    return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(o.nodeName) && 'static' === t(o, 'position') ? r(o) : o : window.document.documentElement
  }

  function p(e) {
    var t = e.nodeName;
    return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e)
  }

  function s(e) {
    return null === e.parentNode ? e : s(e.parentNode)
  }

  function d(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return window.document.documentElement;
    var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = o ? e : t,
      n = o ? t : e,
      a = document.createRange();
    a.setStart(i, 0), a.setEnd(n, 0);
    var f = a.commonAncestorContainer;
    if (e !== f && t !== f || i.contains(n)) return p(f) ? f : r(f);
    var l = s(e);
    return l.host ? d(l.host, t) : d(e, s(t).host)
  }

  function a(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
      o = 'top' === t ? 'scrollTop' : 'scrollLeft',
      i = e.nodeName;
    if ('BODY' === i || 'HTML' === i) {
      var n = window.document.documentElement,
        r = window.document.scrollingElement || n;
      return r[o]
    }
    return e[o]
  }

  function f(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      i = a(t, 'top'),
      n = a(t, 'left'),
      r = o ? -1 : 1;
    return e.top += i * r, e.bottom += i * r, e.left += n * r, e.right += n * r, e
  }

  function l(e, t) {
    var o = 'x' === t ? 'Left' : 'Top',
      i = 'Left' == o ? 'Right' : 'Bottom';
    return +e['border' + o + 'Width'].split('px')[0] + +e['border' + i + 'Width'].split('px')[0]
  }

  function m(e, t, o, i) {
    return _(t['offset' + e], o['client' + e], o['offset' + e], ie() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
  }

  function h() {
    var e = window.document.body,
      t = window.document.documentElement,
      o = ie() && window.getComputedStyle(t);
    return {
      height: m('Height', e, t, o),
      width: m('Width', e, t, o)
    }
  }

  function c(e) {
    return se({}, e, {
      right: e.left + e.width,
      bottom: e.top + e.height
    })
  }

  function g(e) {
    var o = {};
    if (ie()) try {
      o = e.getBoundingClientRect();
      var i = a(e, 'top'),
        n = a(e, 'left');
      o.top += i, o.left += n, o.bottom += i, o.right += n
    } catch (e) {} else o = e.getBoundingClientRect();
    var r = {
        left: o.left,
        top: o.top,
        width: o.right - o.left,
        height: o.bottom - o.top
      },
      p = 'HTML' === e.nodeName ? h() : {},
      s = p.width || e.clientWidth || r.right - r.left,
      d = p.height || e.clientHeight || r.bottom - r.top,
      f = e.offsetWidth - s,
      m = e.offsetHeight - d;
    if (f || m) {
      var g = t(e);
      f -= l(g, 'x'), m -= l(g, 'y'), r.width -= f, r.height -= m
    }
    return c(r)
  }

  function u(e, o) {
    var i = ie(),
      r = 'HTML' === o.nodeName,
      p = g(e),
      s = g(o),
      d = n(e),
      a = t(o),
      l = +a.borderTopWidth.split('px')[0],
      m = +a.borderLeftWidth.split('px')[0],
      h = c({
        top: p.top - s.top - l,
        left: p.left - s.left - m,
        width: p.width,
        height: p.height
      });
    if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
      var u = +a.marginTop.split('px')[0],
        b = +a.marginLeft.split('px')[0];
      h.top -= l - u, h.bottom -= l - u, h.left -= m - b, h.right -= m - b, h.marginTop = u, h.marginLeft = b
    }
    return (i ? o.contains(d) : o === d && 'BODY' !== d.nodeName) && (h = f(h, o)), h
  }

  function b(e) {
    var t = window.document.documentElement,
      o = u(e, t),
      i = _(t.clientWidth, window.innerWidth || 0),
      n = _(t.clientHeight, window.innerHeight || 0),
      r = a(t),
      p = a(t, 'left'),
      s = {
        top: r - o.top + o.marginTop,
        left: p - o.left + o.marginLeft,
        width: i,
        height: n
      };
    return c(s)
  }

  function y(e) {
    var i = e.nodeName;
    return 'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t(e, 'position') || y(o(e))
  }

  function w(e, t, i, r) {
    var p = {
        top: 0,
        left: 0
      },
      s = d(e, t);
    if ('viewport' === r) p = b(s);
    else {
      var a;
      'scrollParent' === r ? (a = n(o(e)), 'BODY' === a.nodeName && (a = window.document.documentElement)) : 'window' === r ? a = window.document.documentElement : a = r;
      var f = u(a, s);
      if ('HTML' === a.nodeName && !y(s)) {
        var l = h(),
          m = l.height,
          c = l.width;
        p.top += f.top - f.marginTop, p.bottom = m + f.top, p.left += f.left - f.marginLeft, p.right = c + f.left
      } else p = f
    }
    return p.left += i, p.top += i, p.right -= i, p.bottom -= i, p
  }

  function v(e) {
    var t = e.width,
      o = e.height;
    return t * o
  }

  function E(e, t, o, i, n) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf('auto')) return e;
    var p = w(o, i, r, n),
      s = {
        top: {
          width: p.width,
          height: t.top - p.top
        },
        right: {
          width: p.right - t.right,
          height: p.height
        },
        bottom: {
          width: p.width,
          height: p.bottom - t.bottom
        },
        left: {
          width: t.left - p.left,
          height: p.height
        }
      },
      d = Object.keys(s).map(function (e) {
        return se({
          key: e
        }, s[e], {
          area: v(s[e])
        })
      }).sort(function (e, t) {
        return t.area - e.area
      }),
      a = d.filter(function (e) {
        var t = e.width,
          i = e.height;
        return t >= o.clientWidth && i >= o.clientHeight
      }),
      f = 0 < a.length ? a[0].key : d[0].key,
      l = e.split('-')[1];
    return f + (l ? '-' + l : '')
  }

  function x(e, t, o) {
    var i = d(t, o);
    return u(o, i)
  }

  function O(e) {
    var t = window.getComputedStyle(e),
      o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
      i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
      n = {
        width: e.offsetWidth + i,
        height: e.offsetHeight + o
      };
    return n
  }

  function L(e) {
    var t = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom'
    };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e]
    })
  }

  function S(e, t, o) {
    o = o.split('-')[0];
    var i = O(e),
      n = {
        width: i.width,
        height: i.height
      },
      r = -1 !== ['right', 'left'].indexOf(o),
      p = r ? 'top' : 'left',
      s = r ? 'left' : 'top',
      d = r ? 'height' : 'width',
      a = r ? 'width' : 'height';
    return n[p] = t[p] + t[d] / 2 - i[d] / 2, n[s] = o === s ? t[s] - i[a] : t[L(s)], n
  }

  function T(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0]
  }

  function C(e, t, o) {
    if (Array.prototype.findIndex) return e.findIndex(function (e) {
      return e[t] === o
    });
    var i = T(e, function (e) {
      return e[t] === o
    });
    return e.indexOf(i)
  }

  function N(t, o, i) {
    var n = void 0 === i ? t : t.slice(0, C(t, 'name', i));
    return n.forEach(function (t) {
      t.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      var i = t.function || t.fn;
      t.enabled && e(i) && (o.offsets.popper = c(o.offsets.popper), o.offsets.reference = c(o.offsets.reference), o = i(o, t))
    }), o
  }

  function k() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {},
        attributes: {},
        flipped: !1,
        offsets: {}
      };
      e.offsets.reference = x(this.state, this.popper, this.reference), e.placement = E(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = 'absolute', e = N(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
    }
  }

  function W(e, t) {
    return e.some(function (e) {
      var o = e.name,
        i = e.enabled;
      return i && o === t
    })
  }

  function B(e) {
    for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
      var i = t[n],
        r = i ? '' + i + o : e;
      if ('undefined' != typeof window.document.body.style[r]) return r
    }
    return null
  }

  function D() {
    return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.left = '', this.popper.style.position = '', this.popper.style.top = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
  }

  function H(e, t, o, i) {
    var r = 'BODY' === e.nodeName,
      p = r ? window : e;
    p.addEventListener(t, o, {
      passive: !0
    }), r || H(n(p.parentNode), t, o, i), i.push(p)
  }

  function P(e, t, o, i) {
    o.updateBound = i, window.addEventListener('resize', o.updateBound, {
      passive: !0
    });
    var r = n(e);
    return H(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
  }

  function A() {
    this.state.eventsEnabled || (this.state = P(this.reference, this.options, this.state, this.scheduleUpdate))
  }

  function M(e, t) {
    return window.removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener('scroll', t.updateBound)
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
  }

  function I() {
    this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state))
  }

  function R(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
  }

  function U(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && R(t[o]) && (i = 'px'), e.style[o] = t[o] + i
    })
  }

  function Y(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = t[o];
      !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o])
    })
  }

  function F(e, t, o) {
    var i = T(e, function (e) {
        var o = e.name;
        return o === t
      }),
      n = !!i && e.some(function (e) {
        return e.name === o && e.enabled && e.order < i.order
      });
    if (!n) {
      var r = '`' + t + '`';
      console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
    }
    return n
  }

  function j(e) {
    return 'end' === e ? 'start' : 'start' === e ? 'end' : e
  }

  function K(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      o = ae.indexOf(e),
      i = ae.slice(o + 1).concat(ae.slice(0, o));
    return t ? i.reverse() : i
  }

  function q(e, t, o, i) {
    var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
      r = +n[1],
      p = n[2];
    if (!r) return e;
    if (0 === p.indexOf('%')) {
      var s;
      switch (p) {
        case '%p':
          s = o;
          break;
        case '%':
        case '%r':
        default:
          s = i;
      }
      var d = c(s);
      return d[t] / 100 * r
    }
    if ('vh' === p || 'vw' === p) {
      var a;
      return a = 'vh' === p ? _(document.documentElement.clientHeight, window.innerHeight || 0) : _(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r
    }
    return r
  }

  function G(e, t, o, i) {
    var n = [0, 0],
      r = -1 !== ['right', 'left'].indexOf(i),
      p = e.split(/(\+|\-)/).map(function (e) {
        return e.trim()
      }),
      s = p.indexOf(T(p, function (e) {
        return -1 !== e.search(/,|\s/)
      }));
    p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    var d = /\s*,\s*|\s+/,
      a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
    return a = a.map(function (e, i) {
      var n = (1 === i ? !r : r) ? 'height' : 'width',
        p = !1;
      return e.reduce(function (e, t) {
        return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t)
      }, []).map(function (e) {
        return q(e, n, t, o)
      })
    }), a.forEach(function (e, t) {
      e.forEach(function (o, i) {
        R(o) && (n[t] += o * ('-' === e[i - 1] ? -1 : 1))
      })
    }), n
  }
  for (var z = Math.min, V = Math.floor, _ = Math.max, X = ['native code', '[object MutationObserverConstructor]'], Q = function (e) {
      return X.some(function (t) {
        return -1 < (e || '').toString().indexOf(t)
      })
    }, J = 'undefined' != typeof window, Z = ['Edge', 'Trident', 'Firefox'], $ = 0, ee = 0; ee < Z.length; ee += 1)
    if (J && 0 <= navigator.userAgent.indexOf(Z[ee])) {
      $ = 1;
      break
    } var i, te = J && Q(window.MutationObserver),
    oe = te ? function (e) {
      var t = !1,
        o = 0,
        i = document.createElement('span'),
        n = new MutationObserver(function () {
          e(), t = !1
        });
      return n.observe(i, {
          attributes: !0
        }),
        function () {
          t || (t = !0, i.setAttribute('x-index', o), ++o)
        }
    } : function (e) {
      var t = !1;
      return function () {
        t || (t = !0, setTimeout(function () {
          t = !1, e()
        }, $))
      }
    },
    ie = function () {
      return void 0 == i && (i = -1 !== navigator.appVersion.indexOf('MSIE 10')), i
    },
    ne = function (e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    },
    re = function () {
      function e(e, t) {
        for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
      }
      return function (t, o, i) {
        return o && e(t.prototype, o), i && e(t, i), t
      }
    }(),
    pe = function (e, t, o) {
      return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = o, e
    },
    se = Object.assign || function (e) {
      for (var t, o = 1; o < arguments.length; o++)
        for (var i in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      return e
    },
    de = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
    ae = de.slice(3),
    fe = {
      FLIP: 'flip',
      CLOCKWISE: 'clockwise',
      COUNTERCLOCKWISE: 'counterclockwise'
    },
    le = function () {
      function t(o, i) {
        var n = this,
          r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        ne(this, t), this.scheduleUpdate = function () {
          return requestAnimationFrame(n.update)
        }, this.update = oe(this.update.bind(this)), this.options = se({}, t.Defaults, r), this.state = {
          isDestroyed: !1,
          isCreated: !1,
          scrollParents: []
        }, this.reference = o.jquery ? o[0] : o, this.popper = i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(se({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
          n.options.modifiers[e] = se({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
        }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
          return se({
            name: e
          }, n.options.modifiers[e])
        }).sort(function (e, t) {
          return e.order - t.order
        }), this.modifiers.forEach(function (t) {
          t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state)
        }), this.update();
        var p = this.options.eventsEnabled;
        p && this.enableEventListeners(), this.state.eventsEnabled = p
      }
      return re(t, [{
        key: 'update',
        value: function () {
          return k.call(this)
        }
      }, {
        key: 'destroy',
        value: function () {
          return D.call(this)
        }
      }, {
        key: 'enableEventListeners',
        value: function () {
          return A.call(this)
        }
      }, {
        key: 'disableEventListeners',
        value: function () {
          return I.call(this)
        }
      }]), t
    }();
  return le.Utils = ('undefined' == typeof window ? global : window).PopperUtils, le.placements = de, le.Defaults = {
    placement: 'bottom',
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function () {},
    onUpdate: function () {},
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function (e) {
          var t = e.placement,
            o = t.split('-')[0],
            i = t.split('-')[1];
          if (i) {
            var n = e.offsets,
              r = n.reference,
              p = n.popper,
              s = -1 !== ['bottom', 'top'].indexOf(o),
              d = s ? 'left' : 'top',
              a = s ? 'width' : 'height',
              f = {
                start: pe({}, d, r[d]),
                end: pe({}, d, r[d] + r[a] - p[a])
              };
            e.offsets.popper = se({}, p, f[i])
          }
          return e
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: function (e, t) {
          var o, i = t.offset,
            n = e.placement,
            r = e.offsets,
            p = r.popper,
            s = r.reference,
            d = n.split('-')[0];
          return o = R(+i) ? [+i, 0] : G(i, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e
        },
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function (e, t) {
          var o = t.boundariesElement || r(e.instance.popper);
          e.instance.reference === o && (o = r(o));
          var i = w(e.instance.popper, e.instance.reference, t.padding, o);
          t.boundaries = i;
          var n = t.priority,
            p = e.offsets.popper,
            s = {
              primary: function (e) {
                var o = p[e];
                return p[e] < i[e] && !t.escapeWithReference && (o = _(p[e], i[e])), pe({}, e, o)
              },
              secondary: function (e) {
                var o = 'right' === e ? 'left' : 'top',
                  n = p[o];
                return p[e] > i[e] && !t.escapeWithReference && (n = z(p[o], i[e] - ('right' === e ? p.width : p.height))), pe({}, o, n)
              }
            };
          return n.forEach(function (e) {
            var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
            p = se({}, p, s[t](e))
          }), e.offsets.popper = p, e
        },
        priority: ['left', 'right', 'top', 'bottom'],
        padding: 5,
        boundariesElement: 'scrollParent'
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function (e) {
          var t = e.offsets,
            o = t.popper,
            i = t.reference,
            n = e.placement.split('-')[0],
            r = V,
            p = -1 !== ['top', 'bottom'].indexOf(n),
            s = p ? 'right' : 'bottom',
            d = p ? 'left' : 'top',
            a = p ? 'width' : 'height';
          return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]), o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])), e
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function (e, t) {
          if (!F(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
          var o = t.element;
          if ('string' == typeof o) {
            if (o = e.instance.popper.querySelector(o), !o) return e;
          } else if (!e.instance.popper.contains(o)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
          var i = e.placement.split('-')[0],
            n = e.offsets,
            r = n.popper,
            p = n.reference,
            s = -1 !== ['left', 'right'].indexOf(i),
            d = s ? 'height' : 'width',
            a = s ? 'top' : 'left',
            f = s ? 'left' : 'top',
            l = s ? 'bottom' : 'right',
            m = O(o)[d];
          p[l] - m < r[a] && (e.offsets.popper[a] -= r[a] - (p[l] - m)), p[a] + m > r[l] && (e.offsets.popper[a] += p[a] + m - r[l]);
          var h = p[a] + p[d] / 2 - m / 2,
            g = h - c(e.offsets.popper)[a];
          return g = _(z(r[d] - m, g), 0), e.arrowElement = o, e.offsets.arrow = {}, e.offsets.arrow[a] = Math.round(g), e.offsets.arrow[f] = '', e
        },
        element: '[x-arrow]'
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function (e, t) {
          if (W(e.instance.modifiers, 'inner')) return e;
          if (e.flipped && e.placement === e.originalPlacement) return e;
          var o = w(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
            i = e.placement.split('-')[0],
            n = L(i),
            r = e.placement.split('-')[1] || '',
            p = [];
          switch (t.behavior) {
            case fe.FLIP:
              p = [i, n];
              break;
            case fe.CLOCKWISE:
              p = K(i);
              break;
            case fe.COUNTERCLOCKWISE:
              p = K(i, !0);
              break;
            default:
              p = t.behavior;
          }
          return p.forEach(function (s, d) {
            if (i !== s || p.length === d + 1) return e;
            i = e.placement.split('-')[0], n = L(i);
            var a = e.offsets.popper,
              f = e.offsets.reference,
              l = V,
              m = 'left' === i && l(a.right) > l(f.left) || 'right' === i && l(a.left) < l(f.right) || 'top' === i && l(a.bottom) > l(f.top) || 'bottom' === i && l(a.top) < l(f.bottom),
              h = l(a.left) < l(o.left),
              c = l(a.right) > l(o.right),
              g = l(a.top) < l(o.top),
              u = l(a.bottom) > l(o.bottom),
              b = 'left' === i && h || 'right' === i && c || 'top' === i && g || 'bottom' === i && u,
              y = -1 !== ['top', 'bottom'].indexOf(i),
              w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u);
            (m || b || w) && (e.flipped = !0, (m || b) && (i = p[d + 1]), w && (r = j(r)), e.placement = i + (r ? '-' + r : ''), e.offsets.popper = se({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = N(e.instance.modifiers, e, 'flip'))
          }), e
        },
        behavior: 'flip',
        padding: 5,
        boundariesElement: 'viewport'
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function (e) {
          var t = e.placement,
            o = t.split('-')[0],
            i = e.offsets,
            n = i.popper,
            r = i.reference,
            p = -1 !== ['left', 'right'].indexOf(o),
            s = -1 === ['top', 'left'].indexOf(o);
          return n[p ? 'left' : 'top'] = r[t] - (s ? n[p ? 'width' : 'height'] : 0), e.placement = L(t), e.offsets.popper = c(n), e
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function (e) {
          if (!F(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
          var t = e.offsets.reference,
            o = T(e.instance.modifiers, function (e) {
              return 'preventOverflow' === e.name
            }).boundaries;
          if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
            if (!0 === e.hide) return e;
            e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
          } else {
            if (!1 === e.hide) return e;
            e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
          }
          return e
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function (e, t) {
          var o = t.x,
            i = t.y,
            n = e.offsets.popper,
            p = T(e.instance.modifiers, function (e) {
              return 'applyStyle' === e.name
            }).gpuAcceleration;
          void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
          var s, d, a = void 0 === p ? t.gpuAcceleration : p,
            f = r(e.instance.popper),
            l = g(f),
            m = {
              position: n.position
            },
            h = {
              left: V(n.left),
              top: V(n.top),
              bottom: V(n.bottom),
              right: V(n.right)
            },
            c = 'bottom' === o ? 'top' : 'bottom',
            u = 'right' === i ? 'left' : 'right',
            b = B('transform');
          if (d = 'bottom' == c ? -l.height + h.bottom : h.top, s = 'right' == u ? -l.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[u] = 0, m.willChange = 'transform';
          else {
            var y = 'bottom' == c ? -1 : 1,
              w = 'right' == u ? -1 : 1;
            m[c] = d * y, m[u] = s * w, m.willChange = c + ', ' + u
          }
          var v = {
            "x-placement": e.placement
          };
          return e.attributes = se({}, v, e.attributes), e.styles = se({}, m, e.styles), e
        },
        gpuAcceleration: !0,
        x: 'bottom',
        y: 'right'
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function (e) {
          return U(e.instance.popper, e.styles), Y(e.instance.popper, e.attributes), e.offsets.arrow && U(e.arrowElement, e.offsets.arrow), e
        },
        onLoad: function (e, t, o, i, n) {
          var r = x(n, t, e),
            p = E(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
          return t.setAttribute('x-placement', p), U(t, {
            position: 'absolute'
          }), o
        },
        gpuAcceleration: void 0
      }
    }
  }, le
});
//# sourceMappingURL=popper.min.js.map

/*!
 * Bootstrap v4.0.0 (https://getbootstrap.com)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function (t, e, n) {
  "use strict";

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
    }
  }

  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t
  }

  function r() {
    return (r = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
      }
      return t
    }).apply(this, arguments)
  }
  e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;
  var o, a, l, h, c, u, f, d, _, g, p, m, v, E, T, y, C, I, A, b, D, S, w, N, O, k, P = function (t) {
      var e = !1;

      function n(e) {
        var n = this,
          s = !1;
        return t(this).one(i.TRANSITION_END, function () {
          s = !0
        }), setTimeout(function () {
          s || i.triggerTransitionEnd(n)
        }, e), this
      }
      var i = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (t) {
          do {
            t += ~~(1e6 * Math.random())
          } while (document.getElementById(t));
          return t
        },
        getSelectorFromElement: function (e) {
          var n, i = e.getAttribute("data-target");
          i && "#" !== i || (i = e.getAttribute("href") || ""), "#" === i.charAt(0) && (n = i, i = n = "function" == typeof t.escapeSelector ? t.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
          try {
            return t(document).find(i).length > 0 ? i : null
          } catch (t) {
            return null
          }
        },
        reflow: function (t) {
          return t.offsetHeight
        },
        triggerTransitionEnd: function (n) {
          t(n).trigger(e.end)
        },
        supportsTransitionEnd: function () {
          return Boolean(e)
        },
        isElement: function (t) {
          return (t[0] || t).nodeType
        },
        typeCheckConfig: function (t, e, n) {
          for (var s in n)
            if (Object.prototype.hasOwnProperty.call(n, s)) {
              var r = n[s],
                o = e[s],
                a = o && i.isElement(o) ? "element" : (l = o, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
              if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + s + '" provided type "' + a + '" but expected type "' + r + '".')
            } var l
        }
      };
      return e = ("undefined" == typeof window || !window.QUnit) && {
        end: "transitionend"
      }, t.fn.emulateTransitionEnd = n, i.supportsTransitionEnd() && (t.event.special[i.TRANSITION_END] = {
        bindType: e.end,
        delegateType: e.end,
        handle: function (e) {
          if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
      }), i
    }(e),
    L = (a = "alert", h = "." + (l = "bs.alert"), c = (o = e).fn[a], u = {
      CLOSE: "close" + h,
      CLOSED: "closed" + h,
      CLICK_DATA_API: "click" + h + ".data-api"
    }, f = "alert", d = "fade", _ = "show", g = function () {
      function t(t) {
        this._element = t
      }
      var e = t.prototype;
      return e.close = function (t) {
        t = t || this._element;
        var e = this._getRootElement(t);
        this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
      }, e.dispose = function () {
        o.removeData(this._element, l), this._element = null
      }, e._getRootElement = function (t) {
        var e = P.getSelectorFromElement(t),
          n = !1;
        return e && (n = o(e)[0]), n || (n = o(t).closest("." + f)[0]), n
      }, e._triggerCloseEvent = function (t) {
        var e = o.Event(u.CLOSE);
        return o(t).trigger(e), e
      }, e._removeElement = function (t) {
        var e = this;
        o(t).removeClass(_), P.supportsTransitionEnd() && o(t).hasClass(d) ? o(t).one(P.TRANSITION_END, function (n) {
          return e._destroyElement(t, n)
        }).emulateTransitionEnd(150) : this._destroyElement(t)
      }, e._destroyElement = function (t) {
        o(t).detach().trigger(u.CLOSED).remove()
      }, t._jQueryInterface = function (e) {
        return this.each(function () {
          var n = o(this),
            i = n.data(l);
          i || (i = new t(this), n.data(l, i)), "close" === e && i[e](this)
        })
      }, t._handleDismiss = function (t) {
        return function (e) {
          e && e.preventDefault(), t.close(this)
        }
      }, s(t, null, [{
        key: "VERSION",
        get: function () {
          return "4.0.0"
        }
      }]), t
    }(), o(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), o.fn[a] = g._jQueryInterface, o.fn[a].Constructor = g, o.fn[a].noConflict = function () {
      return o.fn[a] = c, g._jQueryInterface
    }, g),
    R = (m = "button", E = "." + (v = "bs.button"), T = ".data-api", y = (p = e).fn[m], C = "active", I = "btn", A = "focus", b = '[data-toggle^="button"]', D = '[data-toggle="buttons"]', S = "input", w = ".active", N = ".btn", O = {
      CLICK_DATA_API: "click" + E + T,
      FOCUS_BLUR_DATA_API: "focus" + E + T + " blur" + E + T
    }, k = function () {
      function t(t) {
        this._element = t
      }
      var e = t.prototype;
      return e.toggle = function () {
        var t = !0,
          e = !0,
          n = p(this._element).closest(D)[0];
        if (n) {
          var i = p(this._element).find(S)[0];
          if (i) {
            if ("radio" === i.type)
              if (i.checked && p(this._element).hasClass(C)) t = !1;
              else {
                var s = p(n).find(w)[0];
                s && p(s).removeClass(C)
              } if (t) {
              if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
              i.checked = !p(this._element).hasClass(C), p(i).trigger("change")
            }
            i.focus(), e = !1
          }
        }
        e && this._element.setAttribute("aria-pressed", !p(this._element).hasClass(C)), t && p(this._element).toggleClass(C)
      }, e.dispose = function () {
        p.removeData(this._element, v), this._element = null
      }, t._jQueryInterface = function (e) {
        return this.each(function () {
          var n = p(this).data(v);
          n || (n = new t(this), p(this).data(v, n)), "toggle" === e && n[e]()
        })
      }, s(t, null, [{
        key: "VERSION",
        get: function () {
          return "4.0.0"
        }
      }]), t
    }(), p(document).on(O.CLICK_DATA_API, b, function (t) {
      t.preventDefault();
      var e = t.target;
      p(e).hasClass(I) || (e = p(e).closest(N)), k._jQueryInterface.call(p(e), "toggle")
    }).on(O.FOCUS_BLUR_DATA_API, b, function (t) {
      var e = p(t.target).closest(N)[0];
      p(e).toggleClass(A, /^focus(in)?$/.test(t.type))
    }), p.fn[m] = k._jQueryInterface, p.fn[m].Constructor = k, p.fn[m].noConflict = function () {
      return p.fn[m] = y, k._jQueryInterface
    }, k),
    j = function (t) {
      var e = "carousel",
        n = "bs.carousel",
        i = "." + n,
        o = t.fn[e],
        a = {
          interval: 5e3,
          keyboard: !0,
          slide: !1,
          pause: "hover",
          wrap: !0
        },
        l = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          slide: "(boolean|string)",
          pause: "(string|boolean)",
          wrap: "boolean"
        },
        h = "next",
        c = "prev",
        u = "left",
        f = "right",
        d = {
          SLIDE: "slide" + i,
          SLID: "slid" + i,
          KEYDOWN: "keydown" + i,
          MOUSEENTER: "mouseenter" + i,
          MOUSELEAVE: "mouseleave" + i,
          TOUCHEND: "touchend" + i,
          LOAD_DATA_API: "load" + i + ".data-api",
          CLICK_DATA_API: "click" + i + ".data-api"
        },
        _ = "carousel",
        g = "active",
        p = "slide",
        m = "carousel-item-right",
        v = "carousel-item-left",
        E = "carousel-item-next",
        T = "carousel-item-prev",
        y = {
          ACTIVE: ".active",
          ACTIVE_ITEM: ".active.carousel-item",
          ITEM: ".carousel-item",
          NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
          INDICATORS: ".carousel-indicators",
          DATA_SLIDE: "[data-slide], [data-slide-to]",
          DATA_RIDE: '[data-ride="carousel"]'
        },
        C = function () {
          function o(e, n) {
            this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(y.INDICATORS)[0], this._addEventListeners()
          }
          var C = o.prototype;
          return C.next = function () {
            this._isSliding || this._slide(h)
          }, C.nextWhenVisible = function () {
            !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
          }, C.prev = function () {
            this._isSliding || this._slide(c)
          }, C.pause = function (e) {
            e || (this._isPaused = !0), t(this._element).find(y.NEXT_PREV)[0] && P.supportsTransitionEnd() && (P.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
          }, C.cycle = function (t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
          }, C.to = function (e) {
            var n = this;
            this._activeElement = t(this._element).find(y.ACTIVE_ITEM)[0];
            var i = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
              if (this._isSliding) t(this._element).one(d.SLID, function () {
                return n.to(e)
              });
              else {
                if (i === e) return this.pause(), void this.cycle();
                var s = e > i ? h : c;
                this._slide(s, this._items[e])
              }
          }, C.dispose = function () {
            t(this._element).off(i), t.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
          }, C._getConfig = function (t) {
            return t = r({}, a, t), P.typeCheckConfig(e, t, l), t
          }, C._addEventListeners = function () {
            var e = this;
            this._config.keyboard && t(this._element).on(d.KEYDOWN, function (t) {
              return e._keydown(t)
            }), "hover" === this._config.pause && (t(this._element).on(d.MOUSEENTER, function (t) {
              return e.pause(t)
            }).on(d.MOUSELEAVE, function (t) {
              return e.cycle(t)
            }), "ontouchstart" in document.documentElement && t(this._element).on(d.TOUCHEND, function () {
              e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                return e.cycle(t)
              }, 500 + e._config.interval)
            }))
          }, C._keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next()
            }
          }, C._getItemIndex = function (e) {
            return this._items = t.makeArray(t(e).parent().find(y.ITEM)), this._items.indexOf(e)
          }, C._getItemByDirection = function (t, e) {
            var n = t === h,
              i = t === c,
              s = this._getItemIndex(e),
              r = this._items.length - 1;
            if ((i && 0 === s || n && s === r) && !this._config.wrap) return e;
            var o = (s + (t === c ? -1 : 1)) % this._items.length;
            return -1 === o ? this._items[this._items.length - 1] : this._items[o]
          }, C._triggerSlideEvent = function (e, n) {
            var i = this._getItemIndex(e),
              s = this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]),
              r = t.Event(d.SLIDE, {
                relatedTarget: e,
                direction: n,
                from: s,
                to: i
              });
            return t(this._element).trigger(r), r
          }, C._setActiveIndicatorElement = function (e) {
            if (this._indicatorsElement) {
              t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);
              var n = this._indicatorsElement.children[this._getItemIndex(e)];
              n && t(n).addClass(g)
            }
          }, C._slide = function (e, n) {
            var i, s, r, o = this,
              a = t(this._element).find(y.ACTIVE_ITEM)[0],
              l = this._getItemIndex(a),
              c = n || a && this._getItemByDirection(e, a),
              _ = this._getItemIndex(c),
              C = Boolean(this._interval);
            if (e === h ? (i = v, s = E, r = u) : (i = m, s = T, r = f), c && t(c).hasClass(g)) this._isSliding = !1;
            else if (!this._triggerSlideEvent(c, r).isDefaultPrevented() && a && c) {
              this._isSliding = !0, C && this.pause(), this._setActiveIndicatorElement(c);
              var I = t.Event(d.SLID, {
                relatedTarget: c,
                direction: r,
                from: l,
                to: _
              });
              P.supportsTransitionEnd() && t(this._element).hasClass(p) ? (t(c).addClass(s), P.reflow(c), t(a).addClass(i), t(c).addClass(i), t(a).one(P.TRANSITION_END, function () {
                t(c).removeClass(i + " " + s).addClass(g), t(a).removeClass(g + " " + s + " " + i), o._isSliding = !1, setTimeout(function () {
                  return t(o._element).trigger(I)
                }, 0)
              }).emulateTransitionEnd(600)) : (t(a).removeClass(g), t(c).addClass(g), this._isSliding = !1, t(this._element).trigger(I)), C && this.cycle()
            }
          }, o._jQueryInterface = function (e) {
            return this.each(function () {
              var i = t(this).data(n),
                s = r({}, a, t(this).data());
              "object" == typeof e && (s = r({}, s, e));
              var l = "string" == typeof e ? e : s.slide;
              if (i || (i = new o(this, s), t(this).data(n, i)), "number" == typeof e) i.to(e);
              else if ("string" == typeof l) {
                if ("undefined" == typeof i[l]) throw new TypeError('No method named "' + l + '"');
                i[l]()
              } else s.interval && (i.pause(), i.cycle())
            })
          }, o._dataApiClickHandler = function (e) {
            var i = P.getSelectorFromElement(this);
            if (i) {
              var s = t(i)[0];
              if (s && t(s).hasClass(_)) {
                var a = r({}, t(s).data(), t(this).data()),
                  l = this.getAttribute("data-slide-to");
                l && (a.interval = !1), o._jQueryInterface.call(t(s), a), l && t(s).data(n).to(l), e.preventDefault()
              }
            }
          }, s(o, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0"
            }
          }, {
            key: "Default",
            get: function () {
              return a
            }
          }]), o
        }();
      return t(document).on(d.CLICK_DATA_API, y.DATA_SLIDE, C._dataApiClickHandler), t(window).on(d.LOAD_DATA_API, function () {
        t(y.DATA_RIDE).each(function () {
          var e = t(this);
          C._jQueryInterface.call(e, e.data())
        })
      }), t.fn[e] = C._jQueryInterface, t.fn[e].Constructor = C, t.fn[e].noConflict = function () {
        return t.fn[e] = o, C._jQueryInterface
      }, C
    }(e),
    H = function (t) {
      var e = "collapse",
        n = "bs.collapse",
        i = "." + n,
        o = t.fn[e],
        a = {
          toggle: !0,
          parent: ""
        },
        l = {
          toggle: "boolean",
          parent: "(string|element)"
        },
        h = {
          SHOW: "show" + i,
          SHOWN: "shown" + i,
          HIDE: "hide" + i,
          HIDDEN: "hidden" + i,
          CLICK_DATA_API: "click" + i + ".data-api"
        },
        c = "show",
        u = "collapse",
        f = "collapsing",
        d = "collapsed",
        _ = "width",
        g = "height",
        p = {
          ACTIVES: ".show, .collapsing",
          DATA_TOGGLE: '[data-toggle="collapse"]'
        },
        m = function () {
          function i(e, n) {
            this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
            for (var i = t(p.DATA_TOGGLE), s = 0; s < i.length; s++) {
              var r = i[s],
                o = P.getSelectorFromElement(r);
              null !== o && t(o).filter(e).length > 0 && (this._selector = o, this._triggerArray.push(r))
            }
            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
          }
          var o = i.prototype;
          return o.toggle = function () {
            t(this._element).hasClass(c) ? this.hide() : this.show()
          }, o.show = function () {
            var e, s, r = this;
            if (!this._isTransitioning && !t(this._element).hasClass(c) && (this._parent && 0 === (e = t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), !(e && (s = t(e).not(this._selector).data(n)) && s._isTransitioning))) {
              var o = t.Event(h.SHOW);
              if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                e && (i._jQueryInterface.call(t(e).not(this._selector), "hide"), s || t(e).data(n, null));
                var a = this._getDimension();
                t(this._element).removeClass(u).addClass(f), this._element.style[a] = 0, this._triggerArray.length > 0 && t(this._triggerArray).removeClass(d).attr("aria-expanded", !0), this.setTransitioning(!0);
                var l = function () {
                  t(r._element).removeClass(f).addClass(u).addClass(c), r._element.style[a] = "", r.setTransitioning(!1), t(r._element).trigger(h.SHOWN)
                };
                if (P.supportsTransitionEnd()) {
                  var _ = "scroll" + (a[0].toUpperCase() + a.slice(1));
                  t(this._element).one(P.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[a] = this._element[_] + "px"
                } else l()
              }
            }
          }, o.hide = function () {
            var e = this;
            if (!this._isTransitioning && t(this._element).hasClass(c)) {
              var n = t.Event(h.HIDE);
              if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                var i = this._getDimension();
                if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", P.reflow(this._element), t(this._element).addClass(f).removeClass(u).removeClass(c), this._triggerArray.length > 0)
                  for (var s = 0; s < this._triggerArray.length; s++) {
                    var r = this._triggerArray[s],
                      o = P.getSelectorFromElement(r);
                    if (null !== o) t(o).hasClass(c) || t(r).addClass(d).attr("aria-expanded", !1)
                  }
                this.setTransitioning(!0);
                var a = function () {
                  e.setTransitioning(!1), t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN)
                };
                this._element.style[i] = "", P.supportsTransitionEnd() ? t(this._element).one(P.TRANSITION_END, a).emulateTransitionEnd(600) : a()
              }
            }
          }, o.setTransitioning = function (t) {
            this._isTransitioning = t
          }, o.dispose = function () {
            t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
          }, o._getConfig = function (t) {
            return (t = r({}, a, t)).toggle = Boolean(t.toggle), P.typeCheckConfig(e, t, l), t
          }, o._getDimension = function () {
            return t(this._element).hasClass(_) ? _ : g
          }, o._getParent = function () {
            var e = this,
              n = null;
            P.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];
            var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
            return t(n).find(s).each(function (t, n) {
              e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
            }), n
          }, o._addAriaAndCollapsedClass = function (e, n) {
            if (e) {
              var i = t(e).hasClass(c);
              n.length > 0 && t(n).toggleClass(d, !i).attr("aria-expanded", i)
            }
          }, i._getTargetFromElement = function (e) {
            var n = P.getSelectorFromElement(e);
            return n ? t(n)[0] : null
          }, i._jQueryInterface = function (e) {
            return this.each(function () {
              var s = t(this),
                o = s.data(n),
                l = r({}, a, s.data(), "object" == typeof e && e);
              if (!o && l.toggle && /show|hide/.test(e) && (l.toggle = !1), o || (o = new i(this, l), s.data(n, o)), "string" == typeof e) {
                if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');
                o[e]()
              }
            })
          }, s(i, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0"
            }
          }, {
            key: "Default",
            get: function () {
              return a
            }
          }]), i
        }();
      return t(document).on(h.CLICK_DATA_API, p.DATA_TOGGLE, function (e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var i = t(this),
          s = P.getSelectorFromElement(this);
        t(s).each(function () {
          var e = t(this),
            s = e.data(n) ? "toggle" : i.data();
          m._jQueryInterface.call(e, s)
        })
      }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
        return t.fn[e] = o, m._jQueryInterface
      }, m
    }(e),
    W = function (t) {
      var e = "dropdown",
        i = "bs.dropdown",
        o = "." + i,
        a = ".data-api",
        l = t.fn[e],
        h = new RegExp("38|40|27"),
        c = {
          HIDE: "hide" + o,
          HIDDEN: "hidden" + o,
          SHOW: "show" + o,
          SHOWN: "shown" + o,
          CLICK: "click" + o,
          CLICK_DATA_API: "click" + o + a,
          KEYDOWN_DATA_API: "keydown" + o + a,
          KEYUP_DATA_API: "keyup" + o + a
        },
        u = "disabled",
        f = "show",
        d = "dropup",
        _ = "dropright",
        g = "dropleft",
        p = "dropdown-menu-right",
        m = "dropdown-menu-left",
        v = "position-static",
        E = '[data-toggle="dropdown"]',
        T = ".dropdown form",
        y = ".dropdown-menu",
        C = ".navbar-nav",
        I = ".dropdown-menu .dropdown-item:not(.disabled)",
        A = "top-start",
        b = "top-end",
        D = "bottom-start",
        S = "bottom-end",
        w = "right-start",
        N = "left-start",
        O = {
          offset: 0,
          flip: !0,
          boundary: "scrollParent"
        },
        k = {
          offset: "(number|string|function)",
          flip: "boolean",
          boundary: "(string|element)"
        },
        L = function () {
          function a(t, e) {
            this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
          }
          var l = a.prototype;
          return l.toggle = function () {
            if (!this._element.disabled && !t(this._element).hasClass(u)) {
              var e = a._getParentFromElement(this._element),
                i = t(this._menu).hasClass(f);
              if (a._clearMenus(), !i) {
                var s = {
                    relatedTarget: this._element
                  },
                  r = t.Event(c.SHOW, s);
                if (t(e).trigger(r), !r.isDefaultPrevented()) {
                  if (!this._inNavbar) {
                    if ("undefined" == typeof n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                    var o = this._element;
                    t(e).hasClass(d) && (t(this._menu).hasClass(m) || t(this._menu).hasClass(p)) && (o = e), "scrollParent" !== this._config.boundary && t(e).addClass(v), this._popper = new n(o, this._menu, this._getPopperConfig())
                  }
                  "ontouchstart" in document.documentElement && 0 === t(e).closest(C).length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(f), t(e).toggleClass(f).trigger(t.Event(c.SHOWN, s))
                }
              }
            }
          }, l.dispose = function () {
            t.removeData(this._element, i), t(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
          }, l.update = function () {
            this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
          }, l._addEventListeners = function () {
            var e = this;
            t(this._element).on(c.CLICK, function (t) {
              t.preventDefault(), t.stopPropagation(), e.toggle()
            })
          }, l._getConfig = function (n) {
            return n = r({}, this.constructor.Default, t(this._element).data(), n), P.typeCheckConfig(e, n, this.constructor.DefaultType), n
          }, l._getMenuElement = function () {
            if (!this._menu) {
              var e = a._getParentFromElement(this._element);
              this._menu = t(e).find(y)[0]
            }
            return this._menu
          }, l._getPlacement = function () {
            var e = t(this._element).parent(),
              n = D;
            return e.hasClass(d) ? (n = A, t(this._menu).hasClass(p) && (n = b)) : e.hasClass(_) ? n = w : e.hasClass(g) ? n = N : t(this._menu).hasClass(p) && (n = S), n
          }, l._detectNavbar = function () {
            return t(this._element).closest(".navbar").length > 0
          }, l._getPopperConfig = function () {
            var t = this,
              e = {};
            return "function" == typeof this._config.offset ? e.fn = function (e) {
              return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}), e
            } : e.offset = this._config.offset, {
              placement: this._getPlacement(),
              modifiers: {
                offset: e,
                flip: {
                  enabled: this._config.flip
                },
                preventOverflow: {
                  boundariesElement: this._config.boundary
                }
              }
            }
          }, a._jQueryInterface = function (e) {
            return this.each(function () {
              var n = t(this).data(i);
              if (n || (n = new a(this, "object" == typeof e ? e : null), t(this).data(i, n)), "string" == typeof e) {
                if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                n[e]()
              }
            })
          }, a._clearMenus = function (e) {
            if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
              for (var n = t.makeArray(t(E)), s = 0; s < n.length; s++) {
                var r = a._getParentFromElement(n[s]),
                  o = t(n[s]).data(i),
                  l = {
                    relatedTarget: n[s]
                  };
                if (o) {
                  var h = o._menu;
                  if (t(r).hasClass(f) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(r, e.target))) {
                    var u = t.Event(c.HIDE, l);
                    t(r).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), n[s].setAttribute("aria-expanded", "false"), t(h).removeClass(f), t(r).removeClass(f).trigger(t.Event(c.HIDDEN, l)))
                  }
                }
              }
          }, a._getParentFromElement = function (e) {
            var n, i = P.getSelectorFromElement(e);
            return i && (n = t(i)[0]), n || e.parentNode
          }, a._dataApiKeydownHandler = function (e) {
            if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(y).length)) : h.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(u))) {
              var n = a._getParentFromElement(this),
                i = t(n).hasClass(f);
              if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
                var s = t(n).find(I).get();
                if (0 !== s.length) {
                  var r = s.indexOf(e.target);
                  38 === e.which && r > 0 && r--, 40 === e.which && r < s.length - 1 && r++, r < 0 && (r = 0), s[r].focus()
                }
              } else {
                if (27 === e.which) {
                  var o = t(n).find(E)[0];
                  t(o).trigger("focus")
                }
                t(this).trigger("click")
              }
            }
          }, s(a, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0"
            }
          }, {
            key: "Default",
            get: function () {
              return O
            }
          }, {
            key: "DefaultType",
            get: function () {
              return k
            }
          }]), a
        }();
      return t(document).on(c.KEYDOWN_DATA_API, E, L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, y, L._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, L._clearMenus).on(c.CLICK_DATA_API, E, function (e) {
        e.preventDefault(), e.stopPropagation(), L._jQueryInterface.call(t(this), "toggle")
      }).on(c.CLICK_DATA_API, T, function (t) {
        t.stopPropagation()
      }), t.fn[e] = L._jQueryInterface, t.fn[e].Constructor = L, t.fn[e].noConflict = function () {
        return t.fn[e] = l, L._jQueryInterface
      }, L
    }(e),
    M = function (t) {
      var e = "modal",
        n = "bs.modal",
        i = "." + n,
        o = t.fn.modal,
        a = {
          backdrop: !0,
          keyboard: !0,
          focus: !0,
          show: !0
        },
        l = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          focus: "boolean",
          show: "boolean"
        },
        h = {
          HIDE: "hide" + i,
          HIDDEN: "hidden" + i,
          SHOW: "show" + i,
          SHOWN: "shown" + i,
          FOCUSIN: "focusin" + i,
          RESIZE: "resize" + i,
          CLICK_DISMISS: "click.dismiss" + i,
          KEYDOWN_DISMISS: "keydown.dismiss" + i,
          MOUSEUP_DISMISS: "mouseup.dismiss" + i,
          MOUSEDOWN_DISMISS: "mousedown.dismiss" + i,
          CLICK_DATA_API: "click" + i + ".data-api"
        },
        c = "modal-scrollbar-measure",
        u = "modal-backdrop",
        f = "modal-open",
        d = "fade",
        _ = "show",
        g = {
          DIALOG: ".modal-dialog",
          DATA_TOGGLE: '[data-toggle="modal"]',
          DATA_DISMISS: '[data-dismiss="modal"]',
          FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          STICKY_CONTENT: ".sticky-top",
          NAVBAR_TOGGLER: ".navbar-toggler"
        },
        p = function () {
          function o(e, n) {
            this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(g.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
          }
          var p = o.prototype;
          return p.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t)
          }, p.show = function (e) {
            var n = this;
            if (!this._isTransitioning && !this._isShown) {
              P.supportsTransitionEnd() && t(this._element).hasClass(d) && (this._isTransitioning = !0);
              var i = t.Event(h.SHOW, {
                relatedTarget: e
              });
              t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(f), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(h.CLICK_DISMISS, g.DATA_DISMISS, function (t) {
                return n.hide(t)
              }), t(this._dialog).on(h.MOUSEDOWN_DISMISS, function () {
                t(n._element).one(h.MOUSEUP_DISMISS, function (e) {
                  t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                })
              }), this._showBackdrop(function () {
                return n._showElement(e)
              }))
            }
          }, p.hide = function (e) {
            var n = this;
            if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
              var i = t.Event(h.HIDE);
              if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                this._isShown = !1;
                var s = P.supportsTransitionEnd() && t(this._element).hasClass(d);
                s && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(h.FOCUSIN), t(this._element).removeClass(_), t(this._element).off(h.CLICK_DISMISS), t(this._dialog).off(h.MOUSEDOWN_DISMISS), s ? t(this._element).one(P.TRANSITION_END, function (t) {
                  return n._hideModal(t)
                }).emulateTransitionEnd(300) : this._hideModal()
              }
            }
          }, p.dispose = function () {
            t.removeData(this._element, n), t(window, document, this._element, this._backdrop).off(i), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
          }, p.handleUpdate = function () {
            this._adjustDialog()
          }, p._getConfig = function (t) {
            return t = r({}, a, t), P.typeCheckConfig(e, t, l), t
          }, p._showElement = function (e) {
            var n = this,
              i = P.supportsTransitionEnd() && t(this._element).hasClass(d);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && P.reflow(this._element), t(this._element).addClass(_), this._config.focus && this._enforceFocus();
            var s = t.Event(h.SHOWN, {
                relatedTarget: e
              }),
              r = function () {
                n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(s)
              };
            i ? t(this._dialog).one(P.TRANSITION_END, r).emulateTransitionEnd(300) : r()
          }, p._enforceFocus = function () {
            var e = this;
            t(document).off(h.FOCUSIN).on(h.FOCUSIN, function (n) {
              document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
            })
          }, p._setEscapeEvent = function () {
            var e = this;
            this._isShown && this._config.keyboard ? t(this._element).on(h.KEYDOWN_DISMISS, function (t) {
              27 === t.which && (t.preventDefault(), e.hide())
            }) : this._isShown || t(this._element).off(h.KEYDOWN_DISMISS)
          }, p._setResizeEvent = function () {
            var e = this;
            this._isShown ? t(window).on(h.RESIZE, function (t) {
              return e.handleUpdate(t)
            }) : t(window).off(h.RESIZE)
          }, p._hideModal = function () {
            var e = this;
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
              t(document.body).removeClass(f), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(h.HIDDEN)
            })
          }, p._removeBackdrop = function () {
            this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
          }, p._showBackdrop = function (e) {
            var n = this,
              i = t(this._element).hasClass(d) ? d : "";
            if (this._isShown && this._config.backdrop) {
              var s = P.supportsTransitionEnd() && i;
              if (this._backdrop = document.createElement("div"), this._backdrop.className = u, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(h.CLICK_DISMISS, function (t) {
                  n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                }), s && P.reflow(this._backdrop), t(this._backdrop).addClass(_), !e) return;
              if (!s) return void e();
              t(this._backdrop).one(P.TRANSITION_END, e).emulateTransitionEnd(150)
            } else if (!this._isShown && this._backdrop) {
              t(this._backdrop).removeClass(_);
              var r = function () {
                n._removeBackdrop(), e && e()
              };
              P.supportsTransitionEnd() && t(this._element).hasClass(d) ? t(this._backdrop).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r()
            } else e && e()
          }, p._adjustDialog = function () {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
          }, p._resetAdjustments = function () {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
          }, p._checkScrollbar = function () {
            var t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
          }, p._setScrollbar = function () {
            var e = this;
            if (this._isBodyOverflowing) {
              t(g.FIXED_CONTENT).each(function (n, i) {
                var s = t(i)[0].style.paddingRight,
                  r = t(i).css("padding-right");
                t(i).data("padding-right", s).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
              }), t(g.STICKY_CONTENT).each(function (n, i) {
                var s = t(i)[0].style.marginRight,
                  r = t(i).css("margin-right");
                t(i).data("margin-right", s).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
              }), t(g.NAVBAR_TOGGLER).each(function (n, i) {
                var s = t(i)[0].style.marginRight,
                  r = t(i).css("margin-right");
                t(i).data("margin-right", s).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px")
              });
              var n = document.body.style.paddingRight,
                i = t("body").css("padding-right");
              t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
            }
          }, p._resetScrollbar = function () {
            t(g.FIXED_CONTENT).each(function (e, n) {
              var i = t(n).data("padding-right");
              "undefined" != typeof i && t(n).css("padding-right", i).removeData("padding-right")
            }), t(g.STICKY_CONTENT + ", " + g.NAVBAR_TOGGLER).each(function (e, n) {
              var i = t(n).data("margin-right");
              "undefined" != typeof i && t(n).css("margin-right", i).removeData("margin-right")
            });
            var e = t("body").data("padding-right");
            "undefined" != typeof e && t("body").css("padding-right", e).removeData("padding-right")
          }, p._getScrollbarWidth = function () {
            var t = document.createElement("div");
            t.className = c, document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e
          }, o._jQueryInterface = function (e, i) {
            return this.each(function () {
              var s = t(this).data(n),
                a = r({}, o.Default, t(this).data(), "object" == typeof e && e);
              if (s || (s = new o(this, a), t(this).data(n, s)), "string" == typeof e) {
                if ("undefined" == typeof s[e]) throw new TypeError('No method named "' + e + '"');
                s[e](i)
              } else a.show && s.show(i)
            })
          }, s(o, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0"
            }
          }, {
            key: "Default",
            get: function () {
              return a
            }
          }]), o
        }();
      return t(document).on(h.CLICK_DATA_API, g.DATA_TOGGLE, function (e) {
        var i, s = this,
          o = P.getSelectorFromElement(this);
        o && (i = t(o)[0]);
        var a = t(i).data(n) ? "toggle" : r({}, t(i).data(), t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var l = t(i).one(h.SHOW, function (e) {
          e.isDefaultPrevented() || l.one(h.HIDDEN, function () {
            t(s).is(":visible") && s.focus()
          })
        });
        p._jQueryInterface.call(t(i), a, this)
      }), t.fn.modal = p._jQueryInterface, t.fn.modal.Constructor = p, t.fn.modal.noConflict = function () {
        return t.fn.modal = o, p._jQueryInterface
      }, p
    }(e),
    U = function (t) {
      var e = "tooltip",
        i = "bs.tooltip",
        o = "." + i,
        a = t.fn[e],
        l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        h = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
          boundary: "(string|element)"
        },
        c = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left"
        },
        u = {
          animation: !0,
          template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          selector: !1,
          placement: "top",
          offset: 0,
          container: !1,
          fallbackPlacement: "flip",
          boundary: "scrollParent"
        },
        f = "show",
        d = "out",
        _ = {
          HIDE: "hide" + o,
          HIDDEN: "hidden" + o,
          SHOW: "show" + o,
          SHOWN: "shown" + o,
          INSERTED: "inserted" + o,
          CLICK: "click" + o,
          FOCUSIN: "focusin" + o,
          FOCUSOUT: "focusout" + o,
          MOUSEENTER: "mouseenter" + o,
          MOUSELEAVE: "mouseleave" + o
        },
        g = "fade",
        p = "show",
        m = ".tooltip-inner",
        v = ".arrow",
        E = "hover",
        T = "focus",
        y = "click",
        C = "manual",
        I = function () {
          function a(t, e) {
            if ("undefined" == typeof n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
            this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
          }
          var I = a.prototype;
          return I.enable = function () {
            this._isEnabled = !0
          }, I.disable = function () {
            this._isEnabled = !1
          }, I.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled
          }, I.toggle = function (e) {
            if (this._isEnabled)
              if (e) {
                var n = this.constructor.DATA_KEY,
                  i = t(e.currentTarget).data(n);
                i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
              } else {
                if (t(this.getTipElement()).hasClass(p)) return void this._leave(null, this);
                this._enter(null, this)
              }
          }, I.dispose = function () {
            clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
          }, I.show = function () {
            var e = this;
            if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
            var i = t.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              t(this.element).trigger(i);
              var s = t.contains(this.element.ownerDocument.documentElement, this.element);
              if (i.isDefaultPrevented() || !s) return;
              var r = this.getTipElement(),
                o = P.getUID(this.constructor.NAME);
              r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && t(r).addClass(g);
              var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                h = this._getAttachment(l);
              this.addAttachmentClass(h);
              var c = !1 === this.config.container ? document.body : t(this.config.container);
              t(r).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, r, {
                placement: h,
                modifiers: {
                  offset: {
                    offset: this.config.offset
                  },
                  flip: {
                    behavior: this.config.fallbackPlacement
                  },
                  arrow: {
                    element: v
                  },
                  preventOverflow: {
                    boundariesElement: this.config.boundary
                  }
                },
                onCreate: function (t) {
                  t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                },
                onUpdate: function (t) {
                  e._handlePopperPlacementChange(t)
                }
              }), t(r).addClass(p), "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop);
              var u = function () {
                e.config.animation && e._fixTransition();
                var n = e._hoverState;
                e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === d && e._leave(null, e)
              };
              P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(this.tip).one(P.TRANSITION_END, u).emulateTransitionEnd(a._TRANSITION_DURATION) : u()
            }
          }, I.hide = function (e) {
            var n = this,
              i = this.getTipElement(),
              s = t.Event(this.constructor.Event.HIDE),
              r = function () {
                n._hoverState !== f && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
              };
            t(this.element).trigger(s), s.isDefaultPrevented() || (t(i).removeClass(p), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger[y] = !1, this._activeTrigger[T] = !1, this._activeTrigger[E] = !1, P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(i).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r(), this._hoverState = "")
          }, I.update = function () {
            null !== this._popper && this._popper.scheduleUpdate()
          }, I.isWithContent = function () {
            return Boolean(this.getTitle())
          }, I.addAttachmentClass = function (e) {
            t(this.getTipElement()).addClass("bs-tooltip-" + e)
          }, I.getTipElement = function () {
            return this.tip = this.tip || t(this.config.template)[0], this.tip
          }, I.setContent = function () {
            var e = t(this.getTipElement());
            this.setElementContent(e.find(m), this.getTitle()), e.removeClass(g + " " + p)
          }, I.setElementContent = function (e, n) {
            var i = this.config.html;
            "object" == typeof n && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n)
          }, I.getTitle = function () {
            var t = this.element.getAttribute("data-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
          }, I._getAttachment = function (t) {
            return c[t.toUpperCase()]
          }, I._setListeners = function () {
            var e = this;
            this.config.trigger.split(" ").forEach(function (n) {
              if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                return e.toggle(t)
              });
              else if (n !== C) {
                var i = n === E ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                  s = n === E ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                t(e.element).on(i, e.config.selector, function (t) {
                  return e._enter(t)
                }).on(s, e.config.selector, function (t) {
                  return e._leave(t)
                })
              }
              t(e.element).closest(".modal").on("hide.bs.modal", function () {
                return e.hide()
              })
            }), this.config.selector ? this.config = r({}, this.config, {
              trigger: "manual",
              selector: ""
            }) : this._fixTitle()
          }, I._fixTitle = function () {
            var t = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
          }, I._enter = function (e, n) {
            var i = this.constructor.DATA_KEY;
            (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? T : E] = !0), t(n.getTipElement()).hasClass(p) || n._hoverState === f ? n._hoverState = f : (clearTimeout(n._timeout), n._hoverState = f, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
              n._hoverState === f && n.show()
            }, n.config.delay.show) : n.show())
          }, I._leave = function (e, n) {
            var i = this.constructor.DATA_KEY;
            (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? T : E] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = d, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
              n._hoverState === d && n.hide()
            }, n.config.delay.hide) : n.hide())
          }, I._isWithActiveTrigger = function () {
            for (var t in this._activeTrigger)
              if (this._activeTrigger[t]) return !0;
            return !1
          }, I._getConfig = function (n) {
            return "number" == typeof (n = r({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = {
              show: n.delay,
              hide: n.delay
            }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), P.typeCheckConfig(e, n, this.constructor.DefaultType), n
          }, I._getDelegateConfig = function () {
            var t = {};
            if (this.config)
              for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t
          }, I._cleanTipClass = function () {
            var e = t(this.getTipElement()),
              n = e.attr("class").match(l);
            null !== n && n.length > 0 && e.removeClass(n.join(""))
          }, I._handlePopperPlacementChange = function (t) {
            this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
          }, I._fixTransition = function () {
            var e = this.getTipElement(),
              n = this.config.animation;
            null === e.getAttribute("x-placement") && (t(e).removeClass(g), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
          }, a._jQueryInterface = function (e) {
            return this.each(function () {
              var n = t(this).data(i),
                s = "object" == typeof e && e;
              if ((n || !/dispose|hide/.test(e)) && (n || (n = new a(this, s), t(this).data(i, n)), "string" == typeof e)) {
                if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                n[e]()
              }
            })
          }, s(a, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0"
            }
          }, {
            key: "Default",
            get: function () {
              return u
            }
          }, {
            key: "NAME",
            get: function () {
              return e
            }
          }, {
            key: "DATA_KEY",
            get: function () {
              return i
            }
          }, {
            key: "Event",
            get: function () {
              return _
            }
          }, {
            key: "EVENT_KEY",
            get: function () {
              return o
            }
          }, {
            key: "DefaultType",
            get: function () {
              return h
            }
          }]), a
        }();
      return t.fn[e] = I._jQueryInterface, t.fn[e].Constructor = I, t.fn[e].noConflict = function () {
        return t.fn[e] = a, I._jQueryInterface
      }, I
    }(e),
    x = function (t) {
      var e = "popover",
        n = "bs.popover",
        i = "." + n,
        o = t.fn[e],
        a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        l = r({}, U.Default, {
          placement: "right",
          trigger: "click",
          content: "",
          template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        h = r({}, U.DefaultType, {
          content: "(string|element|function)"
        }),
        c = "fade",
        u = "show",
        f = ".popover-header",
        d = ".popover-body",
        _ = {
          HIDE: "hide" + i,
          HIDDEN: "hidden" + i,
          SHOW: "show" + i,
          SHOWN: "shown" + i,
          INSERTED: "inserted" + i,
          CLICK: "click" + i,
          FOCUSIN: "focusin" + i,
          FOCUSOUT: "focusout" + i,
          MOUSEENTER: "mouseenter" + i,
          MOUSELEAVE: "mouseleave" + i
        },
        g = function (r) {
          var o, g;

          function p() {
            return r.apply(this, arguments) || this
          }
          g = r, (o = p).prototype = Object.create(g.prototype), o.prototype.constructor = o, o.__proto__ = g;
          var m = p.prototype;
          return m.isWithContent = function () {
            return this.getTitle() || this._getContent()
          }, m.addAttachmentClass = function (e) {
            t(this.getTipElement()).addClass("bs-popover-" + e)
          }, m.getTipElement = function () {
            return this.tip = this.tip || t(this.config.template)[0], this.tip
          }, m.setContent = function () {
            var e = t(this.getTipElement());
            this.setElementContent(e.find(f), this.getTitle());
            var n = this._getContent();
            "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(d), n), e.removeClass(c + " " + u)
          }, m._getContent = function () {
            return this.element.getAttribute("data-content") || this.config.content
          }, m._cleanTipClass = function () {
            var e = t(this.getTipElement()),
              n = e.attr("class").match(a);
            null !== n && n.length > 0 && e.removeClass(n.join(""))
          }, p._jQueryInterface = function (e) {
            return this.each(function () {
              var i = t(this).data(n),
                s = "object" == typeof e ? e : null;
              if ((i || !/destroy|hide/.test(e)) && (i || (i = new p(this, s), t(this).data(n, i)), "string" == typeof e)) {
                if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                i[e]()
              }
            })
          }, s(p, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0"
            }
          }, {
            key: "Default",
            get: function () {
              return l
            }
          }, {
            key: "NAME",
            get: function () {
              return e
            }
          }, {
            key: "DATA_KEY",
            get: function () {
              return n
            }
          }, {
            key: "Event",
            get: function () {
              return _
            }
          }, {
            key: "EVENT_KEY",
            get: function () {
              return i
            }
          }, {
            key: "DefaultType",
            get: function () {
              return h
            }
          }]), p
        }(U);
      return t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
        return t.fn[e] = o, g._jQueryInterface
      }, g
    }(e),
    K = function (t) {
      var e = "scrollspy",
        n = "bs.scrollspy",
        i = "." + n,
        o = t.fn[e],
        a = {
          offset: 10,
          method: "auto",
          target: ""
        },
        l = {
          offset: "number",
          method: "string",
          target: "(string|element)"
        },
        h = {
          ACTIVATE: "activate" + i,
          SCROLL: "scroll" + i,
          LOAD_DATA_API: "load" + i + ".data-api"
        },
        c = "dropdown-item",
        u = "active",
        f = {
          DATA_SPY: '[data-spy="scroll"]',
          ACTIVE: ".active",
          NAV_LIST_GROUP: ".nav, .list-group",
          NAV_LINKS: ".nav-link",
          NAV_ITEMS: ".nav-item",
          LIST_ITEMS: ".list-group-item",
          DROPDOWN: ".dropdown",
          DROPDOWN_ITEMS: ".dropdown-item",
          DROPDOWN_TOGGLE: ".dropdown-toggle"
        },
        d = "offset",
        _ = "position",
        g = function () {
          function o(e, n) {
            var i = this;
            this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(h.SCROLL, function (t) {
              return i._process(t)
            }), this.refresh(), this._process()
          }
          var g = o.prototype;
          return g.refresh = function () {
            var e = this,
              n = this._scrollElement === this._scrollElement.window ? d : _,
              i = "auto" === this._config.method ? n : this._config.method,
              s = i === _ ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function (e) {
              var n, r = P.getSelectorFromElement(e);
              if (r && (n = t(r)[0]), n) {
                var o = n.getBoundingClientRect();
                if (o.width || o.height) return [t(n)[i]().top + s, r]
              }
              return null
            }).filter(function (t) {
              return t
            }).sort(function (t, e) {
              return t[0] - e[0]
            }).forEach(function (t) {
              e._offsets.push(t[0]), e._targets.push(t[1])
            })
          }, g.dispose = function () {
            t.removeData(this._element, n), t(this._scrollElement).off(i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
          }, g._getConfig = function (n) {
            if ("string" != typeof (n = r({}, a, n)).target) {
              var i = t(n.target).attr("id");
              i || (i = P.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i
            }
            return P.typeCheckConfig(e, n, l), n
          }, g._getScrollTop = function () {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
          }, g._getScrollHeight = function () {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
          }, g._getOffsetHeight = function () {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
          }, g._process = function () {
            var t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(), t >= n) {
              var i = this._targets[this._targets.length - 1];
              this._activeTarget !== i && this._activate(i)
            } else {
              if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
              for (var s = this._offsets.length; s--;) {
                this._activeTarget !== this._targets[s] && t >= this._offsets[s] && ("undefined" == typeof this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s])
              }
            }
          }, g._activate = function (e) {
            this._activeTarget = e, this._clear();
            var n = this._selector.split(",");
            n = n.map(function (t) {
              return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
            });
            var i = t(n.join(","));
            i.hasClass(c) ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u), i.addClass(u)) : (i.addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS + ", " + f.LIST_ITEMS).addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)), t(this._scrollElement).trigger(h.ACTIVATE, {
              relatedTarget: e
            })
          }, g._clear = function () {
            t(this._selector).filter(f.ACTIVE).removeClass(u)
          }, o._jQueryInterface = function (e) {
            return this.each(function () {
              var i = t(this).data(n);
              if (i || (i = new o(this, "object" == typeof e && e), t(this).data(n, i)), "string" == typeof e) {
                if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                i[e]()
              }
            })
          }, s(o, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0"
            }
          }, {
            key: "Default",
            get: function () {
              return a
            }
          }]), o
        }();
      return t(window).on(h.LOAD_DATA_API, function () {
        for (var e = t.makeArray(t(f.DATA_SPY)), n = e.length; n--;) {
          var i = t(e[n]);
          g._jQueryInterface.call(i, i.data())
        }
      }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
        return t.fn[e] = o, g._jQueryInterface
      }, g
    }(e),
    V = function (t) {
      var e = "bs.tab",
        n = "." + e,
        i = t.fn.tab,
        r = {
          HIDE: "hide" + n,
          HIDDEN: "hidden" + n,
          SHOW: "show" + n,
          SHOWN: "shown" + n,
          CLICK_DATA_API: "click.bs.tab.data-api"
        },
        o = "dropdown-menu",
        a = "active",
        l = "disabled",
        h = "fade",
        c = "show",
        u = ".dropdown",
        f = ".nav, .list-group",
        d = ".active",
        _ = "> li > .active",
        g = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        p = ".dropdown-toggle",
        m = "> .dropdown-menu .active",
        v = function () {
          function n(t) {
            this._element = t
          }
          var i = n.prototype;
          return i.show = function () {
            var e = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(a) || t(this._element).hasClass(l))) {
              var n, i, s = t(this._element).closest(f)[0],
                o = P.getSelectorFromElement(this._element);
              if (s) {
                var h = "UL" === s.nodeName ? _ : d;
                i = (i = t.makeArray(t(s).find(h)))[i.length - 1]
              }
              var c = t.Event(r.HIDE, {
                  relatedTarget: this._element
                }),
                u = t.Event(r.SHOW, {
                  relatedTarget: i
                });
              if (i && t(i).trigger(c), t(this._element).trigger(u), !u.isDefaultPrevented() && !c.isDefaultPrevented()) {
                o && (n = t(o)[0]), this._activate(this._element, s);
                var g = function () {
                  var n = t.Event(r.HIDDEN, {
                      relatedTarget: e._element
                    }),
                    s = t.Event(r.SHOWN, {
                      relatedTarget: i
                    });
                  t(i).trigger(n), t(e._element).trigger(s)
                };
                n ? this._activate(n, n.parentNode, g) : g()
              }
            }
          }, i.dispose = function () {
            t.removeData(this._element, e), this._element = null
          }, i._activate = function (e, n, i) {
            var s = this,
              r = ("UL" === n.nodeName ? t(n).find(_) : t(n).children(d))[0],
              o = i && P.supportsTransitionEnd() && r && t(r).hasClass(h),
              a = function () {
                return s._transitionComplete(e, r, i)
              };
            r && o ? t(r).one(P.TRANSITION_END, a).emulateTransitionEnd(150) : a()
          }, i._transitionComplete = function (e, n, i) {
            if (n) {
              t(n).removeClass(c + " " + a);
              var s = t(n.parentNode).find(m)[0];
              s && t(s).removeClass(a), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
            }
            if (t(e).addClass(a), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), P.reflow(e), t(e).addClass(c), e.parentNode && t(e.parentNode).hasClass(o)) {
              var r = t(e).closest(u)[0];
              r && t(r).find(p).addClass(a), e.setAttribute("aria-expanded", !0)
            }
            i && i()
          }, n._jQueryInterface = function (i) {
            return this.each(function () {
              var s = t(this),
                r = s.data(e);
              if (r || (r = new n(this), s.data(e, r)), "string" == typeof i) {
                if ("undefined" == typeof r[i]) throw new TypeError('No method named "' + i + '"');
                r[i]()
              }
            })
          }, s(n, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0"
            }
          }]), n
        }();
      return t(document).on(r.CLICK_DATA_API, g, function (e) {
        e.preventDefault(), v._jQueryInterface.call(t(this), "show")
      }), t.fn.tab = v._jQueryInterface, t.fn.tab.Constructor = v, t.fn.tab.noConflict = function () {
        return t.fn.tab = i, v._jQueryInterface
      }, v
    }(e);
  ! function (t) {
    if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
  }(e), t.Util = P, t.Alert = L, t.Button = R, t.Carousel = j, t.Collapse = H, t.Dropdown = W, t.Modal = M, t.Popover = x, t.Scrollspy = K, t.Tab = V, t.Tooltip = U, Object.defineProperty(t, "__esModule", {
    value: !0
  })
});
/*!
 * jquery-confirm v3.3.2 (http://craftpip.github.io/jquery-confirm/)
 * Author: Boniface Pereira
 * Website: www.craftpip.com
 * Contact: hey@craftpip.com
 *
 * Copyright 2013-2017 jquery-confirm
 * Licensed under MIT (https://github.com/craftpip/jquery-confirm/blob/master/LICENSE)
 */
if (typeof jQuery === "undefined") {
  throw new Error("jquery-confirm requires jQuery");
}
var jconfirm, Jconfirm;
(function ($, window) {
  $.fn.confirm = function (options, option2) {
    if (typeof options === "undefined") {
      options = {};
    }
    if (typeof options === "string") {
      options = {
        content: options,
        title: (option2) ? option2 : false
      };
    }
    $(this).each(function () {
      var $this = $(this);
      if ($this.attr("jc-attached")) {
        console.warn("jConfirm has already been attached to this element ", $this[0]);
        return;
      }
      $this.on("click", function (e) {
        e.preventDefault();
        var jcOption = $.extend({}, options);
        if ($this.attr("data-title")) {
          jcOption.title = $this.attr("data-title");
        }
        if ($this.attr("data-content")) {
          jcOption.content = $this.attr("data-content");
        }
        if (typeof jcOption.buttons == "undefined") {
          jcOption.buttons = {};
        }
        jcOption["$target"] = $this;
        if ($this.attr("href") && Object.keys(jcOption.buttons).length == 0) {
          var buttons = $.extend(true, {}, jconfirm.pluginDefaults.defaultButtons, (jconfirm.defaults || {}).defaultButtons || {});
          var firstBtn = Object.keys(buttons)[0];
          jcOption.buttons = buttons;
          jcOption.buttons[firstBtn].action = function () {
            location.href = $this.attr("href");
          };
        }
        jcOption.closeIcon = false;
        var instance = $.confirm(jcOption);
      });
      $this.attr("jc-attached", true);
    });
    return $(this);
  };
  $.confirm = function (options, option2) {
    if (typeof options === "undefined") {
      options = {};
    }
    if (typeof options === "string") {
      options = {
        content: options,
        title: (option2) ? option2 : false
      };
    }
    var putDefaultButtons = !(options.buttons == false);
    if (typeof options.buttons != "object") {
      options.buttons = {};
    }
    if (Object.keys(options.buttons).length == 0 && putDefaultButtons) {
      var buttons = $.extend(true, {}, jconfirm.pluginDefaults.defaultButtons, (jconfirm.defaults || {}).defaultButtons || {});
      options.buttons = buttons;
    }
    return jconfirm(options);
  };
  $.alert = function (options, option2) {
    if (typeof options === "undefined") {
      options = {};
    }
    if (typeof options === "string") {
      options = {
        content: options,
        title: (option2) ? option2 : false
      };
    }
    var putDefaultButtons = !(options.buttons == false);
    if (typeof options.buttons != "object") {
      options.buttons = {};
    }
    if (Object.keys(options.buttons).length == 0 && putDefaultButtons) {
      var buttons = $.extend(true, {}, jconfirm.pluginDefaults.defaultButtons, (jconfirm.defaults || {}).defaultButtons || {});
      var firstBtn = Object.keys(buttons)[0];
      options.buttons[firstBtn] = buttons[firstBtn];
    }
    return jconfirm(options);
  };
  $.dialog = function (options, option2) {
    if (typeof options === "undefined") {
      options = {};
    }
    if (typeof options === "string") {
      options = {
        content: options,
        title: (option2) ? option2 : false,
        closeIcon: function () {}
      };
    }
    options.buttons = {};
    if (typeof options.closeIcon == "undefined") {
      options.closeIcon = function () {};
    }
    options.confirmKeys = [13];
    return jconfirm(options);
  };
  jconfirm = function (options) {
    if (typeof options === "undefined") {
      options = {};
    }
    var pluginOptions = $.extend(true, {}, jconfirm.pluginDefaults);
    if (jconfirm.defaults) {
      pluginOptions = $.extend(true, pluginOptions, jconfirm.defaults);
    }
    pluginOptions = $.extend(true, {}, pluginOptions, options);
    var instance = new Jconfirm(pluginOptions);
    jconfirm.instances.push(instance);
    return instance;
  };
  Jconfirm = function (options) {
    $.extend(this, options);
    this._init();
  };
  Jconfirm.prototype = {
    _init: function () {
      var that = this;
      if (!jconfirm.instances.length) {
        jconfirm.lastFocused = $("body").find(":focus");
      }
      this._id = Math.round(Math.random() * 99999);
      this.contentParsed = $(document.createElement("div"));
      if (!this.lazyOpen) {
        setTimeout(function () {
          that.open();
        }, 0);
      }
    },
    _buildHTML: function () {
      var that = this;
      this._parseAnimation(this.animation, "o");
      this._parseAnimation(this.closeAnimation, "c");
      this._parseBgDismissAnimation(this.backgroundDismissAnimation);
      this._parseColumnClass(this.columnClass);
      this._parseTheme(this.theme);
      this._parseType(this.type);
      var template = $(this.template);
      template.find(".jconfirm-box").addClass(this.animationParsed).addClass(this.backgroundDismissAnimationParsed).addClass(this.typeParsed);
      if (this.typeAnimated) {
        template.find(".jconfirm-box").addClass("jconfirm-type-animated");
      }
      if (this.useBootstrap) {
        template.find(".jc-bs3-row").addClass(this.bootstrapClasses.row);
        template.find(".jc-bs3-row").addClass("justify-content-md-center justify-content-sm-center justify-content-xs-center justify-content-lg-center");
        template.find(".jconfirm-box-container").addClass(this.columnClassParsed);
        if (this.containerFluid) {
          template.find(".jc-bs3-container").addClass(this.bootstrapClasses.containerFluid);
        } else {
          template.find(".jc-bs3-container").addClass(this.bootstrapClasses.container);
        }
      } else {
        template.find(".jconfirm-box").css("width", this.boxWidth);
      }
      if (this.titleClass) {
        template.find(".jconfirm-title-c").addClass(this.titleClass);
      }
      template.addClass(this.themeParsed);
      var ariaLabel = "jconfirm-box" + this._id;
      template.find(".jconfirm-box").attr("aria-labelledby", ariaLabel).attr("tabindex", -1);
      template.find(".jconfirm-content").attr("id", ariaLabel);
      if (this.bgOpacity !== null) {
        template.find(".jconfirm-bg").css("opacity", this.bgOpacity);
      }
      if (this.rtl) {
        template.addClass("jconfirm-rtl");
      }
      this.$el = template.appendTo(this.container);
      this.$jconfirmBoxContainer = this.$el.find(".jconfirm-box-container");
      this.$jconfirmBox = this.$body = this.$el.find(".jconfirm-box");
      this.$jconfirmBg = this.$el.find(".jconfirm-bg");
      this.$title = this.$el.find(".jconfirm-title");
      this.$titleContainer = this.$el.find(".jconfirm-title-c");
      this.$content = this.$el.find("div.jconfirm-content");
      this.$contentPane = this.$el.find(".jconfirm-content-pane");
      this.$icon = this.$el.find(".jconfirm-icon-c");
      this.$closeIcon = this.$el.find(".jconfirm-closeIcon");
      this.$holder = this.$el.find(".jconfirm-holder");
      this.$btnc = this.$el.find(".jconfirm-buttons");
      this.$scrollPane = this.$el.find(".jconfirm-scrollpane");
      that.setStartingPoint();
      this._contentReady = $.Deferred();
      this._modalReady = $.Deferred();
      this.$holder.css({
        "padding-top": this.offsetTop,
        "padding-bottom": this.offsetBottom,
      });
      this.setTitle();
      this.setIcon();
      this._setButtons();
      this._parseContent();
      this.initDraggable();
      if (this.isAjax) {
        this.showLoading(false);
      }
      $.when(this._contentReady, this._modalReady).then(function () {
        if (that.isAjaxLoading) {
          setTimeout(function () {
            that.isAjaxLoading = false;
            that.setContent();
            that.setTitle();
            that.setIcon();
            setTimeout(function () {
              that.hideLoading(false);
              that._updateContentMaxHeight();
            }, 100);
            if (typeof that.onContentReady === "function") {
              that.onContentReady();
            }
          }, 50);
        } else {
          that._updateContentMaxHeight();
          that.setTitle();
          that.setIcon();
          if (typeof that.onContentReady === "function") {
            that.onContentReady();
          }
        }
        if (that.autoClose) {
          that._startCountDown();
        }
      });
      this._watchContent();
      if (this.animation === "none") {
        this.animationSpeed = 1;
        this.animationBounce = 1;
      }
      this.$body.css(this._getCSS(this.animationSpeed, this.animationBounce));
      this.$contentPane.css(this._getCSS(this.animationSpeed, 1));
      this.$jconfirmBg.css(this._getCSS(this.animationSpeed, 1));
      this.$jconfirmBoxContainer.css(this._getCSS(this.animationSpeed, 1));
    },
    _typePrefix: "jconfirm-type-",
    typeParsed: "",
    _parseType: function (type) {
      this.typeParsed = this._typePrefix + type;
    },
    setType: function (type) {
      var oldClass = this.typeParsed;
      this._parseType(type);
      this.$jconfirmBox.removeClass(oldClass).addClass(this.typeParsed);
    },
    themeParsed: "",
    _themePrefix: "jconfirm-",
    setTheme: function (theme) {
      var previous = this.theme;
      this.theme = theme || this.theme;
      this._parseTheme(this.theme);
      if (previous) {
        this.$el.removeClass(previous);
      }
      this.$el.addClass(this.themeParsed);
      this.theme = theme;
    },
    _parseTheme: function (theme) {
      var that = this;
      theme = theme.split(",");
      $.each(theme, function (k, a) {
        if (a.indexOf(that._themePrefix) === -1) {
          theme[k] = that._themePrefix + $.trim(a);
        }
      });
      this.themeParsed = theme.join(" ").toLowerCase();
    },
    backgroundDismissAnimationParsed: "",
    _bgDismissPrefix: "jconfirm-hilight-",
    _parseBgDismissAnimation: function (bgDismissAnimation) {
      var animation = bgDismissAnimation.split(",");
      var that = this;
      $.each(animation, function (k, a) {
        if (a.indexOf(that._bgDismissPrefix) === -1) {
          animation[k] = that._bgDismissPrefix + $.trim(a);
        }
      });
      this.backgroundDismissAnimationParsed = animation.join(" ").toLowerCase();
    },
    animationParsed: "",
    closeAnimationParsed: "",
    _animationPrefix: "jconfirm-animation-",
    setAnimation: function (animation) {
      this.animation = animation || this.animation;
      this._parseAnimation(this.animation, "o");
    },
    _parseAnimation: function (animation, which) {
      which = which || "o";
      var animations = animation.split(",");
      var that = this;
      $.each(animations, function (k, a) {
        if (a.indexOf(that._animationPrefix) === -1) {
          animations[k] = that._animationPrefix + $.trim(a);
        }
      });
      var a_string = animations.join(" ").toLowerCase();
      if (which === "o") {
        this.animationParsed = a_string;
      } else {
        this.closeAnimationParsed = a_string;
      }
      return a_string;
    },
    setCloseAnimation: function (closeAnimation) {
      this.closeAnimation = closeAnimation || this.closeAnimation;
      this._parseAnimation(this.closeAnimation, "c");
    },
    setAnimationSpeed: function (speed) {
      this.animationSpeed = speed || this.animationSpeed;
    },
    columnClassParsed: "",
    setColumnClass: function (colClass) {
      if (!this.useBootstrap) {
        console.warn("cannot set columnClass, useBootstrap is set to false");
        return;
      }
      this.columnClass = colClass || this.columnClass;
      this._parseColumnClass(this.columnClass);
      this.$jconfirmBoxContainer.addClass(this.columnClassParsed);
    },
    _updateContentMaxHeight: function () {
      var height = $(window).height() - (this.$jconfirmBox.outerHeight() - this.$contentPane.outerHeight()) - (this.offsetTop + this.offsetBottom);
      this.$contentPane.css({
        "max-height": height + "px"
      });
    },
    setBoxWidth: function (width) {
      if (this.useBootstrap) {
        console.warn("cannot set boxWidth, useBootstrap is set to true");
        return;
      }
      this.boxWidth = width;
      this.$jconfirmBox.css("width", width);
    },
    _parseColumnClass: function (colClass) {
      colClass = colClass.toLowerCase();
      var p;
      switch (colClass) {
        case "xl":
        case "xlarge":
          p = "col-md-12";
          break;
        case "l":
        case "large":
          p = "col-md-8 col-md-offset-2";
          break;
        case "m":
        case "medium":
          p = "col-md-6 col-md-offset-3";
          break;
        case "s":
        case "small":
          p = "col-md-4 col-md-offset-4";
          break;
        case "xs":
        case "xsmall":
          p = "col-md-2 col-md-offset-5";
          break;
        default:
          p = colClass;
      }
      this.columnClassParsed = p;
    },
    initDraggable: function () {
      var that = this;
      var $t = this.$titleContainer;
      this.resetDrag();
      if (this.draggable) {
        $t.on("mousedown", function (e) {
          $t.addClass("jconfirm-hand");
          that.mouseX = e.clientX;
          that.mouseY = e.clientY;
          that.isDrag = true;
        });
        $(window).on("mousemove." + this._id, function (e) {
          if (that.isDrag) {
            that.movingX = e.clientX - that.mouseX + that.initialX;
            that.movingY = e.clientY - that.mouseY + that.initialY;
            that.setDrag();
          }
        });
        $(window).on("mouseup." + this._id, function () {
          $t.removeClass("jconfirm-hand");
          if (that.isDrag) {
            that.isDrag = false;
            that.initialX = that.movingX;
            that.initialY = that.movingY;
          }
        });
      }
    },
    resetDrag: function () {
      this.isDrag = false;
      this.initialX = 0;
      this.initialY = 0;
      this.movingX = 0;
      this.movingY = 0;
      this.mouseX = 0;
      this.mouseY = 0;
      this.$jconfirmBoxContainer.css("transform", "translate(" + 0 + "px, " + 0 + "px)");
    },
    setDrag: function () {
      if (!this.draggable) {
        return;
      }
      this.alignMiddle = false;
      var boxWidth = this.$jconfirmBox.outerWidth();
      var boxHeight = this.$jconfirmBox.outerHeight();
      var windowWidth = $(window).width();
      var windowHeight = $(window).height();
      var that = this;
      var dragUpdate = 1;
      if (that.movingX % dragUpdate === 0 || that.movingY % dragUpdate === 0) {
        if (that.dragWindowBorder) {
          var leftDistance = (windowWidth / 2) - boxWidth / 2;
          var topDistance = (windowHeight / 2) - boxHeight / 2;
          topDistance -= that.dragWindowGap;
          leftDistance -= that.dragWindowGap;
          if (leftDistance + that.movingX < 0) {
            that.movingX = -leftDistance;
          } else {
            if (leftDistance - that.movingX < 0) {
              that.movingX = leftDistance;
            }
          }
          if (topDistance + that.movingY < 0) {
            that.movingY = -topDistance;
          } else {
            if (topDistance - that.movingY < 0) {
              that.movingY = topDistance;
            }
          }
        }
        that.$jconfirmBoxContainer.css("transform", "translate(" + that.movingX + "px, " + that.movingY + "px)");
      }
    },
    _scrollTop: function () {
      if (typeof pageYOffset !== "undefined") {
        return pageYOffset;
      } else {
        var B = document.body;
        var D = document.documentElement;
        D = (D.clientHeight) ? D : B;
        return D.scrollTop;
      }
    },
    _watchContent: function () {
      var that = this;
      if (this._timer) {
        clearInterval(this._timer);
      }
      var prevContentHeight = 0;
      this._timer = setInterval(function () {
        if (that.smoothContent) {
          var contentHeight = that.$content.outerHeight() || 0;
          if (contentHeight !== prevContentHeight) {
            that.$contentPane.css({
              height: contentHeight
            }).scrollTop(0);
            prevContentHeight = contentHeight;
          }
          var wh = $(window).height();
          var total = that.offsetTop + that.offsetBottom + that.$jconfirmBox.height() - that.$contentPane.height() + that.$content.height();
          if (total < wh) {
            that.$contentPane.addClass("no-scroll");
          } else {
            that.$contentPane.removeClass("no-scroll");
          }
        }
      }, this.watchInterval);
    },
    _overflowClass: "jconfirm-overflow",
    _hilightAnimating: false,
    highlight: function () {
      this.hiLightModal();
    },
    hiLightModal: function () {
      var that = this;
      if (this._hilightAnimating) {
        return;
      }
      that.$body.addClass("hilight");
      var duration = parseFloat(that.$body.css("animation-duration")) || 2;
      this._hilightAnimating = true;
      setTimeout(function () {
        that._hilightAnimating = false;
        that.$body.removeClass("hilight");
      }, duration * 1000);
    },
    _bindEvents: function () {
      var that = this;
      this.boxClicked = false;
      this.$scrollPane.click(function (e) {
        if (!that.boxClicked) {
          var buttonName = false;
          var shouldClose = false;
          var str;
          if (typeof that.backgroundDismiss == "function") {
            str = that.backgroundDismiss();
          } else {
            str = that.backgroundDismiss;
          }
          if (typeof str == "string" && typeof that.buttons[str] != "undefined") {
            buttonName = str;
            shouldClose = false;
          } else {
            if (typeof str == "undefined" || !!(str) == true) {
              shouldClose = true;
            } else {
              shouldClose = false;
            }
          }
          if (buttonName) {
            var btnResponse = that.buttons[buttonName].action.apply(that);
            shouldClose = (typeof btnResponse == "undefined") || !!(btnResponse);
          }
          if (shouldClose) {
            that.close();
          } else {
            that.hiLightModal();
          }
        }
        that.boxClicked = false;
      });
      this.$jconfirmBox.click(function (e) {
        that.boxClicked = true;
      });
      var isKeyDown = false;
      $(window).on("jcKeyDown." + that._id, function (e) {
        if (!isKeyDown) {
          isKeyDown = true;
        }
      });
      $(window).on("keyup." + that._id, function (e) {
        if (isKeyDown) {
          that.reactOnKey(e);
          isKeyDown = false;
        }
      });
      $(window).on("resize." + this._id, function () {
        that._updateContentMaxHeight();
        setTimeout(function () {
          that.resetDrag();
        }, 100);
      });
    },
    _cubic_bezier: "0.36, 0.55, 0.19",
    _getCSS: function (speed, bounce) {
      return {
        "-webkit-transition-duration": speed / 1000 + "s",
        "transition-duration": speed / 1000 + "s",
        "-webkit-transition-timing-function": "cubic-bezier(" + this._cubic_bezier + ", " + bounce + ")",
        "transition-timing-function": "cubic-bezier(" + this._cubic_bezier + ", " + bounce + ")"
      };
    },
    _setButtons: function () {
      var that = this;
      var total_buttons = 0;
      if (typeof this.buttons !== "object") {
        this.buttons = {};
      }
      $.each(this.buttons, function (key, button) {
        total_buttons += 1;
        if (typeof button === "function") {
          that.buttons[key] = button = {
            action: button
          };
        }
        that.buttons[key].text = button.text || key;
        that.buttons[key].btnClass = button.btnClass || "btn-default";
        that.buttons[key].action = button.action || function () {};
        that.buttons[key].keys = button.keys || [];
        that.buttons[key].isHidden = button.isHidden || false;
        that.buttons[key].isDisabled = button.isDisabled || false;
        $.each(that.buttons[key].keys, function (i, a) {
          that.buttons[key].keys[i] = a.toLowerCase();
        });
        var button_element = $('<button type="button" class="btn"></button>').html(that.buttons[key].text).addClass(that.buttons[key].btnClass).prop("disabled", that.buttons[key].isDisabled).css("display", that.buttons[key].isHidden ? "none" : "").click(function (e) {
          e.preventDefault();
          var res = that.buttons[key].action.apply(that, [that.buttons[key]]);
          that.onAction.apply(that, [key, that.buttons[key]]);
          that._stopCountDown();
          if (typeof res === "undefined" || res) {
            that.close();
          }
        });
        that.buttons[key].el = button_element;
        that.buttons[key].setText = function (text) {
          button_element.html(text);
        };
        that.buttons[key].addClass = function (className) {
          button_element.addClass(className);
        };
        that.buttons[key].removeClass = function (className) {
          button_element.removeClass(className);
        };
        that.buttons[key].disable = function () {
          that.buttons[key].isDisabled = true;
          button_element.prop("disabled", true);
        };
        that.buttons[key].enable = function () {
          that.buttons[key].isDisabled = false;
          button_element.prop("disabled", false);
        };
        that.buttons[key].show = function () {
          that.buttons[key].isHidden = false;
          button_element.css("display", "");
        };
        that.buttons[key].hide = function () {
          that.buttons[key].isHidden = true;
          button_element.css("display", "none");
        };
        that["$_" + key] = that["$$" + key] = button_element;
        that.$btnc.append(button_element);
      });
      if (total_buttons === 0) {
        this.$btnc.hide();
      }
      if (this.closeIcon === null && total_buttons === 0) {
        this.closeIcon = true;
      }
      if (this.closeIcon) {
        if (this.closeIconClass) {
          var closeHtml = '<i class="' + this.closeIconClass + '"></i>';
          this.$closeIcon.html(closeHtml);
        }
        this.$closeIcon.click(function (e) {
          e.preventDefault();
          var buttonName = false;
          var shouldClose = false;
          var str;
          if (typeof that.closeIcon == "function") {
            str = that.closeIcon();
          } else {
            str = that.closeIcon;
          }
          if (typeof str == "string" && typeof that.buttons[str] != "undefined") {
            buttonName = str;
            shouldClose = false;
          } else {
            if (typeof str == "undefined" || !!(str) == true) {
              shouldClose = true;
            } else {
              shouldClose = false;
            }
          }
          if (buttonName) {
            var btnResponse = that.buttons[buttonName].action.apply(that);
            shouldClose = (typeof btnResponse == "undefined") || !!(btnResponse);
          }
          if (shouldClose) {
            that.close();
          }
        });
        this.$closeIcon.show();
      } else {
        this.$closeIcon.hide();
      }
    },
    setTitle: function (string, force) {
      force = force || false;
      if (typeof string !== "undefined") {
        if (typeof string == "string") {
          this.title = string;
        } else {
          if (typeof string == "function") {
            if (typeof string.promise == "function") {
              console.error("Promise was returned from title function, this is not supported.");
            }
            var response = string();
            if (typeof response == "string") {
              this.title = response;
            } else {
              this.title = false;
            }
          } else {
            this.title = false;
          }
        }
      }
      if (this.isAjaxLoading && !force) {
        return;
      }
      this.$title.html(this.title || "");
      this.updateTitleContainer();
    },
    setIcon: function (iconClass, force) {
      force = force || false;
      if (typeof iconClass !== "undefined") {
        if (typeof iconClass == "string") {
          this.icon = iconClass;
        } else {
          if (typeof iconClass === "function") {
            var response = iconClass();
            if (typeof response == "string") {
              this.icon = response;
            } else {
              this.icon = false;
            }
          } else {
            this.icon = false;
          }
        }
      }
      if (this.isAjaxLoading && !force) {
        return;
      }
      this.$icon.html(this.icon ? '<i class="' + this.icon + '"></i>' : "");
      this.updateTitleContainer();
    },
    updateTitleContainer: function () {
      if (!this.title && !this.icon) {
        this.$titleContainer.hide();
      } else {
        this.$titleContainer.show();
      }
    },
    setContentPrepend: function (content, force) {
      if (!content) {
        return;
      }
      this.contentParsed.prepend(content);
    },
    setContentAppend: function (content) {
      if (!content) {
        return;
      }
      this.contentParsed.append(content);
    },
    setContent: function (content, force) {
      force = !!force;
      var that = this;
      if (content) {
        this.contentParsed.html("").append(content);
      }
      if (this.isAjaxLoading && !force) {
        return;
      }
      this.$content.html("");
      this.$content.append(this.contentParsed);
      setTimeout(function () {
        that.$body.find("input[autofocus]:visible:first").focus();
      }, 100);
    },
    loadingSpinner: false,
    showLoading: function (disableButtons) {
      this.loadingSpinner = true;
      this.$jconfirmBox.addClass("loading");
      if (disableButtons) {
        this.$btnc.find("button").prop("disabled", true);
      }
    },
    hideLoading: function (enableButtons) {
      this.loadingSpinner = false;
      this.$jconfirmBox.removeClass("loading");
      if (enableButtons) {
        this.$btnc.find("button").prop("disabled", false);
      }
    },
    ajaxResponse: false,
    contentParsed: "",
    isAjax: false,
    isAjaxLoading: false,
    _parseContent: function () {
      var that = this;
      var e = "&nbsp;";
      if (typeof this.content == "function") {
        var res = this.content.apply(this);
        if (typeof res == "string") {
          this.content = res;
        } else {
          if (typeof res == "object" && typeof res.always == "function") {
            this.isAjax = true;
            this.isAjaxLoading = true;
            res.always(function (data, status, xhr) {
              that.ajaxResponse = {
                data: data,
                status: status,
                xhr: xhr
              };
              that._contentReady.resolve(data, status, xhr);
              if (typeof that.contentLoaded == "function") {
                that.contentLoaded(data, status, xhr);
              }
            });
            this.content = e;
          } else {
            this.content = e;
          }
        }
      }
      if (typeof this.content == "string" && this.content.substr(0, 4).toLowerCase() === "url:") {
        this.isAjax = true;
        this.isAjaxLoading = true;
        var u = this.content.substring(4, this.content.length);
        $.get(u).done(function (html) {
          that.contentParsed.html(html);
        }).always(function (data, status, xhr) {
          that.ajaxResponse = {
            data: data,
            status: status,
            xhr: xhr
          };
          that._contentReady.resolve(data, status, xhr);
          if (typeof that.contentLoaded == "function") {
            that.contentLoaded(data, status, xhr);
          }
        });
      }
      if (!this.content) {
        this.content = e;
      }
      if (!this.isAjax) {
        this.contentParsed.html(this.content);
        this.setContent();
        that._contentReady.resolve();
      }
    },
    _stopCountDown: function () {
      clearInterval(this.autoCloseInterval);
      if (this.$cd) {
        this.$cd.remove();
      }
    },
    _startCountDown: function () {
      var that = this;
      var opt = this.autoClose.split("|");
      if (opt.length !== 2) {
        console.error("Invalid option for autoClose. example 'close|10000'");
        return false;
      }
      var button_key = opt[0];
      var time = parseInt(opt[1]);
      if (typeof this.buttons[button_key] === "undefined") {
        console.error("Invalid button key '" + button_key + "' for autoClose");
        return false;
      }
      var seconds = Math.ceil(time / 1000);
      this.$cd = $('<span class="countdown"> (' + seconds + ")</span>").appendTo(this["$_" + button_key]);
      this.autoCloseInterval = setInterval(function () {
        that.$cd.html(" (" + (seconds -= 1) + ") ");
        if (seconds <= 0) {
          that["$$" + button_key].trigger("click");
          that._stopCountDown();
        }
      }, 1000);
    },
    _getKey: function (key) {
      switch (key) {
        case 192:
          return "tilde";
        case 13:
          return "enter";
        case 16:
          return "shift";
        case 9:
          return "tab";
        case 20:
          return "capslock";
        case 17:
          return "ctrl";
        case 91:
          return "win";
        case 18:
          return "alt";
        case 27:
          return "esc";
        case 32:
          return "space";
      }
      var initial = String.fromCharCode(key);
      if (/^[A-z0-9]+$/.test(initial)) {
        return initial.toLowerCase();
      } else {
        return false;
      }
    },
    reactOnKey: function (e) {
      var that = this;
      var a = $(".jconfirm");
      if (a.eq(a.length - 1)[0] !== this.$el[0]) {
        return false;
      }
      var key = e.which;
      if (this.$content.find(":input").is(":focus") && /13|32/.test(key)) {
        return false;
      }
      var keyChar = this._getKey(key);
      if (keyChar === "esc" && this.escapeKey) {
        if (this.escapeKey === true) {
          this.$scrollPane.trigger("click");
        } else {
          if (typeof this.escapeKey === "string" || typeof this.escapeKey === "function") {
            var buttonKey;
            if (typeof this.escapeKey === "function") {
              buttonKey = this.escapeKey();
            } else {
              buttonKey = this.escapeKey;
            }
            if (buttonKey) {
              if (typeof this.buttons[buttonKey] === "undefined") {
                console.warn("Invalid escapeKey, no buttons found with key " + buttonKey);
              } else {
                this["$_" + buttonKey].trigger("click");
              }
            }
          }
        }
      }
      $.each(this.buttons, function (key, button) {
        if (button.keys.indexOf(keyChar) != -1) {
          that["$_" + key].trigger("click");
        }
      });
    },
    setDialogCenter: function () {
      console.info("setDialogCenter is deprecated, dialogs are centered with CSS3 tables");
    },
    _unwatchContent: function () {
      clearInterval(this._timer);
    },
    close: function (onClosePayload) {
      var that = this;
      if (typeof this.onClose === "function") {
        this.onClose(onClosePayload);
      }
      this._unwatchContent();
      $(window).unbind("resize." + this._id);
      $(window).unbind("keyup." + this._id);
      $(window).unbind("jcKeyDown." + this._id);
      if (this.draggable) {
        $(window).unbind("mousemove." + this._id);
        $(window).unbind("mouseup." + this._id);
        this.$titleContainer.unbind("mousedown");
      }
      that.$el.removeClass(that.loadedClass);
      $("body").removeClass("jconfirm-no-scroll-" + that._id);
      that.$jconfirmBoxContainer.removeClass("jconfirm-no-transition");
      setTimeout(function () {
        that.$body.addClass(that.closeAnimationParsed);
        that.$jconfirmBg.addClass("jconfirm-bg-h");
        var closeTimer = (that.closeAnimation === "none") ? 1 : that.animationSpeed;
        setTimeout(function () {
          that.$el.remove();
          var l = jconfirm.instances;
          var i = jconfirm.instances.length - 1;
          for (i; i >= 0; i--) {
            if (jconfirm.instances[i]._id === that._id) {
              jconfirm.instances.splice(i, 1);
            }
          }
          if (!jconfirm.instances.length) {
            if (that.scrollToPreviousElement && jconfirm.lastFocused && jconfirm.lastFocused.length && $.contains(document, jconfirm.lastFocused[0])) {
              var $lf = jconfirm.lastFocused;
              if (that.scrollToPreviousElementAnimate) {
                var st = $(window).scrollTop();
                var ot = jconfirm.lastFocused.offset().top;
                var wh = $(window).height();
                if (!(ot > st && ot < (st + wh))) {
                  var scrollTo = (ot - Math.round((wh / 3)));
                  $("html, body").animate({
                    scrollTop: scrollTo
                  }, that.animationSpeed, "swing", function () {
                    $lf.focus();
                  });
                } else {
                  $lf.focus();
                }
              } else {
                $lf.focus();
              }
              jconfirm.lastFocused = false;
            }
          }
          if (typeof that.onDestroy === "function") {
            that.onDestroy();
          }
        }, closeTimer * 0.4);
      }, 50);
      return true;
    },
    open: function () {
      if (this.isOpen()) {
        return false;
      }
      this._buildHTML();
      this._bindEvents();
      this._open();
      return true;
    },
    setStartingPoint: function () {
      var el = false;
      if (this.animateFromElement !== true && this.animateFromElement) {
        el = this.animateFromElement;
        jconfirm.lastClicked = false;
      } else {
        if (jconfirm.lastClicked && this.animateFromElement === true) {
          el = jconfirm.lastClicked;
          jconfirm.lastClicked = false;
        } else {
          return false;
        }
      }
      if (!el) {
        return false;
      }
      var offset = el.offset();
      var iTop = el.outerHeight() / 2;
      var iLeft = el.outerWidth() / 2;
      iTop -= this.$jconfirmBox.outerHeight() / 2;
      iLeft -= this.$jconfirmBox.outerWidth() / 2;
      var sourceTop = offset.top + iTop;
      sourceTop = sourceTop - this._scrollTop();
      var sourceLeft = offset.left + iLeft;
      var wh = $(window).height() / 2;
      var ww = $(window).width() / 2;
      var targetH = wh - this.$jconfirmBox.outerHeight() / 2;
      var targetW = ww - this.$jconfirmBox.outerWidth() / 2;
      sourceTop -= targetH;
      sourceLeft -= targetW;
      if (Math.abs(sourceTop) > wh || Math.abs(sourceLeft) > ww) {
        return false;
      }
      this.$jconfirmBoxContainer.css("transform", "translate(" + sourceLeft + "px, " + sourceTop + "px)");
    },
    _open: function () {
      var that = this;
      if (typeof that.onOpenBefore === "function") {
        that.onOpenBefore();
      }
      this.$body.removeClass(this.animationParsed);
      this.$jconfirmBg.removeClass("jconfirm-bg-h");
      this.$body.focus();
      that.$jconfirmBoxContainer.css("transform", "translate(" + 0 + "px, " + 0 + "px)");
      setTimeout(function () {
        that.$body.css(that._getCSS(that.animationSpeed, 1));
        that.$body.css({
          "transition-property": that.$body.css("transition-property") + ", margin"
        });
        that.$jconfirmBoxContainer.addClass("jconfirm-no-transition");
        that._modalReady.resolve();
        if (typeof that.onOpen === "function") {
          that.onOpen();
        }
        that.$el.addClass(that.loadedClass);
      }, this.animationSpeed);
    },
    loadedClass: "jconfirm-open",
    isClosed: function () {
      return !this.$el || this.$el.css("display") === "";
    },
    isOpen: function () {
      return !this.isClosed();
    },
    toggle: function () {
      if (!this.isOpen()) {
        this.open();
      } else {
        this.close();
      }
    }
  };
  jconfirm.instances = [];
  jconfirm.lastFocused = false;
  jconfirm.pluginDefaults = {
    template: '<div class="jconfirm"><div class="jconfirm-bg jconfirm-bg-h"></div><div class="jconfirm-scrollpane"><div class="jconfirm-row"><div class="jconfirm-cell"><div class="jconfirm-holder"><div class="jc-bs3-container"><div class="jc-bs3-row"><div class="jconfirm-box-container jconfirm-animated"><div class="jconfirm-box" role="dialog" aria-labelledby="labelled" tabindex="-1"><div class="jconfirm-closeIcon">&times;</div><div class="jconfirm-title-c"><span class="jconfirm-icon-c"></span><span class="jconfirm-title"></span></div><div class="jconfirm-content-pane"><div class="jconfirm-content"></div></div><div class="jconfirm-buttons"></div><div class="jconfirm-clear"></div></div></div></div></div></div></div></div></div></div>',
    title: "Hello",
    titleClass: "",
    type: "default",
    typeAnimated: true,
    draggable: true,
    dragWindowGap: 15,
    dragWindowBorder: true,
    animateFromElement: true,
    alignMiddle: true,
    smoothContent: true,
    content: "Are you sure to continue?",
    buttons: {},
    defaultButtons: {
      ok: {
        action: function () {}
      },
      close: {
        action: function () {}
      }
    },
    contentLoaded: function () {},
    icon: "",
    lazyOpen: false,
    bgOpacity: null,
    theme: "light",
    animation: "scale",
    closeAnimation: "scale",
    animationSpeed: 400,
    animationBounce: 1,
    escapeKey: true,
    rtl: false,
    container: "body",
    containerFluid: false,
    backgroundDismiss: false,
    backgroundDismissAnimation: "shake",
    autoClose: false,
    closeIcon: null,
    closeIconClass: false,
    watchInterval: 100,
    columnClass: "col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1",
    boxWidth: "50%",
    scrollToPreviousElement: true,
    scrollToPreviousElementAnimate: true,
    useBootstrap: true,
    offsetTop: 40,
    offsetBottom: 40,
    bootstrapClasses: {
      container: "container",
      containerFluid: "container-fluid",
      row: "row"
    },
    onContentReady: function () {},
    onOpenBefore: function () {},
    onOpen: function () {},
    onClose: function () {},
    onDestroy: function () {},
    onAction: function () {}
  };
  var keyDown = false;
  $(window).on("keydown", function (e) {
    if (!keyDown) {
      var $target = $(e.target);
      var pass = false;
      if ($target.closest(".jconfirm-box").length) {
        pass = true;
      }
      if (pass) {
        $(window).trigger("jcKeyDown");
      }
      keyDown = true;
    }
  });
  $(window).on("keyup", function () {
    keyDown = false;
  });
  jconfirm.lastClicked = false;
  $(document).on("mousedown", "button, a", function () {
    jconfirm.lastClicked = $(this);
  });
})(jQuery, window);
/**
 *iCheck v1.0.2 by Damir Sultanov
 * http://git.io/arlzeA, MIT Licensed
 */
(function (f) {
  function A(a, b, d) {
    var c = a[0],
      g = /er/.test(d) ? _indeterminate : /bl/.test(d) ? n : k,
      e = d == _update ? {
        checked: c[k],
        disabled: c[n],
        indeterminate: "true" == a.attr(_indeterminate) || "false" == a.attr(_determinate)
      } : c[g];
    if (/^(ch|di|in)/.test(d) && !e) x(a, g);
    else if (/^(un|en|de)/.test(d) && e) q(a, g);
    else if (d == _update)
      for (var f in e) e[f] ? x(a, f, !0) : q(a, f, !0);
    else if (!b || "toggle" == d) {
      if (!b) a[_callback]("ifClicked");
      e ? c[_type] !== r && q(a, g) : x(a, g)
    }
  }

  function x(a, b, d) {
    var c = a[0],
      g = a.parent(),
      e = b == k,
      u = b == _indeterminate,
      v = b == n,
      s = u ? _determinate : e ? y : "enabled",
      F = l(a, s + t(c[_type])),
      B = l(a, b + t(c[_type]));
    if (!0 !== c[b]) {
      if (!d && b == k && c[_type] == r && c.name) {
        var w = a.closest("form"),
          p = 'input[name="' + c.name + '"]',
          p = w.length ? w.find(p) : f(p);
        p.each(function () {
          this !== c && f(this).data(m) && q(f(this), b)
        })
      }
      u ? (c[b] = !0, c[k] && q(a, k, "force")) : (d || (c[b] = !0), e && c[_indeterminate] && q(a, _indeterminate, !1));
      D(a, e, b, d)
    }
    c[n] && l(a, _cursor, !0) && g.find("." + C).css(_cursor, "default");
    g[_add](B || l(a, b) || "");
    g.attr("role") && !u && g.attr("aria-" + (v ? n : k), "true");
    g[_remove](F || l(a, s) || "")
  }

  function q(a, b, d) {
    var c = a[0],
      g = a.parent(),
      e = b == k,
      f = b == _indeterminate,
      m = b == n,
      s = f ? _determinate : e ? y : "enabled",
      q = l(a, s + t(c[_type])),
      r = l(a, b + t(c[_type]));
    if (!1 !== c[b]) {
      if (f || !d || "force" == d) c[b] = !1;
      D(a, e, s, d)
    }!c[n] && l(a, _cursor, !0) && g.find("." + C).css(_cursor, "pointer");
    g[_remove](r || l(a, b) || "");
    g.attr("role") && !f && g.attr("aria-" + (m ? n : k), "false");
    g[_add](q || l(a, s) || "")
  }

  function E(a, b) {
    if (a.data(m)) {
      a.parent().html(a.attr("style", a.data(m).s || ""));
      if (b) a[_callback](b);
      a.off(".i").unwrap();
      f(_label + '[for="' + a[0].id + '"]').add(a.closest(_label)).off(".i")
    }
  }

  function l(a, b, f) {
    if (a.data(m)) return a.data(m).o[b + (f ? "" : "Class")]
  }

  function t(a) {
    return a.charAt(0).toUpperCase() + a.slice(1)
  }

  function D(a, b, f, c) {
    if (!c) {
      if (b) a[_callback]("ifToggled");
      a[_callback]("ifChanged")[_callback]("if" + t(f))
    }
  }
  var m = "iCheck",
    C = m + "-helper",
    r = "radio",
    k = "checked",
    y = "un" + k,
    n = "disabled";
  _determinate = "determinate";
  _indeterminate = "in" + _determinate;
  _update = "update";
  _type = "type";
  _click = "click";
  _touch = "touchbegin.i touchend.i";
  _add = "addClass";
  _remove = "removeClass";
  _callback = "trigger";
  _label = "label";
  _cursor = "cursor";
  _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);
  f.fn[m] = function (a, b) {
    var d = 'input[type="checkbox"], input[type="' + r + '"]',
      c = f(),
      g = function (a) {
        a.each(function () {
          var a = f(this);
          c = a.is(d) ? c.add(a) : c.add(a.find(d))
        })
      };
    if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a)) return a = a.toLowerCase(), g(this), c.each(function () {
      var c =
        f(this);
      "destroy" == a ? E(c, "ifDestroyed") : A(c, !0, a);
      f.isFunction(b) && b()
    });
    if ("object" != typeof a && a) return this;
    var e = f.extend({
        checkedClass: k,
        disabledClass: n,
        indeterminateClass: _indeterminate,
        labelHover: !0
      }, a),
      l = e.handle,
      v = e.hoverClass || "hover",
      s = e.focusClass || "focus",
      t = e.activeClass || "active",
      B = !!e.labelHover,
      w = e.labelHoverClass || "hover",
      p = ("" + e.increaseArea).replace("%", "") | 0;
    if ("checkbox" == l || l == r) d = 'input[type="' + l + '"]'; - 50 > p && (p = -50);
    g(this);

  }
})(window.jQuery || window.Zepto);

/*!
selectize.js
v0.12.4
https://github.com/selectize/selectize.js
Apache License (v2)
*/
! function (a, b) {
  "function" == typeof define && define.amd ? define("sifter", b) : "object" == typeof exports ? module.exports = b() : a.Sifter = b()
}(this, function () {
  var a = function (a, b) {
    this.items = a, this.settings = b || {
      diacritics: !0
    }
  };
  a.prototype.tokenize = function (a) {
    if (a = e(String(a || "").toLowerCase()), !a || !a.length) return [];
    var b, c, d, g, i = [],
      j = a.split(/ +/);
    for (b = 0, c = j.length; b < c; b++) {
      if (d = f(j[b]), this.settings.diacritics)
        for (g in h) h.hasOwnProperty(g) && (d = d.replace(new RegExp(g, "g"), h[g]));
      i.push({
        string: j[b],
        regex: new RegExp(d, "i")
      })
    }
    return i
  }, a.prototype.iterator = function (a, b) {
    var c;
    c = g(a) ? Array.prototype.forEach || function (a) {
      for (var b = 0, c = this.length; b < c; b++) a(this[b], b, this)
    } : function (a) {
      for (var b in this) this.hasOwnProperty(b) && a(this[b], b, this)
    }, c.apply(a, [b])
  }, a.prototype.getScoreFunction = function (a, b) {
    var c, e, f, g, h;
    c = this, a = c.prepareSearch(a, b), f = a.tokens, e = a.options.fields, g = f.length, h = a.options.nesting;
    var i = function (a, b) {
        var c, d;
        return a ? (a = String(a || ""), d = a.search(b.regex), d === -1 ? 0 : (c = b.string.length / a.length, 0 === d && (c += .5), c)) : 0
      },
      j = function () {
        var a = e.length;
        return a ? 1 === a ? function (a, b) {
          return i(d(b, e[0], h), a)
        } : function (b, c) {
          for (var f = 0, g = 0; f < a; f++) g += i(d(c, e[f], h), b);
          return g / a
        } : function () {
          return 0
        }
      }();
    return g ? 1 === g ? function (a) {
      return j(f[0], a)
    } : "and" === a.options.conjunction ? function (a) {
      for (var b, c = 0, d = 0; c < g; c++) {
        if (b = j(f[c], a), b <= 0) return 0;
        d += b
      }
      return d / g
    } : function (a) {
      for (var b = 0, c = 0; b < g; b++) c += j(f[b], a);
      return c / g
    } : function () {
      return 0
    }
  }, a.prototype.getSortFunction = function (a, c) {
    var e, f, g, h, i, j, k, l, m, n, o;
    if (g = this, a = g.prepareSearch(a, c), o = !a.query && c.sort_empty || c.sort, m = function (a, b) {
        return "$score" === a ? b.score : d(g.items[b.id], a, c.nesting)
      }, i = [], o)
      for (e = 0, f = o.length; e < f; e++)(a.query || "$score" !== o[e].field) && i.push(o[e]);
    if (a.query) {
      for (n = !0, e = 0, f = i.length; e < f; e++)
        if ("$score" === i[e].field) {
          n = !1;
          break
        } n && i.unshift({
        field: "$score",
        direction: "desc"
      })
    } else
      for (e = 0, f = i.length; e < f; e++)
        if ("$score" === i[e].field) {
          i.splice(e, 1);
          break
        } for (l = [], e = 0, f = i.length; e < f; e++) l.push("desc" === i[e].direction ? -1 : 1);
    return j = i.length, j ? 1 === j ? (h = i[0].field, k = l[0], function (a, c) {
      return k * b(m(h, a), m(h, c))
    }) : function (a, c) {
      var d, e, f;
      for (d = 0; d < j; d++)
        if (f = i[d].field, e = l[d] * b(m(f, a), m(f, c))) return e;
      return 0
    } : null
  }, a.prototype.prepareSearch = function (a, b) {
    if ("object" == typeof a) return a;
    b = c({}, b);
    var d = b.fields,
      e = b.sort,
      f = b.sort_empty;
    return d && !g(d) && (b.fields = [d]), e && !g(e) && (b.sort = [e]), f && !g(f) && (b.sort_empty = [f]), {
      options: b,
      query: String(a || "").toLowerCase(),
      tokens: this.tokenize(a),
      total: 0,
      items: []
    }
  }, a.prototype.search = function (a, b) {
    var c, d, e, f, g = this;
    return d = this.prepareSearch(a, b), b = d.options, a = d.query, f = b.score || g.getScoreFunction(d), a.length ? g.iterator(g.items, function (a, e) {
      c = f(a), (b.filter === !1 || c > 0) && d.items.push({
        score: c,
        id: e
      })
    }) : g.iterator(g.items, function (a, b) {
      d.items.push({
        score: 1,
        id: b
      })
    }), e = g.getSortFunction(d, b), e && d.items.sort(e), d.total = d.items.length, "number" == typeof b.limit && (d.items = d.items.slice(0, b.limit)), d
  };
  var b = function (a, b) {
      return "number" == typeof a && "number" == typeof b ? a > b ? 1 : a < b ? -1 : 0 : (a = i(String(a || "")), b = i(String(b || "")), a > b ? 1 : b > a ? -1 : 0)
    },
    c = function (a, b) {
      var c, d, e, f;
      for (c = 1, d = arguments.length; c < d; c++)
        if (f = arguments[c])
          for (e in f) f.hasOwnProperty(e) && (a[e] = f[e]);
      return a
    },
    d = function (a, b, c) {
      if (a && b) {
        if (!c) return a[b];
        for (var d = b.split("."); d.length && (a = a[d.shift()]););
        return a
      }
    },
    e = function (a) {
      return (a + "").replace(/^\s+|\s+$|/g, "")
    },
    f = function (a) {
      return (a + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    },
    g = Array.isArray || "undefined" != typeof $ && $.isArray || function (a) {
      return "[object Array]" === Object.prototype.toString.call(a)
    },
    h = {
      a: "[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]",
      b: "[b␢βΒB฿𐌁ᛒ]",
      c: "[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]",
      d: "[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]",
      e: "[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]",
      f: "[fƑƒḞḟ]",
      g: "[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]",
      h: "[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]",
      i: "[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]",
      j: "[jȷĴĵɈɉʝɟʲ]",
      k: "[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]",
      l: "[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]",
      n: "[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]",
      o: "[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]",
      p: "[pṔṕṖṗⱣᵽƤƥᵱ]",
      q: "[qꝖꝗʠɊɋꝘꝙq̃]",
      r: "[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]",
      s: "[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]",
      t: "[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]",
      u: "[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]",
      v: "[vṼṽṾṿƲʋꝞꝟⱱʋ]",
      w: "[wẂẃẀẁŴŵẄẅẆẇẈẉ]",
      x: "[xẌẍẊẋχ]",
      y: "[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]",
      z: "[zŹźẐẑŽžŻżẒẓẔẕƵƶ]"
    },
    i = function () {
      var a, b, c, d, e = "",
        f = {};
      for (c in h)
        if (h.hasOwnProperty(c))
          for (d = h[c].substring(2, h[c].length - 1), e += d, a = 0, b = d.length; a < b; a++) f[d.charAt(a)] = c;
      var g = new RegExp("[" + e + "]", "g");
      return function (a) {
        return a.replace(g, function (a) {
          return f[a]
        }).toLowerCase()
      }
    }();
  return a
}),
function (a, b) {
  "function" == typeof define && define.amd ? define("microplugin", b) : "object" == typeof exports ? module.exports = b() : a.MicroPlugin = b()
}(this, function () {
  var a = {};
  a.mixin = function (a) {
    a.plugins = {}, a.prototype.initializePlugins = function (a) {
      var c, d, e, f = this,
        g = [];
      if (f.plugins = {
          names: [],
          settings: {},
          requested: {},
          loaded: {}
        }, b.isArray(a))
        for (c = 0, d = a.length; c < d; c++) "string" == typeof a[c] ? g.push(a[c]) : (f.plugins.settings[a[c].name] = a[c].options, g.push(a[c].name));
      else if (a)
        for (e in a) a.hasOwnProperty(e) && (f.plugins.settings[e] = a[e], g.push(e));
      for (; g.length;) f.require(g.shift())
    }, a.prototype.loadPlugin = function (b) {
      var c = this,
        d = c.plugins,
        e = a.plugins[b];
      if (!a.plugins.hasOwnProperty(b)) throw new Error('Unable to find "' + b + '" plugin');
      d.requested[b] = !0, d.loaded[b] = e.fn.apply(c, [c.plugins.settings[b] || {}]), d.names.push(b)
    }, a.prototype.require = function (a) {
      var b = this,
        c = b.plugins;
      if (!b.plugins.loaded.hasOwnProperty(a)) {
        if (c.requested[a]) throw new Error('Plugin has circular dependency ("' + a + '")');
        b.loadPlugin(a)
      }
      return c.loaded[a]
    }, a.define = function (b, c) {
      a.plugins[b] = {
        name: b,
        fn: c
      }
    }
  };
  var b = {
    isArray: Array.isArray || function (a) {
      return "[object Array]" === Object.prototype.toString.call(a)
    }
  };
  return a
}),
function (a, b) {
  "function" == typeof define && define.amd ? define("selectize", ["jquery", "sifter", "microplugin"], b) : "object" == typeof exports ? module.exports = b(require("jquery"), require("sifter"), require("microplugin")) : a.Selectize = b(a.jQuery, a.Sifter, a.MicroPlugin)
}(this, function (a, b, c) {
  "use strict";
  var d = function (a, b) {
    if ("string" != typeof b || b.length) {
      var c = "string" == typeof b ? new RegExp(b, "i") : b,
        d = function (a) {
          var b = 0;
          if (3 === a.nodeType) {
            var e = a.data.search(c);
            if (e >= 0 && a.data.length > 0) {
              var f = a.data.match(c),
                g = document.createElement("span");
              g.className = "highlight";
              var h = a.splitText(e),
                i = (h.splitText(f[0].length), h.cloneNode(!0));
              g.appendChild(i), h.parentNode.replaceChild(g, h), b = 1
            }
          } else if (1 === a.nodeType && a.childNodes && !/(script|style)/i.test(a.tagName))
            for (var j = 0; j < a.childNodes.length; ++j) j += d(a.childNodes[j]);
          return b
        };
      return a.each(function () {
        d(this)
      })
    }
  };
  a.fn.removeHighlight = function () {
    return this.find("span.highlight").each(function () {
      this.parentNode.firstChild.nodeName;
      var a = this.parentNode;
      a.replaceChild(this.firstChild, this), a.normalize()
    }).end()
  };
  var e = function () {};
  e.prototype = {
    on: function (a, b) {
      this._events = this._events || {}, this._events[a] = this._events[a] || [], this._events[a].push(b)
    },
    off: function (a, b) {
      var c = arguments.length;
      return 0 === c ? delete this._events : 1 === c ? delete this._events[a] : (this._events = this._events || {}, void(a in this._events != !1 && this._events[a].splice(this._events[a].indexOf(b), 1)))
    },
    trigger: function (a) {
      if (this._events = this._events || {}, a in this._events != !1)
        for (var b = 0; b < this._events[a].length; b++) this._events[a][b].apply(this, Array.prototype.slice.call(arguments, 1))
    }
  }, e.mixin = function (a) {
    for (var b = ["on", "off", "trigger"], c = 0; c < b.length; c++) a.prototype[b[c]] = e.prototype[b[c]]
  };
  var f = /Mac/.test(navigator.userAgent),
    g = 65,
    h = 13,
    i = 27,
    j = 37,
    k = 38,
    l = 80,
    m = 39,
    n = 40,
    o = 78,
    p = 8,
    q = 46,
    r = 16,
    s = f ? 91 : 17,
    t = f ? 18 : 17,
    u = 9,
    v = 1,
    w = 2,
    x = !/android/i.test(window.navigator.userAgent) && !!document.createElement("input").validity,
    y = function (a) {
      return "undefined" != typeof a
    },
    z = function (a) {
      return "undefined" == typeof a || null === a ? null : "boolean" == typeof a ? a ? "1" : "0" : a + ""
    },
    A = function (a) {
      return (a + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    },
    B = {};
  B.before = function (a, b, c) {
    var d = a[b];
    a[b] = function () {
      return c.apply(a, arguments), d.apply(a, arguments)
    }
  }, B.after = function (a, b, c) {
    var d = a[b];
    a[b] = function () {
      var b = d.apply(a, arguments);
      return c.apply(a, arguments), b
    }
  };
  var C = function (a) {
      var b = !1;
      return function () {
        b || (b = !0, a.apply(this, arguments))
      }
    },
    D = function (a, b) {
      var c;
      return function () {
        var d = this,
          e = arguments;
        window.clearTimeout(c), c = window.setTimeout(function () {
          a.apply(d, e)
        }, b)
      }
    },
    E = function (a, b, c) {
      var d, e = a.trigger,
        f = {};
      a.trigger = function () {
        var c = arguments[0];
        return b.indexOf(c) === -1 ? e.apply(a, arguments) : void(f[c] = arguments)
      }, c.apply(a, []), a.trigger = e;
      for (d in f) f.hasOwnProperty(d) && e.apply(a, f[d])
    },
    F = function (a, b, c, d) {
      a.on(b, c, function (b) {
        for (var c = b.target; c && c.parentNode !== a[0];) c = c.parentNode;
        return b.currentTarget = c, d.apply(this, [b])
      })
    },
    G = function (a) {
      var b = {};
      if ("selectionStart" in a) b.start = a.selectionStart, b.length = a.selectionEnd - b.start;
      else if (document.selection) {
        a.focus();
        var c = document.selection.createRange(),
          d = document.selection.createRange().text.length;
        c.moveStart("character", -a.value.length), b.start = c.text.length - d, b.length = d
      }
      return b
    },
    H = function (a, b, c) {
      var d, e, f = {};
      if (c)
        for (d = 0, e = c.length; d < e; d++) f[c[d]] = a.css(c[d]);
      else f = a.css();
      b.css(f)
    },
    I = function (b, c) {
      if (!b) return 0;
      var d = a("<test>").css({
        position: "absolute",
        top: -99999,
        left: -99999,
        width: "auto",
        padding: 0,
        whiteSpace: "pre"
      }).text(b).appendTo("body");
      H(c, d, ["letterSpacing", "fontSize", "fontFamily", "fontWeight", "textTransform"]);
      var e = d.width();
      return d.remove(), e
    },
    J = function (a) {
      var b = null,
        c = function (c, d) {
          var e, f, g, h, i, j, k, l;
          c = c || window.event || {}, d = d || {}, c.metaKey || c.altKey || (d.force || a.data("grow") !== !1) && (e = a.val(), c.type && "keydown" === c.type.toLowerCase() && (f = c.keyCode, g = f >= 97 && f <= 122 || f >= 65 && f <= 90 || f >= 48 && f <= 57 || 32 === f, f === q || f === p ? (l = G(a[0]), l.length ? e = e.substring(0, l.start) + e.substring(l.start + l.length) : f === p && l.start ? e = e.substring(0, l.start - 1) + e.substring(l.start + 1) : f === q && "undefined" != typeof l.start && (e = e.substring(0, l.start) + e.substring(l.start + 1))) : g && (j = c.shiftKey, k = String.fromCharCode(c.keyCode), k = j ? k.toUpperCase() : k.toLowerCase(), e += k)), h = a.attr("placeholder"), !e && h && (e = h), i = I(e, a) + 4, i !== b && (b = i, a.width(i), a.triggerHandler("resize")))
        };
      a.on("keydown keyup update blur", c), c()
    },
    K = function (a) {
      var b = document.createElement("div");
      return b.appendChild(a.cloneNode(!0)), b.innerHTML
    },
    L = function (a, b) {
      b || (b = {});
      var c = "Selectize";
      console.error(c + ": " + a), b.explanation && (console.group && console.group(), console.error(b.explanation), console.group && console.groupEnd())
    },
    M = function (c, d) {
      var e, f, g, h, i = this;
      h = c[0], h.selectize = i;
      var j = window.getComputedStyle && window.getComputedStyle(h, null);
      if (g = j ? j.getPropertyValue("direction") : h.currentStyle && h.currentStyle.direction, g = g || c.parents("[dir]:first").attr("dir") || "", a.extend(i, {
          order: 0,
          settings: d,
          $input: c,
          tabIndex: c.attr("tabindex") || "",
          tagType: "select" === h.tagName.toLowerCase() ? v : w,
          rtl: /rtl/i.test(g),
          eventNS: ".selectize" + ++M.count,
          highlightedValue: null,
          isOpen: !1,
          isDisabled: !1,
          isRequired: c.is("[required]"),
          isInvalid: !1,
          isLocked: !1,
          isFocused: !1,
          isInputHidden: !1,
          isSetup: !1,
          isShiftDown: !1,
          isCmdDown: !1,
          isCtrlDown: !1,
          ignoreFocus: !1,
          ignoreBlur: !1,
          ignoreHover: !1,
          hasOptions: !1,
          currentResults: null,
          lastValue: "",
          caretPos: 0,
          loading: 0,
          loadedSearches: {},
          $activeOption: null,
          $activeItems: [],
          optgroups: {},
          options: {},
          userOptions: {},
          items: [],
          renderCache: {},
          onSearchChange: null === d.loadThrottle ? i.onSearchChange : D(i.onSearchChange, d.loadThrottle)
        }), i.sifter = new b(this.options, {
          diacritics: d.diacritics
        }), i.settings.options) {
        for (e = 0, f = i.settings.options.length; e < f; e++) i.registerOption(i.settings.options[e]);
        delete i.settings.options
      }
      if (i.settings.optgroups) {
        for (e = 0, f = i.settings.optgroups.length; e < f; e++) i.registerOptionGroup(i.settings.optgroups[e]);
        delete i.settings.optgroups
      }
      i.settings.mode = i.settings.mode || (1 === i.settings.maxItems ? "single" : "multi"), "boolean" != typeof i.settings.hideSelected && (i.settings.hideSelected = "multi" === i.settings.mode), i.initializePlugins(i.settings.plugins), i.setupCallbacks(), i.setupTemplates(), i.setup()
    };
  return e.mixin(M), "undefined" != typeof c ? c.mixin(M) : L("Dependency MicroPlugin is missing", {
    explanation: 'Make sure you either: (1) are using the "standalone" version of Selectize, or (2) require MicroPlugin before you load Selectize.'
  }), a.extend(M.prototype, {
    setup: function () {
      var b, c, d, e, g, h, i, j, k, l, m = this,
        n = m.settings,
        o = m.eventNS,
        p = a(window),
        q = a(document),
        u = m.$input;
      if (i = m.settings.mode, j = u.attr("class") || "", b = a("<div>").addClass(n.wrapperClass).addClass(j).addClass(i), c = a("<div>").addClass(n.inputClass).addClass("items").appendTo(b), d = a('<input type="text" autocomplete="off" />').appendTo(c).attr("tabindex", u.is(":disabled") ? "-1" : m.tabIndex), h = a(n.dropdownParent || b), e = a("<div>").addClass(n.dropdownClass).addClass(i).hide().appendTo(h), g = a("<div>").addClass(n.dropdownContentClass).appendTo(e), (l = u.attr("id")) && (d.attr("id", l + "-selectized"), a("label[for='" + l + "']").attr("for", l + "-selectized")), m.settings.copyClassesToDropdown && e.addClass(j), b.css({
          width: u[0].style.width
        }), m.plugins.names.length && (k = "plugin-" + m.plugins.names.join(" plugin-"), b.addClass(k), e.addClass(k)), (null === n.maxItems || n.maxItems > 1) && m.tagType === v && u.attr("multiple", "multiple"), m.settings.placeholder && d.attr("placeholder", n.placeholder), !m.settings.splitOn && m.settings.delimiter) {
        var w = m.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        m.settings.splitOn = new RegExp("\\s*" + w + "+\\s*")
      }
      u.attr("autocorrect") && d.attr("autocorrect", u.attr("autocorrect")), u.attr("autocapitalize") && d.attr("autocapitalize", u.attr("autocapitalize")), m.$wrapper = b, m.$control = c, m.$control_input = d, m.$dropdown = e, m.$dropdown_content = g, e.on("mouseenter", "[data-selectable]", function () {
        return m.onOptionHover.apply(m, arguments)
      }), e.on("mousedown click", "[data-selectable]", function () {
        return m.onOptionSelect.apply(m, arguments)
      }), F(c, "mousedown", "*:not(input)", function () {
        return m.onItemSelect.apply(m, arguments)
      }), J(d), c.on({
        mousedown: function () {
          return m.onMouseDown.apply(m, arguments)
        },
        click: function () {
          return m.onClick.apply(m, arguments)
        }
      }), d.on({
        mousedown: function (a) {
          a.stopPropagation()
        },
        keydown: function () {
          return m.onKeyDown.apply(m, arguments)
        },
        keyup: function () {
          return m.onKeyUp.apply(m, arguments)
        },
        keypress: function () {
          return m.onKeyPress.apply(m, arguments)
        },
        resize: function () {
          m.positionDropdown.apply(m, [])
        },
        blur: function () {
          return m.onBlur.apply(m, arguments)
        },
        focus: function () {
          return m.ignoreBlur = !1, m.onFocus.apply(m, arguments)
        },
        paste: function () {
          return m.onPaste.apply(m, arguments)
        }
      }), q.on("keydown" + o, function (a) {
        m.isCmdDown = a[f ? "metaKey" : "ctrlKey"], m.isCtrlDown = a[f ? "altKey" : "ctrlKey"], m.isShiftDown = a.shiftKey
      }), q.on("keyup" + o, function (a) {
        a.keyCode === t && (m.isCtrlDown = !1), a.keyCode === r && (m.isShiftDown = !1), a.keyCode === s && (m.isCmdDown = !1)
      }), q.on("mousedown" + o, function (a) {
        if (m.isFocused) {
          if (a.target === m.$dropdown[0] || a.target.parentNode === m.$dropdown[0]) return !1;
          m.$control.has(a.target).length || a.target === m.$control[0] || m.blur(a.target)
        }
      }), p.on(["scroll" + o, "resize" + o].join(" "), function () {
        m.isOpen && m.positionDropdown.apply(m, arguments)
      }), p.on("mousemove" + o, function () {
        m.ignoreHover = !1
      }), this.revertSettings = {
        $children: u.children().detach(),
        tabindex: u.attr("tabindex")
      }, u.attr("tabindex", -1).hide().after(m.$wrapper), a.isArray(n.items) && (m.setValue(n.items), delete n.items), x && u.on("invalid" + o, function (a) {
        a.preventDefault(), m.isInvalid = !0, m.refreshState()
      }), m.updateOriginalInput(), m.refreshItems(), m.refreshState(), m.updatePlaceholder(), m.isSetup = !0, u.is(":disabled") && m.disable(), m.on("change", this.onChange), u.data("selectize", m), u.addClass("selectized"), m.trigger("initialize"), n.preload === !0 && m.onSearchChange("")
    },
    setupTemplates: function () {
      var b = this,
        c = b.settings.labelField,
        d = b.settings.optgroupLabelField,
        e = {
          optgroup: function (a) {
            return '<div class="optgroup">' + a.html + "</div>"
          },
          optgroup_header: function (a, b) {
            return '<div class="optgroup-header">' + b(a[d]) + "</div>"
          },
          option: function (a, b) {
            return '<div class="option">' + b(a[c]) + "</div>"
          },
          item: function (a, b) {
            return '<div class="item">' + b(a[c]) + "</div>"
          },
          option_create: function (a, b) {
            return '<div class="create">Add <strong>' + b(a.input) + "</strong>&hellip;</div>"
          }
        };
      b.settings.render = a.extend({}, e, b.settings.render)
    },
    setupCallbacks: function () {
      var a, b, c = {
        initialize: "onInitialize",
        change: "onChange",
        item_add: "onItemAdd",
        item_remove: "onItemRemove",
        clear: "onClear",
        option_add: "onOptionAdd",
        option_remove: "onOptionRemove",
        option_clear: "onOptionClear",
        optgroup_add: "onOptionGroupAdd",
        optgroup_remove: "onOptionGroupRemove",
        optgroup_clear: "onOptionGroupClear",
        dropdown_open: "onDropdownOpen",
        dropdown_close: "onDropdownClose",
        type: "onType",
        load: "onLoad",
        focus: "onFocus",
        blur: "onBlur"
      };
      for (a in c) c.hasOwnProperty(a) && (b = this.settings[c[a]], b && this.on(a, b))
    },
    onClick: function (a) {
      var b = this;
      b.isFocused || (b.focus(), a.preventDefault())
    },
    onMouseDown: function (b) {
      var c = this,
        d = b.isDefaultPrevented();
      a(b.target);
      if (c.isFocused) {
        if (b.target !== c.$control_input[0]) return "single" === c.settings.mode ? c.isOpen ? c.close() : c.open() : d || c.setActiveItem(null), !1
      } else d || window.setTimeout(function () {
        c.focus()
      }, 0)
    },
    onChange: function () {
      this.$input.trigger("change")
    },
    onPaste: function (b) {
      var c = this;
      return c.isFull() || c.isInputHidden || c.isLocked ? void b.preventDefault() : void(c.settings.splitOn && setTimeout(function () {
        var b = c.$control_input.val();
        if (b.match(c.settings.splitOn))
          for (var d = a.trim(b).split(c.settings.splitOn), e = 0, f = d.length; e < f; e++) c.createItem(d[e])
      }, 0))
    },
    onKeyPress: function (a) {
      if (this.isLocked) return a && a.preventDefault();
      var b = String.fromCharCode(a.keyCode || a.which);
      return this.settings.create && "multi" === this.settings.mode && b === this.settings.delimiter ? (this.createItem(), a.preventDefault(), !1) : void 0
    },
    onKeyDown: function (a) {
      var b = (a.target === this.$control_input[0], this);
      if (b.isLocked) return void(a.keyCode !== u && a.preventDefault());
      switch (a.keyCode) {
        case g:
          if (b.isCmdDown) return void b.selectAll();
          break;
        case i:
          return void(b.isOpen && (a.preventDefault(), a.stopPropagation(), b.close()));
        case o:
          if (!a.ctrlKey || a.altKey) break;
        case n:
          if (!b.isOpen && b.hasOptions) b.open();
          else if (b.$activeOption) {
            b.ignoreHover = !0;
            var c = b.getAdjacentOption(b.$activeOption, 1);
            c.length && b.setActiveOption(c, !0, !0)
          }
          return void a.preventDefault();
        case l:
          if (!a.ctrlKey || a.altKey) break;
        case k:
          if (b.$activeOption) {
            b.ignoreHover = !0;
            var d = b.getAdjacentOption(b.$activeOption, -1);
            d.length && b.setActiveOption(d, !0, !0)
          }
          return void a.preventDefault();
        case h:
          return void(b.isOpen && b.$activeOption && (b.onOptionSelect({
            currentTarget: b.$activeOption
          }), a.preventDefault()));
        case j:
          return void b.advanceSelection(-1, a);
        case m:
          return void b.advanceSelection(1, a);
        case u:
          return b.settings.selectOnTab && b.isOpen && b.$activeOption && (b.onOptionSelect({
            currentTarget: b.$activeOption
          }), b.isFull() || a.preventDefault()), void(b.settings.create && b.createItem() && a.preventDefault());
        case p:
        case q:
          return void b.deleteSelection(a)
      }
      return !b.isFull() && !b.isInputHidden || (f ? a.metaKey : a.ctrlKey) ? void 0 : void a.preventDefault()
    },
    onKeyUp: function (a) {
      var b = this;
      if (b.isLocked) return a && a.preventDefault();
      var c = b.$control_input.val() || "";
      b.lastValue !== c && (b.lastValue = c, b.onSearchChange(c), b.refreshOptions(), b.trigger("type", c))
    },
    onSearchChange: function (a) {
      var b = this,
        c = b.settings.load;
      c && (b.loadedSearches.hasOwnProperty(a) || (b.loadedSearches[a] = !0, b.load(function (d) {
        c.apply(b, [a, d])
      })))
    },
    onFocus: function (a) {
      var b = this,
        c = b.isFocused;
      return b.isDisabled ? (b.blur(), a && a.preventDefault(), !1) : void(b.ignoreFocus || (b.isFocused = !0, "focus" === b.settings.preload && b.onSearchChange(""), c || b.trigger("focus"), b.$activeItems.length || (b.showInput(), b.setActiveItem(null), b.refreshOptions(!!b.settings.openOnFocus)), b.refreshState()))
    },
    onBlur: function (a, b) {
      var c = this;
      if (c.isFocused && (c.isFocused = !1, !c.ignoreFocus)) {
        if (!c.ignoreBlur && document.activeElement === c.$dropdown_content[0]) return c.ignoreBlur = !0, void c.onFocus(a);
        var d = function () {
          c.close(), c.setTextboxValue(""), c.setActiveItem(null), c.setActiveOption(null), c.setCaret(c.items.length), c.refreshState(), b && b.focus && b.focus(), c.ignoreFocus = !1, c.trigger("blur")
        };
        c.ignoreFocus = !0, c.settings.create && c.settings.createOnBlur ? c.createItem(null, !1, d) : d()
      }
    },
    onOptionHover: function (a) {
      this.ignoreHover || this.setActiveOption(a.currentTarget, !1)
    },
    onOptionSelect: function (b) {
      var c, d, e = this;
      b.preventDefault && (b.preventDefault(), b.stopPropagation()), d = a(b.currentTarget), d.hasClass("create") ? e.createItem(null, function () {
        e.settings.closeAfterSelect && e.close()
      }) : (c = d.attr("data-value"), "undefined" != typeof c && (e.lastQuery = null, e.setTextboxValue(""), e.addItem(c), e.settings.closeAfterSelect ? e.close() : !e.settings.hideSelected && b.type && /mouse/.test(b.type) && e.setActiveOption(e.getOption(c))))
    },
    onItemSelect: function (a) {
      var b = this;
      b.isLocked || "multi" === b.settings.mode && (a.preventDefault(), b.setActiveItem(a.currentTarget, a))
    },
    load: function (a) {
      var b = this,
        c = b.$wrapper.addClass(b.settings.loadingClass);
      b.loading++, a.apply(b, [function (a) {
        b.loading = Math.max(b.loading - 1, 0), a && a.length && (b.addOption(a), b.refreshOptions(b.isFocused && !b.isInputHidden)), b.loading || c.removeClass(b.settings.loadingClass), b.trigger("load", a)
      }])
    },
    setTextboxValue: function (a) {
      var b = this.$control_input,
        c = b.val() !== a;
      c && (b.val(a).triggerHandler("update"), this.lastValue = a)
    },
    getValue: function () {
      return this.tagType === v && this.$input.attr("multiple") ? this.items : this.items.join(this.settings.delimiter)
    },
    setValue: function (a, b) {
      var c = b ? [] : ["change"];
      E(this, c, function () {
        this.clear(b), this.addItems(a, b)
      })
    },
    setActiveItem: function (b, c) {
      var d, e, f, g, h, i, j, k, l = this;
      if ("single" !== l.settings.mode) {
        if (b = a(b), !b.length) return a(l.$activeItems).removeClass("active"), l.$activeItems = [], void(l.isFocused && l.showInput());
        if (d = c && c.type.toLowerCase(), "mousedown" === d && l.isShiftDown && l.$activeItems.length) {
          for (k = l.$control.children(".active:last"), g = Array.prototype.indexOf.apply(l.$control[0].childNodes, [k[0]]), h = Array.prototype.indexOf.apply(l.$control[0].childNodes, [b[0]]), g > h && (j = g, g = h, h = j), e = g; e <= h; e++) i = l.$control[0].childNodes[e], l.$activeItems.indexOf(i) === -1 && (a(i).addClass("active"), l.$activeItems.push(i));
          c.preventDefault()
        } else "mousedown" === d && l.isCtrlDown || "keydown" === d && this.isShiftDown ? b.hasClass("active") ? (f = l.$activeItems.indexOf(b[0]), l.$activeItems.splice(f, 1), b.removeClass("active")) : l.$activeItems.push(b.addClass("active")[0]) : (a(l.$activeItems).removeClass("active"), l.$activeItems = [b.addClass("active")[0]]);
        l.hideInput(), this.isFocused || l.focus()
      }
    },
    setActiveOption: function (b, c, d) {
      var e, f, g, h, i, j = this;
      j.$activeOption && j.$activeOption.removeClass("active"), j.$activeOption = null, b = a(b), b.length && (j.$activeOption = b.addClass("active"), !c && y(c) || (e = j.$dropdown_content.height(), f = j.$activeOption.outerHeight(!0), c = j.$dropdown_content.scrollTop() || 0, g = j.$activeOption.offset().top - j.$dropdown_content.offset().top + c, h = g, i = g - e + f, g + f > e + c ? j.$dropdown_content.stop().animate({
        scrollTop: i
      }, d ? j.settings.scrollDuration : 0) : g < c && j.$dropdown_content.stop().animate({
        scrollTop: h
      }, d ? j.settings.scrollDuration : 0)))
    },
    selectAll: function () {
      var a = this;
      "single" !== a.settings.mode && (a.$activeItems = Array.prototype.slice.apply(a.$control.children(":not(input)").addClass("active")), a.$activeItems.length && (a.hideInput(), a.close()), a.focus())
    },
    hideInput: function () {
      var a = this;
      a.setTextboxValue(""), a.$control_input.css({
        opacity: 0,
        position: "absolute",
        left: a.rtl ? 1e4 : -1e4
      }), a.isInputHidden = !0
    },
    showInput: function () {
      this.$control_input.css({
        opacity: 1,
        position: "relative",
        left: 0
      }), this.isInputHidden = !1
    },
    focus: function () {
      var a = this;
      a.isDisabled || (a.ignoreFocus = !0, a.$control_input[0].focus(), window.setTimeout(function () {
        a.ignoreFocus = !1, a.onFocus()
      }, 0))
    },
    blur: function (a) {
      this.$control_input[0].blur(), this.onBlur(null, a)
    },
    getScoreFunction: function (a) {
      return this.sifter.getScoreFunction(a, this.getSearchOptions())
    },
    getSearchOptions: function () {
      var a = this.settings,
        b = a.sortField;
      return "string" == typeof b && (b = [{
        field: b
      }]), {
        fields: a.searchField,
        conjunction: a.searchConjunction,
        sort: b
      }
    },
    search: function (b) {
      var c, d, e, f = this,
        g = f.settings,
        h = this.getSearchOptions();
      if (g.score && (e = f.settings.score.apply(this, [b]), "function" != typeof e)) throw new Error('Selectize "score" setting must be a function that returns a function');
      if (b !== f.lastQuery ? (f.lastQuery = b, d = f.sifter.search(b, a.extend(h, {
          score: e
        })), f.currentResults = d) : d = a.extend(!0, {}, f.currentResults), g.hideSelected)
        for (c = d.items.length - 1; c >= 0; c--) f.items.indexOf(z(d.items[c].id)) !== -1 && d.items.splice(c, 1);
      return d
    },
    refreshOptions: function (b) {
      var c, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s;
      "undefined" == typeof b && (b = !0);
      var t = this,
        u = a.trim(t.$control_input.val()),
        v = t.search(u),
        w = t.$dropdown_content,
        x = t.$activeOption && z(t.$activeOption.attr("data-value"));
      for (g = v.items.length, "number" == typeof t.settings.maxOptions && (g = Math.min(g, t.settings.maxOptions)), h = {}, i = [], c = 0; c < g; c++)
        for (j = t.options[v.items[c].id], k = t.render("option", j), l = j[t.settings.optgroupField] || "", m = a.isArray(l) ? l : [l], e = 0, f = m && m.length; e < f; e++) l = m[e], t.optgroups.hasOwnProperty(l) || (l = ""), h.hasOwnProperty(l) || (h[l] = document.createDocumentFragment(), i.push(l)), h[l].appendChild(k);
      for (this.settings.lockOptgroupOrder && i.sort(function (a, b) {
          var c = t.optgroups[a].$order || 0,
            d = t.optgroups[b].$order || 0;
          return c - d
        }), n = document.createDocumentFragment(), c = 0, g = i.length; c < g; c++) l = i[c], t.optgroups.hasOwnProperty(l) && h[l].childNodes.length ? (o = document.createDocumentFragment(), o.appendChild(t.render("optgroup_header", t.optgroups[l])), o.appendChild(h[l]), n.appendChild(t.render("optgroup", a.extend({}, t.optgroups[l], {
        html: K(o),
        dom: o
      })))) : n.appendChild(h[l]);
      if (w.html(n), t.settings.highlight && v.query.length && v.tokens.length)
        for (w.removeHighlight(), c = 0, g = v.tokens.length; c < g; c++) d(w, v.tokens[c].regex);
      if (!t.settings.hideSelected)
        for (c = 0, g = t.items.length; c < g; c++) t.getOption(t.items[c]).addClass("selected");
      p = t.canCreate(u), p && (w.prepend(t.render("option_create", {
        input: u
      })), s = a(w[0].childNodes[0])), t.hasOptions = v.items.length > 0 || p, t.hasOptions ? (v.items.length > 0 ? (r = x && t.getOption(x), r && r.length ? q = r : "single" === t.settings.mode && t.items.length && (q = t.getOption(t.items[0])), q && q.length || (q = s && !t.settings.addPrecedence ? t.getAdjacentOption(s, 1) : w.find("[data-selectable]:first"))) : q = s, t.setActiveOption(q), b && !t.isOpen && t.open()) : (t.setActiveOption(null), b && t.isOpen && t.close())
    },
    addOption: function (b) {
      var c, d, e, f = this;
      if (a.isArray(b))
        for (c = 0, d = b.length; c < d; c++) f.addOption(b[c]);
      else(e = f.registerOption(b)) && (f.userOptions[e] = !0, f.lastQuery = null, f.trigger("option_add", e, b))
    },
    registerOption: function (a) {
      var b = z(a[this.settings.valueField]);
      return "undefined" != typeof b && null !== b && !this.options.hasOwnProperty(b) && (a.$order = a.$order || ++this.order, this.options[b] = a, b)
    },
    registerOptionGroup: function (a) {
      var b = z(a[this.settings.optgroupValueField]);
      return !!b && (a.$order = a.$order || ++this.order, this.optgroups[b] = a, b)
    },
    addOptionGroup: function (a, b) {
      b[this.settings.optgroupValueField] = a, (a = this.registerOptionGroup(b)) && this.trigger("optgroup_add", a, b)
    },
    removeOptionGroup: function (a) {
      this.optgroups.hasOwnProperty(a) && (delete this.optgroups[a], this.renderCache = {}, this.trigger("optgroup_remove", a))
    },
    clearOptionGroups: function () {
      this.optgroups = {}, this.renderCache = {}, this.trigger("optgroup_clear")
    },
    updateOption: function (b, c) {
      var d, e, f, g, h, i, j, k = this;
      if (b = z(b), f = z(c[k.settings.valueField]), null !== b && k.options.hasOwnProperty(b)) {
        if ("string" != typeof f) throw new Error("Value must be set in option data");
        j = k.options[b].$order, f !== b && (delete k.options[b], g = k.items.indexOf(b), g !== -1 && k.items.splice(g, 1, f)), c.$order = c.$order || j, k.options[f] = c, h = k.renderCache.item, i = k.renderCache.option, h && (delete h[b], delete h[f]), i && (delete i[b], delete i[f]), k.items.indexOf(f) !== -1 && (d = k.getItem(b), e = a(k.render("item", c)), d.hasClass("active") && e.addClass("active"), d.replaceWith(e)), k.lastQuery = null, k.isOpen && k.refreshOptions(!1)
      }
    },
    removeOption: function (a, b) {
      var c = this;
      a = z(a);
      var d = c.renderCache.item,
        e = c.renderCache.option;
      d && delete d[a], e && delete e[a], delete c.userOptions[a], delete c.options[a], c.lastQuery = null, c.trigger("option_remove", a), c.removeItem(a, b)
    },
    clearOptions: function () {
      var a = this;
      a.loadedSearches = {}, a.userOptions = {}, a.renderCache = {}, a.options = a.sifter.items = {}, a.lastQuery = null, a.trigger("option_clear"), a.clear()
    },
    getOption: function (a) {
      return this.getElementWithValue(a, this.$dropdown_content.find("[data-selectable]"))
    },
    getAdjacentOption: function (b, c) {
      var d = this.$dropdown.find("[data-selectable]"),
        e = d.index(b) + c;
      return e >= 0 && e < d.length ? d.eq(e) : a()
    },
    getElementWithValue: function (b, c) {
      if (b = z(b), "undefined" != typeof b && null !== b)
        for (var d = 0, e = c.length; d < e; d++)
          if (c[d].getAttribute("data-value") === b) return a(c[d]);
      return a()
    },
    getItem: function (a) {
      return this.getElementWithValue(a, this.$control.children())
    },
    addItems: function (b, c) {
      for (var d = a.isArray(b) ? b : [b], e = 0, f = d.length; e < f; e++) this.isPending = e < f - 1, this.addItem(d[e], c)
    },
    addItem: function (b, c) {
      var d = c ? [] : ["change"];
      E(this, d, function () {
        var d, e, f, g, h, i = this,
          j = i.settings.mode;
        return b = z(b), i.items.indexOf(b) !== -1 ? void("single" === j && i.close()) : void(i.options.hasOwnProperty(b) && ("single" === j && i.clear(c), "multi" === j && i.isFull() || (d = a(i.render("item", i.options[b])), h = i.isFull(), i.items.splice(i.caretPos, 0, b), i.insertAtCaret(d), (!i.isPending || !h && i.isFull()) && i.refreshState(), i.isSetup && (f = i.$dropdown_content.find("[data-selectable]"), i.isPending || (e = i.getOption(b), g = i.getAdjacentOption(e, 1).attr("data-value"), i.refreshOptions(i.isFocused && "single" !== j), g && i.setActiveOption(i.getOption(g))), !f.length || i.isFull() ? i.close() : i.positionDropdown(), i.updatePlaceholder(), i.trigger("item_add", b, d), i.updateOriginalInput({
          silent: c
        })))))
      })
    },
    removeItem: function (b, c) {
      var d, e, f, g = this;
      d = b instanceof a ? b : g.getItem(b), b = z(d.attr("data-value")), e = g.items.indexOf(b), e !== -1 && (d.remove(), d.hasClass("active") && (f = g.$activeItems.indexOf(d[0]), g.$activeItems.splice(f, 1)), g.items.splice(e, 1), g.lastQuery = null, !g.settings.persist && g.userOptions.hasOwnProperty(b) && g.removeOption(b, c), e < g.caretPos && g.setCaret(g.caretPos - 1), g.refreshState(), g.updatePlaceholder(), g.updateOriginalInput({
        silent: c
      }), g.positionDropdown(), g.trigger("item_remove", b, d))
    },
    createItem: function (b, c) {
      var d = this,
        e = d.caretPos;
      b = b || a.trim(d.$control_input.val() || "");
      var f = arguments[arguments.length - 1];
      if ("function" != typeof f && (f = function () {}), "boolean" != typeof c && (c = !0), !d.canCreate(b)) return f(), !1;
      d.lock();
      var g = "function" == typeof d.settings.create ? this.settings.create : function (a) {
          var b = {};
          return b[d.settings.labelField] = a, b[d.settings.valueField] = a, b
        },
        h = C(function (a) {
          if (d.unlock(), !a || "object" != typeof a) return f();
          var b = z(a[d.settings.valueField]);
          return "string" != typeof b ? f() : (d.setTextboxValue(""), d.addOption(a), d.setCaret(e), d.addItem(b), d.refreshOptions(c && "single" !== d.settings.mode), void f(a))
        }),
        i = g.apply(this, [b, h]);
      return "undefined" != typeof i && h(i), !0
    },
    refreshItems: function () {
      this.lastQuery = null, this.isSetup && this.addItem(this.items), this.refreshState(), this.updateOriginalInput()
    },
    refreshState: function () {
      this.refreshValidityState(), this.refreshClasses()
    },
    refreshValidityState: function () {
      if (!this.isRequired) return !1;
      var a = !this.items.length;
      this.isInvalid = a, this.$control_input.prop("required", a), this.$input.prop("required", !a)
    },
    refreshClasses: function () {
      var b = this,
        c = b.isFull(),
        d = b.isLocked;
      b.$wrapper.toggleClass("rtl", b.rtl), b.$control.toggleClass("focus", b.isFocused).toggleClass("disabled", b.isDisabled).toggleClass("required", b.isRequired).toggleClass("invalid", b.isInvalid).toggleClass("locked", d).toggleClass("full", c).toggleClass("not-full", !c).toggleClass("input-active", b.isFocused && !b.isInputHidden).toggleClass("dropdown-active", b.isOpen).toggleClass("has-options", !a.isEmptyObject(b.options)).toggleClass("has-items", b.items.length > 0), b.$control_input.data("grow", !c && !d)
    },
    isFull: function () {
      return null !== this.settings.maxItems && this.items.length >= this.settings.maxItems
    },
    updateOriginalInput: function (a) {
      var b, c, d, e, f = this;
      if (a = a || {}, f.tagType === v) {
        for (d = [], b = 0, c = f.items.length; b < c; b++) e = f.options[f.items[b]][f.settings.labelField] || "", d.push('<option value="' + A(f.items[b]) + '" selected="selected">' + A(e) + "</option>");
        d.length || this.$input.attr("multiple") || d.push('<option value="" selected="selected"></option>'),
          f.$input.html(d.join(""))
      } else f.$input.val(f.getValue()), f.$input.attr("value", f.$input.val());
      f.isSetup && (a.silent || f.trigger("change", f.$input.val()))
    },
    updatePlaceholder: function () {
      if (this.settings.placeholder) {
        var a = this.$control_input;
        this.items.length ? a.removeAttr("placeholder") : a.attr("placeholder", this.settings.placeholder), a.triggerHandler("update", {
          force: !0
        })
      }
    },
    open: function () {
      var a = this;
      a.isLocked || a.isOpen || "multi" === a.settings.mode && a.isFull() || (a.focus(), a.isOpen = !0, a.refreshState(), a.$dropdown.css({
        visibility: "hidden",
        display: "block"
      }), a.positionDropdown(), a.$dropdown.css({
        visibility: "visible"
      }), a.trigger("dropdown_open", a.$dropdown))
    },
    close: function () {
      var a = this,
        b = a.isOpen;
      "single" === a.settings.mode && a.items.length && (a.hideInput(), a.$control_input.blur()), a.isOpen = !1, a.$dropdown.hide(), a.setActiveOption(null), a.refreshState(), b && a.trigger("dropdown_close", a.$dropdown)
    },
    positionDropdown: function () {
      var a = this.$control,
        b = "body" === this.settings.dropdownParent ? a.offset() : a.position();
      b.top += a.outerHeight(!0), this.$dropdown.css({
        width: a.outerWidth(),
        top: b.top,
        left: b.left
      })
    },
    clear: function (a) {
      var b = this;
      b.items.length && (b.$control.children(":not(input)").remove(), b.items = [], b.lastQuery = null, b.setCaret(0), b.setActiveItem(null), b.updatePlaceholder(), b.updateOriginalInput({
        silent: a
      }), b.refreshState(), b.showInput(), b.trigger("clear"))
    },
    insertAtCaret: function (b) {
      var c = Math.min(this.caretPos, this.items.length);
      0 === c ? this.$control.prepend(b) : a(this.$control[0].childNodes[c]).before(b), this.setCaret(c + 1)
    },
    deleteSelection: function (b) {
      var c, d, e, f, g, h, i, j, k, l = this;
      if (e = b && b.keyCode === p ? -1 : 1, f = G(l.$control_input[0]), l.$activeOption && !l.settings.hideSelected && (i = l.getAdjacentOption(l.$activeOption, -1).attr("data-value")), g = [], l.$activeItems.length) {
        for (k = l.$control.children(".active:" + (e > 0 ? "last" : "first")), h = l.$control.children(":not(input)").index(k), e > 0 && h++, c = 0, d = l.$activeItems.length; c < d; c++) g.push(a(l.$activeItems[c]).attr("data-value"));
        b && (b.preventDefault(), b.stopPropagation())
      } else(l.isFocused || "single" === l.settings.mode) && l.items.length && (e < 0 && 0 === f.start && 0 === f.length ? g.push(l.items[l.caretPos - 1]) : e > 0 && f.start === l.$control_input.val().length && g.push(l.items[l.caretPos]));
      if (!g.length || "function" == typeof l.settings.onDelete && l.settings.onDelete.apply(l, [g]) === !1) return !1;
      for ("undefined" != typeof h && l.setCaret(h); g.length;) l.removeItem(g.pop());
      return l.showInput(), l.positionDropdown(), l.refreshOptions(!0), i && (j = l.getOption(i), j.length && l.setActiveOption(j)), !0
    },
    advanceSelection: function (a, b) {
      var c, d, e, f, g, h, i = this;
      0 !== a && (i.rtl && (a *= -1), c = a > 0 ? "last" : "first", d = G(i.$control_input[0]), i.isFocused && !i.isInputHidden ? (f = i.$control_input.val().length, g = a < 0 ? 0 === d.start && 0 === d.length : d.start === f, g && !f && i.advanceCaret(a, b)) : (h = i.$control.children(".active:" + c), h.length && (e = i.$control.children(":not(input)").index(h), i.setActiveItem(null), i.setCaret(a > 0 ? e + 1 : e))))
    },
    advanceCaret: function (a, b) {
      var c, d, e = this;
      0 !== a && (c = a > 0 ? "next" : "prev", e.isShiftDown ? (d = e.$control_input[c](), d.length && (e.hideInput(), e.setActiveItem(d), b && b.preventDefault())) : e.setCaret(e.caretPos + a))
    },
    setCaret: function (b) {
      var c = this;
      if (b = "single" === c.settings.mode ? c.items.length : Math.max(0, Math.min(c.items.length, b)), !c.isPending) {
        var d, e, f, g;
        for (f = c.$control.children(":not(input)"), d = 0, e = f.length; d < e; d++) g = a(f[d]).detach(), d < b ? c.$control_input.before(g) : c.$control.append(g)
      }
      c.caretPos = b
    },
    lock: function () {
      this.close(), this.isLocked = !0, this.refreshState()
    },
    unlock: function () {
      this.isLocked = !1, this.refreshState()
    },
    disable: function () {
      var a = this;
      a.$input.prop("disabled", !0), a.$control_input.prop("disabled", !0).prop("tabindex", -1), a.isDisabled = !0, a.lock()
    },
    enable: function () {
      var a = this;
      a.$input.prop("disabled", !1), a.$control_input.prop("disabled", !1).prop("tabindex", a.tabIndex), a.isDisabled = !1, a.unlock()
    },
    destroy: function () {
      var b = this,
        c = b.eventNS,
        d = b.revertSettings;
      b.trigger("destroy"), b.off(), b.$wrapper.remove(), b.$dropdown.remove(), b.$input.html("").append(d.$children).removeAttr("tabindex").removeClass("selectized").attr({
        tabindex: d.tabindex
      }).show(), b.$control_input.removeData("grow"), b.$input.removeData("selectize"), a(window).off(c), a(document).off(c), a(document.body).off(c), delete b.$input[0].selectize
    },
    render: function (b, c) {
      var d, e, f = "",
        g = !1,
        h = this;
      return "option" !== b && "item" !== b || (d = z(c[h.settings.valueField]), g = !!d), g && (y(h.renderCache[b]) || (h.renderCache[b] = {}), h.renderCache[b].hasOwnProperty(d)) ? h.renderCache[b][d] : (f = a(h.settings.render[b].apply(this, [c, A])), "option" === b || "option_create" === b ? f.attr("data-selectable", "") : "optgroup" === b && (e = c[h.settings.optgroupValueField] || "", f.attr("data-group", e)), "option" !== b && "item" !== b || f.attr("data-value", d || ""), g && (h.renderCache[b][d] = f[0]), f[0])
    },
    clearCache: function (a) {
      var b = this;
      "undefined" == typeof a ? b.renderCache = {} : delete b.renderCache[a]
    },
    canCreate: function (a) {
      var b = this;
      if (!b.settings.create) return !1;
      var c = b.settings.createFilter;
      return a.length && ("function" != typeof c || c.apply(b, [a])) && ("string" != typeof c || new RegExp(c).test(a)) && (!(c instanceof RegExp) || c.test(a))
    }
  }), M.count = 0, M.defaults = {
    options: [],
    optgroups: [],
    plugins: [],
    delimiter: ",",
    splitOn: null,
    persist: !0,
    diacritics: !0,
    create: !1,
    createOnBlur: !1,
    createFilter: null,
    highlight: !0,
    openOnFocus: !0,
    maxOptions: 1e3,
    maxItems: null,
    hideSelected: null,
    addPrecedence: !1,
    selectOnTab: !1,
    preload: !1,
    allowEmptyOption: !1,
    closeAfterSelect: !1,
    scrollDuration: 60,
    loadThrottle: 300,
    loadingClass: "loading",
    dataAttr: "data-data",
    optgroupField: "optgroup",
    valueField: "value",
    labelField: "text",
    optgroupLabelField: "label",
    optgroupValueField: "value",
    lockOptgroupOrder: !1,
    sortField: "$order",
    searchField: ["text"],
    searchConjunction: "and",
    mode: null,
    wrapperClass: "selectize-control",
    inputClass: "selectize-input",
    dropdownClass: "selectize-dropdown",
    dropdownContentClass: "selectize-dropdown-content",
    dropdownParent: null,
    copyClassesToDropdown: !0,
    render: {}
  }, a.fn.selectize = function (b) {
    var c = a.fn.selectize.defaults,
      d = a.extend({}, c, b),
      e = d.dataAttr,
      f = d.labelField,
      g = d.valueField,
      h = d.optgroupField,
      i = d.optgroupLabelField,
      j = d.optgroupValueField,
      k = function (b, c) {
        var h, i, j, k, l = b.attr(e);
        if (l)
          for (c.options = JSON.parse(l), h = 0, i = c.options.length; h < i; h++) c.items.push(c.options[h][g]);
        else {
          var m = a.trim(b.val() || "");
          if (!d.allowEmptyOption && !m.length) return;
          for (j = m.split(d.delimiter), h = 0, i = j.length; h < i; h++) k = {}, k[f] = j[h], k[g] = j[h], c.options.push(k);
          c.items = j
        }
      },
      l = function (b, c) {
        var k, l, m, n, o = c.options,
          p = {},
          q = function (a) {
            var b = e && a.attr(e);
            return "string" == typeof b && b.length ? JSON.parse(b) : null
          },
          r = function (b, e) {
            b = a(b);
            var i = z(b.val());
            if (i || d.allowEmptyOption)
              if (p.hasOwnProperty(i)) {
                if (e) {
                  var j = p[i][h];
                  j ? a.isArray(j) ? j.push(e) : p[i][h] = [j, e] : p[i][h] = e
                }
              } else {
                var k = q(b) || {};
                k[f] = k[f] || b.text(), k[g] = k[g] || i, k[h] = k[h] || e, p[i] = k, o.push(k), b.is(":selected") && c.items.push(i)
              }
          },
          s = function (b) {
            var d, e, f, g, h;
            for (b = a(b), f = b.attr("label"), f && (g = q(b) || {}, g[i] = f, g[j] = f, c.optgroups.push(g)), h = a("option", b), d = 0, e = h.length; d < e; d++) r(h[d], f)
          };
        for (c.maxItems = b.attr("multiple") ? null : 1, n = b.children(), k = 0, l = n.length; k < l; k++) m = n[k].tagName.toLowerCase(), "optgroup" === m ? s(n[k]) : "option" === m && r(n[k])
      };
    return this.each(function () {
      if (!this.selectize) {
        var e, f = a(this),
          g = this.tagName.toLowerCase(),
          h = f.attr("placeholder") || f.attr("data-placeholder");
        h || d.allowEmptyOption || (h = f.children('option[value=""]').text());
        var i = {
          placeholder: h,
          options: [],
          optgroups: [],
          items: []
        };
        "select" === g ? l(f, i) : k(f, i), e = new M(f, a.extend(!0, {}, c, i, b))
      }
    })
  }, a.fn.selectize.defaults = M.defaults, a.fn.selectize.support = {
    validity: x
  }, M.define("drag_drop", function (b) {
    if (!a.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
    if ("multi" === this.settings.mode) {
      var c = this;
      c.lock = function () {
        var a = c.lock;
        return function () {
          var b = c.$control.data("sortable");
          return b && b.disable(), a.apply(c, arguments)
        }
      }(), c.unlock = function () {
        var a = c.unlock;
        return function () {
          var b = c.$control.data("sortable");
          return b && b.enable(), a.apply(c, arguments)
        }
      }(), c.setup = function () {
        var b = c.setup;
        return function () {
          b.apply(this, arguments);
          var d = c.$control.sortable({
            items: "[data-value]",
            forcePlaceholderSize: !0,
            disabled: c.isLocked,
            start: function (a, b) {
              b.placeholder.css("width", b.helper.css("width")), d.css({
                overflow: "visible"
              })
            },
            stop: function () {
              d.css({
                overflow: "hidden"
              });
              var b = c.$activeItems ? c.$activeItems.slice() : null,
                e = [];
              d.children("[data-value]").each(function () {
                e.push(a(this).attr("data-value"))
              }), c.setValue(e), c.setActiveItem(b)
            }
          })
        }
      }()
    }
  }), M.define("dropdown_header", function (b) {
    var c = this;
    b = a.extend({
      title: "Untitled",
      headerClass: "selectize-dropdown-header",
      titleRowClass: "selectize-dropdown-header-title",
      labelClass: "selectize-dropdown-header-label",
      closeClass: "selectize-dropdown-header-close",
      html: function (a) {
        return '<div class="' + a.headerClass + '"><div class="' + a.titleRowClass + '"><span class="' + a.labelClass + '">' + a.title + '</span><a href="javascript:void(0)" class="' + a.closeClass + '">&times;</a></div></div>'
      }
    }, b), c.setup = function () {
      var d = c.setup;
      return function () {
        d.apply(c, arguments), c.$dropdown_header = a(b.html(b)), c.$dropdown.prepend(c.$dropdown_header)
      }
    }()
  }), M.define("optgroup_columns", function (b) {
    var c = this;
    b = a.extend({
      equalizeWidth: !0,
      equalizeHeight: !0
    }, b), this.getAdjacentOption = function (b, c) {
      var d = b.closest("[data-group]").find("[data-selectable]"),
        e = d.index(b) + c;
      return e >= 0 && e < d.length ? d.eq(e) : a()
    }, this.onKeyDown = function () {
      var a = c.onKeyDown;
      return function (b) {
        var d, e, f, g;
        return !this.isOpen || b.keyCode !== j && b.keyCode !== m ? a.apply(this, arguments) : (c.ignoreHover = !0, g = this.$activeOption.closest("[data-group]"), d = g.find("[data-selectable]").index(this.$activeOption), g = b.keyCode === j ? g.prev("[data-group]") : g.next("[data-group]"), f = g.find("[data-selectable]"), e = f.eq(Math.min(f.length - 1, d)), void(e.length && this.setActiveOption(e)))
      }
    }();
    var d = function () {
        var a, b = d.width,
          c = document;
        return "undefined" == typeof b && (a = c.createElement("div"), a.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>', a = a.firstChild, c.body.appendChild(a), b = d.width = a.offsetWidth - a.clientWidth, c.body.removeChild(a)), b
      },
      e = function () {
        var e, f, g, h, i, j, k;
        if (k = a("[data-group]", c.$dropdown_content), f = k.length, f && c.$dropdown_content.width()) {
          if (b.equalizeHeight) {
            for (g = 0, e = 0; e < f; e++) g = Math.max(g, k.eq(e).height());
            k.css({
              height: g
            })
          }
          b.equalizeWidth && (j = c.$dropdown_content.innerWidth() - d(), h = Math.round(j / f), k.css({
            width: h
          }), f > 1 && (i = j - h * (f - 1), k.eq(f - 1).css({
            width: i
          })))
        }
      };
    (b.equalizeHeight || b.equalizeWidth) && (B.after(this, "positionDropdown", e), B.after(this, "refreshOptions", e))
  }), M.define("remove_button", function (b) {
    b = a.extend({
      label: "&times;",
      title: "Remove",
      className: "remove",
      append: !0
    }, b);
    var c = function (b, c) {
        c.className = "remove-single";
        var d = b,
          e = '<a href="javascript:void(0)" class="' + c.className + '" tabindex="-1" title="' + A(c.title) + '">' + c.label + "</a>",
          f = function (a, b) {
            return a + b
          };
        b.setup = function () {
          var g = d.setup;
          return function () {
            if (c.append) {
              var h = a(d.$input.context).attr("id"),
                i = (a("#" + h), d.settings.render.item);
              d.settings.render.item = function (a) {
                return f(i.apply(b, arguments), e)
              }
            }
            g.apply(b, arguments), b.$control.on("click", "." + c.className, function (a) {
              a.preventDefault(), d.isLocked || d.clear()
            })
          }
        }()
      },
      d = function (b, c) {
        var d = b,
          e = '<a href="javascript:void(0)" class="' + c.className + '" tabindex="-1" title="' + A(c.title) + '">' + c.label + "</a>",
          f = function (a, b) {
            var c = a.search(/(<\/[^>]+>\s*)$/);
            return a.substring(0, c) + b + a.substring(c)
          };
        b.setup = function () {
          var g = d.setup;
          return function () {
            if (c.append) {
              var h = d.settings.render.item;
              d.settings.render.item = function (a) {
                return f(h.apply(b, arguments), e)
              }
            }
            g.apply(b, arguments), b.$control.on("click", "." + c.className, function (b) {
              if (b.preventDefault(), !d.isLocked) {
                var c = a(b.currentTarget).parent();
                d.setActiveItem(c), d.deleteSelection() && d.setCaret(d.items.length)
              }
            })
          }
        }()
      };
    return "single" === this.settings.mode ? void c(this, b) : void d(this, b)
  }), M.define("restore_on_backspace", function (a) {
    var b = this;
    a.text = a.text || function (a) {
      return a[this.settings.labelField]
    }, this.onKeyDown = function () {
      var c = b.onKeyDown;
      return function (b) {
        var d, e;
        return b.keyCode === p && "" === this.$control_input.val() && !this.$activeItems.length && (d = this.caretPos - 1, d >= 0 && d < this.items.length) ? (e = this.options[this.items[d]], this.deleteSelection(b) && (this.setTextboxValue(a.text.apply(this, [e])), this.refreshOptions(!0)), void b.preventDefault()) : c.apply(this, arguments)
      }
    }()
  }), M
});

/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
! function (a, b, c, d) {
  function e(b, c) {
    this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null
    }, this._states = {
      current: {},
      tags: {
        initializing: ["busy"],
        animating: ["busy"],
        dragging: ["interacting"]
      }
    }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
      this._handlers[c] = a.proxy(this[c], this)
    }, this)), a.each(e.Plugins, a.proxy(function (a, b) {
      this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
    }, this)), a.each(e.Workers, a.proxy(function (b, c) {
      this._pipe.push({
        filter: c.filter,
        run: a.proxy(c.run, this)
      })
    }, this)), this.setup(), this.initialize()
  }
  e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: "swing",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab"
  }, e.Width = {
    Default: "default",
    Inner: "inner",
    Outer: "outer"
  }, e.Type = {
    Event: "event",
    State: "state"
  }, e.Plugins = {}, e.Workers = [{
    filter: ["width", "settings"],
    run: function () {
      this._width = this.$element.width()
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function (a) {
      a.current = this._items && this._items[this.relative(this._current)]
    }
  }, {
    filter: ["items", "settings"],
    run: function () {
      this.$stage.children(".cloned").remove()
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function (a) {
      var b = this.settings.margin || "",
        c = !this.settings.autoWidth,
        d = this.settings.rtl,
        e = {
          width: "auto",
          "margin-left": d ? b : "",
          "margin-right": d ? "" : b
        };
      !c && this.$stage.children().css(e), a.css = e
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function (a) {
      var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
        c = null,
        d = this._items.length,
        e = !this.settings.autoWidth,
        f = [];
      for (a.items = {
          merge: !1,
          width: b
        }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
      this._widths = f
    }
  }, {
    filter: ["items", "settings"],
    run: function () {
      var b = [],
        c = this._items,
        d = this.settings,
        e = Math.max(2 * d.items, 4),
        f = 2 * Math.ceil(c.length / 2),
        g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
        h = "",
        i = "";
      for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
      this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function () {
      for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
      this._coordinates = f
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function () {
      var a = this.settings.stagePadding,
        b = this._coordinates,
        c = {
          width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
          "padding-left": a || "",
          "padding-right": a || ""
        };
      this.$stage.css(c)
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function (a) {
      var b = this._coordinates.length,
        c = !this.settings.autoWidth,
        d = this.$stage.children();
      if (c && a.items.merge)
        for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
      else c && (a.css.width = a.items.width, d.css(a.css))
    }
  }, {
    filter: ["items"],
    run: function () {
      this._coordinates.length < 1 && this.$stage.removeAttr("style")
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function (a) {
      a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
    }
  }, {
    filter: ["position"],
    run: function () {
      this.animate(this.coordinates(this._current))
    }
  }, {
    filter: ["width", "position", "items", "settings"],
    run: function () {
      var a, b, c, d, e = this.settings.rtl ? 1 : -1,
        f = 2 * this.settings.stagePadding,
        g = this.coordinates(this.current()) + f,
        h = g + this.width() * e,
        i = [];
      for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
      this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
    }
  }], e.prototype.initialize = function () {
    if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
      var b, c, e;
      b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b)
    }
    this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
  }, e.prototype.setup = function () {
    var b = this.viewport(),
      c = this.options.responsive,
      d = -1,
      e = null;
    c ? (a.each(c, function (a) {
      a <= b && a > d && (d = Number(a))
    }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
      property: {
        name: "settings",
        value: e
      }
    }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
      property: {
        name: "settings",
        value: this.settings
      }
    })
  }, e.prototype.optionsLogic = function () {
    this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
  }, e.prototype.prepare = function (b) {
    var c = this.trigger("prepare", {
      content: b
    });
    return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
      content: c.data
    }), c.data
  }, e.prototype.update = function () {
    for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
        return this[a]
      }, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
    this._invalidated = {}, !this.is("valid") && this.enter("valid")
  }, e.prototype.width = function (a) {
    switch (a = a || e.Width.Default) {
      case e.Width.Inner:
      case e.Width.Outer:
        return this._width;
      default:
        return this._width - 2 * this.settings.stagePadding + this.settings.margin
    }
  }, e.prototype.refresh = function () {
    this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
  }, e.prototype.onThrottledResize = function () {
    b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
  }, e.prototype.onResize = function () {
    return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
  }, e.prototype.registerEventHandlers = function () {
    a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
      return !1
    })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
  }, e.prototype.onDragStart = function (b) {
    var d = null;
    3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
      x: d[16 === d.length ? 12 : 4],
      y: d[16 === d.length ? 13 : 5]
    }) : (d = this.$stage.position(), d = {
      x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
      y: d.top
    }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b));
      a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
    }, this)))
  }, e.prototype.onDragMove = function (a) {
    var b = null,
      c = null,
      d = null,
      e = this.difference(this._drag.pointer, this.pointer(a)),
      f = this.difference(this._drag.stage.start, e);
    this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
  }, e.prototype.onDragEnd = function (b) {
    var d = this.difference(this._drag.pointer, this.pointer(b)),
      e = this._drag.stage.current,
      f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
    a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
      return !1
    })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
  }, e.prototype.closest = function (b, c) {
    var d = -1,
      e = 30,
      f = this.width(),
      g = this.coordinates();
    return this.settings.freeDrag || a.each(g, a.proxy(function (a, h) {
      return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1
    }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
  }, e.prototype.animate = function (b) {
    var c = this.speed() > 0;
    this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
      transform: "translate3d(" + b + "px,0px,0px)",
      transition: this.speed() / 1e3 + "s"
    }) : c ? this.$stage.animate({
      left: b + "px"
    }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
      left: b + "px"
    })
  }, e.prototype.is = function (a) {
    return this._states.current[a] && this._states.current[a] > 0
  }, e.prototype.current = function (a) {
    if (a === d) return this._current;
    if (0 === this._items.length) return d;
    if (a = this.normalize(a), this._current !== a) {
      var b = this.trigger("change", {
        property: {
          name: "position",
          value: a
        }
      });
      b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
        property: {
          name: "position",
          value: this._current
        }
      })
    }
    return this._current
  }, e.prototype.invalidate = function (b) {
    return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
      return b
    })
  }, e.prototype.reset = function (a) {
    a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
  }, e.prototype.normalize = function (a, b) {
    var c = this._items.length,
      e = b ? 0 : this._clones.length;
    return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
  }, e.prototype.relative = function (a) {
    return a -= this._clones.length / 2, this.normalize(a, !0)
  }, e.prototype.maximum = function (a) {
    var b, c, d, e = this.settings,
      f = this._coordinates.length;
    if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
    else if (e.autoWidth || e.merge) {
      for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d)););
      f = b + 1
    } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
    return a && (f -= this._clones.length / 2), Math.max(f, 0)
  }, e.prototype.minimum = function (a) {
    return a ? 0 : this._clones.length / 2
  }, e.prototype.items = function (a) {
    return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
  }, e.prototype.mergers = function (a) {
    return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
  }, e.prototype.clones = function (b) {
    var c = this._clones.length / 2,
      e = c + this._items.length,
      f = function (a) {
        return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
      };
    return b === d ? a.map(this._clones, function (a, b) {
      return f(b)
    }) : a.map(this._clones, function (a, c) {
      return a === b ? f(c) : null
    })
  }, e.prototype.speed = function (a) {
    return a !== d && (this._speed = a), this._speed
  }, e.prototype.coordinates = function (b) {
    var c, e = 1,
      f = b - 1;
    return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
      return this.coordinates(b)
    }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
  }, e.prototype.duration = function (a, b, c) {
    return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
  }, e.prototype.to = function (a, b) {
    var c = this.current(),
      d = null,
      e = a - this.relative(c),
      f = (e > 0) - (e < 0),
      g = this._items.length,
      h = this.minimum(),
      i = this.maximum();
    this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
  }, e.prototype.next = function (a) {
    a = a || !1, this.to(this.relative(this.current()) + 1, a)
  }, e.prototype.prev = function (a) {
    a = a || !1, this.to(this.relative(this.current()) - 1, a)
  }, e.prototype.onTransitionEnd = function (a) {
    if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
    this.leave("animating"), this.trigger("translated")
  }, e.prototype.viewport = function () {
    var d;
    return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
  }, e.prototype.replace = function (b) {
    this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
      return 1 === this.nodeType
    }).each(a.proxy(function (a, b) {
      b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
    }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
  }, e.prototype.add = function (b, c) {
    var e = this.relative(this._current);
    c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
      content: b,
      position: c
    }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
      content: b,
      position: c
    })
  }, e.prototype.remove = function (a) {
    a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
      content: this._items[a],
      position: a
    }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
      content: null,
      position: a
    }))
  }, e.prototype.preloadAutoWidthImages = function (b) {
    b.each(a.proxy(function (b, c) {
      this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function (a) {
        c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
      }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
    }, this))
  }, e.prototype.destroy = function () {
    this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
    for (var d in this._plugins) this._plugins[d].destroy();
    this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
  }, e.prototype.op = function (a, b, c) {
    var d = this.settings.rtl;
    switch (b) {
      case "<":
        return d ? a > c : a < c;
      case ">":
        return d ? a < c : a > c;
      case ">=":
        return d ? a <= c : a >= c;
      case "<=":
        return d ? a >= c : a <= c
    }
  }, e.prototype.on = function (a, b, c, d) {
    a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
  }, e.prototype.off = function (a, b, c, d) {
    a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
  }, e.prototype.trigger = function (b, c, d, f, g) {
    var h = {
        item: {
          count: this._items.length,
          index: this.current()
        }
      },
      i = a.camelCase(a.grep(["on", b, d], function (a) {
        return a
      }).join("-").toLowerCase()),
      j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
        relatedTarget: this
      }, h, c));
    return this._supress[b] || (a.each(this._plugins, function (a, b) {
      b.onTrigger && b.onTrigger(j)
    }), this.register({
      type: e.Type.Event,
      name: b
    }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
  }, e.prototype.enter = function (b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
      this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
    }, this))
  }, e.prototype.leave = function (b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
      this._states.current[b]--
    }, this))
  }, e.prototype.register = function (b) {
    if (b.type === e.Type.Event) {
      if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
        var c = a.event.special[b.name]._default;
        a.event.special[b.name]._default = function (a) {
          return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
        }, a.event.special[b.name].owl = !0
      }
    } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
      return a.inArray(c, this._states.tags[b.name]) === d
    }, this)))
  }, e.prototype.suppress = function (b) {
    a.each(b, a.proxy(function (a, b) {
      this._supress[b] = !0
    }, this))
  }, e.prototype.release = function (b) {
    a.each(b, a.proxy(function (a, b) {
      delete this._supress[b]
    }, this))
  }, e.prototype.pointer = function (a) {
    var c = {
      x: null,
      y: null
    };
    return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
  }, e.prototype.isNumeric = function (a) {
    return !isNaN(parseFloat(a))
  }, e.prototype.difference = function (a, b) {
    return {
      x: a.x - b.x,
      y: a.y - b.y
    }
  }, a.fn.owlCarousel = function (b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return this.each(function () {
      var d = a(this),
        f = d.data("owl.carousel");
      f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
        f.register({
          type: e.Type.Event,
          name: c
        }), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
          a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
        }, f))
      })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
    })
  }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  var e = function (b) {
    this._core = b, this._interval = null, this._visible = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoRefresh && this.watch()
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  e.Defaults = {
    autoRefresh: !0,
    autoRefreshInterval: 500
  }, e.prototype.watch = function () {
    this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
  }, e.prototype.refresh = function () {
    this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
  }, e.prototype.destroy = function () {
    var a, c;
    b.clearInterval(this._interval);
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  var e = function (b) {
    this._core = b, this._loaded = [], this._handlers = {
      "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
        if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
          for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) {
              this.load(b)
            }, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  e.Defaults = {
    lazyLoad: !1
  }, e.prototype.load = function (c) {
    var d = this._core.$stage.children().eq(c),
      e = d && d.find(".owl-lazy");
    !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
      var e, f = a(d),
        g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
      this._core.trigger("load", {
        element: f,
        url: g
      }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
        f.css("opacity", 1), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy")
      }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function () {
        f.css({
          "background-image": 'url("' + g + '")',
          opacity: "1"
        }), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy")
      }, this), e.src = g)
    }, this)), this._loaded.push(d.get(0)))
  }, e.prototype.destroy = function () {
    var a, b;
    for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  var e = function (b) {
    this._core = b, this._handlers = {
      "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && this.update()
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
      }, this),
      "loaded.owl.lazy": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  e.Defaults = {
    autoHeight: !1,
    autoHeightClass: "owl-height"
  }, e.prototype.update = function () {
    var b = this._core._current,
      c = b + this._core.settings.items,
      d = this._core.$stage.children().toArray().slice(b, c),
      e = [],
      f = 0;
    a.each(d, function (b, c) {
      e.push(a(c).height())
    }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
  }, e.prototype.destroy = function () {
    var a, b;
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  var e = function (b) {
    this._core = b, this._videos = {}, this._playing = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.register({
          type: "state",
          name: "playing",
          tags: ["interacting"]
        })
      }, this),
      "resize.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
      }, this),
      "refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" === a.property.name && this._playing && this.stop()
      }, this),
      "prepared.owl.carousel": a.proxy(function (b) {
        if (b.namespace) {
          var c = a(b.content).find(".owl-video");
          c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
      this.play(a)
    }, this))
  };
  e.Defaults = {
    video: !1,
    videoHeight: !1,
    videoWidth: !1
  }, e.prototype.fetch = function (a, b) {
    var c = function () {
        return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
      }(),
      d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
      e = a.attr("data-width") || this._core.settings.videoWidth,
      f = a.attr("data-height") || this._core.settings.videoHeight,
      g = a.attr("href");
    if (!g) throw new Error("Missing video URL.");
    if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
    else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
    else {
      if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
      c = "vzaar"
    }
    d = d[6], this._videos[g] = {
      type: c,
      id: d,
      width: e,
      height: f
    }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
  }, e.prototype.thumbnail = function (b, c) {
    var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
      h = b.find("img"),
      i = "src",
      j = "",
      k = this._core.settings,
      l = function (a) {
        e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
      };
    if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
    "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
      type: "GET",
      url: "//vimeo.com/api/v2/video/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function (a) {
        f = a[0].thumbnail_large, l(f)
      }
    }) : "vzaar" === c.type && a.ajax({
      type: "GET",
      url: "//vzaar.com/api/videos/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function (a) {
        f = a.framegrab_url, l(f)
      }
    })
  }, e.prototype.stop = function () {
    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
  }, e.prototype.play = function (b) {
    var c, d = a(b.target),
      e = d.closest("." + this._core.settings.itemClass),
      f = this._videos[e.attr("data-video")],
      g = f.width || "100%",
      h = f.height || this._core.$stage.height();
    this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
  }, e.prototype.isInFullScreen = function () {
    var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
    return b && a(b).parent().hasClass("owl-video-frame")
  }, e.prototype.destroy = function () {
    var a, b;
    this._core.$element.off("click.owl.video");
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  var e = function (b) {
    this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
      "change.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
      }, this),
      "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
        a.namespace && (this.swapping = "translated" == a.type)
      }, this),
      "translate.owl.carousel": a.proxy(function (a) {
        a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
      }, this)
    }, this.core.$element.on(this.handlers)
  };
  e.Defaults = {
      animateOut: !1,
      animateIn: !1
    }, e.prototype.swap = function () {
      if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
        this.core.speed(0);
        var b, c = a.proxy(this.clear, this),
          d = this.core.$stage.children().eq(this.previous),
          e = this.core.$stage.children().eq(this.next),
          f = this.core.settings.animateIn,
          g = this.core.settings.animateOut;
        this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
          left: b + "px"
        }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
      }
    }, e.prototype.clear = function (b) {
      a(b.target).css({
        left: ""
      }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, e.prototype.destroy = function () {
      var a, b;
      for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
      for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    },
    a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  var e = function (b) {
    this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
      }, this),
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoplay && this.play()
      }, this),
      "play.owl.autoplay": a.proxy(function (a, b, c) {
        a.namespace && this.play(b, c)
      }, this),
      "stop.owl.autoplay": a.proxy(function (a) {
        a.namespace && this.stop()
      }, this),
      "mouseover.owl.autoplay": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
      }, this),
      "mouseleave.owl.autoplay": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
      }, this),
      "touchstart.owl.core": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
      }, this),
      "touchend.owl.core": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this.play()
      }, this)
    }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
  };
  e.Defaults = {
    autoplay: !1,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !1,
    autoplaySpeed: !1
  }, e.prototype.play = function (a, b) {
    this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
  }, e.prototype._getNextTimeout = function (d, e) {
    return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function () {
      this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
    }, this), d || this._core.settings.autoplayTimeout)
  }, e.prototype._setAutoPlayInterval = function () {
    this._timeout = this._getNextTimeout()
  }, e.prototype.stop = function () {
    this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"))
  }, e.prototype.pause = function () {
    this._core.is("rotating") && (this._paused = !0)
  }, e.prototype.destroy = function () {
    var a, b;
    this.stop();
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  "use strict";
  var e = function (b) {
    this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to
    }, this._handlers = {
      "prepared.owl.carousel": a.proxy(function (b) {
        b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
      }, this),
      "added.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
      }, this),
      "remove.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" == a.property.name && this.draw()
      }, this),
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
      }, this),
      "refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
  };
  e.Defaults = {
    nav: !1,
    navText: ["prev", "next"],
    navSpeed: !1,
    navElement: "div",
    navContainer: !1,
    navContainerClass: "owl-nav",
    navClass: ["owl-prev", "owl-next"],
    slideBy: 1,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dots: !0,
    dotsEach: !1,
    dotsData: !1,
    dotsSpeed: !1,
    dotsContainer: !1
  }, e.prototype.initialize = function () {
    var b, c = this._core.settings;
    this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
      this.prev(c.navSpeed)
    }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
      this.next(c.navSpeed)
    }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function (b) {
      var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
      b.preventDefault(), this.to(d, c.dotsSpeed)
    }, this));
    for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
  }, e.prototype.destroy = function () {
    var a, b, c, d;
    for (a in this._handlers) this.$element.off(a, this._handlers[a]);
    for (b in this._controls) this._controls[b].remove();
    for (d in this.overides) this._core[d] = this._overrides[d];
    for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
  }, e.prototype.update = function () {
    var a, b, c, d = this._core.clones().length / 2,
      e = d + this._core.items().length,
      f = this._core.maximum(!0),
      g = this._core.settings,
      h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
    if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
      for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
        if (b >= h || 0 === b) {
          if (this._pages.push({
              start: Math.min(f, a - d),
              end: a - d + h - 1
            }), Math.min(f, a - d) === f) break;
          b = 0, ++c
        }
        b += this._core.mergers(this._core.relative(a))
      }
  }, e.prototype.draw = function () {
    var b, c = this._core.settings,
      d = this._core.items().length <= c.items,
      e = this._core.relative(this._core.current()),
      f = c.loop || c.rewind;
    this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
  }, e.prototype.onTrigger = function (b) {
    var c = this._core.settings;
    b.page = {
      index: a.inArray(this.current(), this._pages),
      count: this._pages.length,
      size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
    }
  }, e.prototype.current = function () {
    var b = this._core.relative(this._core.current());
    return a.grep(this._pages, a.proxy(function (a, c) {
      return a.start <= b && a.end >= b
    }, this)).pop()
  }, e.prototype.getPosition = function (b) {
    var c, d, e = this._core.settings;
    return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
  }, e.prototype.next = function (b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
  }, e.prototype.prev = function (b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
  }, e.prototype.to = function (b, c, d) {
    var e;
    !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
  }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  "use strict";
  var e = function (c) {
    this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (c) {
        c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
      }, this),
      "prepared.owl.carousel": a.proxy(function (b) {
        if (b.namespace) {
          var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
          if (!c) return;
          this._hashes[c] = b.content
        }
      }, this),
      "changed.owl.carousel": a.proxy(function (c) {
        if (c.namespace && "position" === c.property.name) {
          var d = this._core.items(this._core.relative(this._core.current())),
            e = a.map(this._hashes, function (a, b) {
              return a === d ? b : null
            }).join();
          if (!e || b.location.hash.slice(1) === e) return;
          b.location.hash = e
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
      var c = b.location.hash.substring(1),
        e = this._core.$stage.children(),
        f = this._hashes[c] && e.index(this._hashes[c]);
      f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
    }, this))
  };
  e.Defaults = {
    URLhashListener: !1
  }, e.prototype.destroy = function () {
    var c, d;
    a(b).off("hashchange.owl.navigation");
    for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
    for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  function e(b, c) {
    var e = !1,
      f = b.charAt(0).toUpperCase() + b.slice(1);
    return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
      if (g[b] !== d) return e = !c || b, !1
    }), e
  }

  function f(a) {
    return e(a, !0)
  }
  var g = a("<support>").get(0).style,
    h = "Webkit Moz O ms".split(" "),
    i = {
      transition: {
        end: {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd",
          transition: "transitionend"
        }
      },
      animation: {
        end: {
          WebkitAnimation: "webkitAnimationEnd",
          MozAnimation: "animationend",
          OAnimation: "oAnimationEnd",
          animation: "animationend"
        }
      }
    },
    j = {
      csstransforms: function () {
        return !!e("transform")
      },
      csstransforms3d: function () {
        return !!e("perspective")
      },
      csstransitions: function () {
        return !!e("transition")
      },
      cssanimations: function () {
        return !!e("animation")
      }
    };
  j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);
/*!
 * Validator v0.11.5 for Bootstrap 3, by @1000hz
 * Copyright 2016 Cina Saffary
 * Licensed under http://opensource.org/licenses/MIT
 *
 * https://github.com/1000hz/bootstrap-validator
 */

+
function (a) {
  "use strict";

  function b(b) {
    return b.is('[type="checkbox"]') ? b.prop("checked") : b.is('[type="radio"]') ? !!a('[name="' + b.attr("name") + '"]:checked').length : b.val()
  }

  function c(b) {
    return this.each(function () {
      var c = a(this),
        e = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b),
        f = c.data("bs.validator");
      (f || "destroy" != b) && (f || c.data("bs.validator", f = new d(this, e)), "string" == typeof b && f[b]())
    })
  }
  var d = function (c, e) {
    this.options = e, this.validators = a.extend({}, d.VALIDATORS, e.custom), this.$element = a(c), this.$btn = a('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr("id") + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]')), this.update(), this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator", a.proxy(this.onInput, this)), this.$element.on("submit.bs.validator", a.proxy(this.onSubmit, this)), this.$element.on("reset.bs.validator", a.proxy(this.reset, this)), this.$element.find("[data-match]").each(function () {
      var c = a(this),
        d = c.data("match");
      a(d).on("input.bs.validator", function () {
        b(c) && c.trigger("input.bs.validator")
      })
    }), this.$inputs.filter(function () {
      return b(a(this))
    }).trigger("focusout"), this.$element.attr("novalidate", !0), this.toggleSubmit()
  };
  d.VERSION = "0.11.5", d.INPUT_SELECTOR = ':input:not([type="hidden"], [type="submit"], [type="reset"], button)', d.FOCUS_OFFSET = 20, d.DEFAULTS = {
    delay: 500,
    html: !1,
    disable: !0,
    focus: !0,
    custom: {},
    errors: {
      match: "Does not match",
      minlength: "Not long enough"
    },
    feedback: {
      success: "glyphicon-ok",
      error: "glyphicon-remove"
    }
  }, d.VALIDATORS = {
    "native": function (a) {
      var b = a[0];
      return b.checkValidity ? !b.checkValidity() && !b.validity.valid && (b.validationMessage || "error!") : void 0
    },
    match: function (b) {
      var c = b.data("match");
      return b.val() !== a(c).val() && d.DEFAULTS.errors.match
    },
    minlength: function (a) {
      var b = a.data("minlength");
      return a.val().length < b && d.DEFAULTS.errors.minlength
    }
  }, d.prototype.update = function () {
    return this.$inputs = this.$element.find(d.INPUT_SELECTOR).add(this.$element.find('[data-validate="true"]')).not(this.$element.find('[data-validate="false"]')), this
  }, d.prototype.onInput = function (b) {
    var c = this,
      d = a(b.target),
      e = "focusout" !== b.type;
    this.$inputs.is(d) && this.validateInput(d, e).done(function () {
      c.toggleSubmit()
    })
  }, d.prototype.validateInput = function (c, d) {
    var e = (b(c), c.data("bs.validator.errors"));
    c.is('[type="radio"]') && (c = this.$element.find('input[name="' + c.attr("name") + '"]'));
    var f = a.Event("validate.bs.validator", {
      relatedTarget: c[0]
    });
    if (this.$element.trigger(f), !f.isDefaultPrevented()) {
      var g = this;
      return this.runValidators(c).done(function (b) {
        c.data("bs.validator.errors", b), b.length ? d ? g.defer(c, g.showErrors) : g.showErrors(c) : g.clearErrors(c), e && b.toString() === e.toString() || (f = b.length ? a.Event("invalid.bs.validator", {
          relatedTarget: c[0],
          detail: b
        }) : a.Event("valid.bs.validator", {
          relatedTarget: c[0],
          detail: e
        }), g.$element.trigger(f)), g.toggleSubmit(), g.$element.trigger(a.Event("validated.bs.validator", {
          relatedTarget: c[0]
        }))
      })
    }
  }, d.prototype.runValidators = function (c) {
    function d(a) {
      return c.data(a + "-error")
    }

    function e() {
      var a = c[0].validity;
      return a.typeMismatch ? c.data("type-error") : a.patternMismatch ? c.data("pattern-error") : a.stepMismatch ? c.data("step-error") : a.rangeOverflow ? c.data("max-error") : a.rangeUnderflow ? c.data("min-error") : a.valueMissing ? c.data("required-error") : null
    }

    function f() {
      return c.data("error")
    }

    function g(a) {
      return d(a) || e() || f()
    }
    var h = [],
      i = a.Deferred();
    return c.data("bs.validator.deferred") && c.data("bs.validator.deferred").reject(), c.data("bs.validator.deferred", i), a.each(this.validators, a.proxy(function (a, d) {
      var e = null;
      (b(c) || c.attr("required")) && (c.data(a) || "native" == a) && (e = d.call(this, c)) && (e = g(a) || e, !~h.indexOf(e) && h.push(e))
    }, this)), !h.length && b(c) && c.data("remote") ? this.defer(c, function () {
      var d = {};
      d[c.attr("name")] = b(c), a.get(c.data("remote"), d).fail(function (a, b, c) {
        h.push(g("remote") || c)
      }).always(function () {
        i.resolve(h)
      })
    }) : i.resolve(h), i.promise()
  }, d.prototype.validate = function () {
    var b = this;
    return a.when(this.$inputs.map(function () {
      return b.validateInput(a(this), !1)
    })).then(function () {
      b.toggleSubmit(), b.focusError()
    }), this
  }, d.prototype.focusError = function () {
    if (this.options.focus) {
      var b = a(".has-error:first :input");
      0 !== b.length && (a("html, body").animate({
        scrollTop: b.offset().top - d.FOCUS_OFFSET
      }, 250), b.focus())
    }
  }, d.prototype.showErrors = function (b) {
    var c = this.options.html ? "html" : "text",
      d = b.data("bs.validator.errors"),
      e = b.closest(".form-group"),
      f = e.find(".help-block.with-errors"),
      g = e.find(".form-control-feedback");
    d.length && (d = a("<ul/>").addClass("list-unstyled").append(a.map(d, function (b) {
      return a("<li/>")[c](b)
    })), void 0 === f.data("bs.validator.originalContent") && f.data("bs.validator.originalContent", f.html()), f.empty().append(d), e.addClass("has-error has-danger"), e.hasClass("has-feedback") && g.removeClass(this.options.feedback.success) && g.addClass(this.options.feedback.error) && e.removeClass("has-success"))
  }, d.prototype.clearErrors = function (a) {
    var c = a.closest(".form-group"),
      d = c.find(".help-block.with-errors"),
      e = c.find(".form-control-feedback");
    d.html(d.data("bs.validator.originalContent")), c.removeClass("has-error has-danger has-success"), c.hasClass("has-feedback") && e.removeClass(this.options.feedback.error) && e.removeClass(this.options.feedback.success) && b(a) && e.addClass(this.options.feedback.success) && c.addClass("has-success")
  }, d.prototype.hasErrors = function () {
    function b() {
      return !!(a(this).data("bs.validator.errors") || []).length
    }
    return !!this.$inputs.filter(b).length
  }, d.prototype.isIncomplete = function () {
    function c() {
      var c = b(a(this));
      return !("string" == typeof c ? a.trim(c) : c)
    }
    return !!this.$inputs.filter("[required]").filter(c).length
  }, d.prototype.onSubmit = function (a) {
    this.validate(), (this.isIncomplete() || this.hasErrors()) && a.preventDefault()
  }, d.prototype.toggleSubmit = function () {
    this.options.disable && this.$btn.toggleClass("disabled", this.isIncomplete() || this.hasErrors())
  }, d.prototype.defer = function (b, c) {
    return c = a.proxy(c, this, b), this.options.delay ? (window.clearTimeout(b.data("bs.validator.timeout")), void b.data("bs.validator.timeout", window.setTimeout(c, this.options.delay))) : c()
  }, d.prototype.reset = function () {
    return this.$element.find(".form-control-feedback").removeClass(this.options.feedback.error).removeClass(this.options.feedback.success), this.$inputs.removeData(["bs.validator.errors", "bs.validator.deferred"]).each(function () {
      var b = a(this),
        c = b.data("bs.validator.timeout");
      window.clearTimeout(c) && b.removeData("bs.validator.timeout")
    }), this.$element.find(".help-block.with-errors").each(function () {
      var b = a(this),
        c = b.data("bs.validator.originalContent");
      b.removeData("bs.validator.originalContent").html(c)
    }), this.$btn.removeClass("disabled"), this.$element.find(".has-error, .has-danger, .has-success").removeClass("has-error has-danger has-success"), this
  }, d.prototype.destroy = function () {
    return this.reset(), this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"), this.$inputs.off(".bs.validator"), this.options = null, this.validators = null, this.$element = null, this.$btn = null, this
  };
  var e = a.fn.validator;
  a.fn.validator = c, a.fn.validator.Constructor = d, a.fn.validator.noConflict = function () {
    return a.fn.validator = e, this
  }, a(window).on("load", function () {
    a('form[data-toggle="validator"]').each(function () {
      var b = a(this);
      c.call(b, b.data())
    })
  })
}(jQuery);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// jQuery
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var automaticGeoLocation = false;
var resizeId;

jQuery(document).ready(function ($) {
  jQuery('#tikpay_payment_form input[type="radio"]').iCheck('disable');
  "use strict";

  //  Disable inputs in the non-active tab

  $(".form-slide:not(.active) input, .form-slide:not(.active) select, .form-slide:not(.active) textarea").prop("disabled", true);


  //  Selectize

  $("[data-enable-search=true]").each(function () {
    $(this).selectize({
      onDropdownOpen: dropdownOpen,
      onDropdownClose: dropdownClose,
      allowEmptyOption: false
    });
  });

  var select = $(".main-search-form select,#report_list, #search_submit select");
  select.selectize({
    onDropdownOpen: dropdownOpen,
    onDropdownClose: dropdownClose,
    allowEmptyOption: true,
  });

  function dropdownOpen($dropdown) {
    $dropdown.addClass("opening");
  }

  function dropdownClose($dropdown) {
    $dropdown.removeClass("opening");
  }


  //  Change tab button


  $("select.change-tab").each(function () {
    var _this = $(this);
    if ($(this).find(".item").attr("data-value") !== "") {
      changeTab(_this);
    }
  });

  $(".change-tab").on("change", function () {
    changeTab($(this));
  });

  $(".box").each(function () {
    if ($(this).find(".background .background-image").length) {
      $(this).css("background-color", "transparent");
    }
  });


  //  Button for class changing

  $(".change-class").on("click", function (e) {
    e.preventDefault();
    var parentClass = $("." + $(this).attr("data-parent-class"));
    parentClass.removeClass($(this).attr("data-change-from-class"));
    parentClass.addClass($(this).attr("data-change-to-class"));
    $(this).parent().find(".change-class").removeClass("active");
    $(this).addClass("active");
    readMore();
  });

  if ($(".masonry").length) {
    $(".items.masonry").masonry({
      itemSelector: ".item",
      transitionDuration: 0
    });
  }

  $(".ribbon-featured").each(function () {
    var thisText = $(this).text();
    $(this).html("");
    $(this).append(
      "<div class='ribbon-start'></div>" +
      "<div class='ribbon-content'>" + thisText + "</div>" +
      "<div class='ribbon-end'>" +
      "<figure class='ribbon-shadow'></figure>" +
      "</div>"
    );
  });

  //  File input styling

  if ($("input[type=file].with-preview").length) {
    $("input.file-upload-input").MultiFile({
      list: ".file-upload-previews"
    });
  }

  $(".single-file-input input[type=file]").change(function () {
    previewImage(this);
  });

  $(".has-child a[href='#'].nav-link").on("click", function (e) {
    e.preventDefault();
    if (!$(this).parent().hasClass("hover")) {
      $(this).parent().addClass("hover");
    } else {
      $(this).parent().removeClass("hover");
    }
  });

  if ($(".owl-carousel").length) {

    var galleryCarousel = $(".gallery-carousel");

    galleryCarousel.owlCarousel({
      loop: false,
      margin: 0,
      nav: true,
      items: 1,
      dots: false,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      autoHeight: true,
      onInitialized: setOwlStageHeight,
      onResized: setOwlStageHeight_more,
      onTranslated: setOwlStageHeight_more

    });

    function setOwlStageHeight(event) {
      jQuery(window).load(function (e) {
        var maxHeight = 0;
        $('.owl-item.active').each(function () { // LOOP THROUGH ACTIVE ITEMS
          var thisHeight = parseInt($(this).height());
          maxHeight = (maxHeight >= thisHeight ? maxHeight : thisHeight);
        });
        $('.owl-carousel').css('height', maxHeight);
        $('.owl-height').css('height', maxHeight);
        $('.owl-stage-outer').css('height', maxHeight); // CORRECT DRAG-AREA SO BUTTONS ARE CLICKABLE
      });
    }

    function setOwlStageHeight_more(event) {
      var maxHeight = 0;
      $('.owl-item.active').each(function () { // LOOP THROUGH ACTIVE ITEMS
        var thisHeight = parseInt($(this).height());
        maxHeight = (maxHeight >= thisHeight ? maxHeight : thisHeight);
      });
      $('.owl-carousel').css('height', maxHeight);
      $('.owl-height').css('height', maxHeight);
      $('.owl-stage-outer').css('height', maxHeight); // CORRECT DRAG-AREA SO BUTTONS ARE CLICKABLE
    }

    $(".tabs-slider").owlCarousel({
      loop: false,
      margin: 0,
      nav: false,
      items: 1,
      autoHeight: true,
      dots: false,
      mouseDrag: true,
      touchDrag: false,
      pullDrag: false,
      freeDrag: false
    });

    $(".full-width-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 3,
      rtl: true,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      autoHeight: false,
      center: true,
      dots: false,
      autoWidth: true,
      responsive: {
        768: {
          items: 3
        },
        0: {
          items: 1,
          center: false,
          margin: 0,
          autoWidth: false
        }
      }
    });

    $(".gallery-carousel-thumbs").owlCarousel({
      loop: false,
      rtl: true,
      margin: 20,
      nav: false,
      dots: false,
      items: 5,
    });

    $("a.owl-thumb").on("click", function () {
      $("a.owl-thumb").removeClass("active-thumb");
      $(this).addClass("active-thumb");
    });

    galleryCarousel.on('translated.owl.carousel', function () {
      var hash = $(this).find(".active").find("img").attr("data-hash");
      $(".gallery-carousel-thumbs").find("a[href='#" + hash + "']").trigger("click");
    });
  }

  //  Bootstrap tooltip initialization

  $('[data-toggle="tooltip"]').tooltip();

  //  iCheck

  $("input[type=checkbox], input[type=radio]").iCheck();

  var framedInputRadio = $(".framed input[type=radio]");
  framedInputRadio.on('ifChecked', function () {
    $(this).closest(".framed").addClass("active");
  });
  framedInputRadio.on('ifUnchecked', function () {
    $(this).closest(".framed").removeClass("active");
  });

  //  "img" into "background-image" transfer

  $("[data-background-image]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background-image") + ")");
  });

  $(".background-image").each(function () {
    $(this).css("background-image", "url(" + $(this).find("img").attr("src") + ")");
  });

  //  Custom background color

  $("[data-background-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-background-color"));
  });



  //  No UI Slider -------------------------------------------------------------------------------------------------------

  if ($('.ui-slider').length > 0) {

    $.getScript("assets/js/jquery.nouislider.all.min.js", function () {
      $('.ui-slider').each(function () {
        if ($("body").hasClass("rtl")) var rtl = "rtl";
        else rtl = "ltr";

        var step;
        if ($(this).attr('data-step')) {
          step = parseInt($(this).attr('data-step'));
        } else {
          step = 10;
        }
        var sliderElement = $(this).attr('id');
        var element = $('#' + sliderElement);
        var valueMin = parseInt($(this).attr('data-value-min'));
        var valueMax = parseInt($(this).attr('data-value-max'));
        $(this).noUiSlider({
          start: [valueMin, valueMax],
          connect: true,
          direction: rtl,
          range: {
            'min': valueMin,
            'max': valueMax
          },
          step: step
        });
        if ($(this).attr('data-value-type') == 'price') {
          if ($(this).attr('data-currency-placement') == 'before') {
            $(this).Link('lower').to($(this).children('.values').children('.value-min'), null, wNumb({
              prefix: $(this).attr('data-currency'),
              decimals: 0,
              thousand: '.'
            }));
            $(this).Link('upper').to($(this).children('.values').children('.value-max'), null, wNumb({
              prefix: $(this).attr('data-currency'),
              decimals: 0,
              thousand: '.'
            }));
          } else if ($(this).attr('data-currency-placement') == 'after') {
            $(this).Link('lower').to($(this).children('.values').children('.value-min'), null, wNumb({
              postfix: $(this).attr('data-currency'),
              decimals: 0,
              thousand: ' '
            }));
            $(this).Link('upper').to($(this).children('.values').children('.value-max'), null, wNumb({
              postfix: $(this).attr('data-currency'),
              decimals: 0,
              thousand: ' '
            }));
          }
        } else {
          $(this).Link('lower').to($(this).children('.values').children('.value-min'), null, wNumb({
            decimals: 0
          }));
          $(this).Link('upper').to($(this).children('.values').children('.value-max'), null, wNumb({
            decimals: 0
          }));
        }
      });
    });
  }

  //  Read More

  readMore();

});



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Change Tab

function changeTab(_this) {
  var parameters = _this.data("selectize").items[0];
  var changeTarget = $("#" + _this.attr("data-change-tab-target"));
  var slide = changeTarget.find(".form-slide");
  if (parameters === "") {
    slide.removeClass("active");
    slide.first().addClass("default");
    changeTarget.find("input").prop("disabled", true);
    changeTarget.find("select").prop("disabled", true);
    changeTarget.find("textarea").prop("disabled", true);
  } else {
    slide.removeClass("default");
    slide.removeClass("active");
    changeTarget.find("input").prop("disabled", true);
    changeTarget.find("select").prop("disabled", true);
    changeTarget.find("textarea").prop("disabled", true);
    changeTarget.find("#" + parameters).addClass("active");
    changeTarget.find("#" + parameters + " input").prop("disabled", false);
    changeTarget.find("#" + parameters + " textarea").prop("disabled", false);
    changeTarget.find("#" + parameters + " select").prop("disabled", false);
  }
}

// Read More

function readMore() {
  jQuery(".read-more").each(function () {
    var readMoreLink = $(this).attr("data-read-more-link-more");
    var readLessLink = $(this).attr("data-read-more-link-less");
    var collapseHeight = $(this).find(".item:first").height() + parseInt($(this).find(".item:first").css("margin-bottom"), 10);
    jQuery(".read-more").readmore({
      moreLink: '<div class="center"><a href="#" class="btn btn-primary btn-rounded btn-framed">' + readMoreLink + '</a></div>',
      lessLink: '<div class="center"><a href="#" class="btn btn-primary btn-rounded btn-framed">' + readLessLink + '</a></div>',
      collapsedHeight: 500
    });
  });
}


function previewImage(input) {
  var ext = $(input).val().split('.').pop().toLowerCase();
  if ($.inArray(ext, ['gif', 'png', 'jpg', 'jpeg']) === -1) {
    alert('invalid extension!');
  } else {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $(input).parents(".profile-image").find(".image").attr("style", "background-image: url('" + e.target.result + "');");
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
}

// Viewport ------------------------------------------------------------------------------------------------------------

var viewport = (function () {
  var viewPorts = ['xs', 'sm', 'md', 'lg'];

  var viewPortSize = function () {
    return window.getComputedStyle(document.body, ':before').content.replace(/"/g, '');
  };

  var is = function (size) {
    if (viewPorts.indexOf(size) === -1) throw "no valid viewport name given";
    return viewPortSize() === size;
  };

  var isEqualOrGreaterThan = function (size) {
    if (viewPorts.indexOf(size) === -1) throw "no valid viewport name given";
    return viewPorts.indexOf(viewPortSize()) >= viewPorts.indexOf(size);
  };

  // Public API
  return {
    is: is,
    isEqualOrGreaterThan: isEqualOrGreaterThan
  }

})();
