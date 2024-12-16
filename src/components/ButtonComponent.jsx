import { CardComponent } from "./CardComponent";

// Faccio componente per il button da esportare
// Funzione che mi ritorna un button JSX
export function ButtonComponent({
  testoButton,
  testoDescrizione,
  callbackEvento,
  disegnaCard
}) {

    // disegnaCard ci serve per disegnare un button con classe warning

  // Restituisco un button
  return (
    <>
      <button onClick={callbackEvento} className={`btn ${(disegnaCard ? "btn-warning" : "btn-primary")} mx-2`}>
        {testoButton}
      </button>
    </>
  );
}
