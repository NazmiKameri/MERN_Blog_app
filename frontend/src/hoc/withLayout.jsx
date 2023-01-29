import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
const withLayout = (Comp) => {
	return (props) => {
		<>
			<Header />
			<Comp {...props} />
			<Footer />
		</>;
	};
};
