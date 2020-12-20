import { findDayOneAnswer, findTargetNumbers, multiplyNumbers } from './index'

describe('Day 1', () => {
	const list = [
		1721,
		979,
		366,
		299,
		675,
		1456
		];

	describe('findTargetNumbers', () => {
		it('returns an array of three numbers equal to 2020', () => {
			expect(findTargetNumbers(list)).toEqual([979, 366, 675]);
		});        
	});

	describe('multiplyNumbers', () => {
	it('multiplies numbers together', () => {
			expect(multiplyNumbers([979, 366, 675])).toEqual(241861950);
		});
	});

	describe('findDayOneAnswer', () => {
		it('returns the correct answer for day one', () => {
			expect(findDayOneAnswer(list)).toEqual(241861950);
		})
	});
});
