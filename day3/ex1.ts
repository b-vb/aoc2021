import { countCommonBitsAtIndex } from './common';
import AllBinaries from './data.json';

const binaryLength = AllBinaries[0].length;
const gammaRateArray = Array
  .from({ length: binaryLength })
  .reduce((acc: string[], _, index) => {
    const { ones, zeros } = countCommonBitsAtIndex(AllBinaries, index);
    const bit = ones > zeros ? '1' : '0';
    return [...acc, bit];
  }, [] as string[]);

const epsilonRate = gammaRateArray.map(bit => bit === '1' ? '0' : '1').join('');
const gammaRate = gammaRateArray.join('');
const epsilonRateDecimal = parseInt(epsilonRate, 2);
const gammaRateDecimal = parseInt(gammaRate, 2);

console.log('Answer:', gammaRateDecimal * epsilonRateDecimal);