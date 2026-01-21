
console.log("********** Print 1 to N Number *************")
const num = 5
for(let i = 1; i <= num ; i++){
    console.log(i)
}
console.log("********** Print N to 1 Number *************")

for(let i = num; i >= 1; i--){
    console.log(i)
}

console.log("*****************Print All Even Numbers from 1 to N*****************")
for(let i = 1; i <= num; i++){
    if(i %2 == 0){
        console.log(i)
    }
}

console.log("**************Sum of First N Natural Numbers**************")
let count = 0
for(let i = 0; i <=num ; i++){
    count = count+i
}
console.log(count)
console.log("************ Product (Factorial) of N *****************")
let fact = 1
for(let i = 1; i <=num; i++){
    fact = fact*i
}
console.log(fact)
console.log("******************** Sum of All Even Numbers up to N *****************")
let countOne = 0
for(let i = 0 ; i <=num;i++){
    if(i%2 == 0){
        countOne = countOne+i 
    }
}
console.log(countOne)
console.log("********************** Print Squares of Numbers from 1 to N ************************")
for(let i = 1 ; i <=num; i++){
   console.log(i*i)
}
console.log("********************** Print all numbers divisible by 3 and 5 up to N ***************")
let inputOne = 30
for(let i = 1 ; i <= inputOne; i++){
    if(i %3 == 0 &&  i % 5 == 0){
        console.log(i)
    }
}
console.log("*************************** Find the sum of all odd numbers up to N ****************************")
let countTwo = 0
for(let i = 0; i <=num; i++){
    if(i %2 != 0){
        countTwo = countTwo+i
    }
}
console.log(countTwo)
console.log("************************Print the cubes of numbers from 1 to N ****************************")
for(let i = 1; i <=num; i++){
    console.log(i*i*i) 
}

