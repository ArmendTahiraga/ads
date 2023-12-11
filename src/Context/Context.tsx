import React, { createContext, useEffect, useRef, useState } from "react";
import { ContextType } from "../Models/Models";
import { useLocation } from "react-router-dom";

export const Context = createContext<ContextType>({
	language: "EN",
	changeLanguage: () => {},
	isMenuActive: false,
	handleMenuClick: () => {},
	videoRef: React.createRef(),
	handleVideoEnded: () => {},
});

const ContextProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
	const [language, setLanguage] = useState<"EN" | "AL">("EN");
	const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
	const location = useLocation();

	const videoRef = useRef<HTMLVideoElement>(null);

	const changeLanguage = () => {
		setLanguage((prevLanguage) => (prevLanguage === "EN" ? "AL" : "EN"));
	};

	const handleMenuClick = () => {
		setIsMenuActive((prevIsMenuActive) => !prevIsMenuActive);
	};

	const handleVideoEnded = () => {
		videoRef.current!.currentTime = 0;
		videoRef.current!.play();
	};

	useEffect(() => {
		if (location.pathname === "/") {
			const options: IntersectionObserverInit = {
				root: null,
				rootMargin: "0px",
				threshold: 0,
			};

			const handleIntersection: IntersectionObserverCallback = (entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						videoRef.current!.play();
					} else {
						videoRef.current!.pause();
					}
				});
			};

			const observer = new IntersectionObserver(handleIntersection, options);

			observer.observe(videoRef.current!);

			return () => {
				observer.disconnect();
			};
		}
	}, [location.pathname]);

	const contextValue: ContextType = {
		language: language,
		changeLanguage: changeLanguage,
		isMenuActive: isMenuActive,
		handleMenuClick: handleMenuClick,
		videoRef: videoRef,
		handleVideoEnded: handleVideoEnded,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
