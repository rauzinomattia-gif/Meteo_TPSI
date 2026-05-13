// --- LA TUA CHIAVE API ---
const API_KEY = "ff0b975a3eb7c9c77c46abde6049fae3";


// --- ASCOLTIAMO IL CLICK SUL BOTTONE ---
document.getElementById('search-btn').addEventListener('click', getWeather);


// --- FUNZIONE PRINCIPALE con arrow function ---
const getWeather = () => {

  // Leggiamo cosa ha scritto l'utente nell'input
  const city = document.getElementById('city-input').value;

  // Costruiamo la URL
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=it`;

  // Chiamata all'API
  fetch(url)

    // Primo .then: arrow function che converte in JSON
    .then(risposta => risposta.json())

    // Secondo .then: arrow function che mette i dati nell'HTML
    .then(dati => {
      document.getElementById('citta').innerHTML  = data.name;
      document.getElementById('temperatura').innerHTML  = data.main.temp + " °C";
      document.getElementById('descrizione').innerHTML  = data.weather[0].description;
      document.getElementById('icona').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })

    // .catch: arrow function che gestisce gli errori
    .catch(errore => {
      alert("Città non trovata, riprova!");
    });
};