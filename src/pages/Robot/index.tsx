import { Link, Navigate } from "react-router-dom"

import styles from './RobotPages.module.scss'
import { IRobot } from "../../types/IRobot"
import { CheckBoxItem } from "../../component"
import logo from "../../assest/image/logo.png";
import React from "react";

interface IRobotPages {
	currentItem: IRobot
}

export const Robot = ({ currentItem }: IRobotPages): JSX.Element => {

	React.useEffect(() => {
		document.body.scrollTo(0, 250)
	}, [])

	if (!currentItem) {
		return <Navigate to='/' />
	}

	return (
		<>
			<div className={styles.robot_top}>
				<span className={styles.core}>core</span>
				<span className={styles.piece}>Piece #{currentItem.id}</span>
				<p className={styles.rarity}>Rarity: <span className={currentItem.rarety.name}>{currentItem.rarety.name}</span></p>
			</div>
			<div className={styles.robog_bg}>
				<Link to='/market'>
					<button className={styles.return}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="DOWN ARROW">
								<g id="Group 121">
									<path id="Vector" d="M15 6L9 12L15 18" stroke="#55CCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								</g>
							</g>
						</svg>
						Back
					</button>
				</Link>
				<div className={styles.robot_body}>
					<div className={styles.robot_body_top}>
						<div className={`${styles.robot_image} ${currentItem.rarety.name}`}>
							<img src={currentItem.img} alt={currentItem.name} />
						</div>
						<div className={styles.robot_info}>
							<div className={styles.robot_info_top}>
								<span className={styles.name}>{currentItem.name}</span>
								<span className={styles.part}>{currentItem.bodyPart}</span>
								<span className={styles.age}>Age: {currentItem.age}</span>
							</div>
							<div className={styles.robot_item}>
								<CheckBoxItem title="Stats" arrayItems={[]}>
									<div className={styles.stats}>
										<div className={styles.stats_item}>
											<div className={`${styles.stats_info}  ${styles.life}`}>
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g id="Group 203">
														<path id="Vector" d="M21.2913 4.61183C20.7805 4.10083 20.1741 3.69547 19.5066 3.41891C18.8392 3.14235 18.1238 3 17.4013 3C16.6788 3 15.9634 3.14235 15.2959 3.41891C14.6285 3.69547 14.022 4.10083 13.5113 4.61183L12.4513 5.67183L11.3913 4.61183C10.3596 3.58013 8.96032 3.00053 7.50129 3.00053C6.04226 3.00053 4.64298 3.58013 3.61129 4.61183C2.5796 5.64352 2 7.04279 2 8.50183C2 9.96086 2.5796 11.3601 3.61129 12.3918L4.67129 13.4518L12.4513 21.2318L20.2313 13.4518L21.2913 12.3918C21.8023 11.8811 22.2076 11.2746 22.4842 10.6072C22.7608 9.93972 22.9031 9.22431 22.9031 8.50183C22.9031 7.77934 22.7608 7.06393 22.4842 6.39647C22.2076 5.72901 21.8023 5.12258 21.2913 4.61183V4.61183Z" fill="#45D9FC" />
													</g>
												</svg>
												<span className={styles.stats_name}>LIFE</span>
											</div>
											<input className={styles.stats_linear} style={{ background: `linear-gradient(to right, #2F9D9D 0, #1E1F28 ${currentItem.status.attack}%)` }} type='*' />
											<span className={styles.stats_number}>{currentItem.status.life}</span>
										</div>
										<div className={styles.stats_item}>
											<div className={`${styles.stats_info}  ${styles.att}`}>
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g id="Group 209">
														<path id="Vector" d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#FFE144" />
													</g>
												</svg>
												<span className={styles.stats_name}>Attack</span>
											</div>
											<input className={styles.stats_linear} style={{ background: `linear-gradient(to right, #FFE144 0, #1E1F28 ${currentItem.status.attack}%)` }} type='*' />
											<span className={styles.stats_number}>{currentItem.status.attack}</span>
										</div>
										<div className={styles.stats_item}>
											<div className={`${styles.stats_info}  ${styles.def}`}>
												<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g id="Group 216">
														<path id="Vector" d="M8 20C8 20 16 16 16 10V3L8 0L0 3V10C0 16 8 20 8 20Z" fill="#5846F9" />
													</g>
												</svg>
												<span className={styles.stats_name}>DEFENCE</span>
											</div>
											<input className={styles.stats_linear} style={{ background: `linear-gradient(to right, #5846F9 0, #1E1F28 ${currentItem.status.defense}%)` }} type='*' />
											<span className={styles.stats_number}>{currentItem.status.defense}</span>
										</div>
										<div className={styles.stats_item}>
											<div className={`${styles.stats_info}  ${styles.spe}`}>
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g id="escudo">
														<path id="Vector" d="M21 15.9979V7.99795C20.9996 7.64722 20.9071 7.30276 20.7315 6.99911C20.556 6.69546 20.3037 6.44331 20 6.26795L13 2.26795C12.696 2.09241 12.3511 2 12 2C11.6489 2 11.304 2.09241 11 2.26795L4 6.26795C3.69626 6.44331 3.44398 6.69546 3.26846 6.99911C3.09294 7.30276 3.00036 7.64722 3 7.99795V15.9979C3.00036 16.3487 3.09294 16.6931 3.26846 16.9968C3.44398 17.3004 3.69626 17.5526 4 17.7279L11 21.7279C11.304 21.9035 11.6489 21.9959 12 21.9959C12.3511 21.9959 12.696 21.9035 13 21.7279L20 17.7279C20.3037 17.5526 20.556 17.3004 20.7315 16.9968C20.9071 16.6931 20.9996 16.3487 21 15.9979Z" fill="#F25AC9" />
													</g>
												</svg>
												<span className={styles.stats_name}>Speed</span>
											</div>
											<input className={styles.stats_linear} style={{ background: `linear-gradient(to right, #F25AC9 0, #1E1F28 ${currentItem.status.speed}%)` }} type='*' />
											<span className={styles.stats_number}>{currentItem.status.defense}</span>
										</div>
									</div>
								</CheckBoxItem>
							</div>
						</div>
					</div>
					<div className={styles.price}>
						<CheckBoxItem title="Price" arrayItems={[]}>
							<div className={styles.price_body}>
								<div className={`${styles.price_bg} ${styles.price_top}`}>
									This auction ends after a planned system upgrade at 7:00 AM on February 18th, 2023
								</div>
								<div className={`${styles.price_bg} ${styles.price_bottom}`}>
									<div className={styles.price_date}>
										<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
											<path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#E4E2E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
											<path d="M11 5V11L15 13" stroke="#E4E2E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
										<p>Sale ends <span>July 29 2026</span></p>
									</div>
									<h3 className={styles.price_subtitle}>Top bid - Reserve price not met.</h3>
									<div className={styles.totalPrice}>
										<div className={styles.totalPrice_left}>
											<img src={logo} alt="logo" width={20} height={20} />
											<span>Mon</span>
										</div>
										<p className={styles.totalPrice_price}>{currentItem.price}<span>[${currentItem.realyPrice}]</span></p>
									</div>
									<div className={styles.price_action}>
										<button className={`${styles.price_button} button trans`}>Place bid</button>
									</div>
								</div>
							</div>
						</CheckBoxItem>
					</div>
					<div className={styles.offers}>
						<CheckBoxItem title="Offers" arrayItems={[]}>
							<div className={styles.offers_body}>
								No offers yet
							</div>
						</CheckBoxItem>
					</div>
				</div>
			</div>
		</>
	)
}