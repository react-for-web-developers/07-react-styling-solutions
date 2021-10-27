import React from "react";
import { useContext } from "react";
import AppContext from "../AppContext";
import { Container, Header } from "../styles/styles";

const Contact = () => {
	const { user } = useContext(AppContext);

	return (
		<Container>
			{user ? (
				<>
					<Header>Contact {user.username} at: vk@example.com</Header>
				</>
			) : (
				<Header>Login to access contact details</Header>
			)}
		</Container>
	);
};

export default Contact;
