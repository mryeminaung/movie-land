import { ThemeContextProvider } from "./contexts/ThemeContext";
import { MovieContextProvider } from "./contexts/MovieContext";
import MoviesContainer from "./components/MoviesContainer";
import Navbar from "./components/Navbar";
import "./movie.css";

const App = () => {
	return (
		<ThemeContextProvider>
			<MovieContextProvider>
				<Navbar />
				<MoviesContainer />
			</MovieContextProvider>
		</ThemeContextProvider>
	);
};

export default App;
