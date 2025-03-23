const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button-grid button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonValue = button.textContent;

        if (buttonValue === "C") {
            display.value = "";
        } else if (buttonValue === "=") {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
                setTimeout(() => {
                    display.value = "";
                }, 3000); 
            }
        } else if (buttonValue === "**") {
            display.value += "**";
        } else {
            display.value += buttonValue;
        }
    });
});