// Code 1: Remove Duplicate characters from String 'hello'
// const removeDuplicate = (str) => {
//     let unrepeatedStr = [];
//     const arrayOfStr = str.split('');

//     for(let str of arrayOfStr){
//         if(!unrepeatedStr.includes(str)){
//             unrepeatedStr.push(str);
//         }
//     }
//     return unrepeatedStr.join('');
// }

// console.log(removeDuplicate('priya riya supriya'));

// Code 2: Remove Duplicate characters from array of element and find the count of an elements using set object
// var arr = [55, 44, 55,67,67,67,67,8,8,8,8,8,65,1,2,3,3,34,5];

// const uniqueElementObj = new Set(arr);
// const uniqueElementArr = Array.from(uniqueElementObj);
// console.log(uniqueElementArr.length);

// Code 3: Remove Duplicate characters from array of element using filter
// var myArray = ['a', 1, 'a', 2, '1'];
// const uniqueEl = myArray.filter((el, index)=> {
//     return myArray.indexOf(el) === index
// })
// console.log(uniqueEl);

// Code 4:String reverse without reversing of individual words
// var string = "India is my country";
// // output = "aidnI si ym yrtnuoc"
// const reverseStr = (str) => {
// 	const arrayOfStr = str.split(" ");
// 	const result = [];

// 	for (let i = 0; i < arrayOfStr.length; i++) {
// 		let reversedStr = "";

// 		for (let j = arrayOfStr[i].length - 1; j >= 0; j--) {
// 			reversedStr += arrayOfStr[i][j];
// 		}
// 		result.push(reversedStr);
// 	}
// 	return result.join(" ");
// };

// console.log(reverseStr(string));

// Code 5:String reverse with reversing of individual words
// var string ="India is my country"
// output = "yrtnuoc ym si aidnI"

// const reverseStr = (str) => {
//     return str.split('').reverse().join('');
// }

// console.log(reverseStr(string));