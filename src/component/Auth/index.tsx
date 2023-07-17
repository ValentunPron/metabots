import React from 'react'
import styles from './Auth.module.scss'
import { Login } from './Login';
import { Register } from './Register';

interface IRegister {
	status: boolean,
	setStatus: Function,
}

export const Auth = ({ status, setStatus }: IRegister): JSX.Element => {

	const [login, setLogin] = React.useState<boolean>(false);

	const handleOutsideClick = (event: any) => {
		if (event.target.className === `${styles.wrapper} ${styles.active}`) {
			setStatus(false);
		}
	};

	React.useEffect(() => {
		const handleKeyDown = (event: any) => {
			if (event.keyCode === 27) {
				setStatus(false);
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<div className={`${styles.wrapper} ${status ? styles.active : ''}`} onClick={handleOutsideClick}>
			<div className={styles.body}>
				<div className={styles.action}>
					<button className={`${styles.action_button} ${login ? '' : styles.active}`} onClick={() => setLogin(false)}>register</button>
					<button className={`${styles.action_button} ${login ? styles.active : ''}`} onClick={() => setLogin(true)}>login</button>
					<button className={styles.close} onClick={() => setStatus(false)}><span></span></button>
				</div>
				{
					login ? <Login setStatus={setStatus} /> : <Register setStatus={setStatus} />
				}
			</div>
		</div>
	)
}