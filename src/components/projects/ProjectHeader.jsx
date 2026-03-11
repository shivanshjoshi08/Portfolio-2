import { useContext } from 'react';
import { FiClock, FiTag } from 'react-icons/fi';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectSingleHeader = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div>
			<p className="font-general-semibold text-left text-3xl sm:text-4xl font-bold text-gray-900 dark:text-primary-light mt-14 sm:mt-20 mb-7">
				{singleProjectData.ProjectHeader.title}
			</p>
			<div className="flex items-center gap-8">
				<div className="flex items-center">
					<FiClock className="text-lg text-accent" />
					<span className="font-general-regular ml-2 leading-none text-gray-900 dark:text-primary-light">
						{singleProjectData.ProjectHeader.publishDate}
					</span>
				</div>
				<div className="flex items-center">
					<FiTag className="text-lg text-accent" />
					<span className="font-general-regular ml-2 leading-none text-gray-900 dark:text-primary-light">
						{singleProjectData.ProjectHeader.tags}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProjectSingleHeader;
