import dataActs from '$data/acts.json';
import type { SprechAktAct } from '$lib/types';
import type { PageServerLoad } from './$types';

const acts = (dataActs as SprechAktAct[]).filter(
	(act) => act.userTypes?.includes('poet') || act.userTypes?.includes('feature')
);

export const load: PageServerLoad = async () => {
	return { acts };
};
