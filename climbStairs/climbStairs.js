// Recursive? 
// const climbstairs = (n) => {
//     //cache to hold our stairclimbing 
//     let cache = {} ;

//     let howManyWays = (n) => {
//         if (n in cache) {
//             return cache[n];
//         }

//         if (n < 4) {
//             cache[n] = n
//         }

//         cache[n] = (howManyWays(n-1) + howManyWays(n-2));
//         return cache[n]
//     }

//     return howManyWays(n);
// }

// Iterative approach
const climbStairs = (n) => {
    // initialize steps
    let steps = [1,1];
    for (let i=2; i < n+1; i++ ) {
        steps.push(steps[i-1] + steps[i-2]);
    }
    return steps[n]
}

console.log(climbStairs(3));
console.log(climbStairs(2));
console.log(climbStairs(10));
