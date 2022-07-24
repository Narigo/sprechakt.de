import head from '.';

describe('head()', () => {
	it('returns an empty list when list is empty', () => {
		const list: number[] = [];
		const result = head(list, 5);
		expect(result).toEqual([]);
	});

	it('returns all elements if count is higher than length', () => {
		const list = [0, 1, 2, 3];
		const result = head(list, 5);
		expect(result).toEqual([0, 1, 2, 3]);
	});

	it('returns only the first 2 elements if count is set to 2', () => {
		const list = [0, 1, 2, 3];
		const result = head(list, 2);
		expect(result).toEqual([0, 1]);
	});

	it('returns only the first element if count is not set', () => {
		const list = [0, 1, 2, 3];
		const result = head(list);
		expect(result).toEqual([0]);
	});
});
