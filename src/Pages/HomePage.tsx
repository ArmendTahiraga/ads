import { Context } from "../Context/Context";
import { useContext } from "react";

const HomePage = () => {
	const { language } = useContext(Context);

	return <div>{language}</div>;
};

export default HomePage;
