import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const VideoModal = ({ isOpen, onClose, videoUrl, title }) => {
	// Close modal on escape key press
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === 'Escape') onClose();
		};

		if (isOpen) {
			window.addEventListener('keydown', handleKeyDown);
			// Prevent body scroll when modal is open
			document.body.style.overflow = 'hidden';
		}

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			document.body.style.overflow = 'unset';
		};
	}, [isOpen, onClose]);

	// Prevent click inside modal from closing it
	const handleModalContentClick = (e) => {
		e.stopPropagation();
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					className="video-modal-overlay"
					onClick={onClose}
					role="dialog"
					aria-modal="true"
					aria-labelledby="video-modal-title"
				>
					<motion.div
						initial={{ scale: 0.95, opacity: 0, y: 20 }}
						animate={{ scale: 1, opacity: 1, y: 0 }}
						exit={{ scale: 0.95, opacity: 0, y: 20 }}
						transition={{ 
							type: "spring",
							damping: 25,
							stiffness: 300,
							duration: 0.4
						}}
						className="video-modal-content"
						onClick={handleModalContentClick}
					>
						<button
							onClick={onClose}
							className="video-modal-close"
							aria-label="Close modal"
						>
							<FiX />
						</button>

						<div className="video-modal-title">
							<h3 id="video-modal-title">{title}</h3>
						</div>

						{videoUrl && (
							<div className="video-modal-player">
								<iframe
									src={videoUrl.replace('/view?usp=drivesdk', '/preview')}
									allow="autoplay; encrypted-media"
									allowFullScreen
									className="video-modal-iframe"
									title={`Video player for ${title}`}
								/>
							</div>
						)}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default VideoModal;
