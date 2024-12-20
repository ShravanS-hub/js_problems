function multiply(a,b){
    return a*b;
}

function getPLanetName(id){
    var name;
    switch(id){
        case 1: name= 'Mercury'
                break;
        case 2: name= 'Venus'
                break;
        case 3: name= 'Earth'
                break;
        case 4: name='Mars'
                break;
        case 5: name='Jupiter'
                break;
        case 6: name='Saturn'
                break;
        case 7: name='Uranus'
                break;
        case 8: name='Neptune'
                break;

    }
    return name;
}

//Reverse String
function solution(str){
    return str.split("").reverse().join("");
}

//odd/even number
function odd_or_even(number){
   
    if(number%2==0)
        return 'Even';
    else
        return 'Odd';
}

//vowels count
function getCount(str){
    let vowels=['a','e','i','o','u'];
    return str.split('').filter(letter=>{
        return vowels.includes(letter)?true:false;
    }).length;
}

//greeting
function greet(name){
    if(name=="Johnny"){
        return "Hello! My Love!";
    }
    return "Hello " + name + "!";
}

//divisible by 2 numbetrs
function isDevisible(n,x,y){
    const result1=n/x;
    const result2=n/y;
    if(result1%1===0&&result2%1===0){
        return true;

    }
    else{
        return false;
    }
}

// Negative of given number
function makeNagative(num){
    if(num<0){
        return num;
    }
    return num*-1;
}

//find smallest integer
class smallestIntegerFinder{
    findSmallestInt(arrayOfNumbers){
        let smallestNumber;
        for(let i=o;i<arrayOfNumbers;i++){
            const arrNumber=arrayOfNumbers[i];
            if(i===0){
                smallestNumber=arrNumber;
            }
            if(arrNumber<smallestNumber){
                smallestNumber=arrNumber;
            }
        }
        return smallestNumber;
    }
} 

//find summation

function summation(num){
    let sum=0;
    for(let i=0;i<=num;i++){
        sum=sum+i;
    }
    return sum;
}

//find average
function getAverage(scoreArray){
    const count=scoreArray.length;
    let sum=0;
    for(let i=0;i<count;i++){
        sum=sum+scoreArray[i];
    }
    const average=sum/count;
    const roundedDown=Math.floor(avg);
    return roundedDown;

}

//rock, paper, scissor game
const rps=(player1,player2)=>{
    if(player1==='rock'){
        if(player2=='rock'){
            return "Draw";

    }
    if(player2==='paper'){
        return 'player 2 won';
    }
    if(player2==='scissors'){
        return 'player 1 won';
    }

    
}
if(player1==='paper'){
    if(player2==rock){
        return "player 1 won";

}
if(player2==='paper'){
    return 'Drawn';
}
if(player2==='scissors'){
    return 'player 2 won';
}

}

if(player1==='scessor'){
    if(player2==rock){
        return "player 2 won";

}
if(player2==='paper'){
    return 'player 1 won';
}
if(player2==='scissors'){
    return 'Drawn';
}

}
};

//Remove character
function removeChar(str){
    const lengthOfString=str.length;
    return str.substr(1,lengthOfString-2);

};

//sum of positive numbers
function sumOfPositive(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            sum=sum+arr[i];
        }
    }
    return sum;
}

//mathematical operation
function basicop(operation,value1,value2){
    let result;
    switch(operation){
        case '+' : result=value1+value2;
                    break;
        case '-' : result=value1-value2;
                    break;
        case '*' : result=value1*value2;
                    break;
        case '/' : result=value1/value2;
                    break;
    }
    return result;
}

//repeat string
function repeatStr(numberOfRepeats,str){
   let starterString='';
   for(let i=0;i<numberOfRepeats;i++){
    starterString=starterString+' '+str;
}   
        return starterString;
    
}

//split string and convert it into array
function stringToArray(string){
    return string.split(" ");

}

//remove hte space from the string
function noSpace(str){
    const arr=str.split(" ");
    const newArray=[];
    for(let i=0;i<arr.length;i++){
        const trimmedString=arr[i].trim();
        newArray.push(trimmedString);
    }
    const finalString=newArray.join("");
    return finalString;
}

//return new array with value doubled
function maps(arr){
    const result=arr.map((arrItem)=>{
        return arrItem*2
    });
    return result;
}

//Dragon
function hero(bullets,dragons){
    return bullets/dragons>=2;
}

//sum of two arrays
function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        const arr1Value = arr1[i]; 
        const arr2Value = arr2[i]; 

        const addedValue = arr1Value + arr2Value; 
        sum = sum + addedValue; 
    }

    return sum; 
}

//century year
function century(year){
    return Math.ceil(year/100);
}

//cat/dog
var humanYearsCatYearsDogYears = function(humanYears) {
    let catsAge;
    let dogsAge;

    if (humanYears === 1) {
        return [humanYears, 15, 15];
    }

    if (humanYears === 2) {
        return [humanYears, 24, 24];
    }

    const excessYears = humanYears - 2;
    const extraCatYears = excessYears * 4; 
    const extraDogYears = excessYears * 5; 

    return [humanYears, 24 + extraCatYears, 24 + extraDogYears];
};

//football match
function points(gamesArray) {
    let totalPoints = 0;

    for (let i = 0; i < gamesArray.length; i++) {
        const value = gamesArray[i];
        const parts = value.split(":");
        const x = parseInt(parts[0], 10); 
        const y = parseInt(parts[1], 10); 

        
        if (x > y) {
            totalPoints = totalPoints + 3; 
        } else if (x === y) {
            totalPoints += 1; 
        }
    }

    return totalPoints; 
}


