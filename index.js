let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊", "🍉","🍉","🍉"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
let waterMelonShelf = document.getElementById("water-melon-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.
function sortFruits() {
 for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
      appleShelf.textContent += "🍎"
    }else if (fruit[i] === "🍊") {
      orangeShelf.textContent += "🍊"
    }else if(fruit[i] === "🍉"){
      waterMelonShelf.textContent += "🍉"  
    }
  }
}

sortFruits()