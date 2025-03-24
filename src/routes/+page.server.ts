import type { PageServerLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
    const response = await fetch("/api/jobs?page=1")
    const json = await response.json();

	return {
		title: 'Job i Netto - Ledige stillinger',
        metaDescription: "Find ledige stillinger hos Netto supermarkeder i hele Danmark. Søg job som butiksassistent, souschef og andre stillinger. Ansøg direkte online og start din karriere hos Netto i dag.",
        jobs: json.jobs,
		items: json.pages,
		page: 1,
	};
};