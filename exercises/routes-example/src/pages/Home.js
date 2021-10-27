import React from "react";
import { useContext } from "react";
import AppContext from "../AppContext";
import { Button, Container } from "../styles/styles";

const Home = () => {
	const { user, setUser } = useContext(AppContext);
	return (
		<Container>
			{!user ? (
				<>
					<h2>Sign in to continue</h2>
					<Button onClick={() => setUser({ username: "VK" })}>Login</Button>
				</>
			) : (
				<>
					<h2>Logged in as: {user.username}</h2>
					<Button onClick={() => setUser(null)}>Logout</Button>
				</>
			)}
		</Container>
	);
};

export default Home;
