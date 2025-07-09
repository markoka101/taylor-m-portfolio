// import { motion } from 'framer-motion';
// import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

// export default function ProjectLayout() {
// 	const { projectId } = useParams();
// 	const location = useLocation();

// 	// Generate breadcrumb items based on current route
// 	const generateBreadcrumbs = () => {
// 		const pathSegments = location.pathname.split('/').filter(Boolean);
// 		const breadcrumbs = [];

// 		// Always start with home
// 		breadcrumbs.push({ label: 'Home', path: '/' });

// 		// Add Portfolio
// 		if (pathSegments.includes('portfolio')) {
// 			breadcrumbs.push({ label: 'Portfolio', path: '/portfolio' });
// 		}

// 		// Add Projects
// 		if (pathSegments.includes('projects')) {
// 			breadcrumbs.push({ label: 'Projects', path: '/portfolio/projects' });
// 		}

// 		// Add specific project if we have a projectId
// 		if (projectId) {
// 			// Format project ID for display (replace hyphens with spaces, capitalize)
// 			const projectTitle = projectId
// 				.split('-')
// 				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
// 				.join(' ');

// 			breadcrumbs.push({
// 				label: projectTitle,
// 				path: `/portfolio/projects/${projectId}`,
// 				isActive: true
// 			});
// 		}

// 		return breadcrumbs;
// 	};

// 	const breadcrumbs = generateBreadcrumbs();

// 	return (
// 		<div className="project-layout">
// 			<div className="container-max px-4">
// 				{/* Breadcrumb Navigation */}
// 				<motion.nav
// 					className="breadcrumb-nav mb-6 py-4"
// 					initial={{ opacity: 0, x: -20 }}
// 					animate={{ opacity: 1, x: 0 }}
// 					transition={{ duration: 0.5 }}
// 					aria-label="Breadcrumb navigation"
// 				>
// 					<ol className="flex items-center space-x-2 text-sm">
// 						{breadcrumbs.map((crumb, index) => (
// 							<li key={crumb.path} className="flex items-center">
// 								{index > 0 && (
// 									<span className="mx-2 text-gray-400" aria-hidden="true">
// 										/
// 									</span>
// 								)}

// 								{crumb.isActive ? (
// 									<span className="font-medium text-gray-900" aria-current="page">
// 										{crumb.label}
// 									</span>
// 								) : (
// 									<Link
// 										to={crumb.path}
// 										className="text-green-600 transition-colors duration-200 hover:text-green-700"
// 									>
// 										{crumb.label}
// 									</Link>
// 								)}
// 							</li>
// 						))}
// 					</ol>
// 				</motion.nav>

// 				{/* Back to Projects Link - Alternative navigation */}
// 				<motion.div
// 					className="back-link mb-6"
// 					initial={{ opacity: 0, x: -20 }}
// 					animate={{ opacity: 1, x: 0 }}
// 					transition={{ duration: 0.5, delay: 0.1 }}
// 				>
// 					<Link
// 						to="/portfolio/projects"
// 						className="group inline-flex items-center text-green-600 transition-colors duration-200 hover:text-green-700"
// 					>
// 						<svg
// 							className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
// 							fill="none"
// 							stroke="currentColor"
// 							viewBox="0 0 24 24"
// 						>
// 							<path
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 								strokeWidth={2}
// 								d="M15 19l-7-7 7-7"
// 							/>
// 						</svg>
// 						Back to Projects
// 					</Link>
// 				</motion.div>

// 				{/* Project Content */}
// 				<motion.div
// 					className="project-content"
// 					initial={{ opacity: 0, y: 20 }}
// 					animate={{ opacity: 1, y: 0 }}
// 					transition={{ duration: 0.6, delay: 0.2 }}
// 				>
// 					<Outlet />
// 				</motion.div>
// 			</div>
// 		</div>
// 	);
// }

import { motion } from 'framer-motion';
import { Outlet, useLocation, useParams } from 'react-router-dom';

//This layout is to handle dynamic nature of projects on website because homie went crazy on wix
export default function ProjectLayout() {
	const { projectId } = useParams();
	const location = useLocation();

	// Breadcrumb generation logic bb
	const generateBreadcrumbs = () => {
		const pathSegments = location.pathname.split('/').filter(Boolean);
		const breadcrumbs = [];

		breadcrumbs.push({ label: 'Home', path: '/' });

		if (pathSegments.includes('portfolio')) {
			breadcrumbs.push({ label: 'Portfolio', path: '/portfolio' });
		}

		if (pathSegments.includes('projects')) {
			breadcrumbs.push({ label: 'Projects', path: '/portfolio/projects' });
		}

		if (projectId) {
			const projectTitle = projectId
				.split('-')
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(' ');

			breadcrumbs.push({
				label: projectTitle,
				path: `/portfolio/projects/${projectId}`,
				isActive: true
			});
		}

		return breadcrumbs;
	};

	const breadcrumbs = generateBreadcrumbs();

	return (
		<div className="project-layout">
			<div className="container-max px-4">
				<motion.nav
					className="breadcrumb-nav mb-6 py-4"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					aria-label="Breadcrumb navigation"
				></motion.nav>

				{/* Removed motion wrapper to prevent conflicts */}
				<div className="project-content">
					<Outlet />
				</div>
			</div>
		</div>
	);
}
