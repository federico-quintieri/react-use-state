// Importiamo il nostro componente che crea un button
import { ButtonComponent } from "./components/ButtonComponent";

// Importo useState dal genitore
import { act, useState } from "react";

// Importo array di oggetti
import languages from "./data/languages";
import { CardComponent } from "./components/CardComponent";

// Componente padre livello 1
function App() {
  // Faccio variabile reattiva con useState
  const [activeCard, setActiveCard] = useState(null);

  // Callback che gestisce il cambiamento della card
  const changeCard = (nuovaCard) => {
    // Mostro in console il titolo del button cliccato
    setActiveCard(nuovaCard);
    console.log(nuovaCard);
  };

  // Array di button
  const arrayButton = languages.map((currObject) => {
    return (
      <ButtonComponent
        key={currObject.id}
        testoButton={currObject.title}
        testoDescrizione={currObject.description}
        callbackEvento={() => {
          changeCard(currObject);
        }}
        disegnaCard={
          activeCard !== null && currObject.title === activeCard.title
        }
      />
    );
  });

  // Assegnamo allo state l'oggetto
  // Poi passiamo le sue proprietà quando evochiamo il componente che crea la card

  return (
    <>
      <header>
        <h1>Learn Web development</h1>
      </header>
      <main>
        {arrayButton}

        {activeCard !== null ? (
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

// Salvare nello state solo il titolo e non l'oggetto
