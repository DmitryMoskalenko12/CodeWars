/*1 This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */

/* my solusion */
function accum(s) {
  let arr = s.split('').map((elem, i)=>{
   return `${elem.repeat(i+1).slice(0,1).toUpperCase() + elem.repeat(i+1).slice(1).toLowerCase()}-`
  })

return arr.join('').replace(/-$/,'')
}

/*2 Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1" */

/* my solusion */
function removeUrlAnchor(url){
  let res = '';
  for (let i = 0; i < url.length; i++) {
    res+=url[i]
    if(url[i] === '#'){
     break;
   }  
    
  }
  return res.split('').filter(elem=>{return elem !== '#'}).join('');
}

/*3 Task
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string */

/* my solution */
function reverseLetter(str) {
  return str.replace(/\W/ig, '').replace(/\d/ig, '').replace(/_/ig, '').split('').reverse().join('').trim() 
  }

/* 4  Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;) */

/* my solution */
function tribonacci(signature,n){
  let sign = [...signature];
  for(let i = 0; i < n; i++){
   sign.push(sign.slice(i, i + 3).reduce((sum, current)=>{
      return sum + current;
    },0));
  }
 return sign.slice(0, -3);
}

/*5 This Kata is intended as a small challenge for my students

All Star Code Challenge #18

Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
Notes:

The first argument can be an empty string
The second string argument will always be of length 1 */

/* my solution */
function strCount(str, letter){  
  return str.split('').filter(elem=>{
    return elem === letter? elem : 0}).length
  }

 /*6  An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

  Note: anagrams are case insensitive
  
  Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
  
  Examples
  "foefet" is an anagram of "toffee"
  
  "Buckethead" is an anagram of "DeathCubeK"  */

  /* my solution */
  var isAnagram = function(test, original) {
    return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('')
   };

 /* 7  Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

   * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
   * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
   * url = "https://www.cnet.com"                -> domain name = cnet"  */ 

/* my solution */
function domainName(url){
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
  return url.split(".")[0];
}

/*8 Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real" */

/* my solution */
String.prototype.toJadenCase = function () {
  let arr = this.split(' ');
  let res = []
  let final = []
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i].slice(1, arr[i].length))
    final = arr.map((elem, i)=>{
      return elem[0].toUpperCase() + res[i];
    }).join(' ')
  }
  return final; 
  
  };
/*9   Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */
/* my solution */
function longest(s1, s2) {
  return  Array.from(new Set(s1.split('').concat(s2.split('')))).sort().join('')
 }

/*10  Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too! */

/* my solution */
function firstNonConsecutive(arr) {
  const result = arr.find((num, i) => num !== i + arr[0])
  return Number.isInteger(result) ? result : null
}

/*11 Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake. */

/* my solution */
function correct(string){
  return string.split('').map(elem=>{return elem === '5'? 'S': elem === '0'? 'O': elem === '1'? 'I': elem}).join('')  
  }

/*12   Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

Examples:
n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

nb_dig(25, 1) returns 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25. */

/* my solution */
function nbDig(n, d) {
  let num = [];
  for (let i = 0; i <= n; i++) {
       num.push(i);
  }
 return num.map(elem=>{return Math.pow(elem,2)}).join('').split('').filter(elem=>{return elem == d}).length;
  
}

/*13 You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this" */

/* my solution */

function likes(names) {
  let res = null;
 if(names.length == 0){
 res = "no one likes this";
 }else if(names.length == 1){
  res = `${names[0]} likes this`;
 }else if(names.length == 2){
  res = `${names[0]} and ${names[1]} like this`;
 }else if(names.length == 3){
  res = `${names[0]}, ${names[1]} and ${names[2]} like this`;
 }else if(names.length >= 4){
  res = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
 }
 return res;
}

/*14 You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3 */

/* my solution */
function stray(numbers) {
  for (let i = 1; i < numbers.length; i++) {
  let a = numbers.sort((a,b)=> a - b);
  let b = Math.max.apply(null,numbers);
  let c = 0;
  if(a[0] < a[1]){
  c = numbers.filter(elem=>{return a[i] !== elem}).join('');  
  }else if(b > a[1]){
  c = numbers.filter(elem=>{return a[i] !== elem}).join('');   
  }

  return Number(c);
}
}

/*14 Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA" */

/* my solution */
function DNAStrand(dna){
  let newStr = '';
  for (let i = 0; i < dna.length; i++) {
     if(dna[i] === 'A'){
          newStr += 'T'
     }else if(dna[i] === 'T'){
       newStr += 'A'
     }else if(dna[i] === 'G'){
      newStr += 'C'
     }else if(dna[i] === 'C'){
      newStr += 'G'
     }
      
  }
  return newStr;
}

/*15 This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three())); */

/* my solution */
function zero(arg1) { return arg1 ? arg1(0) : 0; };

function one(arg1) { return arg1 ? arg1(1) : 1; };

function two(arg1) { return arg1 ? arg1(2) : 2; };

function three(arg1) { return arg1 ? arg1(3) : 3; };

function four(arg1) { return arg1 ? arg1(4) : 4; };

function five(arg1) { return arg1 ? arg1(5) : 5; };

function six(arg1) { return arg1 ? arg1(6) : 6; };

function seven(arg1) { return arg1 ? arg1(7) : 7; };

function eight(arg1) { return arg1 ? arg1(8) : 8; };

function nine(arg1) { return arg1 ? arg1(9) : 9; };

function plus(arg2) { return function(arg3) { return arg3 + arg2; }; };

function minus(arg2) { return function(arg3) { return arg3 - arg2; }; };

function times(arg2) { return function(arg3) { return arg3 * arg2; }; };

function dividedBy(arg2) { return function(arg3) { return Math.floor(arg3 / arg2); }; };

/*16 Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar. */

/* my solution */
function minMax(arr){
  let a = Math.min.apply(null, arr); 
  let b = Math.max.apply(null, arr);
  return [a,b];
    }

  /*17   Task:
    Your task is to write a function which returns the sum of following series upto nth term(parameter).
    
    Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
    Rules:
    You need to round the answer to 2 decimal places and return it as String.
    
    If the given value is 0 then it should return 0.00
    
    You will only be given Natural Numbers as arguments.
    
    Examples:(Input --> Output)
    1 --> 1 --> "1.00"
    2 --> 1 + 1/4 --> "1.25"
    5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57" */

    /* my solution */

function SeriesSum(n){
  let a = 0;
  let b = 4;
  let c = 0;
  let d = 0;
  let final = 0;
  for (let i = 0; i <= n-1; i++) { 
  if(i === 0){ a = 1; }else if(i === 1){c= 1/4;} else if( i > 1){d += (1/(b += 3));}}
  final = a + c + d;
  return String(final.toFixed(2));
  }

 /*18  Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string ) */

/* my solution */
let obj={
  a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8,i:9, j:10, k:11, l:12,
  m:13, n:14, o:15, p:16, q:17, r:18, s:19, t:20, u:21, v:22, 
  w:23, x:24, y:25, z:26
};
function alphabetPosition(text) {
let a = '';
for (let i = 0; i < text.length; i++) {
for (let key in obj) {
if(key === text[i].toLowerCase()){
  a += `${obj[key]} `;
}
} 
}
text=a;
return text.trim();
}

/*19 There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop. */

/* my solution */
var number = function(busStops){
  let a = busStops.map((elem, i)=>{
    return elem[0]
  }).reduce((sum, current)=>{
    return sum + current;
  });
   
  let b = busStops.map((elem, i)=>{
    return elem[1]
  }).reduce((sum, current)=>{
    return sum + current;
  });
return a-b;
};

/*20 Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"] */

/* my solution */
function wave(str){
  let dubl = [];
  for (let i = 0; i < str.length; i++) {
     dubl.push(str);   
  }
   let y = dubl.map((elem, i)=>{
   return  elem.substring(i - str.length,i).toLowerCase() + elem.substring(i,i + 1).toUpperCase() + 
   elem.slice(i + 1).toLowerCase(); 
    });
let final = y.filter(elem=>{
  return elem !== str;
 });
 return final;
}

/*21 Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a. */

/* my solution */
function comp(array1, array2) {
  if (!array1) {
      return false;
  } else if (!array2) {
      return false;
  }
  let arr1 = array1.sort((a, b) => a - b);
  let arr2 = array2.sort((a, b) => a - b);
  let res = arr2.every((elem, i) => {
      return arr1[i] * arr1[i] === arr2[i];
  });
  return res;

}

/*22 Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  "" */

/* my solution */
function order(words){
  let num= words.split(' ').sort((a,b)=>{return a.match(/\d/ig) - b.match(/\d/ig)}).join(' ');
  return num;
  }

/*23   Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted). */

/* my solution */
function isTriangle(a,b,c){ 
  return a + b > c && b + c > a && c + a > b && c + b > a  ? true: false;
 }
 
 console.log(isTriangle(1,2,2));

/*24  The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"] */

/* my solution */
function openOrSenior(data){
  let result=data.map((elem,i)=>{
   return  data[i][0] >= 55 && data[i][1] > 7 ? "Senior":'Open';
  });
  return result;
}

/*25 The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}. */

/* my solution */
function count (string) { 
  let obj= {};
  if(string.length===0){
   return{};
  }

string.split('').forEach(elem=>{
        obj[elem] ? obj[elem]++: obj[elem] = 1;
  });
return obj;
}

/*26 Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */

/* my solution */
function reverseWords(str) {
  return str.split('').reverse().join('').split(' ').reverse().join(' ');
  }

/*27   Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3] */

/* my solution */
function arrayDiff(a, b) {
  return a.filter(elem => !b.includes(elem));
}

/*28 Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455. */

/* my solution */
function sumTwoSmallestNumbers(numbers) {  
  let mas1 = [];
  let mas2 = [];
  let number1 = 0;
  let number2 = 0;
  if(numbers.length >= 4){
   mas1 = numbers.filter(item=>{
  return  Number.isInteger(item);
  });
  number1 =  Math.min.apply(null, mas1);
  
  mas2= mas1.filter(item=>{
  return item !== number1;
  });
  if(mas2.length === 0){
     mas2.push(0);
  }
  number2 = Math.min.apply(null, mas2); 
  }else{
  return 0;
  } 
  return number1 + number2;
}

/*29 Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

/* my solution */
function XO(str) {
  let first = str.split('').filter(item=>{
   return item.toLowerCase() === 'x';
  }).length;
  let second = str.split('').filter(item=>{
      return item.toLowerCase() === 'o';
  }).length;
  return first === second ? true : false;
}

/*30 In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
 */

/* my solution */
function highAndLow(numbers){
  let arr1 = numbers.split(' ');
    return `${Math.max(...arr1)} ${Math.min(...arr1)}`;
 }

/*31  ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false */

/* my solution */
function validatePIN (pin) {
  if(pin.match(/[a-z]/ig)){
      return false;
  }  else if(pin.match(/\D/ig)){
      return false;
  }else if(pin.length === 4 || pin.length === 6){
      return true;
  }else{
      return false;
  }
}

/*32 In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22" */

/* my solution */
function printerError(s) {
  let str ='';
      str = `${s.replace(/[a-m]/gi, "").length}/${s.length}`;
  return str;
  }

/* 33  Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary) */

/* my solution */
function addBinary(a,b) {
  let num = a + b;
  return Number(num).toString(2);
  }

/* 34  If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers. */

/* my solution */
let countSheep = function (num){
  let str = ''
  for (let i = 1; i <= num; i++) {
    if(num > 0){
     str += `${i} sheep...`
    }
  }
  return str;
}

/* Фибоначчи */
function fibonShort(num) {
  let a = 1,
      b = 1;

  for (let i = 3; i <= num; i++) {
    let c = a + b; /* 1 + 1 = 2; 1 + 2 = 3 */
            a = b; /* a = 1; a = 2; a = 3; */
            b = c; /* b = 2; b = 3; b = 5; */
  }
  return b;
}
console.log(fibonShort(5))

/* function fibonacci(n) {
  return (n < 2) ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(100)) */

function fibonacci(num) {

  const result = [0, 1]; /* 0 1 1 2 3 5 8 13 21 34*/

  for (let i = 2; i <= num; i++) {
                           /* 13 21 */
    const prevNum1 = result[i - 1];/* 2 второй по индексу єто 1 + 1 = 2 */
                           /* 8 13 */
    const prevNum2 = result[i - 2];/* 1 первый по индексу это 1 */
    result.push(prevNum1 + prevNum2)  /* слаживаем 1 + 0 = 1 */
  }

  return result[(num)]
}

console.log(fibonacci(9))

/* Палиндром */
const func = (str) => {
  if (str.split('').reverse('').join('') === str) {
    console.log(true)
  } else {
    console.log(false);
  }
}
console.log(func('aabbaa')) 

/* Написать функцию которая возвращает массив
 только с уникальными значениями
 [1,1,2,2,3,4,5,5] => [3,4] */

function withoutRepeat(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
   let count = 0;

   for (let j = 0; j < arr.length; j++){ 
        /* 0  */   /* 01234 */ 
     if (arr[i] === arr[j]) {
      count++
     } 
   }

    if (count === 1) {
      result.push(arr[i])
    }
  }
  return result
}
console.log(withoutRepeat([1,1,2,2,3,4,5,5]))

/* As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0 */
function gimme (triplet) {
  const arr = [...triplet].sort((a, b) => a - b)
  return triplet.indexOf(arr[1])
  }

 /*  Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

  Examples:
  
  input:    output:
  0    ->   0
  2    ->   5
  3    ->   5
  12   ->   15
  21   ->   25
  30   ->   30
  -2   ->   0
  -5   ->   -5
  etc.
  Input may be any positive or negative integer (including 0).
  
  You can assume that all inputs are valid integers. */
  function roundToNext5(n){
    let res = n
  while (n % 5) {
    n++
    res++
  }
  return res
 
  }

/* 
  You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

  The returned value must be a string, and have "***" between each of its letters.
  
  You should not remove or add elements from/to the array. */


function twoSort(s) {
 return s.sort()[0].split('').join('***')
}
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))

/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */
function sumMix(x){
  let sum = 0;
  x.map(function (el) {
    sum += parseInt(el)
  })
  return sum

}
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))

/* Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */
function solution(string) {
  let splitStr = string.split("");
  let newStr = "";
  splitStr.forEach(e =>{
      if(e === e.toUpperCase()) newStr +=" "+e;
      else newStr += e;
  });
  return newStr;
}
console.log(solution('camelCasingTest'))

/* карірованіе */
function curry(f) { // curry(f) выполняет каррирование
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

// использование
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

console.log( curriedSum('f')(4) );

let hello = new Uint8Array([72, 101, 108, 108, 111]);
let blob = new Blob([hello, ' ', 'world'], {type: 'text/plain'});
console.log(blob.slice())

// второй элемент не нужен
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log( title ); 

let user = {};
[user.name, user.surname] = "rty rthuj".split(' ');

let options = {
  title: "Menu"
};

let {width: w = 100, height: h = 200, title1} = options;



console.log(user); 
console.log(user.surname);

let title2, width, height;

// сейчас всё работает
({title2, width, height} = {title: "Menu", width: 200, height: 100});

console.log( title );

// А тепер навчимо наших роботів сортувати коробки на складі. Кожна коробка має свій унікальний номер, а роботи вчаться сортувати в порядку зростання.

// Але сортування — справа нелегка, іноді трапляються помилки. Тому нам поки що доведеться перевіряти, чи правильно робот відсортував коробки.

// Для цього напиши функцію isSorted, яка отримує масив чисел boxNumbers і повертає true, якщо всі числа розташовані в порядку зростання, або false — якщо ні.
function isSorted(boxes) {
  if (boxes.length === 1 || boxes.length === 0) {
    return true
  }
  for (let i = 1; i <= boxes.length; i++) {
    if (boxes[i] <= boxes[i + 1]) {
      return true;
    }
    return false;
  }
}

/* Кілька людей стоять поспіль, розділені на дві команди. Перша людина потрапляє до команди 1, друга - до команди 2, третя - до команди 1 і так далі.

Реалізуй функцію getRowWeights, яка приймає масив чисел (ваги людей) та повертає новий масив з двох цілих чисел, де перше - загальна вага команди 1, а друге - загальна вага команди 2.

Примітки:

Розмір масиву не менше 1.
Усі числа додатні. */

function getRowWeights(people) {
  // write code here
  const comand = [0, 0];

  for (let i = 1; i <= people.length; i++) {
    if (i % 2 !== 0) {
      comand[0]+=people[i - 1]
    } else {
      comand[1]+=people[i - 1]
    }  
  }
  return comand
}
console.log(getRowWeights([]))

/* Караул, когось вбили!

Тобі вдалося трохи звузити список підозрюваних у вбивстві, адже, на щастя, ти знаєш, з ким кожен із них бачився у той день.

Реалізуй функцію getKiller, яка приймає об'єкт підозрюваних suspects, де у кожного підозрюваного є список людей, з якими він зустрічався. Цей об'єкт виглядає ось так:

{
  'James': ['Jacob', 'Bill', 'Lucas'],
  'Johnny': ['David', 'Kyle', 'Lucas'],
  'Peter': ['Lucy', 'Kyle']
}

Окрім списку підозрюваних, функція також приймає масив жертв dead:

['Lucas', 'Bill']

Тобі потрібно вирахувати вбивцю і повернути його ім'я (вбивця завжди працює наодинці). У нашому випадку це James, адже він єдиниий, хто бачив обох вбитих (Lukas і Bill).

Якщо вбивцю не знайдено, то функція нічого не повертає. */

function getKiller(suspects, dead) {
  // write code here

   for (const key in suspects) {
    if(dead.every(dead => suspects[key].includes(dead) )){
      return key
    } else {
      return ''
    }
    }
   }

console.log(getKiller({
  'James': ['Jacob', 'Bill', 'Lucas'],
  'Johnny': ['David', 'Kyle', 'Lucas'],
  'Peter': ['Lucy', 'Kyle']
}, ['Lucas', 'Bill']))



/* Реалізуй функцію addNumbers, яка приймає об'єкт object та повертає суму усіх числових значень в об'єкті */

function addNumbers(object) {
  // write code here
  let sum = 0
  for (let i in object) {
    if (typeof object[i] === 'number') {
       sum+=object[i]
    }
  }
  return sum
}
console.log(addNumbers({
  foo: 'js',
  bar: 'fe',
  boo: 3,
  spam: 10,
  egg: 11,
}))


function countLettersInString(str) {
  // write code here

  const arr = str.split("")
  const result = {}
    arr.forEach((letter) => {
    result[letter] ? result[letter] += 1 : result[letter] = 1
  })
    return result

}
console.log(countLettersInString('arithmetics'))



/* Реалізуй функцію sumObjects, яка приймає необмежену кількість об'єктів та повертає об'єкт, який об'єднує всі введені об'єкти.

Примітки:

Усі властивості об'єкта матимуть лише числові значення
Якщо ключі об'єктів співпадають, значення відповідних ключів сумуються
Функція завжди повертає об'єкт
Числа в об'єкті можуть бути додатніми і від'ємними
Ти можеш скористатися rest оператором, щоб зібрати аргументи передані в функцію в один масив */

const first = {a: 2, b: 4};
const second = {a: 2, b: 10};
const third = {d: -5};

function sumObjects(...rest) {
  // write code here

  const obj = {};

  rest.forEach((item, i, arr) => {
    for (const key in item) {
      obj[key] ? obj[key] += item[key] : obj[key] = item[key];
    }
  });

  return obj;
}
console.log(sumObjects(first, second, third))




function checkNumber(number) {
  // write code here
  if( number === 0){
    let arr = []
    arr.push(false, true, true)
    return arr
 }
  if( number % -2 === 0){
  let arr = []
  arr.push(false, true, false)
  return arr
  }
  if (number <= -1) {
     let arr = []
     arr.push(false, false, false)
     return arr
  }
  if(number % 2 !== 0) {
    let arr = []
    arr.push(true, false, false)
    return arr
  } 
  if(Number.isInteger(number / 10)){
    let arr = []
    arr.push(true, true, true)
    return arr
 }
  if(number % 2 === 0) {
    let arr = []
    arr.push(true, true, false)
    return arr
  } 
 
 
}
console.log(checkNumber(-1))


/* А тепер знайдемо суму елементів масивів.

У цьому завданні реалізуй функцію getArraysSum, яка приймає два масиви чисел однакової довжини та повертає суму всіх елементів цих масивів. */

function getArraysSum(arr1, arr2) {
  // write code here
  return arr1.length === arr2.length ? arr1.concat(arr2).reduce((cur, sum) => cur + sum, 0) : 0
}

console.log(getArraysSum([1, 2, 3, 4], [5, 6, 7, 8]))


/* Реалізуй функцію combineArrays, яка приймає 2 масиви чисел однакового розміру (first та second) та повертає масив чисел, де result[i] — це сума чисел first[i] та second[i]. */

function combineArrays(first, second) {
  // write code here
  const arr = []
  if (first.length === second.length) {
    for (let i = 0; i < first.length; i++) {
    arr.push(first[i] + second[i]) 
    }
  } else {
    return []
  }
  return arr

}
console.log(combineArrays([1, 2, 5], [3, 6, 1]))

/* 
Створи функцію isSpecialNumber, яка приймає додатне число n і визначає, чи є воно особливим.

Число називається особливим, якщо кожна його цифра не більша ніж 5 (0, 1, 2, 3, 4 або 5).

Функція повинна повернути рядок 'Special!!', якщо число особливе, та 'NOT!!' — якщо ні. */

function isSpecialNumber(n) {
  // write code here
  let strNum = n.toString();
  let res = strNum.split('').every(item =>  Number(item) <= 5 )
  return res ? 'Special!!' : 'NOT!!'
}
console.log(isSpecialNumber(38))


/* А тепер перевіримо, чи всі наші числа охайні. Число вважається охайним, якщо кожна його цифра не менша за попередню.

Реалізуй функцію isTidy, яка приймає додатне число та повертає true, якщо воно охайне, інакше — false. */

function isTidy(number) {
  // write code here
 let res =  number.toString().split('').some((num, i, arr) => +arr[i] > +arr[i + 1])
 return res ? false : true
}
console.log(isTidy(13579))


/* Реалізуй функцію isJumping, яка приймає число та повертає рядок 'JUMPING', якщо кожна цифра в числі відрізняється від сусідньої на 1, а якщо ні — рядок 'NOT JUMPING'. */

function isJumping(number) {
  // write code here
  let res = number.toString().split('')
  if (res.length === 1) {
    return 'JUMPING'
  }
 for(let i = 1; i < res.length; i++){
     if(Math.abs(res[i] - res[i-1]) !== 1){
        return 'NOT JUMPING';
     }
  }
  return 'JUMPING';

}
console.log(isJumping(79))


/* Студент Сергій хоче купити Unlim підписку в Mate academy, але в нього не вистачає грошей. Тому він звернувся в Mate bank, який видає кредити під 10% річних і дозволяє виплачувати тіло та відсотки одним платежем в кінці строку.

Якщо брати 1600$ на 3 роки, то в кінці треба заплатити 2129.6$. Але Сергій планував вкластися в 2000. Перерахувавши знову, банкір сказав, що Сергій може взяти кредит на 2 роки, тоді він заплатить лише 1936$.

1600 + 10% = 1760 (160$ відсотки за 1-ий рік)
1760 + 10% = 1936 (176$ відсотки за 2-ий рік)
Давай створимо функцію getYears, яка за розміром кредита amount, річним відсотком percent та обмеженням клієнта limit обчислить максимальний термін кредита (ціла кількість років)

Приклади:

getYears(1600, 10, 2000) === 2 1600 + 160 + 176 < 2000;
getYears(500, 3, 550) === 3 */

function getYears(amount, percent, limit) {
  // write code here

  let count = -1;
  let a = amount;

  while (a <= limit) {

    a += (a * percent) / 100;
    count++;
  }
  return count
}
console.log(getYears(5000, 5, 6500))

/* Функція getLeaders приймає масив чисел, та повертає масив Лідерів

Пояснення: Число вважається Лідером, якщо воно більше за суму всіх елементів справа від нього.

Примітки:

Вхідний масив містить не менше 3 елементів
Масив вхідних чисел може містити як позитивні, так і негативні числа
Числа можуть повторюватися
Масив який повертається, має містити числа в тому ж порядку, в якому вони зустрічаються у початковому масиві
Відсутність елементів справа від числа розцінюється як 0 */

function getLeaders(numbers) {

  const result = [];

  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] > numbers.slice(i + 1)
      .reduce((sum, current) => sum + current, 0)) {
      result.push(numbers[i]);
    };
  };

  return result;
}
console.log(getLeaders([1, 2, 3, 4, 0]))


/* У цьому завданні тобі потрібно показати юзерам хто з їх друзів онлайн і готовий чатитись! Створи функцію whoIsOnline, яка приймає масив об'єктів friends і визначає хто з них online, offline чи away. Якщо юзер має статус online, але його не було в мережі більш ніж 10 хвилин (lastActivity > 10), то можна вважати, що фактично його статус вже away.

Приклад вхідних даних:

[{
  username: 'Alice',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy',
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob',
  status: 'online',
  lastActivity: 104
}]

Результат функції whoIsOnline:

{
  online: ['Alice'],
  offline: ['Lucy'],
  away: ['Bob']
}

Якщо в чаті немає активних юзерів, то результат має виглядати ось так:

{
  offline: ['Lucy'],
  away: ['Bob']
}

Якщо ваших друзів зовсім немає в чаті, то до функції прийде порожній масив []. У цьому випадку потрібно повернути порожній об'єкт {}.
 */

function whoIsOnline(friends) {

  let online = [];
  let offline = [];
  let away = [];

  if (friends.length === 0) {
    return {};
  }

  friends.forEach(item => {
    if (item.status === 'online' && item.lastActivity > 10) {
      away.push(item.username);
    } else if (item.status === 'online' && item.lastActivity <= 10) {
      online.push(item.username)
    } else {
      offline.push(item.username);
    }
  });
   const obj = {
    online: online,
    offline: offline,
    away: away
   }
   
   for (const key in obj) {
    if (obj[key].length === 0) {
      delete obj[key]
    }
  }
   
   return obj;
  
}
console.log(whoIsOnline([{
  username: 'Alice',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy',
  status: 'offline',
  lastActivity: 10
}, {
  username: 'Bob',
  status: 'online',
  lastActivity: 8
}]))


/* Реалізуй функцію addNumbers, яка приймає об'єкт object та повертає суму усіх числових значень в об'єкті */

function addNumbers(object) {
  // write code here
  let num = 0;

  for (const key in object) {
    if (typeof object[key] === 'number') {
      num += object[key];
    }
  }

  return num;
}

console.log(addNumbers({
  foo: 'js',
  bar: 'fe',
  boo: 3,
  spam: 10,
  egg: 11,
}))

/* Напиши функцію countLettersInString, яка приймає рядок str і повертає об'єкт, в якому ключ - літери з str (всі в нижньому регістрі), а значення - кількість цих літер в str.

Наприклад: countLettersInString('arithmetics') => {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2} */
function countLettersInString(str) {
  // write code here
  let obj = {};
  const arr = str.split('').sort();

  arr.forEach((item, i) => {
    obj[item] ? obj[item] += 1 : obj[item] = 1; 
  });

  return obj;
}

console.log(countLettersInString('arithmetics'))


function countMatchingSocks(colors) {
  // write code here
  let sort = colors.sort((a, b) => a - b)
  let result = 0
  for (let i = 0; i < colors.length; i++) {

      if (sort[i] === sort[i + 1]) {
        result++
        i++
       }
      
   
  }
  return result 
}

console.log(countMatchingSocks([2, 2, 2, 2, 2]))

/* Реалізуй метод find, який повторює функціонал оригінального метода. Всередині методу використовуй this для доступу до поточного масиву.

Користуватися методами масивів у цьому завданні заборонено. Використовуй цикли, доступ по індексу та довжину масиву за потреби. */

numbers.find = function(callback) {
  // write code here
  for (let i = 0; i < this.length; i++) {
    const value = this[i];

    if (callback(value, i, this)) {
      return this[i];
    }
  }

  return undefined;
};

/* Реалізуй метод findIndex, який повторює функціонал оригінального метода. Всередині методу використовуй this для доступу до поточного масиву.

Користуватися методами масивів у цьому завданні заборонено. Використовуй цикли, доступ по індексу та довжину масиву за потреби. */

numbers.findIndex = function(callback) {
  // write code here
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }

  return -1;
};

/* Реалізуй метод some, який повторює функціонал оригінального метода. Всередині методу використовуй this для доступу до поточного масиву.

Користуватися методами масивів у цьому завданні заборонено. Використовуй цикли, доступ по індексу та довжину масиву за потреби. */

numbers.some = function(callback) {
  // write code here
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }

  return false;
};


/* Реалізуй метод every, який повторює функціонал оригінального метода. Всередині методу використовуй this для доступу до поточного масиву.

Користуватися методами масивів у цьому завданні заборонено. Використовуй цикли, доступ по індексу та довжину масиву за потреби. */

numbers.every = function(callback) {
  // write code here
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }

  return true;
};

/* Вітаємо в Mate Analytic Center. Ми проводимо статистичні дослідження та аналіз даних. В цьому та наступних завданнях, нам потрібна твоя допомога з написанням софту.

Завдання 1.

Створи функцію getСenturies, яка приймає масив років years, та повертає масив століть. Радимо скористатися методом map. */

function getCenturies(years) {
  // write code here

  return years.map(item => Math.ceil(item / 100));
}

/* Дані надходять, і їх багато. Колись, для зручності, ми зберігали дані кожного користувача як масив, де першим елементом було ім'я, а другим — прізвище. Зараз з'явилася потреба додавати нові відомості про користувачів, і зберігати дані таким чином стає незручно.

Створи функцію mapDatabase, яка приймає масив people і повертає новий масив з об'єктами для цих людей. */

const mapDatabase = (people) => {
  // write code here

  return people.map(item => {
    return {
     firstName: item[0],
     lastName: item[1]
    }
  })
};

console.log(mapDatabase([
  ['Mike', 'Anderson'],
  ['Lori IV', 'Pirs'],
]))



/* Привіт! Нам треба якнайшвидше знайти всіх користувачів з короткими іменами (не більше 4 букв) та довгими прізвищами (понад 8 букв).

Створи функцію filterPeople, яка приймає масив people та повертає масив з тими користувачами які відповідають обом критеріям. Радимо скористатися методом filter. */

function filterPeople(people) {
  // write code here
  return people.filter(item => item.firstName.length
   <= 4 && item.lastName.length > 8);
}

console.log(filterPeople([
  { firstName: 'Lee', lastName: 'Haverbeke' },
  { firstName: 'Clara', lastName: 'Aernoudts' },
  { firstName: 'Jan', lastName: 'Rycke' },
  { firstName: 'Anna', lastName: 'Bernardus' },
 ]))

/*  У базі даних кожна людина має свій унікальний ідентифікатор. Напиши функцію getPersonById, яка прийматиме число id, масив people та повертатиме знайдений по ідентифікатору об'єкт. Якщо нічого не знайдено, поверни null. Радимо скористатися методом find для масивів. */

function getPersonById(id, people) {
  // write code here
  if (people.find(item => item.id === id)) {
    return people.find(item => item.id === id);
  } else {
    return null;
  }
}
console.log(getPersonById(201, [
  { id: 114, firstName: 'Clara', lastName: 'Aernoudts' },
  { id: 118, firstName: 'Jan', lastName: 'Rycke' },
  { id: 101, firstName: 'Lee', lastName: 'Haverbeke' },
  { id: 201, firstName: 'Anna', lastName: 'Bernardus' },
 ]))

/*  Іноді не потрібно отримувати весь об'єкт, достатньо знати його індекс у масиві. Що ж, давай знайдемо індекс першої людини, ім'я якої закінчується на вказану букву.

 Напиши функцію getPersonIndex, яка приймає масив people та літеру nameEndsWith і повертає індекс відповідної людини в масиві або null, якщо нікого не знайдено. Радимо скористатися методом findIndex. */

 const getPersonIndex = (people, nameEndsWith) => {
  // write code here

  if (people.findIndex(item => item.firstName.endsWith(nameEndsWith)) > -1) {
    return people.findIndex(item => item.firstName.endsWith(nameEndsWith))
  } else {
    return null;
  }
};
console.log(getPersonIndex([
  { id: 118, firstName: 'Jan', lastName: 'Rycke' },
  { id: 101, firstName: 'Lee', lastName: 'Haverbeke' },
  { id: 114, firstName: 'Clara', lastName: 'Aernoudts' },
  { id: 201, firstName: 'Anna', lastName: 'Bernardus' },
 ], 'q'))

/*  Тут усе просто. Нам потрібно вивести список найкращих працівників Mate Analytic Centre. Напиши функцію getEmployeesList, яка приймає масив people та повертає відсортований в алфавітному порядку список повних імен працівників. */

 function getEmployeesList(people) {
  // write code here
 return people.map(item => `${item.firstName} ${item.lastName}`).sort((a, b) => a.localeCompare(b));
}

console.log(getEmployeesList([
  { id: 118, firstName: 'Jan', lastName: 'Rycke' },
  { id: 101, firstName: 'Lee', lastName: 'Haverbeke' },
  { id: 114, firstName: 'Clara', lastName: 'Aernoudts' },
  { id: 201, firstName: 'Anna', lastName: 'Bernardus' },
  { id: 204, firstName: 'Lieven', lastName: 'Causmaecker' },
  { id: 205, firstName: 'Maria', lastName: 'Sturm' },
 ]))


 function sortRobotsByVersion(robots) {
  // write code here
}
console.log(sortRobotsByVersion([
  {name: 'Kobs', ver: 16},
  {name: 'Lari', ver: 32},
  {name: 'Lee', ver: 1},
  {name: 'Robert', ver: 1},
  {name: 'Viber', ver: 4},
  {name: 'Colins', ver: 21},
 ]))

/*  Дані про кожного робота з Mate Robot Factory також зберігаються в Mate Analytic Centre.

 Зараз дані не відсортовані, давай відсортуємо їх в порядку спадання від найновішої версії робота до найстарішої.
 
 Напиши функцію sortRobotsByVersion, яка приймає масив роботів robots та сортує його. Повертати з функції нічого не потрібно. */


 function sortRobotsByVersion(robots) {
  // write code here
   robots.sort((a, b) => b.ver - a.ver);
}

console.log(sortRobotsByVersion([
  {name: 'Kobs', ver: 16},
  {name: 'Lari', ver: 32},
  {name: 'Lee', ver: 1},
  {name: 'Robert', ver: 1},
  {name: 'Viber', ver: 4},
  {name: 'Colins', ver: 21},
 ]))

/*  Створи функцію getAverageAge, яка приймає масив ages та повертає середній вік наших користувачів. Вік округли до найближчого цілого числа.

 Радимо скористатися методом reduce для масивів. */

 function getAverageAge(ages) {
  // write code here
  if (ages.length === 0) {
    return 0;
  } else {
    return Math.round(ages.reduce((sum, current) => sum + current, 0)
     / ages.length);
  }
};
console.log(getAverageAge([18, 14, 22, 34, 43, 18, 20, 34, 24]))


function getPeopleNames(people) {
  // write code here
  return people.map(item => item.name);
}
console.log(getPeopleNames([
  { name: 'Carolus Haverbeke', sex: 'm', born: 1832, died: 1905, father: 'Carel Haverbeke', mother: 'Maria van Brussel' },
  { name: 'Emma de Milliano', sex: 'f', born: 1876, died: 1956, father: 'Petrus de Milliano', mother: 'Sophia van Damme' },
  { name: 'Maria de Rycke', sex: 'f', born: 1683, died: 1724, father: 'Frederik de Rycke', mother: 'Laurentia van Vlaenderen' },
]))

/* const carolus = {
  name: 'Carolus Haverbeke',
  father: 'Carel Haverbeke',
  mother: 'Maria van Brussel',
  // ...
};

const emma = {
  name: 'Emma de Milliano',
  father: 'Petrus de Milliano',
  mother: 'Sophia van Damme'
  // ...
};

const maria = {
  name: 'Maria de Rycke',
  father: 'Frederik de Rycke',
  mother: 'Laurentia van Vlaenderen',
  // ...
};

const carel = {
  name: 'Carel Haverbeke',
  father: 'Pieter Antone Haverbeke',
  mother: 'Livina Sierens',
  // ...
}; */
/* const people = [carolus, emma, maria, carel]; */

function getChildren(people, person) {
  // write code here
  return people.filter(item => person.name === item.mother
  || person.name === item.father);
}


/* const people = [
  { name: 'Carolus Haverbeke', sex: 'm', born: 1832, died: 1905, father: 'Carel Haverbeke', mother: 'Maria van Brussel' },
  { name: 'Emma de Milliano', sex: 'f', born: 1876, died: 1956, father: 'Petrus de Milliano', mother: 'Sophia van Damme' },
  { name: 'Maria de Rycke', sex: 'f', born: 1683, died: 1724, father: 'Frederik de Rycke', mother: 'Laurentia van Vlaenderen' },
  { name: 'Carel Haverbeke', sex: 'm', born: 1796, died: 1837, father: 'Pieter Antone Haverbeke', mother: 'Livina Sierens' },
]; */

const person = people[0];

function getFather(people, person) {
  // write code here
  if (people.length === 0 || people.filter(item =>
    item.name === person.father)[0] === undefined) {
    return null;
  }

  return people.filter(item => item.name === person.father)[0];
}

console.log(getFather([
  { name: 'Carolus Haverbeke', sex: 'm', born: 1832, died: 1905, father: 'Carel Haverbeke', mother: 'Maria van Brussel' },
  { name: 'Emma de Milliano', sex: 'f', born: 1876, died: 1956, father: 'Petrus de Milliano', mother: 'Sophia van Damme' },
  { name: 'Maria de Rycke', sex: 'f', born: 1683, died: 1724, father: 'Frederik de Rycke', mother: 'Laurentia van Vlaenderen' },
  { name: 'Carel Haverbeke', sex: 'm', born: 1796, died: 1837, father: 'Pieter Antone Haverbeke', mother: 'Livina Sierens' },
], person))





function getWomenDiedBefore1800(people) {
  // write code here

  return people.filter(item => item.died < 1800 && item.sex === 'f');
}
console.log(getWomenDiedBefore1800([
  {
    name: 'Maria Sturm',
    sex: 'f',
    born: 1835,
    died: 1917,
    father: 'Charles Sturm',
    mother: 'Seraphina Spelier',
  },
  {
    name: 'Jacobus Bernardus van Brussel',
    sex: 'm',
    born: 1736,
    died: 1809,
    father: 'Jan van Brussel',
    mother: 'Elisabeth Haverbeke',
  }
]))


/* Напиши функцію getPeopleLivedMin65Years яка приймає масив об'єктів people і повертає масив людей, які прожили мінімум 65 років.

Функція не повинна змінювати вхідний масив.

Не використовуй цикли for, while і метод forEach! */

function getPeopleLivedMin65Years(people) {
  // write code here
  return people.filter(item => item.died - item.born >= 65);
}


/* Напиши функцію createLivedMinFilter, яка приймає невід'ємне ціле число age і повертає функцію-колбек.

Ця функція-колбек потім використовується в методі filter. Метод filter відфільтровує масив об'єктів people і залишає тільки тих людей, хто прожив мінімум age років. */

function createLivedMinFilter(age) {
  // write code here
  return function(item, i, arr) {
    return item.died - item.born >= age;
  };
};


/* Напиши функцію getPeopleWithLifeDurations, яка приймає масив об'єктів people і повертає копію цього масива. Кожний об'єкт в копії повинен містити властивість lifeDuration з числом, що представляє тривалість життя цієї людини.

Об'єкти у вхідному масиві не повинні змінитися.

Не використовуй цикли for та while і метод forEach! */

function getPeopleWithLifeDurations(people) {
  // write code here
  const copy = people.slice();

  return copy.map(item => {
    return {
      ...item,
      lifeDuration: item.died - item.born,
    };
  });
}

/* Напиши функцію getPeopleWithCentury, яка приймає масив об'єктів people і повертає копію цього масива. Кожний об'єкт в копії повинен містити властивість century з числом, що представляє століття, до якого дожила ця людина.

Об'єкти у вхідному масиві не повинні змінитися.

Не використовуй цикли for, while і метод forEach!

Примітка: 1735 - це 18 століття, 1700 - це 17 століття. */

function getPeopleWithCentury(people) {
  // write code here
  const copy = people.slice();

  return copy.map(item => {
    return {
      ...item,
      century: Math.ceil(item.died / 100),
    };
  });
}

const carolus = { name: 'Carolus Haverbeke', father: 'Carel Haverbeke', mother: 'Maria van Brussel' };
const emma = { name: 'Emma de Milliano', father: 'Petrus de Milliano', mother: 'Sophia van Damme' };
const laurentia = { name: 'Laurentia Haverbeke', father: 'Jan Haverbeke', mother: 'Maria de Rycke' };
const maria = { name: 'Maria de Rycke', father: 'Frederik de Rycke', mother: 'Laurentia van Vlaenderen' };
const carel = { name: 'Carel Haverbeke', father: 'Pieter Antone Haverbeke', mother: 'Livina Sierens' };
const elisabeth = { name: 'Elisabeth Haverbeke', father: 'Jan Haverbeke', mother: 'Maria de Rycke' };

const people = [carolus, emma, laurentia, maria, carel, elisabeth];


/* Напиши функцію getPeopleWithChildren, яка приймає масив об'єктів people і повертає копію цього масива. Кожний об'єкт в копії повинен містити властивість children з масивом людей, які є дітьми цієї людини.

Об'єкти у вхідному масиві не повинні змінитися.

Не використовуй цикли for, while і метод forEach! */

function getPeopleWithChildren(people) {
  // write code here
  const copy = people.slice();

  return copy.map((item, i, arr) => {
    return {
      ...item,
      children: copy.filter(res => item.name === res.mother
      || item.name === res.father),
    };
  });
}
console.log(getPeopleWithChildren(people))

/* Напиши функцію sortByBorn, яка приймає масив об'єктів people і повертає копію цього масива, де люди відсортовані по року народження (від найранішого до найпізнішого).

Функція не повинна змінювати вхідний масив.

Не використовуй цикли for, while і метод forEach! */

function sortByBorn(people) {
  // write code here
  const copy = people.slice();

  return copy.sort((a, b) => a.born - b.born);
}

/* Напиши функцію sortByName, яка приймає масив об'єктів people і повертає копію цього масива, де люди відсортовані по іменах в алфавітному порядку.

Функція не повинна змінювати вхідний масив.

Не використовуй цикли for, while і метод forEach! */

function sortByName(people) {
  // write code here
  const copy = people.slice();

  return copy.sort((a, b) => a.name.localeCompare(b.name));
}

/* Напиши функцію sortByLifeDuration, яка приймає масив об'єктів people і повертає копію цього масива, де люди відсортовані за тривалістю життя (від найкоротшої до найдовшої).

Функція не повинна змінювати вхідний масив.

Не використовуй цикли for, while і метод forEach! */


function sortByLifeDuration(people) {
  // write code here
  const copy = people.slice();

  return copy.sort((a, b) => (a.died - a.born) - (b.died - b.born));
}

/* Напиши функцію createSorterBy, яка приймає рядок field і повертає функцію-коллбек. Ця функція-коллбек буде застосовуватися з методом sort до масиву об'єктів з однаковими ключами. Об'єкти повинні бути відсортовані за даною властивістю field. */

function createSorterBy(field) {
  // write code here
  return function(a, b) {
    if (field === 'name') {
      return a.name.localeCompare(b.name);
    } else if (field === 'born') {
      return a.born - b.born;
    } else if (field === 'age') {
      return a.age - b.age;
    } else if (field === 'sex') {
      return a.sex.localeCompare(b.sex);
    } else if (field === 'died') {
      return a.died - b.died;
    } else if (field === 'department') {
      return a.department.localeCompare(b.department);
    }
  };
}

/* Металобрухт. Місце, якого бояться всі роботи. Та перед тим як відправити робота в останню путь, з нього виймають корисні деталі. Для кожної деталі потрібен відповідний інструмент.

Напиши функцію makeTool, яка приймає рядок part та повертає функцію — інструмент для видалення деталі part з роботів. Функція інструмент приймає об'єкт robot та повертає його копію, але вже без деталі part. При цьому сам robot не повинен змінюватися. */

function makeTool(part) {
  // write code here
  return (object) => {

    const copy = Object.assign({}, object);

    for (const key in copy) {
      if (key === part) {
        delete copy[key];
      }
    }

    return copy;
  };
}

const kobi = {
  wheels: 10,
  chipVersion: 11,
  serialNumber: 100
};

const removeWheels = makeTool('wheels');
const removeChip = makeTool('chipVersion');

const robotWithoutWheels = removeWheels(kobi);
console.log(robotWithoutWheels)


/* Речі різного об'єму, ваги та розміру по всьому світу прибувають на зберігання на склади Mate Warehouse Company. Час збирати статистику!

Створи функцію makeWarehouse, яка приймає необов'язковий параметр goods (масив чисел з вагою кожного товару, що вже зберігається на складі) і повертає функцію warehouse.

Якщо викликати warehouse без параметрів, вона поверне об'єкт статистики з полями totalWeight і averageWeight - загальна та середня вага всіх товарів на складі (закруглена до найближчого цілого).

Якщо передати декілька чисел, то warehouse додасть їх до загальної ваги всього, що вже зберігається на складі.
 */
function makeWarehouse(goods) {
  // write code here
  let obj = {};
  const arrGoods = [...goods];

  function warehouse(...rest) {
    const total = arrGoods.reduce((sum, current) => sum + current, 0);

    if (rest.length > 0) {
      arrGoods.push(...rest);

      obj = {
        totalWeight: total,
        averageWeight: Math.round(total / arrGoods.length) || 0,
      };
    } else {
      obj = {
        totalWeight: total,
        averageWeight: Math.round(total / arrGoods.length) || 0,
      };
    }

    return obj;
  };

  return warehouse;
}

const  firstWarehouse = makeWarehouse([10, 20])
console.log(firstWarehouse()); // { totalWeight: 30, averageWeight: 15 }

console.log(firstWarehouse(10, 20, 30, 40, 10, 10));
console.log(firstWarehouse(56, 44));

console.log(firstWarehouse());

/* Розвідувальному управлінню SI:7, потрібно безпечно зберігати здобуті дані. Твоє завдання абсолютно засекречене!

Створи функцію makeSecret, яка приймає рядки secret та password і повертає функцію storage з секретом.

при звичайному виклику storage повертає рядок Absolutely not a secret thing
якщо викликати метод storage.getSecret і передати вірний пароль, то він поверне таємне значення secret
якщо пароль невірний, то результат буде Wrong password!
якщо пароль було введено невірно 3 рази поспіль, то метод блокується і всі наступні виклики повертатимуть null (навіть для правильного пароля)
якщо ДО блокування було введено вірний пароль, то лічильник скидається, і знову є 3 спроби для введення пароля
Метод storage.setSecret(newSecret, newPassword) дозволяє встановити новий пароль та таємну фразу і скинути лічильник */

function makeSecret(secret, password) {
  // write code here
  const storage = () => {
    return 'Absolutely not a secret thing';
  };
  let count = 0;
  const secret1 = secret;
  const password1 = password;

  storage.getSecret = (password2) => {
    if (count === 3) {
      return null;
    }

    if (password1 === password2) {
      count = 0;

      return secret1;
    } else {
      count++;

      return 'Wrong password!';
    } ;
  };

  storage.setSecret = (newSecret, newPassword) => {
    count = 0;
    secret = newSecret;
    password1 = newPassword

    return newSecret;
  };

  return storage;
}

/* Реалізуй функцію toArrayOfDigits, яка приймає натуральне число n і повертає масив з його цифр в зворотньому порядку.

Наприклад: для n = 46156 функція має повернути [6, 5, 1, 6, 4].

Елементи масива мають бути числами, а не рядками. */

function toArrayOfDigits(n) {
  // write code here
  const arr = n.toString().split('').reverse();
  const res = [];

  for (const num of arr) {
    res.push(+num);
  }

  return res;
}
/* 
Реалізуй функцію countOccurrences, яка приймає 2 аргументи phrase та part і повертає кількість разів, що part з'являється у phrase.

Рядки phrase і part містять виключно маленькі латинські літери. Літери в part не повторюються. */

function countOccurrences(phrase, part) {
  // write code here
  let res = phrase.split(part).length - 1

  return res;
}
console.log(countOccurrences('azyxxzyzy', 'zy'))


function isArrayPretty(numbers) {
  // write code her
    // write code here
    return Boolean(numbers.length) && numbers.every(e => numbers.includes(e - 1)
    || numbers.includes(e + 1));
  }

console.log(isArrayPretty([6, 7, 1]))



/* Реалізуй функцію makeStorage так, щоб працював наступний код:

!!! ВАЖЛИВО: storage має коректно працювати з будь-якими строковими ключами:

const storage = makeStorage();

storage.setValue('name', 'Peter');
storage.setValue('age', 30);

storage.getValue('name'); // Peter
storage.getValue('age'); // 30

storage.setValue('age', 31);
storage.getValue('age'); // 31

storage.getValue('occupation'); // undefined

Зверни увагу, що ключі getValue та setValue також мають корректно додаватися та читатися:

storage.getValue('getValue'); // undefined
storage.setValue('getValue', 42);
storage.getValue('getValue'); // 42

storage.setValue('setValue', 'hello');
storage.setValue('x', 10);
storage.getValue('x'); // 10
storage.getValue('setValue'); // 'hello' */


function makeStorage() {
  // write code here

  const storage = () => {
    return '';
  };

  const obj = {};

  Object.assign({}, obj);

  storage.setValue = (param1, param2) => {
    obj[param1] = param2;
  };

  storage.getValue = (param) => {
    const key = param;

    return obj[key];
  };

  return storage;
};


const storage = makeStorage();

storage.setValue('name', 'Peter');
storage.setValue('age', 30);

console.log(storage.getValue('age'));
console.log(storage.getValue('namef'));


/* Реалізуй функцію getPeopleWithParents, яка приймає масив об'єктів people та повертає новий масив з копіями всіх людей. Якщо у людини в новому масиві є мати, то властивість mother має посилатися на неї, так само для батька.

мати - це людина, ім'я якої співпадає зі значенням властивості mother у дитини, аналогічно батько;
ВАЖЛИВО! об'єкти початкового масиву people НЕ повинні змінюватися;
Якщо мати знайдена, то властивість mother має посилатися на об'єкт з нового масиву (не зі старого);
Якщо батька чи матері немає в новому масиві, поля father і mother мають зберегти старі значення. */


function getPeopleWithParents(people) {

  const newArr = people.map(item => Object.assign({}, item));

  for (let i = 0; i < people.length; i++) {
    for (let j = 0; j < people.length; j++) {
      if (newArr[i].mother === newArr[j].name) {
        newArr[i].mother = newArr[j];
      } else if (newArr[i].father === newArr[j].name) {
        newArr[i].father = newArr[j];
      }
    }
  }

  return newArr;
}


const peoplee = [
  {
    'name': 'Carolus Haverbeke',
    'sex': 'm',
    'born': 1832,
    'died': 1905,
    'father': 'Carel Haverbeke',
    'mother': 'Maria van Brussel',
  },
  {
    'name': 'Emma de Milliano',
    'sex': 'f',
    'born': 1876,
    'died': 1956,
    'father': 'Petrus de Milliano',
    'mother': 'Sophia van Damme',
  },
  {
    'name': 'Maria de Rycke',
    'sex': 'f',
    'born': 1683,
    'died': 1724,
    'father': 'Frederik de Rycke',
    'mother': 'Laurentia van Vlaenderen',
  },
  {
    'name': 'Jan van Brussel',
    'sex': 'm',
    'born': 1714,
    'died': 1748,
    'father': 'Jacobus van Brussel',
    'mother': 'Joanna van Rooten',
  },
  {
    'name': 'Philibert Haverbeke',
    'sex': 'm',
    'born': 1907,
    'died': 1997,
    'father': 'Emile Haverbeke',
    'mother': 'Emma de Milliano',
  },
  {
    'name': 'Jan Frans van Brussel',
    'sex': 'm',
    'born': 1761,
    'died': 1833,
    'father': 'Jacobus Bernardus van Brussel',
    'mother': null,
  },
  {
    'name': 'Pauwels van Haverbeke',
    'sex': 'm',
    'born': 1535,
    'died': 1582,
    'father': 'N. van Haverbeke',
    'mother': null,
  },
  {
    'name': 'Clara Aernoudts',
    'sex': 'f',
    'born': 1918,
    'died': 2012,
    'father': 'Henry Aernoudts',
    'mother': 'Sidonie Coene',
  },
  {
    'name': 'Emile Haverbeke',
    'sex': 'm',
    'born': 1877,
    'died': 1968,
    'father': 'Carolus Haverbeke',
    'mother': 'Maria Sturm',
  },
]

const peopleWithParents = getPeopleWithParents(peoplee);
console.log(peopleWithParents)


function createIsMyParentFilter(name) {
  // write code here
  let personeObject = {};

  return function(isOurParent, id, array) {
    personeObject = array.filter(_persone => _persone.name === name)[0];

    if (personeObject) {
      return isOurParent.name === personeObject.mother
        || isOurParent.name === personeObject.father;
    } else {
      return false;
    }
  };
}


const callback = createIsMyParentFilter('Carolus Haverbeke');
const peoples = [
  {
    'name': 'Carolus Haverbeke',
    'sex': 'm',
    'born': 1832,
    'died': 1905,
    'father': 'Carel Haverbeke',
    'mother': 'Maria van Brussel',
  },
  {
    'name': 'Emma de Milliano',
    'sex': 'f',
    'born': 1876,
    'died': 1956,
    'father': 'Petrus de Milliano',
    'mother': 'Sophia van Damme',
  },

]
const parents = peoples.filter(callback);
console.log(parents)





const mainCore = {
  getMainInfo() {
    // write code here
    return `Robot %${this.name}%, cpu version %${this.cpuVersion}%`;
  },
  getAdditionalInfo() {
    // write code here
    return `Update version: %${this.softwareVersion}%`;
  },
  updateRobot(updateVersion) {
    // write code here
    
    return `${this.name} updated to ${this.softwareVersion = updateVersion}`;
  },
};

const navigationCore = {
  // write code here
  getCoords() {
    return `x=%${this.coords.x}% y=%${this.coords.y}%`;
  },
  setTargetCoords(x, y) {
    this.target.coords = {
      x: x,
      y: y,
    };
  },
};

Object.setPrototypeOf(navigationCore, mainCore);

const movementCore = {
  // write code here
  moveForward(step = 1) {
    this.coords.y = step;
  },
  moveBack(step = 1) {
    this.coords.y = step;
  },
  moveLeft(step = 1) {
    this.coords.x = step;
  },
  moveRight(step = 1) {
    this.coords.x = step;
  },
};

Object.setPrototypeOf(movementCore, navigationCore);

const kerbin = {
  name: 'Kerbin',
  cpuVersion: 145.4,
  softwareVersion: 23.45,
  coords: {
    x: 0,
    y: 0,
  },
  target: {
    coords: {
      x: 0,
      y: 0,
    },
  },

};

Object.setPrototypeOf(kerbin, movementCore);


console.log(kerbin.moveBack(10))
console.log(kerbin)

/* Цей розділ буде присвячено розширенню стандартних прототипів методами, які тобі можуть в майбутньому знадобитися, та створенню власних конструкторів.

Буває, що об'єкт, з яким ми працюємо, несе в собі надлишкову інформацію. Нам потрібно отримати його копію, але без надлишкових ключів. Додай до прототипу об'єктів метод omit, який приймає масив ключів та повертає новий об'єкт без вказаних ключів.

Приклад:

const robot = {
  wheels: 4,
  name: 'roberto',
  serialNumber: 123,
  coords: {
    x: 0,
    y: 0,
  },
  weight: 40,
}

robot.omit(['coords', 'wheels', 'weight']) === {
  name: 'roberto',
  serialNumber: 123,
} */

Object.prototype.omit = function omit(keys) {
  // write code here
  const obj = { ...this };

  const allValue = Object.keys(obj);
    for (let i = 0; i < allValue.length; i++) {
     if (allValue[i] === keys[i]) {
      delete obj[allValue[i]]
     }
    }

  return obj;
};

const robot = {
  wheels: 4,
  name: 'roberto',
  serialNumber: 123,
  coords: {
    x: 0,
    y: 0,
  },
  weight: 40,
}

console.log(robot.omit(['coords', 'wheels', 'weight']))

/* Додай всім масивам метод groupBy, який приймає callback, запускає його для кожного елемента масиву і повертає об'єкт, ключами якого є результати callback, а значеннями - масиви елементів, для яких callback повернув такий результат.

Якщо callback не передано, то використай функцію x => x */

Array.prototype.groupBy = function(callback) {
  const result = {};

  for (const item of this) {
    // the key is a callback result or the item itself
    const key = callback ? callback(item) : item;

    // We check if result has a key
    if (!result[key]) {
      // If not we add an array to save items to
      result[key] = [];
    }

    // and push items there
    result[key].push(item);
  }

  return result;
};
const words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

// Групуємо слова за довжиною
const grouppedWords = words.groupBy(word => word.length);

console.log(grouppedWords)

const bob = { type: 'cleaner', name: 'bob' };
const paul = { type: 'cargo', name: 'paul' };
const robert = { type: 'cleaner', name: 'robert' };

const robots = [bob, paul, robert];

// Групуємо роботів за типом
const groupedRobots = robots.groupBy(robot => robot.type)

console.log(groupedRobots)


/* Конструкторське бюро Mate Robot Factory знайшло можливість ще більше спростити виробництво роботів використовуючи функції-конструктори.

Напиши конструктор Robot, який прийме name та створить робота зі вказаним ім'ям і нульовими координатами. Всім роботам мають бути доступні методи прототипа goForward, goBack, goLeft, goRight, які переміщують робота на 1 у відповідному напрямку. */


function Robot(name) {
  // write code here
  this.name = name;

  this.coords = {
    x: 0,
    y: 0,
  };
}

Robot.prototype.goForward = function() {
  this.coords.y += 1;
};

Robot.prototype.goRight = function() {
  this.coords.x += 1;
};

Robot.prototype.goLeft = function() {
  this.coords.x -= 1;
};

Robot.prototype.goBack = function() {
  this.coords.y -= 1;
};


/* Завдяки наслідуванню, ми можемо значно спростити виробництво різних типів роботів. Тому ми вирішили взяти конструктор з завдання Robot constructor за основу, змінивши назву на BaseRobot, і виготовляти інші різновиди.

Створи конструктор CargoRobot, який викликатиме всередині конструктор BaseRobot і додаватиме роботам нові поля: багажне відділення trunk і кількість місць у ньому maxTrunkCapacity. Крім того, їм мають бути доступні усі методи базових роботів, що зберігаються в BaseRobot.prototype (успадкуй його). */

function BaseRobot(name) {
  // write code here
  this.name = name;

  this.coords = {
    x: 0,
    y: 0,
  };
}

BaseRobot.prototype.goForward = function() {
  this.coords.y += 1;
};

BaseRobot.prototype.goRight = function() {
  this.coords.x += 1;
};

BaseRobot.prototype.goLeft = function() {
  this.coords.x -= 1;
};

BaseRobot.prototype.goBack = function() {
  this.coords.y -= 1;
};

/**
 * @param {string} name
 * @param {number} maxTrunkCapacity
 *
 * @type { Robot } CargoRobot {
 *   trunk: {Array}
 *   maxTrunkCapacity: {number}
 * }
 *
 * @returns {CargoRobot}
 */
function CargoRobot(name, maxTrunkCapacity) {
  // keep this line to call BaseRobot constructor for each new CargoRobot
  this.trunk = [];
  this.maxTrunkCapacity = maxTrunkCapacity;
  BaseRobot.call(this, name);

  // write code here
}

Object.setPrototypeOf(CargoRobot.prototype, BaseRobot.prototype);
// don't forget to inherit BaseRobot.prototype for CargoRobot.prototype
// write code here



String.prototype.truncate = function(options = {}) {
  // write code here
  const { length = 30, omission = '...', separator = '' } = options;
  const truncString = this.slice(0, length);
  const findTrucIndex = truncString.lastIndexOf(separator);
  let newString = '';

  if (truncString.slice(0, findTrucIndex - omission.length < 0)) {
    return omission;
  }

  if (this.length <= length) {
    newString += this;
  } else if (this.length >= length && separator) {
    newString += truncString.slice(0, findTrucIndex) + omission;
  } else if (this.length >= length) {
    newString += this.slice(0, length - omission.length)
       + omission;
  } 

  return newString;
};


  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
console.log(text.truncate({  length: 20, omission: ' more...'}))




/*const { length = 30, omission = '...', separator = '' } = options;
  const truncString = this.slice(0, length);
  const findTrucIndex = truncString.lastIndexOf(separator);
  let newString = '';

  if (truncString.slice(0, findTrucIndex - omission.length < 0)) {
    return omission;
  }

  if (this.length <= length) {
    newString += this;
  } else if (this.length >= length && separator) {
    newString += truncString.slice(0, findTrucIndex) + omission;
  } else if (this.length >= length) {
    newString += this.slice(0, length - omission.length)
       + omission;
  } 

  return newString; */
/* 
  Останній банкір Mate Bank звільнився. Все ж таки вести облікові записи клієнтів в зошитах, це було не дуже хорошою ідеєю. Потрібно терміново написати програмне забезпечення для банку, щоб ми могли відмовитися від зошитів, та перейти на електронний облік.

  Створи клас BankAccount, конструктор якого приймає наступні початкові дані: ім'я клієнта name та початковий баланс банківського рахунку money. Також в класі мають бути наступні методи:
  
  getInfo - повертає рядок з інформацією про клієнта в форматі з прикладу.
  addMoney - приймає суму amount, на яку потрібно збільшити баланс, та рядок info про операцію
  withdrawMoney - приймає суму amount, на яку потрібно зменшити баланс, та рядок info про операцію
  getAccountHistory - повертає історію операцій по рахунку. */

  class BankAccount {
    /**
     * @param {string} name
     * @param {number} money
     */
    constructor(name, money) {
      // write code here
      this.name = name;
      this.money = money;
      this.history = [`Initial: ${this.money}`];
    }
  
    getInfo() {
      return `Name: ${this.name}, Amount: ${this.money}`;
    }
  
    addMoney(amount, info) {
      this.salary = amount;
      this.money = this.salary + this.money;
      this.info = `${info}: ${this.salary}`;
      this.history.push(this.info);
    }
  
    withdrawMoney(amountminus, info) {
      this.amountminus = amountminus;
      this.money = this.money - this.amountminus;
      this.info = `${info}: ${-this.amountminus}`;
      this.history.push(this.info);
    }
  
    getAccountHistory() {
      return this.history;
    }
  }


 /*  Щороку Mate Robot Factory проводить бої роботів на арені. Різні модифікації роботів, змагаються за першість, а чемпіони попадають на дошку слави. Тут і військові роботи, і роботи-прибиральники, і вантажні роботи, як бачиш, яких роботів тут тільки немає.

  Давай, щоб усе було чесно, створимо дошку слави для цих змагань (клас BoardOfFame).
  
  За замовчуванням, місць на дошці слави буде всього 3. Але в випадку міжнародних турнірів, де чемпіонських місць знадобиться більше, конструктор класу BoardOfFame зможе прийняти будь-яке інше число місць.
  
  Створи метод addRecord для усіх екземплярів класу BoardOfFame, який прийматиме об'єкт robot, та додаватиме новий запис на дошку слави. Якщо новий робот матиме більше балів, ніж інші роботи, він займе своє місце в топі, посунувши інших роботів до низу.
  
  Також створи getter list для екземплярів, який буде виводити список чемпіонів у форматі з прикладу. Список має бути рядком. Getter повинен повертати ... для не існуючих елементів (якщо потрібно повернути перші 5, але в масиві всього 3 робота).
  
  За правилами турнірів усі роботи мають мати унікальні імена. Якщо новий робот має таке ж ім'я, як один з роботів в списку - просто онови у існуючого робота значення score.
  
  Приклад:
  
  const board = new BoardOfFame();
  board.list // `1. ... | 2. ... | 3. ...`
  board.addRecord({name: 'Cleaner-900', score: 6})
  board.addRecord({name: 'Cleaner-775', score: 16})
  board.list // `1. Cleaner-775: 16 | 2. Cleaner-900: 6 | 3. ...`
  board.addRecord({name: 'MX-56', score: 23})
  board.addRecord({name: 'Cleaner-775', score: 30})
  board.list // `1. Cleaner-775: 30 | 2. MX-56: 23 | 3. Cleaner-900: 6`
  
  const internationalBoard = new BoardOfFame(5);
  internationalBoard.list = `1. ... | 2. ... | 3. ... | 4. ... | 5. .. */

  class BoardOfFame {
    // Write your code here
    constructor(size = 3) {
      this.size = size;
      this.records = [];
    }
  
    addRecord(robot) {
      const { name, score } = robot;
      const existingRecord = this.records.find((record) => record.name === name);
  
      if (existingRecord) {
        existingRecord.score = score;
      } else {
        this.records.push(robot);
      }
  
      this.records.sort((a, b) => b.score - a.score);
  
      if (this.records.length > this.size) {
        this.records = this.records.slice(0, this.size);
      }
    }
  
    get list() {
      let listStr = '';
  
      for (let i = 0; i < this.size; i++) {
        if (i >= this.records.length) {
          listStr += `${i + 1}. ... | `;
        } else {
          const { name, score } = this.records[i];
  
          listStr += `${i + 1}. ${name}: ${score} | `;
        }
      }
  
      return listStr.slice(0, -3);
    }
  }

/*   Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321 */

/* Solution */
function descendingOrder(n){
  const arrNumber = [...String(n)].sort((a, b) => {
    return b - a
  })
  return Number(arrNumber.join('')); 
}

/* Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata */

function shortcut (string) {
  const arr = ['a', 'e', 'i', 'o', 'u'];
  const res = string.split('').filter((item, i) => !arr.find(letter => letter === item))
  return res.join('');
}
console.log(shortcut('never'))

/* You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi" */

function reverse(string){
  const res = string.split(' ').reverse();
  return res.join(' ');
}
console.log(reverse('Hello world'))

/* Issue
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

Task
Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8 */

function pipeFix(numbers){
  let res = [];
 for (let i = numbers.at(0); i <= numbers.at(-1); i++) {
  res.push(i)
 }
 return res
  }
  console.log(pipeFix([-1, 2, 12]))

/* 
  Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives. 
  invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
  invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
  invert([]) == []
  You can assume that all values are integers. Do not mutate the input array/list.*/

  function invert(array) {
    let newArr = []
  for (let i = 0; i < array.length; i++) {
    if(array[i] < 0){
    newArr.push(-array[i])
    }
    if (array[i] >= 0) {
      newArr.push(-array[i])
    }
    
  }
  return newArr
  }
  console.log(invert([1,-2,3,4,5]))

/*   Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0. */

  function combat(health, damage) {
     const res = (health - damage) < 0 ? 0 : health - damage
     return res
  }
  console.log(combat(100, 30))

 /*  Kids drink toddy.
  Teens drink coke.
  Young adults drink beer.
  Adults drink whisky.
  Make a function that receive age, and return what they drink.
  
  Rules:
  
  Children under 14 old.
  Teens under 18 old.
  Young under 21 old.
  Adults have 21 or more.
  Examples: (Input --> Output)
  
  13 --> "drink toddy"
  17 --> "drink coke"
  18 --> "drink beer"
  20 --> "drink beer"
  30 --> "drink whisky" */

  function peopleWithAgeDrink(old) {
    if(old < 14){
    return "drink toddy"
    }
    else if(old >= 14 && old < 18){
      return "drink coke";
    }
    else if(old >= 18 && old < 21){
      return "drink beer";
    }
      else if(old >= 21){
      return "drink whisky";
      }
  };
  console.log(peopleWithAgeDrink(15))

 /*  Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS. */

String.prototype.isUpperCase = function() {
return String(this) === String(this).toUpperCase()
}
console.log('CUOo'.isUpperCase())

/* Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n" */

function diamond(n){
if(n % 2 === 0 || n < 1) {
 return null;
}

const middle = Math.floor(n / 2);
let res = '';
for (let i = 0; i < n; i++) {
  const spaces = Math.abs(middle - i);
  const asterics = n - spaces * 2;
  res+= ' '.repeat(spaces) + '*'.repeat(asterics) + '\n';
  
}
return res
}
console.log(diamond(5))

/* Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number) */

function persistence(num) {
  if (num < 10) {
    return 0
  } 
  let count = 0;

   function recursion(number) {
    count++
    const split = String(number).split('');
    const reduce = split.reduce((cur, sum) => Number(cur) * Number(sum));
    if (String(reduce).length === 1) {
        return reduce
    } else {
        return  recursion(reduce)
    }
  }
  console.log(recursion(num))
  return count;
   
}
console.log(persistence(999))


/* Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi" */

function remove (string) {
  if (string.at(-1) === '!') {
    return string.slice(0, -1)
  } else {
    return string
  }
}
console.log(remove("Hi"))

/* Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1] */

const reverseSeq = n => {
   let arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }
  return arr.reverse()
};
console.log(reverseSeq(5))

/* Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3] */

var uniqueInOrder=function(iterable){
  if (!Array.isArray(iterable)) {
    iterable = iterable.split(''); 
  }
  
  return iterable.filter((value, index) => value !== iterable[index - 1]);
}
console.log(uniqueInOrder('AAAABBBCCDAABBB'))


/* Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0. */

function sumArray(array) {

  const max =  Math.max(...array);
  const min =  Math.min(...array);
  return array.reduce((cur, sum) => cur + sum) - max - min;
}
console.log(sumArray([  -6, 20, -1, 10, -12 ]))

/* Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1] */

function removeSmallest(numbers) {
  if (numbers.length === 0) {
    return [];
  }
  const smallestIndex = numbers.indexOf(Math.min(...numbers));
  console.log(smallestIndex)
  const result = numbers.slice(0, smallestIndex).concat(numbers.slice(smallestIndex + 1));

  return result;
}
console.log(removeSmallest([2,2,1,2,1]))

/* Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

employed | vacation 
true     | true     => false
true     | false    => true
false    | true     => false
false    | false    => false */

function setAlarm(employed, vacation){
  if(employed && vacation) {
    return false
  } 
  if(!employed && !vacation) {
    return false
  } 
  if((employed === false) && vacation) {
    return false
  }
  if(employed && (vacation === false)) {
    return true
  }
}
console.log(setAlarm(false, false))


/* DESCRIPTION:
Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the american system returns the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.

More information here

Examples
1  =>  0 
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3 */

function getRealFloor(n) {
  if (n <= 0) {
    return n
  }
  if (n < 13 && n > 0) {
    return n - 1
  }
  if (n >= 13) {
    return n - 2
  }
}

console.log(getRealFloor(13))

/* Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!" */

  function hello(name) {
    if (name === undefined || name.length === 0) {
      return 'Hello, World!'
    }

     const nameLower = name.toLowerCase()
     const bigFirst = name[0].toUpperCase();
     const res = `Hello, ${bigFirst}${nameLower.slice(1)}!`
     return res
  }
  console.log(hello())

 /*  You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2,  */

function mergeArrays(arr1, arr2) {
  const concatArray = Array.from(new Set(arr1.concat(arr2)));
  return concatArray.sort((a, b) => a - b)
}

console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]))


/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. */

