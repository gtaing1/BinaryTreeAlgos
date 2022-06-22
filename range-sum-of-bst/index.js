/*
Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].
Example 1: 
Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

Example 2: 
Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
Output: 23
Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.

*/

const rangeSumBST = (root, low, high) => {
  let stack = root ? [root] : []
  let sum = 0

  while (stack.length) {
    let node = stack.pop()
    if (node.value >= low && node.value <= high) {
      sum += node.value
    }

    if (node.right) {
      stack.push(node.right)
    }

    if (node.left) {
      stack.push(node.left)
    }
  }
  return sum
}

module.exports = rangeSumBST
