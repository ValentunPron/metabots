import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Main.module.scss'

export const Main = (): JSX.Element => {
	return (
		<>
			<div className={styles.body_up}>
				<img className={styles.icon} src="https://medabots.game/wp-content/uploads/2023/03/512x512.png" alt="icon" width={256} />
				<h2 className={styles.mainTitle}>MEDABOTS</h2>
				<p className={styles.subtitle}>Play the game by clicking the buttons below</p>
				<div className={styles.action}>
					<a className={styles.link} href="https://apps.apple.com/us/app/medabots/id1606544004" target='_blank'>
						<img src="https://medabots.game/wp-content/uploads/2022/02/downloadappastore.png" alt="app store" width={200} />
					</a>
					<a className={styles.link} href="https://play.google.com/store/apps/details?id=com.robots.medabots" target='_blank'>
						<img src="https://medabots.game/wp-content/uploads/2022/02/getitongoogle.png" alt="google play" width={200} />
					</a>
				</div>
			</div>
			<div className={styles.welcome}>
				<h2 className={styles.title}>Welcome to Medabots</h2>
				<p className={styles.text}>Build your own Medabots and participate in worldwide tournaments of Medabattles. Use your deck of cards to command your robots in strategic PVP and PVE combats and earn the most exclusive robot parts to build the ultimate Medabot team.</p>
				<p className={styles.text}>Come and discover the Medabots Universe!</p>
				<Link to='/market'>
					<button className={styles.button}>Go to market</button>
				</Link>
			</div>
			<div className={styles.family}>
				<ul className={styles.family_list}>
					<li className={styles.list_item}>
						<h3 className={styles.title}>HUMANOIDS</h3>
						<p className={styles.desc}>Humanoid medabots are the most balanced, not standing out in any particular stat, but not having any specially low either</p>
					</li>
					<li className={styles.list_item}>
						<h3 className={styles.title}>FLYERS</h3>
						<p className={styles.desc}>Flyer medabots are the fastest and most aggressive</p>
					</li>
					<li className={styles.list_item}>
						<h3 className={styles.title}>SPIDERS</h3>
						<p className={styles.desc}>Spider medabots have high health and are adept at debuffing</p>
					</li>
				</ul>
				<div className={styles.family_hero}>
					<img className={`${styles.hero} ${styles.hero1}`} src="https://medabots.game/wp-content/uploads/2023/03/SYZYGY-1280x1512.png" alt="humanoids" width={320} />
					<img className={`${styles.hero} ${styles.hero2}`} src="https://medabots.game/wp-content/uploads/2023/03/SAURA-1280x1280.png" alt="humanoids" width={320} />
					<img className={`${styles.hero} ${styles.hero3}`} src="https://medabots.game/wp-content/uploads/2023/03/MISTKAFER-1280x1089.png" alt="humanoids" width={320} />
				</div>
			</div>
		</>
	)
}