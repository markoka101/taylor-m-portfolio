import type React from 'react';

import AnimatedMenuIcon from '../icons/AnimatedMenuIcon';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export type NavbarProps = Readonly<{
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>;

//wrapper for both navbars for organization
function Navbar({ isOpen, setIsOpen }: NavbarProps) {
	return (
		<nav>
			<DesktopNav />
			<MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
			<button
				className="fixed top-4 right-4 z-40 cursor-pointer rounded bg-transparent p-2 lg:hidden"
				aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
				onClick={() => setIsOpen(!isOpen)}
				type="button"
			>
				<AnimatedMenuIcon className="animate-menuicon text-text m-0" isOpen={isOpen} />
			</button>
		</nav>
	);
}

export default Navbar;
