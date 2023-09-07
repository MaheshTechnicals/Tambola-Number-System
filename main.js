var numbersArray = [];
let num = document.querySelector("#num")
let button = document.querySelector("#btn")
let reload = document.querySelector("#reload")
let audio = new Audio("assets/play.wav")
let showArr = []
let buttonContainer = document.querySelector(".button-container")
let card = document.querySelector(".card")


//click event.
button.addEventListener("click", () => {
  buttonContainer.innerHTML = ""
  change()
})


// Change value and store.
let change = () => {

  if (numbersArray == "") {
    num.textContent = "OVER"
    num.style.fontSize = "20px"
    showArr.forEach((each) => {

      let elm = `<button class="button">${each}</button>`
      buttonContainer.innerHTML += elm
      card.style.padding = "5px"
      card.style.border = "1px solid #ccc"
    })

  }
  else {
    audio.play()
    let rn = Math.floor(Math.random() * numbersArray.length)
    num.textContent = numbersArray[rn]

    showArr.push(Number(numbersArray[rn]))
    card.style.padding = "5px"
    card.style.border = "1px solid #ccc"
    showArr.sort((x, y) => x - y);

    showArr.forEach((each) => {

      let elm = `<button class="button">${each}</button>`
      buttonContainer.innerHTML += elm

    })
    numbersArray.splice(rn, 1)

  }
}



// Genrate All Numbers first.
let numGen = () => {

  for (var i = 1; i <= 90; i++) {
    numbersArray.push(i)
  }
}

numGen()


reload.addEventListener("click", () => {
  location.reload()
})