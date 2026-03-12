// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
import FevicolImage from '../images/fevicol.jpg';

// Import icons
import {
	FiInstagram,
	FiLinkedin,
} from 'react-icons/fi';

export const singleProjectData = {
	category: 'Marketing',
	ProjectHeader: {
		title: 'Marketing Explanation Reel',
		publishDate: 'Jan 15, 2024',
		tags: 'Video Editing / Color Grading',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Reel - Scene 1',
			img: Image1,
		},
		{
			id: 2,
			title: 'Reel - Scene 2',
			img: Image2,
		},
		{
			id: 3,
			title: 'Reel - Scene 3',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'Private Client',
			},
			{
				id: 2,
				title: 'Services',
				details: 'Cinematic Video Editing & Color Grading',
			},
			{
				id: 3,
				title: 'Category',
				details: 'Marketing',
			},
			{
				id: 4,
				title: 'Duration',
				details: '1 min 48 sec',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Create captivating reels and video edits that capture attention, highlight key moments with smooth transitions and professional color grading.',
		Technologies: [
			{
				title: 'Tools & Software',
				techs: [
					'Adobe Premiere Pro',
					'After Effects',
					'DaVinci Resolve',
					'Photoshop',
					'Lightroom',
					'CapCut',
				],
			},
		],
		ProjectDetailsHeading: 'Project Details',
		ProjectDetails: [
			{
				id: 1,
				details:
					'This project involved creating engaging short-form video content optimized for social media platforms. The edit focuses on dynamic storytelling through carefully selected moments, seamless transitions, and a custom color grade.',
			},
			{
				id: 2,
				details:
					'The audio design combines trending audio with ambient sound, creating an immersive viewing experience that hooks the audience from the first second.',
			},
			{
				id: 3,
				details:
					'Post-production involved speed ramping for dramatic effect, smooth slow-motion sequences, and custom motion graphics that complement the overall aesthetic.',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://www.instagram.com/Joshi_raghavv/',
			},
			{
				id: 2,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://www.linkedin.com/in/raghav-joshi-b52689394',
			},
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Lights Edit',
				img: Image4,
			},
			{
				id: 2,
				title: 'Financial Reel',
				img: Image5,
			},
			{
				id: 3,
				title: 'Landscape Aesthetic',
				img: Image6,
			},
			{
				id: 4,
				title: 'Fevicol',
				img: FevicolImage,
			},
		],
	},
};
