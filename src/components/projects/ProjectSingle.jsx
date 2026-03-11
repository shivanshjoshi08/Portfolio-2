import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectSingle = ({ title, category, image }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.5,
				delay: 0.1,
			}}
		>
			<Link to="/projects/single-project" aria-label="Single Project" className="h-full block">
				<div className="project-card h-full flex flex-col rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-secondary-dark overflow-hidden">
					<div className="relative overflow-hidden shrink-0">
						<img
							src={image}
							className="project-card-image rounded-t-xl border-none w-full aspect-[16/10] object-cover"
							alt={title}
						/>
						<div className="project-card-overlay">
							<span className="inline-block px-3 py-1 text-sm font-general-medium text-white bg-accent rounded-full">
								{category}
							</span>
						</div>
					</div>
					<div className="text-center px-4 py-5 flex-grow flex flex-col justify-center">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-1">
							{title}
						</p>
						<span className="text-sm text-gray-400 dark:text-gray-500 font-general-regular">
							{category}
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
