const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
   
const arr = usuarios.filter(item => item.empresa == "Rocketseat" && item.idade > 18);
const arr2 = usuarios.find(item => item.empresa == 'Google');

const arr3 = usuarios.map(item => item.idade * 2);
const arr4 = arr3.filter(item => usuarios <= 50);

console.log(arr4);