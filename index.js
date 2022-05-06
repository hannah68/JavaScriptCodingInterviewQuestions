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

// Code 6:String reverse without using inbuilt function
// var string ="India is my country";
// output = "yrtnuoc ym si aidnI";

// const reverseStr = (str) => {
//     let newStr = ''
//     for(let i=str.length-1; i>=0; i--){
//          newStr += str[i];
//     }
//     return newStr
// }

// console.log(reverseStr(string));

// Code 7: Find factorial of user input number
// const factorial = (num) => {
//     if(num === 0) return 1;
//     else if(num < 0) return 'Error! Factorial for negative number does not exist.'

//     let fact = 1;
//     for(let i=fact; i<= num; i++){
//         fact *= i
//     }
//     console.log(`The factorial is ${fact}.`);
// }

// console.log(factorial(4)); //1*2*3*4 = 24

// Code 8:Anagram
// var a="Army";
// var b="Mary";

// const isAnagram = (str1, str2) => {
//     const str1Check = str1.toLowerCase().split('').sort().join('');
//     const str2Check = str2.toLowerCase().split('').sort().join('');

//     if(str1Check === str2Check) return true;
//     return false;
// }

// console.log(isAnagram(a, b));

// Code 9: Swapping of 2 numbers with third variable
// let a=10;
// let b=20;
// let c;
// c=a
// a=b
// b=c
// console.log(a,b);

// Code 10: Swapping of 2 numbers without third variable
// let a=10;
// let b=20;

// a=a+b //30
// b=a-b //10
// a=a-b //20
// console.log (a,b)

// Code 11: To check the string or number is palindrome or not( ex: 121,madam,anna) using reverse method
// const palindrome = (str) => {
//     const reversedStr = str.split('').reverse().join('');
//     if(reversedStr === str) return true;
//     return false;
// }
// console.log(palindrome('madam'));

// Code 12: To check the string or number is palindrome or not( ex: 121,madam,anna) using diving length by 2 and then comparing
const string = "12321";
const palindrome = (str) => {
	let len = string.length;
	for (i = 0; i < len / 2; i++) {
		if (string[i] !== string[len - 1 - i]) {
			console.log("Not Palindrome");
		} else {
			console.log(" Palindrome");
		}
	}
};
console.log(palindrome(string));
