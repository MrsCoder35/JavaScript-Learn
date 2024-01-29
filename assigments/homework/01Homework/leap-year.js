//!Write a JavaScript program that checks if a given year is a leap year. Leap years have a special property

const year = Number(prompt("Enter a year:"));

if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}