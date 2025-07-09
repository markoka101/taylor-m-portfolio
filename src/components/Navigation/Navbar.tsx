import type React from 'react';

import MenuIcon from '../icons/MenuIcon';
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
				aria-label="Open mobile menu"
				onClick={() => setIsOpen(!isOpen)}
				type="button"
			>
				<MenuIcon className={`animate-menuicon text-text m-0`} />
			</button>
		</nav>
	);
}

export default Navbar;
