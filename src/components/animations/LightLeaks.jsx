import { motion } from 'framer-motion';

const LightLeaks = () => {
	return (
		<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
			{/* Soft Amber Glow (Top Left) */}
			<motion.div
				className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-accent mix-blend-screen dark:mix-blend-color-dodge filter blur-[100px] sm:blur-[150px] opacity-20 dark:opacity-10 pointer-events-none"
				animate={{
					x: ['0%', '10%', '-5%', '0%'],
					y: ['0%', '-10%', '10%', '0%'],
					scale: [1, 1.1, 0.9, 1],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: 'linear',
				}}
			/>

			{/* Deep Blue-Slate Glow (Bottom Right) */}
			<motion.div
				className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-ternary-dark mix-blend-multiply dark:mix-blend-screen filter blur-[120px] sm:blur-[180px] opacity-10 dark:opacity-20 pointer-events-none"
				animate={{
					x: ['0%', '-15%', '5%', '0%'],
					y: ['0%', '10%', '-15%', '0%'],
					scale: [1, 1.2, 0.8, 1],
				}}
				transition={{
					duration: 25,
					repeat: Infinity,
					ease: 'linear',
				}}
			/>

			{/* Warm Film Burn Leak (Center/Right drifting) */}
			<motion.div
				className="absolute top-[30%] left-[60%] w-[40vw] h-[30vw] rounded-full bg-orange-500 mix-blend-screen dark:mix-blend-color-dodge filter blur-[100px] sm:blur-[140px] opacity-[0.15] dark:opacity-[0.08] pointer-events-none"
				animate={{
					x: ['0%', '-20%', '10%', '0%'],
					y: ['0%', '20%', '-10%', '0%'],
					opacity: [0.08, 0.12, 0.05, 0.08],
				}}
				transition={{
					duration: 30,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>
		</div>
	);
};

export default LightLeaks;
