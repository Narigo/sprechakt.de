import actDb from '$data/acts.json';
import type { SprechAktAct } from '$lib/types';

export function getActNameById(id: string): string {
	const act = actDb.find((act) => act.id === id);
	return act?.name ?? '(Person nicht gefunden)';
}

export function getActById(id: string): SprechAktAct | undefined {
	const act = (actDb as SprechAktAct[]).find((act) => act.id === id);
	return act;
}
