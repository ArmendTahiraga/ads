import { useContext } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import ad from "../../../Videos/ad.mp4";

const Hero = () => {
	const { language, videoRef, handleVideoEnded } = useContext(Context);
	const [text] = useTypewriter({
		words: language === "EN" ? ["healthier", "stronger", "faster"] : ["të shëndetshme", "të forta", "shpejt"],
		loop: true,
		delaySpeed: 3000,
		typeSpeed: 120,
	});

	return (
		<div className="h-screen flex justify-center items-center md:justify-between md:items-end flex-col md:flex-row w-[90%] mx-auto pt-[60px] md:pt-0">
			<div className="flex justify-center items-center md:items-start flex-col md:w-5/12 md:h-hero-section-md mb-12 md:mb-0">
				<h1 className="text-primary font-poppins font-bold text-3xl md:text-4xl leading-tight mb-2 text-center md:text-left">
					{language === "EN" ? "Help your plants grow " : "Ndihmoni bimët tuaja të rriten më "}
					<span className="text-secondary">{text}.</span>
				</h1>
				<p className="hidden md:block text-primary font-poppins text-xs mb-8">
					{language === "EN"
						? "As industry leaders, we distribute top-tier plant nutrients, additives, and potting mixes, ensuring quality for your gardens. Choose excellence, choose Canna - ADS Growshop."
						: "Si lider të industrisë, ne shpërndajmë lëndë ushqyese, aditivë dhe përzierje të bimëve të standardeve të larta, duke siguruar cilësi për kopshtet tuaja. Zgjidhni ekselencën, zgjidhni Canna - ADS Growshop."}
				</p>
				<Link
					to="/products"
					className="font-medium font-poppins text-sm transition-all bg-secondary text-gray-100 px-6 py-3 rounded-lg border-[#00595F] border-b-[4px] hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:translate-y-[2px]"
				>
					{language === "EN" ? "View products" : "Shiko produktet"}
				</Link>
			</div>
			<div className="md:h-hero-section-md flex justify-center items-center md:w-1/2">
				<video
					autoPlay
					muted
					className="rounded-3xl shadow-hero-image max-h-[275px] md:max-h-none"
					ref={videoRef}
					onEnded={handleVideoEnded}
				>
					<source src={ad} type="video/mp4" />
				</video>
			</div>
		</div>
	);
};

export default Hero;
