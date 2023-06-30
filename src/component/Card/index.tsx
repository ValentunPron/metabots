import styles from './Card.module.scss'
import image from '../../assest/image/market/01.png';

import mon from '../../assest/image/logo.png';

export const Card = () => {

	return (
		<div className={styles.card}>
			<div className={styles.test}>
				<div className={styles.card_top}>
					<img className={styles.image} src={image} alt="hero" height={150} width={150} />
					<div className={styles.card_info}>
						<h3 className={styles.card_name}>Geisha</h3>
						<h4 className={styles.card_status}>Legendary</h4>
						<p className={styles.card_age}>Age: 3895</p>
					</div>
				</div>
				<div className={styles.card_skills}>
					<div className={`${styles.card_skill} ${styles.life}`}>
						<span className={styles.skill_name}>LIFE</span>
						<input className={styles.skill_info} style={{ background: `linear-gradient(to right, #2F9D9D 0, #1E1F28 ${30}%)` }} type='*' />
						<span className={styles.skill_number}>30</span>
					</div>
					<div className={`${styles.card_skill} ${styles.att}`}>
						<span className={styles.skill_name}>ATT.</span>
						<input className={styles.skill_info} style={{ background: `linear-gradient(to right, #FFE144 0, #1E1F28 ${30}%)` }} type='*' />
						<span className={styles.skill_number}>30</span>
					</div>
					<div className={`${styles.card_skill} ${styles.def}`}>
						<span className={styles.skill_name}>DEF.</span>
						<input className={styles.skill_info} style={{ background: `linear-gradient(to right, #5846F9 0, #1E1F28 ${30}%)` }} type='*' />
						<span className={styles.skill_number}>30</span>
					</div>
					<div className={`${styles.card_skill} ${styles.spe}`}>
						<span className={styles.skill_name}>SPE.</span>
						<input className={styles.skill_info} style={{ background: `linear-gradient(to right, #F25AC9 0, #1E1F28 ${30}%)` }} type='*' />
						<span className={styles.skill_number}>30</span>
					</div>
				</div>
			</div>
			<div className={styles.card_bottom}>
				<div className={styles.card_priceInfo}>
					<div className={styles.priceInfo_left}>
						<img src={mon} alt="mon" width={20} height={20} />
						<span>Mon</span>
					</div>
					<p className={styles.card_price}>00.18 <span>[$67]</span></p>
				</div>
				<div className={styles.card_active}>
					<button className='button'>Details</button>
					<button className='button trans'>Buy Now</button>
				</div>
			</div>
		</div>
	)
}