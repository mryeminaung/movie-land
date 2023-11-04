const MovieCard = ({ Year, Poster, Title, Type }) => {
	return (
		<div className="movie group relative w-80 h-[460px] shadow-sm shadow-[#f9d3b4]  rounded-xl overflow-hidden transition-transform hover:scale-105">
			<div className="absolute p-[16px] group-hover:opacity-100 w-full opacity-0 top-0 text-[#f9d3b4]">
				<p className="text-[#f9d3b4]">{Year}</p>
			</div>
			<div className="w-full h-full group-hover:opacity-30">
				<img
					className="w-full h-full"
					src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
					alt={Title}
				/>
			</div>
			<div className="group-hover:bg-transparent absolute bottom-0 right-0 left-0 z-10 bg-[#343739] pt-4 px-6 pb-6">
				<span className="uppercase text-sm font-semibold text-white">{Type}</span>
				<h3 className="mt-5px text-[#f9d3b4]">{Title}</h3>
			</div>
		</div>
	);
};

export default MovieCard;
