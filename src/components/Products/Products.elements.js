import styled from "styled-components";

export const Background = styled.div`
	color: #fff;
	padding: 80px 0;
	background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
`;

export const Products = styled.div`
	display: grid;
	grid-template-columns: minmax(150px, 20%) 1fr;
`;

export const Left = styled.div``;

export const Menu = styled.div`
	position: fixed;
	top: 160;

	display: flex;
	flex-direction: column;

	background-color: #000;
	border-right: 1px solid #ec8b38;
	box-shadow: 0 10px 20px rgba(#404040, 0.15);
`;

export const MenuList = styled.ul`
	width: 100%;
	display: block;

	padding: 0;
	margin: 0;

	list-style: none;
`;

export const MenuItem = styled.li`
	position: relative;
`;

export const ButtonItem = styled.button`
	width: 100%;
	display: flex;

	border: none;
	outline: none;

	padding: 8px 8px;
	padding-right: 36px;

	font-size: 18px;
	font-weight: 700;
	line-height: 30px;

	align-items: center;
	text-transform: uppercase;

	color: white;
	background-color: black;

	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
`;

export const MenuMobile = styled.div`
	margin-bottom: 30px;
`;

export const MenuMobileList = styled.ul`
	max-width: 100%;
	padding-left: 0;

	display: flex;

	list-style: none;
	overflow-x: auto;

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const MenuMobileItem = styled.li`
	flex-shrink: 0;
	margin-right: 10px;
`;

export const ButtonMobileItem = styled.button`
	height: 70px;
	width: 110px;
	padding: 0 6px;

	font-size: 18px;
	font-weight: 700;
	line-height: 30px;

	background-color: black;
	color: white;

	text-align: center;
	text-transform: uppercase;

	overflow: hidden;
	border-radius: 5px;
	/* Lam dau 3 cham khi qua 2 dong */
	display: block;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;

	/* Ngan không cho coppy */
	user-select: none;
	-webkit-user-select: none;

	/* tat highlight khi click vao tren mobile */
	-webkit-tap-highlight-color: transparent;
`;

export const Right = styled.div`
	margin-left: 30px;
`;
