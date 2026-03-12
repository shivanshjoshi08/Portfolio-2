import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import HireMeModal from '../HireMeModal';
import { motion, AnimatePresence } from 'framer-motion';

const AppHeader = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);

	function toggleMenu() {
		setShowMenu(!showMenu);
	}

	function toggleHireMeModal() {
		setShowModal((prev) => !prev);
	}

	return (
		<motion.nav
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			id="nav"
			className="sm:container sm:mx-auto glass-nav sticky top-0 z-50"
		>
			<div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-5">
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex justify-between items-center px-4 sm:px-0">
					{/* Logo — text-based for perfect theme matching */}
					<Link to="/" className="group">
						<span className="font-general-bold text-2xl text-gray-900 tracking-tight group-hover:text-accent duration-300\">
							<span className="text-accent">R</span>aghav
						</span>
					</Link>

					{/* Theme switcher + hamburger — small screen */}
					<div className="flex items-center gap-3 sm:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="focus:outline-none"
							aria-label="Hamburger Menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							className="h-7 w-7 fill-current text-gray-900\"
							>
								{showMenu ? (
									<FiX className="text-3xl" />
								) : (
									<FiMenu className="text-3xl" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Header links small screen */}
				<AnimatePresence>
					{showMenu && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
							className="sm:hidden overflow-hidden"
						>
						<div className="m-0 mt-4 p-5 shadow-lg rounded-xl bg-secondary-light\">
								<Link
									to="/projects"
								className="block text-left text-lg text-gray-900 hover:text-accent sm:mx-4 mb-2 py-2\"
									aria-label="Projects"
									onClick={() => setShowMenu(false)}
								>
									Projects
								</Link>
								<Link
									to="/about"
								className="block text-left text-lg text-gray-900 hover:text-accent sm:mx-4 mb-2 py-2 border-t border-ternary-light pt-3\"
									aria-label="About Me"
									onClick={() => setShowMenu(false)}
								>
									About Me
								</Link>
								<Link
									to="/contact"
								className="block text-left text-lg text-gray-900 hover:text-accent sm:mx-4 mb-2 py-2 border-t border-ternary-light pt-3\"
									aria-label="Contact"
									onClick={() => setShowMenu(false)}
								>
									Contact
								</Link>
							<div className="border-t border-ternary-light pt-3\">
									<button
										onClick={() => {
											toggleHireMeModal();
											setShowMenu(false);
										}}
										className="hire-btn font-general-medium text-sm mt-2"
										aria-label="Hire Me Button"
									>
										Hire Me
									</button>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Header links large screen */}
				<div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center">
					<Link
						to="/projects"
					className="block text-left text-lg text-gray-900 hover:text-accent sm:mx-4 mb-2 sm:py-2\"
						aria-label="Projects"
					>
						Projects
					</Link>
					<Link
						to="/about"
					className="block text-left text-lg text-gray-900 hover:text-accent sm:mx-4 mb-2 sm:py-2\"
						aria-label="About Me"
					>
						About Me
					</Link>
					<Link
						to="/contact"
						className="block text-left text-lg text-gray-900 hover:text-accent sm:mx-4 mb-2 sm:py-2\"
						aria-label="Contact"
					>
						Contact
					</Link>
				</div>

				{/* Header right section buttons */}
				<div className="hidden sm:flex justify-between items-center flex-col md:flex-row gap-4">
					<div className="hidden md:flex">
						<button
							onClick={toggleHireMeModal}
							className="hire-btn font-general-medium text-sm"
							aria-label="Hire Me Button"
						>
							Hire Me
						</button>
					</div>
				</div>
			</div>
			{/* Hire me modal */}
			<AnimatePresence>
				{showModal && (
					<HireMeModal
						onClose={toggleHireMeModal}
						onRequest={toggleHireMeModal}
					/>
				)}
			</AnimatePresence>
		</motion.nav>
	);
};

export default AppHeader;
