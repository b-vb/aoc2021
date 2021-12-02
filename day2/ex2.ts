import data from './data.json';

const { horizontal, depth } = data.reduce((result, step) => {
  if (step.forward) {
    return {
      ...result,
      horizontal: result.horizontal + step.forward,
      depth: result.aim > 0 ? result.depth += (step.forward * result.aim) : result.depth,
    };
  }
  if (step.down) {
    return {
      ...result,
      aim: result.aim + step.down,
    }
  }
  if (step.up) {
    return {
      ...result,
      aim: result.aim - step.up,
    }
  }
  console.log('empty')
  return result;
}, { horizontal: 0, depth: 0, aim: 0 });

console.log('answer:', horizontal * depth);

