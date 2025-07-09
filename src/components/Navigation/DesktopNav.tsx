import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../utils/constants/routes';

function DesktopNav() {
	const linkStyles =
		'px-4 ml-2 focus:outline-none  transition-all duration-300  hover:bg-white/40 py-[.4rem] rounded-xs';
	const activeStyles = `${linkStyles} bg-white/65`;

	//array with data for buttons
	const links = [
		{ route: ROUTES.HOME, text: 'About' },
		{ route: ROUTES.PORTFOLIO.ROOT, text: 'Portfolio' },
		{ route: ROUTES.PORTFOLIO.PROJECTS, text: 'Projects' },
		{ route: ROUTES.PORTFOLIO.COURSES, text: 'Courses' },
		{ route: ROUTES.CONTACT, text: 'Contact' }
	];
	return (
		<nav
			className="top-0 hidden h-8 w-screen flex-col justify-center lg:flex"
			role="navigation"
			aria-label="Desktop Navigation"
		>
			{/* Map array with button info to list. Use NavLink for keeping track of current route */}
			<ul className="font-inter top-0 hidden w-full flex-row justify-end px-12 text-[.9rem] font-semibold lg:flex">
				{links.map((k) => {
					return (
						<li key={k.text}>
							<NavLink
								to={k.route}
								className={({ isActive }) => (isActive ? activeStyles : linkStyles)}
							>
								{k.text}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default DesktopNav;
