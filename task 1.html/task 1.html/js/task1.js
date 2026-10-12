let num1 = prompt("Enter num1:");
let num2 = prompt("Enter num2:");

num1 = parseInt(num1);
num2 = parseInt(num2);

document.getElementById("results").innerHTML = `
    <tr>
        <td>${num1}</td>
        <td class="operator">+</td>
        <td>${num2}</td>
        <td class="result">${num1 + num2}</td>
    </tr>

    <tr>
        <td>${num1}</td>
        <td class="operator">*</td>
        <td>${num2}</td>
        <td class="result">${num1 * num2}</td>
    </tr>

    <tr>
        <td>${num1}</td>
        <td class="operator">−</td>
        <td>${num2}</td>
        <td class="result">${num1 - num2}</td>
    </tr>

    <tr>
        <td>${num1}</td>
        <td class="operator">÷</td>
        <td>${num2}</td>
        <td class="result">${num1 / num2}</td>
    </tr>

    <tr>
        <td>${num1}</td>
        <td class="operator">**</td>
        <td>${num2}</td>
        <td class="result">${num1 ** num2}</td>
    </tr>

    <tr>
        <td>${num1}</td>
        <td class="operator">%</td>
        <td>${num2}</td>
        <td class="result">${num1 % num2}</td>
    </tr>
`;