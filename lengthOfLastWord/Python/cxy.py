def lengthOfLastWord(s):
 words=s.split()
 print('The last word is "'+ words[-1] +'" with length', len(words[-1]))

#test
s0 = "Hello World"
s1 = "   fly me   to   the moon  "
s2 = "luffy is still joyboy"

test0=lengthOfLastWord(s0)
test1=lengthOfLastWord(s1)
test2=lengthOfLastWord(s2)