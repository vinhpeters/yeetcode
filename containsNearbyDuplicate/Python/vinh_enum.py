'''
Use dict to map index and value where key is value and value is index
When duplicate is found. check if i-j <=k

Time complexity: O(n)
Space Complexity: O(1)

'''


def containsNearbyDuplicate(nums, k):
    dict = {}
    for i, j in enumerate(nums):
        if j in dict and i - dict[j] <= k:
            return True
        dict[j] = i
    return False


nums = [1, 2, 3, 1]
k = 3
print(containsNearbyDuplicate(nums, k))
# True

nums = [1,0,1,1]
k = 1
print(containsNearbyDuplicate(nums, k))
# True

nums = [1,2,3,1,2,3]
k = 2
print(containsNearbyDuplicate(nums, k))
# False
