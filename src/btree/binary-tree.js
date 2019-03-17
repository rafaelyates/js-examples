'use strict';
import { TreeNode } from './tree-node';

/**
 * A simple binary search tree.
 *
 * @export
 * @class BinaryTree
 */
export class BinaryTree {

  constructor(root) {
    this.root = root;
  }

  /**
   * Sums all the node values for a given node branch in the tree.
   *
   * @param [current] The node to start the sum.
   * @returns The sum of all node values.
   */
  sum(current = this.root) {
    return this.reduce(
      (node, left, right) => node.value + left + right,
      current
    );
  }

  /**
   * Counts how many nodes are attached to the given node.
   *
   * @param [current] The node to start the counting.
   * @returns The size number.
   */
  size(current = this.root) {
    return this.reduce(
      (node, left, right) => left + right + 1,
      current
    );
  }

  /**
   * Shifts the tree placing right nodes into left position
   * and left nodes into right positions respectively.
   *
   * @param [current] The node to start inverting positions.
   * @returns The given node branch inverted.
   */
  mirror(current = this.root) {
    this.reduce(
      (node, left, right) => [node.right, node.left] = [node.left, node.right],
      current
    );

    return this;
  }

  /**
   * Gets the smallest value for a given node branch in the tree.
   *
   * @param [current] The node to begin the search.
   * @return The smallest value.
   */
  smallest(current = this.root) {
    const recursiveSmallest = (node) => !node.left
      ? node.value
      : recursiveSmallest(node.left);

    return recursiveSmallest(current);
  }

  /**
   * Gets the biggest value for a given node branch in the tree.
   *
   * @param [current] The node to begin the search.
   * @return The biggest value.
   */
  biggest(current = this.root) {
    const recursiveBiggest = (node) => !node.right
      ? node.value
      : recursiveBiggest(node.right);

    return recursiveBiggest(current);
  }

  /**
   * Adds a new value to the tree.
   *
   * @param value The value to be included.
   * @returns The tree with the value added.
   */
  add(value) {
    const addRecursive = (current) => {
      if (!current) {
        return new TreeNode(value);
      }

      if (value < current.value) {
        current.left = addRecursive(current.left);
      }

      if (value > current.value) {
        current.right = addRecursive(current.right);
      }

      return current;
    };

    this.root = addRecursive(this.root);
    return this;
  }

  /**
   * Removes a value from the tree.
   *
   * @param value The value to be removed.
   * @returns The tree with the value removed.
   */
  remove(value) {
    const removeRecursive = (current, toRemove) => {
      // Case it's null, just return.
      if (!current) {
        return;
      }

      // If the value to be removed is smaller then the value of the current node.
      if (toRemove < current.value) {
        current.left = removeRecursive(current.left, toRemove);
      }

      // If the value to be removed is bigger then the value of the current node.
      if (toRemove > current.value) {
        current.right = removeRecursive(current.right, toRemove);
      }

      // If the value has been found.
      if (toRemove === current.value) {
        // If the node has no left nor right, then is a leaf node.
        if (current.isLeaf) {
          return undefined;
        }
        // If the right position is null, we already checked both first, so just go for the left.
        if (!current.right) {
          return current.left;
        }
        // If the left position is null, we already checked both first, so just go for the right.
        if (!current.left) {
          return current.right;
        }
        // In case of the node have a left and a right leaf, place the smallest into the current.
        current.value = this.smallest(current.right);
        // Remove the smallest value in the right node, once it's value is now duplicated.
        current.right = removeRecursive(current.right, current.value);
      }

      return current;
    };

    this.root = removeRecursive(this.root, value);
    return this;
  }

  /**
   * Checks if the tree has a value.
   *
   * @param value The value to check.
   * @returns True if the value is present.
   */
  contains(value) {
    const containsRecursive = (current) => {
      if (!current) {
        return false;
      }

      if (value === current.value) {
        return true;
      }

      return value < current.value
        ? containsRecursive(current.left, value)
        : containsRecursive(current.right, value);
    };

    return containsRecursive(this.root);
  }

  /**
   * Gets the node branch values in infix order.
   *
   * @param [current] The node to start with.
   * @returns A list containing the tree nodes values in infix order.
   */
  traverseInfixOrder(current = this.root) {
    const recursiveTraverseInfixOrder = (node, list = []) => {
      if (!node) {
        return list;
      }

      recursiveTraverseInfixOrder(node.left, list);
      list.push(node.value);
      recursiveTraverseInfixOrder(node.right, list);

      return list;
    };

    return recursiveTraverseInfixOrder(current);
  }

  /**
   * Gets the node branch values in prefix order.
   *
   * @param [current] The node to start with.
   * @returns A list containing the tree nodes values in prefix order.
   */
  traversePrefixOrder(current = this.root) {
    const recursiveTraversePrefixOrder = (node, list = []) => {
      if (!node) {
        return list;
      }

      list.push(node.value);
      recursiveTraversePrefixOrder(node.left, list);
      recursiveTraversePrefixOrder(node.right, list);

      return list;
    };

    return recursiveTraversePrefixOrder(current);
  }

  /**
   * Gets the node branch values in postfix order.
   *
   * @param [current] The node to start with.
   * @returns A list containing the tree nodes values in postfix order.
   */
  traversePostfixOrder(current = this.root) {
    const recursiveTraversePostfixOrder = (node, list = []) => {
      if (!node) {
        return list;
      }

      recursiveTraversePostfixOrder(node.left, list);
      recursiveTraversePostfixOrder(node.right, list);
      list.push(node.value);

      return list;
    };

    return recursiveTraversePostfixOrder(current);
  }

  /**
   * Applies an given reduce action to a given node.
   *
   * @param reducer The reducer function.
   * @param [current] The node to start with.
   * @param [start] The initial accumulator value.
   * @returns The accumulated value.
   */
  reduce(reducer, current = this.root, start = 0) {
    const recursiveReduce = (node, accumulator) => {
      if (!node) {
        return accumulator;
      }

      const left = recursiveReduce(node.left, accumulator);
      const right = recursiveReduce(node.right, accumulator);

      return reducer(node, left, right);
    };

    return recursiveReduce(current, start);
  }

}
