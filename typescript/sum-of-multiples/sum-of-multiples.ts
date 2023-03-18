export function sum(nums: number[], max: number) {
  // let values: Set<number> = new Set<number>();

  // nums.forEach((num) => {
  //   for (let i = Number(num); i < max; i++) {
  //     values.add(Number(num));
  //   }
  // });

  let sum = 0;
  for (let i = 1; i < max; i++) {
    let isMultiple: boolean = false;
    nums.forEach((num) => {
      if (i % Number(num) === 0) {
        isMultiple = true;
      }
    });
    if (isMultiple) {
      sum += i;
    }
  }
  return sum;
}