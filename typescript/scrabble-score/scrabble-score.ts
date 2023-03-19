type ScrabbleScore = {
  [key: string]: number
};

const letterScores: ScrabbleScore = {
  'A': 1,
  'E': 1,
  'I': 1,
  'O': 1,
  'U': 1,
  'L': 1,
  'N': 1,
  'R': 1,
  'S': 1,
  'T': 1,
  'D': 2,
  'G': 2,
  'B': 3,
  'C': 3,
  'M': 3,
  'P': 3,
  'F': 4,
  'H': 4,
  'V': 4,
  'W': 4,
  'Y': 4,
  'K': 5,
  'J': 8,
  'X': 8,
  'Q': 10,
  'Z': 10,  
};

export function score(word: string | undefined) {
  if (word == null) {
    return 0;
  }

  let sum: number = 0;
  for (let i = 0; i < word.length; i++) {
    sum += letterScores[word.charAt(i).toUpperCase()];
  }
  return sum;
}
