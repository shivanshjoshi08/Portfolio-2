function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<span className="hover:text-accent dark:hover:text-accent ml-1 duration-300">
					Raghav
				</span>
				<span className="mx-1">·</span>
				<span className="text-gray-400 dark:text-gray-500 text-base">
					All rights reserved
				</span>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
