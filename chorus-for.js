// const chorus = `Lets's dance`;

// for (let repeat = 0; repeat < 10; repeat++){
//     console.log(chorus);
// }
// console.log(`Until the sun comes up!`);


const amounts = [61.00, 52.25, 112.99, 5.00]; 

let total = 0;
for(let i = 0; i < amounts.length; i++){
    total += amounts[i];
};

console.log(`Order total is: ${total}`);

total = 0
for(let amount of amounts){
    total += amount 
}

function isThisWorking(input) {
    console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  }
  
  isThisWorking(3);