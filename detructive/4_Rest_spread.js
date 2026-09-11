function num (...numbers) {
    return numbers.reduce((acc,num) => acc + num, 0);
}
console.log(num(1,2,3,4));


const arr1=[1,2,3];
const arr2 =[...arr1,4,5];
console.log(arr2);
