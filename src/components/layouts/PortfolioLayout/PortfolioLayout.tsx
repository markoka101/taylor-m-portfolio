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

			<Outlet />
		</div>
	);
}
