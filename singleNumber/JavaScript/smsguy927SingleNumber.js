function findSingleNumber(nums) {

    const intTotals = []
    const intTotalsSize = 60001
    const intTotalsOffset = 30000
    for (let i = 0; i < intTotalsSize; i++) {
        intTotals.push(0)
    }

    for(let num of nums) {
        intTotals[num + intTotalsOffset]++
    }
    return intTotals.findIndex(x => x === 1) - intTotalsOffset
}
// test cases
const arr0 = [4,1,2,1,2]
const arr1 = [2,1,2,1,0,0,7]
const arr2 = [4,1,2,1,2,3,4,3,4,6,7,7,6,8,9,9,8,4,-312,312,0,11,0,11,-312]
const arr3 = [-312]
const arr4 = [5,5,0,1,2,1,2]
const arr5 = [-312,-311,-310,1,2,1,2,-312,-311,-310,312,311,310,312,311,310,300]
const arr6 = [8,6,7,5,3,0,9,8,6,7,5,3,0]
const arr7 = [2,1,2]
const arr8 = [-8,-6,-7,-5,-3,-0,-9,-8,-6,-7,-5,-3,0]
console.log(findSingleNumber(arr0))
console.log(findSingleNumber(arr1))
console.log(findSingleNumber(arr2))
console.log(findSingleNumber(arr3))
console.log(findSingleNumber(arr4))
console.log(findSingleNumber(arr5))
console.log(findSingleNumber(arr6))
console.log(findSingleNumber(arr7))
console.log(findSingleNumber(arr8))
