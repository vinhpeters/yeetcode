def climbStairs(n):
        if n == 0 or n == 1:
            return 1
        fibCollection = [1,1]
        i = 2 
        while i <= n:
            fibCollection.append(fibCollection[i-1] + fibCollection[i-2])
            i += 1
        return fibCollection[n]

#test
print(climbStairs(2))
print(climbStairs(3))
print(climbStairs(4))