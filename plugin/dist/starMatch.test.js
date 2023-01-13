"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const starMatch_1 = require("./starMatch");
describe('starMatch', () => {
    it.each([
        ['foo', 'foo'],
        ['fo*', 'foo'],
        ['*oo', 'foo'],
        ['*o*', 'foo'],
        ['foo*', 'foo'],
        ['*foo', 'foo'],
        ['*foo*', 'foo'],
        ['foo*bar', 'foobar'],
        ['fo*ar', 'foobar'],
    ])('"%s" should match "%s"', (pattern, value) => {
        expect((0, starMatch_1.starMatch)(pattern, value)).toBe(true);
    });
    it.each([
        ['foo', 'bar'],
        ['foo', 'foa'],
        ['*foo', 'foobar'],
        ['foo*', 'barfoo'],
    ])('"%s" should not match "%s"', (pattern, value) => {
        expect((0, starMatch_1.starMatch)(pattern, value)).toBe(false);
    });
});
