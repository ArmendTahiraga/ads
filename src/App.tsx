import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

const App = () => {
	return (
		<div className="bg-gradient-to-b from-[#bbf8c68a] to-[#daeadd]">
			<Nav />
			<Outlet />
			<Footer />
		</div>
	);
};

export default App;
