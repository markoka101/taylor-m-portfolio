import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logos/taylor-header-logo.avif';

//Depends on how I go about navbar, especially mobile
export interface HeaderProps {
	isMenuOpen?: boolean;
}

//50/50 on removing depending on added complexity
const logoVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 }
};

export default function Header() {
	return (
		<header className="top-0 flex h-28 w-screen flex-col justify-start pt-6 lg:px-12">
			{/* fade in only for logo and name in header */}
			<motion.div
				className="flex items-center text-2xl font-bold text-green-600"
				variants={logoVariants}
				initial="hidden"
				animate="visible"
				transition={{ duration: 0.6 }}
			>
				<img src={logo} alt="Taylor Morales logo" className="h-full w-auto" />
				<Link to="/" className="font-marmelad pl-4 text-3xl font-light text-white">
					Taylor Morales
				</Link>
			</motion.div>
			<hr className="text-text/40 mt-5 w-full rounded" />
		</header>
	);
}
