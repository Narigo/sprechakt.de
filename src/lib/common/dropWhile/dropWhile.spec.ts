import dropWhile from '.';

describe('dropWhile()', () => {
	it('returns an empty list if fed an empty list', () => {
		const result = dropWhile([], () => false);
		expect(result).toEqual([]);
	});

	it('returns whole list if always false', () => {
		const result = dropWhile([1, 2, 3], () => false);
		expect(result).toEqual([1, 2, 3]);
	});

	it('returns empty list if always true', () => {
		const result = dropWhile([1, 2, 3], () => true);
		expect(result).toEqual([]);
	});

	it('returns the rest of the list after predicate became false once', () => {
		const result = dropWhile([1, 2, 3, 4], (element) => element < 3);
		expect(result).toEqual([3, 4]);
	});

	it('does not filter after predicate became false once', () => {
		const result = dropWhile([1, 3, 1, 4], (element) => element < 3);
		expect(result).toEqual([3, 1, 4]);
	});

	it('works with other elements', () => {
		const result = dropWhile(
			['hello', { a: 1 }, 1, { b: 2 }, 'world', 4],
			(element) => element !== 1
		);
		expect(result).toEqual([1, { b: 2 }, 'world', 4]);
	});
});
