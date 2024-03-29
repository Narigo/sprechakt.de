import dataActs from '$data/acts.json';
import type { SprechAktAct } from '$lib/types';
import type { PageServerLoad } from './$types';

const acts = (dataActs as SprechAktAct[]).filter(
	(act) => act.userTypes?.includes('poet') || act.userTypes?.includes('feature')
);
acts.sort((a, b) => {
	if (a.name < b.name) {
		return -1;
	}
	if (a.name === b.name) {
		return 0;
	}
	return 1;
});

export const load: PageServerLoad = async () => {
	return { acts };
};
