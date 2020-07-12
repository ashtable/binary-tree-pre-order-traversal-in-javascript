const TreeNode = require('./treeNode');
const preOrder = require('./binaryTreePreOrderTraversal');

test('null root TreeNode returns a result of empty array', () => {
  expect(preOrder(null)).toStrictEqual([]);
});

test('complete tree returns pre-order traversal', () => {
  // Arrange
  const p = new TreeNode('P');
  const y = new TreeNode('Y');
  const t = new TreeNode('T');
  const h = new TreeNode('H');
  const o = new TreeNode('O');
  const n = new TreeNode('N');

  const rootNode = p;
  p.left = y;
  y.left = t;
  y.right = h;
  p.right = o;
  o.left = n;

  // Act & Assert
  expect(preOrder(rootNode)).toStrictEqual(['P', 'Y', 'T', 'H', 'O', 'N']);
});

test('left-only tree returns pre-order traversal', () => {
  // Arrange
  const p = new TreeNode('P');
  const y = new TreeNode('Y');
  const t = new TreeNode('T');
  const h = new TreeNode('H');
  const o = new TreeNode('O');
  const n = new TreeNode('N');

  const rootNode = p;
  p.left = y;
  y.left = t;
  t.left = h;
  h.left = o;
  o.left = n;

  // Act & Assert
  expect(preOrder(rootNode)).toStrictEqual(['P', 'Y', 'T', 'H', 'O', 'N']);
});

test('right-only tree returns pre-order traversal', () => {
  // Arrange
  const p = new TreeNode('P');
  const y = new TreeNode('Y');
  const t = new TreeNode('T');
  const h = new TreeNode('H');
  const o = new TreeNode('O');
  const n = new TreeNode('N');

  const rootNode = p;
  p.right = y;
  y.right = t;
  t.right = h;
  h.right = o;
  o.right = n;

  // Act & Assert
  expect(preOrder(rootNode)).toStrictEqual(['P', 'Y', 'T', 'H', 'O', 'N']);
});
