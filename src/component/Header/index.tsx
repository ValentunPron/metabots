import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom'
import styles from './Header.module.scss'

import logo from '../../assest/image/logo.png';
import header_robot from '../../assest/image/header-robot.png'
import { Auth } from '../Auth';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/auth';

interface IHeader {
	authMe: any,
	cart: number,
}

export const Header = ({ authMe, cart }: IHeader): JSX.Element => {
	const dispatch = useDispatch();

	const [burger, setBurger] = React.useState(false);
	const [registerStatus, setRegisterStatus] = React.useState(false);

	React.useEffect(() => {
		burger ? document.body.classList.add('overflow') : document.body.classList.remove('overflow');
	}, [burger]);

	const onClickLogout = () => {
		if (window.confirm('Ви точно хочете вийти з аккаунту?')) {
			dispatch(logout())
			window.localStorage.removeItem('token');
		}
	};


	const location = useLocation();
	const link = location.pathname.substring(1);

	return (
		<>
			<header>
				<div className="container">
					<div className={`${styles.header} ${burger ? styles.active : ''}`}>
						<Link to='/' className='logo' onClick={() => setBurger(false)}>
							<img src={logo} alt="logo" width={45} height={45} />
							Metabots
						</Link>
						<nav className={styles.header__nav}>
							<Link to="/" className={`link ${link === '' ? 'active' : ''}`} onClick={() => setBurger(false)}>Game</Link>
							<Link to="/market" className={`link ${link.startsWith('market') ? 'active' : ''}`} onClick={() => setBurger(false)}>Market</Link>
							<Link to="/terms-corditions" className={`link ${link === 'terms-corditions' ? 'active' : ''}`} onClick={() => setBurger(false)}>Medamon & Mon</Link>
						</nav>
						<div className={styles.active}>
							{
								authMe
									? <>
										<Link to="/cart">
											<button className={styles.cart}>
												<svg width="30" height="auto" viewBox="0 0 37 35" fill="none" stroke="#E4E2E2" xmlns="http://www.w3.org/2000/svg">
													<path d="M2 2H8L12.02 21.7662C12.1572 22.4458 12.5329 23.0563 13.0813 23.4908C13.6298 23.9253 14.316 24.1561 15.02 24.1429H29.6C30.304 24.1561 30.9902 23.9253 31.5387 23.4908C32.0871 23.0563 32.4628 22.4458 32.6 21.7662L35 9.38095H9.5M15.5 31.5238C15.5 32.3391 14.8284 33 14 33C13.1716 33 12.5 32.3391 12.5 31.5238C12.5 30.7085 13.1716 30.0476 14 30.0476C14.8284 30.0476 15.5 30.7085 15.5 31.5238ZM32 31.5238C32 32.3391 31.3284 33 30.5 33C29.6716 33 29 32.3391 29 31.5238C29 30.7085 29.6716 30.0476 30.5 30.0476C31.3284 30.0476 32 30.7085 32 31.5238Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
												</svg>
												{cart && <span>{cart}</span>}
											</button>
										</Link>
										<button className='button' onClick={onClickLogout}>Logout</button>
									</>
									: <>
										<div className={styles.button}>
											<button className='login button' onClick={() => setRegisterStatus(true)}>
												<div>
													Login
													<svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M18.3 3H23.18C23.8272 3 24.4478 3.21071 24.9054 3.58579C25.363 3.96086 25.62 4.46957 25.62 5V19C25.62 19.5304 25.363 20.0391 24.9054 20.4142C24.4478 20.7893 23.8272 21 23.18 21H18.3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
														<path d="M12.2 17L18.3 12L12.2 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
														<path d="M18.3 12H3.66003" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</div>
											</button>
										</div>
									</>
							}
							<button className={`burger ${burger ? 'active' : ''}`} onClick={() => setBurger(!burger)}><span></span></button>
						</div>
					</div>
					<div className={styles.header__bottom}>
						<img src={header_robot} alt="robot" />
						<div className={styles.header__text}>
							<h1 className="header__title">Welcome</h1>
							<h2 className="header__subtitle">to the NFT Marketplace</h2>
						</div>
					</div>
				</div>
			</header>
			<Auth status={registerStatus} setStatus={setRegisterStatus} />
		</>
	)
}