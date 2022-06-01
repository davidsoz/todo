import AppContainer from "./components/AppContainer";

function App() {
  // let helperArr = [];
  // let matrix = [];
  // let l = 5;

  // for (let i = 1; i < 21; i++) {
  //   helperArr.push(i);
  //   if (helperArr.length === l) {
  //     matrix.push(helperArr);
  //     helperArr = [];
  //   }
  // }

  // function generateArray(n, size) {

  //   let matrix = [];
  //   let index = 0;
    
  //   for(let i = 1; i <= n; i++) {
  //     if(!matrix[index]) {
  //       matrix[index] = [];
  //     }
  //     matrix[index].push(i);

  //     if(i % size === 0) {
  //       index++;
  //     }
  //   }
    
  //   return matrix;
  // }
  
  // console.log(generateArray(20, 10)); 

//   function reverseArr(arr) {
//     let reversedArr = [];
//     for(let i = arr.length - 1; i >= 0 ; i--) {
//       reversedArr.push(arr[i]);
//     }
//     return reversedArr;
//   }

//  console.log(reverseArr([2,3,4])); 


 

  return <AppContainer />;
}

export default App;
