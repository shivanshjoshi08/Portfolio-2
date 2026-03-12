import FormInput from '../reusable/FormInput';

const ContactForm = () => {
	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
				className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light rounded-xl shadow-xl text-left\"
				>
				<p className="font-general-medium text-gray-900 text-2xl mb-8 section-title-underline inline-block\">
						Contact Form
					</p>
					<FormInput
						inputLabel="Full Name"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Your Name"
						ariaLabelName="Name"
					/>
					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Your email"
						ariaLabelName="Email"
					/>
					<FormInput
						inputLabel="Subject"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Subject"
						ariaLabelName="Subject"
					/>

					<div className="mt-6">
						<label
						className="block text-lg text-gray-900 mb-2\"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
						className="w-full px-5 py-2.5 border border-gray-300 border-opacity-50 text-gray-900 bg-ternary-light rounded-lg shadow-sm text-md focus:ring-1 focus:ring-accent focus:border-accent\"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>

					<div className="mt-6">
						<button
							type="submit"
							className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider btn-accent rounded-lg"
							aria-label="Send Message"
						>
							Send Message
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
