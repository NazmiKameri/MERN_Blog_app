import { useState } from 'react';
import { useDispatch } from 'react-redux';
import api, { endpoints } from '../../../lib/api';
import Alert from 'react-bootstrap/Alert';
import { login } from '../../../lib/store/slices/authSlice';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessages, setErrorMessages] = useState([]);

	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const errors = [];
		setErrorMessages(errors);
		if (!email) {
			errors.push('Please provide an email!');
		}
		if (!password) {
			errors.push('Please provide an password!');
		}
		if (password && password.length < 6) {
			errors.push('Minimum password length is 6');
		}
		if (errors.length) {
			setErrorMessages(errors);
			return;
		}

		const response = await api.call(endpoints.login, { email, password });
		if (!response.confirm) {
			setErrorMessages([response.results]);
			return;
		}
		dispatch(login(response.results));
		// console.log(dispatch(login(response.results)));
	};

	return (
		<div className="login">
			<h2 className="loginTitle">Login</h2>
			<form onSubmit={handleSubmit} className="loginForm">
				{errorMessages.length > 0 &&
					errorMessages.map((elem, index) => (
						<Alert key={index} variant="danger" className="danger">
							{elem}
						</Alert>
					))}
				<label>Email</label>
				<input
					type="email"
					className="loginInput"
					placeholder="Enter your email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<label>Password</label>
				<input
					type="password"
					className="loginInput"
					placeholder="Enter your password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<button className="loginButton" variant="primary" type="submit">
					Login
				</button>
				<a href="/forgot-password" className="loginForgotPassword">
					Forgot Password
				</a>
			</form>
		</div>
	);
};
export default LoginForm;
