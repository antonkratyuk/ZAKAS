/**//*function displayInfo(arg){
	var output = ''
	if(typeof arg.name == 'string'){
		arg.name+='  BAgavongo ';
		output+=arg.name
	}
		

	if(typeof arg.age == 'number'){
		arg.age += 20;
		output+=arg.age;
	}
	console.log(output);
}

displayInfo({age: 12});*/

//arrays

/*1*/
/*var colors = ['red', 'blue', 'green'];
colors.length = 2;
console.log(colors[2])*///undefined!
/*2*/
/*var colors = ['red', 'blue', 'green'];
colors.length = 4;
console.log(colors[4])//undefined
console.log(colors.length)//4*/
/*3*/
/*var colors = ['red', 'blue', 'green'];
colors[colors.length] = 'black';
console.log(colors);*/
/*4*/
/*var colors = ['red', 'blue', 'green'];
colors[99] = 'metallic';
console.log(colors.length);//100
console.log(colors);//["red", "blue", "green", 99: "metallic"]*/
/*5*/
/*var colors =["red", "blue", "green", 99: "metallic"];
console.log(colors.length);//error!!!*/
/*6*/
//IDENTIFICATION
/*A*//*var arr = new Array();
console.log( arr instanceof Array);//true*/
/*B*//*var arr = new Array();//IE9+, FireFox 4+, Safari 5+ Opera 10.5+, Chrome
console.log(Array.isArray(arr));*/
//CASTING
/*var arr = ['red', 'blue', 'green'];
console.log(arr.toString());//red,blue,green
console.log(arr.valueOf());//["red","blue","green"]
console.log(arr)//["red","blue","green"]

console.log(typeof arr.toString());//string
console.log(typeof arr.valueOf());//object
console.log(typeof arr);//object
*/

//toSting vs toLacaleString
/*var person1 = {
	toLocaleString: function(){
		return "Nikolaos";
	},
	toString: function(){
		return "Nicolas";
	}
};

var person2 = {
	toLocaleString: function(){
		return "Gregorios";
	},
	toString: function(){
		return "Greg";
	}
};

var people = [person1, person2];
console.log(people);//[Object, Object];
console.log(people.toString());//Nicolas, Greg;
console.log(people.toLocaleString());//Nicolaos, Gregorious;
console.log(people.tostring())//Error is not a function;
*/
//join()

/*var arr = ['Antonio', 'Montana'];
console.log(arr.join('&'));//Antonio&Montana;
console.log(arr.join(' '));//Antonio Montana;
console.log(arr.join());//Antonio,Montana
console.log(arr.join(undefined));//Antonio,Montana!!!

var arr1 = ['Mamba', null, 'Zakas'];
console.log(arr1.join());//Mamba,,Zakas

arr1 = ['Mamba', undefined, 'Zakas'];
console.log(arr1.join());//Mamba,,Zakas 
console.log(arr1.valueOf());//['Mamba', undefined, 'Zakas']// An empty string by Zakas!!!! 
console.log(arr1.toString());//Mamba,,Zakas
console.log(arr1.toLocaleString());//Mamba,,Zakas

var str = arr1.valueOf();
console.log(str);//["Mamba", undefined, "Zakas"];!!! An empty string by Zakas!!!*/

//ARRAY AS STACK (LIFO)
/*var colors = new Array();
var count = colors.push("red", "green");
console.log(count);//2

count = colors.push("black");
console.log(count);//3

var item = colors.pop();
console.log(item);//black
console.log(colors.length);//2

var arr = [];
var i = arr.pop();
console.log(i);//undefined;*/

//ARRAY AS QUEUE (FIFO)
//shift()
/*var colors = new Array();
var count = colors.push("red", "blue");
console.log(count);//2

count = colors.push("black");
console.log(count);//3

var item = colors.shift();
console.log(item);//red
console.log(colors.length);//2

//unshift()

var colors = new Array();
var count = colors.unshift("red", "blue", "green");
console.log(count);//3

count = colors.unshift("black");
console.log(count);//4

var item = colors.pop();
console.log(item);//green
console.log(colors.length);//3*/

//reverse() & sort()

//reverse
/*var values = [1, 2, 3, 4, 5];
values.reverse();
console.log(values);//[5,4,3,2,1];

var v = values.reverse();
console.log(v);[1,2,3,4,5];//[1,2,3,4,5]*/

//sort
/*var values = [0, 1, 5, 10, 15];
values.sort();
console.log(values);//[0,1,10,15,5]


//function compare(val1, val2){
//	if(val1 < val2)
//		return -1;
//	else if(val1 > val2)
//		return 1
//	else
//		return 0;
//}
function compare(val1, val2){
	return val1 - val2;
}

values.sort(compare);
console.log(values);//[0,1,5,10,15]*/

//MANIPULATION METHODS
/*var colors = ["red", "green", "blue"];
var colors2 = colors.concat("yellow",["balck", "brown"]);
console.log(colors);//["red", "green", "blue"]
console.log(colors2);//["red", "green", "blue", "yellow", "black", "brown"]

var colors3 = colors.concat();
colors3[1] = "Bagavongo";
console.log(colors);//["red", "green", "blue"]
console.log(colors3);//["red", "Bagavongo", "blue"]

var colors4 = colors;
colors4[1] = "Antonoi Montana";
console.log(colors);//["red", "Antonoi Montana", "blue"]
console.log(colors4); *///["red", "Antonoi Montana", "blue"] 

//slice()
/*var colors = ["red", "blue", "grren", "yellow", "purple"];
var colors2 = colors.slice(1);
var colors3 = colors.slice(1, 4);

console.log(colors);//["red", "blue", "grren"]
console.log(colors2);//["blue", "grren", "yellow", "purple"]
console.log(colors3);//["blue", "grren", "yellow"]

var color5 = colors.slice(-1);
console.log(color5);//["red", "blue", "grren", "yellow", "purple"]

var color6 = colors.slice(-2);
console.log(color6);//["yellow", "purple"]

var color7 = colors.slice(-32);
console.log(color7);//["red", "blue", "grren", "yellow", "purple"]

var color8 = colors.slice(undefined);
console.log(color8);//["red", "blue", "grren", "yellow", "purple"]

var color9 = colors.slice(10);
console.log(color9);//[]

var color10 = colors.slice(-1,-2);
console.log(color10);//[]

var color11 = colors.slice(1, -5);
console.log(color11);//["blue","green"]

var color12 = colors.slice(1, -4);
console.log(color12);//[]

var color13 = colors.slice(1, -4);
console.log(color13);//[]

var color14 = colors.slice(-1, 3);
console.log(color14);//[]*/


//splice()

/*var colors = ['red', 'green', 'blue'];

var removed = colors.splice(0, 2);
console.log(removed);//["red", "green"]
console.log(colors);//["blue"]

removed = colors.splice(1, 0, "yellow", "orange");
console.log(removed)//[]
console.log(colors)//["blue", "yellow", "orange"];

removed = colors.splice(0, 0, "yellow", "orange");
console.log(removed)//[]
console.log(colors)//["yellow","orange","blue","yellow","orange"];

removed = colors.splice(-1, 0, "yellow", "orange");
console.log(removed)//[]
console.log(colors)//"yellow", "orange", "blue", "yellow", "yellow", "orange", "orange"]

removed = colors.splice(1, 1, "baba", "galya");
console.log(removed);//["orange"]
console.log(colors);//["yellow", "baba", "galya", "blue", "yellow", "yellow", "orange", "orange"]*/

// SEARCH METHODS

/*var numbers = [1,2,3,4,5,4,3,2,1];
console.log(numbers.indexOf(4));//3
console.log(numbers.lastIndexOf(4));//5

console.log(numbers.indexOf(4, 4));//5
console.log(numbers.lastIndexOf(4, 4));//3

var person = { name: "Nicholas"};
var people = [{name: "Nicholas"}];

var morePeople = [person];

console.log(people.indexOf(person));//-1
console.log(morePeople.indexOf(person));//0*/

//RUN OVER FUNCTIONS
//some vs every
/*var numbers = [1,2,3,4,5,4,3,2,1];

var everyResult = numbers.some(function(item, index, array){
	return (item > 2);
});
console.log(everyResult);//true

everyResult = numbers.every(function(item, index, array){
	return (item > 2);
});
console.log(everyResult);//false

//filter
everyResult = numbers.filter(function(item, index, array){
	return (item > 2);
});
console.log(everyResult);//[3, 4, 5, 4, 3]

//map
everyResult = numbers.map(function(item, i, array){
	return item*2;
});

console.log(everyResult);//[2, 4, 6, 8, 10, 8, 6, 4, 2]
console.log(numbers);//[1, 2, 3, 4, 5, 4, 3, 2, 1]*/

//REDUCTION

var values = [1,2,3,4,5];
var sum = values.reduce(function(prev, cur, i, values){
	return prev += cur;
});

console.log(sum);//15


sum = values.reduceRight(function(prev, cur, i, values){
	return prev += cur;
});

console.log(sum);//15