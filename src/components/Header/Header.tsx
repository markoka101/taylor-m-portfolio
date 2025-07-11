import { Link } from 'react-router-dom';
import logo from '../../assets/images/logos/taylor-header-logo.avif';

//Depends on how I go about navbar, especially mobile
export interface HeaderProps {
	isMenuOpen?: boolean;
}

export default function Header() {
	return (
		<header className="animate-fade-in top-0 flex h-28 w-screen flex-col justify-start pt-6 lg:px-12">
			<div className="flex items-center text-2xl font-bold text-green-600">
				<img src={logo} alt="Taylor Morales logo" className="h-full w-auto" />
				<Link to="/" className="font-marmelad pl-4 text-3xl font-light text-white">
					Taylor Morales
				</Link>
			</div>
			<hr className="text-text/40 mt-5 w-full rounded" />
		</header>
	);
}
