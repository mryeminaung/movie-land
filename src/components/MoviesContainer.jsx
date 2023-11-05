import { useThemeContext } from "../contexts/ThemeContext";
import MoviesList from "./MoviesList";
import SearchBar from "./SearchBar";

const MoviesContainer = () => {
	const { mode, themeStyle } = useThemeContext();
	const theme = mode === "light" ? themeStyle.light : themeStyle.dark;

	return (
		<main className="h-full py-[100px]" style={{ backgroundColor: theme.bg }}>
			<SearchBar />
			<MoviesList />
		</main>
	);
};

export default MoviesContainer;
