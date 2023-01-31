import axios from 'axios';

export const endpoints = {
	login: {
		url: '/auth/login',
		method: 'POST',
	},
	register: {
		url: '/auth/register',
		method: 'POST',
	},
	verifyAccount: {
		url: '/auth/verify-account',
		method: 'GET',
	},
	requestPasswordReset: {
		url: 'auth/request-password-reset',
		method: 'POST',
	},
	resetPassword: {
		url: 'auth/reset-password',
		method: 'POST',
	},
	getUserById: {
		url: '/users/',
		method: 'GET',
	},

	getBlogs: {
		url: '/blogs',
		method: 'GET',
		headers: {
			Authorization: 'Bearer ' + localStorage.getItem('auth'),
		},
	},
	getBlog: {
		url: '/blogs/getblog/',
		method: 'GET',
		headers: {
			Authorization: 'Bearer ' + localStorage.getItem('auth'),
		},
	},
	createBlog: {
		url: '/blogs/add-blog',
		method: 'POST',
		headers: {
			Authorization: 'Bearer ' + localStorage.getItem('auth'),
		},
	},
	deleteBlog: {
		url: '/blogs/delete/',
		method: 'Delete',
		headers: {
			Authorization: 'Bearer ' + localStorage.getItem('auth'),
		},
	},
	editBlog: {
		url: '/blogs/edit-blog/',
		method: 'PUT',
		headers: {
			Authorization: 'Bearer ' + localStorage.getItem('auth'),
		},
	},
	getMyBlogs: {
		url: '/blogs/users/',
		method: 'GET',
		headers: {
			Authorization: 'Bearer ' + localStorage.getItem('auth'),
		},
	},
};

const api = {
	call: async (endpoint, data = {}, token = null) => {
		try {
			const axiosConfig = token
				? {
						baseURL: process.env.REACT_APP_BASE_URL,
						headers: {
							Authorization: `Bearer ${token}`,
						},
				  }
				: { baseURL: process.env.REACT_APP_BASE_URL };

			const axiosInstance = axios.create(axiosConfig);

			const config = {
				...endpoint,
				data: { ...data },
			};

			const result = await axiosInstance(config);

			return result.data;
		} catch (err) {
			console.log(err);
			return err.response.data;
		}
	},
};

export default api;
