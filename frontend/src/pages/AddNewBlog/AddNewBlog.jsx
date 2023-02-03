import withLayout from '../../hoc/withLayout';
import './AddNewBlog.css';
import AddBlog from '../../components/AddNewBlog/AddBlog';

function AddNewBlog() {
	return <AddBlog />;
}

export default withLayout(AddNewBlog);
