import displayWeather from "./displayweather.js"
import key from "./api_key.js"

async function apiCall(location) {
    const unitButton = document.querySelector("#unit-button")

    if(unitButton.classList.contains("um-c")){

    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`, {mode: "cors"})
        //console.log(response)

        const data = await response.json();
        //console.log(data)

        displayWeather(data)


        }
    
    catch(error) {
        console.log(error)
    }
}

else if(unitButton.classList.contains("um-f")) {

    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=imperial`, {mode: "cors"})
        //console.log(response)

        const data = await response.json();
        //console.log(data)

        displayWeather(data)


        }
    
    catch(error) {
        console.log(error)
    }


}
    

}

export default apiCall;