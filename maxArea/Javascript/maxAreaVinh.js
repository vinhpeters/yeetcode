/* Solution by Vinh
 Use 2 pointers and keep running total of the max area 

 Running time: O(n)
 Space complexitiy O(1)

Comments: 

*/

const maxArea = (height) => {
    let left = 0;
    let right = height.length - 1;
    let area = 0;
    let distance = right - left;
    let maxA = area;

    while (left < right) {
    
        distance = right - left
        area = Math.min(height[left], height[right]) * distance;

        if (area > maxA) {
            maxA = area;
        }

        if (height[left] < height[right]) left++;

        else right--;

    }

    return maxA;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(maxArea(height))