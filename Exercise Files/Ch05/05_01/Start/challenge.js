const electionVotes = [
    'Harry', 'Rick', 'Ben', 'Ben', 'Harry', 'Ashley',
    'Connor', 'Rick', 'Ashley', 'Rick', 'Albert', 'Ben',
    'Michael', 'Rick', 'Albert', 'Karen', 'Harry',
    'Karen', 'Donna', 'Ashley', 'Albert', 'Harry',
    'Dane', 'Dane', 'Rick', 'Donna', 'Mortimer',
];

const tallyVotes = votes => votes.reduce((acc, element) => ({
    ...acc,
    [element]: acc[element] ? acc[element] + 1 : 1
    }), {})
;

// 1st try
// const tallyVotes = votes => votes.reduce((acc, element) => {
//   let temp = acc
//   if (element in temp) {
//     temp[element]++
//   } else {
//     temp[element] = 1
//   }
//   return temp

//   }, {})
// ;

console.log(tallyVotes(electionVotes));

/* Expected Output (something like this):
    {
        Harry: <some number>
        Donna: <some number>
        Rick: <some number>
        ...
    }
*/