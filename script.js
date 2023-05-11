//grabbing all the buttons
//add event listener

const btns = document.querySelectorAll(".btn");

//display element
const displayElms = document.querySelector(".display")

let strToDisplay = ""
const operators = ["%", "/", "+", "-", "*"]
let lastOperator = ""
btns.forEach((btn, index)=>{
/// attach the click event listenser
btn.addEventListener("click", ()=>{
  const val = btn.innerHTML
   displayElms.style.background =""
   displayElms.style.color = "black"
   displayElms.classList.remove("prank")
  if(operators.includes(val) && !strToDisplay.length) return
 
  if(operators.includes(val)){
    lastOperator = val
    const lastChar = strToDisplay.slice(-1)
    if(operators.includes(lastChar)){
        strToDisplay = strToDisplay.slice(0, -1)
    }
  }
  if(val === "AC"){
    strToDisplay = ""
    return display()
  }

  if(val === "C"){
    strToDisplay = strToDisplay.slice(0, -1)
    return display(strToDisplay)
  }

  if (val === "="){
    const lastChar = strToDisplay.slice(-1)
     if(operators.includes(lastChar)){
        strToDisplay = strToDisplay.slice(0, -1)
     }
    return total()
  }

  if(val ==="."){
    const lastOperatorIndex = strToDisplay.lastIndexOf(lastOperator)
    const lastNumberSet = strToDisplay.slice(lastOperatorIndex)
    if(lastNumberSet.includes(".")) return

    if(!lastOperator && strToDisplay.includes("."))  return
    
  }
  strToDisplay += val
  display(strToDisplay)
})
})

const display = (str) => {
    displayElms.innerText = str || "0.00"
}

const total = () =>{
    const pk = randomNumber()

    if(pk){
        displayElms.style.background = "red"
        displayElms.style.color="white"
        displayElms.classList.add("prank")
    }
    const ttl = eval(strToDisplay) + pk
    display(ttl)
    strToDisplay = ttl.toString()
}

const randomNumber = () =>{
    const num = Math.round(Math.random() * 10)
    return num <= 3 ? num : 0;
}