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

//2)Amstrong number.:- 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407, 1634, 8208, 9474, 54748
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

function x1() {
    alert("Hello");
    ["Your", "Dog"].forEach(alert);
  }
  x1();


