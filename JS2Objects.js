let name = 'Owais';
let age = 20;
let person = {
    name: 'Owais',
    age: 25
};

person.name = 'Azmal';
person['name'] = 'Ayaan';

let selection = 'name';
person[selection] = 'Rayaan';

console.log(person);
console.log(person.name);