import AllBinaries from './data.json';
import { countCommonBitsAtIndex } from "./common";

let oxygenBinaries = AllBinaries;
let co2Binaries = AllBinaries;

// Oxygen generator rating
for (let i = 0; i < oxygenBinaries[0].length; i++) {
  const { ones, zeros } = countCommonBitsAtIndex(oxygenBinaries, i);

  if (ones > zeros) {
    oxygenBinaries = oxygenBinaries.filter(binary => binary.charAt(i) === '1');
  } else if (ones === zeros) {
    oxygenBinaries = oxygenBinaries.filter(binary => binary.charAt(i) === '1');
  } else {
    oxygenBinaries = oxygenBinaries.filter(binary => binary.charAt(i) === '0');
  }
}

// CO2 scrubber rating
for (let i = 0; i < co2Binaries[0].length; i++) {
  if(co2Binaries.length === 1) {
    break;
  }
  const { ones, zeros } = countCommonBitsAtIndex(co2Binaries, i);

  if (zeros < ones) {
    co2Binaries = co2Binaries.filter(binary => binary.charAt(i) === '0');
  } else if (ones === zeros) {
    co2Binaries = co2Binaries.filter(binary => binary.charAt(i) === '0');
  } else {
    co2Binaries = co2Binaries.filter(binary => binary.charAt(i) === '1');
  }
}

const o2 = parseInt(oxygenBinaries[0], 2);
const co2 = parseInt(co2Binaries[0], 2);

const lifeSupportRating = o2 * co2;
console.log('Answer:', lifeSupportRating);