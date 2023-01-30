import React from 'react';
import { NavLink } from 'react-router-dom';

function PrivateHeader() {
	return (
		<>
			<div className="topCenter"></div>
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

export default PrivateHeader;
