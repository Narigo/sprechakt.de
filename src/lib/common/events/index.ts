import head from '$lib/common/head';
import type { SprechaktEvent } from '$lib/types';

export function getEventsById(events: SprechaktEvent[]): { [id: string]: typeof events[number] } {
	return events.reduce((acc, event) => {
		return { ...acc, [event.id]: event };
	}, {});
}

export function getNextEvents(events: SprechaktEvent[]) {
	return head(events, 5);
}
