const LoginForm = () => {
	return (
		<div className="login">
			<h2 className="loginTitle">Login</h2>
			<form action="" className="loginForm">
				<label>Email</label>
				<input type="text" className="loginInput" placeholder="Enter your email" />
				<label>Password</label>
				<input type="text" className="loginInput" placeholder="Enter your password" />
				<button className="loginButton">Login</button>
				<a href="/" className="loginForgotPassword">
					Forgot Password
				</a>
			</form>
		</div>
	);
};
export default LoginForm;
