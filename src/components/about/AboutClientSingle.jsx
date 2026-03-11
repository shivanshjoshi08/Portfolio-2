const AboutClientSingle = ({ title, image }) => {
	return (
		<>
			<img
				src={image}
				className="w-64 py-5 px-10 border bg-secondary-light dark:bg-primary-dark border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer hover:shadow-md duration-300"
				alt={title}
			/>
		</>
	);
};

export default AboutClientSingle;
