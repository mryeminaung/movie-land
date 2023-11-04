import MoviesList from "./MoviesList";
import SearchBar from "./SearchBar";

const MoviesContainer = () => {
	return (
		<main className="container mx-auto my-[100px]">
			<SearchBar />
			<MoviesList />
		</main>
	);
};

export default MoviesContainer;
