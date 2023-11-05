import { useThemeContext } from "../contexts/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa6";

const Navbar = () => {
	const { mode, setMode, themeStyle } = useThemeContext();
	const theme = mode === "light" ? themeStyle.light : themeStyle.dark;
	const isLight = mode === "light";

	return (
		<div
			className="w-full top-0 left-0 fixed z-50 shadow-sm shadow-[#f9d3b483] py-4"
			style={{ backgroundColor: isLight ? "white" : theme.bg }}
		>
			<nav className="container mx-auto px-6 flex items-center justify-between">
				<header>
					<h1 className="text-2xl md:text-4xl text-[#f9d3b4]">
						<a href="/">MovieLand</a>
					</h1>
				</header>
				<div className="theme-toggler">
					<input
						type="checkbox"
						className="checkbox"
						id="checkbox"
						checked={mode === "dark"}
						onChange={() => {
							setMode((preMode) => (preMode === "light" ? "dark" : "light"));
						}}
					/>
					<label htmlFor="checkbox" className="checkbox-label">
						<FaMoon className="text-black" />
						<FaSun className="text-white" />
						<span className="ball"></span>
					</label>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
