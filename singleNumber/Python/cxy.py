def singleNumber(nums):
  repeatDict = {}
  for num in nums:
    if num not in repeatDict:
      repeatDict[num] = 1
    else:
      repeatDict[num] = 2
  key = list(repeatDict.keys())
  value = list(repeatDict.values())
  position = value.index(1)
  return key[position]

#test
nums0 = [2,2,1]
nums1 = [4,1,2,1,2]
nums2 = [1]
test0 = singleNumber(nums0)
test1 = singleNumber(nums1)
test2 = singleNumber(nums2)
print(test0)
print(test1)
print(test2)