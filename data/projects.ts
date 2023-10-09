export const allProjects = [
	{
		slug: 'kanban-ivi',
		views: 2495,
		url: 'https://github.com/ivi-team/kanban-ivi',
		title: 'Kanban IVI',
		description: 'Kanban IVI is a Kanban board application for the web.',
		repository: '/vladbyk89/kanbanIVI---deployment',
		published: true,
		date: '2022-11-01',
	},
	{
		slug: 'dynamic-pricing',
		views: 362,
		url: 'https://dooiu-dynamic-pricing-frontend.vercel.app/',
		title: 'Dooiu Dynamic Pricing Frontend',
		description:
			'The Dooiu Dynamic Pricing Frontend is a web application designed to suggest charging prices for different users based on specific criteria and user profiles.',
		repository: '/vladbyk89/Dooiu-Dynamic-Pricing-frontend',
		published: true,
		date: '2022-09-01',
	},
	{
		slug: 'other',
		views: 4562,
		url: '',
		title: 'All other projects',
		description:
			'My other projects are listed below. I am always looking for new projects to contribute to my portfolio.',
		repository: '/vladbyk89/vladbyk89.github.io',
		published: true,
		date: '2022-09-22',
	},
];

export type ProjectType = (typeof allProjects)[0];
