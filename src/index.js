import searchHandler from "./searchHandler.js"
import changeUM from "./changeum.js"

const unit = "C"
const searchForm = document.querySelector("#form");
const unitButton = document.querySelector("#unit-button")

searchForm.addEventListener("submit", searchHandler)
unitButton.addEventListener("click", changeUM)


//rewrite the code so that the desired values are saved to an array and then that array is used to recalculate temps and render them