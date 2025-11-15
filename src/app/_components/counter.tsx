"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
	value: number;
	suffix?: string;
}

export const Counter = ({ value, suffix = "" }: CounterProps) => {
	const ref = useRef<HTMLSpanElement>(null);
	const [count, setCount] = useState(0);
	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		// Intersection Observer untuk detect ketika element masuk viewport
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !hasAnimated) {
						setHasAnimated(true);
						// Animate counter tanpa Framer Motion
						const duration = 2000; // 2 seconds
						const startTime = Date.now();
						const startValue = 0;
						const endValue = value;

						const animate = () => {
							const now = Date.now();
							const elapsed = now - startTime;
							const progress = Math.min(elapsed / duration, 1);

							// Easing function (ease-out)
							const easeOut = 1 - Math.pow(1 - progress, 3);
							const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut);

							setCount(currentValue);

							if (progress < 1) {
								requestAnimationFrame(animate);
							} else {
								setCount(endValue);
							}
						};

						requestAnimationFrame(animate);
					}
				});
			},
			{ threshold: 0.5 }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [value, hasAnimated]);

	return <span ref={ref}>{count}{suffix}</span>;
};

export default Counter;
