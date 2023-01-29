import withLayout from '../../hoc/withLayout';
import './AddNewBlog.css';

function AddNewBlog() {
	return (
		<div className="addNewBlog">
			<form action="" className="writeForm">
				<div className="formGroup">
					<input type="text" placeholder="Image url" className="srcInput" />
					<input type="text" placeholder="title" className="srcInput" />
				</div>
				<div className="formGroup">
					<textarea placeholder="Descripton" className="srcInput inputTextArea" />
					<button>Add new blog</button>
				</div>
			</form>
		</div>
	);
}

export default withLayout(AddNewBlog);
