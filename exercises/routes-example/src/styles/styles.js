import styled from "styled-components";

export const Navigation = styled.div`
	display: flex;
	background: black;
	// align-items: center;
	// text-align: center;
	// justify-content: center;
	justify-content: space-between;
	padding: 20px;
	color: white;
`;

export const Ul = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: left;
	list-style-type: none;
	color: white;
`;

export const Li = styled.li`
	color: white;
`;

export const UserData = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-right: 20px;
	font-weight: bold;
	font-size: 18px;
`;

export const Button = styled.button`
	border-radius: 3px;
	padding: 1rem 0;
	margin: 2rem 1rem;
	width: 11rem;
	background: black;
	color: white;
	border: 2px solid white;
	cursor: pointer;
`;

export const Logout = styled.div`
	margin-left: 10px;
	cursor: pointer;
	color: red;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin: 4rem auto;
`;

export const Header = styled.h2`
	margin: 10px;
	padding: 10px;
`;
