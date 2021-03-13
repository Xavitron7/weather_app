import apiCall from "./apiCall.js"

function searchHandler(event) {
    event.preventDefault();
    const searchBar = document.querySelector("#search");
    const location = searchBar.value;
    apiCall(location);
    searchBar.value = ""

}

export default searchHandler