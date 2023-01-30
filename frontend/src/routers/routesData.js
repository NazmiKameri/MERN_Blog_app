import AddNewBlog from '../pages/AddNewBlog/AddNewBlog';
import BlogPost from '../pages/BlogPost/BlogPost';
import Login from '../pages/Login/Login';
import Post from '../pages/Post/Post';
import Register from '../pages/Register/Register';

const routesData = {
	publicRoutes: [
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/register',
			element: <Register />,
		},
	],
	privateRoutes: [
		{
			path: '/blogs',
			element: <BlogPost />,
		},

		{
			path: '/post/:id',
			element: <Post />,
		},
		{
			path: '/write',
			element: <AddNewBlog />,
		},
		{
			path: '/',
			element: <Login />,
		},
	],
};

export default routesData;
