let students = [
    { name: "ali", "age": 20, "jop": "eng" },
    { name: "saif", "age": 22, "jop": "dr" },
    { name: "morad", "age": 24, "jop": "mr" },
    { name: "saied", "age": 26, "jop": "pr" },
    { name: "mohamed", "age": 28, "jop": "cc" },
];

table(students);

function table(data) {
    document.getElementById(`tbl`).innerHTML = "";
    let id = 0;

    data.forEach(element => {
        document.getElementById(`tbl`).innerHTML += `
        <tr>
            <th>${++id}</th>
            <th>${element.name}</th>
            <th>${element.age}</th>
            <th>${element.jop}</th>
            <th><button onclick="edit(${id})">edit</button></th>
            <th><button onclick="del(${id})">delete</button></th>
        </tr>
        `;
    });
}

function add() {
    let name = document.getElementById(`name`).value;
    let age = document.getElementById(`age`).value;
    let jop = document.getElementById(`jop`).value;

    if (name && age && jop) {
        let student = { name: name, age: age, jop: jop };
        students.push(student);

        table(students);

        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        document.getElementById('jop').value = '';
    } else {
        alert("please enter data");
    }
}

function del(id) {
    id = id - 1;

    console.log(id);

    let temp = [];

    for (const key in students) {
        console.log(key);

        if (key != id) {
            temp.push(students[key]);
        }
    }

    console.log(temp);
    console.log(students);

    students = temp;
    table(students);
}

function edit(id) {
    let index = id - 1;

    document.getElementById('name').value = students[index].name;
    document.getElementById('age').value = students[index].age;
    document.getElementById('jop').value = students[index].jop;

    document.getElementById('btns').innerHTML =
        ' <button onclick="update(' + id + ')">update</button> ';
}

function update(id) {
    let index = id - 1;

    let name = document.getElementById(`name`).value;
    let age = document.getElementById(`age`).value;
    let jop = document.getElementById(`jop`).value;

    if (name && age && jop) {
        let student = { name: name, age: age, jop: jop };
        students[index] = student;

        table(students);

        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        document.getElementById('jop').value = '';
    } else {
        alert("please enter data");
    }

    document.getElementById('btns').innerHTML =
        ' <button onclick="add()">add</button> ';
}