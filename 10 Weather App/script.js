// Getting HTML Element

const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");
console.log(error404);

// Click even
search.addEventListener("click", () => {
    const APIKey = "828cc99e0335c9476a8f751b7c386d9a";
    // Search-input value
    const city = document.querySelector(".search-box input").value;

    if (city === "") return;

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
    )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // Error message
            if (data.cod === "404") {
                container.style.height = "400px";
                error404.style.display = "block";
                error404.classList.add("fadeIn");
                weatherBox.style.display = "none";
                weatherDetails.style.display = "none";
                return;
            }

            error404.style.display = "none";
            error404.classList.remove("fadeIn");

            const image = document.querySelector(".weather-box img");
            const tempurature = document.querySelector(".weather-box .temperature");
            const description = document.querySelector(".weather-box .description");
            const humidity = document.querySelector(".weather-details .humidity span");
            const wind = document.querySelector(".weather-details .wind span");

            switch (data.weather[0].main) {
                case "Clear":
                    image.src = "images/clear.png";
                    break;

                case "Rain":
                    image.src = "images/rain.png";
                    break;

                case "Snow":
                    image.src = "images/snow.png";
                    break;

                case "Clouds":
                    image.src = "images/cloud.png";
                    console.log(image.src);
                    break;

                case "Haze":
                    image.src = "images/mist.png";
                    break;

                case "Mist":
                    image.src = "images/mist.png";
                    break;

                default:
                    image.src = "";
            }
            humidity.innerHTML = `${data.main.humidity}%`;
            tempurature.innerHTML = `${parseInt(data.main.temp)}`;
            description.innerHTML = `${data.weather[0].description}`;
            wind.innerHTML = `${parseInt(data.wind.speed)}km/h`;

            weatherBox.style.display = "";
            weatherDetails.style.display = "";
            weatherBox.classList.add("fadeIn");
            weatherDetails.classList.add("fadeIn");
            container.style.height = "590px";
        });
});
