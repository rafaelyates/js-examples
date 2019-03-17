'use strict';
import { TreeNode } from './tree-node';

describe('Tree Node', () => {

  const treeNode = new TreeNode();

  afterEach(() => {
    treeNode.value = undefined;
  });

  it('should be empty when there is no value into the node', () => {
    expect(treeNode.isEmpty).toBe(true);
  });

  it('should not be empty when there is a value', () => {
    treeNode.value = 9;
    expect(treeNode.isEmpty).toBe(false);
  });

  it('should be a leaf by default', () => {
    expect(treeNode.isLeaf).toBe(true);
  });

  it('should not be a leaf when there is a left value', () => {
    treeNode.left = new TreeNode(9);
    expect(treeNode.isLeaf).toBe(false);
  });

  it('should not be a leaf when there is a right value', () => {
    treeNode.right = new TreeNode(9);
    expect(treeNode.isLeaf).toBe(false);
  });
});
