export default function Movie(props) {
  const { Title, Year, imdbID, Type, Poster } = props;

  return (
    <div key={imdbID} className="card movie">
      <div
        className="bg-image hover-overlay ripple"
        data-mdb-ripple-color="light"
      >
        <img src={Poster} className="img-fluid" />
        <a href="#!">
          <div className="mask"></div>
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>
        <p className="card-text">
          {Year} <br /> {Type}
        </p>
      </div>
    </div>
  );
}
