import { useContext } from "react";
import { Context } from "../../Context/Context";
import background from "../../../Images/aboutHome.svg";

const AboutHome = () => {
	const { language } = useContext(Context);
	return (
		<div
			className="flex justify-center items-center min-h-[60vh] shadow-about-home bg-fixed bg-cover bg-center py-7 md:py-0 mt-20 mb-28 md:mt-40 md:mb-32"
			style={{ backgroundImage: `url(${background})` }}
		>
			<div className="bg-secondary w-[90%] text-gray-100 font-poppins p-8 rounded-lg">
				<h1 className="text-4xl font-bold text-center mb-5">{language === "EN" ? "About Us" : "Rreth Nesh"}</h1>
				<p className="text-justify text-xs sm:text-base">
					{language === "EN"
						? "Bringing Canna International to Albania is an exciting venture. Our commitment is to provide innovative high quality products to meet the diverse needs of consumers. Knowing the needs of Albanian agriculture and the experience of Canna International, we are sure that this will be a successful journey. We offer a guarantee for the best products on the market which come to Albania exclusively from the company ADS Growshop to meet your needs. We come with new ideas on business, offering products, jobs, knowledge and development in agriculture knowing the great potential that Albania has."
						: "Sjellja e Canna International në Shqipëri është një sipërmarrje emocionuese. Angazhimi jone është për të ofruar produkte inovative me cilësi të lartë për të përmbushur nevojat e ndryshme të konsumatorëve. Duke ditur nevojat qe ka bujqesia shqipetare dhe eksperiencen e Canna International ne jemi te sigurt qe ky do te jete nje rrugetim i suksesshem. Ofrojme garanci per produktet me te mira ne treg te cilat vijne ne Shqiperi eksluzivisht nga kompania ADS Growshop per te plotesuar kerkesat tuaja. Ne vijme me ide te reja mbi biznesin, duke ofruar produkte, vende pune, njohuri dhe zhvillim ne bujqesi duke ditur potencialin e madh qe ka Shqiperia."}
				</p>
				<p className="text-green-400 font-medium mt-3">
					Canna - ADS Growshop
					{language === "EN" ? " the best." : " me te miret."}
				</p>
			</div>
		</div>
	);
};

export default AboutHome;
