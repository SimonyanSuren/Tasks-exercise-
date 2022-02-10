//// 4.11 --------------
//let arr = [1, 23, 43, 56, 78, 88, 11, 2, 34, 3];
//let bubbleSort = (inputArr) => {
//  let len = inputArr.length;
//  let count = 0;
//  for (let i = 0; i < len; i++) {
//    for (let j = 0; j < len - count; j++) {
//      if (inputArr[j] > inputArr[j + 1]) {
//        let tmp = inputArr[j];
//        inputArr[j] = inputArr[len - 1 - count];
//        inputArr[len - 1 - count] = tmp;
//        count++;
//        console.log(count);
//      }
//    }
//  }
//  return inputArr;
//};
//console.log(bubbleSort(arr));

// 4.31 --------------
//let arr = [1, 23, 43, 56, 78, 88, 11, 2, 34, 3];
//let i = 0;
//function seletionSort(arr) {
//  console.log(i);
//  if (arr.length === 1) {
//    return arr;
//  }
//  for (i = 0; i < arr.length; i++) {
//    if (arr[i] > arr[i + 1]) {
//      let tmp = arr[i + 1];
//      arr[i + 1] = arr[i];
//      arr[i] = tmp;
//    }
//  }
//  i++;
//  return seletionSort(arr);
//}
//console.log(seletionSort(arr));
