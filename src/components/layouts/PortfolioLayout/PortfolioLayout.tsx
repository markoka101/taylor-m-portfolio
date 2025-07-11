// import { motion } from 'framer-motion';
// import { NavLink, Outlet } from 'react-router-dom';

// export default function PortfolioLayout() {
// 	return (
// 		<div className="portfolio-container mx-auto max-w-7xl px-4 py-8">
// 			<motion.header
// 				className="portfolio-header mb-8"
// 				initial={{ opacity: 0, y: -20 }}
// 				animate={{ opacity: 1, y: 0 }}
// 				transition={{ duration: 0.6 }}
// 			>
// 				<nav className="portfolio-nav mb-8 flex justify-center space-x-6">
// 					<NavLink
// 						to="/portfolio"
// 						end
// 						className={({ isActive }) =>
// 							`rounded-lg px-4 py-2 font-medium transition-colors ${
// 								isActive
// 									? 'bg-blue-600 text-white'
// 									: 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
// 							}`
// 						}
// 					>
// 						Overview
// 					</NavLink>
// 					<NavLink
// 						to="/portfolio/courses"
// 						className={({ isActive }) =>
// 							`rounded-lg px-4 py-2 font-medium transition-colors ${
// 								isActive
// 									? 'bg-blue-600 text-white'
// 									: 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
// 							}`
// 						}
// 					>
// 						Courses
// 					</NavLink>
// 					<NavLink
// 						to="/portfolio/projects"
// 						className={({ isActive }) =>
// 							`rounded-lg px-4 py-2 font-medium transition-colors ${
// 								isActive
// 									? 'bg-blue-600 text-white'
// 									: 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
// 							}`
// 						}
// 					>
// 						Projects
// 					</NavLink>
// 				</nav>
// 			</motion.header>

// 			<motion.div
// 				className="portfolio-content"
// 				initial={{ opacity: 0 }}
// 				animate={{ opacity: 1 }}
// 				transition={{ duration: 0.8, delay: 0.2 }}
// 			>
// 				<Outlet />
// 			</motion.div>
// 		</div>
// 	);
// }

import { NavLink, Outlet } from 'react-router-dom';

//layout mostly used to handle dynamic nature of portfolio
export default function PortfolioLayout() {
	return (
		<div className="portfolio-container mx-auto max-w-7xl px-4 py-8">
			<header className="mb-8">
				<nav className="mb-8 flex justify-center space-x-6">
					<NavLink
						to="/portfolio"
						end
						className={({ isActive }) =>
							`rounded-lg px-4 py-2 font-medium transition-colors ${
								isActive
									? 'bg-green-600 text-white'
									: 'text-gray-600 hover:bg-green-50 hover:text-green-600'
							}`
						}
					>
						Overview
					</NavLink>
					<NavLink
						to="/portfolio/courses"
						className={({ isActive }) =>
							`rounded-lg px-4 py-2 font-medium transition-colors ${
								isActive
									? 'bg-green-600 text-white'
									: 'text-gray-600 hover:bg-green-50 hover:text-green-600'
							}`
						}
					>
						Courses
					</NavLink>
					<NavLink
						to="/portfolio/projects"
						className={({ isActive }) =>
							`rounded-lg px-4 py-2 font-medium transition-colors ${
								isActive
									? 'bg-green-600 text-white'
									: 'text-gray-600 hover:bg-green-50 hover:text-green-600'
							}`
						}
					>
						Projects
					</NavLink>
				</nav>
			</header>

			{/* AnimatePresence moved here for page-specific transitions */}

			<Outlet />
		</div>
	);
}
