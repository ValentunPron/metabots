import React from 'react';

import styles from './Market.module.scss';
import { Sidebar } from '../../component/Sidebar';
import { Card, Poput } from '../../component';

import notFound from '../../assest/image/market/no_founded.png'

export const Market = (): JSX.Element => {

	const [burger, setBurger] = React.useState(false);
	const [num, setNum] = React.useState(2);

	return (
		<div className='container'>
			<div className={styles.market}>
				<div className={styles.market_top}>
					<div className={styles.top_left}>
						<h2 className={styles.title}>Pieces List</h2>
						<button className={`button ${styles.button_burger}`} onClick={() => setBurger(!burger)}>filter</button>
					</div>
					<Poput />
				</div>
				<div className={`${styles.sidebar} ${burger ? styles.active : ''}`}>
					<Sidebar closeBurger={() => setBurger(!burger)} />
				</div>
				<div className={styles.main}>
					<div className={styles.result}>0 result</div>
					<div className={styles.main_body}>
						{
							num
								?
								<div className={styles.main_list}>
									<Card />
									<Card />
									<Card />
									<Card />
									<Card />
									<Card />
								</div>
								: <div className={styles.notFound}>
									<img src={notFound} alt="not found" height={300} width={310} />
									No  Pieces found
								</div>
						}
					</div>
				</div>
			</div>
		</div>
	)
}