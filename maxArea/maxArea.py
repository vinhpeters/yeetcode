# Use 2 pointers and keep running total of the max area

def maxArea(height):
    left = 0
    right = len(height)-1
    area = 0
    distance = right - left
    maxA = area

    while left < right:

        distance = right - left

        minHeight = min((height[left], height[right]))

        area = minHeight * distance

        if area > maxA:
            maxA = area

        if height[left] < height[right]:
            left += 1
        else:
            right -= 1

    return maxA


height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
print(maxArea(height))
