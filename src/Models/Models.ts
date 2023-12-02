export type ContextType = {
	language: "EN" | "AL";
	changeLanguage: () => void;
	isMenuActive: boolean;
	handleMenuClick: () => void;
};
