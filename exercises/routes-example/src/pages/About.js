import React from "react";
import { useContext } from "react";
import AppContext from "../AppContext";

import { Container, Header } from "../styles/styles";

const About = () => {
	const { user } = useContext(AppContext);
	return (
		<Container>
			{user ? (
				<Header>About {user.username}: Full Stack Developer</Header>
			) : (
				<Header>Login to access about!</Header>
			)}
		</Container>
	);
};

export default About;
