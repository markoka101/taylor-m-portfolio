import type { NavbarProps } from './Navbar';

function MobileNav({ isOpen, setIsOpen }: NavbarProps) {
	return (
		<nav
			className={`bg-accent fixed top-0 right-0 z-40 h-screen w-screen transform overflow-y-auto pt-2 pl-6 text-white transition-all duration-1000 ease-in-out lg:hidden ${
				!isOpen ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'
			}`}
			aria-label="Mobile Navigation"
		></nav>
	);
}

export default MobileNav;
