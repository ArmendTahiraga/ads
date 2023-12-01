import { useContext } from "react";
import { Context } from "../Context/Context";
import { Link } from "react-router-dom";

const Nav = () => {
	const { language, changeLanguage } = useContext(Context);

	return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<p onClick={changeLanguage}>{language}</p>
		</div>
	);
};

export default Nav;
