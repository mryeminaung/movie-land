import { useMovieContext } from "../contexts/MovieContext";
import SearchIcon from "../assets/search.svg";

const SearchBar = () => {
	const { title, setTitle, searchMovies } = useMovieContext();

	return (
		<div className="search mx-auto px-[1.75rem] py-[1.5rem] flex justify-center items-center rounded-[50px] mb-[3rem] bg-[#1f2123]">
			<input
				value={title}
				className="text-base md:text-xl w-full mr-5 font-semibold outline-none border-none text-[#a1a1a1] bg-[#1f2123]"
				onChange={(e) => setTitle(e.target.value)}
				placeholder="Search for movies"
			/>
			<img
				src={SearchIcon}
				className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] cursor-pointer"
				alt="search"
				onClick={() => searchMovies(title)}
			/>
		</div>
	);
};

export default SearchBar;
