import React from 'react';
import { NavLink } from 'react-router-dom';

function PublicHeader() {
	return (
		<>
			<div className="topCenter">
				<li className="centerListItem">
					<NavLink className={'navlinkItem'} to={'/blogs'}>
						Home
					</NavLink>
				</li>
			</div>
			<div className="topRight">
				<ul className="rightList">
					<li className="rightListItem">
						<NavLink className={'navlinkItem'} to={'/login'}>
							Login
						</NavLink>
					</li>
					<li className="rightListItem">
						<NavLink className={'navlinkItem'} to={'/register'}>
							Register
						</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
}

export default PublicHeader;
