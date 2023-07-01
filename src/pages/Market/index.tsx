import React from 'react';

import styles from './Market.module.scss';
import { Sidebar } from '../../component/Sidebar';
import { Card, Poput } from '../../component';

import notFound from '../../assest/image/market/no_founded.png'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRobots } from '../../redux/slices/robots';
import { ICard } from '../../component/Card';

export const Market = (): JSX.Element => {

	const dispatch: Function = useDispatch();
	const robots = useSelector((state: any) => state.robots.robots)
	React.useEffect(() => {
		dispatch(fetchRobots())
	}, [])

	const [burger, setBurger] = React.useState(false);

	console.log(robots);

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
					<div className={styles.result}>{robots.items.length} result</div>
					<div className={styles.main_body}>
						{
							robots.items.length > 0
								?
								<div className={styles.main_list}>
									{
										robots.items.map((robot: ICard) => <Card {...robot} key={`${robot.id}_${robot.name}`} />)
									}
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