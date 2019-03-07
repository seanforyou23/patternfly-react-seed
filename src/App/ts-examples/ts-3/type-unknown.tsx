console.log('--------------------------unknown Type');
// unknown Type - often should replace "any"
// any isn't type checked, unknown is
// don't do this
function logScores(scores: any) {
  console.log(scores.firstName);
  console.log(scores.scores);
}
logScores({
  name: 'Billy',
  scores: [60, 70, 75]
});
// instead do this use unknown, but this has an error so need to provide some level of type checking
// function logScoresBetter(scores: unknown) {
//   console.log(scores.firstName);
//   console.log(scores.scores);
// }
function logScoresBetter(scores: unknown) {
  if (scoresCheck(scores)) { // aka type guard
    // console.log(scores.firstName);
    console.log(scores.scores);
  }
}
type Score = {name: string; scores: number};
// first solution - use a func that returns a type predicate
const scoresCheck = (scores: any): scores is Score => {
  return ('name' in scores) && ('scores' in scores);
}


// second solution - type narrowing with a type assertion
type Scores = {
  name: string;
  scores: number[];
}
function logScoresEx2(scores: any) {
  // now this properly causes an error
  // console.log((scores as Scores).firstName);
  console.log((scores as Scores).scores);
}
