''''
use str.split() to convert string to list of tokens 
return length of last item in list

'''

def lengthOfLastWord(s):
    words = s.split()
    return len(words[-1])

s = "Hello World"
print(lengthOfLastWord(s))

s = "   fly me   to   the moon  "
print(lengthOfLastWord(s))

s = "luffy is still joyboy"
print(lengthOfLastWord(s))