import React, { useEffect, useState } from 'react';
import api, { endpoints } from '../../../lib/api';
import jwt_decode from 'jwt-decode';

function Profile() {
	const [user, setUser] = useState({});
	const [update, setUpdate] = useState(false);
	const [userUpdated, setUserUpdated] = useState(0);

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [succesMessage, setSuccesMessage] = useState('');

	useEffect(() => {
		const getMe = async () => {
			let decodedID = '';
			let result = window.localStorage.getItem('auth');
			if (result) {
				const decoded = jwt_decode(result);

				decodedID = decoded._id;
			}
			endpoints.getMe.url += decodedID;
			const response = await api.call(endpoints.getMe);
			endpoints.getMe.url = '/users/';
			setUser(response.results);

			setFirstName(response.results.firstName);
			setLastName(response.results.lastName);
		};
		getMe();
	}, [userUpdated]);

	const handleEdit = async () => {
		if (user.firstName === firstName && user.lastName === lastName) {
			setSuccesMessage('');
			setUpdate(false);

			return;
		}
		const editedUser = {
			firstName,
			lastName,
		};
		endpoints.editMe.url += user._id;

		const response = await api.call(endpoints.editMe, editedUser);
		endpoints.editMe.url = '/users/edit/';
		if (response.confirm) {
			setSuccesMessage(response.results);

			setUserUpdated(userUpdated + 1);
			setUpdate(false);
		}
	};
	return (
		<div className="profile">
			<div className="profileForm">
				{succesMessage && <p className="succesEdit">{succesMessage}</p>}
				<p className="profileInfo">Email: {user?.email}</p>

				{!update ? (
					<p className="profileInfo">Name: {user?.firstName}</p>
				) : (
					<>
						<span>Name:</span>
						<input
							className="inputProfile"
							value={firstName}
							onChange={(e) => {
								setFirstName(e.target.value);
							}}
						></input>
					</>
				)}
				{!update ? (
					<p className="profileInfo">Surname: {user?.lastName}</p>
				) : (
					<>
						<span>Surname:</span>
						<input
							className="inputProfile"
							value={lastName}
							onChange={(e) => {
								setLastName(e.target.value);
							}}
						></input>
					</>
				)}
				{!update ? (
					<button
						className="profileButton"
						onClick={() => {
							setUpdate(true);
						}}
					>
						Edit User
					</button>
				) : (
					<button className="profileButton" onClick={handleEdit}>
						Submit Edited User
					</button>
				)}
			</div>
		</div>
	);
}

export default Profile;
