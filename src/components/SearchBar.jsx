import { useMovieContext } from "../contexts/MovieContext";
import { useThemeContext } from "../contexts/ThemeContext";
import SearchIcon from "../assets/search.svg";

const SearchBar = () => {
	const { title, setTitle, searchMovies } = useMovieContext();
	const { mode, themeStyle } = useThemeContext();
	const theme = mode === "light" ? themeStyle.light : themeStyle.dark;
	const isDark = mode === "dark";

	return (
		<section
			className="search container max-w-[50%] mx-auto px-[1.75rem] py-[1.5rem] flex justify-center items-center rounded-[50px] mb-[3rem] border"
			style={{
				backgroundColor: isDark ? "#1f2123" : theme.bg,
				borderColor: isDark ? "transparent" : "#f9d3b4",
				boxShadow: isDark
					? "5px 5px 4px #1c1d1f, -5px -5px 7px #222527"
					: "1px 1px 4px #e4a877, -1px -1px 4px #e4b18a",
			}}
		>
			<input
				value={title}
				className="text-base md:text-xl w-full mr-5 font-semibold outline-none border-none text-[#a1a1a1] bg-inherit"
				onChange={(e) => setTitle(e.target.value)}
				placeholder="Search for movies"
			/>
			<img
				src={SearchIcon}
				className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] cursor-pointer"
				alt="search"
				onClick={() => searchMovies(title)}
			/>
		</section>
	);
};

export default SearchBar;
