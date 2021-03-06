var invertTree = function(root) {
    if(!root)return root;
    var right=root.right;
    root.right=invertTree(root.left);
    root.left=invertTree(right);
    return root;};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 @param {TreeNode} root
 @return {TreeNode}
 */

 /*

Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1


 */