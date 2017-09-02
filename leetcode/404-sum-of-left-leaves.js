/*
https://leetcode.com/problems/sum-of-left-leaves/

Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function sumOfLeftLeaves(root) {
  if (root === null) {
    return 0;
  }
  let sum = 0;
  if (root.left !== null) {
    sum +=
      root.left.left === null && root.left.right === null
        ? root.left.val
        : sumOfLeftLeaves(root.left);
  }
  if (
    root.right !== null &&
    (root.right.left !== null || root.right.right !== null)
  ) {
    sum += sumOfLeftLeaves(root.right);
  }
  return sum;
}

module.exports = sumOfLeftLeaves;
