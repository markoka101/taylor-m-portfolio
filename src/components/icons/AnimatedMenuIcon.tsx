import { motion } from 'framer-motion';

const AnimatedMenuIcon = ({ className = '', isOpen = false, ...props }) => {
	const topVariants = {
		closed: { rotate: 0, y: 0 },
		open: { rotate: 45, y: 6 }
	};

	const middleVariants = {
		closed: { opacity: 1, scaleX: 1 },
		open: { opacity: 0, scaleX: 0 }
	};

	const bottomVariants = {
		closed: { rotate: 0, y: 0 },
		open: { rotate: -45, y: -6 }
	};

	return (
		<svg
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			xmlns="http://www.w3.org/2000/svg"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={className}
			{...props}
		>
			<motion.line
				x1="6"
				y1="10"
				x2="26"
				y2="10"
				variants={topVariants}
				initial="closed"
				animate={isOpen ? 'open' : 'closed'}
				transition={{ duration: 0.3 }}
			/>
			<motion.line
				x1="6"
				y1="16"
				x2="26"
				y2="16"
				variants={middleVariants}
				initial="closed"
				animate={isOpen ? 'open' : 'closed'}
				transition={{ duration: 0.3 }}
			/>
			<motion.line
				x1="6"
				y1="22"
				x2="26"
				y2="22"
				variants={bottomVariants}
				initial="closed"
				animate={isOpen ? 'open' : 'closed'}
				transition={{ duration: 0.3 }}
			/>
		</svg>
	);
};

export default AnimatedMenuIcon;
