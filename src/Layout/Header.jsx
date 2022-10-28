export default function Header() {
  return (
    <nav className="navbar navbar-light bg-danger">
      <div className="container">
        <a className="navbar-brand"> Movies App </a>
        <form className="d-flex input-group w-auto">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search"></i>
          </span>
        </form>
      </div>
    </nav>
  );
}
