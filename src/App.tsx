import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav";

const App = () => {
	return (
		<>
			<Nav />
			<Outlet />
		</>
	);
};

export default App;
