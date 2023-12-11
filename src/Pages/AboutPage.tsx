import { useContext } from "react";
import { Context } from "../Context/Context";

const AboutPage = () => {
	const { language } = useContext(Context);
	return (
		<div className="min-h-screen pt-[80px] font-poppins">
			<div className="flex flex-col w-full">
				<div className="h-[50vh] bg-about-us bg-bottom bg-cover flex justify-center items-center">
					<h1 className="font-bold text-gray-100 text-5xl">{language === "EN" ? "About us" : "Rreth nesh"}</h1>
				</div>
				<div className="w-4/5 mx-auto">
					<div className="flex flex-col md:flex-row justify-between items-center py-8">
						<div className="md:w-3/5">
							<h4 className="text-xl font-medium mb-4">{language === "EN" ? "Our Story" : "Historia jonë"}</h4>
							<p className="text-sm text-justify">
								{language === "EN"
									? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore optio adipisci iste saepe odio, repudiandae exercitationem perferendis accusantium accusamus quasi error officia suscipit praesentium eligendi ducimus qui iusto expedita porro. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore optio adipisci iste saepe odio, repudiandae exercitationem perferendis accusantium accusamus quasi error officia suscipit praesentium eligendi ducimus qui iusto expedita porro."
									: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore optio adipisci iste saepe odio, repudiandae exercitationem perferendis accusantium accusamus quasi error officia suscipit praesentium eligendi ducimus qui iusto expedita porro. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore optio adipisci iste saepe odio, repudiandae exercitationem perferendis accusantium accusamus quasi error officia suscipit praesentium eligendi ducimus qui iusto expedita porro."}
							</p>
						</div>
						<div className="md:w-2/5 flex justify-center items-center">
							<img src="../../Images/boost/boost5L.png" alt="" className="md:w-3/5" />
						</div>
					</div>
					<div className="flex flex-col md:flex-row justify-between items-center py-8">
						<div className="md:w-3/5 order-1 md:order-2">
							<h4 className="text-xl font-medium mb-4">{language === "EN" ? "Our Story" : "Historia jonë"}</h4>
							<p className="text-sm text-justify">
								{language === "EN"
									? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore optio adipisci iste saepe odio, repudiandae exercitationem perferendis accusantium accusamus quasi error officia suscipit praesentium eligendi ducimus qui iusto expedita porro. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore optio adipisci iste saepe odio, repudiandae exercitationem perferendis accusantium accusamus quasi error officia suscipit praesentium eligendi ducimus qui iusto expedita porro."
									: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore optio adipisci iste saepe odio, repudiandae exercitationem perferendis accusantium accusamus quasi error officia suscipit praesentium eligendi ducimus qui iusto expedita porro. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore optio adipisci iste saepe odio, repudiandae exercitationem perferendis accusantium accusamus quasi error officia suscipit praesentium eligendi ducimus qui iusto expedita porro."}
							</p>
						</div>
						<div className="md:w-2/5 flex justify-center items-center order-2 md:order-1">
							<img src="../../Images/boost/boost5L.png" alt="" className="md:w-3/5" />
						</div>
					</div>
					<div className="flex flex-col md:flex-row justify-between items-center py-8">
						<div className="md:w-3/5">
							<h4 className="text-xl font-medium mb-4">{language === "EN" ? "Our Story" : "Historia jonë"}</h4>
							<p className="text-sm text-justify">
								{language === "EN"
									? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore optio adipisci iste saepe odio, repudiandae exercitationem perferendis accusantium accusamus quasi error officia suscipit praesentium eligendi ducimus qui iusto expedita porro. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore optio adipisci iste saepe odio, repudiandae exercitationem perferendis accusantium accusamus quasi error officia suscipit praesentium eligendi ducimus qui iusto expedita porro."
									: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore optio adipisci iste saepe odio, repudiandae exercitationem perferendis accusantium accusamus quasi error officia suscipit praesentium eligendi ducimus qui iusto expedita porro. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore optio adipisci iste saepe odio, repudiandae exercitationem perferendis accusantium accusamus quasi error officia suscipit praesentium eligendi ducimus qui iusto expedita porro."}
							</p>
						</div>
						<div className="md:w-2/5 flex justify-center items-center">
							<img src="../../Images/boost/boost5L.png" alt="" className="md:w-3/5" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
