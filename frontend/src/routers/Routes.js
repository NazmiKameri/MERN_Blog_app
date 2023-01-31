import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import routesData from './routesData';
import SharedRouter from './SharedRouter';
const AppRoutes = () => {
	return (
		<Routes>
			{routesData.publicRoutes.map((elem, index) => (
				<Route key={index} path={elem.path} element={<PublicRouter>{elem.element}</PublicRouter>} />
			))}

			{routesData.privateRoutes.map((elem, index) => (
				<Route
					key={index}
					path={elem.path}
					element={<PrivateRouter>{elem.element}</PrivateRouter>}
				/>
			))}

			{routesData.sharedRoutes.map((elem, index) => (
				<Route key={index} path={elem.path} element={<SharedRouter>{elem.element}</SharedRouter>} />
			))}

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
export default AppRoutes;
