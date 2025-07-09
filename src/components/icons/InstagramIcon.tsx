import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
	className?: string;
}

const InstagramLogo: React.FC<IconProps> = ({ className = 'w-8 h-8', ...props }) => (
	<svg
		viewBox="0 0 192 192"
		fill="none"
		className={className}
		{...props}
		xmlns="http://www.w3.org/2000/svg"
	>
		{/* Background */}
		<rect width="192" height="192" rx="36" fill="currentColor" />
		{/* Camera outline */}
		<rect
			x="52"
			y="52"
			width="88"
			height="88"
			rx="28"
			stroke="#fff"
			strokeWidth="8"
			fill="none"
		/>
		{/* Lens */}
		<circle cx="96" cy="96" r="24" stroke="#fff" strokeWidth="8" fill="none" />
		{/* Top-right dot */}
		<circle cx="128" cy="72" r="6" fill="#fff" />
	</svg>
);

export default InstagramLogo;
