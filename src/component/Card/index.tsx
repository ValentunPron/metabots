import { Link } from 'react-router-dom';

import styles from './Card.module.scss'
import mon from '../../assest/image/logo.png';
import { IRobot } from '../../types/IRobot';

export const Card = ({ id, name, age, img, bodyPart, rarety, family, status, price, realyPrice }: IRobot): JSX.Element => {

	const cardRarety: any = {
		'Common': styles.common,
		'UnCommon': styles.unCommon,
		'Rare': styles.rage,
		'Epic': styles.epic,
		'Legendary': styles.legendary,
	}

	return (
		<div className={`${styles.card} ${cardRarety[rarety.name]}`}>
			<div className={styles.test}>
				<div className={styles.card_top}>
					<Link to={`/market/${id}`}>
						<img className={styles.image} src={img} alt={name} height={150} width={150} />
					</Link>
					<div className={styles.card_info}>
						<h3 className={styles.card_name}>{name}</h3>
						<h4 className={styles.card_status}>{rarety.name}</h4>
						<p className={styles.card_age}>Age: {age}</p>
					</div>
				</div>
				<div className={styles.card_skills}>
					<div className={`${styles.card_skill} ${styles.life}`}>
						<span className={styles.skill_name}>LIFE</span>
						<input className={styles.skill_info} style={{ background: `linear-gradient(to right, #2F9D9D 0, #1E1F28 ${status.life}%)` }} type='*' />
						<span className={styles.skill_number}>{status.life}</span>
					</div>
					<div className={`${styles.card_skill} ${styles.att}`}>
						<span className={styles.skill_name}>ATT.</span>
						<input className={styles.skill_info} style={{ background: `linear-gradient(to right, #FFE144 0, #1E1F28 ${status.attack}%)` }} type='*' />
						<span className={styles.skill_number}>{status.attack}</span>
					</div>
					<div className={`${styles.card_skill} ${styles.def}`}>
						<span className={styles.skill_name}>DEF.</span>
						<input className={styles.skill_info} style={{ background: `linear-gradient(to right, #5846F9 0, #1E1F28 ${status.defense}%)` }} type='*' />
						<span className={styles.skill_number}>{status.defense}</span>
					</div>
					<div className={`${styles.card_skill} ${styles.spe}`}>
						<span className={styles.skill_name}>SPE.</span>
						<input className={styles.skill_info} style={{ background: `linear-gradient(to right, #F25AC9 0, #1E1F28 ${status.speed}%)` }} type='*' />
						<span className={styles.skill_number}>{status.speed}</span>
					</div>
				</div>
			</div>
			<div className={styles.card_bottom}>
				<div className={styles.card_priceInfo}>
					<div className={styles.priceInfo_left}>
						<img src={mon} alt="mon" width={20} height={20} />
						<span>Mon</span>
					</div>
					<p className={styles.card_price}>{price}<span>[${realyPrice}]</span></p>
				</div>
				<div className={styles.card_active}>
					<Link to={`/market/${id}`}>
						<button className='button'>Details</button>
					</Link>
					<button className='button trans'>Buy Now</button>
				</div>
			</div>
		</div>
	)
}