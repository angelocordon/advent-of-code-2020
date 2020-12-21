import { countValidPasswords, passwordIsValid } from './index';

describe('Day 2', () => {
    describe('passwordIsValid', () => {
        describe('when a letter occurs only once between the min and max positions', () => {
            const password = {
                min: 1,
                max: 3,
                letter: 'a',
                string: 'abcde'
            }

            it('returns valid', () => {
                expect(passwordIsValid(password)).toBe(true);
            })
        });
    });

    describe('when a letter occurs more than once between the min and max positions', () => {
        const password = {
            min: 1,
            max: 3,
            letter: 'b',
            string: 'cdefg'
        }

        it('returns false', () => {
            expect(passwordIsValid(password)).toBe(false);
        });
    });

    describe('countValidPasswords', () => {
        const passwords = [
            { min: 1, max: 3, letter: 'a', string: 'abcde' },
            { min: 1, max: 3, letter: 'b', string: 'cdefg' },
            { min: 2, max: 9, letter: 'c', string: 'ccccccccc ' }
        ]
        
        it('returns a value of valid passwords', () => {
            expect(countValidPasswords(passwords)).toEqual(1);
        });
    });
});
