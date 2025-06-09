import { calculatePasswordStrength } from '../src/password-function';

describe('Calculate Password Strengh', () => {
    test('Returns Very Weak for short and simple passwords', () => {
        expect(calculatePasswordStrength('123')).toBe('Very Weak');
        expect(calculatePasswordStrength('abcdef')).toBe('Very Weak');
    });

    test('Returns very weak with empty field', () =>{
        expect(calculatePasswordStrength('')).toBe('Very Weak');
    })

    test('Returns Weak when password is long, but uses numbers and/or letters only', () => {
        expect(calculatePasswordStrength('abcdefghijkl')).toBe('Weak');
        expect(calculatePasswordStrength('123456789012')).toBe('Weak');
        expect(calculatePasswordStrength('abc12345')).toBe('Weak');
    });

    test('Returns Weak when password has 7 numbers and upper-, lowercase letters', () => {
        expect(calculatePasswordStrength('Abc1234')).toBe('Weak');
    });

    test('Returns moderate for password with 8 numbers and upper-, lowercase letters', () =>{
        expect(calculatePasswordStrength('Abc1234a')).toBe('Moderate');
    });

    test('Returns moderate for password with upper-, lowercase and numbers, but without special characters', () =>{
        expect(calculatePasswordStrength('Abcde12345')).toBe('Moderate');
    });

    test('Returns strong for password with 12 or more different characters', () =>{
        expect(calculatePasswordStrength('Abc123cbA!%*')).toBe('Strong');
        expect(calculatePasswordStrength('1Abc*#!Abc237')).toBe('Strong');
    });

    test('Returns moderate for password with 12 numbers and letters only', () =>{
        expect(calculatePasswordStrength('Abcde123456')).toBe('Moderate')
    });

})