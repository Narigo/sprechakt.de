import head from '$lib/common/head';
import type { SprechaktEvent } from '$lib/types';
import dropWhile from '../dropWhile';

export function getEventsById(events: SprechaktEvent[]): { [id: string]: typeof events[number] } {
	return events.reduce((acc, event) => {
		return { ...acc, [event.id]: event };
	}, {});
}

export function getNextEvents(events: SprechaktEvent[]) {
	return head(dropWhile(events, isPastEvent), 5);
}

export function getDate(event: SprechaktEvent): string {
	const d = new Date(event.date);
	return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
}

export function isPastEvent(event: SprechaktEvent): boolean {
	const startOfToday = new Date();
	startOfToday.setHours(0);
	startOfToday.setMinutes(0);
	startOfToday.setSeconds(0);
	startOfToday.setMilliseconds(0);

	return new Date(event.date) <= startOfToday;
}
