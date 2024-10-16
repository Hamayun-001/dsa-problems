/**
 * @param {number[]} nums
 * @return {number}
 */
const findExistingNumber = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return arr[i];
    }
  }
};

var removeDuplicates = function (nums) {
  let repeatedArr = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    const numberExist = findExistingNumber(repeatedArr, nums[i]);
    if (numberExist !== undefined) {
      for (let j = i; j < nums.length - 1; j++) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
      nums.length = nums.length - 1;
    } else {
      repeatedArr[repeatedArr.length] = nums[i];
    }
  }
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(nums);

console.log(nums);
