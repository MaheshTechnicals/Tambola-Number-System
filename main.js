var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];


let num = document.querySelector("#num")

let button = document.querySelector("button")

let audio = new Audio("assets/play.wav")

let showArr = []

let buttonContainer = document.querySelector(".button-container")

let card = document.querySelector(".card")



button.addEventListener("click", () => {
  buttonContainer.innerHTML = ""
  change()


})




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