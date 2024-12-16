// Importiamo il nostro componente che crea un button
import { ButtonComponent } from "./components/ButtonComponent";
// Importo array di oggetti
import languages from "./data/languages";

// Componente padre livello 1
function App() {
  // Array di button
  const arrayButton = languages.map((currObject) => (
    <ButtonComponent key={currObject.id} testoButton={currObject.title} />
  ));

  return (
    <>
      <header>
        <h1>Learn Web development</h1>
      </header>
      <main>{arrayButton}</main>
    </>
  );
}

export default App;
