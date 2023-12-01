import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import ProductPage from "../Pages/ProductPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "", element: <HomePage /> },
			{ path: "about", element: <AboutPage /> },
			{ path: "products/:ticker", element: <ProductPage /> },
		],
	},
]);
