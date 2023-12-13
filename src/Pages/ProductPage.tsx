import { useLocation } from "react-router-dom";
import { products } from "../Data/data";

const ProductPage = () => {
	const location = useLocation();
	const id = location.pathname.split("/products/")[1];

	return (
		<div>
			{products
				.filter((product) => product.productId === id)
				.map((product) => (
					<div key={product.productId}>{product.productName}</div>
				))}
		</div>
	);
};

export default ProductPage;
