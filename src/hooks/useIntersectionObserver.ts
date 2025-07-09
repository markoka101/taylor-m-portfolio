import { useEffect, useRef, useState } from 'react';

//Probably going to use for smooth animation when entering viewport
export function useIntersectionObserver(options?: IntersectionObserverInit) {
	const ref = useRef<Element | null>(null);
	const [isVisible, setVisible] = useState(false);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) setVisible(true);
		}, options);
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, [options]);

	return { ref, isVisible };
}
