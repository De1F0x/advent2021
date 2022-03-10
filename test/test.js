const greater = require("../problems/problem1/sonar");
const greater2 = require("../problems/problem1/sonar2");
const dive1 = require("../problems/problem2/dive");
const dive2 = require("../problems/problem2/dive2");

describe("testing sonar", () => {
    test("should be 7", () => {
        const expected = 7;
        const result = greater("test.txt");
        expect(result).toBe(expected);
    })
    test("should be 1451", () => {
        const expected = 1451;
        const result = greater("input.txt");
        expect(result).toBe(expected);
    })
    test("should be 5", () => {
        const expected = 5;
        const result = greater2("test.txt", 3);
        expect(result).toBe(expected);
    })
    test("should be 1395", () => {
        const expected = 1395;
        const result = greater2("input.txt", 3);
        expect(result).toBe(expected);
    })
    test("should be 900", () => {
        const expected = 1728414;
        const result = dive1("input.txt");
        expect(result).toBe(expected);
    })
    test("should be 1765720035", () => {
        const expected = 1765720035;
        const result = dive2("input.txt");
        expect(result).toBe(expected);
    })
})