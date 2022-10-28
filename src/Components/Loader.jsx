export default function Loader() {
  return (
    <button className="btn btn-primary d-flex justify-center" type="button" disabled>
      <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
      Loading...
    </button>
  );
}
