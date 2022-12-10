console.group('https://edabit.com/challenge/3LpBLgNRyaHMvNb4j'); //very easy

function addition(a, b) {
	return a + b;
	
}

console.groupEnd();

console.group('https://edabit.com/challenge/nhXofMMyrowMyr9Nv'); //very easy

function nextEdge(side1, side2) {
	return (side1 + side2) -1;

}

console.groupEnd(); 


console.group('https://edabit.com/challenge/6AnQqiEjkJdZrWhPS'); //Easy

function howManySeconds(hours) {
	return hours * 3600;
}

console.groupEnd();


console.group('https://edabit.com/challenge/Q2j5FTFtsk7PdzrQk'); //Normal

function remainder(x, y) {
	return x % y;
	
}
console.groupEnd();


console.group('https://edabit.com/challenge/hzxN9bAebBPNqdQto'); // EASY

function redundant(str) {
	return function() {
		return str;
	}
}

console.groupEnd();


console.group('https://edabit.com/challenge/vvuAkYEAArrZvmp6X'); //EASY

function bitwiseAND(n1, n2) {
	return n1 & n2;

}

function bitwiseOR(n1, n2) {
	return n1 | n2;
	
}

function bitwiseXOR(n1, n2) {
	return n1 ^ n2;
	
}

console.groupEnd();


console.group('https://edabit.com/challenge/4gzDuDkompAqujpRi'); //NORMAL

function addUp(num) {
	let sum = 0;
	for ( let i = 0; i <= num; i++) {
		sum += i;
	}
	return sum;
}

console.groupEnd();


console.group('https://edabit.com/challenge/qMr6wYGr6NaXAPQGF'); //EASY

function divisible(num) {
	if ( num % 100 === 0) {
		return true;
	}
	else {
		return false;
	}
}
	
console.groupEnd();


console.group('https://edabit.com/challenge/NHfYRHg2tDtcZyykB'); //NORMAL


function possibleBonus(a, b) {
	if (a === b) return false;
	if (a > b) return false;
	return b - 6 > a? false : true;
}

console.groupEnd();



console.group('https://edabit.com/challenge/iwdZiFucR5wkQsFHu');

const REGEXP = /\b[0-9][0-9]:[0-9][0-9]\b/;

function check(str) {
	return REGEXP.test(str);
}


console.groupEnd();


console.group('https://edabit.com/challenge/8kTQqoWYQXRsKuYEf');

let promise = new Promise(( resolve, reject ) => {
	setTimeout(( ) =>{
		resolve("Nepatinka man edabitas")
	},1000)
})

console.groupEnd();



console.group('https://edabit.com/challenge/hD3euqPHM82Cbr7R8');

function largestSwap(num) {
	return num / 10 >= num % 10;
}

console.groupEnd();



console.group('https://edabit.com/challenge/Bxp6uGjgmf8TuG8Fe');

function derivative(b, m) {
	return b * m ** (b - 1)
}

console.groupEnd();

console.group('https://edabit.com/challenge/erFxBbqzZPSegMwnc');


function changeEnough(change, amountDue) {
	let quarter = change[0] * .25
	let dime = change[1] * .1
	let nickle = change[2] *.05
	let penny = change[3] *.01
	return (quarter+dime+nickle+penny >= amountDue)
}

console.groupEnd();

console.group('https://edabit.com/challenge/q4FkAnRFwDq5LXqkf');

function addsNum(n) {
	return number => number + n;
}

console.groupEnd();