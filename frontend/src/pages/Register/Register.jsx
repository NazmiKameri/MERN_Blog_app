import './Register.css';
import withLayout from '../../hoc/withLayout';
import RegisterForm from '../../components/Forms/Register/Register';

function Register() {
	return (
		<>
			<RegisterForm />
		</>
	);
}

export default withLayout(Register);
