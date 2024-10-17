/**
 * @param {number[]} nums
 * @return {number}
 */
var existingNumber = (arr, num) => {
  let numCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      numCount++;
    }
  }
  return numCount;
};
var removeDuplicates = function (nums) {
  let k = 0;
  let repeatedVal = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    let numCount = existingNumber(repeatedVal, nums[i]);
    if (numCount === 2) {
      k = k + 1;
      for (let j = i; j < nums.length - 1; j++) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
      nums.length = nums.length - 1;
    } else {
      repeatedVal[repeatedVal.length] = nums[i];
    }
  }
};

let nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
removeDuplicates(nums);

console.log(nums);
