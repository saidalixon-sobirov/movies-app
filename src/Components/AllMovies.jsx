import Movie from "./Movie";

export default function AllMovies(props) {
  const { movies } = props;

  return (
    <div className="movies">
      {AllMovies.map((movie) => (
        <Movie key={imdbID} {...movie} />
      ))}
    </div>
  );
}
