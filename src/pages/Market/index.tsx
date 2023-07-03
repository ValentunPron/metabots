import React from 'react';

import styles from './Market.module.scss';
import { Sidebar } from '../../component/Sidebar';
import { Card, CardLoader, Poput } from '../../component';

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
	const [currentPage, setCurrentPage] = React.useState(1);
	const itemsPerPage = 6;

	const handleClick = (page: any) => {
		document.body.style.scrollBehavior = 'smooth';
		document.body.scroll(0, 300);
		document.body.style.scrollBehavior = 'auto';
		setCurrentPage(page);
	};

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = robots.items.slice(indexOfFirstItem, indexOfLastItem);

	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(robots.items.length / itemsPerPage); i++) {
		pageNumbers.push(i);
	}


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
							robots.status === 'loaded'
								?
								robots.items.length > 0
									?
									<>
										<div className={styles.main_list}>
											{
												currentItems.map((robot: ICard) => <Card {...robot} key={`${robot.id}_${robot.name}`} />)
											}
										</div>
										<div className={styles.next_robots}>
											{pageNumbers.map((number) => (
												<button className={`${styles.next_pages} ${number === currentPage ? styles.active : ''}`} key={number} onClick={() => handleClick(number)}>
													{number}
												</button>
											))}
										</div>
									</>
									: <div className={styles.notFound}>
										<img src={notFound} alt="not found" height={300} width={310} />
										No  Pieces found
									</div>
								: <div className={styles.main_list}>
									{Array(6).fill(<CardLoader />)}
								</div>
						}
					</div>
				</div>
			</div>
		</div>
	)
}