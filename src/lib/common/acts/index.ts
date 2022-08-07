import actDb from '$data/acts.json';

export function getActNameById(id: string): string {
	const act = actDb.find((act) => act.id === id);
	return act?.name ?? '(Person nicht gefunden)';
}
