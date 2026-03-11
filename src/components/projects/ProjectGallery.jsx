import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-8 mt-12">
			{singleProjectData.ProjectImages.map((project) => {
				return (
					<div className="mb-8 sm:mb-0 overflow-hidden rounded-xl" key={project.id}>
						<img
							src={project.img}
							className="rounded-xl cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 duration-300 w-full aspect-video object-cover h-full"
							alt={project.title}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectGallery;
