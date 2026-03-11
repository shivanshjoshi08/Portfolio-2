import React from 'react';

const FormInput = ({
	inputLabel,
	labelFor,
	inputType,
	inputId,
	inputName,
	placeholderText,
	ariaLabelName,
}) => {
	return (
		<div className="font-general-regular mb-4">
			<label
				className="block text-lg text-gray-900 dark:text-primary-light mb-1"
				htmlFor={labelFor}
			>
				{inputLabel}
			</label>
			<input
				className="w-full px-5 py-2.5 border border-gray-300 dark:border-primary-dark border-opacity-50 text-gray-900 dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-lg shadow-sm text-md focus:ring-1 focus:ring-accent focus:border-accent"
				type={inputType}
				id={inputId}
				name={inputName}
				placeholder={placeholderText}
				aria-label={ariaLabelName}
				required
			/>
		</div>
	);
};

export default FormInput;
