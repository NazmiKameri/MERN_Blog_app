import Post from '../../components/Post/Post';
import withLayout from '../../hoc/withLayout';
import './BlogPost.css';

function BlogPost() {
	return (
		<div className="posts">
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
		</div>
	);
}

export default withLayout(BlogPost);
