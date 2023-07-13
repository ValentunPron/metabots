import React from 'react';
import styles from './Modal.module.scss';

interface IModal {
	status: boolean,
	setStatus: Function,
}

export const Modal = ({ status, setStatus }: IModal): JSX.Element => {

	const refModal = React.useRef(null);

	if (refModal.current) {
		console.log(refModal.current)
	}

	const handleOutsideClick = (event: any) => {
		if (event.target.className === `${styles.modal} ${styles.active}`) {
			setStatus(false);
		}
	};

	React.useEffect(() => {
		const handleKeyDown = (event: any) => {
			if (event.keyCode === 27) {
				setStatus();
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<div className={`${styles.modal} ${status ? styles.active : ''}`} onClick={handleOutsideClick}>
			<div className={styles.modal_body}>
				<button className={styles.close} onClick={() => setStatus(false)}></button>
				<h3 className={styles.title}>coming soon</h3>
			</div>
		</div>
	)
} 