/*
https://leetcode.com/problems/wiggle-sort

Given an unsorted array nums, reorder it in-place such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

For example, given nums = [3, 5, 2, 1, 6, 4], one possible answer is [1, 6, 2, 5, 3, 4].
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const wiggleSort = function (nums) {
  nums.sort();
  for (let i = 1; i < nums.length - 1; i = i + 2) {
    [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
  }
};

module.exports = wiggleSort;
