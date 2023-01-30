import Post from '../../components/Post/Post';
import withLayout from '../../hoc/withLayout';
import './BlogPost.css';
import { useEffect, useState } from 'react';
import api, { endpoints } from '../../lib/api';

function BlogPost() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const response = await api.call(endpoints.getBlogs);
			if (!response.confirm) {
				console.log('failed');
			}
			setPosts(response.results);
			console.log(response);
		};
		fetchData();
	}, []);

	return (
		<div className="posts">
			{posts.map((post) => {
				return <Post post={post} />;
			})}
		</div>
	);
}

export default withLayout(BlogPost);
