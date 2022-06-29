


// Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
function multipleOfThreeFive(){
  let i;
  for(i=1; i<=100;i++){
    if(i%3===0 && i%5===0){
        console.log(`fizzBuzz`);
    }
    else if(i%3===0){
        console.log(`Fizz`);
    }
    else if(i%5===0){
        console.log(`Buzz`);
    }
    else{
        console.log(i)

    }

  }
}
 multipleOfThreeFive()


//  Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
function multiple(){
    let y=0;

    for (var a=0; a<1000; a++){
        if(a%3===0 && a%5===0){
           y+=a


        }

    }
    console.log(y)

}
multiple()


// Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
function numbersOfOddandEven(){
    for(var numbers = 0; numbers<=20; numbers++){
        if(numbers %2 !== 0 ){
            console.log(`${numbers} is odd`)
        }
        else{
            console.log(`${numbers} is even`)
        }
        

    }

}



// Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]
function largest(){

     let num = [-2,4,-5,6,0]
    let y = num[0]; 
    for(let s=0; s<num.length;s++){
        if(y<num[s]){
            y = num[s];
        }

    }
console.log(y);

}
largest()


// Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40
function largesttwonumbers(){
   let num1 = 10;
   let num2 = 40;

   if(num1>num2){
    console.log(`${num1} is greater`);
   }
   else{
    console.log(`${num2} is greater`);
   }


}

largesttwonumbers()




// Write a JavaScript program to find leap years from 2000 to 2022

function leapyear(){
    let year1=2000;
    let year2=2022;
    for(var year=year1; year<=year2; year++){
        if(year%4===0 || year%400===0){
            console.log(`${year} leap year`);
        }
        else{
            console.log(`${year}`);
        }
    }
}

leapyear()