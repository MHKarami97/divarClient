var defaultSettings = "fa";
! function (e) {
  e.fn.persiaNumber = function (u) {
    "string" == typeof u && u.length > 0 && (defaultSettings = u);
    var r = 1728;

    function t(e, u) {
      e.find("*").andSelf().contents().each(function () {
        3 === this.nodeType && "style" != this.parentNode.localName && "script" != this.parentNode.localName && (this.nodeValue = this.nodeValue.replace(this.nodeValue.match(/[0-9]*\.[0-9]+/), function (e) {
          return e.replace(/\./, ",")
        }), this.nodeValue = this.nodeValue.replace(/\d/g, function (e) {
          return String.fromCharCode(e.charCodeAt(0) + u)
        }))
      })
    }
    "ar" == u && (r = 1584), window.persiaNumberedDOM = this, t(this, r), e(document).ajaxComplete(function () {
      t(window.persiaNumberedDOM, r)
    })
  }
}(jQuery), origParseInt = parseInt, parseInt = function (e) {
  return e = e && e.toString().replace(/[\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9]/g, function (e) {
    return String.fromCharCode(e.charCodeAt(0) - 1728)
  }).replace(/[\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669]/g, function (e) {
    return String.fromCharCode(e.charCodeAt(0) - 1584)
  }).replace(/[\u066B]/g, "."), origParseInt(e)
}, origParseFloat = parseFloat, parseFloat = function (e) {
  return e = e && e.toString().replace(/[\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9]/g, function (e) {
    return String.fromCharCode(e.charCodeAt(0) - 1728)
  }).replace(/[\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669]/g, function (e) {
    return String.fromCharCode(e.charCodeAt(0) - 1584)
  }).replace(/[\u066B]/g, "."), origParseFloat(e)
};
jQuery(document).ready(function ($) {

  "use strict";
  $('.price,#price,dd,.meta figure,.blog-detail,.upgrade-table #price,.woocommerce-result-count,#blog_information,.ad_visit, .amount,.meta figure, .product_list_widget li, .page-numbers, .must_pay_alert').persiaNumber();

});
