alert("Ahmed Abd-Algayed")
const display = document.getElementById("display");
let currentNumber = "";
let previousNumber = "";
let operator = "";

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            currentNumber = "";
            previousNumber = "";
            operator = "";
            display.textContent = "0";
        } else if (value === "=") {
            if (currentNumber && previousNumber && operator) {
                let result;
                const prev = parseFloat(previousNumber);
                const curr = parseFloat(currentNumber);

                switch (operator) {
                    case "+":
                        result = prev + curr;
                        break
                    case "-":
                        result = prev - curr;
                        break
                    case "*":
                        result = prev * curr;
                        break
                    case "/":
                        result = prev / curr;
                        break
                }

                display.textContent = result;
                currentNumber = result;
                previousNumber = "";
                operator = "";



            }
        } else if (["+", "-", "*", "/"].includes(value)) {
            if (currentNumber) {
                previousNumber = currentNumber;
                currentNumber = '';
                operator = value;
            }
        } else {
            currentNumber += value;
            display.textContent = currentNumber
        }





    });
});



// lisner kebord 
document.addEventListener('keydown', (e) => {
    const key = e.key; // الرقم أو العملية اللي المستخدم ضغطها
});


document.addEventListener('keydown', (e) => {
    const key = e.key;

    if (key === 'c' || key === 'C' || key === "Space") {
        // مسح الشاشة زي زر C
        currentNumber = '';
        previousNumber = '';
        operator = '';
        display.textContent = '0';
    } else if (key === 'Enter') {
        // = على الكيبورد
        if (currentNumber && previousNumber && operator) {
            let result;
            const prev = parseFloat(previousNumber);
            const curr = parseFloat(currentNumber);
            switch (operator) {
                case '+': result = prev + curr; break;
                case '-': result = prev - curr; break;
                case '*': result = prev * curr; break;
                case '/': result = prev / curr; break;
            }
            display.textContent = result;
            currentNumber = result;
            previousNumber = '';
            operator = '';
        }
    } else if (['+', '-', '*', '/'].includes(key)) {
        // نفس وظيفة زر العملية
        if (currentNumber) {
            previousNumber = currentNumber;
            currentNumber = '';
            operator = key;
        }
    } else if ((key >= '0' && key <= '9') || key === '.') {
        // نفس وظيفة أزرار الأرقام والنقطة
        currentNumber += key;
        display.textContent = currentNumber;
    }
});
