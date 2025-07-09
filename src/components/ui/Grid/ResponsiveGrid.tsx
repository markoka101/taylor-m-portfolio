import React from 'react';

interface ResponsiveGridProps {
	children: React.ReactNode;
	min?: number; // min card width in px
}

/* 
	As we need to use grid a lot, it's cleaner to make it a component
	Unlike wix, I understand that things should be responsive.
	This is boiler plate
*/
const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({ children, min = 280 }) => (
	<div
		className="grid gap-6"
		style={{
			gridTemplateColumns: `repeat(auto-fill, minmax(${min}px, 1fr))`,
			gridAutoRows: '1fr',
			gridAutoFlow: 'dense'
		}}
	>
		{children}
	</div>
);

export default ResponsiveGrid;
