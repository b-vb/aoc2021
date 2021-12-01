import data from './data.json';

const Data: number[] = data;

const threeMeasurementWindows = Data.reduce((windows, current, index) => {
  if (index < (Data.length - 2)) {
    const window = current + Data[index + 1] + Data[index + 2];
    return [...windows, window];
  }
  return windows;
}, [] as number[]);

const answer = threeMeasurementWindows.reduce((sum, current, index) => {
  if (index > 0 && current > threeMeasurementWindows[index - 1]) {
    return sum + 1;
  }
  return sum;
}, 0);

console.log('answer:', answer);