const { ListNode, sortedListToBST } = require('./109-convert-sorted-list-to-binary-search-tree');

describe('Convert sorted list to binary search tree', () => {

  it('returns correct result when list has one node', () => {
    const list = new ListNode(1);
    const tree = sortedListToBST(list);
    expect(tree.val).toBe(1);
    expect(tree.left).toBeNull();
    expect(tree.right).toBeNull();
  });

  it('returns correct result when list has two nodes', () => {
    const list = new ListNode(1);
    list.next = new ListNode(2);
    const tree = sortedListToBST(list);
    expect(tree.val).toBe(2);
    expect(tree.left.val).toBe(1);
    expect(tree.right).toBeNull();
  });

  it('returns correct result when list has more than 2 nodes', () => {
    const list = new ListNode(1);
    list.next = new ListNode(2);
    list.next.next = new ListNode(3);
    list.next.next.next = new ListNode(4);
    list.next.next.next.next = new ListNode(5);
    const tree = sortedListToBST(list);
    expect(tree.val).toBe(3);
    expect(tree.left.val).toBe(2);
    expect(tree.left.left.val).toBe(1);
    expect(tree.right.val).toBe(5);
    expect(tree.right.left.val).toBe(4);
  });

});