import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../Header';
import Navbar from '../../Navigation/Navbar';

export default function RootLayout() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<main className="relative min-h-screen w-full max-w-full overflow-x-hidden">
			<Header />
			<Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
			{isOpen && (
				<button
					type="button"
					className="bg-opacity-30 fixed inset-0 z-30 bg-black/30"
					aria-label="Close menu overlay"
					onClick={() => setIsOpen(false)}
					tabIndex={0}
					style={{ outline: 'none', border: 'none', padding: 0, margin: 0 }}
				/>
			)}

			<div className="page-container flex w-full justify-center">
				<Outlet />
			</div>
		</main>
	);
}
