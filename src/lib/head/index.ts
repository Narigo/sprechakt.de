export default function head<T>(list: T[], count?: number): T[] {
	const result = [];
	const maxCount = Math.min(count ?? 1, list.length);
	for (let i = 0; i < maxCount; i++) {
		result.push(list[i]);
	}
	return result;
}
