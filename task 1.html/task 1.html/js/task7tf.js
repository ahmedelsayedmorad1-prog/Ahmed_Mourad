 let student = [
    
        {id:1,name:"ali",age:33,active:true},
        {id:2,name:"saif",age:30,active:true},
        {id:3,name:"ahmed",age:9,active:true},
        {id:4,name:"ziad",age:8,active:true},
        {id:5,name:"stoon",age:4,active:true},
        {id:6,name:"mm",age:3,active:true},
        {id:7,name:"vv",age:1,active:true},
        {id:8,name:"oo",age:2,active:true},
        {id:9,name:"mm",age:0,active:true},
        {id:10,name:"m",age:11,active:true},
    
];
// console.log(student)
// document.write(student)
document.write(``);
document.write(`<tr>
    <th>id</th>
    <th>name</th>
    <th>age</th>
    <th>active</th>
    </tr>`);
   student.forEach(element => {
        document.body.innerHTML += (`<tr>
    <td>${element.id}</td>
    <td>${element.name}</td>
    <td>${element.age}</td>
    <td>${element.active}</td>
    </tr>`);
    });
document.write(`</table>`)