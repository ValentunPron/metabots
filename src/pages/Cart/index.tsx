import React from 'react';
import { Link, Navigate } from 'react-router-dom'
import styles from './Cart.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { IRobot } from '../../types/IRobot';
import priceIMG from '../../assest/image/logo.png';
import { removeItem } from '../../redux/slices/cart';

export const Cart = (): JSX.Element => {
	const dispatch = useDispatch();

	const { authMe, cart } = useSelector((state: any) => {
		return {
			authMe: state.auth,
			cart: state.cart,
		}
	});

	const onRemoveItem = (id: string) => {
		dispatch(removeItem(id));
	}

	if (!authMe.data) {
		return <Navigate to='/' />
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.body}>
				<div className={styles.top}>
					<h2 className={styles.title}>Accep this offer</h2>
					<Link to='/market'>
						<button className={styles.close}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="#45D9FC" viewBox="0 0 24 24" fill="none">
								<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M15 9L9 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M9 9L15 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</button>
					</Link>
				</div>
				<div className={styles.items}>
					<div className={styles.items_top}>
						<span>Item</span>
						<span>Subtotal</span>
					</div>
					<ul className={styles.list_items}>
						{
							cart.items.map((item: IRobot, index: number) => (
								<li className={styles.item} key={`${item._id}_${index}`}>
									<div className={styles.item_left}>
										<Link to={`/market/${item._id}`}>
											<div className={`${styles.item_image} ${item.rarety.name}`}>
												<img src={item.img} alt={item.name} />
											</div>
										</Link>
										<div className={styles.item_info}>
											<h3 className={styles.item_name}>{item.bodyPart} {item.name}</h3>
											<span>ID #{item._id}_{index}</span>
										</div>
									</div>
									<div className={styles.item_right}>
										<button className={styles.item_close} onClick={() => onRemoveItem(item._id)}>
											<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" stroke="#45D9FC" viewBox="0 0 24 24" fill="none">
												<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M15 9L9 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M9 9L15 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</button>
										<div className={styles.item_priceBlock}>
											<div className={styles.price}><img src={priceIMG} alt="logo" width={20} height={20} /><span >{item.price}</span></div>
											<span className={styles.realyPrice}>${item.realyPrice}</span>
										</div>
									</div>
								</li>
							))
						}
					</ul>
					<div className={styles.totalPrice}>
						<h2 className={styles.title}>Total earnings</h2>
						<div className={styles.totalPrice_body}>
							<div className={styles.totalPrice_left}>
								<img src={priceIMG} alt="value" width={22} height={22} />
								<span>MON</span>
							</div>
							<div className={styles.totalPrice_value}>
								<span className={styles.price}>{cart.totalPrice.price}</span>
								<span className={styles.realyPrice}>[${cart.totalPrice.realyPrice}]</span>
							</div>
						</div>
						<div className={styles.totalPrice_action}>
							<button className={`${styles.button} button trans`}>Accept</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}