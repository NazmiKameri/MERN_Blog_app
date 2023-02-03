import './Profile.css';
import withLayout from '../../hoc/withLayout';
import ProfileForm from '../../components/Forms/Profile/Profile';

function Profile() {
	return (
		<>
			<ProfileForm />
		</>
	);
}
export default withLayout(Profile);
