import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectsFilter from './ProjectsFilter';

const ProjectsGrid = () => {
	const {
		projects,
		searchProject,
		setSearchProject,
		searchProjectsByTitle,
		selectProject,
		setSelectProject,
		selectProjectsByCategory,
	} = useContext(ProjectsContext);

	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
			<p className="font-general-semibold text-2xl sm:text-4xl mb-2 text-ternary-dark section-title-underline\">
					Projects Portfolio
				</p>
			</div>

			<div className="mt-12 sm:mt-16">
				<h3
				className="font-general-regular text-center text-secondary-dark text-md sm:text-xl mb-4\"
				>
					Search projects by title or filter by category
				</h3>
				<div
				className="flex justify-between border-b border-primary-light pb-3 gap-3\"
				>
					<div className="flex justify-between gap-2">
						<span
						className="hidden sm:block bg-primary-light p-2.5 shadow-sm rounded-xl cursor-pointer\"
						>
							<FiSearch className="text-ternary-dark w-5 h-5\" />
						</span>
						<input
							onChange={(e) => {
								setSearchProject(e.target.value);
							}}
							className="font-general-medium pl-3 pr-1 sm:px-4 py-2 border border-gray-200 rounded-lg text-sm sm:text-md bg-secondary-light text-gray-900 focus:ring-1 focus:ring-accent focus:border-accent\"
							id="name"
							name="name"
							type="search"
							required=""
							placeholder="Search Projects"
							aria-label="Name"
						/>
					</div>

					<ProjectsFilter setSelectProject={setSelectProject} />
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-6 sm:gap-8">
				{selectProject
					? selectProjectsByCategory.map((project) => (
							<ProjectSingle
								title={project.title}
								category={project.category}
								image={project.img}
								videoUrl={project.videoUrl}
								key={project.id}
							/>
					  ))
					: searchProject
						? searchProjectsByTitle.map((project) => (
								<ProjectSingle
									title={project.title}
									category={project.category}
									image={project.img}
									videoUrl={project.videoUrl}
									key={project.id}
								/>
						  ))
						: projects.map((project) => (
								<ProjectSingle
									title={project.title}
									category={project.category}
									image={project.img}
									videoUrl={project.videoUrl}
									key={project.id}
								/>
						  ))
				}
			</div>
		</section>
	);
};

export default ProjectsGrid;
