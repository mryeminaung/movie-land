import { createContext, useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const MovieContext = createContext();

const API_URL = "https://www.omdbapi.com/?apiKey=2416faff";

export const MovieContextProvider = ({ children }) => {
	const [moviesList, setMoviesList] = useState([]);
	const [title, setTitle] = useState("");

	const searchMovies = async (movieTitle) => {
		axios
			.get(`${API_URL}&s=${movieTitle}`)
			.then((movies) => {
				setMoviesList(movies.data.Search);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		searchMovies("spider man");
	}, []);

	return (
		<MovieContext.Provider
			value={{ moviesList, setMoviesList, title, setTitle, searchMovies }}
		>
			{children}
		</MovieContext.Provider>
	);
};

export const useMovieContext = () => {
	return useContext(MovieContext);
};

export default MovieContext;
