import AddNewBlog from '../pages/AddNewBlog/AddNewBlog';
import BlogPost from '../pages/BlogPost/BlogPost';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import ResetPassword from '../pages/ForgotPassword/ResetPassword';
import Login from '../pages/Login/Login';
import MyPosts from '../pages/MyPosts/MyPosts';
import Post from '../pages/Post/Post';
import Register from '../pages/Register/Register';
import VerifyAccount from '../pages/VerifyAccount/VerifyAccount';

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
		{
			path: '/auth/verify-account',
			element: <VerifyAccount />,
		},
		{
			path: '/forgot-password',
			element: <ForgotPassword />,
		},
		{
			path: '/reset-password',
			element: <ResetPassword />,
		},
	],
	sharedRoutes: [
		{
			path: '/blogs',
			element: <BlogPost />,
		},
		{
			path: '/post/:id',
			element: <Post />,
		},
	],
	privateRoutes: [
		{
			path: '/post/me',
			element: <MyPosts />,
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
