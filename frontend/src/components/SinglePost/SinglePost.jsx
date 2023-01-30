import './SinglePost.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api, { endpoints } from '../../lib/api';

function SinglePost() {
	const location = useLocation();

	const path = `${location.pathname.split('/')[2]}`;

	const [post, setPost] = useState('');
	useEffect(() => {
		setPost('');
		const getPost = async () => {
			endpoints.getBlog.url += path;
			const response = await api.call(endpoints.getBlog);
			endpoints.getBlog.url = '/blogs/getblog/';
			if (!response.confirm) {
				console.log('failed');
			}

			setPost(response.results);
		};

		getPost();
	}, [path]);
	console.log(post);
	return (
		<div className="singlePost">
			<div className="wrapper">
				<img
					src={
						post.image_url
							? post.image_url
							: 'https://st4.depositphotos.com/5852318/23716/i/600/depositphotos_237163860-free-stock-photo-concept-hacker-attack-magnifier-background.jpg'
					}
					alt=""
					className="postImg"
				/>
				<h1 className="postTitle">
					{post.title}
					<div className="postEdit">
						<i class="edit fa-solid fa-pen-to-square"></i>
						<i class="delete fa-solid fa-trash"></i>
					</div>
				</h1>
				<div className="postInfo">
					<span className="postAuthor">Author: {post.user}</span>
					<span className="postCreatedDate">{new Date(post.createdAt).toUTCString()}</span>
				</div>
				<p className="postDecsripton">{post.descripton}</p>
			</div>
		</div>
	);
}

export default SinglePost;
