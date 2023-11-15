import { test, expect } from 'vitest'
import { scramble } from '../Scramblies'

test('scramble', () => {
    expect(scramble('rkqodlw', 'world')).toEqual(true);
    expect(scramble('cedewaraaossoqqyt', 'codewars')).toEqual(true);
    expect(scramble('katas', 'steak')).toEqual(false);
    expect(scramble('scriptjavx', 'javascript')).toEqual(false);
    expect(scramble('scriptingjava', 'javascript')).toEqual(true);
    expect(scramble('scriptsjava', 'javascripts')).toEqual(true);
    expect(scramble('javscripts', 'javascript')).toEqual(false);
    expect(scramble('jscripts', 'javascript')).toEqual(false);
    expect(scramble('aabbcamaomsccdd', 'commas')).toEqual(true);
    expect(scramble('commas', 'commas')).toEqual(true);
    expect(scramble('sammoc', 'commas')).toEqual(true);
});
test("Large inputs test", () => {
    let s1 = "abcdefghijklmnopqrstuvwxyz".repeat(10_000);
    let s2 = "zyxcba".repeat(9_000);
    expect(scramble(s1, s2)).toBe(true);
});
