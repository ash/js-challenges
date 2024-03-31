// Solution of Task 1 of The Weekly Challenge 21
// https://theweeklychallenge.org/blog/perl-weekly-challenge-021/

// Test runs:

// $ node ch-1.js 
// 2.7182818284590455

// $ node ch-1.js 20
// 2.7182818284590455

let max = 100;

if (process.argv.length > 2) {
    max = process.argv[2];
}

let e = 1;
let f = 1;

for (let n = 1; n != max; n++) {
    f *= n;
    e += 1 / f;
}
console.log(e);
