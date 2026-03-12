import { FiArrowDownCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

const AppBanner = () => {

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:flex-row sm:justify-between items-center mt-12 md:mt-2 gap-8 sm:gap-12"
		>
			{/* Left: Text Content */}
			<div className="w-full sm:w-1/2 text-left">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ease: 'easeOut', duration: 0.7, delay: 0.1 }}
				className="font-general-bold text-3xl lg:text-4xl xl:text-5xl text-center sm:text-left text-ternary-dark leading-tight"
				>
					Hi, I'm <span className="gradient-text">Raghav</span>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ease: 'easeOut', duration: 0.7, delay: 0.25 }}
				className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl text-center sm:text-left leading-relaxed text-gray-500"
				>
					Video Editor & Social Media Manager
				</motion.p>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ease: 'easeOut', duration: 0.7, delay: 0.35 }}
				className="font-general-regular mt-3 text-base md:text-lg text-center sm:text-left leading-relaxed text-gray-400"
				>
					Crafting cinematic stories through edits, reels, and engaging content that captivates audiences.
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ease: 'easeOut', duration: 0.7, delay: 0.45 }}
					className="flex justify-center sm:justify-start"
				>
					<a
						download="Raghav_resume.pdf"
						href="/files/Raghav_resume.pdf"
						className="font-general-medium flex justify-center items-center w-40 sm:w-48 mt-10 mb-6 sm:mb-0 text-lg border-2 border-accent py-2.5 sm:py-3 shadow-lg rounded-lg bg-accent-light focus:ring-1 focus:ring-accent hover:bg-accent text-gray-600 hover:text-white duration-300"
						aria-label="Download Resume"
					>
						<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sm:w-6 sm:h-6 duration-100" />
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Download CV
						</span>
					</a>
				</motion.div>
			</div>

			{/* Right: Cinematic Hero Visual */}
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.3 }}
				className="w-full sm:w-1/2"
			>
				<div className="hero-visual">
					<div className="hero-glow"></div>
					<div className="hero-play-icon"></div>
					<div className="hero-film-strip">
						<div className="hero-film-frame"></div>
						<div className="hero-film-frame"></div>
						<div className="hero-film-frame"></div>
						<div className="hero-film-frame"></div>
						<div className="hero-film-frame"></div>
						<div className="hero-film-frame"></div>
						<div className="hero-film-frame"></div>
						<div className="hero-film-frame"></div>
					</div>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default AppBanner;
