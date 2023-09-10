// task 1
// data 1
var marks = {
  weights: 78,
  heights: 1.69,
};
var john = {
  weights: 92,
  heights: 1.95,
};
function calBMIs(weights, heights) {
  return (BMI = weights / (heights * heights));
}

console.log(
  (markHigherBMI =
    calBMIs(marks.heights, marks.weights) > calBMIs(john.heights, john.weights)
      ? true
      : false)
); // result : true

// data 2
const marks1 = {
  weights: 95,
  heights: 1.88,
};
const john1 = {
  weights: 85,
  heights: 1.76,
};
function calBMIs(weights, heights) {
  return (BMI = weights / (heights * heights));
}

console.log(
  (markHigherBMI =
    calBMIs(marks1.heights, marks1.weights) <
    calBMIs(john1.heights, john1.weights)
      ? true
      : false)
); // result : true

// task 2
const MarksBMI = calBMIs(95, 1.88);
const JohnBMI = calBMIs(85, 1.76);
if (MarksBMI > JohnBMI) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log(
    "John's BMI " +
      " " +
      "(" +
      JohnBMI +
      ")" +
      " is higher than Mark's " +
      " " +
      "(" +
      MarksBMI +
      ")"
  );
}

// task 3

const dolphins = [96, 108, 89];
const koalas = [88, 91, 110];

function avg(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}
function compare() {
  if (avg(dolphins) > avg(koalas) && avg(dolphins) >= 100) {
    console.log(" Dolphins win the competition!");
  } else if (avg(dolphins) < avg(koalas) && avg(koalas) >= 100) {
    console.log(" Koalas win the competition!");
  } else if (
    avg(dolphins) === avg(koalas) &&
    avg(dolphins) >= 100 &&
    avg(koalas) >= 100
  ) {
    console.log("It's a draw!");
  } else {
    console.log("No one wins the competition.");
  }
}
compare();
// task 4
const bill = 275;
const tips = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const total = bill + tips;
console.log(
  `The bill was ${bill}, the tips was ${tips} and the total value ${total}`
);
// task 5
const dolphins1 = [44, 23, 71];
const koalas1 = [65, 54, 49];
// use function avg() task 3
function checkWinner() {
  if (avg(dolphins1) > avg(koalas1) && 2 * avg(koalas1) < avg(dolphins1)) {
    console.log(`Dolphins win ${avg(dolphins1)} , Koalas ${avg(koalas1)}`);
  } else if (avg(dolphins) < avg(koalas) && 2 * avg(dolphins1) < avg(koalas1)) {
    console.log(`Koalas win ${avg(koalas1)} ,Dolphins ${avg(dolphins1)}`);
  } else {
    console.log("No one wins the competition.");
  }
}
checkWinner();

// task 6
const bills = [125, 555, 44];
const bill1 = 275;
const calcTip = (bill1) =>
  bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;
const tips1 = bills.map(calcTip);

const total1 = bills.map((bill1, ind) => bill1 + tips1[ind]);

console.log(
  `The bill was ${bills}, the tips was ${tips1} and the total value ${total1}`
);

// task 7
