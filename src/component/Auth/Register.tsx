import React from 'react'
import styles from './Auth.module.scss';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchRegister } from '../../redux/slices/auth';

interface IRegister {
	setStatus: Function
}

export const Register = ({ setStatus }: IRegister): JSX.Element => {
	const dispatch: Function = useDispatch();

	const [checkPassword, setCheckPassword] = React.useState<boolean>(false);

	const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({
		defaultValues: {
			fullName: '',
			email: '',
			password: '',
			repeatPassword: '',
		},
		mode: 'onChange'
	});

	const onSubmit = (values: any) => {
		const data = dispatch(fetchRegister(values));
		if (values.password !== values.repeatPassword) {
			setCheckPassword(true);
		} else {
			setCheckPassword(false);
		}

		console.log(data);
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.form_inputs}>
				<input
					{...register("fullName", {
						required: "Full name is required",
						minLength: {
							value: 3,
							message: 'This input must exceed 3 characters'
						}
					})}
					aria-invalid={errors.fullName ? true : false}
					placeholder='Full Name'
				/>
				{errors.fullName && <p role="alert">{errors.fullName?.message}</p>}
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
				<input
					{...register("repeatPassword", {
						required: true,
						minLength: {
							value: 5,
							message: 'This input must exceed 5 characters'
						}
					})}
					aria-invalid={errors.repeatPassword ? true : false}
					type="password"
					placeholder='Repeat password'
				/>
				{errors.repeatPassword && <p role="alert">{errors.repeatPassword?.message}</p>}
				{checkPassword
					? <p role="alert">Pepeat password is required</p>
					: ''
				}
			</div>
			<button className={styles.button}>Register</button>
		</form>
	)
}