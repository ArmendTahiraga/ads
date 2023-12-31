import { useContext } from "react";import { Context } from "../../Context/Context";
import { BestsellerType } from "../../Models/Models";
import { Link } from "react-router-dom";

const Bestseller: React.FC<BestsellerType> = ({
	productName,
	productMiniDescriptionEN,
	productMiniDescriptionAL,
	productImages,
}) => {
	const { language } = useContext(Context);
	return (
		<div className="flex md:w-[30%] flex-col rounded-xl  bg-gradient-to-tr from-[#00795f] to-secondary bg-clip-border text-gray-100 font-poppins shadow-md md:min-h-[479px] mb-10 md:mb-0">
			<div className="mx-4 mt-3 h-44 rounded-xl shadow-lg bg-white flex justify-center items-center">
				<img src={"../.." + productImages[productImages.length - 1]} alt="" className="h-full" />
			</div>
			<div className="p-6">
				<h5 className="mb-2 block text-xl font-semibold leading-snug">{productName}</h5>
				<p className="text-sm font-light text-justify">
					{language === "EN" ? productMiniDescriptionEN : productMiniDescriptionAL}
				</p>
			</div>
			<div className="p-6 pt-0 text-center">
				<Link
					to="/products"
					type="button"
					className="rounded-lg bg-white py-3 px-6 text-center text-sm font-bold text-secondary shadow-md transition-shadow hover:shadow-lg "
				>
					{language === "EN" ? "Learn more" : "Mëso më shumë"}
				</Link>
			</div>
		</div>
	);
};

export default Bestseller;
