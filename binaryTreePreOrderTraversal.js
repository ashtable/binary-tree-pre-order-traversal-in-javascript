const preOrder = function (node) {
  let result = [];
  if (node) {
    result.push(node.value);
    result = result.concat(preOrder(node.left));
    result = result.concat(preOrder(node.right));
  }
  return result;
}

module.exports = preOrder;
