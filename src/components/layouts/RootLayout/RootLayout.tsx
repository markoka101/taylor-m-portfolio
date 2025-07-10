import { AnimatePresence, motion } from 'framer-motion';
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
			<div className="relative z-10 flex w-screen">
				{/* Removed AnimatePresence to prevent double fade in */}
				<AnimatePresence mode="wait">
					<motion.main
						key={location.pathname.split('/')[1] || 'root'}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.25 }}
					>
						<Outlet />
					</motion.main>
				</AnimatePresence>
				{/* <div className="flex w-full justify-center">
					<Outlet />
				</div> */}
			</div>
		</main>
	);
}
