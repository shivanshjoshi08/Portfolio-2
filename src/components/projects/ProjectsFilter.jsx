const selectOptions = [
	'Marketing',
	'Finance',
	'Storytelling',
];

const ProjectsFilter = ({ setSelectProject }) => {
	return (
		<select
			onChange={(e) => {
				setSelectProject(e.target.value);
			}}
		className="font-general-medium px-4 sm:px-6 py-2 border rounded-lg text-sm sm:text-md bg-secondary-light text-gray-900 focus:ring-1 focus:ring-accent focus:border-accent\"
		>
			<option value={setSelectProject} className="text-sm sm:text-md">
				All Projects
			</option>

			{selectOptions.map((option) => (
				<option className="text-normal sm:text-md" key={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default ProjectsFilter;
