import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Container } from 'react-bootstrap';

const withLayout = (Comp) => {
	return (props) => (
		<Container>
			<Header />
			<Comp {...props} />
			<Footer />
		</Container>
	);
};

export default withLayout;
