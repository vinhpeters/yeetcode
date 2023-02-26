'''
Iterate through list and use list.count() to return element when count == 1

'''


def singleNumber(nums):

    for num in nums:
        if nums.count(num) == 1:
            return num
    return None


nums = [2, 2, 1]
print(singleNumber(nums))

nums = [4, 1, 2, 1, 2]
print(singleNumber(nums))

nums = [1]
print(singleNumber(nums))
