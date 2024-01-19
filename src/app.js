// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop
const arrayOfNumbers = [1,2,3,4,5,6];
const itemToSearch = 4;


  


  // Progression 2: add 3 variables: title, currIndex, check

  // Progression 3: create a function "searchForElement" 

  // Progression 4: In `createPop()`, return a function - which uses the updated values of `currIndex` and `check`
  const NEG_INF = -1000000;

  function createPop(arrayOfNumbers, itemToSearch) {
    const title = document.getElementById('h3');
    let currIndex = NEG_INF;
    let check = false;
  
    return function find() {
      arrayOfNumbers.forEach((ele, index) => {
        if (ele === itemToSearch) {
          currIndex = index;
          check = true;
        }
      });
  
      if (check) {
        return `The item is present and is at index ${currIndex}`;
      } else {
        return `The item is not present and is at index ${currIndex}`;
      }
    };
  }

  

















                    // to return the desired output.

                    