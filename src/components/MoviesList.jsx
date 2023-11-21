import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "./MovieCard";

const MoviesList = () => {
	const { moviesList } = useMovieContext();

	return (
		<section className="container mx-auto flex items-center justify-center flex-wrap gap-12">
			{moviesList ? (
				moviesList.length > 0 &&
				moviesList.map((movie) => <MovieCard {...movie} key={movie.imdbID} />)
			) : (
				<div className="w-screen h-screen mt-[3rem] flex items-start justify-center">
					<h2 className="text-3xl text-center tracking-wide text-[#f9d3b4]">
						No movies found
					</h2>
				</div>
			)}
		</section>
	);
};

export default MoviesList;
