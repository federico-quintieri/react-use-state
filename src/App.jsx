// Importiamo il nostro componente che crea un button
import { ButtonComponent } from "./components/ButtonComponent";

// Importo useState dal genitore
import { act, useState } from "react";

// Importo array di oggetti
import languages from "./data/languages";
import { CardComponent } from "./components/CardComponent";

// Componente padre livello 1
function App() {
  // Faccio variabile reattiva con useState e la setto a null
  const [activeCard, setActiveCard] = useState(null);

  // Callback che gestisce il cambiamento della card
  const changeCard = (nuovaCard) => {
    // Cambio il valore di activeCard con il parametro della callback
    setActiveCard(nuovaCard);
    // console.log(nuovaCard);
  };

  // Assegnamo allo state l'oggetto
  // Poi passiamo le sue proprietà quando evochiamo il componente che crea la card

  // Creo array di button
  const arrayButton = languages.map((currObject) => {
    return (
      <ButtonComponent
        key={currObject.id}
        testoButton={currObject.title}
        testoDescrizione={currObject.description}
        // Passo la callback dello stato con l'oggetto corrente come parametro
        // Quindi assegno al button una callback che cambia lo state assegnandogli un determinato oggetto
        callbackEvento={() => {
          changeCard(currObject);
        }}
        // Se lo state è diverso null e il titolo dell'oggetto è uguale al titolo dello state ritorna true
        disegnaCard={
          activeCard !== null && currObject.title === activeCard.title
        }
      />
    );
  });

  return (
    <>
      <header>
        <h1>Learn Web development</h1>
      </header>
      <main>
        {arrayButton}
        {/* Se l'oggetto state non è nullo richiamo il componente */}
        {activeCard !== null ? (
          // Richiamo il componente con le proprietà dell'oggetto state
          <CardComponent
            titolo={activeCard.title}
            descrizione={activeCard.description}
          />
        ) : (
          ""
        )}
      </main>
    </>
  );
}

export default App;
