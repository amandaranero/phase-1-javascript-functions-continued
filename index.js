// code your solution here
function saturdayFun (activity ='roller-skate'){
   return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(thing = "go to the office"){
    return `This Monday, I will ${thing}.`;
}

function wrapAdjective(flair = "!"){
    return function (name = "special"){
        return `You are ${flair}${name}${flair}!`;
    }

}