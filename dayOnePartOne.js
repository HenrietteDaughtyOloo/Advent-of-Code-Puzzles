const fileSystem = require('fs');
//I have put the input in a separate file. Nowto read the file, I use
const receivedInput = fileSystem.readFileSync('input.txt', 'utf8');

const elfByCalories = receivedInput.split('\n\n').map(singleElf => {
    return singleElf
      .split('\n')
      .reduce((totalCalories, currentCallories) => totalCalories + Number(currentCallories.trim()), 0);
  })
 //Now I sort through the array to arrange it in descending order  
  .sort((a, b) => b - a);

// Hence the elf with the highest calories therefore is at index 0 of the sorted array
console.log(elfByCalories[0]);

// THe second part of Day 1 Puzzle

function findTheSumOfTopThreeElves(){
       const sumOfTopThree= (elfByCalories[0] + elfByCalories[1]+ elfByCalories[2])
    console.log(sumOfTopThree);

}
// console.log(findTheSumOfTopThreeElves);
findTheSumOfTopThreeElves()

