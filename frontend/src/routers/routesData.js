import BlogPost from '../pages/BlogPost/BlogPost';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound/NotFound';
import Post from '../pages/Post/Post';
import Register from '../pages/Register/Register';

const routesData = [
	{
		path: '/',
		element: <Login />,
	},
	{
		path: '/register',
		element: <Register />,
	},
	{
		path: '/blogs',
		element: <BlogPost />,
	},
	{
		path: '/post',
		element: <Post />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
];

export default routesData;
