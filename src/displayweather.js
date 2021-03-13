function displayWeather(weatherObj) {
    //console.log(weatherObj)

    if (weatherObj.cod === "404") {
        const errorDiv = document.querySelector("#error-div");
        errorDiv.classList.remove("hidden")
        
        setTimeout(() => {
            const errorDiv = document.querySelector("#error-div");
            errorDiv.classList.add("hidden")
        }, 5000)
    }

    else {
        const img = document.querySelector("img")
        const city = document.querySelector("#city");
        const description = document.querySelector("#desc-text");
        const tempText = document.querySelector("#temp-text");
        const feelText = document.querySelector("#feel-text");
        const maxText = document.querySelector("#max-text");
        const minText = document.querySelector("#min-text");
        const humidText = document.querySelector("#humid-text");
        



        img.setAttribute("src", `http://openweathermap.org/img/wn/${weatherObj["weather"][0].icon}@2x.png`)
        city.textContent = `${weatherObj.name}, ${weatherObj["sys"]["country"]}`;
        description.textContent = weatherObj["weather"][0].description;

        tempText.innerHTML = `<span class="temp-cat">Temperature: </span>${weatherObj["main"]["temp"]}</p>`
        feelText.innerHTML = `<span class="temp-cat">Feels like: </span>${weatherObj["main"]["feels_like"]}</p>`
        maxText.innerHTML = `<span class="temp-cat">Max temperature: </span>${weatherObj["main"]["temp_max"]}</p>`
        minText.innerHTML = `<span class="temp-cat">Min temperature: </span>${weatherObj["main"]["temp_min"]}</p>`
        humidText.innerHTML = `<span class="temp-cat">Humidity: </span>${weatherObj["main"]["humidity"]}%</p>`
        //console.log(weatherObj.name)
        
    }

}

export default displayWeather