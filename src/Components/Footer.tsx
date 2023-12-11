import { useContext } from "react";
import { Context } from "../Context/Context";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import location from "../../Icons/location.png";
import phone from "../../Icons/phone.png";
import instagram from "../../Icons/instagram.png";
import facebook from "../../Icons/facebook.png";

const Footer = () => {
	const { language } = useContext(Context);
	return (
		<div className="bg-footer border border-footer backdrop-blur shadow-footer min-h-[30vh] flex justify-between items-center flex-col md:flex-row font-poppins px-4 py-5">
			<div className="md:w-2/5 flex justify-center items-center flex-col mb-8 md:mb-0">
				<img src={logo} alt="" className="max-h-24" />
				<h1 className="font-medium text-xl">Canna - ADS Growshop</h1>
				<p className="text-xs opacity-70">© Copyright 2023</p>
			</div>
			<div className="md:w-3/5 flex justify-around items-center flex-col md:flex-row">
				<div className="flex items-center flex-col mb-8 md:mb-0">
					<Link to="/" className="font-medium text-primary hover:text-secondary transition-colors mb-2">
						{language === "EN" ? "Home" : "Shtëpi"}
					</Link>
					<Link to="/about" className="font-medium text-primary hover:text-secondary transition-colors mb-2">
						{language === "EN" ? "About us" : "Rreth nesh"}
					</Link>
					<Link to="/products" className="font-medium text-primary hover:text-secondary transition-colors mb-2">
						{language === "EN" ? "Products" : "Produktet"}
					</Link>
					<Link
						to="/contact"
						className="font-medium transition-all bg-secondary text-gray-100 px-6 py-2 rounded-lg border-[#00595F] border-b-[4px] hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:translate-y-[2px]"
					>
						{language === "EN" ? "Contact us" : "Na kontaktoni"}
					</Link>
				</div>
				<div className="flex items-start flex-col">
					<p className="mb-2">
						<img src={location} alt="" className="inline-block me-2" />
						Yzberish, Tirana, Albania
					</p>
					<p className="mb-2">
						<img src={phone} alt="" className="inline-block me-2" />
						+355 69 343 3714
					</p>
					<a href="https://www.instagram.com/canna.albania/" target="_blank" rel="noopener" className="mb-2">
						<img src={instagram} alt="" className="inline-block me-2" />
						canna.albania
					</a>
					<a
						href="https://www.facebook.com/profile.php?id=61554161981612"
						target="_blank"
						rel="noopener"
						className="mb-2"
					>
						<img src={facebook} alt="" className="inline-block me-2" />
						Canna Albania
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
