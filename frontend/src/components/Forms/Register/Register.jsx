const RegisterForm = () => {
	return (
		<div className="register">
			<h2 className="registerTitle">Register</h2>
			<form action="" className="registerForm">
				<label>Firstname</label>
				<input type="text" className="registerInput" placeholder="Enter your firstname" />
				<label>lastname</label>
				<input type="text" className="registerInput" placeholder="Enter your lastname" />
				<label>Email</label>
				<input type="email" className="registerInput" placeholder="Enter your email" />
				<label>Password</label>
				<input type="text" className="registerInput" placeholder="Enter your password" />

				<button className="registerButton">Register</button>
			</form>
		</div>
	);
};
export default RegisterForm;
