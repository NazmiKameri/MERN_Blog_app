import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../../lib/store/slices/authSlice';
import { useDispatch } from 'react-redux';

function PublicHeader() {
	const dispatch = useDispatch();
	return (
		<>
			<div className="topCenter">
				<ul className="centerList">
					<li className="centerListItem">
						<NavLink className={'navlinkItem'} to={'/blogs'}>
							Home
						</NavLink>
					</li>
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
						<NavLink className={'navlinkItem'} to={'/post'}>
							Post
						</NavLink>
					</li>
				</ul>
			</div>
			<div className="topRight">
				<ul className="rightList">
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

export default PublicHeader;
