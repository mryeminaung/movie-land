import { MovieContextProvider } from "./contexts/MovieContext";
import MoviesContainer from "./components/MoviesContainer";
import Navbar from "./components/Navbar";
import "./movie.css";

const App = () => {
	return (
		<div className="flex items-center justify-center flex-col">
			<MovieContextProvider>
				<Navbar />
				<MoviesContainer />
			</MovieContextProvider>
		</div>
	);
};

export default App;
