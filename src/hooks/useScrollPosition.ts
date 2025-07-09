import { useCallback, useEffect, useState } from 'react';

export interface ScrollPosition {
	x: number;
	y: number;
	direction: 'up' | 'down' | 'left' | 'right' | null;
	isScrolling: boolean;
}

//Will be used for handling scroll position for how content will appear
export function useScrollPosition(throttleMs: number = 100) {
	const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
		x: 0,
		y: 0,
		direction: null,
		isScrolling: false
	});

	const [lastScrollTop, setLastScrollTop] = useState(0);
	const [scrollTimer, setScrollTimer] = useState<NodeJS.Timeout | null>(null);

	const handleScroll = useCallback(() => {
		if (typeof window === 'undefined') return;

		const currentScrollX = window.pageXOffset;
		const currentScrollY = window.pageYOffset;

		let direction: 'up' | 'down' | 'left' | 'right' | null = null;

		if (currentScrollY > lastScrollTop) {
			direction = 'down';
		} else if (currentScrollY < lastScrollTop) {
			direction = 'up';
		}

		setScrollPosition({
			x: currentScrollX,
			y: currentScrollY,
			direction,
			isScrolling: true
		});

		setLastScrollTop(currentScrollY);

		// Clear existing timer and set new one
		if (scrollTimer) {
			clearTimeout(scrollTimer);
		}

		const newTimer = setTimeout(() => {
			setScrollPosition((prev) => ({
				...prev,
				isScrolling: false
			}));
		}, 150);

		setScrollTimer(newTimer);
	}, [lastScrollTop, scrollTimer]);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		let ticking = false;

		const handleScrollThrottled = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					handleScroll();
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener('scroll', handleScrollThrottled, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScrollThrottled);
			if (scrollTimer) {
				clearTimeout(scrollTimer);
			}
		};
	}, [handleScroll, scrollTimer]);

	return scrollPosition;
}
