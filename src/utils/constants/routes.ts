/* 
	Keep routes and param handling in one place for
	organization, because he has 2 trillion routes
*/
export const ROUTES = {
	HOME: '/',
	ABOUT: '/about',
	CONTACT: '/contact',
	PORTFOLIO: {
		ROOT: '/portfolio',
		PROJECTS: '/portfolio/projects',
		PROJECT_DETAIL: (slug: string) => `/portfolio/projects/${slug}`,
		PROJECT_CATEGORY: (category: string) => `/portfolio/projects/category/${category}`,
		COURSES: '/portfolio/courses',
		COURSE_DETAIL: (slug: string) => `/portfolio/courses/${slug}`,
		COURSE_TYPE: (type: string) => `/portfolio/courses/type/${type}`,
		OTHER: '/portfolio/other'
	}
} as const;

export const ROUTE_PARAMS = {
	PROJECT_SLUG: 'projectSlug',
	COURSE_SLUG: 'courseSlug',
	CATEGORY_SLUG: 'categorySlug',
	COURSE_TYPE: 'courseType'
} as const;

// Navigation items for consistent routing
export const NAVIGATION_ITEMS = [
	{
		label: 'Home',
		path: ROUTES.HOME,
		exact: true
	},
	{
		label: 'About',
		path: ROUTES.ABOUT
	},
	{
		label: 'Portfolio',
		path: ROUTES.PORTFOLIO.ROOT,
		children: [
			{
				label: 'Overview',
				path: ROUTES.PORTFOLIO.ROOT,
				exact: true
			},
			{
				label: 'Projects',
				path: ROUTES.PORTFOLIO.PROJECTS
			},
			{
				label: 'Courses',
				path: ROUTES.PORTFOLIO.COURSES
			},
			{
				label: 'Other',
				path: ROUTES.PORTFOLIO.OTHER
			}
		]
	},
	{
		label: 'Contact',
		path: ROUTES.CONTACT
	}
] as const;
