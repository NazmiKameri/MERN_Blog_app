import './Post.css';
import withLayout from '../../hoc/withLayout';
import SinglePost from '../../components/SinglePost/SinglePost';

function Post() {
	return (
		<div>
			<SinglePost />
		</div>
	);
}

export default withLayout(Post);
