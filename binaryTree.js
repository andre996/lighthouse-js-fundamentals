const tree = ['D', 'A', 'F', 'E', 'B', 'R', 'T', 'G', 'Q', '#', '#', 'V', '#', 'J', 'L']
const treeCompleted = ["5", "2", "6", "1", "9", "#", "8", "#", "#", "#", "#", "#", "#", "4", "#"]
const treeNotCompleted = ["5", "2", "6", "1", "9", "#", "8", "#", "#", "#", "#", "4", "#"]


const preOrder = (arrayTree, index, preOrderTraversal, treeSize) => {

    let leftChildIndex = (2*index)+1;
    let rightChildIndex = (2*index)+2;

    let isValidLeftChild = (leftChildIndex <= treeSize && arrayTree[leftChildIndex] != '#');
    let isValidRightChild = (rightChildIndex <= treeSize && arrayTree[rightChildIndex] != '#');


    if(arrayTree[index] != "#"){
        preOrderTraversal.push(arrayTree[index])
    }

    if(isValidLeftChild){
        preOrder(arrayTree, leftChildIndex, preOrderTraversal, treeSize);
    };

    if(isValidRightChild){
        preOrder(arrayTree, rightChildIndex, preOrderTraversal, treeSize);
    };
    
    console.log(arrayTree)
    return preOrderTraversal;
}



const preOrderTraversalTree = (arrayTree) => {
    let treeSize = arrayTree.length;
    arrayTree = completeBinaryTree(arrayTree)
    return preOrder(arrayTree, 0, [], treeSize-1);
}


  
//console.log(preOrderTraversalTree(treeNotCompleted));