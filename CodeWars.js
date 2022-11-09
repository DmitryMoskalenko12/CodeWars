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
console.log(func('aabba')) 