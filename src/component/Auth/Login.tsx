import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Auth.module.scss';
import { useDispatch } from 'react-redux';
import { fetchAuth } from '../../redux/slices/auth';

interface ILogin {
	setStatus: Function
}

export const Login = ({ setStatus }: ILogin): JSX.Element => {
	const dispatch: Function = useDispatch();

	const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onChange'
	});

	const onSubmit = async (values: any) => {
		const data = await dispatch(fetchAuth(values));

		if (!data.payload) {
			alert('An error occurred while signing in!')
		}

		if ('token' in data.payload) {
			alert(`Hello ${data.payload.fullName}!`)
			window.localStorage.setItem('token', data.payload.token);
			setStatus(false);
		}
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.form_inputs}>
				<input
					{...register("email", {
						required: "Email Address is required",
					})}
					aria-invalid={errors.email ? true : false}
					type="email"
					placeholder='Email'
				/>
				{errors.email && <p role="alert">{errors.email?.message}</p>}
				<input
					{...register("password", {
						required: true,
						minLength: {
							value: 5,
							message: 'This input must exceed 5 characters'
						}
					})}
					aria-invalid={errors.password ? true : false}
					type="password"
					placeholder='Password'
				/>
				{errors.password && <p role="alert">{errors.password?.message}</p>}
			</div>
			<button className={styles.button}>Login</button>
		</form>
	)
}