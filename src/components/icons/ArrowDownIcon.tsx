import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const ArrowDownIcon = ({ className = '', isOpen = false, size = 'default', ...props }) => {
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
			className={twMerge(
				clsx('transition-transform duration-200', {
					'rotate-180': isOpen,
					'h-4 w-4': size === 'small',
					'h-6 w-6': size === 'large',
					'h-5 w-5': size === 'default'
				}),
				className
			)}
			{...props}
		>
			<polyline points="8,12 16,20 24,12" />
		</svg>
	);
};

export default ArrowDownIcon;
