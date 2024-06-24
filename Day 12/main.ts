
// Q 101:

// Generate a random integer between 1 and 10.
// Explain & TIP: To generate a random integer within a specific range, you can use Math.random() in combination 
// with Math.floor() or Math.ceil() to ensure the result is an integer.

function getRandomInt() : number {
    return Math.floor(Math.random() * 10) + 1 ; 
}
console.log(getRandomInt()) ; 

//..........................................................................................................................

// Q 102:

// Calculate and log the absolute difference between the number -5 and 5.

//Explain & TIP: The Math.abs() function returns the absolute value of a number, which is useful for finding the 
//magnitude of a difference without regard to direction.

const difference1: number = Math.abs(-5 - 5) ; // output 10

const difference2: number = Math.abs(-16 - 75) ; // output 91

console.log(difference1) ;
console.log(difference2) ;

//...............................................................................................................................

// Q 103:

// Write a function that returns a random boolean value, true or false.

// Explain & TIP: Generating a random boolean is a simple but useful trick. You can use Math.random() and check 
// if it's above or below 0.5 to decide between true or false.

function getRandomBoolean() : boolean {
    return Math.random() > 0.5 ;
}
console.log(getRandomBoolean()) ; 

//.........................................................................................................................

// Q 104:

//Create a function that generates a random hexadecimal color code.

// Explain & TIP: Hexadecimal color codes are strings that start with # followed by 6 hexadecimal digits. You can
// generate each digit randomly and concatenate them into a full color code.


function getRandomHexColor() : string {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6 , '0') ;

    return color ; 
}
console.log(getRandomHexColor()) ; 

//.............................................................................................................................

// Q 105:

// Simulate a dice roll using JavaScript and return a random integer between 1 and 6.

//Explain & TIP: Simulating a dice roll involves randomly choosing an integer between 1 and 6. Use Math.random() 
//along with some arithmetic to achieve this range.

function rollDiece() : number {
    return Math.floor(Math.random() * 6 ) + 1 ; 
    
}
console.log(rollDiece()) ; 