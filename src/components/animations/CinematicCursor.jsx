import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CinematicCursor = () => {
	const [isHovering, setIsHovering] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	
	// Motion values for raw mouse coordinates
	const mouseX = useMotionValue(-100);
	const mouseY = useMotionValue(-100);

	// Smooth spring physics for the cinematic lag effect
	const springX = useSpring(mouseX, { damping: 25, stiffness: 200, mass: 0.5 });
	const springY = useSpring(mouseY, { damping: 25, stiffness: 200, mass: 0.5 });

	// Secondary slower spring for the trailing film glow
	const trailingX = useSpring(mouseX, { damping: 30, stiffness: 100, mass: 1 });
	const trailingY = useSpring(mouseY, { damping: 30, stiffness: 100, mass: 1 });

	useEffect(() => {
		// Only show custom cursor on non-touch devices
		const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
		if (isTouchDevice) return;

		const handleMouseMove = (e) => {
			if (!isVisible) setIsVisible(true);
			mouseX.set(e.clientX);
			mouseY.set(e.clientY);
		};

		const handleMouseOver = (e) => {
			const target = e.target;
			// Expand cursor when hovering over interactive elements
			if (
				target.tagName.toLowerCase() === 'a' ||
				target.tagName.toLowerCase() === 'button' ||
				target.closest('a') ||
				target.closest('button') ||
				target.classList.contains('cursor-pointer')
			) {
				setIsHovering(true);
			} else {
				setIsHovering(false);
			}
		};

		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseover', handleMouseOver);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseover', handleMouseOver);
		};
	}, [mouseX, mouseY, isVisible]);

	if (!isVisible) return null;

	return (
		<>
			{/* Core focused dot */}
			<motion.div
				className="fixed top-0 left-0 w-3 h-3 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference hidden sm:block"
				style={{
					x: springX,
					y: springY,
					translateX: '-50%',
					translateY: '-50%',
				}}
				animate={{
					scale: isHovering ? 0 : 1,
					opacity: isHovering ? 0 : 1,
				}}
				transition={{ duration: 0.15 }}
			/>

			{/* Soft cinematic film burn trailing glow */}
			<motion.div
			className="fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none z-[9998] border border-accent/30 bg-accent/10 backdrop-blur-[1px] hidden sm:block\"
				style={{
					x: trailingX,
					y: trailingY,
					translateX: '-50%',
					translateY: '-50%',
				}}
				animate={{
					scale: isHovering ? 1.8 : 1,
					backgroundColor: isHovering ? 'rgba(245, 158, 11, 0.15)' : 'rgba(245, 158, 11, 0.05)',
					borderColor: isHovering ? 'rgba(245, 158, 11, 0.8)' : 'rgba(245, 158, 11, 0.3)',
				}}
				transition={{ duration: 0.3, ease: 'easeOut' }}
			/>
		</>
	);
};

export default CinematicCursor;
