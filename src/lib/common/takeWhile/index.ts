export default function takeWhile<T>(array: T[], predicate: (element: T) => boolean): T[] {
	let i = 0;
	while (i < array.length && predicate(array[i])) {
		i++;
	}
	return array.slice(0, i);
}
