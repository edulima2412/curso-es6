"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var arr = usuarios.filter(function (item) {
  return item.empresa == "Rocketseat" && item.idade > 18;
});
var arr2 = usuarios.find(function (item) {
  return item.empresa == 'Google';
});
var arr3 = usuarios.map(function (item) {
  return item.idade * 2;
});
var arr4 = arr3.filter(function (item) {
  return usuarios <= 50;
});
console.log(arr4);
