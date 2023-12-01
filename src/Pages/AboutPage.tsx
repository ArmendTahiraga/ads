import { useContext } from "react";
import { Context } from "../Context/Context";

const AboutPage = () => {
	const { language } = useContext(Context);

	return <div>AboutPage {language}</div>;
};

export default AboutPage;
