import { Route, Routes } from 'react-router-dom';
import routesData from './routesData';

const AppRoutes = () => {
	return (
		<Routes>
			{routesData.map((elem, index) => (
				<Route key={index} path={elem.path} element={elem.element} />
			))}
		</Routes>
	);
};
export default AppRoutes;
