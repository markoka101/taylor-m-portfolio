import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../../Header';
import Navbar from '../../Navigation/Navbar';

const pageVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 }
};
export default function RootLayout() {
	const location = useLocation();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const topRoute = location.pathname.split('/')[1] || '';
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
				<AnimatePresence mode="wait">
					<motion.div
						key={topRoute}
						variants={pageVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
						transition={{ duration: 0.3, ease: 'easeInOut' }}
						className="flex w-full justify-center"
					>
						<Outlet />
					</motion.div>
				</AnimatePresence>
			</div>
		</main>
	);
}
