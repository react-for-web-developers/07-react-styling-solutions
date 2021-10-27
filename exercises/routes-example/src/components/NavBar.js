import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../AppContext";

import { Navigation, Ul, Li, UserData, Logout } from "../styles/styles";

const NavBar = () => {
	const { user, setUser } = useContext(AppContext);
	return (
		<Navigation>
			<Ul>
				<Li>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/contact">Contact</Link>
				</Li>
			</Ul>
			{user && (
				<>
					<UserData>
						Hello {user.username}!
						<Logout onClick={() => setUser(null)}>Logout</Logout>
					</UserData>
				</>
			)}
		</Navigation>
	);
};

export default NavBar;
