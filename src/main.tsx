import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "./Context/Context";
import App from "./App";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProductPage from "./Pages/ProductPage";
import ContactPage from "./Pages/ContactPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ContextProvider>
				<Routes>
					<Route path="/" element={<App />}>
						<Route path="" element={<HomePage />} />
						<Route path="about" element={<AboutPage />} />
						<Route path="products" element={<ProductPage />} />
						<Route path="contact" element={<ContactPage />} />
					</Route>
				</Routes>
			</ContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
