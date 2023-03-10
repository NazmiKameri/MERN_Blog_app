import './Register.css';
import withLayout from '../../hoc/withLayout';
import RegisterForm from '../../components/Forms/Register/Register';
import { useState } from 'react';

function Register() {
	const [isRegistered, setIsRegistered] = useState(false);
	return (
		<>
			{!isRegistered ? (
				<RegisterForm setRegistered={setIsRegistered} />
			) : (
				<div style={{ height: '100vh' }}>
					<h3>An email has been sent to your email ,Please verify your account.</h3>
				</div>
			)}
		</>
	);
}

export default withLayout(Register);
