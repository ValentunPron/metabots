import React from 'react';

import styles from './CheckBoxItem.module.scss';

interface ICheckBoxItem {
	title: string,
	arrayItems: string[],
	children?: any,
	setFilters?: Function,
	filter?: string[];
}

export const CheckBoxItem = ({ title, arrayItems, children, setFilters, filter }: ICheckBoxItem): JSX.Element => {

	const [status, setStatus] = React.useState(false);

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, checked } = event.target;
		if (filter && setFilters) {
			const updatedFilters = checked
				? [...filter, value]
				: filter.filter((filter: string) => filter !== value);
			setFilters(updatedFilters);
		}
	};

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
							: arrayItems.map((name) => (
								<label className={styles.container} key={name}>
									{name}
									{
										setFilters && filter
											? <input
												type="checkbox" value={name}
												checked={filter.includes(name)}
												onChange={handleCheckboxChange}
											/>
											: <input type='checkbox' value={name} />
									}
									<span className={styles.checkmark}></span>
								</label>
							))
					}
				</div>
			}
		</div>
	)
}