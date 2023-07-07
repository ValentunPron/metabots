import React from 'react';
import styles from './Poput.module.scss';

interface IPoput {
	setSortBy: Function,
	sortBy: string
}

export const Poput = ({ setSortBy, sortBy }: IPoput): JSX.Element => {

	const [active, setActive] = React.useState(false);

	const capitalizeFirstLetter = (word: string) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}

	return (
		<div className={styles.sort}>
			<span>Sort by</span>
			<button className={`${styles.sort_button} ${active ? styles.active : ''}`} onClick={() => setActive(!active)}>
				{capitalizeFirstLetter(sortBy)}
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g id="DOWN ARROW">
						<g id="Group 121">
							<path id="Vector" d="M6 9L12 15L18 9" stroke="#55CCCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</g>
					</g>
				</svg>
				<div className={`${styles.bg_poput} ${active ? styles.active : ''}`}>
					<button className={`${styles.button} ${sortBy === 'last listre' ? styles.active : ''}`} onClick={() => setSortBy('last listre')}>Last Liste</button>
					<button className={`${styles.button} ${sortBy === 'price' ? styles.active : ''}`} onClick={() => setSortBy('price')}>Price</button>
					<button className={`${styles.button} ${sortBy === 'age' ? styles.active : ''}`} onClick={() => setSortBy('age')}>Age</button>
					<button className={`${styles.button} ${sortBy === 'rarety' ? styles.active : ''}`} onClick={() => setSortBy('rarety')}>Rarety</button>
				</div>
			</button>
		</div>
	)
}