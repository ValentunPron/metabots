import React from 'react';

import { CheckBoxItem } from '../CheckBoxItem';
import { NoSlider } from '../NoSlider';
import styles from '../CheckBoxItem/CheckBoxItem.module.scss';
import style from './Filter.module.scss'


import iconFilter01 from '../../assest/image/filter/01.svg'
import iconFilter02 from '../../assest/image/filter/02.svg'
import iconFilter03 from '../../assest/image/filter/03.svg'
import iconFilter04 from '../../assest/image/filter/04.svg'

export const Filter = (): JSX.Element => {

	const [statusRobot, setStatusRobot] = React.useState(false);
	const [statusStats, setStatusStats] = React.useState(false);

	return (
		<>
			<CheckBoxItem title='Body Part' arrayItems={[{ name: 'All', value: 'all' }, { name: 'Core', value: 'core' }, { name: 'Right Arm', value: 'right_arm' }, { name: 'Left Arm', value: 'left_arm' }, { name: 'Legs', value: 'legs' }]} />
			<CheckBoxItem title='Rarety' arrayItems={[{ name: 'Common', value: 'common' }, { name: 'UnCommon', value: 'uncommon' }, { name: 'Rare', value: 'rage' }, { name: 'Epic', value: 'epic' }, { name: 'Legendary', value: 'legendary' }]} />
			<CheckBoxItem title='Family' arrayItems={[{ name: 'Humanoid', value: 'humanoid' }, { name: 'Spider', value: 'spider' }, { name: 'Flying', value: 'flying' }]} />
			<div className={styles.filterItem}>
				<div className={styles.filter_up}>
					<h3 className={styles.title}>Robot</h3>
					<button className={`${styles.poput_button} ${statusRobot ? styles.active : ''}`} onClick={() => setStatusRobot(!statusRobot)}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="DOWN ARROW">
								<g id="Group 121">
									<path id="Vector" d="M18 15.0001L12 9.00012L6 15.0001" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</g>
							</g>
						</svg>
					</button>
				</div>
				<div className={`${styles.filter_content} ${statusRobot ? styles.active : ''}`}>
					<button className={`button ${style.button}`}>Select Robot</button>
					<div className={style.search_list}>
						<button className={style.search_item}>Geisha</button>
					</div>
				</div>
			</div>
			<div className={styles.filterItem}>
				<div className={styles.filter_up}>
					<h3 className={styles.title}>Status</h3>
					<button className={`${styles.poput_button} ${statusStats ? styles.active : ''}`} onClick={() => setStatusStats(!statusStats)}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="DOWN ARROW">
								<g id="Group 121">
									<path id="Vector" d="M18 15.0001L12 9.00012L6 15.0001" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</g>
							</g>
						</svg>
					</button>
				</div>
				<div className={`${styles.filter_content} ${statusStats ? styles.active : ''}`}>
					<div className={style.slider_item}>
						<NoSlider svgElement={iconFilter01} title={'Life'} />
					</div>
					<div className={style.slider_item}>
						<NoSlider svgElement={iconFilter02} title={'Attack'} />
					</div>
					<div className={style.slider_item}>
						<NoSlider svgElement={iconFilter03} title={'Defense'} />
					</div>
					<div className={style.slider_item}>
						<NoSlider svgElement={iconFilter04} title={'Speed'} />
					</div>
				</div>
			</div>
		</>
	)
}