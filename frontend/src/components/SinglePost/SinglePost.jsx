import './SinglePost.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api, { endpoints } from '../../lib/api';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function SinglePost() {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [update, setUpdate] = useState(false);
	const [postUpdated, setPostUpdated] = useState(0);
	const [post, setPost] = useState('');

	const location = useLocation();

	const path = `${location.pathname.split('/')[2]}`;
	let result = window.localStorage.getItem('auth');
	const decoded = jwt_decode(result);
	const decodedID = decoded._id;
	const navigate = useNavigate();
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

			setTitle(response.results.title);
			setDesc(response.results.descripton);
		};

		getPost();
	}, [path, postUpdated]);
	const handleDelete = async () => {
		endpoints.deleteBlog.url += post._id;
		// console.log(endpoints.deleteBlog);
		const response = await api.call(endpoints.deleteBlog);
		endpoints.deleteBlog.url = '/blogs/delete/';

		if (response.confirm) {
			console.log('Post deleted succesfully');
			navigate('/blogs');
		}
	};

	const handleEdit = async () => {
		const editedPost = {
			title,
			descripton: desc,
		};
		endpoints.editBlog.url += post._id;
		// console.log(endpoints.deleteBlog);
		const response = await api.call(endpoints.editBlog, editedPost);
		endpoints.editBlog.url = '/blogs/edit-blog/';
		if (response.confirm) {
			console.log('Post edited succesfully');

			setPostUpdated(postUpdated + 1);
			setUpdate(false);
		}
	};

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

				{update ? (
					<input
						type="text"
						value={title}
						className="srcInput"
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>
				) : (
					<h1 className="postTitle">
						{post.title}
						{post.user === decodedID ? (
							<div className="postEdit">
								<i className="edit fa-solid fa-pen-to-square" onClick={() => setUpdate(true)}></i>
								<i className="delete fa-solid fa-trash" onClick={handleDelete}></i>
							</div>
						) : (
							<></>
						)}
					</h1>
				)}

				<div className="postInfo">
					<span className="postAuthor">Author: {post.user}</span>
					<span className="postCreatedDate">{new Date(post.createdAt).toUTCString()}</span>
				</div>

				{update ? (
					<textarea
						type="text"
						value={desc}
						className="srcInput inputTextArea"
						onChange={(e) => {
							setDesc(e.target.value);
						}}
					/>
				) : (
					<p className="postDecsripton">{post.descripton}</p>
				)}
				{update ? <button onClick={handleEdit}>Edit Blog</button> : <></>}
			</div>
		</div>
	);
}

export default SinglePost;
