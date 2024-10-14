/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      if (i === nums.length) {
        nums.length = nums.length - 1;
      } else {
        for (let j = i; j < nums.length - 1; j++) {
          let temp = nums[j];
          nums[j] = nums[j + 1];
          nums[j + 1] = temp;
        }
        nums.length = nums.length - 1;
      }
    }
  }
};

let nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;
removeElement(nums, val);

console.log(nums);
