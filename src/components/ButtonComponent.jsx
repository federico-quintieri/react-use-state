import { use } from "react";
import { useState } from "react";

// Faccio componente per il button da esportare
// Funzione che mi ritorna un button JSX
export function ButtonComponent({ testoButton }) {
  // Destructuring array useState
  const [state, setState] = useState(0);

  // Faccio callback per aggiornare state
  const updateButton = () => {
    setState(state + 1);
  };

  // Restituisco un button
  return (
    <button onClick={updateButton} className="btn btn-primary mx-2">
      {testoButton} {state}
    </button>
  );
}
