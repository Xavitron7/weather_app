function changeUM(event) {
    console.log(event.target)
    const unitButton = document.querySelector("#unit-button");
    if (unitButton.classList.contains("um-c")) {
        //If the user has clicked the change unit button when it's celsius, they want fahrenheit.

        const tempText = document.querySelector("#temp-text");

        /*console.log(Number(tempText.childNodes[1].nodeValue))
        console.log(Number(tempText.childNodes[1].nodeValue) + 100.000)*/

        
        console.log(tempText.childNodes)

        if (tempText.childNodes[1] === undefined) {
            
            const unitButton = document.querySelector("#unit-button")
            const unitDiv = document.querySelector("#unit-div")


            if (unitButton.classList.contains("um-c")) {
                const unitButton = document.querySelector("#unit-button")
                unitButton.classList.remove("um-c")
                unitButton.classList.add("um-f")
                unitButton.innerHTML = "F"
                unitButton.style.backgroundColor = "orange"
    
                unitDiv.style.justifyContent = "flex-end"

            }

        }

        else {

            //maybe use arrays instead?

            const unitDiv = document.querySelector("#unit-div")
            const tempText = document.querySelector("#temp-text");
            const feelText = document.querySelector("#feel-text");
            const maxText = document.querySelector("#max-text");
            const minText = document.querySelector("#min-text");

            const tempTextC = Number(tempText.childNodes[1].nodeValue)
            const feelTextC = Number(feelText.childNodes[1].nodeValue)
            const maxTextC = Number(maxText.childNodes[1].nodeValue)
            const minTextC = Number(minText.childNodes[1].nodeValue)

            const tempTextF = (tempTextC * (9/5)) + 32
            const feelTextF = (feelTextC * (9/5)) + 32
            const maxTextF = (maxTextC * (9/5)) + 32
            const minTextF = (minTextC * (9/5)) + 32

            tempText.childNodes[1].nodeValue = tempTextF.toFixed(2)
            feelText.childNodes[1].nodeValue = feelTextF.toFixed(2)
            maxText.childNodes[1].nodeValue = maxTextF.toFixed(2)
            minText.childNodes[1].nodeValue = minTextF.toFixed(2)

            const unitButton = document.querySelector("#unit-button");
            unitButton.classList.remove("um-c")
            unitButton.classList.add("um-f")
            unitButton.innerHTML = "F"
            unitButton.style.backgroundColor = "orange"

            unitDiv.style.justifyContent = "flex-end"



            



            //console.log(tempTextC, tempTextF)
            console.log(tempText.childNodes[1].nodeValue)


        }
    }

    else if (unitButton.classList.contains("um-f")) {
        //If the user has clicked the change unit button when it's celsius, they want fahrenheit.

        const tempText = document.querySelector("#temp-text");

        /*console.log(Number(tempText.childNodes[1].nodeValue))
        console.log(Number(tempText.childNodes[1].nodeValue) + 100.000)*/

        
       

        if (tempText.childNodes[1] === undefined) {
            if(unitButton.classList.contains("um-f")) {
                const unitButton = document.querySelector("#unit-button")
                const unitDiv = document.querySelector("#unit-div")

                unitButton.classList.remove("um-f")
                unitButton.classList.add("um-c")
                unitButton.innerHTML = "C"
                unitButton.style.backgroundColor = "var(--button)"
    
                unitDiv.style.justifyContent = "flex-start"
    

            }
        }

        else {

            //maybe use arrays instead?

            const unitDiv = document.querySelector("#unit-div")
            const tempText = document.querySelector("#temp-text");
            const feelText = document.querySelector("#feel-text");
            const maxText = document.querySelector("#max-text");
            const minText = document.querySelector("#min-text");

            const tempTextF = Number(tempText.childNodes[1].nodeValue)
            const feelTextF = Number(feelText.childNodes[1].nodeValue)
            const maxTextF = Number(maxText.childNodes[1].nodeValue)
            const minTextF = Number(minText.childNodes[1].nodeValue)

            const tempTextC = (tempTextF - 32) * 5/9
            const feelTextC = (feelTextF - 32) * 5/9
            const maxTextC = (maxTextF - 32) * 5/9
            const minTextC = (minTextF - 32) * 5/9

            tempText.childNodes[1].nodeValue = tempTextC.toFixed(2)
            feelText.childNodes[1].nodeValue = feelTextC.toFixed(2)
            maxText.childNodes[1].nodeValue = maxTextC.toFixed(2)
            minText.childNodes[1].nodeValue = minTextC.toFixed(2)

            const unitButton = document.querySelector("#unit-button");
            unitButton.classList.remove("um-f")
            unitButton.classList.add("um-c")
            unitButton.innerHTML = "C"
            unitButton.style.backgroundColor = "var(--button)"

            unitDiv.style.justifyContent = "flex-start"



            



            //console.log(tempTextC, tempTextF)
            console.log(tempText.childNodes[1].nodeValue)


        }
    }


}

export default changeUM