// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Bcryptjs = require("bcryptjs");

function deNodify(callback, err, result) {
  if (err == null) {
    return Curry._1(callback, /* `Ok */[
                17724,
                result
              ]);
  } else {
    return Curry._1(callback, /* `Error */[
                106380200,
                err
              ]);
  }
}

function genSalt(input, callback) {
  Bcryptjs.genSalt(input, (function (param, param$1) {
          return deNodify(callback, param, param$1);
        }));
  return /* () */0;
}

function hash(input, salt, callback) {
  Bcryptjs.hash(input, salt[1], (function (param, param$1) {
          return deNodify(callback, param, param$1);
        }));
  return /* () */0;
}

function compare(input, hash, callback) {
  Bcryptjs.compare(input, hash, (function (param, param$1) {
          return deNodify(callback, param, param$1);
        }));
  return /* () */0;
}

var Promise = /* module */[];

exports.deNodify = deNodify;
exports.genSalt = genSalt;
exports.hash = hash;
exports.compare = compare;
exports.Promise = Promise;
/* bcryptjs Not a pure module */
