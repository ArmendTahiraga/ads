export type ContextType = {
	language: "EN" | "AL";
	changeLanguage: () => void;
	isMenuActive: boolean;
	handleMenuClick: () => void;
};

export type ProductType = {
	productId: number;
	productName: string;
	productMiniDescriptionEN: string;
	productMiniDescriptionAL: string;
	productImage: string[];
	productBestseller: boolean;
	productSizes: number[];
	productPrices: number[];
};
