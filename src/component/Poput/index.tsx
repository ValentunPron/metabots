import React from 'react';
import styles from './Poput.module.scss';

export const Poput = (): JSX.Element => {

	const [active, setActive] = React.useState(false);
	const [status, setStatus] = React.useState('last_listre');

	const capitalizeFirstLetter = (word: string) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}

	return (
		<div className={styles.sort}>
			<span>Sort by</span>
			<button className={`${styles.sort_button} ${active ? styles.active : ''}`} onClick={() => setActive(!active)}>
				{status === 'last_listre' ? 'Last listre' : capitalizeFirstLetter(status)}
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g id="DOWN ARROW">
						<g id="Group 121">
							<path id="Vector" d="M6 9L12 15L18 9" stroke="#55CCCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</g>
					</g>
				</svg>
				<div className={`${styles.bg_poput} ${active ? styles.active : ''}`}>
					<button className={`${styles.button} ${status === 'last_listre' ? styles.active : ''}`} onClick={() => setStatus('last_listre')}>Last Liste</button>
					<button className={`${styles.button} ${status === 'price' ? styles.active : ''}`} onClick={() => setStatus('price')}>Price</button>
					<button className={`${styles.button} ${status === 'age' ? styles.active : ''}`} onClick={() => setStatus('age')}>Age</button>
					<button className={`${styles.button} ${status === 'rarety' ? styles.active : ''}`} onClick={() => setStatus('rarety')}>Rarety</button>
				</div>
			</button>
		</div>
	)
}