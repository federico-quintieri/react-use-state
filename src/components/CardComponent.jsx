export function CardComponent({ titolo, descrizione }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{titolo}</h5>
        <p className="card-text">{descrizione}</p>
      </div>
    </div>
  );
}
