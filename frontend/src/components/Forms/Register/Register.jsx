import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import api, { endpoints } from '../../../lib/api';
import { emailRegex, passwordRegex } from '../../../lib/constants';

const RegisterForm = ({ setRegistered }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [errorMessages, setErrorMessages] = useState([]);
	const handleSubmit = async (e) => {
		e.preventDefault();

		const errors = [];
		setErrorMessages(errors);
		if (!emailRegex.test(email)) {
			errors.push('Please provide a valid email address');
		}
		if (!passwordRegex.test(password)) {
			errors.push(
				`Password must be minimum six characters,
				 `
			);
			errors.push(`at least one letter and one number`);
		}
		if (!firstName) {
			errors.push('Please provide a first name');
		}
		if (!lastName) {
			errors.push('Please provide a last name');
		}

		if (errors.length) {
			setErrorMessages(errors);
			return;
		}
		const response = await api.call(endpoints.register, { email, password, firstName, lastName });
		if (!response.confirm) {
			setErrorMessages([response.results]);
			return;
		}
		setRegistered(true);
	};

	return (
		<div className="register">
			<h2 className="registerTitle">Register</h2>
			<form action="" className="registerForm" onSubmit={handleSubmit}>
				{errorMessages.length > 0 &&
					errorMessages.map((elem, index) => (
						<Alert key={index} variant="danger" className="danger">
							{elem}
						</Alert>
					))}
				<label>Firstname</label>
				<input
					type="text"
					value={firstName}
					className="registerInput"
					placeholder="Enter your firstname"
					onChange={(e) => {
						setFirstName(e.target.value);
					}}
				/>
				<label>Lastname</label>
				<input
					type="text"
					value={lastName}
					className="registerInput"
					placeholder="Enter your lastname"
					onChange={(e) => {
						setLastName(e.target.value);
					}}
				/>
				<label>Email</label>
				<input
					type="email"
					value={email}
					className="registerInput"
					placeholder="Enter your email"
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<label>Password</label>
				<input
					type="text"
					value={password}
					className="registerInput"
					placeholder="Enter your password"
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>

				<button className="registerButton" type="submit">
					Register
				</button>
			</form>
		</div>
	);
};
export default RegisterForm;
