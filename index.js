'use strict';

var moment = require('moment');

/**
 * returns a string element with a footer and updating year
 * @param {string} name
 * @return {string}
 */

 exports.footer = function (name) {
     return "Copyright " + moment().format('YYYY') + " " + name + " All rights reserved";
 };