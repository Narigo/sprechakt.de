import takeWhile from '.';

describe('takeWhile()', () => {
	it('returns an empty list if fed an empty list', () => {
		const result = takeWhile([], () => true);
		expect(result).toEqual([]);
	});

	it('returns empty list if always false', () => {
		const result = takeWhile([1, 2, 3], () => false);
		expect(result).toEqual([]);
	});

	it('returns full list if always true', () => {
		const result = takeWhile([1, 2, 3], () => true);
		expect(result).toEqual([1, 2, 3]);
	});

	it('returns the beginning of the list after predicate became false once', () => {
		const result = takeWhile([1, 2, 3, 4], (element) => element < 3);
		expect(result).toEqual([1, 2]);
	});

	it('does not care after predicate became false once', () => {
		const result = takeWhile([1, 2, 3, 1, 2, 4], (element) => element < 3);
		expect(result).toEqual([1, 2]);
	});

	it('works with other elements', () => {
		const result = takeWhile(
			['hello', { a: 1 }, 1, { b: 2 }, 'world', 4],
			(element) => element !== 1
		);
		expect(result).toEqual(['hello', { a: 1 }]);
	});
});
