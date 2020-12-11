
const handleSort = (input) => {
    
    let inputArr = input
    let len = inputArr.length;
    let val = 0;
    let process = [];
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (inputArr[j] > inputArr[j + 1]) {
          let tmp = inputArr[j];
          inputArr[j] = inputArr[j + 1];
          inputArr[j + 1] = tmp;
          val += 1;

          let sentence = `${val}. [${inputArr[j]},${
            inputArr[j+1]
          }] -> ${inputArr.join(' ')}`;
          process.push(sentence);
        }
      }
    }
    // setText(process);
    // setOutput(val);
    console.log("jawab",process);
  };

  handleSort([4,9,7,5,8,9,3])
