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
					key={location.pathname.split('/')[1]}
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
