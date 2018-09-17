module.exports = function longestConsecutiveLength(array) {
  if (!array.length) return 0;
  
  array = array.sort((a,b) => a-b);

  let counter = 1;
  let maxCounter = 1;

  for(let i = 1; i < array.length; i++) {
    if(array[i] === array[i-1] + 1) {
      counter++; 
    } else if (array[i] === array[i-1]) {
      continue;
    } else{
      if(counter > maxCounter) maxCounter = counter;
      counter = 1;
    }
  }
  
  return maxCounter;
};