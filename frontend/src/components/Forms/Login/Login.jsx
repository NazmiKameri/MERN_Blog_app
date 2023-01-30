import { useState } from 'react';

import Alert from 'react-bootstrap/Alert';
const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessages, setErrorMessages] = useState([]);

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
		if (errors.length) {
			setErrorMessages(errors);
			return;
		}
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
					type="text"
					className="loginInput"
					placeholder="Enter your email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<label>Password</label>
				<input
					type="text"
					className="loginInput"
					placeholder="Enter your password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<button className="loginButton" type="submit">
					Login
				</button>
				<a href="/" className="loginForgotPassword">
					Forgot Password
				</a>
			</form>
		</div>
	);
};
export default LoginForm;
