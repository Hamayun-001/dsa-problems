/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var mergeSortedArray = function (nums1, m, nums2, n) {
  const merge = (nums1, m, nums2, n) => {
    let x = m + n - n;
    for (let i = 0; i < n; i++) {
      nums1[x] = nums2[i];
      x = x + 1;
    }
  };

  const sort = (nums1) => {
    for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums1.length - 1; j++) {
        if (nums1[j] > nums1[j + 1]) {
          let temp = nums1[j];
          nums1[j] = nums1[j + 1];
          nums1[j + 1] = temp;
        }
      }
    }
  };

  merge(nums1, m, nums2, n);
  sort(nums1);
};

let nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
mergeSortedArray(nums1, m, nums2, n);

console.log(nums1);
