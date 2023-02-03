import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../../lib/store/slices/authSlice';
import { useDispatch } from 'react-redux';

function PrivateHeader() {
	const dispatch = useDispatch();
	return (
		<>
			<div className="topCenter">
				<ul className="centerList">
					<li className="centerListItem">
						<NavLink className={'navlinkItem'} to={'/write'}>
							Add Blog
						</NavLink>
					</li>
					<li className="centerListItem">
						<NavLink className={'navlinkItem'} to={'/blogs'}>
							Blogs
						</NavLink>
					</li>
					<li className="centerListItem">
						{' '}
						<NavLink className={'navlinkItem'} to={'/post/me'}>
							My Blogs
						</NavLink>
					</li>
					<li className="centerListItem"></li>
				</ul>
			</div>
			<div className="topRight">
				<ul className="rightList">
					<li className="rightListItem">
						<NavLink className={'navlinkItem'} to={'/profile'}>
							Profile
						</NavLink>
					</li>
					<li className="rightListItem">
						<NavLink
							className={'navlinkItem'}
							onClick={() => {
								dispatch(logout());
							}}
							to={'/login'}
						>
							Logout
						</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
}

export default PrivateHeader;
