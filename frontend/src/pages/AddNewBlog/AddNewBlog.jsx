import { useState } from 'react';
import withLayout from '../../hoc/withLayout';
import './AddNewBlog.css';
import api, { endpoints } from '../../lib/api';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';

function AddNewBlog() {
	const [title, setTitle] = useState('');
	const [descripton, setDescripton] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [errorMessages, setErrorMessages] = useState([]);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const errors = [];

		if (title.length <= 3) {
			errors.push('Title length is minimum of 3 characters');
		}
		if (descripton.length <= 10) {
			errors.push('Descripton length is minimum 10 characters');
		}
		if (errors.length) {
			setErrorMessages(errors);
			return;
		}
		const newPost = {
			title,
			descripton,
			imageUrl,
		};
		const response = await api.call(endpoints.createBlog, newPost);

		if (!response.confirm) {
			console.log('failed');
			return;
		}
		navigate('/blogs');
	};
	return (
		<div className="addNewBlog">
			<form action="" className="writeForm" onSubmit={handleSubmit}>
				{errorMessages.length > 0 &&
					errorMessages.map((elem, index) => (
						<Alert key={index} variant="danger" className="danger">
							{elem}
						</Alert>
					))}
				<div className="formGroup">
					<input
						type="text"
						placeholder="Image url"
						className="srcInput"
						value={imageUrl}
						minLength="1"
						required
						onChange={(e) => {
							setImageUrl(e.target.value);
						}}
					/>
					<input
						type="text"
						placeholder="title"
						className="srcInput"
						minLength="1"
						required
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>
				</div>
				<div className="formGroup">
					<textarea
						placeholder="Descripton"
						className="srcInput inputTextArea"
						required
						minLength="1"
						value={descripton}
						onChange={(e) => {
							setDescripton(e.target.value);
						}}
					/>
					<button onClick={handleSubmit}>Add new blog</button>
				</div>
			</form>
		</div>
	);
}

export default withLayout(AddNewBlog);
