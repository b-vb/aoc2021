import data from './data.json';

const Data: number[] = data;

const answer = Data.reduce((sum, current, index) => {
  if (index > 0 && current > Data[index - 1]) {
    return sum + 1;
  }
  return sum;
}, 0);

console.log('answer:', answer);