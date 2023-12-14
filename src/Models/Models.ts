export type ContextType = {
	language: "EN" | "AL";
	changeLanguage: () => void;
	isMenuActive: boolean;
	handleMenuClick: () => void;
	videoRef: React.RefObject<HTMLVideoElement>;
	handleVideoEnded: () => void;
};

export type ProductType = {
	productId: string;
	productName: string;
	productDescriptionEN: string;
	productDescriptionAL: string;
	productMiniDescriptionEN: string;
	productMiniDescriptionAL: string;
	productAdvantagesEN: string[];
	productAdvantagesAL: string[];
	productInstructionsEN: string[] | string;
	productInstructionsAL: string[] | string;
	productImages: string[];
	productBestseller: boolean;
	productSizes: number[];
	productPrices: number[];
	productVideo: string;
};

export type BestsellerType = {
	productName: string;
	productMiniDescriptionEN: string;
	productMiniDescriptionAL: string;
	productImages: string[];
};

export type ProductCardType = {
	productId: string;
	productName: string;
	productMiniDescriptionEN: string;
	productMiniDescriptionAL: string;
	productImages: string[];
	productSizes: number[];
	productPrices: number[];
};
