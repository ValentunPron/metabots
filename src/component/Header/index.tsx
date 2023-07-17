import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom'
import styles from './Header.module.scss'

import logo from '../../assest/image/logo.png';
import header_robot from '../../assest/image/header-robot.png'
import { Auth } from '../Auth';

export const Header = (): JSX.Element => {

	const [useLogin, setUseLogin] = React.useState(false);
	const [burger, setBurger] = React.useState(false);
	const [registerStatus, setRegisterStatus] = React.useState(false);

	React.useEffect(() => {
		burger ? document.body.classList.add('overflow') : document.body.classList.remove('overflow');
	}, [burger])

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
								useLogin
									? <>
										{/*<div className={`${styles.info} ${burger ? styles.active : ''}`}>
										<img src={logo} alt={logo} width={20} height={20} />
										10000 MON
									</div>*/}
										<button className='button' onClick={() => setUseLogin(false)}>Logout</button>
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