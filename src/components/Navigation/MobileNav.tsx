import type { NavbarProps } from './Navbar';

function MobileNav({ isOpen, setIsOpen }: NavbarProps) {
	return (
		<nav
			className={`bg-accent fixed top-0 right-0 z-40 h-screen w-[75%] transform overflow-y-auto pt-2 pl-6 text-white transition-transform duration-500 ease-in-out sm:w-[350px] md:w-[400px] ${
				!isOpen ? 'translate-x-full' : 'translate-x-0'
			}`}
			aria-label="Mobile Navigation"
		></nav>
	);
}

export default MobileNav;
