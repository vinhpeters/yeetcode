'''
Use two pointers to find max difference between prices in list
Keep running max of profit

Time Complexity: O(n)
'''

def maxProfit(prices):
    l = 0
    r = len(prices) - 1
    maxProfit = 0
    while l < r:
        profit = prices[r] - prices[l]
        if profit > maxProfit:
            maxProfit = profit

        if prices[l] > prices[r]:
            l += 1
        else:
            r -= 1

    return maxProfit

prices = [7,1,5,3,6,4]
print(maxProfit(prices))
# Output -> 5

prices = [7,6,4,3,1]
print(maxProfit(prices))
# Output -> 0