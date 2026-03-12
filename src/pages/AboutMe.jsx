import AboutMeBio from '../components/about/AboutMeBio';
import AboutCounter from '../components/about/AboutCounter';
import AboutClients from '../components/about/AboutClients';
import { AboutMeProvider } from '../context/AboutMeContext';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<AboutMeProvider>
			{/* Page Title */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeOut', duration: 0.6, delay: 0.1 }}
				className="container mx-auto pt-10 sm:pt-16"
			>
				<h1 className="font-general-bold text-3xl sm:text-4xl text-center text-gray-900 section-title-underline">
					About Me
				</h1>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeOut', duration: 0.6, delay: 0.2 }}
				className="container mx-auto"
			>
				<AboutMeBio />
			</motion.div>

			{/* Counter */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeOut', duration: 0.6, delay: 0.3 }}
			>
				<AboutCounter />
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeOut', duration: 0.6, delay: 0.4 }}
				className="container mx-auto"
			>
				<AboutClients />
			</motion.div>
		</AboutMeProvider>
	);
};

export default About;
