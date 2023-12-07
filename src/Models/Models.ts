export type ContextType = {
	language: "EN" | "AL";
	changeLanguage: () => void;
	isMenuActive: boolean;
	handleMenuClick: () => void;
	videoRef: React.RefObject<HTMLVideoElement>;
	handleVideoEnded: () => void;
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

export type BestsellerType = {
	productName: string;
	productMiniDescriptionEN: string;
	productMiniDescriptionAL: string;
	productImage: string[];
};
