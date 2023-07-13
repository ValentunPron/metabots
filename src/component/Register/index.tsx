import React from 'react'
import styles from './Register.module.scss'

interface IRegister {
	status: boolean,
	setStatus: Function,
}

export const Register = ({ status, setStatus }: IRegister): JSX.Element => {

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
					login
						? <form className={styles.form}>
							<div className={styles.form_inputs}>
								<input type="email" placeholder='Email' name='email_login' />
								<input type="password" placeholder='Password' name='password_login' />
							</div>
							<button className={styles.button}>Login</button>
						</form>
						: <form className={styles.form}>
							<div className={styles.form_inputs}>
								<input type="text" placeholder='Full name' name='fullName' />
								<input type="email" placeholder='Email' name='email' />
								<input type="password" placeholder='Password' name='password' />
								<input type="password" placeholder='Repeat password' name='repeatPassword' />
							</div>
							<button className={styles.button}>Register</button>
						</form>
				}
			</div>
		</div>
	)
}