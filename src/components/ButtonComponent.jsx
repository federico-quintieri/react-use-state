// Faccio componente per il button
export function ButtonComponent({
  testoButton,
  callbackEvento,
  disegnaCard
}) {
  // Restituisco button
  // Assegno evento onClick con relativa callback
  // Assegno una classe per lo stile CSS se la prop disegnaCard è true
  return (
    <>
      <button onClick={callbackEvento} className={`btn ${(disegnaCard ? "btn-warning" : "btn-primary")} mx-2`}>
        {testoButton}
      </button>
    </>
  );
}
