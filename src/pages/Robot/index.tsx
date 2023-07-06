import { Link, Navigate } from "react-router-dom"

import styles from './RobotPages.module.scss'
import { IRobot } from "../../types/IRobot"

interface IRobotPages {
	currentItem: IRobot
}

export const Robot = ({ currentItem }: IRobotPages): JSX.Element => {

	if (!currentItem) {
		return <Navigate to='/notFound' />
	}

	return (
		<>
			<div className={styles.robot_top}>
				<span className={styles.core}>core</span>
				<span className={styles.piece}>Piece #{currentItem.id}</span>
				<p className={styles.rarity}>Rarity: <span className={currentItem.rarety}>{currentItem.rarety}</span></p>
			</div>
			<div className={styles.robog_bg}>
				<Link to='/'>
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
						<div className={styles.robot_image}>
							<img src={currentItem.img} alt={currentItem.name} />
						</div>
						<div className={styles.robot_info}>
							<div className={styles.robot_info_top}>
								<span className={styles.name}>{currentItem.name}</span>
								<span className={styles.part}>{currentItem.bodyPart}</span>
								<span className={styles.age}>Age: {currentItem.age}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}