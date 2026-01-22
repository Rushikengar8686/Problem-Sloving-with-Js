console.log("********* Find the Maximum of Three Numbers **********")
let numOne = 40
let numTwo = 20
let numThree = 30
if(numOne > numTwo && numOne > numThree){
    console.log(numOne)
}else if(numTwo > numThree){
    console.log(numTwo)
}else{
    console.log(numThree)
}
console.log("************* Check if a Number is Positive, Negative, or Zero ***********")
let number = 0
if(number > 0){
    console.log("Positive")
}else if(number < 0){
    console.log("Negative")
}else{
    console.log("Zero")
}
console.log("************* Calculate Electricity Bill ***************")
let units = 250
let totalBill = 0
if(units >= 0 && units <=100){
    totalBill = units * 5
}else if(units >= 101 && units <= 200){
    totalBill = (100 *5) + (units-100) * 7
}else if(units >= 201 && units <=300){
    totalBill  = (100 *5) + (100 * 7) +(units - 200) * 10
}else{
    totalBill = (100 * 5) + (100 *7 ) + (100 * 10) + (units -300)*12
}
console.log(totalBill)
console.log("****************** Check if a Character is a Vowel or Consonant **********************")
let char = 'R'
if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U'){
    console.log("Vowel")
}else{
    console.log("Consonant")
}
console.log("************* Check if a Year is a Leap Year *********************")
let year = 2024
if((year %4 == 0 && year %100 != 0) || (year %400 ==0)){
    console.log("Leaf Year")
}else{
    console.log("Not Leaf Year")
}
console.log("********* Calculate Income Tax Based on Slabs *****************")
let income = 750000
let tax = 0
if(income <= 250000){
}else if(income >= 250001 && income <= 500000){
    tax = (income - 250000) * 0.05
}else if(income >= 500001 && income <= 1000000){
    tax = (250000*0.05)+((income-500000)*0.20)
}else{
    tax = (250000*0.05)+(500000-0.20)+((income-1000000)*0.30)
}
console.log(tax)