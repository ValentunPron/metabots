import { Link } from 'react-router-dom';

import styles from './Card.module.scss'
import image from '../../assest/image/market/01.png';
import mon from '../../assest/image/logo.png';

export interface ICard {
	id: string,
	name: string,
	age: number,
	img: string,
	bodyPart: string,
	rarety: string,
	family: string,
	status: {
		life: number,
		attack: number,
		deffense: number,
		speed: number,
	}
	price: number,
	realyPrice: number,
}

export const Card = ({ name, age, img, bodyPart, rarety, family, status, price, realyPrice }: ICard): JSX.Element => {

	return (
		<div className={styles.card}>
			<div className={styles.test}>
				<div className={styles.card_top}>
					<Link to="/">
						<img className={styles.image} src={img} alt={name} height={150} width={150} />
					</Link>
					<div className={styles.card_info}>
						<h3 className={styles.card_name}>{name}</h3>
						<h4 className={styles.card_status}>{rarety}</h4>
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
						<input className={styles.skill_info} style={{ background: `linear-gradient(to right, #5846F9 0, #1E1F28 ${status.deffense}%)` }} type='*' />
						<span className={styles.skill_number}>{status.deffense}</span>
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
					<button className='button'>Details</button>
					<button className='button trans'>Buy Now</button>
				</div>
			</div>
		</div>
	)
}