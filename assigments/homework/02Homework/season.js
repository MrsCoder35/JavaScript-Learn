/* Create a program that determines the season based on the month and day entered by the user. (Do not
use loops or functions) :
Take month and day from the user.
Season conditions:
Spring: February 21 - May 31
Summer: June 1 - September 21
Fall: September 22 - December 20
Winter: December 21 - February 20
Inputs should 1-12 for month and 1-31 for day. If it is outside these values, an error message should be
displayed on the console.*/


const month = Number(prompt("Enter the month (1-12):"));
const day = Number(prompt("Enter the day (1-31):"));


if (month >= 1 && month <= 12 && day >= 1 && day <= 31) {
    
    if ((month === 2 && day >= 21) || (month > 2 && month <= 5)) {
        console.log("Spring");
    } else if ((month === 6 && day <= 21) || (month > 6 && month <= 9)) {
        console.log("Summer");
    } else if ((month === 9 && day >= 22) || (month > 9 && month <= 12)) {
        console.log("Fall");
    } else {
        console.log("Winter");
    }
} else {
    console.log("You have logged in incorrectly. try again.");
}