let car = ["karoo", "fiat", "firari"];

car.pop();

document.getElementById("result").innerHTML = `
    <div class="card">
        Elements
        <span>${car}</span>
    </div>

    <div class="card">
        karoo موجود؟
        <span>${car.includes("karoo")}</span>
    </div>

    <div class="card">
        ss موجود؟
        <span>${car.includes("ss")}</span>
    </div>

    <div class="card">
        karoo index
        <span>${car.indexOf("karoo")}</span>
    </div>

    <div class="card">
        Number of elements
        <span>${car.length}</span>
    </div>
`;
