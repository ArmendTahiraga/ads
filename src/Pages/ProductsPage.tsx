import { useContext } from "react";
import ProductCard from "../Components/ProductPageComponents/ProductCard";
import { products } from "../Data/data";
import { Context } from "../Context/Context";

const ProductsPage = () => {
	const { language } = useContext(Context);

	return (
		<div className="min-h-screen pt-[80px]">
			<h1 className="font-bold text-primary text-5xl text-center mb-10 mt-7">
				{language === "EN" ? "What we offer" : "Çfarë ne ofrojmë"}
			</h1>
			<div className="w-[90%] mx-auto">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 mb-12">
					{products.map(
						({
							productId,
							productName,
							productMiniDescriptionEN,
							productMiniDescriptionAL,
							productImages,
							productSizes,
							productPrices,
						}) => (
							<ProductCard
								key={productId}
								productId={productId}
								productName={productName}
								productMiniDescriptionEN={productMiniDescriptionEN}
								productMiniDescriptionAL={productMiniDescriptionAL}
								productImages={productImages}
								productSizes={productSizes}
								productPrices={productPrices}
							/>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductsPage;
