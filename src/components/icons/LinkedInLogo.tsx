import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
	className?: string;
}

const LinkedInLogo: React.FC<IconProps> = ({ className = 'w-8 h-8', ...props }) => (
	<svg
		viewBox="0 0 192 192"
		fill="none"
		className={className}
		{...props}
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect width="192" height="192" rx="36" />
		<g fill="#fff">
			<path d="M59.37 162.98h-29.83l-0.17-89.31h29.83zM43.70 61.99h-0.17c-9.75 0-16.04-6.72-16.04-15.09 0-8.57 6.49-15.06 16.41-15.06 9.92 0 16.01 6.49 16.21 15.06 0 8.37-6.32 15.09-16.41 15.09zM162.78 162.98h-30.09v-48.52c0-11.74-3.12-19.73-13.62-19.73-8.02 0-12.35 5.39-14.42 10.62-0.78 1.87-0.98 4.44-0.98 7.07v50.57h-30.23l-0.17-89.31h30.23l0.17 12.61c3.87-5.97 10.30-14.42 25.70-14.42 19.10 0 33.38 12.46 33.38 39.26v51.87z" />
		</g>
	</svg>
);

export default LinkedInLogo;
