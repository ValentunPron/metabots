import React from 'react';

import styles from './Market.module.scss';
import { Sidebar } from '../../component/Sidebar';

export const Market = (): JSX.Element => {

	const [burger, setBurger] = React.useState(false);

	return (
		<div className='container'>
			<div className={styles.market}>
				<div className={styles.market_top}>
					<button className={`button ${styles.button_burger}`} onClick={() => setBurger(!burger)}>filter</button>
				</div>
				<div className={`${styles.sidebar} ${burger ? styles.active : ''}`}>
					<Sidebar closeBurger={() => setBurger(!burger)} />
				</div>
				<div className={styles.main}>Main</div>
			</div>
		</div>
	)
}