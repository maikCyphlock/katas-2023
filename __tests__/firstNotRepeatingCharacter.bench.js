// Generated by CodiumAI
import { BetterSolution, MySolution } from '../firstNotRepeatingCharacter'
import { describe, it, expect, bench } from 'vitest';


bench('BetterSolution', () => {
    describe('BetterSolution Fn', () => {

        // Returns the correct character when given a string with only one unique character
        it('should return the correct character when given a string with only one unique character', () => {
            const result = BetterSolution('aaaaa');
            expect(result).toEqual('_');
        });

        // Returns the correct character when given a string with multiple unique characters
        it('should return the correct character when given a string with multiple unique characters', () => {
            const result = BetterSolution('abcde');
            expect(result).toEqual('a');
        });

        // Returns the correct character when given a string with multiple repeated characters
        it('should return the correct character when given a string with multiple repeated characters', () => {
            const result = BetterSolution('aabbbccc');
            expect(result).toEqual('_');
        });

        // Returns the correct character when given a string with special characters
        it('should return the correct character when given a string with special characters', () => {
            const result = BetterSolution('!@#$%^&*()');
            expect(result).toEqual('!');
        });

        // Returns the correct character when given a string with uppercase and lowercase characters
        it('should return the correct character when given a string with uppercase and lowercase characters', () => {
            const result = BetterSolution('aAAbBcC');
            expect(result).toEqual('a');
        });

        // Returns the correct character when given a string with non-alphabetic characters
        it('should return the correct character when given a string with non-alphabetic characters', () => {
            const result = BetterSolution('123!@#');
            expect(result).toEqual('1');
        });


    });
})

bench('MySolution', () => {
    describe('MySolution Fn', () => {

        // Returns the correct character when given a string with only one unique character
        it('should return the correct character when given a string with only one unique character', () => {
            const result = MySolution('aaaaa');
            expect(result).toEqual('_');
        });

        // Returns the correct character when given a string with multiple unique characters
        it('should return the correct character when given a string with multiple unique characters', () => {
            const result = MySolution('abcde');
            expect(result).toEqual('a');
        });

        // Returns the correct character when given a string with multiple repeated characters
        it('should return the correct character when given a string with multiple repeated characters', () => {
            const result = MySolution('aabbbccc');
            expect(result).toEqual('_');
        });

        // Returns the correct character when given a string with special characters
        it('should return the correct character when given a string with special characters', () => {
            const result = MySolution('!@#$%^&*()');
            expect(result).toEqual('!');
        });

        // Returns the correct character when given a string with uppercase and lowercase characters
        it('should return the correct character when given a string with uppercase and lowercase characters', () => {
            const result = MySolution('aAAbBcC');
            expect(result).toEqual('a');
        });

        // Returns the correct character when given a string with non-alphabetic characters
        it('should return the correct character when given a string with non-alphabetic characters', () => {
            const result = MySolution('123!@#');
            expect(result).toEqual('1');
        });


    });

})