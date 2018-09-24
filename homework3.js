// 1
const operations = function (a,  b, c, ) {
	
	return a*b+c-64*1;
};
const result = operations( 10, 5, 7)
console.log(result)

// 2 
const a = function (){
	return 2
};
console.log(a())


// 3 
const kg = {kg:50}
const plus = 10
const result = function () {
 kg.kg = kg.kg + plus
};
c()
console.log(kg.kg );

// 4 
const string1 = "hi everyone"
const string2 = "have a good day"
const string3 = "be happy"
const f = function (string1, string2, string3){
	if (a.length > b.length){
		if(a.length > c.length){
			return a;
		}
	} else if (b.length > c.length){
		return b
	} else {return c}
};
console.log(f())

// 5 
const numbers = function (a,b){
	 if(a === b){
	 	return 0}
		else if (a > b){
			return 1}
			 else {return -1}
			 
		 
};
const g = numbers(4 , 5)
console.log (g)

// 6
const multiply = function (a , b ){
	return a*b
};
console.log(multiply(20, 5))

// 7+ 
const divide = function (a, b){
	return = a/b
};
console.log(divide(6,3))

// 8 
const triangleArea = function (base, height){
	return divide(multiply(base, height), 2);
};
const TArea= triangleArea(3, 4);
console.log(TArea);

// 9 
const numlngth = function(n) {
	const numToString = n + "";
	return numToString.legth;
}

const check = numlngth(123456);
console.log(check);

// 10 
const strings = function (word1 , word2 , number){
 const wordsLength = word1.length + word2.length;
 if (wordsLength > number){
 	return 1
 }  else {
 	return -1
 }
}; 
const check = wordsLength("barev dzez", "inchpes eq", 5)
console.log(check)

// 11
const runStuff= function (num1, num2, string1) {
	if(string1 === "rectangle") {
	const AreaRectangle = num1 * num2;
	return AreaRectangle;
	}
	else if(string1 === "triangle") {
	return triangleArea(num1, num2);
	
	}
	else {
		return -1;
	}

}