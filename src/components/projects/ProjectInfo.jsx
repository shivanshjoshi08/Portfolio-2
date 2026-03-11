import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectInfo = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				{/* Single project client details */}
				<div className="mb-7">
					<p className="font-general-medium text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						{singleProjectData.ProjectInfo.ClientHeading}
					</p>
					<ul className="leading-loose">
						{singleProjectData.ProjectInfo.CompanyInfo.map(
							(info) => {
								return (
									<li
										className="font-general-regular text-ternary-dark dark:text-ternary-light"
										key={info.id}
									>
										<span className="font-general-medium text-accent">{info.title}: </span>
										<span>{info.details}</span>
									</li>
								);
							}
						)}
					</ul>
				</div>

				{/* Single project objectives */}
				<div className="mb-7">
					<p className="font-general-medium text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.ObjectivesHeading}
					</p>
					<p className="font-general-regular text-gray-900 dark:text-ternary-light leading-relaxed">
						{singleProjectData.ProjectInfo.ObjectivesDetails}
					</p>
				</div>

				{/* Single project technologies */}
				<div className="mb-7">
					<p className="font-general-medium text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.Technologies[0].title}
					</p>
					<div className="skills-container flex flex-wrap gap-2 mt-2">
						{singleProjectData.ProjectInfo.Technologies[0].techs.map(
							(tech, index) => (
								<span
									key={index}
									className="skill-chip px-4 py-2 bg-secondary-light dark:bg-primary-dark border border-gray-200 dark:border-secondary-dark rounded-lg text-accent dark:text-accent font-general-medium shadow-sm hover:shadow-md hover:border-accent dark:hover:border-accent duration-300"
								>
									{tech}
								</span>
							)
						)}
					</div>
				</div>

				{/* Single project social sharing */}
				<div>
					<p className="font-general-medium text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.SocialSharingHeading}
					</p>
					<div className="flex items-center gap-3 mt-4">
						{singleProjectData.ProjectInfo.SocialSharing.map(
							(social) => {
								return (
									<a
										key={social.id}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Share Project"
										className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-accent dark:hover:text-accent p-2.5 rounded-lg shadow-sm duration-300 relative z-10"
									>
										<span className="text-lg lg:text-2xl">
											{social.icon}
										</span>
									</a>
								);
							}
						)}
					</div>
				</div>
			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-medium text-gray-900 dark:text-primary-light text-2xl font-bold mb-7 section-title-underline inline-block">
					{singleProjectData.ProjectInfo.ProjectDetailsHeading}
				</p>
				{singleProjectData.ProjectInfo.ProjectDetails.map((details) => {
					return (
						<p
							key={details.id}
							className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light leading-relaxed"
						>
							{details.details}
						</p>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectInfo;
