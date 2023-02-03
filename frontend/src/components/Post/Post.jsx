// import { useEffect, useState } from 'react';
// import api, { endpoints } from '../../lib/api';
// import { getBlogs } from '../../lib/store/slices/authSlice';

import { Link } from 'react-router-dom';

function Post({ post }) {
	return (
		<div className="post">
			<img
				className="postImage"
				src={
					post.image_url
						? post.image_url
						: 'https://st4.depositphotos.com/5852318/23716/i/600/depositphotos_237163860-free-stock-photo-concept-hacker-attack-magnifier-background.jpg'
				}
				alt="post text"
			/>
			<div className="postInfo">
				<Link to={`/post/${post._id}`} className={'navlinkItem'}>
					<p className="postTitle">{post.title}</p>
				</Link>
				<p className="postDate">{new Date(post.createdAt).toUTCString()}</p>
				<p className="postAuthor">Author:{post.userName}</p>
			</div>
			<p className="postDescripton">{post.descripton}</p>
		</div>
	);
}

export default Post;
