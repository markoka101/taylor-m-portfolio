import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
	className?: string;
}

const TikTokLogo: React.FC<IconProps> = ({ className = 'w-8 h-8', ...props }) => (
	<svg
		viewBox="0 0 48 48"
		fill="none"
		className={className}
		{...props}
		xmlns="http://www.w3.org/2000/svg"
	>
		<g>
			<path
				d="M34.5 8.5c.6 3.2 2.9 5.7 6 6.2v6.1c-2.3.2-4.6-.2-6.8-1.2v10.1c0 7.6-5.7 13.8-13.3 14.2-7.8.5-14.4-6.1-13.9-14 .4-6.2 5.4-11.2 11.6-11.6 1.8-.1 3.5.2 5.1.8v6.4c-.7-.2-1.4-.3-2.2-.3-3.1 0-5.7 2.6-5.7 5.7s2.6 5.7 5.7 5.7c3.2 0 5.7-2.6 5.7-5.7V4.5h6.8Z"
				fill="#25F4EE"
			/>
			<path
				d="M34.5 8.5c.6 3.2 2.9 5.7 6 6.2v6.1c-2.3.2-4.6-.2-6.8-1.2v10.1c0 7.6-5.7 13.8-13.3 14.2v-6.6c3.2-.4 5.7-3.1 5.7-6.4V4.5h6.8Z"
				fill="#FE2C55"
			/>
			<path
				d="M34.5 4.5v4c.6 3.2 2.9 5.7 6 6.2v4.1c-3.1-.5-5.4-3-6-6.2v-8.1h-6.8v27.8c0 3.3-2.5 6-5.7 6.4v6.6c7.6-.4 13.3-6.6 13.3-14.2V13.6c2.2 1 4.5 1.4 6.8 1.2v-6.1c-3.1-.5-5.4-3-6-6.2Z"
				fill="#fff"
			/>
		</g>
	</svg>
);

export default TikTokLogo;
