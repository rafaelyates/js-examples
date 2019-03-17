'use strict';
import { BinaryTree } from './binary-tree';

describe('Binary Tree', () => {

  const binaryTree = new BinaryTree();

  beforeEach(() => {
    binaryTree
      .add(6)
      .add(4)
      .add(8)
      .add(3)
      .add(5)
      .add(7)
      .add(9);
  });

  afterEach(() => {
    binaryTree.root = undefined;
  });

  it('should sum all node values', () => {
    expect(binaryTree.sum()).toBe(42);
  });

  it('should count the tree nodes', () => {
    expect(binaryTree.size()).toBe(7);
  });

  it('should find the biggest value in the tree', () => {
    expect(binaryTree.biggest()).toBe(9);
  });

  it('should find the smallest value in the tree', () => {
    expect(binaryTree.smallest()).toBe(3);
  });

  it('should find a node by its value', () => {
    expect(binaryTree.contains(6)).toBe(true);
  });

  it('should add a new node', () => {
    expect(binaryTree.size()).toBe(7);
    expect(binaryTree.contains(1)).toBe(false);

    binaryTree.add(1);

    expect(binaryTree.size()).toBe(8);
    expect(binaryTree.contains(1)).toBe(true);
  });

  it('should remove a node', () => {
    expect(binaryTree.size()).toBe(7);
    expect(binaryTree.contains(9)).toBe(true);

    binaryTree.remove(6);

    expect(binaryTree.size()).toBe(6);
    expect(binaryTree.contains(6)).toBe(false);
  });

  it('should list the tree in infix order', () => {
    expect(binaryTree.traverseInfixOrder()).toEqual([3, 4, 5, 6, 7, 8, 9]);
  });

  it('should list the mirrored tree in infix order', () => {
    expect(binaryTree.mirror().traverseInfixOrder()).toEqual([9, 8, 7, 6, 5, 4, 3]);
  });

  it('should list the tree in prefix order', () => {
    expect(binaryTree.traversePrefixOrder()).toEqual([6, 4, 3, 5, 8, 7, 9]);
  });

  it('should list the mirrored tree in prefix order', () => {
    expect(binaryTree.mirror().traversePrefixOrder()).toEqual([6, 8, 9, 7, 4, 5, 3]);
  });

  it('should list the tree in postfix order', () => {
    expect(binaryTree.traversePostfixOrder()).toEqual([3, 5, 4, 7, 9, 8, 6]);
  });

  it('should list the mirrored tree in postfix order', () => {
    expect(binaryTree.mirror().traversePostfixOrder()).toEqual([9, 7, 8, 5, 3, 4, 6]);
  });

});
