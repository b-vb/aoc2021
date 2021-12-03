export const countCommonBitsAtIndex = (binaries: string[], index: number) =>
  binaries.reduce((outcome, binary) => {
    if (binary.charAt(index) === '1') {
      return { ...outcome, ones: outcome.ones + 1 }
    }

    if (binary.charAt(index) === '0') {
      return { ...outcome, zeros: outcome.zeros + 1 }
    }

    return outcome;
  }, { ones: 0, zeros: 0 });