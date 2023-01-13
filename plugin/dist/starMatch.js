"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.starMatch = void 0;
const escapeRegExp_1 = require("./escapeRegExp");
function starMatch(pattern, value) {
    const regexp = pattern.split('*').map(escapeRegExp_1.escapeRegExp).join('.*');
    return new RegExp(`^${regexp}$`).test(value);
}
exports.starMatch = starMatch;
