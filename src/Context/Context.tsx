import React, { createContext, useState } from "react";
import { ContextType } from "../Models/Models";

export const Context = createContext<ContextType>({
	language: "EN",
	changeLanguage: () => {},
	isMenuActive: false,
	handleMenuClick: () => {},
});

const ContextProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
	const [language, setLanguage] = useState<"EN" | "AL">("EN");
	const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

	const changeLanguage = () => {
		setLanguage((prevLanguage) => (prevLanguage === "EN" ? "AL" : "EN"));
	};

	const handleMenuClick = () => {
		setIsMenuActive((prevIsMenuActive) => !prevIsMenuActive);
	};

	const contextValue: ContextType = {
		language: language,
		changeLanguage: changeLanguage,
		isMenuActive: isMenuActive,
		handleMenuClick: handleMenuClick,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
