let items = ['a', 'b', 'vc', 'df'];

console.log(items.push('mn')); //push return length of new array
console.log(items);  //mutate the array

console.log(items.unshift('mn')); // return length of new array
console.log(items);//mutate the array

console.log(items.shift()); //return first element and remove from array

text = [];
val = 0;

// for (var i = 0; i < 10; i++) {
//   console.log(i);
//   val = val + i;
// }
// console.log('test' + val);

//var val = 50;

if (true) {
  var val = 60;
  console.log(val);
}
console.log(val);

//ternary operator

let result = val > 55 ? 'qualify' : "not qualify";
console.log(result);

// let getAge = function (name, birthyear) {
//   let age = 2023 - birthyear;
//   return `current age of ${name} is ${age}`;
// }

let getAge = (name, birthyear, currentYear = 2023) => `current age of ${name} is ${currentYear - birthyear}`;
console.log(getAge('test', 1992));


//event bubbling and capturing

// document.querySelector('.grand-parent').addEventListener('click', (e) => {
//   console.log('grand-parent-called');
//   e.stopPropagation()
// })

// document.querySelector('.parent').addEventListener('click', (e) => {
//   console.log('parent-called');
//   e.stopPropagation();
// }) //capturing

// document.querySelector('.child').addEventListener('click', (e) => {
//   console.log('child-called');
//   e.stopPropagation();
// })


//event delegation
document.querySelector('#form').addEventListener('keyup', (e) => {
  console.log(e.target);
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
})



