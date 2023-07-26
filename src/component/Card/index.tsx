import { Link } from 'react-router-dom';

import styles from './Card.module.scss'
import mon from '../../assest/image/logo.png';
import { IRobot } from '../../types/IRobot';

interface ICard {
	currentItem: IRobot,
	cartCheck: IRobot[],
	addRobot: Function,
}

export const Card = ({ currentItem, cartCheck, addRobot }: ICard): JSX.Element => {

	const cardRarety: any = {
		'Common': styles.common,
		'UnCommon': styles.unCommon,
		'Rare': styles.rage,
		'Epic': styles.epic,
		'Legendary': styles.legendary,
	}

	const checkBuy = cartCheck.find(obj => obj._id === currentItem._id);

	return (
		<div className={`${styles.card} ${cardRarety[currentItem.rarety.name]}`}>
			<div className={styles.test}>
				<div className={styles.card_top}>
					<Link to={`/market/${currentItem._id}`}>
						<img className={styles.image} src={currentItem.img} alt={currentItem.name} height={150} width={150} />
					</Link>
					<div className={styles.card_info}>
						<h3 className={styles.card_name}>{currentItem.name}</h3>
						<h4 className={styles.card_status}>{currentItem.rarety.name}</h4>
						<p className={styles.card_age}>Age: {currentItem.age}</p>
					</div>
				</div>
				<div className={styles.card_skills}>
					<div className={`${styles.card_skill} ${styles.life}`}>
						<span className={styles.skill_name}>LIFE</span>
						<input className={styles.skill_info} style={{ background: `linear-gradient(to right, #2F9D9D 0, #1E1F28 ${currentItem.status.life}%)` }} type='*' />
						<span className={styles.skill_number}>{currentItem.status.life}</span>
					</div>
					<div className={`${styles.card_skill} ${styles.att}`}>
						<span className={styles.skill_name}>ATT.</span>
						<input className={styles.skill_info} style={{ background: `linear-gradient(to right, #FFE144 0, #1E1F28 ${currentItem.status.attack}%)` }} type='*' />
						<span className={styles.skill_number}>{currentItem.status.attack}</span>
					</div>
					<div className={`${styles.card_skill} ${styles.def}`}>
						<span className={styles.skill_name}>DEF.</span>
						<input className={styles.skill_info} style={{ background: `linear-gradient(to right, #5846F9 0, #1E1F28 ${currentItem.status.defense}%)` }} type='*' />
						<span className={styles.skill_number}>{currentItem.status.defense}</span>
					</div>
					<div className={`${styles.card_skill} ${styles.spe}`}>
						<span className={styles.skill_name}>SPE.</span>
						<input className={styles.skill_info} style={{ background: `linear-gradient(to right, #F25AC9 0, #1E1F28 ${currentItem.status.speed}%)` }} type='*' />
						<span className={styles.skill_number}>{currentItem.status.speed}</span>
					</div>
				</div>
			</div>
			<div className={styles.card_bottom}>
				<div className={styles.card_priceInfo}>
					<div className={styles.priceInfo_left}>
						<img src={mon} alt="mon" width={20} height={20} />
						<span>Mon</span>
					</div>
					<p className={styles.card_price}>{currentItem.price}<span>[${currentItem.realyPrice}]</span></p>
				</div>
				<div className={styles.card_active}>
					<Link to={`/market/${currentItem._id}`}>
						<button className='button'>Details</button>
					</Link>
					{
						checkBuy
							? <button className={`button trans not_active`}>Bought</button>
							: <button className={`button trans`} onClick={() => addRobot(currentItem._id)}>Buy Now</button>
					}
				</div>
			</div>
		</div>
	)
}