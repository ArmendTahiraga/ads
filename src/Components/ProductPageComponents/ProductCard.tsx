import { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import { ProductCardType } from "../../Models/Models";
import { Link } from "react-router-dom";

const ProductCard: React.FC<ProductCardType> = ({
	productName,
	productMiniDescriptionEN,
	productMiniDescriptionAL,
	productPrices,
	productSizes,
	productImages,
}) => {
	const { language } = useContext(Context);

	const [productVariant, setProductVariant] = useState<number>(0);

	return (
		<div className="bg-slate-50 shadow-xl rounded-xl flex justify-between items-center flex-col">
			<div>
				<div className="flex justify-center">
					<img src={productImages[productVariant]} alt="" className="max-h-60" />
				</div>
				<div className="font-poppins text-primary">
					<div className="px-3 py-2">
						<h1 className="font-medium text-xl mb-1 text-secondary">{productName}</h1>
						<p className="opacity-70 text-xs text-justify">
							{language === "EN" ? productMiniDescriptionEN : productMiniDescriptionAL}
						</p>
						<div className="flex justify-between items-center mt-5">
							<h4 className="font-medium text-lg text-secondary">{productPrices[productVariant]}€</h4>
							<div className="border border-gray-400 rounded-md">
								{productSizes.map((size, index) => (
									<button
										key={index}
										type="button"
										onClick={() => setProductVariant(index)}
										className={
											index !== productSizes.length - 1
												? "border-r border-gray-400 py-1 w-10 text-center hover:text-secondary"
												: "py-1 w-10 text-center hover:text-secondary"
										}
									>
										{size}
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Link
				to="/products"
				type="button"
				className="bg-secondary w-full rounded-b-xl text-gray-100 font-medium text-lg py-2 text-center font-poppins mt-8"
			>
				{language === "EN" ? "Learn more" : "Mëso më shumë"}
			</Link>
		</div>
	);
};

export default ProductCard;
