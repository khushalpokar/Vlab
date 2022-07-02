// let arr = [1, 2, 3, 6, 7, 8, 3, 6];
// let obj = {};

// for(let i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);
//     obj[arr[i]] = arr[i];
// }

// console.log(Object.keys(obj));

star = "";

for(let i = 1; i <= 5; i++) {
    for(let j = 0; j < i; j++) {
        star += "*";
    }
    star += "\n";
}

console.log(star);