import React from 'react';

import styles from './Sidebar.module.scss';
import { Filter } from '../Filter';
import { IRobot } from '../../types/IRobot';
import { IFliters, INoSlider } from '../../redux/slices/filter';
import { Modal } from '../Modal';

interface ISidebar {
	closeBurger: () => void,
	setFilterRarery: Function,
	setFilterPart: Function,
	setFilterFamily: Function,
	selectRobot: Function,
	setSearch: Function,
	setNoSlider: Function,
	resetFilter: Function,
	robots: IRobot[],
	filters: IFliters,
	noSlider: INoSlider,
}

export const Sidebar = ({ closeBurger, setFilterRarery, setFilterPart, setFilterFamily, selectRobot, setSearch, setNoSlider, resetFilter, robots, noSlider, filters }: ISidebar): JSX.Element => {

	const [searchText, setSearchText] = React.useState('');
	const [modalStatus, setModalStatus] = React.useState(false);

	return (
		<>
			<nav className={styles.sidebar}>
				<div className={styles.siderbar_category}>
					<button className={`${styles.button_category} ${styles.active}`}>Pieces</button>
					<button className={styles.button_category} onClick={() => setModalStatus(true)}>Complete Robot</button>
					<button className='burger active' onClick={closeBurger}></button>
				</div>
				<div className={styles.sidebar_content}>
					<div className={`${styles.reset} reset`}>
						<button onClick={() => resetFilter()}>Reset</button>
					</div>
					<div className={styles.search}>
						<button onClick={() => setSearch(searchText)}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11.6667 18.3333C15.3486 18.3333 18.3333 15.3486 18.3333 11.6667C18.3333 7.98476 15.3486 5 11.6667 5C7.98476 5 5 7.98476 5 11.6667C5 15.3486 7.98476 18.3333 11.6667 18.3333Z" stroke="#55CCCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M20 20L16.375 16.375" stroke="#55CCCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</button>
						<input type="text" placeholder='Search by Piece/Card name...' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
					</div>
					<div className="sidebar_filter">
						<Filter
							setFilterRarery={setFilterRarery}
							setFilterPart={setFilterPart}
							setFilterFamily={setFilterFamily}
							selectRobot={selectRobot}
							setNoSlider={setNoSlider}
							robots={robots}
							filters={filters}
							noSlider={noSlider}
						/>
					</div>
				</div>
			</nav>
			<Modal status={modalStatus} setStatus={setModalStatus} />
		</>
	)
}