import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	useCountUp({ ref: 'experienceCounter', end: 2, duration: 2 });
	useCountUp({ ref: 'videosCounter', end: 150, duration: 2 });
	useCountUp({ ref: 'clientsCounter', end: 35, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 200, duration: 2 });

	return (
	<div className="mt-10 sm:mt-20 bg-primary-light shadow-sm\">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Years of experience"
					counter={<span id="experienceCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Videos delivered"
					counter={<span id="videosCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Happy clients"
					counter={<span id="clientsCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Projects completed"
					counter={<span id="projectsCounter" />}
					measurement="+"
				/>
			</div>
		</div>
	);
};

export default AboutCounter;
