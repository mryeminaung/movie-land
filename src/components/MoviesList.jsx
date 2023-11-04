import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "./MovieCard";

const MoviesList = () => {
	const { moviesList } = useMovieContext();

	return (
		<div className="container mx-auto flex items-center justify-center flex-wrap gap-12">
			{moviesList.length > 0 ? (
				moviesList.map((movie) => <MovieCard {...movie} key={movie.imdbID} />)
			) : (
				<div className="empty w-full mt-[3rem] flex items-center justify-center">
					<h2>No movies found</h2>
				</div>
			)}
		</div>
	);
};

export default MoviesList;
