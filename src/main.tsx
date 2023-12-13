import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "./Context/Context";
import App from "./App";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProductsPage from "./Pages/ProductsPage";
import ProductPage from "./Pages/ProductPage";
import ContactPage from "./Pages/ContactPage";
import "./index.css";
import { products } from "./Data/data";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ContextProvider>
				<Routes>
					<Route path="/" element={<App />}>
						<Route path="" element={<HomePage />} />
						<Route path="about" element={<AboutPage />} />
						<Route path="products" element={<ProductsPage />} />
						<Route path="contact" element={<ContactPage />} />
						{products.map(({ productId }, index) => (
							<Route key={index} path={`products/${productId}`} element={<ProductPage />} />
						))}
					</Route>
				</Routes>
			</ContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
