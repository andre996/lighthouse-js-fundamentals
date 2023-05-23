const numbers = [1, 2, 3, 4]

function printNumber(nums){
// Base case
  if(nums.length == 0){
    return nums[0];
  }

  
  console.log(nums.shift())
  printNumber(nums)
}

printNumber(numbers)