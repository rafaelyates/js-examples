'use strict';

export class TreeNode {

  constructor(value) {
    this.value = value;
    this.right = undefined;
    this.left = undefined;
  }

  /**
   * If this node is empty.
   */
  get isEmpty() {
    return !this.value;
  }

  /**
   * If there's no other node connected afterwards.
   */
  get isLeaf() {
    return !this.left && !this.right;
  }

}
