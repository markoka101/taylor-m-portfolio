const MenuIcon = ({ className = '', ...props }) => (
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
		<line x1="6" y1="10" x2="26" y2="10" />
		<line x1="6" y1="16" x2="26" y2="16" />
		<line x1="6" y1="22" x2="26" y2="22" />
	</svg>
);

export default MenuIcon;
