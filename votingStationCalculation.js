

function completeBinaryTree(arr) {
  const result = [];
  let i = 0;
  let j = 0;
  let size = arr.length;

  while (i < size) {
    result[j++] = arr[i++];
    if (result[j - 1] === "#" || i >= size) continue;
    result[j] = arr[i++];
    if (j * 2 + 2 > size) size = j * 2 + 2;
  }
  while (j < size) {
    result[j++] = "#";
  }
  return result;
}
  

let input = ["5", "2", "6", "1", "9", "#", "8", "#", "#", "#", "#", "4", "#"];
let output = completeBinaryTree(input);
console.log(output);
  