import { useEffect, useCallback, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCheck, FiAlertCircle, FiLoader } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

// ⚠️ REPLACE THESE with your actual EmailJS credentials from https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const selectOptions = [
	'Wedding Video',
	'Instagram Reels',
	'YouTube Video Editing',
	'Photo Editing',
	'Social Media Management',
];

const HireMeModal = ({ onClose, onRequest }) => {
	const formRef = useRef(null);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: selectOptions[0],
		message: '',
	});
	const [status, setStatus] = useState('idle');
	const [errorMsg, setErrorMsg] = useState('');

	// Close on ESC key
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === 'Escape') onClose();
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [onClose]);

	// Prevent background scrolling while modal is open
	useEffect(() => {
		const originalOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = originalOverflow;
		};
	}, []);

	// Handle backdrop click
	const handleBackdropClick = useCallback(
		(e) => {
			if (e.target === e.currentTarget) {
				onClose();
			}
		},
		[onClose]
	);

	const handleChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const validateForm = () => {
		if (!formData.name.trim()) return 'Please enter your name.';
		if (!formData.email.trim()) return 'Please enter your email.';
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email))
			return 'Please enter a valid email address.';
		if (!formData.message.trim()) return 'Please describe your project.';
		return null;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrorMsg('');

		const validationError = validateForm();
		if (validationError) {
			setErrorMsg(validationError);
			return;
		}

		setStatus('loading');

		try {
			await emailjs.send(
				EMAILJS_SERVICE_ID,
				EMAILJS_TEMPLATE_ID,
				{
					from_name: formData.name,
					from_email: formData.email,
					subject: formData.subject,
					message: formData.message,
				},
				EMAILJS_PUBLIC_KEY
			);
			setStatus('success');
			setTimeout(() => {
				setFormData({
					name: '',
					email: '',
					subject: selectOptions[0],
					message: '',
				});
				setStatus('idle');
				onClose();
			}, 2000);
		} catch (err) {
			setStatus('error');
			setErrorMsg(
				'Failed to send. Please try again or contact directly via email.'
			);
		}
	};

	const modalContent = (
		<AnimatePresence>
			<motion.div
				key="hire-me-backdrop"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.2 }}
				onClick={handleBackdropClick}
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					zIndex: 9990,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '1rem',
					backgroundColor: 'rgba(0, 0, 0, 0.6)',
					backdropFilter: 'blur(4px)',
					WebkitBackdropFilter: 'blur(4px)',
				}}
			>
				<motion.div
					key="hire-me-modal"
					initial={{ opacity: 0, scale: 0.92, y: 30 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.92, y: 30 }}
					transition={{ duration: 0.3, ease: 'easeOut' }}
					style={{
						width: '100%',
						maxWidth: '540px',
						maxHeight: '90vh',
						display: 'flex',
						flexDirection: 'column',
						borderRadius: '1rem',
						overflow: 'hidden',
						boxShadow:
							'0 25px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255,255,255,0.05)',
					}}
				className="bg-secondary-light\"
					onClick={(e) => e.stopPropagation()}
				>
					{/* Header */}
					<div
					className="border-b border-ternary-light\"
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							padding: '1.25rem 1.5rem',
							flexShrink: 0,
						}}
					>
					<h5 className="font-general-medium text-gray-900 text-xl\">
							What project can I help you with?
						</h5>
						<button
							onClick={onClose}
						className="text-gray-500 hover:text-accent\"
							style={{
								background: 'none',
								border: 'none',
								cursor: 'pointer',
								padding: '0.25rem',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<FiX size={24} />
						</button>
					</div>

					{/* Body — scrollable */}
					<div
						style={{
							padding: '1.5rem',
							overflowY: 'auto',
							flex: 1,
						}}
					>
						<form ref={formRef} onSubmit={handleSubmit}>
							<div>
								<input
							className="w-full px-5 py-2.5 border rounded-lg text-md bg-secondary-light text-gray-900 focus:ring-1 focus:ring-accent focus:border-accent\"
									id="hire-name"
									name="name"
									type="text"
									required
									placeholder="Name"
									aria-label="Name"
									value={formData.name}
									onChange={handleChange}
									disabled={status === 'loading'}
								/>
							</div>
							<div style={{ marginTop: '1rem' }}>
								<input
								className="w-full px-5 py-2.5 border rounded-lg text-md bg-secondary-light text-gray-900 focus:ring-1 focus:ring-accent focus:border-accent\"
									id="hire-email"
									name="email"
									type="email"
									required
									placeholder="Email"
									aria-label="Email"
									value={formData.email}
									onChange={handleChange}
									disabled={status === 'loading'}
								/>
							</div>
							<div style={{ marginTop: '1rem' }}>
								<select
									className="w-full px-5 py-2.5 border rounded-lg text-md bg-secondary-light text-gray-900 focus:ring-1 focus:ring-accent focus:border-accent\"
									id="hire-subject"
									name="subject"
									required
									aria-label="Project Category"
									value={formData.subject}
									onChange={handleChange}
									disabled={status === 'loading'}
								>
									{selectOptions.map((option) => (
										<option key={option}>{option}</option>
									))}
								</select>
							</div>
							<div style={{ marginTop: '1rem' }}>
								<textarea
									className="w-full px-5 py-2.5 border rounded-lg text-md bg-secondary-light text-gray-900 focus:ring-1 focus:ring-accent focus:border-accent\"
									id="hire-message"
									name="message"
									rows="5"
									aria-label="Details"
									placeholder="Tell me about your project..."
									value={formData.message}
									onChange={handleChange}
									disabled={status === 'loading'}
								></textarea>
							</div>

							{/* Status messages */}
							{errorMsg && status !== 'success' && (
								<div
									style={{
										marginTop: '0.75rem',
										display: 'flex',
										alignItems: 'center',
										gap: '0.5rem',
										color: '#ef4444',
										fontSize: '0.875rem',
									}}
									className="font-general-regular"
								>
									<FiAlertCircle style={{ flexShrink: 0 }} />
									<span>{errorMsg}</span>
								</div>
							)}
							{status === 'success' && (
								<div
									style={{
										marginTop: '0.75rem',
										display: 'flex',
										alignItems: 'center',
										gap: '0.5rem',
										color: '#22c55e',
										fontSize: '0.875rem',
									}}
									className="font-general-regular"
								>
									<FiCheck style={{ flexShrink: 0 }} />
									<span>Request sent successfully! Closing...</span>
								</div>
							)}

							<div style={{ marginTop: '1.25rem' }}>
								<button
									type="submit"
									disabled={
										status === 'loading' || status === 'success'
									}
									className="btn-accent font-general-medium"
									style={{
										padding: '0.625rem 1.5rem',
										borderRadius: '0.5rem',
										cursor:
											status === 'loading' || status === 'success'
												? 'not-allowed'
												: 'pointer',
										opacity:
											status === 'loading' || status === 'success'
												? 0.6
												: 1,
										display: 'inline-flex',
										alignItems: 'center',
										gap: '0.5rem',
										border: 'none',
									}}
									aria-label="Submit Request"
								>
									{status === 'loading' && (
										<FiLoader
											style={{
												animation: 'spin 1s linear infinite',
											}}
										/>
									)}
									{status === 'loading'
										? 'Sending...'
										: status === 'success'
										? 'Sent ✓'
										: 'Send Request'}
								</button>
							</div>
						</form>
					</div>

					{/* Footer */}
					<div
					className="border-t border-ternary-light\"
						style={{
							padding: '1rem 1.5rem',
							textAlign: 'right',
							flexShrink: 0,
						}}
					>
						<button
							onClick={onClose}
						className="font-general-medium bg-gray-200 text-gray-900 hover:bg-gray-300\"
							style={{
								padding: '0.5rem 1.5rem',
								borderRadius: '0.5rem',
								cursor: 'pointer',
								border: 'none',
								transition: 'all 0.2s ease',
							}}
						>
							Close
						</button>
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);

	return createPortal(modalContent, document.body);
};

export default HireMeModal;
