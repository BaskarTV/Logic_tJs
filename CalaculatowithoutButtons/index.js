const button = document.querySelector('button');


button.addEventListener('click',
function calCulator() {
    const input = document.getElementById('input').value;
    const match = input.match(/^(\d+)\s*([+\-*/])\s*(\d+)$/);

    if (!match) {
        const output = document.getElementById('result');
        output.innerHTML = "Enter a valid input format: Number [+, -, *, /] Number";
        return;
    }

    const sum1 = Number(match[1]);
    const sum2 = Number(match[3]);
    const sym = match[2];
    let result;

    switch (sym) {
        case '+':
            result = sum1 + sum2;
            break;
        case '-':
            result = sum1 - sum2;
            break;
        case '*':
            result = sum1 * sum2;
            break;
        case '/':
            result = sum1 / sum2;
            break;
        default:
            result = "Invalid operator";
    }

    const output = document.getElementById('result');
    output.innerHTML = `The Value of ${sum1} ${sym} ${sum2} = ${result}`;
})
