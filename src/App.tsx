import { useContext } from "react";
import { Context } from "./Context/Context";
import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav";

const App = () => {
	const { language } = useContext(Context);

	console.log(language);
	return (
		<>
			<Nav />
			<Outlet />
		</>
	);
};

export default App;
