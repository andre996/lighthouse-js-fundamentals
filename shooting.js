// const vegetables = [
//     {
//       submitter: 'Old Man Franklin',
//       redness: 10,
//       plumpness: 5
//     },
//     {
//       submitter: 'Sally Tomato-Grower',
//       redness: 2,
//       plumpness: 8
//     },
//     {
//       submitter: 'Hamid Hamidson',
//       redness: 4,
//       plumpness: 3
//     }
//   ]
  
// const metric = 'plumpness'
  
// console.log(judgeVegetable(vegetables, metric))

// function judgeVegetable(vegetables, metric) {
//     let highest = 0
//     for(let i = 1; i < vegetables.length; i++){
//       if(vegetables[i][metric] > vegetables[highest][metric]){
//         highest = i
//       }
//       return vegetables[highest].submitter
//     }
//   }  
function range(start, end, step) {
    const array = []
    for(let i = start; i <= end; i += step) {
        array.push(i)
    }
    return array
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

