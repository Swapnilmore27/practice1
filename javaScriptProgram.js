//1) Palindrome
function palindrome(input)
{
    result = input.split("").reverse().join("");
    
    if(input==result){
    console.log("Yaaa..., It's a palindrome");
    }
    else{
    console.log("Noooo..., Not a palindrome");
    }
    console.log(`result: ${result}`);
    console.log(`input: ${input}`);

    return result;
}
//let radar = prompt("Please Enter a letter: ")
palindrome("radar");
//or
function palindrome1(input)
{
    let len = input.length;
        
    for(let i = 0; i<=len/2; i++)
    
        if(input[i] == input[len-1-i]){
        console.log("Yaaa..., It's a palindrome");
        }
        else{
        console.log("Noooo..., Not a palindrome");
        }
    
}
palindrome1("radar");

//2) Amstrong number.:- 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407, 1634, 8208, 9474, 54748
function amstrong(num)
{
    let sum=0
    let temp = num;
    let n=temp.toString()

    while(temp >0)
    {
        sum += ((temp%10)**n.length);
        temp =parseInt (temp/10); 
    }
    console.log(`num: ${num}`);
    console.log(`sum: ${sum}`);
    if(sum==num){
    console.log("Yaaa..., It's a Amstrong number");
    }
    else{
    console.log("Noooo..., Not a Amstrong number");
    }
}
amstrong(54748);

//3) Get Data&Time.
class DayDate {
constructure(){ 
    this.today = new Date();
}; 
df(){
let day = this.today.getDay();
let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
console.log("Today is: "+ dayList[day]);
};
as(){
let hour = this.today.getHours();
let minute = this.today.getMinutes();
let second = this.today.getSeconds();
let perpand = hour>=12? "PM" : "AM";
console.log("Current Time: " + hour +"hrs : "+ minute +"min : "+ second+"sec "+ perpand);
};
df()
as()
};

//4)
function print_current_page()
{
    window.print();
};

//5) Area of triangle
function areaTriangle(side1, side2, side3)
{
    let perimeter = (side1 + side2 + side3)
    let semi_perimeter = perimeter/2;
    let sp = semi_perimeter;
    let area = Math.sqrt(sp*((sp - side1)*(sp - side2)*(sp - side3)));
    
    console.log(`Area of triangle: ${area}`);
    console.log("semi-perimeter: "+ sp );
    console.log("This is a "+perimeter+" of triangle");
}
areaTriangle(5, 6, 7);

//6) Leap year
function leapYear(year)
{
    let result = year%100===0 ? year%400 === 0 : year%4===0;
    if(result == true)
    console.log(year +" is a leap year");
    else
    console.log(year +" is not a leap year");
    
}
leapYear(2004);
leapYear(100);
leapYear(2000);
leapYear(1700);
leapYear(1800);
leapYear(100);

//7) JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
console.log('----------------------------------------------------------------');
for(let year= 2014; year<=2050; year++)
{
    let d= new Date(year, 0, 1);//(year,month <jan=0>,date)
    if(d.getDay()=== 0)
        console.log("1st jan of "+year+ " is sunday");    
}
console.log('---------------------------------------------------------------');

