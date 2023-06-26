import React from 'react';
import { Link } from 'react-router-dom'

import styles from './Market.module.scss';
import { Sidebar } from '../../component/Sidebar';

export const Market = (): JSX.Element => {

	return (
		<div className='container'>
			<div className={styles.market}>
				<div className={styles.market_top}>Header</div>
				<div className={styles.sidebar}>
					<Sidebar />
				</div>
				<div className={styles.main}>Main</div>
			</div>
		</div>
	)
}