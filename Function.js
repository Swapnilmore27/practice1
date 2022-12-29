//1
let remainder = (a, b) => a % b;
console.log(remainder(51, 6));

//2
function greet(user_name) {
  return "Hello, " + user_name;
}
console.log(greet("Jhon"));

//3
function positiveNegative(c) {
  if (c > 0) {
    return "positive";
  } else {
    return "negative";
  }
}
console.log(positiveNegative(-10));

//4 function 4 using terneray operators
function evenOdd(d) {
  result = d % 2 === 0 ? "even" : "odd";
  console.log(result);
}
evenOdd(12);

//5
function reverseNumber(num) {
  while (num > 0) {
    let reverse = num % 10;
    num = parseInt(num / 10);
    console.log(reverse);
  }
}
reverseNumber(12345);

//6
function sweepNumber(N1, N2, N3) {
  N3 = N1;
  N1 = N2;
  N2 = N3;
  console.log("First number = " + N1);
  console.log("Second number = " + N2);
}
sweepNumber(10, 20);

//7
//let per = Number(prompt("Enter the Percentage :"));
let per = 68;
switch (per) {
  case
    per >= 85:
    console.log("Destination");
    break;
  case 2:
    per < 85 && per >= 70;
    console.log("First Class");
    break;
  case 3:
    per < 70 && per >= 35;
    console.log("Pass");
    break;
  case 4:
    per < 35 && per >= 0;
    console.log("Fail");
    break;
  case 5:
    per < 0;
    console.log("Invalid input");
    break;
}

//8
function simpleInterest(p, r, t) {
  /*let p = prompt("enter the principal amount: ");
    let r = prompt("enter the interest rate: ");
    let t = prompt("enter the peroid: ");*/

  let simpleinterest = (p * r * t) / 100;
  console.log("Simple Interest is : " + simpleinterest);
}
simpleInterest(1200, 20, 12);

//9
function factorial(fact) {
  if (fact == 0) return 1;
  else return fact * factorial(fact - 1);
}
//let fact = 3;
//let result = factorial(fact);
//console.log(result);
console.log(factorial(5));

//10
function concatination(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(concatination("Swapnil", "More"));

//11
function form() {

  let emp = prompt("Please enter number of employees: ");
  for(i=1; i<=emp; i++) {
  let user_name = prompt("Enter your name: ");
  let company = prompt("Enter your Company: ");
  let email = prompt("Enter your Email: ");
  let phone_number = prompt("Enter your Phone Number: ");
  let address = prompt("Enter your Address: ");

  console.log("Name : " + user_name);
  console.log("Company : " + company);
  console.log("Email : " + email);
  console.log("Phone Number : " + phone_number);
  console.log("Address : " + address);

  }
}
form();

// Switch Case
// const expr = "Papayas";
// switch (expr) {
//   case "Oranges":
//     console.log("Oranges are $0.59 a pound.");
//     break;
//   case "Mangoes":
//   case "Papayas":
//     console.log("Mangoes and papayas are $2.79 a pound.");
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

// const perc = "60";
// // const user1 = prompt("please enter marks")
// switch(perc){
//   case "64":
//     console.log('average percentage');
//     break;
// };


//12 bmi function

let weight = Number(prompt("enter your weight in kg"));
let height = Number(prompt("enter height in meters"));

//console.log(bmiCalc());
function bmiCalc() {
  let formulae = weight / height ** 2;
  if (formulae >= 18 && formulae <= 25) {
    console.log(`your bmi ${formulae} is within range `);
  } else if (formulae < 18) {
    console.log(`your bmi ${formulae} is below range need to gain some weight `);
  } else {
    console.log(`your bmi is ${formulae} out of rang need to loose some weight`);
  }
}


for (i=0; i<=10;i+=3){
  console.log(i);
}
