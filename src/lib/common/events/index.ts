import head from '$lib/common/head';
import type { SprechaktEvent } from '$lib/types';

export function getEventsById(dates: SprechaktEvent[]): { [id: string]: typeof dates[number] } {
	return dates.reduce((acc, event) => {
		return { ...acc, [event.id]: event };
	}, {});
}

export function getNextEvents(dates: SprechaktEvent[]) {
	return head(dates, 5);
}
