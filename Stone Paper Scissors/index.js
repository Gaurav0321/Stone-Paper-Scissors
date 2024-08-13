function ChoicersWin(userChoice){
let yourChoice = userChoice;
let randomNumber = Math.random()*3;
let result;
let cpuChoice;
if(randomNumber >=0 && randomNumber<1){
    cpuChoice='Stone'
}else if(randomNumber >=1 && randomNumber<2){
    cpuChoice='Paper'
}else if(randomNumber >=2 && randomNumber<=3){
    cpuChoice='Scissors'
}else{
    alert('Bot Detected!')
}
if(cpuChoice === 'Paper' && yourChoice === 'Paper'){
    result=`Computer choice is ${cpuChoice} and you are choice is ${yourChoice} TiE!!`
    alert(result)
}else if(cpuChoice === 'Paper' && yourChoice === 'Stone'){
    result=`Computer choice is ${cpuChoice} and you are choice is ${yourChoice} Oops! you lose`
    alert(result)
}else if(cpuChoice === 'Paper' && yourChoice === 'Scissors'){
    result=`Computer choice is ${cpuChoice} and you are choice is ${yourChoice} Hurray! you WIN`
    alert(result)
}else if(cpuChoice === 'Stone' && yourChoice === 'Paper'){
     result=`Computer choice is ${cpuChoice} and you are choice is ${yourChoice} Hurray! you WIN`
    alert(result)
}else if(cpuChoice === 'Stone' && yourChoice === 'Stone'){
    result=`Computer choice is ${cpuChoice} and you are choice is ${yourChoice} TiE!!`
    alert(result)
}else if(cpuChoice === 'Stone' && yourChoice === 'Scissors'){
    result=`Computer choice is ${cpuChoice} and you are choice is ${yourChoice} Oops! you lose`
    alert(result)
}else if(cpuChoice === 'Scissors' && yourChoice === 'Paper'){
    result=`Computer choice is ${cpuChoice} and you are choice is ${yourChoice} Oops! you lose`
    alert(result)
}else if(cpuChoice === 'Scissors' && yourChoice === 'Stone'){
     result=`Computer choice is ${cpuChoice} and you are choice is ${yourChoice} Hurray! you WIN`
    alert(result)
}else if(cpuChoice === 'Scissors' && yourChoice === 'Scissors'){
    result=`Computer choice is ${cpuChoice} and you are choice is ${yourChoice} TiE!!`
    alert(result)
}else{
    alert('Mindblowing Code!!!')
}
}
