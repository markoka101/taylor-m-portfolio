import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../utils/constants/routes';
import { ArrowDownIcon } from '../icons';

function DesktopNav() {
	//dropdown state
	const [isPortfolioOpen, setIsPortfolioOpen] = useState<boolean>(false);

	//styles for the regular navbar buttons
	const linkStyles =
		'px-4 focus:outline-none  transition-all duration-300  hover:bg-white/40 py-[.4rem] rounded-xs';
	const activeStyles = `${linkStyles} bg-white/65`;

	//styles for the dropdown buttons
	const dropdownLinkStyles =
		'px-4 focus:outline-none transition-all duration-300 bg-white/65 hover:bg-white/40  py-[.3rem] rounded-xs';
	const dropdownActiveStyles = `${dropdownLinkStyles} !bg-gray-300`;

	//array with data for dropdown buttons
	const portfolioLinks = [
		{ route: ROUTES.PORTFOLIO.PROJECTS, text: 'Projects' },
		{ route: ROUTES.PORTFOLIO.COURSES, text: 'Courses' },
		{ route: ROUTES.PORTFOLIO.OTHER, text: 'Other' }
	];
	return (
		<nav
			className="animate-fade-in top-0 hidden h-8 w-screen flex-col justify-center lg:flex"
			role="navigation"
			aria-label="Desktop Navigation"
		>
			{/* Map array with button info to list. Use NavLink for keeping track of current route */}
			<ul className="font-inter top-0 hidden w-full flex-row justify-end gap-x-2 px-12 text-[.9rem] font-semibold lg:flex">
				<li>
					<NavLink
						to={ROUTES.HOME}
						className={({ isActive }) => (isActive ? activeStyles : linkStyles)}
					>
						Home
					</NavLink>
				</li>
				<li
					className="relative"
					onMouseEnter={() => setIsPortfolioOpen(true)}
					onMouseLeave={() => setIsPortfolioOpen(false)}
				>
					<NavLink
						to={ROUTES.PORTFOLIO.ROOT}
						className={({ isActive }) => {
							const baseStyles = isActive ? activeStyles : linkStyles;
							// Add hover state when dropdown is open
							const hoverState = isPortfolioOpen ? 'bg-white/40' : '';
							return `${baseStyles} ${hoverState}`;
						}}
					>
						<span className="relative pr-5">
							Portfolio
							<ArrowDownIcon
								className="absolute top-1/2 right-0 h-4 w-4 -translate-y-1/2"
								isOpen={isPortfolioOpen}
							/>
						</span>
					</NavLink>

					{/* dropdown menu */}
					<ul
						className={`absolute top-full left-0 z-50 w-[120px] space-y-1 overflow-hidden pt-2 transition-all duration-300 ease-in-out ${
							isPortfolioOpen
								? 'max-h-96 translate-y-0 opacity-100'
								: 'max-h-0 -translate-y-4 opacity-0'
						}`}
					>
						{portfolioLinks.map((link) => (
							<li key={link.text}>
								<NavLink
									to={link.route}
									className={({ isActive }) =>
										isActive ? dropdownActiveStyles : dropdownLinkStyles
									}
								>
									{link.text}
								</NavLink>
							</li>
						))}
					</ul>
				</li>
				<li>
					<NavLink
						to={ROUTES.CONTACT}
						className={({ isActive }) => (isActive ? activeStyles : linkStyles)}
					>
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default DesktopNav;
