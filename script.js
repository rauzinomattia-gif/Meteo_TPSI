const input = document.getElementById('citta');
const btn = document.getElementById('btnCerca');
const risultato = document.getElementById('risultato');

async function CercaMeteo(params) {

    const citta = input.value;
    const apiKey = 'TUACHIAVE';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${citta}&appid=${apiKey}&units=metric&lang=it`;

    fetch(url)
        .then(risposta => risposta.json())
        .then(dati => {
            console.log(dati);
            risultato.textContent = dati.main.temp + '°C';
        })
        .catch(errore => {
            risultato.textContent = 'Città non trovata';
        
}
}