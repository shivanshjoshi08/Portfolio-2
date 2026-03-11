import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import AboutClientSingle from './AboutClientSingle';

const AboutClients = () => {
	const { clientsData, clientsHeading } = useContext(AboutMeContext);

	return (
		<div className="mt-10 sm:mt-20 mb-10">
			<p className="font-general-medium text-2xl sm:text-3xl text-center text-gray-900 dark:text-gray-200 section-title-underline">
				{clientsHeading}
			</p>
			<div className="grid grid-cols-2 sm:grid-cols-4 mt-12 sm:mt-14 gap-4">
				{clientsData.map((client) => (
					<AboutClientSingle
						title={client.title}
						image={client.img}
						key={client.id}
					/>
				))}
			</div>
		</div>
	);
};

export default AboutClients;
