// Code your solutions in this file
function writeCards (names, event){
    const messageArray = [];
    for (var i = 0; i < names.length; i++){
        messageArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return messageArray;
}

function countdown (num){
    while (num >= 0){
        console.log(num);
        num --;
    }
}