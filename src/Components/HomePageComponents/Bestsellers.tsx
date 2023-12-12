import { useContext } from "react";
import { Context } from "../../Context/Context";
import { products } from "../../Data/data";
import Bestseller from "./Bestseller";

const Bestsellers = () => {
	const { language } = useContext(Context);

	return (
		<div className="w-11/12 mx-auto my-16">
			<h1 className="font-poppins font-bold text-4xl text-center text-primary mb-10">
				{language === "EN" ? "Bestsellers" : "Më të shiturit"}
			</h1>
			<div className="flex justify-between items-center flex-col md:flex-row">
				{products.map(
					({
						productId,
						productName,
						productMiniDescriptionEN,
						productMiniDescriptionAL,
						productImages,
						productBestseller,
					}) => {
						if (productBestseller) {
							return (
								<Bestseller
									key={productId}
									productName={productName}
									productMiniDescriptionEN={productMiniDescriptionEN}
									productMiniDescriptionAL={productMiniDescriptionAL}
									productImages={productImages}
								/>
							);
						}
					}
				)}
			</div>
		</div>
	);
};

export default Bestsellers;
