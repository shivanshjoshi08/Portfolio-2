import { Link } from 'react-router-dom';
import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import { ProjectsContext } from '../../context/ProjectsContext';

const ProjectRelatedProjects = () => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const { projects } = useContext(ProjectsContext);

	// Filter projects: same category, exclude the current project, max 4
	const relatedProjects = projects
		.filter(
			(project) =>
				project.category === singleProjectData.category &&
				project.title !== singleProjectData.ProjectHeader.title
		)
		.slice(0, 4);

	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-medium text-gray-900 dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left section-title-underline inline-block">
				{singleProjectData.RelatedProject.title}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
				{relatedProjects.map((project) => {
					return (
						<div className="overflow-hidden rounded-xl h-full" key={project.id}>
							<Link
								to="/projects/single-project"
								onClick={() => window.scrollTo(0, 0)}
								className="block h-full"
							>
								<img
									src={project.img}
									className="rounded-xl cursor-pointer hover:scale-105 hover:shadow-lg duration-300 w-full aspect-video object-cover h-full"
									alt={project.title}
								/>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectRelatedProjects;
