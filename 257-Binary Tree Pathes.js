/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (root === null)
        return [];
    else
        if ( root.left === null && root.right === null)
            return [root.val.toString()];
        else
        {
            var leftPath = root.left === null? [] :binaryTreePaths(root.left), 
                rightPath = root.right === null? []:binaryTreePaths(root.right);
            leftPath = leftPath.concat(rightPath);
            return leftPath.map(function (e)
                {
                    return root.val + '->' + e;            
                });
        }
};