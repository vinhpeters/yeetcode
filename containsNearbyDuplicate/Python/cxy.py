def containsNearbyDuplicate(nums,k):
  numberDic={}
  for idx in range(len(nums)):
    if nums[idx] not in numberDic:
      numberDic[nums[idx]] = idx  
    elif abs(idx - numberDic[nums[idx]]) <= k:
      return True
    else:
      numberDic[nums[idx]] = idx
  return False

#test
test0 = containsNearbyDuplicate([1,2,3,1],3)
test1 = containsNearbyDuplicate([1,0,1,1],1)
test2 = containsNearbyDuplicate([1,2,3,1,2,3],2)
print(test0)
print(test1)
print(test2)