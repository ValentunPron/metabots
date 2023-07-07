import React from 'react';

import styles from './CheckBoxItem.module.scss';

type IArrayItems = {
	name: string;
	value: string;
};

interface ICheckBoxItem {
	title: string,
	arrayItems: IArrayItems[],
	children?: any,
}

export const CheckBoxItem = ({ title, arrayItems, children }: ICheckBoxItem): JSX.Element => {

	const [status, setStatus] = React.useState(false);

	return (
		<div className={styles.filterItem}>
			<div className={styles.filter_up}>
				<h3 className={styles.title}>{title}</h3>
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
			{
				<div className={`${styles.filter_content} ${status ? styles.active : ''}`}>
					{
						children
							? children
							: arrayItems.map((item) => (
								<label className={styles.container} key={item.name}>
									{item.name}
									<input type="checkbox" value={item.value} />
									<span className={styles.checkmark}></span>
								</label>
							))
					}
				</div>
			}
		</div>
	)
}