import { useEffect, useState } from 'react';

//This is going to be used with handling the responsive grid
export function useResponsive() {
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handler = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handler);
		return () => window.removeEventListener('resize', handler);
	}, []);
	return { isMobile: width < 768, width };
}
