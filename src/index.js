async function apiCall() {
    const response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Manchester&appid=15ee7b1b8b63ce1967cb70787d8de6e7&units=metric", {mode: "cors"})
    console.log(response)

    const data = await response.json();
    console.log(data)

}

apiCall()