import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const contacts = [
	{
		id: 1,
		name: 'India',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'raghavjoshi2004@gmail.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '+91 93112 04215',
		icon: <FiPhone />,
	},
];

const ContactDetails = () => {
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
			<h2 className="font-general-medium text-2xl text-gray-900 mt-12 mb-8 section-title-underline inline-block\">
					Contact Details
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex items-center mb-5" key={contact.id}>
							<i className="text-2xl text-accent mr-4">
								{contact.icon}
							</i>
						<span className="text-lg text-ternary-dark\">
								{contact.name}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ContactDetails;
