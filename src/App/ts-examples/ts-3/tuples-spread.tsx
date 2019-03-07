console.log('--------------------------Spread syntax');
// Spread syntax
function logScore(score1: number, score2: number, score3: number): void {
  console.log(`${score1}, ${score2}, ${score3}`);
}
const scores: [number, number, number] = [1,2,3]; // can spread fixed number of tuples
const otherScores: [...number[]] = [7,8,9];
logScore(...scores);
// wrong
// logScore(...otherScores); // can't (yet) spread "open-ended" tuples
console.log('--------------------------Empty tuples');
// Empty tuples
type Empty = [];
const empty: Empty = [];
// wrong - it needs to be an empty tuple
// const notEmpty: Empty = ['Billy'];
type ThreeOrLessScores = [] | [number] | [number, number] | [number, number, number]; // example of when empty tuple could be useful
const benScores: ThreeOrLessScores = [];
const samScores: ThreeOrLessScores = [5];
const bobScores: ThreeOrLessScores = [5,5];
const jayneScores: ThreeOrLessScores = [5,5,5];
// wrong - can only have up to three
// const sarahScores: ThreeOrLessScores = [5,5,5,5];
// a better way of writing a type for between one and three scores
type BetterThreeOrLess = [] | [number, number?, number?];
const benScores2: BetterThreeOrLess = [];
const samScores2: BetterThreeOrLess = [5];
const bobScores2: BetterThreeOrLess = [5,5];
const jayneScores2: BetterThreeOrLess = [5,5,5];
console.log('--------------------------Optional tuple elements');
// Optional tuple elements
// wrong - optional tuples elements must come after required elements
// type ThreeOrLess = [] | [number?, number?, number];
// type Scores = [number, number?, number?];
type Scores = [...number[]];
function logScores(...scores: Scores) {
  console.log(scores);
}
let stuff: Scores = [80, 23, 11];
logScores(...stuff);
export {};
