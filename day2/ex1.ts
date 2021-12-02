import data from './data.json';

const { depth, horizontal} = data.reduce((result, step) => {
  if(step.forward) {
    return {
      ...result,
      horizontal: result.horizontal + step.forward
    }
  }
  if(step.up) {
    return {
      ...result,
      depth: result.depth - step.up
    }
  }
  if(step.down) {
    return {
      ...result,
      depth: result.depth + step.down
    }
  }
  return result;
}, { horizontal: 0, depth: 0 });

console.log('answer:', depth * horizontal);