//11/ Definicja naszego komponentu
function App() {
  // Aktualny stan
  const now = new Date().getTime();

  //5/ Definicja widoku
  return `<div>
    <h1>Hello React!</h1>
    <input type="text" placeholder="some input" />
    <p>Now: ${now}</p>
  </div>`;
}

//3/ Musimy re-renderować komponent co jakiś czas
setInterval(() => {
  render(App, document.querySelector('#app'));
}, 2000);

//3/ Pomocnicza wstawiająca komponent do drzewa DOM
function render(component, $app) {
  $app.innerHTML = component();
}

