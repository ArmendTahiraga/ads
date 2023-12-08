import { useContext } from "react";
import { Context } from "../Context/Context";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../Images/logo.png";

const Nav = () => {
	const { language, changeLanguage, isMenuActive, handleMenuClick } = useContext(Context);

	return (
		<nav className="absolute z-10 w-full">
			<div className="flex justify-between items-center w-[90%] mx-auto">
				<Link to="/">
					<img src={logo} alt="" className="h-14 md:h-20" />
				</Link>
				<div className="hidden md:block">
					<div className="flex justify-evenly items-center">
						<Link
							to="/"
							className="me-11 font-poppins font-medium text-primary hover:text-secondary transition-colors"
						>
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
							className="me-11 font-poppins font-medium transition-all bg-secondary text-gray-100 px-6 py-2 rounded-lg border-[#00595F] border-b-[4px] hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:translate-y-[2px]"
						>
							{language === "EN" ? "Contact us" : "Na kontaktoni"}
						</Link>
						<p
							className="font-poppins font-light cursor-pointer text-primary hover:text-secondary transition-colors opacity-70"
							onClick={changeLanguage}
						>
							{language}
						</p>
					</div>
				</div>
				<div className="block md:hidden">
					<svg
						className={isMenuActive ? "ham hamRotate active" : "ham hamRotate"}
						viewBox="0 0 100 100"
						width="60"
						onClick={handleMenuClick}
					>
						<path
							className="line top"
							d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
						/>
						<path className="line middle" d="m 30,50 h 40" />
						<path
							className="line bottom"
							d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
						/>
					</svg>
				</div>
			</div>
			<motion.div
				className="md:hidden w-full"
				variants={{
					hidden: { height: "0px", opacity: 0 },
					visible: { height: "152px", opacity: 1 },
				}}
				initial="hidden"
				animate={isMenuActive ? "visible" : "hidden"}
				transition={{ duration: 0.3, delay: 0.2 }}
			>
				<div className="flex justify-evenly items-center flex-col bg-white shadow-md py-2 w-full h-full">
					<Link
						to="/"
						className="font-poppins font-medium text-primary hover:text-secondary transition-colors mb-1"
						onClick={handleMenuClick}
					>
						{language === "EN" ? "Home" : "Shtëpi"}
					</Link>
					<Link
						to="/about"
						className="font-poppins font-medium text-primary hover:text-secondary transition-colors mb-1"
						onClick={handleMenuClick}
					>
						{language === "EN" ? "About" : "Rreth"}
					</Link>
					<Link
						to="/products"
						className="font-poppins font-medium text-primary hover:text-secondary transition-colors mb-1"
						onClick={handleMenuClick}
					>
						{language === "EN" ? "Products" : "Produktet"}
					</Link>
					<Link
						to="/contact"
						className="font-poppins font-medium transition-all bg-secondary text-gray-100 px-6 py-2 rounded-lg border-[#00595F] border-b-[4px] hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:translate-y-[2px] mb-1"
						onClick={handleMenuClick}
					>
						{language === "EN" ? "Contact" : "Kontakto"}
					</Link>
					<p
						className="font-poppins font-light cursor-pointer text-primary hover:text-secondary transition-colors opacity-70"
						onClick={() => {
							changeLanguage();
							handleMenuClick();
						}}
					>
						{language}
					</p>
				</div>
			</motion.div>
		</nav>
	);
};

export default Nav;
