import React from 'react';

import styles from './Market.module.scss';
import { Sidebar } from '../../component/Sidebar';
import { Card, CardLoader, Poput } from '../../component';

import notFound from '../../assest/image/market/no_founded.png'
import { useDispatch, useSelector } from 'react-redux';
import { IRobot } from '../../types/IRobot';
import { resetFilters, selectRobot, setFiltersFamily, setFiltersPart, setFiltersRarety, setNoSlider, setSearch, setSortBy } from '../../redux/slices/filter';
import { fetchRobots, setLoadedStatus } from '../../redux/slices/robots';
import { buyCard, fetchCart } from '../../redux/slices/cart';

export const Market = (): JSX.Element => {

	const dispatch: Function = useDispatch();
	const { robots, sortBy, filters, search, noSlider, cart } = useSelector((state: any) => {
		return {
			robots: state.robots.robots,
			sortBy: state.filter.sortBy,
			filters: state.filter.filters,
			search: state.filter.search,
			noSlider: state.filter.noSlider,
			cart: state.cart.items,
		}
	});

	React.useEffect(() => {
		dispatch(fetchRobots(sortBy));
	}, [sortBy, filters, search, noSlider,])

	React.useEffect(() => {
		document.body.scrollTo(0, 175);
	}, [])

	const [burger, setBurger] = React.useState(false);
	const [currentPage, setCurrentPage] = React.useState(1);
	const itemsPerPage = 6;

	React.useEffect(() => {
		burger ? document.body.classList.add('overflow') : document.body.classList.remove('overflow');
	}, [burger])

	const handleClick = (page: number) => {
		document.body.scroll(0, 300);
		dispatch(setLoadedStatus(false));
		setCurrentPage(page);
		setTimeout(() => {
			dispatch(setLoadedStatus(true));
		}, 500);
	};

	const sortByFunction = (sorting: string) => {
		dispatch(setSortBy(sorting));
	}

	const filterRaretyFunction = (array: string[]) => {
		dispatch(setFiltersRarety(array));
	}

	const filterPartFunction = (array: string[]) => {
		dispatch(setFiltersPart(array));
	}

	const filterFamilyFunction = (array: string[]) => {
		dispatch(setFiltersFamily(array));
	}

	const selectRobotFunction = (array: string[]) => {
		dispatch(selectRobot(array));
	}

	const searchFunction = (name: string) => {
		dispatch(setSearch(name));
	}

	const noSliderFunction = (status: number[], name: string) => {
		dispatch(setNoSlider({ status, name }));
	}

	const resetFilterFunction = () => {
		dispatch(resetFilters());
	}

	const addRobots = (robotId: string) => {
		dispatch(buyCard(robotId));;
	}

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = robots.items.slice(indexOfFirstItem, indexOfLastItem);

	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(robots.items.length / itemsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div className={styles.market}>
			<div className={styles.market_top}>
				<div className={styles.top_left}>
					<h2 className={styles.title}>Pieces List</h2>
					<button className={`button ${styles.button_burger}`} onClick={() => setBurger(!burger)}>filter</button>
				</div>
				<Poput setSortBy={sortByFunction} sortBy={sortBy} />
			</div>
			<div className={`${styles.sidebar} ${burger ? styles.active : ''}`}>
				<Sidebar
					closeBurger={() => setBurger(!burger)}
					setFilterRarery={filterRaretyFunction}
					setFilterPart={filterPartFunction}
					setFilterFamily={filterFamilyFunction}
					selectRobot={selectRobotFunction}
					setSearch={searchFunction}
					setNoSlider={noSliderFunction}
					resetFilter={resetFilterFunction}
					robots={robots.items}
					noSlider={noSlider}
					filters={filters} />
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
											currentItems.map((robot: IRobot) => <Card currentItem={robot} cartCheck={cart} key={`${robot._id}_${robot.name}`} addRobot={addRobots} />)
										}
									</div>
									<div className={styles.next_robots}>
										{
											pageNumbers.length > 1
												? pageNumbers.map((number) => (
													<button className={`${styles.next_pages} ${number === currentPage ? styles.active : ''}`} key={number} onClick={() => handleClick(number)}>
														{number}
													</button>
												))
												: ''
										}
									</div>
								</>
								: <div className={styles.notFound}>
									<img src={notFound} alt="not found" height={300} width={310} />
									No  Pieces found
								</div>
							: robots.status === 'error'
								? <div className={styles.notFound}>
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
	)
}