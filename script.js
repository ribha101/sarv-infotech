let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let value = button.textContent;

        if (value === "C") {
            display.value = "";
        }

        else if (value === "=") {
            display.value = eval(display.value);
        }

        else {
            display.value += value;
        }

    });

});