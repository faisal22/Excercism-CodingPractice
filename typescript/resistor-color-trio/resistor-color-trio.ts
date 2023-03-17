const colorBandEncoding: Map<string, number> = new Map([
  ['black', 0],
  ['brown', 1],
  ['red', 2],
  ['orange', 3],
  ['yellow', 4],
  ['green', 5],
  ['blue', 6],
  ['violet', 7],
  ['grey', 8],
  ['white', 9],
]);

export function decodedResistorValue(resistorColorBands: string[]): string {
  if (!resistorColorBands || resistorColorBands.length === 0) {
    return '0 ohms';
  }

  const firstBand: number | undefined = colorBandEncoding.get(resistorColorBands[0]);
  const secondBand: number| undefined = colorBandEncoding.get(resistorColorBands[1]);
  const thirdBand: number | undefined = colorBandEncoding.get(resistorColorBands[2]);

  if (firstBand == null || secondBand == null || thirdBand == null) {
    return '0 ohms';
  }

  return getOhmWithMetricPrefix(firstBand, secondBand, thirdBand);

}

function getOhmWithMetricPrefix(firstBandEncoding: number, secondBandEncoding: number, thirdBandEncoding: number): string {
  let numZeros = thirdBandEncoding;
  if (secondBandEncoding === 0) {
    numZeros += 1;
  }

  let prefix: string = '';
  if (numZeros >= 12) {
    prefix = 'tera';
    numZeros -= 12;
  } else if (numZeros >= 9) {
    prefix = 'giga';
    numZeros -= 9;
  } else if (numZeros >= 6) {
    prefix = 'mega';
    numZeros -= 6;
  } else if (numZeros >= 3) {
    prefix = 'kilo';
    numZeros -= 3;
  }
  let thirdBandZeros = '';
  for (let i = 0; i < numZeros  ; i++) {
    thirdBandZeros += '0';
  }

  let ohmEncoding = '';
  if (secondBandEncoding === 0) {
    ohmEncoding = `${firstBandEncoding}${thirdBandZeros} ${prefix}ohms`;
  } else {
    ohmEncoding = `${firstBandEncoding}${secondBandEncoding}${thirdBandZeros} ${prefix}ohms`;
  }

  if (firstBandEncoding === 0) {
    ohmEncoding = ohmEncoding.substring(1);
  }
  return ohmEncoding;
}


// 1,000,000,000,000 -> 1 teraohm
// 1,000,000 -> 1 gigaohm
// 1000 -> 1 kiloohm
