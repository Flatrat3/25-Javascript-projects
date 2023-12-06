// Getting HTML Elements

document.addEventListener("DOMContentLoaded", ()=>{
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("input[type='button']")

    let currentInput = "";

    // Loop through each button and add a click event listener

    buttons.forEach((button)=>{
        const value = button.value;
        // Getting the values of the button

        button.addEventListener("click",()=>{
            // console.log(value)
        
            // Handling different button actions based on their values
            if (value === "AC") {
                display.value = "";
            } 
            
            else if (value === "DE"){
                currentInput = currentInput.slice(0, -1);
                display.value= currentInput;
            } 
            
            else if (value === "="){
                try {
                    currentInput = Number(eval(currentInput))
                } catch (error) {
                    currentInput = "Error";
                }
                display.value = currentInput;
              
            } else {
                currentInput +=value;
                display.value +=value;
                console.log(currentInput)
            } 
        })
    })




})