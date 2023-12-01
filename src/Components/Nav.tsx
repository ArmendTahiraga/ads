import { useContext } from "react";
import { Context } from "../Context/Context";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";

const Nav = () => {
	const { language, changeLanguage } = useContext(Context);

	return (
		<nav className="absolute z-10 w-full">
			<div className="flex justify-between items-center w-4/5 mx-auto">
				<Link to="/">
					<img src={logo} alt="" className="h-20" />
				</Link>
				<div className="flex justify-evenly items-center">
					<Link to="/" className="me-11 font-poppins font-medium text-primary hover:text-secondary transition-colors">
						{language === "EN" ? "Home" : "Shtëpi"}
					</Link>
					<Link
						to="/about"
						className="me-11 font-poppins font-medium text-primary hover:text-secondary transition-colors"
					>
						{language === "EN" ? "About" : "Rreth"}
					</Link>
					<Link
						to="/products"
						className="me-11 font-poppins font-medium text-primary hover:text-secondary transition-colors"
					>
						{language === "EN" ? "Products" : "Produktet"}
					</Link>
					<Link
						to="/contact"
						className="me-11 font-poppins font-medium text-primary hover:text-secondary transition-colors"
					>
						{language === "EN" ? "Contact" : "Kontakto"}
					</Link>
					<p
						className="font-poppins font-light cursor-pointer text-primary hover:text-secondary transition-colors opacity-70"
						onClick={changeLanguage}
					>
						{language}
					</p>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
