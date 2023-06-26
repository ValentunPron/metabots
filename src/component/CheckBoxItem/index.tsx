import React from 'react';

import styles from './CheckBoxItem.module.scss';

export const CheckBoxItem = (): JSX.Element => {

	const [status, setStatus] = React.useState(false);

	return (
		<div className={styles.filterItem}>
			<div className={styles.filter_up}>
				<h3 className={styles.title}>Body Part</h3>
				<button className={`${styles.poput_button} ${status ? styles.active : ''}`} onClick={() => setStatus(!status)}>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g id="DOWN ARROW">
							<g id="Group 121">
								<path id="Vector" d="M18 15.0001L12 9.00012L6 15.0001" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</g>
						</g>
					</svg>
				</button>
			</div>
			<div className={`${styles.filter_content} ${status ? styles.active : ''}`}>
				<label className={styles.container}>
					All
					<input type="checkbox" value="all" />
					<span className={styles.checkmark}></span>
				</label>
				<label className={styles.container}>
					Core
					<input type="checkbox" value="core" />
					<span className={styles.checkmark}></span>
				</label>
				<label className={styles.container}>
					Right Arm
					<input type="checkbox" value="right_arm" />
					<span className={styles.checkmark}></span>
				</label>
				<label className={styles.container}>
					Left Arm
					<input type="checkbox" value="left_arm" />
					<span className={styles.checkmark}></span>
				</label>
				<label className={styles.container}>
					Legs
					<input type="checkbox" value="legs" />
					<span className={styles.checkmark}></span>
				</label>
			</div>
		</div>
	)
}