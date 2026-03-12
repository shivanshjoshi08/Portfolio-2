import profileImage from '../../images/profile.jpeg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const skills = [
	'CapCut',
	'Canva',
	'Excel',
	'Learning Adobe Premiere Pro',
	'Social Media Strategy',
	'Content Planning',
	'Short-form Video Editing',
	'Trend Analysis',
	'Audience Engagement',
];

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-16 items-start">
			{/* Profile Image */}
			<div className="w-full sm:w-1/4 mb-8 sm:mb-0 flex flex-col items-center sm:items-start shrink-0">
				<img
					src={profileImage}
					className="profile-image w-56 sm:w-full rounded-2xl object-cover"
					alt="Raghav"
				/>
			</div>

			{/* Bio + Skills */}
			<div className="w-full sm:w-3/4 text-left min-w-0">
				{aboutMe.map((bio) => (
					<p
					className="mb-4 text-gray-800 text-lg leading-relaxed font-general-regular\"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}

				{/* Skills section */}
				<div className="mt-6 w-full overflow-hidden">
				<h3 className="font-general-medium text-xl text-gray-800 mb-4\">
						Skills & Tools
					</h3>
					<div className="flex flex-wrap gap-2 max-w-full skills-container">
						{skills.map((skill, index) => (
							<span key={index} className="skill-chip font-general-medium">
								{skill}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMeBio;
