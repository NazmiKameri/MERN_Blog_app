import { useState } from 'react';
import { Form, Alert, Button } from 'react-bootstrap';
import api, { endpoints } from '../../../lib/api';
import { emailRegex } from '../../../lib/constants';
import './ForgotPassword.css';

const ForgotPassword = () => {
	const [email, setEmail] = useState('');
	const [errorMessages, setErrorMessages] = useState([]);
	const [message, setMessage] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		const errors = [];
		setErrorMessages(errors);
		if (!emailRegex.test(email)) {
			errors.push('Please provide a valid email address');
		}

		if (errorMessages.length) {
			setErrorMessages(errors);
			return;
		}

		const response = await api.call(endpoints.requestPasswordReset, { email });
		if (response.confirm) {
			setMessage('An email has been sent to you.Check your email and follow the link in it');
		}
	};

	return (
		<Form onSubmit={handleSubmit} className="formForgotPassword">
			<h2> Forgot Password</h2>

			{errorMessages.length > 0 &&
				errorMessages.map((elem, index) => (
					<Alert key={index} variant="danger">
						{elem}
					</Alert>
				))}
			{message.length > 0 && <Alert className="forgotPasswordAlert">{message}</Alert>}

			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address: </Form.Label>
				<Form.Control
					type="email"
					className="forgetPasswordInput"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					placeholder="Enter your email address"
				/>
			</Form.Group>
			<Button className="forgetPasswordButton" type="submit">
				Submit
			</Button>
		</Form>
	);
};
export default ForgotPassword;
