import React from 'react';

import { CheckBoxItem } from '../CheckBoxItem';
import { NoSlider } from '../NoSlider';
import styles from '../CheckBoxItem/CheckBoxItem.module.scss';
import style from './Filter.module.scss'


import iconFilter01 from '../../assest/image/filter/01.svg'
import iconFilter02 from '../../assest/image/filter/02.svg'
import iconFilter03 from '../../assest/image/filter/03.svg'
import iconFilter04 from '../../assest/image/filter/04.svg'
import { IRobot } from '../../types/IRobot';
import { IFliters, INoSlider } from '../../redux/slices/filter';

interface IFilter {
	setFilterRarery: Function,
	setFilterPart: Function,
	setFilterFamily: Function,
	selectRobot: Function,
	setNoSlider: Function,
	robots: IRobot[],
	filters: IFliters,
	noSlider: INoSlider,
}

export const Filter = ({ setFilterRarery, setFilterPart, setFilterFamily, selectRobot, setNoSlider, robots, filters, noSlider }: IFilter): JSX.Element => {

	const [statusRobot, setStatusRobot] = React.useState(false);
	const [statusStats, setStatusStats] = React.useState(false);
	const [selectedNames, setSelectedNames] = React.useState<string[]>([]);

	const handleButtonClick = (name: string) => {
		if (selectedNames.includes(name)) {
			setSelectedNames(selectedNames.filter((n) => n !== name));
		} else {
			setSelectedNames([...selectedNames, name]);
		}
	};

	React.useEffect(() => {
		setSelectedNames([]);
	}, [filters])

	const uniqueNames = Array.from(new Set(robots.map((robot: IRobot) => robot.name)));

	return (
		<>
			<CheckBoxItem title='Body Part' setFilters={setFilterPart} filter={filters.part} arrayItems={['Core', 'Right Arm', 'Left Arm', 'Legs']} />
			<CheckBoxItem title='Rarety' setFilters={setFilterRarery} filter={filters.rarety} arrayItems={['Common', 'UnCommon', 'Rare', 'Epic', 'Legendary']} />
			<CheckBoxItem title='Family' setFilters={setFilterFamily} filter={filters.family} arrayItems={['Humanoid', 'Spider', 'Flying']} />
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
					<button className={`button ${style.button}`} onClick={() => selectRobot(selectedNames)}>Select Robot</button>
					<div className={style.search_list}>
						{
							robots
								? uniqueNames.map((name: string) => (
									<button
										key={name}
										onClick={() => handleButtonClick(name)}
										className={`${style.search_item} ${selectedNames.includes(name) ? style.active : ''}`}>
										{name}
									</button>
								))
								: <button className={style.search_item}>Geisha</button>
						}
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
						<NoSlider svgElement={iconFilter01} title={'Life'} value={noSlider.life} setNoSlider={setNoSlider} />
					</div>
					<div className={style.slider_item}>
						<NoSlider svgElement={iconFilter02} title={'Attack'} value={noSlider.attack} setNoSlider={setNoSlider} />
					</div>
					<div className={style.slider_item}>
						<NoSlider svgElement={iconFilter03} title={'Defense'} value={noSlider.defense} setNoSlider={setNoSlider} />
					</div>
					<div className={style.slider_item}>
						<NoSlider svgElement={iconFilter04} title={'Speed'} value={noSlider.speed} setNoSlider={setNoSlider} />
					</div>
				</div>
			</div>
		</>
	)
}