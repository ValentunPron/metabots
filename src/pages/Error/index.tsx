import { Link } from 'react-router-dom'
import styles from './Error.module.scss'

export const Error = (): JSX.Element => {

	return (
		<div className={styles.body}>
			<div className={styles.content}>
				<h2 className={styles.title}>Page not found !</h2>
				<Link to="/">
					<button className={`${styles.button} button`}>Page not found !</button>
				</Link>
			</div>
			<img src="https://medabots.game/wp-content/uploads/2022/02/Oops-404-Error-with-a-broken-robot-pana.png" alt="Error" width={700} />
		</div>
	)
}