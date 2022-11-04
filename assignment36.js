/*
1. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0
for(let i=0; i<=100; i++){
  sum = sum+i
}
console.log(sum)
*/

// 2. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all
// odds. Print sum of evens and sum of odds as array
// evenSum = 0
// sumofOdd = 0
// let sumofEvenOdd=[]

// for(let i = 1; i<=100; i++){
//   if(i%2 ==0){
//     sumofEvenOdd.push(i)

//   }else{
//     sumofEvenOdd.push(i)
//   }
// }

// for (let i of sumofEvenOdd){
//   if (i % 2 ==0){
//     evenSum = evenSum+i
//   }else if (i % 2 !=0){
//     sumofOdd = sumofOdd+i
//   }
// }
// console.log(evenSum)
// console.log(sumofOdd)


// 4. Create a countries array, check if there is a country or countries containing the word
// 'and'. If there are countries containing 'and', print it as array. If there is no country
// containing the word 'and', print 'All these countries are without and'.

/*
countrywithEnd = []
// countries = ['England','Finland','Auckland']
countries = ['India','Australia','Southafrica','WestIndies']
for (let i of countries){
  if(i.endsWith('and')){
    countrywithEnd.push(i)
  }else{
    if (i.endsWith('and') == false){
    }
  }
}
console.log('No countries are there without End')
console.log(countries.endsWith('and'))
*/

// 5. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop
// without using a reverse method.

// fruitsArray = ['banana', 'orange', 'mango', 'lemon']

// for(let i =3; i<fruitsArray.length; i--){
//   console.log(fruitsArray[i])
//   if(i==0){
//     break
//   }

// }


// 6. Declare a function name capitalizeArray. It takes array as a parameter and it returns
// the - capitalizedarray.

// function capitalizeArray(elements){
//   elements.forEach( ele => {
//     return console.log(ele.toUpperCase())
//   });
// }
// capitalizeArray(['apple','mango','guava','grapes'])


// 7. Write a function called sumOfArrayItems, it takes an array parameter and return the
// sum of all the items. Check if all the array items are number types. If not give return
// reasonable feedback.

// function sumOfArrayItems(element){
//   let sum = 0;
//   for(let i = 0; i<element.length; i++){
//     if(typeof(element[i]) === 'number'){
//       sum = sum+element[i]
//     }else{
//       console.log(`element  no ${i} : ${element[i]} cannot be added because its a ${typeof(element[i])}`)

//     }
//   }
//   return sum;
// }
// console.log(sumOfArrayItems([10,20,30,40,20,'deepak']))

/*
8. Write a function called modifyArray takes array as parameter and modifies the fifth
item of the array and return the array. If the array length is less than five it return 'item
not found'.


function modifyArray(elements){
  if(elements.length<5){
    console.log('Item is not Found')
  }else{
    const result = elements.splice(5,1,80)
    return console.log(elements)
  }
}
modifyArray([10,20,30,40])
*/

/*
9. Write a function which checks if all the items of the array are the same data type.


arrayOne = ['apple','mango','grapes','guava']
function sameDatatype(elem){
  return typeof elem == 'string'
}

console.log(arrayOne.every(sameDatatype))
*/

// 10. JavaScript variable name does not support special characters or symbols except $
// or _. Write a function isValidVariable which check if a variable is valid or invalid variable.