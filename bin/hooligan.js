/* jshint node:true */
'use strict';

/**
 * Functional way of not having to type
 * `if (someValue)`.
 * Trying to get my hands dirty with functional programming
 * in javascript.
 * @param {String|Object|boolean|Number} x
 * @returns {boolean}
 */
function existy(x) {
  return x != null;
}

module.exports = {
  existy: existy
};
