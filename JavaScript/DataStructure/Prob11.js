const numbers = [1, 2, 3, 4, 5]

// Add 6 to the end
numbers.push(6)
console.log(numbers)

// Remove the first element
numbers.shift()
console.log(numbers)


// Find the index of 4
const index=numbers.findIndex((num) => num === 4)
console.log(index)


// Check if all numbers are greater than 0.
let numbersoflength=numbers.length;
let count=0
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>0){
count+=1
    }
}

if(numbersoflength==count){
    console.log('All Number are Greater than 0')
}else{
    console('All Number are Not Greater than 0')
}