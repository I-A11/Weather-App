const appId = 'df0dd1cc12332f3291353c0588ea2e25';
const creatCardHtml = (name, temp, feelsLike, description) =>
    `
<div class="card-body ms-4 pt-3">
<h5 class="card-title">${name}</h5>
<h5 class="card-subtitle mb-2 text-muted">${temp}c</h6>
    <p class="card-text"> Feels like ${feelsLike}</p>
    <p class="card-text">${description}</p>
`;

const cityInput = document.querySelector('#city-input');
const submitButton = document.querySelector('#submit-button');
const tempCard = document.querySelector('#temp-card');


submitButton.addEventListener('click', async () => {
    const cityInputValue = cityInput.value;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInputValue}&appid=${appId}&units=metric`);
    const data = await response.json();


    const name = data.name;
    const temp = data.main.temp;
    const feelsLike = data.main.feels_like;
    const description = data.weather[0].description;


    const finishedHtml = (creatCardHtml(name, temp, feelsLike, description));
    tempCard.innerHTML = finishedHtml;
});