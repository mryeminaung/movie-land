import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
	const [mode, setMode] = useState(localStorage.getItem("theme") || "light");

	useEffect(() => {
		localStorage.setItem("theme", mode);
	}, [mode]);

	const themeStyle = {
		light: {
			bg: "white",
			body: "#fff",
			text: "#dda87d",
		},
		dark: {
			bg: "#1f2123",
			body: "#212426",
			text: "#fff",
		},
	};

	return (
		<ThemeContext.Provider value={{ mode, setMode, themeStyle }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContext;
