function subtractFee(input) {
  let intervals = [0.02, 0.21, 0.32, 0.43];
  let fees = [0.02, 0.03, 0.04, 0.05, 0.07, 0.09];

  while (input > intervals[intervals.length - 1]) {
    const lastElement = intervals[intervals.length - 1];
    if (intervals.length % 2 === 0) {
      intervals.push(parseFloat((lastElement + 0.12).toFixed(2)));
    } else {
      intervals.push(parseFloat((lastElement + 0.11).toFixed(2)));
    }
  }
  while (intervals.length > fees.length) {
    const lastElement = fees[fees.length - 1];
    if (fees.length % 2 === 0) {
      fees.push(parseFloat((lastElement + 0.01).toFixed(2)));
    } else {
      fees.push(parseFloat((lastElement + 0.02).toFixed(2)));
    }
  }

  const firstGreater = intervals.find((value) => value >= input);
  const indexOfFirstGreater = intervals.indexOf(firstGreater);
  const feeSubtraction = parseFloat((input - fees[indexOfFirstGreater - 1]).toFixed(2));
  console.log("subtractFee:", "input:", input, "input - fee:", feeSubtraction);

  return feeSubtraction;
}

function sumFee(input) {
  let intervals = [0.19];
  let fees = [0.02, 0.03, 0.04, 0.06, 0.07, 0.09];

  while (input > intervals[intervals.length - 1]) {
    intervals.push(parseFloat((intervals[intervals.length - 1] + 0.1).toFixed(2)));
  }
  while (intervals.length > fees.length) {
    const lastElement = fees[fees.length - 1];
    if (fees.length % 2 === 0) {
      fees.push(parseFloat((lastElement + 0.01).toFixed(2)));
    } else {
      fees.push(parseFloat((lastElement + 0.02).toFixed(2)));
    }
  }
  const indexOfLastElement = intervals.indexOf(intervals[intervals.length - 1]);
  const feeSum = parseFloat((input + fees[indexOfLastElement]).toFixed(2));
  console.log("sumFee:", "input:", input, "input+fee:", feeSum);
  return feeSum;
}


const number = 0.31;
sumFee(number);
subtractFee(number);
