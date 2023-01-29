import './Login.css';
import withLayout from '../../hoc/withLayout';

import LoginForm from '../../components/Forms/Login/Login';
function Login() {
	return (
		<>
			<LoginForm />
		</>
	);
}
export default withLayout(Login);
